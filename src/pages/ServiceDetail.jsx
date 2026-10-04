import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FaArrowLeft, FaCheckCircle, FaChevronRight, FaRocket, FaPhone,
  FaReact, FaMobileAlt, FaFigma, FaSearch, FaAws, FaRobot,
  FaCode, FaDesktop, FaPalette, FaVideo, FaCogs, FaHeadset,
  FaShopify, FaBullhorn
} from 'react-icons/fa';
import { services } from '../data/servicesData';

const iconMap = {
  FaReact, FaMobileAlt, FaFigma, FaSearch, FaAws, FaRobot,
  FaCode, FaDesktop, FaPalette, FaVideo, FaCogs, FaHeadset,
  FaShopify, FaBullhorn,
};

const colorMap = {
  cyan:   { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  blue:   { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  purple: { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  green:  { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  orange: { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  pink:   { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  yellow: { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  red:    { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  indigo: { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  teal:   { primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
  emerald:{ primary: 'text-brand-mid', bg: 'bg-brand-mid/10', border: 'border-brand-mid/20', hex: '#0C447C' },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const service = services.find((s) => s.slug === slug);
  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!service) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === service.images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/services" className="text-brand-mid hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  const colors = colorMap[service.color] || colorMap.cyan;
  const IconComp = iconMap[service.icon] || FaRocket;

  return (
    <div className="text-white min-h-screen pt-20">
      {/* SEO */}
      <Helmet>
        <title>{service.title} Services | New Ai Tech Softs - Software House in Islamabad</title>
        <meta name="description" content={`${service.description} New Ai Tech Softs is a top-rated software house in Islamabad, Pakistan providing professional ${service.title.toLowerCase()} services to clients worldwide. Get a free quote today.`} />
        <meta name="keywords" content={`${service.title}, ${service.title.toLowerCase()} services, ${service.tools.join(', ')}, ${service.tagline}, New Ai Tech Softs, software house Islamabad, IT company Pakistan, web development Islamabad, custom software Pakistan, tech agency Islamabad, outsource development Pakistan, best software house Pakistan, ${service.features.slice(0, 3).join(', ')}`} />
        <meta name="author" content="New Ai Tech Softs" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={`https://newaitechsofts.com/service/${service.slug}`} />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="PK-IST" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://newaitechsofts.com/service/${service.slug}`} />
        <meta property="og:title" content={`${service.title} Services | New Ai Tech Softs - Islamabad`} />
        <meta property="og:description" content={`Professional ${service.title.toLowerCase()} services by New Ai Tech Softs, Islamabad. ${service.tagline}. Get a free consultation today.`} />
        <meta property="og:image" content={service.images[0]} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${service.title} - New Ai Tech Softs Islamabad`} />
        <meta property="og:site_name" content="New Ai Tech Softs" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://newaitechsofts.com/service/${service.slug}`} />
        <meta name="twitter:title" content={`${service.title} Services | New Ai Tech Softs`} />
        <meta name="twitter:description" content={`Professional ${service.title.toLowerCase()} services by New Ai Tech Softs, Islamabad. ${service.tagline}.`} />
        <meta name="twitter:image" content={service.images[0]} />
        <meta name="twitter:label1" content="Service Provider" />
        <meta name="twitter:data1" content="New Ai Tech Softs" />
        <meta name="twitter:label2" content="Location" />
        <meta name="twitter:data2" content="Islamabad, Pakistan" />

        {/* JSON-LD: Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${service.title} - New Ai Tech Softs`,
            "description": service.description,
            "url": `https://newaitechsofts.com/service/${service.slug}`,
            "image": service.images[0],
            "provider": {
              "@type": "Organization",
              "name": "New Ai Tech Softs",
              "url": "https://newaitechsofts.com",
              "logo": "https://newaitechsofts.com/logo.webp",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "DHA Phase 5, Islamabad",
                "addressLocality": "Islamabad",
                "addressRegion": "ICT",
                "postalCode": "44000",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.6844",
                "longitude": "73.0479"
              },
              "telephone": "+92-324-9299291",
              "email": "ceo@newaitechsofts.com",
              "sameAs": [
                "https://www.linkedin.com/company/newaitechsofts",
                "https://github.com/wasiqzahoor",
                "https://www.instagram.com/new_tech_softs"
              ]
            },
            "serviceType": service.title,
            "category": service.tagline,
            "areaServed": {
              "@type": "Country",
              "name": "Pakistan"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `${service.title} Services`,
              "itemListElement": service.features.map((feat) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": feat
                }
              }))
            }
          })}
        </script>

        {/* JSON-LD: BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://newaitechsofts.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://newaitechsofts.com/services" },
              { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://newaitechsofts.com/service/${service.slug}` }
            ]
          })}
        </script>

        {/* JSON-LD: FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": service.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>

        {/* JSON-LD: LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "New Ai Tech Softs",
            "url": "https://newaitechsofts.com",
            "logo": "https://newaitechsofts.com/logo.webp",
            "description": "Leading software house in Islamabad providing web development, mobile apps, AI solutions, and custom software development services.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "DHA Phase 5, Islamabad",
              "addressLocality": "Islamabad",
              "addressRegion": "ICT",
              "postalCode": "44000",
              "addressCountry": "PK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.6844",
              "longitude": "73.0479"
            },
            "telephone": "+92-324-9299291",
            "email": "ceo@newaitechsofts.com",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "10:00",
                "closes": "22:00"
              }
            ],
            "priceRange": "$500-$50000",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "47",
              "bestRating": "5"
            }
          })}
        </script>
      </Helmet>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-white/40 hover:text-brand-mid transition-colors mb-8 text-sm font-semibold font-heading"
        >
          <FaArrowLeft /> Back to Services
        </motion.button>
      </div>

      {/* --- HERO: Image Carousel + Title --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[300px] sm:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden border border-white/[0.12] shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={service.images[currentImage]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={`${service.title} - Image ${currentImage + 1}`}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Image Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {service.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentImage ? 'w-8 bg-brand-mid' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-white/[0.08] backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/60 font-semibold font-body">
                {currentImage + 1} / {service.images.length}
              </div>
            </div>
          </motion.div>

          {/* Right: Service Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.border} border px-4 py-2 rounded-full`}>
              <IconComp className={colors.primary} />
              <span className={`text-xs font-bold uppercase tracking-wider ${colors.primary} font-heading`}>{service.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold leading-tight">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i === service.title.split(' ').length - 1 ? 'text-brand-mid' : 'text-white'}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p className="text-white/60 text-lg leading-relaxed font-body">{service.description}</p>

            {/* Features */}
            <div>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4 font-heading">What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 bg-white/[0.08] backdrop-blur-xl rounded-xl px-4 py-3 border border-white/[0.12] shadow-xl"
                  >
                    <FaCheckCircle className={`${colors.primary} shrink-0`} />
                    <span className="text-sm text-white/80 font-medium font-body">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="flex-1">
                <button className="w-full bg-gradient-to-r from-brand-mid to-purple-600 text-white px-8 py-4 rounded-full font-heading font-bold text-lg shadow-lg shadow-brand-mid/20 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  <FaRocket /> Get Started
                </button>
              </Link>
              <Link to="/contact" className="flex-1">
                <button className="w-full border border-white/20 text-white bg-white/[0.06] px-8 py-4 rounded-full font-heading font-bold hover:bg-white/[0.12] transition-all flex items-center justify-center gap-2">
                  <FaPhone /> Talk to Expert
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TOOLS & TECH --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Tools & <span className="text-brand-mid">Technologies</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-body">We use industry-leading tools to deliver exceptional results</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          {service.tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl px-6 py-3 rounded-full text-sm font-semibold text-brand-mid hover:scale-105 hover:border-brand-mid/20 transition-all font-heading"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROCESS GUIDE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our <span className="text-brand-mid">Process</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-body">A proven roadmap that delivers results every time</p>
        </motion.div>

        <div className="relative z-10">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-mid/50 via-brand-mid/30 to-brand-mid/50 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Step Number */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/[0.08] border-2 border-brand-mid items-center justify-center z-10">
                  <span className="text-brand-mid font-bold text-sm font-heading">{i + 1}</span>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-6 md:p-8 hover:border-brand-mid/20 transition-all">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 !== 0 ? 'md:justify-end' : ''}`}>
                      <span className="md:hidden w-8 h-8 rounded-full bg-brand-mid/10 border border-brand-mid/20 flex items-center justify-center text-brand-mid text-xs font-bold">
                        {i + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white font-heading">{step.step}</h3>
                    </div>
                    <p className="text-white/60 leading-relaxed font-body">{step.desc}</p>
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Frequently Asked <span className="text-brand-mid">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {service.faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-white pr-4 font-heading">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openFaq === i ? 90 : 0 }}
                  className="text-brand-mid shrink-0"
                >
                  <FaChevronRight />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed border-t border-white/10 pt-4 font-body">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- RELATED SERVICES --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Related <span className="text-brand-mid">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((rel, i) => {
            const RelIcon = iconMap[rel.icon] || FaRocket;
            const relColors = colorMap[rel.color] || colorMap.cyan;
            return (
              <Link key={rel.id} to={`/service/${rel.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-6 hover:border-brand-mid/20 transition-all group cursor-pointer h-full"
                >
                  <div className={`w-12 h-12 ${relColors.bg} rounded-xl flex items-center justify-center text-xl ${relColors.primary} mb-4`}>
                    <RelIcon />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-mid transition-colors font-heading">{rel.title}</h3>
                  <p className="text-white/60 text-sm line-clamp-2 mb-4 font-body">{rel.shortDesc}</p>
                  <span className="text-sm font-semibold text-brand-mid flex items-center gap-1 font-heading">
                    Learn More <FaChevronRight className="text-xs" />
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-16 md:py-20 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-[2rem] p-8 md:p-14 text-center overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 bg-brand-mid/10 text-brand-mid rounded-xl flex items-center justify-center text-2xl mx-auto mb-6 border border-brand-mid/20"
            >
              <FaRocket />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">
              Ready to Start Your <span className="text-brand-mid">Project?</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto font-body">
              Let's discuss how {service.title.toLowerCase()} can transform your business. Free consultation included.
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;