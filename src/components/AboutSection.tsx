import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { timelineData } from '../data/timeline';
import { Sparkles, Palette, Layers, Code, CheckCircle2, ArrowDown, FileText, Download, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  const handleDownloadCv = () => {
    // Generate a clean professional CV summary or download link
    const cvText = `IGOR TELES - Designer & Front-End Developer\nEmail: igortelesdesign@gmail.com\nLinkedIn: https://www.linkedin.com/in/byigorteles\nGitHub: https://github.com/igortelesdesign-svg\nInstagram: https://www.instagram.com/byigorteles/\n\nResumo:\nDesigner e Desenvolvedor Front-End atuando na interseção entre Design Gráfico, UI/UX e Código.\nEspecialidades: React, TypeScript, Supabase, Design Systems, Figma, Photoshop, Illustrator.`;
    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Igor_Teles_CV_${language.toUpperCase()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="py-24 bg-[#0B1018] relative border-t border-white/[0.06]">
      {/* Subtle lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#168BFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101722] border border-[#168BFF]/20 text-[11px] font-mono text-[#00D5FF]">
            <Sparkles className="w-3 h-3 text-[#00D5FF]" />
            {t.about.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F5F7FA] tracking-tight">
            {t.about.title}
          </h2>

          <p className="text-xl sm:text-2xl font-display font-medium text-[#00D5FF] leading-snug">
            {t.about.headline}
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8 space-y-5 text-[#A6B0C0] text-base sm:text-lg leading-relaxed">
            <p>{t.about.bio1}</p>
            <p>{t.about.bio2}</p>
            <p>
              {language === 'pt' ? (
                <>
                  Essa combinação entre <span className="text-[#F5F7FA] font-medium">design + experiência + código</span> me permite participar de diferentes etapas de um produto digital — da ideia e prototipação à interface e implementação.
                </>
              ) : (
                <>
                  This combination of <span className="text-[#F5F7FA] font-medium">design + experience + code</span> allows me to participate across different stages of a digital product — from ideation and prototyping to interface design and front-end implementation.
                </>
              )}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center p-6 rounded-2xl bg-[#101722] border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#168BFF]/10 border border-[#168BFF]/30 flex items-center justify-center text-[#00D5FF]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-[#F5F7FA]">
                  Currículo / Resume
                </h3>
                <p className="text-xs font-mono text-[#687386]">PDF & Resumo Técnico</p>
              </div>
            </div>

            <p className="text-xs text-[#A6B0C0] leading-relaxed">
              {language === 'pt'
                ? 'Documento consolidado com experiência, stack e projetos para recrutadores e empresas.'
                : 'Consolidated document with experience, tech stack, and cases for recruiters.'}
            </p>

            <button
              id="btn-download-cv"
              onClick={handleDownloadCv}
              className="w-full py-3 px-4 rounded-xl bg-[#101722] hover:bg-[#168BFF] text-white border border-white/10 hover:border-[#168BFF] text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>{t.about.downloadCv}</span>
            </button>
          </div>
        </div>

        {/* 3 Capabilities Groups */}
        <div className="mb-24 space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5F7FA]">
              {t.about.capabilitiesTitle}
            </h3>
            <span className="text-xs font-mono text-[#687386]">[ 3 PILLARS ]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* DESIGN GROUP */}
            <div className="p-7 rounded-2xl bg-[#101722] border border-white/10 hover:border-[#00D5FF]/30 transition-all space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#001E36] border border-[#00A8FF]/30 flex items-center justify-center text-[#00D5FF]">
                  <Palette className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[#00D5FF] px-2 py-0.5 rounded bg-[#00D5FF]/10">
                  PILLAR 01
                </span>
              </div>

              <h4 className="font-display font-bold text-lg text-[#F5F7FA]">
                {t.about.capabilitiesGroups.design.title}
              </h4>

              <ul className="space-y-2.5">
                {t.about.capabilitiesGroups.design.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-mono text-[#A6B0C0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D5FF] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PRODUCT GROUP */}
            <div className="p-7 rounded-2xl bg-[#101722] border border-white/10 hover:border-[#168BFF]/40 transition-all space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#0F1E33] border border-[#168BFF]/30 flex items-center justify-center text-[#168BFF]">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[#168BFF] px-2 py-0.5 rounded bg-[#168BFF]/10">
                  PILLAR 02
                </span>
              </div>

              <h4 className="font-display font-bold text-lg text-[#F5F7FA]">
                {t.about.capabilitiesGroups.product.title}
              </h4>

              <ul className="space-y-2.5">
                {t.about.capabilitiesGroups.product.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-mono text-[#A6B0C0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#168BFF] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DEV GROUP */}
            <div className="p-7 rounded-2xl bg-[#101722] border border-white/10 hover:border-[#9B5CFF]/40 transition-all space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#1A0033] border border-[#7257FF]/30 flex items-center justify-center text-[#9B5CFF]">
                  <Code className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[#9B5CFF] px-2 py-0.5 rounded bg-[#7257FF]/10">
                  PILLAR 03
                </span>
              </div>

              <h4 className="font-display font-bold text-lg text-[#F5F7FA]">
                {t.about.capabilitiesGroups.dev.title}
              </h4>

              <ul className="space-y-2.5">
                {t.about.capabilitiesGroups.dev.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-mono text-[#A6B0C0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9B5CFF] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Minimalist Career Evolution Timeline */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-[#00D5FF]" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5F7FA]">
                {t.about.timelineTitle}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#687386]">[ JOURNEY ]</span>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10">
            {timelineData.map((item, idx) => (
              <div key={item.stage} className="relative group">
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#07090D] border-2 border-[#168BFF] group-hover:border-[#00D5FF] group-hover:scale-125 transition-all" />

                <div className="p-6 rounded-2xl bg-[#101722] border border-white/10 hover:border-white/20 transition-all space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-[#00D5FF] font-bold">
                      STAGE {item.stage} — {item.period}
                    </span>
                    <h4 className="font-display font-bold text-base sm:text-lg text-[#F5F7FA]">
                      {item.role[language]}
                    </h4>
                  </div>

                  <p className="text-sm text-[#A6B0C0] leading-relaxed">
                    {item.description[language]}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-[#07090D] border border-white/5 text-[11px] font-mono text-[#687386]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
