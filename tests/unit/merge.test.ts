import { describe, expect, it } from 'vitest';
import { MAX_MERGE_FILES, acceptsFor, audioMergeArgs, clipArgs, concatList, mergeSize, parseProbe } from '../../src/tools/media';
import { PAGE_TOOLS } from '../../src/lib/tools';

const VIDEO_LOG = `Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'in_0.mp4':
  Metadata:
    major_brand     : isom
  Duration: 00:00:03.00, start: 0.000000, bitrate: 1234 kb/s
  Stream #0:0[0x1](und): Video: h264 (High) (avc1 / 0x31637661), yuv420p(progressive), 1280x720 [SAR 1:1 DAR 16:9], 1100 kb/s, 30 fps, 30 tbr, 15360 tbn (default)
  Stream #0:1[0x2](und): Audio: aac (LC) (mp4a / 0x6134706d), 44100 Hz, stereo, fltp, 128 kb/s (default)`;

describe('reading what ffmpeg says about a clip', () => {
  it('finds the picture size and the sound', () => {
    expect(parseProbe(VIDEO_LOG)).toEqual({ hasVideo: true, hasAudio: true, width: 1280, height: 720 });
  });

  it('knows when a clip has no sound, and when a file has no picture', () => {
    const silent = VIDEO_LOG.split('\n').filter((l) => !l.includes('Audio:')).join('\n');
    expect(parseProbe(silent)).toMatchObject({ hasVideo: true, hasAudio: false });
    const song = `Input #0, mp3, from 'x.mp3':\n  Stream #0:0: Audio: mp3, 44100 Hz, stereo, fltp, 192 kb/s`;
    expect(parseProbe(song)).toEqual({ hasVideo: false, hasAudio: true, width: 0, height: 0 });
  });

  it('swaps the size for a phone clip stored sideways', () => {
    const turned = VIDEO_LOG + '\n    Side data:\n      displaymatrix: rotation of -90.00 degrees';
    expect(parseProbe(turned)).toMatchObject({ width: 720, height: 1280 });
  });

  it('does not take a hex codec tag for a picture size', () => {
    expect(parseProbe('  Stream #0:0: Video: mpeg4 (Simple Profile) (mp4v / 0x7634706D), yuv420p, 320x240, 25 fps').width).toBe(320);
  });
});

describe('the size every clip is fitted to', () => {
  it('keeps a normal size and brings a big one down to 1920', () => {
    expect(mergeSize(1920, 1080)).toEqual({ width: 1920, height: 1080 });
    expect(mergeSize(3840, 2160)).toEqual({ width: 1920, height: 1080 });
    expect(mergeSize(1080, 1920)).toEqual({ width: 1080, height: 1920 });
  });

  it('always gives even numbers, which H.264 needs', () => {
    for (const [w, h] of [[1001, 563], [641, 481], [3001, 1999]] as const) {
      const s = mergeSize(w, h);
      expect(s.width % 2, `${w}x${h}`).toBe(0);
      expect(s.height % 2, `${w}x${h}`).toBe(0);
    }
  });

  it('falls back to 1280 by 720 when the size is unknown', () => {
    expect(mergeSize(0, 0)).toEqual({ width: 1280, height: 720 });
  });
});

describe('ffmpeg arguments for a merge', () => {
  const size = { width: 1280, height: 720 };

  it('prepares a clip with sound by fitting it and keeping its sound', () => {
    const args = clipArgs('in_0.mp4', 'piece_0.mp4', true, size);
    expect(args.slice(0, 2)).toEqual(['-i', 'in_0.mp4']);
    expect(args.join(' ')).toContain('scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720');
    expect(args.join(' ')).toContain('fps=30');
    expect(args).toContain('0:a:0');
    expect(args).not.toContain('anullsrc=r=44100:cl=stereo');
    expect(args).not.toContain('-shortest');
    expect(args.at(-1)).toBe('piece_0.mp4');
  });

  it('gives a silent clip a silent track as long as its picture', () => {
    const args = clipArgs('in_1.mov', 'piece_1.mp4', false, size);
    expect(args).toContain('anullsrc=r=44100:cl=stereo');
    expect(args).toContain('1:a:0');
    expect(args).toContain('-shortest');
  });

  it('lists the pieces for the concat reader, one per line', () => {
    expect(concatList(['piece_0.mp4', 'piece_1.mp4'])).toBe("file 'piece_0.mp4'\nfile 'piece_1.mp4'\n");
  });

  it('joins audio in the given order in one run and saves an MP3', () => {
    const args = audioMergeArgs(['in_0.wav', 'in_1.m4a', 'in_2.mp3'], 'output.mp3');
    expect(args.filter((a) => a === '-i')).toHaveLength(3);
    expect(args.indexOf('in_0.wav')).toBeLessThan(args.indexOf('in_1.m4a'));
    expect(args.indexOf('in_1.m4a')).toBeLessThan(args.indexOf('in_2.mp3'));
    const graph = args[args.indexOf('-filter_complex') + 1]!;
    expect(graph).toContain('[a0][a1][a2]concat=n=3:v=0:a=1[out]');
    expect(graph.match(/aresample=44100/g)).toHaveLength(3);
    expect(args).toContain('libmp3lame');
    expect(args).toContain('192k');
    expect(args.at(-1)).toBe('output.mp3');
  });
});

describe('the merge pages', () => {
  it('exist, take only the right kind of file, and several at a time', () => {
    const video = PAGE_TOOLS.find((t) => t.slug === 'merge-videos')!;
    const audio = PAGE_TOOLS.find((t) => t.slug === 'merge-audio-files')!;
    expect(video.kind).toBe('merge-video');
    expect(audio.kind).toBe('merge-audio');
    expect(acceptsFor('merge-video', 'video')).toContain('video/*');
    expect(acceptsFor('merge-video', 'video')).not.toContain('audio/*');
    expect(acceptsFor('merge-audio', 'audio')).toContain('audio/*');
    expect(acceptsFor('merge-audio', 'audio')).not.toContain('video/*');
    expect(MAX_MERGE_FILES).toBeGreaterThan(1);
  });
});
