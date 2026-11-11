import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Logo } from './Logo.jsx';

const LANGS = ['tr', 'en', 'ru'];

const LangSwitch = ({ lang, setLang }) => (
  <div className="flex items-center rounded-full border border-line bg-cream/70 p-0.5" role="group" aria-label="Language">
    {LANGS.map((code) => (
      <button
        key={code}
        onClick={() => setLang(code)}
        aria-pressed={lang === code}
        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide transition-colors cursor-pointer ${
          lang === code ? 'bg-ink text-ivory' : 'text-muted hover:text-ink'
        }`}
      >
        {code}
      </button>
    ))}
  </div>
);

export const Navbar = ({ lang, setLang, t, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(true);

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#academy', label: t.nav.academy, featured: true },
    { href: '#philosophy', label: t.nav.philosophy },
    { href: '#quiz', label: t.nav.quiz },
    { href: '#gift-card', label: t.nav.giftCard },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact }
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll and allow Escape while the mobile sheet is open.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const solid = isScrolled || menuOpen;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {showNotice && (
        <div className="bg-ink text-cream text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-center gap-3">
            <a href="#academy" className="truncate hover:text-gold-soft transition-colors">
              {t.nav.announcement}
            </a>
            <button
              onClick={() => setShowNotice(false)}
              aria-label={t.ui.common.close}
              className="shrink-0 p-1 -mr-1 rounded-full text-sand hover:text-ivory cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      <nav
        className={`transition-[background-color,box-shadow] duration-300 ${
          solid ? 'bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between gap-4">
          <a href="#" className="shrink-0" aria-label="Vitalinda">
            <Logo tagline={t.ui.brandTagline} size={38} />
          </a>

          <div className="hidden xl:flex items-center gap-7 text-[13.5px] font-medium text-ink-soft whitespace-nowrap">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative py-2 transition-colors hover:text-rose-deep ${l.featured ? 'text-rose-deep' : ''}`}
              >
                {l.label}
                {l.featured && <span className="absolute -right-2 top-1.5 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <LangSwitch lang={lang} setLang={setLang} />
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink text-ivory px-5 py-2.5 text-[13px] font-semibold hover:bg-olive-800 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-gold-soft" strokeWidth={1.5} />
              <span>{t.nav.bookNow}</span>
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={t.ui.common.toggleMenu}
              aria-expanded={menuOpen}
              className="xl:hidden p-2 -mr-1 rounded-full text-ink hover:bg-cream transition-colors cursor-pointer"
            >
              {menuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="xl:hidden bg-ivory border-t border-line h-[calc(100dvh-4rem)] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-serif-luxury text-2xl py-3.5 border-b border-line/70 ${
                    l.featured ? 'text-rose-deep' : 'text-ink'
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenBooking();
                }}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-ivory py-4 text-sm font-semibold cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-gold-soft" strokeWidth={1.5} />
                <span>{t.nav.bookNow}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
