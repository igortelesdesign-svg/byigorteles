import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { pt } from '../locales/pt';
import { en } from '../locales/en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    const savedLang = localStorage.getItem('igor_teles_lang') as Language;
    if (savedLang === 'pt' || savedLang === 'en') {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('igor_teles_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  };

  const toggleLanguage = () => {
    const nextLang = language === 'pt' ? 'en' : 'pt';
    setLanguage(nextLang);
  };

  const t = language === 'pt' ? pt : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
