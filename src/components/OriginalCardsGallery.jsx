import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';

export const OriginalCardsGallery = () => {
  return (
    <section className="py-16 bg-[#FCF8F6] border-y border-[#EBDCD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#8B3A4A] uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Stüdyo ve Kartvizit Kataloğu</span>
            </div>
            <h3 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#2D1B1D]">
              Vitalinda Orijinal Broşür & Hediye Kartları
            </h3>
          </div>

          <a
            href="https://instagram.com/vitalinda_1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B56576] to-[#8B3A4A] text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@vitalinda_1 Takip Et</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-4 border border-[#EBDCD4] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="rounded-2xl overflow-hidden mb-4 relative aspect-[16/9] bg-[#FAF3F0] flex items-center justify-center">
              <img
                src="/images/brand-card.jpeg"
                alt="Vitalinda Sağlıklı Yaşam ve Güzellik Atölyesi Hizmet Kartı"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="px-2">
              <h4 className="font-serif-luxury font-bold text-lg text-[#2D1B1D]">
                Vitalinda Hizmet & Bakım Matrisi
              </h4>
              <p className="text-xs text-[#7A6461] mt-1">
                Cilt Temizliği, Sağlık İçin Hacamat, Yüz Lifting Hacamatı, Masaj (TR/RU)
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-4 border border-[#EBDCD4] shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className="rounded-2xl overflow-hidden mb-4 relative aspect-[16/9] bg-[#FAF3F0] flex items-center justify-center">
              <img
                src="/images/gift-card.jpeg"
                alt="Vitalinda Sana Özel Hediye Kartı"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="px-2">
              <h4 className="font-serif-luxury font-bold text-lg text-[#2D1B1D]">
                Özel Hediye & Tavsiye Kartı
              </h4>
              <p className="text-xs text-[#7A6461] mt-1">
                Cilt Bakımı, Yüz Masajı, Gua Sha Taşı ve Hacamat Hediye Seansları
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
