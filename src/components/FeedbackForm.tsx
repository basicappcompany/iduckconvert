import { useMemo, useState } from 'preact/hooks';
import Chips from './Chips';
import { Field } from './OptionsPanel';
import { copyText } from '../lib/clipboard';
import { fill, useOpts, type OptKey } from '../i18n/options';
import {
  FEEDBACK_EMAIL,
  FEEDBACK_KINDS,
  REQUEST_KINDS,
  buildMailto,
  checkFeedback,
  checkRequest,
  composeFeedback,
  composeRequest,
  plainText,
  type FeedbackKind,
  type RequestKind,
} from '../lib/contact';

type Props = { mode: 'feedback' } | { mode: 'request' };

/** The words for each kind of message, and for each problem the checks in lib/contact can report (they are written in English there). */
const KIND_KEYS: Record<string, OptKey> = { broke: 'kBroke', better: 'kBetter', great: 'kGreat', other: 'kOther', new: 'kNew', improve: 'kImprove' };
const PROBLEM_KEYS: Record<string, OptKey> = {
  'That email address does not look right. Fix it or leave it empty.': 'fBadEmail',
  'Write a message first.': 'fNeedMsg',
  'Give your idea a short title.': 'fNeedTitle',
  'Say what you would use it for.': 'fNeedUse',
};

/**
 * Feedback and feature requests. "Send" opens the visitor's own mail app with the message
 * ready; nothing is sent until they press send there. "Copy instead" always works, for people
 * with no mail app set up.
 */
export default function FeedbackForm(props: Props) {
  const o = useOpts();
  const isRequest = props.mode === 'request';
  const kinds = <Id extends string>(list: readonly { id: Id; emoji: string; label: string }[]) => list.map((k) => ({ ...k, label: o[KIND_KEYS[k.id] ?? 'kOther'] }));
  const say = (text: string | null): string => (text ? (PROBLEM_KEYS[text] ? o[PROBLEM_KEYS[text]!] : text) : '');
  const [feedbackKind, setFeedbackKind] = useState<FeedbackKind>('better');
  const [requestKind, setRequestKind] = useState<RequestKind>('new');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ kind: 'info' | 'error'; text: string } | null>(null);
  const [touched, setTouched] = useState(false);

  const problem = isRequest ? checkRequest(title, message, email) : checkFeedback(message, email);
  const problemText = say(problem);

  const draft = useMemo(() => {
    const page = typeof location === 'undefined' ? '' : `${location.origin}${location.pathname}`;
    const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent;
    return isRequest
      ? composeRequest({ kind: requestKind, title, details: message, email })
      : composeFeedback({ kind: feedbackKind, message, email, page, userAgent });
  }, [isRequest, requestKind, feedbackKind, title, message, email]);

  const mail = useMemo(() => buildMailto(draft), [draft]);

  const send = (e: MouseEvent) => {
    setTouched(true);
    if (problem) {
      e.preventDefault();
      setStatus({ kind: 'error', text: problemText });
      return;
    }
    setStatus({
      kind: 'info',
      text: mail.truncated
        ? fill(o.fLong, { email: FEEDBACK_EMAIL })
        : fill(o.fOk, { email: FEEDBACK_EMAIL }),
    });
  };

  const copy = async () => {
    setTouched(true);
    if (problem) {
      setStatus({ kind: 'error', text: problemText });
      return;
    }
    const ok = await copyText(plainText(draft));
    setStatus(
      ok
        ? { kind: 'info', text: fill(o.fCopied, { email: FEEDBACK_EMAIL }) }
        : { kind: 'error', text: o.fCopyFail },
    );
  };

  return (
    <form class="card grid gap-5 p-5" onSubmit={(e) => e.preventDefault()} noValidate>
      <div class="grid gap-2">
        <span class="text-sm font-bold" id="kind-label">
          {isRequest ? o.kindReq : o.kindFb}
        </span>
        {isRequest ? (
          <Chips label={o.kindReq} options={kinds(REQUEST_KINDS)} value={requestKind} onChange={setRequestKind} />
        ) : (
          <Chips label={o.kindFb} options={kinds(FEEDBACK_KINDS)} value={feedbackKind} onChange={setFeedbackKind} />
        )}
      </div>

      {isRequest && (
        <Field id="fb-title" label={o.fShortTitle}>
          <input
            id="fb-title"
            class="input"
            maxLength={120}
            placeholder={o.fTitlePh}
            value={title}
            onInput={(e) => setTitle(e.currentTarget.value)}
          />
        </Field>
      )}

      <Field
        id="fb-message"
        label={isRequest ? o.fUseFor : o.fMessage}
        hint={isRequest ? o.fHintReq : o.fHintMsg}
      >
        <textarea
          id="fb-message"
          class="input min-h-32"
          maxLength={4000}
          placeholder={isRequest ? o.fPhReq : o.fPhMsg}
          value={message}
          onInput={(e) => setMessage(e.currentTarget.value)}
        />
      </Field>

      <Field id="fb-email" label={o.fEmail} hint={o.fEmailHint}>
        <input
          id="fb-email"
          type="email"
          class="input"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onInput={(e) => setEmail(e.currentTarget.value)}
        />
      </Field>

      <div class="flex flex-wrap gap-3">
        <a
          class="btn btn-primary btn-lg"
          href={problem ? '#' : mail.href}
          aria-disabled={problem ? 'true' : 'false'}
          data-testid="send"
          onClick={send}
        >
          <span aria-hidden="true">{isRequest ? '💡' : '📮'}</span>
          {isRequest ? o.fSendReq : o.fSendFb}
        </a>
        <button type="button" class="btn btn-lg" onClick={copy}>
          {o.fCopy}
        </button>
      </div>

      <p role={status?.kind === 'error' ? 'alert' : 'status'} class={`text-sm ${status?.kind === 'error' ? 'font-bold text-danger' : ''}`} data-testid="status">
        {status?.text ?? (touched && problem ? problemText : '')}
      </p>

      <details class="text-sm">
        <summary class="cursor-pointer font-bold">{o.fSee}</summary>
        <p class="mt-2 text-muted">{o.fSeeNote}</p>
        <textarea class="input mt-2 min-h-40 font-mono text-xs" readOnly aria-label={o.fSeeAria} value={plainText(draft)} />
      </details>
    </form>
  );
}
