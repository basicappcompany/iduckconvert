/**
 * Feedback and feature requests go out as an email the visitor sends from their own mail app
 * (a mailto: link), with a "copy instead" fallback. There is no server and no stored data.
 */

/**
 * The only two addresses the site mentions or writes to. Both are Cloudflare Email Routing
 * addresses on iduckconvert.com that forward to the business inbox (receive only, no catch-all).
 * General questions go to CONTACT_EMAIL; the feedback and request forms go to FEEDBACK_EMAIL.
 */
export const CONTACT_EMAIL = 'hello@iduckconvert.com';
export const FEEDBACK_EMAIL = 'feedback@iduckconvert.com';

export const SITE_URL = 'https://iduckconvert.com';

/** Mail apps and browsers cut off very long mailto links, so stay well under the common 2000. */
export const MAILTO_MAX_LENGTH = 1800;

export interface Draft {
  to: string;
  subject: string;
  body: string;
}

export interface Kind<Id extends string> {
  id: Id;
  emoji: string;
  label: string;
}

export type FeedbackKind = 'broke' | 'better' | 'great' | 'other';
export type RequestKind = 'new' | 'improve';

export const FEEDBACK_KINDS: readonly Kind<FeedbackKind>[] = [
  { id: 'broke', emoji: '🐞', label: 'Something broke' },
  { id: 'better', emoji: '✨', label: 'Could be better' },
  { id: 'great', emoji: '👏', label: 'It worked great' },
  { id: 'other', emoji: '💭', label: 'Something else' },
];

export const REQUEST_KINDS: readonly Kind<RequestKind>[] = [
  { id: 'new', emoji: '✨', label: 'A new tool' },
  { id: 'improve', emoji: '🔧', label: 'Improve a tool' },
];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns a plain-words problem, or null if the optional reply address is fine (or empty). */
export function checkEmail(email: string): string | null {
  const e = email.trim();
  return e === '' || EMAIL.test(e) ? null : 'That email address does not look right. Fix it or leave it empty.';
}

export function checkFeedback(message: string, email: string): string | null {
  if (message.trim() === '') return 'Write a message first.';
  return checkEmail(email);
}

export function checkRequest(title: string, details: string, email: string): string | null {
  if (title.trim() === '') return 'Give your idea a short title.';
  if (details.trim() === '') return 'Say what you would use it for.';
  return checkEmail(email);
}

const label = <Id extends string>(kinds: readonly Kind<Id>[], id: Id): string => kinds.find((k) => k.id === id)?.label ?? id;

function footer(lines: (string | null)[]): string {
  return `\n\n---\n${lines.filter((l): l is string => l !== null).join('\n')}`;
}

export function composeFeedback(input: {
  kind: FeedbackKind;
  message: string;
  email: string;
  /** Address of the page the visitor was on. */
  page: string;
  /** Only sent for "something broke", where it helps to find the problem. */
  userAgent?: string;
}): Draft {
  const email = input.email.trim();
  return {
    to: FEEDBACK_EMAIL,
    subject: `iDuckConvert feedback: ${label(FEEDBACK_KINDS, input.kind)}`,
    body:
      input.message.trim() +
      footer([
        `Page: ${input.page}`,
        input.kind === 'broke' && input.userAgent ? `Browser: ${input.userAgent}` : null,
        email ? `Reply to: ${email}` : null,
      ]),
  };
}

export function composeRequest(input: { kind: RequestKind; title: string; details: string; email: string }): Draft {
  const email = input.email.trim();
  const title = input.title.trim().replace(/\s+/g, ' ').slice(0, 80);
  return {
    to: FEEDBACK_EMAIL,
    subject: `iDuckConvert request: ${title}`,
    body: input.details.trim() + footer([`Kind: ${label(REQUEST_KINDS, input.kind)}`, email ? `Reply to: ${email}` : null]),
  };
}

/**
 * A mailto: link. If the message is too long for one, the body is cut and `truncated` is true,
 * so the page can tell the visitor to use "copy instead" for the full text.
 */
export function buildMailto(draft: Draft): { href: string; truncated: boolean } {
  const make = (body: string) =>
    `mailto:${draft.to}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(body.replace(/\r?\n/g, '\r\n'))}`;

  let href = make(draft.body);
  if (href.length <= MAILTO_MAX_LENGTH) return { href, truncated: false };

  // Cut the body until the whole link fits. Encoding can make a character several times longer, so
  // shrink in steps. Spread to characters so an emoji is never cut in half.
  let chars = Array.from(draft.body);
  while (chars.length > 0 && href.length > MAILTO_MAX_LENGTH) {
    chars = chars.slice(0, Math.max(0, chars.length - Math.max(10, Math.ceil(chars.length * 0.1))));
    href = make(chars.join('').trimEnd() + '\n[cut: use Copy instead for the full message]');
  }
  return { href, truncated: true };
}

/** The same message as plain text, for the copy button. */
export function plainText(draft: Draft): string {
  return `To: ${draft.to}\nSubject: ${draft.subject}\n\n${draft.body}`;
}
