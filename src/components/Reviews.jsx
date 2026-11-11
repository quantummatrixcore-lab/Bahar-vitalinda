import React from 'react';
import { Sparkles, Star, Quote } from 'lucide-react';

export const Reviews = ({ t }) => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-rose-deep">
            <span>{t.reviews.badge}</span>
          </div>

          <h2 className="font-serif-luxury font-medium text-4xl sm:text-5xl text-ink leading-[1.1]">
            {t.reviews.title}
          </h2>

          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.items.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[1.75rem] p-8 border border-line shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-line/40" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base text-ink-soft leading-relaxed mb-6 font-serif-luxury italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-line flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-ink">{review.name}</h4>
                  <span className="text-xs text-stone">{review.city}</span>
                </div>

                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-cream text-rose-deep border border-line">
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
