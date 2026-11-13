/** Shared contract every tool plugs into: input file -> options -> job -> output files. */

export interface OutputFile {
  name: string;
  blob: Blob;
  width?: number;
  height?: number;
}

export interface JobContext {
  /** Aborted when the user presses Cancel. Long jobs must stop promptly. */
  signal: AbortSignal;
  /** Report progress for the current file as a fraction from 0 to 1. */
  onProgress: (fraction: number) => void;
}

export interface ToolDefinition<Options> {
  id: string;
  /** MIME types or extensions accepted by the dropzone, e.g. ['image/jpeg', '.heic']. */
  accepts: readonly string[];
  defaultOptions: Options;
  /** Process one file. Heavy work must happen in a Web Worker. May return several outputs. */
  run: (file: File, options: Options, ctx: JobContext) => Promise<OutputFile[]>;
}

/**
 * A tool that turns the whole batch into one result, such as several images into one PDF.
 * Unlike ToolDefinition it sees every file at once; any error fails the whole job.
 */
export interface CombinedToolDefinition<Options> {
  id: string;
  accepts: readonly string[];
  defaultOptions: Options;
  runAll: (files: readonly File[], options: Options, ctx: JobContext) => Promise<OutputFile[]>;
}

export function isCombinedTool<Options>(
  tool: ToolDefinition<Options> | CombinedToolDefinition<Options>,
): tool is CombinedToolDefinition<Options> {
  return 'runAll' in tool;
}

export type FileStatus ='queued' | 'running' | 'done' | 'error' | 'cancelled';

export interface FileResult {
  /** Index of the file in the submitted batch. */
  index: number;
  fileName: string;
  status: FileStatus;
  outputs: OutputFile[];
  error?: string;
}

export class AbortError extends Error {
  constructor(message = 'Cancelled') {
    super(message);
    this.name = 'AbortError';
  }
}

export function isAbortError(error: unknown): boolean {
  return error instanceof Error && error.name === 'AbortError';
}
