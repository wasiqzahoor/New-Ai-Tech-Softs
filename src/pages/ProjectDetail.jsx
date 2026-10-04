import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaLaptopCode, FaDesktop, FaRobot, FaTools, FaCode, FaCheckCircle, FaCalendar, FaUser, FaClock, FaLayerGroup, FaRocket, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Project Not Found</h2>
          <p className="font-body text-white/60 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/portfolio" className="text-brand-cyan hover:underline font-heading font-bold">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full Stack': return <FaLaptopCode />;
      case 'Web Apps': return <FaLaptopCode />;
      case 'AI Tools': return <FaRobot />;
      case 'Utilities': return <FaTools />;
      case 'Desktop': return <FaDesktop />;
      case 'Developer Tools': return <FaCode />;
      default: return <FaLaptopCode />;
    }
  };

  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  const infoItems = [
    { icon: <FaCalendar />, label: "Year", value: project.year },
    { icon: <FaUser />, label: "Client", value: project.client },
    { icon: <FaClock />, label: "Duration", value: project.duration },
    { icon: <FaLayerGroup />, label: "Role", value: project.role },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">

      <Helmet>
        <title>{project.title} | New Ai Tech Softs - Case Study & Portfolio</title>
        <meta name="description" content={`${project.description || `${project.title} - A case study by New Ai Tech Softs`} New Ai Tech Softs is a leading software house in Islamabad, Pakistan delivering custom web, mobile, AI and desktop solutions worldwide.`} />
        <meta name="keywords" content={`${project.title}, ${project.category}, ${project.tags.join(', ')}, ${project.client}, case study, portfolio, New Ai Tech Softs, software house Islamabad, web development Pakistan, custom software, IT company Islamabad, tech agency Pakistan, freelance developer Islamabad, React developer Pakistan, Next.js development, MERN stack, Python development, AI solutions Pakistan, mobile app development Islamabad`} />
        <meta name="author" content="New Ai Tech Softs" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={`https://newaitechsofts.com/project/${project.slug}`} />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="PK-IST" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://newaitechsofts.com/project/${project.slug}`} />
        <meta property="og:title" content={`${project.title} | New Ai Tech Softs - Case Study`} />
        <meta property="og:description" content={`${project.description || project.title}. Built by New Ai Tech Softs - a leading software house in Islamabad, Pakistan.`} />
        <meta property="og:image" content={project.img || 'https://newaitechsofts.com/logo.webp'} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${project.title} - New Ai Tech Softs`} />
        <meta property="og:site_name" content="New Ai Tech Softs" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content="2026-01-01T00:00:00+05:00" />
        <meta property="article:modified_time" content="2026-08-17T00:00:00+05:00" />
        <meta property="article:author" content="New Ai Tech Softs" />
        <meta property="article:section" content={project.category} />
        {project.tags.map((tag, i) => (
          <meta key={i} property="article:tag" content={tag} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://newaitechsofts.com/project/${project.slug}`} />
        <meta name="twitter:title" content={`${project.title} | New Ai Tech Softs - Case Study`} />
        <meta name="twitter:description" content={`${project.description || project.title}. Built by New Ai Tech Softs, Islamabad.`} />
        <meta name="twitter:image" content={project.img || 'https://newaitechsofts.com/logo.webp'} />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="New Ai Tech Softs" />
        <meta name="twitter:label2" content="Category" />
        <meta name="twitter:data2" content={project.category} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description || `${project.title} - Case study by New Ai Tech Softs.`,
            "image": project.img || 'https://newaitechsofts.com/logo.webp',
            "url": `https://newaitechsofts.com/project/${project.slug}`,
            "author": {
              "@type": "Organization",
              "name": "New Ai Tech Softs",
              "url": "https://newaitechsofts.com",
              "logo": "https://newaitechsofts.com/logo.webp",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Islamabad",
                "addressRegion": "ICT",
                "addressCountry": "PK"
              },
              "sameAs": [
                "https://www.linkedin.com/company/newaitechsofts",
                "https://github.com/wasiqzahoor"
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "New Ai Tech Softs",
              "logo": { "@type": "ImageObject", "url": "https://newaitechsofts.com/logo.webp" }
            },
            "datePublished": "2026-01-01",
            "dateModified": "2026-08-17",
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://newaitechsofts.com/project/${project.slug}` },
            "about": {
              "@type": "Thing",
              "name": project.category,
              "description": project.tags.join(', ')
            },
            "keywords": `${project.title}, ${project.category}, ${project.tags.join(', ')}, New Ai Tech Softs, Islamabad`,
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "New Ai Tech Softs",
              "url": "https://newaitechsofts.com"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://newaitechsofts.com/" },
              { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://newaitechsofts.com/portfolio" },
              { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://newaitechsofts.com/project/${project.slug}` }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `What was the challenge in building ${project.title}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": project.challenge
                }
              },
              {
                "@type": "Question",
                "name": `What solution did New Ai Tech Softs provide for ${project.title}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": project.solution
                }
              },
              {
                "@type": "Question",
                "name": `What technologies were used in ${project.title}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Technologies used: ${project.tags.join(', ')}. ${project.longDescription || project.description}`
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* BACK BUTTON */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/40 hover:text-brand-cyan transition-colors font-heading font-bold uppercase text-xs tracking-widest"
          >
            <FaArrowLeft /> Back to Portfolio
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT: MAIN CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-10"
          >
            {/* Header */}
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-brand-mid/20 text-brand-cyan px-4 py-1.5 rounded-full text-xs font-heading font-black uppercase tracking-widest border border-brand-mid/30 flex items-center gap-2">
                  {getCategoryIcon(project.category)}
                  {project.category}
                </span>
                {project.featured && (
                  <span className="bg-brand-mid/20 text-brand-cyan px-4 py-1.5 rounded-full text-xs font-heading font-black uppercase tracking-widest border border-brand-mid/30">
                    ⭐ Featured
                  </span>
                )}
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-black text-white leading-tight">
                {project.title}
              </h1>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.12] shadow-xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto object-cover"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.webp'; }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              {project.demoUrl && project.demoUrl !== '#' && project.demoUrl !== '/' && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-mid to-purple-600 text-white font-heading font-bold px-8 py-4 rounded-full shadow-lg shadow-brand-mid/20 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all text-sm"
                >
                  <FaExternalLinkAlt /> Visit Live Site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/[0.08] text-white font-heading font-bold px-8 py-4 rounded-full border border-white/[0.12] hover:bg-white/[0.14] transition-all text-sm"
                >
                  <FaGithub /> View Source Code
                </a>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/[0.08] text-white/60 font-heading font-bold px-8 py-4 rounded-full border border-white/[0.12] hover:bg-white/[0.14] hover:text-white transition-all text-sm"
              >
                Start Similar Project
              </Link>
            </div>

            {/* Project Overview */}
            <div className="bg-white/[0.08] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.12] shadow-xl">
              <h2 className="font-heading text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-brand-mid/20 text-brand-cyan rounded-xl flex items-center justify-center">
                  <FaLaptopCode />
                </span>
                Project Overview
              </h2>
              <p className="font-body text-white/60 leading-relaxed text-lg">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Challenge & Solution */}
            <div className="bg-white/[0.08] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.12] shadow-xl">
              <h2 className="font-heading text-2xl font-black text-white mb-8">Challenge & Solution</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-lg font-bold text-red-400 mb-4 flex items-center gap-3">
                    <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                    The Challenge
                  </h3>
                  <p className="font-body text-white/60 leading-relaxed pl-6">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-green-400 mb-4 flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                    Our Solution
                  </h3>
                  <p className="font-body text-white/60 leading-relaxed pl-6">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white/[0.08] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.12] shadow-xl">
              <h2 className="font-heading text-2xl font-black text-white mb-6">Key Features</h2>
              <div className="flex flex-wrap gap-3">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.08] backdrop-blur-md rounded-full border border-white/[0.12] hover:border-brand-mid/30 transition-all"
                  >
                    <FaCheckCircle className="text-brand-cyan text-sm flex-shrink-0" />
                    <span className="font-body text-white/60 text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-white/[0.08] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.12] shadow-xl">
              <h2 className="font-heading text-2xl font-black text-white mb-6">Results & Impact</h2>
              <div className="flex flex-wrap gap-3">
                {project.results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-green-500/10 backdrop-blur-md rounded-full border border-green-500/20"
                  >
                    <FaCheckCircle className="text-green-400 text-sm flex-shrink-0" />
                    <span className="font-body text-white/60 text-sm font-medium">{result}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-white/[0.08] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.12] shadow-xl">
              <h2 className="font-heading text-2xl font-black text-white mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    className="px-5 py-2.5 bg-white/[0.08] text-brand-cyan rounded-full text-sm font-heading font-bold border border-white/[0.12] hover:border-brand-mid/30 transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Social Share */}
            <div className="pt-8 border-t border-white/[0.12]">
              <div className="flex items-center gap-4">
                <span className="font-heading text-sm font-bold uppercase text-white/40">Share this project:</span>
                <div className="flex gap-4">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-[#0A66C2] text-xl transition-all hover:scale-125"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(project.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-[#1DA1F2] text-xl transition-all hover:scale-125"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT: SIDEBAR */}
          <aside className="space-y-6">
            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-brand-mid/20 to-purple-600/10 backdrop-blur-xl p-8 rounded-2xl border border-white/[0.12] shadow-xl relative overflow-hidden group"
            >
              <FaRocket className="absolute -bottom-4 -right-4 text-8xl text-brand-mid/10 group-hover:rotate-12 transition-transform" />
              <h3 className="font-heading text-2xl font-black text-white mb-4 relative z-10">Have a Similar Project?</h3>
              <p className="font-body text-white/60 text-sm mb-6 relative z-10">
                Let's discuss how we can build something amazing for you with the same technology stack.
              </p>
              <Link to="/contact">
                <button className="w-full bg-gradient-to-r from-brand-mid to-purple-600 text-white font-heading font-bold py-4 rounded-full uppercase text-xs tracking-widest hover:shadow-brand-mid/20 hover:shadow-lg transition-all relative z-10">
                  Get Started
                </button>
              </Link>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/[0.08] backdrop-blur-xl p-8 rounded-2xl border border-white/[0.12] shadow-xl"
            >
              <h3 className="font-heading text-white font-black uppercase text-sm tracking-widest mb-6">Project Details</h3>
              <div className="space-y-4">
                {infoItems.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4 py-2 border-b border-white/[0.08]">
                    <span className="font-body text-white/40 text-sm flex items-center gap-2 flex-shrink-0">
                      <span className="text-brand-cyan">{item.icon}</span>
                      {item.label}
                    </span>
                    <span className="font-heading text-white font-bold text-sm text-right break-words">{item.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2 border-b border-white/[0.08]">
                  <span className="font-body text-white/40 text-sm flex-shrink-0">Technologies</span>
                  <span className="font-heading text-white font-bold text-sm text-right">{project.tags.length} Used</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-body text-white/40 text-sm flex-shrink-0">Status</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-heading font-bold border border-green-500/20">Completed</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/[0.08] backdrop-blur-xl p-8 rounded-2xl border border-white/[0.12] shadow-xl"
            >
              <h3 className="font-heading text-white font-black uppercase text-sm tracking-widest mb-6">Quick Links</h3>
              <div className="space-y-3">
                {project.demoUrl && project.demoUrl !== '#' && project.demoUrl !== '/' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 hover:text-brand-cyan transition-colors py-2 font-body"
                  >
                    <FaExternalLinkAlt className="text-brand-cyan" /> Visit Live Site
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 hover:text-brand-cyan transition-colors py-2 font-body"
                  >
                    <FaGithub className="text-brand-cyan" /> View Source Code
                  </a>
                )}
                <Link
                  to="/contact"
                  className="flex items-center gap-3 text-white/60 hover:text-brand-cyan transition-colors py-2 font-body"
                >
                  <FaRocket className="text-brand-cyan" /> Start Similar Project
                </Link>
              </div>
            </motion.div>
          </aside>

        </div>
      </div>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-20 mt-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="font-heading text-3xl font-black text-white mb-10 text-center">
              More <span className="text-brand-cyan">{project.category}</span> Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relProject) => (
                <Link
                  key={relProject.id}
                  to={`/project/${relProject.slug}`}
                  className="group bg-white/[0.08] backdrop-blur-xl rounded-2xl overflow-hidden border border-white/[0.12] shadow-xl hover:border-brand-mid/30 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relProject.img}
                      alt={relProject.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.webp'; }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                      {relProject.title}
                    </h3>
                    <p className="font-body text-white/60 text-sm line-clamp-2">
                      {relProject.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-6">
              Want a Similar <span className="text-brand-cyan">Project?</span>
            </h2>
            <p className="font-body text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how we can build something amazing for you with the same technology stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-brand-mid to-purple-600 text-white font-heading font-bold px-10 py-4 rounded-full shadow-lg shadow-brand-mid/20 hover:shadow-brand-mid/40 transition-all"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/[0.08] border border-white/[0.12] text-white font-heading font-bold px-10 py-4 rounded-full hover:bg-white/[0.14] transition-all"
                >
                  View All Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;