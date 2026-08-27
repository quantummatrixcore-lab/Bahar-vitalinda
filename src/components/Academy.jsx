import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, GraduationCap, CheckCircle2, ArrowRight, BookOpen, Users, Award } from 'lucide-react';

export const Academy = ({ t, onSelectServiceForBooking }) => {
  const [openModule, setOpenModule] = useState(0);

  return (
    <section id="academy" className="py-20 md:py-28 bg-gradient-to-b from-[#FAF3F0] via-[#F6E9E4] to-[#FAF3F0] relative overflow-hidden">
      
      {/* Decorative Gold & Rose Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#B56576]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D1B1D] text-[#E8C872] text-xs font-semibold tracking-widest uppercase border border-[#D4AF37]/40 shadow-sm">
            <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.academy.badge}</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B1D] leading-tight">
            {t.academy.title}
          </h2>

          <p className="text-base sm:text-lg text-[#5C4A47] leading-relaxed">
            {t.academy.subtitle}
          </p>

          <div className="p-4 rounded-2xl bg-white/80 border border-[#E0CBC2] text-sm font-serif-luxury text-[#4A2E30] italic font-semibold max-w-2xl mx-auto shadow-xs">
            "{t.academy.highlight}"
          </div>
        </div>

        {/* Modules & Curriculum Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left: 7 Modules Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            <h3 className="font-serif-luxury font-bold text-2xl text-[#2D1B1D] mb-5 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#8B3A4A]" />
              <span>{t.academy.syllabusTitle}</span>
            </h3>

            {t.academy.modules.map((mod, idx) => {
              const isOpen = openModule === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen 
                      ? 'bg-white shadow-lg border-[#D4AF37]/60' 
                      : 'bg-white/70 hover:bg-white border-[#EBDCD4]'
                  }`}
                >
                  <button
                    onClick={() => setOpenModule(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2D1B1D] to-[#4A2E30] text-[#E8C872] flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                        {mod.number}
                      </span>
                      <span className="font-serif-luxury font-bold text-lg sm:text-xl text-[#2D1B1D]">
                        {mod.title}
                      </span>
                    </div>

                    <div className="text-[#8C6D68]">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-[#F5EAE6] bg-[#FCF8F6]/50">
                      <ul className="space-y-2 text-xs sm:text-sm text-[#54423F]">
                        {mod.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-2"></span>
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
            <div className="bg-white rounded-3xl p-7 border border-[#EBDCD4] shadow-md">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F8EAE4] text-[#8B3A4A] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury font-bold text-xl text-[#2D1B1D]">
                  {t.academy.gainsTitle}
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#4E3D3A]">
                {t.academy.gains.map((gain, gIdx) => (
                  <div key={gIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5F7A64] shrink-0 mt-0.5" />
                    <span>{gain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audience Box */}
            <div className="glass-card rounded-3xl p-7 border border-[#E0CBC2] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-[#8B3A4A]" />
                <h3 className="font-serif-luxury font-bold text-lg text-[#2D1B1D]">
                  {t.academy.audienceTitle}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#614F4C] leading-relaxed mb-5">
                {t.academy.audienceDesc}
              </p>

              <button
                onClick={() => onSelectServiceForBooking("Kadının Doğal Güzellik ve Beden Dengesi Eğitimi")}
                className="w-full bg-gradient-to-r from-[#2D1B1D] via-[#4A2E30] to-[#2D1B1D] text-[#FAF4F0] py-4 rounded-full text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/50 cursor-pointer"
              >
                <span>{t.academy.enrollBtn}</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
