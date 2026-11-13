declare module 'gifenc' {
  export function GIFEncoder(): {
    writeFrame(index: Uint8Array, width: number, height: number, options?: { palette?: number[][]; transparent?: boolean; transparentIndex?: number; delay?: number; repeat?: number }): void;
    finish(): void;
    bytes(): Uint8Array;
  };
  export function quantize(data: Uint8ClampedArray | Uint8Array, maxColors: number, options?: { format?: string; oneBitAlpha?: boolean | number }): number[][];
  export function applyPalette(data: Uint8ClampedArray | Uint8Array, palette: number[][], format?: string): Uint8Array;
}
declare module 'utif2' {
  interface Page { width: number; height: number; data?: Uint8Array }
  const UTIF: { decode(buf: ArrayBuffer): Page[]; decodeImage(buf: ArrayBuffer, page: Page): void; toRGBA8(page: Page): Uint8Array };
  export default UTIF;
}
