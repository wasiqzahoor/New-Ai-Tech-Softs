import companyKnowledge from '../src/data/companyKnowledge.js';

const GROQ_API_KEY = process.env.GROQ_API_KEY;

function buildSystemPrompt() {
  const k = companyKnowledge;
  return `You are a friendly, professional AI assistant for New Tech Softs — a leading software house based in Islamabad, Pakistan. Your name is NTS Assistant. You help visitors learn about the company, its services, products, and how to get in touch.

RULES:
- ONLY answer questions about New Tech Softs, its services, products, projects, team, pricing, process, and contact info.
- If asked about something unrelated, politely say you can only help with New Tech Softs related queries.
- Keep answers concise (2-4 sentences max unless asked for detail).
- Be warm, professional, and helpful — like a real company representative.
- Always encourage visitors to reach out via WhatsApp or the contact page for detailed discussions.
- Never make up information. Only use the data provided below.
- If unsure, say "I'm not certain about that, but I'd recommend contacting our team directly at info@newtechsofts.com or via WhatsApp."
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
Social: LinkedIn, Facebook, Instagram — all @newtechsofts

FOUNDER:
${k.founder.name} — ${k.founder.title}
Experience: ${k.founder.experience}
Expertise: ${k.founder.expertise.join(', ')}
Quote: "${k.founder.quote}"

TEAM:
${k.team.map(m => `${m.name} — ${m.role}`).join('\n')}

SERVICES (12):
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

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const systemPrompt = buildSystemPrompt();

    const apiMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.slice(-20)
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
