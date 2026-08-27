import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award, CheckCircle2, ChevronRight } from 'lucide-react';

export const Hero = ({ t, onOpenBooking }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FCF8F6] via-[#FAF3F0] to-[#FCF8F6]">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#F5DAD5]/40 via-[#E8C872]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E5DC]/80 border border-[#E0CBC2] text-[#693B40] text-xs font-semibold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#2D1B1D] tracking-tight leading-[1.12]">
              {t.hero.titleStart}{' '}
              <span className="text-gold-gradient italic font-serif-luxury font-normal block sm:inline">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Slogan */}
            <p className="text-sm sm:text-base font-semibold tracking-[0.2em] text-[#8C5D53] uppercase">
              {t.hero.slogan}
            </p>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5A4946] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto bg-gradient-to-r from-[#2D1B1D] via-[#4A2E30] to-[#2D1B1D] text-[#FAF4F0] px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 border border-[#D4AF37]/50 cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <a
                href="#academy"
                className="w-full sm:w-auto bg-white/80 hover:bg-white text-[#2D1B1D] px-7 py-4 rounded-full text-sm font-semibold tracking-wide border border-[#E0CBC2] hover:border-[#B56576] shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ChevronRight className="w-4 h-4 text-[#8C5D53]" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#E8D1C5]/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t.hero.stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2D1B1D]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#7A6461] mt-0.5 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Luxury Cards Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8D1C5] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent rounded-bl-full pointer-events-none"></div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B2527] to-[#693B40] flex items-center justify-center text-[#E8C872] shadow-md border border-[#D4AF37]/30">
                    <Heart className="w-7 h-7 text-[#E8C872]" />
                  </div>
                  <div>
                    <h3 className="font-serif-luxury font-bold text-xl text-[#2D1B1D]">VITALINDA</h3>
                    <p className="text-xs text-[#8C6D68] font-medium tracking-wide">Sağlıklı Yaşam & Güzellik Atölyesi</p>
                  </div>
                </div>

                <div className="space-y-3.5 text-sm text-[#4A3B39]">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-[#F0E0D8]">
                    <div className="w-8 h-8 rounded-lg bg-[#F8EAE4] flex items-center justify-center text-[#9E4759] font-bold text-xs shrink-0">
                      01
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D1B1D]">Yüz Jimnastiği & Lifting Hacamatı</p>
                      <p className="text-xs text-[#7A6461]">Doğal yüz ovali toparlama ve kolajen uyarımı</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-[#F0E0D8]">
                    <div className="w-8 h-8 rounded-lg bg-[#F8EAE4] flex items-center justify-center text-[#9E4759] font-bold text-xs shrink-0">
                      02
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D1B1D]">Postür, Diyafram & Pelvik Taban</p>
                      <p className="text-xs text-[#7A6461]">Omurga dengesi ve bütünsel kadın sağlığı</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-[#F0E0D8]">
                    <div className="w-8 h-8 rounded-lg bg-[#F8EAE4] flex items-center justify-center text-[#9E4759] font-bold text-xs shrink-0">
                      03
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D1B1D]">Kendi Kendine Bakım Rutini</p>
                      <p className="text-xs text-[#7A6461]">Evde sürdürülebilir kişisel bakım ustalığı</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-6 pt-5 border-t border-[#E8D1C5]/70 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-[#5F7A64] font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>%100 Doğal & Cerrahi Müdahalesiz</span>
                  </div>
                  <span className="text-[#8C6D68] italic font-serif-luxury text-sm">Bahar Vitalinda</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#2D1B1D] text-[#FAF4F0] p-4 rounded-2xl shadow-xl border border-[#D4AF37]/40 items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-[#4A2E30] flex items-center justify-center text-[#D4AF37]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider uppercase text-[#E8C872]">Sertifikalı & Uzman</div>
                  <div className="text-[11px] text-[#D8C0B8]">Kişiye Özel Bütünsel Seanslar</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
