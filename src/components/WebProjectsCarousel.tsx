import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Eye, Globe } from 'lucide-react';
import { PortfolioProject } from '../data/agencyData';

interface WebProjectsCarouselProps {
  projects: PortfolioProject[];
  onSelectProject: (project: PortfolioProject) => void;
}

export const WebProjectsCarousel: React.FC<WebProjectsCarouselProps> = ({
  projects,
  onSelectProject,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Track active project based on scroll
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const handleScroll = () => {
      const cardWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).clientWidth + 24
        : 380;
      const index = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), projects.length - 1));
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  // Automatic progression
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;
      const cardWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).clientWidth + 24
        : 380;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 20) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  const scrollToProject = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - 16, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="space-y-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Top Navigation Bar */}
      <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FFF1DD] flex items-center justify-center text-[#171717] border border-[#FFC56E]/40 shrink-0">
            <Globe className="w-5 h-5 text-[#171717]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-[#171717]">
                Projets Web ({projects.length} plateformes réelles)
              </h3>
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                100% En Ligne
              </span>
            </div>
            <p className="text-xs text-[#666666] mt-0.5">
              Plateformes web développées sur-mesure
            </p>
          </div>
        </div>

        {/* Automatic indicator badge (no arrow buttons) */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-neutral-200/90 text-xs font-semibold text-[#171717] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Défilement automatique</span>
          </span>
        </div>
      </div>

      {/* Carousel Scroll Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="snap-start shrink-0 w-[300px] sm:w-[380px] md:w-[420px] group flex flex-col bg-white rounded-3xl border border-neutral-200/90 hover:border-[#FFC56E]/70 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
          >
            {/* Visual Header / Mockup */}
            <div
              onClick={() => onSelectProject(project)}
              className="relative aspect-[16/10] bg-neutral-900 cursor-pointer overflow-hidden"
            >
              <img
                src={project.image}
                alt={`Aperçu du site ${project.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Status Indicator */}
              <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-bold text-[#171717] shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>En ligne</span>
              </div>

              {/* Domain URL Pill */}
              {project.liveUrl && (
                <div className="absolute top-3.5 right-3.5 bg-black/75 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-white shadow-sm flex items-center gap-1">
                  <span>{project.liveUrl.replace('https://', '').replace('http://', '').replace(/\/$/, '')}</span>
                </div>
              )}

              {/* Hover overlay with zoom / preview */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-[#171717] text-xs font-bold rounded-xl shadow-lg hover:bg-[#FFC56E] transition-colors cursor-pointer active:scale-95"
                >
                  <Eye className="w-4 h-4" />
                  Ouvrir les détails
                </button>
              </div>
            </div>

            {/* Project Information */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-[#FFC56E] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {project.year}
                  </span>
                </div>

                <h4
                  onClick={() => onSelectProject(project)}
                  className="text-lg sm:text-xl font-bold text-[#171717] mt-1.5 group-hover:text-black cursor-pointer hover:underline transition-colors"
                >
                  {project.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#666666] mt-2.5 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-semibold bg-neutral-100 text-neutral-700 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-neutral-100 text-neutral-500 rounded-md">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171717] hover:text-[#FFC56E] transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Détails</span>
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#FFF1DD] text-[#171717] hover:bg-[#FFC56E] border border-[#FFC56E]/40 transition-colors shadow-xs active:scale-95"
                  >
                    <span>Visiter le site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Pagination Indicators */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollToProject(index)}
            aria-label={`Aller au projet web ${index + 1}`}
            className={`transition-all duration-200 cursor-pointer rounded-full ${
              activeIndex === index
                ? 'w-7 h-2 bg-[#171717]'
                : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
