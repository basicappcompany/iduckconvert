/** QR code generator: text, a link or a Wi-Fi network, as a PNG or SVG. The code is drawn in the browser; nothing is sent anywhere. */
import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { Field } from '../components/OptionsPanel';
import { fill, useOpts } from '../i18n/options';
import { qrMatrix, qrPixelSize, qrSvg, qrTooLong, QR_MAX_BYTES, wifiPayload, type QrLevel, type WifiSecurity } from '../convert/qr';

const SIZES = [256, 512, 1024, 2048];
const LEVELS: QrLevel[] = ['L', 'M', 'Q', 'H'];
const QUIET = 4;

function save(blob: Blob, name: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

export function QrTool() {
  const o = useOpts();
  const [kind, setKind] = useState<'text' | 'wifi'>('text');
  const [text, setText] = useState('');
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [security, setSecurity] = useState<WifiSecurity>('WPA');
  const [hidden, setHidden] = useState(false);
  const [level, setLevel] = useState<QrLevel>('M');
  const [size, setSize] = useState(1024);
  const canvas = useRef<HTMLCanvasElement>(null);

  const payload = kind === 'text' ? text : ssid === '' ? '' : wifiPayload(ssid, password, security, hidden);
  const tooLong = payload !== '' && qrTooLong(payload, level);
  const matrix = useMemo(() => (payload === '' || tooLong ? [] : qrMatrix(payload, level)), [payload, level, tooLong]);

  useEffect(() => {
    const el = canvas.current;
    const ctx = el?.getContext('2d');
    if (!el || !ctx || matrix.length === 0) return;
    const { cell, total } = qrPixelSize(matrix.length, size, QUIET);
    el.width = total;
    el.height = total;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, total, total);
    ctx.fillStyle = '#000000';
    matrix.forEach((row, r) =>
      row.forEach((dark, c) => {
        if (dark) ctx.fillRect((c + QUIET) * cell, (r + QUIET) * cell, cell, cell);
      }),
    );
  }, [matrix, size]);

  const levelLabel: Record<QrLevel, string> = { L: o.qrLevelL, M: o.qrLevelM, Q: o.qrLevelQ, H: o.qrLevelH };
  return (
    <div class="grid gap-5">
      <div class="card grid gap-4 p-5 sm:grid-cols-2">
        <Field id="qr-kind" label={o.qrKind}>
          <select id="qr-kind" class="input" value={kind} onChange={(e) => setKind(e.currentTarget.value as 'text' | 'wifi')}>
            <option value="text">{o.qrKindText}</option>
            <option value="wifi">{o.qrKindWifi}</option>
          </select>
        </Field>
        <Field id="qr-level" label={o.qrLevel}>
          <select id="qr-level" class="input" value={level} onChange={(e) => setLevel(e.currentTarget.value as QrLevel)}>
            {LEVELS.map((l) => (
              <option value={l}>{levelLabel[l]}</option>
            ))}
          </select>
        </Field>
        <Field id="qr-size" label={o.qrSize}>
          <select id="qr-size" class="input" value={size} onChange={(e) => setSize(Number(e.currentTarget.value))}>
            {SIZES.map((n) => (
              <option value={n}>{fill(o.qrSizePx, { n })}</option>
            ))}
          </select>
        </Field>
      </div>

      {kind === 'text' ? (
        <Field id="qr-text" label={o.yourText}>
          <textarea id="qr-text" class="input min-h-32" spellcheck={false} value={text} placeholder={o.typeHere} onInput={(e) => setText(e.currentTarget.value)} />
        </Field>
      ) : (
        <div class="card grid gap-4 p-5 sm:grid-cols-2">
          <Field id="qr-ssid" label={o.qrSsid}>
            <input id="qr-ssid" class="input" autocomplete="off" spellcheck={false} value={ssid} onInput={(e) => setSsid(e.currentTarget.value)} />
          </Field>
          <Field id="qr-security" label={o.qrSecurity}>
            <select id="qr-security" class="input" value={security} onChange={(e) => setSecurity(e.currentTarget.value as WifiSecurity)}>
              <option value="WPA">{o.qrSecWpa}</option>
              <option value="WEP">{o.qrSecWep}</option>
              <option value="nopass">{o.qrSecNone}</option>
            </select>
          </Field>
          {security !== 'nopass' && (
            <Field id="qr-password" label={o.qrPassword}>
              <input id="qr-password" class="input" autocomplete="off" spellcheck={false} value={password} onInput={(e) => setPassword(e.currentTarget.value)} />
            </Field>
          )}
          <label class="flex items-center gap-2 text-sm font-bold">
            <input type="checkbox" checked={hidden} onChange={(e) => setHidden(e.currentTarget.checked)} />
            {o.qrHidden}
          </label>
        </div>
      )}

      {tooLong && (
        <p role="alert" class="text-sm font-bold text-danger" id="qr-error">
          {fill(o.qrLong, { max: QR_MAX_BYTES[level].toLocaleString('en') })}
        </p>
      )}
      {matrix.length === 0 && !tooLong && <p class="text-sm text-muted">{o.qrEmpty}</p>}
      {matrix.length > 0 && (
        <div class="grid justify-items-start gap-3">
          <canvas ref={canvas} id="qr-canvas" role="img" aria-label={o.qrAlt} class="card max-w-full bg-white p-0" style={{ width: 'min(100%, 20rem)', height: 'auto', imageRendering: 'pixelated' }} />
          <div class="flex flex-wrap gap-3">
            <button
              type="button"
              class="btn btn-primary btn-lg"
              id="qr-png"
              onClick={() => canvas.current?.toBlob((blob) => blob && save(blob, 'qr-code.png'), 'image/png')}
            >
              {fill(o.downloadExt, { ext: 'png' })}
            </button>
            <button type="button" class="btn btn-lg" id="qr-svg" onClick={() => save(new Blob([qrSvg(matrix, QUIET)], { type: 'image/svg+xml' }), 'qr-code.svg')}>
              {fill(o.downloadExt, { ext: 'svg' })}
            </button>
          </div>
        </div>
      )}
      <p class="text-sm text-muted">{o.qrNote}</p>
    </div>
  );
}
