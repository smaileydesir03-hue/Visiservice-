import React, { useState, useRef, useEffect } from 'react';
import {
  Star,
  Quote,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react';
import { CLIENT_TESTIMONIALS, TestimonialItem } from '../data/agencyData';
import { SlideUp } from './SlideUp';

interface TestimonialsProps {
  onSelectServiceForQuote?: (serviceName: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onSelectServiceForQuote }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const testimonials = CLIENT_TESTIMONIALS;

  // Track active card index based on scroll position
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const handleScroll = () => {
      const cardWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).clientWidth + 24
        : 380;
      const index = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), testimonials.length - 1));
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, [testimonials.length]);

  // Automatic carousel progression
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
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const scrollToCard = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - 16, behavior: 'smooth' });
    }
  };

  return (
    <section id="temoignages" className="py-20 lg:py-28 bg-[#FAFAFA] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SlideUp className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF1DD] border border-[#FFC56E]/40 text-xs font-semibold tracking-wider text-[#171717] uppercase mb-4">
              <Award className="w-3.5 h-3.5 text-[#171717]" />
              <span>Témoignages & Avis Clients</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-[#666666] mt-3">
              La satisfaction de nos partenaires et l'impact mesurable de nos créations.
            </p>
          </SlideUp>

          {/* Automatic indicator badge (no arrow buttons) */}
          <SlideUp delay={100} className="flex items-center gap-2 self-start md:self-end">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 text-xs font-semibold text-[#171717] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Défilement automatique</span>
            </span>
          </SlideUp>
        </div>

        {/* Agency Trust Highlights */}
        <SlideUp delay={120} className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF1DD] flex items-center justify-center text-[#171717] border border-[#FFC56E]/40 shrink-0">
              <Star className="w-5 h-5 fill-[#FFC56E] text-[#FFC56E]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-[#171717]">4.9 / 5</div>
              <div className="text-xs text-[#666666]">Note moyenne clients</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-200 shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-[#171717]">99%</div>
              <div className="text-xs text-[#666666]">Taux de satisfaction</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-200 shrink-0">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-[#171717]">100%</div>
              <div className="text-xs text-[#666666]">Projets livrés à temps</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF1DD] flex items-center justify-center text-[#171717] border border-[#FFC56E]/40 shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#171717]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-[#171717]">60%</div>
              <div className="text-xs text-[#666666]">Acompte sécurisé garanti</div>
            </div>
          </div>
        </SlideUp>

        {/* Testimonials Card Slider (Automatic Carousel) */}
        <div
          className="mt-6 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className="snap-start shrink-0 w-[300px] sm:w-[380px] md:w-[420px] bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 hover:border-[#FFC56E]/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Card Info: Stars, Verified Badge, Quote Icon */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFC56E] text-[#FFC56E]" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Client Vérifié
                    </span>
                  </div>

                  {/* Project Tag */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 text-[11px] font-medium text-[#171717] mb-3">
                    <Sparkles className="w-3 h-3 text-[#FFC56E]" />
                    <span className="truncate max-w-[280px]">{item.projectTitle}</span>
                  </div>

                  {/* Quote content */}
                  <p className="text-sm sm:text-base text-[#171717] leading-relaxed font-normal mb-5 relative pl-4 border-l-2 border-[#FFC56E]">
                    "{item.content}"
                  </p>
                </div>

                {/* Bottom Card Info: Metric Highlight & Author details */}
                <div className="pt-4 border-t border-neutral-100">
                  {item.metric && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1DD] text-[#171717] text-xs font-bold border border-[#FFC56E]/40">
                      <TrendingUp className="w-3.5 h-3.5 text-[#171717]" />
                      <span>{item.metric}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full ${
                          item.avatarBg || 'bg-[#171717]'
                        } text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0`}
                      >
                        {item.author
                          .split(' ')
                          .map((n) => n[0])
                          .filter(Boolean)
                          .slice(0, 2)
                          .join('')}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#171717] flex items-center gap-1.5">
                          {item.author}
                        </div>
                        <div className="text-xs text-[#666666]">
                          {item.role} · <span className="font-semibold text-[#171717]">{item.company}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#888888] font-mono shrink-0 hidden sm:inline">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Pagination Indicators */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToCard(index)}
                aria-label={`Aller au témoignage ${index + 1}`}
                className={`transition-all duration-200 cursor-pointer rounded-full ${
                  activeIndex === index
                    ? 'w-7 h-2 bg-[#171717]'
                    : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <SlideUp delay={200} className="mt-12 p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Prêt à propulser votre entreprise au niveau supérieur ?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300">
              Rejoignez nos clients satisfaits et obtenez une solution sur-mesure dès maintenant.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectServiceForQuote?.('Nouveau projet sur-mesure')}
            className="px-6 py-3 bg-[#FFC56E] hover:bg-[#fab752] text-[#171717] text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95 shrink-0"
          >
            Lancer mon projet
          </button>
        </SlideUp>
      </div>
    </section>
  );
};
