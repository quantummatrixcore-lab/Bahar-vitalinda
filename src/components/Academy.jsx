import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, GraduationCap, CheckCircle2, ArrowRight, BookOpen, Users, Award } from 'lucide-react';

export const Academy = ({ t, onSelectServiceForBooking }) => {
  const [openModule, setOpenModule] = useState(0);

  return (
    <section id="academy" className="py-20 md:py-28 bg-gradient-to-b from-ivory via-cream to-ivory relative overflow-hidden">
      
      {/* Decorative Gold & Rose Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-sm font-medium text-rose-deep">{t.academy.badge}</p>

          <h2 className="font-serif-luxury font-medium text-4xl sm:text-5xl text-ink leading-[1.1]">
            {t.academy.title}
          </h2>

          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            {t.academy.subtitle}
          </p>

          <div className="font-serif-luxury italic text-xl sm:text-2xl text-olive-700 max-w-2xl mx-auto pt-2">
            "{t.academy.highlight}"
          </div>
        </div>

        {/* Modules & Curriculum Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left: 7 Modules Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            <h3 className="font-serif-luxury font-semibold text-2xl text-ink mb-5 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-rose-deep" />
              <span>{t.academy.syllabusTitle}</span>
            </h3>

            {t.academy.modules.map((mod, idx) => {
              const isOpen = openModule === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-gold' 
                      : 'bg-white/70 hover:bg-white border-line'
                  }`}
                >
                  <button
                    onClick={() => setOpenModule(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full border border-gold/70 text-gold-deep flex items-center justify-center font-serif-luxury text-lg shrink-0">
                        {mod.number}
                      </span>
                      <span className="font-serif-luxury font-semibold text-lg sm:text-xl text-ink">
                        {mod.title}
                      </span>
                    </div>

                    <div className="text-stone">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-cream bg-ivory/50">
                      <ul className="space-y-2 text-xs sm:text-sm text-ink-soft">
                        {mod.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2"></span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Gains & Target Audience Box */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Gains Box */}
            <div className="bg-white rounded-[1.75rem] p-7 border border-line">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cream text-rose-deep flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury font-semibold text-xl text-ink">
                  {t.academy.gainsTitle}
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-ink-soft">
                {t.academy.gains.map((gain, gIdx) => (
                  <div key={gIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                    <span>{gain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audience Box */}
            <div className="bg-rose-soft/50 rounded-[1.75rem] p-7 border border-line">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-rose-deep" />
                <h3 className="font-serif-luxury font-semibold text-lg text-ink">
                  {t.academy.audienceTitle}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5">
                {t.academy.audienceDesc}
              </p>

              <button
                onClick={() => onSelectServiceForBooking(t.academy.title)}
                className="w-full bg-ink hover:bg-olive-800 text-ivory py-4 rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.academy.enrollBtn}</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
