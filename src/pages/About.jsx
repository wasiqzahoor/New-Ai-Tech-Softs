import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaCode } from 'react-icons/fa';
import logo from '../assets/logo.webp';
import Team from '../components/Team';
import CTASection from '../components/CTA_About';
import VisionMissionGoals from '../components/VisionMissionGoals';

const About = () => {

  const steps = [
    { number: "01", title: "Discovery", desc: "Understanding your business goals and project requirements in depth." },
    { number: "02", title: "Strategy & Design", desc: "Crafting a custom roadmap and intuitive UI/UX prototypes." },
    { number: "03", title: "Development", desc: "Writing clean, scalable code using the latest tech stacks." },
    { number: "04", title: "Quality Assurance", desc: "Rigorous testing to ensure a bug-free and seamless experience." },
    { number: "05", title: "Deployment", desc: "Launching your product and providing post-launch support." }
  ];

  return (
    <div className="text-white min-h-screen pt-24 pb-12 overflow-hidden">
      <Helmet>
        <title>About New Ai Tech Softs | Our Mission, Vision & Team</title>
        <meta name="description" content="Learn more about New Ai Tech Softs, a leading software house in Islamabad expanding across the USA & UK. Discover our mission, our professional team, and how we deliver innovative software solutions." />
        <meta name="keywords" content="about New Ai Tech Softs, software house Islamabad, software company USA, web development UK, our team, mission, vision, IT company Pakistan, web development company" />
        <meta name="author" content="New Ai Tech Softs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://newaitechsofts.com/about" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newaitechsofts.com/about" />
        <meta property="og:title" content="About New Ai Tech Softs | Our Mission, Vision & Team" />
        <meta property="og:description" content="Learn more about New Ai Tech Softs, a leading software house in Islamabad expanding across the USA & UK. Discover our mission, our professional team, and how we deliver innovative software solutions." />
        <meta property="og:image" content="https://newaitechsofts.com/logo.webp" />
        <meta property="og:site_name" content="New Ai Tech Softs" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://newaitechsofts.com/about" />
        <meta name="twitter:title" content="About New Ai Tech Softs | Our Mission, Vision & Team" />
        <meta name="twitter:description" content="Learn more about New Ai Tech Softs, a leading software house in Islamabad expanding across the USA & UK. Discover our mission, our professional team, and how we deliver innovative software solutions." />
        <meta name="twitter:image" content="https://newaitechsofts.com/logo.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About New Ai Tech Softs",
            "description": "Learn more about New Ai Tech Softs, a leading software house in Islamabad expanding across the USA & UK. Discover our mission, our professional team, and how we deliver innovative software solutions.",
            "url": "https://newaitechsofts.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "New Ai Tech Softs",
              "url": "https://newaitechsofts.com/",
              "logo": "https://newaitechsofts.com/logo.webp",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Chaudhary Wasiq Zahoor"
              },
              "address": [
                {
                  "@type": "PostalAddress",
                   "streetAddress": "DHA Phase 5, Islamabad",
                  "addressLocality": "Islamabad",
                  "addressCountry": "PK"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Street 10, Building 15, Industrial Area 10, Near Al Madinah Hyper Market",
                  "addressLocality": "Sharjah",
                  "addressCountry": "AE"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/newaitechsofts",
                "https://www.facebook.com/newaitechsofts/",
                "https://www.instagram.com/newaitechsofts/"
              ]
            }
          })}
        </script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-mid/10 border border-brand-mid/20">
              <span className="text-brand-mid font-bold uppercase tracking-widest text-xs font-heading">Leading Software House in Islamabad</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-black text-white leading-[1.1]">
              New Ai Tech Softs (Pvt) Ltd: <span className="text-brand-mid">Pioneering Digital Innovation</span>
            </h1>

            <div className="space-y-6 text-white/60 text-lg leading-relaxed font-body">
              <p className="font-medium">
                As a top-tier <span className="text-white font-bold">software house in Islamabad</span>, we don't just build software; we engineer precise, scalable solutions for complex business challenges. 
              </p>
              <p>
                We are a team of visionary developers, designers, and strategists. Our expertise in <span className="text-white">MERN stack development</span>, custom <span className="text-white">mobile applications</span>, and AI-driven solutions bridges the gap between your concept and reality.
              </p>
              <p>
                With a growing global footprint, we are now bringing our software, AI, automation, web, app, and digital solutions to businesses across the <span className="text-white font-semibold">USA and UK</span>.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-mid/10 flex items-center justify-center text-brand-mid">
                  <FaCheckCircle />
                </div>
                <span className="text-sm font-semibold text-white font-heading">High-Performance Code</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-mid/10 flex items-center justify-center text-brand-mid">
                  <FaCheckCircle />
                </div>
                <span className="text-sm font-semibold text-white font-heading">Scalable Architecture</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Glass Info Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-white/[0.08] backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/[0.12] shadow-xl overflow-hidden group">
              <div className="relative z-20 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="p-4 bg-gradient-to-r from-brand-mid to-purple-600 rounded-2xl text-white text-3xl shadow-lg shadow-brand-mid/20">
                    <FaCode />
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-black text-white font-heading">100+</p>
                    <p className="text-xs text-brand-mid font-bold uppercase tracking-tighter font-heading">Successful Projects</p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <p className="text-white/60 italic text-lg leading-relaxed font-body">
                  "We transform complexity into simplicity. Our mission at New Ai Tech Softs is to accelerate your digital growth with secure, efficient, and future-proof technology."
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    <img src={logo} alt="New Ai Tech Softs Logo" className="rounded-[5%]" />
                  </div>
                  <div>
                    <p className="text-white font-bold font-heading">New Ai Tech Softs</p>
                    <p className="text-xs text-white/40 font-body">Your Innovation Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- NAME TRANSITION NOTICE --- */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-8 text-center"
        >
          <p className="text-brand-cyan font-heading font-bold uppercase tracking-widest text-xs mb-3">Company Update</p>
          <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-3">
            Previously Known as New Tech Soft
          </h2>
          <p className="text-white/50 font-body text-sm leading-relaxed max-w-2xl mx-auto">
            Our company now officially operates as <span className="text-white font-semibold">New AI Tech Softs (SMC-Private) Limited</span>. If you knew us as New Tech Soft, please note that we are the same business under our new registered name.{' '}
            <Link to="/blog/new-tech-soft-to-new-ai-tech-softs" className="text-brand-cyan hover:underline font-semibold">
              Read the full story →
            </Link>
          </p>
        </motion.div>
      </section>

      {/* --- SECTION 2: VISION, MISSION & GOALS --- */}
      <VisionMissionGoals />

      {/* --- SECTION 3: OUR TEAM --- */}
      <Team />
      
      {/* --- SECTION 4: OUR DEVELOPMENT PROCESS --- */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-white"
            >
              How We <span className="text-brand-mid">Make it Happen</span>
            </motion.h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg font-body">
              Our systematic approach ensures every project is delivered with precision and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group p-6 bg-white/[0.08] backdrop-blur-xl rounded-2xl border border-white/[0.12] shadow-xl hover:border-brand-mid/20 transition-all duration-300"
              >
                <div className="text-5xl font-black text-brand-mid/20 mb-4 group-hover:text-brand-mid/40 transition-colors font-heading">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-body">{step.desc}</p>
                
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/10 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;