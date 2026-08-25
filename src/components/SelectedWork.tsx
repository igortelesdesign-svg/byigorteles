import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import { CaseStudyModal } from './CaseStudyModal';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export const SelectedWork: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  return (
    <section id="work" className="py-20 sm:py-24 md:py-28 bg-[#07090D] relative overflow-hidden">
      {/* Background ambient atmospheric lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00D5FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#168BFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-white/10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101722] border border-[#168BFF]/25 text-[11px] font-mono text-[#00D5FF]">
              <Sparkles className="w-3 h-3 text-[#00D5FF]" />
              {t.projects.badge}
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F5F7FA] tracking-tight">
              {t.projects.title}
            </h2>

            <p className="text-sm sm:text-base text-[#A6B0C0] leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="text-xs font-mono text-[#687386] self-start md:self-end shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-[#101722] border border-white/5 text-[#00D5FF]/90">
              [ {t.projects.counter} ]
            </span>
          </div>
        </div>

        {/* Projects Grid (2 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-10">
          {projectsData.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="group relative rounded-2xl bg-[#101722]/90 border border-white/10 hover:border-[#00D5FF]/40 transition-all duration-300 flex flex-col overflow-hidden shadow-xl"
            >
              {/* 1. Project Thumbnail */}
              <div
                onClick={() => handleOpenProject(project)}
                data-cursor="view"
                className="relative aspect-16/10 w-full overflow-hidden bg-[#0B1018] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101722] via-[#101722]/25 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                {/* Project Number Top Left */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 px-2.5 sm:px-3 py-1 rounded-md bg-[#07090D]/85 backdrop-blur-md border border-white/10 text-xs font-mono text-[#00D5FF] font-bold shadow-sm">
                  {project.number}
                </div>

                {/* Project Year Top Right */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 px-2.5 py-1 rounded-md bg-[#07090D]/85 backdrop-blur-md border border-white/10 text-xs font-mono text-[#A6B0C0] shadow-sm">
                  {project.year}
                </div>

                {/* Hover overlay hint (desktop only) */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-4 py-2 rounded-xl bg-[#00D5FF] text-[#07090D] font-mono text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-xl">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{t.projects.viewProject}</span>
                  </div>
                </div>
              </div>

              {/* 2. Project Details Content */}
              <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between space-y-4 sm:space-y-5">
                
                {/* Header Group: Title, Category & Description */}
                <div className="space-y-2 sm:space-y-2.5">
                  {/* Title */}
                  <h3
                    onClick={() => handleOpenProject(project)}
                    className="text-xl sm:text-2xl font-display font-bold text-[#F5F7FA] group-hover:text-[#00D5FF] transition-colors cursor-pointer flex items-center justify-between gap-2"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#687386] group-hover:text-[#00D5FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </h3>

                  {/* Category */}
                  <p className="text-xs sm:text-[13px] font-mono text-[#00D5FF] tracking-wide font-medium">
                    {project.category[language]}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#A6B0C0] leading-relaxed pt-1">
                    {project.shortDescription[language]}
                  </p>
                </div>

                {/* 3. Stack Tags & 4. Action Buttons */}
                <div className="space-y-4 pt-3 sm:pt-4 border-t border-white/5">
                  
                  {/* Technology Stack Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#07090D] border border-white/5 text-[11px] font-mono text-[#A6B0C0] hover:text-[#F5F7FA] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Ver projeto & GitHub */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                    
                    {/* Botão Primário: Ver projeto */}
                    <button
                      id={`btn-view-project-${project.slug}`}
                      onClick={() => handleOpenProject(project)}
                      className="flex-1 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#168BFF] text-white font-mono text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#00A8FF] hover:shadow-lg hover:shadow-[#168BFF]/20 active:scale-[0.98] transition-all cursor-pointer shadow-md"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{t.projects.viewProject}</span>
                    </button>

                    {/* Botão Secundário: GitHub */}
                    {project.links.github ? (
                      <a
                        id={`btn-github-project-${project.slug}`}
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="link"
                        className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#07090D] border border-white/15 text-[#F5F7FA] font-mono text-xs font-medium flex items-center justify-center gap-2 hover:bg-white/[0.08] hover:border-white/30 hover:text-[#00D5FF] active:scale-[0.98] transition-all"
                        aria-label={`GitHub - ${project.title}`}
                      >
                        <Github className="w-4 h-4 text-[#A6B0C0] group-hover:text-[#00D5FF]" />
                        <span>{t.projects.githubRepo}</span>
                      </a>
                    ) : (
                      <button
                        id={`btn-github-project-${project.slug}`}
                        onClick={() => handleOpenProject(project)}
                        className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#07090D] border border-white/15 text-[#A6B0C0] font-mono text-xs font-medium flex items-center justify-center gap-2 hover:bg-white/[0.08] hover:border-white/30 hover:text-[#00D5FF] active:scale-[0.98] transition-all cursor-pointer"
                        aria-label={`GitHub - ${project.title}`}
                      >
                        <Github className="w-4 h-4 text-[#A6B0C0]" />
                        <span>{t.projects.githubRepo}</span>
                      </button>
                    )}

                  </div>

                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Case Study Modal Overlay */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={projectsData}
      />
    </section>
  );
};
