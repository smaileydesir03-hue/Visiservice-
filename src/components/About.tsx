import React from 'react';
import { Lightbulb, ShieldCheck, Sliders, Users, Target, Rocket } from 'lucide-react';
import { AGENCY_VALUES } from '../data/agencyData';
import { SlideUp } from './SlideUp';

export const About: React.FC = () => {
  const valueIcons = [Lightbulb, ShieldCheck, Sliders];

  return (
    <section id="apropos" className="py-20 lg:py-28 bg-[#FAFAFA] border-t border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative presentation */}
          <SlideUp className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF1DD] border border-[#FFC56E]/40 text-xs font-semibold tracking-wider text-[#171717] uppercase">
              NOTRE HISTOIRE & MISSION
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
              Qui sommes-nous ?
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#666666] leading-relaxed">
              <p>
                <strong className="text-[#171717] font-semibold">Visi Service</strong> est une agence digitale qui aide les entreprises, les entrepreneurs et les marques à construire une présence en ligne professionnelle.
              </p>
              <p>
                Notre objectif est de rendre les services digitaux accessibles, efficaces et adaptés aux besoins de chaque projet.
              </p>
              <p>
                Nous combinons créativité, technologie et stratégie pour accompagner nos clients dans leur développement.
              </p>
            </div>

            {/* Commitments list */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-neutral-200/80">
                <Target className="w-5 h-5 text-[#FFC56E] shrink-0" />
                <span className="text-xs font-semibold text-[#171717]">Orientation résultats & conversion</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-neutral-200/80">
                <Rocket className="w-5 h-5 text-[#FFC56E] shrink-0" />
                <span className="text-xs font-semibold text-[#171717]">Technologies modernes & véloces</span>
              </div>
            </div>
          </SlideUp>

          {/* Right Column: Three Values Cards */}
          <div className="lg:col-span-6 space-y-5">
            <SlideUp delay={50} className="text-xs font-bold tracking-wider uppercase text-[#666666] mb-2">
              NOS VALEURS FONDAMENTALES
            </SlideUp>

            {AGENCY_VALUES.map((val, idx) => {
              const Icon = valueIcons[idx] || Lightbulb;
              return (
                <SlideUp key={val.title} delay={100 + idx * 80}>
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-neutral-200/80 hover:border-[#FFC56E]/80 transition-all duration-200 shadow-xs hover:shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF1DD] flex items-center justify-center shrink-0 text-[#171717]">
                      <Icon className="w-6 h-6 text-[#171717]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#171717]">
                        {val.title}
                      </h3>
                      <p className="text-sm text-[#666666] mt-1.5 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </SlideUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
