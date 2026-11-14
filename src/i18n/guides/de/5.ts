import type { GuideSet } from '../types';

/** German guides, batch 5. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-markdown-to-html': {
    title: 'So wandeln Sie Markdown in HTML um',
    description: 'Verwandeln Sie Markdown-Notizen und README-Texte in sauberes HTML, das Sie in eine Webseite oder ein CMS einfügen können.',
    intro: 'Um Markdown in HTML umzuwandeln, fügen Sie Ihr Markdown im Konverter Markdown in HTML ein. Sie erhalten das HTML für Überschriften, Absätze, Listen, Links, Tabellen und Code, bereit zum Einfügen in eine Seite oder ein Content-System.',
    steps: [
      'Schreiben Sie Ihr Markdown oder fügen Sie es ein, oder klicken Sie auf "Try an example", um die Bausteine zu sehen.',
      'Öffnen Sie Markdown in HTML und fügen Sie es im linken Feld ein.',
      'Lesen Sie das HTML rechts. Es ist nur der Inhalt, ohne html- oder body-Tags.',
      'Kopieren oder laden Sie es herunter und setzen Sie es in Ihre eigene Seitenvorlage ein.',
    ],
    sections: [
      {
        heading: 'Was unterstützt wird',
        paragraphs: [
          'Standard-Markdown (Überschriften mit #, Fettdruck mit **, Listen, Links, Bilder, Zitate und Codeblöcke) plus die üblichen GitHub-Erweiterungen: Tabellen, Aufgabenlisten und Durchstreichen. Rohes HTML im Markdown wird unverändert durchgereicht.',
        ],
      },
      {
        heading: 'Ein Sicherheitshinweis',
        paragraphs: [
          'Die Ausgabe ist eine schlichte Umwandlung. Stammt das Markdown von jemand anderem, kann es Skripte enthalten, die als rohes HTML versteckt sind. Schicken Sie das Ergebnis durch Ihren eigenen HTML-Sanitizer, bevor Sie es auf einer Seite veröffentlichen, auf der Inhalte anderer Personen erscheinen.',
        ],
      },
      {
        heading: 'Häufige Markdown-Fehler',
        paragraphs: [
          'Vor einer Liste braucht es eine Leerzeile, und Absätze werden durch Leerzeilen getrennt. Nach den Rautezeichen einer Überschrift braucht es ein Leerzeichen, schreiben Sie also # Titel und nicht #Titel. Um einen Zeilenumbruch innerhalb eines Absatzes zu erzwingen, beenden Sie die Zeile mit zwei Leerzeichen. Eine Tabelle braucht eine Kopfzeile, gefolgt von einer Trennzeile aus Bindestrichen. Sieht das HTML falsch aus, liegt die Ursache fast immer an einem dieser Punkte.',
        ],
      },
    ],
    faqs: [
      { q: 'Kann ich von HTML zurück zu Markdown?', a: 'Ja, mit HTML in Markdown. Gestaltung und Layout gehen verloren, aber Überschriften, Listen, Links und Fettdruck bleiben erhalten.' },
      { q: 'Fügt es Stile hinzu?', a: 'Nein. Sie erhalten ungestaltetes HTML, das die Stile der Seite übernimmt, in die Sie es einsetzen.' },
      { q: 'Wird mein Text hochgeladen?', a: 'Nein. Er wird im Tab Ihres Browsers umgewandelt.' },
    ],
  },
  'how-to-fix-garbled-text-and-wrong-encoding': {
    title: 'So reparieren Sie unleserlichen Text und falsche Kodierung',
    description: 'Reparieren Sie Textdateien, die seltsame Zeichen wie Ã© zeigen, indem Sie die richtige Kodierung wählen und sauberes UTF-8 speichern.',
    intro: 'Um eine unleserliche Textdatei zu reparieren, legen Sie sie in der TXT-Kodierung reparieren ab, wählen die Kodierung, in der sie geschrieben wurde (probieren Sie zuerst Windows-1252), prüfen die Vorschau und laden die UTF-8-Kopie herunter. Unleserlicher Text bedeutet, dass die Datei mit der falschen Kodierung gelesen wurde.',
    steps: [
      'Öffnen Sie die TXT-Kodierung reparieren und legen Sie Ihre Datei ab.',
      'Sehen Sie sich die Vorschau an. Sehen Umlaute wie Ã© oder é aus, ist die Datei wahrscheinlich Windows-1252.',
      'Wählen Sie aus der Liste eine andere Kodierung, bis die Vorschau richtig lesbar ist. Windows-1251 deckt Kyrillisch ab; Shift_JIS, GBK und Big5 decken Japanisch und Chinesisch ab.',
      'Klicken Sie auf "Umwandeln" und laden Sie die UTF-8-Kopie herunter. Ihr Original bleibt unberührt.',
    ],
    sections: [
      {
        heading: 'Was da passiert',
        paragraphs: [
          'Eine Textdatei besteht nur aus Zahlen. Eine Kodierung ist die Tabelle, die sagt, welchen Buchstaben jede Zahl bedeutet. UTF-8 kann alle Sprachen schreiben, während ältere Tabellen wie Windows-1252 eine Region abdecken. Wird eine Datei mit einer Tabelle geschrieben und mit einer anderen gelesen, werden Zeichen zu Unsinn wie Ã© statt é.',
        ],
      },
      {
        heading: 'Warum UTF-8 die Kodierung zum Behalten ist',
        paragraphs: [
          'UTF-8 wird heute von fast jedem Programm, jeder Website und jeder Datenbank verstanden. Ihren Text in UTF-8 zu speichern heißt, dass er sich überall gleich öffnet. Sieht eine CSV nach der Reparatur in Excel immer noch falsch aus, wandeln Sie sie mit CSV in Excel um, das UTF-8 korrekt liest.',
        ],
      },
    ],
    faqs: [
      { q: 'Woher weiß ich, welche Kodierung ich wählen soll?', a: 'Probieren Sie die wahrscheinlichen aus und beobachten Sie die Vorschau. Die richtige macht jeden Buchstaben lesbar. Sehen Sie, woher die Datei stammt: Alte Windows-Exporte sind oft Windows-1252.' },
      { q: 'Warum sehe ich Fragezeichen oder Kästchen?', a: 'Diese Zeichen waren schon verloren, bevor Sie die Datei geöffnet haben. Eine andere Kodierung kann nicht zurückbringen, was ersetzt wurde.' },
      { q: 'Wird meine Datei hochgeladen?', a: 'Nein. Sie wird in Ihrem Browser gelesen und umgewandelt.' },
    ],
  },
  'how-to-convert-celsius-to-fahrenheit': {
    title: 'So rechnen Sie Celsius in Fahrenheit um (und zurück)',
    description: 'Die Formel, eine schnelle Kopfrechenabkürzung und ein Umrechner für Celsius, Fahrenheit und Kelvin.',
    intro: 'Um Celsius in Fahrenheit umzurechnen, multiplizieren Sie mit 9, teilen durch 5 und addieren 32. So sind 100 °C gleich 212 °F und 0 °C gleich 32 °F. Zurück subtrahieren Sie 32, multiplizieren mit 5 und teilen durch 9.',
    steps: [
      'Schreiben Sie die Temperatur mit ihrer Einheit auf, zum Beispiel 25 °C.',
      'Multiplizieren Sie mit 9: 25 × 9 = 225.',
      'Teilen Sie durch 5: 225 ÷ 5 = 45.',
      'Addieren Sie 32: 45 + 32 = 77 °F.',
      'Oder öffnen Sie den Temperaturumrechner, tippen 25 ein, wählen Celsius in Fahrenheit und lesen die Antwort ab.',
    ],
    sections: [
      {
        heading: 'Eine Kopfrechenabkürzung',
        paragraphs: [
          'Für eine grobe Antwort verdoppeln Sie die Celsius-Zahl und addieren 30. Das ergibt 80 für 25 °C, nahe an den tatsächlichen 77. Es funktioniert am besten zwischen 0 und 30 °C und weicht an den Extremen weiter ab. Für Kochen, Medizin und Wissenschaft nutzen Sie die exakte Formel.',
        ],
      },
      {
        heading: 'Warum man nicht einfach multiplizieren kann',
        paragraphs: [
          'Die meisten Einheitenumrechnungen sind eine einzige Multiplikation. Temperaturskalen beginnen an verschiedenen Nullpunkten: 0 °C sind 32 °F. Deshalb hat die Formel einen Additions- oder Subtraktionsschritt, und deshalb verdoppelt eine verdoppelte Celsius-Temperatur nicht den Fahrenheit-Wert.',
          'Kelvin nutzt dieselbe Gradgröße wie Celsius, beginnt aber am absoluten Nullpunkt: Addieren Sie 273,15 zu einem Celsius-Wert, um Kelvin zu erhalten. Die beiden Skalen schneiden sich bei -40, wo Celsius und Fahrenheit gleich sind.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie viel sind 37 °C in Fahrenheit?', a: 'Etwa 98,6 °F, die normale menschliche Körpertemperatur.' },
      { q: 'Welche Ofentemperatur sind 180 °C?', a: '356 °F, in Rezepten meist auf 350 °F gerundet.' },
      { q: 'Wie rechne ich Fahrenheit in Celsius um?', a: 'Subtrahieren Sie 32, multiplizieren Sie mit 5, teilen Sie durch 9. 212 °F ergeben 100 °C.' },
    ],
  },
  'how-to-convert-bigha-gaj-and-acre-to-square-feet': {
    title: 'So rechnen Sie Bigha, Gaj und Acre in Quadratfuß um',
    description: 'Rechnen Sie indische Flächeneinheiten in Quadratfuß um, mit den Werten, die fest bleiben, und denen, die sich je nach Bundesstaat ändern.',
    intro: 'Um indische Flächeneinheiten umzurechnen, öffnen Sie den Umrechner für indische Flächeneinheiten, tippen die Zahl ein und wählen die Einheit. Ein Gaj sind 9 Quadratfuß und ein Acre 43.560 Quadratfuß, aber ein Bigha unterscheidet sich je nach Bundesstaat, prüfen Sie also vor Kauf oder Verkauf immer das örtliche Register.',
    steps: [
      'Entscheiden Sie, welche Einheit Ihr Dokument nutzt. Steht dort Bigha, notieren Sie den Bundesstaat, denn die Größe ändert sich.',
      'Öffnen Sie den Umrechner für indische Flächeneinheiten und tippen Sie die Fläche ein.',
      'Wählen Sie unter From die Einheit, die Sie haben, und unter To Quadratfuß (oder Acre).',
      'Lesen Sie die Antwort und den Hinweis zum Bundesstaat. Gleichen Sie sie mit Ihrem Grundbuchauszug ab.',
    ],
    sections: [
      {
        heading: 'Feste Einheiten',
        paragraphs: [
          'Ein Gaj ist ein Quadratyard, also 9 Quadratfuß. Ein Acre sind 43.560 Quadratfuß oder etwa 4.047 Quadratmeter. Ein Hektar sind 10.000 Quadratmeter, etwa 2,47 Acre oder grob 107.639 Quadratfuß. Diese Werte sind überall gleich.',
        ],
      },
      {
        heading: 'Einheiten, die sich je nach Bundesstaat ändern',
        paragraphs: [
          'Ein Bigha hat keine einheitliche Größe. Es sind etwa 27.000 Quadratfuß in Uttar Pradesh, etwa 17.400 in Gujarat und 14.400 in Westbengalen und Assam, und es kann je nach Bezirk und danach, ob der örtliche Brauch das Pucca- oder das Kachha-Bigha ist, abweichen. Auch Biswa, Katha, Guntha und Cent variieren je nach Region.',
          'Behandeln Sie deshalb jede Umrechnung einer örtlichen Einheit als Schätzung und nutzen Sie für alles Rechtliche die Zahl im amtlichen Grundbuchdokument.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie viele Quadratfuß hat ein Bigha?', a: 'Das hängt vom Bundesstaat ab, von etwa 14.400 bis etwa 27.000 Quadratfuß an den hier genannten Orten. Nutzen Sie den Umrechner und seinen Hinweis und bestätigen Sie es vor Ort.' },
      { q: 'Wie viele Gaj hat ein Acre?', a: '4.840 Gaj, da ein Acre 43.560 Quadratfuß und ein Gaj 9 sind.' },
      { q: 'Ist das für rechtliche Zwecke sicher?', a: 'Nein. Es ist ein Rechner für Schätzungen. Eigentumsdokumente müssen die Zahlen des amtlichen Registers verwenden.' },
    ],
  },
  'how-many-mb-in-a-gb': {
    title: 'Wie viele MB sind ein GB? 1000 oder 1024 erklärt',
    description: 'Warum ein Gigabyte im Handytarif 1000 MB sind, in manchen Systemen aber 1024 MiB, und wie Sie KB, MB, GB und TB umrechnen.',
    intro: 'Ein Gigabyte sind 1.000 Megabyte im dezimalen (SI-)System, das Festplattenhersteller und Handytarife nutzen, und ein Gibibyte sind 1.024 Mebibyte im binären System, das manche Betriebssysteme verwenden. Zum Umrechnen wählen Sie das richtige System und multiplizieren oder teilen durch 1.000 oder 1.024.',
    steps: [
      'Entscheiden Sie, welches System Sie brauchen. Im Laden verkaufter Speicher, Netzwerkgeschwindigkeiten und Datentarife nutzen 1.000.',
      'Öffnen Sie den Datengrößen-Umrechner und tippen Sie die Menge ein.',
      'Wählen Sie KB, MB, GB oder TB für das 1.000er-System oder KiB, MiB, GiB und TiB für das 1.024er-System.',
      'Lesen Sie das Ergebnis in der gewünschten Einheit ab.',
    ],
    sections: [
      {
        heading: 'Woher die beiden Systeme kommen',
        paragraphs: [
          'Computer arbeiten mit Zweierpotenzen, und 1.024 (2 hoch 10) liegt nahe bei 1.000. Frühe Software nutzte KB für 1.024 Byte, während Hardwarehersteller das metrische 1.000 verwendeten. Um die Verwirrung zu beenden, wurden die Namen KiB, MiB und GiB für Einheiten auf 1.024er-Basis geschaffen. Im Alltag erscheinen beide weiterhin unter dem schlichten Namen.',
        ],
      },
      {
        heading: 'Warum ein Laufwerk weniger Platz anzeigt',
        paragraphs: [
          'Ein als 1 TB verkauftes Laufwerk fasst 1.000.000.000.000 Byte. Ein System, das Größen in Einheiten auf 1.024er-Basis anzeigt, meldet das als etwa 931 GiB, die Zahl wirkt also kleiner, obwohl nichts fehlt. Derselbe Effekt lässt ein 128-GB-Handy in manchen Menüs etwas weniger als 128 anzeigen.',
        ],
      },
    ],
    faqs: [
      { q: 'Was stimmt, 1.000 oder 1.024?', a: 'Beides stimmt im jeweiligen System. KB, MB und GB sind offiziell auf 1.000er-Basis; KiB, MiB und GiB auf 1.024er-Basis.' },
      { q: 'Wie viele MB sind 1 GB in meinem Datentarif?', a: 'Tarife nutzen 1.000, also sind 1 GB gleich 1.000 MB. Fragen Sie Ihren Anbieter, wenn die genaue Zahl wichtig ist.' },
      { q: 'Wie viele Byte hat ein Megabyte?', a: '1.000.000 im Dezimalsystem und 1.048.576 in einem Mebibyte.' },
    ],
  },
};

export default guides;
