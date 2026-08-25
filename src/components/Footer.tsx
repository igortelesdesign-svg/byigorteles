import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Instagram, Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.header.work, href: '#work' },
    { label: t.header.about, href: '#about' },
    { label: t.header.toolbox, href: '#toolbox' },
    { label: t.header.playground, href: '#playground' },
    { label: t.header.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-[#07090D] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand Info & Location */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D5FF]" />
              <span className="font-display font-bold text-lg text-[#F5F7FA] tracking-wider">
                IGOR TELES
              </span>
            </div>
            <p className="text-xs font-mono text-[#687386]">
              {t.footer.role}
            </p>
            <div className="inline-flex items-center gap-1.5 pt-1 text-[11px] font-mono text-[#A6B0C0]">
              <span className="text-xs leading-none">🇧🇷</span>
              <span>{t.footer.location}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#A6B0C0]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-[#00D5FF] transition-colors py-1.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social & Contact Icons */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <a
              href="https://www.linkedin.com/in/byigorteles"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#101722] border border-white/5 text-[#A6B0C0] hover:text-[#00D5FF] hover:border-[#00D5FF]/30 flex items-center justify-center transition-all"
              aria-label="LinkedIn de Igor Teles"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/igortelesdesign-svg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#101722] border border-white/5 text-[#A6B0C0] hover:text-[#00D5FF] hover:border-[#00D5FF]/30 flex items-center justify-center transition-all"
              aria-label="GitHub de Igor Teles"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/byigorteles/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#101722] border border-white/5 text-[#A6B0C0] hover:text-[#00D5FF] hover:border-[#00D5FF]/30 flex items-center justify-center transition-all"
              aria-label="Instagram de Igor Teles"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5584981213101"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#101722] border border-white/5 text-[#A6B0C0] hover:text-[#00D5FF] hover:border-[#00D5FF]/30 flex items-center justify-center transition-all"
              aria-label="WhatsApp de Igor Teles"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:igortelesdesign@gmail.com"
              className="w-10 h-10 rounded-xl bg-[#101722] border border-white/5 text-[#A6B0C0] hover:text-[#00D5FF] hover:border-[#00D5FF]/30 flex items-center justify-center transition-all"
              aria-label="Enviar e-mail para Igor Teles"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright and Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#687386]">
          <p>© {currentYear} {t.footer.copyright}</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span>{t.footer.tagline}</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#A6B0C0] hover:text-[#00D5FF] transition-colors cursor-pointer py-1"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
