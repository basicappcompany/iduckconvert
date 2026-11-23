/** The developer tools with no file conversion: Unix timestamp, UUIDs, hashes and the text chunker. */
import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { Field } from '../components/OptionsPanel';
import { CopyButton } from '../components/CopyButton';
import { fill, useOpts } from '../i18n/options';
import { useLang } from '../i18n/ui';
import { formatBytes } from '../lib/files';
import { chunkText, describeTimestamp, hashAll, makeUuids, matchingHashes, parseTimestamp, type HashResult, type TimestampUnit, type UuidVersion } from '../convert/devtools';

// ---------- Unix timestamp ----------
export function TimestampTool() {
  const o = useOpts();
  const lang = useLang();
  const [text, setText] = useState('');
  useEffect(() => {
    setText(String(Math.floor(Date.now() / 1000)));
  }, []);
  const parsed = parseTimestamp(text);
  const view = parsed ? describeTimestamp(parsed.ms, lang) : null;
  const read: Record<TimestampUnit, string> = {
    seconds: o.tsReadSeconds,
    milliseconds: o.tsReadMillis,
    microseconds: o.tsReadMicros,
    nanoseconds: o.tsReadNanos,
    date: o.tsReadDate,
  };
  const rows = view
    ? [
        [o.tsSeconds, view.seconds],
        [o.tsMillis, view.milliseconds],
        [o.tsIso, view.iso],
        [o.tsLocal, view.local],
        [o.tsRelative, view.relative],
      ]
    : [];
  return (
    <div class="grid gap-5">
      <div class="card grid gap-3 p-5">
        <Field id="ts-in" label={o.tsInput} hint={o.tsHint}>
          <input id="ts-in" class="input font-mono text-xl font-black" spellcheck={false} autocomplete="off" value={text} onInput={(e) => setText(e.currentTarget.value)} />
        </Field>
        <div>
          <button type="button" class="btn" onClick={() => setText(String(Math.floor(Date.now() / 1000)))}>
            {o.tsNow}
          </button>
        </div>
      </div>
      {text.trim() !== '' && !parsed && (
        <p role="alert" class="text-sm font-bold text-danger">
          {o.tsBad}
        </p>
      )}
      {parsed && <p class="text-sm text-muted" id="ts-read">{read[parsed.unit]}</p>}
      {rows.length > 0 && (
        <ul class="grid gap-2" id="ts-out">
          {rows.map(([label, value]) => (
            <li class="card flex items-center justify-between gap-3 p-3">
              <div class="min-w-0">
                <p class="text-xs text-muted">{label}</p>
                <p class="font-mono font-black [overflow-wrap:anywhere]">{value}</p>
              </div>
              <CopyButton text={value!} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ---------- UUID generator ----------
export function UuidTool() {
  const o = useOpts();
  const [version, setVersion] = useState<UuidVersion>('v4');
  const [count, setCount] = useState('5');
  const [upper, setUpper] = useState(false);
  const [hyphens, setHyphens] = useState(true);
  const [seed, setSeed] = useState(0);
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => {
    setIds(makeUuids(version, Number(count) || 1, { upper, hyphens }));
  }, [version, count, upper, hyphens, seed]);
  const joined = ids.join('\n');
  return (
    <div class="grid gap-5">
      <div class="card grid gap-4 p-5 sm:grid-cols-2">
        <Field id="uuid-version" label={o.uuidVersion}>
          <select id="uuid-version" class="input" value={version} onChange={(e) => setVersion(e.currentTarget.value as UuidVersion)}>
            <option value="v4">{o.uuidV4}</option>
            <option value="v7">{o.uuidV7}</option>
          </select>
        </Field>
        <Field id="uuid-count" label={o.uuidCount}>
          <input id="uuid-count" class="input" type="number" min="1" max="1000" inputMode="numeric" value={count} onInput={(e) => setCount(e.currentTarget.value)} />
        </Field>
        <label class="flex items-center gap-2 text-sm font-bold">
          <input type="checkbox" checked={upper} onChange={(e) => setUpper(e.currentTarget.checked)} />
          {o.uuidUpper}
        </label>
        <label class="flex items-center gap-2 text-sm font-bold">
          <input type="checkbox" checked={hyphens} onChange={(e) => setHyphens(e.currentTarget.checked)} />
          {o.uuidHyphens}
        </label>
      </div>
      <Field id="uuid-out" label={o.uuidOut}>
        <textarea id="uuid-out" class="input font-mono text-sm" readOnly spellcheck={false} rows={Math.min(Math.max(ids.length, 2), 12)} value={joined} />
      </Field>
      <div class="flex flex-wrap gap-3">
        <button type="button" class="btn btn-primary btn-lg" onClick={() => setSeed(seed + 1)}>
          {o.uuidMake}
        </button>
        <CopyButton text={joined} large />
      </div>
      <p class="text-sm text-muted">{o.uuidNote}</p>
    </div>
  );
}

// ---------- hash generator ----------
const MAX_HASH_MB = 300;

export function HashTool() {
  const o = useOpts();
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [results, setResults] = useState<HashResult[]>([]);
  const [error, setError] = useState('');
  const [given, setGiven] = useState('');
  const picker = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let current = true;
    if (!file && text === '') {
      setResults([]);
      return;
    }
    const timer = setTimeout(
      () => {
        void (async () => {
          try {
            const bytes = file ? new Uint8Array(await file.arrayBuffer()) : new TextEncoder().encode(text);
            const all = await hashAll(bytes);
            if (current) {
              setResults(all);
              setError('');
            }
          } catch {
            if (current) {
              setResults([]);
              setError(o.convertFailed);
            }
          }
        })();
      },
      file ? 0 : 150,
    );
    return () => {
      current = false;
      clearTimeout(timer);
    };
  }, [text, file]);

  const choose = (picked: File | undefined) => {
    if (!picked) return;
    if (picked.size > MAX_HASH_MB * 1024 * 1024) {
      setError(o.fileTooBig);
      return;
    }
    setError('');
    setText('');
    setFile(picked);
  };
  const matches = matchingHashes(results, given);
  return (
    <div class="grid gap-5">
      <div class="grid gap-3">
        <Field id="hash-in" label={o.yourText}>
          <textarea
            id="hash-in"
            class="input min-h-40 font-mono text-sm"
            spellcheck={false}
            value={text}
            placeholder={o.typeHere}
            onInput={(e) => {
              setFile(null);
              setText(e.currentTarget.value);
            }}
          />
        </Field>
        <div class="flex flex-wrap items-center gap-3">
          <button type="button" class="btn" onClick={() => picker.current?.click()}>
            {o.chooseFile}
          </button>
          {(file || text) && (
            <button
              type="button"
              class="btn"
              onClick={() => {
                setFile(null);
                setText('');
                setGiven('');
                setError('');
                if (picker.current) picker.current.value = '';
              }}
            >
              {o.clear}
            </button>
          )}
          {file && <span class="text-sm font-bold [overflow-wrap:anywhere]">{fill(o.hashOfFile, { name: `${file.name} (${formatBytes(file.size)})` })}</span>}
          <input ref={picker} type="file" class="sr-only" tabIndex={-1} aria-label={o.chooseAria} onChange={(e) => choose(e.currentTarget.files?.[0])} />
        </div>
      </div>
      {error && (
        <p role="alert" class="text-sm font-bold text-danger">
          {error}
        </p>
      )}
      {results.length === 0 ? (
        <p class="text-sm text-muted">{o.hashWaiting}</p>
      ) : (
        <ul class="grid gap-2" id="hash-out">
          {results.map((r) => (
            <li class={`card flex items-center justify-between gap-3 p-3 ${matches.includes(r) ? 'bg-duck text-duckink' : ''}`} data-match={matches.includes(r) ? 'true' : 'false'}>
              <div class="min-w-0">
                <p class="text-xs font-bold">{r.label}</p>
                <p class="font-mono text-sm font-black [overflow-wrap:anywhere]" data-hash={r.id}>
                  {r.hex}
                </p>
              </div>
              <CopyButton text={r.hex} />
            </li>
          ))}
        </ul>
      )}
      <div class="grid gap-2">
        <Field id="hash-given" label={o.hashCompare}>
          <input id="hash-given" class="input font-mono text-sm" spellcheck={false} autocomplete="off" value={given} placeholder={o.hashPaste} onInput={(e) => setGiven(e.currentTarget.value)} />
        </Field>
        {results.length > 0 && given.trim() !== '' && (
          <p role="status" class={`text-sm font-bold ${matches.length > 0 ? 'text-ok' : 'text-danger'}`} id="hash-compare">
            {matches.length > 0 ? fill(o.hashMatch, { name: matches.map((m) => m.label).join(', ') }) : o.hashNoMatch}
          </p>
        )}
      </div>
      <p class="text-sm text-muted">{o.hashNote}</p>
    </div>
  );
}

// ---------- text chunker ----------
const SIZES = [500, 1000, 2000, 4000, 8000];
const OVERLAPS = [0, 50, 100, 200];

export function ChunkTool() {
  const o = useOpts();
  const lang = useLang();
  const [text, setText] = useState('');
  const [size, setSize] = useState(1000);
  const [overlap, setOverlap] = useState(100);
  const parts = useMemo(() => chunkText(text, size, overlap), [text, size, overlap]);
  const total = parts.reduce((sum, p) => sum + p.tokens, 0);
  return (
    <div class="grid gap-5">
      <div class="card grid gap-4 p-5 sm:grid-cols-2">
        <Field id="chunk-size" label={o.partSize}>
          <select id="chunk-size" class="input" value={size} onChange={(e) => setSize(Number(e.currentTarget.value))}>
            {SIZES.map((n) => (
              <option value={n}>{fill(o.chunkTokens, { n })}</option>
            ))}
          </select>
        </Field>
        <Field id="chunk-overlap" label={o.chunkOverlap}>
          <select id="chunk-overlap" class="input" value={overlap} onChange={(e) => setOverlap(Number(e.currentTarget.value))}>
            {OVERLAPS.map((n) => (
              <option value={n}>{n === 0 ? o.chunkNoOverlap : fill(o.chunkTokens, { n })}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field id="chunk-in" label={o.yourText}>
        <textarea id="chunk-in" class="input min-h-56" maxLength={2_000_000} value={text} onInput={(e) => setText(e.currentTarget.value)} placeholder={o.typeHere} />
      </Field>
      {parts.length > 0 && (
        <div class="grid gap-3">
          <p class="font-black" role="status" aria-live="polite" id="chunk-summary">
            {fill(o.chunkSummary, { parts: parts.length, tokens: total.toLocaleString(lang) })}
          </p>
          <ol class="grid gap-3" id="chunk-out">
            {parts.map((p, i) => (
              <li class="card grid gap-2 p-3">
                <div class="flex items-center justify-between gap-3">
                  <p class="text-sm font-bold">{fill(o.chunkPart, { i: i + 1, n: parts.length, t: p.tokens })}</p>
                  <CopyButton text={p.text} />
                </div>
                <pre class="max-h-56 overflow-auto whitespace-pre-wrap text-sm [overflow-wrap:anywhere]">{p.text}</pre>
              </li>
            ))}
          </ol>
        </div>
      )}
      <p class="text-sm text-muted">{o.chunkNote}</p>
    </div>
  );
}
