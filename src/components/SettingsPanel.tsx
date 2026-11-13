import { useEffect, useState } from 'preact/hooks';
import Chips from './Chips';
import { THEME_EVENT, browserTheme, type ThemeChoice } from '../lib/theme-client';

const THEME_OPTIONS: { id: ThemeChoice; emoji: string; label: string }[] = [
  { id: 'system', emoji: '🖥️', label: 'Match my device' },
  { id: 'light', emoji: '☀️', label: 'Light' },
  { id: 'dark', emoji: '🌙', label: 'Dark' },
];

const SHORTCUTS: { keys: string[]; does: string }[] = [
  { keys: ['Ctrl', 'K'], does: 'Search the tools (on a Mac, Cmd and K).' },
  { keys: ['Enter'], does: 'In the search box, open the first tool that matches.' },
  { keys: ['Esc'], does: 'Close the menu on a phone.' },
  { keys: ['Tab'], does: 'First press: skip straight to the page content.' },
  { keys: ['Arrow keys'], does: 'In the crop tool, move the crop box (hold Shift for bigger steps). In a pick-one group, change the choice.' },
];

export default function SettingsPanel() {
  // Created after the page loads: it needs the browser (window, localStorage), which the build does not have.
  const [theme, setTheme] = useState<ReturnType<typeof browserTheme> | null>(null);
  const [choice, setChoice] = useState<ThemeChoice>('system');
  const [saved, setSaved] = useState<ThemeChoice>('system');
  const [note, setNote] = useState('');

  useEffect(() => {
    const t = browserTheme();
    setTheme(t);
    const read = () => {
      setChoice(t.choice());
      setSaved(t.saved());
    };
    read();
    // The header button changes the theme too, so keep this page in step with it.
    window.addEventListener(THEME_EVENT, read);
    return () => window.removeEventListener(THEME_EVENT, read);
  }, []);

  return (
    <div class="grid gap-5">
      <section class="card p-5" aria-labelledby="appearance">
        <h2 id="appearance" class="text-2xl font-black tracking-tight">
          Appearance
        </h2>
        <div class="mt-3">
          <Chips
            label="Theme"
            options={THEME_OPTIONS}
            value={choice}
            onChange={(c) => {
              theme?.set(c);
              setNote('');
            }}
          />
        </div>
        <p class="mt-3 text-sm text-muted">
          "Match my device" follows your phone or computer's light or dark setting. Your choice is remembered in this browser only.
        </p>
      </section>

      <section class="card p-5" aria-labelledby="local-data">
        <h2 id="local-data" class="text-2xl font-black tracking-tight">
          Saved in this browser
        </h2>
        <p class="mt-2 text-sm text-muted" data-testid="saved-summary">
          {saved === 'system' ? 'Nothing is saved: the theme follows your device.' : `Your theme choice: ${saved}.`} That is all we keep. Your images are never saved.
        </p>
        <div class="mt-3 flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="btn"
            onClick={() => {
              theme?.clearSaved();
              setNote('Cleared. The theme now follows your device.');
            }}
          >
            Clear saved settings
          </button>
          <span role="status" class="text-sm font-bold" data-testid="clear-note">
            {note}
          </span>
        </div>
      </section>

      <section class="card p-5" aria-labelledby="shortcuts">
        <h2 id="shortcuts" class="text-2xl font-black tracking-tight">
          Keyboard shortcuts
        </h2>
        <ul class="mt-3 grid gap-3">
          {SHORTCUTS.map((s) => (
            <li key={s.does} class="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span class="flex gap-1">
                {s.keys.map((k) => (
                  <kbd key={k} class="rounded-md border-2 border-line px-1.5 py-0.5 text-xs font-black">
                    {k}
                  </kbd>
                ))}
              </span>
              <span class="text-sm">{s.does}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
