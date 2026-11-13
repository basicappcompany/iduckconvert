/**
 * What is different about each audio and video converter page. The shared parts (steps, privacy, engine) live in
 * content.ts; everything here is written for one conversion only, so no two pages repeat each other.
 * Numbers for sizes come from the typical bitrates below, so they stay consistent.
 */
import type { Faq } from './content';

export interface MediaPage {
  /** Short phrase in the title, after the conversion name. */
  hook: string;
  description: string;
  /** 40 to 60 words, shown straight under the heading. */
  answer: string;
  /** Who needs this exact conversion, and why. */
  who: string;
  /** Does this conversion lose quality, specifically? */
  quality: string;
  /** Which devices and apps open the result. */
  devices: string;
  /** Two questions that only make sense for this page. */
  faqs: [Faq, Faq];
}

/** Typical bitrates in kbit/s of each audio format at the settings this site uses (CD stereo for WAV). */
export const KBPS: Record<string, number> = { wav: 1411, flac: 850, mp3: 192, m4a: 192, aac: 192, ogg: 112, opus: 192 };
/** Megabytes for a track of the given length at a bitrate. */
export const mb = (kbps: number, seconds = 180): number => (kbps * seconds) / 8 / 1000;
const fmt = (n: number): string => (n >= 100 ? String(Math.round(n)) : n >= 10 ? n.toFixed(0) : n.toFixed(1));

/** The settings sentence for each target format, matching src/tools/media.ts. */
export const SETTINGS: Record<string, string> = {
  mp3: 'We encode with LAME, the standard MP3 encoder, at a constant bitrate you choose from 96 to 320 kbit/s (192 by default). The sample rate and channels of the original are kept.',
  wav: 'We write uncompressed 16-bit PCM at the same sample rate and channel count as the original, which is the version of WAV every editor and burner accepts. There are no quality settings.',
  m4a: 'We encode AAC with ffmpeg\'s built-in encoder at a constant bitrate you choose (192 kbit/s by default) and wrap it in an M4A file. The original sample rate and channels are kept.',
  aac: 'We encode AAC with ffmpeg\'s built-in encoder at the bitrate you choose (192 kbit/s by default) and write it as a raw ADTS .aac stream with no wrapper.',
  ogg: 'We encode Vorbis with libvorbis at a quality level taken from your bitrate choice (quality 3, roughly 112 kbit/s, at the default). The sample rate and channels are kept.',
  flac: 'We write lossless FLAC with ffmpeg\'s default compression level. There are no quality settings, because nothing is thrown away.',
  opus: 'We encode Opus with libopus at the bitrate you choose, up to 256 kbit/s (192 by default), in an Ogg wrapper.',
  mp4: 'We encode H.264 video with x264 at CRF 23, preset veryfast and yuv420p colour, with AAC audio at 128 kbit/s and the file laid out for fast starts (faststart). Picture dimensions are rounded to even numbers, as H.264 requires.',
  webm: 'We encode VP8 video with libvpx in real-time mode (CRF 10 with a 1 Mbit/s cap) and Vorbis audio, a combination every browser that plays WEBM understands.',
};

export const MEDIA_PAGES: Record<string, MediaPage> = {
  'mp3-to-wav': {
    hook: 'for editing and CD burning',
    description: 'Convert MP3 to uncompressed WAV for audio editors, samplers and CD burning. Free, in your browser, nothing uploaded. Shows the size change and what WAV will not fix.',
    answer: 'To convert MP3 to WAV, choose your MP3 files, press Convert and download the WAV. It runs in your browser and nothing is uploaded. Expect a file about seven times bigger, because WAV is uncompressed. It will not sound better than the MP3, but editors and burners accept it everywhere.',
    who: 'Most people need this when software refuses MP3: a sampler, a game engine, an older audio editor, or a CD burner that wants uncompressed audio. It is also the safe first step before editing, because editing and re-saving an MP3 repeatedly adds loss each time.',
    quality: 'The conversion itself adds no loss, but it cannot bring anything back either. The MP3 already threw away detail when it was made, and the WAV simply stores what is left without further compression. A WAV made from an MP3 sounds exactly like that MP3.',
    devices: 'WAV opens in every audio editor, in Windows and macOS without extra software, in most phones and in audio-CD burning tools. It is a poor choice for a music library, because the files are large.',
    faqs: [
      { q: 'Will a WAV sound better than my MP3?', a: 'No. The detail removed when the MP3 was made is gone for good. A WAV from an MP3 only stores the same sound uncompressed.' },
      { q: 'Can I burn the WAV to an audio CD?', a: 'Yes. Burning software takes WAV files directly. A standard audio CD holds about 80 minutes, so check the total length rather than the file count.' },
    ],
  },
  'wav-to-mp3': {
    hook: 'shrink recordings about 7 times',
    description: 'Turn big WAV recordings into small MP3 files with a bitrate you choose. Free, in your browser, no upload. See the real size savings for songs and lectures.',
    answer: 'To convert WAV to MP3, choose your WAV files, pick a bitrate, press Convert and download the MP3. It runs in your browser and nothing is uploaded. At 192 kbit/s a file shrinks to about one seventh of its size, which makes recordings easy to email and store.',
    who: 'WAV is what recorders, editors and DAWs export, and it is far too big to send. People convert finished recordings, interviews, lectures and voice tracks to MP3 so they can be shared, stored cheaply or uploaded to sites that do not accept WAV.',
    quality: 'MP3 is lossy, so some detail is discarded by design. At 192 kbit/s most people cannot hear a difference in normal listening, at 320 kbit/s it is very close to the original for nearly everyone, and 96 to 128 kbit/s is fine for speech. Keep the WAV if you may edit the recording again.',
    devices: 'MP3 plays on every phone, computer, car stereo, smart speaker and web browser made in the last twenty years, and almost every upload form accepts it.',
    faqs: [
      { q: 'Which bitrate should I pick for a lecture or meeting?', a: 'For speech, 96 to 128 kbit/s is plenty and keeps the file tiny: a one-hour recording is about 43 to 58 MB. Use 192 or more only for music.' },
      { q: 'Does a mono WAV come out smaller?', a: 'Yes. A mono recording has half the data of stereo before compression, so the WAV is half the size and the MP3 is usually smaller too.' },
    ],
  },
  'm4a-to-mp3': {
    hook: 'for voice memos and iTunes files',
    description: 'Convert M4A (iPhone Voice Memos, iTunes music) to MP3 so it plays anywhere. Free, in your browser, nothing uploaded. Includes bitrate advice and quality notes.',
    answer: 'To convert M4A to MP3, choose your M4A files, pick a bitrate, press Convert and download the MP3. It runs in your browser and nothing is uploaded. This is the fix for iPhone Voice Memos and iTunes songs that players, forms or older devices refuse.',
    who: 'M4A is what an iPhone saves Voice Memos as and what the Apple music store sells. People convert to MP3 when a website, car stereo, older MP3 player, transcription tool or messaging service will not take M4A.',
    quality: 'Both formats are lossy, so converting compresses already-compressed sound a second time and loses a very little more. For speech the difference is not noticeable. For music, choose 192 kbit/s or higher, and keep the M4A original if quality matters.',
    devices: 'MP3 is accepted by essentially every player and upload form. M4A is fine on Apple devices and modern Android phones, but some older players, car stereos and web forms ignore it.',
    faqs: [
      { q: 'Can I convert iTunes songs I bought?', a: 'Songs without copy protection convert fine. Old protected tracks from the early iTunes store cannot be opened by any converter.' },
      { q: 'Why does the MP3 sound slightly worse at the same bitrate?', a: 'AAC, used inside M4A, is more efficient than MP3, so 192 kbit/s of AAC holds more detail than 192 kbit/s of MP3. Use a higher MP3 bitrate if you want to match it.' },
    ],
  },
  'aac-to-mp3': {
    hook: 'for raw .aac audio files',
    description: 'Convert raw AAC audio files to MP3 for older players and upload forms. Free, in your browser, nothing uploaded. Explains AAC versus M4A and what to expect.',
    answer: 'To convert AAC to MP3, choose your .aac files, pick a bitrate, press Convert and download the MP3. It runs in your browser and nothing is uploaded. A bare .aac file has no wrapper, so many players and sites reject it, while MP3 is accepted almost everywhere.',
    who: 'A file ending in .aac is a bare stream of AAC audio, often saved by radios, dictation recorders and some apps. Without a wrapper it carries no title or cover art, and many players, editors and forms refuse it, so people convert it to MP3.',
    quality: 'AAC and MP3 are both lossy, and AAC is the more efficient of the two. Converting costs a little more detail, so use 192 kbit/s or higher for music. For speech recorded as AAC, 128 kbit/s is plenty.',
    devices: 'MP3 plays everywhere. Raw .aac files play in VLC and some phones and radios but are not recognised by many editors and websites; wrapped in M4A, AAC is supported far more widely.',
    faqs: [
      { q: 'What is the difference between AAC and M4A?', a: 'AAC is the compression method. M4A is a wrapper that holds AAC audio plus tags and artwork. A .aac file is the bare stream with no wrapper.' },
      { q: 'Should I convert to M4A instead?', a: 'If your device accepts M4A, MP3 to M4A and similar tools keep AAC quality in a better wrapper. Choose MP3 when you need the widest support.' },
    ],
  },
  'ogg-to-mp3': {
    hook: 'for game audio and Linux files',
    description: 'Convert OGG Vorbis audio to MP3 for phones, car stereos and editors that do not play OGG. Free, in your browser, nothing uploaded. Includes size and quality notes.',
    answer: 'To convert OGG to MP3, choose your OGG files, pick a bitrate, press Convert and download the MP3. It runs in your browser and nothing is uploaded. OGG is an open format common in games and Linux, but many phones, car stereos and editors only understand MP3.',
    who: 'OGG Vorbis files come from games, Linux audio tools, some podcast hosts and older web audio. People convert them when an iPhone, a car stereo, a presentation tool or an editor will not open the file.',
    quality: 'Both are lossy. Vorbis at its usual setting is already efficient, so a 192 kbit/s MP3 made from it keeps nearly everything audible, but it cannot recover detail Vorbis removed. Pick 192 kbit/s or more, and keep the OGG if you may convert again.',
    devices: 'OGG plays in VLC, on Android, in Firefox and Chrome and on most Linux players, but not in iTunes, most car stereos or many editors. MP3 plays in all of them.',
    faqs: [
      { q: 'Is the MP3 bigger than the OGG?', a: 'Usually, yes. A three-minute OGG at about 112 kbit/s is around 2.5 MB, while the MP3 at 192 kbit/s is about 4.3 MB. Choose a lower MP3 bitrate if size matters more.' },
      { q: 'Does this work for OGG files that contain Opus?', a: 'Yes. Files ending .ogg or .opus are read by the same engine, so either converter finds the audio inside.' },
    ],
  },
  'flac-to-mp3': {
    hook: 'for phones and car stereos',
    description: 'Convert FLAC to MP3 and cut file size by about 75 percent. Free, in your browser, nothing uploaded. Learn what lossy conversion costs and which bitrate to pick.',
    answer: 'To convert FLAC to MP3, choose your FLAC files, pick 256 or 320 kbit/s, press Convert and download the MP3. It runs in your browser and nothing is uploaded. Files become roughly three to four times smaller, which suits phones and car stereos, but you keep the FLAC originals.',
    who: 'FLAC is the lossless format audiophiles and ripping tools use. People make MP3 copies of FLAC albums for phones with small storage, car stereos and USB sticks that only play MP3, and sharing sites that do not accept FLAC.',
    quality: 'This is the conversion that gives up the most: you go from lossless to lossy. At 320 kbit/s most listeners cannot tell the difference in a blind test, at 256 few can, and at 128 careful listeners can. Treat the MP3 as a travel copy and keep the FLAC.',
    devices: 'MP3 plays on every device and car stereo. FLAC plays on modern Android and iPhone, Windows 10 and later, VLC and dedicated players, but many car systems and older gadgets do not support it.',
    faqs: [
      { q: 'How much smaller will my album be?', a: 'A 40-minute album is roughly 200 to 300 MB as FLAC and about 100 MB as a 320 kbit/s MP3, so around a third to a half of the size.' },
      { q: 'Can I get the FLAC back from the MP3?', a: 'No. Lossy conversion removes information permanently. Always keep the FLAC files and treat MP3s as copies.' },
    ],
  },
  'opus-to-mp3': {
    hook: 'for WhatsApp voice notes',
    description: 'Open WhatsApp voice notes and other OPUS audio by converting to MP3 in your browser. Free, nothing uploaded. Includes bitrate advice for speech and file-size examples.',
    answer: 'To convert OPUS to MP3, choose your .opus files, press Convert and download the MP3. It runs in your browser and nothing is uploaded. WhatsApp saves voice messages as OPUS, which many players and editors cannot open, and 96 to 128 kbit/s MP3 is plenty for speech.',
    who: 'Chat apps such as WhatsApp save voice messages as OPUS because it keeps speech clear at tiny sizes. People convert them to MP3 to edit them, attach them to email, play them on a device that does not know OPUS, or feed them to a transcription service.',
    quality: 'Opus at low bitrates is very efficient, so converting to MP3 needs a higher bitrate to match it: 96 to 128 kbit/s MP3 is fine for speech. Both are lossy, so the conversion cannot recover anything Opus already removed.',
    devices: 'OPUS plays in modern browsers, Android and VLC, but many music players, editors and older phones cannot read it. MP3 opens everywhere.',
    faqs: [
      { q: 'Why is the MP3 bigger than my voice note?', a: 'Opus is more efficient than MP3 at speech bitrates. A minute of voice note is often under 200 KB, while a 128 kbit/s MP3 is about 1 MB. Pick 96 kbit/s if size matters.' },
      { q: 'Can I convert many voice notes at once?', a: 'Yes. Drop them all in and download the MP3s together as one ZIP; each keeps its original name.' },
    ],
  },
  'mp3-to-ogg': {
    hook: 'for websites, games and Linux',
    description: 'Convert MP3 to OGG Vorbis for websites, games and open-source players. Free, in your browser, nothing uploaded. Includes quality, size and compatibility notes.',
    answer: 'To convert MP3 to OGG, choose your MP3 files, press Convert and download the OGG. It runs in your browser and nothing is uploaded. OGG Vorbis is an open, patent-free format used in games and web audio, and it is usually smaller than an MP3 of similar quality.',
    who: 'Game developers, web builders and Linux users convert MP3 to OGG because Vorbis is open, free of licensing questions and supported by game engines and browsers. It is also handy when a tool asks for OGG specifically.',
    quality: 'Both formats are lossy, so converting adds a second round of compression. Vorbis is efficient, and at our setting (quality 3) it keeps the sound closely, but it cannot restore detail the MP3 removed. Keep the MP3 original.',
    devices: 'OGG plays in Chrome, Firefox and Edge, in VLC, on Android and in most game engines. It does not play in iTunes, many car stereos, or Safari on older systems, so keep an MP3 if you share widely.',
    faqs: [
      { q: 'Is OGG smaller than MP3?', a: 'At this setting, yes: a three-minute track is about 2.5 MB as OGG against 4.3 MB as a 192 kbit/s MP3, with similar listening quality.' },
      { q: 'Will it play on my iPhone?', a: 'Not in the built-in Music app. Use M4A or MP3 for Apple devices; OGG works there only in apps that include their own decoder, such as VLC.' },
    ],
  },
  'mp3-to-m4a': {
    hook: 'for Apple devices and iTunes',
    description: 'Convert MP3 to M4A (AAC) for iPhone, iTunes and Apple Music libraries. Free, in your browser, nothing uploaded. Includes quality and compatibility notes.',
    answer: 'To convert MP3 to M4A, choose your MP3 files, pick a bitrate, press Convert and download the M4A. It runs in your browser and nothing is uploaded. M4A holds AAC audio, the format Apple devices and iTunes prefer, and it is usually a bit more efficient than MP3.',
    who: 'People convert MP3 to M4A to use a track as an iPhone ringtone source, to import music into iTunes in the preferred format, or because an app, a smart speaker or a video editor lists M4A as a supported audio format.',
    quality: 'Both are lossy, so converting adds a little more loss and cannot improve the sound. AAC is generally regarded as sounding slightly better than MP3 at the same bitrate, but that only helps when encoding from the original, not from an MP3 copy.',
    devices: 'M4A plays on iPhone, iPad, Mac, iTunes, Windows Media Player on current Windows and almost all modern Android phones. MP3 is more universal on old players and car stereos.',
    faqs: [
      { q: 'Does converting to M4A make the sound better?', a: 'No. The MP3 has already lost detail. M4A only helps when it is made from the original recording or CD.' },
      { q: 'Can I use the M4A as a ringtone?', a: 'iPhone ringtones use a variant with the .m4r extension and a 40-second limit. Rename the file after trimming it in an editor.' },
    ],
  },
  'wav-to-flac': {
    hook: 'lossless, about half the size',
    description: 'Compress WAV to FLAC with no loss of quality and save about half the space. Free, in your browser, nothing uploaded. Includes size examples and device support.',
    answer: 'To convert WAV to FLAC, choose your WAV files, press Convert and download the FLAC. It runs in your browser and nothing is uploaded. FLAC is lossless, so the sound is bit-for-bit identical when decoded, and files are typically about half the size of the WAV.',
    who: 'People archive finished recordings, CD rips and masters as FLAC because it keeps every bit while saving roughly half the disk space, and because FLAC stores tags and cover art, which plain WAV does not do reliably.',
    quality: 'No quality is lost. Decoding the FLAC gives back exactly the same samples as the WAV, which is what lossless means. This is the right conversion for archiving; use WAV to MP3 only when you need a small lossy copy.',
    devices: 'FLAC plays on modern Android and iPhone, Windows 10 and later, macOS, VLC and dedicated music players. Some car stereos and older players do not support it, and some editors need it converted back to WAV.',
    faqs: [
      { q: 'How much smaller is the FLAC?', a: 'A three-minute CD-quality song is about 32 MB as WAV and roughly 16 to 20 MB as FLAC, depending on the music. Quiet and simple music compresses more.' },
      { q: 'Is there any difference in sound?', a: 'No. FLAC decodes to exactly the same data as the original WAV, so there is nothing to hear.' },
    ],
  },
  'flac-to-wav': {
    hook: 'lossless, for editors and burners',
    description: 'Convert FLAC to WAV with no loss so editors, samplers and CD burners can open it. Free, in your browser, nothing uploaded. Includes size and compatibility notes.',
    answer: 'To convert FLAC to WAV, choose your FLAC files, press Convert and download the WAV. It runs in your browser and nothing is uploaded. The result is identical in sound to the FLAC, but about twice the size, which is the price of working in a format every audio tool understands.',
    who: 'Editors, samplers, DJ software, video tools and CD-burning programs often do not read FLAC. Producers also convert to WAV before editing so there is no decoding on every playback, then store the final result back as FLAC.',
    quality: 'No quality is lost: FLAC is lossless, so the WAV contains exactly the original samples. The only change is that the data is no longer compressed.',
    devices: 'WAV opens in every audio editor and operating system and burns to audio CDs. It is a poor choice for a phone library because of its size.',
    faqs: [
      { q: 'Will the WAV be exactly the same as the original CD rip?', a: 'Yes, if the FLAC was made from that rip without changes. Lossless means the decoded data is identical to what went in.' },
      { q: 'Why is the file twice as big?', a: 'FLAC compresses the data without losing anything, typically to about half. WAV stores the same data uncompressed.' },
    ],
  },
  'm4a-to-wav': {
    hook: 'for editing voice memos',
    description: 'Convert M4A to WAV so editors and burners can open iPhone voice memos and iTunes files. Free, in your browser, nothing uploaded. Includes size and quality notes.',
    answer: 'To convert M4A to WAV, choose your M4A files, press Convert and download the WAV. It runs in your browser and nothing is uploaded. WAV is uncompressed, so a voice memo grows about ten times, but audio editors, samplers and CD burners that refuse M4A will open it.',
    who: 'iPhone Voice Memos and iTunes files are M4A, which many audio editors, samplers and broadcast tools do not import. Converting to WAV is the standard way to get a recording into an editor for cleaning up, cutting or mixing.',
    quality: 'The conversion adds no further loss, but it cannot restore what the AAC compression already removed. The WAV contains exactly the sound the M4A plays, stored without compression.',
    devices: 'WAV opens in every editor, in Windows and macOS and in CD-burning tools. Voice memos and music in M4A play on Apple and modern Android devices but not in many professional tools.',
    faqs: [
      { q: 'How big will the WAV be?', a: 'About 10 MB for each minute of stereo CD-quality sound. A one-hour memo can reach 600 MB, so check that you have space.' },
      { q: 'Should I convert back to M4A or MP3 after editing?', a: 'Yes, for sharing. Edit in WAV, then export to MP3 or M4A once at the end so you only compress one time.' },
    ],
  },
  'video-to-mp3': {
    hook: 'extract the sound from any video',
    description: 'Extract the audio from any video (MP4, MOV, MKV, WEBM, AVI) as an MP3 in your browser. Free, nothing uploaded. Includes bitrate advice and the size you can expect.',
    answer: 'To extract audio from a video, choose your video, press Extract MP3 and download the MP3. It runs in your browser and nothing is uploaded. Only the sound track is kept, so a 100 MB video becomes an MP3 of around 10 to 15 MB, depending on its length.',
    who: 'People pull the sound from their own lecture recordings, interviews, concert clips, voice calls and family videos to listen on the go, make a podcast file, or transcribe the speech. It handles MP4, MOV, MKV, WEBM, AVI and most phone and camera formats.',
    quality: 'The sound is encoded once as MP3. If the video\'s audio was already compressed, which it nearly always is, matching its bitrate is enough: choosing 320 kbit/s will not make a 128 kbit/s soundtrack better, only bigger.',
    devices: 'MP3 plays on everything and is accepted by almost every upload form, which is why it is the usual target for extracted audio.',
    faqs: [
      { q: 'Which video formats does it accept?', a: 'MP4, MOV, MKV, WEBM, AVI, FLV, WMV, 3GP, MPEG and most phone, camera and screen-recording files, plus audio files if you drop those in by mistake.' },
      { q: 'Can I use it on videos I do not own?', a: 'Only extract audio from videos you own or have the right to use, such as your own recordings. Copyright rules for other people\'s videos still apply.' },
    ],
  },
  'mp4-to-mp3': {
    hook: 'turn an MP4 video into audio',
    description: 'Convert an MP4 video to an MP3 audio file in your browser. Free, nothing uploaded. Shows how much smaller the file gets and which bitrate to choose.',
    answer: 'To convert MP4 to MP3, choose your video, pick a bitrate, press Convert and download the MP3. It runs in your browser and nothing is uploaded. Only the sound is kept, so a 10-minute video of around 100 MB becomes an MP3 of roughly 10 to 15 MB.',
    who: 'MP4 is the format of phone videos, screen recordings, webinars and downloaded lectures. People convert it to MP3 when they only want the speech or music: to listen offline, to send a small file, or to upload to a service that takes audio only.',
    quality: 'The video is dropped and the sound is encoded once as MP3. MP4 soundtracks are usually AAC at 96 to 192 kbit/s, so a 192 kbit/s MP3 captures everything audible; going higher only makes the file bigger.',
    devices: 'The MP3 plays on every phone, computer, car stereo and web browser. The original MP4 also plays almost everywhere, but only the MP3 works in audio-only players and podcast tools.',
    faqs: [
      { q: 'How big will the MP3 be?', a: 'About 1.4 MB per minute at 192 kbit/s and 0.7 MB per minute at 96 kbit/s, so a 10-minute video gives roughly 7 to 14 MB.' },
      { q: 'Does it keep the video?', a: 'No. Only the audio is kept. To shorten or shrink the video instead, use Trim video or Compress video.' },
    ],
  },
  'mp4-to-webm': {
    hook: 'small web video for your site',
    description: 'Convert MP4 to WEBM (VP8 and Vorbis) for your own website. Free, in your browser, nothing uploaded. Includes browser support, size and settings.',
    answer: 'To convert MP4 to WEBM, choose your video, press Convert and download the WEBM. It runs in your browser and nothing is uploaded. WEBM plays directly in Chrome, Firefox and Edge, so it suits videos on your own site; keep the MP4 too for devices that prefer it.',
    who: 'Web developers and bloggers use WEBM because it is open, plays in every major browser without a plugin and is built for streaming over the web. People also convert to it when a site, game or app asks for WEBM specifically.',
    quality: 'The video is encoded again, so there is a small loss; our real-time VP8 setting favours speed and compatibility over the smallest possible file. Very short clips look nearly identical. Keep the original MP4 as the master.',
    devices: 'WEBM plays in Chrome, Firefox, Edge and recent Safari, and in VLC. Many TVs, game consoles, phone galleries and desktop editors do not accept it, so list an MP4 beside it for public sites.',
    faqs: [
      { q: 'Will the WEBM be smaller than the MP4?', a: 'Often similar. Our setting is tuned for speed, so the file may be bigger than a slower encode would give. Use Compress video first to reduce the size.' },
      { q: 'How do I put both files on a page?', a: 'Add a video tag with two source elements, the WEBM first and the MP4 second. The browser plays the first one it supports.' },
    ],
  },
  'webm-to-mp4': {
    hook: 'for editors, TVs and phone galleries',
    description: 'Convert WEBM videos and screen recordings to MP4 so they open in editors and phones. Free, in your browser, nothing uploaded. Includes settings and size notes.',
    answer: 'To convert WEBM to MP4, choose your video, press Convert and download the MP4. It runs in your browser and nothing is uploaded. Browser screen recordings are often WEBM, which many editors, TVs and phone galleries refuse, while MP4 with H.264 opens almost everywhere.',
    who: 'Browser-based screen recorders, some video downloaders and website videos produce WEBM. People convert it to MP4 to edit it in a desktop editor, put it on a TV or phone, or upload it to a service that accepts only MP4.',
    quality: 'The video is encoded again as H.264 at a high-quality setting, so any loss is small. Quality cannot improve beyond the WEBM, and screen recordings with fine text stay sharp at this setting.',
    devices: 'MP4 with H.264 and AAC plays on phones, tablets, smart TVs, game consoles, car screens, every editor and every social app. WEBM plays in modern browsers but is rejected by many of these.',
    faqs: [
      { q: 'Why is the MP4 bigger than my WEBM?', a: 'WEBM files from screen recorders are often compressed very hard. The MP4 uses a quality-based setting, so it can be larger. Run Compress video afterwards to shrink it.' },
      { q: 'Does it keep the audio?', a: 'Yes. Vorbis or Opus audio is converted to AAC, the standard MP4 audio format.' },
    ],
  },
  'mov-to-mp4': {
    hook: 'for iPhone and Mac videos',
    description: 'Convert iPhone and Mac MOV videos to MP4 so they play on Android, Windows and every app. Free, in your browser, nothing uploaded. Includes size and settings.',
    answer: 'To convert MOV to MP4, choose your video, press Convert and download the MP4. It runs in your browser and nothing is uploaded. iPhones and Macs record MOV, often with HEVC video that Windows and Android may not play, so MP4 with H.264 is the safe format for sharing.',
    who: 'iPhone, iPad and Mac recordings are MOV files, and QuickTime screen recordings are too. People convert them when a Windows PC, an Android phone, a TV, an editor or a website will not play or accept the file.',
    quality: 'The video is encoded again as H.264, so there is a small loss; at our setting it is hard to see. If your iPhone recorded HEVC, the MP4 is usually bigger because H.264 is less efficient. Keep the MOV as the full-quality original.',
    devices: 'MP4 with H.264 plays on Android, Windows, smart TVs, game consoles and every social and chat app. MOV plays on Apple devices and in many editors, but support elsewhere is patchy.',
    faqs: [
      { q: 'Will my 4K iPhone video get bigger?', a: 'Possibly. HEVC 4K at 60 frames per second is about 400 MB a minute, and H.264 at the same quality is larger. Use Compress video to shrink it, or record in a more compatible mode.' },
      { q: 'Does it work for Live Photos?', a: 'A Live Photo is a short MOV plus a still. Convert the MOV part only; the still image is a separate file.' },
    ],
  },
  'mkv-to-mp4': {
    hook: 'for phones, TVs and editors',
    description: 'Convert MKV to MP4 so phones, TVs and editors can play it. Free, in your browser, nothing uploaded. Explains what survives (and what does not) in the conversion.',
    answer: 'To convert MKV to MP4, choose your video, press Convert and download the MP4. It runs in your browser and nothing is uploaded. MKV can hold many tracks that phones, TVs and editors do not understand, while MP4 with H.264 plays almost everywhere. Large files take a while.',
    who: 'MKV is common for downloads, screen captures from some tools and disc backups. It holds several audio tracks and subtitles in one file, but phone galleries, many TVs and editors refuse it, so people convert it to MP4.',
    quality: 'The main video and audio are converted to H.264 and AAC, with a small loss. Extra audio tracks, subtitle tracks and chapters should not be relied on to carry over, so check the MP4 before deleting the MKV.',
    devices: 'MP4 with H.264 plays on phones, tablets, smart TVs, game consoles and every editor. MKV plays in VLC, many media players and some TVs through USB, but is rejected by many others.',
    faqs: [
      { q: 'Will my subtitles be kept?', a: 'Do not count on it. Soft subtitle tracks in the MKV may not carry over. If you need them, use a player that supports MKV, or keep the subtitle file beside the MP4 with the same name.' },
      { q: 'Can I convert a whole film?', a: 'It works, but a full film is large and your browser does the work. We suggest files under 500 MB on a computer; for bigger files a desktop converter will be faster.' },
    ],
  },
  'avi-to-mp4': {
    hook: 'for old camera clips and downloads',
    description: 'Convert old AVI videos to MP4 so phones and TVs play them. Free, in your browser, nothing uploaded. Explains why AVI fails today and what to expect.',
    answer: 'To convert AVI to MP4, choose your video, press Convert and download the MP4. It runs in your browser and nothing is uploaded. AVI dates from the 1990s and often uses codecs modern phones and TVs no longer support, while MP4 with H.264 plays on nearly every device.',
    who: 'AVI turns up in old digital-camera clips, early camcorders, downloaded films and screen recordings from older software. People convert them to MP4 to watch on a phone or TV, to upload or to edit in modern software.',
    quality: 'Many AVI files use older, less efficient codecs, so the MP4 is often smaller. The picture is encoded again with a small loss, and low-resolution old footage will not look sharper, because conversion cannot add detail.',
    devices: 'MP4 with H.264 plays on phones, TVs, consoles and every modern editor. AVI depends on the codec inside, and many modern devices show a black screen or no sound.',
    faqs: [
      { q: 'Why does my AVI play with no sound or no picture?', a: 'AVI is only a container. If the codec inside is not supported on your device, you get half a file. Converting rewrites both tracks in standard H.264 and AAC.' },
      { q: 'Will it fix a damaged AVI?', a: 'Not always. A slightly damaged file may convert with glitches, and a badly damaged one will fail with a clear message.' },
    ],
  },
  'mov-to-webm': {
    hook: 'put iPhone clips on a website',
    description: 'Convert MOV to WEBM for websites and browsers. Free, in your browser, nothing uploaded. Includes browser support, the settings used and size notes.',
    answer: 'To convert MOV to WEBM, choose your video, press Convert and download the WEBM. It runs in your browser and nothing is uploaded. WEBM plays directly in Chrome, Firefox and Edge, so it suits putting an iPhone or Mac clip on your own site, ideally next to an MP4 copy.',
    who: 'People who record on an iPhone or Mac and want to show the clip on a website convert it to WEBM, because browsers play it without a plugin and it is built for the web. It is also used when a tool asks for WEBM.',
    quality: 'The video is encoded again with VP8 at a high-quality real-time setting, so there is a small loss. If the MOV was recorded in HEVC at high resolution, shrink it first with Compress video so the WEBM is practical to serve.',
    devices: 'WEBM plays in Chrome, Firefox, Edge and recent Safari. MOV plays on Apple devices but not in most browsers directly, which is the main reason to convert.',
    faqs: [
      { q: 'Should I convert to MP4 instead?', a: 'For sharing with people, yes: MP4 plays on more devices. Choose WEBM when you are building a web page and want an open format, ideally offering both.' },
      { q: 'Why is my WEBM large?', a: 'The setting favours speed, not the smallest file, and phone videos are often high resolution. Use Compress video first, with a width of 720 pixels.' },
    ],
  },
  'mkv-to-webm': {
    hook: 'make MKV playable in browsers',
    description: 'Convert MKV to WEBM so the video plays in web browsers. Free, in your browser, nothing uploaded. Explains what carries over and what the settings are.',
    answer: 'To convert MKV to WEBM, choose your video, press Convert and download the WEBM. It runs in your browser and nothing is uploaded. Web browsers cannot play most MKV files, but they play WEBM directly, which makes this a quick way to show an MKV on a web page.',
    who: 'MKV is a container browsers generally refuse to play. People convert it to WEBM to embed a downloaded or captured video on a page, to preview it without installing a player, or to meet an upload rule that asks for WEBM.',
    quality: 'The main video and audio are encoded again in VP8 and Vorbis with a small loss. Subtitle tracks, extra audio tracks and chapters should not be expected to carry over. Large files take time because your browser does the work.',
    devices: 'WEBM plays in Chrome, Firefox, Edge and recent Safari and in VLC. For phones and TVs, MP4 is the safer choice and the MKV to MP4 converter makes it.',
    faqs: [
      { q: 'Is WEBM or MP4 better for my website?', a: 'Offer both if you can: WEBM first, MP4 second. Browsers use the first format they support, and MP4 covers devices that do not take WEBM.' },
      { q: 'What happens to a film with several audio languages?', a: 'Only the main audio track should be relied on. Keep the MKV if you need the other languages.' },
    ],
  },
  'avi-to-webm': {
    hook: 'turn old AVI into web video',
    description: 'Convert AVI to WEBM so old videos play in web browsers. Free, in your browser, nothing uploaded. Includes the codecs used and what to expect for quality and size.',
    answer: 'To convert AVI to WEBM, choose your video, press Convert and download the WEBM. It runs in your browser and nothing is uploaded. Browsers cannot play AVI, but they play WEBM directly, so this is a quick way to put an old camera clip or download on a web page.',
    who: 'Old camcorder and digital-camera clips, early screen recordings and downloaded videos are often AVI, which no browser plays. People convert to WEBM to show them on a site or share a link that plays immediately.',
    quality: 'The picture is encoded again in VP8 with a small loss, and low-resolution footage will not look sharper than the AVI. Old files are often small and in odd sizes, which convert without problems.',
    devices: 'WEBM plays in Chrome, Firefox, Edge and recent Safari. For phones and TVs that do not take WEBM, convert to MP4 instead.',
    faqs: [
      { q: 'Why not convert straight to MP4?', a: 'MP4 works on more devices. WEBM is for web pages, where it is open and plays natively in browsers. Use AVI to MP4 for general sharing.' },
      { q: 'Will it keep the sound?', a: 'Yes, converted to Vorbis. If the AVI has no readable audio track, the page tells you when it cannot read it.' },
    ],
  },
};

/** A line comparing the size of a typical three-minute song in the two formats, from the bitrate table. */
export function sizeLine(from: string, to: string): string {
  const a = mb(KBPS[from] ?? 192);
  const b = mb(KBPS[to] ?? 192);
  const ratio = a >= b ? a / b : b / a;
  const word = a >= b ? 'smaller' : 'bigger';
  return `A typical three-minute song is about ${fmt(a)} MB as ${from.toUpperCase()} and about ${fmt(b)} MB as ${to.toUpperCase()} at our setting, so the file gets roughly ${ratio < 1.15 ? 'the same size' : `${ratio.toFixed(ratio >= 10 ? 0 : 1)} times ${word}`}.`;
}
