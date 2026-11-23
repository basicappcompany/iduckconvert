import { useState } from 'preact/hooks';
import { copyText } from '../lib/clipboard';
import { useOpts } from '../i18n/options';

/** A small Copy button that says "Copied" for a moment. */
export function CopyButton({ text, large = false }: { text: string; large?: boolean }) {
  const o = useOpts();
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      class={large ? 'btn btn-lg' : 'btn btn-sm'}
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
