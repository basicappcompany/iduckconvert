/**
 * Small inline flags for the language menu. Emoji flags show as two letters on Windows, so these are
 * simple SVGs (30x20) that look the same everywhere. A flag stands for the country where most readers
 * of the language are, as a recognisable marker next to the language's own name.
 */
const FLAGS: Record<string, string> = {
  // United States (simplified: stripes and a blue canton)
  en: '<rect width="30" height="20" fill="#fff"/><path d="M0 1.5h30M0 4.5h30M0 7.5h30M0 10.5h30M0 13.5h30M0 16.5h30M0 19h30" stroke="#B22234" stroke-width="1.5"/><rect width="13" height="10.5" fill="#3C3B6E"/><circle cx="3" cy="2.6" r="0.7" fill="#fff"/><circle cx="6.5" cy="2.6" r="0.7" fill="#fff"/><circle cx="10" cy="2.6" r="0.7" fill="#fff"/><circle cx="4.7" cy="5.2" r="0.7" fill="#fff"/><circle cx="8.3" cy="5.2" r="0.7" fill="#fff"/><circle cx="3" cy="7.8" r="0.7" fill="#fff"/><circle cx="6.5" cy="7.8" r="0.7" fill="#fff"/><circle cx="10" cy="7.8" r="0.7" fill="#fff"/>',
  // India
  hi: '<rect width="30" height="20" fill="#fff"/><rect width="30" height="6.7" fill="#FF9933"/><rect y="13.3" width="30" height="6.7" fill="#138808"/><circle cx="15" cy="10" r="2.6" fill="none" stroke="#000080" stroke-width="0.8"/>',
  // Bangladesh
  bn: '<rect width="30" height="20" fill="#006A4E"/><circle cx="13" cy="10" r="5.6" fill="#F42A41"/>',
  // Brazil
  'pt-BR': '<rect width="30" height="20" fill="#009C3B"/><path d="M15 2 27 10 15 18 3 10Z" fill="#FFDF00"/><circle cx="15" cy="10" r="4" fill="#002776"/>',
  // Indonesia
  id: '<rect width="30" height="10" fill="#E70011"/><rect y="10" width="30" height="10" fill="#fff"/>',
  // Russia
  ru: '<rect width="30" height="20" fill="#fff"/><rect y="6.7" width="30" height="6.7" fill="#0039A6"/><rect y="13.3" width="30" height="6.7" fill="#D52B1E"/>',
  // Germany
  de: '<rect width="30" height="6.7" fill="#000"/><rect y="6.7" width="30" height="6.7" fill="#DD0000"/><rect y="13.3" width="30" height="6.7" fill="#FFCE00"/>',
  // Spain
  es: '<rect width="30" height="20" fill="#AA151B"/><rect y="5" width="30" height="10" fill="#F1BF00"/>',
  // France
  fr: '<rect width="30" height="20" fill="#ED2939"/><rect width="20" height="20" fill="#fff"/><rect width="10" height="20" fill="#002395"/>',
  // Turkey
  tr: '<rect width="30" height="20" fill="#E30A17"/><circle cx="11" cy="10" r="5" fill="#fff"/><circle cx="12.6" cy="10" r="4" fill="#E30A17"/><path d="m18 10 4.6-1.5-2.8 3.9v-4.8l2.8 3.9Z" fill="#fff"/>',
};

/** The SVG markup of a language's flag (empty for an unknown code). */
export function flagSvg(code: string): string {
  const body = FLAGS[code];
  if (!body) return '';
  return `<svg class="flag" viewBox="0 0 30 20" width="21" height="14" aria-hidden="true" focusable="false">${body}</svg>`;
}
