import type { GuideSet } from '../types';

/** French guides, batch 8. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-miles-to-kilometres': {
    title: 'Comment convertir des miles en kilomètres (et inversement)',
    description: 'Convertissez des miles en km avec le facteur exact, une astuce mentale rapide et un convertisseur qui gère aussi les pieds et les yards.',
    intro: 'Pour convertir des miles en kilomètres, multipliez par 1,609344. Ainsi, 10 miles font 16,09 km. Pour revenir, divisez les kilomètres par 1,609344 ou multipliez par 0,621371. Le convertisseur de longueurs gère aussi les pieds, les pouces, les yards et les milles marins.',
    steps: [
      'Notez la distance avec son unité, par exemple 26,2 miles.',
      'Multipliez par 1,609344 : 26,2 × 1,609344 = 42,16 km, un marathon.',
      'Pour passer des kilomètres aux miles, multipliez par 0,621371 : 5 km × 0,621371 = 3,11 miles.',
      'Ou utilisez le convertisseur de longueurs et échangez les unités avec le bouton flèche.',
    ],
    sections: [
      {
        heading: 'Une astuce mentale',
        paragraphs: [
          'Les nombres consécutifs de la suite de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21) sont proches d’un couple mile-kilomètre : 5 miles font environ 8 km, 8 miles environ 13 km et 13 miles environ 21 km. Pour d’autres nombres, multipliez les miles par 1,6, ce qui est exact à une fraction de pour cent près.',
        ],
      },
      {
        heading: 'Autres miles et vitesses',
        paragraphs: [
          'Un mille marin, utilisé en mer et dans les airs, fait exactement 1852 mètres, soit environ 1,15 mile terrestre. Les vitesses se convertissent de la même façon : 60 miles par heure font environ 96,6 km/h, et 100 km/h environ 62,1 mph. Le convertisseur de vitesses gère celles-ci et les nœuds.',
        ],
      },
      {
        heading: 'Course à pied et vélo',
        paragraphs: [
          'Une course de 5K fait environ 3,1 miles, un 10K fait 6,2 miles, un semi-marathon fait 13,1 miles (21,1 km) et un marathon fait 26,2 miles (42,2 km). Les allures se convertissent en divisant : une allure de 8 minutes par mile fait environ 4 minutes 58 secondes par kilomètre, si bien que la même course s’exprime par un nombre plus rapide en kilomètres.',
        ],
      },
    ],
    faqs: [
      { q: 'Combien de km font 5 miles ?', a: 'Environ 8,05 km.' },
      { q: 'Combien de miles font 10 km ?', a: 'Environ 6,21 miles.' },
      { q: 'Un mile est-il toujours le même ?', a: 'Le mile terrestre utilisé aux États-Unis et au Royaume-Uni fait toujours 1609,344 mètres. Le mille marin est différent, avec 1852 mètres.' },
    ],
  },
  'how-to-convert-feet-and-inches-to-cm': {
    title: 'Comment convertir des pieds et des pouces en cm (taille)',
    description: 'Convertissez une taille comme 5 ft 7 in en centimètres, et des pouces en cm avec le facteur exact de 2,54.',
    intro: 'Pour convertir des pieds et des pouces en centimètres, transformez la taille en pouces (pieds × 12, plus les pouces) et multipliez par 2,54. Ainsi, 5 ft 7 in font 67 pouces, soit 170,18 cm. Le convertisseur de longueurs le fait en une seule étape pour n’importe quelle unité isolée.',
    steps: [
      'Notez la taille : 5 ft 7 in.',
      'Transformez les pieds en pouces : 5 × 12 = 60, puis ajoutez 7 pour obtenir 67 pouces.',
      'Multipliez par 2,54 : 67 × 2,54 = 170,18 cm.',
      'Pour vérifier, tapez 67 dans le convertisseur de longueurs avec les pouces en From et les centimètres en To.',
    ],
    sections: [
      {
        heading: 'Le facteur exact',
        paragraphs: [
          'Un pouce est défini comme exactement 2,54 centimètres : des pouces en cm, c’est donc exact, pas une approximation. Un pied fait par conséquent exactement 30,48 cm. Ces définitions sont fixées depuis 1959, donc la conversion ne change jamais.',
        ],
      },
      {
        heading: 'Des cm vers les pieds',
        paragraphs: [
          'Divisez les centimètres par 2,54 pour obtenir des pouces, puis divisez par 12 pour les pieds et gardez le reste en pouces. Pour 175 cm : 175 ÷ 2,54 font 68,9 pouces, soit 5 ft 8,9 in, généralement écrit 5 ft 9 in. Les tailles sur les formulaires sont souvent demandées dans une seule unité : vérifiez donc laquelle le formulaire veut.',
        ],
      },
      {
        heading: 'Une estimation mentale',
        paragraphs: [
          'Chaque pied fait environ 30,5 cm et chaque pouce environ 2,5 cm : 5 ft 7 in font donc à peu près 152 plus 18, soit environ 170 cm. C’est assez proche pour un contrôle rapide. Pour les passeports, les formulaires médicaux et les candidatures, utilisez le chiffre exact et n’arrondissez au centimètre entier que si le formulaire le demande.',
        ],
      },
    ],
    faqs: [
      { q: 'Combien font 6 pieds en cm ?', a: '182,88 cm.' },
      { q: 'Combien de cm font 5 ft 4 in ?', a: '162,56 cm.' },
      { q: 'Arrondit-il la réponse ?', a: 'Il affiche jusqu’à 10 chiffres significatifs : vous pouvez donc arrondir vous-même au centimètre entier.' },
    ],
  },
  'how-to-convert-square-feet-to-square-metres': {
    title: 'Comment convertir des pieds carrés en mètres carrés',
    description: 'Convertissez des sq ft en sq m pour des appartements et des terrains, avec le facteur exact et les unités de surface des annonces immobilières.',
    intro: 'Pour convertir des pieds carrés en mètres carrés, divisez par 10,7639 ou multipliez par 0,092903. Ainsi, un appartement de 1000 sq ft fait environ 92,9 mètres carrés. Le convertisseur de surfaces gère aussi les acres, les hectares, les yards carrés et les kilomètres carrés.',
    steps: [
      'Notez la surface avec son unité, par exemple 1200 sq ft.',
      'Multipliez par 0,092903 : 1200 × 0,092903 = 111,5 mètres carrés.',
      'Pour passer des mètres carrés aux pieds carrés, multipliez par 10,7639.',
      'Ou ouvrez le convertisseur de surfaces et choisissez pied carré et mètre carré.',
    ],
    sections: [
      {
        heading: 'Pourquoi le facteur de longueur ne suffit pas',
        paragraphs: [
          'Un pied fait 0,3048 mètre : un pied carré fait donc 0,3048 × 0,3048 = 0,092903 mètre carré. Le facteur de conversion de surface est le carré du facteur de longueur. Une erreur courante consiste à multiplier par 0,3048 et à obtenir une réponse plus de trois fois trop grande.',
        ],
      },
      {
        heading: 'Surface utile et surface construite',
        paragraphs: [
          'Les annonces immobilières en Inde indiquent la carpet area, la built-up area ou la super built-up area, et elles diffèrent pour un même appartement. La conversion en mètres carrés est la même pour toutes, mais assurez-vous de comparer des choses comparables. Les grands terrains sont souvent en acres (43 560 sq ft) ou en hectares (10 000 mètres carrés, environ 2,47 acres).',
        ],
      },
      {
        heading: 'Exemples détaillés',
        paragraphs: [
          'Un appartement de 900 sq ft fait environ 83,6 mètres carrés. Un terrain de 30 sur 40 pieds fait 1200 sq ft, soit environ 111,5 mètres carrés. Un acre fait 43 560 sq ft, soit environ 4047 mètres carrés. Faire deux ou trois de ces calculs dans le convertisseur est une bonne façon de se faire une idée des tailles avant de comparer des annonces dans des unités différentes.',
        ],
      },
    ],
    faqs: [
      { q: 'Combien de sq ft dans un mètre carré ?', a: 'Environ 10,7639.' },
      { q: 'Combien de mètres carrés font 500 sq ft ?', a: 'Environ 46,45 mètres carrés.' },
      { q: 'Inclut-il les unités de terrain indiennes ?', a: 'Oui, le convertisseur d’unités de terrain indiennes ajoute le gaj, le bigha, le guntha et plus, avec une note précisant que certaines varient selon l’État.' },
    ],
  },
  'how-to-convert-litres-to-gallons-us-and-uk': {
    title: 'Comment convertir des litres en gallons (États-Unis ou Royaume-Uni)',
    description: 'Convertissez des litres en gallons américains et britanniques, et voyez pourquoi les miles par gallon diffèrent entre les deux pays.',
    intro: 'Pour convertir des litres en gallons américains, divisez par 3,78541. Pour passer en gallons britanniques (impériaux), divisez par 4,54609. Ainsi, 10 litres font environ 2,64 gallons américains ou 2,20 gallons britanniques. Le convertisseur de volumes a les deux et couvre aussi les tasses, les pintes et les millilitres.',
    steps: [
      'Décidez quel gallon il vous faut. Les recettes et les prix du carburant américains utilisent le gallon américain ; les britanniques utilisent le gallon impérial.',
      'Divisez les litres par 3,78541 pour des gallons américains, ou par 4,54609 pour des gallons britanniques.',
      'Pour passer des gallons aux litres, multipliez par les mêmes nombres.',
      'Ou ouvrez le convertisseur de volumes et choisissez Gallon (US) ou Gallon (UK).',
    ],
    sections: [
      {
        heading: 'Pourquoi il existe deux gallons',
        paragraphs: [
          'Le gallon américain descend de l’ancien gallon de vin de 231 pouces cubes. Le gallon britannique a été défini en 1824 comme le volume de dix livres d’eau et est aujourd’hui fixé à exactement 4,54609 litres, soit environ 20 pour cent de plus. La pinte, le quart et la tasse suivent la même division : une pinte britannique est donc plus grande qu’une pinte américaine.',
        ],
      },
      {
        heading: 'Consommation de carburant',
        paragraphs: [
          'Comme les gallons diffèrent, les miles par gallon aussi. Une voiture annoncée à 30 mpg au Royaume-Uni fait environ 25 mpg à la mesure américaine. Si vous comparez la consommation de deux pays, convertissez en litres aux 100 km, qui est identique partout. Les tasses de cuisine utilisées ici sont la tasse américaine d’environ 236,6 ml.',
        ],
      },
      {
        heading: 'Cuisine et carburant',
        paragraphs: [
          'Une pinte américaine fait 473 ml mais une pinte britannique fait 568 ml : une recette d’un pays peut donc rater dans l’autre. Pour le carburant, un réservoir de 50 litres contient environ 13,2 gallons américains ou environ 11 gallons britanniques. Quand une recette ou un manuel de voiture ne dit pas de quel gallon ou de quelle pinte il s’agit, vérifiez pour quel pays il a été écrit.',
        ],
      },
    ],
    faqs: [
      { q: 'Combien de litres y a-t-il dans un gallon américain ?', a: '3,78541 litres.' },
      { q: 'Combien de litres y a-t-il dans un gallon britannique ?', a: '4,54609 litres.' },
      { q: 'Combien de ml y a-t-il dans une tasse ?', a: 'Environ 236,6 ml pour la tasse américaine utilisée ici.' },
    ],
  },
  'how-to-convert-km-h-to-mph': {
    title: 'Comment convertir des km/h en mph (et en nœuds)',
    description: 'Convertissez des kilomètres par heure en miles par heure, mètres par seconde et nœuds, avec un moyen rapide d’estimer.',
    intro: 'Pour convertir des km/h en mph, divisez par 1,609344 ou multipliez par 0,621371. Ainsi, 100 km/h font environ 62,1 mph. Le convertisseur de vitesses donne aussi les mètres par seconde, les pieds par seconde, les nœuds et le Mach.',
    steps: [
      'Notez la vitesse avec son unité, par exemple 120 km/h.',
      'Multipliez par 0,621371 : 120 × 0,621371 = 74,6 mph.',
      'Pour passer des mph aux km/h, multipliez par 1,609344 : 60 mph font 96,6 km/h.',
      'Ou utilisez le convertisseur de vitesses et choisissez les deux unités.',
    ],
    sections: [
      {
        heading: 'Estimations rapides',
        paragraphs: [
          'Pour transformer des km/h en mph de tête, multipliez par 0,6 : 100 km/h font environ 60 mph, un peu bas mais bon pour juger une limitation de vitesse. Dans l’autre sens, multipliez les mph par 1,6, ou divisez-les par deux et ajoutez un peu plus de la moitié. Les panneaux routiers du Royaume-Uni et des États-Unis utilisent les mph, et la plupart des autres pays utilisent les km/h.',
        ],
      },
      {
        heading: 'Mètres par seconde et nœuds',
        paragraphs: [
          'Divisez les km/h par 3,6 pour obtenir des mètres par seconde : 36 km/h font 10 m/s. Un nœud est un mille marin par heure, soit exactement 1,852 km/h : 20 nœuds font donc environ 37 km/h. Les navires et les avions utilisent les nœuds, et les bulletins météo donnent parfois le vent en nœuds.',
        ],
      },
      {
        heading: 'Limitations de vitesse courantes',
        paragraphs: [
          'Une limite de 30 mph fait environ 48 km/h, et 50 km/h font environ 31 mph. Une limite de 70 mph fait environ 113 km/h, tandis qu’une limite d’autoroute de 120 km/h fait environ 75 mph et 130 km/h environ 81 mph. En connaître quelques-unes aide quand vous conduisez une voiture de location dans un autre pays et que le cadran n’affiche qu’une seule unité.',
        ],
      },
    ],
    faqs: [
      { q: 'Combien font 60 mph en km/h ?', a: 'Environ 96,6 km/h.' },
      { q: 'Combien font 100 km/h en mph ?', a: 'Environ 62,1 mph.' },
      { q: 'Qu’est-ce que Mach 1 ?', a: 'Environ 340 m/s au niveau de la mer, valeur utilisée par le convertisseur. Elle change avec la température et l’altitude.' },
    ],
  },
  'how-to-convert-psi-to-bar-tyre-pressure': {
    title: 'Comment convertir des psi en bar pour la pression des pneus',
    description: 'Convertissez des psi en bar, kPa et atmosphères, avec des pressions de pneus de voiture typiques et une note pour vérifier la vôtre.',
    intro: 'Pour convertir des psi en bar, divisez par 14,5038. Ainsi, 32 psi font environ 2,2 bar. Pour revenir, multipliez les bar par 14,5038. Le convertisseur de pressions gère aussi les pascals, kilopascals, atmosphères et mmHg.',
    steps: [
      'Notez la pression avec son unité, par exemple 32 psi.',
      'Divisez par 14,5038 : 32 ÷ 14,5038 = 2,21 bar.',
      'Pour les kPa, multipliez les psi par 6,895 : 32 psi font environ 220,6 kPa.',
      'Ou ouvrez le convertisseur de pressions et choisissez les deux unités.',
    ],
    sections: [
      {
        heading: 'Pressions des pneus',
        paragraphs: [
          'Les pneus de voiture sont couramment gonflés à environ 30 à 35 psi, soit à peu près 2,1 à 2,4 bar ou 210 à 240 kPa. Utilisez toujours le chiffre de l’autocollant sur le montant de la porte conducteur ou du manuel, car il dépend de la voiture et de la charge. Les pressions doivent être vérifiées à froid.',
        ],
      },
      {
        heading: 'Comment les unités sont liées',
        paragraphs: [
          'Un bar fait 100 000 pascals, soit 100 kPa, et est proche de la pression atmosphérique normale. Une atmosphère standard fait 101 325 pascals, soit environ 1,013 bar ou 14,7 psi. La météo et la tension artérielle utilisent des millimètres de mercure, où 760 mmHg font une atmosphère standard.',
        ],
      },
      {
        heading: 'Autres endroits où apparaît la pression',
        paragraphs: [
          'Les pneus de vélos de route sont couramment gonflés à environ 80 à 130 psi, soit à peu près 5,5 à 9 bar, tandis que les VTT en utilisent beaucoup moins. Vérifiez toujours le maximum imprimé sur le flanc du pneu. Les roues de secours et certains utilitaires et voitures chargées demandent des pressions différentes du chiffre habituel d’une voiture : lisez l’autocollant de votre véhicule.',
        ],
      },
    ],
    faqs: [
      { q: 'Combien de psi font 2 bar ?', a: 'Environ 29 psi.' },
      { q: 'Le bar ou le kPa est-il plus courant sur les gonfleurs ?', a: 'Cela varie selon les pays. Beaucoup de gonfleurs de stations affichent psi, bar et kPa côte à côte.' },
      { q: 'La pression relative est-elle différente ?', a: 'Les manomètres de pneus indiquent la pression au-dessus de l’air ambiant. Le convertisseur ne change que les unités et n’ajoute ni ne retire de pression atmosphérique.' },
    ],
  },
};

export default guides;
