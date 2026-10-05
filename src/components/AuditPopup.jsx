import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const STORAGE_KEY = 'nts-audit-popup-seen';
const SHOW_DELAY_MS = 7000;

const serviceOptions = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'AI Solutions & Automation',
  'SEO & Digital Marketing',
  'E-Commerce / Shopify',
  'Video & UGC Ads',
  'Other',
];

const inputClass =
  'w-full bg-white/[0.05] border border-white/[0.12] rounded-xl px-4 py-2 text-white placeholder:text-white/30 text-sm font-body outline-none focus:border-brand-cyan/60 focus:bg-white/[0.08] transition-all';

const AuditPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  // Show once per visitor, shortly after first homepage visit
  useEffect(() => {
    let timer;
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        timer = setTimeout(() => setIsOpen(true), SHOW_DELAY_MS);
      }
    } catch {
      timer = setTimeout(() => setIsOpen(true), SHOW_DELAY_MS);
    }
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll + close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const markSeen = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // storage unavailable — popup may show again, harmless
    }
  };

  const close = () => {
    markSeen();
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.email.trim() || !form.service) {
      setError('Please fill in your name, email and the service you need.');
      return;
    }
    setIsSending(true);

    try {
      const response = await fetch('https://formspree.io/f/mbgdrvqk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message || 'Homepage popup inquiry',
          _subject: `Homepage Popup Inquiry from ${form.name}`,
        }),
      });

      if (!response.ok) throw new Error('Form submission failed');

      setIsSending(false);
      setIsSent(true);
      markSeen();
    } catch (err) {
      console.error('Popup form error:', err);
      setIsSending(false);
      setError('Failed to send. Please check your connection or contact us at info@newaitechsofts.com');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[94vh] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[#0d0d18]/95 backdrop-blur-2xl border border-white/[0.12] shadow-2xl rounded-3xl p-4 sm:p-6"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.1] text-white/60 hover:text-white hover:bg-white/[0.12] flex items-center justify-center transition-all"
            >
              <FaTimes />
            </button>

            {isSent ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-3xl flex items-center justify-center mx-auto mb-6">
                  <FaCheckCircle />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
                  Request Received!
                </h3>
                <p className="text-white/60 font-body max-w-md mx-auto">
                  Thanks {form.name.split(' ')[0] || 'there'} — our team will contact you
                  within 24 hours to discuss your requirements.
                </p>
                <button
                  onClick={close}
                  className="mt-8 bg-gradient-to-r from-brand-mid to-purple-600 text-white px-8 py-3 rounded-full font-heading font-bold hover:shadow-brand-mid/40 hover:shadow-lg transition-all"
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              <>
                <p className="text-brand-cyan font-heading font-bold uppercase tracking-[0.25em] text-xs mb-2">
                  We Work All Over The World
                </p>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-tight mb-2">
                  Whatever Services You Need —{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">
                    Contact Us Now
                  </span>
                </h3>
                <p className="text-white/60 text-sm font-body mb-4">
                  Tell us what you need — our team replies within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-white font-heading font-semibold text-[13px] mb-1">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-white font-heading font-semibold text-[13px] mb-1">
                      Business Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-white font-heading font-semibold text-[13px] mb-1">
                      Service You Need
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} ${form.service ? '' : 'text-white/30'}`}
                    >
                      <option value="" className="bg-[#0d0d18]">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0d0d18]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-white font-heading font-semibold text-[13px] mb-1">
                      Message <span className="text-white/30 font-body font-normal">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us briefly about your project..."
                      rows={1}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="sm:col-span-2 text-red-400 text-sm font-body">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="sm:col-span-2 mt-0.5 w-full bg-gradient-to-r from-brand-mid to-purple-600 text-white py-2.5 rounded-xl font-heading font-bold text-base shadow-lg shadow-brand-mid/25 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <>
                        <FaSpinner className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>Contact Us Now <span>&rarr;</span></>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuditPopup;
