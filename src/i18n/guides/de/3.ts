import type { GuideSet } from '../types';

/** German guides, batch 3. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-wav-to-mp3': {
    title: 'So wandeln Sie WAV in MP3 um und verkleinern die Datei',
    description: 'Machen Sie aus großen WAV-Aufnahmen kleine MP3-Dateien und erfahren Sie, welche Bitrate Sie für Sprache oder Musik wählen.',
    intro: 'Um WAV in MP3 umzuwandeln, legen Sie die WAV im Konverter ab, wählen eine Bitrate (192 kbit/s ist ein guter Standard) und klicken auf "Umwandeln". Eine Minute WAV in CD-Qualität ist etwa 10 MB groß, dieselbe Minute als MP3 mit 192 kbit/s nur etwa 1,4 MB.',
    steps: [
      'Öffnen Sie WAV in MP3 und legen Sie Ihre Dateien ab. Sie können mehrere auf einmal hinzufügen.',
      'Wählen Sie eine Qualität. 128 kbit/s reicht für Sprache, 192 für Alltagsmusik und 320 für die beste MP3-Qualität.',
      'Klicken Sie auf "Umwandeln".',
      'Laden Sie jede MP3 herunter, oder alle als ein ZIP.',
    ],
    sections: [
      {
        heading: 'Warum WAV so groß ist',
        paragraphs: [
          'WAV speichert rohen, unkomprimierten Ton. Stereo in CD-Qualität braucht etwa 1411 kbit/s, grob 10 MB pro Minute. MP3 verwirft Details, die die meisten Ohren nicht hören, und behält bei 192 kbit/s etwa ein Siebtel der Daten.',
        ],
      },
      {
        heading: 'Eine Bitrate wählen',
        paragraphs: [
          'Für eine aufgezeichnete Besprechung oder eine Sprachnotiz sind 96 bis 128 kbit/s völlig ausreichend, und die Datei bleibt winzig. Für Musik, die Sie über Lautsprecher oder Kopfhörer hören, sind 192 bis 256 ein vernünftiger Kompromiss. Wählen Sie 320 nur für Musik, die Ihnen wichtig ist und für die Sie Platz haben.',
          'MP3 ist verlustbehaftet: Sie können nicht zur ursprünglichen WAV-Qualität zurückkehren. Behalten Sie die WAV, wenn Sie die Aufnahme noch einmal bearbeiten könnten.',
        ],
      },
      {
        heading: 'Ein Beispiel für eine lange Aufnahme',
        paragraphs: [
          'Eine einstündige Aufnahme einer Vorlesung oder Besprechung ist als Stereo-WAV in CD-Qualität etwa 600 MB groß, als MP3 mit 128 kbit/s aber nur rund 58 MB, was sich leicht per E-Mail verschicken oder speichern lässt. Mono-Aufnahmen sind in beiden Formaten halb so groß wie Stereo, eine Sprachaufnahme mit einem einzelnen Mikrofon ist also noch kleiner. Wollen Sie den Ton in einem Editor aufbereiten, bearbeiten Sie zuerst die WAV und erstellen die MP3 zuletzt.',
        ],
      },
    ],
    faqs: [
      { q: 'Kann ich viele WAV-Dateien auf einmal umwandeln?', a: 'Ja. Sie werden nacheinander umgewandelt und gemeinsam als ZIP heruntergeladen.' },
      { q: 'Funktioniert es auf einem Handy?', a: 'Ja, aber lange Aufnahmen sind auf einem Handy langsam. Ein Computer ist schneller.' },
      { q: 'Werden meine Aufnahmen hochgeladen?', a: 'Nein. Die Umwandlung geschieht im Tab Ihres Browsers.' },
    ],
  },
  'how-to-convert-m4a-to-mp3': {
    title: 'So wandeln Sie M4A in MP3 um (Sprachmemos und iTunes)',
    description: 'Machen Sie aus iPhone-Sprachmemos und iTunes-M4A-Dateien MP3, damit sie auf jedem Gerät laufen oder an jeden geschickt werden können.',
    intro: 'Um M4A in MP3 umzuwandeln, legen Sie Ihre M4A-Dateien im Konverter M4A in MP3 ab, wählen eine Bitrate und klicken auf "Umwandeln". iPhone-Sprachmemos und iTunes-Käufe sind M4A, das manche Player und Websites nicht akzeptieren.',
    steps: [
      'Bringen Sie die .m4a-Datei auf Ihr Gerät. Sprachmemos lassen sich in Dateien teilen oder auf Ihrem Computer speichern.',
      'Öffnen Sie M4A in MP3 und legen Sie die Datei ab.',
      'Wählen Sie eine Bitrate. 128 kbit/s passt für Sprache; nehmen Sie 192 oder mehr für Musik.',
      'Klicken Sie auf "Umwandeln" und laden Sie Ihre MP3 herunter.',
    ],
    sections: [
      {
        heading: 'Was M4A ist',
        paragraphs: [
          'M4A ist mit AAC komprimiertes Audio in einem MP4-ähnlichen Container. AAC klingt bei gleicher Größe meist etwas besser als MP3, weshalb Apple es nutzt. Der Haken ist die Kompatibilität: Ältere Player, manche Autoradios und viele Webformulare kennen nur MP3.',
        ],
      },
      {
        heading: 'Ein Hinweis zur Qualität',
        paragraphs: [
          'Von M4A zu MP3 zu gehen heißt, bereits komprimierten Ton ein zweites Mal zu komprimieren, was ein ganz klein wenig mehr verliert. Nutzen Sie für Musik 192 kbit/s oder mehr. Bei Sprachaufnahmen ist der Unterschied nicht hörbar. Behalten Sie das M4A-Original, wenn Qualität wichtig ist.',
        ],
      },
      {
        heading: 'Wo Sie Ihre M4A-Dateien finden',
        paragraphs: [
          'Öffnen Sie auf einem iPhone Sprachmemos, tippen Sie auf die Aufnahme, tippen Sie auf die drei Punkte und wählen Sie Teilen oder In Dateien sichern. Auf einem Mac werden Aufnahmen über iCloud synchronisiert und erscheinen in der App Sprachmemos, von wo Sie sie als .m4a-Dateien auf den Schreibtisch ziehen können. Musik, die Sie importiert oder ohne Kopierschutz gekauft haben, liegt ebenfalls als .m4a-Dateien im Ordner Ihrer Musikmediathek.',
        ],
      },
    ],
    faqs: [
      { q: 'Kann ich geschützte iTunes-Songs umwandeln?', a: 'Nein. Songs mit Kopierschutz lassen sich nicht öffnen. Selbst aufgenommene Dateien und ohne Schutz gekaufte Musik funktionieren problemlos.' },
      { q: 'Bleiben Songtitel und Interpret erhalten?', a: 'Der Konverter behält grundlegende Tags, wo es geht, prüfen Sie das Ergebnis aber in Ihrem Player.' },
      { q: 'Wird es hochgeladen?', a: 'Nein. Es läuft in Ihrem Browser.' },
    ],
  },
  'how-to-convert-flac-to-mp3': {
    title: 'So wandeln Sie FLAC in MP3 für Handy oder Auto um',
    description: 'Erstellen Sie kleine MP3-Kopien Ihrer FLAC-Musik für Handys und Autoradios und bewahren Sie die verlustfreien Originale sicher auf.',
    intro: 'Um FLAC in MP3 umzuwandeln, legen Sie die Dateien im Konverter FLAC in MP3 ab, wählen 256 oder 320 kbit/s und klicken auf "Umwandeln". FLAC ist verlustfrei, aber groß und nicht überall akzeptiert, während MP3 auf allem läuft.',
    steps: [
      'Öffnen Sie FLAC in MP3 und legen Sie einen Titel oder ein ganzes Album ab.',
      'Wählen Sie 256 kbit/s für einen guten Kompromiss oder 320 für die beste MP3-Qualität.',
      'Klicken Sie auf "Umwandeln" und warten Sie, bis jeder Titel fertig ist.',
      'Laden Sie die MP3-Dateien oder den ganzen Stapel als ZIP herunter und kopieren Sie sie auf Ihr Handy oder Ihren USB-Stick.',
    ],
    sections: [
      {
        heading: 'Verlustfrei gegen verlustbehaftet',
        paragraphs: [
          'FLAC behält jedes Detail der Aufnahme und ist typischerweise etwa halb so groß wie dieselbe Musik als WAV. MP3 verwirft Klang, den die meisten Hörer nicht vermissen, daher sind die Dateien viel kleiner. Nach der Umwandlung lässt sich das verlorene Detail nicht wiederherstellen.',
        ],
      },
      {
        heading: 'Behalten Sie Ihre FLAC-Dateien',
        paragraphs: [
          'Betrachten Sie die MP3 als Reisekopie. Behalten Sie die FLAC-Originale, um später eine neue Kopie in einem anderen Format machen zu können. Brauchen Sie Ihre Musik nur auf einem Computer, einem modernen Handy oder guten Kopfhörern, funktioniert FLAC selbst oft, und eine Umwandlung ist nicht nötig.',
        ],
      },
      {
        heading: 'Was es mit Ihrem Speicher macht',
        paragraphs: [
          'Ein 40-Minuten-Album ist als FLAC grob 200 bis 300 MB groß und als MP3 mit 320 kbit/s etwa 100 MB, daher passen auf dasselbe Handy etwa zwei- bis dreimal so viele Alben. Das ist der eigentliche Grund für MP3-Kopien: Platz und Kompatibilität, nicht besserer Klang. Ist Platz kein Problem und Ihr Player akzeptiert FLAC, müssen Sie nicht umwandeln.',
        ],
      },
    ],
    faqs: [
      { q: 'Welche Bitrate ist die beste?', a: '320 kbit/s ist das Maximum, das MP3 erlaubt, und für die meisten Menschen nahezu transparent. 256 ist eine kleinere Wahl, die nur wenige unterscheiden können.' },
      { q: 'Kann ich ein ganzes Album umwandeln?', a: 'Ja. Legen Sie alle Titel ab und laden Sie das Ergebnis als ZIP herunter.' },
      { q: 'Wird es hochgeladen?', a: 'Nein. Ihre Musik bleibt auf Ihrem Gerät.' },
    ],
  },
  'how-to-convert-opus-to-mp3': {
    title: 'So wandeln Sie OPUS- und OGG-Sprachnachrichten in MP3 um',
    description: 'Öffnen Sie WhatsApp-Sprachnachrichten und andere OPUS- oder OGG-Audios überall, indem Sie sie in Ihrem Browser in MP3 umwandeln.',
    intro: 'Um eine OPUS-Sprachnachricht in MP3 umzuwandeln, legen Sie die Datei im Konverter OPUS in MP3 ab und klicken auf "Umwandeln". WhatsApp-Sprachnachrichten werden als .opus-Dateien gespeichert, die viele Player und Editoren nicht öffnen können.',
    steps: [
      'Speichern Sie die Sprachnachricht aus Ihrer Chat-App auf Ihrem Gerät (teilen Sie sie in Dateien oder auf Ihren Computer).',
      'Öffnen Sie OPUS in MP3 für .opus-Dateien oder OGG in MP3 für .ogg-Dateien.',
      'Legen Sie die Datei ab und wählen Sie eine Bitrate. 96 bis 128 kbit/s reichen für Sprache völlig aus.',
      'Klicken Sie auf "Umwandeln" und laden Sie die MP3 herunter.',
    ],
    sections: [
      {
        heading: 'Warum Sprachnachrichten OPUS sind',
        paragraphs: [
          'OPUS ist ein modernes offenes Format, das Sprache schon bei sehr niedrigen Bitraten klar klingen lässt, weshalb Chat-Apps es nutzen. Es wird in einem Ogg-Container gespeichert, daher sind die Dateien klein. Der Preis ist die Kompatibilität: Ältere Player, die Musik-Apps vieler Handys und die meisten Audioeditoren erkennen es nicht.',
        ],
      },
      {
        heading: 'Transkript oder Bearbeitung erleichtern',
        paragraphs: [
          'Die Umwandlung in MP3 erlaubt es Ihnen, die Aufnahme in gängigen Editoren zu öffnen, sie an eine E-Mail anzuhängen oder an ein Transkriptionswerkzeug weiterzugeben, das OPUS nicht akzeptiert. Für Sprache ist eine MP3 mit 128 kbit/s mehr als genug.',
        ],
      },
      {
        heading: 'Viele Sprachnachrichten auf einmal',
        paragraphs: [
          'Haben Sie eine ganze Unterhaltung aus Sprachnachrichten, legen Sie alle zusammen ab und laden die MP3-Dateien als ein ZIP herunter. Die umgewandelten Dateien behalten ihre ursprünglichen Namen, sodass Datum oder Nummer im Namen bei der Aufnahme bleiben und sich leicht sortieren lassen.',
        ],
      },
    ],
    faqs: [
      { q: 'Was ist der Unterschied zwischen OPUS und OGG?', a: 'OGG ist der Container und Vorbis war sein ursprüngliches Audioformat. OPUS-Audio wird ebenfalls in einem Ogg-Container gespeichert, weshalb die Dateien ähnlich aussehen können.' },
      { q: 'Funktioniert es bei einer sehr langen Sprachnachricht?', a: 'Ja. Sprachnachrichten sind klein, daher werden selbst lange schnell umgewandelt.' },
      { q: 'Wird meine Sprachnachricht hochgeladen?', a: 'Nein. Die Umwandlung geschieht im Tab Ihres Browsers, und nichts wird irgendwohin gesendet.' },
    ],
  },
  'how-to-convert-aac-to-mp3': {
    title: 'So wandeln Sie AAC in MP3 um',
    description: 'Wandeln Sie AAC-Audiodateien in MP3 um, damit sie auf älteren Playern, Autoradios und Websites laufen, die nur MP3 akzeptieren.',
    intro: 'Um AAC in MP3 umzuwandeln, legen Sie Ihre .aac-Datei im Konverter AAC in MP3 ab, wählen eine Bitrate und klicken auf "Umwandeln". AAC ist der Nachfolger von MP3, aber eine einfache .aac-Datei wird nicht überall akzeptiert.',
    steps: [
      'Öffnen Sie AAC in MP3 und legen Sie Ihre Dateien ab.',
      'Wählen Sie 192 kbit/s für Alltagsmusik oder 128 für Sprache.',
      'Klicken Sie auf "Umwandeln".',
      'Laden Sie die MP3 herunter, oder ein ZIP, wenn Sie mehrere umgewandelt haben.',
    ],
    sections: [
      {
        heading: 'AAC, M4A und MP3',
        paragraphs: [
          'AAC ist ein Kompressionsverfahren und steckt meist in einer M4A- oder MP4-Datei. Eine rohe .aac-Datei hat gar keine Hülle, was sie seltener und schlechter unterstützt macht als M4A. MP3 ist älter, wird aber von praktisch jedem Gerät verstanden.',
        ],
      },
      {
        heading: 'Qualität',
        paragraphs: [
          'AAC und MP3 sind beide verlustbehaftet. Die Umwandlung des einen in das andere verliert etwas mehr Detail, wählen Sie daher für Musik 192 kbit/s oder mehr und behalten Sie das AAC-Original, wenn Ihnen der beste Klang wichtig ist.',
        ],
      },
      {
        heading: 'Die Dateitypen unterscheiden',
        paragraphs: [
          'Eine Datei mit der Endung .aac ist ein bloßer AAC-Audiostrom. Eine Datei mit der Endung .m4a enthält AAC in einer Hülle, die auch Titel, Interpret und Cover speichert, und ein .mp4 kann AAC-Audio mit Video enthalten. Das eine in das andere umzubenennen funktioniert nicht immer, weil die Hülle verschieden ist. Lehnt ein Gerät die Datei ab, ist die Umwandlung die verlässliche Lösung, und M4A ist die bessere Hülle, wenn das Gerät sie akzeptiert.',
        ],
      },
    ],
    faqs: [
      { q: 'Sollte ich stattdessen M4A nutzen?', a: 'Akzeptiert das Gerät es, ist M4A die bessere Hülle für AAC. Wählen Sie MP3, wenn Sie die breiteste Unterstützung brauchen.' },
      { q: 'Kann ich MP3 in AAC umwandeln?', a: 'MP3 in M4A erzeugt eine AAC-Datei in einer M4A-Hülle, die die meisten modernen Geräte abspielen.' },
      { q: 'Wird es hochgeladen?', a: 'Nein. Es bleibt in Ihrem Browser.' },
    ],
  },
};

export default guides;
