import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaSpinner, FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.webp';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    const serviceID = 'service_34q2txe';
    const templateID = 'template_baef89a';
    const publicKey = 'N6j59YQ27zhPSV4eQ';
    const templateParams = { user_email: email };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => console.log('Email sent'))
      .catch((err) => console.log('Error:', err));

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setEmail('');
      setTimeout(() => setSent(false), 3000);
    }, 1000);
  };

  return (
    <footer className="relative border-t border-white/[0.08]">
      <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <img src={logo} alt="New Ai Tech Softs" className="h-9 w-auto" />
              <span className="text-lg font-heading font-bold text-white">
                NEW AI TECH <span className="text-brand-cyan">SOFTS</span>
              </span>
            </div>
            <p className="text-sm font-heading font-bold text-brand-cyan mb-3">Build. Grow. Automate. Scale.</p>
            <p className="text-sm leading-relaxed text-white/50 mb-8">
              New Ai Tech Softs provides web development, SEO, digital marketing, AI automation, cloud, creative and e-commerce solutions for modern businesses.
            </p>
            <div className="flex gap-3">
              <SocialIcon icon={<FaLinkedinIn />} link="https://www.linkedin.com/company/newaitechsofts" />
              <SocialIcon icon={<FaFacebookF />} link="https://www.facebook.com/newaitechsofts/" />
              <SocialIcon icon={<FaInstagram />} link="https://www.instagram.com/newaitechsofts/" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-3">
              <FooterLink to="/service/web-development" text="Web Development" />
              <FooterLink to="/service/ui-ux-design" text="UI/UX Design" />
              <FooterLink to="/service/seo-services" text="SEO Services" />
              <FooterLink to="/service/ai-automation" text="AI Automation" />
              <FooterLink to="/service/cloud-solutions" text="Cloud Solutions" />
              <FooterLink to="/service/mobile-app-development" text="Mobile Apps" />
              <FooterLink to="/service/graphic-designing" text="Graphic Design" />
              <FooterLink to="/service/video-editing" text="Video Production" />
              <FooterLink to="/service/ecommerce-development" text="E-commerce" />
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-6">Company</h3>
            <ul className="space-y-3">
              <FooterLink to="/about" text="About Us" />
              <FooterLink to="/portfolio" text="Our Work" />
              <FooterLink to="/blog" text="Blog" />
              <FooterLink to="/contact" text="Contact" />
            </ul>

            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-6 mt-8">Solutions</h3>
            <ul className="space-y-3">
              <FooterLink to="/services" text="Business Growth" />
              <FooterLink to="/services" text="Lead Generation" />
              <FooterLink to="/services" text="AI Automation" />
              <FooterLink to="/services" text="E-commerce Growth" />
              <FooterLink to="/services" text="Digital Transformation" />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-brand-cyan mt-1 flex-shrink-0" />
                <div className="text-sm text-white/50 space-y-1">
                  <p>🇵🇰 DHA Phase 5, Islamabad, Pakistan.</p>
                  <p>🇦🇪 Street 10, Building 15, Industrial Area 10, Near Al Madinah Hyper Market, Sharjah, UAE.</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-brand-cyan flex-shrink-0" />
                <a href="mailto:info@newaitechsofts.com" className="text-sm text-white/50 hover:text-brand-cyan transition">info@newaitechsofts.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-brand-cyan flex-shrink-0" />
                <a href="https://wa.me/923415287464" className="text-sm text-white/50 hover:text-brand-cyan transition">+923415287464</a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Newsletter</p>
              {sent ? (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-2.5 rounded-lg border border-green-400/20">
                  <FaCheckCircle /> <span className="text-sm">Subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="glass-input text-sm px-4 py-2.5 w-full rounded-l-lg !rounded-r-none focus:!border-brand-cyan/50"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-brand-mid to-purple-600 text-white px-4 py-2.5 rounded-r-lg hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center min-w-[48px]"
                  >
                    {loading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/30">&copy; {new Date().getFullYear()} New Ai Tech Softs. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-white/30 hover:text-brand-cyan transition">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-white/30 hover:text-brand-cyan transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-white/40 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-300 hover:-translate-y-0.5">
    {icon}
  </a>
);

const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="text-sm text-white/40 hover:text-brand-cyan transition duration-300 flex items-center gap-2 hover:translate-x-1">
      <span className="text-brand-cyan/30 text-xs">›</span> {text}
    </Link>
  </li>
);

export default Footer;
