import React from 'react';

const TONES = {
  light: { leaf: '#6B7045', petal: '#C0807A', seed: '#B8924C', vein: '#FBF6EE', ring: '#B8924C' },
  dark: { leaf: '#A9AD8A', petal: '#E0B0A8', seed: '#D9BC84', vein: '#2A2D1C', ring: '#D9BC84' }
};

// Two leaves meeting at the stem form the V; the gold seed sits in its opening.
export const LogoMark = ({ size = 40, tone = 'light', ring = false, className = '', title }) => {
  const c = TONES[tone] || TONES.light;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={className}
    >
      {ring && <circle cx="24" cy="24" r="23" stroke={c.ring} strokeWidth="0.9" />}
      <g transform={ring ? 'translate(24 25) scale(0.72) translate(-24 -25)' : undefined}>
        <path d="M24 43C13 36 7 24 9 9c10 5 16 18 15 34Z" fill={c.leaf} />
        <path d="M24 43c11-7 17-19 15-34-10 5-16 18-15 34Z" fill={c.petal} />
        <path d="M24 43C19.5 33 14 21.5 10.6 11.2" stroke={c.vein} strokeWidth="0.8" strokeLinecap="round" opacity="0.65" />
        <path d="M24 43c4.5-10 10-21.5 13.4-31.8" stroke={c.vein} strokeWidth="0.8" strokeLinecap="round" opacity="0.65" />
        <circle cx="24" cy="9.5" r="3.3" fill={c.seed} />
      </g>
    </svg>
  );
};

export const Logo = ({ tagline, tone = 'light', size = 40, compact = false, className = '' }) => {
  const dark = tone === 'dark';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} tone={tone} className="shrink-0" />
      <span className="flex flex-col leading-none max-[349px]:hidden">
        <span
          className={`font-serif-luxury font-semibold ${
            compact ? 'text-lg tracking-[0.14em]' : 'text-lg tracking-[0.14em] sm:text-2xl sm:tracking-[0.2em]'
          } ${
            dark ? 'text-ivory' : 'text-ink'
          }`}
        >
          VITALINDA
        </span>
        {tagline && (
          <span
            className={`hidden sm:block mt-1 text-[10px] tracking-[0.18em] whitespace-nowrap ${
              dark ? 'text-sand' : 'text-stone'
            }`}
          >
            {tagline}
          </span>
        )}
      </span>
    </span>
  );
};
