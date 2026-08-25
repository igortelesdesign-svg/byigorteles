import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { X, ExternalLink, Github, ArrowRight, CheckCircle2, Layers, Cpu, Palette, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (p: ProjectItem) => void;
  allProjects: ProjectItem[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <AnimatePresence>
      <div
        id="case-study-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-[#0B1018] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Top Sticky Header Bar */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0B1018]/95 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#00D5FF] bg-[#00D5FF]/10 px-2.5 py-1 rounded-md border border-[#00D5FF]/20">
                PROJETO {project.number}
              </span>
              <h2 className="font-display font-bold text-lg sm:text-xl text-[#F5F7FA] truncate">
                {project.title}
              </h2>
            </div>

            <button
              id="btn-close-case-study"
              onClick={onClose}
              className="p-2 rounded-xl bg-[#101722] text-[#A6B0C0] hover:text-[#F5F7FA] hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label={t.projects.closeModal}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-10">
            
            {/* Hero Banner & Project Meta */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-16/9 w-full bg-[#101722]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1018] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-[#00D5FF] uppercase tracking-wider">
                      {project.category[language]}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-[#168BFF] text-white text-xs font-mono flex items-center gap-1.5 hover:bg-[#00A8FF] transition-colors shadow-lg"
                      >
                        <span>{t.projects.liveDemo}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-[#101722] border border-white/10 text-white text-xs font-mono flex items-center gap-1.5 hover:bg-white/10 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{t.projects.githubRepo}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono text-[#687386] mr-2">
                  {t.projects.allTechs}:
                </span>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#101722] border border-white/10 text-xs font-mono text-[#A6B0C0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics Section (if available) */}
            {project.caseStudy.metrics && project.caseStudy.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-[#101722]/60 border border-white/5">
                {project.caseStudy.metrics.map((metric, i) => (
                  <div key={i} className="text-center sm:text-left space-y-1">
                    <p className="text-2xl sm:text-3xl font-display font-bold text-[#00D5FF]">
                      {metric.value}
                    </p>
                    <p className="text-xs font-mono text-[#A6B0C0]">
                      {metric.label[language]}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Overview & Challenge Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-[#101722] border border-white/10 space-y-3">
                <h4 className="font-display font-bold text-base text-[#F5F7FA] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#168BFF]" />
                  {t.projects.caseStudyLabels.overview}
                </h4>
                <p className="text-sm text-[#A6B0C0] leading-relaxed">
                  {project.caseStudy.overview[language]}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#101722] border border-white/10 space-y-3">
                <h4 className="font-display font-bold text-base text-[#F5F7FA] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9B5CFF]" />
                  {t.projects.caseStudyLabels.challenge}
                </h4>
                <p className="text-sm text-[#A6B0C0] leading-relaxed">
                  {project.caseStudy.challenge[language]}
                </p>
              </div>
            </div>

            {/* My Role & Process */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#101722] border border-white/10 space-y-3">
                <h4 className="font-display font-bold text-base text-[#F5F7FA] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D5FF]" />
                  {t.projects.caseStudyLabels.myRole}
                </h4>
                <p className="text-sm text-[#A6B0C0] leading-relaxed">
                  {project.caseStudy.myRole[language]}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#101722] border border-white/10 space-y-3">
                <h4 className="font-display font-bold text-base text-[#F5F7FA] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#00D5FF]" />
                  {t.projects.caseStudyLabels.process}
                </h4>
                <p className="text-sm text-[#A6B0C0] leading-relaxed">
                  {project.caseStudy.process[language]}
                </p>
              </div>
            </div>

            {/* Design Decisions vs Dev Decisions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Design Decisions */}
              <div className="p-6 rounded-2xl bg-[#101722] border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-[#00D5FF]">
                  <Palette className="w-4 h-4" />
                  <h4 className="font-display font-bold text-base text-[#F5F7FA]">
                    {t.projects.caseStudyLabels.designDecisions}
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {project.caseStudy.designDecisions[language].map((decision, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A6B0C0] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#00D5FF] shrink-0 mt-0.5" />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dev Decisions */}
              <div className="p-6 rounded-2xl bg-[#101722] border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-[#9B5CFF]">
                  <Cpu className="w-4 h-4" />
                  <h4 className="font-display font-bold text-base text-[#F5F7FA]">
                    {t.projects.caseStudyLabels.devDecisions}
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {project.caseStudy.developmentDecisions[language].map((decision, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A6B0C0] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#9B5CFF] shrink-0 mt-0.5" />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Result & Impact */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#101722] to-[#151D2A] border border-white/10 space-y-3">
              <h4 className="font-display font-bold text-base text-[#F5F7FA] flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                {t.projects.caseStudyLabels.result}
              </h4>
              <p className="text-sm text-[#A6B0C0] leading-relaxed">
                {project.caseStudy.result[language]}
              </p>
            </div>

            {/* Next Project Footer Bar */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-[#101722] border border-white/10 text-xs font-mono text-[#A6B0C0] hover:text-white transition-colors"
              >
                {t.projects.closeModal}
              </button>

              <button
                onClick={() => onSelectProject(nextProject)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#168BFF] text-white text-xs font-mono font-medium hover:bg-[#00A8FF] transition-all shadow-lg cursor-pointer group"
              >
                <span>{t.projects.nextProject}: {nextProject.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
