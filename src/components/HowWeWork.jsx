import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We understand your business, audience, goals, challenges and current digital presence to build a foundation for success.',
  },
  {
    num: '02',
    title: 'Strategize',
    desc: 'We create a practical digital strategy based on your requirements, market analysis and growth opportunities.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Our team develops your website, digital product, campaign, creative assets or automation system with precision.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'We test, optimize and deploy your solution to create a smooth experience for your customers.',
  },
];

const floatingAnimation1 = {
  y: [0, -6, 0],
  rotate: [0, 0.5, 0],
};
const floatingAnimation2 = {
  y: [0, -5, 0],
  rotate: [0, -0.4, 0],
};
const floatingAnimation3 = {
  y: [0, -7, 0],
  rotate: [0, 0.3, 0],
};
const floatingAnimation4 = {
  y: [0, -4, 0],
  rotate: [0, -0.5, 0],
};

const floatTimings = [5, 6, 5.5, 6.5];

const HowWeWork = () => {
  return (
    <section className="relative py-24 md:py-10 px-4 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-5"
          >
            <div className="w-2 h-2 rounded-sm bg-[#FF6A00] rotate-45" />
            <span className="text-[#FF6A00] text-[11px] font-bold tracking-[3px] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              How We Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[clamp(30px,4.5vw,52px)] font-bold text-[#F5F5F5] leading-[1.08] mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Let us show you how we drive{' '}
            <br className="hidden md:block" />
            your brand to new heights.{' '}
            <span className="inline-block text-[#FF6A00] ml-1 -translate-y-1">
              <svg className="inline-block w-7 h-7 md:w-9 md:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#9A9AA0] text-base md:text-lg leading-relaxed max-w-xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A tight four-step loop. We define the problem, design the system, build it for real, and launch it to win.
          </motion.p>
        </div>

        {/* Desktop: Zigzag layout */}
        <div className="relative hidden md:block">
          <div className="relative w-full max-w-[920px] mx-auto h-[800px]">

            {/* Dotted rope - animated dots flowing along curved paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <path id="rope1" d="M 340 150 C 420 150, 500 220, 580 310" fill="none" />
                <path id="rope2" d="M 580 480 C 500 520, 420 530, 390 540" fill="none" />
                <path id="rope3" d="M 390 690 C 440 700, 500 690, 550 660" fill="none" />
                <path id="rope4" d="M 620 750 C 580 780, 480 800, 400 790" fill="none" />
              </defs>

              {/* Rope 1 dots: Card 01 right edge to Card 02 left edge */}
              {[0, 0.8, 1.6, 2.4, 3.2].map((delay, i) => (
                <circle key={`r1-${i}`} r="3" fill="white" opacity={0.35 - i * 0.05}>
                  <animateMotion dur="4s" repeatCount="indefinite" begin={`${delay}s`}>
                    <mpath href="#rope1" />
                  </animateMotion>
                </circle>
              ))}

              {/* Rope 2 dots: Card 02 bottom to Card 03 top */}
              {[0, 0.8, 1.6, 2.4, 3.2].map((delay, i) => (
                <circle key={`r2-${i}`} r="3" fill="white" opacity={0.35 - i * 0.05}>
                  <animateMotion dur="4s" repeatCount="indefinite" begin={`${delay}s`}>
                    <mpath href="#rope2" />
                  </animateMotion>
                </circle>
              ))}

              {/* Rope 3 dots: Card 03 right to Card 04 left */}
              {[0, 0.8, 1.6, 2.4, 3.2].map((delay, i) => (
                <circle key={`r3-${i}`} r="3" fill="white" opacity={0.35 - i * 0.05}>
                  <animateMotion dur="4s" repeatCount="indefinite" begin={`${delay}s`}>
                    <mpath href="#rope3" />
                  </animateMotion>
                </circle>
              ))}

              {/* Rope 4 dots: Card 04 bottom to Ready text */}
              {[0, 0.7, 1.4, 2.1, 2.8].map((delay, i) => (
                <circle key={`r4-${i}`} r="2.5" fill="#00D9FF" opacity={0.4 - i * 0.06}>
                  <animateMotion dur="3.5s" repeatCount="indefinite" begin={`${delay}s`}>
                    <mpath href="#rope4" />
                  </animateMotion>
                </circle>
              ))}
            </svg>

            {/* Card 01 - Define (Left Top) */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
              animate={floatingAnimation1}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(255,255,255,0.08)' }}
              className="absolute top-[20px] left-[0px] w-[340px] rounded-2xl p-6 z-10 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px) saturate(130%)',
                WebkitBackdropFilter: 'blur(20px) saturate(130%)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
                animation: `float1 ${floatTimings[0]}s ease-in-out infinite`,
              }}
            >
              {/* Pin/knob */}
              <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1a1a1e] border border-white/10 shadow-lg" />
              <span className="text-[#FF6A00] text-sm font-black" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[0].num}</span>
              <div className="w-full h-px bg-white/10 my-3" />
              <h3 className="text-[26px] font-bold text-[#F5F5F5] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[0].title}</h3>
              <p className="text-[#9A9AA0] text-[14px] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[0].desc}</p>
            </motion.div>

            {/* Card 02 - Design (Right Top) */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 2.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
              animate={floatingAnimation2}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(255,255,255,0.08)' }}
              className="absolute top-[210px] right-[0px] w-[340px] rounded-2xl p-6 z-10 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px) saturate(130%)',
                WebkitBackdropFilter: 'blur(20px) saturate(130%)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
                animation: `float2 ${floatTimings[1]}s ease-in-out infinite 0.5s`,
              }}
            >
              <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1a1a1e] border border-white/10 shadow-lg" />
              <span className="text-[#FF6A00] text-sm font-black" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[1].num}</span>
              <div className="w-full h-px bg-white/10 my-3" />
              <h3 className="text-[26px] font-bold text-[#F5F5F5] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[1].title}</h3>
              <p className="text-[#9A9AA0] text-[14px] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[1].desc}</p>
            </motion.div>

            {/* Card 03 - Build (Left Bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 1.8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1.8 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
              animate={floatingAnimation3}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(255,255,255,0.08)' }}
              className="absolute top-[440px] left-[50px] w-[340px] rounded-2xl p-6 z-10 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px) saturate(130%)',
                WebkitBackdropFilter: 'blur(20px) saturate(130%)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
                animation: `float3 ${floatTimings[2]}s ease-in-out infinite 1s`,
              }}
            >
              <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1a1a1e] border border-white/10 shadow-lg" />
              <span className="text-[#FF6A00] text-sm font-black" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[2].num}</span>
              <div className="w-full h-px bg-white/10 my-3" />
              <h3 className="text-[26px] font-bold text-[#F5F5F5] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[2].title}</h3>
              <p className="text-[#9A9AA0] text-[14px] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[2].desc}</p>
            </motion.div>

            {/* Card 04 - Launch (Right Bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
              animate={floatingAnimation4}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(255,255,255,0.08)' }}
              className="absolute top-[560px] right-[30px] w-[340px] rounded-2xl p-6 z-10 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px) saturate(130%)',
                WebkitBackdropFilter: 'blur(20px) saturate(130%)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
                animation: `float4 ${floatTimings[3]}s ease-in-out infinite 1.5s`,
              }}
            >
              <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1a1a1e] border border-white/10 shadow-lg" />
              <span className="text-[#FF6A00] text-sm font-black" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[3].num}</span>
              <div className="w-full h-px bg-white/10 my-3" />
              <h3 className="text-[26px] font-bold text-[#F5F5F5] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[3].title}</h3>
              <p className="text-[#9A9AA0] text-[14px] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[3].desc}</p>
            </motion.div>

            {/* Ready to be delivered */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute bottom-[10px] left-[280px] z-10"
              style={{ transform: 'rotate(-6deg)' }}
            >
              <p className="text-brand-cyan font-bold text-lg italic" style={{ fontFamily: 'Inter, sans-serif' }}>Ready to be delivered!</p>
              <svg className="w-5 h-5 text-brand-cyan mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>

          </div>
        </div>

        {/* Tablet: Smaller zigzag */}
        <div className="relative hidden sm:block md:hidden">
          <div className="relative w-full max-w-[600px] mx-auto h-[650px]">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <path id="tRope1" d="M 260 100 C 310 100, 340 140, 380 180" fill="none" />
                <path id="tRope2" d="M 440 300 C 400 340, 340 350, 280 360" fill="none" />
                <path id="tRope3" d="M 340 460 C 380 470, 420 460, 460 440" fill="none" />
              </defs>
              {[0, 0.8, 1.6, 2.4].map((delay, i) => (
                <circle key={`tr1-${i}`} r="2.5" fill="white" opacity={0.3 - i * 0.05}>
                  <animateMotion dur="3.5s" repeatCount="indefinite" begin={`${delay}s`}>
                    <mpath href="#tRope1" />
                  </animateMotion>
                </circle>
              ))}
              {[0, 0.8, 1.6, 2.4].map((delay, i) => (
                <circle key={`tr2-${i}`} r="2.5" fill="white" opacity={0.3 - i * 0.05}>
                  <animateMotion dur="3.5s" repeatCount="indefinite" begin={`${delay}s`}>
                    <mpath href="#tRope2" />
                  </animateMotion>
                </circle>
              ))}
              {[0, 0.8, 1.6, 2.4].map((delay, i) => (
                <circle key={`tr3-${i}`} r="2.5" fill="white" opacity={0.3 - i * 0.05}>
                  <animateMotion dur="3.5s" repeatCount="indefinite" begin={`${delay}s`}>
                    <mpath href="#tRope3" />
                  </animateMotion>
                </circle>
              ))}
            </svg>

            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className={`absolute w-[260px] rounded-2xl p-5 z-10 ${
                  i === 0 ? 'top-0 left-0 -rotate-2' :
                  i === 1 ? 'top-[130px] right-0 rotate-2' :
                  i === 2 ? 'top-[280px] left-[30px] rotate-1' :
                  'top-[410px] right-[20px] -rotate-1'
                }`}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(20px) saturate(130%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(130%)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
                  animation: `float${i + 1} ${floatTimings[i]}s ease-in-out infinite ${i * 0.4}s`,
                }}
              >
                <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#1a1a1e] border border-white/10 shadow-lg" />
                <span className="text-[#FF6A00] text-xs font-black" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[i].num}</span>
                <div className="w-full h-px bg-white/10 my-2" />
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[i].title}</h3>
                <p className="text-[#9A9AA0] text-[13px] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>{steps[i].desc}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-[-20px] left-[180px] z-10"
              style={{ transform: 'rotate(-6deg)' }}
            >
              <p className="text-brand-cyan font-bold text-sm italic" style={{ fontFamily: 'Inter, sans-serif' }}>Ready to be delivered!</p>
              <svg className="w-4 h-4 text-brand-cyan mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Mobile: Vertical with animated dots */}
        <div className="sm:hidden relative">
          <svg className="absolute left-[22px] top-0 bottom-[60px] w-2 pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <path id="mRope" d="M 4 0 L 4 100%" fill="none" />
            </defs>
            {[0, 0.4, 0.8, 1.2, 1.6, 2.0, 2.4, 2.8].map((delay, i) => (
              <circle key={`mr-${i}`} cx="4" r="2" fill="white" opacity={0.3 - i * 0.02}>
                <animateMotion dur="3s" repeatCount="indefinite" begin={`${delay}s`} path="M 4 0 L 4 600" />
              </circle>
            ))}
          </svg>
          <div className="space-y-5 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative ml-[44px] rounded-2xl p-5"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(20px) saturate(130%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(130%)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
                  animation: `float${i + 1} ${floatTimings[i]}s ease-in-out infinite ${i * 0.3}s`,
                }}
              >
                <div className="absolute left-[-34px] top-5 w-3.5 h-3.5 rounded-full bg-[#1a1a1e] border-2 border-[#FF6A00]/50 shadow-lg" />
                <span className="text-[#FF6A00] text-xs font-black" style={{ fontFamily: 'Inter, sans-serif' }}>{step.num}</span>
                <div className="w-full h-px bg-white/10 my-2" />
                <h3 className="text-lg font-bold text-[#F5F5F5] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{step.title}</h3>
                <p className="text-[#9A9AA0] text-[13px] leading-[1.6]" style={{ fontFamily: 'Inter, sans-serif' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="ml-[44px] mt-8"
            style={{ transform: 'rotate(-6deg)' }}
          >
            <p className="text-brand-cyan font-bold text-sm italic" style={{ fontFamily: 'Inter, sans-serif' }}>Ready to be delivered!</p>
            <svg className="w-4 h-4 text-brand-cyan mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>

      </div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-6px) rotate(-2.5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(2.5deg); }
          50% { transform: translateY(-5px) rotate(3deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(1.8deg); }
          50% { transform: translateY(-7px) rotate(2.2deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-4px) rotate(-1.5deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes float1, @keyframes float2, @keyframes float3, @keyframes float4 {
            animation: none !important;
          }
        }
      `}</style>

    </section>
  );
};

export default HowWeWork;
