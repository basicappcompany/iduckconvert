/**
 * The words inside the converters (labels, hints, options and messages), English. Every other language is a file next
 * to this one with the same keys (a unit test fails when a key is missing, empty, loses a {placeholder} or still reads
 * like English). Kept apart from the page dictionaries so the browser bundle stays small; the converters read the page
 * language with `useOpts()` after mount, so the first render is English and then switches.
 * Not translated here: unit, city and date-format names (they come from src/convert) and the words a number is spelled
 * with (number to words is English only).
 */
export const en = {
  // shared
  options: 'Options',
  value: 'Value',
  from: 'From',
  to: 'To',
  result: 'Result',
  date: 'Date',
  copy: 'Copy',
  copied: 'Copied',
  clear: 'Clear',
  // units
  swapUnits: 'Swap the two units',
  /** {n} and {symbol}; English also has {title}, the others leave it out. */
  unitsAll: '{n} {symbol} in every {title} unit',
  // number bases
  baseBinary: 'Binary',
  baseOctal: 'Octal',
  baseDecimal: 'Decimal',
  baseHex: 'Hexadecimal',
  /** {name} {n} */
  baseLabel: '{name} (base {n})',
  /** {name} */
  baseInvalid: 'That is not a valid {name} number.',
  baseNote: 'Works for very large numbers too: it uses exact whole-number maths, not floating point.',
  // number to words
  number: 'Number',
  wordsHint: 'Commas are fine. Decimals work too, for example 1234.56.',
  style: 'Style',
  styleIndian: 'Indian (thousand, lakh, crore)',
  styleInternational: 'International (thousand, million, billion)',
  writeAs: 'Write as',
  moneyNone: 'Plain number',
  moneyInr: 'Rupees and paise (cheque style)',
  moneyUsd: 'Dollars and cents (cheque style)',
  inWords: 'In words',
  // Roman numerals
  romanLabel: 'Number or Roman numeral',
  romanRange: 'Roman numerals go from 1 to 3999.',
  romanInvalid: 'That is not a valid Roman numeral. Examples: IV, XIX, MCMXCIV.',
  romanNumeral: 'Roman numeral',
  // text case
  yourText: 'Your text',
  typeHere: 'Type or paste text here',
  chooseCase: 'Choose a case',
  /** {chars} {words} */
  countLine: '{chars} characters, {words} words',
  // colours
  /** {kind} is HEX, RGB or HSL. */
  colourBad: 'That {kind} value is not valid yet.',
  pickColour: 'Pick a colour',
  /** {hex} */
  swatch: 'Swatch of {hex}',
  // time zones
  time: 'Time',
  startingZone: 'Starting zone',
  /** {date} {time} {place} */
  zoneNow: '{date}, {time} in {place}',
  place: 'Place',
  offset: 'Offset',
  remove: 'Remove',
  /** {place} */
  removeAria: 'Remove {place}',
  nextDay: 'next day',
  previousDay: 'previous day',
  addToCompare: 'Add a place below to compare.',
  addPlace: 'Add a place',
  chooseCity: 'Choose a city...',
  // date formats
  dateWrittenAs: 'That date is written as',
  dateHint: '03/04/2026 is 3 April in DD/MM/YYYY and 4 March in MM/DD/YYYY.',
  orderDmy: 'Day / Month / Year',
  orderMdy: 'Month / Day / Year',
  orderYmd: 'Year / Month / Day',
  dateBad: 'That is not a real date. Try 04/03/2026 and check the order above.',
  // audio and video
  /** {size} */
  tooBig: 'This file is {size}. Browsers cannot convert files over about 2 GB.',
  checkTimes: 'Check the start and end times: use seconds (90) or minutes and seconds (1:30), and the end must be after the start.',
  /** {limit} */
  overLimit: 'A file here is over {limit} MB. It can still work on a computer, but this may be very slow or run out of memory. Cutting the video shorter first helps.',
  /** {limit} */
  overLimitPhone: 'A file here is over {limit} MB. It can still work on a computer, but this may be very slow or run out of memory on a phone. Cutting the video shorter first helps.',
  bitrate: 'Quality (bitrate)',
  bitrateHint: 'Higher means better sound and a bigger file. 192 is a good everyday choice.',
  /** {n} */
  kbit: '{n} kbit/s',
  gifStart: 'Start at (seconds or m:ss)',
  gifLength: 'Length (seconds)',
  gifLengthHint: 'Long GIFs get huge. Under 10 seconds is best.',
  widthPixels: 'Width (pixels)',
  fps: 'Frames per second',
  quality: 'Quality',
  qualityHint: 'Small makes the smallest file; High keeps more detail.',
  qualityHigh: 'High (bigger file)',
  qualityMedium: 'Medium',
  qualitySmall: 'Small (smallest file)',
  widthHint: 'Shrinking the picture saves the most space. 720 suits phones.',
  keepOriginal: 'Keep original',
  trimStart: 'Start (seconds or m:ss)',
  trimEnd: 'End (seconds or m:ss)',
  trimEndHint: 'Leave empty to keep everything after the start.',
  /** {desktop} {phone} */
  suggestedLimit: 'Suggested limit: {desktop} MB on a computer, {phone} MB on a phone. The first conversion downloads the converter engine (about 30 MB, then cached).',
  // spreadsheets and pictures
  excelBom: 'Add a UTF-8 marker so Excel shows accents and non-English letters correctly',
  excelNote: 'Numbers become real numbers. Values like 01234 or phone numbers with leading zeros stay as text, so nothing is lost.',
  /** {q} */
  tiffQuality: 'JPG quality: {q}',
  tiffHint: '90 looks the same as the original for most scans. Lower makes smaller files.',
  largestWidth: 'Largest width',
  webpHint: 'GIF files get big quickly. Shrinking a large picture first keeps the GIF small.',
  keepSize: 'Keep original size',
  /** {n} */
  pixels: '{n} pixels',
  webpNote: 'Animated WEBP files keep only their first frame in this version.',
  // text converters
  /** {kind} is a format name such as CSV. */
  dropText: 'Drop a {kind} file here, or paste below',
  chooseFile: 'Choose file',
  tryExample: 'Try an example',
  chooseAria: 'Choose a file',
  /** {label} */
  inLabel: '{label} in',
  /** {label} */
  outLabel: '{label} out',
  /** {label} */
  pasteHere: 'Paste {label} here',
  resultHere: 'The result appears here',
  convertFailed: 'That input could not be converted.',
  fileTooBig: 'That file is too big.',
  /** {ext} */
  downloadExt: 'Download .{ext}',
  encodingTitle: 'The encoding the file was written in',
  encodingLabel: 'Encoding',
  encodingHint: 'If accents look like Ã© or é, the file is probably Windows-1252. Pick one and check the preview.',
  /** {name} {encoding} */
  preview: 'Preview of {name} read as {encoding}',
} as const;

export type OptKey = keyof typeof en;
export type OptText = Record<OptKey, string>;
