import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'process', label: 'Process' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-cyan-500/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="Avengix Technologies Home"
          >
            {/* Geometric Delta/A Glyph matching the uploaded reference */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-105"
              >
                {/* Outer angular Delta / Chevron */}
                <path
                  d="M18 4L32 29H4L18 4Z"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  className="group-hover:stroke-cyan-300 transition-colors"
                />
                {/* Inner stylized angled core segment */}
                <path
                  d="M18 12L25 25H11L18 12Z"
                  fill="url(#logoGlow)"
                  opacity="0.9"
                />
                <path
                  d="M18 15L23 24H13L18 15Z"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                />
                <defs>
                  <linearGradient id="logoGlow" x1="18" y1="12" x2="18" y2="25" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00f0ff" />
                    <stop offset="1" stopColor="#0070f3" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Subtle ambient logo glow */}
              <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full pointer-events-none group-hover:bg-cyan-400/40 transition-colors" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-[0.22em] text-white">
                AVENGIX
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-sm font-medium transition-colors cursor-pointer py-1 ${
                    isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Get in Touch Pill Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('contact')}
              className="relative group overflow-hidden rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 border border-cyan-500/40 hover:border-cyan-400 bg-slate-900/60 hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Get in Touch
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cyan-400" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050b1a]/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 pt-3 pb-6 transition-all duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border-l-2 border-cyan-400'
                      : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => handleLinkClick('contact')}
              className="mt-3 w-full py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
