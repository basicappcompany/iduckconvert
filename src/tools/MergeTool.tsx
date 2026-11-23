/** Merge several video clips into one MP4, or several audio files into one MP3, in the order the person chooses. */
import { useMemo } from 'preact/hooks';
import SimpleToolShell from '../components/SimpleToolShell';
import type { CombinedToolDefinition } from '../engine/types';
import { formatBytes } from '../lib/files';
import { fill, useOpts } from '../i18n/options';
import type { ToolKind } from '../lib/tools';
import { HARD_LIMIT_MB, LIMIT_DESKTOP_MB, LIMIT_PHONE_MB, isPhone, runFfmpegMerge } from './ffmpeg';
import { MAX_MERGE_FILES, acceptsFor } from './media';

interface Props {
  kind: ToolKind;
  runLabel: string;
}

const MB = 1024 * 1024;

function makeTool(video: boolean, tooBig: string): CombinedToolDefinition<Record<string, never>> {
  return {
    id: video ? 'merge-videos' : 'merge-audio-files',
    accepts: acceptsFor(video ? 'merge-video' : 'merge-audio', video ? 'video' : 'audio'),
    defaultOptions: {},
    runAll: async (files, _options, ctx) => {
      const total = files.reduce((sum, f) => sum + f.size, 0);
      if (total > HARD_LIMIT_MB * MB) throw new Error(fill(tooBig, { size: formatBytes(total) }));
      const { data, ext } = await runFfmpegMerge({ files, video, signal: ctx.signal, onProgress: ctx.onProgress });
      return [{ name: `merged.${ext}`, blob: new Blob([data as BlobPart], { type: ext === 'mp4' ? 'video/mp4' : 'audio/mpeg' }) }];
    },
  };
}

export default function MergeTool({ kind, runLabel }: Props) {
  const o = useOpts();
  const video = kind === 'merge-video';
  const tool = useMemo(() => makeTool(video, o.tooBig), [video, o.tooBig]);
  const limit = isPhone() ? LIMIT_PHONE_MB : LIMIT_DESKTOP_MB;
  return (
    <SimpleToolShell tool={tool} options={{}} canRun runLabel={runLabel} ordered maxFiles={MAX_MERGE_FILES}>
      {({ files }) => (
        <>
          {files.reduce((sum, f) => sum + f.size, 0) > limit * MB && (
            <p role="status" class="card border-danger p-3 text-sm font-bold">
              {fill(isPhone() ? o.overLimitPhone : o.overLimit, { limit })}
            </p>
          )}
          <p class="text-sm text-muted">{video ? o.mergeNoteVideo : o.mergeNoteAudio}</p>
        </>
      )}
    </SimpleToolShell>
  );
}
