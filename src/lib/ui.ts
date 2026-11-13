/** Words the shared file controls use. English only for now; Turkish is on the roadmap (docs/status.html, item 1.4). */
export const ui = {
  dropMany: 'Drop files here',
  dropOne: 'Drop a file here',
  paste: 'or paste from your clipboard',
  chooseMany: 'Choose files',
  chooseOne: 'Choose file',
  takePhoto: 'Take photo',
  skippedOne: 'Skipped unsupported file: {names}',
  skippedMany: 'Skipped unsupported files: {names}',
  selectedOne: '{n} file selected.',
  selectedMany: '{n} files selected.',
  clear: 'Clear',
  working: 'Working...',
  cancel: 'Cancel',
  download: 'Download',
  downloadAll: 'Download all ({n}) as ZIP',
  preparingZip: 'Preparing ZIP...',
  sizes: '{before} to {after}',
  couldNotProcess: 'could not be converted',
} as const;

export function useUi(): typeof ui {
  return ui;
}

export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''));
}
