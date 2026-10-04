import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="text-white min-h-screen pt-24 pb-20 flex items-center overflow-hidden">
      <Helmet>
        <title>Page Not Found | New Ai Tech Softs</title>
        <meta name="description" content="The page you are looking for does not exist. Explore New Ai Tech Softs services, portfolio and blog instead." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-brand-cyan font-heading font-bold uppercase tracking-[0.3em] text-xs mb-5"
        >
          Error 404
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight"
        >
          Page{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">
            Not Found
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="text-white/60 mt-6 text-base md:text-lg font-body max-w-xl mx-auto"
        >
          The page you are looking for may have been moved or does not exist.
          Let&rsquo;s get you back on track.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/">
            <button className="bg-gradient-to-r from-brand-mid to-purple-600 text-white px-8 py-3.5 rounded-full font-heading font-bold shadow-lg shadow-brand-mid/25 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all flex items-center gap-2">
              <FaHome /> Back to Home
            </button>
          </Link>
          <Link to="/contact">
            <button className="border border-white/20 text-white bg-white/[0.06] px-8 py-3.5 rounded-full font-heading font-bold hover:bg-white/[0.12] transition-all flex items-center gap-2">
              <FaArrowLeft /> Contact Us
            </button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-heading font-semibold"
        >
          <Link to="/services" className="text-white/50 hover:text-brand-cyan transition-colors">Services</Link>
          <Link to="/portfolio" className="text-white/50 hover:text-brand-cyan transition-colors">Our Work</Link>
          <Link to="/blog" className="text-white/50 hover:text-brand-cyan transition-colors">Blog</Link>
          <Link to="/about" className="text-white/50 hover:text-brand-cyan transition-colors">About</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
