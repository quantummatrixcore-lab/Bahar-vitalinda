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
import { ArrowUp } from 'lucide-react';

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

  const phone = '905468203948';
  const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const waUrl = isMobile 
    ? `https://wa.me/${phone}`
    : `https://web.whatsapp.com/send?phone=${phone}`;

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
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 hover:shadow-[#25D366]/40 transition-all flex items-center justify-center cursor-pointer border-2 border-white"
          title="WhatsApp İle Hızlı İletişim"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
