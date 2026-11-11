import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from 'lucide-react';
import { GRAPHIC_DESIGN_ITEMS } from '../data/agencyData';

interface GraphicDesignCarouselProps {
  onSelectQuote?: (serviceName: string) => void;
}

export const GraphicDesignCarousel: React.FC<GraphicDesignCarouselProps> = ({ onSelectQuote }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Automatic carousel progression
  useEffect(() => {
    if (isPaused || selectedIndex !== null) return;

    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;
      const cardWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).clientWidth + 16
        : 280;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 20) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, selectedIndex]);

  // Handle keyboard events (Escape, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % GRAPHIC_DESIGN_ITEMS.length : 0
        );
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + GRAPHIC_DESIGN_ITEMS.length) % GRAPHIC_DESIGN_ITEMS.length : 0
        );
      }
    };

    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedIndex]);

  const activePhoto = selectedIndex !== null ? GRAPHIC_DESIGN_ITEMS[selectedIndex] : null;

  return (
    <div
      className="mt-8 space-y-6 animate-in fade-in duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Carousel Navigation Bar */}
      <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FFF1DD] flex items-center justify-center text-[#171717] border border-[#FFC56E]/40 shrink-0">
            <Sparkles className="w-5 h-5 text-[#171717]" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#171717]">
              Flyers & Logos ({GRAPHIC_DESIGN_ITEMS.length} créations)
            </h3>
            <p className="text-xs text-[#666666] mt-0.5">
              Identités visuelles et supports publicitaires
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

      {/* Carousel Track (Scrollable from Left to Right with Pure Photos) */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {GRAPHIC_DESIGN_ITEMS.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedIndex(index)}
            className="snap-start shrink-0 w-[240px] sm:w-[280px] md:w-[320px] group relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl hover:border-[#FFC56E]/80 bg-white transition-all duration-300 cursor-pointer active:scale-[0.99]"
          >
            {/* Pure Photo Presentation on White Background */}
            <div className="relative aspect-[4/5] overflow-hidden flex items-center justify-center bg-white p-2 sm:p-2.5">
              <img
                src={item.image}
                alt={item.title || `Création graphique ${index + 1}`}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out rounded-xl"
                loading="lazy"
              />

              {/* Hover overlay with prominent zoom icon */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white text-[#171717] text-xs font-bold rounded-xl shadow-lg hover:bg-[#FFC56E] transition-colors border border-neutral-200">
                  <Maximize2 className="w-3.5 h-3.5" />
                  Agrandir
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal (Full-Screen Visual with Prominent Top Close Cross and Navigation) */}
      {activePhoto && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          {/* Top Close Cross Button (Prominent, High Contrast & Always on Top) */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#171717] hover:bg-[#FFC56E] hover:rotate-90 active:scale-90 shadow-2xl border-2 border-neutral-200 transition-all duration-200 cursor-pointer focus-visible:outline-none"
            aria-label="Fermer la photo"
            title="Fermer (Échap)"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Modal Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-200"
          >
            {/* Nav Arrows inside lightbox */}
            <button
              type="button"
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + GRAPHIC_DESIGN_ITEMS.length) % GRAPHIC_DESIGN_ITEMS.length
                )
              }
              className="absolute left-2 sm:left-4 z-40 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer active:scale-95 shadow-xl"
              aria-label="Photo précédente"
              title="Précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % GRAPHIC_DESIGN_ITEMS.length)
              }
              className="absolute right-2 sm:right-4 z-40 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer active:scale-95 shadow-xl"
              aria-label="Photo suivante"
              title="Suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* High-Resolution Photo Display */}
            <div className="flex items-center justify-center p-2 sm:p-6 max-h-[82vh] overflow-hidden">
              <img
                src={activePhoto.image}
                alt={activePhoto.title || `Photo ${selectedIndex + 1}`}
                className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl bg-white p-2 sm:p-3 border border-neutral-200"
              />
            </div>

            {/* Bottom Photo Counter & Quick Quote Action */}
            <div className="mt-3 flex items-center justify-between w-full max-w-md px-4 py-2 bg-neutral-900/80 backdrop-blur-md rounded-full border border-white/10 text-white text-xs">
              <span className="font-mono text-neutral-300">
                {selectedIndex + 1} / {GRAPHIC_DESIGN_ITEMS.length}
              </span>
              {onSelectQuote && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedIndex(null);
                    onSelectQuote('Création de Flyers et Logos');
                  }}
                  className="px-3 py-1 font-bold text-[#171717] bg-[#FFC56E] hover:bg-[#fab752] rounded-full transition-colors cursor-pointer"
                >
                  Commander un design
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
