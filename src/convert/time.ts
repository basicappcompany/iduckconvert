/** Time zones and date formats, built on the browser's own Intl database so daylight saving is right. */

export interface City {
  id: string;
  label: string;
  zone: string;
}

export const CITIES: City[] = [
  { id: 'kolkata', label: 'India (Kolkata)', zone: 'Asia/Kolkata' },
  { id: 'utc', label: 'UTC', zone: 'UTC' },
  { id: 'london', label: 'London', zone: 'Europe/London' },
  { id: 'paris', label: 'Paris, Berlin, Rome', zone: 'Europe/Paris' },
  { id: 'dubai', label: 'Dubai', zone: 'Asia/Dubai' },
  { id: 'karachi', label: 'Karachi', zone: 'Asia/Karachi' },
  { id: 'dhaka', label: 'Dhaka', zone: 'Asia/Dhaka' },
  { id: 'bangkok', label: 'Bangkok, Jakarta', zone: 'Asia/Bangkok' },
  { id: 'singapore', label: 'Singapore', zone: 'Asia/Singapore' },
  { id: 'shanghai', label: 'Beijing, Shanghai', zone: 'Asia/Shanghai' },
  { id: 'tokyo', label: 'Tokyo', zone: 'Asia/Tokyo' },
  { id: 'sydney', label: 'Sydney', zone: 'Australia/Sydney' },
  { id: 'auckland', label: 'Auckland', zone: 'Pacific/Auckland' },
  { id: 'istanbul', label: 'Istanbul', zone: 'Europe/Istanbul' },
  { id: 'moscow', label: 'Moscow', zone: 'Europe/Moscow' },
  { id: 'cairo', label: 'Cairo', zone: 'Africa/Cairo' },
  { id: 'lagos', label: 'Lagos', zone: 'Africa/Lagos' },
  { id: 'nairobi', label: 'Nairobi', zone: 'Africa/Nairobi' },
  { id: 'newyork', label: 'New York (Eastern)', zone: 'America/New_York' },
  { id: 'chicago', label: 'Chicago (Central)', zone: 'America/Chicago' },
  { id: 'denver', label: 'Denver (Mountain)', zone: 'America/Denver' },
  { id: 'losangeles', label: 'Los Angeles (Pacific)', zone: 'America/Los_Angeles' },
  { id: 'saopaulo', label: 'São Paulo', zone: 'America/Sao_Paulo' },
  { id: 'mexico', label: 'Mexico City', zone: 'America/Mexico_City' },
];

/** Minutes the zone is ahead of UTC at the given instant. */
export function zoneOffsetMinutes(instant: Date, zone: string): number {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: zone, hourCycle: 'h23', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }).formatToParts(instant);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  const asUtc = Date.UTC(get('year'), get('month') - 1, get('day'), get('hour'), get('minute'), get('second'));
  return Math.round((asUtc - Math.floor(instant.getTime() / 1000) * 1000) / 60000);
}

/** The instant at which the wall clock in `zone` shows this date and time. Handles daylight saving by checking the offset twice. */
export function wallTimeToInstant(year: number, month: number, day: number, hour: number, minute: number, zone: string): Date {
  const guess = Date.UTC(year, month - 1, day, hour, minute);
  let offset = zoneOffsetMinutes(new Date(guess), zone);
  let instant = guess - offset * 60000;
  const check = zoneOffsetMinutes(new Date(instant), zone);
  if (check !== offset) {
    offset = check;
    instant = guess - offset * 60000;
  }
  return new Date(instant);
}

export function formatOffset(minutes: number): string {
  const sign = minutes < 0 ? '-' : '+';
  const abs = Math.abs(minutes);
  return `UTC${sign}${String(Math.floor(abs / 60)).padStart(2, '0')}:${String(abs % 60).padStart(2, '0')}`;
}

export interface ZoneRow {
  label: string;
  zone: string;
  time: string;
  date: string;
  offset: string;
  /** Whole days ahead (+1) or behind (-1) the starting zone's date. */
  dayShift: number;
}

export function timeInZone(instant: Date, zone: string): { time: string; date: string; offsetMinutes: number; ymd: [number, number, number] } {
  const time = new Intl.DateTimeFormat('en-GB', { timeZone: zone, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(instant);
  const date = new Intl.DateTimeFormat('en-GB', { timeZone: zone, weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(instant);
  const offsetMinutes = zoneOffsetMinutes(instant, zone);
  const local = new Date(instant.getTime() + offsetMinutes * 60000);
  return { time, date, offsetMinutes, ymd: [local.getUTCFullYear(), local.getUTCMonth() + 1, local.getUTCDate()] };
}

export function compareZones(instant: Date, fromZone: string, rows: { label: string; zone: string }[]): ZoneRow[] {
  const base = timeInZone(instant, fromZone).ymd;
  const baseDay = Date.UTC(base[0], base[1] - 1, base[2]) / 86400000;
  return rows.map(({ label, zone }) => {
    const t = timeInZone(instant, zone);
    const day = Date.UTC(t.ymd[0], t.ymd[1] - 1, t.ymd[2]) / 86400000;
    return { label, zone, time: t.time, date: t.date, offset: formatOffset(t.offsetMinutes), dayShift: Math.round(day - baseDay) };
  });
}

// ---------- date formats ----------
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const p2 = (n: number) => String(n).padStart(2, '0');

function ordinal(n: number): string {
  const v = n % 100;
  if (v >= 11 && v <= 13) return `${n}th`;
  return `${n}${['th', 'st', 'nd', 'rd'][n % 10 > 3 ? 0 : n % 10]}`;
}

export interface DateFormat {
  id: string;
  label: string;
  /** `locale` is a language tag; without it (English) the month and day names are the English ones below. */
  format: (y: number, m: number, d: number, locale?: string) => string;
}

/** A month or weekday name in a language through the browser's own Intl data. */
function intlName(locale: string, y: number, m: number, d: number, options: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat(locale, { ...options, timeZone: 'UTC' }).format(new Date(Date.UTC(y, m - 1, d)));
}
const monthName = (y: number, m: number, d: number, locale: string | undefined, style: 'long' | 'short'): string =>
  locale && locale !== 'en' ? intlName(locale, y, m, d, { month: style }) : style === 'long' ? MONTHS[m - 1]! : MONTHS[m - 1]!.slice(0, 3);

const weekday = (y: number, m: number, d: number) => new Date(Date.UTC(y, m - 1, d)).getUTCDay();

export const DATE_FORMATS: DateFormat[] = [
  { id: 'iso', label: 'ISO 8601 (YYYY-MM-DD)', format: (y, m, d) => `${y}-${p2(m)}-${p2(d)}` },
  { id: 'dmy-slash', label: 'DD/MM/YYYY (India, UK, most of the world)', format: (y, m, d) => `${p2(d)}/${p2(m)}/${y}` },
  { id: 'mdy-slash', label: 'MM/DD/YYYY (United States)', format: (y, m, d) => `${p2(m)}/${p2(d)}/${y}` },
  { id: 'dmy-dash', label: 'DD-MM-YYYY', format: (y, m, d) => `${p2(d)}-${p2(m)}-${y}` },
  { id: 'dmy-dot', label: 'DD.MM.YYYY (Germany, Turkey, Russia)', format: (y, m, d) => `${p2(d)}.${p2(m)}.${y}` },
  { id: 'ymd-slash', label: 'YYYY/MM/DD (Japan, China)', format: (y, m, d) => `${y}/${p2(m)}/${p2(d)}` },
  { id: 'compact', label: 'YYYYMMDD', format: (y, m, d) => `${y}${p2(m)}${p2(d)}` },
  { id: 'dmy-short', label: 'D Mon YYYY', format: (y, m, d, l) => `${d} ${monthName(y, m, d, l, 'short')} ${y}` },
  { id: 'dmy-long', label: 'D Month YYYY', format: (y, m, d, l) => `${d} ${monthName(y, m, d, l, 'long')} ${y}` },
  { id: 'mdy-long', label: 'Month D, YYYY', format: (y, m, d, l) => `${monthName(y, m, d, l, 'long')} ${d}, ${y}` },
  { id: 'ordinal', label: 'Wednesday, 4th March 2026', format: (y, m, d, l) => (l && l !== 'en' ? intlName(l, y, m, d, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : `${DAYS[weekday(y, m, d)]}, ${ordinal(d)} ${MONTHS[m - 1]} ${y}`) },
  { id: 'dmy-2digit', label: 'DD/MM/YY', format: (y, m, d) => `${p2(d)}/${p2(m)}/${p2(y % 100)}` },
];

/** Parse a date typed in one of the formats; the order says whether 03/04/2026 is 3 April or 4 March. */
export function parseDateInput(text: string, order: 'dmy' | 'mdy' | 'ymd'): [number, number, number] | null {
  const m = /^\s*(\d{1,4})[\/\-.\s](\d{1,2})[\/\-.\s](\d{1,4})\s*$/.exec(text);
  if (!m) return null;
  const a = Number(m[1]);
  const b = Number(m[2]);
  const c = Number(m[3]);
  const [y, mo, d] = order === 'ymd' ? [a, b, c] : order === 'mdy' ? [c, a, b] : [c, b, a];
  const year = y < 100 ? 2000 + y : y;
  const date = new Date(Date.UTC(year, mo - 1, d));
  return date.getUTCFullYear() === year && date.getUTCMonth() === mo - 1 && date.getUTCDate() === d ? [year, mo, d] : null;
}
