import { useLang } from '../ui';
import bn from './bn';
import de from './de';
import es from './es';
import fr from './fr';
import hi from './hi';
import id from './id';
import ptBR from './pt-br';
import ru from './ru';
import tr from './tr';

/**
 * Names the converters show: units (`unit.<set>.<id>`), unit-set notes (`note.<set>`), cities (`city.<id>`) and the
 * country hints in date-format labels (`fmt.<id>`). English is the text in src/convert; a language file only holds the
 * translation, and a name with no entry falls back to English. A unit test checks every language covers every key.
 */
export type NameText = Readonly<Record<string, string>>;

export const NAME_TEXT: Readonly<Record<string, NameText>> = { hi, bn, 'pt-BR': ptBR, id, ru, de, es, fr, tr };

/** The translated name for a key, or the English text when the language has none. */
export function nameFor(code: string, key: string, english: string): string {
  return NAME_TEXT[code]?.[key] ?? english;
}

/** Name lookup for the page's language (English on the first render, then switches after mount). */
export function useNames(): (key: string, english: string) => string {
  const code = useLang();
  return (key, english) => nameFor(code, key, english);
}
