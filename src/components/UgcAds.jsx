import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { FaVolumeMute, FaVolumeUp, FaChevronLeft, FaChevronRight, FaStar, FaPlay } from 'react-icons/fa';
import { ugcVideos } from '../data/ugcVideos';

const pills = ['UGC Ads', 'Product Videos', 'Reels & Shorts', 'Promo Videos', 'Brand Stories', 'Ad Creatives'];

const UgcAds = () => {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  const total = ugcVideos.length;

  // Perf: only load/play videos when scrolled into view
  const playerWrapRef = useRef(null);
  const stripRef = useRef(null);
  const playerInView = useInView(playerWrapRef, { amount: 0.2 });
  const playerStarted = useInView(playerWrapRef, { once: true, amount: 0.2 });
  const stripInView = useInView(stripRef, { amount: 0.05 });

  const goTo = (i) => setCurrent(((i % total) + total) % total);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Keep mute state in sync + autoplay when switching videos + pause offscreen
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    if (playerInView) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [current, muted, playerInView, playerStarted]);

  const toggleMute = () => setMuted((m) => !m);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-brand-cyan font-heading font-bold uppercase tracking-[0.25em] text-xs mb-5"
            >
              UGC Ads &amp; Video Advertising
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight tracking-tight"
            >
              Videos That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">
                Stop the Scroll
              </span>{' '}
              &amp; Sell
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-white/60 mt-6 text-base md:text-lg leading-relaxed font-body max-w-xl"
            >
              Authentic UGC-style ads, product videos and reels — scripted, shot and edited
              for TikTok, Reels, Shorts &amp; Meta ads.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-wrap gap-2.5 mt-8"
            >
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="text-sm font-heading font-semibold text-white/70 bg-white/[0.06] border border-white/[0.12] rounded-full px-5 py-2 hover:border-brand-cyan/40 hover:text-brand-cyan transition-all duration-300"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-9"
            >
              <Link to="/service/ugc-video-ads">
                <button className="group bg-gradient-to-r from-brand-mid to-purple-600 text-white px-8 py-3.5 rounded-full font-heading font-bold text-base shadow-lg shadow-brand-mid/25 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                  Explore Video Services
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Player card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div ref={playerWrapRef} className="relative w-full max-w-[320px] aspect-[9/16] max-h-[560px] rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl bg-black">
              {playerStarted ? (
              <video
                key={current}
                ref={videoRef}
                src={ugcVideos[current].src}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted={muted}
                loop={false}
                playsInline
                preload="auto"
                onEnded={next}
              />
              ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60">
                  <FaPlay className="ml-1" />
                </span>
              </div>
              )}

              {/* Top badges */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="flex items-center gap-1.5 bg-red-600 text-white text-[11px] font-heading font-bold px-2.5 py-1 rounded-md shadow-lg">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  REC
                </span>
                <span className="bg-black/60 backdrop-blur-sm text-white/90 text-[11px] font-heading font-semibold px-2.5 py-1 rounded-md">
                  UGC Ad {String(current + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
                </span>
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md rounded-xl px-4 py-3">
                <p className="text-white text-sm font-heading font-bold leading-snug">
                  {ugcVideos[current].caption}
                </p>
                <p className="text-white/60 text-xs font-body mt-0.5">
                  {ugcVideos[current].sub}
                </p>
              </div>
            </div>

            {/* Stat pill */}
            <div className="mt-4 bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] rounded-full px-5 py-2 flex items-center gap-2 text-sm font-heading font-semibold text-white/80">
              <FaStar className="text-brand-yellow text-xs" />
              3.2x more conversions with UGC video ads
            </div>

            {/* Controls */}
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous video"
                className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/[0.12] text-white/70 hover:text-white hover:bg-white/[0.14] flex items-center justify-center transition-all"
              >
                <FaChevronLeft className="text-xs" />
              </button>

              <div className="flex items-center gap-1.5">
                {ugcVideos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to video ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'w-7 bg-brand-cyan' : 'w-2 bg-white/25 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next video"
                className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/[0.12] text-white/70 hover:text-white hover:bg-white/[0.14] flex items-center justify-center transition-all"
              >
                <FaChevronRight className="text-xs" />
              </button>

              <button
                onClick={toggleMute}
                className="h-10 px-4 rounded-full bg-gradient-to-r from-brand-mid to-purple-600 text-white text-sm font-heading font-bold flex items-center gap-2 shadow-lg shadow-brand-mid/25 hover:shadow-brand-mid/40 transition-all"
              >
                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                {muted ? 'Unmute' : 'Mute'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM: scrolling strip — all ads playing in a line */}
        <div className="mt-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white/40 font-heading font-bold uppercase tracking-[0.25em] text-xs mb-6"
          >
            Recent UGC Ads We Created
          </motion.p>
          <div ref={stripRef} className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-4 animate-infinite-scroll hover:[animation-play-state:paused]">
              {[...ugcVideos, ...ugcVideos].map((v, i) => (
                <div
                  key={i}
                  className="relative w-36 sm:w-44 shrink-0 aspect-[9/16] rounded-2xl overflow-hidden border border-white/[0.1] bg-black group/strip"
                >
                  {stripInView ? (
                  <video
                    src={v.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/50">
                      <FaPlay className="ml-0.5 text-xs" />
                    </span>
                  </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white/90 text-[10px] font-heading font-semibold px-2 py-0.5 rounded-md">
                    UGC {(i % total) + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UgcAds;
