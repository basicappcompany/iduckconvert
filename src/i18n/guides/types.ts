/** One how-to guide in one language. The slug, category, tools and dates come from the English guide (src/lib/guides.ts). */
export interface GuideText {
  title: string;
  description: string;
  intro: string;
  steps: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
}

/** Translated guides keyed by the English slug. */
export type GuideSet = Record<string, GuideText>;
