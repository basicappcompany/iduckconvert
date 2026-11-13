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

/** Replace the extension: ('photo.heic', 'jpg') -> 'photo.jpg'. */
export function withExtension(name: string, ext: string): string {
  const dot = name.lastIndexOf('.');
  return `${dot > 0 ? name.slice(0, dot) : name}.${ext.replace(/^\./, '')}`;
}
