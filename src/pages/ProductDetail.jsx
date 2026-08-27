import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaExternalLinkAlt, FaArrowLeft, FaRocket, FaCheckCircle, FaArrowRight, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { products } from '../data/productData';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Product Not Found</h2>
          <p className="font-body text-white/60 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="text-brand-cyan hover:underline font-heading font-bold">Back to Products</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">

      <Helmet>
        <title>{product.name} - Free Online Tool | New Ai Tech Softs</title>
        <meta name="description" content={`${product.details} Try ${product.name} for free at New Ai Tech Softs - a leading software house in Islamabad, Pakistan. No sign-up required.`} />
        <meta name="keywords" content={`${product.name}, ${product.tags.join(', ')}, free online tool, New Ai Tech Softs, software house Islamabad, IT company Pakistan, web tools, browser tools, free software`} />
        <meta name="author" content="New Ai Tech Softs" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={`https://newaitechsofts.com/product/${product.slug}`} />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="geo.region" content="PK-IST" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.6844;73.0479" />
        <meta name="ICBM" content="33.6844, 73.0479" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://newaitechsofts.com/product/${product.slug}`} />
        <meta property="og:title" content={`${product.name} - Free Online Tool | New Ai Tech Softs`} />
        <meta property="og:description" content={`${product.details} Try it free at newaitechsofts.com`} />
        <meta property="og:image" content={product.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${product.name} - New Ai Tech Softs`} />
        <meta property="og:site_name" content="New Ai Tech Softs" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://newaitechsofts.com/product/${product.slug}`} />
        <meta name="twitter:title" content={`${product.name} - Free Online Tool | New Ai Tech Softs`} />
        <meta name="twitter:description" content={`${product.details} Try it free at newaitechsofts.com`} />
        <meta name="twitter:image" content={product.image} />

        {/* JSON-LD: SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": product.name,
            "description": product.longDescription || product.details,
            "image": product.image,
            "url": product.url,
            "applicationCategory": "WebApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "New Ai Tech Softs",
              "url": "https://newaitechsofts.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Islamabad",
                "addressCountry": "PK"
              }
            },
            "softwareVersion": "1.0",
            "screenshot": product.image,
            "featureList": product.features.join(', '),
            "applicationSubCategory": product.category,
            "downloadUrl": product.url,
            "installUrl": product.url,
            "browserRequirements": "Requires modern web browser",
            "permissions": "none",
            "isAccessibleForFree": true
          })}
        </script>

        {/* JSON-LD: BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://newaitechsofts.com/" },
              { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://newaitechsofts.com/products" },
              { "@type": "ListItem", "position": 3, "name": product.name, "item": `https://newaitechsofts.com/product/${product.slug}` }
            ]
          })}
        </script>

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `${product.name} - Free Online Tool`,
            "description": product.details,
            "url": `https://newaitechsofts.com/product/${product.slug}`,
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "name": "New Ai Tech Softs",
              "url": "https://newaitechsofts.com"
            },
            "about": {
              "@type": "Thing",
              "name": product.name
            },
            "dateModified": "2026-08-17"
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* BACK BUTTON */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/40 hover:text-brand-cyan transition-colors font-heading font-bold uppercase text-xs tracking-widest"
          >
            <FaArrowLeft /> Back to Products
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT: MAIN CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-10"
          >
            {/* Header */}
            <div className="space-y-5">
              <span className="bg-brand-mid/20 text-brand-cyan px-4 py-1.5 rounded-full text-xs font-heading font-black uppercase tracking-widest border border-brand-mid/30">
                {product.category}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-black text-white leading-tight">
                {product.name}
              </h1>
              <p className="font-body text-white/60 text-lg">{product.shortDesc}</p>
            </div>

            {/* Product Image */}
            <div className="rounded-2xl overflow-hidden border border-white/[0.12] shadow-xl bg-white/[0.08] p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={`${product.name} - New Ai Tech Softs`}
                className="max-h-64 w-auto object-contain"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=Product'; }}
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-mid to-purple-600 text-white font-heading font-bold px-8 py-4 rounded-full shadow-lg shadow-brand-mid/20 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all text-sm"
              >
                <FaExternalLinkAlt /> Try {product.name} Free
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/[0.08] text-white/60 font-heading font-bold px-8 py-4 rounded-full border border-white/[0.12] hover:bg-white/[0.14] hover:text-white transition-all text-sm"
              >
                Build Similar Product
              </Link>
            </div>

            {/* Description */}
            <div className="bg-white/[0.08] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.12] shadow-xl">
              <h2 className="font-heading text-2xl font-black text-white mb-6">About {product.name}</h2>
              <p className="font-body text-white/60 leading-relaxed text-lg">
                {product.longDescription || product.details}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white/[0.08] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.12] shadow-xl">
              <h2 className="font-heading text-2xl font-black text-white mb-6">Key Features</h2>
              <div className="flex flex-wrap gap-3">
                {product.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.08] backdrop-blur-md rounded-full border border-white/[0.12] hover:border-brand-mid/30 transition-all"
                  >
                    <FaCheckCircle className="text-brand-cyan text-sm flex-shrink-0" />
                    <span className="font-body text-white/60 text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Share */}
            <div className="pt-8 border-t border-white/[0.12]">
              <div className="flex items-center gap-4">
                <span className="font-heading text-sm font-bold uppercase text-white/40">Share this tool:</span>
                <div className="flex gap-4">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(product.url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-[#0A66C2] text-xl transition-all hover:scale-125"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(product.url)}&text=${encodeURIComponent(`Check out ${product.name} by New Ai Tech Softs`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-[#1DA1F2] text-xl transition-all hover:scale-125"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: SIDEBAR */}
          <aside className="space-y-6">
            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-brand-mid/20 to-purple-600/10 backdrop-blur-xl p-8 rounded-2xl border border-white/[0.12] shadow-xl relative overflow-hidden group"
            >
              <FaRocket className="absolute -bottom-4 -right-4 text-8xl text-brand-mid/10 group-hover:rotate-12 transition-transform" />
              <h3 className="font-heading text-2xl font-black text-white mb-4 relative z-10">Need a Similar Tool?</h3>
              <p className="font-body text-white/60 text-sm mb-6 relative z-10">
                We can build custom web tools, SaaS products, and AI-powered applications for your business.
              </p>
              <Link to="/contact">
                <button className="w-full bg-gradient-to-r from-brand-mid to-purple-600 text-white font-heading font-bold py-4 rounded-full uppercase text-xs tracking-widest hover:shadow-brand-mid/20 hover:shadow-lg transition-all relative z-10">
                  Get Started
                </button>
              </Link>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/[0.08] backdrop-blur-xl p-8 rounded-2xl border border-white/[0.12] shadow-xl"
            >
              <h3 className="font-heading text-white font-black uppercase text-sm tracking-widest mb-6">Product Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4 py-2 border-b border-white/[0.08]">
                  <span className="font-body text-white/40 text-sm flex-shrink-0">Category</span>
                  <span className="font-heading text-white font-bold text-sm text-right">{product.category}</span>
                </div>
                <div className="flex justify-between items-start gap-4 py-2 border-b border-white/[0.08]">
                  <span className="font-body text-white/40 text-sm flex-shrink-0">Price</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-heading font-bold border border-green-500/20">Free</span>
                </div>
                <div className="flex justify-between items-start gap-4 py-2 border-b border-white/[0.08]">
                  <span className="font-body text-white/40 text-sm flex-shrink-0">Features</span>
                  <span className="font-heading text-white font-bold text-sm text-right">{product.features.length} Included</span>
                </div>
                <div className="flex justify-between items-start gap-4 py-2">
                  <span className="font-body text-white/40 text-sm flex-shrink-0">Status</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-heading font-bold border border-green-500/20">Live</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/[0.08] backdrop-blur-xl p-8 rounded-2xl border border-white/[0.12] shadow-xl"
            >
              <h3 className="font-heading text-white font-black uppercase text-sm tracking-widest mb-6">Quick Links</h3>
              <div className="space-y-3">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-brand-cyan transition-colors py-2 font-body"
                >
                  <FaExternalLinkAlt className="text-brand-cyan" /> Try {product.name} Free
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 text-white/60 hover:text-brand-cyan transition-colors py-2 font-body"
                >
                  <FaRocket className="text-brand-cyan" /> Build Similar Product
                </Link>
              </div>
            </motion.div>
          </aside>
        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <section className="py-16 md:py-20 mt-12 relative">
            <div className="max-w-7xl mx-auto relative z-10">
              <h2 className="font-heading text-3xl font-black text-white mb-10 text-center">
                Other <span className="text-brand-cyan">Products</span> by New Ai Tech Softs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((relProduct) => (
                  <Link
                    key={relProduct.id}
                    to={`/product/${relProduct.slug}`}
                    className="group bg-white/[0.08] backdrop-blur-xl rounded-2xl overflow-hidden border border-white/[0.12] shadow-xl hover:border-brand-mid/30 transition-all duration-300"
                  >
                    <div className="h-48 bg-white/[0.04] flex items-center justify-center p-6">
                      <img
                        src={relProduct.image}
                        alt={relProduct.name}
                        className="max-h-28 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                        {relProduct.name}
                      </h3>
                      <p className="font-body text-white/60 text-sm line-clamp-2">
                        {relProduct.shortDesc}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-brand-cyan text-sm font-heading font-bold">
                        View Details <FaArrowRight className="text-xs" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
