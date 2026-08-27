import React from 'react';
import { Sparkles, Smile, Wind, Heart, Flower2, Check } from 'lucide-react';

export const Philosophy = ({ t }) => {
  const icons = [Smile, Flower2, Wind, Heart];

  return (
    <section id="philosophy" className="py-20 md:py-28 bg-[#FAF3F0] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-[#D4AF37]/20 pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-[#B56576]/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F0DCD5] text-[#7A3E48] text-xs font-semibold tracking-widest uppercase border border-[#E0CBC2]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.philosophy.badge}</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B1D] leading-tight">
            {t.philosophy.title}
          </h2>

          <p className="text-base sm:text-lg text-[#614F4C] leading-relaxed">
            {t.philosophy.desc1}
          </p>
          <p className="text-sm sm:text-base text-[#7A6461] leading-relaxed">
            {t.philosophy.desc2}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.philosophy.pillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="bg-white/90 rounded-2xl p-7 border border-[#EBDCD4] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B2527] to-[#5E3B3E] flex items-center justify-center text-[#E8C872] shadow-sm mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#E8C872]" />
                  </div>
                  <h3 className="font-serif-luxury font-bold text-xl text-[#2D1B1D] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#6B5754] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0E0D8] flex items-center gap-2 text-xs font-semibold text-[#8B3A4A]">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>Bütünsel Denge Unsuru</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
