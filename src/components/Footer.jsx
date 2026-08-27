import React from 'react';
import { MessageCircle, Heart, Clock, MapPin, Sparkles } from 'lucide-react';

export const Footer = ({ t, onOpenBooking }) => {
  return (
    <footer id="contact" className="bg-[#231617] text-[#FAF4F0] pt-16 pb-12 border-t border-[#D4AF37]/30 relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3D2527]">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#3B2527] to-[#5E3B3E] flex items-center justify-center text-[#E8C872] shadow-md border border-[#D4AF37]/40">
                <span className="font-serif-luxury font-bold text-xl tracking-wider">V</span>
              </div>
              <span className="font-serif-luxury font-bold text-2xl tracking-widest text-[#FAF4F0]">
                VITALINDA
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#D8C0B8] leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            <p className="text-xs font-semibold tracking-widest text-[#E8C872] uppercase">
              {t.footer.moto}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/vitalinda_1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#361E20] hover:bg-[#8B3A4A] flex items-center justify-center text-[#E8C872] transition-colors border border-[#D4AF37]/30 cursor-pointer"
                title="Instagram @vitalinda_1"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/905320000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#361E20] hover:bg-[#25D366] flex items-center justify-center text-[#E8C872] hover:text-white transition-colors border border-[#D4AF37]/30 cursor-pointer"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury font-bold text-base text-[#FAF4F0] tracking-wider uppercase">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-[#D8C0B8]">
              <li><a href="#services" className="hover:text-[#E8C872] transition-colors">{t.nav.services}</a></li>
              <li><a href="#academy" className="hover:text-[#E8C872] transition-colors">{t.nav.academy}</a></li>
              <li><a href="#philosophy" className="hover:text-[#E8C872] transition-colors">{t.nav.philosophy}</a></li>
              <li><a href="#quiz" className="hover:text-[#E8C872] transition-colors">{t.nav.quiz}</a></li>
              <li><a href="#gift-card" className="hover:text-[#E8C872] transition-colors">{t.nav.giftCard}</a></li>
              <li><a href="#reviews" className="hover:text-[#E8C872] transition-colors">{t.nav.reviews}</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="lg:col-span-4 space-y-3 text-xs text-[#D8C0B8]">
            <h4 className="font-serif-luxury font-bold text-base text-[#FAF4F0] tracking-wider uppercase">
              {t.nav.contact}
            </h4>
            
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>{t.footer.workingHours}</span>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="text-[#D4AF37] font-bold">IG:</span>
              <span>Instagram: <a href="https://instagram.com/vitalinda_1" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#E8C872]">@vitalinda_1</a></span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="bg-gradient-to-r from-[#D4AF37] to-[#C59A4E] text-[#2D1B1D] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:brightness-110 transition-all cursor-pointer font-sans"
              >
                {t.nav.bookNow}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8580]">
          <p>© {new Date().getFullYear()} Vitalinda Atölyesi. {t.footer.rights}</p>
          <div className="flex items-center gap-1">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-[#B56576] fill-[#B56576]" />
            <span>for Natural Transformation</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
