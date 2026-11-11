import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  Mail,
  Phone,
  Clock,
  Sparkles,
  AlertCircle,
  MessageCircle,
  CreditCard,
} from 'lucide-react';
import { SlideUp } from './SlideUp';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: 'Création de site web',
    budget: '500 $ - 1 000 $',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      if (initialService.toLowerCase().includes('site') || initialService.toLowerCase().includes('business') || initialService.toLowerCase().includes('présence')) {
        setFormData((prev) => ({ ...prev, service: 'Création de site web' }));
      } else if (initialService.toLowerCase().includes('marketing')) {
        setFormData((prev) => ({ ...prev, service: 'Digital marketing' }));
      } else if (initialService.toLowerCase().includes('réseaux') || initialService.toLowerCase().includes('social')) {
        setFormData((prev) => ({ ...prev, service: 'Réseaux sociaux' }));
      } else if (initialService.toLowerCase().includes('design') || initialService.toLowerCase().includes('logo') || initialService.toLowerCase().includes('branding')) {
        setFormData((prev) => ({ ...prev, service: 'Graphic design' }));
      } else {
        setFormData((prev) => ({ ...prev, service: 'Autre' }));
      }
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Bonjour Visi Service, je souhaite obtenir un devis pour : ${initialService}.`,
      }));
    }
  }, [initialService]);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Le nom complet est requis.';
    }

    if (!formData.email.trim()) {
      errs.email = 'L’adresse e-mail est requise.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Veuillez saisir une adresse e-mail valide.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Veuillez décrire brièvement votre projet.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Veuillez fournir un peu plus de détails (au moins 15 caractères).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend submission / API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Contact Details */}
          <SlideUp className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF1DD] border border-[#FFC56E]/40 text-xs font-semibold tracking-wider text-[#171717] uppercase">
              CONTACTEZ-NOUS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight">
              Parlons de votre projet
            </h2>

            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              Vous avez une idée ? Nous sommes prêts à vous aider à la concrétiser.
            </p>

            <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-neutral-200/80 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#FFC56E]" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
                    Email direct
                  </span>
                  <a
                    href="mailto:contact@visiservice.agency"
                    className="block text-sm font-semibold text-[#171717] hover:underline"
                  >
                    contact@visiservice.agency
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#FFC56E]" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
                    WhatsApp & Téléphone
                  </span>
                  <a
                    href="tel:+33189000000"
                    className="block text-sm font-semibold text-[#171717] hover:underline font-mono"
                  >
                    +33 1 89 00 00 00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#FFC56E]" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
                    Disponibilité & Réponses
                  </span>
                  <p className="text-sm text-[#171717] font-medium">
                    Du Lundi au Vendredi, 9h00 - 18h00. Réponse sous 24h à 48h ouvrées.
                  </p>
                </div>
              </div>
            </div>

            {/* 60% Deposit Requirement Policy Box */}
            <div className="p-4.5 rounded-2xl bg-[#FFF1DD]/60 border border-[#FFC56E]/60 text-xs text-[#171717] flex items-start gap-3">
              <CreditCard className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Modalité de paiement claire :</strong>
                <span className="text-[#171717] mt-0.5 block leading-relaxed">
                  Pour tous les projets de <strong>création de sites web</strong> ainsi que les <strong>services designs</strong>, un versement d'acompte de <strong>60% avant le début du travail</strong> est requis. Le solde de 40% est versé à la livraison finale.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 text-xs text-[#666666] flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#FFC56E] shrink-0" />
              <span>Devis gratuit, transparent et sans engagement pour votre entreprise.</span>
            </div>
          </SlideUp>

          {/* Right Column: Interactive Validated Form */}
          <SlideUp delay={100} className="lg:col-span-7">
            <div className="bg-[#FAFAFA] rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-[#FFF1DD] text-[#171717] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9 text-[#FFC56E]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#171717]">
                    Demande transmise avec succès !
                  </h3>
                  <p className="text-sm text-[#666666] max-w-md mx-auto leading-relaxed">
                    Merci <strong className="text-[#171717]">{formData.fullName}</strong>. Votre projet pour <strong className="text-[#171717]">{formData.service}</strong> a bien été enregistré. Un consultant Visi Service étudiera votre demande et vous répondra à <strong className="text-[#171717]">{formData.email}</strong> sous 24 à 48 heures.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          company: '',
                          service: 'Création de site web',
                          budget: '500 $ - 1 000 $',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 text-xs font-semibold text-[#171717] bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 cursor-pointer"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Row 1: Nom complet & E-mail */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Ex. Alexandre Dupont"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FFC56E] transition-all ${
                          errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-neutral-200'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                        Adresse e-mail *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="alexandre@monentreprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FFC56E] transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-neutral-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Nom de l'entreprise & Service souhaité */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                        Nom de l'entreprise <span className="text-[#666666] font-normal">(facultatif)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Ex. Studio 42"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FFC56E] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                        Service souhaité *
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#FFC56E] transition-all cursor-pointer"
                      >
                        <option value="Création de site web">Création de site web</option>
                        <option value="Digital marketing">Digital marketing</option>
                        <option value="Réseaux sociaux">Réseaux sociaux</option>
                        <option value="Graphic design">Graphic design</option>
                        <option value="Autre">Autre</option>
                      </select>
                      {(formData.service === 'Création de site web' || formData.service === 'Graphic design') && (
                        <p className="mt-1.5 text-[11px] font-semibold text-[#171717] flex items-center gap-1.5 bg-[#FFF1DD] px-2.5 py-1 rounded-md border border-[#FFC56E]/60">
                          <CreditCard className="w-3.5 h-3.5 text-[#171717] shrink-0" />
                          Versement de 60% requis avant le début du travail.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Budget estimé */}
                  <div>
                    <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                      Budget estimé
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        '< 500 $',
                        '500 $ - 1 000 $',
                        '1 000 $ - 2 500 $',
                        '> 2 500 $',
                      ].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                            formData.budget === b
                              ? 'bg-[#171717] text-white border-[#171717]'
                              : 'bg-white text-[#666666] border-neutral-200 hover:border-neutral-300 hover:text-[#171717]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Description du projet */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
                      Description du projet *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Présentez votre projet : type de site ou support, public visé, fonctionnalités souhaitées ou calendrier..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FFC56E] transition-all resize-y ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-neutral-200'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-[#171717] bg-[#FFC56E] hover:bg-[#fab752] active:scale-[0.99] transition-all shadow-sm cursor-pointer disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC56E]"
                    >
                      {isSubmitting ? (
                        <span>Transmission en cours...</span>
                      ) : (
                        <>
                          <span>Envoyer ma demande</span>
                          <Send className="w-4 h-4 text-[#171717]" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#666666] text-center mt-3">
                      En soumettant ce formulaire, vous acceptez d’être recontacté par l’équipe Visi Service concernant votre demande.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};
