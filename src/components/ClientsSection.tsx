import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building2, ShoppingBag, Car, HeartPulse, Baby, Sparkles } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const sectors = [
    {
      name: 'DUNA GROUP',
      type: language === 'pt' ? 'Varejo & Gestão de Estoque' : 'Retail & Inventory Management',
      icon: ShoppingBag,
    },
    {
      name: 'REDE RCM',
      type: language === 'pt' ? 'Rede de Postos & Conveniência' : 'Fuel Station Network & Retail',
      icon: Building2,
    },
    {
      name: 'DUNA MOVE',
      type: language === 'pt' ? 'Mobilidade Urbana & Telemetria' : 'Urban Mobility & Telemetry',
      icon: Car,
    },
    {
      name: 'HEALTHTECH & PORTAL',
      type: language === 'pt' ? 'Saúde & Acessibilidade WCAG' : 'Healthcare & WCAG Accessibility',
      icon: HeartPulse,
    },
    {
      name: 'NENÊ DIGITAL',
      type: language === 'pt' ? 'Cuidado Infantil & PWA Mobile' : 'Child Care & Mobile PWA',
      icon: Baby,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#07090D] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#00D5FF] tracking-wider uppercase">
              {t.clients.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F7FA]">
              {t.clients.title}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#687386] max-w-md">
            {t.clients.subtitle}
          </p>
        </div>

        {/* Monochromatic Low-Intensity Sector Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.name}
                className="p-5 rounded-xl bg-[#101722]/50 border border-white/[0.04] hover:border-white/10 hover:bg-[#101722] transition-all flex flex-col items-center text-center space-y-2.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#07090D] border border-white/5 flex items-center justify-center text-[#687386] group-hover:text-[#00D5FF] group-hover:border-[#00D5FF]/30 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-xs text-[#A6B0C0] group-hover:text-[#F5F7FA] transition-colors tracking-wide">
                  {sector.name}
                </span>
                <span className="text-[10px] font-mono text-[#687386] leading-tight">
                  {sector.type}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
