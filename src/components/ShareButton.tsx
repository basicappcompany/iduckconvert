import { useState } from 'preact/hooks';
import { copyText } from '../lib/clipboard';
import { SITE_URL } from '../lib/contact';

/** Share the site with the phone's or computer's share sheet, or copy the link if there is none. */
export default function ShareButton() {
  const [note, setNote] = useState('');

  const copyLink = async () => {
    const ok = await copyText(SITE_URL);
    setNote(ok ? 'Link copied. Paste it anywhere.' : `Could not copy. The address is ${SITE_URL}`);
  };

  const share = async () => {
    const data = { title: 'iDuckConvert', text: 'Free converters that run in your browser.', url: SITE_URL };
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share(data);
        setNote('Thanks for sharing!');
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
        <span aria-hidden="true">📣</span> Share iDuckConvert
      </button>
      <button type="button" class="btn btn-lg" onClick={copyLink}>
        Copy link
      </button>
      <span role="status" class="text-sm font-bold" data-testid="share-note">
        {note}
      </span>
    </div>
  );
}
