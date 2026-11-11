import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/agencyData';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreServices }) => {
  return (
    <section
      id="accueil"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white"
    >
      {/* Subtle background ambient glow (strictly restrained apricot yellow tint) */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#FFF1DD]/60 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Top kicker */}
            <div className="animate-slide-up inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF1DD] border border-[#FFC56E]/40 text-xs font-semibold tracking-wider text-[#171717] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC56E]" />
              VOTRE PARTENAIRE DIGITAL
            </div>

            {/* Main Headline */}
            <h1 className="animate-slide-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.12] text-balance">
              Développons votre{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#171717]">présence en ligne</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 bottom-1.5 sm:bottom-2 w-full h-3 sm:h-3.5 bg-[#FFC56E] -z-0 opacity-80 rounded-sm"
                />
              </span>
              .
            </h1>

            {/* Subtitle */}
            <p className="animate-slide-up-delay-2 text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl">
              Visi Service accompagne les entrepreneurs, les marques et les entreprises dans la création de leur identité digitale. Nous concevons des sites web professionnels, développons votre visibilité sur les réseaux sociaux et créons des visuels qui donnent vie à vos idées.
            </p>

            {/* Actions: Two Buttons */}
            <div className="animate-slide-up-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#171717] bg-white border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50 active:scale-[0.98] transition-all rounded-lg shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                Découvrir nos services
                <ArrowDown className="w-4 h-4 text-[#666666]" />
              </button>

              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#171717] bg-[#FFC56E] hover:bg-[#fab752] active:scale-[0.98] transition-all rounded-lg shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC56E]"
              >
                Demander un devis
                <ArrowUpRight className="w-4 h-4 text-[#171717]" />
              </button>
            </div>

            {/* Subline indicator */}
            <div className="animate-slide-up-delay-4 pt-2 flex items-center gap-2 text-xs font-medium text-[#666666]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC56E]" />
              <span>Créativité · Technologie · Résultats</span>
            </div>
          </div>

          {/* Right Column: High Quality Visual Asset */}
          <div className="lg:col-span-5 relative animate-slide-up-delay-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle back accent frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 bg-gradient-to-tr from-[#FFF1DD] to-[#FFC56E]/20 rounded-2xl -z-10 blur-xs"
              />

              <div className="relative rounded-2xl overflow-hidden border border-neutral-200/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] bg-neutral-100">
                <img
                  src={ASSETS.hero}
                  alt="Équipe Visi Service en conception de projets digitaux et web design"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback container if local asset issue
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-[400px] bg-[#FFF1DD] flex flex-col items-center justify-center p-8 text-center">
                          <span class="text-lg font-bold text-[#171717]">Visi Service Studio</span>
                          <span class="text-sm text-[#666666] mt-2">Accompagnement digital sur-mesure</span>
                        </div>
                      `;
                    }
                  }}
                />

                {/* Quiet Floating Trust Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-xs bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-neutral-200/80 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FFF1DD] text-[#171717] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#FFC56E]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#171717]">Expertise reconnue</p>
                      <p className="text-[11px] text-[#666666]">Des solutions digitales conçues pour convertir</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Key Indicators Strip */}
        <div className="mt-16 pt-10 border-t border-neutral-100 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#171717] font-mono tabular-nums">100%</div>
            <div className="text-xs sm:text-sm text-[#666666] mt-1">Conception sur-mesure</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#171717] font-mono tabular-nums">&lt; 48h</div>
            <div className="text-xs sm:text-sm text-[#666666] mt-1">Délai de réponse aux devis</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#171717] font-mono tabular-nums">+150</div>
            <div className="text-xs sm:text-sm text-[#666666] mt-1">Projets & maquettes livrés</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#171717] font-mono tabular-nums">99.4%</div>
            <div className="text-xs sm:text-sm text-[#666666] mt-1">Taux de satisfaction client</div>
          </div>
        </div>
      </div>
    </section>
  );
};
