// servicesData.js - Complete Service Data

export const services = [
  {
    id: 1,
    slug: "web-development",
    title: "Web Development",
    tagline: "The Digital Core",
    shortDesc: "Build fast, responsive and SEO-optimized websites using React, Next.js, Node.js and the MERN stack. We develop custom web applications, SaaS platforms, e-commerce stores and enterprise portals that rank higher on Google and convert more visitors into customers.",
    description: "We architect robust, high-performance web applications tailored to your business. Our focus is on clean code, security, and exceptional user engagement. From custom SaaS platforms to enterprise portals, we deliver solutions that scale with your vision — now serving clients across the USA and UK.",
    icon: "FaReact",
    color: "cyan",
    features: ["Custom SaaS Platforms", "Next.js & MERN Stack", "Enterprise Portals", "Headless CMS Solutions", "E-commerce Solutions", "Progressive Web Apps"],
    tools: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "PostgreSQL", "Redis"],
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800"
    ],
    process: [
      { step: "Discovery", desc: "We analyze your business requirements, target audience, and goals to create a comprehensive project roadmap." },
      { step: "Planning", desc: "Our team designs the architecture, selects the right tech stack, and creates detailed wireframes." },
      { step: "Development", desc: "Agile development with regular sprint demos, ensuring transparency and quality at every stage." },
      { step: "Testing", desc: "Rigorous QA testing including unit, integration, and performance testing before deployment." },
      { step: "Deployment", desc: "Seamless deployment with CI/CD pipelines, followed by ongoing support and maintenance." }
    ],
    faqs: [
      { q: "How long does a web project take?", a: "Typically 4-12 weeks depending on complexity. We provide detailed timelines during the discovery phase." },
      { q: "Do you provide maintenance?", a: "Yes, we offer ongoing maintenance packages including updates, security patches, and feature additions." },
      { q: "What tech stack do you recommend?", a: "We recommend based on your specific needs - typically React/Next.js for frontend and Node.js for backend." }
    ]
  },
  {
    id: 2,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Innovation in Hand",
    shortDesc: "Create powerful cross-platform mobile apps for iOS and Android using Flutter and React Native. We build feature-rich applications with smooth UI, push notifications, payment integrations and app store optimization — delivering native-like performance from a single codebase.",
    description: "We build high-performance mobile applications that users love. Whether you need a cross-platform solution with Flutter or native apps for iOS and Android, we deliver pixel-perfect experiences that engage and retain your audience.",
    icon: "FaMobileAlt",
    color: "blue",
    features: ["Flutter Cross-Platform", "React Native Apps", "Native iOS & Android", "App Store Optimization", "Push Notifications", "Offline Support"],
    tools: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Dart", "iOS SDK", "Android SDK"],
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800"
    ],
    process: [
      { step: "Strategy", desc: "Define your app's core features, target platforms, and user journey mapping." },
      { step: "UI/UX Design", desc: "Create intuitive, beautiful interfaces with prototyping and user testing." },
      { step: "Development", desc: "Cross-platform or native development with clean, maintainable code." },
      { step: "QA Testing", desc: "Device testing, performance optimization, and security auditing." },
      { step: "Launch", desc: "App store submission, optimization, and post-launch support." }
    ],
    faqs: [
      { q: "Native or cross-platform?", a: "Cross-platform (Flutter/React Native) for cost efficiency; native for performance-critical apps." },
      { q: "How much does an app cost?", a: "Starting from $5,000 for MVP. Complex apps range $15,000-$50,000+." },
      { q: "Do you handle app store submission?", a: "Yes, we handle the entire submission process for both iOS and Android stores." }
    ]
  },
  {
    id: 3,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Visual Excellence",
    shortDesc: "Craft intuitive, visually stunning UI/UX designs that convert visitors into loyal customers. We deliver user research, wireframing, prototyping, design systems and interactive interfaces using Figma — ensuring every pixel serves a business purpose.",
    description: "We craft intuitive, visually stunning interfaces that make technology accessible and enjoyable. Our design process is rooted in user research, ensuring every pixel serves a purpose and every interaction delights your users.",
    icon: "FaFigma",
    color: "purple",
    features: ["User Research & Testing", "Wireframing & Prototyping", "Design Systems", "Interactive UI Designs", "Accessibility Design", "Responsive Layouts"],
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "Principle", "After Effects"],
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800"
    ],
    process: [
      { step: "Research", desc: "Understanding your users through interviews, surveys, and competitive analysis." },
      { step: "Wireframing", desc: "Low-fidelity prototypes to establish layout and user flow." },
      { step: "Visual Design", desc: "High-fidelity mockups with your brand identity and design system." },
      { step: "Prototyping", desc: "Interactive prototypes for user testing and stakeholder review." },
      { step: "Handoff", desc: "Developer-ready assets with detailed design specifications." }
    ],
    faqs: [
      { q: "Do you redesign existing products?", a: "Yes, we offer UX audits and complete redesigns for existing products." },
      { q: "How many revisions are included?", a: "Typically 2-3 rounds of revisions are included in our design packages." },
      { q: "Do you create design systems?", a: "Yes, we create comprehensive design systems for scalable products." }
    ]
  },
  {
    id: 4,
    slug: "ai-chatbots-agents",
    title: "AI Chatbots & AI Agents",
    tagline: "Smart Automation",
    shortDesc: "Deploy intelligent AI chatbots and agents that automate customer support, sales and operations. We build RAG-powered chatbots, WhatsApp automation, workflow AI and custom LLM integrations — reducing costs by 40-70% while delivering 24/7 instant responses.",
    description: "We build custom AI chatbots and intelligent agents that transform how your business operates. From customer support automation to complex workflow agents, our AI solutions reduce costs by 40-70% while delivering 24/7 instant responses.",
    icon: "FaRobot",
    color: "pink",
    features: ["Custom AI Chatbots", "AI Voice Agents", "Workflow Automation", "NLP Integration", "Multi-Platform Deployment", "Knowledge Base Training"],
    tools: ["OpenAI", "LangChain", "Python", "RAG Pipeline", "Pinecone", "Dialogflow", "Hugging Face", "Next.js"],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800"
    ],
    process: [
      { step: "Use Case Analysis", desc: "Identify where AI can deliver the highest ROI for your business." },
      { step: "Data Preparation", desc: "Structure your knowledge base, FAQs, and training data." },
      { step: "Model Training", desc: "Fine-tune AI models on your specific domain and brand voice." },
      { step: "Integration", desc: "Deploy across website, WhatsApp, Slack, or custom platforms." },
      { step: "Optimization", desc: "Continuous learning from conversations to improve accuracy." }
    ],
    faqs: [
      { q: "How accurate are AI chatbots?", a: "Our RAG-based chatbots achieve 90-95% accuracy by using your verified knowledge base." },
      { q: "Can AI handle complex queries?", a: "Yes, our AI agents can handle multi-step workflows, escalate to humans, and learn from interactions." },
      { q: "What platforms do you support?", a: "Website widgets, WhatsApp Business API, Slack, Telegram, Microsoft Teams, and custom APIs." }
    ]
  },
  {
    id: 5,
    slug: "saas-development",
    title: "SaaS Development",
    tagline: "Scale Without Limits",
    shortDesc: "Build complete SaaS products from MVP to enterprise-grade platforms. We handle multi-tenant architecture, subscription billing with Stripe, role-based access, analytics dashboards and scalable cloud infrastructure on AWS.",
    description: "We build complete SaaS products from scratch - multi-tenant architecture, subscription billing, role-based access, and scalable infrastructure. Whether you're launching an MVP or scaling an enterprise platform, we handle the entire product lifecycle.",
    icon: "FaCode",
    color: "green",
    features: ["Multi-Tenant Architecture", "Subscription & Billing", "Role-Based Access Control", "API Development", "Analytics Dashboards", "White-Label Solutions"],
    tools: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker", "Redis", "GraphQL"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800"
    ],
    process: [
      { step: "Product Strategy", desc: "Define MVP features, pricing model, and go-to-market roadmap." },
      { step: "Architecture Design", desc: "Multi-tenant, scalable architecture with security-first approach." },
      { step: "Core Development", desc: "Build authentication, billing, dashboard, and core features." },
      { step: "Beta Launch", desc: "Deploy to staging, gather feedback, iterate on core features." },
      { step: "Scale", desc: "Production deployment, monitoring, and continuous feature delivery." }
    ],
    faqs: [
      { q: "How long to build an MVP?", a: "Typically 6-10 weeks for a production-ready MVP with core features." },
      { q: "Do you handle payment integration?", a: "Yes, we integrate Stripe, PayPal, or custom billing with subscriptions and invoicing." },
      { q: "Can you build white-label solutions?", a: "Yes, we build multi-tenant SaaS platforms with full white-label customization." }
    ]
  },
  {
    id: 6,
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Targeted Visibility",
    shortDesc: "Drive qualified traffic and conversions with data-driven digital marketing. We deliver technical SEO audits, content strategy, Google Ads PPC campaigns, social media marketing and email automation — with transparent monthly reporting.",
    description: "We combine technical SEO, content marketing, and paid advertising to drive qualified traffic and conversions. Our approach focuses on sustainable, long-term growth with transparent reporting and measurable results every month.",
    icon: "FaSearch",
    color: "orange",
    features: ["Technical SEO Audit", "Content Strategy & SEO", "Google Ads & PPC", "Social Media Marketing", "Email Automation", "Analytics & Reporting"],
    tools: ["Google Analytics", "SEMrush", "Ahrefs", "Google Ads", "Meta Ads", "Mailchimp", "Hotjar", "HubSpot"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800"
    ],
    process: [
      { step: "Audit", desc: "Comprehensive analysis of your current SEO performance and competitor landscape." },
      { step: "Strategy", desc: "Custom marketing roadmap with keyword research and content planning." },
      { step: "Execution", desc: "On-page SEO, content creation, ad campaigns, and social media management." },
      { step: "Optimization", desc: "A/B testing, conversion optimization, and bid adjustments." },
      { step: "Reporting", desc: "Monthly performance reports with actionable insights and recommendations." }
    ],
    faqs: [
      { q: "How long until I see SEO results?", a: "SEO is a long-term strategy. Most clients see significant improvements in 3-6 months." },
      { q: "What's the minimum ad budget?", a: "We recommend at least $1,000/month for Google Ads to generate meaningful data." },
      { q: "Do you guarantee rankings?", a: "No one can guarantee rankings. We focus on proven strategies that deliver sustainable results." }
    ]
  },
  {
    id: 7,
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Secure Scaling",
    shortDesc: "Deploy scalable cloud infrastructure with automated CI/CD pipelines for 99.9% uptime. We provide AWS and Azure architecture, Docker containerization, Kubernetes orchestration, security hardening and infrastructure monitoring.",
    description: "We architect and manage cloud infrastructure that scales with your business. From AWS and Azure to Docker and Kubernetes, we ensure your applications run reliably with automated deployments, monitoring, and robust security practices.",
    icon: "FaAws",
    color: "blue",
    features: ["AWS & Azure Architecture", "Docker Containerization", "CI/CD Pipelines", "Kubernetes Orchestration", "Infrastructure Monitoring", "Security Hardening"],
    tools: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Prometheus"],
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800"
    ],
    process: [
      { step: "Assessment", desc: "Evaluate your current infrastructure and identify optimization opportunities." },
      { step: "Architecture", desc: "Design scalable, secure cloud architecture tailored to your needs." },
      { step: "Migration", desc: "Seamless migration with zero downtime and data integrity." },
      { step: "Automation", desc: "Implement CI/CD pipelines and infrastructure as code." },
      { step: "Monitoring", desc: "Set up comprehensive monitoring, alerting, and incident response." }
    ],
    faqs: [
      { q: "Which cloud provider is best?", a: "Depends on your needs. AWS for scalability, Azure for enterprise, GCP for AI/ML workloads." },
      { q: "How do you ensure security?", a: "We follow cloud security best practices including encryption, IAM, network policies, and regular audits." },
      { q: "Can you reduce our cloud costs?", a: "Yes, most clients see 30-50% cost reduction through right-sizing, reserved instances, and optimization." }
    ]
  },
  {
    id: 8,
    slug: "desktop-application-development",
    title: "Desktop Application Development",
    tagline: "Powerful Desktop Solutions",
    shortDesc: "Build fast, reliable desktop applications for Windows, macOS and Linux using Electron, Tauri and .NET. We develop inventory systems, trading platforms and enterprise software with offline-first architecture and auto-update capabilities.",
    description: "We develop high-performance desktop applications that run seamlessly across Windows, macOS, and Linux. From inventory management systems to real-time trading platforms, we build software that handles complex workflows with offline-first capabilities and lightning-fast performance.",
    icon: "FaDesktop",
    color: "yellow",
    features: ["Cross-Platform Desktop Apps", "Real-Time Data Processing", "Offline-First Architecture", "Database Integration", "Auto-Update Systems", "Native OS Integration"],
    tools: ["Electron", "Tauri", "Python", "C#", ".NET", "WPF", "JavaFX", "SQLite"],
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"
    ],
    process: [
      { step: "Requirements", desc: "Understand your workflow, target OS, and performance requirements." },
      { step: "Architecture", desc: "Choose the right framework and design the application architecture." },
      { step: "Development", desc: "Build with native performance, clean UI, and offline capabilities." },
      { step: "Testing", desc: "Cross-platform testing, performance profiling, and security auditing." },
      { step: "Distribution", desc: "Package, code sign, and distribute with auto-update mechanisms." }
    ],
    faqs: [
      { q: "Which framework do you use?", a: "Electron for feature-rich apps, Tauri for lightweight performance, or native C#/.NET for Windows-only." },
      { q: "Can you migrate web apps to desktop?", a: "Yes, we can wrap existing web applications or rebuild them natively for desktop." },
      { q: "Do you support auto-updates?", a: "Yes, all our desktop apps come with built-in auto-update and version management." }
    ]
  },
  {
    id: 9,
    slug: "graphic-designing",
    title: "Graphic Designing",
    tagline: "Visual Storytelling",
    shortDesc: "Create stunning visual identities and marketing graphics that captivate audiences. We design logos, brand guidelines, social media creatives, packaging, presentations and infographics using Photoshop, Illustrator and Figma.",
    description: "We create eye-catching designs that tell your brand story. From logos and brand identities to marketing collateral and social media graphics, our design team delivers creative solutions that stand out in crowded markets and leave lasting impressions.",
    icon: "FaPalette",
    color: "red",
    features: ["Logo & Brand Identity", "Marketing Collateral", "Social Media Graphics", "Packaging Design", "Presentation Design", "Infographic Design"],
    tools: ["Photoshop", "Illustrator", "InDesign", "Canva Pro", "After Effects", "Blender", "Figma"],
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800"
    ],
    process: [
      { step: "Brief", desc: "Understanding your brand, target audience, and design objectives." },
      { step: "Concept", desc: "Multiple creative concepts and mood boards for your review." },
      { step: "Design", desc: "Refining the chosen concept into polished, production-ready designs." },
      { step: "Delivery", desc: "All file formats - print-ready, web-optimized, and source files." }
    ],
    faqs: [
      { q: "How many logo concepts do you provide?", a: "We provide 3-5 unique concepts in the initial round, with revisions included." },
      { q: "What file formats will I receive?", a: "AI, EPS, SVG, PNG, JPG, and PDF - both print-ready and web-optimized versions." },
      { q: "Do you offer brand guidelines?", a: "Yes, we create comprehensive brand guidelines including color palette, typography, and usage rules." }
    ]
  },
  {
    id: 10,
    slug: "video-editing",
    title: "Video Editing",
    tagline: "Motion That Captivates",
    shortDesc: "Transform raw footage into compelling stories with professional video editing. We produce YouTube content, social media reels, corporate videos, motion graphics and product demos using Premiere Pro, DaVinci Resolve and After Effects.",
    description: "We transform raw footage into compelling stories. From YouTube content and social media reels to corporate videos and product demos, our editors deliver cinematic quality with engaging transitions, color grading, and motion graphics that keep viewers hooked.",
    icon: "FaVideo",
    color: "indigo",
    features: ["YouTube Video Editing", "Social Media Reels", "Corporate Videos", "Motion Graphics", "Color Grading", "Audio Mixing & Mastering"],
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects", "CapCut", "Audition", "Blender", "Cinema 4D"],
    images: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800"
    ],
    process: [
      { step: "Footage Review", desc: "Analyze raw footage, select best shots, and plan the edit structure." },
      { step: "Rough Cut", desc: "Initial edit with basic transitions, timing, and story flow." },
      { step: "Color & Sound", desc: "Professional color grading, audio mixing, and sound design." },
      { step: "Motion Graphics", desc: "Add titles, lower thirds, transitions, and animated elements." },
      { step: "Final Delivery", desc: "Export in any format - 4K, vertical, horizontal, with thumbnails." }
    ],
    faqs: [
      { q: "What video lengths do you handle?", a: "From 15-second reels to 2-hour documentaries. We handle any length and format." },
      { q: "Do you add subtitles?", a: "Yes, we add subtitles in any language with proper timing and styling." },
      { q: "What's the turnaround time?", a: "Typically 2-5 days for standard edits, 7-14 days for complex motion graphics projects." }
    ]
  },
  {
    id: 11,
    slug: "it-solutions-consulting",
    title: "IT Solutions & Consulting",
    tagline: "Strategic Tech Partner",
    shortDesc: "Get expert IT consulting to align technology with your business goals. We provide digital transformation strategy, system architecture design, vendor evaluation, tech stack planning and process automation consulting.",
    description: "We act as your strategic technology partner, helping you navigate complex IT decisions. From digital transformation and system architecture to vendor selection and tech stack planning, we provide actionable consulting that saves time, reduces costs, and accelerates growth.",
    icon: "FaCogs",
    color: "teal",
    features: ["Digital Transformation", "IT Strategy & Roadmap", "System Architecture Design", "Vendor Evaluation", "Tech Stack Selection", "Process Automation"],
    tools: ["Notion", "Miro", "Jira", "Confluence", "Figma", "Lucidchart", "Draw.io", "Google Workspace"],
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800"
    ],
    process: [
      { step: "Assessment", desc: "Audit your current IT infrastructure, workflows, and pain points." },
      { step: "Strategy", desc: "Develop a tailored IT roadmap aligned with your business objectives." },
      { step: "Architecture", desc: "Design scalable system architecture and technology stack." },
      { step: "Implementation", desc: "Oversee or directly implement the recommended solutions." },
      { step: "Optimization", desc: "Continuous monitoring and iterative improvements for maximum ROI." }
    ],
    faqs: [
      { q: "When do I need IT consulting?", a: "When you're scaling, facing technical bottlenecks, choosing between tech options, or undergoing digital transformation." },
      { q: "Do you work with startups or enterprises?", a: "Both. We tailor our consulting approach based on your company size, budget, and growth stage." },
      { q: "Can you take over our IT department?", a: "We offer fractional CTO services and can manage your entire tech function as an extended team." }
    ]
  },
  {
    id: 12,
    slug: "technical-support-services",
    title: "Technical Support Services",
    tagline: "Always On, Always Ready",
    shortDesc: "Get 24/7 technical support to keep your systems running smoothly. We provide help desk support, bug fixes, server monitoring, performance optimization, security incident response and SLA-based support.",
    description: "We provide round-the-clock technical support to ensure your applications and infrastructure never skip a beat. From bug fixes and performance optimization to monitoring and incident response, our dedicated support team keeps your business running without interruptions.",
    icon: "FaHeadset",
    color: "emerald",
    features: ["24/7 Help Desk Support", "Bug Fix & Patch Management", "Server Monitoring & Alerts", "Performance Optimization", "Security Incident Response", "SLA-Based Support"],
    tools: ["Zendesk", "Jira Service Desk", "Datadog", "Grafana", "PagerDuty", "Slack", "GitHub Issues", "Freshdesk"],
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"
    ],
    process: [
      { step: "Onboarding", desc: "Set up support channels, escalation paths, and SLA agreements." },
      { step: "Monitoring", desc: "Proactive monitoring of your systems with automated alerts." },
      { step: "Response", desc: "Instant response to tickets with priority-based resolution." },
      { step: "Resolution", desc: "Fast bug fixes, patches, and system optimizations." },
      { step: "Reporting", desc: "Weekly/monthly support reports with uptime metrics and trends." }
    ],
    faqs: [
      { q: "What are your support hours?", a: "We offer 24/7 support for critical issues and business-hours support for standard queries." },
      { q: "What's your average response time?", a: "Critical issues: under 15 minutes. High priority: under 1 hour. Standard: under 4 hours." },
      { q: "Do you support third-party software?", a: "Yes, we provide support for your entire tech stack including third-party integrations and APIs." }
    ]
  },
  {
    id: 13,
    slug: "ugc-video-ads",
    title: "UGC Video Ads",
    tagline: "Scroll-Stopping Ads",
    shortDesc: "Authentic UGC-style ads, product videos and reels that stop the scroll and sell. We script, shoot and edit high-converting videos for TikTok, Instagram Reels, YouTube Shorts and Meta ads — built around hook, proof and CTA frameworks.",
    description: "We create authentic, high-converting UGC video ads that feel native to every feed. From concept and scripting to shooting, editing, captions and ad-ready variants — our videos are engineered around proven direct-response frameworks: strong hooks, social proof, and clear calls to action that turn viewers into customers.",
    icon: "FaVideo",
    color: "red",
    features: ["UGC Ads", "Product Videos", "Reels & Shorts", "Promo Videos", "Brand Stories", "Ad Creatives"],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut", "TikTok Ads Manager", "Meta Ads"],
    images: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800",
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800"
    ],
    process: [
      { step: "Concept & Script", desc: "We research your product, audience and competitors, then write scroll-stopping scripts built on hook, proof and CTA frameworks." },
      { step: "Shoot Direction", desc: "Authentic UGC-style shoots with creators, product close-ups and real-use scenarios that feel native to every platform." },
      { step: "Edit & Captions", desc: "Fast-paced edits with captions, motion graphics, sound design and color grading optimized for sound-off viewing." },
      { step: "Ad Variants", desc: "Multiple hooks, formats and aspect ratios (9:16, 1:1, 16:9) so you can test and scale winning creatives." },
      { step: "Launch & Iterate", desc: "We help you launch on TikTok, Reels, Shorts and Meta ads — then iterate on performance data to keep improving ROAS." }
    ],
    faqs: [
      { q: "What is UGC advertising?", a: "UGC (User-Generated Content) ads look like authentic customer videos instead of polished commercials. They consistently outperform traditional ads on TikTok, Reels and Meta." },
      { q: "How many videos do I get?", a: "Packages start from 4 videos per month. Each video includes multiple hook variants and platform-ready formats." },
      { q: "Do you handle posting and ad management?", a: "We deliver ready-to-post videos, and can also manage your TikTok, Meta and Google ad campaigns as an add-on service." }
    ]
  },
  {
    id: 14,
    slug: "shopify-store-development",
    title: "Shopify Store Development",
    tagline: "Sell Online Faster",
    shortDesc: "Launch a high-converting Shopify store designed to sell from day one. We build custom Shopify themes, product pages, checkout optimization, app integrations and migration from WooCommerce or custom platforms — everything your online store needs to grow.",
    description: "We design and develop custom Shopify stores that turn visitors into repeat customers. From pixel-perfect themes and mobile-first product pages to checkout optimization, payment gateways, shipping setup and third-party app integrations — we handle the complete store build so you can focus on selling.",
    icon: "FaShopify",
    color: "emerald",
    features: ["Custom Shopify Themes", "Product Page Optimization", "Checkout Optimization", "App Integrations", "Store Migration", "Speed Optimization"],
    tools: ["Shopify", "Shopify Plus", "Liquid", "Klaviyo", "Judge.me", "Replo", "Google Analytics"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800"
    ],
    process: [
      { step: "Discovery", desc: "We study your products, customers and competitors to plan a store structure built for conversions." },
      { step: "Design", desc: "Custom, mobile-first theme design matching your brand with conversion-focused layouts." },
      { step: "Development", desc: "Theme build, product setup, collections, payment gateways, shipping and app integrations." },
      { step: "Optimization", desc: "Speed optimization, checkout flow improvements and analytics setup before launch." },
      { step: "Launch & Support", desc: "Store launch with testing, staff training and ongoing support as you scale." }
    ],
    faqs: [
      { q: "How long does a Shopify store take to build?", a: "A standard store takes 2-4 weeks. Custom Plus builds with migrations take 4-8 weeks." },
      { q: "Can you migrate my existing store to Shopify?", a: "Yes, we migrate products, customers, orders and content from WooCommerce, Wix, Magento or custom platforms without losing SEO rankings." },
      { q: "Do you provide ongoing store maintenance?", a: "Yes, we offer maintenance plans covering updates, new features, CRO improvements and priority support." }
    ]
  },
  {
    id: 15,
    slug: "shopify-marketing",
    title: "Shopify Marketing",
    tagline: "Traffic That Converts",
    shortDesc: "Grow your Shopify store with marketing that actually drives sales. We run Meta and TikTok ads, email and SMS flows, SEO for product pages, UGC ad creatives and CRO audits — a complete growth engine for your online store.",
    description: "We turn Shopify stores into growth machines. Our marketing combines paid advertising (Meta, TikTok, Google Shopping), lifecycle email and SMS, product-page SEO, scroll-stopping UGC creatives and continuous conversion rate optimization — all measured against one metric: profitable revenue growth for stores in the USA, UK, and beyond.",
    icon: "FaBullhorn",
    color: "teal",
    features: ["Meta & TikTok Ads", "Email & SMS Flows", "Shopify SEO", "UGC Ad Creatives", "CRO Audits", "Google Shopping Ads"],
    tools: ["Meta Ads", "TikTok Ads Manager", "Klaviyo", "Google Ads", "Triple Whale", "Hotjar", "CapCut"],
    images: [
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800",
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800"
    ],
    process: [
      { step: "Audit", desc: "Deep CRO and analytics audit of your store, ads and funnels to find the biggest growth leaks." },
      { step: "Strategy", desc: "A prioritized growth roadmap across paid ads, email, SEO and creatives with clear revenue targets." },
      { step: "Creatives", desc: "UGC ads, product videos and ad variants produced in-house for every campaign." },
      { step: "Launch", desc: "Campaigns launched across Meta, TikTok and Google with structured testing." },
      { step: "Scale", desc: "Winners scaled, losers killed. Weekly reporting and continuous CRO improvements." }
    ],
    faqs: [
      { q: "What ad budget do I need?", a: "We recommend starting from $1,000/month ad spend for meaningful testing. Our management fee is separate and depends on scope." },
      { q: "Do you only work with Shopify stores?", a: "Shopify is our specialty, but we also market WooCommerce and custom e-commerce stores." },
      { q: "How fast will I see results?", a: "Paid ads show initial data in 2-4 weeks. Email flows and SEO compound over 2-3 months for lasting growth." }
    ]
  }
];

export const serviceIcons = {
  "FaReact": "Web",
  "FaMobileAlt": "Mobile",
  "FaFigma": "Design",
  "FaRobot": "AI",
  "FaSearch": "Marketing",
  "FaAws": "Cloud"
};
