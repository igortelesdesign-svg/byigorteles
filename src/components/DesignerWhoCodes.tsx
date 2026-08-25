import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Palette, Code, Layers, Sparkles, ArrowRight, CheckCircle2, Cpu, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const DesignerWhoCodes: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeSide, setActiveSide] = useState<'design' | 'dev' | 'both'>('both');
  const [mobileTab, setMobileTab] = useState<'design' | 'dev'>('design');

  const designSkills = [
    'Photoshop',
    'Illustrator',
    'InDesign',
    'After Effects',
    'Premiere Pro',
    'Canva & CapCut',
    'Branding & Identity',
    'Art Direction',
    'Graphic Design',
    'UI Design & Prototyping',
    'Design Systems (Figma)',
    'Visual Composition'
  ];

  const devSkills = [
    'HTML5 & Semantics',
    'CSS3 & Tailwind CSS',
    'JavaScript (ES6+)',
    'TypeScript Strict',
    'React Ecosystem',
    'Vite Bundler',
    'Supabase & PostgreSQL',
    'Git & GitHub Workflow',
    'Responsive & Fluid UI',
    'PWA & Offline First',
    'Web Accessibility (WCAG)',
    'Performance Optimization'
  ];

  const workflowSteps = [
    { label: t.concept.steps[0], icon: Sparkles, desc: language === 'pt' ? 'Concepção & Estratégia' : 'Strategy & Brief' },
    { label: t.concept.steps[1], icon: Palette, desc: language === 'pt' ? 'Identidade & Composição' : 'Identity & Layout' },
    { label: t.concept.steps[2], icon: Eye, desc: language === 'pt' ? 'Wireframe & Protótipo' : 'Wireframe & Prototyping' },
    { label: t.concept.steps[3], icon: Code, desc: language === 'pt' ? 'Componentes & TypeScript' : 'Components & React' },
    { label: t.concept.steps[4], icon: Cpu, desc: language === 'pt' ? 'Aplicação em Produção' : 'Production Grade App' },
  ];

  return (
    <section id="concept" className="py-24 bg-[#0B1018] relative overflow-hidden border-t border-b border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#168BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#7257FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101722] border border-[#168BFF]/20 text-[11px] font-mono text-[#00D5FF]">
            <Sparkles className="w-3 h-3 text-[#00D5FF]" />
            {t.concept.badge}
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F5F7FA] tracking-tight">
            {t.concept.title}
          </h2>

          <p className="text-base sm:text-lg text-[#A6B0C0] leading-relaxed">
            {t.concept.paragraph1}
          </p>

          <p className="text-sm sm:text-base text-[#687386] leading-relaxed">
            {t.concept.paragraph2}
          </p>
        </div>

        {/* Transformation Pipeline Flow (IDEIA -> DESIGN -> INTERFACE -> CÓDIGO -> PRODUTO DIGITAL) */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-[#101722]/80 border border-white/10 shadow-xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#A6B0C0] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#00D5FF]" />
              {t.concept.transformationTitle}
            </h3>
            <span className="text-[11px] font-mono text-[#00D5FF] bg-[#00D5FF]/10 px-2.5 py-0.5 rounded-full">
              End-to-End Delivery
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className="relative p-4 rounded-xl bg-[#07090D]/80 border border-white/5 flex flex-col items-center text-center space-y-2 hover:border-[#00D5FF]/40 hover:bg-[#151D2A] transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#101722] border border-white/10 flex items-center justify-center text-[#00D5FF] group-hover:scale-110 group-hover:border-[#00D5FF] transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#F5F7FA] tracking-wide">
                    {step.label}
                  </span>
                  <span className="text-[11px] text-[#687386] leading-tight">
                    {step.desc}
                  </span>
                  
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#687386]/40 z-10">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Desktop Split: DESIGN vs DEVELOPMENT */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 items-stretch">
          
          {/* DESIGN SIDE */}
          <div
            onMouseEnter={() => setActiveSide('design')}
            onMouseLeave={() => setActiveSide('both')}
            className={`relative p-8 rounded-2xl border transition-all duration-300 ${
              activeSide === 'design'
                ? 'bg-[#101722] border-[#168BFF] shadow-2xl shadow-[#168BFF]/10 scale-[1.01]'
                : activeSide === 'dev'
                ? 'bg-[#101722]/50 border-white/5 opacity-70'
                : 'bg-[#101722]/80 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#001E36] border border-[#00A8FF]/30 flex items-center justify-center text-[#00D5FF]">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#F5F7FA]">
                    {t.concept.designTab}
                  </h3>
                  <p className="text-xs text-[#A6B0C0]">
                    {t.concept.designSubtitle}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#00D5FF] px-2.5 py-1 rounded bg-[#00D5FF]/10 border border-[#00D5FF]/20">
                Visual & Strategy
              </span>
            </div>

            <p className="text-sm text-[#A6B0C0] mb-6 leading-relaxed">
              {language === 'pt'
                ? 'Anos de vivência em agências, marcas e design editorial fornecem sensibilidade estética apurada, domínio de proporção áurea, hierarquia tipográfica e percepção de usabilidade.'
                : 'Years of hands-on agency and brand experience provide deep aesthetic intuition, mastery of proportion, typography scales, and human usability.'}
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              {designSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#07090D]/80 border border-white/5 text-xs font-mono text-[#F5F7FA] hover:text-[#00D5FF] hover:border-[#00D5FF]/30 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00D5FF] shrink-0" />
                  <span className="truncate">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DEVELOPMENT SIDE */}
          <div
            onMouseEnter={() => setActiveSide('dev')}
            onMouseLeave={() => setActiveSide('both')}
            className={`relative p-8 rounded-2xl border transition-all duration-300 ${
              activeSide === 'dev'
                ? 'bg-[#101722] border-[#7257FF] shadow-2xl shadow-[#7257FF]/10 scale-[1.01]'
                : activeSide === 'design'
                ? 'bg-[#101722]/50 border-white/5 opacity-70'
                : 'bg-[#101722]/80 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1A0033] border border-[#7257FF]/30 flex items-center justify-center text-[#9B5CFF]">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#F5F7FA]">
                    {t.concept.devTab}
                  </h3>
                  <p className="text-xs text-[#A6B0C0]">
                    {t.concept.devSubtitle}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#9B5CFF] px-2.5 py-1 rounded bg-[#7257FF]/10 border border-[#7257FF]/20">
                Front-End & Engineering
              </span>
            </div>

            <p className="text-sm text-[#A6B0C0] mb-6 leading-relaxed">
              {language === 'pt'
                ? 'O conhecimento em engenharia front-end permite materializar layouts no código sem perdas de fidelidade, garantindo performance de 60fps, código semântico e arquitetura escalável.'
                : 'Front-end engineering expertise empowers exact translation from Figma into production code with zero fidelity loss, 60fps smoothness, and clean component architecture.'}
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              {devSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#07090D]/80 border border-white/5 text-xs font-mono text-[#F5F7FA] hover:text-[#9B5CFF] hover:border-[#7257FF]/30 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9B5CFF] shrink-0" />
                  <span className="truncate">{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile Tabbed View */}
        <div className="md:hidden space-y-4">
          <div className="flex p-1 bg-[#101722] rounded-xl border border-white/10">
            <button
              onClick={() => setMobileTab('design')}
              className={`flex-1 py-2.5 text-xs font-mono font-medium rounded-lg transition-colors ${
                mobileTab === 'design'
                  ? 'bg-[#168BFF] text-white shadow-md'
                  : 'text-[#A6B0C0]'
              }`}
            >
              {t.concept.designTab}
            </button>
            <button
              onClick={() => setMobileTab('dev')}
              className={`flex-1 py-2.5 text-xs font-mono font-medium rounded-lg transition-colors ${
                mobileTab === 'dev'
                  ? 'bg-[#7257FF] text-white shadow-md'
                  : 'text-[#A6B0C0]'
              }`}
            >
              {t.concept.devTab}
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-[#101722] border border-white/10 space-y-4">
            {mobileTab === 'design' ? (
              <>
                <p className="text-xs text-[#A6B0C0] leading-relaxed">
                  {language === 'pt'
                    ? 'Sensibilidade visual, direção de arte, composição e hierarquia estética aplicadas a produtos.'
                    : 'Visual sensitivity, art direction, and hierarchy applied to digital software.'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {designSkills.map((s) => (
                    <div key={s} className="flex items-center gap-2 p-2 rounded bg-[#07090D] text-xs font-mono text-[#F5F7FA]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D5FF]" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="text-xs text-[#A6B0C0] leading-relaxed">
                  {language === 'pt'
                    ? 'Código modular em React, TypeScript, Tailwind CSS e integração de dados com Supabase.'
                    : 'Modular React code, TypeScript, Tailwind CSS, and database integrations.'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {devSkills.map((s) => (
                    <div key={s} className="flex items-center gap-2 p-2 rounded bg-[#07090D] text-xs font-mono text-[#F5F7FA]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9B5CFF]" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
