/**
 * The text of the four long community pages (About, Privacy, Terms, How it works), in one place so the English page
 * and every translation come from the same sentences. A sentence may carry simple markup: **bold**, `code`,
 * [label](/path/) for a link, and [[name]] for a value filled in when the page is built (see `inline.ts`).
 * Translations are looked up by the English sentence (src/i18n/pages), exactly like converter page text, so edit a
 * sentence here and a unit test names every language that now lacks it.
 */
export type CBlock = { p: string; small?: true } | { ul: string[] } | { engines: true };
export interface CSection {
  id: string;
  h: string;
  blocks: CBlock[];
}
export interface CPage {
  slug: 'about' | 'privacy' | 'terms' | 'how-it-works';
  title: string;
  description: string;
  before: string;
  mark: string;
  intro: string;
  /** ISO date shown as [[date]] in "Last updated" (privacy and terms). */
  updated?: string;
  sections: CSection[];
}

/** The table on How it works: column headings and the words in each row (library names are not translated). */
export const ENGINE_HEAD = ['Job', 'Engine', 'Version', 'Loaded from'];
export const ENGINE_ROWS: { what: string; lib: string; version: string; where: string }[] = [
  { what: 'Audio and video', lib: 'ffmpeg.wasm (ffmpeg compiled to WebAssembly)', version: '[[wrapper]] wrapper, [[core]] engine', where: 'Wrapper and loader from our domain; the 32 MB engine file from [[host]], checked against a SHA-384 fingerprint' },
  { what: 'Excel and CSV files', lib: 'SheetJS (xlsx)', version: '0.20.3 from the official SheetJS CDN', where: 'Bundled into our own files' },
  { what: 'YAML', lib: 'js-yaml', version: '[[js-yaml]]', where: 'Bundled into our own files' },
  { what: 'Markdown to HTML', lib: 'marked', version: '[[marked]]', where: 'Bundled into our own files' },
  { what: 'HTML to Markdown', lib: 'Turndown', version: '[[turndown]]', where: 'Bundled into our own files' },
  { what: 'XML', lib: 'fast-xml-parser', version: '[[fast-xml-parser]]', where: 'Bundled into our own files' },
  { what: 'TIFF pictures', lib: 'UTIF2', version: '[[utif2]]', where: 'Bundled into our own files' },
  { what: 'GIF files', lib: 'gifenc', version: '[[gifenc]]', where: 'Bundled into our own files' },
  { what: 'ZIP downloads', lib: 'JSZip', version: '[[jszip]]', where: 'Bundled into our own files' },
];

export const COMMUNITY_PAGES: CPage[] = [
  {
    slug: "about",
    title: "About iDuckConvert: who runs it, what it costs, how it is built",
    description: "iDuckConvert is a free set of converters that run in your browser. Learn who runs it, what it costs and how your files are handled.",
    before: "About",
    mark: "iDuckConvert",
    intro: "[[n]] free converters that run in your browser, from Basic App Company, the makers of iDuckPDF and iDuckIMG.",
    sections: [
      {
        id: "files",
        h: "What happens to your files",
        blocks: [
          { p: "Every tool runs in your browser. Your files are opened, changed and saved on your own device, and they are not uploaded to our servers. Our host, Cloudflare, sees the same ordinary web requests for our pages that any website sees. Please do not rely on that alone for anything truly secret: check any tool you trust, and close the tab when you are done." },
        ],
      },
      {
        id: "who",
        h: "Who runs it",
        blocks: [
          { p: "iDuckConvert is made and run by Basic App Company. It is a sister site of [iDuckPDF](https://iduckpdf.com/), which has free PDF tools, and [iDuckIMG](https://iduckimg.com/), which has free image tools, and [iDuckCalculator](https://iduckcalculator.com/), which has free calculators, and shares their look. PDF conversions live on iDuckPDF and picture conversions that already exist on iDuckIMG are linked, not copied." },
        ],
      },
      {
        id: "cost",
        h: "What it costs",
        blocks: [
          { p: "Nothing. There is no sign-up and no watermark on your results. We may show ads to cover the running costs, and we will keep them away from the upload area and the download button. See [Donate](/donate/) for ways to help." },
        ],
      },
      {
        id: "built",
        h: "How it is built",
        blocks: [
          { p: "The pages are plain static files made with Astro, with small Preact pieces for the tools. Audio and video use ffmpeg.wasm, a copy of ffmpeg compiled to WebAssembly. Its engine file (about 32 MB) is fetched once from jsDelivr (cdn.jsdelivr.net) and checked against a fixed fingerprint before it is used, then cached by your browser; your files are never sent there. The how-it-works page lists everything. Spreadsheets use SheetJS, and the rest is small open-source code running on your device. Because everything runs on your device, big videos can be slow on an older phone." },
        ],
      },
      {
        id: "contact",
        h: "Get in touch",
        blocks: [
          { p: "iDuckConvert is made and run by Basic App Company. The easiest way to reach us is the [feedback form](/feedback/), or write to hello@iduckconvert.com. To ask for a converter, use [Request a feature](/request/). For a quick look at what runs where, see [how our converters work](/how-it-works/)." },
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy policy | iDuckConvert",
    description: "What iDuckConvert does and does not do with your files and your data. Files are processed in your browser and are not uploaded.",
    before: "Privacy",
    mark: "policy",
    intro: "Short version: your files stay on your device. Here is the longer version, in plain words.",
    updated: "2026-11-13",
    sections: [
      {
        id: "files",
        h: "Your files",
        blocks: [
          { p: "Every iDuckConvert tool opens, changes and saves your files inside your own browser. Your files are not uploaded to our servers, and we cannot see them or keep a copy. The only thing fetched from another host is the ffmpeg engine for audio and video: the jsDelivr content delivery network (cdn.jsdelivr.net), which serves one file, the 32 MB ffmpeg engine; your browser checks that file against a fixed fingerprint (SHA-384) and refuses it if it does not match. Like any website host, jsDelivr can see your IP address and browser type when that file is requested, but it never receives your files. It is downloaded the first time you convert media. When you close the tab they are gone from the page." },
        ],
      },
      {
        id: "collect",
        h: "What we collect",
        blocks: [
          {
            ul: [
              "**Ordinary web requests.** Our host, Cloudflare, receives the technical details any website receives when a page is loaded (such as your IP address, the page asked for and your browser type) and may keep them in standard server logs for security and reliability.",
              "**Your theme choice.** If you pick light or dark mode, it is saved in your browser local storage so the site remembers it. It never leaves your device. You can clear it on the [Settings](/settings/) page.",
              "**Messages you choose to send.** The feedback and request forms open an email in your own mail app. We only receive what you send, at the address you see on those pages ([[feedbackEmail]]). For anything else, write to [[contactEmail]].",
            ],
          },
          { p: "We do not have accounts, so we hold no sign-up data. We do not sell personal data." },
        ],
      },
      {
        id: "ads",
        h: "Ads and measuring visits",
        blocks: [
          { p: "iDuckConvert may show advertising in the future to cover its costs, and may use a privacy-focused visit counter. If that happens, ad and measurement providers may set cookies or collect data about your visit, and where the law requires it we will ask for your consent first and update this page before turning them on. Ads are never placed over the area where you add or download files, and they never receive your files." },
        ],
      },
      {
        id: "ai",
        h: "AI tools",
        blocks: [
          { p: "iDuckConvert has no AI tools. If that ever changes, the page will say clearly where your data goes, and this page will list which tools." },
        ],
      },
      {
        id: "rights",
        h: "Your choices and contact",
        blocks: [
          { p: "You can ask what we hold about you, or ask us to delete it, using the [feedback form](/feedback/). Because we keep so little, there is usually nothing beyond server logs. This policy may change; the date below shows when it last did." },
          { p: "Last updated: [[date]]. Operated by Basic App Company.", small: true },
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of use | iDuckConvert",
    description: "The simple rules for using iDuckConvert: free to use, you keep ownership of your files, and the tools are provided as they are.",
    before: "Terms of",
    mark: "use",
    intro: "Plain rules for a free tool. By using iDuckConvert you agree to them.",
    updated: "2026-11-12",
    sections: [
      {
        id: "use",
        h: "Using iDuckConvert",
        blocks: [
          { p: "You may use the tools for personal or business work, free of charge. Please do not use the site to break the law, to process files you have no right to, or to try to disrupt or overload it." },
        ],
      },
      {
        id: "own",
        h: "Your files stay yours",
        blocks: [
          { p: "You keep all rights to the files you process. They are handled inside your browser and are not uploaded to us, so we get no rights to them." },
        ],
      },
      {
        id: "asis",
        h: "No guarantees",
        blocks: [
          { p: "The tools are provided as they are. We work hard to make them correct, but we cannot promise they will always be available or free of mistakes. The tools save new files and do not change your originals, but always check a result before you rely on it. Exam and form requirements change, so compare our presets with the latest official notice, which each preset links to." },
          { p: "To the extent the law allows, Basic App Company is not responsible for losses that come from using, or not being able to use, the site." },
        ],
      },
      {
        id: "changes",
        h: "Changes and contact",
        blocks: [
          { p: "We may change these terms or the site. The date below shows the latest change. Questions? Use the [feedback form](/feedback/). See also our [privacy policy](/privacy/)." },
          { p: "Last updated: [[date]]. Operated by Basic App Company.", small: true },
        ],
      },
    ],
  },
  {
    slug: "how-it-works",
    title: "How our converters work in your browser | iDuckConvert",
    description: "How iDuckConvert works: every converter runs in your browser, which open-source engines and exact versions we use, and the one file loaded from outside our domain.",
    before: "How it",
    mark: "works",
    intro: "Every converter runs inside your browser tab. Here is exactly what runs, which open-source engines we use, and what is loaded from where.",
    sections: [
      {
        id: "browser",
        h: "Do my files leave my device?",
        blocks: [
          { p: "No. When you drop a file in, your browser reads it and a converter written in JavaScript or WebAssembly works on it in memory. The result is made in your browser and saved with a normal download. Nothing is sent to our servers, and there is no account, no watermark and no ads. You can check it yourself: open your browser's developer tools, choose the Network tab and convert a file; you will see no upload." },
        ],
      },
      {
        id: "engines",
        h: "Which engines do the converting?",
        blocks: [
          { p: "Exact versions, taken from this site's own package list when it was built.", small: true },
          { engines: true },
          { p: "Units, number words, Roman numerals, bases, colours, time zones and dates are calculated by small functions written for this site. Time zones use your browser's built-in time zone database.", small: true },
        ],
      },
      {
        id: "outside",
        h: "What is loaded from outside this site?",
        blocks: [
          { p: "One file. The audio and video engine, `ffmpeg-core.wasm`, is 32 MB, too large for our host to serve, so it comes from **[[host]]** (jsDelivr) at one fixed version, [[core]]. Your browser checks it against the fingerprint `[[sha]]` and refuses it if even one byte differs. It is downloaded only when you press Convert on an audio or video converter, and your browser keeps it for next time. Your files are never part of that request. Like any website host, jsDelivr can see an IP address and browser type when it serves the file." },
          { p: "Everything else, including all scripts, styles, the ffmpeg loader and the other libraries above, is served from iduckconvert.com. A strict Content-Security-Policy tells your browser to refuse scripts from anywhere else." },
        ],
      },
      {
        id: "limits",
        h: "What are the limits?",
        blocks: [
          { p: "Because your device does the work, the limit is your device. We suggest audio and video files under 500 MB on a computer and 100 MB on a phone, and we refuse files over 1.9 GB. Spreadsheets are limited to 50 MB, TIFF pictures to 150 MB, WEBP pictures to 50 MB and text files to 20 to 50 MB, with a clear message when a file is too big. A computer is many times faster than a phone for video." },
        ],
      },
      {
        id: "sources",
        h: "Where do the numbers come from?",
        blocks: [
          { p: "Unit factors follow the definitions in NIST Special Publication 811 and the BIPM SI Brochure, and each unit page names its source and says whether a factor is exact. Local Indian land units such as the bigha vary by state; they are commonly cited figures that we have not verified against each state's official land record, and the pages say so." },
          { p: "Last reviewed: [[date]]. Operated by Basic App Company. Questions? [Send feedback](/feedback/) or write to hello@iduckconvert.com.", small: true },
        ],
      },
    ],
  },
];

export const communityPage = (slug: CPage['slug']): CPage => COMMUNITY_PAGES.find((p) => p.slug === slug)!;

/** Every sentence of a page that a translation has to cover. */
export function communityStrings(p: CPage): string[] {
  const list = [p.title, p.description, p.before, p.mark, p.intro];
  for (const s of p.sections) {
    list.push(s.h);
    for (const b of s.blocks) {
      if ('p' in b) list.push(b.p);
      else if ('ul' in b) list.push(...b.ul);
      else list.push(...ENGINE_HEAD, ...ENGINE_ROWS.flatMap((r) => [r.what, r.version, r.where]));
    }
  }
  return [...new Set(list)];
}
