import type { GuideSet } from '../types';

/** German guides, batch 9. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-calories-to-kilojoules': {
    title: 'Kalorien in Kilojoule und kWh umrechnen',
    description: 'Rechnen Sie Kalorien aus Lebensmitteln (kcal) in Kilojoule und Stromeinheiten um, und erfahren Sie, warum eine Kalorie nicht gleich Kalorie ist.',
    intro: 'Um Kilokalorien in Kilojoule umzurechnen, multiplizieren Sie mit 4,184. 2000 kcal sind also 8368 kJ. Die kcal-Angabe auf einem Lebensmitteletikett ist das, was man umgangssprachlich Kalorie nennt. Der Energie-Umrechner liefert auch Joule, Wattstunden, Kilowattstunden und BTU.',
    steps: [
      'Suchen Sie die Energie auf dem Etikett. Viele Etiketten nennen kcal und kJ.',
      'Multiplizieren Sie kcal mit 4,184, um kJ zu erhalten: 250 kcal × 4,184 = 1046 kJ.',
      'Teilen Sie kJ durch 4,184, um kcal zu erhalten.',
      'Oder öffnen Sie den Energie-Umrechner und wählen die beiden Einheiten.',
    ],
    sections: [
      {
        heading: 'Kalorie und Kilokalorie',
        paragraphs: [
          'Eine kleine Kalorie ist die Energie, um ein Gramm Wasser um ein Grad Celsius zu erwärmen, etwa 4,184 Joule. Nahrungsenergie wird in Kilokalorien gezählt, 1000 kleinen Kalorien, und als Kalorie oder einfach kcal geschrieben. Wenn ein Etikett 250 Kalorien nennt, sind 250 kcal gemeint. Der Energie-Umrechner führt beide auf, wählen Sie für Essen also kcal.',
        ],
      },
      {
        heading: 'Strom',
        paragraphs: [
          'Eine Kilowattstunde, die Einheit auf der Stromrechnung, sind genau 3,6 Millionen Joule oder 3600 kJ. Das sind etwa 860 kcal. Ein 1000-Watt-Heizgerät, das eine Stunde läuft, verbraucht eine kWh. BTU, üblich bei Klimaanlagen und Heizgeräten, sind etwa 1055 Joule.',
        ],
      },
      {
        heading: 'Lebensmitteletiketten lesen',
        paragraphs: [
          'Etiketten können die Energie pro 100 Gramm und pro Portion zeigen, vergleichen Sie also auf gleicher Basis. Viele Länder drucken kJ und kcal, und die übliche Tagesreferenzmenge liegt bei etwa 2000 kcal, das sind grob 8400 kJ. Wenn Sie Ihr Essen protokollieren, bleiben Sie bei einer Einheit, damit sich Zahlen aus verschiedenen Packungen richtig addieren.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie viele kJ sind 100 kcal?', a: '418,4 kJ.' },
      { q: 'Wie viele kcal sind 1 kWh?', a: 'Etwa 860 kcal.' },
      { q: 'Ist ein Kilojoule dasselbe wie eine Kilokalorie?', a: 'Nein. Eine Kilokalorie ist etwa 4,18-mal größer als ein Kilojoule.' },
    ],
  },
  'how-to-convert-avi-to-mp4': {
    title: 'AVI in MP4 umwandeln',
    description: 'Bringen Sie alte AVI-Videos von Kameras und Downloads auf Handys und Fernsehern zum Laufen, indem Sie sie im Browser in MP4 umwandeln.',
    intro: 'Um AVI in MP4 umzuwandeln, ziehen Sie das Video in den AVI-zu-MP4-Konverter und drücken auf Konvertieren. AVI ist ein Format aus den 1990ern, das viele Handys, Fernseher und Apps nicht mehr öffnen, während MP4 fast überall läuft.',
    steps: [
      'Öffnen Sie AVI zu MP4 und ziehen Sie Ihre Datei auf das Feld.',
      'Drücken Sie auf Konvertieren. Beim ersten Mal lädt Ihr Browser die Konverter-Engine (etwa 30 MB) herunter und speichert sie im Cache.',
      'Warten Sie, bis der Fortschrittsbalken fertig ist.',
      'Laden Sie das MP4 herunter und prüfen Sie, ob es auf dem Gerät läuft, das das AVI abgelehnt hat.',
    ],
    sections: [
      {
        heading: 'Warum AVI Ärger macht',
        paragraphs: [
          'AVI wurde Anfang der 1990er von Microsoft eingeführt. Es ist nur ein Container, und das Video darin kann einen von vielen älteren Codecs nutzen. Manche AVI-Dateien laufen einwandfrei, andere zeigen auf modernen Geräten ein schwarzes Bild oder keinen Ton, weil der Codec darin nicht mehr unterstützt wird. Die Umwandlung schreibt das Video in der Standardkombination H.264 und AAC neu, die MP4 nutzt.',
        ],
      },
      {
        heading: 'Alte Kameraclips',
        paragraphs: [
          'Ältere Digitalkameras, Camcorder und Bildschirmrekorder speicherten AVI. Diese Dateien sind oft groß und niedrig aufgelöst. Probieren Sie nach dem Umwandeln Video komprimieren, wenn Sie eine kleinere Datei zum Versenden möchten, und behalten Sie das Original-AVI als Masterkopie.',
        ],
      },
      {
        heading: 'Untertitel und getrennte Dateien',
        paragraphs: [
          'Manche AVI-Downloads kommen mit einer separaten Untertiteldatei. Das Umwandeln des Videos führt sie nicht zusammen, und das MP4 übernimmt die Untertitel nicht von selbst. Legen Sie die Untertiteldatei im selben Ordner mit demselben Namen wie das neue MP4 ab, wonach die meisten Desktop-Player suchen.',
        ],
      },
    ],
    faqs: [
      { q: 'Funktioniert es mit jedem AVI?', a: 'Mit den meisten. Eine beschädigte Datei oder ein ungewöhnlicher Codec kann scheitern, und die Seite zeigt eine klare Meldung, wenn sie eine Datei nicht lesen kann.' },
      { q: 'Wird die Bildqualität besser?', a: 'Nein. Die Umwandlung kann keine Details hinzufügen, die das Original nicht hatte.' },
      { q: 'Wird es hochgeladen?', a: 'Nein. Es wird in Ihrem Browser-Tab umgewandelt.' },
    ],
  },
  'how-to-convert-mp3-to-wav': {
    title: 'MP3 in WAV umwandeln (und was es nicht behebt)',
    description: 'Machen Sie aus MP3-Dateien WAV für Editoren, CD-Brennen und Geräte, die unkomprimiertes Audio wollen.',
    intro: 'Um MP3 in WAV umzuwandeln, ziehen Sie Ihre MP3-Dateien in den MP3-zu-WAV-Konverter und drücken auf Konvertieren. Die WAV ist etwa zehnmal größer und klingt nicht besser, aber manche Editoren, Sampler und CD-Brennprogramme wollen WAV.',
    steps: [
      'Öffnen Sie MP3 zu WAV und ziehen Sie Ihre Dateien hinein.',
      'Drücken Sie auf Konvertieren. Es gibt keine Qualitätseinstellungen, weil WAV unkomprimiert ist.',
      'Laden Sie die WAV herunter, bei mehreren Dateien eine ZIP.',
      'Nutzen Sie sie in Ihrem Editor oder Brennprogramm.',
    ],
    sections: [
      {
        heading: 'Was es kann und was nicht',
        paragraphs: [
          'Ein MP3 hat bereits Details verloren, um klein zu werden, und diese Details lassen sich nicht wiederherstellen. Eine aus einem MP3 erzeugte WAV klingt genau wie das MP3, nur ohne Kompression gespeichert. Der Sinn der Umwandlung ist Kompatibilität und Bearbeitung, nicht Qualität.',
        ],
      },
      {
        heading: 'Warum Editoren WAV bevorzugen',
        paragraphs: [
          'Komprimiertes Audio mehrfach zu bearbeiten und jedes Mal als MP3 zu speichern, fügt mit jedem Speichern mehr Verlust hinzu. In WAV zu arbeiten vermeidet das, und Sie kodieren am Ende nur einmal in MP3. WAV ist auch das Format, das viele Audio-für-Video-Werkzeuge, Spiele-Engines und Hardware-Sampler erwarten.',
          'Eine Minute Stereo-WAV sind etwa 10 MB, eine lange Aufnahme ergibt also eine sehr große Datei. Wir empfehlen, Dateien auf einem Computer unter etwa 500 MB zu halten.',
        ],
      },
      {
        heading: 'Abtastrate und Bittiefe',
        paragraphs: [
          'Die WAV behält die Abtastrate des MP3, üblicherweise 44,1 oder 48 kHz, und wird als 16-Bit-Ton geschrieben, wie ihn CDs nutzen. Höhere Einstellungen wie 24 Bit würden nichts bringen, weil das MP3 diese zusätzliche Information nie enthielt. Verlangt Ihr Werkzeug eine bestimmte Abtastrate, passen Sie sie im Editor an, statt hier zu raten.',
        ],
      },
    ],
    faqs: [
      { q: 'Klingt meine CD aus einer WAV besser?', a: 'Nein. Sie klingt wie das MP3, weil das ursprüngliche Detail fehlt.' },
      { q: 'Welche WAV-Einstellungen werden verwendet?', a: '16-Bit-PCM mit derselben Abtastrate wie das MP3, die am weitesten akzeptierte Art.' },
      { q: 'Wird es hochgeladen?', a: 'Nein. Es wird in Ihrem Browser-Tab umgewandelt.' },
    ],
  },
  'how-to-convert-mp4-to-webm-for-websites': {
    title: 'MP4 in WEBM für eine Website umwandeln',
    description: 'Erstellen Sie kleine WEBM-Kopien von MP4-Videos für Ihre eigene Seite, und wann Sie das MP4 zusätzlich behalten sollten.',
    intro: 'Um MP4 in WEBM umzuwandeln, ziehen Sie das Video in den MP4-zu-WEBM-Konverter und drücken auf Konvertieren. WEBM ist ein offenes, für das Web gebautes Format, das in allen großen Browsern läuft und meist klein ist, was es für Videos auf Ihrer eigenen Seite praktisch macht.',
    steps: [
      'Öffnen Sie MP4 zu WEBM und ziehen Sie Ihr Video hinein.',
      'Drücken Sie auf Konvertieren und warten Sie auf den Fortschrittsbalken. Videoarbeit ist aufwendig, halten Sie Clips also kurz.',
      'Laden Sie das WEBM herunter.',
      'Listen Sie auf Ihrer Seite das WEBM und das Original-MP4 als zwei Quellen in einem video-Tag auf, damit jeder Browser eine abspielbare findet.',
    ],
    sections: [
      {
        heading: 'Warum zwei Formate anbieten',
        paragraphs: [
          'Chrome, Firefox und Edge spielen WEBM ab. Manche Apple-Software und viele Geräte spielen MP4 zuverlässiger ab. Ein video-Tag kann beide Dateien auflisten, und der Browser wählt die erste, die er unterstützt, beide anzubieten ist also die sicherste Wahl für eine öffentliche Seite.',
        ],
      },
      {
        heading: 'Was dieser Konverter erzeugt',
        paragraphs: [
          'Er schreibt WEBM mit VP8-Video und Vorbis-Audio, das jeder Browser mit WEBM-Unterstützung abspielen kann. Der Encoder ist auf Geschwindigkeit gewählt, die Dateien entstehen also schnell statt möglichst klein. Für winzige Dateien kürzen Sie den Clip oder verringern zuerst seine Größe mit Video komprimieren.',
        ],
      },
      {
        heading: 'Eine einfache Einbettung',
        paragraphs: [
          'Schreiben Sie auf Ihrer Seite einen video-Tag mit controls und zwei source-Tags, zuerst das WEBM mit type video/webm und danach das MP4 mit type video/mp4. Browser nutzen die erste Quelle, die sie abspielen können. Fügen Sie die Attribute muted und playsinline hinzu, wenn das Video von selbst starten soll, denn Browser erlauben Autoplay nur für stummes Video.',
        ],
      },
    ],
    faqs: [
      { q: 'Ist WEBM besser als MP4?', a: 'Keines ist überall besser. WEBM ist offen und klein; MP4 wird von weit mehr Apps und Geräten akzeptiert.' },
      { q: 'Bleibt der Ton erhalten?', a: 'Ja, als Vorbis-Audio.' },
      { q: 'Wird das Video hochgeladen?', a: 'Nein. Es wird in Ihrem Browser-Tab umgewandelt.' },
    ],
  },
  'how-to-convert-json-to-xml-and-xml-to-json': {
    title: 'JSON in XML und XML in JSON umwandeln',
    description: 'Verschieben Sie Daten zwischen JSON und XML für alte Systeme und Feeds, und was mit Attributen und Listen geschieht.',
    intro: 'Um JSON in XML umzuwandeln, fügen Sie das JSON in den JSON-zu-XML-Konverter ein. Umgekehrt fügen Sie XML in XML zu JSON ein. Schlüssel werden zu Tags, Arrays zu wiederholten Tags, und XML-Attribute erscheinen als Schlüssel, die mit @ beginnen.',
    steps: [
      'Fügen Sie Ihr JSON oder XML ein oder ziehen Sie die Datei hinein.',
      'Lesen Sie das Ergebnis rechts. Korrigieren Sie die Eingabe, wenn eine Fehlermeldung erscheint.',
      'Drücken Sie auf Herunterladen oder Kopieren.',
      'Prüfen Sie die Struktur in dem System, das sie liest, besonders Listen und Attribute.',
    ],
    sections: [
      {
        heading: 'Wo die Formate sich unterscheiden',
        paragraphs: [
          'XML hat Attribute und Tag-Text; JSON hat nur Schlüssel und Werte. Ein XML-Tag wie <book id="1">Quack</book> wird zu einem Objekt mit "@id" und "#text". Ein JSON-Array hat keinen eigenen Tag-Namen, deshalb wird jedes Element als wiederholter Tag geschrieben. XML braucht außerdem genau einen Wurzel-Tag, ein einzelnes JSON-Array wird also in eine Wurzel mit item-Tags verpackt.',
        ],
      },
      {
        heading: 'Text bleibt Text',
        paragraphs: [
          'Beim Lesen von XML behält der Konverter jeden Wert als Text, damit Codes und Postleitzahlen mit führenden Nullen nicht beschädigt werden. Wenn Sie echte Zahlen oder true- und false-Werte brauchen, wandeln Sie diese nach dem Lesen in Ihrem eigenen Code um.',
        ],
      },
      {
        heading: 'Namen, die Ärger machen',
        paragraphs: [
          'XML-Tag-Namen dürfen keine Leerzeichen enthalten und nicht mit einer Ziffer beginnen, JSON-Schlüssel aber schon. Ist ein JSON-Schlüssel etwa "first name" oder "2026", benennen Sie ihn vor dem Umwandeln in first_name oder year2026 um, sonst ist das XML ungültig. In der Gegenrichtung bleiben Namensräume und Verarbeitungsanweisungen als gewöhnliche Schlüssel erhalten, prüfen Sie ungewöhnliche Dateien also mit dem Auge.',
        ],
      },
    ],
    faqs: [
      { q: 'Was ist mit XML-Kommentaren?', a: 'JSON hat keine Kommentare, sie werden also verworfen.' },
      { q: 'Werden Sonderzeichen maskiert?', a: 'Ja. Zeichen wie & und < werden maskiert, damit das XML gültig ist.' },
      { q: 'Werden die Daten hochgeladen?', a: 'Nein. Sie werden in Ihrem Browser-Tab umgewandelt.' },
    ],
  },
  'how-to-convert-html-to-markdown': {
    title: 'HTML in Markdown umwandeln',
    description: 'Machen Sie aus einer Webseite oder einem HTML-Ausschnitt sauberes Markdown für Notizen, READMEs und Dokumentation.',
    intro: 'Um HTML in Markdown umzuwandeln, fügen Sie das HTML in den HTML-zu-Markdown-Konverter ein. Überschriften, Absätze, Listen, Links, Bilder, Fettschrift und Code bleiben erhalten, Gestaltung und Layout entfallen.',
    steps: [
      'Kopieren Sie den HTML-Quelltext des gewünschten Teils. Der Artikel ist besser als die ganze Seite.',
      'Öffnen Sie HTML zu Markdown und fügen Sie ihn ins linke Feld ein.',
      'Lesen Sie das Markdown rechts und bereinigen Sie seltsame Abstände.',
      'Drücken Sie auf Kopieren oder .md herunterladen und fügen Sie es in Ihre Notizen oder Ihr Repository ein.',
    ],
    sections: [
      {
        heading: 'Was bleibt und was verloren geht',
        paragraphs: [
          'Markdown beschreibt Struktur, nicht Aussehen. Überschriften werden zu Rautezeichen, Listen zu Strichen, Links zu [Text](Adresse) und Hervorhebung zu Sternchen. Farben, Schriften, Spalten, Skripte und Layout-Tabellen haben kein Markdown-Gegenstück und entfallen. Komplexe Tabellen können als einfacher Text herauskommen.',
        ],
      },
      {
        heading: 'Eine ganze Seite bereinigen',
        paragraphs: [
          'Eine komplette Webseite enthält Menüs, Werbung und Fußzeilen, die zu Rauschen werden. Kopieren Sie nur das Artikel-Element oder löschen Sie die überflüssigen Teile vorher. Prüfen Sie danach relative Bild- und Linkadressen: Sie zeigen auf die Originalseite und brauchen anderswo womöglich die vollständige Adresse.',
        ],
      },
      {
        heading: 'Code, Links und Bilder',
        paragraphs: [
          'Codeblöcke werden zu Blöcken mit drei Backticks, und Inline-Code wird in einzelne Backticks gesetzt. Links behalten ihre Adresse und Bilder ihre Quelle. Verschachtelte Listen werden mit Leerzeichen eingerückt. Sehen Sie das Ergebnis einmal durch, denn ungewöhnliches HTML, etwa Inline-Stile an jedem Element, kann Streutext hinterlassen, den Sie löschen möchten.',
        ],
      },
    ],
    faqs: [
      { q: 'Kann ich das Markdown wieder in HTML umwandeln?', a: 'Ja, mit Markdown zu HTML.' },
      { q: 'Bleiben Tabellen erhalten?', a: 'Einfache Struktur bleibt als Text erhalten. Komplexe Tabellen werden nicht als Markdown-Tabellen neu aufgebaut.' },
      { q: 'Wird mein HTML hochgeladen?', a: 'Nein. Es wird in Ihrem Browser umgewandelt.' },
    ],
  },
};

export default guides;
