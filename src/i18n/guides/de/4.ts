import type { GuideSet } from '../types';

/** German guides, batch 4. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-gif-to-mp4': {
    title: 'So wandeln Sie ein GIF in MP4 um, um es zu verkleinern',
    description: 'Verkleinern Sie ein schweres animiertes GIF zu einem kleinen MP4, das schnell lädt und auf jedem Handy läuft.',
    intro: 'Um ein GIF in MP4 umzuwandeln, legen Sie das GIF im Konverter GIF in MP4 ab und klicken auf "Umwandeln". Das MP4 ist meist um ein Vielfaches kleiner und oft schärfer, weil GIF auf 256 Farben beschränkt ist und keine echte Videokompression hat.',
    steps: [
      'Öffnen Sie GIF in MP4 und legen Sie Ihr GIF im Feld ab.',
      'Klicken Sie auf "Umwandeln".',
      'Laden Sie das MP4 herunter und vergleichen Sie seine Größe mit der des GIF.',
      'Nutzen Sie das MP4 auf einer Website in einem Video-Tag mit autoplay, loop und muted, damit es sich wie ein GIF verhält.',
    ],
    sections: [
      {
        heading: 'Warum MP4 gewinnt',
        paragraphs: [
          'Ein GIF speichert jedes Bild als vollständiges Bild. MP4-Video speichert nur, was sich von einem Bild zum nächsten ändert, daher kann ein GIF mit 8 MB als MP4 oft weit unter 1 MB liegen. Auch die Farben sind besser, da Video nicht auf 256 Farben beschränkt ist.',
        ],
      },
      {
        heading: 'Worauf Sie verzichten',
        paragraphs: [
          'Ein GIF läuft von selbst in einer Schleife und erscheint überall, wo ein Bild erscheinen kann. Ein MP4 spielt einmal, es sei denn, dem Player oder der Seite wird gesagt, es zu wiederholen. Die meisten Social-Apps wiederholen kurze Clips von allein, und auf Ihrer eigenen Seite können Sie das Attribut loop hinzufügen.',
        ],
      },
      {
        heading: 'Das MP4 auf einer Website nutzen',
        paragraphs: [
          'Damit sich ein MP4 auf Ihrer eigenen Seite wie ein GIF verhält, setzen Sie es in einen Video-Tag mit den Attributen autoplay, loop, muted und playsinline. Browser erlauben Autoplay nur bei stummem Video, und playsinline verhindert, dass iPhones es im Vollbild öffnen. Das Ergebnis lädt schneller, verbraucht weniger Daten und sieht besser aus als das ursprüngliche GIF.',
        ],
      },
    ],
    faqs: [
      { q: 'Hat das MP4 Ton?', a: 'Nein. Ein GIF hat keinen Ton, es gibt also nichts zu übertragen.' },
      { q: 'Kann ich das MP4 wieder in ein GIF verwandeln?', a: 'Ja, mit Video in GIF, es wird dann aber wieder groß.' },
      { q: 'Wird das GIF hochgeladen?', a: 'Nein. Es wird im Tab Ihres Browsers umgewandelt.' },
    ],
  },
  'how-to-convert-csv-to-json': {
    title: 'So wandeln Sie CSV in JSON um',
    description: 'Verwandeln Sie eine CSV-Tabelle in Ihrem Browser in ein JSON-Array, mit der ersten Zeile als Schlüssel und Zahlen als Zahlen.',
    intro: 'Um CSV in JSON umzuwandeln, fügen Sie Ihre CSV ein oder legen die Datei im Konverter CSV in JSON ab. Die erste Zeile wird zu den Schlüsseln, jede weitere Zeile zu einem Objekt, sodass aus einer Tabelle mit Namen und Altersangaben eine Liste von Datensätzen wird.',
    steps: [
      'Stellen Sie sicher, dass die erste Zeile Ihrer CSV die Spaltennamen enthält.',
      'Öffnen Sie CSV in JSON und fügen Sie den Text ein oder legen Sie die Datei im Feld ab. Probieren Sie zuerst das Beispiel, wenn Sie die Form sehen möchten.',
      'Lesen Sie das JSON, das beim Tippen rechts erscheint.',
      'Klicken Sie auf "Download .json" oder "Copy", um es in Ihren Code oder ein API-Werkzeug einzufügen.',
    ],
    sections: [
      {
        heading: 'Wie das Ergebnis aussieht',
        paragraphs: [
          'Eine CSV mit den Spalten name, age und city wird zu einem Array von Objekten wie {"name": "Asha", "age": 29, "city": "Pune"}. Einfache Zahlen und die Wörter true und false werden zu echten JSON-Zahlen und -Booleans. Werte wie 01234 bleiben Text, damit führende Nullen in Codes und Postleitzahlen nicht verloren gehen.',
        ],
      },
      {
        heading: 'Kommas, Anführungszeichen und andere Trennzeichen',
        paragraphs: [
          'Felder können in doppelte Anführungszeichen gesetzt werden, wenn sie ein Komma oder einen Zeilenumbruch enthalten, und ein Anführungszeichen innerhalb eines Feldes wird als zwei Anführungszeichen geschrieben. Der Konverter versteht das alles. Er liest außerdem durch Semikolon, Tabulator oder senkrechten Strich getrennte Dateien, indem er die erste Zeile ansieht, was für aus Tabellenkalkulationen exportierte Dateien in Ländern mit Dezimalkomma wichtig ist.',
        ],
      },
    ],
    faqs: [
      { q: 'Was ist, wenn eine Spalte keine Überschrift hat?', a: 'Sie heißt column1, column2 und so weiter, damit keine Daten verloren gehen.' },
      { q: 'Kann ich zurück zu CSV?', a: 'Ja, mit JSON in CSV, das ein Array von Objekten in Zeilen verwandelt.' },
      { q: 'Werden meine Daten hochgeladen?', a: 'Nein. Die Umwandlung geschieht beim Tippen in Ihrem Browser.' },
    ],
  },
  'how-to-convert-json-to-csv': {
    title: 'So wandeln Sie JSON für Excel in CSV um',
    description: 'Machen Sie aus einem JSON-Array eine CSV-Tabelle, die Sie in Excel oder Google Sheets öffnen können, auch mit verschachtelten Objekten.',
    intro: 'Um JSON in CSV umzuwandeln, fügen Sie ein Array von Objekten im Konverter JSON in CSV ein. Jedes Objekt wird zu einer Zeile und jeder Schlüssel zu einer Spalte, und verschachtelte Objekte werden zu Spaltennamen mit Punkten wie address.city abgeflacht.',
    steps: [
      'Prüfen Sie, ob Ihr JSON ein Array von Objekten ist, etwa [{"a":1},{"a":2}]. Ein einzelnes Objekt funktioniert ebenfalls und ergibt eine Zeile.',
      'Öffnen Sie JSON in CSV und fügen Sie das JSON ein oder legen Sie die .json-Datei ab.',
      'Sehen Sie sich die CSV rechts an. Die Spalten werden aus allen Objekten gesammelt.',
      'Laden Sie die .csv herunter und öffnen Sie sie in Excel, oder nutzen Sie CSV in Excel für eine richtige Tabelle.',
    ],
    sections: [
      {
        heading: 'Verschachtelte Daten und fehlende Schlüssel',
        paragraphs: [
          'JSON kann Objekte in Objekten verschachteln, aber eine Tabelle hat nur Zeilen und Spalten. Der Konverter flacht jeden verschachtelten Schlüssel zu einer Spalte mit Punkt im Namen ab, sodass {"address": {"city": "Pune"}} zu einer Spalte namens address.city wird. Listen innerhalb eines Wertes bleiben als JSON-Text in einer einzelnen Zelle erhalten.',
          'Haben Objekte unterschiedliche Schlüssel, wird jeder irgendwo gefundene Schlüssel zu einer Spalte, und Zellen ohne Wert bleiben leer.',
        ],
      },
      {
        heading: 'Das Ergebnis in Excel öffnen',
        paragraphs: [
          'Excel kann einfache CSV-Dateien falsch lesen, führende Nullen entfernen oder lange Zahlen ändern. Für eine Tabelle, mit der Sie weiterarbeiten, wandeln Sie die CSV mit dem Konverter CSV in Excel in XLSX um, der Codes als Text behält.',
        ],
      },
    ],
    faqs: [
      { q: 'Was ist, wenn mein JSON ungültig ist?', a: 'Die Seite zeigt statt eines Ergebnisses eine Fehlermeldung. Suchen Sie nach fehlenden Anführungszeichen oder Kommas.' },
      { q: 'Kann ich eine riesige Datei umwandeln?', a: 'Große Dateien funktionieren, brauchen aber länger, weil Ihr Browser die Arbeit erledigt. Dateien von wenigen Megabyte sind unproblematisch.' },
      { q: 'Wird es hochgeladen?', a: 'Nein. Alles läuft auf Ihrem Gerät.' },
    ],
  },
  'how-to-save-an-excel-sheet-as-csv-with-accents': {
    title: 'So speichern Sie Excel als CSV und behalten Umlaute korrekt',
    description: 'Wandeln Sie ein Excel-Blatt in CSV um und behalten Sie Akzente, türkische Buchstaben und Symbole mit einer UTF-8-Markierung korrekt.',
    intro: 'Um Excel in CSV umzuwandeln, legen Sie Ihre .xlsx-Datei im Konverter Excel in CSV ab und lassen die UTF-8-Markierung angehakt. Jedes Blatt wird zu einer eigenen CSV, und die Markierung sagt Excel, dass die Datei UTF-8 ist, damit Umlaute und nicht-englische Buchstaben korrekt bleiben.',
    steps: [
      'Öffnen Sie Excel in CSV und legen Sie Ihre .xlsx-, .xls- oder .ods-Datei ab.',
      'Lassen Sie das Kästchen angehakt, um eine UTF-8-Markierung hinzuzufügen, wenn Sie die CSV wieder in Excel öffnen. Haken Sie es für Datenbanken und Skripte ab, die die Markierung nicht mögen.',
      'Klicken Sie auf "Umwandeln".',
      'Laden Sie die CSV herunter. Eine Arbeitsmappe mit mehreren Blättern ergibt eine CSV pro Blatt, benannt nach dem Blatt.',
    ],
    sections: [
      {
        heading: 'Warum Umlaute kaputtgehen',
        paragraphs: [
          'CSV ist reiner Text, und Text kann in verschiedenen Kodierungen gespeichert werden. Excel rät, wenn Sie eine CSV öffnen. Ist die Datei UTF-8, Excel nimmt aber eine ältere Windows-Kodierung an, erscheinen Buchstaben wie é, ü, ş oder ı als seltsame Zeichen. Eine winzige Markierung am Dateianfang beseitigt das Raten.',
        ],
      },
      {
        heading: 'Was CSV weglässt',
        paragraphs: [
          'CSV enthält nur Werte: keine Formeln, Farben, Diagramme oder Formatierung. Sie erhalten die Werte, die das Blatt zeigt, wobei Datums- und Zahlenangaben so geschrieben werden, wie Excel sie anzeigt. Passwortgeschützte Arbeitsmappen lassen sich nicht öffnen. Brauchen Sie die Formatierung, behalten Sie die XLSX.',
        ],
      },
    ],
    faqs: [
      { q: 'Welches Trennzeichen wird verwendet?', a: 'Ein Komma, mit Anführungszeichen um jeden Wert, der ein Komma, ein Anführungszeichen oder einen Zeilenumbruch enthält.' },
      { q: 'Meine CSV zeigt immer noch falsche Buchstaben. Was nun?', a: 'Die Datei hat womöglich eine andere Kodierung. Nutzen Sie die TXT-Kodierung reparieren, um sie mit der richtigen zu lesen und eine saubere UTF-8-Kopie zu speichern.' },
      { q: 'Wird die Arbeitsmappe hochgeladen?', a: 'Nein. Sie wird im Tab Ihres Browsers gelesen und umgewandelt.' },
    ],
  },
  'how-to-convert-yaml-to-json-and-back': {
    title: 'So wandeln Sie YAML in JSON um und zurück',
    description: 'Wechseln Sie in Ihrem Browser mit Konfigurationen zwischen YAML und JSON und vermeiden Sie die üblichen Fallen bei Einrückung und Kommentaren.',
    intro: 'Um YAML in JSON umzuwandeln, fügen Sie das YAML im Konverter YAML in JSON ein und kopieren das übersichtlich formatierte JSON. Für die andere Richtung fügen Sie JSON in JSON in YAML ein. Die Daten bleiben gleich; nur die Schreibweise ändert sich.',
    steps: [
      'Fügen Sie Ihr YAML im Konverter YAML in JSON ein oder legen Sie eine .yaml- oder .yml-Datei ab.',
      'Sehen Sie einen Fehler, prüfen Sie die Einrückung. YAML nutzt Leerzeichen, niemals Tabulatoren, um Verschachtelung zu zeigen.',
      'Kopieren oder laden Sie das JSON herunter.',
      'Für die Gegenrichtung fügen Sie JSON in JSON in YAML ein und erhalten lesbares YAML mit zwei Leerzeichen Einrückung.',
    ],
    sections: [
      {
        heading: 'Was verloren geht',
        paragraphs: [
          'Kommentare gibt es in YAML, nicht aber in JSON, sie werden also bei der Umwandlung in JSON verworfen und lassen sich nicht zurückholen. Anker und Aliase (die Kürzel &name und *name) werden zu gewöhnlichen wiederholten Werten aufgelöst.',
          'Der Konverter liest ein YAML-Dokument. Hat eine Datei mehrere durch drei Bindestriche getrennte Dokumente, wandeln Sie jedes einzeln um.',
        ],
      },
      {
        heading: 'Warum Menschen das Format wechseln',
        paragraphs: [
          'YAML ist leichter zu lesen und von Hand zu bearbeiten, weshalb Konfigurationsdateien es nutzen. JSON ist strenger und wird von APIs und den meisten Programmiersprachen nativ verarbeitet. Die Umwandlung erlaubt es, eine Konfiguration in einem JSON-Werkzeug zu prüfen oder eine API-Antwort in eine lesbare Datei zu verwandeln.',
        ],
      },
      {
        heading: 'Das Ergebnis prüfen',
        paragraphs: [
          'Sehen Sie sich nach der Umwandlung Werte an, die YAML als Zahlen lesen könnte. Eine Version ohne Anführungszeichen wie 1.10 wird als Zahl 1,1 gelesen, und ein Code wie 08 kann seine Null verlieren, setzen Sie Versionsangaben und Codes im YAML daher in Anführungszeichen. Der Konverter zeigt genau, was ein YAML-Parser sieht, und ist damit ein schneller Weg, solche Überraschungen zu finden, bevor sie ein echtes System erreichen.',
        ],
      },
    ],
    faqs: [
      { q: 'Warum gibt mein YAML einen Fehler aus?', a: 'Die häufigste Ursache ist ein Tabulator als Einrückung oder uneinheitliche Einrückung. Nutzen Sie Leerzeichen und halten Sie verschachtelte Elemente ausgerichtet.' },
      { q: 'Werden Zahlen und Booleans richtig typisiert?', a: 'Ja. Werte wie 42, 3.5, true und null werden zu echten JSON-Typen.' },
      { q: 'Wird etwas hochgeladen?', a: 'Nein. Die Umwandlung läuft im Tab Ihres Browsers.' },
    ],
  },
};

export default guides;
