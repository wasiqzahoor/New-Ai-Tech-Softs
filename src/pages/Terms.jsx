import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaFileContract, FaCreditCard, FaCode, FaTools, FaGavel, FaExclamationTriangle } from 'react-icons/fa';

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const TermSection = ({ icon, title, content }) => (
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

const Terms = () => {
  return (
    <div className="text-white min-h-screen pt-20 md:pt-24 pb-20 overflow-hidden">
      <Helmet>
        <title>Terms of Service | New Tech Softs</title>
        <meta name="description" content="Read the Terms of Service for New Tech Softs. Understand the rules, guidelines, and conditions for using our software development and IT services." />
        <meta name="keywords" content="terms of service, terms and conditions, New Tech Softs, software house Islamabad, IT services" />
        <meta name="author" content="New Tech Softs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://newtechsofts.com/terms" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newtechsofts.com/terms" />
        <meta property="og:title" content="Terms of Service | New Tech Softs" />
        <meta property="og:description" content="Read the Terms of Service for New Tech Softs. Understand the rules and conditions for using our services." />
        <meta property="og:image" content="https://newtechsofts.com/logo.webp" />
        <meta property="og:site_name" content="New Tech Softs" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://newtechsofts.com/terms" />
        <meta name="twitter:title" content="Terms of Service | New Tech Softs" />
        <meta name="twitter:description" content="Read the Terms of Service for New Tech Softs. Understand the rules and conditions for using our services." />
        <meta name="twitter:image" content="https://newtechsofts.com/logo.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service | New Tech Softs",
            "description": "Read the Terms of Service for New Tech Softs. Understand the rules, guidelines, and conditions for using our software development and IT services.",
            "url": "https://newtechsofts.com/terms",
            "publisher": {
              "@type": "Organization",
              "name": "New Tech Softs",
              "url": "https://newtechsofts.com/",
              "logo": "https://newtechsofts.com/logo.webp"
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
            <FaFileContract />
          </motion.div>

          <motion.h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2">
            <motion.span custom={0} initial="hidden" animate="visible" variants={wordAnimation} className="text-white">Terms of</motion.span>
            <motion.span custom={1} initial="hidden" animate="visible" variants={wordAnimation} className="text-[#8B5CF6]">Service</motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white/60 font-body text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Welcome to New Tech Softs. These terms outline the rules and regulations for the use of our services, ensuring a professional and transparent partnership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-white/40 font-heading font-bold uppercase tracking-widest text-xs"
          >
            Effective Date: January 22, 2026
          </motion.div>
        </div>
      </section>

      {/* --- TERMS CONTENT --- */}
      <section className="max-w-5xl mx-auto px-6 space-y-8 pb-28 md:py-36">
        <TermSection
          icon={<FaCode />}
          title="1. Project Scope & Initiation"
          content="New Tech Softs provides custom software, web, and mobile application development. Projects commence only after a formal requirement document is approved and the initial deposit is received. Any changes to the scope after initiation may incur additional costs and timeline adjustments."
        />

        <TermSection
          icon={<FaCreditCard />}
          title="2. Payment Terms & Milestones"
          content="We typically operate on a 50% upfront and 50% upon completion model for smaller projects. For enterprise-scale work, we follow a milestone-based payment structure. All deposits are non-refundable as they cover resource allocation and initial development costs."
        />

        <TermSection
          icon={<FaGavel />}
          title="3. Intellectual Property Rights"
          content="Upon full and final payment, the client owns the copyright to the custom source code and visual assets created specifically for their project. However, New Tech Softs retains the right to use common libraries, frameworks, and tools developed internally, as well as the right to showcase the project in our portfolio (unless an NDA states otherwise)."
        />

        <TermSection
          icon={<FaTools />}
          title="4. Post-Launch Support"
          content="We offer 30 days of complimentary technical support after project deployment to fix any bugs or issues related to our original code. Post-support maintenance, updates, or third-party API changes are subject to separate maintenance agreements or hourly rates."
        />

        <TermSection
          icon={<FaFileContract />}
          title="5. Client Obligations"
          content="The client is responsible for providing necessary assets, content, and feedback in a timely manner. Delays in client communication or asset delivery (exceeding 7 business days) may result in project suspension or rescheduling."
        />

        <TermSection
          icon={<FaExclamationTriangle />}
          title="6. Limitation of Liability"
          content="New Tech Softs is not liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our software. While we follow best security practices, we do not guarantee that the software will be 100% immune to external cyber threats or server outages."
        />
      </section>

      {/* --- CONTACT CTA --- */}
      <section className="max-w-4xl mx-auto px-6 pb-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-12 text-center relative overflow-hidden"
        >
          <h2 className="text-3xl font-heading font-bold text-white mb-6 relative z-10">Need Legal Clarification?</h2>
          <p className="text-white/60 font-body mb-8 max-w-xl mx-auto leading-relaxed relative z-10">
            If you have any questions regarding these terms or require a custom Service Level Agreement (SLA), please contact our legal department.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:info@newtechsofts.com"
              className="bg-gradient-to-r from-[#8B5CF6] to-purple-600 text-white font-heading font-bold rounded-full px-10 py-4 shadow-lg shadow-[#8B5CF6]/20 hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider"
            >
              Email Legal Team
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Terms;
