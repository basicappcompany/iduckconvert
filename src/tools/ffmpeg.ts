/**
 * ffmpeg.wasm, loaded only when someone presses Convert with a file chosen (never on page load).
 * - The JS wrapper and the 112 KB core loader are served from our own domain (public/vendor/ffmpeg).
 * - The 32 MB engine (.wasm) is too big to host on Cloudflare Pages (25 MB file limit), so it comes from one
 *   pinned version on jsDelivr and is checked against a SHA-384 hash before it is used: a changed or tampered
 *   file is refused. The hash is also checked by a unit test against the version in package.json.
 * This is the single-thread core, so the site needs no special server headers beyond the security ones.
 */
import { AbortError } from '../engine/types';
import { audioMergeArgs, clipArgs, concatList, mergeSize, parseProbe } from './media';

export const FFMPEG_CORE_VERSION = '0.12.10';
/** Same-origin copy of ffmpeg-core.js (hash recorded in tests/unit/security.test.ts). */
export const CORE_JS_URL = `/vendor/ffmpeg/ffmpeg-core-${FFMPEG_CORE_VERSION}.js`;
export const WASM_CDN_HOST = 'https://cdn.jsdelivr.net';
export const WASM_URL = `${WASM_CDN_HOST}/npm/@ffmpeg/core@${FFMPEG_CORE_VERSION}/dist/esm/ffmpeg-core.wasm`;
/** SHA-384 of ffmpeg-core.wasm for the pinned version. Change it only together with the version. */
export const WASM_SHA384 = 'sha384-U1VDhkPYrM3wTCT4/vjSpSsKqG/UjljYrYCI4hBSJ02svbCkxuCi6U6u/peg5vpW';

/** Fetch the engine and let the browser refuse it if its hash is not the expected one. */
async function verifiedWasmUrl(): Promise<string> {
  const response = await fetch(WASM_URL, { integrity: WASM_SHA384, mode: 'cors', credentials: 'omit', referrerPolicy: 'no-referrer' });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return URL.createObjectURL(new Blob([await response.arrayBuffer()], { type: 'application/wasm' }));
}

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
    const { FFmpeg } = await import('@ffmpeg/ffmpeg');
    const ff = new FFmpeg();
    ff.on('progress', ({ progress }) => onProgress?.(Math.min(1, Math.max(0, progress))));
    ff.on('log', ({ message }) => onLog?.(message));
    await ff.load({
      coreURL: CORE_JS_URL,
      wasmURL: await verifiedWasmUrl(),
    });
    instance = ff;
    return ff;
  })();
  try {
    return await loading;
  } catch (error) {
    loading = null;
    const reason = error instanceof Error ? error.message : 'network error';
    if (/integrity|digest|hash/i.test(reason)) throw new Error('The converter engine did not pass its safety check (its fingerprint did not match), so it was not used. Please try again later.');
    throw new Error(`The converter engine could not load (${reason}). Check your connection and try again.`);
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
export async function runFfmpeg(run: FfmpegRun): Promise<Uint8Array> {
  return execute(run, async (ff) => {
    const data = await ff.readFile(run.outName);
    if (typeof data === 'string') throw new Error('Unexpected text output.');
    // Copy out of the engine's memory so the file can be freed.
    const copy = new Uint8Array(data);
    await ff.deleteFile(run.outName).catch(() => undefined);
    return copy;
  });
}

/** For a run that writes numbered files (parts of a recording, frames of a video): every output whose name matches, in order. */
export async function runFfmpegMany(run: FfmpegRun & { match: RegExp }): Promise<{ name: string; data: Uint8Array }[]> {
  return execute(run, async (ff) => {
    const names = (await ff.listDir('/')).filter((e) => !e.isDir && run.match.test(e.name)).map((e) => e.name).sort();
    if (names.length === 0) throw new Error('The conversion produced no files. The file may be empty or too short.');
    const out: { name: string; data: Uint8Array }[] = [];
    for (const name of names) {
      const data = await ff.readFile(name);
      if (typeof data === 'string') throw new Error('Unexpected text output.');
      out.push({ name, data: new Uint8Array(data) });
      await ff.deleteFile(name).catch(() => undefined);
    }
    return out;
  });
}

export interface MergeRun {
  files: readonly File[];
  /** True joins video clips into an MP4; false joins audio files into an MP3. */
  video: boolean;
  signal: AbortSignal;
  onProgress: (fraction: number) => void;
}

/**
 * Join several files into one, in the order given. Audio is joined in a single run. Video is made safe to join first:
 * each clip is converted on its own to the size and frame rate of the first (silence is added where a clip has no
 * sound), then the pieces are copied end to end. Files are deleted from the engine's memory as soon as they are used.
 */
export async function runFfmpegMerge({ files, video, signal, onProgress: report }: MergeRun): Promise<{ data: Uint8Array; ext: 'mp4' | 'mp3' }> {
  if (signal.aborted) throw new AbortError();
  report(0);
  const ff = await load();
  const ext = video ? 'mp4' : 'mp3';
  const outName = `output.${ext}`;
  const steps = video ? files.length + 1 : 1;
  let step = 0;
  let tail = '';
  let seen = '';
  onProgress = (fraction) => report((step + fraction) / steps);
  onLog = (line) => {
    tail = (tail + '\n' + line).split('\n').slice(-6).join('\n');
    seen += line + '\n';
  };
  const stop = () => {
    ff.terminate();
    instance = null;
    loading = null;
  };
  signal.addEventListener('abort', stop, { once: true });
  const made: string[] = [];
  const run = async (args: string[]): Promise<void> => {
    const code = await ff.exec(args);
    if (signal.aborted) throw new AbortError();
    if (code !== 0) throw new Error(friendlyError(tail));
  };
  try {
    if (video) {
      let size: { width: number; height: number } | null = null;
      const pieces: string[] = [];
      for (const [i, file] of files.entries()) {
        const inName = `in_${i}.${extOf(file.name)}`;
        made.push(inName);
        await ff.writeFile(inName, new Uint8Array(await file.arrayBuffer()));
        seen = '';
        await ff.exec(['-hide_banner', '-i', inName]); // stops with an error on purpose: it only lists the streams
        if (signal.aborted) throw new AbortError();
        const probe = parseProbe(seen);
        if (!probe.hasVideo) throw new Error('This file has no audio or video to convert.');
        size ??= mergeSize(probe.width, probe.height);
        const piece = `piece_${i}.mp4`;
        made.push(piece);
        await run(clipArgs(inName, piece, probe.hasAudio, size));
        await ff.deleteFile(inName).catch(() => undefined);
        pieces.push(piece);
        step += 1;
      }
      made.push('list.txt');
      await ff.writeFile('list.txt', new TextEncoder().encode(concatList(pieces)));
      await run(['-f', 'concat', '-safe', '0', '-i', 'list.txt', '-c', 'copy', '-movflags', '+faststart', '-y', outName]);
    } else {
      const names: string[] = [];
      for (const [i, file] of files.entries()) {
        const inName = `in_${i}.${extOf(file.name)}`;
        made.push(inName);
        names.push(inName);
        await ff.writeFile(inName, new Uint8Array(await file.arrayBuffer()));
      }
      await run(audioMergeArgs(names, outName));
    }
    made.push(outName);
    const data = await ff.readFile(outName);
    if (typeof data === 'string') throw new Error('Unexpected text output.');
    report(1);
    return { data: new Uint8Array(data), ext };
  } catch (error) {
    if (signal.aborted) throw new AbortError();
    throw error;
  } finally {
    signal.removeEventListener('abort', stop);
    onProgress = null;
    onLog = null;
    if (!signal.aborted) for (const name of made) await ff.deleteFile(name).catch(() => undefined);
  }
}

async function execute<T>({ file, args, before = [], outName, signal, onProgress: report }: FfmpegRun, collect: (ff: FFmpegInstance) => Promise<T>): Promise<T> {
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
    const result = await collect(ff);
    report(1);
    await ff.deleteFile(inName).catch(() => undefined);
    return result;
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
