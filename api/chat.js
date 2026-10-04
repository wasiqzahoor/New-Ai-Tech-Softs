import companyKnowledge from '../src/data/companyKnowledge.js';

const GROQ_API_KEY = process.env.GROQ_API_KEY;

// ---- Simple in-memory rate limiting: 20 requests / minute / IP ----
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60 * 1000;
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const hits = (requestLog.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.push(now);
  requestLog.set(ip, hits);
  // Prevent unbounded memory growth
  if (requestLog.size > 5000) {
    const oldest = [...requestLog.keys()].slice(0, 1000);
    oldest.forEach((k) => requestLog.delete(k));
  }
  return hits.length > RATE_LIMIT;
}

const MAX_MESSAGES = 20;
const MAX_MESSAGE_CHARS = 2000;

function sanitizeMessages(messages) {
  if (!Array.isArray(messages)) return null;
  const clean = [];
  for (const m of messages.slice(-MAX_MESSAGES)) {
    if (!m || typeof m.content !== 'string') continue;
    const role = m.role === 'user' ? 'user' : 'assistant';
    const content = m.content.slice(0, MAX_MESSAGE_CHARS);
    if (!content.trim()) continue;
    clean.push({ role, content });
  }
  return clean.length > 0 ? clean : null;
}

function buildSystemPrompt() {
  const k = companyKnowledge;
  return `You are a friendly, professional AI assistant for New Ai Tech Softs — a leading software house based in Islamabad, Pakistan. Your name is NTS Assistant. You help visitors learn about the company, its services, products, and how to get in touch.

RULES:
- ONLY answer questions about New Ai Tech Softs, its services, products, projects, team, pricing, process, and contact info.
- If asked about something unrelated, politely say you can only help with New Ai Tech Softs related queries.
- Keep answers concise (2-4 sentences max unless asked for detail).
- Be warm, professional, and helpful — like a real company representative.
- Always encourage visitors to reach out via WhatsApp or the contact page for detailed discussions.
- Never make up information. Only use the data provided below.
- If unsure, say "I'm not certain about that, but I'd recommend contacting our team directly at info@newaitechsofts.com or via WhatsApp."
- Support Roman Urdu if the user messages in Roman Urdu (Hinglish).

COMPANY INFO:
Name: ${k.company.name}
Tagline: ${k.company.tagline}
Type: ${k.company.type}
Website: ${k.company.website}
Founded: ${k.company.founded}
Stats: ${k.company.stats.experience} experience, ${k.company.stats.projects}, ${k.company.stats.clients}
Description: ${k.company.description}
Vision: ${k.company.vision}
Mission: ${k.company.mission}

CONTACT:
Email: ${k.contact.email}
WhatsApp: ${k.contact.whatsapp} (link: ${k.contact.whatsappLink})
Pakistan Office: ${k.contact.offices.pakistan}
UAE Office: ${k.contact.offices.uae}
Service Area: ${k.contact.serviceArea}
Social: LinkedIn, Facebook, Instagram — all @newaitechsofts

FOUNDER:
${k.founder.name} — ${k.founder.title}
Experience: ${k.founder.experience}
Expertise: ${k.founder.expertise.join(', ')}
Quote: "${k.founder.quote}"

TEAM:
${k.team.map(m => `${m.name} — ${m.role}`).join('\n')}

SERVICES (15):
${k.services.map(s => `- ${s.name}: ${s.description} (Tools: ${s.tools.join(', ')})`).join('\n')}

PRODUCTS (7):
${k.products.map(p => `- ${p.name}: ${p.description} (Free: ${p.free ? 'Yes' : 'No'}, URL: ${p.url})`).join('\n')}

FEATURED PROJECTS:
${k.featuredProjects.map(p => `- ${p.title} (${p.client}): ${p.description}`).join('\n')}

PROCESS:
${k.process.map((p, i) => `${i + 1}. ${p}`).join('\n')}

TESTIMONIALS:
${k.testimonials.map(t => `- ${t.name} (${t.role}): "${t.review}"`).join('\n')}`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, stream } = req.body;

    const clientIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
    if (isRateLimited(clientIp)) {
      return res.status(429).json({ error: 'Too many requests. Please wait a moment and try again.' });
    }

    const cleanMessages = sanitizeMessages(messages);
    if (!cleanMessages) {
      return res.status(400).json({ error: 'Valid messages array is required' });
    }

    if (!GROQ_API_KEY) {
      console.error('Chat API error: GROQ_API_KEY is not configured');
      return res.status(503).json({ error: 'AI service is not configured. Please contact us at info@newaitechsofts.com' });
    }

    const systemPrompt = buildSystemPrompt();

    const apiMessages = [
      { role: 'system', content: systemPrompt },
      ...cleanMessages
    ];

    if (stream) {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-20b',
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 1024,
          stream: true
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('Groq API error:', errText);
        return res.status(502).json({ error: 'AI service unavailable', details: errText });
      }

      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          res.write(chunk);
        }
      } catch (err) {
        console.error('Stream error:', err);
      } finally {
        res.end();
      }
    } else {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-20b',
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 1024
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('Groq API error:', errText);
        return res.status(502).json({ error: 'AI service unavailable', details: errText });
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';

      return res.status(200).json({ reply, usage: data.usage });
    }
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}
