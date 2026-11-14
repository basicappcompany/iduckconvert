import type { HelperContext } from '../../lib/helper';

/** The heading and meta text of the helper page in a language. */
export interface HelperPage {
  title: string;
  description: string;
  headingBefore: string;
  /** The highlighted word of the heading. */
  headingMark: string;
  headingAfter: string;
  sub: string;
}

/** Everything the helper says in one language, plus the page text around it. */
export type HelperText = HelperContext['text'] & { page: HelperPage };
