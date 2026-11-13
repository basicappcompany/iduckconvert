import { useMemo, useState } from 'preact/hooks';
import SimpleToolShell from '../components/SimpleToolShell';
import { Field, OptionsPanel } from '../components/OptionsPanel';
import type { ToolDefinition } from '../engine/types';
import { withExtension, formatBytes } from '../lib/files';
import type { ToolKind } from '../lib/tools';
import { HARD_LIMIT_MB, LIMIT_DESKTOP_MB, LIMIT_PHONE_MB, isPhone, parseTime, runFfmpeg } from './ffmpeg';
import { DEFAULT_MEDIA_OPTIONS, acceptsFor, jobFor, type MediaOptions } from './media';

interface Props {
  kind: ToolKind;
  from: string;
  to: string;
  runLabel: string;
}

function makeTool(kind: ToolKind, from: string, to: string): ToolDefinition<MediaOptions> {
  return {
    id: `${from}-to-${to}`,
    accepts: acceptsFor(kind, from),
    defaultOptions: DEFAULT_MEDIA_OPTIONS,
    run: async (file, options, ctx) => {
      if (file.size > HARD_LIMIT_MB * 1024 * 1024) throw new Error(`This file is ${formatBytes(file.size)}. Browsers cannot convert files over about 2 GB.`);
      const job = jobFor(kind, to, options);
      const data = await runFfmpeg({ file, args: job.args, before: job.before, outName: `output.${job.spec.ext}`, signal: ctx.signal, onProgress: ctx.onProgress });
      return [{ name: withExtension(file.name, job.spec.ext), blob: new Blob([data as BlobPart], { type: job.spec.mime }) }];
    },
  };
}

const num = (value: string, fallback: number): number => {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
};

export default function MediaTool({ kind, from, to, runLabel }: Props) {
  const tool = useMemo(() => makeTool(kind, from, to), [kind, from, to]);
  const [options, setOptions] = useState<MediaOptions>(DEFAULT_MEDIA_OPTIONS);
  const [startText, setStartText] = useState('0');
  const [endText, setEndText] = useState('');
  const set = (patch: Partial<MediaOptions>) => setOptions((o) => ({ ...o, ...patch }));
  const limit = isPhone() ? LIMIT_PHONE_MB : LIMIT_DESKTOP_MB;

  const audioKinds = kind === 'audio' && ['mp3', 'm4a', 'aac', 'ogg', 'opus'].includes(to);
  const startSeconds = parseTime(startText);
  const endSeconds = endText.trim() === '' ? 0 : parseTime(endText);
  const trimBad = kind === 'video-trim' && (startSeconds === null || endSeconds === null || (endSeconds > 0 && endSeconds <= startSeconds));
  const gifBad = kind === 'video-gif' && startSeconds === null;

  const effective: MediaOptions = {
    ...options,
    start: startSeconds ?? 0,
    end: endSeconds ?? 0,
  };

  return (
    <SimpleToolShell
      tool={tool}
      options={effective}
      canRun={!trimBad && !gifBad}
      runLabel={runLabel}
      {...(trimBad || gifBad ? { missing: 'Check the start and end times: use seconds (90) or minutes and seconds (1:30), and the end must be after the start.' } : {})}
    >
      {({ files }) => (
        <>
          {files.some((f) => f.size > limit * 1024 * 1024) && (
            <p role="status" class="card border-danger p-3 text-sm font-bold">
              A file here is over {limit} MB. It can still work on a computer, but this may be very slow or run out of memory{isPhone() ? ' on a phone' : ''}. Cutting the video shorter first helps.
            </p>
          )}
          {(audioKinds || kind === 'video-gif' || kind === 'video-compress' || kind === 'video-trim') && (
            <OptionsPanel title="Options">
              {audioKinds && (
                <Field id="bitrate" label="Quality (bitrate)" hint="Higher means better sound and a bigger file. 192 is a good everyday choice.">
                  <select id="bitrate" class="input" value={options.bitrate} onChange={(e) => set({ bitrate: Number(e.currentTarget.value) })}>
                    {[96, 128, 160, 192, 256, 320].map((b) => (
                      <option value={b}>{b} kbit/s</option>
                    ))}
                  </select>
                </Field>
              )}
              {kind === 'video-gif' && (
                <>
                  <Field id="gif-start" label="Start at (seconds or m:ss)">
                    <input id="gif-start" class="input" value={startText} onInput={(e) => setStartText(e.currentTarget.value)} inputMode="decimal" />
                  </Field>
                  <Field id="gif-length" label="Length (seconds)" hint="Long GIFs get huge. Under 10 seconds is best.">
                    <input id="gif-length" class="input" type="number" min="1" max="60" value={options.duration} onInput={(e) => set({ duration: num(e.currentTarget.value, 6) })} />
                  </Field>
                  <Field id="gif-width" label="Width (pixels)">
                    <select id="gif-width" class="input" value={options.width} onChange={(e) => set({ width: Number(e.currentTarget.value) })}>
                      {[240, 320, 480, 640, 800].map((w) => (
                        <option value={w}>{w}</option>
                      ))}
                    </select>
                  </Field>
                  <Field id="gif-fps" label="Frames per second">
                    <select id="gif-fps" class="input" value={options.fps} onChange={(e) => set({ fps: Number(e.currentTarget.value) })}>
                      {[8, 10, 12, 15, 20].map((f) => (
                        <option value={f}>{f}</option>
                      ))}
                    </select>
                  </Field>
                </>
              )}
              {kind === 'video-compress' && (
                <>
                  <Field id="vq" label="Quality" hint="Small makes the smallest file; High keeps more detail.">
                    <select id="vq" class="input" value={options.quality} onChange={(e) => set({ quality: e.currentTarget.value as MediaOptions['quality'] })}>
                      <option value="high">High (bigger file)</option>
                      <option value="medium">Medium</option>
                      <option value="small">Small (smallest file)</option>
                    </select>
                  </Field>
                  <Field id="vw" label="Width (pixels)" hint="Shrinking the picture saves the most space. 720 suits phones.">
                    <select id="vw" class="input" value={options.width} onChange={(e) => set({ width: Number(e.currentTarget.value) })}>
                      <option value={0}>Keep original</option>
                      {[480, 720, 1080].map((w) => (
                        <option value={w}>{w}</option>
                      ))}
                    </select>
                  </Field>
                </>
              )}
              {kind === 'video-trim' && (
                <>
                  <Field id="t-start" label="Start (seconds or m:ss)">
                    <input id="t-start" class="input" value={startText} onInput={(e) => setStartText(e.currentTarget.value)} inputMode="decimal" />
                  </Field>
                  <Field id="t-end" label="End (seconds or m:ss)" hint="Leave empty to keep everything after the start.">
                    <input id="t-end" class="input" value={endText} onInput={(e) => setEndText(e.currentTarget.value)} inputMode="decimal" />
                  </Field>
                </>
              )}
            </OptionsPanel>
          )}
          <p class="text-sm text-muted">
            Suggested limit: {LIMIT_DESKTOP_MB} MB on a computer, {LIMIT_PHONE_MB} MB on a phone. The first conversion downloads the converter engine (about 30 MB, then cached).
          </p>
        </>
      )}
    </SimpleToolShell>
  );
}
