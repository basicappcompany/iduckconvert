/** The converters with no file: units, number bases, words, Roman numerals, text case, colours, time zones, date formats. */
import { useMemo, useState } from 'preact/hooks';
import { Field } from '../components/OptionsPanel';
import { copyText } from '../lib/clipboard';
import { fill, useOpts } from '../i18n/options';
import { useLang } from '../i18n/ui';
import { numberToWordsIn } from '../convert/words-i18n';
import { useNames } from '../i18n/names';
import { UNIT_SETS, convertUnit, formatNumber } from '../convert/units';
import { CASES, formatBase, fromRoman, parseBase, parseHex, parseHsl, parseRgb, rgbToHsl, toHex, toRoman, type Rgb, type WordStyle } from '../convert/numbers';
import { CITIES, DATE_FORMATS, compareZones, parseDateInput, timeInZone, wallTimeToInstant } from '../convert/time';

function CopyButton({ text }: { text: string }) {
  const o = useOpts();
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      class="btn btn-sm"
      disabled={!text}
      onClick={() =>
        void copyText(text).then(() => {
          setDone(true);
          setTimeout(() => setDone(false), 1500);
        })
      }
    >
      {done ? o.copied : o.copy}
    </button>
  );
}

// ---------- units ----------
export function UnitsTool({ units, from: presetFrom, to: presetTo }: { units: string; from?: string; to?: string }) {
  const o = useOpts();
  const nm = useNames();
  const set = UNIT_SETS[units]!;
  const uname = (u: { id: string; name: string }) => nm(`unit.${units}.${u.id}`, u.name);
  const [value, setValue] = useState('1');
  const [from, setFrom] = useState(presetFrom ?? set.defaultFrom);
  const [to, setTo] = useState(presetTo ?? set.defaultTo);
  const n = Number(value.replace(/,/g, ''));
  const result = value.trim() === '' ? NaN : convertUnit(set, from, to, n);
  const fromUnit = set.units.find((u) => u.id === from)!;
  const toUnit = set.units.find((u) => u.id === to)!;
  const all = useMemo(() => set.units.map((u) => ({ unit: u, value: convertUnit(set, from, u.id, n) })), [set, from, n]);

  return (
    <div class="grid gap-5">
      <div class="card grid gap-4 p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
        <div class="grid gap-3">
          <Field id="u-value" label={o.value}>
            <input id="u-value" class="input text-xl font-black" inputMode="decimal" value={value} onInput={(e) => setValue(e.currentTarget.value)} />
          </Field>
          <Field id="u-from" label={o.from}>
            <select id="u-from" class="input" value={from} onChange={(e) => setFrom(e.currentTarget.value)}>
              {set.units.map((u) => (
                <option value={u.id}>{uname(u)} ({u.symbol})</option>
              ))}
            </select>
          </Field>
        </div>
        <button type="button" class="btn mx-auto" aria-label={o.swapUnits} onClick={() => { setFrom(to); setTo(from); }}>
          ⇄
        </button>
        <div class="grid gap-3">
          <Field id="u-result" label={o.result}>
            <output id="u-result" class="input flex items-center text-xl font-black" aria-live="polite">{formatNumber(result)}</output>
          </Field>
          <Field id="u-to" label={o.to}>
            <select id="u-to" class="input" value={to} onChange={(e) => setTo(e.currentTarget.value)}>
              {set.units.map((u) => (
                <option value={u.id}>{uname(u)} ({u.symbol})</option>
              ))}
            </select>
          </Field>
        </div>
      </div>
      {Number.isFinite(result) && (
        <p class="text-lg font-bold">
          {formatNumber(n)} {fromUnit.symbol} = {formatNumber(result)} {toUnit.symbol}
        </p>
      )}
      {set.note && <p class="card p-4 text-sm font-bold">{nm(`note.${units}`, set.note)}</p>}
      <details class="card p-4">
        <summary class="cursor-pointer font-black">{fill(o.unitsAll, { n: formatNumber(n) || '0', symbol: fromUnit.symbol, title: set.title.toLowerCase() })}</summary>
        <table class="mt-3 w-full text-left text-sm">
          <tbody>
            {all.map(({ unit, value: v }) => (
              <tr class="border-t border-line/20">
                <th class="py-1.5 pr-3 font-bold">{uname(unit)}</th>
                <td class="py-1.5 text-right tabular-nums">{formatNumber(v)} {unit.symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </div>
  );
}

// ---------- number bases ----------
const BASES = [
  { id: 2, name: 'baseBinary' },
  { id: 8, name: 'baseOctal' },
  { id: 10, name: 'baseDecimal' },
  { id: 16, name: 'baseHex' },
] as const;

export function BasesTool() {
  const o = useOpts();
  const [text, setText] = useState('255');
  const [base, setBase] = useState(10);
  const value = parseBase(text, base);
  const bad = text.trim() !== '' && value === null;
  return (
    <div class="card grid gap-4 p-5">
      {BASES.map((b) => (
        <Field id={`base-${b.id}`} label={fill(o.baseLabel, { name: o[b.name], n: b.id })}>
          <div class="flex gap-2">
            <input
              id={`base-${b.id}`}
              class="input flex-1 font-mono"
              spellcheck={false}
              value={b.id === base ? text : value === null ? '' : formatBase(value, b.id)}
              onInput={(e) => {
                setBase(b.id);
                setText(e.currentTarget.value);
              }}
            />
            <CopyButton text={value === null ? '' : formatBase(value, b.id)} />
          </div>
        </Field>
      ))}
      {bad && (
        <p role="alert" class="text-sm font-bold text-danger">
          {fill(o.baseInvalid, { name: o[BASES.find((b) => b.id === base)!.name].toLocaleLowerCase() })}
        </p>
      )}
      <p class="text-sm text-muted">{o.baseNote}</p>
    </div>
  );
}

// ---------- number to words ----------
export function WordsTool() {
  const o = useOpts();
  const lang = useLang();
  const [text, setText] = useState('1250000');
  const [style, setStyle] = useState<WordStyle>('indian');
  const [money, setMoney] = useState<'none' | 'inr' | 'usd'>('none');
  const result = text.trim() === '' ? { words: '' } : numberToWordsIn(lang, text, style, money);
  const shown = result.words ? result.words.charAt(0).toUpperCase() + result.words.slice(1) : '';
  return (
    <div class="card grid gap-4 p-5">
      <Field id="w-num" label={o.number} hint={o.wordsHint}>
        <input id="w-num" class="input text-xl font-black" inputMode="decimal" value={text} onInput={(e) => setText(e.currentTarget.value)} />
      </Field>
      <div class="grid gap-4 sm:grid-cols-2">
        <Field id="w-style" label={o.style}>
          <select id="w-style" class="input" value={style} onChange={(e) => setStyle(e.currentTarget.value as WordStyle)}>
            <option value="indian">{o.styleIndian}</option>
            <option value="international">{o.styleInternational}</option>
          </select>
        </Field>
        <Field id="w-money" label={o.writeAs}>
          <select id="w-money" class="input" value={money} onChange={(e) => setMoney(e.currentTarget.value as 'none' | 'inr' | 'usd')}>
            <option value="none">{o.moneyNone}</option>
            <option value="inr">{o.moneyInr}</option>
            <option value="usd">{o.moneyUsd}</option>
          </select>
        </Field>
      </div>
      {result.error ? (
        <p role="alert" class="text-sm font-bold text-danger">{'errorKey' in result && result.errorKey === 'big' ? o.wordsBig : o.wordsBad}</p>
      ) : (
        <div class="grid gap-2">
          <p class="eyebrow">{o.inWords}</p>
          <p class="card p-4 text-lg font-bold [overflow-wrap:anywhere]" aria-live="polite">{shown || ' '}</p>
          <div><CopyButton text={shown} /></div>
        </div>
      )}
    </div>
  );
}

// ---------- Roman numerals ----------
export function RomanTool() {
  const o = useOpts();
  const [text, setText] = useState('2026');
  const trimmed = text.trim();
  const isNumber = /^\d+$/.test(trimmed);
  const roman = isNumber ? toRoman(Number(trimmed)) : null;
  const arabic = !isNumber && trimmed !== '' ? fromRoman(trimmed) : null;
  const answer = isNumber ? roman : arabic === null ? null : String(arabic);
  const error = trimmed === '' ? '' : answer === null ? (isNumber ? o.romanRange : o.romanInvalid) : '';
  return (
    <div class="card grid gap-4 p-5">
      <Field id="r-in" label={o.romanLabel}>
        <input id="r-in" class="input text-xl font-black" value={text} spellcheck={false} onInput={(e) => setText(e.currentTarget.value)} />
      </Field>
      {error ? <p role="alert" class="text-sm font-bold text-danger">{error}</p> : (
        <div class="grid gap-2">
          <p class="eyebrow">{isNumber ? o.romanNumeral : o.number}</p>
          <p class="card p-4 text-2xl font-black" aria-live="polite">{answer ?? ' '}</p>
          <div><CopyButton text={answer ?? ''} /></div>
        </div>
      )}
    </div>
  );
}

// ---------- text case ----------
export function CaseTool() {
  const o = useOpts();
  const nm = useNames();
  const [text, setText] = useState('');
  const [chosen, setChosen] = useState('title');
  const out = CASES.find((c) => c.id === chosen)!.apply(text);
  return (
    <div class="grid gap-4">
      <Field id="c-in" label={o.yourText}>
        <textarea id="c-in" class="input min-h-40" value={text} onInput={(e) => setText(e.currentTarget.value)} placeholder={o.typeHere} />
      </Field>
      <div class="flex flex-wrap gap-2" role="group" aria-label={o.chooseCase}>
        {CASES.map((c) => (
          <button type="button" class={`btn btn-sm ${chosen === c.id ? 'btn-primary' : ''}`} aria-pressed={chosen === c.id} onClick={() => setChosen(c.id)}>
            {nm(`case.${c.id}`, c.label)}
          </button>
        ))}
      </div>
      <Field id="c-out" label={o.result}>
        <textarea id="c-out" class="input min-h-40" readOnly value={out} />
      </Field>
      <div class="flex gap-3">
        <CopyButton text={out} />
        <p class="self-center text-sm text-muted">{fill(o.countLine, { chars: text.length, words: text.trim() ? text.trim().split(/\s+/).length : 0 })}</p>
      </div>
    </div>
  );
}

// ---------- colour codes ----------
export function ColourTool() {
  const o = useOpts();
  const [hex, setHex] = useState('#FFD23F');
  const [rgb, setRgb] = useState('255, 210, 63');
  const [hsl, setHsl] = useState('45, 100%, 62%');
  const [rgbValue, setRgbValue] = useState<Rgb>({ r: 255, g: 210, b: 63 });
  const [bad, setBad] = useState('');

  const apply = (value: Rgb, skip: 'hex' | 'rgb' | 'hsl' | null) => {
    setRgbValue(value);
    setBad('');
    const h = rgbToHsl(value);
    if (skip !== 'hex') setHex(toHex(value));
    if (skip !== 'rgb') setRgb(`${value.r}, ${value.g}, ${value.b}`);
    if (skip !== 'hsl') setHsl(`${h.h}, ${h.s}%, ${h.l}%`);
  };
  const onInput = (kind: 'hex' | 'rgb' | 'hsl', text: string) => {
    (kind === 'hex' ? setHex : kind === 'rgb' ? setRgb : setHsl)(text);
    const parsed = kind === 'hex' ? parseHex(text) : kind === 'rgb' ? parseRgb(text) : parseHsl(text);
    if (parsed) apply(parsed, kind);
    else setBad(kind);
  };
  const css = { hex: toHex(rgbValue), rgb: `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`, hsl: (() => { const h = rgbToHsl(rgbValue); return `hsl(${h.h}, ${h.s}%, ${h.l}%)`; })() };
  return (
    <div class="grid gap-4 md:grid-cols-[1fr_16rem]">
      <div class="card grid gap-4 p-5">
        {([['hex', 'HEX', hex, '#FFD23F'], ['rgb', 'RGB', rgb, '255, 210, 63'], ['hsl', 'HSL', hsl, '45, 100%, 62%']] as const).map(([kind, label, value, ph]) => (
          <Field id={`col-${kind}`} label={label}>
            <div class="flex gap-2">
              <input id={`col-${kind}`} class="input flex-1 font-mono" value={value} spellcheck={false} placeholder={ph} aria-invalid={bad === kind} onInput={(e) => onInput(kind, e.currentTarget.value)} />
              <CopyButton text={css[kind]} />
            </div>
          </Field>
        ))}
        {bad && <p role="alert" class="text-sm font-bold text-danger">{fill(o.colourBad, { kind: bad.toUpperCase() })}</p>}
        <input type="color" class="h-10 w-full cursor-pointer" aria-label={o.pickColour} value={toHex(rgbValue).toLowerCase()} onInput={(e) => { const p = parseHex(e.currentTarget.value); if (p) apply(p, null); }} />
      </div>
      <div class="card min-h-40 border-2" role="img" aria-label={fill(o.swatch, { hex: css.hex })} style={{ background: css.hex }} />
    </div>
  );
}

// ---------- time zones ----------
const pad = (n: number) => String(n).padStart(2, '0');

export function TimeZoneTool() {
  const o = useOpts();
  const nm = useNames();
  const cityName = (c: { id: string; label: string }) => nm(`city.${c.id}`, c.label);
  const now = new Date();
  const guess = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const defaultFrom = CITIES.find((c) => c.zone === guess)?.zone ?? 'Asia/Kolkata';
  const [date, setDate] = useState(`${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`);
  const [time, setTime] = useState(`${pad(now.getHours())}:${pad(now.getMinutes())}`);
  const [from, setFrom] = useState(defaultFrom);
  const [picked, setPicked] = useState<string[]>(['UTC', 'Europe/London', 'America/New_York', 'Asia/Tokyo']);

  const [y, mo, d] = date.split('-').map(Number);
  const [h, mi] = time.split(':').map(Number);
  const valid = Number.isFinite(y) && Number.isFinite(mo) && Number.isFinite(d) && Number.isFinite(h) && Number.isFinite(mi);
  const instant = valid ? wallTimeToInstant(y!, mo!, d!, h!, mi!, from) : null;
  const cityLabel = (zone: string) => { const c = CITIES.find((x) => x.zone === zone); return c ? cityName(c) : zone; };
  const rows = instant ? compareZones(instant, from, picked.map((zone) => ({ zone, label: cityLabel(zone) }))) : [];
  const fromInfo = instant ? timeInZone(instant, from) : null;
  const options = CITIES.filter((c) => !picked.includes(c.zone));

  return (
    <div class="grid gap-5">
      <div class="card grid gap-4 p-5 sm:grid-cols-3">
        <Field id="tz-date" label={o.date}><input id="tz-date" type="date" class="input" value={date} onInput={(e) => setDate(e.currentTarget.value)} /></Field>
        <Field id="tz-time" label={o.time}><input id="tz-time" type="time" class="input" value={time} onInput={(e) => setTime(e.currentTarget.value)} /></Field>
        <Field id="tz-from" label={o.startingZone}>
          <select id="tz-from" class="input" value={from} onChange={(e) => setFrom(e.currentTarget.value)}>
            {CITIES.map((c) => (<option value={c.zone}>{cityName(c)}</option>))}
          </select>
        </Field>
      </div>
      {fromInfo && <p class="font-bold">{fill(o.zoneNow, { date: fromInfo.date, time: fromInfo.time, place: cityLabel(from) })}</p>}
      <div class="card relative overflow-x-auto p-4">
        <table class="w-full min-w-[28rem] text-left text-sm">
          <thead><tr class="text-muted"><th class="pb-2">{o.place}</th><th class="pb-2">{o.time}</th><th class="pb-2">{o.date}</th><th class="pb-2">{o.offset}</th><th class="pb-2"><span class="sr-only">{o.remove}</span></th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr class="border-t border-line/20">
                <th class="py-2 pr-3 font-bold">{r.label}</th>
                <td class="py-2 pr-3 text-lg font-black tabular-nums">{r.time}</td>
                <td class="py-2 pr-3">{r.date}{r.dayShift !== 0 && <span class="pill ml-2">{r.dayShift > 0 ? o.nextDay : o.previousDay}</span>}</td>
                <td class="py-2 pr-3 tabular-nums">{r.offset}</td>
                <td class="py-2"><button type="button" class="btn btn-sm" aria-label={fill(o.removeAria, { place: r.label })} onClick={() => setPicked(picked.filter((z) => z !== r.zone))}>✕</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && <p class="text-sm text-muted">{o.addToCompare}</p>}
      </div>
      {options.length > 0 && (
        <Field id="tz-add" label={o.addPlace}>
          <select id="tz-add" class="input" value="" onChange={(e) => { if (e.currentTarget.value) setPicked([...picked, e.currentTarget.value]); e.currentTarget.value = ''; }}>
            <option value="">{o.chooseCity}</option>
            {options.map((c) => (<option value={c.zone}>{cityName(c)}</option>))}
          </select>
        </Field>
      )}
    </div>
  );
}

// ---------- date formats ----------
export function DatesTool() {
  const o = useOpts();
  const nm = useNames();
  const lang = useLang();
  const now = new Date();
  const [text, setText] = useState(`${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`);
  const [order, setOrder] = useState<'dmy' | 'mdy' | 'ymd'>('dmy');
  const parsed = parseDateInput(text, order);
  return (
    <div class="grid gap-5">
      <div class="card grid gap-4 p-5 sm:grid-cols-2">
        <Field id="d-in" label={o.date}><input id="d-in" class="input text-xl font-black" value={text} onInput={(e) => setText(e.currentTarget.value)} placeholder="04/03/2026" /></Field>
        <Field id="d-order" label={o.dateWrittenAs} hint={o.dateHint}>
          <select id="d-order" class="input" value={order} onChange={(e) => setOrder(e.currentTarget.value as 'dmy' | 'mdy' | 'ymd')}>
            <option value="dmy">{o.orderDmy}</option>
            <option value="mdy">{o.orderMdy}</option>
            <option value="ymd">{o.orderYmd}</option>
          </select>
        </Field>
      </div>
      {parsed === null ? (
        <p role="alert" class="text-sm font-bold text-danger">{o.dateBad}</p>
      ) : (
        <ul class="grid gap-2">
          {DATE_FORMATS.map((f) => {
            const value = f.format(...parsed, lang);
            return (
              <li class="card flex items-center justify-between gap-3 p-3">
                <div class="min-w-0">
                  <p class="text-xs text-muted">{nm(`fmt.${f.id}`, f.label)}</p>
                  <p class="font-black [overflow-wrap:anywhere]">{value}</p>
                </div>
                <CopyButton text={value} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
