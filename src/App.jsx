import React, { useState, useEffect, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Chatbot from './components/Chatbot';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';

// Background resource loader
import { prefetchResource, BACKGROUND_RESOURCES } from './utils/resourcePreloader';

// Lazy-loaded Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail'));
const Contact = React.lazy(() => import('./pages/Contact'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogDetail = React.lazy(() => import('./pages/BlogDetail'));
const ProductPage = React.lazy(() => import('./pages/Product'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-2 border-brand-cyan/20 border-t-brand-cyan rounded-full animate-spin" />
  </div>
);

const AnalyticsTracker = () => {
  const location = useLocation();
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-88G6VJT1LN', {
        page_path: location.pathname,
      });
    }
  }, [location]);
  return null;
};

// Background loader - prefetches other page resources after Home loads
const BackgroundResourceLoader = ({ enabled }) => {
  useEffect(() => {
    if (!enabled) return;

    const timer = setTimeout(() => {
      BACKGROUND_RESOURCES.pages.forEach((page) => {
        prefetchResource(page, 'document');
      });
      BACKGROUND_RESOURCES.images.forEach((img) => {
        prefetchResource(img, 'image');
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [enabled]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [homeReady, setHomeReady] = useState(false);

  // Prevent scroll during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  // Ensure scroll at top after preloader completes
  useEffect(() => {
    if (!loading) {
      // Force scroll to top immediately
      window.scrollTo(0, 0);

      // Mark home as ready after brief mount delay
      const timer = setTimeout(() => setHomeReady(true), 100);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <HelmetProvider>
      <Router>
        {/* Smart Preloader */}
        {loading && (
          <LoadingScreen
            onComplete={() => setLoading(false)}
            maxTimeout={4000}
          />
        )}

        <AnalyticsTracker />
        <ScrollToTop />
        <AnimatedBackground />

        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar />

          <main className="flex-grow">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/project/:slug" element={<ProjectDetail />} />
                <Route path="/service/:slug" element={<ServiceDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
          <WhatsAppButton />
          <Chatbot />
        </div>

        {/* Background Resource Loader */}
        <BackgroundResourceLoader enabled={homeReady} />
      </Router>
    </HelmetProvider>
  );
}

export default App;
