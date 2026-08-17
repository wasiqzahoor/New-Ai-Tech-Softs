import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923415287464"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full border-2 border-brand-cyan/30 animate-ping opacity-30" />

      {/* Icon */}
      <FaWhatsapp className="text-3xl relative z-10" />
    </a>
  );
};

export default WhatsAppButton;
