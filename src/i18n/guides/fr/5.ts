import type { GuideSet } from '../types';

/** French guides, batch 5. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-markdown-to-html': {
    title: 'Comment convertir du Markdown en HTML',
    description: 'Transformez des notes Markdown et des textes de README en HTML propre que vous pouvez coller dans une page web ou un CMS.',
    intro: 'Pour convertir du Markdown en HTML, collez votre Markdown dans le convertisseur Markdown en HTML. Vous obtenez le HTML des titres, paragraphes, listes, liens, tableaux et code, prêt à coller dans une page ou un système de contenu.',
    steps: [
      'Écrivez ou collez votre Markdown, ou appuyez sur "Try an example" pour voir les éléments.',
      'Ouvrez Markdown en HTML et collez-le dans la zone de gauche.',
      'Lisez le HTML à droite. C’est uniquement le contenu, sans balises html ni body.',
      'Copiez-le ou téléchargez-le, puis placez-le dans votre propre modèle de page.',
    ],
    sections: [
      {
        heading: 'Ce qui est pris en charge',
        paragraphs: [
          'Le Markdown standard (titres avec #, gras avec **, listes, liens, images, citations et blocs de code) plus les ajouts courants de GitHub : tableaux, listes de tâches et texte barré. Le HTML brut dans le Markdown passe sans modification.',
        ],
      },
      {
        heading: 'Une note de sécurité',
        paragraphs: [
          'La sortie est une simple conversion. Si le Markdown vient de quelqu’un d’autre, il pourrait contenir des scripts cachés sous forme de HTML brut. Faites passer le résultat dans votre propre outil de nettoyage du HTML avant de le publier sur un site où apparaît du contenu d’autres personnes.',
        ],
      },
      {
        heading: 'Erreurs courantes en Markdown',
        paragraphs: [
          'Une liste a besoin d’une ligne vide avant, et les paragraphes sont séparés par des lignes vides. Un titre a besoin d’une espace après les dièses : écrivez # Titre et non #Titre. Pour forcer un saut de ligne dans un paragraphe, terminez la ligne par deux espaces. Un tableau a besoin d’une ligne d’en-tête suivie d’une ligne de séparation en tirets. Si le HTML paraît faux, la cause est presque toujours l’une d’elles.',
        ],
      },
    ],
    faqs: [
      { q: 'Puis-je revenir du HTML au Markdown ?', a: 'Oui, avec HTML en Markdown. Le style et la mise en page sont perdus, mais les titres, listes, liens et textes en gras sont conservés.' },
      { q: 'Ajoute-t-il des styles ?', a: 'Non. Vous obtenez du HTML sans style qui reprend les styles de la page où vous le placez.' },
      { q: 'Mon texte est-il envoyé ?', a: 'Non. Il est converti dans l’onglet de votre navigateur.' },
    ],
  },
  'how-to-fix-garbled-text-and-wrong-encoding': {
    title: 'Comment réparer un texte illisible et un mauvais encodage',
    description: 'Réparez les fichiers texte qui affichent des caractères étranges comme Ã© en choisissant le bon encodage et en enregistrant un UTF-8 propre.',
    intro: 'Pour réparer un fichier texte illisible, déposez-le dans le correcteur d’encodage TXT, choisissez l’encodage dans lequel il a été écrit (essayez d’abord Windows-1252), vérifiez l’aperçu et téléchargez la copie en UTF-8. Un texte illisible signifie que le fichier a été lu avec le mauvais encodage.',
    steps: [
      'Ouvrez le correcteur d’encodage TXT et déposez votre fichier.',
      'Regardez l’aperçu. Si les accents ressemblent à Ã© ou é, le fichier est probablement en Windows-1252.',
      'Choisissez un autre encodage dans la liste jusqu’à ce que l’aperçu soit correct. Windows-1251 couvre le cyrillique ; Shift_JIS, GBK et Big5 couvrent le japonais et le chinois.',
      'Appuyez sur "Convertir" et téléchargez la copie en UTF-8. Votre original reste intact.',
    ],
    sections: [
      {
        heading: 'Ce qui se passe',
        paragraphs: [
          'Un fichier texte n’est que des nombres. Un encodage est la table qui dit quelle lettre correspond à chaque nombre. L’UTF-8 peut écrire toutes les langues, alors que des tables plus anciennes comme Windows-1252 couvrent une région. Si un fichier est écrit avec une table et lu avec une autre, les caractères deviennent du charabia comme Ã© au lieu de é.',
        ],
      },
      {
        heading: 'Pourquoi l’UTF-8 est celui à garder',
        paragraphs: [
          'L’UTF-8 est compris aujourd’hui par presque tous les programmes, sites web et bases de données. Enregistrer votre texte en UTF-8 garantit qu’il s’ouvre de la même façon partout. Si un CSV paraît encore faux dans Excel après réparation, convertissez-le avec CSV en Excel, qui lit correctement l’UTF-8.',
        ],
      },
    ],
    faqs: [
      { q: 'Comment savoir quel encodage choisir ?', a: 'Essayez les plus probables et regardez l’aperçu. Le bon rend chaque lettre lisible. Regardez d’où vient le fichier : les anciens exports Windows sont souvent en Windows-1252.' },
      { q: 'Pourquoi je vois des points d’interrogation ou des cases ?', a: 'Ces caractères étaient déjà perdus avant l’ouverture du fichier. Choisir un autre encodage ne peut pas rendre ce qui a été remplacé.' },
      { q: 'Mon fichier est-il envoyé ?', a: 'Non. Il est lu et converti dans votre navigateur.' },
    ],
  },
  'how-to-convert-celsius-to-fahrenheit': {
    title: 'Comment convertir des Celsius en Fahrenheit (et inversement)',
    description: 'La formule, un raccourci mental rapide et un convertisseur pour Celsius, Fahrenheit et Kelvin.',
    intro: 'Pour convertir des Celsius en Fahrenheit, multipliez par 9, divisez par 5 et ajoutez 32. Ainsi 100 °C font 212 °F et 0 °C font 32 °F. Pour revenir, soustrayez 32, multipliez par 5 et divisez par 9.',
    steps: [
      'Notez la température avec son unité, par exemple 25 °C.',
      'Multipliez par 9 : 25 × 9 = 225.',
      'Divisez par 5 : 225 ÷ 5 = 45.',
      'Ajoutez 32 : 45 + 32 = 77 °F.',
      'Ou ouvrez le Convertisseur de températures, tapez 25, choisissez Celsius vers Fahrenheit et lisez la réponse.',
    ],
    sections: [
      {
        heading: 'Un raccourci mental',
        paragraphs: [
          'Pour une réponse approximative, doublez le nombre de Celsius et ajoutez 30. Cela donne 80 pour 25 °C, proche des 77 réels. Cela marche mieux entre 0 et 30 °C et s’écarte davantage aux extrêmes. Pour la cuisine, la médecine et la science, utilisez la formule exacte.',
        ],
      },
      {
        heading: 'Pourquoi on ne peut pas juste multiplier',
        paragraphs: [
          'La plupart des conversions d’unités sont une simple multiplication. Les échelles de température commencent à des zéros différents : 0 °C font 32 °F. C’est pourquoi la formule a une étape d’addition ou de soustraction, et pourquoi doubler une température en Celsius ne double pas celle en Fahrenheit.',
          'Le kelvin utilise la même taille de degré que le Celsius mais commence au zéro absolu : ajoutez 273,15 à une valeur en Celsius pour obtenir des kelvins. Les deux échelles se croisent à -40, où Celsius et Fahrenheit sont égaux.',
        ],
      },
    ],
    faqs: [
      { q: 'Combien font 37 °C en Fahrenheit ?', a: 'Environ 98,6 °F, la température normale du corps humain.' },
      { q: 'Quelle température de four correspond à 180 °C ?', a: '356 °F, généralement arrondie à 350 °F dans les recettes.' },
      { q: 'Comment convertir des Fahrenheit en Celsius ?', a: 'Soustrayez 32, multipliez par 5, divisez par 9. 212 °F donnent 100 °C.' },
    ],
  },
  'how-to-convert-bigha-gaj-and-acre-to-square-feet': {
    title: 'Comment convertir des bigha, gaj et acres en pieds carrés',
    description: 'Convertissez les unités de terrain indiennes en pieds carrés, avec les valeurs qui restent fixes et celles qui changent selon l’État.',
    intro: 'Pour convertir des unités de terrain indiennes, ouvrez le convertisseur d’unités de terrain indiennes, tapez le nombre et choisissez l’unité. Un gaj fait 9 pieds carrés et un acre 43 560 pieds carrés, mais un bigha diffère selon l’État : vérifiez toujours le registre local avant d’acheter ou de vendre.',
    steps: [
      'Décidez quelle unité utilise votre document. S’il dit bigha, notez l’État, car la taille change.',
      'Ouvrez le convertisseur d’unités de terrain indiennes et saisissez la surface.',
      'Choisissez l’unité que vous avez sous From et pieds carrés (ou acre) sous To.',
      'Lisez la réponse et la note sur l’État. Comparez-la à votre registre foncier.',
    ],
    sections: [
      {
        heading: 'Unités fixes',
        paragraphs: [
          'Un gaj est un yard carré, soit 9 pieds carrés. Un acre fait 43 560 pieds carrés, soit environ 4047 mètres carrés. Un hectare fait 10 000 mètres carrés, environ 2,47 acres ou à peu près 107 639 pieds carrés. Ces valeurs sont les mêmes partout.',
        ],
      },
      {
        heading: 'Unités qui changent selon l’État',
        paragraphs: [
          'Un bigha n’a pas une seule taille. Il fait environ 27 000 pieds carrés dans l’Uttar Pradesh, environ 17 400 au Gujarat et 14 400 au Bengale-Occidental et en Assam, et il peut différer selon le district et selon que la coutume locale est le bigha pucca ou kachha. Le biswa, le katha, le guntha et le cent varient aussi selon la région.',
          'Pour cette raison, considérez toute conversion d’une unité locale comme une estimation et utilisez le chiffre du document foncier officiel pour tout acte juridique.',
        ],
      },
    ],
    faqs: [
      { q: 'Combien de pieds carrés y a-t-il dans un bigha ?', a: 'Cela dépend de l’État, d’environ 14 400 à environ 27 000 pieds carrés dans les lieux indiqués ici. Utilisez le convertisseur et sa note, puis confirmez sur place.' },
      { q: 'Combien de gaj y a-t-il dans un acre ?', a: '4840 gaj, puisqu’un acre fait 43 560 pieds carrés et un gaj 9.' },
      { q: 'Est-ce fiable pour un usage juridique ?', a: 'Non. C’est une calculatrice pour des estimations. Les documents de propriété doivent utiliser les chiffres du registre officiel.' },
    ],
  },
  'how-many-mb-in-a-gb': {
    title: 'Combien de Mo dans un Go ? 1000 ou 1024 expliqué',
    description: 'Pourquoi un gigaoctet vaut 1000 Mo sur un forfait mobile mais 1024 Mio dans certains systèmes, et comment convertir Ko, Mo, Go et To.',
    intro: 'Un gigaoctet vaut 1000 mégaoctets dans le système décimal (SI) utilisé par les fabricants de disques et les forfaits mobiles, et un gibioctet vaut 1024 mébioctets dans le système binaire qu’emploient certains systèmes d’exploitation. Pour convertir, choisissez le bon système et multipliez ou divisez par 1000 ou 1024.',
    steps: [
      'Décidez de quel système vous avez besoin. Le stockage vendu en magasin, les débits réseau et les forfaits de données utilisent 1000.',
      'Ouvrez le convertisseur de taille de données et saisissez la quantité.',
      'Choisissez KB, MB, GB ou TB pour le système de 1000, ou KiB, MiB, GiB et TiB pour le système de 1024.',
      'Lisez le résultat dans l’unité voulue.',
    ],
    sections: [
      {
        heading: 'D’où viennent les deux systèmes',
        paragraphs: [
          'Les ordinateurs fonctionnent en puissances de deux, et 1024 (2 puissance 10) est proche de 1000. Les premiers logiciels utilisaient Ko pour 1024 octets, tandis que les fabricants de matériel utilisaient le 1000 métrique. Pour mettre fin à la confusion, les noms Kio, Mio et Gio ont été créés pour les unités basées sur 1024. Dans l’usage courant, les deux apparaissent encore sous le nom simple.',
        ],
      },
      {
        heading: 'Pourquoi un disque affiche moins d’espace',
        paragraphs: [
          'Un disque vendu comme 1 To contient 1 000 000 000 000 octets. Un système qui affiche les tailles en unités basées sur 1024 l’indique comme environ 931 Gio : le nombre paraît plus petit alors que rien ne manque. Le même effet fait qu’un téléphone de 128 Go affiche un peu moins de 128 dans certains menus.',
        ],
      },
    ],
    faqs: [
      { q: 'Lequel est juste, 1000 ou 1024 ?', a: 'Les deux sont justes dans leur propre système. Ko, Mo et Go sont officiellement en base 1000 ; Kio, Mio et Gio sont en base 1024.' },
      { q: 'Combien de Mo fait 1 Go sur mon forfait de données ?', a: 'Les forfaits utilisent 1000 : 1 Go fait donc 1000 Mo. Demandez à votre opérateur si le chiffre exact compte.' },
      { q: 'Combien d’octets y a-t-il dans un mégaoctet ?', a: '1 000 000 dans le système décimal et 1 048 576 dans un mébioctet.' },
    ],
  },
};

export default guides;
