/**
 * Theme colours, the single source of truth. src/styles/global.css repeats these values as CSS variables; a unit test fails if the
 * two ever disagree, and another checks that every text/background pair is readable.
 */
export const light = {
  bg: '#fffdf5',
  card: '#ffffff',
  ink: '#17160f',
  muted: '#6b685b',
  line: '#17160f',
  soft: '#f3efe0',
  duck: '#ffd23f',
  duckInk: '#17160f',
  orange: '#ff8a1f',
  ok: '#1f9d55',
  danger: '#d64545',
  /** Error text. The shared red is 4.3:1 on the page, just under the 4.5 needed for normal text. */
  dangerText: '#b32323',
  shadow: '#17160f',
} as const;

export const dark = {
  bg: '#121212',
  card: '#1c1c1e',
  ink: '#f5f5f5',
  muted: '#a1a1a6',
  line: '#f5f5f5',
  soft: '#26262a',
  duck: '#ffd23f',
  duckInk: '#17160f',
  orange: '#ff8a1f',
  ok: '#4cd98a',
  danger: '#ff6b6b',
  dangerText: '#ff6b6b',
  shadow: '#000000',
} as const;

export type ThemeKey = keyof typeof light;

/** localStorage key for an explicit choice. No key means "follow the system setting". */
export const THEME_STORAGE_KEY = 'duck.theme';

/** WCAG relative luminance of a #rrggbb colour. */
export function luminance(hex: string): number {
  const channel = (i: number) => {
    const v = parseInt(hex.slice(1 + i * 2, 3 + i * 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  }
  return 0.2126 * channel(0) + 0.7152 * channel(1) + 0.0722 * channel(2);
}

/** WCAG contrast ratio between two colours, from 1 to 21. */
export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
}
