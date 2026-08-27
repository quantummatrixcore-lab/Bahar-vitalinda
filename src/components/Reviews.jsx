import React from 'react';
import { Sparkles, Star, Quote } from 'lucide-react';

export const Reviews = ({ t }) => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FCF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F3E5DC] text-[#7A3E48] text-xs font-semibold tracking-widest uppercase border border-[#E0CBC2]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.reviews.badge}</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B1D]">
            {t.reviews.title}
          </h2>

          <p className="text-base sm:text-lg text-[#614F4C] leading-relaxed">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.items.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#EBDCD4] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#E8D1C5]/40" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base text-[#4E3D3A] leading-relaxed mb-6 font-serif-luxury italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-[#F0E0D8] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#2D1B1D]">{review.name}</h4>
                  <span className="text-xs text-[#8C6D68]">{review.city}</span>
                </div>

                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#F8EAE4] text-[#8B3A4A] border border-[#F0D0C5]">
                  {review.service}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
