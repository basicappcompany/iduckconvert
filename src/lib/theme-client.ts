import { THEME_STORAGE_KEY } from './theme';

export type ThemeChoice = 'system' | 'light' | 'dark';

/** The parts of the page and the browser the theme needs. Passed in so tests can fake them. */
export interface ThemeEnv {
  root: Pick<HTMLElement, 'getAttribute' | 'setAttribute' | 'removeAttribute'>;
  /** Null when storage is unavailable. Any call may also throw (blocked storage). */
  storage: Pick<Storage, 'getItem' | 'setItem' | 'removeItem'> | null;
  systemPrefersDark: () => boolean;
  /** Called after every change so other parts of the page can update. */
  notify: () => void;
}

/**
 * One place that knows how the theme works: no attribute means "follow the system", an attribute
 * is an explicit choice that is also saved. The header toggle and the Settings page both use it,
 * so they cannot disagree.
 */
export function createTheme(env: ThemeEnv) {
  const choice = (): ThemeChoice => {
    const v = env.root.getAttribute('data-theme');
    return v === 'light' || v === 'dark' ? v : 'system';
  };
  const isDark = (): boolean => {
    const c = choice();
    return c === 'dark' || (c === 'system' && env.systemPrefersDark());
  };
  const save = (fn: () => void) => {
    try {
      fn();
    } catch {
      // Storage can be blocked (private mode). The choice still applies for this visit.
    }
  };
  return {
    choice,
    isDark,
    set(next: ThemeChoice) {
      if (next === 'system') {
        env.root.removeAttribute('data-theme');
        save(() => env.storage?.removeItem(THEME_STORAGE_KEY));
      } else {
        env.root.setAttribute('data-theme', next);
        save(() => env.storage?.setItem(THEME_STORAGE_KEY, next));
      }
      env.notify();
    },
    /** Flip to the opposite of what is showing now. */
    toggle() {
      this.set(isDark() ? 'light' : 'dark');
    },
    /** Forget everything we saved in this browser. */
    clearSaved() {
      this.set('system');
    },
    /** The saved choice, as stored (not what is currently applied). */
    saved(): ThemeChoice {
      try {
        const v = env.storage?.getItem(THEME_STORAGE_KEY);
        return v === 'light' || v === 'dark' ? v : 'system';
      } catch {
        return 'system';
      }
    },
  };
}

export const THEME_EVENT = 'duck-theme';

/** The real thing, for use in the browser. */
export function browserTheme() {
  let storage: Storage | null = null;
  try {
    storage = window.localStorage;
  } catch {
    storage = null;
  }
  return createTheme({
    root: document.documentElement,
    storage,
    systemPrefersDark: () => matchMedia('(prefers-color-scheme: dark)').matches,
    notify: () => window.dispatchEvent(new CustomEvent(THEME_EVENT)),
  });
}
