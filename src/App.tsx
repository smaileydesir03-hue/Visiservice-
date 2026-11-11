import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

  const handleOpenQuote = (serviceKey?: string) => {
    if (serviceKey) {
      setSelectedServiceForQuote(serviceKey);
    }
    setIsQuoteModalOpen(true);
  };

  const handleScrollToContactWithService = (serviceName: string) => {
    setSelectedServiceForQuote(serviceName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#171717] flex flex-col antialiased selection:bg-[#FFC56E]/40 selection:text-[#171717] overflow-x-hidden w-full max-w-full">
      {/* 1. Header / Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote('Présence digitale globale')}
          onExploreServices={handleExploreServices}
        />

        {/* 3. Services Section */}
        <Services onSelectService={handleScrollToContactWithService} />

        {/* 4. Portfolio Section */}
        <Portfolio onSelectProjectForQuote={handleScrollToContactWithService} />

        {/* 5. Témoignages / Testimonials Section */}
        <Testimonials onSelectServiceForQuote={handleScrollToContactWithService} />

        {/* 6. About Section */}
        <About />

        {/* 6. Pricing Section */}
        <Pricing onSelectPlan={handleScrollToContactWithService} />

        {/* 7. Process Section */}
        <Process />

        {/* 8. Contact Section */}
        <Contact initialService={selectedServiceForQuote} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Fast Interactive Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={selectedServiceForQuote}
      />
    </div>
  );
}
