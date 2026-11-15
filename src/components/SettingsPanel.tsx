import { useEffect, useState } from 'preact/hooks';
import Chips from './Chips';
import { useOpts } from '../i18n/options';
import { THEME_EVENT, browserTheme, type ThemeChoice } from '../lib/theme-client';

const SHORTCUT_KEYS: { keys: string[]; does: 'sc1' | 'sc2' | 'sc3' | 'sc4' | 'sc5' }[] = [
  { keys: ['Ctrl', 'K'], does: 'sc1' },
  { keys: ['Enter'], does: 'sc2' },
  { keys: ['Esc'], does: 'sc3' },
  { keys: ['Tab'], does: 'sc4' },
  { keys: ['ARROWS'], does: 'sc5' },
];

export default function SettingsPanel() {
  const o = useOpts();
  const THEME_OPTIONS: { id: ThemeChoice; emoji: string; label: string }[] = [
    { id: 'light', emoji: '☀️', label: o.themeLight },
    { id: 'dark', emoji: '🌙', label: o.themeDark },
    { id: 'system', emoji: '🖥️', label: o.themeSystem },
  ];
  // Created after the page loads: it needs the browser (window, localStorage), which the build does not have.
  const [theme, setTheme] = useState<ReturnType<typeof browserTheme> | null>(null);
  const [choice, setChoice] = useState<ThemeChoice>('light');
  const [saved, setSaved] = useState<ThemeChoice>('light');
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
          {o.setAppearance}
        </h2>
        <div class="mt-3">
          <Chips
            label={o.setThemeLabel}
            options={THEME_OPTIONS}
            value={choice}
            onChange={(c) => {
              theme?.set(c);
              setNote('');
            }}
          />
        </div>
        <p class="mt-3 text-sm text-muted">
          {o.setThemeNote}
        </p>
      </section>

      <section class="card p-5" aria-labelledby="local-data">
        <h2 id="local-data" class="text-2xl font-black tracking-tight">
          {o.setSavedH}
        </h2>
        <p class="mt-2 text-sm text-muted" data-testid="saved-summary">
          {saved === 'light' ? o.savedLight : saved === 'dark' ? o.savedDark : o.savedSystem} {o.setSavedTail}
        </p>
        <div class="mt-3 flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="btn"
            onClick={() => {
              theme?.clearSaved();
              setNote(o.setCleared);
            }}
          >
            {o.setClear}
          </button>
          <span role="status" class="text-sm font-bold" data-testid="clear-note">
            {note}
          </span>
        </div>
      </section>

      <section class="card p-5" aria-labelledby="shortcuts">
        <h2 id="shortcuts" class="text-2xl font-black tracking-tight">
          {o.setShortH}
        </h2>
        <ul class="mt-3 grid gap-3">
          {SHORTCUT_KEYS.map((s) => (
            <li key={s.does} class="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span class="flex gap-1">
                {s.keys.map((k) => (
                  <kbd key={k} class="rounded-md border-2 border-line px-1.5 py-0.5 text-xs font-black">
                    {k === 'ARROWS' ? o.keyArrows : k}
                  </kbd>
                ))}
              </span>
              <span class="text-sm">{o[s.does]}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
