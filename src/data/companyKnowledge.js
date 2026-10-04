// companyKnowledge.js - Structured company data for AI chatbot
// This file is the single source of truth for chatbot knowledge

const companyKnowledge = {
  company: {
    name: "New Ai Tech Softs",
    legalName: "NEW AI TECH SOFTS (SMC-PRIVATE) LIMITED",
    previousName: "New Tech Soft",
    tagline: "Build. Grow. Automate. Scale.",
    type: "Software House",
    website: "https://newaitechsofts.com",
    founded: 2024,
    stats: {
      experience: "5+ Years",
      projects: "100+ Projects Delivered",
      clients: "50+ Happy Clients"
    },
    description: "New Ai Tech Softs is a leading software house in Islamabad, Pakistan that provides web development, mobile app development, AI automation, cloud solutions, digital marketing, and custom software development services for modern businesses worldwide. The company is actively expanding its presence across the USA and UK, bringing its digital solutions to businesses in these markets.",
    vision: "To be the globally trusted partner for digital transformation — setting new benchmarks in innovation and technology.",
    mission: "Empower businesses with cutting-edge solutions that drive sustainable growth and operational efficiency.",
    promise: ["100% confidentiality", "Technical response within 24 hours", "Enterprise-grade encryption for project data"]
  },

  contact: {
    email: "info@newaitechsofts.com",
    whatsapp: "+923415287464",
    whatsappLink: "https://wa.me/923415287464",
    phone: "+923415287464",
    offices: {
      pakistan: "DHA Phase 5, Islamabad, Pakistan",
      uae: "Street 10, Building 15, Industrial Area 10, Near Al Madinah Hyper Market, Sharjah, UAE"
    },
    social: {
      linkedin: "https://www.linkedin.com/company/newaitechsofts",
      facebook: "https://www.facebook.com/newaitechsofts/",
      instagram: "https://www.instagram.com/newaitechsofts/"
    },
    serviceArea: "Pakistan, UAE, and actively expanding across the USA & UK"
  },

  founder: {
    name: "Chaudhary Wasiq Zahoor",
    title: "CEO & Founder",
    location: "Islamabad, Pakistan",
    experience: "3-5 years in building digital products",
    expertise: ["Full Stack Development", "AI Engineering", "React.js", "Next.js", "Node.js", "Python", "Flutter"],
    linkedin: "https://www.linkedin.com/in/chaudhary-wasiq-zahoor-bbab952b0/",
    github: "https://github.com/wasiqzahoor",
    quote: "Technology should solve real problems. At New Ai Tech Softs, we don't just write code — we craft digital experiences that make a difference."
  },

  team: [
    { name: "Chaudhary Wasiq Zahoor", role: "Founder & CEO" },
    { name: "Nafeesa Arshad", role: "Project Manager" },
    { name: "Warda Riffat", role: "Full Stack Developer" },
    { name: "Muhammad Musa", role: "AI Engineer" },
    { name: "Malik Imran", role: "Graphic Designer" },
    { name: "Areeba Wazeer", role: "Human Resources" }
  ],

  services: [
    {
      name: "Web Development",
      slug: "web-development",
      tagline: "The Digital Core",
      description: "Build fast, responsive and SEO-optimized websites using React, Next.js, Node.js and the MERN stack.",
      features: ["Custom SaaS Platforms", "Next.js & MERN Stack", "Enterprise Portals", "Headless CMS", "E-commerce Solutions", "Progressive Web Apps"],
      tools: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "PostgreSQL"],
      timeline: "4-12 weeks depending on complexity"
    },
    {
      name: "Mobile App Development",
      slug: "mobile-app-development",
      tagline: "Innovation in Hand",
      description: "Create powerful cross-platform mobile apps for iOS and Android using Flutter and React Native.",
      features: ["Flutter Cross-Platform", "React Native Apps", "Native iOS & Android", "App Store Optimization", "Push Notifications", "Offline Support"],
      tools: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
      pricing: "Starting from $5,000 for MVP"
    },
    {
      name: "UI/UX Design",
      slug: "ui-ux-design",
      tagline: "Visual Excellence",
      description: "Craft intuitive, visually stunning UI/UX designs that convert visitors into loyal customers.",
      features: ["User Research & Testing", "Wireframing & Prototyping", "Design Systems", "Interactive UI Designs", "Accessibility Design"],
      tools: ["Figma", "Adobe XD", "Sketch"]
    },
    {
      name: "AI Chatbots & AI Agents",
      slug: "ai-chatbots-agents",
      tagline: "Smart Automation",
      description: "Deploy intelligent AI chatbots and agents that automate customer support, sales and operations.",
      features: ["Custom AI Chatbots", "AI Voice Agents", "Workflow Automation", "NLP Integration", "Multi-Platform Deployment"],
      tools: ["OpenAI", "LangChain", "Python", "RAG Pipeline"],
      accuracy: "90-95% accuracy with RAG-based chatbots"
    },
    {
      name: "SaaS Development",
      slug: "saas-development",
      tagline: "Scale Without Limits",
      description: "Build complete SaaS products from MVP to enterprise-grade platforms.",
      features: ["Multi-Tenant Architecture", "Subscription & Billing", "Role-Based Access Control", "API Development", "Analytics Dashboards"],
      tools: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      timeline: "6-10 weeks for MVP"
    },
    {
      name: "Digital Marketing",
      slug: "digital-marketing",
      tagline: "Targeted Visibility",
      description: "Drive qualified traffic and conversions with data-driven digital marketing.",
      features: ["Technical SEO Audit", "Content Strategy & SEO", "Google Ads & PPC", "Social Media Marketing", "Email Automation"],
      tools: ["Google Analytics", "SEMrush", "Ahrefs", "Google Ads"],
      timeline: "3-6 months for significant SEO results"
    },
    {
      name: "Cloud & DevOps",
      slug: "cloud-devops",
      tagline: "Secure Scaling",
      description: "Deploy scalable cloud infrastructure with automated CI/CD pipelines for 99.9% uptime.",
      features: ["AWS & Azure Architecture", "Docker Containerization", "CI/CD Pipelines", "Kubernetes Orchestration", "Security Hardening"],
      tools: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"]
    },
    {
      name: "Desktop Application Development",
      slug: "desktop-application-development",
      tagline: "Powerful Desktop Solutions",
      description: "Build fast, reliable desktop applications for Windows, macOS and Linux.",
      features: ["Cross-Platform Desktop Apps", "Real-Time Data Processing", "Offline-First Architecture", "Database Integration", "Auto-Update Systems"],
      tools: ["Electron", "Tauri", "Python", "C#", ".NET"]
    },
    {
      name: "Graphic Designing",
      slug: "graphic-designing",
      tagline: "Visual Storytelling",
      description: "Create stunning visual identities and marketing graphics.",
      features: ["Logo & Brand Identity", "Marketing Collateral", "Social Media Graphics", "Packaging Design", "Presentation Design"],
      tools: ["Photoshop", "Illustrator", "InDesign", "Figma"]
    },
    {
      name: "Video Editing",
      slug: "video-editing",
      tagline: "Motion That Captivates",
      description: "Transform raw footage into compelling stories with professional video editing.",
      features: ["YouTube Video Editing", "Social Media Reels", "Corporate Videos", "Motion Graphics", "Color Grading"],
      tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"]
    },
    {
      name: "UGC Video Ads",
      slug: "ugc-video-ads",
      tagline: "Scroll-Stopping Ads",
      description: "Authentic UGC-style ads, product videos and reels scripted, shot and edited for TikTok, Reels, Shorts and Meta ads.",
      features: ["UGC Ads", "Product Videos", "Reels & Shorts", "Promo Videos", "Brand Stories", "Ad Creatives"],
      tools: ["Premiere Pro", "After Effects", "CapCut", "TikTok Ads Manager", "Meta Ads"]
    },
    {
      name: "Shopify Store Development",
      slug: "shopify-store-development",
      tagline: "Sell Online Faster",
      description: "High-converting custom Shopify stores with optimized themes, checkout, app integrations and migration.",
      features: ["Custom Shopify Themes", "Product Page Optimization", "Checkout Optimization", "App Integrations", "Store Migration", "Speed Optimization"],
      tools: ["Shopify", "Shopify Plus", "Liquid", "Klaviyo", "Google Analytics"]
    },
    {
      name: "Shopify Marketing",
      slug: "shopify-marketing",
      tagline: "Traffic That Converts",
      description: "Grow Shopify stores with Meta/TikTok ads, email flows, Shopify SEO, UGC creatives and CRO audits.",
      features: ["Meta & TikTok Ads", "Email & SMS Flows", "Shopify SEO", "UGC Ad Creatives", "CRO Audits", "Google Shopping Ads"],
      tools: ["Meta Ads", "TikTok Ads Manager", "Klaviyo", "Google Ads", "CapCut"]
    },
    {
      name: "IT Solutions & Consulting",
      slug: "it-solutions-consulting",
      tagline: "Strategic Tech Partner",
      description: "Expert IT consulting to align technology with business goals.",
      features: ["Digital Transformation", "IT Strategy & Roadmap", "System Architecture Design", "Vendor Evaluation", "Process Automation"],
      tools: ["Notion", "Miro", "Jira"]
    },
    {
      name: "Technical Support Services",
      slug: "technical-support-services",
      tagline: "Always On, Always Ready",
      description: "24/7 technical support to keep systems running.",
      features: ["24/7 Help Desk Support", "Bug Fix & Patch Management", "Server Monitoring", "Performance Optimization", "Security Incident Response"],
      tools: ["Zendesk", "Jira Service Desk", "Datadog"],
      responseTime: "Critical: under 15 min, High: under 1 hour, Standard: under 4 hours"
    }
  ],

  products: [
    { name: "BG.Remover", description: "AI-powered background removal tool. Remove backgrounds from images instantly.", url: "https://bgremover.newtechsofts.com", category: "AI Tools", free: true },
    { name: "QRify", description: "Custom QR code generator with logo embedding and color customization.", url: "https://qrify.newtechsofts.com", category: "Utilities", free: true },
    { name: "PDF Swift", description: "All-in-one PDF toolkit — compress, merge, split, and convert PDFs.", url: "https://pdfswift.newtechsofts.com", category: "Utilities", free: true },
    { name: "Image Morph", description: "Fast image format converter supporting PNG, JPG, WebP and more.", url: "https://imagemorph.newtechsofts.com", category: "Utilities", free: true },
    { name: "Image Enhancer", description: "AI-powered image upscaling up to 4x with noise reduction.", url: "https://pixelforge.newtechsofts.com", category: "AI Tools", free: true },
    { name: "File Forge", description: "File conversion tool for PDF, Word, Excel and more.", url: "https://fileforge.newtechsofts.com", category: "Utilities", free: true },
    { name: "CodeSnap", description: "Code-to-image generator with syntax highlighting and 3D effects.", url: "https://codesnap.newtechsofts.com", category: "Developer Tools", free: true }
  ],

  featuredProjects: [
    { title: "EverCeutical Website", client: "EverCeutical", type: "Premium Website", description: "Korean exosome biotechnology company website redesign", url: "https://everceutical.com/" },
    { title: "NovaSky Distributors", client: "NovaSky Distributors", type: "E-Commerce Platform", description: "Multi-category distribution platform with WhatsApp ordering", url: "https://novaskydistributors.com/" },
    { title: "Biglou's Optimizer", client: "Biglou's Optimizations", type: "Full Stack Web App", description: "PC optimization software platform with Stripe payments", url: "https://biglousoptimizations.com/" },
    { title: "The AI Chicks Website", client: "The AI Chicks", type: "AI-Powered Website", description: "Business website with AI chatbot integration", url: "https://www.theaichicks.com/" },
    { title: "Gods Angle Scholarship", client: "Gods Angle Foundation", type: "Full Stack Platform", description: "Scholarship discovery platform for students worldwide", url: "https://gods-angels.com/" }
  ],

  testimonials: [
    { name: "Sarah Jenkins", role: "CEO, FinTech Solutions", review: "New Ai Tech Softs transformed our outdated system into a high-speed, modern platform. Their AI integration saved us 40% in operational costs." },
    { name: "David Ahmed", role: "Founder, E-Com Masters", review: "The best software house in Islamabad hands down. They understood our vision perfectly and delivered the mobile app before the deadline." },
    { name: "Elena Rostova", role: "CTO, Global Logistics", review: "Professional, skilled, and communicative. Their web development team created a stunning UI that increased our user engagement by 200%." },
    { name: "Michael Chen", role: "Director, TechFlow", review: "Impressive technical expertise. They solved a complex backend issue that other agencies couldn't handle." }
  ],

  process: [
    "Discovery — Understanding your business goals and project requirements",
    "Strategy & Design — Crafting a custom roadmap and intuitive UI/UX prototypes",
    "Development — Writing clean, scalable code using the latest tech stacks",
    "Quality Assurance — Rigorous testing to ensure a bug-free experience",
    "Deployment — Launching your product and providing post-launch support"
  ]
};

export default companyKnowledge;
