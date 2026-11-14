import { TOOLS } from '../../lib/tools';
import type { HelperContext } from '../../lib/helper';
import { toolText } from '..';
import { localePath } from '../locales';
import type { HelperPage, HelperText } from './types';
import { bn } from './bn';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { hi } from './hi';
import { id } from './id';
import { ptBR } from './pt-br';
import { ru } from './ru';
import { tr } from './tr';

export type { HelperPage, HelperText } from './types';

/** The helper's text in each language. English is built into the helper itself. */
export const HELPER_TEXT: Readonly<Record<string, HelperText>> = { hi, bn, 'pt-BR': ptBR, id, ru, de, es, fr, tr };

/** What the helper needs to answer in a language: its sentences, the converters' names and the language path. Plain data, so it can go to the browser. */
export function helperContext(code: string): HelperContext {
  const text = HELPER_TEXT[code];
  if (!text) throw new Error(`No helper text for ${code}`);
  const { page, ...rest } = text;
  void page;
  const tools = Object.fromEntries(
    TOOLS.map((t) => {
      const x = toolText(code, t);
      return [t.slug, { name: x.name, summary: x.summary, quick: x.quick }];
    }),
  );
  return { text: rest, tools, prefix: localePath(code, '/').replace(/\/$/, '') };
}

export function helperPage(code: string): HelperPage {
  return HELPER_TEXT[code]!.page;
}
