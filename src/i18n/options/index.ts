import { fill, useLang } from '../ui';
import { en, type OptText } from './en';
import bn from './bn';
import de from './de';
import es from './es';
import fr from './fr';
import hi from './hi';
import id from './id';
import ptBR from './pt-br';
import ru from './ru';
import tr from './tr';

export type { OptKey, OptText } from './en';
export { fill };

/** The words inside the converters, by language code (English for any language without its own). */
export const OPT_TEXT: Readonly<Record<string, OptText>> = { en, hi, bn, 'pt-BR': ptBR, id, ru, de, es, fr, tr };

export function optsFor(code: string): OptText {
  return OPT_TEXT[code] ?? en;
}

/** The converter text for the page's language. The first render is English so hydration matches, then it switches. */
export function useOpts(): OptText {
  return optsFor(useLang());
}
