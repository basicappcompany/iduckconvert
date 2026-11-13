import { useCallback, useRef, useState } from 'preact/hooks';
import { runBatch, runCombined } from './runner';
import { isCombinedTool, type CombinedToolDefinition, type FileResult, type ToolDefinition } from './types';

export type RunnerState = 'idle' | 'running' | 'finished';

/**
 * Preact hook that drives a tool over a batch and exposes progress and cancel. Works with
 * per-file tools (one result per file) and combined tools (one result for the whole batch).
 */
export function useToolRunner<Options>(tool: ToolDefinition<Options> | CombinedToolDefinition<Options>) {
  const [state, setState] = useState<RunnerState>('idle');
  const [results, setResults] = useState<FileResult[]>([]);
  const [progress, setProgress] = useState<Record<number, number>>({});
  const controller = useRef<AbortController | null>(null);

  const run = useCallback(
    async (files: readonly File[], options: Options) => {
      controller.current?.abort();
      const abort = new AbortController();
      controller.current = abort;
      setState('running');
      setProgress({});
      const callbacks = {
        onUpdate: setResults,
        onFileProgress: (index: number, fraction: number) =>
          setProgress((prev) => ({ ...prev, [index]: fraction })),
      };
      const final = isCombinedTool(tool)
        ? await runCombined(tool, files, options, abort.signal, callbacks)
        : await runBatch(tool, files, options, abort.signal, callbacks);
      if (controller.current === abort) setState('finished');
      return final;
    },
    [tool],
  );

  const cancel = useCallback(() => controller.current?.abort(), []);

  const reset = useCallback(() => {
    controller.current?.abort();
    setState('idle');
    setResults([]);
    setProgress({});
  }, []);

  return { state, results, progress, run, cancel, reset };
}
