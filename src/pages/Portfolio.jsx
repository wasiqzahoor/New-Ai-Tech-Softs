import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaStar, FaClock, FaLaptopCode, FaDesktop, FaRobot, FaTools, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projects, PROJECT_CATEGORIES } from '../data/portfolioData';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

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

  return (
    <div className="min-h-screen relative overflow-hidden">

      <Helmet>
        <title>Portfolio & Case Studies | New Tech Softs - Software House in Islamabad</title>
        <meta name="description" content="Explore 21+ successful projects by New Tech Softs - a leading software house in Islamabad. View our portfolio of web apps, AI tools, desktop applications, and full-stack solutions delivered to clients worldwide." />
        <meta name="keywords" content="portfolio, case studies, web development, AI tools, software house Islamabad, MERN stack, React, Next.js, Python, machine learning, custom software, New Tech Softs, project showcase" />
        <meta name="author" content="New Tech Softs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://newtechsofts.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newtechsofts.com/portfolio" />
        <meta property="og:title" content="Portfolio & Case Studies | New Tech Softs" />
        <meta property="og:description" content="Explore 21+ successful projects by New Tech Softs. View our portfolio of web apps, AI tools, desktop applications, and full-stack solutions." />
        <meta property="og:image" content="https://newtechsofts.com/logo.webp" />
        <meta property="og:site_name" content="New Tech Softs" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://newtechsofts.com/portfolio" />
        <meta name="twitter:title" content="Portfolio & Case Studies | New Tech Softs" />
        <meta name="twitter:description" content="Explore 21+ successful projects by New Tech Softs. View our portfolio of web apps, AI tools, desktop applications, and full-stack solutions." />
        <meta name="twitter:image" content="https://newtechsofts.com/logo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Portfolio & Case Studies | New Tech Softs",
            "description": "Explore 21+ successful projects by New Tech Softs - a leading software house in Islamabad specializing in web apps, AI tools, and custom software solutions.",
            "url": "https://newtechsofts.com/portfolio",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": projects.length,
              "itemListElement": projects.slice(0, 10).map((project, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "SoftwareApplication",
                  "name": project.title,
                  "description": project.description,
                  "applicationCategory": project.category,
                  "operatingSystem": "Web-based",
                  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
                }
              }))
            },
            "publisher": {
              "@type": "Organization",
              "name": "New Tech Softs",
              "logo": { "@type": "ImageObject", "url": "https://newtechsofts.com/logo.webp" }
            }
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="text-brand-cyan font-heading font-bold tracking-widest uppercase text-base lg:text-lg mb-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {"Our Portfolio".split(" ").map((word, index) => (
                <motion.span key={index} variants={wordVariants} className="inline-block mr-3">{word}</motion.span>
              ))}
            </motion.div>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-8 text-white flex flex-wrap justify-center gap-x-4 gap-y-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {"Showcasing".split(" ").map((word, index) => (
                <motion.span key={index} variants={wordVariants}>{word}</motion.span>
              ))}
              <motion.span variants={wordVariants} className="text-brand-mid">Digital Excellence</motion.span>
            </motion.h1>

            <motion.p
              className="font-body text-white/60 text-lg lg:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              21+ successful projects delivered worldwide. From web apps to AI solutions – explore our work as a top software house in Islamabad.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <a href="#projects" className="bg-gradient-to-r from-brand-mid to-purple-600 text-white font-heading font-bold px-10 py-4 rounded-full shadow-lg shadow-brand-mid/20 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all text-lg">
                View Projects
              </a>
              <Link to="/contact" className="border border-white/12 text-white bg-white/[0.08] backdrop-blur-md rounded-full px-10 py-4 font-heading font-bold hover:bg-white/[0.14] transition-all text-lg text-center">
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <div className="py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3" id="projects">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-2.5 rounded-full font-heading font-semibold text-sm transition-all duration-300 backdrop-blur-md ${
                  activeFilter === cat.id
                    ? 'bg-brand-mid/20 text-brand-cyan border border-brand-mid/30 shadow-lg shadow-brand-mid/10'
                    : 'bg-white/[0.08] text-white/60 border border-white/[0.12] hover:bg-white/[0.14] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECT GRID */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-10 text-white/40 text-sm font-heading font-semibold uppercase tracking-wider"
          >
            Showing <span className="text-brand-cyan">{filteredProjects.length}</span> projects
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group h-[420px]"
                >
                  <Link to={`/project/${project.slug}`} className="block h-full">
                    <div className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:border-brand-mid/30 group-hover:shadow-brand-mid/10">
                      <div className="relative h-48 overflow-hidden flex-shrink-0">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 bg-white/[0.12] backdrop-blur-sm text-brand-cyan text-xs font-heading font-bold uppercase tracking-wider rounded-lg flex items-center gap-1.5 border border-white/[0.12]">
                            {getCategoryIcon(project.category)}
                            {project.category}
                          </span>
                        </div>

                        {project.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1.5 bg-gradient-to-r from-brand-mid to-purple-600 text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg flex items-center gap-1">
                              <FaStar /> Featured
                            </span>
                          </div>
                        )}

                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <div className="bg-gradient-to-r from-brand-mid to-purple-600 text-white px-4 py-2 rounded-lg font-heading font-bold text-sm flex items-center gap-2 shadow-lg">
                            View Case Study <FaArrowRight />
                          </div>
                        </div>
                      </div>

                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-white/40 text-xs font-body font-medium mb-2">
                          <FaClock className="text-brand-cyan" />
                          <span>{project.year}</span>
                          <span className="text-white/20">•</span>
                          <span className="truncate">{project.client}</span>
                        </div>

                        <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors line-clamp-1">
                          {project.title}
                        </h3>

                        <p className="font-body text-white/60 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-white/[0.08] text-white/60 rounded-lg text-xs font-body font-medium border border-white/[0.12] group-hover:border-brand-mid/30 group-hover:text-brand-cyan transition-colors">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-3 py-1 bg-white/[0.08] text-white/40 rounded-lg text-xs font-body font-medium border border-white/[0.12]">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Ready to start your{' '}
              <span className="text-brand-cyan">Digital Project?</span>
            </h2>
            <p className="font-body text-white/60 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              New Tech Softs specializes in MERN stack development, custom mobile applications, and comprehensive digital solutions. Let's transform your vision into reality.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-brand-mid to-purple-600 text-white font-heading font-bold px-12 py-5 rounded-full shadow-lg shadow-brand-mid/20 hover:shadow-brand-mid/40 transition-all text-xl"
              >
                Contact Our Experts →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;