import { fill, type OptText } from '../i18n/options';

/**
 * Errors are thrown in English from the conversion code. For a page in another language this puts the known ones into the
 * page language (from the `err*` words in src/i18n/options) and keeps anything else, such as a parser's own message, as
 * it is. English pages always get the original text.
 */
export function localizeError(message: string, o: OptText, english: boolean): string {
  if (english) return message;
  const big = /^This .+ is (.+), which is more than a browser tab can handle safely here \(the limit is (\d+) MB\)/.exec(message);
  if (big) return fill(o.errTooBigFile, { size: big[1]!, limit: big[2]! });
  const load = /^The converter engine could not load \((.*)\)\. Check your connection/.exec(message);
  if (load) return fill(o.errEngineLoad, { reason: load[1]! });
  const known: [string, string][] = [
    ['This file looks damaged or is not a media file ffmpeg can read.', o.errDamaged],
    ['This file has no audio or video to convert.', o.errNoStream],
    ['The file is too big for your browser to handle. Try a smaller file or a computer.', o.errMemory],
    ['The conversion failed. The file may be damaged or use a format this converter cannot read.', o.errFailed],
    ['The converter engine did not pass its safety check (its fingerprint did not match), so it was not used. Please try again later.', o.errEngineHash],
    ['The picture could not be saved.', o.errSave],
    ['No picture found in this TIFF.', o.errNoTiff],
  ];
  return known.find(([en]) => en === message)?.[1] ?? message;
}

/** A parser's own message for text the converter could not read: English only, so another language says so and shows it. */
export function localizeParseError(message: string, o: OptText, english: boolean): string {
  return english ? message : fill(o.errDetail, { message });
}
