import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, GRAPHIC_DESIGN_ITEMS, PortfolioProject } from '../data/agencyData';
import { ProjectModal } from './ProjectModal';
import { GraphicDesignCarousel } from './GraphicDesignCarousel';
import { WebProjectsCarousel } from './WebProjectsCarousel';
import { SlideUp } from './SlideUp';

interface PortfolioProps {
  onSelectProjectForQuote: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProjectForQuote }) => {
  const [activeFilter, setActiveFilter] = useState<'web' | 'marketing' | 'design'>('web');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filterTabs = [
    { id: 'web', label: 'Création Web' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'design', label: 'Graphic Design' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => p.categoryKey === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SlideUp className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF1DD] border border-[#FFC56E]/40 text-xs font-semibold tracking-wider text-[#171717] uppercase mb-4">
              PORTFOLIO CLIENTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight">
              Nos réalisations
            </h2>
            <p className="text-lg text-[#666666] mt-3">
              Des idées transformées en expériences digitales.
            </p>
          </SlideUp>

          {/* Interactive filter tabs: strictly the different parts/categories */}
          <SlideUp delay={100} className="w-full md:w-auto max-w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 p-1.5 bg-neutral-100 rounded-xl w-full sm:w-auto">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                const count =
                  tab.id === 'design'
                    ? GRAPHIC_DESIGN_ITEMS.length
                    : PORTFOLIO_PROJECTS.filter((p) => p.categoryKey === tab.id).length;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id as 'web' | 'marketing' | 'design')}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#171717] shadow-xs font-bold border border-neutral-200/60'
                        : 'text-[#666666] hover:text-[#171717] hover:bg-neutral-200/50'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {count > 0 && (
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-[#FFF1DD] text-[#171717] font-bold' : 'bg-white text-[#666666]'
                      }`}>
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </SlideUp>
        </div>

        {/* Projects View: Graphic Design Carousel OR Web Projects Carousel OR Marketing State */}
        {activeFilter === 'design' ? (
          <SlideUp delay={120}>
            <GraphicDesignCarousel onSelectQuote={onSelectProjectForQuote} />
          </SlideUp>
        ) : activeFilter === 'web' ? (
          <SlideUp delay={120}>
            <div className="mt-8">
              <WebProjectsCarousel
                projects={filteredProjects}
                onSelectProject={setSelectedProject}
              />
            </div>
          </SlideUp>
        ) : (
          <SlideUp className="mt-12 p-8 sm:p-12 bg-[#FAFAFA] rounded-2xl border border-neutral-200 text-center max-w-lg mx-auto space-y-4 animate-in fade-in duration-200">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FFF1DD] flex items-center justify-center text-[#171717]">
              <span className="text-xl">✨</span>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#171717]">
                Projets réels Digital Marketing
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mt-1.5">
                Les prochaines réalisations réelles en gestion de réseaux sociaux et publicité digitale sont en cours d’intégration.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() =>
                  onSelectProjectForQuote('Digital Marketing & Réseaux Sociaux')
                }
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-[#171717] bg-[#FFC56E] hover:bg-[#fab752] rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Demander un devis pour cette catégorie
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('web')}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#171717] bg-white hover:bg-neutral-100 border border-neutral-200 rounded-lg transition-colors cursor-pointer"
              >
                Voir les projets Web
              </button>
            </div>
          </SlideUp>
        )}
      </div>

      {/* Project details modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(title) => {
          setSelectedProject(null);
          onSelectProjectForQuote(`Inspiré de : ${title}`);
        }}
      />
    </section>
  );
};
