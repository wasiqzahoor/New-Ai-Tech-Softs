import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { testimonials } from '../data/testimonialData';

const TestimonialCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-8 group hover:border-brand-cyan/30 hover:shadow-brand-cyan/10 hover:-translate-y-2 transition-all duration-300"
  >
    <div className="mb-6">
      <FaQuoteLeft className="text-4xl text-brand-mid/30 group-hover:text-brand-cyan/50 transition-colors" />
    </div>

    <p className="text-white/60 mb-6 italic leading-relaxed font-body">
      "{item.review}"
    </p>

    <div className="flex items-center gap-4 border-t border-white/[0.08] pt-6">
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 rounded-full border-2 border-brand-cyan/30 object-cover"
      />
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-semibold text-sm font-heading truncate">{item.name}</h4>
        <p className="text-brand-cyan text-xs font-body">{item.role}</p>
      </div>
      <div className="flex gap-0.5 text-brand-cyan text-xs flex-shrink-0">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">

      {/* Glow orb */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-mid/[0.06] blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-cyan text-[11px] font-bold tracking-[3px] uppercase mb-4 font-body">
            {'{ Testimonials }'}
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-heading font-bold text-white mb-4">
            What Our <span className="text-brand-cyan">Clients Say</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-body leading-relaxed">
            We don't just build software; we build lasting partnerships. Here is what our partners have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
