import type { GuideSet } from '../types';

/** French guides, batch 7. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-time-zones-for-a-meeting': {
    title: 'Comment convertir les fuseaux horaires pour une réunion (IST, EST, GMT)',
    description: 'Trouvez la bonne heure de réunion entre l’Inde, les États-Unis, le Royaume-Uni et d’autres pays, et évitez le piège de l’heure d’été.',
    intro: 'Pour convertir l’heure d’une réunion, choisissez la date, l’heure et votre fuseau de départ dans le convertisseur de fuseaux horaires, puis ajoutez les villes voulues. Il gère l’heure d’été pour la date exacte. L’Inde (IST) est en UTC+05:30 toute l’année et ne change jamais d’heure.',
    steps: [
      'Ouvrez le convertisseur de fuseaux horaires et choisissez la date de la réunion.',
      'Saisissez l’heure et choisissez le fuseau dans lequel elle est écrite, par exemple Inde (Kolkata).',
      'Ajoutez les villes des autres participants. Chaque ligne affiche l’heure et la date locales.',
      'Repérez les étiquettes "next day" ou "previous day", puis partagez les heures avec tout le monde.',
    ],
    sections: [
      {
        heading: 'Le piège de l’heure d’été',
        paragraphs: [
          'L’écart entre deux lieux peut changer au cours de l’année. Les États-Unis changent d’heure à des dates différentes de celles du Royaume-Uni et de l’Europe : pendant quelques semaines au printemps et à l’automne, l’écart entre New York et Londres est donc d’une heure différent du reste de l’année. L’Inde et beaucoup d’autres pays ne changent pas d’heure du tout, si bien que l’écart avec eux change chaque fois que l’autre côté change.',
          'Convertissez toujours pour la date exacte de la réunion, pas pour aujourd’hui. Le convertisseur le fait avec les données de fuseaux horaires intégrées à votre navigateur.',
        ],
      },
      {
        heading: 'Lignes de changement de date et réunions tardives',
        paragraphs: [
          'Une fin de soirée en Inde correspond au même matin ou à la même nuit aux États-Unis, et un petit matin au Japon est la veille au soir en Inde. Quand la date diffère, il est facile de réserver le mauvais jour : vérifiez donc la colonne de la date et écrivez la date complète dans l’invitation.',
        ],
      },
    ],
    faqs: [
      { q: 'Que vaut l’heure IST à New York ?', a: 'L’Inde a 10 heures 30 minutes d’avance sur New York en hiver (EST) et 9 heures 30 minutes en été (EDT), car l’Inde ne change pas d’heure. Le convertisseur affiche le chiffre exact pour votre date.' },
      { q: 'Utilise-t-il ma position ?', a: 'Seulement pour choisir un fuseau de départ. Votre navigateur fournit son fuseau horaire et rien n’est envoyé nulle part.' },
      { q: 'Et si ma ville n’est pas listée ?', a: 'Choisissez une ville du même fuseau horaire.' },
    ],
  },
  'how-to-write-dates-without-confusion': {
    title: 'Comment écrire les dates sans confusion : JJ/MM ou MM/JJ',
    description: 'Pourquoi 04/03/2026 désigne des dates différentes en Inde et aux États-Unis, et comment écrire les dates pour que personne ne les lise de travers.',
    intro: 'Pour écrire une date sans confusion, utilisez le format ISO 2026-03-04 ou écrivez le mois en toutes lettres, par exemple 4 mars 2026. La date numérique 04/03/2026 signifie le 4 mars en Inde et au Royaume-Uni, mais le 3 avril aux États-Unis.',
    steps: [
      'Décidez qui va lire la date. S’il peut utiliser un autre ordre, évitez la forme tout en chiffres.',
      'Utilisez l’ISO 8601 (AAAA-MM-JJ) pour les formulaires, les noms de fichiers et les données. Il se trie dans l’ordre des dates.',
      'Ou écrivez le mois en toutes lettres : 4 mars 2026 ou March 4, 2026.',
      'Utilisez le convertisseur de format de date pour voir une date dans tous les formats courants et copiez celui qu’il vous faut.',
    ],
    sections: [
      {
        heading: 'Trois ordres en usage',
        paragraphs: [
          'Jour-mois-année (JJ/MM/AAAA) est utilisé en Inde, au Royaume-Uni et dans la plus grande partie du monde. Mois-jour-année (MM/JJ/AAAA) est utilisé aux États-Unis. Année-mois-jour (AAAA/MM/JJ) est utilisé au Japon, en Chine et en Corée, et sert de base à l’ISO 8601. Les dates dont le jour est 13 ou plus ne sont pas ambiguës, mais 04/03 et 05/06 le sont.',
        ],
      },
      {
        heading: 'Pourquoi l’ISO 8601 est plus sûr',
        paragraphs: [
          'L’ISO 8601 écrit d’abord la plus grande unité : 2026-03-04 ne peut donc se lire que d’une façon, et une liste de dates ISO se trie correctement comme du texte simple. Les bases de données, les programmeurs et les formulaires internationaux le préfèrent. Pour une écriture courante, un mois en toutes lettres supprime tout doute pour les lecteurs humains.',
        ],
      },
    ],
    faqs: [
      { q: 'Comment saisir une date pour que le convertisseur la lise correctement ?', a: 'Tapez-la et indiquez au convertisseur si le jour, le mois ou l’année vient en premier. Il affiche ensuite tous les autres formats.' },
      { q: 'Accepte-t-il les années à deux chiffres ?', a: 'Oui. Une année à deux chiffres comme 26 est lue comme 2026.' },
      { q: 'Pourquoi dit-il que ma date n’existe pas ?', a: 'Soit le jour n’existe pas (31 février), soit l’ordre est faux (un mois 25).' },
    ],
  },
  'how-to-convert-tiff-to-jpg': {
    title: 'Comment convertir du TIFF en JPG',
    description: 'Transformez des scans et photos TIFF en petits fichiers JPG qui s’ouvrent partout, y compris les TIFF multipages.',
    intro: 'Pour convertir du TIFF en JPG, déposez vos fichiers TIFF dans le convertisseur, choisissez une qualité (90 est un bon réglage par défaut) et appuyez sur "Convertir". Chaque page d’un TIFF multipage devient son propre JPG, et vous pouvez tous les télécharger dans un ZIP.',
    steps: [
      'Ouvrez TIFF en JPG et déposez vos fichiers .tif ou .tiff.',
      'Choisissez une qualité. 90 garde la plupart des détails ; des valeurs plus basses donnent des fichiers plus petits.',
      'Appuyez sur "Convertir".',
      'Téléchargez le JPG, ou un ZIP s’il y a plusieurs pages ou fichiers.',
    ],
    sections: [
      {
        heading: 'Pourquoi on convertit du TIFF',
        paragraphs: [
          'Le TIFF est un format de haute qualité utilisé par les scanners, les logiciels de fax et la photographie professionnelle. Les fichiers sont volumineux, et la plupart des navigateurs (hors Safari), des clients de messagerie et des formulaires ne peuvent ni les afficher ni les accepter. Le JPG est bien plus léger et fonctionne presque partout.',
        ],
      },
      {
        heading: 'À quoi s’attendre',
        paragraphs: [
          'Le JPG est avec perte : on échange un peu de détail contre un fichier bien plus petit. À la qualité 90 ou plus, c’est difficile à voir. Le JPG n’a pas de transparence : les zones transparentes deviennent blanches. Certaines variantes rares de TIFF, comme certains fichiers en 16 bits ou CMJN, peuvent ne pas s’ouvrir ; la page affiche un message dans ce cas. Gardez le TIFF si vous risquez d’imprimer ou de retoucher l’image plus tard.',
        ],
      },
      {
        heading: 'Documents numérisés',
        paragraphs: [
          'Pour un document numérisé à 200 ou 300 ppp, le JPG en qualité 90 garde lisibles les petits caractères et réduit énormément la taille du fichier. Des réglages de qualité très bas rendent flous les bords des lettres : ne descendez donc pas sous 70 environ pour du texte. Si une page n’est que du texte noir sur blanc, vérifiez le résultat en taille réelle avant de jeter le TIFF.',
        ],
      },
    ],
    faqs: [
      { q: 'Un scan multipage gardera-t-il son ordre ?', a: 'Oui. Les pages sont nommées page1, page2 et ainsi de suite.' },
      { q: 'Puis-je faire un PDF à la place ?', a: 'Les conversions PDF se trouvent sur iDuckPDF, un site frère, qui peut transformer des images en PDF.' },
      { q: 'Mon scan est-il envoyé ?', a: 'Non. Il est converti dans l’onglet de votre navigateur.' },
    ],
  },
  'how-to-convert-webp-to-gif': {
    title: 'Comment convertir du WEBP en GIF',
    description: 'Transformez des images WEBP en fichiers GIF pour les applis de messagerie et forums qui refusent le WEBP, tout en gardant un fichier léger.',
    intro: 'Pour convertir du WEBP en GIF, déposez le fichier dans le convertisseur WEBP en GIF, choisissez éventuellement une largeur maximale et appuyez sur "Convertir". Dans cette version, un WEBP fixe devient un GIF d’une seule image, et un WEBP animé ne garde que sa première image.',
    steps: [
      'Ouvrez WEBP en GIF et déposez vos fichiers .webp.',
      'Choisissez une largeur maximale si l’image est grande. Les fichiers GIF grossissent vite.',
      'Appuyez sur "Convertir".',
      'Téléchargez le GIF, ou un ZIP pour plusieurs fichiers.',
    ],
    sections: [
      {
        heading: 'Quand cela aide',
        paragraphs: [
          'Le WEBP est un format d’image moderne de Google qui produit de petits fichiers, et de nombreux sites web le servent désormais. Certaines anciennes applis de messagerie, certains forums et programmes de courrier ne l’acceptent toujours pas, mais presque tous acceptent le GIF.',
        ],
      },
      {
        heading: 'Ce à quoi vous renoncez',
        paragraphs: [
          'Le GIF est un format plus ancien limité à 256 couleurs : les photographies peuvent paraître un peu granuleuses, et les fichiers sont généralement plus gros que le WEBP. Les zones transparentes restent transparentes, mais les bords doux semi-transparents deviennent entièrement pleins ou entièrement clairs, car le GIF n’a qu’une transparence tout ou rien. Si l’image est une photo et que le site l’accepte, le JPG ou le PNG peuvent mieux convenir ; les conversions d’images vers ces formats sont sur iDuckIMG.',
        ],
      },
      {
        heading: 'Garder le GIF léger',
        paragraphs: [
          'Utilisez une largeur maximale de 320 à 480 pixels pour les autocollants et les avatars. Les aplats de couleur, les logos et les dessins simples se compressent bien en GIF, alors que les photographies non, car seules 256 couleurs sont disponibles. Si le GIF est bien plus gros que prévu, une largeur plus petite est la solution la plus rapide.',
        ],
      },
    ],
    faqs: [
      { q: 'Un WEBP animé reste-t-il animé ?', a: 'Pas encore. Seule la première image est conservée dans cette version, et la page le dit.' },
      { q: 'Pourquoi mon GIF est-il plus gros que le WEBP ?', a: 'Le GIF compresse moins bien. Choisir une largeur plus petite le réduit.' },
      { q: 'Est-ce envoyé ?', a: 'Non. Il est converti dans l’onglet de votre navigateur.' },
    ],
  },
  'how-to-convert-kg-to-pounds': {
    title: 'Comment convertir des kg en livres (et des livres en kg)',
    description: 'Convertissez des kilogrammes en livres, onces et stones avec le facteur exact, un raccourci mental et un convertisseur.',
    intro: 'Pour convertir des kilogrammes en livres, multipliez par 2,20462. Ainsi, 70 kg font environ 154,3 lb. Dans l’autre sens, multipliez les livres par 0,45359237. Le convertisseur de poids fait les deux instantanément et couvre aussi les onces, stones, grammes et tonnes.',
    steps: [
      'Notez le poids avec son unité, par exemple 70 kg.',
      'Multipliez par 2,20462 : 70 × 2,20462 = 154,32 lb.',
      'Pour passer des livres aux kilogrammes, multipliez par 0,45359237 : 154 lb × 0,45359237 = 69,85 kg.',
      'Ou ouvrez le convertisseur de poids, tapez le nombre et choisissez les deux unités.',
    ],
    sections: [
      {
        heading: 'Un raccourci rapide',
        paragraphs: [
          'Pour une réponse approximative, doublez les kilogrammes et ajoutez un dixième du résultat : 70 kg doublés font 140, plus 14 font 154 lb. Dans l’autre sens, divisez les livres par deux et retirez un dixième : 154 lb font 77, moins 7,7 donnent environ 69,3 kg. C’est assez proche pour un usage courant, mais utilisez le facteur exact pour la cuisine, l’expédition et la médecine.',
        ],
      },
      {
        heading: 'Livres, onces et stones',
        paragraphs: [
          'Une livre fait 16 onces. Un stone, utilisé au Royaume-Uni et en Irlande pour le poids corporel, fait 14 livres ou environ 6,35 kg. Un bébé de 7 lb 8 oz pèse 7,5 livres, soit environ 3,4 kg. La tonne utilisée ici est la tonne métrique, de 1000 kg, qui diffère de la tonne courte américaine de 2000 livres.',
        ],
      },
      {
        heading: 'Bagages et poids corporel',
        paragraphs: [
          'Les limites de bagages des compagnies aériennes sont une raison courante de convertir. Une valise en soute de 23 kg fait environ 50,7 livres, et une limite de 50 livres fait environ 22,7 kg : une valise qui passe dans une unité peut donc dépasser de peu dans l’autre. Pour le poids corporel, rappelez-vous que le stone est utilisé au Royaume-Uni : 11 stones font 154 livres, soit environ 69,9 kg.',
        ],
      },
    ],
    faqs: [
      { q: 'Combien de livres font 1 kg ?', a: 'Environ 2,20462 livres.' },
      { q: 'Combien de kg font 150 livres ?', a: 'Environ 68 kg.' },
      { q: 'Une tonne et un « ton » sont-ils la même chose ?', a: 'Non. Une tonne métrique fait 1000 kg, un ton américain fait 2000 livres et un ton britannique fait 2240 livres.' },
    ],
  },
};

export default guides;
