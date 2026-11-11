import React, { useState } from 'react';
import { Users, Check, ArrowRight } from 'lucide-react';
import { LogoMark } from './Logo.jsx';
import { IconMassage, IconLifting, IconGuaSha, Sprig } from './icons.jsx';

export const GiftCardSection = ({ t, onSelectServiceForBooking }) => {
  const [recipientName, setRecipientName] = useState('');

  return (
    <section id="gift-card" className="py-20 md:py-28 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-sm font-medium text-rose-deep">{t.giftCard.badge}</p>

          <h2 className="font-serif-luxury font-medium text-4xl sm:text-5xl text-ink leading-[1.1]">
            {t.giftCard.title}
          </h2>

          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {t.giftCard.subtitle}
          </p>
        </div>

        {/* Gift Card & Referral Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Luxury Digital Gift Card Render */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[1.75rem] bg-gradient-to-br from-rose-soft via-ivory to-cream p-7 sm:p-10 border border-gold/60 shadow-[0_30px_60px_-30px_rgba(42,45,28,0.35)] overflow-hidden">
              
              {/* Ribbon & Floral Accents */}
              <Sprig className="absolute -right-2 -bottom-6 h-56 text-rose/70 pointer-events-none" flip />
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-line pb-6 mb-6">
                <div>
                  <span className="text-xs tracking-[0.2em] text-stone block">
                    {t.ui.gift.brand}
                  </span>
                  <h3 className="font-serif-luxury font-semibold text-2xl sm:text-3xl text-ink mt-1">
                    {t.giftCard.cardTitle}
                  </h3>
                  <p className="font-serif-luxury text-lg text-rose-deep italic font-semibold">
                    {t.giftCard.cardDesc}
                  </p>
                </div>

                <LogoMark size={64} ring className="shrink-0" />
              </div>

              {/* Quote */}
              <div className="p-4 rounded-2xl bg-white/70 border border-line text-center mb-6">
                <p className="font-serif-luxury text-base sm:text-lg italic text-olive-700">
                  "{t.giftCard.cardQuote}"
                </p>
                <div className="text-xs text-stone mt-1">{t.ui.gift.motto}</div>
              </div>

              {/* Services included on the card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs mb-6">
                <div className="p-3 rounded-xl bg-white/80 border border-line">
                  <IconMassage size={30} className="mx-auto mb-2 text-gold-deep" />
                  <div className="font-semibold text-ink">{t.ui.gift.i1Title}</div>
                  <div className="text-[11px] text-muted mt-0.5">{t.ui.gift.i1Desc}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/80 border border-line">
                  <IconLifting size={30} className="mx-auto mb-2 text-gold-deep" />
                  <div className="font-semibold text-ink">{t.ui.gift.i2Title}</div>
                  <div className="text-[11px] text-muted mt-0.5">{t.ui.gift.i2Desc}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/80 border border-line">
                  <IconGuaSha size={30} className="mx-auto mb-2 text-gold-deep" />
                  <div className="font-semibold text-ink">{t.ui.gift.i3Title}</div>
                  <div className="text-[11px] text-muted mt-0.5">{t.ui.gift.i3Desc}</div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-line text-xs text-muted">
                <span>{t.giftCard.validFor}</span>
                <span className="font-semibold text-rose-deep">Instagram: @vitalinda_1</span>
              </div>

            </div>
          </div>

          {/* Right: Referral Reward Program ("3 Arkadaşına Tavsiye Et") */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-ink text-ivory rounded-[1.75rem] p-7 sm:p-9 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gold/10 rounded-full blur-2xl"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-olive-800 flex items-center justify-center text-gold">
                  <Users className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif-luxury font-semibold text-2xl text-ivory">
                  {t.giftCard.referralTitle}
                </h3>
              </div>

              <p className="text-sm text-sand leading-relaxed mb-5">
                {t.giftCard.referralDesc}
              </p>

              {/* Highlight Gift Reward Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-olive-800 to-ink border border-gold/40 text-center mb-6">
                <span className="font-serif-luxury font-semibold text-base sm:text-lg text-gold-soft block">
                  {t.giftCard.rewardText}
                </span>
                <span className="text-[11px] text-sand mt-1 block">
                  {t.ui.gift.shareLine}
                </span>
              </div>

              <div className="space-y-3 text-xs text-sand mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold shrink-0" />
                  <span>{t.ui.gift.step1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold shrink-0" />
                  <span>{t.ui.gift.step2}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectServiceForBooking(t.ui.gift.bookingService)}
                className="w-full bg-gold-soft hover:bg-ivory text-ink py-4 rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.giftCard.claimBtn}</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
