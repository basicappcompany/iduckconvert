import { useEffect, useRef, useState } from 'preact/hooks';
import { ENGLISH_CONTEXT, respond, type HelperContext, type HelperReply } from '../lib/helper';

interface Message {
  id: number;
  from: 'bot' | 'me';
  text: string;
  reply?: HelperReply;
  /** How many words of the bot's text are shown so far; the rest types in. */
  shown?: number;
}

function Duck() {
  return (
    <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true" class="shrink-0">
      <g stroke="var(--d-line)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
        <path d="M8 40c0-8 6-12 14-12h6c-2-12 4-20 14-20s14 8 10 16l8 4-8 4c0 12-10 22-24 22-12 0-20-4-20-14z" fill="#ffd23f" />
        <path d="M44 24l11 4-11 4z" fill="#ff8a1f" />
        <path d="M18 40c4 6 14 6 18-2" fill="none" />
      </g>
      <circle cx="43" cy="19" r="2.6" fill="#000" />
    </svg>
  );
}

const reducedMotion = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function ChatHelper({ ctx = ENGLISH_CONTEXT }: { ctx?: HelperContext }) {
  const ui = ctx.text.ui;
  const [messages, setMessages] = useState<Message[]>([{ id: 0, from: 'bot', text: ctx.text.greeting }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const next = useRef(1);
  const focus = useRef<string | undefined>(undefined);
  const scroller = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const timers = useRef<number[]>([]);

  const scrollDown = () => {
    const el = scroller.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reducedMotion() ? 'auto' : 'smooth' });
  };
  useEffect(scrollDown, [messages, busy]);
  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), []);

  /** The bot's words appear a few at a time, like typing; with reduced motion they appear at once. */
  const typeOut = (id: number, total: number, done: () => void) => {
    if (reducedMotion()) {
      setMessages((m) => m.map((x) => (x.id === id ? { ...x, shown: total } : x)));
      done();
      return;
    }
    let n = 0;
    const tick = () => {
      n = Math.min(total, n + 2);
      setMessages((m) => m.map((x) => (x.id === id ? { ...x, shown: n } : x)));
      if (n < total) timers.current.push(window.setTimeout(tick, 28));
      else done();
    };
    tick();
  };

  /** `shown` is what the visitor sees in the conversation when it differs from what is matched. */
  const send = (text: string, shown?: string) => {
    const clean = text.trim();
    if (!clean || busy) return;
    setMessages((m) => [...m, { id: next.current++, from: 'me', text: shown ?? clean }]);
    setInput('');
    setBusy(true);
    const pause = reducedMotion() ? 0 : 420 + Math.min(500, clean.length * 8);
    timers.current.push(
      window.setTimeout(() => {
        const r = respond(clean, ctx, focus.current);
        if (r.focus) focus.current = r.focus;
        const id = next.current++;
        const total = r.text.split(/\s+/).length;
        setMessages((m) => [...m, { id, from: 'bot', text: r.text, reply: r, shown: 0 }]);
        typeOut(id, total, () => {
          setBusy(false);
          field.current?.focus();
        });
      }, pause),
    );
  };

  const reset = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    focus.current = undefined;
    setBusy(false);
    setMessages([{ id: next.current++, from: 'bot', text: ctx.text.greeting }]);
    field.current?.focus();
  };

  const last = messages[messages.length - 1];
  const lastReply = last?.from === 'bot' ? last.reply : undefined;
  const finished = (m: Message) => m.shown === undefined || m.shown >= m.text.split(/\s+/).length;
  const suggestions = !busy && last && (messages.length < 3 ? ctx.text.starters : lastReply?.followups ?? []);

  return (
    <div class="chat-pane flex flex-col">
      <div ref={scroller} class="chat-log grid min-h-0 flex-1 content-start gap-4 overflow-y-auto py-4 pr-1" role="log" aria-live="polite" aria-label={ui.log}>
        {messages.map((m) => {
          const bot = m.from === 'bot';
          const parts = m.text.split(/(\s+)/);
          const count = m.shown === undefined ? Infinity : m.shown;
          let seen = 0;
          const visible = bot
            ? parts
                .map((p) => {
                  if (/^\s+$/.test(p)) return seen < count ? p : '';
                  seen += 1;
                  return seen <= count ? p : '';
                })
                .join('')
            : m.text;
          const done = !bot || finished(m);
          return (
            <div key={m.id} class={`chat-row flex items-end gap-2 ${bot ? 'justify-start' : 'justify-end'}`}>
              {bot && <Duck />}
              <div
                class={`max-w-[88%] rounded-2xl border-2 border-line p-3 ${bot ? 'rounded-bl-sm bg-card' : 'rounded-br-sm bg-duck font-bold text-duckink'}`}
                style={{ boxShadow: '3px 3px 0 0 var(--d-shadow)' }}
              >
                <p class="leading-relaxed [overflow-wrap:anywhere]">{visible}</p>
                {done && m.reply?.answer && (
                  <div class="mt-3 rounded-xl border-2 border-line bg-duck p-3 text-duckink">
                    <p class="text-2xl font-black [overflow-wrap:anywhere]" aria-live="polite">{m.reply.answer.big}</p>
                    {m.reply.answer.small && <p class="mt-1 text-xs font-bold opacity-80">{m.reply.answer.small}</p>}
                  </div>
                )}
                {done && m.reply?.steps && (
                  <ol class="mt-3 grid gap-2">
                    {m.reply.steps.map((s, i) => (
                      <li key={i} class="flex gap-2 text-sm">
                        <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-line bg-duck text-xs font-black text-duckink">{i + 1}</span>
                        <span class="pt-0.5">{s}</span>
                      </li>
                    ))}
                  </ol>
                )}
                {done &&
                  m.reply?.tools.map((t) => (
                    <a key={t.slug} href={t.href} class="card card-link mt-3 block bg-soft p-3" {...(t.href.startsWith('http') ? { rel: 'noopener' } : {})}>
                      <span class="flex items-center gap-2 font-black">
                        <span aria-hidden="true">{t.emoji}</span>
                        {t.name}
                      </span>
                      <span class="mt-1 block text-sm text-muted">{t.summary}</span>
                      <span class="mt-2 inline-block text-sm font-black underline decoration-2 underline-offset-2">{ui.openIt}</span>
                    </a>
                  ))}
                {done && m.reply && m.reply.links.length > 0 && (
                  <div class="mt-3 flex flex-wrap gap-2">
                    {m.reply.links.map((l) => (
                      <a key={l.href} href={l.href} class="btn btn-sm" {...(l.href.startsWith('http') ? { rel: 'noopener' } : {})}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        {busy && last?.from === 'me' && (
          <div class="flex items-end gap-2" aria-label={ui.typing}>
            <Duck />
            <div class="chat-dots rounded-2xl rounded-bl-sm border-2 border-line bg-card px-4 py-3" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
        {suggestions && suggestions.length > 0 && (
          <div class="flex flex-wrap gap-2 pl-10" role="group" aria-label={ui.things}>
            {suggestions.map((s) => (
              <button key={s} type="button" class="chip !rounded-2xl text-left" onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      <form
        class="flex flex-wrap items-center gap-3 border-t-2 border-line/20 pt-3"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <label class="sr-only" for="helper-input">
          {ui.describe}
        </label>
        <input
          id="helper-input"
          ref={field}
          type="text"
          class="input min-w-0 flex-1 basis-full !rounded-full px-5 min-[430px]:basis-0"
          placeholder={ui.placeholder}
          autocomplete="off"
          enterkeyhint="send"
          value={input}
          onInput={(e) => setInput((e.currentTarget as HTMLInputElement).value)}
        />
        <button type="submit" class="btn btn-primary w-full min-[430px]:w-auto" disabled={!input.trim() || busy}>
          {ui.send}
        </button>
        {messages.length > 1 && (
          <button type="button" class="btn w-full min-[430px]:w-auto" onClick={reset}>
            {ui.clear}
          </button>
        )}
      </form>
      <p class="mt-2 text-center text-sm text-muted">{ui.footnote}</p>
    </div>
  );
}
