import type { GuideSet } from '../types';

/** German guides, batch 8. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-miles-to-kilometres': {
    title: 'Meilen in Kilometer umrechnen (und zurück)',
    description: 'Rechnen Sie Meilen mit dem exakten Faktor in km um, mit einem schnellen Kopfrechentrick und einem Umrechner, der auch Fuß und Yards kann.',
    intro: 'Um Meilen in Kilometer umzurechnen, multiplizieren Sie mit 1,609344. 10 Meilen sind also 16,09 km. Zurück teilen Sie die Kilometer durch 1,609344 oder multiplizieren mit 0,621371. Der Längen-Umrechner kann auch Fuß, Zoll, Yards und Seemeilen.',
    steps: [
      'Notieren Sie die Strecke mit ihrer Einheit, zum Beispiel 26,2 Meilen.',
      'Multiplizieren Sie mit 1,609344: 26,2 × 1,609344 = 42,16 km, ein Marathon.',
      'Von Kilometern zu Meilen multiplizieren Sie mit 0,621371: 5 km × 0,621371 = 3,11 Meilen.',
      'Oder nutzen Sie den Längen-Umrechner und tauschen Sie die Einheiten mit dem Pfeil-Button.',
    ],
    sections: [
      {
        heading: 'Ein Kopfrechentrick',
        paragraphs: [
          'Aufeinanderfolgende Zahlen der Fibonacci-Folge (1, 1, 2, 3, 5, 8, 13, 21) liegen nahe an einem Meile-Kilometer-Paar: 5 Meilen sind etwa 8 km, 8 Meilen etwa 13 km und 13 Meilen etwa 21 km. Für andere Zahlen multiplizieren Sie die Meilen mit 1,6, das ist auf einen Bruchteil eines Prozents genau.',
        ],
      },
      {
        heading: 'Andere Meilen und Geschwindigkeiten',
        paragraphs: [
          'Eine Seemeile, die auf See und in der Luftfahrt verwendet wird, sind genau 1852 Meter, etwa 1,15 Landmeilen. Geschwindigkeiten rechnen sich genauso um: 60 Meilen pro Stunde sind etwa 96,6 km/h, und 100 km/h sind etwa 62,1 mph. Der Geschwindigkeits-Umrechner kann diese und Knoten.',
        ],
      },
      {
        heading: 'Laufen und Radfahren',
        paragraphs: [
          'Ein 5-K-Lauf sind etwa 3,1 Meilen, ein 10-K-Lauf 6,2 Meilen, ein Halbmarathon 13,1 Meilen (21,1 km) und ein Marathon 26,2 Meilen (42,2 km). Zeiten pro Strecke rechnen Sie durch Teilen um: 8 Minuten pro Meile sind etwa 4 Minuten 58 Sekunden pro Kilometer, derselbe Lauf wird in Kilometern also als schnellere Zahl angegeben.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie viele km sind 5 Meilen?', a: 'Etwa 8,05 km.' },
      { q: 'Wie viele Meilen sind 10 km?', a: 'Etwa 6,21 Meilen.' },
      { q: 'Ist eine Meile immer gleich?', a: 'Die in den USA und im Vereinigten Königreich verwendete Landmeile sind immer 1609,344 Meter. Die Seemeile ist mit 1852 Metern anders.' },
    ],
  },
  'how-to-convert-feet-and-inches-to-cm': {
    title: 'Fuß und Zoll in cm umrechnen (Körpergröße)',
    description: 'Rechnen Sie eine Größe wie 5 ft 7 in in Zentimeter um, und Zoll mit dem exakten Faktor 2,54 in cm.',
    intro: 'Um Fuß und Zoll in Zentimeter umzurechnen, machen Sie aus der Größe Zoll (Fuß × 12, plus die Zoll) und multiplizieren mit 2,54. 5 ft 7 in sind also 67 Zoll, das sind 170,18 cm. Der Längen-Umrechner erledigt das für jede einzelne Einheit in einem Schritt.',
    steps: [
      'Notieren Sie die Größe: 5 ft 7 in.',
      'Wandeln Sie Fuß in Zoll um: 5 × 12 = 60, dann addieren Sie 7 und erhalten 67 Zoll.',
      'Multiplizieren Sie mit 2,54: 67 × 2,54 = 170,18 cm.',
      'Zur Kontrolle geben Sie 67 in den Längen-Umrechner ein, mit Zoll als From und Zentimetern als To.',
    ],
    sections: [
      {
        heading: 'Der exakte Faktor',
        paragraphs: [
          'Ein Zoll ist als genau 2,54 Zentimeter definiert, die Umrechnung von Zoll in cm ist also exakt und keine Näherung. Ein Fuß sind demnach genau 30,48 cm. Diese Definitionen gelten seit 1959, die Umrechnung ändert sich also nie.',
        ],
      },
      {
        heading: 'Von cm zurück zu Fuß',
        paragraphs: [
          'Teilen Sie Zentimeter durch 2,54, um Zoll zu erhalten, dann durch 12 für die Fuß, und behalten Sie den Rest als Zoll. Für 175 cm: 175 ÷ 2,54 sind 68,9 Zoll, das sind 5 ft 8,9 in, meist als 5 ft 9 in geschrieben. Größen in Formularen werden oft nur in einer Einheit verlangt, prüfen Sie also, welche das Formular möchte.',
        ],
      },
      {
        heading: 'Eine Schätzung im Kopf',
        paragraphs: [
          'Jeder Fuß sind etwa 30,5 cm und jeder Zoll etwa 2,5 cm, 5 ft 7 in sind also grob 152 plus 18, oder etwa 170 cm. Das ist für eine schnelle Kontrolle nah genug. Für Pässe, medizinische Formulare und Bewerbungen nutzen Sie den exakten Wert und runden nur dann auf ganze Zentimeter, wenn das Formular es verlangt.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie groß sind 6 Fuß in cm?', a: '182,88 cm.' },
      { q: 'Wie viele cm sind 5 ft 4 in?', a: '162,56 cm.' },
      { q: 'Rundet er das Ergebnis?', a: 'Er zeigt bis zu 10 signifikante Stellen, Sie können also selbst auf ganze Zentimeter runden.' },
    ],
  },
  'how-to-convert-square-feet-to-square-metres': {
    title: 'Quadratfuß in Quadratmeter umrechnen',
    description: 'Rechnen Sie sq ft in sq m um, für Wohnungen und Grundstücke, mit dem exakten Faktor und den Flächeneinheiten in Immobilienanzeigen.',
    intro: 'Um Quadratfuß in Quadratmeter umzurechnen, teilen Sie durch 10,7639 oder multiplizieren mit 0,092903. Eine Wohnung mit 1000 sq ft hat also etwa 92,9 Quadratmeter. Der Flächen-Umrechner kann auch Acres, Hektar, Quadratyards und Quadratkilometer.',
    steps: [
      'Notieren Sie die Fläche mit ihrer Einheit, zum Beispiel 1200 sq ft.',
      'Multiplizieren Sie mit 0,092903: 1200 × 0,092903 = 111,5 Quadratmeter.',
      'Von Quadratmetern zu Quadratfuß multiplizieren Sie mit 10,7639.',
      'Oder öffnen Sie den Flächen-Umrechner und wählen Quadratfuß und Quadratmeter.',
    ],
    sections: [
      {
        heading: 'Warum der Längenfaktor nicht reicht',
        paragraphs: [
          'Ein Fuß sind 0,3048 Meter, ein Quadratfuß also 0,3048 × 0,3048 = 0,092903 Quadratmeter. Der Umrechnungsfaktor für Flächen ist das Quadrat des Längenfaktors. Ein häufiger Fehler ist, mit 0,3048 zu multiplizieren und ein mehr als dreimal zu großes Ergebnis zu erhalten.',
        ],
      },
      {
        heading: 'Nutzfläche und Bruttofläche',
        paragraphs: [
          'Immobilienanzeigen in Indien nennen Carpet Area, Built-up Area oder Super Built-up Area, und die unterscheiden sich bei derselben Wohnung. Die Umrechnung in Quadratmeter ist für alle gleich, achten Sie aber darauf, Gleiches mit Gleichem zu vergleichen. Größere Grundstücke werden oft in Acres (43.560 sq ft) oder Hektar (10.000 Quadratmeter, etwa 2,47 Acres) angegeben.',
        ],
      },
      {
        heading: 'Durchgerechnete Beispiele',
        paragraphs: [
          'Eine Wohnung mit 900 sq ft hat etwa 83,6 Quadratmeter. Ein Grundstück von 30 mal 40 Fuß hat 1200 sq ft, etwa 111,5 Quadratmeter. Ein Acre sind 43.560 sq ft, etwa 4047 Quadratmeter. Zwei oder drei davon im Umrechner durchzuspielen ist ein guter Weg, ein Gefühl für die Größen zu bekommen, bevor Sie Anzeigen in verschiedenen Einheiten vergleichen.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie viele sq ft hat ein Quadratmeter?', a: 'Etwa 10,7639.' },
      { q: 'Wie viele Quadratmeter sind 500 sq ft?', a: 'Etwa 46,45 Quadratmeter.' },
      { q: 'Sind indische Grundstückseinheiten enthalten?', a: 'Ja, der indische Grundstücks-Umrechner ergänzt Gaj, Bigha, Guntha und mehr, mit dem Hinweis, dass einige je nach Bundesstaat variieren.' },
    ],
  },
  'how-to-convert-litres-to-gallons-us-and-uk': {
    title: 'Liter in Gallonen umrechnen (US und UK)',
    description: 'Rechnen Sie Liter in US- und UK-Gallonen um, und warum Meilen pro Gallone in den beiden Ländern unterschiedlich sind.',
    intro: 'Um Liter in US-Gallonen umzurechnen, teilen Sie durch 3,78541. Für UK-Gallonen (Imperial) teilen Sie durch 4,54609. 10 Liter sind also etwa 2,64 US-Gallonen oder 2,20 UK-Gallonen. Der Volumen-Umrechner hat beide und deckt auch Tassen, Pints und Milliliter ab.',
    steps: [
      'Entscheiden Sie, welche Gallone Sie brauchen. US-Rezepte und Spritpreise nutzen die US-Gallone, britische die Imperial-Gallone.',
      'Teilen Sie Liter durch 3,78541 für US-Gallonen oder durch 4,54609 für UK-Gallonen.',
      'Von Gallonen zu Litern multiplizieren Sie mit denselben Zahlen.',
      'Oder öffnen Sie den Volumen-Umrechner und wählen Gallon (US) oder Gallon (UK).',
    ],
    sections: [
      {
        heading: 'Warum es zwei Gallonen gibt',
        paragraphs: [
          'Die US-Gallone stammt von der alten Weingallone mit 231 Kubikzoll ab. Die UK-Gallone wurde 1824 als Volumen von zehn Pfund Wasser definiert und ist heute auf genau 4,54609 Liter festgelegt, etwa 20 Prozent größer. Pint, Quart und Tasse folgen derselben Aufteilung, ein UK-Pint ist also größer als ein US-Pint.',
        ],
      },
      {
        heading: 'Kraftstoffverbrauch',
        paragraphs: [
          'Weil die Gallonen verschieden sind, sind es auch die Meilen pro Gallone. Ein Auto mit 30 mpg im Vereinigten Königreich kommt nach US-Maß auf etwa 25 mpg. Wenn Sie den Verbrauch aus zwei Ländern vergleichen, rechnen Sie stattdessen in Liter pro 100 km um, das ist überall gleich. Die hier verwendeten Küchentassen sind die US-Tasse mit etwa 236,6 ml.',
        ],
      },
      {
        heading: 'Kochen und Tanken',
        paragraphs: [
          'Ein US-Pint sind 473 ml, ein UK-Pint aber 568 ml, ein Rezept aus einem Land kann im anderen also misslingen. Beim Kraftstoff fasst ein 50-Liter-Tank etwa 13,2 US-Gallonen oder etwa 11 UK-Gallonen. Wenn ein Rezept oder ein Fahrzeughandbuch nicht sagt, welche Gallone oder welches Pint gemeint ist, prüfen Sie, für welches Land es geschrieben wurde.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie viele Liter hat eine US-Gallone?', a: '3,78541 Liter.' },
      { q: 'Wie viele Liter hat eine UK-Gallone?', a: '4,54609 Liter.' },
      { q: 'Wie viele ml hat eine Tasse?', a: 'Etwa 236,6 ml bei der hier verwendeten US-Tasse.' },
    ],
  },
  'how-to-convert-km-h-to-mph': {
    title: 'km/h in mph umrechnen (und Knoten)',
    description: 'Rechnen Sie Kilometer pro Stunde in Meilen pro Stunde, Meter pro Sekunde und Knoten um, mit einer schnellen Schätzmethode.',
    intro: 'Um km/h in mph umzurechnen, teilen Sie durch 1,609344 oder multiplizieren mit 0,621371. 100 km/h sind also etwa 62,1 mph. Der Geschwindigkeits-Umrechner liefert auch Meter pro Sekunde, Fuß pro Sekunde, Knoten und Mach.',
    steps: [
      'Notieren Sie die Geschwindigkeit mit ihrer Einheit, zum Beispiel 120 km/h.',
      'Multiplizieren Sie mit 0,621371: 120 × 0,621371 = 74,6 mph.',
      'Von mph zu km/h multiplizieren Sie mit 1,609344: 60 mph sind 96,6 km/h.',
      'Oder nutzen Sie den Geschwindigkeits-Umrechner und wählen die beiden Einheiten.',
    ],
    sections: [
      {
        heading: 'Schnelle Schätzungen',
        paragraphs: [
          'Um km/h im Kopf in mph umzurechnen, multiplizieren Sie mit 0,6: 100 km/h sind etwa 60 mph, ein wenig zu niedrig, aber gut, um ein Tempolimit einzuschätzen. In die andere Richtung multiplizieren Sie mph mit 1,6, oder halbieren und addieren etwas mehr als die Hälfte. Straßenschilder im Vereinigten Königreich und in den USA nutzen mph, die meisten anderen Länder km/h.',
        ],
      },
      {
        heading: 'Meter pro Sekunde und Knoten',
        paragraphs: [
          'Teilen Sie km/h durch 3,6, um Meter pro Sekunde zu erhalten: 36 km/h sind 10 m/s. Ein Knoten ist eine Seemeile pro Stunde, das sind genau 1,852 km/h, 20 Knoten sind also etwa 37 km/h. Schiffe und Flugzeuge nutzen Knoten, und Wetterberichte geben Wind manchmal darin an.',
        ],
      },
      {
        heading: 'Häufige Tempolimits',
        paragraphs: [
          'Ein Limit von 30 mph sind etwa 48 km/h, und 50 km/h sind etwa 31 mph. Ein Limit von 70 mph sind etwa 113 km/h, während ein Autobahn-Limit von 120 km/h etwa 75 mph und 130 km/h etwa 81 mph sind. Ein paar davon zu kennen hilft, wenn Sie in einem anderen Land einen Mietwagen fahren und der Tacho nur eine Einheit zeigt.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie viel sind 60 mph in km/h?', a: 'Etwa 96,6 km/h.' },
      { q: 'Wie viel sind 100 km/h in mph?', a: 'Etwa 62,1 mph.' },
      { q: 'Was ist Mach 1?', a: 'Etwa 340 m/s auf Meereshöhe, das nutzt der Umrechner. Es ändert sich mit Temperatur und Höhe.' },
    ],
  },
  'how-to-convert-psi-to-bar-tyre-pressure': {
    title: 'psi in bar umrechnen für den Reifendruck',
    description: 'Rechnen Sie psi in bar, kPa und Atmosphären um, mit typischen Pkw-Reifendrücken und einem Hinweis, wie Sie Ihren eigenen prüfen.',
    intro: 'Um psi in bar umzurechnen, teilen Sie durch 14,5038. 32 psi sind also etwa 2,2 bar. Zurück multiplizieren Sie bar mit 14,5038. Der Druck-Umrechner kann auch Pascal, Kilopascal, Atmosphären und mmHg.',
    steps: [
      'Notieren Sie den Druck mit seiner Einheit, zum Beispiel 32 psi.',
      'Teilen Sie durch 14,5038: 32 ÷ 14,5038 = 2,21 bar.',
      'Für kPa multiplizieren Sie psi mit 6,895: 32 psi sind etwa 220,6 kPa.',
      'Oder öffnen Sie den Druck-Umrechner und wählen die beiden Einheiten.',
    ],
    sections: [
      {
        heading: 'Reifendrücke',
        paragraphs: [
          'Pkw-Reifen werden üblicherweise auf etwa 30 bis 35 psi gefüllt, das sind grob 2,1 bis 2,4 bar oder 210 bis 240 kPa. Nutzen Sie immer den Wert auf dem Aufkleber im Türrahmen der Fahrerseite oder im Handbuch, denn er hängt vom Auto und von der Beladung ab. Der Druck sollte bei kalten Reifen geprüft werden.',
        ],
      },
      {
        heading: 'Wie die Einheiten zusammenhängen',
        paragraphs: [
          'Ein bar sind 100.000 Pascal oder 100 kPa und liegt nahe am normalen Luftdruck. Eine Standardatmosphäre sind 101.325 Pascal, etwa 1,013 bar oder 14,7 psi. Wetter und Blutdruck nutzen Millimeter Quecksilbersäule, wobei 760 mmHg eine Standardatmosphäre sind.',
        ],
      },
      {
        heading: 'Wo Druck sonst noch vorkommt',
        paragraphs: [
          'Rennradreifen werden üblicherweise auf etwa 80 bis 130 psi gepumpt, das sind grob 5,5 bis 9 bar, Mountainbikes nutzen deutlich weniger. Prüfen Sie immer das auf der Reifenflanke aufgedruckte Maximum. Reserveräder sowie manche Transporter und beladene Autos brauchen andere Drücke als der übliche Pkw-Wert, lesen Sie also den Aufkleber Ihres Fahrzeugs.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie viele psi sind 2 bar?', a: 'Etwa 29 psi.' },
      { q: 'Ist bar oder kPa an Zapfsäulen häufiger?', a: 'Das hängt vom Land ab. Viele Tankstellen-Luftpumpen zeigen psi, bar und kPa nebeneinander.' },
      { q: 'Ist der Überdruck anders?', a: 'Reifenmanometer zeigen den Druck über der Umgebungsluft. Der Umrechner ändert nur Einheiten und addiert oder entfernt keinen Luftdruck.' },
    ],
  },
};

export default guides;
