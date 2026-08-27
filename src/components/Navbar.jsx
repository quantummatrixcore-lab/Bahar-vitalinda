import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Calendar } from 'lucide-react';

export const Navbar = ({ lang, setLang, t, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'tr', label: 'TR', flag: '🇹🇷' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'ru', label: 'RU', flag: '🇷🇺' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Announcement */}
      <div className="bg-[#2D1B1D] text-[#F3E5DC] text-xs py-2 px-4 text-center font-medium border-b border-[#C89D66]/20 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
        <span>{t.nav.announcement}</span>
      </div>

      {/* Main Luxury Nav */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FCF9F7]/95 backdrop-blur-md shadow-sm border-b border-[#E8D1C5]/50 py-3' 
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#2D1B1D] to-[#5A383C] flex items-center justify-center text-[#E8C872] shadow-md group-hover:scale-105 transition-transform border border-[#D4AF37]/30">
              <span className="font-serif-luxury font-bold text-xl tracking-wider">V</span>
            </div>
            <div>
              <span className="font-serif-luxury font-bold text-2xl text-[#2D1B1D] tracking-widest block leading-none">
                VITALINDA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#8C6D68] uppercase block mt-0.5 font-medium">
                Sağlık • Spor • Güzellik
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4A3B39]">
            <a href="#services" className="hover:text-[#B56576] transition-colors">{t.nav.services}</a>
            <a href="#academy" className="hover:text-[#B56576] transition-colors flex items-center gap-1.5 font-semibold text-[#8B3A4A]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
              {t.nav.academy}
            </a>
            <a href="#philosophy" className="hover:text-[#B56576] transition-colors">{t.nav.philosophy}</a>
            <a href="#quiz" className="hover:text-[#B56576] transition-colors">{t.nav.quiz}</a>
            <a href="#gift-card" className="hover:text-[#B56576] transition-colors">{t.nav.giftCard}</a>
            <a href="#reviews" className="hover:text-[#B56576] transition-colors">{t.nav.reviews}</a>
            <a href="#contact" className="hover:text-[#B56576] transition-colors">{t.nav.contact}</a>
          </div>

          {/* Right Actions: Lang Switcher & Book Button */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Selector */}
            <div className="flex items-center bg-[#F4E9E4] p-1 rounded-full border border-[#E0CBC2]">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all flex items-center gap-1 ${
                    lang === l.code
                      ? 'bg-[#2D1B1D] text-[#FAF4F0] shadow-sm'
                      : 'text-[#685350] hover:text-[#2D1B1D]'
                  }`}
                  title={l.label}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>

            {/* Book Now Button */}
            <button
              onClick={() => onOpenBooking()}
              className="bg-gradient-to-r from-[#2D1B1D] to-[#4A2E30] hover:from-[#3D2527] hover:to-[#5E3B3E] text-[#F9EFEF] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 border border-[#C89D66]/40 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.nav.bookNow}</span>
            </button>
          </div>

          {/* Mobile Menu Button & Mobile Lang Switch */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center bg-[#F4E9E4] p-0.5 rounded-full border border-[#E0CBC2]">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-1 rounded-full text-[11px] font-bold ${
                    lang === l.code ? 'bg-[#2D1B1D] text-[#FAF4F0]' : 'text-[#685350]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2D1B1D] hover:bg-[#F2E5E0] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FCF9F7] border-b border-[#E8D1C5] px-6 py-5 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3 text-base font-medium text-[#3B2B28]">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B56576] py-1"
              >
                {t.nav.services}
              </a>
              <a 
                href="#academy" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B56576] py-1 text-[#8B3A4A] font-semibold flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                {t.nav.academy}
              </a>
              <a 
                href="#philosophy" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B56576] py-1"
              >
                {t.nav.philosophy}
              </a>
              <a 
                href="#quiz" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B56576] py-1"
              >
                {t.nav.quiz}
              </a>
              <a 
                href="#gift-card" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B56576] py-1"
              >
                {t.nav.giftCard}
              </a>
              <a 
                href="#reviews" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B56576] py-1"
              >
                {t.nav.reviews}
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#B56576] py-1"
              >
                {t.nav.contact}
              </a>
            </div>

            <div className="pt-3 border-t border-[#E8D1C5]/70">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-gradient-to-r from-[#2D1B1D] to-[#4A2E30] text-[#FAF4F0] py-3 rounded-full text-sm font-semibold tracking-wider uppercase shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.nav.bookNow}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
