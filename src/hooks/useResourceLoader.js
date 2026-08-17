// useResourceLoader.js - Custom hook for tracking critical resource loading
import { useState, useEffect, useCallback, useRef } from 'react';
import {
  preloadFont,
  preloadImage,
  waitForDOM,
  waitForFonts,
  CRITICAL_RESOURCES,
} from '../utils/resourcePreloader';

const DEFAULT_MAX_TIMEOUT = 4000; // 4 seconds max
const MINIMUM_DISPLAY_TIME = 800; // 800ms minimum preloader display

/**
 * Custom hook that tracks critical resource loading
 * Returns loading state, progress, and status details
 */
export function useResourceLoader(maxTimeout = DEFAULT_MAX_TIMEOUT) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('initializing');
  const [loadedResources, setLoadedResources] = useState([]);
  const [failedResources, setFailedResources] = useState([]);
  const startTimeRef = useRef(Date.now());
  const completedRef = useRef(false);

  const updateProgress = useCallback((loaded, total) => {
    const newProgress = Math.min(Math.round((loaded / total) * 100), 100);
    setProgress(newProgress);
  }, []);

  const completeLoading = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;

    const elapsed = Date.now() - startTimeRef.current;
    const remaining = Math.max(0, MINIMUM_DISPLAY_TIME - elapsed);

    setTimeout(() => {
      setLoading(false);
      setStatus('complete');
    }, remaining);
  }, []);

  useEffect(() => {
    const loadCriticalResources = async () => {
      setStatus('loading');
      let loadedCount = 0;
      let totalCount = 0;

      // Count total resources
      const totalFonts = CRITICAL_RESOURCES.fonts.length;
      const totalImages = CRITICAL_RESOURCES.images.length;
      totalCount = totalFonts + totalImages + 2; // +2 for DOM and fonts API

      try {
        // Phase 1: DOM Ready (parallel)
        const domPromise = waitForDOM().then((result) => {
          loadedCount++;
          updateProgress(loadedCount, totalCount);
          setLoadedResources((prev) => [...prev, 'dom']);
          return result;
        });

        // Phase 2: Start font preloads (parallel)
        const fontPromises = CRITICAL_RESOURCES.fonts.map((font) => {
          return preloadFont(font.family, font.weight).then((result) => {
            loadedCount++;
            updateProgress(loadedCount, totalCount);
            if (result.success) {
              setLoadedResources((prev) => [...prev, `font-${font.family}`]);
            } else {
              setFailedResources((prev) => [...prev, result]);
            }
            return result;
          });
        });

        // Phase 3: Start image preloads (parallel)
        const imagePromises = CRITICAL_RESOURCES.images.map((src) => {
          return preloadImage(src).then((result) => {
            loadedCount++;
            updateProgress(loadedCount, totalCount);
            if (result.success) {
              setLoadedResources((prev) => [...prev, `image-${src}`]);
            } else {
              setFailedResources((prev) => [...prev, result]);
            }
            return result;
          });
        });

        // Wait for DOM first
        await domPromise;

        // Then wait for fonts API
        const fontsApiPromise = waitForFonts().then((result) => {
          loadedCount++;
          updateProgress(loadedCount, totalCount);
          setLoadedResources((prev) => [...prev, 'fonts-api']);
          return result;
        });

        // Wait for all fonts and images in parallel
        await Promise.all([...fontPromises, ...imagePromises, fontsApiPromise]);

        // All critical resources loaded
        setProgress(100);
        setStatus('ready');
        completeLoading();
      } catch (error) {
        // Even if something fails, complete after timeout
        console.warn('Resource loading error:', error);
        setProgress(100);
        setStatus('ready');
        completeLoading();
      }
    };

    loadCriticalResources();

    // Safety timeout - force complete after maxTimeout
    const safetyTimeout = setTimeout(() => {
      if (!completedRef.current) {
        console.warn('Preloader safety timeout reached');
        setProgress(100);
        setStatus('timeout');
        completeLoading();
      }
    }, maxTimeout);

    return () => clearTimeout(safetyTimeout);
  }, [maxTimeout, updateProgress, completeLoading]);

  return {
    loading,
    progress,
    status,
    loadedResources,
    failedResources,
  };
}

export default useResourceLoader;
