import React from 'react';

// Thin single-line icons in the style of the printed brand card.
const Svg = ({ size = 28, className = '', children }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    {children}
  </svg>
);

const Face = () => (
  <>
    <circle cx="12" cy="3.4" r="1.5" />
    <path d="M12 5.2c-2.9 0-4.8 2.2-4.8 5.2 0 3.4 2.1 6.2 4.8 6.2s4.8-2.8 4.8-6.2c0-3-1.9-5.2-4.8-5.2Z" />
    <path d="M9.5 10.6q.8.6 1.6 0M12.9 10.6q.8.6 1.6 0" />
    <path d="M11.2 13.9q.8.4 1.6 0" />
    <path d="M10.6 16.4v1.7M13.4 16.4v1.7M6.2 21.2c.5-1.8 2.2-3 4.4-3.1M17.8 21.2c-.5-1.8-2.2-3-4.4-3.1" />
  </>
);

export const IconCleanse = (p) => (
  <Svg {...p}>
    <Face />
    <path d="M3.8 6.4v2.2M2.7 7.5h2.2M20.2 12.2v2.2M19.1 13.3h2.2M19.6 5.2v1.4M18.9 5.9h1.4" />
  </Svg>
);

export const IconCupping = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="4.6" r="1.6" />
    <path d="M7 16.5v-4.3a5 5 0 0 1 10 0v4.3" />
    <path d="M5 16.5h14M6.2 19.8h11.6M6.2 16.5v3.3M17.8 16.5v3.3" />
    <path d="M9.6 11.2a2.6 2.6 0 0 1 2.4-2" />
  </Svg>
);

export const IconLiftCupping = (p) => (
  <Svg {...p}>
    <Face />
    <path d="M3.6 13.4V8.2M2.2 9.6l1.4-1.4L5 9.6M20.4 13.4V8.2M19 9.6l1.4-1.4 1.4 1.4" />
  </Svg>
);

export const IconMassage = (p) => (
  <Svg {...p}>
    <Face />
    <path d="M4.2 17.6c-.3-2.6.6-4.6 2.4-5.9M3 14.2c.4-1.2 1.2-2.2 2.2-2.9M19.8 17.6c.3-2.6-.6-4.6-2.4-5.9M21 14.2c-.4-1.2-1.2-2.2-2.2-2.9" />
  </Svg>
);

export const IconGuaSha = (p) => (
  <Svg {...p}>
    <path d="M5.6 8.2c2-3.2 6.4-3.8 9.6-1.7 3.2 2.1 4.8 5.8 3.2 9-1.3 2.6-4.3 3.7-6.4 2.7-1.7-.8-1.6-2.6-3.2-3.5-2-1.1-4.8-3.5-3.2-6.5Z" />
    <path d="M9 9.2c1.6-1.3 3.8-1.3 5.4-.2" />
  </Svg>
);

export const IconLifting = (p) => (
  <Svg {...p}>
    <Face />
    <path d="M2.6 11.4 4 10l1.4 1.4M2.6 14.6 4 13.2l1.4 1.4M18.6 11.4 20 10l1.4 1.4M18.6 14.6 20 13.2l1.4 1.4" />
  </Svg>
);

export const IconTape = (p) => (
  <Svg {...p}>
    <Face />
    <path d="M8 12.4l2.4 1.5M8.2 13.9l1.8 1.1M16 12.4l-2.4 1.5M15.8 13.9 14 15" />
    <path d="M9.8 7.6h4.4" />
  </Svg>
);

export const IconPosture = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="4.2" r="1.9" />
    <path d="M12 6.4v8.4M7.6 9.6c1.4-.8 2.9-1.200 4.400-1.200s3 .400 4.400 1.200M12 14.800l-3 6.200M12 14.800l3 6.200" />
    <path d="M19.600 3v18" strokeDasharray="1.500 2" />
  </Svg>
);

export const IconLotus = (p) => (
  <Svg {...p}>
    <path d="M12 5.500c-2.200 3-2.200 7.500 0 10.500 2.200-3 2.200-7.500 0-10.500Z" />
    <path d="M12 16c-3.600-.300-6.300-3-6.800-6.800 2.300.300 4.200 1.500 5.300 3.300M12 16c3.600-.300 6.300-3 6.800-6.800-2.300.300-4.200 1.500-5.300 3.300" />
    <path d="M3 13.800c1.800 3.400 5.200 5.200 9 5.200s7.200-1.800 9-5.200" />
  </Svg>
);

export const IconLeaf = (p) => (
  <Svg {...p}>
    <path d="M12 21C6.5 17.5 4 11.5 5 4c5 2.5 8 9 7 17Z" />
    <path d="M12 21c5.500-3.500 8-9.500 7-17-5 2.500-8 9-7 17Z" />
  </Svg>
);

export const SERVICE_ICONS = {
  'cilt-temizligi': IconCleanse,
  'saglik-hacamat': IconCupping,
  'yuz-lifting-hacamat': IconLiftCupping,
  'analiz-sonrasi-masaj': IconMassage,
  'gua-sha': IconGuaSha,
  'yuz-germe': IconLifting,
  'yuz-taping': IconTape
};

// Decorative sprig: a curved stem with paired leaves, drawn like the card's watercolor foliage.
export const Sprig = ({ className = '', color = 'currentColor', flip = false }) => {
  const leaf = 'M0 0C9-9 27-10 38 0 27 10 9 9 0 0Z';
  const nodes = [
    [52, 250, -150, 1], [50, 212, -32, 1], [51, 176, -148, 0.92], [53, 140, -34, 0.9],
    [56, 106, -146, 0.8], [58, 76, -36, 0.74], [60, 48, -144, 0.62], [61, 26, -40, 0.52]
  ];
  return (
    <svg
      viewBox="0 0 120 300"
      fill="none"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M50 298C46 220 54 130 62 6" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      {nodes.map(([x, y, r, s], i) => (
        <path key={i} d={leaf} fill={color} opacity={0.34 + (i % 3) * 0.14} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`} />
      ))}
      <path d="M62 6c-5-3-6-9-2-14 5 3 6 9 2 14Z" fill={color} opacity="0.6" transform="translate(0 12)" />
    </svg>
  );
};
