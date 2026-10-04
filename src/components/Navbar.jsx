import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaBlog, FaInfoCircle, FaLaptopCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' ? 'text-brand-cyan font-semibold' : 'text-white/60 hover:text-white';
    return location.pathname.startsWith(path) ? 'text-brand-cyan font-semibold' : 'text-white/60 hover:text-white';
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500`}>
      <div className={`transition-all duration-500 ${scrolled ? 'mx-4 sm:mx-6 lg:mx-8 xl:mx-12 mt-3 max-w-7xl ml-auto mr-auto rounded-2xl glass-navbar shadow-xl shadow-black/20' : 'rounded-none bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <img src={logo} alt="New Ai Tech Softs" className="h-9 w-auto rounded-[5%] transition-transform duration-300 group-hover:scale-105" />
              <span className="text-lg font-heading font-bold text-white tracking-wide hidden sm:block whitespace-nowrap">
                NEW AI TECH <span className="text-brand-cyan">SOFTS</span>{' '}
                <span className="text-[10px] text-white/50 font-semibold tracking-widest">(PVT) LTD</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink to="/" icon={<FaHome />} text="Home" activeClass={isActive('/')} />
              <NavLink to="/services" icon={<FaLaptopCode />} text="Services" activeClass={isActive('/services')} />
              <NavLink to="/portfolio" icon={<FaBriefcase />} text="Work" activeClass={isActive('/portfolio')} />
              <NavLink to="/about" icon={<FaInfoCircle />} text="About" activeClass={isActive('/about')} />
              <NavLink to="/blog" icon={<FaBlog />} text="Blog" activeClass={isActive('/blog')} />

              <Link to="/contact" className="ml-4">
                <button className="bg-gradient-to-r from-brand-mid to-purple-600 text-white px-5 py-2 rounded-full font-heading font-bold text-sm shadow-lg shadow-brand-mid/25 hover:shadow-brand-mid/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                  <FaEnvelope className="text-xs" /> Get a Quote
                </button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button onClick={toggleMenu} className="md:hidden text-white text-xl focus:outline-none p-2">
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden z-[105] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMenu}
      />

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[280px] glass-strong shadow-2xl transition-transform duration-300 ease-in-out z-[110] md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <span className="text-brand-cyan font-heading font-bold tracking-widest text-xs uppercase">Menu</span>
          <button onClick={toggleMenu} className="text-white/50 text-xl hover:text-white transition-colors">
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-1 overflow-y-auto flex-grow">
          <MobileLink to="/" icon={<FaHome />} text="Home" toggle={toggleMenu} activeClass={isActive('/')} />
          <MobileLink to="/services" icon={<FaLaptopCode />} text="Services" toggle={toggleMenu} activeClass={isActive('/services')} />
          <MobileLink to="/portfolio" icon={<FaBriefcase />} text="Work" toggle={toggleMenu} activeClass={isActive('/portfolio')} />
          <MobileLink to="/about" icon={<FaInfoCircle />} text="About" toggle={toggleMenu} activeClass={isActive('/about')} />
          <MobileLink to="/blog" icon={<FaBlog />} text="Blog" toggle={toggleMenu} activeClass={isActive('/blog')} />
        </div>

        <div className="p-6 border-t border-white/10 space-y-4">
          <Link to="/contact" onClick={toggleMenu}>
            <button className="w-full bg-gradient-to-r from-brand-mid to-purple-600 text-white py-3.5 rounded-xl font-heading font-bold shadow-lg shadow-brand-mid/25 active:scale-95 transition-all">
              Get a Quote
            </button>
          </Link>
          <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="New Ai Tech Softs" className="h-5 w-auto rounded-[5%]" />
            <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-semibold">New Ai Tech Softs</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text, activeClass }) => (
  <Link to={to} className={`flex items-center gap-1.5 px-3 py-2 text-[13px] uppercase tracking-wider font-medium transition-all duration-300 rounded-lg hover:bg-white/5 ${activeClass}`}>
    <span className="text-sm">{icon}</span> {text}
  </Link>
);

const MobileLink = ({ to, icon, text, toggle, activeClass }) => (
  <Link
    to={to}
    onClick={toggle}
    className={`flex items-center gap-4 py-3.5 px-4 rounded-xl transition-all duration-300 group ${activeClass.includes('font-semibold') ? 'bg-brand-mid/15' : 'hover:bg-white/5'}`}
  >
    <span className={`text-lg transition-transform duration-300 group-hover:scale-110 ${activeClass.includes('font-semibold') ? 'text-brand-cyan' : 'text-white/40'}`}>
      {icon}
    </span>
    <span className={`text-base font-medium ${activeClass.includes('font-semibold') ? 'text-brand-cyan' : 'text-white/80'}`}>
      {text}
    </span>
  </Link>
);

export default Navbar;
