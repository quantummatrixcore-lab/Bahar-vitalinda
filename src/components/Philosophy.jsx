import React from 'react';
import { IconMassage, IconPosture, IconLotus, IconCupping, Sprig } from './icons.jsx';

export const Philosophy = ({ t }) => {
  const icons = [IconMassage, IconPosture, IconLotus, IconCupping];

  return (
    <section id="philosophy" className="py-20 md:py-28 bg-ivory relative overflow-hidden">
      <Sprig className="absolute -right-6 top-10 h-80 text-olive-soft/70 hidden lg:block" flip />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <div className="lg:col-span-6">
            <p className="text-sm font-medium text-rose-deep">{t.philosophy.badge}</p>
            <h2 className="mt-3 font-serif-luxury font-medium text-4xl sm:text-5xl text-ink leading-[1.1]">
              {t.philosophy.title}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-9 space-y-4 max-w-xl">
            <p className="text-base sm:text-lg text-ink-soft leading-relaxed">{t.philosophy.desc1}</p>
            <p className="text-sm sm:text-base text-muted leading-relaxed">{t.philosophy.desc2}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-line">
          {t.philosophy.pillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={pillar.title}
                className="py-8 sm:px-7 sm:first:pl-0 border-b sm:border-b-0 lg:border-l lg:first:border-l-0 border-line sm:[&:nth-child(2)]:border-l sm:[&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
              >
                <div className="w-16 h-16 rounded-full border border-gold/60 bg-white text-olive-700 flex items-center justify-center">
                  <Icon size={34} />
                </div>
                <h3 className="mt-5 font-serif-luxury font-semibold text-2xl text-ink leading-snug">{pillar.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
