import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = ({ t }) => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-rose-deep">
            <span>{t.faq.badge}</span>
          </div>

          <h2 className="font-serif-luxury font-medium text-4xl sm:text-5xl text-ink leading-[1.1]">
            {t.faq.title}
          </h2>
        </div>

        {/* Questions Accordion */}
        <div className="space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-line overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif-luxury font-semibold text-lg sm:text-xl text-ink">
                    {item.q}
                  </span>
                  <div className="text-stone shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-ink-soft leading-relaxed border-t border-cream">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
