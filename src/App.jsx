import React, { useState, useEffect } from 'react';
import { translations } from './translations.js';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { Philosophy } from './components/Philosophy.jsx';
import { Services } from './components/Services.jsx';
import { Academy } from './components/Academy.jsx';
import { Quiz } from './components/Quiz.jsx';
import { GiftCardSection } from './components/GiftCardSection.jsx';
import { OriginalCardsGallery } from './components/OriginalCardsGallery.jsx';
import { Reviews } from './components/Reviews.jsx';
import { FAQ } from './components/FAQ.jsx';
import { Footer } from './components/Footer.jsx';
import { BookingModal } from './components/BookingModal.jsx';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('vitalinda_lang') || 'tr';
  });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    localStorage.setItem('vitalinda_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const t = translations[lang] || translations.tr;

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative bg-[#FCF8F6] text-[#2D1B1D] selection:bg-[#F0DCD5] selection:text-[#3B2527] font-sans antialiased">
      
      {/* Sticky Header Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenBooking={() => handleOpenBooking('')}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          t={t}
          onOpenBooking={() => handleOpenBooking('')}
        />

        <Philosophy
          t={t}
        />

        <Services
          t={t}
          onSelectServiceForBooking={(srv) => handleOpenBooking(srv)}
        />

        <Academy
          t={t}
          onSelectServiceForBooking={(srv) => handleOpenBooking(srv)}
        />

        <Quiz
          t={t}
          onSelectServiceForBooking={(srv) => handleOpenBooking(srv)}
        />

        <GiftCardSection
          t={t}
          onSelectServiceForBooking={(srv) => handleOpenBooking(srv)}
        />

        <OriginalCardsGallery />

        <Reviews
          t={t}
        />

        <FAQ
          t={t}
        />
      </main>

      {/* Footer */}
      <Footer
        t={t}
        onOpenBooking={() => handleOpenBooking('')}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        t={t}
        lang={lang}
        preSelectedService={selectedService}
      />

      {/* Floating Action Buttons: WhatsApp & Scroll Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white text-[#2D1B1D] shadow-lg border border-[#E8D1C5] hover:bg-[#FAF3F0] flex items-center justify-center transition-all cursor-pointer"
            title="Yukarı Çık"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          href="https://wa.me/905468203948"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 hover:shadow-[#25D366]/40 transition-all flex items-center justify-center cursor-pointer border-2 border-white"
          title="WhatsApp İle Hızlı İletişim"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

    </div>
  );
}
