import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/productData';
import { Helmet } from 'react-helmet-async';
import { FaSearch, FaTimes, FaArrowRight } from 'react-icons/fa';

const useCounter = (end, duration = 1500) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

const StatCard = ({ value, label, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(inView ? value : 0);
  return (
    <div ref={ref} className="text-center">
      <span className="block text-3xl md:text-4xl font-heading font-bold text-white">
        {count}{suffix}
      </span>
      <span className="block text-sm font-body text-white/60 mt-1">{label}</span>
    </div>
  );
};

const ProductCard = ({ product, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Link to={`/product/${product.slug}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6 }}
        className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl overflow-hidden group hover:border-[#8B5CF6]/30 transition-all duration-500"
      >
        <div className="relative h-48 bg-white/[0.04] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/5 to-transparent" />
          <img
            src={product.image}
            alt={product.name}
            className="w-18 h-18 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.querySelector('.img-fallback').style.display = 'flex';
            }}
          />
          <div className="img-fallback hidden w-18 h-18 bg-gradient-to-br from-[#8B5CF6] to-[#00D9FF] rounded-2xl items-center justify-center font-heading font-bold text-3xl text-white z-10">
            <span>{product.name.charAt(0)}</span>
          </div>
          <div className="absolute top-3 right-3 text-[11px] font-heading font-bold uppercase tracking-wider text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-lg px-3 py-1">
            WEBSITE
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-[#00D9FF] transition-colors">{product.name}</h3>
          <p className="text-sm font-body text-white/60 leading-relaxed mb-5 line-clamp-3">{product.details}</p>
          <span className="inline-flex items-center gap-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 rounded-full px-5 py-2.5 text-[#00D9FF] font-body font-medium text-sm group-hover:bg-[#8B5CF6]/20 group-hover:border-[#8B5CF6]/40 group-hover:text-white transition-all">
            <span>View Details</span>
            <FaArrowRight className="text-xs" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Premium Software Solutions & Products | New Ai Tech Softs</title>
        <meta name="description" content="Discover our cutting-edge software products at New Ai Tech Softs. We offer custom development, cloud solutions, and productivity tools designed to scale your business. Visit us for reliable software excellence in Islamabad." />
        <meta name="keywords" content="software products, BG remover, QR code generator, PDF tool, image converter, file converter, code screenshot, New Ai Tech Softs, Islamabad software house" />
        <meta name="author" content="New Ai Tech Softs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://newaitechsofts.com/products" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newaitechsofts.com/products" />
        <meta property="og:title" content="Premium Software Solutions & Products | New Ai Tech Softs" />
        <meta property="og:description" content="Custom-built, scalable software solutions by New Ai Tech Softs. Elevate your business with our professional tools." />
        <meta property="og:image" content="https://newaitechsofts.com/logo.webp" />
        <meta property="og:site_name" content="New Ai Tech Softs" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://newaitechsofts.com/products" />
        <meta name="twitter:title" content="Premium Software Solutions & Products | New Ai Tech Softs" />
        <meta name="twitter:description" content="Custom-built, scalable software solutions by New Ai Tech Softs. Elevate your business with our professional tools." />
        <meta name="twitter:image" content="https://newaitechsofts.com/logo.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Software Products | New Ai Tech Softs",
            "description": "Discover our cutting-edge software products at New Ai Tech Softs. Custom development, cloud solutions, and productivity tools.",
            "url": "https://newaitechsofts.com/products",
            "publisher": {
              "@type": "Organization",
              "name": "New Ai Tech Softs",
              "url": "https://newaitechsofts.com/",
              "logo": "https://newaitechsofts.com/logo.webp"
            },
            "mainEntity": {
              "@type": "ItemList",
              "name": "New Ai Tech Softs Products",
              "itemListElement": [
                { "@type": "SoftwareApplication", "name": "BG.Remover", "url": "https://bgremover.newaitechsofts.com", "applicationCategory": "MultimediaApplication" },
                { "@type": "SoftwareApplication", "name": "QRify QR Code Generator", "url": "https://qrify.newaitechsofts.com", "applicationCategory": "UtilitiesApplication" },
                { "@type": "SoftwareApplication", "name": "PDF Swift", "url": "https://pdfswift.newaitechsofts.com", "applicationCategory": "UtilitiesApplication" },
                { "@type": "SoftwareApplication", "name": "Image Morph", "url": "https://imagemorph.newaitechsofts.com", "applicationCategory": "MultimediaApplication" },
                { "@type": "SoftwareApplication", "name": "Image Enhancer", "url": "https://pixelforge.newaitechsofts.com", "applicationCategory": "MultimediaApplication" },
                { "@type": "SoftwareApplication", "name": "File Forge", "url": "https://fileforge.newaitechsofts.com", "applicationCategory": "UtilitiesApplication" },
                { "@type": "SoftwareApplication", "name": "CodeSnap", "url": "https://codesnap.newaitechsofts.com", "applicationCategory": "DeveloperApplication" }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="text-white min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 overflow-hidden">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                  className="text-[#8B5CF6] font-heading font-bold tracking-widest uppercase text-sm mb-6 flex flex-wrap justify-center lg:justify-start gap-2"
                >
                  {"Our Products".split(' ').map((word, index) => (
                    <motion.span key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 100, delay: 0.3 + index * 0.1 }}>{word}</motion.span>
                  ))}
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                >
                  {"Powerful Software".split(' ').map((word, index) => (
                    <motion.span key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 100, delay: 0.4 + index * 0.1 }} className="text-white">{word}</motion.span>
                  ))}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#00D9FF]"
                  >
                    Built to Scale
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-white/60 font-body text-lg lg:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Explore our curated collection of industry-leading software tools — from development platforms to productivity suites, crafted for modern teams.
                </motion.p>

                <motion.div
                  className="flex flex-col gap-4"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 10, delay: 1.2 }}
                >
                  <div className="relative max-w-md mx-auto lg:mx-0">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                    <input
                      type="text"
                      className="w-full pl-12 pr-10 px-4 py-3 bg-white/[0.06] border border-white/[0.1] rounded-full text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-[#8B5CF6]/40 transition-colors"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition" onClick={() => setSearchTerm('')}>
                        <FaTimes className="text-sm" />
                      </button>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="#products" className="bg-gradient-to-r from-[#8B5CF6] to-purple-600 text-white font-heading font-bold rounded-full px-8 py-3.5 shadow-lg shadow-[#8B5CF6]/20 hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 transition-all text-center">
                      View Products
                    </a>
                    <Link to="/contact">
                      <button className="border border-white/[0.12] text-white bg-white/[0.06] rounded-full px-8 py-3.5 font-heading font-bold hover:bg-white/[0.1] transition-all text-center w-full sm:w-auto">
                        Get a Quote
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Right Visual - Floating Product Cards */}
              <motion.div
                className="relative hidden lg:flex items-center justify-center h-[380px]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="relative w-full h-full">
                  <motion.div
                    className="absolute top-0 left-0 bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-5 flex items-center gap-4 hover:border-[#8B5CF6]/30 transition-all"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="w-14 h-14 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D9FF" strokeWidth="1.5" strokeLinecap="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>
                    </div>
                    <div>
                      <p className="text-white font-heading font-bold text-sm">CodeFlow IDE</p>
                      <p className="text-white/40 font-body text-xs">Dev Tools, Productivity</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-8 right-0 bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-5 flex items-center gap-4 hover:border-[#8B5CF6]/30 transition-all"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  >
                    <div className="w-14 h-14 bg-[#00D9FF]/10 rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D9FF" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
                    </div>
                    <div>
                      <p className="text-white font-heading font-bold text-sm">DesignStudio</p>
                      <p className="text-white/40 font-body text-xs">Design, UI/UX</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-20 left-4 bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-5 flex items-center gap-4 hover:border-[#8B5CF6]/30 transition-all"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  >
                    <div className="w-14 h-14 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>
                    </div>
                    <div>
                      <p className="text-white font-heading font-bold text-sm">CloudDeploy</p>
                      <p className="text-white/40 font-body text-xs">Cloud, DevOps</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 right-8 bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-5 flex items-center gap-4 hover:border-[#8B5CF6]/30 transition-all"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  >
                    <div className="w-14 h-14 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFC700" strokeWidth="1.5" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
                    </div>
                    <div>
                      <p className="text-white font-heading font-bold text-sm">DataPulse</p>
                      <p className="text-white/40 font-body text-xs">Analytics, Productivity</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="border-y border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 py-12 flex justify-center gap-12 md:gap-24 flex-wrap">
            <StatCard value={8} label="Products" suffix="+" />
            <StatCard value={50} label="Happy Clients" suffix="+" />
            <StatCard value={99} label="Uptime %" suffix="%" />
            <StatCard value={24} label="Support Hours" suffix="/7" />
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="products">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Products</h2>
            <p className="text-white/40 font-body text-sm">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))
              ) : (
                <motion.div
                  className="col-span-full text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">No products found</h3>
                  <p className="text-white/60 font-body">Try a different search term</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* About Section */}
        <section className="relative py-16 md:py-20 px-4 overflow-hidden border-t border-white/[0.08]">

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-[#8B5CF6] font-heading font-bold tracking-widest uppercase text-sm mb-4 flex justify-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {"About NewAiTechSofts".split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-white">Engineering</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#00D9FF]">Excellence,</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6]">Delivered.</span>
              </motion.h2>

              <motion.p
                className="text-white/60 font-body text-lg leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                We are a premier software house based in Islamabad, dedicated to delivering
                precision-engineered digital solutions. Every product we build is designed with
                performance, scalability, and exceptional user experience at the core.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Custom Development',
                  text: 'Tailored software built around your exact requirements.',
                  gradient: 'from-[#00D9FF] to-[#8B5CF6]',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                  )
                },
                {
                  title: 'Cloud-Ready',
                  text: 'Scalable infrastructure for modern cloud environments.',
                  gradient: 'from-[#8B5CF6] to-[#00D9FF]',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
                    </svg>
                  )
                },
                {
                  title: '24/7 Support',
                  text: 'Round-the-clock technical support for all our products.',
                  gradient: 'from-[#8B5CF6] to-[#00D9FF]',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  )
                },
                {
                  title: 'Secure by Design',
                  text: 'Enterprise-grade security baked into every layer.',
                  gradient: 'from-[#8B5CF6] to-[#00D9FF]',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  )
                },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, type: 'spring', stiffness: 80 }}
                  whileHover={{ y: -8 }}
                  className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-7 group hover:border-[#8B5CF6]/30 transition-all duration-500 cursor-default overflow-hidden relative"
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white mb-5 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {f.icon}
                  </motion.div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-white/60 font-body text-sm leading-relaxed">{f.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-20 text-center overflow-hidden">

          <motion.div
            className="relative z-10 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Build Something<br />Extraordinary?</h2>
            <p className="text-white/60 font-body text-lg mb-10 max-w-xl mx-auto">
              Let's discuss your project requirements and deliver a solution that exceeds expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  className="bg-gradient-to-r from-[#8B5CF6] to-purple-600 text-white font-heading font-bold rounded-full px-10 py-4 shadow-lg shadow-[#8B5CF6]/20 hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact Us Now
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  className="border border-white/[0.12] text-white bg-white/[0.06] rounded-full px-10 py-4 font-heading font-bold hover:bg-white/[0.1] transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default ProductPage;
