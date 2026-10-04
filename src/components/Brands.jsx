import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBuilding } from 'react-icons/fa';

// Client brand logos — files `public/brands/` me hain.
// Naya logo add karna ho to file `public/brands/` me rakhen
// aur neeche list me ek entry add kar den.
// Client brand logos — files `public/brands/` me hain.
// Naya logo add karna ho to file `public/brands/` me rakhen
// aur neeche list me ek entry add kar den.
const brandLogos = [
  { name: 'EverCeutical', logo: '/brands/brand10.png' },
  { name: 'Vesco Science Co.', logo: '/brands/brand9.png' },
  { name: 'Nanoventra', logo: '/brands/brand8.avif' },
  { name: 'BioNature', logo: '/brands/brand4.webp' },
  { name: 'BigLou\u2019s', logo: '/brands/brand1.avif' },
  { name: 'The AI Chicks', logo: '/brands/brand7.webp' },
  { name: 'NSD', logo: '/brands/brand6.webp' },
  { name: 'WolfAura Digital Marketing Agency', logo: '/brands/brand5.jpeg' },
  { name: 'Cheese Bites', logo: '/brands/brand3.webp' },
  { name: 'Our Valued Client', logo: '/brands/brand11.svg' },
  { name: 'EventCube', logo: '/brands/brand2.png' },
  { name: 'Instacare', logo: '/brands/brand12.png' },
];

// Jab tak koi logo na ho, placeholder slots dikhenge.
const placeholderBrands = Array.from({ length: 9 }, () => ({ name: 'Your Logo' }));

const TrustedBrands = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center">

          {/* LEFT: Heading */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-[2px] w-8 bg-brand-cyan rounded-full" />
              <span className="text-brand-cyan font-heading font-bold uppercase tracking-[0.25em] text-xs">
                Brands That Trust Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight tracking-tight"
            >
              A Brief List Of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">
                Brands We&rsquo;ve
              </span>{' '}
              Worked With
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-white/60 mt-6 text-base md:text-lg leading-relaxed font-body max-w-md"
            >
              We&rsquo;ve worked with a variety of brands, from small
              businesses to large enterprises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 text-white font-heading font-semibold text-lg border-b border-white/25 pb-2 hover:text-brand-cyan hover:border-brand-cyan/60 transition-all duration-300"
              >
                Become Our Partner
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Logo grid — blue cells with hairline dividers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-black/15 border border-black/15 rounded-2xl overflow-hidden">
            {brandLogos.length > 0 ? (
              brandLogos.map((brand, i) => (
                <motion.div
                  key={brand.name + i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 + Math.floor(i / 3) * 0.08 }}
                  className="group relative bg-[#1db9f6] min-h-[150px] flex items-center justify-center p-6 hover:bg-[#149ed8] transition-colors duration-300 overflow-hidden"
                >
                  {/* strong white aura behind logo so every logo pops crystal clear */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55),transparent_72%)] pointer-events-none" />
                  <img
                    src={brand.logo}
                    alt={`${brand.name} — client of New Ai Tech Softs`}
                    loading="lazy"
                    className="relative max-h-20 w-auto max-w-full object-contain drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))
            ) : (
              placeholderBrands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 + Math.floor(i / 3) * 0.08 }}
                className="group bg-[#1db9f6] min-h-[150px] flex flex-col items-center justify-center gap-3 p-6 hover:bg-[#149ed8] transition-colors duration-300"
              >
                <FaBuilding className="text-3xl text-black/40 group-hover:text-black group-hover:scale-110 transition-all duration-300" />
                <span className="font-heading font-bold text-sm uppercase tracking-[0.2em] text-black/40 group-hover:text-black transition-colors duration-300">
                  {brand.name}
                </span>
              </motion.div>
              ))
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
