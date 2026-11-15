import { useState } from 'preact/hooks';
import { copyText } from '../lib/clipboard';
import { SITE_URL } from '../lib/contact';
import { fill, useOpts } from '../i18n/options';

/** Share the site with the phone's or computer's share sheet, or copy the link if there is none. */
export default function ShareButton() {
  const o = useOpts();
  const [note, setNote] = useState('');

  const copyLink = async () => {
    const ok = await copyText(SITE_URL);
    setNote(ok ? o.shareCopied : fill(o.shareFail, { url: SITE_URL }));
  };

  const share = async () => {
    const data = { title: 'iDuckConvert', text: o.shareText, url: SITE_URL };
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share(data);
        setNote(o.shareThanks);
        return;
      } catch (error) {
        // Closing the share sheet is not an error; anything else falls back to copying.
        if (error instanceof Error && error.name === 'AbortError') return;
      }
    }
    await copyLink();
  };

  return (
    <div class="flex flex-wrap items-center gap-3">
      <button type="button" class="btn btn-primary btn-lg" onClick={share}>
        <span aria-hidden="true">📣</span> {o.shareBtn}
      </button>
      <button type="button" class="btn btn-lg" onClick={copyLink}>
        {o.shareCopy}
      </button>
      <span role="status" class="text-sm font-bold" data-testid="share-note">
        {note}
      </span>
    </div>
  );
}
