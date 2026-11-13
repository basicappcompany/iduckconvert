/**
 * Memory guards for phones. A decoded image costs width * height * 4 bytes of RAM
 * (plus working copies in the codec), and mobile browsers cap canvas area.
 */
export const WARN_PIXELS = 25_000_000;
export const MAX_PIXELS = 100_000_000;

export type SizeVerdict = 'ok' | 'warn' | 'too-large';

export function assessPixels(width: number, height: number): SizeVerdict {
  const pixels = width * height;
  if (pixels > MAX_PIXELS) return 'too-large';
  if (pixels > WARN_PIXELS) return 'warn';
  return 'ok';
}

/** Scale dimensions down (never up) so the area fits within maxPixels, keeping aspect ratio. */
export function fitWithinPixels(
  width: number,
  height: number,
  maxPixels: number = WARN_PIXELS,
): { width: number; height: number } {
  const pixels = width * height;
  if (pixels <= maxPixels) return { width, height };
  const scale = Math.sqrt(maxPixels / pixels);
  return {
    width: Math.max(1, Math.floor(width * scale)),
    height: Math.max(1, Math.floor(height * scale)),
  };
}
