import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#171717] text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('accueil');
              }}
              className="inline-block"
            >
              <Logo isDark={true} />
            </a>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Votre partenaire pour une présence digitale professionnelle.
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              Nous concevons des sites web performants, dynamisons votre présence sur les réseaux et créons des identités visuelles remarquables.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFC56E]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('accueil')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('temoignages')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Témoignages
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('apropos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('tarifs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tarifs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFC56E]">
              Nos Pôles d'Expertise
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Création de sites web
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Digital marketing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Graphic design
                </button>
              </li>
            </ul>
          </div>

          {/* Socials & Networks Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFC56E]">
              Suivez-nous
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FFC56E] transition-colors"
                >
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FFC56E] transition-colors"
                >
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FFC56E] transition-colors"
                >
                  <span>TikTok</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FFC56E] transition-colors"
                >
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} Visi Service. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span>Design minimaliste & moderne</span>
            <span>·</span>
            <span>Présence digitale</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
