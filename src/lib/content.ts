/** The "how to" steps, the questions and answers and the short explainer on each converter page. */
import { FORMAT_NAMES, type ToolLink } from './tools';
import { KBPS, MEDIA_PAGES, SETTINGS, mb, sizeLine } from './media-pages';
import { UNIT_PAIRS, UNIT_SOURCES, factorStatement, pairsForSet, unitWord, valueTable, type TableRow, type UnitPair, type UnitSource } from './unit-pages';
import { UNIT_SETS, convertUnit, formatNumber } from '../convert/units';

export interface Faq {
  q: string;
  a: string;
}

export interface UnitFacts {
  factor: string;
  rows: TableRow[];
  source: UnitSource;
  fromLabel: string;
  toLabel: string;
  /** Popular pairs that have a page of their own, for the "Popular conversions" links. */
  pairs: { slug: string; name: string }[];
}

export interface PageContent {
  steps: string[];
  faqs: Faq[];
  /** A short paragraph under the tool: what the formats are and when to pick one. */
  about: string;
  /** Question-style headings with their answers, written for this page only. Empty on pages that use `about`. */
  sections: { h: string; p: string }[];
  /** 40 to 60 words, shown right under the page heading. */
  answer: string;
  unit?: UnitFacts;
}

const BLURB: Record<string, string> = {
  mp3: 'MP3 is the most widely supported audio format. It plays on every phone, car stereo and music app, and its lossy compression keeps files small.',
  wav: 'WAV holds uncompressed audio. The files are large, but nothing is thrown away, which is why editors and studios like it.',
  m4a: 'M4A is AAC audio in an MP4 wrapper, the format Apple devices and iTunes use. It usually sounds a little better than MP3 at the same size.',
  aac: 'AAC is the successor to MP3 and is used by YouTube and many streaming services. A bare .aac file is less widely supported than M4A.',
  ogg: 'OGG (Vorbis) is an open, patent-free audio format, common in games and some Android apps.',
  flac: 'FLAC is lossless compression: about half the size of WAV with no loss of quality, so it suits music collections.',
  opus: 'OPUS is a modern open audio format that sounds good even at low bitrates. Voice notes in many chat apps use it.',
  mp4: 'MP4 is the video format that works almost everywhere: phones, TVs, browsers and social apps.',
  webm: 'WEBM is an open video format made for the web. Browsers play it directly and files are small, but older TVs and some editors do not accept it.',
  mov: 'MOV is Apple\'s QuickTime video format. iPhones record it, and it works well on Apple devices but less well elsewhere.',
  mkv: 'MKV is a flexible container that can hold many audio and subtitle tracks. It is popular for downloads and Blu-ray rips but many phones and TVs will not play it.',
  avi: 'AVI is an old Microsoft video format from the 1990s. It still turns up in old camera clips and downloads, and many modern devices reject it.',
  gif: 'GIF is an animated picture with no sound. It works everywhere but is huge compared with video.',
};

const SIZE_FAQ = (limit = 'about 500 MB on a computer and 100 MB on a phone'): Faq => ({
  q: 'How big a file can I convert?',
  a: `Everything runs in your browser's memory, so the limit is your device. We suggest ${limit}. Beyond that, the tab may slow down or run out of memory. A computer is much faster than a phone.`,
});

const PRIVATE_FAQ = (what: string): Faq => ({
  q: `Is my ${what} uploaded anywhere?`,
  a: `No. The conversion happens inside your browser tab, so your ${what} never leaves your device. We cannot see it or keep a copy.`,
});

const ENGINE_FAQ: Faq = {
  q: 'Why was the first conversion slow to start?',
  a: 'The first time you convert audio or video, your browser downloads the conversion engine (ffmpeg, about 30 MB) from jsDelivr (cdn.jsdelivr.net), a public file host, and checks it against a fixed fingerprint before using it. After that it is cached, so the next ones start straight away. Your files are not part of that download.',
};

const BATCH_FAQ: Faq = {
  q: 'Can I convert many files at once?',
  a: 'Yes. Drop several files in and they are converted one after another. When they finish you can download each one, or all of them together as one ZIP.',
};

const BASE = { sections: [] as { h: string; p: string }[], answer: '' };

function mediaSections(t: ToolLink, sizeText: string): { h: string; p: string }[] {
  const f = FORMAT_NAMES[t.from!]!;
  const to = FORMAT_NAMES[t.to!]!;
  const page = MEDIA_PAGES[t.slug]!;
  const fromBlurb = t.from === 'video' ? 'Videos come in many formats, such as MP4, MOV, MKV, WEBM and AVI. This converter reads all of them and keeps only the sound.' : BLURB[t.from!]!;
  return [
    { h: `What are ${f === 'video' ? 'video files' : f} and ${to}?`, p: `${fromBlurb} ${BLURB[t.to!]!}` },
    { h: `Who needs to convert ${f === 'video' ? 'video' : f} to ${to}?`, p: page.who },
    { h: `Does converting ${f === 'video' ? 'video' : f} to ${to} lose quality?`, p: page.quality },
    { h: `How big is the ${to} file?`, p: sizeText },
    { h: `Which devices and apps open a ${to} file?`, p: page.devices },
    { h: 'What settings does this converter use?', p: SETTINGS[t.to!]! },
  ];
}

function audioContent(t: ToolLink): PageContent {
  const f = FORMAT_NAMES[t.from!]!;
  const to = FORMAT_NAMES[t.to!]!;
  const page = MEDIA_PAGES[t.slug]!;
  const fromVideo = t.from === 'video' || t.from === 'mp4';
  const verb = t.slug === 'video-to-mp3' ? 'Extract MP3' : 'Convert';
  const noQuality = ['wav', 'flac'].includes(t.to!);
  const sizeText = fromVideo
    ? `A video has picture and sound, and the picture is most of its size. A 10-minute video of 100 MB typically has about 10 MB of sound at 128 kbit/s, so a 192 kbit/s MP3 comes to about ${mb(192, 600).toFixed(0)} MB, around ${((mb(192, 600) / 100) * 100).toFixed(0)} percent of the video. Each minute of MP3 is about ${(mb(192, 60)).toFixed(1)} MB at 192 kbit/s and ${(mb(96, 60)).toFixed(1)} MB at 96 kbit/s.`
    : `${sizeLine(t.from!, t.to!)} ${KBPS[t.from!] && KBPS[t.to!] && KBPS[t.to!]! > KBPS[t.from!]! ? 'The file grows because the target stores more data than the source.' : 'Choosing a lower bitrate shrinks it further; a higher one grows it.'}`;
  return {
    ...BASE,
    steps: [
      `Drop your ${fromVideo ? 'video' : f} files onto the box, or press Choose files.`,
      noQuality ? 'There are no quality settings for this one: the sound is written exactly as decoded.' : 'Pick a quality. 192 kbit/s is a good everyday choice; 320 is the best you can get for music, and 96 to 128 is fine for speech.',
      `Press ${verb}. A progress bar shows how far along it is.`,
      `Download your ${to} file, or all of them as a ZIP.`,
    ],
    about: page.who,
    answer: page.answer,
    sections: mediaSections(t, sizeText),
    faqs: [
      { q: `Why convert ${f === 'video' ? 'a video' : f} to ${to}?`, a: page.who },
      page.faqs[0],
      page.faqs[1],
      PRIVATE_FAQ(fromVideo ? 'video' : 'audio'),
      ENGINE_FAQ,
      SIZE_FAQ(),
    ],
  };
}

const VIDEO_SIZE =
  'How big the file ends up depends on the picture. Busy 1080p footage at this setting is often around 40 to 70 MB per minute, 720p roughly half of that, and a mostly still screen recording or slide video far less. A short clip converts in moments; a long, high-resolution one is slow because your own device does the work.';

function videoContent(t: ToolLink): PageContent {
  const f = FORMAT_NAMES[t.from!]!;
  const to = FORMAT_NAMES[t.to!]!;
  const page = MEDIA_PAGES[t.slug]!;
  return {
    ...BASE,
    steps: [
      `Drop your ${f} video onto the box, or press Choose files.`,
      'Press Convert. The first time, your browser downloads the converter engine, then the video is converted while you watch a progress bar.',
      `Download your ${to} file when it finishes, or all of them as a ZIP.`,
    ],
    about: page.who,
    answer: page.answer,
    sections: mediaSections(t, VIDEO_SIZE),
    faqs: [
      { q: `Why convert ${f} to ${to}?`, a: page.who },
      page.faqs[0],
      page.faqs[1],
      PRIVATE_FAQ('video'),
      ENGINE_FAQ,
      SIZE_FAQ(),
    ],
  };
}

function simple(steps: string[], about: string, faqs: Faq[]): PageContent {
  return { ...BASE, steps, about, faqs };
}

function baseContent(t: ToolLink): PageContent {
  switch (t.kind) {
    case 'audio':
      return audioContent(t);
    case 'video':
      return videoContent(t);
    case 'video-gif':
      return simple(
        ['Drop a video clip onto the box.', 'Choose where the GIF starts, how long it is, its width and its frames per second.', 'Press Make GIF.', 'Download the GIF, or share it straight from your files.'],
        BLURB['gif']!,
        [
          { q: 'How do I keep the GIF small?', a: 'GIF files grow fast. Keep the clip under 10 seconds, use a width of 320 to 480 pixels and 10 frames per second. Each of these cuts the size a lot.' },
          { q: 'Why does the GIF have no sound?', a: 'The GIF format cannot carry sound at all. If you need sound, keep the clip as an MP4 instead.' },
          { q: 'Can I turn any video into a GIF?', a: 'Yes: MP4, MOV, WEBM, MKV, AVI and most phone videos work. Pick the start and length to choose the moment.' },
          PRIVATE_FAQ('video'),
          ENGINE_FAQ,
          SIZE_FAQ(),
        ],
      );
    case 'gif-video':
      return simple(
        ['Drop your GIF onto the box.', 'Press Convert.', 'Download the MP4. It plays on every phone and in every app.'],
        `${BLURB['gif']!} ${BLURB['mp4']!}`,
        [
          { q: 'Why is the MP4 so much smaller than the GIF?', a: 'GIF stores every frame as a separate picture with a tiny palette. MP4 only stores what changes between frames, so it is often 5 to 20 times smaller.' },
          { q: 'Will it still loop?', a: 'The MP4 plays once. Most apps and websites let you set a video to loop, and social apps usually loop short clips themselves.' },
          { q: 'Does the MP4 have colour banding?', a: 'No. GIFs are limited to 256 colours, so the MP4 often looks better than the GIF did.' },
          PRIVATE_FAQ('GIF'),
          ENGINE_FAQ,
          SIZE_FAQ(),
        ],
      );
    case 'video-compress':
      return simple(
        ['Drop your video onto the box.', 'Choose a quality and a width. Small and 720 pixels is a good start for sharing on chat apps.', 'Press Compress and watch the progress bar.', 'Download the smaller MP4 and compare the sizes shown.'],
        BLURB['mp4']!,
        [
          { q: 'How much smaller will it get?', a: 'It depends on the video, but 50 to 90 percent smaller is common. Lowering the width saves the most; the Small quality setting saves more but looks softer.' },
          { q: 'Will it look worse?', a: 'Compressing always trades some detail for size. High keeps most detail, Medium suits phones, Small is for when the size limit matters more than looks.' },
          { q: 'What size does WhatsApp or email allow?', a: 'WhatsApp allows about 2 GB for documents but compresses video itself, and many email services stop at 20 to 25 MB. Compress, then check the size shown after.' },
          PRIVATE_FAQ('video'),
          ENGINE_FAQ,
          SIZE_FAQ(),
        ],
      );
    case 'video-trim':
      return simple(
        ['Drop your video onto the box.', 'Type the start time and the end time. Use seconds (90) or minutes and seconds (1:30).', 'Press Trim.', 'Download the cut clip as an MP4.'],
        BLURB['mp4']!,
        [
          { q: 'How do I type the times?', a: 'Seconds such as 90, minutes and seconds such as 1:30, or hours as 1:02:30. Leave the end empty to keep everything after the start.' },
          { q: 'Is the cut exact?', a: 'Yes, to the frame, because the clip is encoded again after cutting. That takes longer than a copy-only cut, but it avoids frozen or black starts.' },
          { q: 'Will the quality drop?', a: 'A little, because of the re-encode. A high quality setting is used.' },
          PRIVATE_FAQ('video'),
          ENGINE_FAQ,
          SIZE_FAQ(),
        ],
      );
    case 'tiff':
      return simple(
        ['Drop your TIFF files onto the box.', 'Choose a JPG quality. 90 is a good default.', 'Press Convert.', 'Download each JPG, or all of them as a ZIP.'],
        'TIFF is a high-quality picture format used by scanners, fax machines and professional photography. JPG is far smaller and opens everywhere, which is why people convert.',
        [
          { q: 'What happens to a multi-page TIFF?', a: 'Each page becomes its own JPG, named page1, page2 and so on, and you can download them together as a ZIP.' },
          { q: 'Will I lose quality?', a: 'JPG is lossy, so a little detail is traded for a much smaller file. At 90 or above you will not see it. Keep the TIFF if you may print or edit it later.' },
          { q: 'What about transparency?', a: 'JPG has no transparency, so any see-through parts become white.' },
          PRIVATE_FAQ('picture'),
          BATCH_FAQ,
          { q: 'Which TIFFs work?', a: 'Most uncompressed and common compressed TIFFs (such as LZW and PackBits) work. Rare variants, such as some 16-bit or CMYK files, may fail; the page tells you when one does.' },
        ],
      );
    case 'webp-gif':
      return simple(
        ['Drop your WEBP pictures onto the box.', 'Optionally choose a largest width to keep the GIF small.', 'Press Convert.', 'Download the GIF, or all of them as a ZIP.'],
        'WEBP is a modern picture format from Google that makes small files. GIF is older but works in every chat app and forum, so people convert when WEBP is refused.',
        [
          { q: 'Does an animated WEBP stay animated?', a: 'Not yet. In this version only the first frame is kept, so the GIF is a still picture. We say so on the page so you are not surprised.' },
          { q: 'Why is my GIF bigger than the WEBP?', a: 'GIF is an older format with weaker compression, so the file is usually larger. Choosing a smaller width helps.' },
          { q: 'What about transparent WEBP files?', a: 'Fully see-through areas stay see-through. Soft semi-transparent edges become solid or clear, because GIF only has on and off transparency.' },
          PRIVATE_FAQ('picture'),
          BATCH_FAQ,
          { q: 'How many colours does a GIF have?', a: 'At most 256, so photos can look a little grainy. That is a limit of the GIF format, not of this tool.' },
        ],
      );
    case 'excel':
      if (t.to === 'md')
        return simple(
          ['Drop your Excel file (.xlsx, .xls or .ods) onto the box.', 'Press Convert.', 'Download the .md file. A workbook with several sheets gives one file per sheet.'],
          'Chat tools and notes apps cannot take a pasted spreadsheet, but they can show a Markdown table. This turns each sheet into one, with the first row as the header.',
          [
            { q: 'What happens to formulas and formatting?', a: 'You get the values the sheet shows. Formulas, colours, merged cells and charts are not part of a Markdown table and are dropped.' },
            { q: 'What happens to a cell with a pipe or a line break?', a: 'A pipe is escaped as \\| so it does not split the cell, and a line break becomes <br>, because a Markdown table row has to stay on one line.' },
            { q: 'Can I turn a big sheet into a table?', a: 'Yes, but a large table is hard to read in Markdown and may be too long for a chat message. For a big sheet, keep only the rows you need first.' },
            PRIVATE_FAQ('spreadsheet'),
            BATCH_FAQ,
          ],
        );
      return t.to === 'xlsx'
        ? simple(
            ['Drop your CSV file onto the box.', 'Press Convert.', 'Download the .xlsx file and open it in Excel, Google Sheets or LibreOffice.'],
            'CSV is plain text with commas between values. XLSX is the Excel format, with proper columns, number types and room for several sheets.',
            [
              { q: 'Why does opening a CSV in Excel go wrong?', a: 'Excel guesses how to read plain text. It may merge columns, drop leading zeros or turn long numbers into 1.23E+11. Converting to XLSX first gives each value its own cell.' },
              { q: 'Do leading zeros survive?', a: 'Yes. Values like 01234 stay as text, so postcodes, phone numbers and IDs are not damaged. Plain numbers such as 42 become real numbers you can add up.' },
              { q: 'What separators work?', a: 'Commas, semicolons, tabs and pipes. The tool looks at the first line and picks the one that fits, and understands quoted values with commas inside.' },
              { q: 'Do accents and other languages work?', a: 'Yes, if the CSV is saved as UTF-8. If letters look wrong, fix the file first with the TXT encoding fixer.' },
              PRIVATE_FAQ('spreadsheet'),
              BATCH_FAQ,
            ],
          )
        : simple(
            ['Drop your Excel file (.xlsx, .xls or .ods) onto the box.', 'Keep the tick if you open the CSV in Excel again, so accents show correctly.', 'Press Convert.', 'Download the CSV. A workbook with several sheets gives one CSV per sheet.'],
            'XLSX is the Excel format. CSV is plain text that every program and database can read, which makes it the usual way to move data around.',
            [
              { q: 'What happens to formulas?', a: 'CSV has no formulas, so you get the values the sheet shows. Dates and numbers are written the way Excel displays them.' },
              { q: 'What about workbooks with several sheets?', a: 'Each sheet becomes its own CSV file, named after the sheet. You can download them together as a ZIP.' },
              { q: 'Why add the UTF-8 marker?', a: 'Excel opens CSV files with a guess at the encoding. A small marker at the start tells it the file is UTF-8, so accents and non-English letters stay correct. Turn it off for databases and scripts that dislike the marker.' },
              { q: 'Which files work?', a: 'XLSX, XLSM, XLS (old Excel) and ODS (LibreOffice). Password-protected files cannot be opened.' },
              PRIVATE_FAQ('spreadsheet'),
              BATCH_FAQ,
            ],
          );
    case 'audio-speech':
      return simple(
        ['Drop your recording onto the box. A video works too: only its sound is used.', 'Choose a small MP3 for upload, or a WAV file if your transcriber needs one. Then press Convert.', 'Download the file and give it to your transcription tool.'],
        'Speech-to-text tools such as Whisper listen at 16 kHz on one channel. Giving them that directly makes the file much smaller and quicker to upload, and the transcript is usually just as good.',
        [
          { q: 'Why 16 kHz and mono?', a: 'Speech models are trained on single-channel sound sampled 16,000 times a second. Extra channels and higher rates only make the file bigger, so they are removed here.' },
          { q: 'How small does the file get?', a: 'The MP3 uses 32 kbit/s, which is about 14 MB for an hour of speech, well under the 25 MB upload limit that many services have. A WAV file is about 115 MB per hour.' },
          { q: 'Is it good for music?', a: 'No. This setting is made for voices. Music loses a lot at 16 kHz mono, so use the MP3 or WAV converters for that.' },
          PRIVATE_FAQ('audio'),
          ENGINE_FAQ,
          SIZE_FAQ(),
        ],
      );
    case 'audio-split':
      return simple(
        ['Drop a long recording onto the box. A video works too: only its sound is used.', 'Choose the largest size for one part. 24 MB stays under the 25 MB limit that many transcription services have.', 'Press Convert. The sound is saved as numbered MP3 parts.', 'Download the parts one by one, or all of them as a ZIP.'],
        'Many upload forms and transcription services refuse files over a size limit, for example 25 MB. Cutting a long recording into parts that each stay under the limit lets you send it in pieces.',
        [
          { q: 'How long is each part?', a: 'It depends on the size and the quality you choose. At 64 kbit/s a 24 MB part is about 50 minutes of sound, and at 32 kbit/s about 100 minutes.' },
          { q: 'Does it cut words in half?', a: 'Parts are cut at a fixed length, so a word may be split at the join. Most transcription tools cope with that. If you need clean breaks, cut at pauses with a sound editor.' },
          { q: 'Why is the sound saved again as MP3?', a: 'A fixed bitrate makes the size of each part predictable, so every part stays under your limit. The cost is a small loss of quality, which hardly matters for speech.' },
          PRIVATE_FAQ('audio'),
          ENGINE_FAQ,
          SIZE_FAQ(),
        ],
      );
    case 'video-frames':
      return simple(
        ['Drop your video onto the box.', 'Choose how often to take a picture, such as one every 5 seconds, and how wide the pictures should be.', 'Press Convert. The first time, your browser downloads the converter engine, then the video is converted while you watch a progress bar.', 'Download the pictures one by one, or all of them as a ZIP.'],
        'A video is many pictures shown quickly. Pulling out one every few seconds gives you stills for slides, notes or thumbnails, or for an AI tool that reads pictures but cannot watch a video.',
        [
          { q: 'How many pictures do I get?', a: 'One for every gap you choose, up to 200. A 10-minute video with a picture every 5 seconds gives 120. For a longer video, choose a longer gap or trim it first.' },
          { q: 'What quality are the pictures?', a: 'They are JPG files at high quality. Choose a width to make them smaller, or keep the original size for the sharpest result.' },
          { q: 'Does it find the important moments?', a: 'No. It takes pictures at even gaps, so it can miss a quick moment. Use a shorter gap for fast-moving videos.' },
          PRIVATE_FAQ('video'),
          ENGINE_FAQ,
          SIZE_FAQ(),
        ],
      );
    case 'docx':
      return simple(
        ['Drop your Word file (.docx) onto the box.', 'Press Convert.', 'Download the Markdown (.md) file, or open it and copy the text into a chat, a README or a note.'],
        'Word files are built for printing. Markdown is plain text with simple marks, so chat tools, README files and notes apps can read it.',
        [
          { q: 'What carries over?', a: 'Headings, paragraphs, bold and italic, links, lists and tables. Colours, fonts, page layout, headers and footers do not exist in Markdown and are dropped.' },
          { q: 'What happens to pictures?', a: 'They are left out, so the Markdown stays small and easy to read. Copy any picture you need from the Word file itself.' },
          { q: 'Does it work with old .doc files?', a: 'No. Only the newer .docx format works. Open an old .doc file in Word or LibreOffice and save it as .docx first.' },
          PRIVATE_FAQ('file'),
          BATCH_FAQ,
        ],
      );
    case 'tokens':
      return simple(
        ['Paste or type your text in the box.', 'Read the estimated number of tokens, with the characters, words and lines below it.', 'Compare it with the limit of the AI model you use.'],
        'AI models read text in pieces called tokens, and their limits and prices are counted in tokens. A token is roughly four characters, or three quarters of a word, of English.',
        [
          { q: 'How accurate is this?', a: 'It is an estimate. Each model splits text in its own way, so only that model\'s own tokenizer gives an exact count. For English prose the estimate is usually close; treat it as a guide, not a bill.' },
          { q: 'How is the estimate worked out?', a: 'Two rules of thumb are used: one token for every 4 characters, and 3 tokens for every 4 words. The page shows both and headlines the middle of the two.' },
          { q: 'Why can my language or code give more tokens?', a: 'Text in other languages, numbers, code and unusual symbols usually split into more tokens than the same amount of English, so the real count can be higher than the estimate.' },
          { q: 'Is anything sent to a server?', a: 'No. It is all calculated in your browser as you type.' },
        ],
      );
    case 'audio-trim':
      return simple(
        ['Drop your recording onto the box. A video works too: only its sound is used.', 'Type the start and end time. Use seconds (90) or minutes and seconds (1:30). Leave the end empty to keep everything after the start.', 'Press Trim.', 'Download the cut part as an MP3.'],
        'Trimming keeps just the part of a recording you need: a ringtone, a quote from an interview or the start of a long lecture. The cut part is saved as an MP3.',
        [
          { q: 'How do I type the times?', a: 'Seconds such as 90, minutes and seconds such as 1:30, or hours as 1:02:30. Leave the end empty to keep everything after the start.' },
          { q: 'Is the cut exact?', a: 'It is cut to a fraction of a second, because the sound is encoded again after cutting.' },
          { q: 'Will the quality drop?', a: 'A little, because the sound is saved again as an MP3 at 192 kbit/s, which is fine for speech and everyday music.' },
          PRIVATE_FAQ('audio'),
          ENGINE_FAQ,
          SIZE_FAQ(),
        ],
      );
    case 'audio-volume':
      return simple(
        ['Drop your recording onto the box. A video works too: only its sound is used.', 'Choose whether to even out the volume, for a recording where some parts are loud and others quiet, or to change it by a fixed amount.', 'Press Convert.', 'Download the MP3 and listen to it before you use it.'],
        'Recordings made far from the microphone, or on a phone, are often too quiet. Evening out the volume brings the quiet and loud parts to a similar level, and a fixed change makes everything louder or quieter by the same amount.',
        [
          { q: 'What does evening out the volume do?', a: 'It measures the loudness of the whole recording and moves it to -16 LUFS, a level commonly used for podcasts and voice. It works in one pass, so it is a good approximation, not a studio master.' },
          { q: 'How much louder is +6 dB?', a: '+6 dB roughly doubles the signal level, and +10 dB sounds about twice as loud. If the loudest parts go too high they are clipped and sound distorted, so listen to the result and use a smaller step if needed.' },
          { q: 'Can it fix a very quiet recording?', a: 'It can lift it, but it also lifts the background noise. A recording with a lot of hiss gets louder hiss.' },
          PRIVATE_FAQ('audio'),
          ENGINE_FAQ,
          SIZE_FAQ(),
        ],
      );
    case 'video-mute':
      return simple(
        ['Drop your video onto the box.', 'Press Convert.', 'Download the silent video. Its file name ends in -muted.'],
        'Removing the sound is useful before you share a screen recording, add your own music, or post a clip where the background audio would cause trouble.',
        [
          { q: 'Is the picture changed?', a: 'Not for MP4, M4V, MOV, MKV and WEBM files: the picture is copied exactly as it is, so it is very quick and there is no loss in quality. Other formats, such as AVI, are converted to MP4.' },
          { q: 'Can I get the sound without the picture?', a: 'Yes, use the Video to MP3 converter.' },
          { q: 'Can I put the sound back?', a: 'Not into the new file, because the sound is not kept in it. Keep your original.' },
          PRIVATE_FAQ('video'),
          ENGINE_FAQ,
          SIZE_FAQ(),
        ],
      );
    case 'video-rotate':
      return simple(
        ['Drop your video onto the box.', 'Choose how to turn it: a quarter turn either way, upside down, or a mirror flip.', 'Press Convert. The first time, your browser downloads the converter engine, then the video is converted while you watch a progress bar.', 'Download your MP4 file, or all of them as a ZIP.'],
        'A video filmed with the phone held the wrong way, or with a camera mounted upside down, plays sideways. Turning the video fixes the picture itself, so it looks right in every player.',
        [
          { q: 'What is the difference between a turn and a flip?', a: 'A turn keeps the picture the right way round and only changes which side is up. A mirror flip swaps left and right, so any text in the video reads backwards.' },
          { q: 'Does it change the quality?', a: 'A little, because the video is encoded again. A high quality setting is used, so you will not notice it in everyday clips.' },
          { q: 'Does the video get a different shape?', a: 'After a quarter turn a landscape video becomes portrait and the other way round, so the width and height swap.' },
          PRIVATE_FAQ('video'),
          ENGINE_FAQ,
          SIZE_FAQ(),
        ],
      );
    case 'video-speed':
      return simple(
        ['Drop your video onto the box.', 'Choose a speed. Below 1 is slow motion and above 1 is fast forward.', 'Press Convert. The first time, your browser downloads the converter engine, then the video is converted while you watch a progress bar.', 'Download your MP4 file, or all of them as a ZIP.'],
        'Speeding a video up makes a long recording quick to watch, and slowing it down shows the detail in a fast moment. The sound is sped up or slowed down with the picture.',
        [
          { q: 'Does the pitch of the voice change?', a: 'No. The sound is stretched or squeezed without changing its pitch, so a voice at double speed is quicker but not higher.' },
          { q: 'How slow or fast can it go?', a: 'From a quarter of the speed to four times. Very large changes sound rough, so use a gentler change for speech.' },
          { q: 'Is slow motion smooth?', a: 'The same frames are shown for longer, so slow motion can look jerky. This tool does not make up new frames.' },
          PRIVATE_FAQ('video'),
          ENGINE_FAQ,
          SIZE_FAQ(),
        ],
      );
    case 'data':
      return dataContent(t);
    case 'units':
      return unitsContent(t);
    case 'bases':
      return simple(
        ['Click any of the four boxes and type your number.', 'The other boxes update straight away.', 'Press Copy next to the one you need.'],
        'Computers count in binary (0 and 1). Programmers write the same numbers in hexadecimal (0 to 9 and A to F) because it is shorter. Decimal is the everyday system.',
        [
          { q: 'How do I convert binary to decimal?', a: 'Type the binary number in the Binary box. The decimal value appears in the Decimal box. For example 1010 in binary is 10 in decimal.' },
          { q: 'How do I convert hex to decimal?', a: 'Type the hex number in the Hexadecimal box, with or without 0x in front. FF is 255.' },
          { q: 'Does it work for very large numbers?', a: 'Yes. It uses exact whole-number maths, so there is no rounding, even for numbers with hundreds of digits.' },
          { q: 'Can I use negative numbers or fractions?', a: 'Negative whole numbers work with a minus sign. Fractions are not supported: this tool is for whole numbers.' },
          { q: 'Is anything sent to a server?', a: 'No. It is all calculated in your browser as you type.' },
        ],
      );
    case 'words':
      return simple(
        ['Type your number. Commas are fine and decimals work.', 'Choose Indian or international style.', 'To write an amount for a cheque, choose rupees and paise or dollars and cents.', 'Press Copy to use the words.'],
        'The Indian system groups digits as thousand, lakh and crore (1,00,00,000). The international system uses thousand, million and billion (10,000,000). The same number is spelled differently in each.',
        [
          { q: 'What is the difference between Indian and international style?', a: 'Indian style counts in lakh (100,000) and crore (10,000,000). International style counts in million and billion. 12,50,000 is twelve lakh fifty thousand in Indian style and one million two hundred and fifty thousand in international style.' },
          { q: 'How do I write an amount for a cheque?', a: 'Choose "Rupees and paise (cheque style)" and type the amount. 1250.50 becomes "Rupees One Thousand Two Hundred Fifty and Paise Fifty Only". Always check the result against your bank\'s rules.' },
          { q: 'How big a number can it handle?', a: 'International style goes to the sextillions, Indian style keeps counting in crores, so any number you are likely to write works.' },
          { q: 'Do decimals work?', a: 'Yes. In plain mode, 12.05 is "twelve point zero five". In cheque mode the two digits after the point become paise or cents.' },
          { q: 'Is anything sent to a server?', a: 'No. The words are made in your browser as you type.' },
        ],
      );
    case 'roman':
      return simple(
        ['Type a number from 1 to 3999, or Roman numerals such as MCMXCIV.', 'The answer appears below straight away.', 'Press Copy to use it.'],
        'Roman numerals use the letters I, V, X, L, C, D and M. A smaller letter before a larger one is subtracted (IV is 4), and after it is added (VI is 6).',
        [
          { q: 'How do I write 4 and 9 in Roman numerals?', a: 'Four is IV (one before five) and nine is IX (one before ten). The same rule gives 40 as XL, 90 as XC, 400 as CD and 900 as CM.' },
          { q: 'Why does it stop at 3999?', a: 'Standard Roman numerals have no symbol above M (1000) and repeat a letter at most three times, so the largest number is MMMCMXCIX, which is 3999.' },
          { q: 'Why is IIII not accepted?', a: 'The standard form writes 4 as IV. Clock faces sometimes use IIII, but this tool only accepts the standard form so it can catch typing mistakes.' },
          { q: 'Is there a zero?', a: 'No. The Romans had no symbol for zero, so the converter starts at 1.' },
          { q: 'Is anything sent to a server?', a: 'No. It is calculated in your browser.' },
        ],
      );
    case 'case':
      return simple(
        ['Paste or type your text.', 'Press the case you want: upper, lower, Title, camelCase and so on.', 'Press Copy to use the result.'],
        'Programmers use camelCase, snake_case and kebab-case for names. Writers use Title Case for headings and Sentence case for normal text.',
        [
          { q: 'What is the difference between Title Case and Sentence case?', a: 'Title Case capitalises the first letter of every word, as in a book title. Sentence case only capitalises the first word of each sentence, as in normal writing.' },
          { q: 'What are camelCase, snake_case and kebab-case?', a: 'They are ways to join words without spaces for code and URLs: camelCase (helloWorld), snake_case (hello_world) and kebab-case (hello-world).' },
          { q: 'Does it work with accents and other languages?', a: 'Yes for letters with a clear upper and lower case, such as é, ü, ñ and Cyrillic. Turkish dotted and dotless i follow standard rules and may need a manual fix.' },
          { q: 'Is my text sent anywhere?', a: 'No. It is changed in your browser as you type.' },
        ],
      );
    case 'colour':
      return simple(
        ['Type a colour in the HEX, RGB or HSL box, or use the colour picker.', 'The other two boxes and the swatch update.', 'Press Copy next to the code you need.'],
        'HEX (#FFD23F) is the short form web designers use. RGB gives the red, green and blue amounts from 0 to 255. HSL gives hue, saturation and lightness, which is easier to adjust by hand.',
        [
          { q: 'How do I convert HEX to RGB?', a: 'Type the HEX code, with or without the #. The RGB box shows the three numbers. #FFD23F is rgb(255, 210, 63).' },
          { q: 'What does HSL mean?', a: 'Hue is the colour on a wheel from 0 to 360, saturation is how vivid it is, and lightness is how light or dark. It is handy for making a lighter or darker version of a colour.' },
          { q: 'Does it accept 3-digit HEX?', a: 'Yes. #F80 is the same as #FF8800.' },
          { q: 'Why do my values change by 1 when I convert back?', a: 'HSL values are rounded to whole numbers, so a round trip can shift a colour by a tiny amount. HEX and RGB are exact.' },
          { q: 'Is anything sent to a server?', a: 'No. It is all calculated in your browser.' },
        ],
      );
    case 'timezone':
      return simple(
        ['Pick the date and time, and the zone you start from.', 'Add the cities you want to compare. Remove any with the ✕ button.', 'Read each city\'s local time. "Next day" or "previous day" is shown when the date differs.'],
        'Time zones are set by governments, and many places change their clocks for daylight saving. This tool uses your browser\'s built-in time zone database, so the offsets are correct for the date you choose.',
        [
          { q: 'How do I convert IST to another time zone?', a: 'Keep India (Kolkata) as the starting zone, set your time, and add the cities you want. India is UTC+05:30 all year and has no daylight saving.' },
          { q: 'Is daylight saving handled?', a: 'Yes. Offsets are worked out for the exact date you pick, so New York is UTC-05:00 in winter and UTC-04:00 in summer.' },
          { q: 'Why does the date change for some cities?', a: 'When it is late evening in one place it may already be the next day in another. The table marks those rows "next day" or "previous day".' },
          { q: 'Which cities are included?', a: 'A list of the main cities from each zone. If yours is not listed, pick one in the same zone.' },
          { q: 'Does it use my location?', a: 'Only to pick a starting zone: your browser tells the page its time zone, and nothing is sent anywhere.' },
        ],
      );
    case 'dates':
      return simple(
        ['Type your date and say how it is written: day first, month first or year first.', 'See it in every common format below.', 'Press Copy on the one you need.'],
        'The same date is written differently around the world. 04/03/2026 is 4 March in India and the UK, but 3 April in the US. ISO 8601 (2026-03-04) avoids the confusion and sorts correctly.',
        [
          { q: 'What is the difference between DD/MM/YYYY and MM/DD/YYYY?', a: 'DD/MM/YYYY puts the day first, as in India, the UK and most countries. MM/DD/YYYY puts the month first, as in the United States. 04/03/2026 is 4 March or 3 April depending on the system.' },
          { q: 'What is ISO 8601?', a: 'An international standard that writes dates as YYYY-MM-DD, such as 2026-03-04. It is unambiguous and sorts in date order, so databases and programmers prefer it.' },
          { q: 'Why does it say my date is not real?', a: 'Either the day does not exist (31 February) or the order is wrong (a month of 25). Check the "written as" setting.' },
          { q: 'Does it handle two-digit years?', a: 'Yes. A two-digit year such as 26 is read as 2026.' },
          { q: 'Is anything sent to a server?', a: 'No. It is all calculated in your browser.' },
        ],
      );
    default:
      return simple([], '', []);
  }
}

const TAIL_FILES = 'It runs in your browser, so your files are never uploaded, and there is no sign-up, no watermark and no ads.';
const TAIL_CALC = 'It works in your browser as you type, nothing is sent anywhere, and there is no sign-up, no watermark and no ads.';

/** The exact factor, a table of common values and the source, for a unit set and a pair of its units. */
export function unitFacts(setKey: string, from: string, to: string): UnitFacts {
  const set = UNIT_SETS[setKey]!;
  return {
    factor: factorStatement(setKey, from, to),
    rows: valueTable(setKey, from, to),
    source: UNIT_SOURCES[setKey]!,
    fromLabel: set.units.find((u) => u.id === from)!.symbol,
    toLabel: set.units.find((u) => u.id === to)!.symbol,
    pairs: pairsForSet(setKey).map((p) => ({ slug: p.slug, name: p.slug.replace(/-/g, ' ') })),
  };
}

export function contentFor(t: ToolLink): PageContent {
  const c = baseContent(t);
  const answer = c.answer || `${t.quick} ${t.kind === 'units' || ['bases', 'words', 'roman', 'case', 'colour', 'timezone', 'dates', 'tokens'].includes(t.kind) ? TAIL_CALC : TAIL_FILES}`;
  const unit = t.kind === 'units' && t.units ? unitFacts(t.units, UNIT_SETS[t.units]!.defaultFrom, UNIT_SETS[t.units]!.defaultTo) : undefined;
  return { ...c, answer, ...(unit ? { unit } : {}) };
}

/** Every popular pair page, as the small objects the page and the sitemap need. */
export const PAIR_SLUGS = UNIT_PAIRS.map((p) => p.slug);

/** The page text for a popular pair such as cm to inches. */
export function pairContent(pair: UnitPair): PageContent {
  const set = UNIT_SETS[pair.set]!;
  const name = pair.slug.replace(/-/g, ' ');
  const facts = unitFacts(pair.set, pair.from, pair.to);
  const fromWord = unitWord(pair.set, pair.from, 2);
  const toWord = unitWord(pair.set, pair.to, 2);
  const five = formatNumber(convertUnit(set, pair.from, pair.to, 5));
  const temp = pair.set === 'temperature';
  return {
    ...BASE,
    steps: [`Type the number you want to convert in the Value box.`, `The units are already set to ${fromWord} and ${toWord}. Change them or press the ⇄ button to swap.`, 'Read the answer, or look it up in the table of common values below.'],
    about: pair.note,
    answer: `To convert ${name}, type the number and read the answer. ${facts.factor} The converter works in your browser as you type, nothing is sent anywhere, and there is no sign-up, no watermark and no ads.`,
    sections: [{ h: `What is the exact factor for ${name}?`, p: `${facts.factor} ${pair.note}` }],
    unit: facts,
    faqs: [
      { q: `How many ${toWord} are in one ${unitWord(pair.set, pair.from, 1)}?`, a: facts.factor },
      { q: `How do I convert ${name} by hand?`, a: temp ? `${facts.factor} For example, 5 ${facts.fromLabel} is ${five} ${facts.toLabel}.` : `Multiply the number of ${fromWord} by the factor: ${facts.factor} For example, 5 ${facts.fromLabel} is ${five} ${facts.toLabel}.` },
      pair.faq,
      { q: 'Is anything sent to a server?', a: 'No. The conversion is calculated in your browser as you type, and nothing leaves your device.' },
    ],
  };
}

/** The first step of the converters that take pasted text, worded once so it is translated once. */
const PASTE_STEPS = ['Paste your text into the left box, or drop a file in. Try an example if you just want to see it work.', 'The result appears on the right as you type.', 'Press Download, or Copy to paste it somewhere else.'];

function dataContent(t: ToolLink): PageContent {
  const spec: Record<string, { why: string; steps?: string[]; extra: Faq[]; noError?: boolean }> = {
    'csv-to-markdown-table': { why: 'A Markdown table puts rows and columns into a chat message, a README or a note, where pasting a spreadsheet would lose the layout.', steps: PASTE_STEPS, extra: [
      { q: 'Why are there dashes under the first row?', a: 'Markdown needs a separator row of dashes between the header and the body. The first row of your CSV becomes the header, and the columns are padded so the table also reads well as plain text.' },
      { q: 'What happens to a cell with a pipe or a line break?', a: 'A pipe is escaped as \\| so it does not split the cell, and a line break becomes <br>, because a Markdown table row has to stay on one line.' },
    ] },
    'markdown-table-to-csv': { why: 'Chat tools and documentation write tables in Markdown. CSV lets you open the same table in Excel or Google Sheets.', steps: PASTE_STEPS, extra: [
      { q: 'Can I paste text that has more than a table in it?', a: 'Yes. The tool finds the first table, a header row followed by a row of dashes, and ignores the text around it. Only that table is converted.' },
      { q: 'Are alignment colons and escaped pipes handled?', a: 'Yes. Colons in the separator row, such as :---:, only set alignment and are dropped. An escaped pipe (\\|) stays inside its cell, and <br> becomes a line break inside a quoted CSV cell.' },
    ] },
    'json-to-jsonl': { why: 'JSON Lines has one JSON value on each line. Training data, batch jobs and log files use it because a program can read it one line at a time.', steps: PASTE_STEPS, extra: [
      { q: 'What JSON works?', a: 'An array gives one line per item, such as [{"a":1},{"a":2}]. A single object gives one line. Each line is compact JSON with no extra spaces.' },
      { q: 'What is the difference between JSON and JSONL?', a: 'A JSON file is one value, so a program has to read all of it before using any. A JSONL file is many small values, one per line, so it can be read, added to and split line by line. The data is the same.' },
    ] },
    'jsonl-to-json': { why: 'Many editors and tools expect one JSON value, not a file of separate lines. Gathering the lines into one array makes the data easy to open and share.', steps: PASTE_STEPS, extra: [
      { q: 'What happens to blank lines?', a: 'They are skipped, and so is the byte order mark that some exports start with. Every other line must be valid JSON.' },
      { q: 'Does the order stay the same?', a: 'Yes. The first line becomes the first item of the array, and the result is indented with two spaces so you can read it.' },
    ] },
    'csv-to-jsonl': { why: 'Datasets for fine-tuning and batch jobs are often kept in a spreadsheet but have to be uploaded as JSON Lines, one record per line.', steps: PASTE_STEPS, extra: [
      { q: 'How do the columns become keys?', a: 'The first row names the keys. Every other row becomes one line with those keys, and plain numbers and true or false become real JSON values.' },
      { q: 'Will leading zeros survive?', a: 'Values such as 01234 stay as text, so postcodes and IDs are not changed. Only plain numbers like 42 or 3.5 become numbers.' },
    ] },
    'srt-to-vtt': { why: 'SRT is the common subtitle file. Web browsers and the HTML video player want WebVTT, so a web page needs the VTT version.', steps: PASTE_STEPS, extra: [
      { q: 'What changes in the file?', a: 'A WEBVTT line is added at the top and the milliseconds are separated with a dot instead of a comma. The cue numbers, timings and text stay the same.' },
      { q: 'Does it keep bold, italic and other tags?', a: 'Yes. Tags such as <i> and <b> are left in the text, because WebVTT understands them too.' },
    ] },
    'vtt-to-srt': { why: 'WebVTT is the web subtitle format. Many video editors, players and upload forms only accept SRT.', steps: PASTE_STEPS, extra: [
      { q: 'What is removed from a VTT file?', a: 'The WEBVTT header, notes, style blocks, cue settings such as align:start, and tags such as <v Name> are removed. The cues are numbered from 1 and the times use a comma before the milliseconds.' },
      { q: 'What about times without hours?', a: 'WebVTT may write 01:02.500 for a time under an hour. SRT always needs hours, so the tool writes 00:01:02,500.' },
    ] },
    'subtitles-to-text': { why: 'A transcript is easier to read, search and paste into a document or a chat when the numbers and timings are gone.', steps: PASTE_STEPS, extra: [
      { q: 'What do I get?', a: 'Only the words, one subtitle after another, each on its own line. Numbers, timings, notes and tags are removed, and a subtitle that runs over two lines is joined into one.' },
      { q: 'Does it work for both SRT and VTT?', a: 'Yes. The tool finds the timing lines itself, so you can paste either format without choosing.' },
    ] },
    'json-to-toml': { why: 'TOML is a settings format that is easy to read by hand. Python projects, Rust and many apps use it for configuration.', steps: PASTE_STEPS, extra: [
      { q: 'Why does my JSON need to be an object?', a: 'A TOML file is a table of keys, so the top level must be an object such as {"name":"Quack"}. A top-level array or a single value cannot be written as TOML.' },
      { q: 'What about null values?', a: 'TOML has no null, so a null in your data cannot be written. The page stops with a message naming the key, so you can replace it with a value or remove it.' },
    ] },
    'toml-to-json': { why: 'TOML settings are easy to write, but programs and APIs usually want JSON.', steps: PASTE_STEPS, extra: [
      { q: 'Do tables and arrays of tables work?', a: 'Yes. A [table] section becomes a nested object and a [[table]] section becomes an array of objects.' },
      { q: 'What happens to dates?', a: 'TOML has real date and time values and JSON does not, so they are written as text in the standard format.' },
    ] },
    'xml-to-csv': { why: 'Many exports and feeds are XML, but a spreadsheet needs rows and columns.', steps: PASTE_STEPS, extra: [
      { q: 'Which part becomes the rows?', a: 'The first repeated tag, such as every <book> inside <books>. Each one becomes a row. If nothing repeats, the whole document becomes a single row.' },
      { q: 'What happens to attributes and nested tags?', a: 'Attributes become columns with an @ in front, such as @id. Nested tags become dotted columns, such as address.city.' },
    ] },
    'clean-chat-text': { why: 'Chat tools write in Markdown, so pasting an answer into an email or a form leaves stars, hashes and backticks in the text. This turns it into plain text.', steps: PASTE_STEPS, noError: true, extra: [
      { q: 'What is removed?', a: 'Heading marks, bold and italic stars, backticks, code fences, quote marks and horizontal rules are removed and the words stay. A link becomes its words followed by the address in brackets, and bullets become dashes.' },
      { q: 'What else does it tidy?', a: 'Curly quotes and long dashes become plain ones, the ellipsis character becomes three dots, odd spaces become normal spaces, and invisible characters such as the zero-width space are removed. The joiners that some scripts and emoji need are kept.' },
      { q: 'Does it change what my text says?', a: 'No. Only formatting marks and odd characters change. The words, numbers and line breaks stay. Read the result before you send it, because a star or underscore that was part of your own text can be taken for formatting.' },
    ] },
    'base64-encode': { why: 'Base64 writes any text as plain letters and digits, so it can travel safely in an email, a web address, a JSON file or a setting.', steps: PASTE_STEPS, noError: true, extra: [
      { q: 'Is Base64 a way to keep text secret?', a: 'No. Base64 is an encoding, not encryption: anyone can decode it in a second. Never use it to hide passwords or keys.' },
      { q: 'Why is the result longer?', a: 'Base64 turns every 3 bytes into 4 characters, so the result is about a third bigger than the original.' },
      { q: 'Can I encode a file or a picture?', a: 'This page encodes text. A picture is not text, and the Base64 of a big file is extremely long.' },
    ] },
    'base64-decode': { why: 'Base64 shows up in emails, tokens, data addresses and settings files. Decoding it shows the text inside.', steps: PASTE_STEPS, extra: [
      { q: 'Does it accept URL-safe Base64?', a: 'Yes. The - and _ characters are accepted in place of + and /, and line breaks and missing equals signs at the end are fine.' },
      { q: 'What if it is a picture or another file?', a: 'The page tells you that the Base64 does not decode to text. Only text is shown here, because other files cannot be read as letters.' },
      { q: 'Which text encoding is used?', a: 'UTF-8, which covers every language and emoji. Bytes that are not valid UTF-8 are reported, not shown wrongly.' },
    ] },
    'url-encode': { why: 'A web address can only hold a few plain characters. Anything else, such as a space, an ampersand or an accent, has to be written as a percent code.', steps: PASTE_STEPS, noError: true, extra: [
      { q: 'Which characters are left alone?', a: "Letters, digits and - _ . ! ~ * ' ( ). Everything else, including a space, / ? & = # and non-English letters, becomes percent codes." },
      { q: 'Should I encode a whole address?', a: 'No. Encode only the value you are putting into it, such as the text after q= in a search. Encoding a whole address would also encode its colons and slashes and break it.' },
      { q: 'How are accents and emoji written?', a: 'As their UTF-8 bytes, each with a percent sign in front. For example ü becomes %C3%BC.' },
    ] },
    'url-decode': { why: 'Addresses and form data full of %20 and %C3%BC are hard to read. Decoding shows the characters they stand for.', steps: PASTE_STEPS, extra: [
      { q: 'Does a plus sign become a space?', a: 'Yes, because forms and search addresses write a space as +. A real plus sign appears as %2B in the encoded text, and it is decoded to +.' },
      { q: 'Can I decode a whole address?', a: 'Yes. Percent codes are decoded wherever they appear and the rest of the text stays as it is.' },
    ] },
    'json-formatter': { why: 'JSON from an API, a log or a chat answer often arrives as one long line. Indenting it shows the structure so you can read and check it.', steps: PASTE_STEPS, extra: [
      { q: 'Does it check that my JSON is valid?', a: 'Yes. If it is not valid, the page shows the message from the browser itself, with the position of the problem. To repair common mistakes instead, use Fix broken JSON.' },
      { q: 'Are my numbers and keys changed?', a: 'No. Numbers are written exactly as they were, even very large ones, and keys keep their order. Only spaces and line breaks change.' },
      { q: 'How is it indented?', a: 'With two spaces for each level. Empty objects and arrays stay as {} and [].' },
    ] },
    'fix-broken-json': { why: 'Chat tools and hand-edited files often produce JSON that looks right but is not valid. This repairs the usual slips so a program can read it.', steps: PASTE_STEPS, extra: [
      { q: 'What does it repair?', a: 'Single or curly quotes, comments, trailing commas, missing commas, keys without quotes, True, False and None, a Markdown code fence or text around the JSON, and an ending that was cut off.' },
      { q: 'What if the answer was cut off?', a: 'Open brackets and quotes are closed at the end, so you get valid JSON, but the part that was cut off is missing. Check the result.' },
      { q: 'Can it guess wrong?', a: 'Yes. It only repairs what is clearly a slip. A value written as a bare word, such as ok, becomes the text "ok". Read the result before you rely on it.' },
    ] },
    'chatgpt-to-markdown': { why: 'OpenAI lets you download your ChatGPT history as a ZIP file. The conversations.json file inside is hard to read, and this turns it into Markdown you can search and keep.', steps: PASTE_STEPS, extra: [
      { q: 'Where do I get the file?', a: 'Ask for a data export in your ChatGPT account settings. OpenAI prepares a ZIP file for you to download. Unzip it and use the conversations.json file inside.' },
      { q: 'What does the Markdown contain?', a: 'Each chat has its title and date as a heading, then your messages under You and the replies under ChatGPT. Code stays in code blocks and pictures are marked as [image]. System and tool messages are left out.' },
      { q: 'Which version of a chat is used?', a: 'The branch you were reading last. If you edited a message or regenerated a reply, the other versions are not included.' },
    ] },
    'csv-to-json': { why: 'CSV is a table in plain text. JSON is what websites and apps use to exchange data.', extra: [
      { q: 'How are the columns named?', a: 'The first row is used as the names of the keys. Empty headings become column1, column2 and so on.' },
      { q: 'Are numbers kept as numbers?', a: 'Plain numbers and true or false become real JSON values. Values like 01234 stay as text so leading zeros are not lost.' },
      { q: 'Which separators work?', a: 'Commas, semicolons, tabs and pipes. The first line decides, and quoted values may contain the separator.' },
    ] },
    'json-to-csv': { why: 'JSON is what apps and APIs return. CSV opens straight in Excel and Google Sheets.', extra: [
      { q: 'What JSON shape works?', a: 'An array of objects, such as [{"a":1},{"a":2}], gives one row per object. A single object gives one row.' },
      { q: 'What happens to nested objects?', a: 'They are flattened into dotted columns, so {"address":{"city":"Pune"}} gives a column named address.city. Lists inside a cell are kept as JSON text.' },
      { q: 'What if objects have different keys?', a: 'Every key found in any object becomes a column. Missing values are left empty.' },
    ] },
    'json-to-xml': { why: 'Some older systems and feeds only accept XML, while most modern tools produce JSON.', extra: [
      { q: 'How are keys turned into tags?', a: 'Each key becomes a tag, and a list becomes repeated tags. Keys that start with @ become attributes.' },
      { q: 'What if my JSON is an array?', a: 'It is wrapped in a root tag with one <item> tag per element, because XML needs a single root.' },
      { q: 'Are special characters escaped?', a: 'Yes. Characters such as & and < are escaped so the XML is valid.' },
    ] },
    'xml-to-json': { why: 'JSON is easier to work with in modern code than XML.', extra: [
      { q: 'What happens to attributes?', a: 'Attributes are kept as keys with an @ in front, such as "@id". The text of a tag with attributes goes in "#text".' },
      { q: 'What about repeated tags?', a: 'Tags that repeat become a JSON array.' },
      { q: 'Are numbers converted?', a: 'No. Values stay as text, so nothing like a zip code or an ID is damaged. Convert them in your own code if you need numbers.' },
    ] },
    'yaml-to-json': { why: 'YAML is common in config files. JSON is what tools and APIs read.', extra: [
      { q: 'Does it support anchors and multiple lines?', a: 'Yes. Anchors and aliases are resolved, and multi-line strings are read correctly.' },
      { q: 'What about comments?', a: 'JSON has no comments, so they are dropped.' },
      { q: 'What if my YAML has several documents?', a: 'This tool reads one document. Convert each document separately.' },
    ] },
    'json-to-yaml': { why: 'YAML is easier to read and edit by hand than JSON, which is why config files use it.', extra: [
      { q: 'How is the YAML formatted?', a: 'Two-space indents, with lists written as dashes. Long text lines are folded at about 100 characters.' },
      { q: 'Can I convert it back?', a: 'Yes, with the YAML to JSON converter. The data is the same; only the formatting changes.' },
      { q: 'Are comments kept?', a: 'JSON has no comments, so there are none to keep.' },
    ] },
    'markdown-to-html': { why: 'Markdown is quick to write. HTML is what web pages need.', extra: [
      { q: 'Which Markdown does it support?', a: 'Standard CommonMark plus tables, task lists and strikethrough (GitHub style).' },
      { q: 'Is the HTML safe to publish?', a: 'It is the plain conversion. If the Markdown came from someone else, run the result through your own HTML sanitiser first, because Markdown may contain raw HTML.' },
      { q: 'Does it add the html and body tags?', a: 'No. You get the HTML for the content, ready to put inside your own page.' },
    ] },
    'html-to-markdown': { why: 'Markdown is easier to read and edit than HTML, and it works in notes apps and README files.', extra: [
      { q: 'What carries over?', a: 'Headings, paragraphs, bold and italic, links, lists, code blocks and images.' },
      { q: 'What gets lost?', a: 'Styling, scripts and layout tables do not exist in Markdown, so only the content and its structure are kept.' },
      { q: 'Can I convert a whole web page?', a: 'Yes, paste its HTML. It works best on the article part of the page rather than the whole thing with menus and ads.' },
    ] },
    'text-encoding-fixer': { why: 'Old files and some exports are saved in encodings that modern programs misread, which shows as strange characters.', extra: [
      { q: 'What does garbled text look like?', a: 'Things like Ã© instead of é, or ? and boxes in place of letters. That usually means a UTF-8 file was read as Windows-1252, or the other way round.' },
      { q: 'Which encoding should I pick?', a: 'Try Windows-1252 first for western European files and Windows-1251 for Cyrillic. Shift_JIS, GBK and Big5 cover Japanese and Chinese. The preview shows the result before you convert.' },
      { q: 'What do I get?', a: 'A copy saved as UTF-8, the encoding that nearly every program reads correctly. Your original is untouched.' },
    ] },
  };
  const info = spec[t.slug]!;
  const isEncoding = t.slug === 'text-encoding-fixer';
  return {
    ...BASE,
    steps: isEncoding
      ? ['Drop your text file onto the box.', 'Choose the encoding the file was written in and check the preview.', 'Press Convert.', 'Download the UTF-8 copy.']
      : info.steps ?? [`Paste your ${t.from!.toUpperCase()} into the left box, or drop a file in. Try an example if you just want to see it work.`, 'The result appears on the right as you type.', 'Press Download, or Copy to paste it somewhere else.'],
    about: info.why,
    faqs: [...info.extra, PRIVATE_FAQ(isEncoding ? 'file' : 'data'), ...(info.noError ? [] : [{ q: 'What if my input has an error?', a: 'The page shows a message saying what is wrong, so you can fix it. Nothing is changed until the input is valid.' }])],
  };
}

function unitsContent(t: ToolLink): PageContent {
  const name = t.name.toLowerCase();
  const extra: Record<string, Faq[]> = {
    length: [
      { q: 'How many feet are in a metre?', a: 'One metre is about 3.28084 feet. One foot is exactly 0.3048 metres.' },
      { q: 'How many kilometres are in a mile?', a: 'One mile is 1.609344 kilometres, so 5 miles is about 8.05 km.' },
    ],
    weight: [
      { q: 'How many pounds are in a kilogram?', a: 'One kilogram is about 2.20462 pounds. One pound is exactly 0.45359237 kilograms.' },
      { q: 'Is a tonne the same as a ton?', a: 'A metric tonne is 1,000 kg. A US short ton is 2,000 pounds and a UK long ton is 2,240 pounds, so they differ. This tool uses the metric tonne.' },
    ],
    temperature: [
      { q: 'How do I convert Celsius to Fahrenheit?', a: 'Multiply by 9, divide by 5, then add 32. So 100 °C is 212 °F and 0 °C is 32 °F.' },
      { q: 'At what temperature are Celsius and Fahrenheit equal?', a: 'At -40. Both scales read -40 at that point.' },
    ],
    area: [
      { q: 'How many square feet are in an acre?', a: 'One acre is 43,560 square feet, or about 4,047 square metres.' },
      { q: 'How big is a hectare?', a: 'One hectare is 10,000 square metres, which is about 2.47 acres.' },
    ],
    volume: [
      { q: 'Is a US gallon the same as a UK gallon?', a: 'No. A US gallon is 3.785 litres and a UK (imperial) gallon is 4.546 litres. Both are available here, and cups, pints and quarts use US sizes.' },
      { q: 'How many millilitres are in a cup?', a: 'A US cup is about 236.6 ml.' },
    ],
    speed: [
      { q: 'How do I convert km/h to mph?', a: 'Divide by 1.609. So 100 km/h is about 62.1 mph.' },
      { q: 'What is a knot?', a: 'One nautical mile per hour, which is 1.852 km/h. Ships and aircraft use it.' },
    ],
    time: [
      { q: 'How many seconds are in a day?', a: 'There are 86,400 seconds in a day (24 hours of 60 minutes of 60 seconds).' },
      { q: 'How long is a month or a year here?', a: 'A month is taken as 30.44 days and a year as 365.25 days, the usual averages. For exact calendar dates, use a date calculator.' },
    ],
    data: [
      { q: 'Is 1 KB 1000 or 1024 bytes?', a: 'It depends who you ask. Disk makers and phone plans use 1 KB = 1,000 bytes. Some operating systems use 1 KB = 1,024 bytes. To avoid confusion, KiB, MiB and GiB always mean 1,024. Both kinds are here.' },
      { q: 'Why does my 1 TB drive show less space?', a: 'The maker counts 1 TB as 1,000,000,000,000 bytes, but the system shows it in 1,024-based units, which gives about 931 GiB.' },
    ],
    pressure: [
      { q: 'How many psi is 1 bar?', a: 'One bar is about 14.5038 psi. Car tyres are often 2 to 2.5 bar, which is about 30 to 36 psi.' },
      { q: 'What is standard atmospheric pressure?', a: '1 atmosphere is 101,325 pascals, or 1.01325 bar.' },
    ],
    energy: [
      { q: 'What is the difference between a calorie and a kilocalorie?', a: 'A food Calorie (written with a capital C) is a kilocalorie, which is 1,000 small calories. The kcal row is the one on food labels.' },
      { q: 'How many kilojoules are in a kilocalorie?', a: 'One kilocalorie is 4.184 kilojoules.' },
    ],
    'indian-land': [
      { q: 'How big is a bigha?', a: 'It depends on the state. A bigha is about 27,000 sq ft in Uttar Pradesh, about 17,424 sq ft in Gujarat and 14,400 sq ft in West Bengal and Assam. Always check the local revenue record before buying or selling land.' },
      { q: 'What is a gaj?', a: 'A gaj is a square yard, which is 9 square feet. Plot sizes in many cities are quoted in gaj.' },
      { q: 'How many square feet are in an acre?', a: 'One acre is 43,560 square feet, and one hectare is about 107,639 square feet.' },
    ],
  };
  return {
    ...BASE,
    steps: [`Type the number you want to convert.`, `Choose the unit you have in "From" and the one you want in "To".`, 'Read the answer. The ⇄ button swaps the two units, and the table shows every unit at once.'],
    about: `This ${name} converter uses exact conversion factors and shows the result with up to 10 significant digits.`,
    faqs: [
      ...(extra[t.units!] ?? []),
      { q: 'How accurate is it?', a: 'It uses the exact defined conversion factors and shows up to 10 significant digits, so rounding noise is hidden but real precision is kept.' },
      { q: 'Does it work offline?', a: 'Once the page has loaded, yes: it calculates in your browser and sends nothing anywhere.' },
    ],
  };
}
