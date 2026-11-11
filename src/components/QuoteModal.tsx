import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Sparkles, CreditCard } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Création de site web',
    budget: '500 $ - 1 000 $',
    details: '',
  });

  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      if (preselectedService.toLowerCase().includes('site') || preselectedService.toLowerCase().includes('business') || preselectedService.toLowerCase().includes('présence')) {
        setFormData((prev) => ({ ...prev, service: 'Création de site web' }));
      } else if (preselectedService.toLowerCase().includes('marketing')) {
        setFormData((prev) => ({ ...prev, service: 'Digital marketing' }));
      } else if (preselectedService.toLowerCase().includes('réseaux')) {
        setFormData((prev) => ({ ...prev, service: 'Réseaux sociaux' }));
      } else if (preselectedService.toLowerCase().includes('design') || preselectedService.toLowerCase().includes('logo')) {
        setFormData((prev) => ({ ...prev, service: 'Graphic design' }));
      }
      setFormData((prev) => ({
        ...prev,
        details: `Bonjour, je souhaite un devis pour : ${preselectedService}`,
      }));
    }
  }, [preselectedService, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [k: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Votre nom est requis.';
    if (!formData.email.trim()) {
      errs.email = 'Votre e-mail est requis.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'E-mail non valide.';
    }
    if (!formData.details.trim()) {
      errs.details = 'Veuillez préciser votre besoin.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-neutral-200 p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-[#171717] transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#FFF1DD] text-[#171717] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#FFC56E]" />
            </div>
            <h3 className="text-xl font-bold text-[#171717]">
              Demande de devis enregistrée !
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed max-w-md mx-auto">
              Merci <strong className="text-[#171717]">{formData.name}</strong>. Notre équipe étudiera votre projet et reviendra vers vous avec une proposition sous 24h ouvrées.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 text-xs font-semibold text-[#171717] bg-[#FFC56E] hover:bg-[#fab752] rounded-lg transition-all cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFC56E] mb-1">
              <Sparkles className="w-4 h-4" />
              DEVIS RAPIDE ET SANS ENGAGEMENT
            </div>
            <h3 className="text-2xl font-bold text-[#171717]">
              Demander un devis personnalisé
            </h3>
            <p className="text-sm text-[#666666] mt-1.5">
              Remplissez ce formulaire et recevez une estimation claire sous 24h à 48h.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1">
                  Nom complet *
                </label>
                <input
                  type="text"
                  placeholder="Ex. Sarah Martin"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC56E]"
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1">
                    Adresse e-mail *
                  </label>
                  <input
                    type="email"
                    placeholder="sarah@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC56E]"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1">
                    Téléphone (facultatif)
                  </label>
                  <input
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC56E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1">
                    Pôle souhaité
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC56E] cursor-pointer"
                  >
                    <option value="Création de site web">Création de site web</option>
                    <option value="Digital marketing">Digital marketing</option>
                    <option value="Réseaux sociaux">Réseaux sociaux</option>
                    <option value="Graphic design">Graphic design</option>
                    <option value="Autre">Autre</option>
                  </select>
                  {(formData.service === 'Création de site web' || formData.service === 'Graphic design') && (
                    <p className="mt-1.5 text-[11px] font-semibold text-[#171717] flex items-center gap-1.5 bg-[#FFF1DD] px-2 py-0.5 rounded border border-[#FFC56E]/60">
                      <CreditCard className="w-3 h-3 text-[#171717] shrink-0" />
                      Versement de 60% requis avant le travail
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1">
                    Fourchette budgétaire
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC56E] cursor-pointer"
                  >
                    <option value="< 500 $">&lt; 500 $</option>
                    <option value="500 $ - 1 000 $">500 $ - 1 000 $</option>
                    <option value="1 000 $ - 2 500 $">1 000 $ - 2 500 $</option>
                    <option value="> 2 500 $">&gt; 2 500 $</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1">
                  Parlez-nous de vos besoins *
                </label>
                <textarea
                  rows={3}
                  placeholder="Décrivez votre idée, vos inspirations ou vos contraintes de délai..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC56E] resize-y"
                />
                {errors.details && <p className="text-xs text-red-500 mt-1">{errors.details}</p>}
              </div>

              {/* Informative terms note */}
              <div className="p-3 bg-[#FAFAFA] border border-neutral-200/80 rounded-xl text-[11px] text-[#666666] flex items-start gap-2">
                <CreditCard className="w-3.5 h-3.5 text-[#FFC56E] shrink-0 mt-0.5" />
                <span>
                  <strong>Modalité d'engagement :</strong> Pour les sites web et les services designs, un versement de 60% d'acompte est requis avant le début du travail.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-5 rounded-xl text-sm font-bold text-[#171717] bg-[#FFC56E] hover:bg-[#fab752] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {loading ? 'Calcul et transmission...' : 'Recevoir mon devis gratuit'}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
