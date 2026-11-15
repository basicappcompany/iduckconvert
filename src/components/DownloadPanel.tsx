import { useEffect, useMemo, useState } from 'preact/hooks';
import { dedupeNames, formatBytes, percentChange } from '../lib/files';
import type { FileResult } from '../engine/types';
import { fill, useUi } from '../lib/ui';
import { useOpts } from '../i18n/options';
import { useLang } from '../i18n/ui';
import { localizeError } from '../lib/errors';

interface Props {
  /** Original files, same order the batch was submitted in. */
  inputs: readonly File[];
  results: readonly FileResult[];
  /** Size to compare each output against. Set it for combined tools, where one output comes from many inputs. */
  beforeBytes?: number;
}

function useObjectUrls(blobs: readonly Blob[]): string[] {
  const urls = useMemo(() => blobs.map((b) => URL.createObjectURL(b)), [blobs]);
  useEffect(() => () => urls.forEach((u) => URL.revokeObjectURL(u)), [urls]);
  return urls;
}

/** Per-file download with before/after sizes, plus one ZIP for batches. */
export default function DownloadPanel({ inputs, results, beforeBytes }: Props) {
  const ui = useUi();
  const o = useOpts();
  const lang = useLang();
  const rows = useMemo(
    () =>
      results.flatMap((r) =>
        r.status === 'done' ? r.outputs.map((output) => ({ result: r, output })) : [],
      ),
    [results],
  );
  const urls = useObjectUrls(useMemo(() => rows.map((r) => r.output.blob), [rows]));
  const [zipping, setZipping] = useState(false);
  const failed = results.filter((r) => r.status === 'error');

  const downloadZip = async () => {
    setZipping(true);
    try {
      const { default: JSZip } = await import('jszip');
      const zip = new JSZip();
      const names = dedupeNames(rows.map((r) => r.output.name));
      rows.forEach((r, i) => zip.file(names[i]!, r.output.blob));
      const blob = await zip.generateAsync({ type: 'blob', compression: 'STORE' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'iduckconvert-files.zip';
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
    } finally {
      setZipping(false);
    }
  };

  if (rows.length === 0 && failed.length === 0) return null;

  return (
    <section aria-label="Results" class="card p-5">
      <ul class="divide-y-2 divide-line/20">
        {rows.map(({ result, output }, i) => {
          const before = beforeBytes ?? (inputs[result.index] ? inputs[result.index]!.size : 0);
          const after = output.blob.size;
          const change = percentChange(before, after);
          return (
            <li key={`${result.index}-${output.name}`} class="flex items-center justify-between gap-3 py-3">
              <div class="min-w-0">
                <p class="truncate font-black">{output.name}</p>
                <p class="text-sm text-muted">
                  {fill(ui.sizes, { before: formatBytes(before), after: formatBytes(after) })}
                  {before > 0 && ` (${change > 0 ? '+' : ''}${change}%)`}
                </p>
              </div>
              <a
                href={urls[i] ?? ''}
                download={output.name}
                class="btn btn-primary shrink-0"
              >
                {ui.download}
              </a>
            </li>
          );
        })}
      </ul>
      {failed.length > 0 && (
        <ul role="alert" class="mt-3 text-sm font-bold text-danger">
          {failed.map((r) => (
            <li key={r.index}>
              {r.fileName}: {r.error ? localizeError(r.error, o, lang === 'en') : ui.couldNotProcess}
            </li>
          ))}
        </ul>
      )}
      {rows.length > 1 && (
        <button
          type="button"
          onClick={downloadZip}
          disabled={zipping}
          class="btn btn-ink btn-lg mt-4 w-full"
        >
          {zipping ? ui.preparingZip : fill(ui.downloadAll, { n: rows.length })}
        </button>
      )}
    </section>
  );
}
