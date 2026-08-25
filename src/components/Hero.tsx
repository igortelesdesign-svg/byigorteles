import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import igorPortrait from '../assets/images/igor_teles_portrait_1787671345766.jpg';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [, setIsHoveringHero] = useState(false);

  // Smooth mouse parallax (subtle, 4-6px depth movement)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 35, stiffness: 140 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bgShiftX = useTransform(smoothX, [-300, 300], [-5, 5]);
  const bgShiftY = useTransform(smoothY, [-300, 300], [-5, 5]);
  const photoShiftX = useTransform(smoothX, [-300, 300], [5, -5]);
  const photoShiftY = useTransform(smoothY, [-300, 300], [5, -5]);

  // Micro 3D Floating elements shifts (multi-plane depth)
  const floatPlane1X = useTransform(smoothX, [-300, 300], [-10, 10]);
  const floatPlane1Y = useTransform(smoothY, [-300, 300], [-10, 10]);
  const floatPlane2X = useTransform(smoothX, [-300, 300], [12, -12]);
  const floatPlane2Y = useTransform(smoothY, [-300, 300], [12, -12]);
  const floatPlane3X = useTransform(smoothX, [-300, 300], [-7, 7]);
  const floatPlane3Y = useTransform(smoothY, [-300, 300], [7, -7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const clientX = e.clientX - rect.left - centerX;
    const clientY = e.clientY - rect.top - centerY;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHoveringHero(false);
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringHero(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[100svh] md:min-h-[calc(100svh-4.5rem)] lg:min-h-[calc(100vh-4.5rem)] lg:max-h-[960px] flex flex-col justify-between pt-16 sm:pt-20 md:pt-20 lg:pt-22 pb-3 sm:pb-5 overflow-x-hidden overflow-y-visible bg-[#07090D]"
    >
      {/* =========================================================================
          BACKGROUND ATMOSPHERIC LAYER (Design + Dev Subtle Traces, Zero Clutter)
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Ambient Radial Backlights */}
        <div className="absolute top-1/4 -left-16 w-[32rem] h-[32rem] bg-[#168BFF]/6 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-[#00D5FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-4 right-8 w-[24rem] h-[24rem] bg-[#7257FF]/5 rounded-full blur-3xl" />

        {/* Technical Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />

        {/* Subtle Editorial Design & Code Traces in Background (Desktop only) */}
        <motion.div
          style={{ x: bgShiftX, y: bgShiftY }}
          className="hidden xl:block absolute top-28 left-8 opacity-12 font-mono text-[11px] leading-relaxed text-[#00D5FF]"
        >
          <div>// Igor Teles — Creative Direction &amp; Code</div>
          <div>interface CreativeEngineering &#123;</div>
          <div>&nbsp;&nbsp;craft: [&quot;Identity&quot;, &quot;UI/UX&quot;, &quot;Front-End&quot;];</div>
          <div>&nbsp;&nbsp;pipeline: &quot;Design &rarr; Code &rarr; Experience&quot;;</div>
          <div>&#125;</div>
        </motion.div>

        {/* Subtle Bézier Curve / Geometry in Mid Background (Desktop only) */}
        <svg
          className="hidden lg:block absolute right-[38%] top-1/4 w-80 h-80 opacity-[0.07] text-[#00D5FF]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M 10 180 C 40 40, 160 40, 190 180"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <circle cx="10" cy="180" r="3" fill="currentColor" />
          <circle cx="40" cy="40" r="3" fill="currentColor" />
          <circle cx="160" cy="40" r="3" fill="currentColor" />
          <circle cx="190" cy="180" r="3" fill="currentColor" />
          <line x1="10" y1="180" x2="40" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
          <line x1="190" y1="180" x2="160" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        </svg>

        {/* Discrete Technical Coordinates Markings */}
        <div className="hidden lg:block absolute bottom-8 left-8 text-[9px] font-mono text-[#687386]/30 tracking-widest">
          POS: 23°32'S 46°38'W // VIEWPORT_DESKTOP // REF: BYIGORTELES
        </div>
      </div>

      {/* =========================================================================
          UNIFIED EDITORIAL HERO COMPOSITION
          - Mobile (< 768px): Fluxo vertical limpo (Área A: Conteúdo/CTAs/Redes -> Área B: Retrato integrado)
          - Desktop/Tablet (>= 768px): Grid horizontal lado a lado (52% Texto / 48% Foto)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 my-auto">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:grid-cols-[minmax(0,1.08fr)_minmax(400px,0.92fr)] gap-5 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* =========================================================================
              COLUNA ESQUERDA (ÁREA A NO MOBILE / COLUNA 1 NO DESKTOP)
              ========================================================================= */}
          <div className="flex flex-col justify-center space-y-3.5 sm:space-y-4.5 lg:space-y-5 z-10">
            
            {/* 1. Status Pill & Role Eyebrow */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Disponível para oportunidades */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-[#101722]/90 border border-emerald-500/25 text-[10.5px] sm:text-[11px] font-mono text-emerald-400 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="whitespace-nowrap font-medium">
                  {language === 'pt' ? 'Disponível para oportunidades' : 'Available for opportunities'}
                </span>
              </div>

              {/* Eyebrow com Traço */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="h-[1px] w-3.5 sm:w-5 bg-[#168BFF]"></span>
                <span className="text-[#168BFF] font-mono text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase font-semibold">
                  DESIGNER &amp; FRONT-END DEVELOPER
                </span>
              </div>
            </div>

            {/* 2. Saudação & Nome como Protagonista */}
            <div className="space-y-0.5 sm:space-y-1.5">
              <span className="text-[11px] sm:text-sm font-mono tracking-[0.22em] sm:tracking-[0.25em] text-[#687386] uppercase block font-medium">
                {language === 'pt' ? 'OLÁ, EU SOU' : "HELLO, I'M"}
              </span>
              
              {/* Nome Principal com Destaque Tipográfico */}
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tighter leading-[0.94] text-[#F5F7FA]">
                <span className="bg-gradient-to-r from-[#00D5FF] via-[#168BFF] to-[#9B5CFF] bg-clip-text text-transparent">
                  IGOR
                </span>{' '}
                <span className="text-[#F5F7FA]">
                  TELES
                </span>
              </h1>

              {/* Cargo Subordinado */}
              <p className="text-base sm:text-xl lg:text-2xl font-display font-medium text-[#D1D5DB] tracking-tight pt-0.5">
                Designer &amp; Front-End Developer
              </p>
            </div>

            {/* 3. Proposta de Valor & Pipeline Profissional */}
            <div className="space-y-2 sm:space-y-2.5 max-w-xl">
              <p className="text-xs sm:text-base lg:text-[15px] xl:text-base text-[#A6B0C0] leading-relaxed font-normal">
                {t.hero.subtitle}
              </p>
              
              {/* Faixa Conceitual (Assinatura de Atuação) */}
              <div className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#101722]/85 border border-white/5 text-[9.5px] sm:text-xs font-mono text-[#687386] shadow-xs">
                <span className="text-[#00D5FF] font-semibold">DESIGN</span>
                <span className="text-white/20">&rarr;</span>
                <span className="text-[#168BFF] font-semibold">UI/UX</span>
                <span className="text-white/20">&rarr;</span>
                <span className="text-[#9B5CFF] font-semibold">FRONT-END</span>
                <span className="text-white/20">&rarr;</span>
                <span className="text-[#00E599] font-semibold">DIGITAL PRODUCTS</span>
              </div>
            </div>

            {/* 4. Botões de Ação (CTAs) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-0.5">
              <button
                id="btn-hero-explore"
                onClick={scrollToWork}
                data-cursor="link"
                className="min-h-[44px] px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-[#168BFF] text-white font-bold text-xs sm:text-sm font-mono flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-[#00A8FF] hover:shadow-lg hover:shadow-[#168BFF]/25 hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer shadow-md"
              >
                <span>{t.hero.ctaWork}</span>
                <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              <button
                id="btn-hero-about"
                onClick={scrollToAbout}
                data-cursor="link"
                className="min-h-[44px] px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-transparent border border-white/15 text-[#F5F7FA] font-bold text-xs sm:text-sm font-mono flex items-center justify-center hover:bg-white/[0.06] hover:border-white/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
              >
                {t.hero.ctaAbout}
              </button>
            </div>

            {/* 5. Redes Profissionais */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 border-t border-white/5 text-[11px] sm:text-xs font-mono tracking-wider text-[#687386]">
              <a
                href="https://www.linkedin.com/in/byigorteles"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="hover:text-[#00D5FF] transition-colors flex items-center gap-1 sm:gap-1.5 group py-1.5 min-h-[36px]"
                aria-label="LinkedIn de Igor Teles"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#687386] group-hover:text-[#00D5FF] transition-colors" />
                <span>LinkedIn</span>
                <span className="text-[10px] text-[#687386] group-hover:text-[#00D5FF]">↗</span>
              </a>

              <a
                href="https://github.com/igortelesdesign-svg"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="hover:text-[#00D5FF] transition-colors flex items-center gap-1 sm:gap-1.5 group py-1.5 min-h-[36px]"
                aria-label="GitHub de Igor Teles"
              >
                <Github className="w-3.5 h-3.5 text-[#687386] group-hover:text-[#00D5FF] transition-colors" />
                <span>GitHub</span>
                <span className="text-[10px] text-[#687386] group-hover:text-[#00D5FF]">↗</span>
              </a>

              <a
                href="mailto:igortelesdesign@gmail.com"
                data-cursor="link"
                className="hover:text-[#00D5FF] transition-colors flex items-center gap-1 sm:gap-1.5 group py-1.5 min-h-[36px]"
                aria-label="Enviar e-mail para Igor Teles"
              >
                <Mail className="w-3.5 h-3.5 text-[#687386] group-hover:text-[#00D5FF] transition-colors" />
                <span>E-mail</span>
                <span className="text-[10px] text-[#687386] group-hover:text-[#00D5FF]">↗</span>
              </a>
            </div>

            {/* =========================================================================
                ÁREA B — RETRATO EDITORIAL DE GRANDE PRESENÇA NO MOBILE (< 768px)
                - No fluxo normal do documento, DEPOIS dos links profissionais
                - Escala ampliada (+12-15%) com protagonismo humano (cabeça, cabelo, rosto e busto)
                - Zero linhas de corte retangular: fade 360° com mask-image e gradientes suaves
                - Transição orgânica superior, inferior e lateral fundindo no background #07090D
                - Backlight suave e atmosférico azul/ciano atrás do busto
                ========================================================================= */}
            <div className="md:hidden relative w-full flex flex-col items-center sm:items-end justify-center overflow-hidden select-none pt-3 sm:pt-4 pb-1">
              {/* Backlight Atmosférico Discreto e Profundo */}
              <div className="absolute bottom-10 right-1/4 sm:right-8 w-72 h-72 bg-[radial-gradient(circle_at_55%_40%,rgba(22,139,255,0.22)_0%,rgba(0,213,255,0.10)_38%,rgba(114,87,255,0.05)_68%,transparent_80%)] rounded-full blur-3xl pointer-events-none" />

              {/* Container Fotográfico Editorial de Grande Escala */}
              <div
                className="relative w-full flex justify-center sm:justify-end overflow-visible"
                style={{
                  maxWidth: 'min(94vw, 430px)',
                  height: 'clamp(290px, 86vw, 440px)',
                }}
              >
                <img
                  src={igorPortrait}
                  alt="Igor Teles — Designer e Front-End Developer"
                  className="w-full h-full object-cover object-[52%_5%] scale-[1.12] origin-top filter contrast-[1.03] brightness-95 pointer-events-none"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  style={{
                    maskImage: 'radial-gradient(ellipse 94% 88% at 52% 30%, black 52%, transparent 95%), linear-gradient(to bottom, transparent 0%, black 12%, black 65%, transparent 98%), linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 94% 88% at 52% 30%, black 52%, transparent 95%), linear-gradient(to bottom, transparent 0%, black 12%, black 65%, transparent 98%), linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)'
                  }}
                />

                {/* Fade Superior Extremamente Suave (Elimina a linha horizontal do topo da foto) */}
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#07090D] via-[#07090D]/60 to-transparent pointer-events-none" />
                {/* Fade Inferior Suave e Contínuo (Fusão perfeita no background escuro) */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07090D] via-[#07090D]/90 to-transparent pointer-events-none" />
                {/* Fade Lateral Esquerdo Suave */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#07090D] via-[#07090D]/65 to-transparent pointer-events-none" />
                {/* Fade Lateral Direito Sutil */}
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#07090D] via-[#07090D]/50 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>

          {/* =========================================================================
              COLUNA DIREITA (DESKTOP / TABLET >= 768px):
              Fotografia Real de Igor com Fade & Profundidade 3D em Grid Horizontal
              ========================================================================= */}
          <div className="hidden md:flex relative justify-end items-center h-full min-h-[440px] lg:min-h-[520px]">
            
            {/* Backlight Amplo e Difuso (Azul Elétrico / Ciano / Toque Violeta) */}
            <div className="absolute w-[115%] h-[115%] max-w-[500px] max-h-[500px] bg-[radial-gradient(circle_at_50%_38%,rgba(22,139,255,0.24)_0%,rgba(0,213,255,0.14)_35%,rgba(114,87,255,0.07)_68%,transparent_82%)] rounded-full blur-3xl pointer-events-none opacity-85" />

            {/* Container da Fotografia Integrada */}
            <motion.div
              style={{ x: photoShiftX, y: photoShiftY }}
              className="relative w-full max-w-[360px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[490px] flex items-center justify-center select-none"
            >
              {/* Imagem Fotográfica Real Original de Igor Teles com Fade Cinematográfico */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3.8/5] md:aspect-[3.7/5] max-h-[490px] lg:max-h-[550px] xl:max-h-[590px] overflow-hidden flex items-start justify-center">
                <img
                  src={igorPortrait}
                  alt="Igor Teles — Designer e Front-End Developer"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-95 pointer-events-none"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  style={{
                    maskImage: 'radial-gradient(ellipse 94% 88% at 50% 36%, black 55%, transparent 96%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 94% 88% at 50% 36%, black 55%, transparent 96%)'
                  }}
                />

                {/* Fade Inferior Suave (Dissolução do tronco no background) */}
                <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 md:h-40 bg-gradient-to-t from-[#07090D] via-[#07090D]/85 to-transparent pointer-events-none" />
                
                {/* Fade Lateral Esquerdo (Transição imperceptível para o conteúdo) */}
                <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-28 bg-gradient-to-r from-[#07090D] via-[#07090D]/75 to-transparent pointer-events-none" />
                
                {/* Fade Lateral Direito */}
                <div className="absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#07090D] via-[#07090D]/55 to-transparent pointer-events-none" />
                
                {/* Fade Superior Sutil */}
                <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#07090D]/30 to-transparent pointer-events-none" />
              </div>

              {/* =========================================================================
                  MICROELEMENTOS 3D FLUTUANTES DISCRETOS (Design + Dev em diferentes planos)
                  ========================================================================= */}
              
              {/* Elemento 1: Figma (Design) — Top Left periférico (Plano 1, nítido) */}
              <motion.div
                style={{ x: floatPlane1X, y: floatPlane1Y }}
                className="hidden sm:flex absolute top-6 -left-3 items-center gap-1.5 px-2 py-1 rounded-md bg-[#101722]/50 border border-white/5 backdrop-blur-[2px] opacity-35 text-[10px] font-mono text-[#A6B0C0] pointer-events-none transform -rotate-3 scale-95"
              >
                <div className="w-2.5 h-3.5 flex flex-col justify-between">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F24E1E] inline-block" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ACF83] inline-block" />
                </div>
                <span>Figma</span>
              </motion.div>

              {/* Elemento 2: Photoshop Ps (Design) — Top Right periférico */}
              <motion.div
                style={{ x: floatPlane2X, y: floatPlane2Y }}
                className="hidden sm:flex absolute top-10 -right-2 items-center gap-1 px-2 py-0.5 rounded bg-[#001E36]/40 border border-[#00A8FF]/20 backdrop-blur-[1px] opacity-30 text-[9px] font-mono text-[#00A8FF] pointer-events-none transform rotate-6 scale-90"
              >
                <span className="font-bold">Ps</span>
              </motion.div>

              {/* Elemento 3: React ⚛ & TypeScript (Dev) — Bottom Right (Plano 2) */}
              <motion.div
                style={{ x: floatPlane3X, y: floatPlane3Y }}
                className="hidden sm:flex absolute bottom-16 -right-3 items-center gap-1 px-2 py-1 rounded-md bg-[#101722]/60 border border-[#00D5FF]/15 backdrop-blur-[2px] opacity-40 text-[10px] font-mono text-[#00D5FF] pointer-events-none transform rotate-3"
              >
                <span className="text-xs">⚛</span>
                <span>React • TS</span>
              </motion.div>

              {/* Elemento 4: GitHub / Git (Dev) — Bottom Left periférico */}
              <div className="hidden lg:flex absolute bottom-12 -left-2 items-center gap-1 px-2 py-0.5 rounded bg-[#101722]/40 border border-white/5 opacity-25 text-[9px] font-mono text-[#687386] pointer-events-none transform -rotate-6 scale-85">
                <span>&lt;git /&gt;</span>
              </div>

            </motion.div>

          </div>

        </div>
      </div>

      {/* =========================================================================
          BOTTOM: Indicador Minimalista de Rolagem (Scroll Indicator)
          ========================================================================= */}
      <div className="w-full flex justify-center pt-1.5 pb-1 z-20">
        <button
          onClick={scrollToWork}
          className="flex flex-col items-center gap-1 text-[#687386] hover:text-[#00D5FF] transition-colors focus:outline-none cursor-pointer group"
          aria-label={t.hero.scrollIndicator}
        >
          <span className="text-[10px] font-mono tracking-widest uppercase group-hover:tracking-wider transition-all">
            {t.hero.scrollIndicator}
          </span>
          <div className="w-3.5 h-6 rounded-full border border-white/15 flex items-start justify-center p-0.5 group-hover:border-[#00D5FF]/40 transition-colors">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-[#00D5FF]"
            />
          </div>
        </button>
      </div>
    </section>
  );
};
