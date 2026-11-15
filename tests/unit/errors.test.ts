import { describe, expect, it } from 'vitest';
import { localizeError, localizeParseError } from '../../src/lib/errors';
import { OPT_TEXT } from '../../src/i18n/options';
import { checkSize } from '../../src/lib/files';

const es = OPT_TEXT['es']!;
const en = OPT_TEXT['en']!;

describe('localized errors', () => {
  it('leaves English alone', () => {
    expect(localizeError('Anything at all', en, true)).toBe('Anything at all');
    expect(localizeParseError('Unexpected token', en, true)).toBe('Unexpected token');
  });
  it('translates the size error with its numbers', () => {
    let message = '';
    try {
      checkSize({ name: 'a.txt', size: 30 * 1024 * 1024 }, 20, 'text file');
    } catch (e) {
      message = (e as Error).message;
    }
    const text = localizeError(message, es, false);
    expect(text).toContain('30');
    expect(text).toContain('20 MB');
    expect(text).not.toContain('browser tab');
  });
  it('translates known messages and keeps unknown ones', () => {
    expect(localizeError('The picture could not be saved.', es, false)).toBe(es.errSave);
    expect(localizeError('The converter engine could not load (HTTP 503). Check your connection and try again.', es, false)).toContain('HTTP 503');
    expect(localizeError('Something odd', es, false)).toBe('Something odd');
    expect(localizeParseError('Unexpected token', es, false)).toContain('Unexpected token');
  });
});
