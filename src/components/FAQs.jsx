import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  { q: "What services do you offer?", a: "We specialize in full-stack web development, mobile app development (Flutter/React Native), and digital solutions for modern businesses." },
  { q: "How does the design process work?", a: "Our process includes research, UI/UX design, iterative development, and thorough testing to ensure the best results." },
  { q: "How long does a project usually take?", a: "Timelines vary based on complexity, but we utilize agile methods to ensure timely and efficient delivery." },
  { q: "What do I need to provide before starting a project?", a: "Typically, I'll need information about your business goals, branding assets, and any specific content like text or images." },
  { q: "Do you offer revisions?", a: "Yes, we work closely with you to ensure the final product aligns perfectly with your vision and requirements." }
];

const FAQItem = ({ faq, index, isActive, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className={`bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl overflow-hidden transition-all duration-300 ${
      isActive ? 'border-brand-cyan/40 shadow-brand-cyan/10' : ''
    }`}
  >
    <button
      onClick={onClick}
      className="w-full text-left py-5 px-6 flex justify-between items-center gap-4 group"
    >
      <span className={`text-lg font-heading font-semibold transition-colors ${
        isActive ? 'text-brand-cyan' : 'text-white group-hover:text-brand-cyan'
      }`}>
        {faq.q}
      </span>
      <motion.span
        animate={{ rotate: isActive ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-white/40 flex-shrink-0"
      >
        <FaChevronDown className="text-sm" />
      </motion.span>
    </button>
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-5 text-white/60 leading-relaxed font-body">
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative py-24 px-4 overflow-hidden">

      {/* Glow orb */}
      <div className="pointer-events-none absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-brand-mid/[0.07] blur-[100px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">

        {/* Left side */}
        <div>
          <span className="inline-block text-brand-cyan text-[11px] font-bold tracking-[3px] uppercase mb-4 font-body">
            {'{ FAQs }'}
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-heading font-bold text-white leading-tight mb-6">
            Frequently Asked{' '}
            <span className="text-brand-cyan">Questions</span>
          </h2>
          <p className="text-white/60 font-body leading-relaxed">
            Here are answers to some of the most common questions we receive. If you don't see your question here, feel free to reach out — we're happy to help!
          </p>

          {/* Decorative element */}
          <div className="mt-10 p-6 bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] shadow-xl rounded-2xl">
            <p className="text-white/40 text-sm font-body italic">
              "Building trust through transparency and excellence in every project."
            </p>
            <div className="mt-3 h-1 w-12 bg-brand-cyan rounded-full" />
          </div>
        </div>

        {/* Right side - Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQs;
