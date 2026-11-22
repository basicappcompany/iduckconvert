/** What each audio and video converter asks ffmpeg to do. Pure, so the arguments can be unit tested. */
import type { ToolKind } from '../lib/tools';

export interface MediaOptions {
  /** Audio bitrate in kbit/s for MP3, M4A and AAC. */
  bitrate: number;
  /** Compress video: high, medium or small. */
  quality: 'high' | 'medium' | 'small';
  /** Output width in pixels. 0 keeps the original. */
  width: number;
  fps: number;
  /** Seconds. */
  start: number;
  /** Length in seconds for GIFs; 0 means to the end. */
  duration: number;
  /** Seconds. Trim stops here; 0 means to the end. */
  end: number;
  /** Split audio: the largest size of one part, in MB. */
  partMb: number;
  /** Video to frames: take one picture every this many seconds. */
  frameEvery: number;
  /** Audio for transcription: a small MP3 or a WAV file. */
  speechFormat: 'mp3' | 'wav';
  /** Rotate or flip video. */
  rotate: Rotation;
  /** Change video speed: 2 means twice as fast, 0.5 half speed. */
  speed: number;
  /** Change audio volume: even out the loudness (normalise) or change it by `gainDb` decibels. */
  normalise: boolean;
  gainDb: number;
}

export type Rotation = 'cw' | 'ccw' | '180' | 'hflip' | 'vflip';

/** The most pictures "Video to frames" saves, so a long video cannot fill the browser's memory. */
export const MAX_FRAMES = 200;

export const DEFAULT_MEDIA_OPTIONS: MediaOptions = { bitrate: 192, quality: 'medium', width: 480, fps: 12, start: 0, duration: 6, end: 0, partMb: 24, frameEvery: 5, speechFormat: 'mp3', rotate: 'cw', speed: 2, normalise: true, gainDb: 6 };

export interface MediaSpec {
  ext: string;
  mime: string;
}

export const AUDIO_TARGETS: Record<string, MediaSpec> = {
  mp3: { ext: 'mp3', mime: 'audio/mpeg' },
  wav: { ext: 'wav', mime: 'audio/wav' },
  m4a: { ext: 'm4a', mime: 'audio/mp4' },
  aac: { ext: 'aac', mime: 'audio/aac' },
  ogg: { ext: 'ogg', mime: 'audio/ogg' },
  flac: { ext: 'flac', mime: 'audio/flac' },
  opus: { ext: 'opus', mime: 'audio/ogg' },
};

export function audioArgs(to: string, o: MediaOptions): string[] {
  switch (to) {
    case 'mp3':
      return ['-vn', '-map_metadata', '0', '-c:a', 'libmp3lame', '-b:a', `${o.bitrate}k`];
    case 'wav':
      return ['-vn', '-c:a', 'pcm_s16le'];
    case 'm4a':
      return ['-vn', '-c:a', 'aac', '-b:a', `${o.bitrate}k`];
    case 'aac':
      return ['-vn', '-c:a', 'aac', '-b:a', `${o.bitrate}k`, '-f', 'adts'];
    case 'ogg':
      return ['-vn', '-c:a', 'libvorbis', '-q:a', String(Math.round(o.bitrate / 64))];
    case 'flac':
      return ['-vn', '-c:a', 'flac'];
    case 'opus':
      return ['-vn', '-c:a', 'libopus', '-b:a', `${Math.min(o.bitrate, 256)}k`];
    default:
      throw new Error(`Unknown audio format: ${to}`);
  }
}

const EVEN = 'scale=trunc(iw/2)*2:trunc(ih/2)*2';

/** The MP4 encode used by every "to MP4" converter. */
export function mp4Args(crf = 23, width = 0, before = ''): string[] {
  const scale = (before ? `${before},` : '') + (width > 0 ? `scale='min(${width},iw)':-2` : EVEN);
  return ['-c:v', 'libx264', '-preset', 'veryfast', '-crf', String(crf), '-pix_fmt', 'yuv420p', '-vf', scale, '-c:a', 'aac', '-b:a', '128k', '-movflags', '+faststart'];
}

export const webmArgs = (): string[] => ['-c:v', 'libvpx', '-deadline', 'realtime', '-cpu-used', '5', '-crf', '10', '-b:v', '1M', '-c:a', 'libvorbis'];

export const gifArgs = (o: MediaOptions): { before: string[]; args: string[] } => ({
  before: o.start > 0 ? ['-ss', String(o.start)] : [],
  args: [
    ...(o.duration > 0 ? ['-t', String(o.duration)] : []),
    '-an',
    '-vf',
    `fps=${o.fps},scale=${o.width > 0 ? `'min(${o.width},iw)'` : 'iw'}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse`,
    '-loop',
    '0',
  ],
});

/**
 * Seconds per part so that a part at a fixed MP3 bitrate stays under `partMb`. A constant bitrate makes the size
 * predictable without reading the file first; 4 percent is kept back for headers and the last frame.
 */
export function segmentSeconds(partMb: number, kbps: number): number {
  return Math.max(10, Math.floor((partMb * 1024 * 1024 * 0.96 * 8) / (kbps * 1000)));
}

/** Several output files from one run: ffmpeg writes numbered files and the tool collects every one that matches. */
export interface ManyOutputs {
  /** The ffmpeg output name, with the number pattern. */
  pattern: string;
  match: RegExp;
}

/** ffmpeg's tempo filter takes 0.5 to 2 at a time, so a bigger or smaller change is a chain of steps. */
export function atempoChain(speed: number): string {
  const steps: number[] = [];
  let left = speed;
  while (left > 2) {
    steps.push(2);
    left /= 2;
  }
  while (left < 0.5) {
    steps.push(0.5);
    left /= 0.5;
  }
  steps.push(Number(left.toFixed(4)));
  return steps.map((x) => `atempo=${x}`).join(',');
}

const ROTATE_FILTER: Record<Rotation, string> = { cw: 'transpose=1', ccw: 'transpose=2', '180': 'hflip,vflip', hflip: 'hflip', vflip: 'vflip' };

/** Containers whose video can be copied as it is when only the sound is removed. Anything else becomes an MP4. */
const COPYABLE = ['mp4', 'm4v', 'mov', 'mkv', 'webm'];
const COPY_MIME: Record<string, string> = { mp4: 'video/mp4', m4v: 'video/mp4', mov: 'video/quicktime', mkv: 'video/x-matroska', webm: 'video/webm' };

const CRF: Record<MediaOptions['quality'], number> = { high: 22, medium: 28, small: 34 };

/** `ext` is the dropped file's extension; "Remove audio" keeps it when the video can be copied. */
export function jobFor(kind: ToolKind, to: string, o: MediaOptions, ext = ''): { before: string[]; args: string[]; spec: MediaSpec; many?: ManyOutputs } {
  switch (kind) {
    case 'audio-trim':
      return {
        before: o.start > 0 ? ['-ss', String(o.start)] : [],
        args: [...(o.end > o.start ? ['-t', String(o.end - o.start)] : []), ...audioArgs('mp3', o)],
        spec: AUDIO_TARGETS['mp3']!,
      };
    case 'audio-volume':
      return {
        before: [],
        // Loudness is evened out in one pass (EBU R128, -16 LUFS), or the level is moved by a fixed number of decibels.
        args: ['-af', o.normalise ? 'loudnorm=I=-16:TP=-1.5:LRA=11' : `volume=${o.gainDb}dB`, ...audioArgs('mp3', o)],
        spec: AUDIO_TARGETS['mp3']!,
      };
    case 'video-mute': {
      const copy = COPYABLE.includes(ext.toLowerCase());
      return copy
        ? { before: [], args: ['-an', '-c:v', 'copy'], spec: { ext: ext.toLowerCase(), mime: COPY_MIME[ext.toLowerCase()]! } }
        : { before: [], args: ['-an', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '23', '-pix_fmt', 'yuv420p', '-vf', EVEN, '-movflags', '+faststart'], spec: { ext: 'mp4', mime: 'video/mp4' } };
    }
    case 'video-rotate':
      return { before: [], args: mp4Args(23, 0, ROTATE_FILTER[o.rotate]), spec: { ext: 'mp4', mime: 'video/mp4' } };
    case 'video-speed':
      return { before: [], args: ['-af', atempoChain(o.speed), ...mp4Args(23, 0, `setpts=PTS/${o.speed}`)], spec: { ext: 'mp4', mime: 'video/mp4' } };
    case 'audio-speech':
      // Speech to text works best from one channel at 16 kHz, which is also what Whisper resamples to.
      return o.speechFormat === 'wav'
        ? { before: [], args: ['-vn', '-ac', '1', '-ar', '16000', '-c:a', 'pcm_s16le'], spec: AUDIO_TARGETS['wav']! }
        : { before: [], args: ['-vn', '-ac', '1', '-ar', '16000', '-c:a', 'libmp3lame', '-b:a', '32k'], spec: AUDIO_TARGETS['mp3']! };
    case 'audio-split':
      return {
        before: [],
        args: ['-vn', '-c:a', 'libmp3lame', '-b:a', `${o.bitrate}k`, '-f', 'segment', '-segment_time', String(segmentSeconds(o.partMb, o.bitrate)), '-reset_timestamps', '1'],
        spec: AUDIO_TARGETS['mp3']!,
        many: { pattern: 'part_%03d.mp3', match: /^part_\d{3}\.mp3$/ },
      };
    case 'video-frames':
      return {
        before: [],
        args: ['-vf', `fps=1/${Math.max(0.1, o.frameEvery)}${o.width > 0 ? `,scale='min(${o.width},iw)':-2` : ''}`, '-frames:v', String(MAX_FRAMES), '-q:v', '3'],
        spec: { ext: 'jpg', mime: 'image/jpeg' },
        many: { pattern: 'frame_%04d.jpg', match: /^frame_\d{4}\.jpg$/ },
      };
    case 'audio':
      return { before: [], args: audioArgs(to, o), spec: AUDIO_TARGETS[to]! };
    case 'video':
      return { before: [], args: to === 'webm' ? webmArgs() : mp4Args(), spec: to === 'webm' ? { ext: 'webm', mime: 'video/webm' } : { ext: 'mp4', mime: 'video/mp4' } };
    case 'gif-video':
      return { before: [], args: mp4Args(23), spec: { ext: 'mp4', mime: 'video/mp4' } };
    case 'video-gif': {
      const g = gifArgs(o);
      return { ...g, spec: { ext: 'gif', mime: 'image/gif' } };
    }
    case 'video-compress':
      return { before: [], args: mp4Args(CRF[o.quality], o.width), spec: { ext: 'mp4', mime: 'video/mp4' } };
    case 'video-trim':
      return {
        before: o.start > 0 ? ['-ss', String(o.start)] : [],
        args: [...(o.end > o.start ? ['-t', String(o.end - o.start)] : []), ...mp4Args(23)],
        spec: { ext: 'mp4', mime: 'video/mp4' },
      };
    default:
      throw new Error(`Not a media converter: ${kind}`);
  }
}

const AUDIO_EXT = ['.mp3', '.wav', '.m4a', '.aac', '.ogg', '.oga', '.flac', '.opus', '.wma', '.amr', '.aiff'];
const VIDEO_EXT = ['.mp4', '.m4v', '.mov', '.mkv', '.webm', '.avi', '.wmv', '.flv', '.3gp', '.mpg', '.mpeg', '.ts', '.mts'];

/** What the drop zone accepts for a converter's source format. Browsers label some files oddly, so extensions come first. */
export function acceptsFor(kind: ToolKind, from: string): string[] {
  if (kind === 'audio-speech' || kind === 'audio-split' || kind === 'audio-trim' || kind === 'audio-volume') return [...AUDIO_EXT, ...VIDEO_EXT, 'audio/*', 'video/*'];
  if (kind === 'video-frames' || kind === 'video-mute' || kind === 'video-rotate' || kind === 'video-speed') return [...VIDEO_EXT, 'video/*'];
  if (from === 'video' || kind === 'video-compress' || kind === 'video-trim') return [...VIDEO_EXT, 'video/*', ...(kind === 'audio' ? [...AUDIO_EXT, 'audio/*'] : [])];
  if (kind === 'video-gif') return [...VIDEO_EXT, 'video/*'];
  const map: Record<string, string[]> = {
    mp3: ['.mp3', 'audio/mpeg'], wav: ['.wav', 'audio/wav', 'audio/x-wav'], m4a: ['.m4a', 'audio/mp4', 'audio/x-m4a'], aac: ['.aac', 'audio/aac'],
    ogg: ['.ogg', '.oga', 'audio/ogg'], flac: ['.flac', 'audio/flac'], opus: ['.opus', 'audio/opus'],
    mp4: ['.mp4', '.m4v', 'video/mp4'], mov: ['.mov', 'video/quicktime'], mkv: ['.mkv', 'video/x-matroska'], webm: ['.webm', 'video/webm'], avi: ['.avi', 'video/x-msvideo'], gif: ['.gif', 'image/gif'],
  };
  return map[from] ?? ['.' + from];
}
