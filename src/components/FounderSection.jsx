import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaCheckCircle, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import CeoOfNewAiTechSofts from '../assets/team/CeoOfNewAiTechSofts.webp';

const stats = [
  { num: '5+', label: 'Years Experience' },
  { num: '100+', label: 'Projects Delivered' },
  { num: '50+', label: 'Happy Clients' },
];

const goals = [
  { icon: <FaRocket />, text: "Build Pakistan's most trusted software house — delivering world-class solutions globally." },
  { icon: <FaCode />, text: "Empower Pakistani startups with innovative, scalable, and affordable digital technology." },
  { icon: <FaCheckCircle />, text: "Mentor the next generation of developers and create meaningful tech opportunities in Pakistan." },
];

const socials = [
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/chaudhary-wasiq-zahoor-bbab952b0/', label: 'LinkedIn' },
  { icon: <FaGithub />, href: 'https://github.com/wasiqzahoor', label: 'GitHub' },
  { icon: <FaEnvelope />, href: 'mailto:info@newaitechsofts.com', label: 'Email' },
];

const FounderSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── TOP: Eyebrow + Headline ── */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-cyan font-heading font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            Meet the Visionary
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight"
          >
            The Mind Behind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">
              New Ai Tech Softs
            </span>
          </motion.h2>
        </div>

        {/* ── MAIN: Asymmetric Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-start">

          {/* ── LEFT: Photo + Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            {/* Photo */}
            <div className="relative w-full max-w-sm lg:max-w-none">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] bg-white/[0.04] border border-white/[0.08]">
                <img
                  src={CeoOfNewAiTechSofts}
                  alt="Chaudhary Wasiq Zahoor — CEO & Founder of New Ai Tech Softs"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute bottom-5 left-5 right-5 bg-white/[0.08] backdrop-blur-[20px] border border-white/[0.12] rounded-2xl p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                    <img src={logo} alt="New Ai Tech Softs" className="w-full h-full object-contain rounded-[5%]" />
                  </div>
                  <div>
                    <p className="text-white font-heading font-bold text-sm leading-tight">CEO & Founder</p>
                    <p className="text-white/40 text-xs font-body">New Ai Tech Softs</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm lg:max-w-none mt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                  className="bg-white/[0.04] backdrop-blur-[18px] border border-white/[0.06] rounded-xl p-4 text-center hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-400"
                >
                  <p className="text-brand-cyan text-xl font-heading font-bold">{s.num}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider font-body mt-1 leading-tight">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Name + Title */}
            <div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                Chaudhary Wasiq Zahoor
              </h3>
              <p className="text-brand-cyan font-heading font-semibold text-sm mt-2 tracking-wide">
                CEO & Founder, New Ai Tech Softs
              </p>
            </div>

            {/* Bio */}
            <p className="text-white/55 text-base md:text-lg leading-relaxed font-body max-w-xl">
              A passionate software engineer and entrepreneur from Islamabad, I founded New Ai Tech Softs
              with one mission — to transform bold ideas into powerful digital products that drive real
              business growth.
            </p>

            {/* Quote */}
            <div className="relative pl-6 border-l-2 border-brand-cyan/30">
              <p className="text-white/70 text-lg md:text-xl font-body italic leading-relaxed">
                "Technology should solve real problems. At New Ai Tech Softs, we don't just write code —
                we craft digital experiences that make a difference."
              </p>
            </div>

            {/* Goals */}
            <div>
              <h4 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2.5">
                <span className="w-1 h-5 bg-gradient-to-b from-brand-cyan to-blue-400 rounded-full inline-block" />
                Goals & Vision
              </h4>
              <div className="space-y-3">
                {goals.map((goal, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-3 text-white/50 text-sm leading-relaxed font-body"
                  >
                    <span className="text-brand-cyan mt-0.5 shrink-0">{goal.icon}</span>
                    <p>{goal.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-1">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-brand-cyan hover:bg-white/[0.1] hover:border-brand-cyan/25 transition-all duration-300"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
