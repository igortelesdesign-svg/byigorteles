import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, Sparkles, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 30);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.header.work, href: '#work' },
    { label: t.header.about, href: '#about' },
    { label: t.header.playground, href: '#playground' },
    { label: t.header.contact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07090D]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#168BFF] via-[#00D5FF] to-[#9B5CFF] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo / Monogram */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Igor Teles - Início"
          >
            <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-white/10 group-hover:border-[#00D5FF]/50 transition-colors shadow-[0_0_18px_rgba(0,213,255,0.12)]">
              <img
                src="/icon-bit.PNG"
                alt="BIT — By Igor Teles"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#00D5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wider text-[#F5F7FA] group-hover:text-[#00D5FF] transition-colors">
                IGOR TELES
              </span>
              <span className="text-[10px] font-mono text-[#687386] tracking-tight">
                DESIGNER • DEVELOPER
              </span>

              {/* Mobile availability status */}
              <span className="md:hidden flex items-center gap-1.5 mt-0.5 text-[8px] font-mono text-emerald-400 whitespace-nowrap">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                {t.header.availableBadge}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#101722]/60 border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-xs">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3.5 py-1.5 text-xs font-medium text-[#A6B0C0] hover:text-[#F5F7FA] hover:bg-white/[0.05] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Live Availability Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101722]/80 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="whitespace-nowrap">{t.header.availableBadge}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 border-l border-white/10 pl-3">
              <a
                href="https://www.linkedin.com/in/byigorteles"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#101722] hover:bg-[#151D2A] border border-white/5 text-[#A6B0C0] hover:text-[#00D5FF] hover:border-[#00D5FF]/30 transition-all"
                aria-label="LinkedIn de Igor Teles"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/igortelesdesign-svg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#101722] hover:bg-[#151D2A] border border-white/5 text-[#A6B0C0] hover:text-[#00D5FF] hover:border-[#00D5FF]/30 transition-all"
                aria-label="GitHub de Igor Teles"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Language Switcher */}
            <button
              id="btn-toggle-lang-desktop"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#101722] border border-white/10 hover:border-[#00D5FF]/40 text-xs font-mono text-[#A6B0C0] hover:text-[#F5F7FA] transition-all cursor-pointer"
              title="Trocar idioma / Switch language"
              aria-label="Alternar idioma"
            >
              <Globe className="w-3.5 h-3.5 text-[#00D5FF]" />
              <span className={language === 'pt' ? 'font-bold text-[#00D5FF]' : 'text-[#687386]'}>PT</span>
              <span className="text-[#687386]">|</span>
              <span className={language === 'en' ? 'font-bold text-[#00D5FF]' : 'text-[#687386]'}>EN</span>
            </button>
          </div>

          {/* Mobile Actions: Language + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="btn-toggle-lang-mobile"
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-md bg-[#101722] border border-white/10 text-xs font-mono text-[#F5F7FA] flex items-center gap-1"
              aria-label="Alternar idioma"
            >
              <span className="text-[#00D5FF] font-bold">{language.toUpperCase()}</span>
            </button>

            <button
              id="btn-mobile-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#101722] border border-white/10 text-[#F5F7FA] hover:text-[#00D5FF] focus:outline-none"
              aria-label={isMobileMenuOpen ? t.header.close : t.header.menu}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#07090D]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 pb-3 mb-2 border-b border-white/5 text-[11px] font-mono text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{t.header.availableBadge}</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 text-base font-display font-medium text-[#F5F7FA] hover:text-[#00D5FF] hover:bg-white/[0.04] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs text-[#687386] font-mono">Idioma / Language:</span>
                <div className="flex items-center gap-1 bg-[#101722] p-1 rounded-md border border-white/10">
                  <button
                    onClick={() => toggleLanguage()}
                    className={`px-3 py-1 text-xs font-mono rounded ${
                      language === 'pt' ? 'bg-[#168BFF] text-white font-bold' : 'text-[#A6B0C0]'
                    }`}
                  >
                    Português
                  </button>
                  <button
                    onClick={() => toggleLanguage()}
                    className={`px-3 py-1 text-xs font-mono rounded ${
                      language === 'en' ? 'bg-[#168BFF] text-white font-bold' : 'text-[#A6B0C0]'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
