import type { GuideSet } from '../types';

/** German guides, batch 6. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-write-an-amount-in-words-for-a-cheque': {
    title: 'So schreiben Sie einen Betrag auf einem Scheck in Worten',
    description: 'Schreiben Sie Rupien- und Dollarbeträge in Worten, wie Schecks und Rechnungen es erwarten, mit Lakh und Crore oder Million und Milliarde.',
    intro: 'Um einen Betrag auf einem Scheck in Worten zu schreiben, öffnen Sie den Konverter Zahl in Worten, tippen den Betrag ein, wählen den indischen oder internationalen Stil und Rupien und Paise oder Dollar und Cent. Aus 1250.50 wird "Rupees One Thousand Two Hundred Fifty and Paise Fifty Only".',
    steps: [
      'Tippen Sie den Betrag in Ziffern ein. Kommas sind in Ordnung, und Dezimalstellen ergeben Paise oder Cent.',
      'Wählen Sie den indischen Stil (thousand, lakh, crore) oder den internationalen Stil (thousand, million, billion).',
      'Wählen Sie unter "Write as" Rupien und Paise oder Dollar und Cent.',
      'Kopieren Sie die Worte und vergleichen Sie sie mit den Ziffern, bevor Sie den Scheck ausfüllen.',
    ],
    sections: [
      {
        heading: 'Indischer und internationaler Stil',
        paragraphs: [
          'Im indischen System ist 1,00,000 ein Lakh und 1,00,00,000 ein Crore. Im internationalen System ist 1,000,000 eine Million und 1,000,000,000 eine Milliarde (one billion). Dieselbe Zahl wird unterschiedlich ausgesprochen: 12,50,000 sind im indischen Stil zwölf Lakh fünfzigtausend und im internationalen Stil eine Million zweihundertfünfzigtausend.',
        ],
      },
      {
        heading: 'Warum "Only" am Ende',
        paragraphs: [
          'Schecks beenden die Worte mit "Only", damit hinterher nichts hinzugefügt werden kann. Banken erwarten außerdem, dass Worte und Ziffern übereinstimmen. Weichen sie ab, kann die Bank den Scheck zurückweisen oder den Worten folgen. Prüfen Sie das Ergebnis vor dem Unterschreiben immer anhand der Regeln Ihrer eigenen Bank.',
        ],
      },
      {
        heading: 'Den Scheck ausfüllen',
        paragraphs: [
          'Schreiben Sie die Worte ganz links am Anfang der Zeile und ziehen Sie durch den ungenutzten Platz nach "Only" einen Strich, damit nichts hinzugefügt werden kann. Stellen Sie sicher, dass Worte und Ziffern genau übereinstimmen. Haben Sie sich geirrt, fragen Sie Ihre Bank, wie Sie den Scheck korrigieren oder stornieren, denn Überschreiben kann zur Ablehnung führen. Dieses Werkzeug hilft bei der Schreibweise, aber die Regeln der Bank gelten immer.',
        ],
      },
    ],
    faqs: [
      { q: 'Kommt es mit Paise und Cent zurecht?', a: 'Ja. Die zwei Ziffern nach dem Punkt werden zu Paise oder Cent, geschrieben nach "and".' },
      { q: 'Wie große Zahlen kann es schreiben?', a: 'Der internationale Stil reicht bis zu Sextillionen, der indische zählt in Crore weiter, jeder reale Betrag funktioniert also.' },
      { q: 'Wird der Betrag irgendwohin gesendet?', a: 'Nein. Die Worte entstehen beim Tippen in Ihrem Browser.' },
    ],
  },
  'how-to-convert-binary-hex-and-decimal': {
    title: 'So wandeln Sie Binär, Hex und Dezimal um',
    description: 'Rechnen Sie von Hand und mit einem Umrechner zwischen Binär, Oktal, Dezimal und Hexadezimal um, mit durchgerechneten Beispielen.',
    intro: 'Um zwischen Zahlensystemen umzurechnen, tippen Sie Ihre Zahl in ein beliebiges Feld des Zahlensysteme-Umrechners ein und lesen die anderen ab. Von Hand ist binär 1010 gleich 10 dezimal und hex FF gleich 255. Hex ist nur eine kürzere Schreibweise für Binär, vier Bit auf einmal.',
    steps: [
      'Öffnen Sie den Zahlensysteme-Umrechner.',
      'Klicken Sie in das Feld des Systems, das Sie haben (binär, oktal, dezimal oder hex), und tippen Sie die Zahl ein.',
      'Lesen Sie die anderen drei Felder ab, die sich sofort aktualisieren.',
      'Klicken Sie neben dem benötigten auf "Copy".',
    ],
    sections: [
      {
        heading: 'Wie Binär in Dezimal funktioniert',
        paragraphs: [
          'Jede Binärstelle ist eine Zweierpotenz, von rechts: 1, 2, 4, 8, 16 und so weiter. Für 1010 addieren Sie die Stellen mit einer 1: 8 + 2 = 10. Ein Byte hat acht Bit und reicht daher bis 11111111, also 255.',
        ],
      },
      {
        heading: 'Warum Programmierer Hex nutzen',
        paragraphs: [
          'Hexadezimal hat 16 Ziffern, 0 bis 9 und A bis F. Eine Hex-Ziffer sind genau vier Bit, ein Byte also immer zwei Hex-Ziffern: FF ist 11111111, also 255. Damit ist Hex eine kompakte Schreibweise für Binärdaten, Speicheradressen und Farbcodes. Ein Präfix 0x kennzeichnet in vielen Programmiersprachen eine Hex-Zahl.',
          'Der Umrechner nutzt exakte Ganzzahl-Mathematik, sehr lange Zahlen werden also ohne Rundung umgewandelt.',
        ],
      },
      {
        heading: 'Übungsbeispiele',
        paragraphs: [
          'Binär 1111 ist 15, und 101010 ist 42. Hex 1A ist 26, und dezimal 255 ist FF in Hex und 11111111 in Binär. Oktal wird heute selten genutzt, aber Unix-Dateiberechtigungen werden darin geschrieben: Oktal 755 ist dezimal 493, und jede Oktalziffer sind genau drei Bit, also ist 7 gleich 111 und 5 gleich 101. Probieren Sie jedes davon im Umrechner aus und sehen Sie zu, wie sich die anderen Felder füllen.',
        ],
      },
    ],
    faqs: [
      { q: 'Kann es negative Zahlen umrechnen?', a: 'Ja, mit einem Minuszeichen. Es zeigt keine Bitmuster im Zweierkomplement.' },
      { q: 'Akzeptiert es die Präfixe 0x oder 0b?', a: 'Ja. 0xFF im Hex-Feld wird als 255 gelesen.' },
      { q: 'Kommt es mit Brüchen zurecht?', a: 'Nein. Es ist für ganze Zahlen.' },
    ],
  },
  'how-to-read-and-write-roman-numerals': {
    title: 'So lesen und schreiben Sie römische Zahlen',
    description: 'Lernen Sie die sieben römischen Buchstaben, die Subtraktionsregel und die Grenze 3999 und rechnen Sie Zahlen in beide Richtungen um.',
    intro: 'Um eine Zahl in römischen Ziffern zu schreiben, zerlegen Sie sie in Tausender, Hunderter, Zehner und Einer und schreiben jeden mit I, V, X, L, C, D und M. 1994 ist MCMXCIV. Der Konverter Römische Zahlen macht das in beide Richtungen, für Zahlen von 1 bis 3999.',
    steps: [
      'Lernen Sie die sieben Buchstaben: I ist 1, V ist 5, X ist 10, L ist 50, C ist 100, D ist 500 und M ist 1000.',
      'Zerlegen Sie die Zahl: 1994 ist 1000 + 900 + 90 + 4.',
      'Schreiben Sie jeden Teil: M, CM, XC und IV.',
      'Setzen Sie sie zusammen: MCMXCIV. Oder tippen Sie die Zahl in den Konverter und kopieren Sie das Ergebnis.',
    ],
    sections: [
      {
        heading: 'Die Subtraktionsregel',
        paragraphs: [
          'Ein kleinerer Buchstabe vor einem größeren wird abgezogen: IV ist 4, IX ist 9, XL ist 40, XC ist 90, CD ist 400 und CM ist 900. Ein kleinerer Buchstabe nach einem größeren wird addiert: VI ist 6. Ein Buchstabe wiederholt sich höchstens dreimal hintereinander, 4 ist also IV und nicht IIII.',
        ],
      },
      {
        heading: 'Grenzen und Eigenheiten',
        paragraphs: [
          'Standardmäßige römische Ziffern haben keine Null und kein Symbol oberhalb von M, die größte Zahl ist also MMMCMXCIX, das ist 3999. Zifferblätter drucken die 4 oft als IIII, aber dieser Konverter akzeptiert nur die Standardform, um Tippfehler zu erkennen. Römische Ziffern werden weiterhin für Filmjahre, Buchkapitel, Könige und Königinnen und manche Gebäudedaten genutzt.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie lese ich MCMXCIV?', a: 'M ist 1000, CM ist 900, XC ist 90 und IV ist 4, also 1994.' },
      { q: 'Warum gibt es keine Null?', a: 'Die Römer hatten kein Symbol für die Null, deshalb beginnt der Konverter bei 1.' },
      { q: 'Funktioniert es auf einem Handy?', a: 'Ja, und es läuft vollständig in Ihrem Browser.' },
    ],
  },
  'how-to-change-text-case-camel-snake-title': {
    title: 'So ändern Sie die Groß- und Kleinschreibung: camel, snake und Title Case',
    description: 'Wechseln Sie mit einem Klick zwischen Großbuchstaben, Kleinbuchstaben, Titel, Satz, camelCase, snake_case und kebab-case.',
    intro: 'Um die Schreibweise eines Textes zu ändern, fügen Sie ihn in den Konverter Groß- und Kleinschreibung ein und klicken auf die gewünschte Variante: Großbuchstaben, Kleinbuchstaben, Titel, Satz, camelCase, PascalCase, snake_case, kebab-case oder CONSTANT_CASE. Kopieren Sie das Ergebnis mit einem Klick.',
    steps: [
      'Öffnen Sie den Konverter Groß- und Kleinschreibung und fügen Sie Ihren Text ein.',
      'Klicken Sie auf die gewünschte Variante. Das Ergebnis erscheint darunter.',
      'Prüfen Sie es. Title Case arbeitet mechanisch und schreibt auch kleine Wörter groß.',
      'Klicken Sie auf "Copy" und fügen Sie es dort ein, wo Sie es brauchen.',
    ],
    sections: [
      {
        heading: 'Schreibweisen für Texte',
        paragraphs: [
          'GROSSBUCHSTABEN dienen der Betonung oder für Abkürzungen, Kleinbuchstaben für schlichten, informellen Text. Title Case schreibt den ersten Buchstaben jedes Wortes groß, wie bei einem Buchtitel. Die Satzschreibweise schreibt nur das erste Wort jedes Satzes groß, wie im normalen Schreiben, und ist bei langen Überschriften leichter lesbar.',
        ],
      },
      {
        heading: 'Schreibweisen für Code und URLs',
        paragraphs: [
          'Programmierer verbinden Wörter ohne Leerzeichen. camelCase (helloWorld) ist bei Variablen üblich, PascalCase (HelloWorld) bei Klassennamen, snake_case (hello_world) in Python und Datenbanken, kebab-case (hello-world) in Webadressen und Dateinamen und CONSTANT_CASE für feste Werte. Der Konverter trennt Wörter an Leerzeichen, Satzzeichen und Großbuchstaben und kann so einen Stil in einen anderen ändern.',
        ],
      },
    ],
    faqs: [
      { q: 'Folgt es den Regeln von Stilrichtlinien für Titel?', a: 'Nein. Title Case schreibt hier jedes Wort groß. Stilrichtlinien lassen kleine Wörter wie "of" und "the" klein, passen Sie diese bei Bedarf von Hand an.' },
      { q: 'Funktioniert es mit Umlauten?', a: 'Ja bei Buchstaben mit Groß- und Kleinschreibung, etwa é, ü und Kyrillisch. Das türkische i mit und ohne Punkt folgt Standardregeln und kann eine manuelle Korrektur brauchen.' },
      { q: 'Wird mein Text irgendwohin gesendet?', a: 'Nein. Er wird beim Tippen in Ihrem Browser geändert.' },
    ],
  },
  'how-to-convert-hex-to-rgb-and-hsl': {
    title: 'So wandeln Sie HEX-Farben in RGB und HSL um',
    description: 'Rechnen Sie Farbcodes zwischen HEX, RGB und HSL für CSS und Designarbeit um, mit Live-Farbfeld.',
    intro: 'Um einen Farbcode umzurechnen, tippen Sie einen HEX-, RGB- oder HSL-Wert in den Farbcodes-Umrechner. Die beiden anderen aktualisieren sich, und Sie sehen die Farbe. #FFD23F ist rgb(255, 210, 63), und hsl(45, 100%, 62%) ist dieselbe Farbe.',
    steps: [
      'Öffnen Sie den Farbcodes-Umrechner.',
      'Tippen Sie einen HEX-Code in das erste Feld, mit oder ohne #, oder nutzen Sie die Farbauswahl.',
      'Lesen Sie die RGB- und HSL-Werte ab und prüfen Sie sie am Farbfeld.',
      'Klicken Sie neben dem Code, den Ihr CSS oder Ihr Designwerkzeug braucht, auf "Copy".',
    ],
    sections: [
      {
        heading: 'Wie HEX und RGB zusammenhängen',
        paragraphs: [
          'Ein HEX-Code sind drei Paare von Ziffern zur Basis 16 für Rot, Grün und Blau. #FFD23F ist FF (255) Rot, D2 (210) Grün und 3F (63) Blau. RGB schreibt dieselben drei Zahlen dezimal. Ein dreistelliger Code wie #F80 ist eine Kurzform, die jede Ziffer verdoppelt, er entspricht also #FF8800.',
        ],
      },
      {
        heading: 'Wann HSL hilft',
        paragraphs: [
          'HSL beschreibt eine Farbe durch Farbton (Position auf dem Farbkreis von 0 bis 360), Sättigung (wie lebhaft) und Helligkeit (wie hell oder dunkel). So lässt sich leicht eine hellere oder dunklere Version einer Markenfarbe erzeugen, indem man nur die Helligkeit ändert, was in HEX umständlich ist. Hin- und Rückwege über HSL können einen Wert um eins verschieben, weil HSL auf ganze Zahlen gerundet wird; HEX und RGB bleiben exakt.',
        ],
      },
    ],
    faqs: [
      { q: 'Was bedeutet 8-stelliges HEX?', a: 'Es fügt am Ende ein Alpha-Paar (Transparenz) hinzu. Dieser Konverter verarbeitet sechs- und dreistellige Codes.' },
      { q: 'Wie mache ich eine Farbe dunkler?', a: 'Senken Sie die Helligkeit in HSL und kopieren Sie dann das passende HEX oder RGB.' },
      { q: 'Wird etwas hochgeladen?', a: 'Nein. Alles wird in Ihrem Browser berechnet.' },
    ],
  },
};

export default guides;
