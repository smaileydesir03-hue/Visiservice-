import React from 'react';
import { MessageSquare, LayoutTemplate, Code2, CheckCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';
import { SlideUp } from './SlideUp';

export const Process: React.FC = () => {
  const stepIcons = [MessageSquare, LayoutTemplate, Code2, CheckCircle];

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFA] border-t border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SlideUp className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF1DD] border border-[#FFC56E]/40 text-xs font-semibold tracking-wider text-[#171717] uppercase mb-4">
            MÉTHODOLOGIE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight">
            Comment travaillons-nous ?
          </h2>
          <p className="text-lg text-[#666666] mt-3">
            Un processus clair, structuré et transparent en 4 étapes pour garantir le succès de votre projet digital.
          </p>
        </SlideUp>

        {/* 4 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || MessageSquare;
            return (
              <SlideUp key={step.number} delay={idx * 80} duration={550}>
                <div className="relative flex flex-col justify-between p-7 bg-white rounded-2xl border border-neutral-200/80 hover:border-neutral-300 shadow-xs hover:shadow-md transition-all duration-200 h-full">
                  <div>
                    {/* Step Number + Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black font-mono text-[#FFC56E] tracking-tight">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#FFF1DD] flex items-center justify-center text-[#171717]">
                        <Icon className="w-5 h-5 text-[#171717]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#171717] mt-5">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#666666] mt-2.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverable badge */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-medium text-[#171717]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC56E]" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};
