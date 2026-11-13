/** The "how to" steps, the questions and answers and the short explainer on each converter page. */
import { FORMAT_NAMES, type ToolLink } from './tools';

export interface Faq {
  q: string;
  a: string;
}

export interface PageContent {
  steps: string[];
  faqs: Faq[];
  /** A short paragraph under the tool: what the formats are and when to pick one. */
  about: string;
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
  a: 'The first time you convert audio or video, your browser downloads the conversion engine (ffmpeg, about 30 MB) from a public CDN. After that it is cached, so the next ones start straight away. Your files are not part of that download.',
};

const BATCH_FAQ: Faq = {
  q: 'Can I convert many files at once?',
  a: 'Yes. Drop several files in and they are converted one after another. When they finish you can download each one, or all of them together as one ZIP.',
};

function audioContent(t: ToolLink): PageContent {
  const f = FORMAT_NAMES[t.from!]!;
  const to = FORMAT_NAMES[t.to!]!;
  const fromVideo = t.from === 'video' || ['mp4'].includes(t.from!);
  const lossless = ['wav', 'flac'].includes(t.to!);
  const sourceLossless = ['wav', 'flac'].includes(t.from!);
  const verb = t.slug === 'video-to-mp3' ? 'Extract MP3' : 'Convert';
  return {
    steps: [
      `Drop your ${fromVideo ? 'video' : f} ${fromVideo ? 'files' : 'files'} onto the box, or press Choose files.`,
      t.to === 'wav' || t.to === 'flac' ? 'There are no quality settings for this one: the sound is kept exactly as decoded.' : 'Pick a quality. 192 kbit/s is a good everyday choice; 320 is the best you can get for music.',
      `Press ${verb}. A progress bar shows how far along it is.`,
      `Download your ${to} file, or all of them as a ZIP.`,
    ],
    about: `${fromVideo ? BLURB[t.to!]! : `${BLURB[t.from!]!} ${BLURB[t.to!]!}`}`,
    faqs: [
      {
        q: fromVideo ? `How do I get the audio out of a ${f === 'video' ? 'video' : f + ' video'}?` : `Why convert ${f} to ${to}?`,
        a: fromVideo
          ? `Drop the video in and press ${verb}. Only the sound track is kept and saved as ${to}. The picture is ignored, so the file is far smaller than the video.`
          : `${BLURB[t.from!]!} ${lossless ? `${to} is a good choice when you want to edit the sound or keep it without further loss.` : `Convert to ${to} when you need a file that works on the device or app you are using, or when you want a smaller file.`} ${BLURB[t.to!]!}`,
      },
      {
        q: 'Will the sound quality drop?',
        a: lossless
          ? `Converting to ${to} adds no further loss. If the original was already compressed (for example MP3 or AAC), that earlier loss stays: ${to} cannot bring back what was removed.`
          : sourceLossless
            ? `A little, by design: ${to} is a lossy format, so some detail is traded for a much smaller file. At 192 kbit/s or above most people cannot hear the difference.`
            : `Going from one lossy format to another loses a little more each time. Use the highest bitrate you are comfortable with, and keep the original file.`,
      },
      PRIVATE_FAQ(fromVideo ? 'video' : 'audio'),
      BATCH_FAQ,
      ENGINE_FAQ,
      SIZE_FAQ(),
    ],
  };
}

const VIDEO_WHY: Record<string, string> = {
  'mov-to-mp4': 'iPhones and Macs record in MOV. MP4 plays on Android, Windows, TVs and every social app, so converting a MOV is the usual way to share an iPhone video.',
  'mkv-to-mp4': 'Many phones, TVs and editing apps do not open MKV. MP4 plays almost everywhere, so converting makes the video easy to watch and share.',
  'avi-to-mp4': 'AVI is a very old format that many phones and apps refuse. MP4 is newer, smaller and plays almost everywhere.',
  'webm-to-mp4': 'WEBM plays in browsers, but many editors, TVs and phone galleries do not accept it. MP4 is accepted by nearly all of them.',
  'mp4-to-webm': 'WEBM files are small and play natively in web browsers, which makes them handy for putting video on a website.',
  'mov-to-webm': 'WEBM is small and web-friendly, so it is a good choice for putting an iPhone clip on a website.',
  'mkv-to-webm': 'WEBM plays directly in web browsers, which MKV does not. Converting makes the video usable on a website.',
  'avi-to-webm': 'WEBM is a modern, small, web-friendly format, while AVI is from the 1990s and browsers cannot play it.',
};

function videoContent(t: ToolLink): PageContent {
  const f = FORMAT_NAMES[t.from!]!;
  const to = FORMAT_NAMES[t.to!]!;
  return {
    steps: [
      `Drop your ${f} video onto the box, or press Choose files.`,
      `Press Convert. The first time, your browser downloads the converter engine, then the video is converted in a progress bar you can watch.`,
      `Download your ${to} file when it finishes, or all of them as a ZIP.`,
    ],
    about: `${BLURB[t.from!]!} ${BLURB[t.to!]!}`,
    faqs: [
      { q: `Why convert ${f} to ${to}?`, a: VIDEO_WHY[t.slug] ?? `${to} is more widely supported than ${f}.` },
      { q: 'Will the video quality drop?', a: `Slightly, because the video is encoded again. We use a high-quality setting, so most people cannot tell. Keep the original in case you want to convert again.` },
      PRIVATE_FAQ('video'),
      { q: 'Why is it slow?', a: 'Video is heavy work, and it is done by your own device, not a server. A laptop or desktop is many times faster than a phone, and short clips are quick. Close other tabs to help.' },
      ENGINE_FAQ,
      SIZE_FAQ(),
    ],
  };
}

function simple(steps: string[], about: string, faqs: Faq[]): PageContent {
  return { steps, about, faqs };
}

export function contentFor(t: ToolLink): PageContent {
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

function dataContent(t: ToolLink): PageContent {
  const spec: Record<string, { why: string; steps?: string[]; extra: Faq[] }> = {
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
    steps: isEncoding
      ? ['Drop your text file onto the box.', 'Choose the encoding the file was written in and check the preview.', 'Press Convert.', 'Download the UTF-8 copy.']
      : [`Paste your ${t.from!.toUpperCase()} into the left box, or drop a file in. Try an example if you just want to see it work.`, 'The result appears on the right as you type.', 'Press Download, or Copy to paste it somewhere else.'],
    about: info.why,
    faqs: [...info.extra, PRIVATE_FAQ(isEncoding ? 'file' : 'data'), { q: 'What if my input has an error?', a: 'The page shows a message saying what is wrong, so you can fix it. Nothing is changed until the input is valid.' }],
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
    steps: [`Type the number you want to convert.`, `Choose the unit you have in "From" and the one you want in "To".`, 'Read the answer. The ⇄ button swaps the two units, and the table shows every unit at once.'],
    about: `This ${name} converter uses exact conversion factors and shows the result with up to 10 significant digits.`,
    faqs: [
      ...(extra[t.units!] ?? []),
      { q: 'How accurate is it?', a: 'It uses the exact defined conversion factors and shows up to 10 significant digits, so rounding noise is hidden but real precision is kept.' },
      { q: 'Does it work offline?', a: 'Once the page has loaded, yes: it calculates in your browser and sends nothing anywhere.' },
    ],
  };
}
