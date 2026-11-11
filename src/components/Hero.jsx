import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { LogoMark } from './Logo.jsx';
import { Sprig } from './icons.jsx';

export const Hero = ({ t, onOpenBooking }) => {
  const focus = [
    [t.ui.hero.f1Title, t.ui.hero.f1Desc],
    [t.ui.hero.f2Title, t.ui.hero.f2Desc],
    [t.ui.hero.f3Title, t.ui.hero.f3Desc]
  ];

  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-ivory">
      {/* Watercolor washes, as on the printed card */}
      <div className="absolute -top-24 -right-32 w-[34rem] h-[34rem] rounded-full bg-rose-soft/70 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 -left-40 w-[28rem] h-[28rem] rounded-full bg-olive-soft/25 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-rose-deep">{t.hero.badge}</p>

            <h1 className="mt-5 font-serif-luxury font-medium text-ink text-[3.25rem] leading-[1.02] sm:text-7xl xl:text-[5.5rem] tracking-[-0.01em]">
              {t.hero.titleStart}
              <br />
              <span className="italic">{t.hero.titleHighlight}</span>
            </h1>

            <p className="mt-6 font-serif-luxury italic text-xl sm:text-2xl text-gold-deep">{t.hero.slogan}</p>

            <p className="mt-6 text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed">{t.hero.subtitle}</p>

            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-ink text-ivory px-8 py-4 text-sm font-semibold hover:bg-olive-800 transition-colors cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 text-gold-soft" strokeWidth={1.5} />
              </button>
              <a
                href="#academy"
                className="inline-flex items-center justify-center rounded-full border border-ink/25 text-ink px-7 py-4 text-sm font-semibold hover:border-ink hover:bg-white/60 transition-colors"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-6 border-t border-line pt-7">
              {t.hero.stats.map((stat, idx) => (
                <div key={idx} className="sm:border-l sm:first:border-l-0 border-line sm:pl-5 sm:first:pl-0">
                  <dd className="font-serif-luxury text-3xl sm:text-4xl font-medium text-ink">{stat.value}</dd>
                  <dt className="mt-1 text-xs text-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          {/* Arch panel: the oval of the brand emblem */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="arch relative overflow-hidden bg-gradient-to-b from-rose-soft via-cream to-white border border-gold/40 px-7 sm:px-10 pt-16 pb-9 shadow-[0_30px_60px_-30px_rgba(42,45,28,0.35)]">
                <Sprig className="absolute -left-3 bottom-0 h-72 text-olive" />
                <Sprig className="absolute -right-3 bottom-0 h-64 text-rose" flip />
                <div className="absolute inset-2.5 arch border border-gold/30 pointer-events-none" aria-hidden="true" />

                <div className="relative text-center">
                  <LogoMark size={92} className="mx-auto" />
                  <p className="mt-4 font-serif-luxury text-3xl tracking-[0.22em] text-ink">VITALINDA</p>
                  <p className="mt-1.5 text-xs text-stone">{t.ui.hero.cardSubtitle}</p>

                  <div className="gold-rule my-7 mx-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </div>

                  <ul className="space-y-5">
                    {focus.map(([title, desc]) => (
                      <li key={title}>
                        <p className="font-serif-luxury text-xl text-ink leading-snug">{title}</p>
                        <p className="mt-0.5 text-xs text-muted">{desc}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/80 border border-line px-4 py-2 text-xs font-medium text-olive-700">
                    <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />
                    <span>{t.ui.hero.natural}</span>
                  </div>
                </div>
              </div>

              <div className="relative -mt-5 mx-auto w-fit max-w-[90%] rounded-full bg-ink text-ivory px-5 py-2.5 text-xs shadow-lg text-center">
                <span className="font-semibold text-gold-soft">{t.ui.hero.badgeTitle}</span>
                <span className="mx-2 text-sand/60" aria-hidden="true">|</span>
                <span className="text-sand">{t.ui.hero.badgeDesc}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
