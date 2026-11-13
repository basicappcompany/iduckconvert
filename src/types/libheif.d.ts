/** Minimal typing for the parts of libheif-js we use. The package ships no types for its ESM bundle. */
declare module 'libheif-js/libheif-wasm/libheif-bundle.mjs' {
  interface HeifImage {
    get_width(): number;
    get_height(): number;
    display(target: ImageData, done: (result: ImageData | null) => void): void;
    free?: () => void;
  }
  interface HeifDecoderInstance {
    decode(data: Uint8Array): HeifImage[];
  }
  export interface LibHeif {
    HeifDecoder: new () => HeifDecoderInstance;
  }
  const factory: (options?: object) => LibHeif | Promise<LibHeif>;
  export default factory;
}
