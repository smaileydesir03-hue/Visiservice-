import React from 'react';
import { Check, Info, ArrowRight, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/agencyData';
import { SlideUp } from './SlideUp';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="tarifs" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SlideUp className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF1DD] border border-[#FFC56E]/40 text-xs font-semibold tracking-wider text-[#171717] uppercase mb-4">
            TRANSPARENCE & ENGAGEMENT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight">
            Des solutions pour chaque ambition
          </h2>
          <p className="text-lg text-[#666666] mt-3">
            Des formules claires adaptées à chaque étape de votre développement.
          </p>
        </SlideUp>

        {/* 3 Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const isHighlighted = plan.highlighted;
            return (
              <SlideUp key={plan.id} delay={idx * 100} duration={600} className="h-full">
              <div
                className={`relative flex flex-col justify-between p-8 rounded-3xl h-full transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-white border-2 border-[#FFC56E] shadow-[0_20px_50px_-15px_rgba(255,197,110,0.4)] lg:-translate-y-2'
                    : 'bg-[#FAFAFA] border border-neutral-200/80 hover:border-neutral-300 shadow-xs'
                }`}
              >
                {/* Popular badge */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFC56E] text-[#171717] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Solution Recommandée
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#171717]">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mt-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
                      {plan.price}
                    </div>
                    <span className="text-xs text-[#666666] mt-1 block">
                      Prix de départ indicatif
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#666666] mt-4 leading-relaxed pb-6 border-b border-neutral-200">
                    {plan.description}
                  </p>

                  {/* Inclusions */}
                  <div className="mt-6 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#171717]">
                      Ce qui est inclus :
                    </span>
                    <ul className="space-y-3 mt-3">
                      {plan.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#171717]">
                          <div className="w-4 h-4 rounded-full bg-[#FFF1DD] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#171717]" />
                          </div>
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="mt-8 pt-6 border-t border-neutral-200/60">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.serviceKey)}
                    className={`w-full py-3.5 px-5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isHighlighted
                        ? 'bg-[#FFC56E] text-[#171717] hover:bg-[#fab752] shadow-sm'
                        : 'bg-white text-[#171717] border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50'
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              </SlideUp>
            );
          })}
        </div>

        {/* Clear Notice Banner with 60% deposit reminder */}
        <SlideUp delay={200} className="mt-12 max-w-3xl mx-auto p-4.5 rounded-2xl bg-[#FFF1DD]/60 border border-[#FFC56E]/40 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#171717] shrink-0 mt-0.5" />
          <div className="text-xs text-[#171717] leading-relaxed">
            <strong className="font-bold">Avertissement de transparence & Modalités :</strong> Les tarifs indiqués sont des prix de départ indicatifs et non des prix définitifs. Pour les sites web et les services de design graphique, <strong>un versement de 60% avant le début du travail est requis</strong> pour initier la production (le solde de 40% étant réglé à la livraison). Le devis définitif est convenu avant tout démarrage.
          </div>
        </SlideUp>
      </div>
    </section>
  );
};
