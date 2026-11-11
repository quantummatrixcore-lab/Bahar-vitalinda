import React, { useState } from 'react';
import { Gift, Sparkles, Users, Award, Heart, Check, Share2 } from 'lucide-react';

export const GiftCardSection = ({ t, onSelectServiceForBooking }) => {
  const [recipientName, setRecipientName] = useState('');

  return (
    <section id="gift-card" className="py-20 md:py-28 bg-[#FAF3F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E5DC] text-[#7A3E48] text-xs font-semibold tracking-widest uppercase border border-[#E0CBC2]">
            <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.giftCard.badge}</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B1D]">
            {t.giftCard.title}
          </h2>

          <p className="text-base sm:text-lg text-[#614F4C] leading-relaxed">
            {t.giftCard.subtitle}
          </p>
        </div>

        {/* Gift Card & Referral Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Luxury Digital Gift Card Render */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#FFF5F2] via-[#FDF0EC] to-[#FBE8E2] p-7 sm:p-10 border-2 border-[#E8C872]/80 shadow-2xl overflow-hidden rose-border-glow">
              
              {/* Ribbon & Floral Accents */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#D4AF37]/15 rounded-full blur-xl pointer-events-none"></div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E8D1C5] pb-6 mb-6">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.25em] text-[#8C6D68] uppercase block">
                    {t.ui.gift.brand}
                  </span>
                  <h3 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#2D1B1D] mt-1">
                    {t.giftCard.cardTitle}
                  </h3>
                  <p className="font-serif-luxury text-lg text-[#8B3A4A] italic font-semibold">
                    {t.giftCard.cardDesc}
                  </p>
                </div>

                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#2D1B1D] to-[#4A2E30] flex items-center justify-center text-[#E8C872] shadow-lg shrink-0 border border-[#D4AF37]/50">
                  <Gift className="w-8 h-8 text-[#E8C872]" />
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-2xl bg-white/70 border border-[#F0E0D8] text-center mb-6">
                <p className="font-serif-luxury text-base sm:text-lg italic text-[#54383B]">
                  "{t.giftCard.cardQuote}"
                </p>
                <div className="text-xs text-[#8C6D68] mt-1">{t.ui.gift.motto}</div>
              </div>

              {/* Services included on the card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs mb-6">
                <div className="p-3 rounded-xl bg-white/80 border border-[#EBDCD4]">
                  <div className="font-bold text-[#2D1B1D]">{t.ui.gift.i1Title}</div>
                  <div className="text-[11px] text-[#7A6461] mt-0.5">{t.ui.gift.i1Desc}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/80 border border-[#EBDCD4]">
                  <div className="font-bold text-[#2D1B1D]">{t.ui.gift.i2Title}</div>
                  <div className="text-[11px] text-[#7A6461] mt-0.5">{t.ui.gift.i2Desc}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/80 border border-[#EBDCD4]">
                  <div className="font-bold text-[#2D1B1D]">{t.ui.gift.i3Title}</div>
                  <div className="text-[11px] text-[#7A6461] mt-0.5">{t.ui.gift.i3Desc}</div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8D1C5] text-xs text-[#7A6461]">
                <span>{t.giftCard.validFor}</span>
                <span className="font-semibold text-[#8B3A4A] tracking-wider uppercase">Instagram: @vitalinda_1</span>
              </div>

            </div>
          </div>

          {/* Right: Referral Reward Program ("3 Arkadaşına Tavsiye Et") */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#2D1B1D] text-[#FAF4F0] rounded-3xl p-7 sm:p-9 border border-[#D4AF37]/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/10 rounded-full blur-2xl"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#4A2E30] flex items-center justify-center text-[#D4AF37]">
                  <Users className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif-luxury font-bold text-2xl text-[#FAF4F0]">
                  {t.giftCard.referralTitle}
                </h3>
              </div>

              <p className="text-sm text-[#D8C0B8] leading-relaxed mb-5">
                {t.giftCard.referralDesc}
              </p>

              {/* Highlight Gift Reward Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#4A2E30] to-[#361E20] border border-[#D4AF37]/40 text-center mb-6">
                <span className="font-serif-luxury font-bold text-base sm:text-lg text-[#E8C872] block">
                  {t.giftCard.rewardText}
                </span>
                <span className="text-[11px] text-[#D8C0B8] mt-1 block">
                  {t.ui.gift.shareLine}
                </span>
              </div>

              <div className="space-y-3 text-xs text-[#D8C0B8] mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{t.ui.gift.step1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{t.ui.gift.step2}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectServiceForBooking(t.ui.gift.bookingService)}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C59A4E] text-[#2D1B1D] py-4 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                <span>{t.giftCard.claimBtn}</span>
                <Sparkles className="w-4 h-4 text-[#2D1B1D]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
