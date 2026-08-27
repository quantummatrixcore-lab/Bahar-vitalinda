import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = ({ t }) => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-[#FAF3F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F3E5DC] text-[#7A3E48] text-xs font-semibold tracking-widest uppercase border border-[#E0CBC2]">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.faq.badge}</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B1D]">
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
                className="bg-white rounded-2xl border border-[#EBDCD4] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif-luxury font-bold text-lg sm:text-xl text-[#2D1B1D]">
                    {item.q}
                  </span>
                  <div className="text-[#8C6D68] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#5C4A47] leading-relaxed border-t border-[#F5EAE6]">
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
