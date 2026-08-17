import React from 'react';
import { motion } from 'framer-motion';

const VisionMissionGoals = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* ========== SECTION INTRO ========== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 md:mb-28 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-brand-cyan font-heading font-bold uppercase tracking-[0.3em] text-xs mb-5"
        >
          Our Purpose
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight max-w-3xl mx-auto"
        >
          Building technology{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">
            with purpose.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-body"
        >
          Our vision, mission and goals guide how we build products, solve problems
          and create long-term value — ensuring every solution we deliver is driven
          by clarity, intent and measurable impact.
        </motion.p>
      </div>

      {/* ========== VISION + MISSION AREA ========== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-stretch relative">

          {/* --- Central Abstract Visual (behind both columns) --- */}
          <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5 }}
              className="relative"
            >
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="w-56 h-56 rounded-full border border-white/[0.06]"
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
              {/* Inner orb */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-36 h-36 rounded-full bg-white/[0.04] backdrop-blur-[24px] border border-white/[0.08] shadow-[0_0_60px_rgba(255,255,255,0.02)]"
              />
            </motion.div>
          </div>

          {/* Mobile glass accent */}
          <div className="lg:hidden flex justify-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-24 h-24 rounded-full bg-white/[0.04] backdrop-blur-[20px] border border-white/[0.08]"
              />
            </motion.div>
          </div>

          {/* --- LEFT: Vision --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="relative z-10 p-8 md:p-10 lg:p-12 bg-white/[0.04] backdrop-blur-[24px] rounded-[2rem] border border-white/[0.08] hover:border-white/[0.14] transition-all duration-500 group"
          >
            <p className="text-brand-cyan font-heading font-bold uppercase tracking-[0.25em] text-[10px] mb-4 group-hover:text-brand-cyan/80 transition-colors">
              Vision
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-heading font-bold text-white leading-snug mb-5">
              To be the globally trusted partner for digital transformation — setting
              new benchmarks in innovation and technology.
            </h3>
            <p className="text-white/40 text-sm leading-relaxed font-body max-w-md">
              We envision a future where every business, regardless of size, leverages
              high-end technology to reach its full potential.
            </p>
          </motion.div>

          {/* --- Connector (desktop) --- */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="w-px h-16 bg-gradient-to-b from-transparent via-white/[0.12] to-transparent origin-center"
            />
          </div>

          {/* --- RIGHT: Mission --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="relative z-10 p-8 md:p-10 lg:p-12 bg-white/[0.04] backdrop-blur-[24px] rounded-[2rem] border border-white/[0.08] hover:border-white/[0.14] transition-all duration-500 group"
          >
            <p className="text-brand-cyan font-heading font-bold uppercase tracking-[0.25em] text-[10px] mb-4 group-hover:text-brand-cyan/80 transition-colors">
              Mission
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-heading font-bold text-white leading-snug mb-5">
              Empower businesses with cutting-edge solutions that drive sustainable
              growth and operational efficiency.
            </h3>
            <p className="text-white/40 text-sm leading-relaxed font-body max-w-md">
              We build robust digital foundations that adapt seamlessly to evolving
              market needs — ensuring every solution creates measurable value.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ========== GOALS AREA ========== */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-brand-cyan font-heading font-bold uppercase tracking-[0.3em] text-xs text-center mb-10"
        >
          Our Goals
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
              className="relative p-8 bg-[#0a0a12]/60 backdrop-blur-sm hover:bg-white/[0.03] transition-colors duration-400 group"
            >
              <span className="block text-brand-cyan/60 font-heading font-bold text-2xl mb-3 group-hover:text-brand-cyan transition-colors duration-400">
                {goal.num}
              </span>
              <h4 className="text-white font-heading font-semibold text-base mb-2">
                {goal.title}
              </h4>
              <p className="text-white/40 text-sm leading-relaxed font-body">
                {goal.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const goals = [
  {
    num: '01',
    title: 'Build Better',
    desc: 'Craft cleaner, faster and more resilient software through modern engineering practices.',
  },
  {
    num: '02',
    title: 'Create Impact',
    desc: 'Deliver solutions that move real business metrics — not just code.',
  },
  {
    num: '03',
    title: 'Scale With Purpose',
    desc: 'Design architectures that grow naturally with your business demands.',
  },
  {
    num: '04',
    title: 'Grow Continuously',
    desc: 'Evolve our capabilities, processes and technology to stay ahead.',
  },
];

export default VisionMissionGoals;
