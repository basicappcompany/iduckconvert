import type { GuideSet } from '../types';

/** German guides, batch 7. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-time-zones-for-a-meeting': {
    title: 'So rechnen Sie Zeitzonen für eine Besprechung um (IST, EST, GMT)',
    description: 'Finden Sie die richtige Besprechungszeit zwischen Indien, den USA, Großbritannien und mehr und umgehen Sie die Sommerzeit-Falle.',
    intro: 'Um die Zeit einer Besprechung umzurechnen, wählen Sie im Zeitzonenrechner Datum, Uhrzeit und Ihre Ausgangszone und fügen die gewünschten Städte hinzu. Er berücksichtigt die Sommerzeit für das genaue Datum. Indien (IST) ist das ganze Jahr UTC+05:30 und stellt die Uhren nie um.',
    steps: [
      'Öffnen Sie den Zeitzonenrechner und wählen Sie das Datum der Besprechung.',
      'Tippen Sie die Uhrzeit ein und wählen Sie die Zone, in der sie geschrieben ist, zum Beispiel Indien (Kolkata).',
      'Fügen Sie die Städte der anderen Personen hinzu. Jede Zeile zeigt ihre Ortszeit und ihr Datum.',
      'Achten Sie auf die Hinweise "next day" oder "previous day" und teilen Sie die Zeiten dann allen mit.',
    ],
    sections: [
      {
        heading: 'Die Sommerzeit-Falle',
        paragraphs: [
          'Der Abstand zwischen zwei Orten kann sich im Lauf des Jahres ändern. Die Vereinigten Staaten stellen die Uhren an anderen Terminen um als das Vereinigte Königreich und Europa, daher ist der Abstand zwischen New York und London im Frühjahr und Herbst einige Wochen lang um eine Stunde anders als sonst. Indien und viele andere Länder stellen die Uhren gar nicht um, der Abstand zu ihnen ändert sich also immer dann, wenn die andere Seite umstellt.',
          'Rechnen Sie immer für das genaue Datum der Besprechung um, nicht für heute. Der Umrechner tut das mit den in Ihrem Browser eingebauten Zeitzonendaten.',
        ],
      },
      {
        heading: 'Datumsgrenzen und späte Besprechungen',
        paragraphs: [
          'Ein später Abend in Indien ist derselbe Morgen oder dieselbe Nacht in den Vereinigten Staaten, und ein früher Morgen in Japan ist der Vorabend in Indien. Weicht das Datum ab, bucht man leicht den falschen Tag, prüfen Sie also die Datumsspalte und schreiben Sie das vollständige Datum in die Einladung.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie spät ist IST in New Yorker Zeit?', a: 'Indien ist New York im Winter (EST) 10 Stunden 30 Minuten und im Sommer (EDT) 9 Stunden 30 Minuten voraus, weil Indien die Uhren nicht umstellt. Der Umrechner zeigt den genauen Wert für Ihr Datum.' },
      { q: 'Nutzt es meinen Standort?', a: 'Nur, um eine Ausgangszone auszuwählen. Ihr Browser liefert seine Zeitzone, und nichts wird irgendwohin gesendet.' },
      { q: 'Was, wenn meine Stadt nicht aufgeführt ist?', a: 'Wählen Sie eine Stadt in derselben Zeitzone.' },
    ],
  },
  'how-to-write-dates-without-confusion': {
    title: 'So schreiben Sie Daten ohne Verwechslung: TT/MM oder MM/TT',
    description: 'Warum 04/03/2026 in Indien und den USA unterschiedliche Daten bedeutet und wie Sie Daten so schreiben, dass sie niemand falsch liest.',
    intro: 'Um ein Datum ohne Verwechslung zu schreiben, nutzen Sie das ISO-Format 2026-03-04 oder schreiben Sie den Monat aus, zum Beispiel 4. März 2026. Das numerische Datum 04/03/2026 bedeutet in Indien und im Vereinigten Königreich den 4. März, in den Vereinigten Staaten aber den 3. April.',
    steps: [
      'Entscheiden Sie, wer das Datum lesen wird. Könnte die Person eine andere Reihenfolge nutzen, vermeiden Sie die Form nur aus Zahlen.',
      'Nutzen Sie ISO 8601 (JJJJ-MM-TT) für Formulare, Dateinamen und Daten. Es sortiert in Datumsreihenfolge.',
      'Oder schreiben Sie den Monat als Wort: 4. März 2026 oder March 4, 2026.',
      'Nutzen Sie den Datumsformat-Umrechner, um ein Datum in allen gängigen Formaten zu sehen, und kopieren Sie das benötigte.',
    ],
    sections: [
      {
        heading: 'Drei gebräuchliche Reihenfolgen',
        paragraphs: [
          'Tag-Monat-Jahr (TT/MM/JJJJ) wird in Indien, im Vereinigten Königreich und im größten Teil der Welt genutzt. Monat-Tag-Jahr (MM/TT/JJJJ) wird in den Vereinigten Staaten genutzt. Jahr-Monat-Tag (JJJJ/MM/TT) wird in Japan, China und Korea genutzt und ist die Grundlage von ISO 8601. Daten, bei denen der Tag 13 oder höher ist, sind eindeutig, 04/03 und 05/06 jedoch nicht.',
        ],
      },
      {
        heading: 'Warum ISO 8601 sicherer ist',
        paragraphs: [
          'ISO 8601 schreibt die größte Einheit zuerst, daher kann 2026-03-04 nur auf eine Weise gelesen werden, und eine Liste von ISO-Daten sortiert sich als einfacher Text richtig. Datenbanken, Programmierer und internationale Formulare bevorzugen es. Für eine freundliche Schreibweise nimmt ein ausgeschriebener Monat menschlichen Lesern jeden Zweifel.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie gebe ich ein Datum ein, das der Umrechner richtig liest?', a: 'Tippen Sie es ein und sagen Sie dem Umrechner, ob Tag, Monat oder Jahr zuerst kommt. Er zeigt dann alle anderen Formate.' },
      { q: 'Akzeptiert es zweistellige Jahreszahlen?', a: 'Ja. Ein zweistelliges Jahr wie 26 wird als 2026 gelesen.' },
      { q: 'Warum sagt es, mein Datum sei nicht echt?', a: 'Entweder gibt es den Tag nicht (31. Februar) oder die Reihenfolge ist falsch (ein Monat 25).' },
    ],
  },
  'how-to-convert-tiff-to-jpg': {
    title: 'So wandeln Sie TIFF in JPG um',
    description: 'Verwandeln Sie TIFF-Scans und -Fotos in kleine JPG-Dateien, die überall aufgehen, auch mehrseitige TIFFs.',
    intro: 'Um TIFF in JPG umzuwandeln, legen Sie Ihre TIFF-Dateien im Konverter ab, wählen eine Qualität (90 ist ein guter Standard) und klicken auf "Umwandeln". Jede Seite eines mehrseitigen TIFF wird zu einem eigenen JPG, und Sie können alle als ZIP herunterladen.',
    steps: [
      'Öffnen Sie TIFF in JPG und legen Sie Ihre .tif- oder .tiff-Dateien ab.',
      'Wählen Sie eine Qualität. 90 behält die meisten Details; niedrigere Werte ergeben kleinere Dateien.',
      'Klicken Sie auf "Umwandeln".',
      'Laden Sie das JPG herunter, oder ein ZIP, wenn es mehrere Seiten oder Dateien gibt.',
    ],
    sections: [
      {
        heading: 'Warum Menschen TIFF umwandeln',
        paragraphs: [
          'TIFF ist ein hochwertiges Format, das Scanner, Fax-Software und professionelle Fotografie nutzen. Die Dateien sind groß, und die meisten Webbrowser (außer Safari), E-Mail-Programme und Formulare können sie weder anzeigen noch annehmen. JPG ist viel kleiner und funktioniert fast überall.',
        ],
      },
      {
        heading: 'Was Sie erwarten können',
        paragraphs: [
          'JPG ist verlustbehaftet, es wird also ein wenig Detail gegen eine viel kleinere Datei getauscht. Bei Qualität 90 oder höher ist das kaum zu sehen. JPG hat keine Transparenz, durchsichtige Bereiche werden daher weiß. Seltene TIFF-Varianten, etwa manche 16-Bit- oder CMYK-Dateien, lassen sich womöglich nicht öffnen; die Seite zeigt dann eine Meldung. Behalten Sie das TIFF, wenn Sie das Bild später drucken oder bearbeiten könnten.',
        ],
      },
      {
        heading: 'Gescannte Dokumente',
        paragraphs: [
          'Bei einem mit 200 bis 300 dpi gescannten Dokument hält JPG mit Qualität 90 kleine Schrift lesbar und senkt die Dateigröße drastisch. Sehr niedrige Qualitätseinstellungen machen die Buchstabenkanten unscharf, gehen Sie bei Text also nicht unter etwa 70. Besteht eine Seite nur aus schwarzem Text auf Weiß, prüfen Sie das Ergebnis in voller Größe, bevor Sie das TIFF wegwerfen.',
        ],
      },
    ],
    faqs: [
      { q: 'Behält ein mehrseitiger Scan seine Reihenfolge?', a: 'Ja. Die Seiten heißen page1, page2 und so weiter.' },
      { q: 'Kann ich stattdessen ein PDF erstellen?', a: 'PDF-Umwandlungen gibt es bei iDuckPDF, einer Schwesterseite, die Bilder in ein PDF verwandeln kann.' },
      { q: 'Wird mein Scan hochgeladen?', a: 'Nein. Er wird im Tab Ihres Browsers umgewandelt.' },
    ],
  },
  'how-to-convert-webp-to-gif': {
    title: 'So wandeln Sie WEBP in GIF um',
    description: 'Verwandeln Sie WEBP-Bilder in GIF-Dateien für Chat-Apps und Foren, die WEBP ablehnen, und halten Sie die Datei klein.',
    intro: 'Um WEBP in GIF umzuwandeln, legen Sie die Datei im Konverter WEBP in GIF ab, wählen optional eine größte Breite und klicken auf "Umwandeln". In dieser Version wird ein stehendes WEBP zu einem GIF mit einem Bild, und ein animiertes WEBP behält nur sein erstes Bild.',
    steps: [
      'Öffnen Sie WEBP in GIF und legen Sie Ihre .webp-Dateien ab.',
      'Wählen Sie eine größte Breite, wenn das Bild groß ist. GIF-Dateien wachsen schnell.',
      'Klicken Sie auf "Umwandeln".',
      'Laden Sie das GIF herunter, oder ein ZIP bei mehreren Dateien.',
    ],
    sections: [
      {
        heading: 'Wann das hilft',
        paragraphs: [
          'WEBP ist ein modernes Bildformat von Google, das kleine Dateien erzeugt, und viele Websites liefern es inzwischen aus. Manche ältere Chat-Apps, Foren und E-Mail-Programme akzeptieren es noch nicht, aber fast alle akzeptieren GIF.',
        ],
      },
      {
        heading: 'Worauf Sie verzichten',
        paragraphs: [
          'GIF ist ein älteres Format, das auf 256 Farben beschränkt ist, daher können Fotos leicht körnig wirken, und die Dateien sind meist größer als das WEBP. Transparente Bereiche bleiben transparent, aber weiche halbtransparente Kanten werden ganz deckend oder ganz klar, weil GIF nur Transparenz mit An und Aus kennt. Ist das Bild ein Foto und akzeptiert die Seite es, passt JPG oder PNG womöglich besser; Bildumwandlungen in diese Formate gibt es bei iDuckIMG.',
        ],
      },
      {
        heading: 'Das GIF klein halten',
        paragraphs: [
          'Nutzen Sie für Sticker und Avatare eine größte Breite von 320 bis 480 Pixeln. Flächige Farben, Logos und einfache Zeichnungen lassen sich als GIF gut komprimieren, Fotos dagegen nicht, weil nur 256 Farben zur Verfügung stehen. Ist das GIF viel größer als erwartet, ist eine kleinere Breite die schnellste Abhilfe.',
        ],
      },
    ],
    faqs: [
      { q: 'Bleibt ein animiertes WEBP animiert?', a: 'Noch nicht. In dieser Version wird nur das erste Bild behalten, und die Seite weist darauf hin.' },
      { q: 'Warum ist mein GIF größer als das WEBP?', a: 'GIF komprimiert schlechter. Eine kleinere Breite verringert es.' },
      { q: 'Wird es hochgeladen?', a: 'Nein. Es wird im Tab Ihres Browsers umgewandelt.' },
    ],
  },
  'how-to-convert-kg-to-pounds': {
    title: 'So rechnen Sie kg in Pfund um (und Pfund in kg)',
    description: 'Rechnen Sie Kilogramm in Pfund, Unzen und Stone um, mit dem exakten Faktor, einer Kopfrechenabkürzung und einem Umrechner.',
    intro: 'Um Kilogramm in Pfund umzurechnen, multiplizieren Sie mit 2,20462. So sind 70 kg etwa 154,3 lb. Für die Gegenrichtung multiplizieren Sie Pfund mit 0,45359237. Der Gewichtsumrechner macht beides sofort und deckt auch Unzen, Stone, Gramm und Tonnen ab.',
    steps: [
      'Schreiben Sie das Gewicht mit seiner Einheit auf, zum Beispiel 70 kg.',
      'Multiplizieren Sie mit 2,20462: 70 × 2,20462 = 154,32 lb.',
      'Von Pfund in Kilogramm multiplizieren Sie mit 0,45359237: 154 lb × 0,45359237 = 69,85 kg.',
      'Oder öffnen Sie den Gewichtsumrechner, tippen die Zahl ein und wählen die beiden Einheiten.',
    ],
    sections: [
      {
        heading: 'Eine schnelle Abkürzung',
        paragraphs: [
          'Für eine grobe Antwort verdoppeln Sie die Kilogramm und addieren ein Zehntel des Ergebnisses: 70 kg verdoppelt sind 140, plus 14 sind 154 lb. In die andere Richtung halbieren Sie die Pfund und ziehen ein Zehntel ab: 154 lb sind 77, minus 7,7 ergibt etwa 69,3 kg. Das ist für den Alltag nah genug, aber für Kochen, Versand und Medizin nutzen Sie den exakten Faktor.',
        ],
      },
      {
        heading: 'Pfund, Unzen und Stone',
        paragraphs: [
          'Ein Pfund sind 16 Unzen. Ein Stone, der im Vereinigten Königreich und in Irland für das Körpergewicht genutzt wird, sind 14 Pfund oder etwa 6,35 kg. Ein Baby mit 7 lb 8 oz wiegt 7,5 Pfund, also etwa 3,4 kg. Die hier verwendete Tonne ist die metrische mit 1000 kg, die sich von der amerikanischen Short Ton mit 2000 Pfund unterscheidet.',
        ],
      },
      {
        heading: 'Gepäck und Körpergewicht',
        paragraphs: [
          'Gepäckgrenzen von Fluggesellschaften sind ein häufiger Grund zum Umrechnen. Ein aufgegebener Koffer mit 23 kg wiegt etwa 50,7 Pfund, und eine Grenze von 50 Pfund sind etwa 22,7 kg, ein Koffer, der in der einen Einheit passt, kann in der anderen also knapp darüber liegen. Beim Körpergewicht denken Sie daran, dass im Vereinigten Königreich Stone genutzt wird: 11 Stone sind 154 Pfund oder etwa 69,9 kg.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie viele Pfund sind 1 kg?', a: 'Etwa 2,20462 Pfund.' },
      { q: 'Wie viele kg sind 150 Pfund?', a: 'Etwa 68 kg.' },
      { q: 'Ist eine Tonne dasselbe wie eine Ton?', a: 'Nein. Eine metrische Tonne sind 1000 kg, eine US-Ton 2000 Pfund und eine britische Ton 2240 Pfund.' },
    ],
  },
};

export default guides;
