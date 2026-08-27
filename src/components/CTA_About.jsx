import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaArrowRight,
  FaEnvelope,
  FaInfoCircle,
} from 'react-icons/fa';

const stats = [
  { num: '100+', label: 'Projects Delivered' },
  { num: '50+', label: 'Global Clients' },
  { num: '5★', label: 'Client Satisfaction' },
  { num: '365 Days', label: 'Support Available' },
];

const keywords = [
  'New Ai Tech Softs', 'Web Development', 'AI Solutions', 'Mobile Apps',
  'Search Engine Optimization', 'AI Agents', 'Graphic Designing',
  'Logo & Branding', 'Custom Web Solutions', 'WordPress Sites',
  'Desktop Applications', 'Chrome Extensions',
];

const trustItems = [
  'Free Consultation',
  'No Hidden Charges',
  '100% Client Satisfaction',
  'NDA Protected',
];

const StatCard = ({ num, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl flex flex-col items-center justify-center min-w-[130px] px-6 py-4"
  >
    <span className="font-black text-2xl text-white leading-none font-heading">
      <span className="text-brand-cyan">{num.replace(/[^0-9★]/g, '')}</span>
      {num.replace(/[0-9★]/g, '')}
    </span>
    <span className="text-[11px] text-white/40 mt-1 uppercase tracking-widest font-body">{label}</span>
  </motion.div>
);

const CTASection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orb */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-mid/[0.08] blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] text-brand-cyan text-[11px] font-semibold tracking-[2.5px] uppercase font-body shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            New Ai Tech Softs — NTS · Islamabad's #1 IT Company
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-[clamp(30px,5vw,52px)] font-heading font-bold text-white leading-[1.1] tracking-tight mb-3"
        >
          Let's Build Something{' '}
          <span className="bg-gradient-to-r from-brand-mid to-brand-cyan bg-clip-text text-transparent">
            Extraordinary Together.
          </span>
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(14px,2.5vw,20px)] text-white/60 font-medium mb-8 leading-snug font-body"
        >
          Pakistan's Premier{' '}
          <span className="text-white">Software House</span> for Next-Gen Digital Solutions
        </motion.p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} delay={0.12 + i * 0.08} />
          ))}
        </div>

        {/* Rich description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-[15px] leading-[1.9] max-w-3xl mx-auto mb-10 font-body"
        >
          At{' '}
          <strong className="text-white font-medium">New Ai Tech Softs (NTS)</strong>,
          we don't just write code — we craft digital experiences that drive real growth.
          From{' '}
          <strong className="text-white font-medium">custom web & mobile applications</strong>{' '}
          to{' '}
          <strong className="text-white font-medium">AI-powered enterprise solutions</strong>,
          our expert team has helped startups, SMEs, and global brands transform their
          vision into reality. Whether you need a{' '}
          <strong className="text-white font-medium">MERN stack platform</strong>,
          a{' '}
          <strong className="text-white font-medium">cross-platform mobile app</strong>,
          or a{' '}
          <strong className="text-white font-medium">complete brand identity</strong> —
          as Islamabad's leading{' '}
          <strong className="text-white font-medium">IT company & software house</strong>,
          we deliver measurable results with full transparency.
        </motion.p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* Keyword tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {keywords.map((kw) => (
            <span
              key={kw}
              className="px-3 py-1.5 rounded-md text-[11px] font-semibold uppercase tracking-wide text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20"
            >
              {kw}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-10"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-r from-brand-mid to-purple-600 text-white font-heading font-bold rounded-full shadow-lg shadow-brand-mid/25 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all text-[15px]"
            >
              <FaEnvelope className="text-[15px]" />
              Start Your Project Today
              <FaArrowRight className="text-[13px]" />
            </motion.button>
          </Link>

          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.15] text-white/80 bg-white/[0.06] rounded-full hover:bg-white/[0.1] transition-all font-medium text-[14px] font-body shadow-sm backdrop-blur-md"
            >
              <FaInfoCircle className="text-[14px]" />
              Explore Our Services
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          {trustItems.map((item, i) => (
            <React.Fragment key={item}>
              <span className="inline-flex items-center gap-1.5 text-white/40 text-[12px] font-body">
                <FaCheckCircle className="text-brand-cyan text-[13px] flex-shrink-0" />
                {item}
              </span>
              {i < trustItems.length - 1 && (
                <span className="text-white/20 text-lg">·</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;
