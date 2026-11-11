import React, { useEffect } from 'react';
import { X, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { PortfolioProject } from '../data/agencyData';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent Top Close Cross Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#171717] hover:bg-[#FFC56E] active:scale-95 shadow-xl border border-neutral-300 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC56E]"
          aria-label="Fermer la fenêtre du projet"
          title="Fermer le projet"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Project Visual Header */}
        <div className="relative h-60 sm:h-80 bg-neutral-100 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full ${project.categoryKey === 'design' ? 'object-cover object-top' : 'object-cover'}`}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 pr-16 sm:pr-20">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FFC56E]">
              {project.category} · Réalisation Visi Service ({project.year})
            </span>
            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Project Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#666666]">
              Aperçu du projet
            </h4>
            <p className="text-base text-[#171717] mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="bg-[#FFF1DD]/50 rounded-xl p-5 border border-[#FFC56E]/30">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#171717]">
              Contexte & Objectifs de conception
            </h4>
            <p className="text-sm text-[#666666] mt-2 leading-relaxed">
              {project.clientContext}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#666666] mb-3">
              Points forts & Résultats obtenus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.results.map((res, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-50 border border-neutral-100 text-xs font-medium text-[#171717]"
                >
                  <Check className="w-4 h-4 text-[#FFC56E] shrink-0 mt-0.5" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dedicated full flyer display for graphic design projects */}
          {project.categoryKey === 'design' && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#666666]">
                Visuel complet du Flyer
              </h4>
              <div className="rounded-2xl border border-neutral-200 bg-[#070e1b] p-3 sm:p-5 flex items-center justify-center shadow-inner">
                <img
                  src={project.image}
                  alt={`Aperçu complet ${project.title}`}
                  className="max-h-[520px] w-auto rounded-xl object-contain shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium bg-neutral-100 text-[#666666] rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Modal Actions Footer */}
          <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#FFC56E]" />
                  <span>Visiter {project.title.split(' ')[0]} (en direct)</span>
                </a>
              ) : (
                <span className="text-xs text-[#666666]">
                  Vous souhaitez un résultat similaire pour votre marque ?
                </span>
              )}
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-lg border border-neutral-300 text-xs font-semibold text-[#171717] hover:bg-neutral-100 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Fermer</span>
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#171717] bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Voir le site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestSimilar(project.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#171717] bg-[#FFC56E] hover:bg-[#fab752] rounded-lg shadow-sm transition-all cursor-pointer"
              >
                Lancer un projet
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
