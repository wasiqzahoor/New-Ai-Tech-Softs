import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaCode, FaLaptopCode, FaMobileAlt, FaReact, FaNodeJs, FaPython, FaCheckCircle, FaAndroid, FaVuejs, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaJava, FaSwift, FaAws, FaDocker, FaGitAlt, FaClock, FaGem, FaHeadset, FaBriefcase } from 'react-icons/fa';
import { SiFlutter, SiMongodb, SiMysql, SiFirebase, SiNextdotjs, SiTailwindcss, SiDjango, SiPostgresql } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Reviews from '../components/Reviews';
import HowWeWork from '../components/HowWeWork';
import { blogData } from '../data/blogData';
import FounderSection from '../components/FounderSection';
import Brands from '../components/Brands';
import UgcAds from '../components/UgcAds';
import Recognized from '../components/Recognized';
<<<<<<< HEAD
=======
import AuditPopup from '../components/AuditPopup';
>>>>>>> 47bc71e (add new features1)
import { ugcVideos } from '../data/ugcVideos';
import FAQs from '../components/FAQs';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const buttonVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.6 }
  }
};

const colorMap = {
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
  green: { bg: 'bg-green-500/10', text: 'text-green-400' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-400' },
  pink: { bg: 'bg-pink-500/10', text: 'text-pink-400' },
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400' },
  red: { bg: 'bg-red-500/10', text: 'text-red-400' },
  teal: { bg: 'bg-teal-500/10', text: 'text-teal-400' },
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Perf: hero background video only on desktop — saves ~5.5MB on mobile
  const [showHeroVideo, setShowHeroVideo] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e) => setShowHeroVideo(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  const projectImages = [
    'https://res.cloudinary.com/dwhj8qfca/image/upload/f_webp/v1776867745/SS1_gyr3jr.png',
    'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/f_webp/v1776867745/SS2_rqihi6.png',
    'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/f_webp/v1776867746/SS3_bhi1nj.png',
    'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/f_webp/v1776867746/SS4_pdxz4x.png',
    'https://res.cloudinary.com/dwhj8qfca/image/upload/q_auto/f_auto/f_webp/v1776867746/SS5_i3i0vz.png',
  ];

  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [projectImages.length]);

  const caseStudyDesc = "Struggling with system lag and frame drops? Our team developed BigLou's Optimizer to provide the ultimate PC performance boost. This advanced system utility is tailored to eliminate bottlenecks by lowering input latency and optimizing RAM and CPU allocation.";

  return (
    <div className="overflow-hidden min-h-screen">
      <Helmet>
        <title>New Ai Tech Softs | Web Development, SEO, Digital Marketing & AI Automation</title>
        <meta name="description" content="New Ai Tech Softs provides complete digital solutions for modern businesses - web development, SEO services, digital marketing, AI automation, e-commerce, cloud solutions, and creative services. Now expanding across the USA & UK. Build. Grow. Automate. Scale." />
        <meta name="keywords" content="web development, SEO services, digital marketing, AI automation, e-commerce development, cloud solutions, web development company, SEO agency, digital marketing agency, New Ai Tech Softs" />
        <meta name="author" content="New Ai Tech Softs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://newaitechsofts.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newaitechsofts.com/" />
        <meta property="og:title" content="New Ai Tech Softs | Complete Digital Solutions for Modern Businesses" />
        <meta property="og:description" content="Complete digital solutions for modern businesses - web development, SEO, digital marketing, AI automation, e-commerce, cloud, and creative services." />
        <meta property="og:image" content="https://newaitechsofts.com/logo.webp" />
        <meta property="og:site_name" content="New Ai Tech Softs" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://newaitechsofts.com/" />
        <meta name="twitter:title" content="New Ai Tech Softs | Complete Digital Solutions for Modern Businesses" />
        <meta name="twitter:description" content="Complete digital solutions for modern businesses - web development, SEO, digital marketing, AI automation, e-commerce, cloud, and creative services." />
        <meta name="twitter:image" content="https://newaitechsofts.com/logo.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "New Ai Tech Softs",
            "url": "https://newaitechsofts.com/",
            "description": "Complete digital solutions for modern businesses including web development, SEO, digital marketing, AI automation, e-commerce, and cloud solutions.",
            "publisher": {
              "@type": "Organization",
              "name": "New Ai Tech Softs",
              "url": "https://newaitechsofts.com/",
              "logo": { "@type": "ImageObject", "url": "https://newaitechsofts.com/logo.webp" },
              "description": "Complete digital growth and technology partner for modern businesses."
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "New Ai Tech Softs",
            "url": "https://newaitechsofts.com/",
            "logo": "https://newaitechsofts.com/logo.webp",
            "image": "https://newaitechsofts.com/logo.webp",
            "description": "Complete digital solutions for modern businesses - web development, SEO, digital marketing, AI automation, e-commerce, cloud solutions.",
            "address": [
              {
                "@type": "PostalAddress",
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
            "founder": {
              "@type": "Person",
              "name": "Chaudhary Wasiq Zahoor",
              "jobTitle": "CEO & Founder"
            },
            "sameAs": [
              "https://www.linkedin.com/company/newaitechsofts",
              "https://www.facebook.com/newaitechsofts/",
              "https://www.instagram.com/newaitechsofts/"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "UGC Video Ads by New Ai Tech Softs",
            "description": "Authentic UGC-style video ads, product videos and reels created by New Ai Tech Softs for TikTok, Reels, Shorts and Meta ads.",
            "itemListElement": ugcVideos.map((v, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "VideoObject",
                "name": v.caption,
                "description": v.sub,
                "contentUrl": `https://newaitechsofts.com${v.src}`,
                "thumbnailUrl": "https://newaitechsofts.com/logo.webp",
                "uploadDate": "2026-10-03",
                "publisher": {
                  "@type": "Organization",
                  "name": "New Ai Tech Softs",
                  "logo": { "@type": "ImageObject", "url": "https://newaitechsofts.com/logo.webp" }
                }
              }
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services do you offer?",
                "acceptedAnswer": { "@type": "Answer", "text": "We specialize in full-stack web development, mobile app development (Flutter/React Native), and digital solutions for modern businesses." }
              },
              {
                "@type": "Question",
                "name": "How does the design process work?",
                "acceptedAnswer": { "@type": "Answer", "text": "Our process includes research, UI/UX design, iterative development, and thorough testing to ensure the best results." }
              },
              {
                "@type": "Question",
                "name": "How long does a project usually take?",
                "acceptedAnswer": { "@type": "Answer", "text": "Timelines vary based on complexity, but we utilize agile methods to ensure timely and efficient delivery." }
              },
              {
                "@type": "Question",
                "name": "What do I need to provide before starting a project?",
                "acceptedAnswer": { "@type": "Answer", "text": "Typically, we need information about your business goals, branding assets, and any specific content like text or images." }
              },
              {
                "@type": "Question",
                "name": "Do you offer revisions?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, we work closely with you to ensure the final product aligns perfectly with your vision and requirements." }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative text-white pt-24 pb-28 md:pt-20 md:pb-36 overflow-hidden">
<<<<<<< HEAD
        {/* Video background */}
=======
        {/* Video background (desktop only) */}
        {showHeroVideo && (
>>>>>>> 47bc71e (add new features1)
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="/bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
<<<<<<< HEAD
=======
        )}
>>>>>>> 47bc71e (add new features1)
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1e]/70 via-[#0a0a1e]/60 to-[#0a0a1e] pointer-events-none" />
        {/* Decorative floating spheres */}
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-brand-cyan rounded-full opacity-60 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-brand-mid rounded-full opacity-50 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-purple-400 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-ping"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 bg-brand-cyan/10 border border-brand-cyan/30 rounded-full pl-3 pr-5 py-2 mb-6 hover:bg-brand-cyan/20 hover:border-brand-cyan/50 transition-all duration-300 group/badge"
                >
                  <span className="relative flex w-2.5 h-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan"></span>
                  </span>
                  <span className="text-brand-cyan font-heading font-bold text-xs sm:text-sm tracking-wide">
                    🇺🇸🇬🇧 Now Serving &amp; Expanding Across the USA &amp; UK
                  </span>
                  <span className="text-brand-cyan transform group-hover/badge:translate-x-1 transition-transform duration-300">&rarr;</span>
                </Link>
              </motion.div>
              <motion.div 
                className="text-brand-cyan font-bold tracking-widest uppercase text-base lg:text-lg mb-4 flex flex-wrap justify-center lg:justify-start gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {"Build. Grow. Automate. Scale.".split(" ").map((word, index) => (
                  <motion.span key={index} variants={wordVariants}>{word}</motion.span>
                ))}
              </motion.div>

              <motion.h1 
                className="text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6 flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {"Build Smarter.".split(" ").map((word, index) => (
                  <motion.span key={index} variants={wordVariants}>{word}</motion.span>
                ))}
                <motion.span 
                  variants={wordVariants}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400"
                >
                  Scale Faster.
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-white/60 text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-body"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                New Ai Tech Softs helps businesses build a powerful digital presence, attract more customers, automate repetitive processes, and scale with modern technology. From web development and SEO to digital marketing, AI automation, e-commerce, cloud solutions, and creative services, we provide the technology and digital expertise your business needs to grow.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to="/contact">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-brand-mid to-purple-600 text-white px-8 py-3.5 rounded-full font-heading font-bold text-lg shadow-lg shadow-brand-mid/25 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                    <FaRocket /> Start Your Project
                  </button>
                </Link>
                <Link to="/services">
                  <button className="w-full sm:w-auto border border-white/20 text-white bg-white/[0.06] backdrop-blur-sm px-8 py-3.5 rounded-full font-heading font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <FaCode /> Explore Our Services
                  </button>
                </Link>
              </motion.div>

              {/* Trust line */}
              <motion.div 
                className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-white/40 font-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span>Web Development</span>
                <span className="hidden sm:inline">•</span>
                <span>SEO</span>
                <span className="hidden sm:inline">•</span>
                <span>Digital Marketing</span>
                <span className="hidden sm:inline">•</span>
                <span>AI Automation</span>
                <span className="hidden sm:inline">•</span>
                <span>E-commerce</span>
                <span className="hidden sm:inline">•</span>
                <span>Cloud</span>
              </motion.div>
            </div>

            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-8 transform rotate-2 hover:rotate-0 transition duration-500 group hover:bg-white/[0.12] hover:border-white/[0.2] hover:shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-3 font-mono text-sm group-hover:scale-105 transition duration-300">
                  <p className="text-brand-mid">const <span className="text-brand-cyan font-bold">NewAiTech</span> = {"{"}</p>
                  <p className="pl-4 text-white/60">mission: <span className="text-green-400">'Innovate'</span>,</p>
                  <p className="pl-4 text-white/60">services: [<span className="text-green-400">'Web'</span>, <span className="text-green-400">'SEO'</span>, <span className="text-green-400">'AI'</span>, <span className="text-green-400">'Marketing'</span>],</p>
                  <p className="pl-4 text-white/60">status: <span className="text-blue-400">true</span></p>
                  <p className="text-brand-mid">{"}"};</p>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl p-4 rounded-xl flex items-center gap-3 animate-bounce">
                  <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-bold uppercase">Projects Completed</p>
                    <p className="text-lg font-bold text-white">100+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service quick-link cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-14 relative z-10"
          >
            {[
              { title: 'E-Commerce', desc: 'Stores, CRO audits & growth.', to: '/services' },
              { title: 'Website Development', desc: 'Business sites & web apps.', to: '/service/web-development' },
              { title: 'UI/UX & Design', desc: 'Branding & interfaces.', to: '/service/ui-ux-design' },
              { title: 'Advertising & Video Ads', desc: 'UGC ads, reels & promos.', to: '/service/ugc-video-ads' },
              { title: 'Digital & Social Marketing', desc: 'Ads, SEO & social growth.', to: '/service/digital-marketing' },
            ].map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="group bg-white rounded-2xl p-5 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-blue-950 font-heading font-bold text-base leading-snug">
                  {card.title}{' '}
                  <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                </p>
                <p className="text-slate-500 text-sm font-body mt-1.5">{card.desc}</p>
              </Link>
            ))}
          </motion.div>
        </div>
        {/* Smoke fade where hero video ends */}
        <div className="absolute bottom-0 left-0 right-0 h-44 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1e] via-[#0a0a1e]/40 to-transparent" />
          <div className="absolute -bottom-12 left-[15%] w-[28rem] h-36 bg-white/[0.08] blur-3xl rounded-full" />
          <div className="absolute -bottom-12 right-[15%] w-[28rem] h-36 bg-brand-cyan/10 blur-3xl rounded-full" />
        </div>
      </section>

      {/* TECH STACK STRIP */}
      <div className="pt-24 pb-16 md:pt-12 md:pb-5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 mb-12 relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-brand-cyan text-sm font-heading font-bold uppercase tracking-[0.2em] mb-3"
          >
            Our Technology Stack
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center text-4xl md:text-5xl font-heading font-bold text-white tracking-tight"
          >
            Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">Master</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center text-white/60 mt-4 max-w-2xl mx-auto font-body"
          >
            From cutting-edge frontends to robust backends — we build with the best.
          </motion.p>
        </div>

        <div className="relative w-full overflow-hidden py-8">


          <div className="flex gap-14 w-max animate-infinite-scroll hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-14 items-center px-4">
                <TechIcon icon={<FaReact />} color="text-brand-mid" glow="#8B5CF6" name="React" category="Frontend" />
                <TechIcon icon={<SiNextdotjs />} color="text-white" glow="#ffffff" name="Next.js" category="Frontend" />
                <TechIcon icon={<FaVuejs />} color="text-green-400" glow="#22c55e" name="Vue.js" category="Frontend" />
                <TechIcon icon={<SiTailwindcss />} color="text-cyan-400" glow="#06b6d4" name="Tailwind" category="Frontend" />
                <TechIcon icon={<FaHtml5 />} color="text-orange-400" glow="#f97316" name="HTML5" category="Frontend" />
                <TechIcon icon={<FaCss3Alt />} color="text-blue-400" glow="#3b82f6" name="CSS3" category="Frontend" />
                <TechIcon icon={<FaJsSquare />} color="text-yellow-400" glow="#eab308" name="JavaScript" category="Frontend" />
                <TechIcon icon={<FaNodeJs />} color="text-green-400" glow="#22c55e" name="Node.js" category="Backend" />
                <TechIcon icon={<FaPhp />} color="text-purple-400" glow="#a855f7" name="PHP" category="Backend" />
                <TechIcon icon={<FaPython />} color="text-yellow-400" glow="#eab308" name="Python" category="Backend" />
                <TechIcon icon={<FaJava />} color="text-red-400" glow="#ef4444" name="Java" category="Backend" />
                <TechIcon icon={<SiDjango />} color="text-green-500" glow="#16a34a" name="Django" category="Backend" />
                <TechIcon icon={<SiMongodb />} color="text-green-400" glow="#22c55e" name="MongoDB" category="Database" />
                <TechIcon icon={<SiMysql />} color="text-blue-400" glow="#3b82f6" name="MySQL" category="Database" />
                <TechIcon icon={<SiPostgresql />} color="text-blue-400" glow="#60a5fa" name="PostgreSQL" category="Database" />
                <TechIcon icon={<SiFirebase />} color="text-yellow-400" glow="#eab308" name="Firebase" category="Database" />
                <TechIcon icon={<SiFlutter />} color="text-blue-400" glow="#3b82f6" name="Flutter" category="Mobile" />
                <TechIcon icon={<FaAndroid />} color="text-green-400" glow="#22c55e" name="Android" category="Mobile" />
                <TechIcon icon={<FaSwift />} color="text-orange-400" glow="#f97316" name="Swift" category="Mobile" />
                <TechIcon icon={<FaAws />} color="text-orange-400" glow="#f97316" name="AWS" category="Cloud" />
                <TechIcon icon={<FaDocker />} color="text-blue-400" glow="#3b82f6" name="Docker" category="DevOps" />
                <TechIcon icon={<FaGitAlt />} color="text-red-400" glow="#ef4444" name="Git" category="Tools" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RECOGNIZED AGENCY */}
      <Recognized />

      {/* DIGITAL GROWTH CHALLENGE SECTION */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight"
            >
              Your Business Needs More Than <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">Just a Website</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/60 mt-4 max-w-3xl mx-auto text-lg font-body leading-relaxed"
            >
              A website alone is not enough to build a successful digital business. Your brand needs visibility, traffic, engaging content, effective marketing, automation, strong customer experiences, and technology that supports long-term growth. New Ai Tech Softs brings these capabilities together under one team so businesses can build, grow, automate, and scale without managing multiple disconnected service providers.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-6 hover:border-brand-mid/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan text-xl mb-4">
                <FaRocket />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Build Your Digital Foundation</h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">Professional websites, e-commerce stores, applications and digital experiences designed around your business.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-6 hover:border-brand-mid/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 text-xl mb-4">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Grow Your Online Visibility</h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">SEO, social media marketing, paid advertising and content strategies designed to attract the right audience.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-6 hover:border-brand-mid/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-xl mb-4">
                <FaLaptopCode />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Automate Repetitive Work</h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">AI agents, WhatsApp automation, email workflows, lead automation and custom business processes.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-6 hover:border-brand-mid/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl mb-4">
                <FaGem />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Scale With Technology</h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">Cloud infrastructure, optimization, analytics and scalable digital systems designed for growing businesses.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight"
            >
              More Than a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">Software Company</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/60 mt-4 max-w-3xl mx-auto text-lg font-body leading-relaxed"
            >
              We combine technology, marketing, creativity and automation to help businesses solve real problems and create measurable digital growth. Instead of treating every service as a separate project, we look at the bigger picture of your business and build solutions that work together.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-6 hover:border-brand-mid/30 transition-all duration-300"
            >
              <h3 className="text-lg font-heading font-bold text-white mb-3">Business-First Approach</h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">We begin with your business goals, audience and challenges before recommending technology or marketing solutions.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-6 hover:border-brand-mid/30 transition-all duration-300"
            >
              <h3 className="text-lg font-heading font-bold text-white mb-3">End-to-End Digital Services</h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">From websites and SEO to digital marketing, AI automation, creative design and e-commerce, you can manage your digital growth through one experienced team.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-6 hover:border-brand-mid/30 transition-all duration-300"
            >
              <h3 className="text-lg font-heading font-bold text-white mb-3">Scalable Solutions</h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">We build digital solutions that can evolve as your business grows, whether you are launching a new brand or scaling an existing business.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-6 hover:border-brand-mid/30 transition-all duration-300"
            >
              <h3 className="text-lg font-heading font-bold text-white mb-3">Growth-Focused Execution</h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">Every website, campaign, automation and digital solution should have a clear purpose: improving visibility, efficiency, customer experience or business growth.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight"
            >
              Everything Your Business Needs to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">Grow Digitally</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white/60 mt-6 max-w-3xl mx-auto text-lg leading-relaxed font-body"
            >
              From your first website to advanced AI automation and digital marketing, New Ai Tech Softs provides end-to-end digital services designed around your business goals — supporting businesses locally while growing our presence across the USA & UK.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {[
              { icon: <FaLaptopCode />, title: "Web Development", desc: "Build fast, responsive and conversion-focused websites tailored to your business goals. We develop custom web applications, CMS platforms, e-commerce stores, SaaS dashboards and enterprise portals using React, Next.js, Node.js and the MERN stack — ensuring scalability, security and peak performance.", tags: ["Custom SaaS Platforms", "Next.js & MERN Stack", "Enterprise Portals"], color: "cyan" },
              { icon: <FaCheckCircle />, title: "SEO Services", desc: "Improve your search visibility and attract qualified organic traffic with comprehensive SEO strategies. We deliver technical SEO audits, on-page optimization, off-page link building, local SEO for Google Business Profile, content marketing and e-commerce SEO to help you rank higher and convert more visitors.", tags: ["Technical SEO Audits", "Local SEO & GBP", "E-commerce SEO"], color: "green" },
              { icon: <FaRocket />, title: "Digital Marketing", desc: "Reach the right audience through data-driven digital marketing campaigns. We manage social media advertising, Meta Ads, Google Ads, TikTok Ads, PPC campaigns, email marketing and conversion optimization — delivering measurable ROI and sustainable growth for your brand.", tags: ["Meta & Google Ads", "Social Media Growth", "Conversion Optimization"], color: "purple" },
              { icon: <FaLaptopCode />, title: "AI Automation & Agents", desc: "Automate repetitive business processes with intelligent AI solutions. We build AI-powered chatbots, WhatsApp automation workflows, lead qualification systems, customer support agents and custom AI integrations using LLMs, RAG architecture and machine learning — saving you time and reducing operational costs.", tags: ["AI Chatbots & RAG", "WhatsApp Automation", "Workflow AI"], color: "blue" },
              { icon: <FaGem />, title: "Cloud & IT Solutions", desc: "Deploy, manage and optimize your cloud infrastructure for maximum reliability and performance. We provide AWS and GCP cloud setup, server management, Docker containerization, CI/CD pipelines, DevOps automation and IT consulting to keep your digital operations running smoothly.", tags: ["AWS & GCP Cloud", "DevOps & CI/CD", "Server Management"], color: "orange" },
              { icon: <FaMobileAlt />, title: "Mobile App Development", desc: "Create powerful, cross-platform mobile applications for iOS and Android using Flutter and React Native. We build feature-rich apps for startups, enterprises and digital products — with clean UI, smooth performance, push notifications, payment integrations and app store deployment.", tags: ["Flutter Cross-Platform", "React Native Apps", "Native iOS & Android"], color: "pink" },
              { icon: <FaCode />, title: "Graphic Design & UI/UX", desc: "Create stunning visual identities and user experiences that strengthen your brand. We design logos, brand guidelines, marketing creatives, social media graphics, UI/UX prototypes, wireframes and interactive design systems that captivate users and drive engagement.", tags: ["Brand Identity Design", "UI/UX Prototyping", "Marketing Creatives"], color: "yellow" },
              { icon: <FaHeadset />, title: "Video Production & Editing", desc: "Bring your brand to life with professional video content. We produce promotional videos, social media reels, motion graphics, product demos, brand storytelling videos and YouTube content — with cinematic quality and engaging edits that capture attention.", tags: ["Promo Videos & Reels", "Motion Graphics", "Brand Storytelling"], color: "red" },
              { icon: <FaBriefcase />, title: "E-commerce & Dropshipping", desc: "Launch and scale your online store with end-to-end e-commerce solutions. We build Shopify stores, WooCommerce platforms, custom e-commerce apps, dropshipping setups, marketplace integrations and product listing optimization — backed by SEO and paid advertising to maximize sales.", tags: ["Shopify Development", "Dropshipping Setup", "Marketplace Integration"], color: "teal" },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:bg-[#1db9f6] hover:border-white/[0.15] transition-all duration-400 group cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${colorMap[service.color].bg} flex items-center justify-center ${colorMap[service.color].text} text-lg shrink-0 group-hover:scale-110 group-hover:bg-black/10 group-hover:text-black transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-white group-hover:text-black transition-colors duration-300">{service.title}</h3>
                  </div>
                </div>
                <p className="text-white/45 group-hover:text-black text-sm font-body leading-relaxed mb-5 line-clamp-4 transition-colors duration-300">{service.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="text-[11px] font-heading font-semibold text-white/40 bg-white/[0.05] border border-white/[0.06] rounded-lg px-3 py-1.5 group-hover:bg-black/10 group-hover:text-black group-hover:border-black/20 transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/services" className="flex items-center gap-2 text-brand-cyan group-hover:text-black text-sm font-heading font-bold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  Explore Service <span className="text-xs">→</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Link to="/services">
              <button className="group relative border border-white/20 text-brand-cyan bg-white/[0.06] backdrop-blur-sm px-10 py-4 rounded-full font-heading font-bold text-lg hover:bg-white/10 transition-all duration-300 shadow-lg flex items-center gap-3 mx-auto">
                Explore All Services
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* UGC VIDEO ADS */}
      <UgcAds />

      {/* FEATURED PROJECTS */}
      <section className="py-16 md:py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight"
            >
              Innovation in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">Action</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white/60 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-body"
            >
              Take a look at how we transform complex business challenges into intuitive digital success stories.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Project Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-video rounded-3xl overflow-hidden bg-white/[0.06] backdrop-blur-[20px] border border-white/[0.08] shadow-xl group"
            >
              <AnimatePresence mode='wait'>
                <motion.img
                  key={currentImg}
                  src={projectImages[currentImg]}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full object-contain p-3"
                  alt="Custom Web App Development by New Ai Tech Softs in Islamabad"
                />
              </AnimatePresence>
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* RIGHT: Content */}
            <div className="space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-brand-cyan font-heading font-bold uppercase tracking-[0.25em] text-xs mb-3">
                  Success Story
                </h3>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  BigLou's{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">
                    Optimizer
                  </span>
                </h2>
              </motion.div>

              {/* Fade-in description */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-white/55 text-base md:text-lg leading-relaxed font-body max-w-xl"
              >
                {caseStudyDesc}
              </motion.p>

              {/* Feature highlights */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                {[
                  { label: 'Lower Input Latency', accent: 'from-brand-cyan/20 to-transparent' },
                  { label: 'Optimized RAM & CPU', accent: 'from-purple-500/20 to-transparent' },
                  { label: 'High-FPS Performance', accent: 'from-blue-400/20 to-transparent' },
                ].map((feat, i) => (
                  <div
                    key={i}
                    className={`bg-gradient-to-br ${feat.accent} bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-xl px-4 py-3 text-center hover:border-white/[0.12] transition-all duration-400`}
                  >
                    <p className="text-white/70 text-xs font-heading font-semibold uppercase tracking-wider">{feat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-brand-mid to-purple-600 text-white px-8 py-3.5 rounded-xl font-heading font-bold text-sm shadow-lg shadow-brand-mid/25 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all"
                >
                  View Detailed Case Study →
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#0c0c14]/90 backdrop-blur-[24px] border border-white/[0.1] shadow-2xl p-8 md:p-10 rounded-3xl max-w-3xl w-full relative"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-6 w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/[0.1] flex items-center justify-center transition-all">&times;</button>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">BigLou's Optimizer: In-Depth</h2>
                <div className="text-white/55 space-y-4 max-h-[60vh] overflow-y-auto pr-4 font-body leading-relaxed">
                  <p>BigLou's Optimizer is a complete system overhaul utility developed by New Ai Tech Softs. Our solution addresses core Windows bottlenecks that impact competitive gaming.</p>
                  <p className="text-white font-semibold">Technical Highlights:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Deep kernel-level tweaks for reduced input lag.</li>
                    <li>Aggressive process management to free up RAM.</li>
                    <li>Safe, registry-level optimizations for maximum FPS stability.</li>
                  </ul>
                  <p>This project showcases our ability to deliver high-performance software, reduce system latency, and enhance overall OS efficiency.</p>
                </div>
                <a href="https://biglousoptimizations.com/" target="_blank" rel="noreferrer" className="mt-8 block text-center bg-gradient-to-r from-brand-mid to-purple-600 text-white py-4 rounded-xl font-heading font-bold shadow-lg shadow-brand-mid/25 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all">
                  Download the Software
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* BRANDS THAT TRUST US */}
      <Brands />

      {/* FOUNDER SECTION */}
      <FounderSection />

      {/* BLOGS SECTION */}
      <section className="py-20 md:py-28 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="mb-14 md:mb-20 max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-brand-cyan font-heading font-bold uppercase tracking-[0.3em] text-xs mb-4"
            >
              From Our Blog
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">
                Expert Insights
              </span>{' '}
              & Tech Trends
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white/50 mt-5 text-base md:text-lg font-body max-w-xl mx-auto"
            >
              Stay ahead with our latest analysis on software development, AI integration,
              and digital business transformation strategies.
            </motion.p>
          </div>

          {/* ── Masonry Grid ── */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
            {blogData.slice(0, 7).map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block relative rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid"
              >
                <motion.img
                  initial={{ opacity: 0, scale: 1.06 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  src={post.img}
                  alt={post.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="inline-block bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan text-[10px] font-heading font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2.5">
                    {post.category}
                  </span>
                  <h3 className="text-base md:text-lg font-heading font-bold text-white leading-snug group-hover:text-brand-cyan transition-colors duration-300 line-clamp-3">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* View All */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/blog">
              <button className="bg-white/[0.06] border border-white/[0.1] text-white/70 px-8 py-3 rounded-xl font-heading font-bold text-sm hover:bg-white/[0.1] hover:text-white hover:border-white/[0.2] transition-all duration-300">
                View All Articles →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <HowWeWork/>

      {/* SOLUTIONS SECTION */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight"
            >
              Solutions Built Around <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">Your Business Goals</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Build Your Digital Presence", desc: "For businesses that need a professional website, online store, brand identity or complete digital foundation.", icon: <FaRocket /> },
              { title: "Generate More Leads", desc: "Combine SEO, social media, paid advertising, landing pages and conversion optimization to attract potential customers.", icon: <FaCheckCircle /> },
              { title: "Automate Your Business", desc: "Use AI agents, WhatsApp automation, email workflows, lead automation and custom business processes to reduce repetitive work.", icon: <FaLaptopCode /> },
              { title: "Grow Your Online Store", desc: "Launch, optimize and market Shopify and e-commerce businesses through development, SEO and paid campaigns.", icon: <FaBriefcase /> },
              { title: "Strengthen Your Brand", desc: "Use graphic design, UI/UX, content and professional video production to create a consistent and recognizable brand.", icon: <FaGem /> },
              { title: "Scale Your Digital Operations", desc: "Use cloud infrastructure, automation, technology and optimization to support growing business operations.", icon: <FaHeadset /> },
            ].map((solution, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-6 hover:border-brand-mid/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan text-xl mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-white/50 text-sm font-body leading-relaxed">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Reviews/>
      <FAQs/>

      {/* CTA SECTION */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 tracking-tight"
          >
            Ready to Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">Digital Future?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/60 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-body"
          >
            Whether you need a new website, stronger search visibility, better digital marketing, an AI-powered automation system, an e-commerce store or a complete digital growth strategy, New Ai Tech Softs is ready to help.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-gradient-to-r from-brand-mid to-purple-600 text-white px-10 py-4 rounded-full font-heading font-bold text-lg shadow-lg shadow-brand-mid/25 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                <FaRocket /> Start Your Project
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full sm:w-auto border border-white/20 text-white bg-white/[0.06] backdrop-blur-sm px-10 py-4 rounded-full font-heading font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Talk to Our Team
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      <AuditPopup />
    </div>
  );
};

const ServiceCard = ({ icon, title, tagline, desc, direction, delay }) => {
  const entryVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: delay,
        duration: 0.8
      }
    }
  };

  const floatAnimation = {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      variants={entryVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative"
    >
      <motion.div
        animate={floatAnimation}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl p-10 rounded-2xl group hover:bg-white/[0.12] hover:border-white/[0.2] hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
      >
        <div className="w-20 h-20 bg-brand-mid/20 text-brand-cyan rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-gradient-to-r group-hover:from-brand-mid group-hover:to-purple-600 group-hover:text-white transition-all duration-500 shadow-inner">
          {icon}
        </div>

        <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
          {title}
        </h3>
        <p className="text-xs font-heading font-bold text-brand-cyan uppercase tracking-[0.2em] mb-6">
          {tagline}
        </p>
        <p className="text-white/60 leading-relaxed text-base group-hover:text-white/80 flex-grow font-body">
          {desc}
        </p>

        <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-brand-cyan to-blue-400 mt-8 transition-all duration-500 rounded-full"></div>
      </motion.div>
    </motion.div>
  );
};

const TechIcon = ({ icon, color, glow, name, category }) => (
  <div className="flex flex-col items-center gap-3 group cursor-pointer">
    <div 
      className={`relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] text-3xl ${color} opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:border-transparent transition-all duration-500`}
      style={{ 
        '--tw-shadow': `0 0 0 0 ${glow}00`,
      }}
    >
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"
        style={{ backgroundColor: glow }}
      ></div>
      <div className="relative z-10">{icon}</div>
    </div>
    <span className="text-xs font-heading font-semibold text-white/40 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300 translate-y-[-4px] group-hover:translate-y-0">{name}</span>
    {category && (
      <span className="text-[10px] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-wider font-body">{category}</span>
    )}
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl p-8 rounded-2xl text-center group hover:bg-white/[0.12] hover:border-white/[0.2] hover:shadow-2xl transition-all duration-300"
  >
    <div className="w-16 h-16 mx-auto bg-brand-mid/20 rounded-full flex items-center justify-center text-3xl text-brand-cyan mb-6 group-hover:bg-gradient-to-r group-hover:from-brand-mid group-hover:to-purple-600 group-hover:text-white transition duration-300 transform group-hover:rotate-12 group-hover:scale-110">
      {icon}
    </div>
    <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-brand-cyan transition">{title}</h3>
    <p className="text-white/60 leading-relaxed text-base font-body">{desc}</p>
  </motion.div>
);

export default Home;