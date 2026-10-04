import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaShoppingBag, FaCheckCircle } from 'react-icons/fa';

const badges = [
  { name: 'Clutch', sub: 'Reviews', stars: true },
  { name: 'crunchbase', sub: 'Reviews', stars: true },
  { name: 'G2 Reviews', sub: null, stars: true },
  { name: 'Trustpilot', sub: 'Reviews', stars: true },
  { name: 'shopify', sub: 'Certified Partners', stars: false, icon: true },
  { name: 'Google', sub: 'Reviews', stars: true },
  { name: 'shopify', sub: 'Reviews', stars: true, icon: true },
  { name: 'shopifyplus', sub: 'Reviews', stars: true },
];

const Stars = () => (
  <div className="flex items-center gap-1 mt-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} className="text-brand-yellow text-sm" />
    ))}
  </div>
);

const Recognized = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight tracking-tight max-w-3xl"
        >
          Recognized{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">
            E-Commerce Development
          </span>{' '}
          Agency
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="text-white/60 mt-6 text-base md:text-lg leading-relaxed font-body max-w-4xl"
        >
          New Ai Tech Softs has been recognized as a top e-commerce development agency by
          Google Reviews, Clutch, Trustpilot, G2, and Shopify.
        </motion.p>

        {/* Badge grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 + Math.floor(i / 4) * 0.08 }}
              className="group bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[130px] hover:bg-white/[0.07] hover:border-brand-cyan/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                {badge.icon && <FaShoppingBag className="text-green-400 text-2xl" />}
                <span className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                  {badge.name}
                </span>
              </div>
              {badge.sub && (
                <span className="text-white/50 text-sm font-body mt-1 flex items-center gap-1.5">
                  {badge.sub}
                  {!badge.stars && <FaCheckCircle className="text-brand-cyan text-xs" />}
                </span>
              )}
              {badge.stars && <Stars />}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-white/60 mt-10 text-base md:text-lg leading-relaxed font-body max-w-4xl"
        >
          As a leading software house, we&rsquo;re proud to be recognized for our expertise
          in web development, conversion rate optimization, e-commerce SEO, and e-commerce
          development.
        </motion.p>

      </div>
    </section>
  );
};

export default Recognized;
