import { useMemo, useState } from 'preact/hooks';
import Chips from './Chips';
import { Field } from './OptionsPanel';
import { copyText } from '../lib/clipboard';
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

/**
 * Feedback and feature requests. "Send" opens the visitor's own mail app with the message
 * ready; nothing is sent until they press send there. "Copy instead" always works, for people
 * with no mail app set up.
 */
export default function FeedbackForm(props: Props) {
  const isRequest = props.mode === 'request';
  const [feedbackKind, setFeedbackKind] = useState<FeedbackKind>('better');
  const [requestKind, setRequestKind] = useState<RequestKind>('new');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ kind: 'info' | 'error'; text: string } | null>(null);
  const [touched, setTouched] = useState(false);

  const problem = isRequest ? checkRequest(title, message, email) : checkFeedback(message, email);

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
      setStatus({ kind: 'error', text: problem });
      return;
    }
    setStatus({
      kind: 'info',
      text: mail.truncated
        ? `Your email app should open, but this message is long so it was shortened there. Use "Copy instead" to send the full text to ${FEEDBACK_EMAIL}.`
        : `Your email app should open with the message ready. If nothing opened, use "Copy instead" and paste it into an email to ${FEEDBACK_EMAIL}.`,
    });
  };

  const copy = async () => {
    setTouched(true);
    if (problem) {
      setStatus({ kind: 'error', text: problem });
      return;
    }
    const ok = await copyText(plainText(draft));
    setStatus(
      ok
        ? { kind: 'info', text: `Copied. Paste it into an email to ${FEEDBACK_EMAIL}.` }
        : { kind: 'error', text: 'Could not copy automatically. Open "See the message" below, select the text and copy it yourself.' },
    );
  };

  return (
    <form class="card grid gap-5 p-5" onSubmit={(e) => e.preventDefault()} noValidate>
      <div class="grid gap-2">
        <span class="text-sm font-bold" id="kind-label">
          {isRequest ? 'What do you want?' : 'What kind of message is it?'}
        </span>
        {isRequest ? (
          <Chips label="What do you want?" options={REQUEST_KINDS} value={requestKind} onChange={setRequestKind} />
        ) : (
          <Chips label="What kind of message is it?" options={FEEDBACK_KINDS} value={feedbackKind} onChange={setFeedbackKind} />
        )}
      </div>

      {isRequest && (
        <Field id="fb-title" label="Short title">
          <input
            id="fb-title"
            class="input"
            maxLength={120}
            placeholder="e.g. Add a watermark tool"
            value={title}
            onInput={(e) => setTitle(e.currentTarget.value)}
          />
        </Field>
      )}

      <Field
        id="fb-message"
        label={isRequest ? 'What would you use it for?' : 'Your message'}
        hint={isRequest ? 'A real example makes it much easier to build the right thing.' : 'The more detail, the easier it is to help.'}
      >
        <textarea
          id="fb-message"
          class="input min-h-32"
          maxLength={4000}
          placeholder={isRequest ? 'I often need to...' : 'Write here...'}
          value={message}
          onInput={(e) => setMessage(e.currentTarget.value)}
        />
      </Field>

      <Field id="fb-email" label="Your email (optional)" hint="Only so we can reply. It goes in the message you send, and nowhere else.">
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
          {isRequest ? 'Send request' : 'Send feedback'}
        </a>
        <button type="button" class="btn btn-lg" onClick={copy}>
          {isRequest ? 'Copy instead' : 'Copy message instead'}
        </button>
      </div>

      <p role={status?.kind === 'error' ? 'alert' : 'status'} class={`text-sm ${status?.kind === 'error' ? 'font-bold text-danger' : ''}`} data-testid="status">
        {status?.text ?? (touched && problem ? problem : '')}
      </p>

      <details class="text-sm">
        <summary class="cursor-pointer font-bold">See the message</summary>
        <p class="mt-2 text-muted">This is exactly what your email app will open with. Nothing is sent until you press send there.</p>
        <textarea class="input mt-2 min-h-40 font-mono text-xs" readOnly aria-label="The message that will be sent" value={plainText(draft)} />
      </details>
    </form>
  );
}
