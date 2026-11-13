/**
 * The "Community" pages in the sidebar. Each slug is a page under src/pages;
 * a unit test fails if the two lists disagree. Pages with little to find in a search engine
 * (forms, settings) are marked not indexable: they get a noindex tag and stay out of the sitemap.
 */
export interface CommunityPage {
  slug: string;
  name: string;
  emoji: string;
  summary: string;
  indexable: boolean;
}

export const COMMUNITY: readonly CommunityPage[] = [
  { slug: 'roadmap', name: 'Roadmap', emoji: '🗺️', summary: 'What is live and what we are thinking about next.', indexable: true },
  { slug: 'request', name: 'Request a feature', emoji: '💡', summary: 'Tell us about a tool or improvement you would like.', indexable: false },
  { slug: 'feedback', name: 'Send feedback', emoji: '📮', summary: 'Something broke, could be better, or worked great.', indexable: false },
  { slug: 'donate', name: 'Donate', emoji: '💛', summary: 'Tips-only support. No ads, no paywall.', indexable: true },
  { slug: 'settings', name: 'Settings', emoji: '⚙️', summary: 'Theme, saved data and keyboard shortcuts.', indexable: false },
  { slug: 'about', name: 'About', emoji: '🦆', summary: 'Who runs iDuckConvert, what it costs and how it is built.', indexable: true },
];

export function communityPath(slug: string): string {
  return `/${slug}/`;
}

/** URL paths that must stay out of search results and the sitemap. */
export const NOINDEX_PATHS: readonly string[] = [...COMMUNITY.filter((p) => !p.indexable).map((p) => communityPath(p.slug)), '/chat/'];

/** Pages that are neither a tool nor a community page: home, 404, the landing-page template, the hub and the legal pages. */
export const OTHER_PAGES: readonly string[] = ['index', '404', '[slug]', 'converters', 'privacy', 'terms', 'chat', 'how-it-works'];
