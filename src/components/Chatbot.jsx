import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaTimes, FaComments, FaRobot, FaCalendarAlt, FaHandshake, FaArrowRight, FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const QUICK_ACTIONS = [
  { id: 'services', label: 'Our Services', icon: FaComments, message: 'What services does New Ai Tech Softs offer?' },
  { id: 'products', label: 'Our Products', icon: FaComments, message: 'What products does New Ai Tech Softs have?' },
  { id: 'pricing', label: 'Pricing', icon: FaHandshake, message: 'What are your pricing details?' },
  { id: 'meeting', label: 'Book Meeting', icon: FaCalendarAlt, message: 'I want to book a meeting' }
];

const MEETING_FLOW = {
  initial: "I'd love to help you schedule a meeting! Please provide:\n\n1. **Your Name**\n2. **Email Address**\n3. **Preferred Date & Time**\n4. **Brief description of your project**\n\nI'll have our team reach out to confirm.",
  redirect: "Perfect! For a quick response, you can also:\n\n- 📱 **WhatsApp**: +923415287464\n- 📧 **Email**: info@newaitechsofts.com\n- 🌐 **Contact Page**: newaitechsofts.com/contact\n\nOur team typically responds within 24 hours!"
};

const SYSTEM_KEYWORDS = ['services', 'products', 'pricing', 'meeting', 'book', 'team', 'contact', 'about', 'projects', 'portfolio'];

const GREETINGS = [
  "Hi there! 👋 I'm NTS Assistant. How can I help you today?",
  "Welcome to New Ai Tech Softs! What can I assist you with?",
  "Hey! Ready to build something amazing? Ask me about our services!"
];

const FALLBACK_REPLIES = [
  "I'm not sure I understand. Could you rephrase that? I can help with services, products, pricing, or scheduling a meeting.",
  "Hmm, I'm not certain about that. For specific queries, I'd recommend contacting our team at info@newaitechsofts.com.",
  "I'm best at helping with New Ai Tech Softs related questions. Try asking about our services, products, or how to get in touch!"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: GREETINGS[Math.floor(Math.random() * GREETINGS.length)], sender: 'bot', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [meetingState, setMeetingState] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const addMessage = useCallback((text, sender) => {
    const newMsg = {
      id: Date.now() + Math.random(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMsg]);
    return newMsg;
  }, []);

  const sendMessage = useCallback(async (text) => {
    if (!text.trim()) return;

    addMessage(text, 'user');
    setInput('');
    setShowQuickActions(false);
    setIsTyping(true);

    // Handle meeting flow
    if (meetingState === 'waiting_for_details') {
      setMeetingState(null);
      setIsTyping(false);
      addMessage(MEETING_FLOW.redirect, 'bot');
      return;
    }

    if (text.toLowerCase().includes('meeting') || text.toLowerCase().includes('book')) {
      setMeetingState('waiting_for_details');
      setIsTyping(false);
      addMessage(MEETING_FLOW.initial, 'bot');
      return;
    }

    try {
      const apiMessages = [...messages.slice(-10).map(m => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text
      })), { role: 'user', content: text }];

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages })
      });

      if (!response.ok) throw new Error('API request failed');

      const data = await response.json();
      const reply = data.reply || "Sorry, I could not generate a response.";
      addMessage(reply, 'bot');
    } catch (error) {
      console.error('Chat error:', error);
      setIsTyping(false);
      addMessage("Sorry, I'm having trouble connecting right now. Please try again or contact us at info@newaitechsofts.com", 'bot');
    }

    setIsTyping(false);
  }, [addMessage, meetingState, messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickAction = (action) => {
    sendMessage(action.message);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-gradient-to-br from-brand-cyan to-blue-400 rounded-full shadow-lg shadow-brand-cyan/25 flex items-center justify-center hover:shadow-brand-cyan/40 hover:scale-110 transition-all duration-300"
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <FaTimes className="w-5 h-5 text-white" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.2 }}>
              <FaRobot className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-20 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden"
            style={{ height: 'min(560px, calc(100vh - 160px))' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-cyan/10 to-blue-400/10 px-5 py-4 border-b border-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden p-0">
                  <img src={logo} alt="NTS" className="w-full h-full object-cover rounded-[5%]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">NewAiTechSofts Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs">Online</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-700/50 transition-colors"
                  aria-label="Close chat"
                >
                  <FaTimes className="w-4 h-4 text-slate-400 hover:text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-br from-brand-cyan to-blue-400 text-white rounded-br-md'
                        : 'bg-slate-800 text-slate-200 border border-slate-700/50 rounded-bl-md'
                    }`}
                    dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                  />
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-slate-800 border border-slate-700/50 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-brand-cyan rounded-full"
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {showQuickActions && (
              <div className="px-4 py-2 border-t border-slate-700/30">
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {QUICK_ACTIONS.map(action => (
                    <motion.button
                      key={action.id}
                      onClick={() => handleQuickAction(action)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700/50 rounded-full text-xs text-slate-300 hover:text-white transition-colors whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <action.icon className="w-3 h-3" />
                      {action.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-slate-700/50">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-slate-800 border border-slate-700/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan/50 transition-colors"
                  disabled={isTyping}
                />
                <motion.button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 bg-gradient-to-br from-brand-cyan to-blue-400 rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-cyan/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function formatMessage(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>');
}
