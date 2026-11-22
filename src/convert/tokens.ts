/**
 * A rough token count for AI prompts. Each model has its own vocabulary, so an exact count needs that model's own
 * tokenizer. The usual rules of thumb for English are one token per 4 characters and 3 tokens per 4 words, so we
 * work out both and report the middle, saying plainly that it is an estimate.
 */
export interface TokenEstimate {
  chars: number;
  words: number;
  lines: number;
  /** The estimate from the number of characters (characters divided by 4). */
  byChars: number;
  /** The estimate from the number of words (words divided by 0.75). */
  byWords: number;
  /** The middle of the two, which is what the page headlines. */
  tokens: number;
}

export function estimateTokens(text: string): TokenEstimate {
  const chars = [...text].length;
  const trimmed = text.trim();
  const words = trimmed === '' ? 0 : trimmed.split(/\s+/).length;
  const lines = text === '' ? 0 : text.split(/\r\n|\r|\n/).length;
  const byChars = Math.ceil(chars / 4);
  const byWords = Math.ceil(words / 0.75);
  return { chars, words, lines, byChars, byWords, tokens: Math.round((byChars + byWords) / 2) };
}
