import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { playgroundData } from '../data/playground';
import { PlaygroundItem } from '../types';
import { Sparkles, Filter, X, ExternalLink, Eye, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const PlaygroundSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PlaygroundItem | null>(null);

  const filterOptions = [
    { key: 'all', label: t.playground.filters.all },
    { key: 'graphic-design', label: t.playground.filters.graphic },
    { key: 'art-direction', label: t.playground.filters.artDirection },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? playgroundData
      : playgroundData.filter((item) => item.category === activeFilter);

  return (
    <section id="playground" className="py-24 bg-[#0B1018] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101722] border border-[#168BFF]/20 text-[11px] font-mono text-[#00D5FF]">
              <Sparkles className="w-3 h-3 text-[#00D5FF]" />
              {t.playground.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F5F7FA] tracking-tight">
              {t.playground.title}
            </h2>

            <p className="text-base text-[#A6B0C0] leading-relaxed">
              {t.playground.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === filter.key
                    ? 'bg-[#168BFF] text-white shadow-md font-bold'
                    : 'bg-[#101722] text-[#A6B0C0] hover:text-white hover:bg-white/[0.06] border border-white/5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Behance-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedItem(item)}
              data-cursor="view"
              className="group relative rounded-2xl bg-[#101722] border border-white/10 hover:border-[#00D5FF]/40 overflow-hidden cursor-pointer shadow-xl transition-all"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#07090D]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101722] via-[#101722]/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-md bg-[#07090D]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#00D5FF]">
                  {item.categoryLabel[language]}
                </div>

                <div className="absolute top-4 right-4 z-10 px-2 py-1 rounded-md bg-[#07090D]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#A6B0C0]">
                  {item.year}
                </div>

                {/* Hover Maximize Prompt */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-4 py-2 rounded-full bg-[#00D5FF] text-[#07090D] font-mono text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>EXPAND</span>
                  </div>
                </div>
              </div>

              {/* Item Info */}
              <div className="p-6 space-y-3">
                <h3 className="font-display font-bold text-lg text-[#F5F7FA] group-hover:text-[#00D5FF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A6B0C0] leading-relaxed">
                  {item.description[language]}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded bg-[#07090D] text-[10px] font-mono text-[#687386]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Playground Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl w-full bg-[#0B1018] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#00D5FF]">
                    {selectedItem.categoryLabel[language]} • {selectedItem.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-xl bg-[#101722] text-[#A6B0C0] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10 aspect-16/10 bg-[#07090D]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-sm text-[#A6B0C0] leading-relaxed">
                {selectedItem.description[language]}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
                <span className="text-xs font-mono text-[#687386]">Tools:</span>
                {selectedItem.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded bg-[#101722] border border-white/5 text-xs font-mono text-[#00D5FF]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
