import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

const GROQ_API_KEY = process.env.GROQ_API_KEY

function chatApiPlugin() {
  return {
    name: 'chat-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.writeHead(405, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        try {
          let body = ''
          for await (const chunk of req) body += chunk
          const { messages } = JSON.parse(body)

          if (!GROQ_API_KEY) {
            res.writeHead(503, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'AI service is not configured (missing GROQ_API_KEY)' }))
            return
          }

          if (!Array.isArray(messages) || messages.length === 0) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Valid messages array is required' }))
            return
          }

          const systemPrompt = `You are a friendly, professional AI assistant for New Ai Tech Softs — a leading software house in Islamabad, Pakistan. Your name is NTS Assistant. You help visitors learn about the company, its services, products, and how to get in touch.

RULES:
- ONLY answer questions about New Ai Tech Softs, its services, products, projects, team, pricing, process, and contact info.
- If asked about something unrelated, politely say you can only help with New Ai Tech Softs related queries.
- Keep answers concise (2-4 sentences max unless asked for detail).
- Be warm, professional, and helpful.
- Always encourage visitors to reach out via WhatsApp or the contact page.
- Never make up information. Only use the data provided below.
- Support Roman Urdu if the user messages in Roman Urdu.

COMPANY: New Ai Tech Softs — Software House in Islamabad, Pakistan. Tagline: "Build. Grow. Automate. Scale." Founded 2024. 5+ years experience, 100+ projects, 50+ clients.
CONTACT: Email: info@newaitechsofts.com, WhatsApp: +923415287464, Pakistan Office: DHA Phase 5 Islamabad, UAE Office: Sharjah.
FOUNDER: Chaudhary Wasiq Zahoor — CEO & Founder, Full Stack Developer & AI Engineer.
SERVICES (15): Web Development, Mobile App Development, UI/UX Design, AI Chatbots & Agents, SaaS Development, Digital Marketing, Cloud & DevOps, Desktop App Development, Graphic Designing, Video Editing, UGC Video Ads, Shopify Store Development, Shopify Marketing, IT Solutions & Consulting, Technical Support Services.
PRODUCTS (7): BG.Remover (AI bg removal), QRify (QR codes), PDF Swift (PDF toolkit), Image Morph (image converter), Image Enhancer (AI upscaling), File Forge (file converter), CodeSnap (code screenshots). All free at newaitechsofts.com subdomains.
PROCESS: 1.Discovery 2.Strategy & Design 3.Development 4.QA 5.Deployment.`

          const apiMessages = [
            { role: 'system', content: systemPrompt },
            ...messages.slice(-20).filter((m) => m && typeof m.content === 'string').map((m) => ({
              role: m.role === 'user' ? 'user' : 'assistant',
              content: m.content.slice(0, 2000),
            }))
          ]

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
          })

          if (!response.ok) {
            const errText = await response.text()
            console.error('Groq API error:', response.status, errText)
            res.writeHead(502, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'AI service unavailable', details: errText }))
            return
          }

          const data = await response.json()
          const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.'

          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ reply }))
        } catch (error) {
          console.error('Chat API error:', error)
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Internal server error', message: error.message }))
        }
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
   build: {
    // Split big vendor libs into separate cached chunks so repeat
    // visits download much less (long-term browser caching)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('react')) return 'vendor';
        },
      },
    },
  },
  plugins: [
    react(),
    chatApiPlugin(),
    Sitemap({
      hostname: 'https://newaitechsofts.com',
      dynamicRoutes: [
        // Static Pages
        '/about',
        '/services',
        '/portfolio',
        '/contact',
        '/products',
        '/product/bg-remover',
        '/product/qrify-qr-code-generator',
        '/product/pdf-swift',
        '/product/image-morph',
        '/product/image-enhancer',
        '/product/file-forge',
        '/product/codesnap',
        '/privacy',
        '/terms',
        '/blog',
        // Services
        '/service/web-development',
        '/service/mobile-app-development',
        '/service/ui-ux-design',
        '/service/ai-chatbots-agents',
        '/service/saas-development',
        '/service/digital-marketing',
        '/service/cloud-devops',
        '/service/desktop-application-development',
        '/service/graphic-designing',
        '/service/video-editing',
        '/service/it-solutions-consulting',
        '/service/technical-support-services',
        '/service/ugc-video-ads',
        '/service/shopify-store-development',
        '/service/shopify-marketing',
        // Portfolio Projects
        '/project/everceutical-website-redesign',
        '/project/novasky-distributors-website',
        '/project/biglous-optimizer-website',
        '/project/biglous-tweaking-optimizer',
        '/project/bg-remover',
        '/project/pdf-swift',
        '/project/image-morph',
        '/project/pixel-forge',
        '/project/file-forge',
        '/project/qrify-qr-code-generator',
        '/project/mern-enterprise-portal',
        '/project/react-job-portal',
        '/project/codesnap',
        '/project/nts-management-system',
        '/project/newaitechsofts-official-website',
        '/project/the-ai-chicks-website',
        '/project/ai-image-detection-app',
        '/project/ai-video-analysis-detection',
        '/project/ai-real-time-object-detection',
        '/project/ai-health-analyzer',
        '/project/ai-play-music-with-emotions',
        '/project/ai-assistant',
        '/project/gods-angle-scholarship-website',
        '/project/bionature-ecommerce-website',
        '/project/vesco-science-website',
        '/project/nanoventera-website',
        '/project/edulearn-lms',
        '/project/blogsphere-blog-platform',
        // Blog Posts
        '/blog/novasky-distributors-digital-transformation-case-study',
        '/blog/bionature-complete-digital-presence-case-study',
        '/blog/vesco-science-korean-biotech-website-case-study',
        '/blog/nanoventera-exosome-website-case-study',
        '/blog/everceutical-website-redesign-case-study',
        '/blog/meet-chaudhary-wasiq-zahoor',
        '/blog/saas-development-2026-mvp-to-enterprise',
        '/blog/how-ai-solutions-are-transforming-businesses',
        '/blog/it-consulting-strategic-technology-partner',
        '/blog/revolutionizing-digital-solutions-journey',
        '/blog/why-mern-stack-unrivaled-choice-startups-2026',
        '/blog/rise-of-cross-platform-flutter-react-native',
        '/blog/seo-digital-marketing-secret-sauce-growth',
        '/blog/beyond-aesthetics-strategic-web-design',
        '/blog/ai-first-web-development-revolutionizing-business',
        '/blog/cross-platform-apps-best-choice-startups-2026',
        '/blog/new-tech-soft-to-new-ai-tech-softs',
        '/blog/optimizing-web-performance-developers-guide-2026',
        '/blog/custom-software-solutions-business-growth',
        '/blog/securing-digital-presence-cybersecurity-best-practices',
      ],
      exclude: [
        '/404',
      ],
      robots: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin/', '/api/'],
        },
      ],
      sitemapStylesheet: [
        {
          type: 'text/xml',
          href: '/sitemap.xsl',
        },
      ],
    })
  ]
})
