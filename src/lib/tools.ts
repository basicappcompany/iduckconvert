/**
 * Every converter, in the order shown in the sidebar and on the home page. The home page, the sidebar,
 * the Ctrl K window, the sitemap and the "More in" block on each page all read this list.
 * A tool with a `link` lives on a sister site: it gets a card here but no page.
 */
export const TOOL_GROUPS = ['Audio', 'Video', 'Images', 'Data & documents', 'Units', 'Numbers & text', 'Time & money'] as const;
export type ToolGroup = (typeof TOOL_GROUPS)[number];

export const GROUP_EMOJI: Record<ToolGroup, string> = {
  Audio: '🎵',
  Video: '🎬',
  Images: '🖼️',
  'Data & documents': '📊',
  Units: '📏',
  'Numbers & text': '🔢',
  'Time & money': '🌍',
};

/** Which island a page mounts. `link` has no page. */
export type ToolKind =
  | 'audio'
  | 'video'
  | 'video-gif'
  | 'gif-video'
  | 'video-compress'
  | 'video-trim'
  | 'data'
  | 'excel'
  | 'tiff'
  | 'webp-gif'
  | 'units'
  | 'bases'
  | 'words'
  | 'roman'
  | 'case'
  | 'colour'
  | 'timezone'
  | 'dates'
  | 'link';

export interface ToolLink {
  slug: string;
  name: string;
  summary: string;
  group: ToolGroup;
  emoji: string;
  kind: ToolKind;
  /** Answer-first sentence shown at the top of the page. */
  quick: string;
  /** Extra words people search for. */
  keywords: string;
  /** Source and target format, for the file converters. Lower case, no dot. */
  from?: string;
  to?: string;
  /** For a unit converter, the key into UNIT_SETS. */
  units?: string;
  /** For `link` tools: the sister site that has it. */
  site?: 'iDuckIMG' | 'iDuckPDF';
  href?: string;
}

const IMG = 'https://iduckimg.com';

export const FORMAT_NAMES: Record<string, string> = {
  mp3: 'MP3',
  wav: 'WAV',
  m4a: 'M4A',
  aac: 'AAC',
  ogg: 'OGG',
  flac: 'FLAC',
  opus: 'OPUS',
  mp4: 'MP4',
  webm: 'WEBM',
  mov: 'MOV',
  mkv: 'MKV',
  avi: 'AVI',
  gif: 'GIF',
  video: 'video',
};

const AUDIO_PAIRS: [string, string][] = [
  ['mp3', 'wav'],
  ['wav', 'mp3'],
  ['m4a', 'mp3'],
  ['aac', 'mp3'],
  ['ogg', 'mp3'],
  ['flac', 'mp3'],
  ['opus', 'mp3'],
  ['mp3', 'ogg'],
  ['mp3', 'm4a'],
  ['wav', 'flac'],
  ['flac', 'wav'],
  ['m4a', 'wav'],
];

const VIDEO_PAIRS: [string, string][] = [
  ['mp4', 'webm'],
  ['webm', 'mp4'],
  ['mov', 'mp4'],
  ['mkv', 'mp4'],
  ['avi', 'mp4'],
  ['mov', 'webm'],
  ['mkv', 'webm'],
  ['avi', 'webm'],
];

const audioTool = ([from, to]: [string, string]): ToolLink => {
  const f = FORMAT_NAMES[from]!;
  const t = FORMAT_NAMES[to]!;
  return {
    slug: `${from}-to-${to}`,
    name: `${f} to ${t}`,
    summary: `Turn ${f} files into ${t} in your browser. Nothing is uploaded.`,
    group: 'Audio',
    emoji: '🎵',
    kind: 'audio',
    from,
    to,
    quick: `To convert ${f} to ${t}, drop your ${f} files in and press Convert. The conversion runs in your browser tab, so your audio is never uploaded.`,
    keywords: `${from} ${to} audio convert music sound ${f} ${t}`,
  };
};

const videoTool = ([from, to]: [string, string]): ToolLink => {
  const f = FORMAT_NAMES[from]!;
  const t = FORMAT_NAMES[to]!;
  return {
    slug: `${from}-to-${to}`,
    name: `${f} to ${t}`,
    summary: `Convert ${f} videos to ${t} without uploading them anywhere.`,
    group: 'Video',
    emoji: '🎬',
    kind: 'video',
    from,
    to,
    quick: `To convert ${f} to ${t}, drop your video in and press Convert. It runs in your browser, so big files take a while on a phone: a laptop is much faster.`,
    keywords: `${from} ${to} video convert movie clip ${f} ${t}`,
  };
};

const unitTool = (slug: string, name: string, units: string, summary: string, keywords: string, emoji = '📏'): ToolLink => ({
  slug,
  name,
  summary,
  group: 'Units',
  emoji,
  kind: 'units',
  units,
  quick: `To convert ${name.toLowerCase()} units, type a number, choose the unit you have and the unit you want. The answer updates as you type.`,
  keywords,
});

const link = (slug: string, name: string, summary: string, site: 'iDuckIMG' | 'iDuckPDF', href: string): ToolLink => ({
  slug,
  name,
  summary,
  group: 'Images',
  emoji: '🖼️',
  kind: 'link',
  site,
  href,
  quick: `${name} lives on ${site}. Open it there: it also runs in your browser.`,
  keywords: `${slug.replace(/-/g, ' ')} ${site}`,
});

export const TOOLS: readonly ToolLink[] = [
  // Audio
  ...AUDIO_PAIRS.map(audioTool),
  {
    slug: 'video-to-mp3',
    name: 'Video to MP3',
    summary: 'Pull the sound out of any video as an MP3 file.',
    group: 'Audio',
    emoji: '🎧',
    kind: 'audio',
    from: 'video',
    to: 'mp3',
    quick: 'To extract audio from a video, drop the video in and press Extract MP3. You get the soundtrack as an MP3, made in your browser tab.',
    keywords: 'extract audio from video mp4 mov mkv webm avi soundtrack rip music',
  },
  {
    slug: 'mp4-to-mp3',
    name: 'MP4 to MP3',
    summary: 'Extract the audio of an MP4 video as an MP3.',
    group: 'Audio',
    emoji: '🎧',
    kind: 'audio',
    from: 'mp4',
    to: 'mp3',
    quick: 'To turn an MP4 into an MP3, drop the video in and press Convert. Only the sound is kept, and nothing is uploaded.',
    keywords: 'mp4 mp3 extract audio video to audio youtube music',
  },
  // Video
  ...VIDEO_PAIRS.map(videoTool),
  {
    slug: 'video-to-gif',
    name: 'Video to GIF',
    summary: 'Turn a short video clip into an animated GIF.',
    group: 'Video',
    emoji: '🎞️',
    kind: 'video-gif',
    from: 'video',
    to: 'gif',
    quick: 'To make a GIF from a video, drop the clip in, choose the start, length, width and frame rate, then press Make GIF. Short clips of a few seconds work best.',
    keywords: 'gif maker animated clip mp4 mov webm meme loop',
  },
  {
    slug: 'gif-to-mp4',
    name: 'GIF to MP4',
    summary: 'Turn a GIF into a much smaller MP4 video.',
    group: 'Video',
    emoji: '📼',
    kind: 'gif-video',
    from: 'gif',
    to: 'mp4',
    quick: 'To convert a GIF to MP4, drop the GIF in and press Convert. The MP4 is usually five to twenty times smaller, often looks sharper, and plays on every phone.',
    keywords: 'gif mp4 smaller animated video convert',
  },
  {
    slug: 'compress-video',
    name: 'Compress video',
    summary: 'Make a video file smaller so it is easier to send.',
    group: 'Video',
    emoji: '🗜️',
    kind: 'video-compress',
    from: 'video',
    to: 'mp4',
    quick: 'To compress a video, drop it in, choose a quality and a width, then press Compress. You get a smaller MP4 made in your browser tab.',
    keywords: 'reduce size smaller shrink mb whatsapp email mp4 mov',
  },
  {
    slug: 'trim-video',
    name: 'Trim video',
    summary: 'Cut a video down to the part you want.',
    group: 'Video',
    emoji: '✂️',
    kind: 'video-trim',
    from: 'video',
    to: 'mp4',
    quick: 'To trim a video, drop it in, type the start and end time, then press Trim. The cut clip is saved as an MP4 in your browser.',
    keywords: 'cut clip shorten crop start end seconds',
  },
  // Images: only what iDuckIMG does not have; the rest link out (each to its own iDuckIMG page; PDF conversions stay with iDuckPDF).
  link('heic-to-jpg', 'HEIC to JPG', 'iPhone photos to JPG. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/heic-to-jpg/`),
  link('avif-to-jpg', 'AVIF to JPG', 'AVIF pictures to JPG. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/avif-to-jpg/`),
  link('avif-to-png', 'AVIF to PNG', 'AVIF pictures to PNG. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/avif-to-png/`),
  link('svg-to-png', 'SVG to PNG', 'SVG drawings to PNG. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/svg-to-png/`),
  link('bmp-to-jpg', 'BMP to JPG', 'BMP pictures to JPG. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/bmp-to-jpg/`),
  link('heic-to-png', 'HEIC to PNG', 'iPhone photos to PNG. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/heic-to-png/`),
  link('svg-to-jpg', 'SVG to JPG', 'SVG drawings to JPG. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/svg-to-jpg/`),
  link('gif-to-png', 'GIF to PNG', 'The first frame of a GIF as a PNG. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/gif-to-png/`),
  link('jpg-to-png', 'JPG to PNG', 'JPG pictures to PNG. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/jpg-to-png/`),
  link('png-to-jpg', 'PNG to JPG', 'PNG pictures to JPG. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/png-to-jpg/`),
  link('webp-to-jpg', 'WEBP to JPG', 'WEBP pictures to JPG. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/webp-to-jpg/`),
  link('webp-to-png', 'WEBP to PNG', 'WEBP pictures to PNG. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/webp-to-png/`),
  link('jpg-to-webp', 'JPG to WEBP', 'JPG pictures to WEBP. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/jpg-to-webp/`),
  link('png-to-webp', 'PNG to WEBP', 'PNG pictures to WEBP. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/png-to-webp/`),
  link('png-to-ico', 'PNG to ICO (favicon)', 'Make a favicon from a PNG. Lives on iDuckIMG.', 'iDuckIMG', `${IMG}/favicon-generator/`),
  {
    slug: 'tiff-to-jpg',
    name: 'TIFF to JPG',
    summary: 'Turn TIFF scans and photos into ordinary JPG files.',
    group: 'Images',
    emoji: '🖼️',
    kind: 'tiff',
    from: 'tiff',
    to: 'jpg',
    quick: 'To convert TIFF to JPG, drop your TIFF files in, choose a quality and press Convert. Each page of a multi-page TIFF becomes its own JPG.',
    keywords: 'tif tiff jpg jpeg scan fax convert picture',
  },
  {
    slug: 'webp-to-gif',
    name: 'WEBP to GIF',
    summary: 'Turn WEBP pictures into GIF.',
    group: 'Images',
    emoji: '🌀',
    kind: 'webp-gif',
    from: 'webp',
    to: 'gif',
    quick: 'To convert WEBP to GIF, drop your WEBP files in and press Convert. A still WEBP becomes a one-frame GIF; an animated one keeps its first frame in this version.',
    keywords: 'webp gif convert animated sticker picture',
  },
  // Data & documents
  { slug: 'csv-to-excel', name: 'CSV to Excel', summary: 'Open a CSV file as a proper .xlsx spreadsheet.', group: 'Data & documents', emoji: '📈', kind: 'excel', from: 'csv', to: 'xlsx', quick: 'To convert CSV to Excel, drop your CSV in and press Convert. You get an .xlsx file with each column in its own cell, made in your browser.', keywords: 'csv xlsx excel spreadsheet comma separated columns' },
  { slug: 'excel-to-csv', name: 'Excel to CSV', summary: 'Save an Excel sheet as plain CSV.', group: 'Data & documents', emoji: '📉', kind: 'excel', from: 'xlsx', to: 'csv', quick: 'To convert Excel to CSV, drop your .xlsx or .xls file in and press Convert. Each sheet becomes its own CSV file.', keywords: 'xlsx xls excel csv spreadsheet export' },
  { slug: 'csv-to-json', name: 'CSV to JSON', summary: 'Turn CSV rows into a JSON array.', group: 'Data & documents', emoji: '🧩', kind: 'data', from: 'csv', to: 'json', quick: 'To convert CSV to JSON, paste your CSV or drop the file in. The first row becomes the keys and every other row becomes an object.', keywords: 'csv json array objects rows parse' },
  { slug: 'json-to-csv', name: 'JSON to CSV', summary: 'Flatten a JSON array into CSV you can open in Excel.', group: 'Data & documents', emoji: '🧮', kind: 'data', from: 'json', to: 'csv', quick: 'To convert JSON to CSV, paste an array of objects or drop the file in. Each object becomes a row and each key becomes a column.', keywords: 'json csv flatten array table excel' },
  { slug: 'json-to-xml', name: 'JSON to XML', summary: 'Turn JSON into XML with one click.', group: 'Data & documents', emoji: '🏷️', kind: 'data', from: 'json', to: 'xml', quick: 'To convert JSON to XML, paste your JSON or drop the file in. Keys become tags and arrays become repeated tags.', keywords: 'json xml convert tags markup' },
  { slug: 'xml-to-json', name: 'XML to JSON', summary: 'Turn XML into JSON.', group: 'Data & documents', emoji: '🔁', kind: 'data', from: 'xml', to: 'json', quick: 'To convert XML to JSON, paste your XML or drop the file in. Tags become keys and attributes are kept with an @ prefix.', keywords: 'xml json convert parse tags' },
  { slug: 'yaml-to-json', name: 'YAML to JSON', summary: 'Turn YAML config into JSON.', group: 'Data & documents', emoji: '📜', kind: 'data', from: 'yaml', to: 'json', quick: 'To convert YAML to JSON, paste your YAML or drop the file in. The result is pretty-printed JSON that keeps numbers, true and false and nested lists as real values.', keywords: 'yaml yml json config convert' },
  { slug: 'json-to-yaml', name: 'JSON to YAML', summary: 'Turn JSON into readable YAML.', group: 'Data & documents', emoji: '📝', kind: 'data', from: 'json', to: 'yaml', quick: 'To convert JSON to YAML, paste your JSON or drop the file in. The result uses two-space indents and plain lists, so it is easy to read and edit by hand.', keywords: 'json yaml yml config convert' },
  { slug: 'markdown-to-html', name: 'Markdown to HTML', summary: 'Turn Markdown text into HTML.', group: 'Data & documents', emoji: '🔖', kind: 'data', from: 'markdown', to: 'html', quick: 'To convert Markdown to HTML, paste your Markdown or drop the file in. You get the HTML code to copy or download.', keywords: 'markdown md html convert preview' },
  { slug: 'html-to-markdown', name: 'HTML to Markdown', summary: 'Turn HTML into clean Markdown.', group: 'Data & documents', emoji: '🔗', kind: 'data', from: 'html', to: 'markdown', quick: 'To convert HTML to Markdown, paste your HTML or drop the file in. Headings, lists, links and bold text carry over.', keywords: 'html markdown md convert clean' },
  { slug: 'text-encoding-fixer', name: 'TXT encoding fixer', summary: 'Fix garbled text and save it as UTF-8.', group: 'Data & documents', emoji: '🔤', kind: 'data', from: 'txt', to: 'utf-8', quick: 'To fix a garbled text file, drop it in, choose the encoding it was written in (try Windows-1252 or UTF-8) and download the UTF-8 copy.', keywords: 'txt encoding utf-8 utf8 mojibake garbled windows-1252 latin1 characters' },
  // Data for AI tools and from them
  { slug: 'csv-to-markdown-table', name: 'CSV to Markdown table', summary: 'Turn CSV rows into a Markdown table.', group: 'Data & documents', emoji: '📋', kind: 'data', from: 'csv', to: 'markdown', quick: 'To make a Markdown table from CSV, paste your CSV or drop the file in. The first row becomes the header, and you can copy the table into a chat, a note or a README.', keywords: 'csv markdown md table gfm chatgpt readme convert' },
  { slug: 'markdown-table-to-csv', name: 'Markdown table to CSV', summary: 'Turn a Markdown table into CSV for Excel or Sheets.', group: 'Data & documents', emoji: '📑', kind: 'data', from: 'markdown', to: 'csv', quick: 'To turn a Markdown table into CSV, paste the table or drop the file in. The first table found is converted, and you can open the CSV in Excel or Google Sheets.', keywords: 'markdown table csv md gfm excel sheets chatgpt copy' },
  { slug: 'json-to-jsonl', name: 'JSON to JSONL', summary: 'Put each item of a JSON array on its own line.', group: 'Data & documents', emoji: '🧵', kind: 'data', from: 'json', to: 'jsonl', quick: 'To convert JSON to JSONL, paste a JSON array or drop the file in. Each item goes on its own line as compact JSON, the format used for training data and batch jobs.', keywords: 'json jsonl ndjson json lines dataset fine-tuning batch' },
  { slug: 'jsonl-to-json', name: 'JSONL to JSON', summary: 'Gather JSON Lines into one JSON array.', group: 'Data & documents', emoji: '🧶', kind: 'data', from: 'jsonl', to: 'json', quick: 'To convert JSONL to JSON, paste your JSON Lines or drop the file in. Each line becomes one item of a single array, indented so it is easy to read.', keywords: 'jsonl json ndjson json lines array dataset' },
  { slug: 'csv-to-jsonl', name: 'CSV to JSONL', summary: 'Turn each CSV row into one JSON line.', group: 'Data & documents', emoji: '🪢', kind: 'data', from: 'csv', to: 'jsonl', quick: 'To convert CSV to JSONL, paste your CSV or drop the file in. The first row names the keys, and every other row becomes one JSON object on its own line.', keywords: 'csv jsonl ndjson json lines dataset fine-tuning prompt completion' },
  { slug: 'srt-to-vtt', name: 'SRT to VTT', summary: 'Turn SRT subtitles into WebVTT.', group: 'Data & documents', emoji: '💬', kind: 'data', from: 'srt', to: 'vtt', quick: 'To convert SRT to VTT, paste your subtitles or drop the file in. A WEBVTT header is added and the commas in the times become dots, ready for a web video player.', keywords: 'srt vtt webvtt subtitles captions convert video transcript' },
  { slug: 'vtt-to-srt', name: 'VTT to SRT', summary: 'Turn WebVTT subtitles into SRT.', group: 'Data & documents', emoji: '🗨️', kind: 'data', from: 'vtt', to: 'srt', quick: 'To convert VTT to SRT, paste your WebVTT or drop the file in. The cues are numbered, the times get commas, and the header, notes and styles are removed.', keywords: 'vtt srt webvtt subtitles captions convert video transcript' },
  { slug: 'subtitles-to-text', name: 'Subtitles to text', summary: 'Get the plain words out of an SRT or VTT file.', group: 'Data & documents', emoji: '📃', kind: 'data', from: 'srt', to: 'txt', quick: 'To get a transcript from subtitles, paste an SRT or VTT file or drop it in. The numbers, timings and tags are removed and the words stay, one subtitle per line.', keywords: 'srt vtt subtitles captions transcript text remove timestamps whisper' },
  { slug: 'json-to-toml', name: 'JSON to TOML', summary: 'Turn JSON into TOML settings.', group: 'Data & documents', emoji: '⚙️', kind: 'data', from: 'json', to: 'toml', quick: 'To convert JSON to TOML, paste a JSON object or drop the file in. Keys become TOML keys and nested objects become tables, easy to read and edit by hand.', keywords: 'json toml config settings pyproject cargo convert' },
  { slug: 'toml-to-json', name: 'TOML to JSON', summary: 'Turn TOML settings into JSON.', group: 'Data & documents', emoji: '🛠️', kind: 'data', from: 'toml', to: 'json', quick: 'To convert TOML to JSON, paste your TOML or drop the file in. Tables become nested objects and arrays stay arrays, as indented JSON that programs and APIs can read.', keywords: 'toml json config settings pyproject cargo convert' },
  { slug: 'xml-to-csv', name: 'XML to CSV', summary: 'Turn the repeated records in an XML file into CSV rows.', group: 'Data & documents', emoji: '🗂️', kind: 'data', from: 'xml', to: 'csv', quick: 'To convert XML to CSV, paste your XML or drop the file in. The repeated tag becomes the rows, and its attributes and child tags become columns you can open in Excel.', keywords: 'xml csv spreadsheet excel records feed export convert' },
  // Units
  unitTool('length-converter', 'Length', 'length', 'Metres, feet, inches, miles, kilometres and more.', 'meter metre feet foot inch mile km cm mm yard', '📏'),
  unitTool('weight-converter', 'Weight', 'weight', 'Kilograms, pounds, ounces, grams, tonnes and more.', 'kg lb pound ounce gram tonne mass', '⚖️'),
  unitTool('temperature-converter', 'Temperature', 'temperature', 'Celsius, Fahrenheit and Kelvin.', 'celsius fahrenheit kelvin degrees', '🌡️'),
  unitTool('area-converter', 'Area', 'area', 'Square metres, square feet, acres, hectares and more.', 'sq ft sqft square meter acre hectare', '🗺️'),
  unitTool('volume-converter', 'Volume', 'volume', 'Litres, millilitres, gallons, cups and more.', 'litre liter ml gallon cup pint quart', '🧪'),
  unitTool('speed-converter', 'Speed', 'speed', 'Km/h, mph, metres per second, knots.', 'kmh mph knots velocity', '🚗'),
  unitTool('time-unit-converter', 'Time units', 'time', 'Seconds, minutes, hours, days, weeks and years.', 'seconds minutes hours days weeks years duration', '⏱️'),
  unitTool('data-size-converter', 'Data size', 'data', 'Bytes, KB, MB, GB, TB, with the 1000 and 1024 rules explained.', 'kb mb gb tb byte kilobyte megabyte gigabyte storage', '💾'),
  unitTool('pressure-converter', 'Pressure', 'pressure', 'Pascal, bar, psi, atmospheres and more.', 'pascal bar psi atm mmhg tyre', '🎈'),
  unitTool('energy-converter', 'Energy', 'energy', 'Joules, calories, kilowatt-hours and more.', 'joule calorie kwh btu kcal electricity', '⚡'),
  unitTool('indian-land-converter', 'Indian land units', 'indian-land', 'Bigha, gaj, acre, hectare and square feet, with a state note.', 'bigha gaj acre hectare sq ft biswa katha guntha land plot', '🌾'),
  // Numbers & text
  { slug: 'number-base-converter', name: 'Number bases', summary: 'Binary, octal, decimal and hexadecimal.', group: 'Numbers & text', emoji: '🔢', kind: 'bases', quick: 'To convert a number between bases, type it in any box: binary, octal, decimal or hex. The others update at once.', keywords: 'binary hex hexadecimal octal decimal base radix' },
  { slug: 'number-to-words', name: 'Number to words', summary: 'Write numbers out in words, Indian or international style.', group: 'Numbers & text', emoji: '🗣️', kind: 'words', quick: 'To write a number in words, type it and choose Indian (lakh, crore) or international (million, billion). Handy for cheques and invoices.', keywords: 'number words spelling lakh crore million billion cheque amount rupees' },
  { slug: 'roman-numeral-converter', name: 'Roman numerals', summary: 'Numbers to Roman numerals and back.', group: 'Numbers & text', emoji: '🏛️', kind: 'roman', quick: 'To convert to Roman numerals, type a number from 1 to 3999. To go back, type the numerals such as MCMXCIV.', keywords: 'roman numerals xiv mcm' },
  { slug: 'text-case-converter', name: 'Text case', summary: 'UPPER, lower, Title, camelCase, snake_case and more.', group: 'Numbers & text', emoji: '🔠', kind: 'case', quick: 'To change text case, paste your text and press the case you want, such as upper, lower, Title or camelCase. Copy the result with one click.', keywords: 'uppercase lowercase title case camel snake kebab sentence' },
  { slug: 'color-code-converter', name: 'Colour codes', summary: 'HEX, RGB and HSL, with a live swatch.', group: 'Numbers & text', emoji: '🎨', kind: 'colour', quick: 'To convert a colour code, type a HEX, RGB or HSL value in any box. The other two update and you see the colour.', keywords: 'color colour hex rgb hsl picker code css' },
  { slug: 'clean-chat-text', name: 'Clean AI text', summary: 'Remove Markdown and stray characters from copied chat answers.', group: 'Numbers & text', emoji: '🧼', kind: 'data', from: 'text', to: 'txt', quick: 'To clean text copied from an AI chat, paste it in. The Markdown stars, hashes and backticks are removed, odd characters are tidied, and you get plain text for an email or document.', keywords: 'clean ai text chatgpt claude gemini remove markdown formatting asterisks hashtags plain text paste' },
  // Time & money
  { slug: 'time-zone-converter', name: 'Time zone converter', summary: 'Compare a time across cities and zones.', group: 'Time & money', emoji: '🕐', kind: 'timezone', quick: 'To convert a time between zones, pick the time and the city you start from, then add the cities you want to compare. Daylight saving is handled for you.', keywords: 'timezone time zone ist utc gmt est pst convert meeting world clock' },
  { slug: 'date-format-converter', name: 'Date format converter', summary: 'Show one date in every common format.', group: 'Time & money', emoji: '📅', kind: 'dates', quick: 'To convert a date format, pick a date and see it written as DD/MM/YYYY, MM/DD/YYYY, ISO and more. Copy the one you need.', keywords: 'date format dd/mm/yyyy mm/dd/yyyy iso 8601 convert' },
];

/** Tools that have a page of their own. */
export const PAGE_TOOLS = TOOLS.filter((t) => t.kind !== 'link');

export const toolPath = (slug: string): string => `/${slug}/`;

export const toolBySlug = (slug: string): ToolLink | undefined => TOOLS.find((t) => t.slug === slug);

export function toolForPath(path: string): ToolLink | undefined {
  const slug = path.replace(/^\/|\/$/g, '');
  return PAGE_TOOLS.find((t) => t.slug === slug);
}

export const toolsInGroup = (group: ToolGroup): ToolLink[] => TOOLS.filter((t) => t.group === group);

/** Up to three other tools in the same group, for the related links (the page itself is left out). */
export function relatedTools(tool: ToolLink, count = 3): ToolLink[] {
  const mates = PAGE_TOOLS.filter((t) => t.group === tool.group && t.slug !== tool.slug);
  // Prefer tools that share a format with this one, then fill with the rest.
  const sharing = mates.filter((t) => (tool.from && (t.from === tool.from || t.to === tool.from)) || (tool.to && (t.from === tool.to || t.to === tool.to)));
  return [...new Set([...sharing, ...mates])].slice(0, count);
}

/** Where a card for this tool should point. */
export const hrefFor = (tool: ToolLink): string => tool.href ?? toolPath(tool.slug);

/** Home page "Popular right now", in order. */
export const POPULAR_SLUGS = ['mp4-to-mp3', 'video-to-gif', 'heic-to-jpg', 'csv-to-excel', 'json-to-csv', 'number-to-words', 'length-converter', 'time-zone-converter'] as const;

/** Lower-case words of any script (letters, marks and digits), so a Hindi or Russian name can be searched too. */
const words = (s: string): string[] => s.toLowerCase().split(/[^\p{L}\p{M}\p{N}]+/u).filter(Boolean);

/** Rank tools for a search: whole words in the name first, then the slug and keywords, matching word starts. */
export function searchTools(query: string, list: readonly ToolLink[] = TOOLS): ToolLink[] {
  const q = words(query);
  if (q.length === 0) return [...list];
  return list
    .map((t) => {
      const name = words(t.name);
      const rest = words(`${t.slug} ${t.keywords} ${t.group} ${t.summary}`);
      let score = 0;
      for (const w of q) {
        if (name.includes(w)) score += 4;
        else if (name.some((n) => n.startsWith(w))) score += 3;
        else if (rest.includes(w)) score += 2;
        else if (rest.some((r) => r.startsWith(w))) score += 1;
        else return { t, score: 0 };
      }
      return { t, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.t);
}
