import { useMemo, useState } from 'preact/hooks';
import SimpleToolShell from '../components/SimpleToolShell';
import { Field, OptionsPanel } from '../components/OptionsPanel';
import type { ToolDefinition } from '../engine/types';
import { withExtension, formatBytes } from '../lib/files';
import { fill, useOpts } from '../i18n/options';
import type { ToolKind } from '../lib/tools';
import { HARD_LIMIT_MB, LIMIT_DESKTOP_MB, LIMIT_PHONE_MB, isPhone, parseTime, runFfmpeg, runFfmpegMany } from './ffmpeg';
import { DEFAULT_MEDIA_OPTIONS, acceptsFor, jobFor, type MediaOptions } from './media';

interface Props {
  kind: ToolKind;
  from: string;
  to: string;
  runLabel: string;
}

function makeTool(kind: ToolKind, from: string, to: string, tooBig: string): ToolDefinition<MediaOptions> {
  return {
    id: `${from}-to-${to}`,
    accepts: acceptsFor(kind, from),
    defaultOptions: DEFAULT_MEDIA_OPTIONS,
    run: async (file, options, ctx) => {
      if (file.size > HARD_LIMIT_MB * 1024 * 1024) throw new Error(fill(tooBig, { size: formatBytes(file.size) }));
      const job = jobFor(kind, to, options, extOf(file.name));
      if (job.many) {
        const base = file.name.replace(/\.[^./\\]*$/, '');
        const parts = await runFfmpegMany({ file, args: job.args, before: job.before, outName: job.many.pattern, match: job.many.match, signal: ctx.signal, onProgress: ctx.onProgress });
        return parts.map((p) => ({ name: `${base}-${p.name.replace('_', '-')}`, blob: new Blob([p.data as BlobPart], { type: job.spec.mime }) }));
      }
      const data = await runFfmpeg({ file, args: job.args, before: job.before, outName: `output.${job.spec.ext}`, signal: ctx.signal, onProgress: ctx.onProgress });
      const name = withExtension(file.name, job.spec.ext);
      const suffix = SUFFIX[kind];
      return [{ name: suffix ? name.replace(/(\.[^.]*)$/, `${suffix}$1`) : name, blob: new Blob([data as BlobPart], { type: job.spec.mime }) }];
    },
  };
}

/** What is added to the file name, so a result never has the same name as the file it came from. */
const SUFFIX: Partial<Record<ToolKind, string>> = { 'audio-trim': '-trimmed', 'audio-volume': '-volume', 'video-mute': '-muted', 'video-rotate': '-rotated', 'video-speed': '-speed' };

const extOf = (name: string): string => /\.([a-z0-9]{1,5})$/i.exec(name)?.[1]?.toLowerCase() ?? '';

const num = (value: string, fallback: number): number => {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
};

export default function MediaTool({ kind, from, to, runLabel }: Props) {
  const o = useOpts();
  const tool = useMemo(() => makeTool(kind, from, to, o.tooBig), [kind, from, to, o.tooBig]);
  const [options, setOptions] = useState<MediaOptions>(kind === 'audio-split' ? { ...DEFAULT_MEDIA_OPTIONS, bitrate: 64 } : kind === 'video-frames' ? { ...DEFAULT_MEDIA_OPTIONS, width: 0 } : DEFAULT_MEDIA_OPTIONS);
  const [startText, setStartText] = useState('0');
  const [endText, setEndText] = useState('');
  const set = (patch: Partial<MediaOptions>) => setOptions((o) => ({ ...o, ...patch }));
  const limit = isPhone() ? LIMIT_PHONE_MB : LIMIT_DESKTOP_MB;

  const audioKinds = kind === 'audio' && ['mp3', 'm4a', 'aac', 'ogg', 'opus'].includes(to);
  const startSeconds = parseTime(startText);
  const endSeconds = endText.trim() === '' ? 0 : parseTime(endText);
  const trimBad = (kind === 'video-trim' || kind === 'audio-trim') && (startSeconds === null || endSeconds === null || (endSeconds > 0 && endSeconds <= startSeconds));
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
      {...(trimBad || gifBad ? { missing: o.checkTimes } : {})}
    >
      {({ files }) => (
        <>
          {files.some((f) => f.size > limit * 1024 * 1024) && (
            <p role="status" class="card border-danger p-3 text-sm font-bold">
              {fill(isPhone() ? o.overLimitPhone : o.overLimit, { limit })}
            </p>
          )}
          {(audioKinds || ['video-gif', 'video-compress', 'video-trim', 'audio-trim', 'audio-volume', 'video-rotate', 'video-speed', 'audio-speech', 'audio-split', 'video-frames'].includes(kind)) && (
            <OptionsPanel title={o.options}>
              {audioKinds && (
                <Field id="bitrate" label={o.bitrate} hint={o.bitrateHint}>
                  <select id="bitrate" class="input" value={options.bitrate} onChange={(e) => set({ bitrate: Number(e.currentTarget.value) })}>
                    {[96, 128, 160, 192, 256, 320].map((b) => (
                      <option value={b}>{fill(o.kbit, { n: b })}</option>
                    ))}
                  </select>
                </Field>
              )}
              {kind === 'video-gif' && (
                <>
                  <Field id="gif-start" label={o.gifStart}>
                    <input id="gif-start" class="input" value={startText} onInput={(e) => setStartText(e.currentTarget.value)} inputMode="decimal" />
                  </Field>
                  <Field id="gif-length" label={o.gifLength} hint={o.gifLengthHint}>
                    <input id="gif-length" class="input" type="number" min="1" max="60" value={options.duration} onInput={(e) => set({ duration: num(e.currentTarget.value, 6) })} />
                  </Field>
                  <Field id="gif-width" label={o.widthPixels}>
                    <select id="gif-width" class="input" value={options.width} onChange={(e) => set({ width: Number(e.currentTarget.value) })}>
                      {[240, 320, 480, 640, 800].map((w) => (
                        <option value={w}>{w}</option>
                      ))}
                    </select>
                  </Field>
                  <Field id="gif-fps" label={o.fps}>
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
                  <Field id="vq" label={o.quality} hint={o.qualityHint}>
                    <select id="vq" class="input" value={options.quality} onChange={(e) => set({ quality: e.currentTarget.value as MediaOptions['quality'] })}>
                      <option value="high">{o.qualityHigh}</option>
                      <option value="medium">{o.qualityMedium}</option>
                      <option value="small">{o.qualitySmall}</option>
                    </select>
                  </Field>
                  <Field id="vw" label={o.widthPixels} hint={o.widthHint}>
                    <select id="vw" class="input" value={options.width} onChange={(e) => set({ width: Number(e.currentTarget.value) })}>
                      <option value={0}>{o.keepOriginal}</option>
                      {[480, 720, 1080].map((w) => (
                        <option value={w}>{w}</option>
                      ))}
                    </select>
                  </Field>
                </>
              )}
              {kind === 'audio-speech' && (
                <Field id="speech-format" label={o.speechFormat}>
                  <select id="speech-format" class="input" value={options.speechFormat} onChange={(e) => set({ speechFormat: e.currentTarget.value as MediaOptions['speechFormat'] })}>
                    <option value="mp3">{o.speechMp3}</option>
                    <option value="wav">{o.speechWav}</option>
                  </select>
                </Field>
              )}
              {kind === 'audio-split' && (
                <>
                  <Field id="part-size" label={o.partSize} hint={o.partSizeHint}>
                    <select id="part-size" class="input" value={options.partMb} onChange={(e) => set({ partMb: Number(e.currentTarget.value) })}>
                      {[10, 24, 49].map((n) => (
                        <option value={n}>{fill(o.mbSize, { n })}</option>
                      ))}
                    </select>
                  </Field>
                  <Field id="split-bitrate" label={o.bitrate}>
                    <select id="split-bitrate" class="input" value={options.bitrate} onChange={(e) => set({ bitrate: Number(e.currentTarget.value) })}>
                      {[32, 48, 64, 96, 128].map((b) => (
                        <option value={b}>{fill(o.kbit, { n: b })}</option>
                      ))}
                    </select>
                  </Field>
                </>
              )}
              {kind === 'video-frames' && (
                <>
                  <Field id="frame-every" label={o.framesEvery} hint={o.framesHint}>
                    <select id="frame-every" class="input" value={options.frameEvery} onChange={(e) => set({ frameEvery: Number(e.currentTarget.value) })}>
                      {[1, 2, 5, 10, 30, 60].map((n) => (
                        <option value={n}>{fill(o.everySeconds, { n })}</option>
                      ))}
                    </select>
                  </Field>
                  <Field id="frame-width" label={o.widthPixels}>
                    <select id="frame-width" class="input" value={options.width} onChange={(e) => set({ width: Number(e.currentTarget.value) })}>
                      <option value={0}>{o.keepOriginal}</option>
                      {[480, 720, 1080].map((w) => (
                        <option value={w}>{w}</option>
                      ))}
                    </select>
                  </Field>
                </>
              )}
              {kind === 'audio-volume' && (
                <>
                  <Field id="vol-mode" label={o.volMode}>
                    <select id="vol-mode" class="input" value={options.normalise ? 'even' : 'fixed'} onChange={(e) => set({ normalise: e.currentTarget.value === 'even' })}>
                      <option value="even">{o.volNormalise}</option>
                      <option value="fixed">{o.volGain}</option>
                    </select>
                  </Field>
                  {!options.normalise && (
                    <Field id="vol-gain" label={o.gainLabel} hint={o.gainHint}>
                      <select id="vol-gain" class="input" value={options.gainDb} onChange={(e) => set({ gainDb: Number(e.currentTarget.value) })}>
                        {[-12, -6, -3, 3, 6, 10, 15, 20].map((n) => (
                          <option value={n}>{fill(o.dbN, { n: n > 0 ? `+${n}` : String(n) })}</option>
                        ))}
                      </select>
                    </Field>
                  )}
                </>
              )}
              {kind === 'video-rotate' && (
                <Field id="rotate" label={o.rotateLabel}>
                  <select id="rotate" class="input" value={options.rotate} onChange={(e) => set({ rotate: e.currentTarget.value as MediaOptions['rotate'] })}>
                    <option value="cw">{o.rotateCw}</option>
                    <option value="ccw">{o.rotateCcw}</option>
                    <option value="180">{o.rotate180}</option>
                    <option value="hflip">{o.flipH}</option>
                    <option value="vflip">{o.flipV}</option>
                  </select>
                </Field>
              )}
              {kind === 'video-speed' && (
                <Field id="speed" label={o.speedLabel} hint={o.speedHint}>
                  <select id="speed" class="input" value={options.speed} onChange={(e) => set({ speed: Number(e.currentTarget.value) })}>
                    {[0.25, 0.5, 0.75, 1.25, 1.5, 2, 3, 4].map((n) => (
                      <option value={n}>{fill(o.speedX, { n })}</option>
                    ))}
                  </select>
                </Field>
              )}
              {(kind === 'video-trim' || kind === 'audio-trim') && (
                <>
                  <Field id="t-start" label={o.trimStart}>
                    <input id="t-start" class="input" value={startText} onInput={(e) => setStartText(e.currentTarget.value)} inputMode="decimal" />
                  </Field>
                  <Field id="t-end" label={o.trimEnd} hint={o.trimEndHint}>
                    <input id="t-end" class="input" value={endText} onInput={(e) => setEndText(e.currentTarget.value)} inputMode="decimal" />
                  </Field>
                </>
              )}
            </OptionsPanel>
          )}
          <p class="text-sm text-muted">
            {fill(o.suggestedLimit, { desktop: LIMIT_DESKTOP_MB, phone: LIMIT_PHONE_MB })}
          </p>
        </>
      )}
    </SimpleToolShell>
  );
}
