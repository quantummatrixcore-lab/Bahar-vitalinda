import React, { useState } from 'react';
import { Sparkles, Clock, CheckCircle2, ArrowRight, ShieldCheck, X } from 'lucide-react';

export const Services = ({ t, onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const categories = [
    { id: 'all', label: 'Tüm Seanslar / All' },
    { id: 'skincare', label: 'Cilt & Masaj' },
    { id: 'cupping', label: 'Hacamat & Detoks' },
    { id: 'lifting', label: 'Lifting & Estetik' }
  ];

  const items = t.services.items;

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FCF8F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F3E5DC] text-[#7A3E48] text-xs font-semibold tracking-widest uppercase border border-[#E0CBC2]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.services.badge}</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B1D]">
            {t.services.title}
          </h2>

          <p className="text-base sm:text-lg text-[#614F4C] leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-[#EBDCD4] shadow-sm hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Tag & Duration */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F8EAE4] text-[#8B3A4A] border border-[#F0D0C5]">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#7A6461] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#C59A4E]" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif-luxury font-bold text-2xl text-[#2D1B1D] mb-3 group-hover:text-[#8B3A4A] transition-colors">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#665451] leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Benefits List */}
                <div className="space-y-2 mb-6">
                  {item.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-[#4A3B38]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5F7A64] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-[#F0E0D8] flex items-center gap-3">
                <button
                  onClick={() => onSelectServiceForBooking(item.name)}
                  className="flex-1 bg-gradient-to-r from-[#2D1B1D] to-[#4A2E30] text-[#FAF4F0] py-3 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.services.bookBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
                <button
                  onClick={() => setActiveModalItem(item)}
                  className="px-4 py-3 rounded-full border border-[#E0CBC2] text-xs font-semibold text-[#665451] hover:bg-[#FAF3F0] transition-colors cursor-pointer"
                >
                  {t.services.detailsBtn}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8D1C5] relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F2E5E0] text-[#2D1B1D] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F8EAE4] text-[#8B3A4A] mb-3">
              {activeModalItem.category} • {activeModalItem.duration}
            </div>

            <h3 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#2D1B1D] mb-4">
              {activeModalItem.name}
            </h3>

            <p className="text-sm sm:text-base text-[#5A4946] leading-relaxed mb-6">
              {activeModalItem.desc}
            </p>

            <div className="bg-[#FAF3F0] rounded-2xl p-5 mb-6 border border-[#EBDCD4]">
              <h4 className="font-semibold text-xs text-[#8B3A4A] tracking-wider uppercase mb-3">
                Uygulama Faydaları & Etkileri
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalItem.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#3B2B28]">
                    <CheckCircle2 className="w-4 h-4 text-[#5F7A64] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const serviceName = activeModalItem.name;
                  setActiveModalItem(null);
                  onSelectServiceForBooking(serviceName);
                }}
                className="flex-1 bg-[#2D1B1D] text-[#FAF4F0] py-3.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.services.bookBtn}</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
