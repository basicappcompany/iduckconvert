import type { Guide } from './guides';

const D = '2026-11-13';

/** Audio and video how-to guides. */
export const MEDIA_GUIDES: readonly Guide[] = [
  {
    slug: 'how-to-make-a-gif-from-a-video',
    title: 'How to make a GIF from a video',
    description: 'Turn any short video clip into an animated GIF in your browser, and keep the file small enough to send.',
    category: 'Video',
    intro:
      'To make a GIF from a video, drop the clip into the Video to GIF converter, choose where it starts and how long it runs, then press Make GIF. Keep it under 10 seconds and under 480 pixels wide, or the GIF becomes huge.',
    steps: [
      'Open Video to GIF and drop in your clip (MP4, MOV, WEBM, MKV or AVI).',
      'Set the start time. Use seconds (90) or minutes and seconds (1:30).',
      'Set the length in seconds. Three to six seconds is plenty for a reaction or a demo.',
      'Choose a width. 320 to 480 pixels suits chat apps; go to 640 only if the detail matters.',
      'Pick 10 frames per second for a small file, or 15 to 20 for smoother movement, then press Make GIF and download it.',
    ],
    sections: [
      {
        heading: 'Why GIFs get so big',
        paragraphs: [
          'A GIF stores every frame as a separate picture and can only use 256 colours. There is no clever video compression, so length, width and frame rate multiply together. Halving the width cuts the file to roughly a quarter, and halving the frame rate halves it again.',
        ],
      },
      {
        heading: 'What a GIF cannot do',
        paragraphs: [
          'A GIF has no sound at all. If you need audio, keep the clip as an MP4. Photographs can also look slightly grainy, because 256 colours is not much. That is a limit of the format, not of the tool.',
          'If the GIF is only going to be shown on a website or in a modern chat app, an MP4 that loops is usually far smaller and sharper. The GIF to MP4 converter does that in reverse.',
        ],
      },
    ],
    faqs: [
      { q: 'Does the GIF loop?', a: 'Yes. The GIFs made here loop forever, which is what most people want.' },
      { q: 'Can I add text or stickers?', a: 'Not in this tool. It only cuts and converts. Add text to the video in an editor first if you need it.' },
      { q: 'Is the video uploaded?', a: 'No. The GIF is made in your browser tab and the clip never leaves your device.' },
    ],
    tools: ['video-to-gif', 'gif-to-mp4', 'trim-video'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-compress-a-video-to-send-it',
    title: 'How to compress a video to send it',
    description: 'Shrink a large video for email or chat apps by lowering its quality and width, without installing anything.',
    category: 'Video',
    intro:
      'To compress a video, open the Compress video tool, drop it in, choose Small quality and a width of 720 pixels, then press Compress. Shrinking the width saves the most space, and a 50 to 90 percent reduction is common.',
    steps: [
      'Check the size you need to reach. Many email services stop at 20 to 25 MB.',
      'Open Compress video and drop your file in. Long phone videos are the usual culprits.',
      'Choose a width. 720 pixels looks fine on a phone screen; 480 is smaller still.',
      'Choose a quality. Medium suits most clips. Pick Small only when the size limit matters more than the looks.',
      'Press Compress, then compare the before and after sizes shown with your download.',
    ],
    sections: [
      {
        heading: 'What actually makes a video big',
        paragraphs: [
          'Size depends on length, picture dimensions and how hard the video is compressed. A phone recording at 1080p or 4K stores far more detail than a small screen can show. Dropping to 720 pixels wide throws away detail nobody sees and cuts the file dramatically.',
          'If it is still too big, cut the video shorter with Trim video first. Removing the minute you do not need beats squeezing the whole thing harder.',
        ],
      },
      {
        heading: 'Limits to know',
        paragraphs: [
          'Everything runs on your own device, so a very large file can be slow or run out of memory, especially on a phone. We suggest files under 500 MB on a computer and 100 MB on a phone. For a bigger file, use a computer.',
        ],
      },
    ],
    faqs: [
      { q: 'Does compressing reduce quality?', a: 'Yes, always a little. Compressing trades detail for size. Keep your original in case you want a better version later.' },
      { q: 'What format do I get?', a: 'An MP4, which plays almost everywhere.' },
      { q: 'Can I compress several videos at once?', a: 'Yes. They run one after another and you can download them together as a ZIP.' },
    ],
    tools: ['compress-video', 'trim-video', 'video-to-gif'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-trim-a-video-without-software',
    title: 'How to trim a video without software',
    description: 'Cut the start and end off a video in your browser by typing two times. No editor to install, nothing uploaded.',
    category: 'Video',
    intro:
      'To trim a video, open the Trim video tool, drop the file in, type the start and end times, and press Trim. The cut clip is saved as an MP4. Use seconds (90) or minutes and seconds (1:30).',
    steps: [
      'Play your video in any player and note the time where you want it to start and end.',
      'Open Trim video and drop the file in.',
      'Type the start time. Leave it at 0 to keep the beginning.',
      'Type the end time. Leave it empty to keep everything after the start.',
      'Press Trim and download the MP4.',
    ],
    sections: [
      {
        heading: 'How the cut is made',
        paragraphs: [
          'The clip is encoded again after cutting, so the start is exact to the frame. A copy-only cut is faster but can only start at certain points in the video, which often leaves a frozen or black beginning. Re-encoding takes longer but avoids that.',
          'Because it is re-encoded, quality drops very slightly. A high-quality setting is used, and most people will not notice the difference.',
        ],
      },
      {
        heading: 'Typing times',
        paragraphs: ['A plain number is seconds, so 90 means one minute thirty. Two parts mean minutes and seconds (1:30), and three parts mean hours (1:02:30). Decimals work too, for example 12.5.'],
      },
      {
        heading: 'Getting the times right',
        paragraphs: ['Open the video in any player that shows the time, pause at the moment you want to start and write the time down, then do the same for the end. Leave a second or two of margin at each end, because it is easy to trim again but impossible to get back footage you cut. If the clip is for a GIF, a few seconds is enough, and Video to GIF has its own start and length boxes so you do not need to trim first.'],
      },
    ],
    faqs: [
      { q: 'Can I cut out the middle?', a: 'Not in one go. Trim the part before and the part after separately, or use a full video editor to join clips.' },
      { q: 'Does trimming also shrink the file?', a: 'Usually, because there is less video. For a bigger saving, also use Compress video.' },
      { q: 'Is my video uploaded?', a: 'No. Everything happens in your browser tab.' },
    ],
    tools: ['trim-video', 'compress-video', 'video-to-gif'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-mov-to-mp4',
    title: 'How to convert MOV to MP4 (iPhone videos)',
    description: 'Make iPhone and Mac MOV videos play on Android, Windows and every app by converting them to MP4 in your browser.',
    category: 'Video',
    intro:
      'To convert MOV to MP4, open the MOV to MP4 converter, drop your video in and press Convert. MP4 plays on Android, Windows, smart TVs and every social app, so it is the safe format for sharing an iPhone video.',
    steps: [
      'Get the .mov file onto your computer or phone (AirDrop, a cable or iCloud).',
      'Open MOV to MP4 and drop the file onto the box.',
      'Press Convert. The first time, your browser downloads the converter engine (about 30 MB), which is then cached.',
      'Download the MP4 when the progress bar finishes.',
    ],
    sections: [
      {
        heading: 'Why iPhone videos are MOV',
        paragraphs: [
          'iPhones record into Apple\'s QuickTime container, MOV. Depending on your camera setting the video inside is either H.264 or the newer HEVC. Apple devices handle both, but many Windows PCs, Android phones, editors and websites do not open HEVC video without extra software.',
          'The converter writes standard H.264 video in an MP4 wrapper, which is accepted nearly everywhere.',
        ],
      },
      {
        heading: 'Stop it at the source',
        paragraphs: ['On the iPhone you can record in a more compatible format: Settings, Camera, Formats, Most Compatible. Files get bigger, but they open everywhere without converting.'],
      },
      {
        heading: 'If the converted file will not play',
        paragraphs: ['First make sure the download finished, then try another player such as VLC. If a very old phone or TV still refuses the MP4, the video may simply be too big or too sharp for it: run it through Compress video at 720 pixels wide. Keep the original MOV, because it holds the full-quality recording and you can always make another MP4 from it later.'],
      },
    ],
    faqs: [
      { q: 'Will the quality drop?', a: 'Slightly, because the video is encoded again. A high-quality setting is used, so most people cannot tell.' },
      { q: 'Does it keep the sound?', a: 'Yes, the sound is converted to AAC, the usual MP4 audio format.' },
      { q: 'Is it free for long videos?', a: 'It is free and has no limit of its own, but long videos are slow on a phone. We suggest files under 500 MB on a computer and 100 MB on a phone.' },
    ],
    tools: ['mov-to-mp4', 'compress-video', 'trim-video'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-mkv-to-mp4',
    title: 'How to convert MKV to MP4',
    description: 'Make MKV videos play on phones, TVs and editors by converting them to MP4 right in your browser.',
    category: 'Video',
    intro:
      'To convert MKV to MP4, open the MKV to MP4 converter, drop the video in and press Convert. MKV is a flexible container many phones and TVs refuse to play, while MP4 works almost everywhere.',
    steps: [
      'Open MKV to MP4 and drop your .mkv file onto the box.',
      'Press Convert and wait for the progress bar.',
      'Download the MP4 and try it on the device that would not play the MKV.',
    ],
    sections: [
      {
        heading: 'What MKV is',
        paragraphs: [
          'MKV (Matroska) is a container, a box that can hold video, several audio tracks, subtitles and chapters. It is popular for downloads and Blu-ray backups because it is so flexible, but phone gallery apps, many TVs and editors do not support it.',
        ],
      },
      {
        heading: 'What to expect',
        paragraphs: [
          'The main video and audio are converted to the MP4 standard. Do not count on extra audio tracks, subtitles or chapters carrying over. If a file depends on a particular subtitle track, check the MP4 before deleting the MKV.',
          'Large MKV files, such as full films, are heavy to convert in a browser. We suggest files under 500 MB on a computer. For films, a desktop converter will be faster.',
        ],
      },
      {
        heading: 'Playing MKV without converting',
        paragraphs: ['Some players open MKV directly, including VLC on computers and many media apps on phones and smart TVs, so conversion is only needed when a particular device refuses the file. If you want every subtitle and audio track kept exactly as it is, a player that supports MKV is a better answer than converting.'],
      },
    ],
    faqs: [
      { q: 'Why not just rename .mkv to .mp4?', a: 'Renaming changes only the label. The contents are still MKV, so players that cannot read MKV still fail. The file has to be converted.' },
      { q: 'Will it be the same quality?', a: 'Close to it. The video is encoded again with a high-quality setting, so there is a small loss.' },
      { q: 'Is the file uploaded?', a: 'No. It is converted inside your browser tab.' },
    ],
    tools: ['mkv-to-mp4', 'mkv-to-webm', 'compress-video'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-webm-to-mp4',
    title: 'How to convert WEBM to MP4',
    description: 'Turn WEBM videos and screen recordings into MP4 so they open in editors, TVs and phone galleries.',
    category: 'Video',
    intro:
      'To convert WEBM to MP4, drop the file into the WEBM to MP4 converter and press Convert. Browsers play WEBM happily, but many editors, TVs and phone galleries only accept MP4.',
    steps: [
      'Open WEBM to MP4 and drop your file onto the box.',
      'Press Convert and wait for the progress bar to finish.',
      'Download the MP4 and use it anywhere that refused the WEBM.',
    ],
    sections: [
      {
        heading: 'Where WEBM files come from',
        paragraphs: [
          'Browser screen recorders, some online downloaders and many website videos use WEBM, an open format made for the web. It is small and plays in every browser, but desktop editors, TVs, game consoles and phone photo apps often do not recognise it.',
        ],
      },
      {
        heading: 'Going the other way',
        paragraphs: ['If you want a small video for your own website, WEBM is a good choice and MP4 to WEBM does the opposite conversion. For sharing with other people, MP4 is the safer format.'],
      },
      {
        heading: 'Where WEBM works and where it does not',
        paragraphs: ['Chrome, Firefox and Edge play WEBM directly, and recent Apple software handles it in many places, but support is uneven. Desktop video editors, TVs, game consoles and phone gallery apps usually accept MP4 and may not accept WEBM at all. When you are not sure what will open the file, MP4 is the format that works. If you are only going to watch it in a browser, the WEBM is fine as it is and converting changes nothing useful.'],
      },
    ],
    faqs: [
      { q: 'Will sound survive?', a: 'Yes. WEBM audio is converted to AAC in the MP4.' },
      { q: 'Why is the MP4 bigger?', a: 'WEBM compresses very well, so the MP4 is often a little larger at similar quality. Use Compress video if you need it smaller.' },
      { q: 'Does it work for screen recordings?', a: 'Yes. Recordings from browser tools convert like any other WEBM file.' },
    ],
    tools: ['webm-to-mp4', 'mp4-to-webm', 'compress-video'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-wav-to-mp3',
    title: 'How to convert WAV to MP3 and shrink the file',
    description: 'Turn big WAV recordings into small MP3 files, and learn which bitrate to choose for speech or music.',
    category: 'Audio',
    intro:
      'To convert WAV to MP3, drop the WAV into the converter, choose a bitrate (192 kbit/s is a good default) and press Convert. A minute of CD-quality WAV is about 10 MB, while the same minute as a 192 kbit/s MP3 is about 1.4 MB.',
    steps: [
      'Open WAV to MP3 and drop your files in. You can add several at once.',
      'Choose a quality. 128 kbit/s is fine for speech, 192 for everyday music and 320 for the best MP3 quality.',
      'Press Convert.',
      'Download each MP3, or all of them as one ZIP.',
    ],
    sections: [
      {
        heading: 'Why WAV is so big',
        paragraphs: [
          'WAV stores raw, uncompressed sound. CD-quality stereo uses about 1,411 kbit/s, roughly 10 MB a minute. MP3 throws away detail that most ears cannot hear and keeps about a seventh of the data at 192 kbit/s.',
        ],
      },
      {
        heading: 'Choosing a bitrate',
        paragraphs: [
          'For a recorded meeting or a voice memo, 96 to 128 kbit/s is plenty and the file stays tiny. For music you will play on speakers or headphones, 192 to 256 is a sensible balance. Choose 320 only for music you care about and have space for.',
          'MP3 is lossy: you cannot turn it back into the original WAV quality. Keep the WAV if you may edit the recording again.',
        ],
      },
      {
        heading: 'A long recording example',
        paragraphs: ['A one-hour recording of a lecture or meeting is around 600 MB as CD-quality stereo WAV, but only about 58 MB as a 128 kbit/s MP3, which is easy to email or store. Recordings made in mono are half the size of stereo in either format, so a single-microphone voice recording is smaller still. If you plan to clean up the sound in an editor, edit the WAV first and make the MP3 last.'],
      },
    ],
    faqs: [
      { q: 'Can I convert many WAV files at once?', a: 'Yes. They convert one after another and download together as a ZIP.' },
      { q: 'Will it work on a phone?', a: 'Yes, but long recordings are slow on a phone. A computer is faster.' },
      { q: 'Are my recordings uploaded?', a: 'No. The conversion happens in your browser tab.' },
    ],
    tools: ['wav-to-mp3', 'mp3-to-wav', 'wav-to-flac'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-m4a-to-mp3',
    title: 'How to convert M4A to MP3 (voice memos and iTunes)',
    description: 'Turn iPhone Voice Memos and iTunes M4A files into MP3 so they play on any device or can be sent to anyone.',
    category: 'Audio',
    intro:
      'To convert M4A to MP3, drop your M4A files into the M4A to MP3 converter, pick a bitrate and press Convert. iPhone Voice Memos and iTunes purchases are M4A, which some players and websites do not accept.',
    steps: [
      'Get the .m4a file onto your device. Voice Memos can be shared to Files or saved to your computer.',
      'Open M4A to MP3 and drop the file in.',
      'Choose a bitrate. 128 kbit/s suits speech; use 192 or more for music.',
      'Press Convert and download your MP3.',
    ],
    sections: [
      {
        heading: 'What M4A is',
        paragraphs: [
          'M4A is audio compressed with AAC inside an MP4-style container. AAC usually sounds a little better than MP3 at the same size, which is why Apple uses it. The catch is compatibility: older players, some car stereos and many web forms only know MP3.',
        ],
      },
      {
        heading: 'A note on quality',
        paragraphs: ['Going from M4A to MP3 means compressing already-compressed sound a second time, which loses a very little more. Use 192 kbit/s or higher for music. For voice recordings the difference is not noticeable. Keep the original M4A if quality matters.'],
      },
      {
        heading: 'Where to find your M4A files',
        paragraphs: ['On an iPhone, open Voice Memos, tap the recording, tap the three dots and choose Share or Save to Files. On a Mac, recordings sync through iCloud and appear in the Voice Memos app, where you can drag them to the desktop as .m4a files. Music you ripped or bought without protection sits in your music library folder as .m4a files too.'],
      },
    ],
    faqs: [
      { q: 'Can I convert protected iTunes songs?', a: 'No. Songs with copy protection cannot be opened. Files you recorded yourself, and music you bought without protection, work fine.' },
      { q: 'Does it keep the song title and artist?', a: 'The converter keeps basic tags where it can, but check the result in your player.' },
      { q: 'Is it uploaded?', a: 'No. It runs in your browser.' },
    ],
    tools: ['m4a-to-mp3', 'm4a-to-wav', 'mp3-to-m4a'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-flac-to-mp3',
    title: 'How to convert FLAC to MP3 for your phone or car',
    description: 'Make small MP3 copies of your FLAC music for phones and car stereos, and keep the lossless originals safe.',
    category: 'Audio',
    intro:
      'To convert FLAC to MP3, drop the files into the FLAC to MP3 converter, choose 256 or 320 kbit/s and press Convert. FLAC is lossless but big and not accepted everywhere, while MP3 plays on anything.',
    steps: [
      'Open FLAC to MP3 and drop in a track or a whole album.',
      'Choose 256 kbit/s for a good balance or 320 for the best MP3 quality.',
      'Press Convert and wait for each track to finish.',
      'Download the MP3 files, or the whole batch as a ZIP, and copy them to your phone or USB stick.',
    ],
    sections: [
      {
        heading: 'Lossless versus lossy',
        paragraphs: [
          'FLAC keeps every detail of the recording and is typically about half the size of the same music as WAV. MP3 discards sound that most listeners will not miss, so files are far smaller. Once converted, the lost detail cannot be recovered.',
        ],
      },
      {
        heading: 'Keep your FLAC files',
        paragraphs: ['Treat the MP3 as a travel copy. Keep the FLAC originals so you can make a new copy in another format later. If you only need your music to play on a computer, a modern phone or good headphones, FLAC itself often works and no conversion is needed.'],
      },
      {
        heading: 'What it does to your storage',
        paragraphs: ['A 40-minute album is roughly 200 to 300 MB as FLAC and about 100 MB as a 320 kbit/s MP3, so the same phone can hold around two or three times as many albums. That is the real reason to make MP3 copies: space and compatibility, not better sound. If space is not a problem and your player accepts FLAC, there is no need to convert.'],
      },
    ],
    faqs: [
      { q: 'Which bitrate is best?', a: '320 kbit/s is the highest MP3 allows and is close to transparent for most people. 256 is a smaller choice that few can tell apart.' },
      { q: 'Can I convert a whole album?', a: 'Yes. Drop all the tracks in and download the result as a ZIP.' },
      { q: 'Is it uploaded?', a: 'No. Your music stays on your device.' },
    ],
    tools: ['flac-to-mp3', 'flac-to-wav', 'wav-to-flac'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-opus-to-mp3',
    title: 'How to convert OPUS and OGG voice notes to MP3',
    description: 'Open WhatsApp voice notes and other OPUS or OGG audio anywhere by converting them to MP3 in your browser.',
    category: 'Audio',
    intro:
      'To convert an OPUS voice note to MP3, drop the file into the OPUS to MP3 converter and press Convert. WhatsApp voice messages are saved as .opus files, which many players and editors cannot open.',
    steps: [
      'Save the voice note from your chat app to your device (share it to Files or your computer).',
      'Open OPUS to MP3 for .opus files, or OGG to MP3 for .ogg files.',
      'Drop the file in and pick a bitrate. 96 to 128 kbit/s is plenty for speech.',
      'Press Convert and download the MP3.',
    ],
    sections: [
      {
        heading: 'Why voice notes are OPUS',
        paragraphs: [
          'OPUS is a modern open format that makes speech sound clear at very low bitrates, which is why chat apps use it. It is stored in an Ogg container, so the files are small. The trade-off is compatibility: older players, many phones\' music apps and most audio editors do not recognise it.',
        ],
      },
      {
        heading: 'Making a transcript or edit easier',
        paragraphs: ['Converting to MP3 lets you open the recording in common editors, attach it to an email, or feed it to a transcription tool that does not accept OPUS. For speech, 128 kbit/s MP3 is more than enough.'],
      },
      {
        heading: 'Many voice notes at once',
        paragraphs: ['If you have a whole conversation of voice notes, drop them all in together and download the MP3s as one ZIP. The converted files keep their original names, so any date or number in the name stays with the recording and they remain easy to sort.'],
      },
    ],
    faqs: [
      { q: 'What is the difference between OPUS and OGG?', a: 'OGG is the container and Vorbis was its original audio format. OPUS audio is also stored in an Ogg container, which is why the files can look similar.' },
      { q: 'Will it work for a very long voice note?', a: 'Yes. Voice notes are small, so even long ones convert quickly.' },
      { q: 'Is my voice note uploaded?', a: 'No. The conversion is done inside your browser tab and nothing is sent anywhere.' },
    ],
    tools: ['opus-to-mp3', 'ogg-to-mp3', 'mp3-to-ogg'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-aac-to-mp3',
    title: 'How to convert AAC to MP3',
    description: 'Convert AAC audio files to MP3 so they play on older players, car stereos and websites that only accept MP3.',
    category: 'Audio',
    intro:
      'To convert AAC to MP3, drop your .aac file into the AAC to MP3 converter, choose a bitrate and press Convert. AAC is the successor to MP3, but a plain .aac file is not accepted everywhere.',
    steps: [
      'Open AAC to MP3 and drop your files in.',
      'Choose 192 kbit/s for everyday music or 128 for speech.',
      'Press Convert.',
      'Download the MP3, or a ZIP if you converted several.',
    ],
    sections: [
      {
        heading: 'AAC, M4A and MP3',
        paragraphs: [
          'AAC is a compression method, and it is usually wrapped in an M4A or MP4 file. A raw .aac file has no wrapper at all, which makes it less common and less supported than M4A. MP3 is older but understood by essentially every device.',
        ],
      },
      {
        heading: 'Quality',
        paragraphs: ['AAC and MP3 are both lossy. Converting one to the other loses a little more detail, so pick 192 kbit/s or higher for music and keep the AAC original if you care about the best sound.'],
      },
      {
        heading: 'Telling the file types apart',
        paragraphs: ['A file ending .aac is a bare stream of AAC audio. A file ending .m4a holds AAC in a wrapper that also stores the title, artist and artwork, and an .mp4 can hold AAC audio with video. Renaming one to the other does not always work, because the wrapper is different. If a device refuses the file, converting is the dependable fix, and M4A is the better wrapper to keep if the device accepts it.'],
      },
    ],
    faqs: [
      { q: 'Should I use M4A instead?', a: 'If the device accepts it, M4A is a better wrapper for AAC. Choose MP3 when you need the widest support.' },
      { q: 'Can I convert MP3 to AAC?', a: 'MP3 to M4A makes an AAC file in an M4A wrapper, which most modern devices play.' },
      { q: 'Is it uploaded?', a: 'No. It stays in your browser.' },
    ],
    tools: ['aac-to-mp3', 'm4a-to-mp3', 'mp3-to-m4a'],
    published: D,
    updated: D,
  },
  {
    slug: 'how-to-convert-gif-to-mp4',
    title: 'How to convert a GIF to MP4 to make it smaller',
    description: 'Shrink a heavy animated GIF into a small MP4 that loads fast and plays on every phone.',
    category: 'Video',
    intro:
      'To convert a GIF to MP4, drop the GIF into the GIF to MP4 converter and press Convert. The MP4 is usually many times smaller and often sharper, because GIF is limited to 256 colours and has no real video compression.',
    steps: [
      'Open GIF to MP4 and drop your GIF onto the box.',
      'Press Convert.',
      'Download the MP4 and compare its size with the GIF.',
      'On a website, use the MP4 in a video tag set to autoplay, loop and muted so it behaves like a GIF.',
    ],
    sections: [
      {
        heading: 'Why MP4 wins',
        paragraphs: [
          'A GIF stores each frame as a full picture. MP4 video stores only what changes from one frame to the next, so a GIF that takes 8 MB can often be well under 1 MB as MP4. Colour is better too, since video is not limited to 256 colours.',
        ],
      },
      {
        heading: 'What you give up',
        paragraphs: [
          'A GIF loops by itself and shows up anywhere an image does. An MP4 plays once unless the player or page is told to loop it. Most social apps loop short clips on their own, and on your own site you can add the loop attribute.',
        ],
      },
      {
        heading: 'Using the MP4 on a website',
        paragraphs: ['To make an MP4 behave like a GIF on your own page, put it in a video tag with the autoplay, loop, muted and playsinline attributes. Browsers only allow autoplay when the video is muted, and playsinline stops iPhones from opening it full screen. The result loads faster, uses less data and looks better than the original GIF.'],
      },
    ],
    faqs: [
      { q: 'Does the MP4 have sound?', a: 'No. A GIF has no sound, so there is nothing to carry over.' },
      { q: 'Can I turn the MP4 back into a GIF?', a: 'Yes, with Video to GIF, though it will be large again.' },
      { q: 'Is the GIF uploaded?', a: 'No. It is converted in your browser tab.' },
    ],
    tools: ['gif-to-mp4', 'video-to-gif', 'webp-to-gif'],
    published: D,
    updated: D,
  },
];
