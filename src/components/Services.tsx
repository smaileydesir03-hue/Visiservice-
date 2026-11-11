import React, { useState } from 'react';
import {
  Globe,
  Share2,
  Palette,
  ArrowRight,
  Check,
  Info,
  CreditCard,
} from 'lucide-react';
import {
  WEB_SERVICES,
  MARKETING_SERVICES,
  DESIGN_SERVICES,
  ServiceItem,
} from '../data/agencyData';
import { SlideUp } from './SlideUp';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'web' | 'marketing' | 'design'>('web');

  const categories = [
    {
      id: 'web',
      label: 'Création de sites web',
      count: WEB_SERVICES.length,
      icon: Globe,
    },
    {
      id: 'marketing',
      label: 'Digital Marketing & Réseaux',
      count: MARKETING_SERVICES.length,
      icon: Share2,
    },
    {
      id: 'design',
      label: 'Graphic Design',
      count: DESIGN_SERVICES.length,
      icon: Palette,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAFAFA] border-t border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SlideUp className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF1DD] border border-[#FFC56E]/40 text-xs font-semibold tracking-wider text-[#171717] uppercase mb-4">
            NOTRE EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight">
            Nos services
          </h2>
          <p className="text-lg text-[#666666] mt-3">
            Des solutions digitales adaptées à vos ambitions.
          </p>
        </SlideUp>

        {/* Category Tabs: Only the 3 distinct service divisions */}
        <SlideUp delay={100} className="mt-10 w-full max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-3xl">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as any)}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#171717] text-white border-[#171717] shadow-sm'
                      : 'bg-white text-[#666666] border-neutral-200 hover:text-[#171717] hover:border-neutral-300'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#FFC56E]' : 'text-[#666666]'}`} />
                  <span className="truncate">{cat.label}</span>
                  <span
                    className={`text-[11px] font-mono px-1.5 py-0.5 rounded shrink-0 ${
                      isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-[#666666]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </SlideUp>

        {/* Content Container: Only concerned category is shown */}
        <div className="mt-12 space-y-16">
          {/* CATEGORY 1: CRÉATION DE SITES WEB */}
          {activeTab === 'web' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <SlideUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-neutral-200 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FFC56E] uppercase tracking-wider">
                    <Globe className="w-4 h-4" />
                    CATÉGORIE 1
                  </div>
                  <h3 className="text-2xl font-bold text-[#171717] mt-1">
                    Création de sites web
                  </h3>
                </div>
                <span className="text-xs text-[#666666]">
                  Performances, SEO, design responsive & conversions
                </span>
              </SlideUp>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WEB_SERVICES.map((service, idx) => (
                  <SlideUp key={service.id} delay={idx * 60} duration={550}>
                    <ServiceCard
                      service={service}
                      onSelect={() => onSelectService(service.name)}
                    />
                  </SlideUp>
                ))}
              </div>

              {/* Mandatory Note & 60% Deposit Notice */}
              <SlideUp delay={150} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-neutral-200/80 text-xs text-[#666666]">
                  <Info className="w-4 h-4 text-[#FFC56E] shrink-0 mt-0.5" />
                  <p>
                    <strong>Note importante :</strong> Le tarif final dépend du nombre de pages, des fonctionnalités, du contenu et de la complexité du projet.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#FFF1DD]/60 rounded-xl border border-[#FFC56E]/60 text-xs text-[#171717]">
                  <CreditCard className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                  <p>
                    <strong>Modalité de paiement :</strong> Un versement de <strong>60% avant le début du travail</strong> est requis pour démarrer la création de tout site web. Le solde de 40% est réglé à la livraison finale.
                  </p>
                </div>
              </SlideUp>
            </div>
          )}

          {/* CATEGORY 2: DIGITAL MARKETING ET RÉSEAUX SOCIAUX */}
          {activeTab === 'marketing' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <SlideUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-neutral-200 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FFC56E] uppercase tracking-wider">
                    <Share2 className="w-4 h-4" />
                    CATÉGORIE 2
                  </div>
                  <h3 className="text-2xl font-bold text-[#171717] mt-1">
                    Digital Marketing et Réseaux Sociaux
                  </h3>
                </div>
                <span className="text-xs text-[#666666]">
                  Visibilité, engagement et croissance de marque
                </span>
              </SlideUp>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MARKETING_SERVICES.map((service, idx) => (
                  <SlideUp key={service.id} delay={idx * 60} duration={550}>
                    <ServiceCard
                      service={service}
                      onSelect={() => onSelectService(service.name)}
                    />
                  </SlideUp>
                ))}
              </div>
            </div>
          )}

          {/* CATEGORY 3: GRAPHIC DESIGN */}
          {activeTab === 'design' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <SlideUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-neutral-200 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FFC56E] uppercase tracking-wider">
                    <Palette className="w-4 h-4" />
                    CATÉGORIE 3
                  </div>
                  <h3 className="text-2xl font-bold text-[#171717] mt-1">
                    Graphic Design
                  </h3>
                </div>
                <span className="text-xs text-[#666666]">
                  Identités visuelles, packaging & supports commerciaux
                </span>
              </SlideUp>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {DESIGN_SERVICES.map((service, idx) => (
                  <SlideUp key={service.id} delay={idx * 60} duration={550}>
                    <ServiceCard
                      service={service}
                      onSelect={() => onSelectService(service.name)}
                    />
                  </SlideUp>
                ))}
              </div>

              {/* Mandatory 60% Deposit Notice for Design */}
              <SlideUp delay={150} className="flex items-start gap-3 p-4 bg-[#FFF1DD]/60 rounded-xl border border-[#FFC56E]/60 text-xs text-[#171717]">
                <CreditCard className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                <p>
                  <strong>Modalité de paiement Design :</strong> Pour tous les services de design graphique (création de logo, identité visuelle, brochures, flyers, templates), un versement d'acompte de <strong>60% avant le début du travail</strong> est requis pour lancer la production créative.
                </p>
              </SlideUp>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <div
      className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border transition-all duration-200 ${
        service.popular
          ? 'border-[#FFC56E] shadow-[0_10px_30px_-10px_rgba(255,197,110,0.3)]'
          : 'border-neutral-200/80 hover:border-neutral-300 shadow-xs hover:shadow-md'
      }`}
    >
      <div>
        {/* Header row: Title + Price */}
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-lg font-bold text-[#171717] group-hover:text-neutral-900 transition-colors">
            {service.name}
          </h4>
          {service.popular && (
            <span className="text-[11px] font-semibold text-[#171717] bg-[#FFC56E] px-2 py-0.5 rounded shrink-0">
              Populaire
            </span>
          )}
        </div>

        {/* Price tag */}
        <div className="mt-2.5 inline-block text-sm font-semibold text-[#171717] bg-[#FFF1DD] px-2.5 py-1 rounded-md">
          {service.priceTag}
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-[#666666] leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Feature bullets */}
        {service.features && service.features.length > 0 && (
          <ul className="mt-5 space-y-2 border-t border-neutral-100 pt-4">
            {service.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#666666]">
                <Check className="w-3.5 h-3.5 text-[#FFC56E] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action CTA */}
      <div className="mt-6 pt-4 border-t border-neutral-100">
        <button
          type="button"
          onClick={onSelect}
          className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#171717] group-hover:text-neutral-900 bg-neutral-50 group-hover:bg-[#FFF1DD] px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
        >
          <span>Demander un devis</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#171717] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
