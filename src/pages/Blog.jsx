import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCalendarAlt, FaArrowRight, FaUserAlt, FaRocket, FaTag, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { blogData } from '../data/blogData';

const POSTS_PER_PAGE = 6;

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentBlogs = blogData.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="text-white min-h-screen pt-16 pb-20">
      <Helmet>
        <title>Blog & Tech Insights | New Ai Tech Softs - Software House in Islamabad</title>
        <meta name="description" content="Read the latest tech insights, web development tips, AI trends, and software engineering guides from New Ai Tech Softs - a leading software house in Islamabad." />
        <meta name="keywords" content="tech blog, web development tips, AI trends, software engineering, React, Next.js, Python, MERN stack, Islamabad tech company, New Ai Tech Softs blog" />
        <meta name="author" content="New Ai Tech Softs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://newaitechsofts.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newaitechsofts.com/blog" />
        <meta property="og:title" content="Blog & Tech Insights | New Ai Tech Softs" />
        <meta property="og:description" content="Read the latest tech insights, web development tips, AI trends, and software engineering guides from New Ai Tech Softs." />
        <meta property="og:image" content="https://newaitechsofts.com/logo.webp" />
        <meta property="og:site_name" content="New Ai Tech Softs" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://newaitechsofts.com/blog" />
        <meta name="twitter:title" content="Blog & Tech Insights | New Ai Tech Softs" />
        <meta name="twitter:description" content="Read the latest tech insights, web development tips, AI trends, and software engineering guides from New Ai Tech Softs." />
        <meta name="twitter:image" content="https://newaitechsofts.com/logo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog & Tech Insights | New Ai Tech Softs",
            "description": "Latest tech insights, web development tips, and AI trends from New Ai Tech Softs.",
            "url": "https://newaitechsofts.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "New Ai Tech Softs",
              "logo": { "@type": "ImageObject", "url": "https://newaitechsofts.com/logo.webp" }
            }
          })}
        </script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative text-center py-16 md:py-20 px-4 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 mb-8"
          >
            <span className="text-[#8B5CF6] font-heading font-bold uppercase tracking-widest text-xs">Latest News</span>
          </motion.div>

          <motion.h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2">
            {"Insights &".split(' ').map((word, i) => (
              <motion.span key={i} custom={i} initial="hidden" animate="visible" variants={wordAnimation} className="text-white">
                {word}
              </motion.span>
            ))}
            <motion.span
              custom={2}
              initial="hidden"
              animate="visible"
              variants={wordAnimation}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#00D9FF]"
            >
              Innovation
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-white/60 font-body text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Explore the world of technology through our expert-written articles on web development, mobile apps, and digital strategies.
          </motion.p>
        </div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {currentBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl overflow-hidden group hover:border-[#8B5CF6]/30 transition-all duration-500"
              >
                <div className="overflow-hidden relative bg-black/40">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.webp'; }}
                    className="w-full h-auto max-h-80 object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="bg-[#8B5CF6]/90 text-white px-4 py-1.5 rounded-full text-xs font-heading font-bold flex items-center gap-2 shadow-lg">
                      <FaTag /> {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-6 text-white/40 text-[10px] font-heading font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2"><FaCalendarAlt className="text-[#8B5CF6]" /> {blog.date}</span>
                    <span className="flex items-center gap-2"><FaUserAlt className="text-[#8B5CF6]" /> {blog.author}</span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white group-hover:text-[#8B5CF6] transition-colors leading-tight">
                    {blog.title}
                  </h3>

                  <p className="text-white/60 font-body text-base leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="pt-4">
                    <Link to={`/blog/${blog.slug}`}>
                      <button className="flex items-center gap-3 text-[#00D9FF] font-heading font-bold uppercase tracking-widest text-sm group-hover:gap-5 transition-all">
                        Read Full Article <FaArrowRight />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* --- PAGINATION --- */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-16">
            {/* Prev */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                currentPage === 1
                  ? 'border-white/[0.06] text-white/20 cursor-not-allowed'
                  : 'border-white/[0.12] text-white/60 hover:bg-white/[0.08] hover:text-white hover:border-white/[0.2]'
              }`}
            >
              <FaChevronLeft className="text-xs" />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-purple-600 text-white shadow-lg shadow-[#8B5CF6]/25'
                    : 'border border-white/[0.10] text-white/50 hover:bg-white/[0.08] hover:text-white hover:border-white/[0.2]'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                currentPage === totalPages
                  ? 'border-white/[0.06] text-white/20 cursor-not-allowed'
                  : 'border-white/[0.12] text-white/60 hover:bg-white/[0.08] hover:text-white hover:border-white/[0.2]'
              }`}
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        )}

        {/* Page info */}
        <p className="text-center text-white/30 text-sm font-body mt-5">
          Showing {startIndex + 1}–{Math.min(startIndex + POSTS_PER_PAGE, blogData.length)} of {blogData.length} articles
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-12 text-center relative overflow-hidden group"
        >
          <FaRocket className="text-5xl text-[#8B5CF6]/40 mx-auto mb-6 relative z-10" />
          <h3 className="text-3xl font-heading font-bold text-white mb-4 relative z-10">Have a Project in Mind?</h3>
          <p className="text-white/60 font-body text-base mb-8 relative z-10 max-w-lg mx-auto">
            Let's turn these insights into a real product for your business.
          </p>
          <Link to="/contact" className="relative z-10">
            <button className="bg-gradient-to-r from-[#8B5CF6] to-purple-600 text-white font-heading font-bold rounded-full px-10 py-4 shadow-lg shadow-[#8B5CF6]/20 hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider">
              Get Started
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
