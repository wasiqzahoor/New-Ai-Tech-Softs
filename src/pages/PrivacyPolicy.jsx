import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaShieldAlt, FaLock, FaUserShield, FaDatabase, FaGlobe, FaFileContract } from 'react-icons/fa';

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const PolicySection = ({ icon, title, content }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6 }}
    className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-8 md:p-10 group hover:border-[#8B5CF6]/30 transition-all duration-500"
  >
    <div className="flex items-start gap-6">
      <div className="text-3xl text-[#8B5CF6]/60 group-hover:text-[#8B5CF6] transition-colors mt-1 shrink-0">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-[#8B5CF6] transition-colors tracking-tight">
          {title}
        </h2>
        <p className="text-white/60 font-body leading-relaxed text-lg">
          {content}
        </p>
      </div>
    </div>
  </motion.div>
);

const PrivacyPolicy = () => {
  return (
    <div className="text-white min-h-screen pt-20 md:pt-24 pb-20 overflow-hidden">
      <Helmet>
        <title>Privacy Policy | New Ai Tech Softs</title>
        <meta name="description" content="Read the Privacy Policy of New Ai Tech Softs. Learn how we collect, use, and protect your personal data when you use our software development services." />
        <meta name="keywords" content="privacy policy, data protection, New Ai Tech Softs, software house Islamabad, GDPR" />
        <meta name="author" content="New Ai Tech Softs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://newaitechsofts.com/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newaitechsofts.com/privacy" />
        <meta property="og:title" content="Privacy Policy | New Ai Tech Softs" />
        <meta property="og:description" content="Read the Privacy Policy of New Ai Tech Softs. Learn how we collect, use, and protect your personal data." />
        <meta property="og:image" content="https://newaitechsofts.com/logo.webp" />
        <meta property="og:site_name" content="New Ai Tech Softs" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://newaitechsofts.com/privacy" />
        <meta name="twitter:title" content="Privacy Policy | New Ai Tech Softs" />
        <meta name="twitter:description" content="Read the Privacy Policy of New Ai Tech Softs. Learn how we collect, use, and protect your personal data." />
        <meta name="twitter:image" content="https://newaitechsofts.com/logo.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy | New Ai Tech Softs",
            "description": "Read the Privacy Policy of New Ai Tech Softs. Learn how we collect, use, and protect your personal data when you use our software development services.",
            "url": "https://newaitechsofts.com/privacy",
            "publisher": {
              "@type": "Organization",
              "name": "New Ai Tech Softs",
              "url": "https://newaitechsofts.com/",
              "logo": "https://newaitechsofts.com/logo.webp"
            },
            "dateModified": "2026-01-01"
          })}
        </script>
      </Helmet>

      {/* --- HERO HEADER --- */}
      <section className="relative text-center py-16 md:py-20 px-4 overflow-hidden">

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl flex items-center justify-center text-4xl text-[#8B5CF6] mx-auto mb-8"
          >
            <FaShieldAlt />
          </motion.div>

          <motion.h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2">
            <motion.span custom={0} initial="hidden" animate="visible" variants={wordAnimation} className="text-white">Privacy</motion.span>
            <motion.span custom={1} initial="hidden" animate="visible" variants={wordAnimation} className="text-[#8B5CF6]">Policy</motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white/60 font-body text-lg leading-relaxed max-w-2xl mx-auto"
          >
            At New Ai Tech Softs, your privacy is our priority. This policy outlines how we handle data, protect your information, and ensure transparency in our digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-white/40 font-heading font-bold uppercase tracking-widest text-xs"
          >
            Last Updated: January 22, 2026
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="max-w-5xl mx-auto px-6 space-y-8 pb-28 md:py-36">
        <PolicySection
          icon={<FaDatabase />}
          title="1. Information Collection & Usage"
          content="We collect personal data (Name, Email, Phone) only when voluntarily provided via our inquiry forms. Additionally, we may collect technical data such as IP addresses, browser types, and usage patterns to improve our service performance and user experience."
        />

        <PolicySection
          icon={<FaFileContract />}
          title="2. Project Data & Confidentiality"
          content="During software development, any data provided by the client is treated with 100% confidentiality. We do not use client project data for any purposes other than the specific project development. Non-Disclosure Agreements (NDA) are standard for all our enterprise-grade projects."
        />

        <PolicySection
          icon={<FaGlobe />}
          title="3. Third-Party Services"
          content="Our applications may integrate third-party services such as AWS (Hosting), Firebase (Database), or EmailJS (Communication). These services have their own privacy policies, and while we ensure secure integration, we are not responsible for their independent data handling practices."
        />

        <PolicySection
          icon={<FaUserShield />}
          title="4. Cookies & Analytics"
          content="We use cookies and tracking technologies (like Google Analytics) to analyze website traffic and optimize our platform. You can choose to disable cookies in your browser settings, though some features of our site may not function correctly as a result."
        />

        <PolicySection
          icon={<FaLock />}
          title="5. Security Standards"
          content="New Ai Tech Softs implements industry-standard encryption (SSL/TLS) and secure server protocols to protect your information from unauthorized access, hacking, or disclosure. We continuously monitor our systems to prevent potential vulnerabilities."
        />

        <PolicySection
          icon={<FaShieldAlt />}
          title="6. Your Rights & Compliance"
          content="We adhere to global privacy standards (GDPR/CCPA). Users have the right to request a copy of their data, request deletion, or opt-out of marketing communications. For any privacy concerns, contact our legal team at info@newaitechsofts.com."
        />
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="max-w-4xl mx-auto px-6 pb-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-12 text-center relative overflow-hidden"
        >
          <h2 className="text-3xl font-heading font-bold text-white mb-4 relative z-10">Have questions about your data?</h2>
          <p className="text-white/60 font-body mb-8 relative z-10">Reach out to our Data Protection Officer for any clarifications.</p>
          <a
            href="mailto:info@newaitechsofts.com"
            className="relative z-10 inline-block bg-gradient-to-r from-[#8B5CF6] to-purple-600 text-white font-heading font-bold rounded-full px-10 py-3.5 shadow-lg shadow-[#8B5CF6]/20 hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider"
          >
            Contact Support
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
