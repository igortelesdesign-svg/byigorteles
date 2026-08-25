import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { designTools, devTools } from '../data/toolbox';
import { Sparkles, Palette, Code, Wrench } from 'lucide-react';

export const ToolboxSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="toolbox" className="py-24 bg-[#07090D] relative border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#7257FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101722] border border-[#168BFF]/20 text-[11px] font-mono text-[#00D5FF]">
            <Sparkles className="w-3 h-3 text-[#00D5FF]" />
            {t.toolbox.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F5F7FA] tracking-tight">
            {t.toolbox.title}
          </h2>

          <p className="text-base sm:text-lg text-[#A6B0C0] leading-relaxed">
            {t.toolbox.subtitle}
          </p>
        </div>

        {/* Two-Column Grid: Design Tools vs Dev Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* DESIGN TOOLS */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="w-8 h-8 rounded-lg bg-[#001E36] border border-[#00A8FF]/30 flex items-center justify-center text-[#00D5FF]">
                <Palette className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#F5F7FA]">
                {t.toolbox.designCategory}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {designTools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-4 rounded-xl bg-[#101722] border border-white/5 hover:border-[#00D5FF]/30 transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-[#F5F7FA] group-hover:text-[#00D5FF] transition-colors">
                      {tool.name}
                    </span>
                    <span className="w-7 h-7 rounded-md bg-[#07090D] border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-[#00D5FF]">
                      {tool.icon}
                    </span>
                  </div>

                  <p className="text-xs text-[#A6B0C0] leading-relaxed">
                    {tool.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DEVELOPMENT TOOLS */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="w-8 h-8 rounded-lg bg-[#1A0033] border border-[#7257FF]/30 flex items-center justify-center text-[#9B5CFF]">
                <Code className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#F5F7FA]">
                {t.toolbox.devCategory}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {devTools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-4 rounded-xl bg-[#101722] border border-white/5 hover:border-[#9B5CFF]/30 transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-[#F5F7FA] group-hover:text-[#9B5CFF] transition-colors">
                      {tool.name}
                    </span>
                    <span className="w-7 h-7 rounded-md bg-[#07090D] border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-[#9B5CFF]">
                      {tool.icon}
                    </span>
                  </div>

                  <p className="text-xs text-[#A6B0C0] leading-relaxed">
                    {tool.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
