// LoadingScreen.jsx - Premium Smart Preloader
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.webp';

const LoadingScreen = ({ onComplete, maxTimeout = 4000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('initializing');
  const [showContent, setShowContent] = useState(false);

  const startTime = useMemo(() => Date.now(), []);

  // Track critical resources
  useEffect(() => {
    const loadCriticalResources = async () => {
      setStatus('loading');
      let loadedCount = 0;
      const totalSteps = 5;

      const updateProgress = () => {
        loadedCount++;
        const newProgress = Math.min(Math.round((loadedCount / totalSteps) * 100), 100);
        setProgress(newProgress);
        return newProgress;
      };

      try {
        // Step 1: DOM Ready
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
          updateProgress();
        } else {
          await new Promise((resolve) => {
            document.addEventListener('DOMContentLoaded', () => {
              updateProgress();
              resolve();
            }, { once: true });
          });
        }

        // Step 2: Fonts API
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }
        updateProgress();

        // Step 3: Preload critical fonts
        const fontPromises = [
          'Inter:wght@400',
          'Inter:wght@500',
          'Poppins:wght@600',
          'Poppins:wght@700',
          'Poppins:wght@800',
        ].map(async (fontSpec) => {
          try {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'font';
            link.href = `https://fonts.googleapis.com/css2?family=${fontSpec.replace(':', '&')}&display=swap`;
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
          } catch {
            // Font preload failed - continue
          }
        });
        await Promise.allSettled(fontPromises);
        updateProgress();

        // Step 4: Preload logo
        await new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = logo;
        });
        updateProgress();

        // Step 5: Minimum display time for smooth UX
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, 800 - elapsed);
        if (remaining > 0) {
          await new Promise((resolve) => setTimeout(resolve, remaining));
        }
        updateProgress();

        setProgress(100);
        setStatus('ready');
      } catch {
        setProgress(100);
        setStatus('ready');
      }
    };

    loadCriticalResources();

    const safetyTimeout = setTimeout(() => {
      if (status !== 'complete') {
        setProgress(100);
        setStatus('timeout');
      }
    }, maxTimeout);

    return () => clearTimeout(safetyTimeout);
  }, [maxTimeout, startTime, status]);

  // Handle completion
  useEffect(() => {
    if (progress >= 100 && status === 'ready') {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 500);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [progress, status, onComplete]);

  // Also listen for actual page load
  useEffect(() => {
    const handleLoad = () => {
      if (progress < 100) {
        setProgress(100);
        setStatus('ready');
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [progress]);

  // Show content after initial animation
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533] via-[#0c1445] to-[#0a0a2e]" />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-[20%] left-[15%] w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-[80px]"
            animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[15%] w-[250px] h-[250px] rounded-full bg-pink-500/15 blur-[80px]"
            animate={{ scale: [1, 1.15, 1], x: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-cyan-400/10 blur-[60px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating particles */}
          {[
            { top: '25%', left: '20%', size: 'w-3 h-3', color: 'bg-pink-400/40', delay: 0 },
            { top: '30%', right: '25%', size: 'w-2.5 h-2.5', color: 'bg-purple-400/40', delay: 0.5 },
            { bottom: '30%', left: '25%', size: 'w-4 h-4', color: 'bg-cyan-400/30', delay: 1 },
            { bottom: '25%', right: '20%', size: 'w-2.5 h-2.5', color: 'bg-orange-400/30', delay: 1.5 },
            { top: '60%', left: '10%', size: 'w-2 h-2', color: 'bg-blue-400/25', delay: 0.8 },
            { top: '15%', right: '10%', size: 'w-3 h-3', color: 'bg-purple-300/30', delay: 1.2 },
          ].map((particle, i) => (
            <motion.div
              key={i}
              className={`absolute ${particle.size} rounded-full ${particle.color}`}
              style={{ top: particle.top, left: particle.left, right: particle.right, bottom: particle.bottom }}
              animate={{ y: [0, -15, 0], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: particle.delay }}
            />
          ))}

          {/* Center content */}
          {showContent && (
            <div className="relative z-10 flex flex-col items-center gap-8 px-4">
              {/* Logo with glow */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Glow ring */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-mid/20 via-brand-cyan/20 to-brand-mid/20 blur-xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative w-20 h-20 rounded-xl flex items-center justify-center">
                  <img src={logo} alt="New Tech Softs" className="w-full h-full object-contain" />
                </div>
              </motion.div>

              {/* Company name */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="text-center"
              >
                <h1 className="text-2xl font-heading font-bold text-white tracking-widest">
                  NEW TECH <span className="text-brand-cyan">SOFTS</span>
                </h1>
              </motion.div>

              {/* Tagline */}
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                className="text-center max-w-md"
              >
                <p className="text-white/50 text-sm font-body leading-relaxed tracking-wide">
                  Building Digital Experiences That Move Your Business Forward
                </p>
                <div className="flex items-center justify-center gap-2 mt-3 flex-wrap">
                  {['Web Development', 'App Development', 'AI Solutions'].map((service, i) => (
                    <React.Fragment key={service}>
                      {i > 0 && <span className="w-1 h-1 rounded-full bg-brand-cyan/40" />}
                      <span className="text-white/30 text-[11px] font-body tracking-wider uppercase">
                        {service}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>

              {/* Progress section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="w-56 flex flex-col items-center gap-3"
              >
                {/* Progress bar */}
                <div className="w-full h-[1px] bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-mid via-brand-cyan to-brand-mid rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: 'linear' }}
                  />
                </div>

                {/* Loading status */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-white/25 text-[10px] font-body tracking-[0.15em] uppercase"
                >
                  Loading
                </motion.p>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
