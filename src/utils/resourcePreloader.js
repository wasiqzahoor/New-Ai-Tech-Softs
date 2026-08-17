// resourcePreloader.js - Smart resource preloading utility
// Preloads critical resources and tracks their loading status

const preloadCache = new Map();

/**
 * Preload a font by injecting a link element
 */
export function preloadFont(family, weight = '400', style = 'normal') {
  const key = `font-${family}-${weight}-${style}`;
  if (preloadCache.has(key)) return preloadCache.get(key);

  const promise = new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.href = `https://fonts.googleapis.com/css2?family=${family.replace(/\s+/g, '+')}:wght@${weight}&display=swap`;
    link.crossOrigin = 'anonymous';
    link.onload = () => resolve({ success: true, resource: family });
    link.onerror = () => resolve({ success: false, resource: family, error: 'Font preload failed' });
    document.head.appendChild(link);
  });

  preloadCache.set(key, promise);
  return promise;
}

/**
 * Preload an image by creating a new Image object
 */
export function preloadImage(src) {
  if (preloadCache.has(src)) return preloadCache.get(src);

  const promise = new Promise((resolve) => {
    if (!src || src.startsWith('data:')) {
      resolve({ success: true, resource: src });
      return;
    }

    const img = new Image();
    img.onload = () => resolve({ success: true, resource: src });
    img.onerror = () => resolve({ success: false, resource: src, error: 'Image preload failed' });
    img.src = src;
  });

  preloadCache.set(src, promise);
  return promise;
}

/**
 * Preload multiple images in parallel
 */
export function preloadImages(srcArray) {
  return Promise.all(srcArray.map(preloadImage));
}

/**
 * Preload critical CSS
 */
export function preloadCSS(href) {
  const key = `css-${href}`;
  if (preloadCache.has(key)) return preloadCache.get(key);

  const promise = new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    link.onload = () => resolve({ success: true, resource: href });
    link.onerror = () => resolve({ success: false, resource: href, error: 'CSS preload failed' });
    document.head.appendChild(link);
  });

  preloadCache.set(key, promise);
  return promise;
}

/**
 * Prefetch a resource for later use (non-blocking)
 */
export function prefetchResource(href, as = 'script') {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = as;
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Load a script dynamically
 */
export function loadScript(src) {
  const key = `script-${src}`;
  if (preloadCache.has(key)) return preloadCache.get(key);

  const promise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve({ success: true, resource: src });
    script.onerror = () => resolve({ success: false, resource: src, error: 'Script load failed' });
    document.head.appendChild(script);
  });

  preloadCache.set(key, promise);
  return promise;
}

/**
 * Wait for DOM to be ready
 */
export function waitForDOM() {
  return new Promise((resolve) => {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      resolve({ success: true, resource: 'dom' });
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        resolve({ success: true, resource: 'dom' });
      }, { once: true });
    }
  });
}

/**
 * Wait for fonts to be ready
 */
export function waitForFonts() {
  return new Promise((resolve) => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        resolve({ success: true, resource: 'fonts' });
      });
    } else {
      // Fallback: wait a short time
      setTimeout(() => resolve({ success: true, resource: 'fonts' }), 500);
    }
  });
}

/**
 * Critical resources configuration for Home page
 */
export const CRITICAL_RESOURCES = {
  fonts: [
    { family: 'Inter', weight: '400' },
    { family: 'Inter', weight: '500' },
    { family: 'Inter', weight: '600' },
    { family: 'Poppins', weight: '600' },
    { family: 'Poppins', weight: '700' },
    { family: 'Poppins', weight: '800' },
  ],
  images: [
  ],
};

/**
 * Background resources to prefetch after Home is visible
 */
export const BACKGROUND_RESOURCES = {
  pages: [
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/products',
    '/blog',
  ],
  images: [
    // Project images from Cloudinary
    'https://res.cloudinary.com/dwhj8qfca/image/upload/f_webp/v1776867745/SS1_gyr3jr.png',
  ],
};
