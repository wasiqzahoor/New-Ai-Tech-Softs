import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaInstagram, FaPaperPlane, FaGlobeAmericas, FaShieldAlt, FaRocket, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', projectType: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'service_34q2txe';
    const templateID = 'template_to8li2i';
    const publicKey = 'N6j59YQ27zhPSV4eQ';

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      project_type: formData.projectType,
      message: formData.message,
      to_email: 'info@newaitechsofts.com'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert("Success! Your inquiry has been sent to info@newaitechsofts.com");
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
        setIsSending(false);
      }, () => {
        alert("Failed to send message. Please check your internet or try later.");
        setIsSending(false);
      });
  };

  const contactCards = [
    { icon: <FaEnvelope />, label: "Email our team", value: "info@newaitechsofts.com" },
    { icon: <FaWhatsapp />, label: "Connect with us", value: "+923415287464" },
    { icon: <FaMapMarkerAlt />, label: "Pakistan Office", value: "DHA Phase 5, Islamabad" },
    { icon: <FaMapMarkerAlt />, label: "UAE Office", value: "Street 10, Building 15, Industrial Area 10, Near Al Madinah Hyper Market, Sharjah, UAE" },
  ];

  const impactItems = [
    { icon: <FaGlobeAmericas />, title: "Global Reach", desc: "Serving clients across UK, USA, UAE, and Pakistan." },
    { icon: <FaShieldAlt />, title: "Secure & Private", desc: "Your data is encrypted and handled with 100% confidentiality.", delay: 0.2 },
    { icon: <FaRocket />, title: "Fast Turnaround", desc: "Quick initial responses and agile project execution.", delay: 0.4 },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 overflow-hidden relative">

      <Helmet>
        <title>Contact Us | New Ai Tech Softs - Software House in Islamabad</title>
        <meta name="description" content="Get in touch with New Ai Tech Softs, a leading software house in Islamabad serving clients across the USA & UK. Contact us for web development, mobile app development, AI solutions, and custom software projects." />
        <meta name="keywords" content="contact, software house Islamabad, web development, mobile app development, AI solutions, custom software, New Ai Tech Softs contact" />
        <meta name="author" content="New Ai Tech Softs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://newaitechsofts.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newaitechsofts.com/contact" />
        <meta property="og:title" content="Contact Us | New Ai Tech Softs" />
        <meta property="og:description" content="Get in touch with New Ai Tech Softs for web development, mobile apps, AI solutions, and custom software projects." />
        <meta property="og:image" content="https://newaitechsofts.com/logo.webp" />
        <meta property="og:site_name" content="New Ai Tech Softs" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://newaitechsofts.com/contact" />
        <meta name="twitter:title" content="Contact Us | New Ai Tech Softs" />
        <meta name="twitter:description" content="Get in touch with New Ai Tech Softs for web development, mobile apps, AI solutions, and custom software projects." />
        <meta name="twitter:image" content="https://newaitechsofts.com/logo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us | New Ai Tech Softs",
            "description": "Get in touch with New Ai Tech Softs for web development, mobile apps, AI solutions, and custom software projects.",
            "url": "https://newaitechsofts.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "New Ai Tech Softs",
              "address": [
                { "@type": "PostalAddress", "addressLocality": "Islamabad", "addressCountry": "PK" },
                { "@type": "PostalAddress", "streetAddress": "Street 10, Building 15, Industrial Area 10, Near Al Madinah Hyper Market", "addressLocality": "Sharjah", "addressCountry": "AE" }
              ],
              "email": "info@newaitechsofts.com"
            }
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="text-center py-16 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-brand-cyan font-heading font-bold tracking-widest uppercase text-sm mb-4"
        >
          Get In Touch
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl font-black text-white mb-6"
        >
          Let's Build Something <span className="text-brand-cyan">Great</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-white/60 text-lg max-w-2xl mx-auto"
        >
          Have an idea or a project in mind? Fill out the form below or reach out to us directly.
          Let's turn your vision into a digital masterpiece. Looking for a reliable technology partner in the USA or UK? We support businesses across the USA, UK, and beyond.
        </motion.p>
      </section>

      {/* TWO-COLUMN LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">

        {/* LEFT: INFO CARDS */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <h2 className="font-heading text-3xl font-bold text-white border-l-4 border-brand-cyan pl-6 uppercase tracking-tighter">Information</h2>

            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.08] backdrop-blur-xl p-6 rounded-2xl border border-white/[0.12] shadow-xl flex items-center gap-5 group hover:border-brand-mid/30 transition-all"
              >
                <div className="w-14 h-14 min-w-[56px] bg-brand-mid/20 text-brand-cyan rounded-xl flex items-center justify-center text-2xl group-hover:bg-gradient-to-r group-hover:from-brand-mid group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
                  {card.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-body text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">{card.label}</p>
                  <p className="font-heading text-white font-bold break-words" style={{ fontSize: card.value.length > 40 ? '14px' : '18px' }}>{card.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold text-brand-cyan uppercase tracking-widest">Global Connect</h3>
            <div className="flex gap-6">
              {[
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/newaitechsofts" },
                { icon: <FaFacebook />, link: "https://www.facebook.com/newaitechsofts/" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/newaitechsofts/" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-12 h-12 bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-xl flex items-center justify-center text-white/40 text-xl hover:text-brand-cyan hover:border-brand-mid/30 hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Promise Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.08] backdrop-blur-xl p-8 rounded-2xl border border-white/[0.12] shadow-xl relative overflow-hidden group"
          >
            <FaRocket className="absolute -bottom-4 -right-4 text-8xl text-brand-mid/10 group-hover:rotate-12 transition-transform duration-500" />
            <h3 className="font-heading text-white font-bold mb-4 uppercase tracking-widest text-sm">Our Promise</h3>
            <p className="font-body text-white/60 text-base leading-relaxed relative z-10">
              We ensure 100% confidentiality and a technical response within 24 hours.
              Your project data is secured with enterprise-grade encryption.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT: FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.08] backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/[0.12] shadow-xl relative"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-heading text-[10px] font-black text-white/40 uppercase tracking-widest">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] text-white rounded-xl px-4 py-3.5 font-body focus:border-brand-cyan/50 outline-none transition placeholder:text-white/30"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="font-heading text-[10px] font-black text-white/40 uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] text-white rounded-xl px-4 py-3.5 font-body focus:border-brand-cyan/50 outline-none transition placeholder:text-white/30"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-heading text-[10px] font-black text-white/40 uppercase tracking-widest">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  required
                  className="w-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] text-white rounded-xl px-4 py-3.5 font-body focus:border-brand-cyan/50 outline-none transition placeholder:text-white/30"
                  placeholder="03xx xxxxxxx"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="font-heading text-[10px] font-black text-white/40 uppercase tracking-widest">Project Type</label>
                <input
                  type="text"
                  name="projectType"
                  required
                  className="w-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] text-white rounded-xl px-4 py-3.5 font-body focus:border-brand-cyan/50 outline-none transition placeholder:text-white/30"
                  placeholder="e.g. Web App"
                  value={formData.projectType}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-heading text-[10px] font-black text-white/40 uppercase tracking-widest">Project Brief</label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] text-white rounded-xl px-4 py-3.5 font-body focus:border-brand-cyan/50 outline-none transition resize-none placeholder:text-white/30"
                placeholder="Describe your vision..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <motion.button
              disabled={isSending}
              whileHover={{ scale: isSending ? 1 : 1.02 }}
              whileTap={{ scale: isSending ? 1 : 0.98 }}
              className={`w-full ${isSending ? 'bg-white/[0.08] text-white/40' : 'bg-gradient-to-r from-brand-mid to-purple-600 text-white hover:shadow-brand-mid/20 hover:shadow-lg'} py-4 rounded-full font-heading font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg`}
              type="submit"
            >
              {isSending ? (
                <>Sending... <FaSpinner className="animate-spin" /></>
              ) : (
                <>Send Message <FaPaperPlane /></>
              )}
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* BOTTOM IMPACT */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-20 mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
          {impactItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay || 0 }}
              className="space-y-4"
            >
              <div className="text-5xl text-brand-cyan mx-auto w-max">{item.icon}</div>
              <h3 className="font-heading text-xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
              <p className="font-body text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Contact;