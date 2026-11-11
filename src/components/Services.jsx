import React, { useState, useEffect } from 'react';
import { Clock, Check, ArrowRight, X } from 'lucide-react';
import { SERVICE_ICONS, IconLeaf } from './icons.jsx';

export const Services = ({ t, onSelectServiceForBooking }) => {
  const [activeItem, setActiveItem] = useState(null);
  const items = t.services.items;

  useEffect(() => {
    if (!activeItem) return undefined;
    const onKey = (e) => e.key === 'Escape' && setActiveItem(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeItem]);

  const ActiveIcon = activeItem ? SERVICE_ICONS[activeItem.id] || IconLeaf : null;

  return (
    <section id="services" className="py-20 md:py-28 bg-cream/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-rose-deep">{t.services.badge}</p>
          <h2 className="mt-3 font-serif-luxury font-medium text-4xl sm:text-5xl text-ink leading-[1.1]">
            {t.services.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = SERVICE_ICONS[item.id] || IconLeaf;
            return (
              <article
                key={item.id}
                className="group bg-white rounded-[1.75rem] p-7 border border-line hover:border-gold transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-16 h-16 rounded-full border border-gold/60 bg-ivory text-olive-700 flex items-center justify-center group-hover:bg-rose-soft/60 group-hover:text-rose-deep transition-colors">
                    <Icon size={34} />
                  </div>
                  <div className="text-right text-xs text-muted">
                    <div className="font-medium text-rose-deep">{item.tag}</div>
                    <div className="mt-1 inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold-deep" strokeWidth={1.5} />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>

                <h3 className="mt-6 font-serif-luxury font-semibold text-2xl text-ink leading-snug">{item.name}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.desc}</p>

                <ul className="mt-5 space-y-2 mb-7">
                  {item.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-[13px] text-ink-soft">
                      <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5 border-t border-line flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectServiceForBooking(item.name)}
                    className="inline-flex items-center gap-2 rounded-full bg-ink text-ivory px-5 py-3 text-[13px] font-semibold hover:bg-olive-800 transition-colors cursor-pointer"
                  >
                    <span>{t.services.bookBtn}</span>
                    <ArrowRight className="w-4 h-4 text-gold-soft" strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={() => setActiveItem(item)}
                    className="text-[13px] font-semibold text-ink-soft underline decoration-gold underline-offset-4 hover:text-rose-deep cursor-pointer"
                  >
                    {t.services.detailsBtn}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.name}
            onClick={(e) => e.stopPropagation()}
            className="bg-ivory rounded-[1.75rem] max-w-lg w-full max-h-[90dvh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-line relative"
          >
            <button
              onClick={() => setActiveItem(null)}
              aria-label={t.services.modalClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-cream text-ink transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <div className="w-16 h-16 rounded-full border border-gold/60 bg-white text-olive-700 flex items-center justify-center">
              <ActiveIcon size={34} />
            </div>

            <p className="mt-5 text-xs font-medium text-rose-deep">
              {activeItem.category}, {activeItem.duration}
            </p>
            <h3 className="mt-1 font-serif-luxury font-semibold text-3xl text-ink">{activeItem.name}</h3>
            <p className="mt-4 text-sm sm:text-base text-ink-soft leading-relaxed">{activeItem.desc}</p>

            <div className="mt-6 bg-white rounded-2xl p-5 border border-line">
              <h4 className="text-sm font-semibold text-ink mb-3">{t.ui.services.benefitsTitle}</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeItem.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13px] text-ink-soft">
                    <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                const serviceName = activeItem.name;
                setActiveItem(null);
                onSelectServiceForBooking(serviceName);
              }}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink text-ivory py-4 text-sm font-semibold hover:bg-olive-800 transition-colors cursor-pointer"
            >
              <span>{t.services.bookBtn}</span>
              <ArrowRight className="w-4 h-4 text-gold-soft" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
