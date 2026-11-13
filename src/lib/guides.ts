/** How-to guides. Each starts with the answer, then steps, then a little depth and questions. Keep `updated` honest. */
export interface Guide {
  slug: string;
  title: string;
  description: string;
  intro: string;
  steps: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
  /** Slugs of tools to link, first one is the main tool. */
  tools: string[];
  published: string;
  updated: string;
}

export const GUIDES: readonly Guide[] = [
  {
    slug: 'how-to-extract-audio-from-a-video',
    title: 'How to extract audio from a video',
    description: 'Save the sound of any video as an MP3 in your browser, with no upload, no software to install and no watermark.',
    intro:
      'To extract audio from a video, open a video-to-MP3 converter, drop the video in, press Convert and download the MP3. With iDuckConvert it all happens inside your browser tab, so the video is never uploaded anywhere.',
    steps: [
      'Open the MP4 to MP3 converter (it also accepts MOV, MKV, WEBM and AVI through Video to MP3).',
      'Drop your video onto the box, or press Choose files.',
      'Pick a quality. 192 kbit/s is a good everyday choice; use 320 for music you care about.',
      'Press Convert and wait for the progress bar to finish. The first time, your browser downloads the converter engine (about 30 MB), which is then cached.',
      'Download the MP3, or download several at once as a ZIP.',
    ],
    sections: [
      {
        heading: 'What you get',
        paragraphs: [
          'The picture is thrown away and only the sound track is kept, so the MP3 is much smaller than the video. A 100 MB lecture video often becomes a 10 to 30 MB MP3.',
          'The sound is encoded again as MP3, which is a lossy format. If the original sound was already compressed (most videos are), a second round of compression loses a very little more. At 192 kbit/s or above that is hard to hear.',
        ],
      },
      {
        heading: 'Which videos work',
        paragraphs: [
          'MP4, MOV (iPhone videos), MKV, WEBM, AVI and most phone and camera clips. If a file will not open, it may be damaged, copy-protected or in an unusual format; the page tells you when it cannot read a file.',
          'Only extract audio from videos you own or have the right to use. Recording your own lectures, interviews, voice notes and family videos is the usual use.',
        ],
      },
      {
        heading: 'Long videos and phones',
        paragraphs: [
          'Because your own device does the work, long videos take time and use memory. We suggest files under about 500 MB on a computer and 100 MB on a phone. If a phone struggles, trim the video first with the Trim video tool, or use a computer.',
        ],
      },
    ],
    faqs: [
      { q: 'Does it work on a phone?', a: 'Yes, in any modern browser, but long videos are slow on phones. Short clips work fine.' },
      { q: 'Can I get WAV or another format instead?', a: 'Yes. Video to MP3 is the quickest route, and the audio converters turn the MP3 into WAV, M4A, OGG or FLAC.' },
      { q: 'Is the video uploaded?', a: 'No. Everything runs in your browser tab and the video never leaves your device.' },
    ],
    tools: ['mp4-to-mp3', 'video-to-mp3', 'trim-video'],
    published: '2026-11-13',
    updated: '2026-11-13',
  },
  {
    slug: 'heic-vs-jpg',
    title: 'HEIC vs JPG: which should you use?',
    description: 'What HEIC is, how it differs from JPG, why iPhone photos will not open elsewhere, and how to convert them.',
    intro:
      'HEIC makes photos about half the size of JPG at similar quality, but fewer programs open it. Use HEIC to save space on your phone, and convert to JPG when you need to share, upload or edit a photo anywhere else.',
    steps: [
      'Check the file ends in .heic or .heif. That is what an iPhone saves by default.',
      'If you need to share or upload it, convert it to JPG with the HEIC to JPG converter on iDuckIMG, which runs in your browser.',
      'Keep the original HEIC if you may edit it again: it holds more colour detail than a JPG.',
      'To stop your iPhone saving HEIC, go to Settings, Camera, Formats and choose Most Compatible.',
    ],
    sections: [
      {
        heading: 'The real differences',
        paragraphs: [
          'HEIC (High Efficiency Image Container) uses the same compression family as modern video. Apple made it the iPhone default in 2017 because it stores a photo in roughly half the space of a JPG, and it can hold 10-bit colour, depth data and several images in one file.',
          'JPG is from 1992. Its compression is less efficient, but every phone, computer, website, printer and photo editor opens it without a fuss.',
        ],
      },
      {
        heading: 'Why HEIC causes trouble',
        paragraphs: [
          'Many websites and forms refuse HEIC uploads. Windows needs an extra codec to show them, and older Android phones, some printers and plenty of older software cannot open them at all.',
          'Converting to JPG costs you a little quality, because JPG is lossy and has less colour range. For sharing and uploads you will not notice. For serious editing, keep the original.',
        ],
      },
      {
        heading: 'A simple rule',
        paragraphs: ['Keep HEIC while the photo stays on your phone or in iCloud. Convert a copy to JPG the moment you need to send it to someone or put it on a website.'],
      },
    ],
    faqs: [
      { q: 'Is HEIC better quality than JPG?', a: 'At the same file size, yes: it keeps more detail. At the same quality it is about half the size. It also supports more colour.' },
      { q: 'Does converting HEIC to JPG lose quality?', a: 'A small amount, because JPG is a lossy format. At high quality settings the difference is very hard to see.' },
      { q: 'Where do I convert HEIC to JPG?', a: 'The HEIC to JPG converter lives on iDuckIMG, a sister site. It also works in your browser and does not upload your photos.' },
    ],
    tools: ['heic-to-jpg', 'tiff-to-jpg', 'webp-to-gif'],
    published: '2026-11-13',
    updated: '2026-11-13',
  },
  {
    slug: 'how-to-open-a-csv-in-excel-correctly',
    title: 'How to open a CSV in Excel correctly',
    description: 'Stop Excel dropping leading zeros, mangling long numbers and breaking accents when you open a CSV file.',
    intro:
      'Double-clicking a CSV makes Excel guess how to read it, and the guess is often wrong. The reliable way is to convert the CSV to an XLSX file first, or to use Excel\'s Data tab to import it and choose each column\'s type yourself.',
    steps: [
      'Easiest: convert the file with the CSV to Excel converter, then open the .xlsx. Leading zeros and text values stay as they are.',
      'Or in Excel, open a blank workbook and choose Data, then From Text/CSV.',
      'Pick the file and check that the file origin says 65001: UTF-8 (this fixes accents) and the delimiter matches your file.',
      'Press Transform Data if some columns need to stay as text, such as postcodes and phone numbers, and set their type to Text.',
      'Press Load.',
    ],
    sections: [
      {
        heading: 'What goes wrong',
        paragraphs: [
          'Leading zeros disappear: 01234 becomes 1234, which breaks postcodes, phone numbers and product IDs.',
          'Long numbers turn into scientific notation. Excel keeps only 15 digits of a number, so a 16-digit card or ID number is damaged for good once it is saved as a number.',
          'Some text is read as dates. A value like 1-2 can become 2 January, and some gene names have famously been mangled this way.',
          'Accents and non-English letters show as strange characters when the file is UTF-8 but Excel assumes an older encoding.',
        ],
      },
      {
        heading: 'Semicolons and commas',
        paragraphs: [
          'In countries that write decimals with a comma, Excel expects a semicolon between columns, so a comma CSV opens as one long column. The converter on this site looks at the first line and chooses the right separator, and also understands quoted values that contain commas.',
        ],
      },
      {
        heading: 'Going the other way',
        paragraphs: ['To save an Excel sheet as CSV for a database or an upload form, use the Excel to CSV converter. It writes a UTF-8 marker by default so Excel shows accents correctly when you open the CSV again.'],
      },
    ],
    faqs: [
      { q: 'Why does my CSV open as one column?', a: 'The separator does not match your region settings. Converting to XLSX, or importing through the Data tab and choosing the delimiter, fixes it.' },
      { q: 'Can I get my leading zeros back after Excel removed them?', a: 'Only if you still have the original CSV. Once Excel saves 1234 over 01234, the zero is gone, so always keep the original file.' },
      { q: 'Is my spreadsheet uploaded?', a: 'No. The converters run in your browser and the file never leaves your device.' },
    ],
    tools: ['csv-to-excel', 'excel-to-csv', 'text-encoding-fixer'],
    published: '2026-11-13',
    updated: '2026-11-13',
  },
  {
    slug: 'how-to-convert-units-without-mistakes',
    title: 'How to convert units without mistakes',
    description: 'The traps that cause wrong answers when you convert units: US and UK gallons, 1000 vs 1024, tonnes, temperature and Indian land units.',
    intro:
      'To convert units without mistakes, check which system the unit belongs to, use a tool with exact conversion factors, and write the unit next to every number. Most errors come from units that share a name but mean different amounts.',
    steps: [
      'Write the number with its unit, for example 5 mi, not just 5.',
      'Check that the unit means what you think. A gallon, a ton and a bigha all change with the country or state.',
      'Use a converter with exact factors, such as the length or weight converter, and read the answer with its unit.',
      'Sanity check: is the answer the right size? A marathon of 42 km should come out near 26 miles.',
      'Keep the original number and unit, and round only at the very end.',
    ],
    sections: [
      {
        heading: 'Units that share a name',
        paragraphs: [
          'A US gallon is 3.785 litres but a UK gallon is 4.546 litres, about 20 percent more. A US short ton is 2,000 pounds, a UK long ton is 2,240 pounds and a metric tonne is 1,000 kilograms.',
          'In computing, 1 KB is 1,000 bytes for disk makers and phone plans, but 1,024 bytes in some operating systems. That is why a 1 TB drive shows about 931 GB. The names KiB, MiB and GiB always mean 1,024.',
        ],
      },
      {
        heading: 'Temperature is different',
        paragraphs: [
          'Most conversions multiply by a factor. Temperature scales start at different zeros, so you must add or subtract as well: Fahrenheit equals Celsius times 9/5 plus 32. That is why doubling a Celsius temperature does not double the Fahrenheit one.',
        ],
      },
      {
        heading: 'Local land units',
        paragraphs: [
          'A bigha is not one fixed size in India. It is about 27,000 square feet in Uttar Pradesh, about 17,424 in Gujarat and 14,400 in West Bengal and Assam, and it can differ by district. A gaj is a square yard (9 square feet). For anything legal, use the figure in the local revenue record.',
        ],
      },
      {
        heading: 'Why it matters',
        paragraphs: ['In 1999 NASA lost the Mars Climate Orbiter because one team\'s software used pound-force seconds and another expected newton-seconds. A units mix-up is a small mistake with big consequences, so always keep the unit with the number.'],
      },
    ],
    faqs: [
      { q: 'How many feet are in a metre?', a: 'About 3.28084 feet. One foot is exactly 0.3048 metres.' },
      { q: 'Should I round conversions?', a: 'Only at the end. Rounding in the middle of a calculation adds error that grows with each step.' },
      { q: 'Are the converters exact?', a: 'They use the exact defined factors and show up to 10 significant digits. Indian land units are approximate by nature, because the local definitions differ.' },
    ],
    tools: ['length-converter', 'data-size-converter', 'indian-land-converter'],
    published: '2026-11-13',
    updated: '2026-11-13',
  },
];

export const guidePath = (slug: string): string => `/guides/${slug}/`;
export const guideBySlug = (slug: string): Guide | undefined => GUIDES.find((g) => g.slug === slug);
/** The first guide that features this tool, for the link on the tool page. */
export const guideForTool = (slug: string): Guide | undefined => GUIDES.find((g) => g.tools.includes(slug));
