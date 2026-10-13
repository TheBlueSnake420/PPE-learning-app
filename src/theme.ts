export const colors = {
  bg: '#FFFFFF',
  surface: '#F7F7F7',
  border: '#E5E5E5',
  borderDark: '#CECECE',
  text: '#3C3C3C',
  muted: '#777777',
  faint: '#AFAFAF',

  green: '#58CC02',
  greenDark: '#58A700',
  greenBg: '#D7FFB8',
  red: '#FF4B4B',
  redDark: '#EA2B2B',
  redBg: '#FFDFE0',
  blue: '#1CB0F6',
  blueDark: '#1899D6',
  blueBg: '#DDF4FF',
  gold: '#FFC800',
  goldDark: '#E5A800',
  orange: '#FF9600',
};

export const radius = { sm: 10, md: 14, lg: 18, pill: 999 };

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 };

export const font = {
  small: 13,
  body: 16,
  large: 18,
  title: 22,
  hero: 28,
};

/** Darken a hex colour, used for the 3D bottom edge of coloured buttons and cards. */
export function darken(hex: string, amount = 0.18): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.round(((n >> 16) & 255) * (1 - amount));
  const g = Math.round(((n >> 8) & 255) * (1 - amount));
  const b = Math.round((n & 255) * (1 - amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

/** Mix a hex colour with white, used for tinted backgrounds. */
export function tint(hex: string, amount = 0.85): string {
  const n = parseInt(hex.slice(1), 16);
  const mix = (c: number) => Math.round(c + (255 - c) * amount);
  const r = mix((n >> 16) & 255);
  const g = mix((n >> 8) & 255);
  const b = mix(n & 255);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}
