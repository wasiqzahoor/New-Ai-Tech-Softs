import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaMobileAlt, FaFigma, FaSearch, FaAws, FaRobot, FaRocket,
  FaChevronRight, FaCode, FaDesktop, FaPalette, FaVideo, FaCogs, FaHeadset,
  FaShopify, FaBullhorn
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../data/servicesData';

const iconMap = {
  FaReact, FaMobileAlt, FaFigma, FaSearch, FaAws, FaRobot, FaCode, FaDesktop, FaPalette, FaVideo, FaCogs, FaHeadset,
  FaShopify, FaBullhorn,
};

const colorMap = {
  cyan:   { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  blue:   { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  purple: { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  pink:   { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  green:  { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  orange: { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  yellow: { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  red:    { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  indigo: { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  teal:   { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  emerald:{ primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
};

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComp = iconMap[service.icon] || FaRocket;
  const colors = colorMap[service.color] || colorMap.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <Link to={`/service/${service.slug}`} className="block h-full">
        <div className="relative h-full min-h-[420px] bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.08] overflow-hidden transition-all duration-400 hover:bg-[#1db9f6] hover:border-white/[0.15] flex flex-col">

          {/* Image Section */}
          <div className="relative h-44 shrink-0 overflow-hidden">
            <motion.img
              src={service.images[0]}
              alt={service.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-black/20 to-transparent" />
          </div>

          {/* Icon - Overlapping */}
          <div className="relative flex justify-center -mt-8 z-10 shrink-0">
            <motion.div
              className="w-16 h-16 rounded-2xl bg-[#0a0a14] backdrop-blur-md border border-white/[0.12] flex items-center justify-center shadow-xl group-hover:border-black/30 transition-all duration-300"
            >
              <motion.div
                className="text-2xl"
                animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className={`${colors.primary} group-hover:text-black transition-colors duration-300`}><IconComp /></span>
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-1.5">
              <div className="h-[2px] w-5 bg-gradient-to-r from-brand-mid to-transparent group-hover:from-black rounded-full transition-all duration-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-mid group-hover:text-black font-heading transition-colors duration-300">
                {service.tagline}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-heading font-bold text-white mb-2 leading-tight group-hover:text-black transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-white/45 group-hover:text-black text-[13px] leading-relaxed mb-4 font-body line-clamp-3 transition-colors duration-300">
              {service.shortDesc}
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {service.features.slice(0, 3).map((f, i) => (
                <span
                  key={i}
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.04] text-white/40 group-hover:bg-black/10 group-hover:text-black group-hover:border-black/20 transition-all duration-300"
                >
                  {f}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/[0.06] group-hover:border-black/20 transition-colors duration-300">
              <span className="text-xs font-bold flex items-center gap-2 transition-all duration-300 font-heading text-brand-cyan group-hover:text-black opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0">
                Explore Service
                <FaChevronRight className="text-[10px]" />
              </span>
              <div className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/30 group-hover:text-black group-hover:border-black/30 transition-all duration-300">
                <FaChevronRight className="text-[10px]" />
              </div>
            </div>
          </div>

        </div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
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
      transition: { type: "spring", stiffness: 120, damping: 10, delay: 1.5 }
    }
  };

  return (
    <div className="text-white min-h-screen pt-20 overflow-hidden">
      
      {/* --- SEO META TAGS --- */}
      <Helmet>
        <title>Our Services | Web Development, App Development, AI Solutions | New Ai Tech Softs</title>
        <meta name="description" content="New Ai Tech Softs offers professional web development, mobile app development, UI/UX design, SEO, AI solutions, and cloud services. Top software house in Islamabad delivering custom digital solutions worldwide." />
        <meta name="keywords" content="web development, app development, mobile app, UI/UX design, SEO, digital marketing, AI chatbots, AI agents, SaaS development, cloud services, devops, desktop application, graphic designing, video editing, IT consulting, technical support, software house Islamabad, New Ai Tech Softs" />
        <meta name="author" content="New Ai Tech Softs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://newaitechsofts.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newaitechsofts.com/services" />
        <meta property="og:title" content="Our Services | Web Development, App Development, AI Solutions | New Ai Tech Softs" />
        <meta property="og:description" content="Professional web development, mobile app development, UI/UX design, SEO, AI solutions, and cloud services from New Ai Tech Softs - a leading software house in Islamabad." />
        <meta property="og:image" content="https://newaitechsofts.com/logo.webp" />
        <meta property="og:site_name" content="New Ai Tech Softs" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://newaitechsofts.com/services" />
        <meta name="twitter:title" content="Our Services | New Ai Tech Softs" />
        <meta name="twitter:description" content="Professional web development, mobile app development, UI/UX design, SEO, AI solutions from New Ai Tech Softs." />
        <meta name="twitter:image" content="https://newaitechsofts.com/logo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Software Development Services | New Ai Tech Softs",
            "description": "Professional web development, mobile app development, UI/UX design, SEO, AI solutions, and cloud services from New Ai Tech Softs.",
            "url": "https://newaitechsofts.com/services",
            "provider": {
              "@type": "Organization",
              "name": "New Ai Tech Softs",
              "address": [
                { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" },
                { "@type": "PostalAddress", "streetAddress": "Street 10, Building 15, Industrial Area 10, Near Al Madinah Hyper Market", "addressLocality": "Sharjah", "addressCountry": "AE" }
              ]
            },
            "areaServed": "Worldwide",
            "serviceType": ["Web Development", "Mobile App Development", "UI/UX Design", "AI Chatbots & AI Agents", "SaaS Development", "Digital Marketing", "Cloud & DevOps", "Desktop Applications", "Graphic Designing", "Video Editing", "UGC Video Ads", "Shopify Store Development", "Shopify Marketing", "IT Solutions & Consulting", "Technical Support Services"]
          })}
        </script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.div 
                className="text-brand-mid font-bold tracking-widest uppercase text-base lg:text-lg mb-4 flex flex-wrap justify-center lg:justify-start gap-2 font-heading"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {"Our Services".split(" ").map((word, index) => (
                  <motion.span key={index} variants={wordVariants}>{word}</motion.span>
                ))}
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6 flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {"Transforming".split(" ").map((word, index) => (
                  <motion.span key={index} variants={wordVariants}>{word}</motion.span>
                ))}
                <motion.span 
                  variants={wordVariants}
                  className="text-brand-mid"
                >
                  Ideas Into Reality
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-white/60 text-lg lg:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-body"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                From web development to AI solutions – end-to-end digital services from a leading software house in Islamabad, now bringing our expertise to businesses across the USA & UK.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-brand-mid to-purple-600 text-white px-8 py-3.5 rounded-full font-heading font-bold text-lg shadow-lg shadow-brand-mid/20 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  <FaRocket /> Get a Quote
                </Link>
                <Link to="/portfolio" className="w-full sm:w-auto border border-white/20 text-white bg-white/[0.06] px-8 py-3.5 rounded-full font-heading font-bold text-lg hover:bg-white/[0.12] transition-all flex items-center justify-center gap-2">
                  View Our Work
                </Link>
              </motion.div>
            </div>

            <motion.div 
              className="relative hidden lg:flex items-center justify-center h-[350px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-full h-full">
                <motion.div 
                  className="absolute top-0 left-0 bg-white/[0.08] backdrop-blur-xl p-5 rounded-2xl border border-white/[0.12] shadow-xl flex items-center gap-4 hover:border-brand-mid/20 transition-all"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-14 h-14 bg-brand-mid/10 rounded-xl flex items-center justify-center text-brand-mid text-2xl">
                    <FaReact />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm font-heading">Web Development</p>
                    <p className="text-white/40 text-xs font-body">React, Next.js, Node.js</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute top-8 right-0 bg-white/[0.08] backdrop-blur-xl p-5 rounded-2xl border border-white/[0.12] shadow-xl flex items-center gap-4 hover:border-brand-mid/20 transition-all"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="w-14 h-14 bg-brand-mid/10 rounded-xl flex items-center justify-center text-brand-mid text-2xl">
                    <FaMobileAlt />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm font-heading">Mobile Apps</p>
                    <p className="text-white/40 text-xs font-body">Flutter, React Native</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute bottom-20 left-4 bg-white/[0.08] backdrop-blur-xl p-5 rounded-2xl border border-white/[0.12] shadow-xl flex items-center gap-4 hover:border-brand-mid/20 transition-all"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="w-14 h-14 bg-brand-mid/10 rounded-xl flex items-center justify-center text-brand-mid text-2xl">
                    <FaRobot />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm font-heading">AI Solutions</p>
                    <p className="text-white/40 text-xs font-body">Python, TensorFlow</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute bottom-8 right-8 bg-white/[0.08] backdrop-blur-xl p-5 rounded-2xl border border-white/[0.12] shadow-xl flex items-center gap-4 hover:border-brand-mid/20 transition-all"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <div className="w-14 h-14 bg-brand-mid/10 rounded-xl flex items-center justify-center text-brand-mid text-2xl">
                    <FaFigma />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm font-heading">UI/UX Design</p>
                    <p className="text-white/40 text-xs font-body">Figma, Adobe XD</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative">
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            What We <span className="text-brand-mid">Offer</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto font-body"
          >
            Comprehensive digital solutions tailored to your business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch relative z-10">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-16 md:py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-[2rem] p-8 md:p-14 text-center overflow-hidden"
          >
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 bg-brand-mid/10 text-brand-mid rounded-xl flex items-center justify-center text-2xl mx-auto mb-6 border border-brand-mid/20"
            >
              <FaRocket />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight leading-tight">
              Ready to <span className="text-brand-mid">Scale Up?</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-medium font-body">
              Don't settle for average. Your business deserves a high-end digital ecosystem. 
              Whether it's a fresh idea or a complex system, we provide the expertise to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-brand-mid to-purple-600 text-white px-8 py-4 rounded-full font-heading font-bold text-lg shadow-lg shadow-brand-mid/20 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all"
                >
                  Start Your Journey
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button 
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }}
                  className="text-white/60 px-8 py-4 rounded-full font-heading font-bold border border-white/20 bg-white/[0.06] transition-all"
                >
                  See Our Work
                </motion.button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest font-heading">
              <span className="w-1.5 h-1.5 bg-brand-mid rounded-full animate-pulse"></span>
              Consultation is free of cost
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;