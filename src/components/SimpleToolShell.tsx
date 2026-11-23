import { useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';
import FileDropzone from './FileDropzone';
import ProgressBar from './ProgressBar';
import DownloadPanel from './DownloadPanel';
import { useToolRunner } from '../engine/useToolRunner';
import type { CombinedToolDefinition, ToolDefinition } from '../engine/types';
import { fill, useUi } from '../lib/ui';
import { fill as fillOpt, useOpts } from '../i18n/options';
import { formatBytes } from '../lib/files';

interface Props<O> {
  tool: ToolDefinition<O> | CombinedToolDefinition<O>;
  options: O;
  /** False keeps the run button disabled, for example while a required text box is empty. */
  canRun: boolean;
  runLabel: string;
  /** One picture at a time: a new drop replaces the old one instead of adding to it. */
  single?: boolean;
  /** Several files become one result, so their order matters: show them as a list with move and remove buttons. */
  ordered?: boolean;
  /** For an ordered tool: the fewest and most files one run takes. */
  maxFiles?: number;
  /** Shown under a disabled run button, to say what is missing. */
  missing?: string;
  /** The preview and option panels. Call `reset` when an option changes so old results disappear. */
  children: (ctx: { files: File[]; running: boolean; reset: () => void }) => ComponentChildren;
}

/**
 * The frame shared by the simple one-picture-in, results-out tools: drop zone, file count, your
 * option panels, the run and cancel buttons, progress and downloads. Tools supply the middle.
 */
export default function SimpleToolShell<O>({ tool, options, canRun, runLabel, missing, single = false, ordered = false, maxFiles = 20, children }: Props<O>) {
  const ui = useUi();
  const o = useOpts();
  const [files, setFiles] = useState<File[]>([]);
  const runner = useToolRunner(tool);
  const running = runner.state === 'running';
  const tooFew = ordered && files.length < 2;
  const tooMany = ordered && files.length > maxFiles;

  const done = runner.results.filter((r) => r.status === 'done' || r.status === 'error').length;
  const runningIndex = runner.results.findIndex((r) => r.status === 'running');
  const overall =
    runner.results.length === 0
      ? 0
      : (done + (runningIndex >= 0 ? (runner.progress[runningIndex] ?? 0) : 0)) / runner.results.length;

  const addFiles = (added: File[]) => {
    runner.reset();
    setFiles((prev) => (single ? added.slice(0, 1) : [...prev, ...added]));
  };

  const move = (index: number, by: -1 | 1) => {
    runner.reset();
    setFiles((prev) => {
      const next = [...prev];
      const other = index + by;
      if (other < 0 || other >= next.length) return prev;
      [next[index], next[other]] = [next[other]!, next[index]!];
      return next;
    });
  };
  const removeAt = (index: number) => {
    runner.reset();
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div class="grid gap-5">
      <FileDropzone accepts={tool.accepts} onFiles={addFiles} disabled={running} multiple={!single} />

      {files.length > 0 && (
        <>
          <p class="text-sm">
            {fill(files.length === 1 ? ui.selectedOne : ui.selectedMany, { n: files.length })}{' '}
            <button
              type="button"
              class="link"
              disabled={running}
              onClick={() => {
                runner.reset();
                setFiles([]);
              }}
            >
              {ui.clear}
            </button>
          </p>

          {ordered && (
            <div class="grid gap-2">
              <p class="text-sm font-bold">{o.mergeOrder}</p>
              <ol class="grid gap-2" id="file-order">
                {files.map((f, i) => (
                  <li key={`${i}-${f.name}-${f.size}`} class="card flex items-center gap-2 p-2">
                    <span class="w-6 shrink-0 text-center text-sm font-black">{i + 1}</span>
                    <span class="min-w-0 flex-1 text-sm [overflow-wrap:anywhere]">
                      <span class="font-bold">{f.name}</span> <span class="text-muted">({formatBytes(f.size)})</span>
                    </span>
                    <button type="button" class="btn btn-sm" disabled={running || i === 0} aria-label={fillOpt(o.mergeUp, { name: f.name })} onClick={() => move(i, -1)}>
                      ↑
                    </button>
                    <button type="button" class="btn btn-sm" disabled={running || i === files.length - 1} aria-label={fillOpt(o.mergeDown, { name: f.name })} onClick={() => move(i, 1)}>
                      ↓
                    </button>
                    <button type="button" class="btn btn-sm" disabled={running} aria-label={fillOpt(o.mergeRemove, { name: f.name })} onClick={() => removeAt(i)}>
                      ✕
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {children({ files, running, reset: runner.reset })}

          <div class="flex gap-3">
            <button
              type="button"
              disabled={running || !canRun || tooFew || tooMany}
              onClick={() => runner.run(files, options)}
              class="btn btn-primary btn-lg"
            >
              {running ? ui.working : runLabel}
            </button>
            {running && (
              <button type="button" onClick={runner.cancel} class="btn btn-lg">
                {ui.cancel}
              </button>
            )}
          </div>
          {!canRun && missing && <p class="text-sm text-muted">{missing}</p>}
          {tooFew && <p class="text-sm text-muted">{o.mergeNeedTwo}</p>}
          {tooMany && <p role="alert" class="text-sm font-bold text-danger">{fillOpt(o.mergeTooMany, { max: maxFiles })}</p>}
        </>
      )}

      {running && <ProgressBar value={overall} label={ui.working.replace(/\.+$/, '')} />}
      {runner.state !== 'idle' && <DownloadPanel inputs={files} results={runner.results} {...(ordered ? { beforeBytes: files.reduce((sum, f) => sum + f.size, 0) } : {})} />}
    </div>
  );
}
