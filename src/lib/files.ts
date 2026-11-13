/** Pure file helpers shared by the UI components. */

/** True if the file matches any accept entry: 'image/png', 'image/*' or '.heic'. */
export function isAccepted(file: File, accepts: readonly string[]): boolean {
  const type = file.type.toLowerCase();
  const name = file.name.toLowerCase();
  return accepts.some((entry) => {
    const a = entry.toLowerCase();
    if (a.startsWith('.')) return name.endsWith(a);
    if (a.endsWith('/*')) return type.startsWith(a.slice(0, -1));
    return type === a;
  });
}

export function partitionFiles(
  files: readonly File[],
  accepts: readonly string[],
): { accepted: File[]; rejected: File[] } {
  const accepted: File[] = [];
  const rejected: File[] = [];
  for (const file of files) (isAccepted(file, accepts) ? accepted : rejected).push(file);
  return { accepted, rejected };
}

export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) return '-';
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb < 10 ? kb.toFixed(1) : Math.round(kb)} KB`;
  const mb = kb / 1024;
  return `${mb < 10 ? mb.toFixed(2) : mb.toFixed(1)} MB`;
}

/** Percentage change from before to after, e.g. -42 means 42% smaller. */
export function percentChange(before: number, after: number): number {
  if (before <= 0) return 0;
  return Math.round(((after - before) / before) * 100);
}

/** Make names unique for a zip by suffixing duplicates: a.jpg, a (2).jpg, a (3).jpg. */
export function dedupeNames(names: readonly string[]): string[] {
  const seen = new Map<string, number>();
  return names.map((name) => {
    const key = name.toLowerCase();
    const count = (seen.get(key) ?? 0) + 1;
    seen.set(key, count);
    if (count === 1) return name;
    const dot = name.lastIndexOf('.');
    return dot > 0
      ? `${name.slice(0, dot)} (${count})${name.slice(dot)}`
      : `${name} (${count})`;
  });
}

/**
 * A file name that is safe to save: no slashes, colons or other characters that are special in paths, no control
 * characters, no leading dots (hidden files) and at most 120 characters, keeping the extension.
 */
export function safeFileName(name: string): string {
  const cleaned = name.normalize('NFC').replace(/[\x00-\x1f\x7f\\/:*?"<>|]+/g, '_').replace(/^[.\s_]+|[.\s]+$/g, '');
  if (cleaned === '') return 'file';
  if (cleaned.length <= 120) return cleaned;
  const dot = cleaned.lastIndexOf('.');
  const ext = dot > 0 && cleaned.length - dot <= 10 ? cleaned.slice(dot) : '';
  return cleaned.slice(0, 120 - ext.length) + ext;
}

/** Replace the extension: ('photo.heic', 'jpg') -> 'photo.jpg'. The result is always a safe file name. */
export function withExtension(name: string, ext: string): string {
  const dot = name.lastIndexOf('.');
  return safeFileName(`${dot > 0 ? name.slice(0, dot) : name}.${ext.replace(/^\./, '')}`);
}

/** Refuse a file that is too big for the browser to handle, with a message a person can act on. */
export function checkSize(file: { name: string; size: number }, maxMB: number, what = 'file'): void {
  if (file.size > maxMB * 1024 * 1024) {
    throw new Error(`This ${what} is ${formatBytes(file.size)}, which is more than a browser tab can handle safely here (the limit is ${maxMB} MB). Try a smaller file, or split it first.`);
  }
}
