import type { GuideSet } from '../types';

/** German guides, batch 1. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-extract-audio-from-a-video': {
    title: 'So holen Sie den Ton aus einem Video',
    description: 'Speichern Sie den Ton jedes Videos als MP3 in Ihrem Browser, ohne Upload, ohne Software-Installation und ohne Wasserzeichen.',
    intro: 'Um den Ton aus einem Video zu holen, öffnen Sie einen Video-zu-MP3-Konverter, legen das Video ab, klicken auf "Umwandeln" und laden die MP3 herunter. Mit iDuckConvert läuft alles im Tab Ihres Browsers, das Video wird also nirgendwohin hochgeladen.',
    steps: [
      'Öffnen Sie den Konverter MP4 in MP3 (über Video in MP3 akzeptiert er auch MOV, MKV, WEBM und AVI).',
      'Legen Sie Ihr Video im Feld ab oder klicken Sie auf "Dateien auswählen".',
      'Wählen Sie eine Qualität. 192 kbit/s ist eine gute Alltagswahl; nehmen Sie 320 für Musik, die Ihnen wichtig ist.',
      'Klicken Sie auf "Umwandeln" und warten Sie, bis der Fortschrittsbalken fertig ist. Beim ersten Mal lädt Ihr Browser die Konverter-Engine herunter (etwa 30 MB), die danach zwischengespeichert wird.',
      'Laden Sie die MP3 herunter, oder mehrere auf einmal als ZIP.',
    ],
    sections: [
      {
        heading: 'Was Sie bekommen',
        paragraphs: [
          'Das Bild wird verworfen und nur die Tonspur bleibt erhalten, daher ist die MP3 viel kleiner als das Video. Ein Vorlesungsvideo mit 100 MB wird oft zu einer MP3 von 10 bis 30 MB.',
          'Der Ton wird erneut als MP3 kodiert, ein verlustbehaftetes Format. War der Originalton schon komprimiert (bei den meisten Videos der Fall), verliert eine zweite Kompression noch ein ganz kleines bisschen. Bei 192 kbit/s oder mehr ist das kaum zu hören.',
        ],
      },
      {
        heading: 'Welche Videos funktionieren',
        paragraphs: [
          'MP4, MOV (iPhone-Videos), MKV, WEBM, AVI und die meisten Smartphone- und Kameraclips. Lässt sich eine Datei nicht öffnen, ist sie vielleicht beschädigt, kopiergeschützt oder in einem ungewöhnlichen Format; die Seite sagt Ihnen, wenn sie eine Datei nicht lesen kann.',
          'Holen Sie den Ton nur aus Videos, die Ihnen gehören oder die Sie nutzen dürfen. Üblich ist die Aufnahme eigener Vorlesungen, Interviews, Sprachnotizen und Familienvideos.',
        ],
      },
      {
        heading: 'Lange Videos und Smartphones',
        paragraphs: [
          'Weil Ihr eigenes Gerät die Arbeit erledigt, brauchen lange Videos Zeit und Speicher. Wir empfehlen Dateien unter etwa 500 MB am Computer und 100 MB am Smartphone. Wenn ein Smartphone Mühe hat, kürzen Sie das Video zuerst mit dem Werkzeug Video kürzen oder nutzen Sie einen Computer.',
        ],
      },
    ],
    faqs: [
      { q: 'Funktioniert es auf einem Smartphone?', a: 'Ja, in jedem modernen Browser, aber lange Videos sind auf Smartphones langsam. Kurze Clips funktionieren gut.' },
      { q: 'Kann ich stattdessen WAV oder ein anderes Format bekommen?', a: 'Ja. Video in MP3 ist der schnellste Weg, und die Audio-Konverter machen aus der MP3 dann WAV, M4A, OGG oder FLAC.' },
      { q: 'Wird das Video hochgeladen?', a: 'Nein. Alles läuft im Tab Ihres Browsers, und das Video verlässt Ihr Gerät nie.' },
    ],
  },
  'heic-vs-jpg': {
    title: 'HEIC oder JPG: Was sollten Sie verwenden?',
    description: 'Was HEIC ist, wie es sich von JPG unterscheidet, warum iPhone-Fotos anderswo nicht aufgehen und wie Sie sie umwandeln.',
    intro: 'HEIC macht Fotos bei ähnlicher Qualität etwa halb so groß wie JPG, aber weniger Programme öffnen es. Nutzen Sie HEIC, um Platz auf Ihrem Handy zu sparen, und wandeln Sie in JPG um, wenn Sie ein Foto teilen, hochladen oder anderswo bearbeiten wollen.',
    steps: [
      'Prüfen Sie, ob die Datei auf .heic oder .heif endet. Das speichert ein iPhone standardmäßig.',
      'Wenn Sie es teilen oder hochladen müssen, wandeln Sie es mit dem Konverter HEIC in JPG bei iDuckIMG um, der in Ihrem Browser läuft.',
      'Behalten Sie das HEIC-Original, falls Sie es noch einmal bearbeiten könnten: Es enthält mehr Farbdetails als ein JPG.',
      'Damit Ihr iPhone nicht mehr in HEIC speichert, gehen Sie zu Einstellungen, Kamera, Formate und wählen "Maximale Kompatibilität".',
    ],
    sections: [
      {
        heading: 'Die wirklichen Unterschiede',
        paragraphs: [
          'HEIC (High Efficiency Image Container) nutzt dieselbe Kompressionsfamilie wie moderne Videos. Apple machte es 2017 zum iPhone-Standard, weil es ein Foto in etwa der Hälfte des Platzes eines JPG speichert und 10-Bit-Farbe, Tiefendaten und mehrere Bilder in einer Datei enthalten kann.',
          'JPG stammt von 1992. Seine Kompression ist weniger effizient, aber jedes Handy, jeder Computer, jede Website, jeder Drucker und jedes Bildbearbeitungsprogramm öffnet es ohne Aufhebens.',
        ],
      },
      {
        heading: 'Warum HEIC Ärger macht',
        paragraphs: [
          'Viele Websites und Formulare lehnen HEIC-Uploads ab. Windows braucht zum Anzeigen einen zusätzlichen Codec, und ältere Android-Handys, manche Drucker und viel ältere Software können sie gar nicht öffnen.',
          'Die Umwandlung in JPG kostet ein wenig Qualität, weil JPG verlustbehaftet ist und einen kleineren Farbumfang hat. Beim Teilen und Hochladen merken Sie das nicht. Für ernsthafte Bildbearbeitung behalten Sie das Original.',
        ],
      },
      {
        heading: 'Eine einfache Regel',
        paragraphs: ['Behalten Sie HEIC, solange das Foto auf Ihrem Handy oder in iCloud bleibt. Wandeln Sie eine Kopie in JPG um, sobald Sie es jemandem schicken oder auf eine Website stellen müssen.'],
      },
    ],
    faqs: [
      { q: 'Ist HEIC qualitativ besser als JPG?', a: 'Bei gleicher Dateigröße ja: Es behält mehr Details. Bei gleicher Qualität ist es etwa halb so groß. Es unterstützt außerdem mehr Farben.' },
      { q: 'Verliert man beim Umwandeln von HEIC in JPG Qualität?', a: 'Ein wenig, weil JPG ein verlustbehaftetes Format ist. Bei hohen Qualitätseinstellungen ist der Unterschied sehr schwer zu sehen.' },
      { q: 'Wo wandle ich HEIC in JPG um?', a: 'Der Konverter HEIC in JPG ist bei iDuckIMG, einer Schwesterseite. Er läuft ebenfalls in Ihrem Browser und lädt Ihre Fotos nicht hoch.' },
    ],
  },
  'how-to-open-a-csv-in-excel-correctly': {
    title: 'So öffnen Sie eine CSV in Excel richtig',
    description: 'Verhindern Sie, dass Excel beim Öffnen einer CSV-Datei führende Nullen entfernt, lange Zahlen verstümmelt und Umlaute zerstört.',
    intro: 'Ein Doppelklick auf eine CSV lässt Excel raten, wie sie zu lesen ist, und der Tipp ist oft falsch. Der zuverlässige Weg: die CSV zuerst in eine XLSX-Datei umwandeln oder die Registerkarte Daten in Excel zum Importieren nutzen und den Typ jeder Spalte selbst wählen.',
    steps: [
      'Am einfachsten: Wandeln Sie die Datei mit dem Konverter CSV in Excel um und öffnen Sie dann die .xlsx. Führende Nullen und Textwerte bleiben, wie sie sind.',
      'Oder öffnen Sie in Excel eine leere Arbeitsmappe und wählen Daten, dann Aus Text/CSV.',
      'Wählen Sie die Datei und prüfen Sie, ob der Dateiursprung 65001: UTF-8 lautet (das behebt Umlaute) und das Trennzeichen zu Ihrer Datei passt.',
      'Klicken Sie auf Daten transformieren, wenn manche Spalten Text bleiben sollen, etwa Postleitzahlen und Telefonnummern, und setzen Sie deren Typ auf Text.',
      'Klicken Sie auf Laden.',
    ],
    sections: [
      {
        heading: 'Was schiefgeht',
        paragraphs: [
          'Führende Nullen verschwinden: 01234 wird zu 1234, was Postleitzahlen, Telefonnummern und Artikelnummern kaputt macht.',
          'Lange Zahlen werden zu wissenschaftlicher Notation. Excel behält nur 15 Stellen einer Zahl, daher ist eine 16-stellige Karten- oder Ausweisnummer für immer beschädigt, sobald sie als Zahl gespeichert wurde.',
          'Manche Texte werden als Datum gelesen. Ein Wert wie 1-2 kann zum 2. Januar werden, und manche Gennamen wurden auf diese Weise berühmterweise verstümmelt.',
          'Umlaute und nicht-englische Buchstaben erscheinen als seltsame Zeichen, wenn die Datei UTF-8 ist, Excel aber eine ältere Kodierung annimmt.',
        ],
      },
      {
        heading: 'Semikolons und Kommas',
        paragraphs: [
          'In Ländern, die Dezimalzahlen mit Komma schreiben, erwartet Excel ein Semikolon zwischen den Spalten, sodass eine CSV mit Kommas als eine lange Spalte geöffnet wird. Der Konverter auf dieser Seite sieht sich die erste Zeile an, wählt das richtige Trennzeichen und versteht auch Werte in Anführungszeichen, die Kommas enthalten.',
        ],
      },
      {
        heading: 'In die andere Richtung',
        paragraphs: [
          'Um ein Excel-Blatt als CSV für eine Datenbank oder ein Upload-Formular zu speichern, nutzen Sie den Konverter Excel in CSV. Er schreibt standardmäßig eine UTF-8-Markierung, damit Excel Umlaute richtig anzeigt, wenn Sie die CSV wieder öffnen.',
        ],
      },
    ],
    faqs: [
      { q: 'Warum öffnet sich meine CSV als eine Spalte?', a: 'Das Trennzeichen passt nicht zu Ihren Regionseinstellungen. Die Umwandlung in XLSX oder der Import über die Registerkarte Daten mit Wahl des Trennzeichens behebt das.' },
      { q: 'Kann ich meine führenden Nullen zurückbekommen, nachdem Excel sie entfernt hat?', a: 'Nur wenn Sie noch die ursprüngliche CSV haben. Sobald Excel 1234 über 01234 gespeichert hat, ist die Null weg, behalten Sie also immer die Originaldatei.' },
      { q: 'Wird meine Tabelle hochgeladen?', a: 'Nein. Die Konverter laufen in Ihrem Browser, und die Datei verlässt Ihr Gerät nie.' },
    ],
  },
  'how-to-convert-units-without-mistakes': {
    title: 'So rechnen Sie Einheiten ohne Fehler um',
    description: 'Die Fallen, die beim Umrechnen von Einheiten zu falschen Ergebnissen führen: US- und UK-Gallonen, 1000 oder 1024, Tonnen, Temperatur und indische Flächeneinheiten.',
    intro: 'Um Einheiten ohne Fehler umzurechnen, prüfen Sie, zu welchem System die Einheit gehört, nutzen Sie ein Werkzeug mit exakten Umrechnungsfaktoren und schreiben Sie die Einheit neben jede Zahl. Die meisten Fehler entstehen bei Einheiten, die denselben Namen tragen, aber unterschiedliche Mengen bedeuten.',
    steps: [
      'Schreiben Sie die Zahl mit ihrer Einheit, zum Beispiel 5 mi, nicht nur 5.',
      'Prüfen Sie, ob die Einheit das bedeutet, was Sie denken. Eine Gallone, eine Tonne und ein Bigha ändern sich je nach Land oder Bundesstaat.',
      'Nutzen Sie einen Konverter mit exakten Faktoren, etwa den Längen- oder Gewichtsumrechner, und lesen Sie das Ergebnis mit seiner Einheit.',
      'Machen Sie eine Plausibilitätsprüfung: Hat das Ergebnis die richtige Größe? Ein Marathon von 42 km sollte knapp 26 Meilen ergeben.',
      'Behalten Sie die ursprüngliche Zahl samt Einheit und runden Sie erst ganz am Ende.',
    ],
    sections: [
      {
        heading: 'Einheiten mit demselben Namen',
        paragraphs: [
          'Eine US-Gallone sind 3,785 Liter, eine britische Gallone aber 4,546 Liter, etwa 20 Prozent mehr. Eine US-Short-Ton sind 2000 Pfund, eine britische Long Ton 2240 Pfund und eine metrische Tonne 1000 Kilogramm.',
          'In der Informatik sind 1 KB für Festplattenhersteller und Handytarife 1000 Byte, in manchen Betriebssystemen aber 1024 Byte. Deshalb zeigt eine 1-TB-Festplatte etwa 931 GB an. Die Namen KiB, MiB und GiB bedeuten immer 1024.',
        ],
      },
      {
        heading: 'Temperatur ist anders',
        paragraphs: [
          'Die meisten Umrechnungen multiplizieren mit einem Faktor. Temperaturskalen beginnen bei unterschiedlichen Nullpunkten, daher muss man auch addieren oder subtrahieren: Fahrenheit ist Celsius mal 9/5 plus 32. Darum verdoppelt eine verdoppelte Celsius-Temperatur nicht den Fahrenheit-Wert.',
        ],
      },
      {
        heading: 'Örtliche Flächeneinheiten',
        paragraphs: [
          'Ein Bigha hat in Indien keine feste Größe. Es sind etwa 27.000 Quadratfuß in Uttar Pradesh, etwa 17.424 in Gujarat und 14.400 in Westbengalen und Assam, und es kann sich von Bezirk zu Bezirk unterscheiden. Ein Gaj ist ein Quadratyard (9 Quadratfuß). Für alles Rechtliche nutzen Sie die Angabe aus dem örtlichen Grundbuch.',
        ],
      },
      {
        heading: 'Warum das wichtig ist',
        paragraphs: [
          'Im Jahr 1999 verlor die NASA den Mars Climate Orbiter, weil die Software eines Teams Pfundkraft-Sekunden nutzte und die eines anderen Newton-Sekunden erwartete. Eine Verwechslung von Einheiten ist ein kleiner Fehler mit großen Folgen, behalten Sie die Einheit also immer bei der Zahl.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie viele Fuß hat ein Meter?', a: 'Etwa 3,28084 Fuß. Ein Fuß sind genau 0,3048 Meter.' },
      { q: 'Soll ich Umrechnungen runden?', a: 'Nur am Ende. Rundet man mitten in einer Rechnung, kommt ein Fehler hinzu, der mit jedem Schritt wächst.' },
      { q: 'Sind die Konverter exakt?', a: 'Sie nutzen die exakt definierten Faktoren und zeigen bis zu 10 signifikante Stellen. Indische Flächeneinheiten sind von Natur aus ungefähr, weil die örtlichen Definitionen abweichen.' },
    ],
  },
  'how-to-make-a-gif-from-a-video': {
    title: 'So machen Sie ein GIF aus einem Video',
    description: 'Verwandeln Sie jeden kurzen Videoclip in Ihrem Browser in ein animiertes GIF und halten Sie die Datei klein genug zum Versenden.',
    intro: 'Um ein GIF aus einem Video zu machen, legen Sie den Clip im Konverter Video in GIF ab, wählen Sie Start und Länge und klicken Sie auf "GIF erstellen". Bleiben Sie unter 10 Sekunden und unter 480 Pixel Breite, sonst wird das GIF riesig.',
    steps: [
      'Öffnen Sie Video in GIF und legen Sie Ihren Clip ab (MP4, MOV, WEBM, MKV oder AVI).',
      'Stellen Sie die Startzeit ein. Nutzen Sie Sekunden (90) oder Minuten und Sekunden (1:30).',
      'Stellen Sie die Länge in Sekunden ein. Drei bis sechs Sekunden reichen für eine Reaktion oder eine Demo völlig.',
      'Wählen Sie eine Breite. 320 bis 480 Pixel passen für Chat-Apps; gehen Sie nur auf 640, wenn es auf Details ankommt.',
      'Wählen Sie 10 Bilder pro Sekunde für eine kleine Datei oder 15 bis 20 für flüssigere Bewegung, klicken Sie dann auf "GIF erstellen" und laden Sie es herunter.',
    ],
    sections: [
      {
        heading: 'Warum GIFs so groß werden',
        paragraphs: [
          'Ein GIF speichert jedes Bild als eigenes Einzelbild und kann nur 256 Farben nutzen. Es gibt keine clevere Videokompression, daher multiplizieren sich Länge, Breite und Bildrate. Halbiert man die Breite, schrumpft die Datei auf etwa ein Viertel, und halbiert man die Bildrate, halbiert sie sich noch einmal.',
        ],
      },
      {
        heading: 'Was ein GIF nicht kann',
        paragraphs: [
          'Ein GIF hat überhaupt keinen Ton. Brauchen Sie Audio, behalten Sie den Clip als MP4. Fotos können außerdem leicht körnig wirken, weil 256 Farben nicht viel sind. Das ist eine Grenze des Formats, nicht des Werkzeugs.',
          'Wird das GIF nur auf einer Website oder in einer modernen Chat-App gezeigt, ist ein MP4 in Endlosschleife meist viel kleiner und schärfer. Der Konverter GIF in MP4 macht genau das in umgekehrter Richtung.',
        ],
      },
    ],
    faqs: [
      { q: 'Läuft das GIF in einer Schleife?', a: 'Ja. Die hier erstellten GIFs laufen endlos in einer Schleife, was die meisten wollen.' },
      { q: 'Kann ich Text oder Sticker hinzufügen?', a: 'Nicht in diesem Werkzeug. Es schneidet und wandelt nur um. Fügen Sie den Text vorher in einem Editor zum Video hinzu, wenn Sie ihn brauchen.' },
      { q: 'Wird das Video hochgeladen?', a: 'Nein. Das GIF entsteht im Tab Ihres Browsers, und der Clip verlässt Ihr Gerät nie.' },
    ],
  },
};

export default guides;
