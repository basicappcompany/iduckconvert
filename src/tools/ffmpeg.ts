/**
 * ffmpeg.wasm, loaded on demand. The small JS wrapper is bundled with the site; the big engine
 * (the .wasm file, about 30 MB) comes from a pinned version on a CDN, and is cached by the browser
 * after the first use. This is the single-thread core, so the site needs no special server headers.
 */
import { AbortError } from '../engine/types';

export const FFMPEG_CORE_VERSION = '0.12.10';
const CORE_BASE = `https://cdn.jsdelivr.net/npm/@ffmpeg/core@${FFMPEG_CORE_VERSION}/dist/esm`;

/** Suggested limits: bigger files can run out of memory in a browser tab. */
export const LIMIT_DESKTOP_MB = 500;
export const LIMIT_PHONE_MB = 100;
/** A hard stop: the WebAssembly engine cannot hold more than about 2 GB. */
export const HARD_LIMIT_MB = 1900;

export const isPhone = (): boolean => typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches && Math.min(screen.width, screen.height) < 900;

type FFmpegInstance = import('@ffmpeg/ffmpeg').FFmpeg;
let instance: FFmpegInstance | null = null;
let loading: Promise<FFmpegInstance> | null = null;
let onProgress: ((fraction: number) => void) | null = null;
let onLog: ((line: string) => void) | null = null;

async function load(): Promise<FFmpegInstance> {
  if (instance) return instance;
  loading ??= (async () => {
    const [{ FFmpeg }, { toBlobURL }] = await Promise.all([import('@ffmpeg/ffmpeg'), import('@ffmpeg/util')]);
    const ff = new FFmpeg();
    ff.on('progress', ({ progress }) => onProgress?.(Math.min(1, Math.max(0, progress))));
    ff.on('log', ({ message }) => onLog?.(message));
    await ff.load({
      coreURL: await toBlobURL(`${CORE_BASE}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${CORE_BASE}/ffmpeg-core.wasm`, 'application/wasm'),
    });
    instance = ff;
    return ff;
  })();
  try {
    return await loading;
  } catch (error) {
    loading = null;
    throw new Error(`The converter engine could not load (${error instanceof Error ? error.message : 'network error'}). Check your connection and try again.`);
  }
}

export interface FfmpegRun {
  file: File;
  /** Arguments between the input and the output name, such as ['-vn', '-c:a', 'libmp3lame']. Input options go in `before`. */
  args: string[];
  before?: string[];
  outName: string;
  signal: AbortSignal;
  onProgress: (fraction: number) => void;
}

const extOf = (name: string): string => (/\.([a-z0-9]{1,5})$/i.exec(name)?.[1] ?? 'bin').toLowerCase();

/** Run one conversion and return the output bytes. Cancelling stops the engine; the next run starts a fresh one. */
export async function runFfmpeg({ file, args, before = [], outName, signal, onProgress: report }: FfmpegRun): Promise<Uint8Array> {
  if (signal.aborted) throw new AbortError();
  report(0);
  const ff = await load();
  const inName = `input.${extOf(file.name)}`;
  let tail = '';
  onProgress = report;
  onLog = (line) => {
    tail = (tail + '\n' + line).split('\n').slice(-6).join('\n');
  };
  const stop = () => {
    ff.terminate();
    instance = null;
    loading = null;
  };
  signal.addEventListener('abort', stop, { once: true });
  try {
    await ff.writeFile(inName, new Uint8Array(await file.arrayBuffer()));
    const code = await ff.exec([...before, '-i', inName, ...args, '-y', outName]);
    if (signal.aborted) throw new AbortError();
    if (code !== 0) throw new Error(friendlyError(tail));
    const data = await ff.readFile(outName);
    if (typeof data === 'string') throw new Error('Unexpected text output.');
    report(1);
    // Copy out of the engine's memory so the file can be freed.
    const copy = new Uint8Array(data);
    await ff.deleteFile(inName).catch(() => undefined);
    await ff.deleteFile(outName).catch(() => undefined);
    return copy;
  } catch (error) {
    if (signal.aborted) throw new AbortError();
    throw error;
  } finally {
    signal.removeEventListener('abort', stop);
    onProgress = null;
    onLog = null;
  }
}

function friendlyError(log: string): string {
  if (/Invalid data found|moov atom not found|could not find codec/i.test(log)) return 'This file looks damaged or is not a media file ffmpeg can read.';
  if (/does not contain any stream|Output file does not contain/i.test(log)) return 'This file has no audio or video to convert.';
  if (/memory|out of bounds|OOM/i.test(log)) return 'The file is too big for your browser to handle. Try a smaller file or a computer.';
  return 'The conversion failed. The file may be damaged or use a format this converter cannot read.';
}

/** "90", "1:30" and "1:02:03.5" all mean what you expect. Returns null for anything else. */
export function parseTime(text: string): number | null {
  const t = text.trim();
  if (t === '') return null;
  const parts = t.split(':');
  if (parts.length > 3 || parts.some((p) => !/^\d+(\.\d+)?$/.test(p))) return null;
  return parts.reduce((total, p) => total * 60 + Number(p), 0);
}
