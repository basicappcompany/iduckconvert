import type { GuideSet } from '../types';

/** French guides, batch 1. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-extract-audio-from-a-video': {
    title: 'Comment extraire l’audio d’une vidéo',
    description: 'Enregistrez le son de n’importe quelle vidéo en MP3 dans votre navigateur, sans envoi de fichier, sans logiciel à installer et sans filigrane.',
    intro: 'Pour extraire l’audio d’une vidéo, ouvrez un convertisseur de vidéo en MP3, déposez la vidéo, appuyez sur "Convertir" et téléchargez le MP3. Avec iDuckConvert, tout se passe dans l’onglet de votre navigateur : la vidéo n’est envoyée nulle part.',
    steps: [
      'Ouvrez le convertisseur MP4 en MP3 (il accepte aussi MOV, MKV, WEBM et AVI via Vidéo en MP3).',
      'Déposez votre vidéo dans la zone, ou appuyez sur "Choisir des fichiers".',
      'Choisissez une qualité. 192 kbit/s est un bon choix au quotidien ; prenez 320 pour la musique qui compte pour vous.',
      'Appuyez sur "Convertir" et attendez la fin de la barre de progression. La première fois, votre navigateur télécharge le moteur du convertisseur (environ 30 Mo), qui est ensuite mis en cache.',
      'Téléchargez le MP3, ou plusieurs à la fois dans un ZIP.',
    ],
    sections: [
      {
        heading: 'Ce que vous obtenez',
        paragraphs: [
          'L’image est supprimée et seule la bande-son est conservée, donc le MP3 est bien plus léger que la vidéo. Une vidéo de cours de 100 Mo devient souvent un MP3 de 10 à 30 Mo.',
          'Le son est encodé de nouveau en MP3, un format avec perte. Si le son d’origine était déjà compressé (c’est le cas de la plupart des vidéos), une seconde compression perd très légèrement plus. À 192 kbit/s ou plus, c’est difficile à entendre.',
        ],
      },
      {
        heading: 'Quelles vidéos fonctionnent',
        paragraphs: [
          'MP4, MOV (vidéos d’iPhone), MKV, WEBM, AVI et la plupart des extraits de téléphone et d’appareil photo. Si un fichier ne s’ouvre pas, il est peut-être endommagé, protégé contre la copie ou dans un format inhabituel ; la page vous prévient quand elle ne peut pas lire un fichier.',
          'N’extrayez l’audio que de vidéos qui vous appartiennent ou que vous avez le droit d’utiliser. L’usage habituel : vos propres cours, entretiens, notes vocales et vidéos de famille.',
        ],
      },
      {
        heading: 'Longues vidéos et téléphones',
        paragraphs: [
          'Comme c’est votre propre appareil qui travaille, les longues vidéos prennent du temps et de la mémoire. Nous conseillons des fichiers de moins de 500 Mo environ sur ordinateur et de 100 Mo sur téléphone. Si un téléphone peine, coupez d’abord la vidéo avec l’outil Couper une vidéo, ou utilisez un ordinateur.',
        ],
      },
    ],
    faqs: [
      { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui, dans tout navigateur récent, mais les longues vidéos sont lentes sur téléphone. Les courts extraits passent très bien.' },
      { q: 'Puis-je obtenir du WAV ou un autre format ?', a: 'Oui. Vidéo en MP3 est la voie la plus rapide, et les convertisseurs audio transforment ensuite le MP3 en WAV, M4A, OGG ou FLAC.' },
      { q: 'La vidéo est-elle envoyée ?', a: 'Non. Tout se déroule dans l’onglet de votre navigateur et la vidéo ne quitte jamais votre appareil.' },
    ],
  },
  'heic-vs-jpg': {
    title: 'HEIC ou JPG : lequel utiliser ?',
    description: 'Ce qu’est le HEIC, en quoi il diffère du JPG, pourquoi les photos d’iPhone ne s’ouvrent pas ailleurs et comment les convertir.',
    intro: 'Le HEIC réduit les photos à environ la moitié d’un JPG pour une qualité similaire, mais moins de programmes l’ouvrent. Utilisez le HEIC pour économiser de la place sur votre téléphone, et convertissez en JPG quand vous devez partager, envoyer ou modifier une photo ailleurs.',
    steps: [
      'Vérifiez que le fichier se termine par .heic ou .heif. C’est ce qu’un iPhone enregistre par défaut.',
      'Si vous devez la partager ou l’envoyer, convertissez-la en JPG avec le convertisseur HEIC vers JPG d’iDuckIMG, qui fonctionne dans votre navigateur.',
      'Gardez le HEIC d’origine si vous risquez de la modifier encore : il contient plus de détails de couleur qu’un JPG.',
      'Pour que votre iPhone arrête d’enregistrer en HEIC, allez dans Réglages, Appareil photo, Formats et choisissez "Le plus compatible".',
    ],
    sections: [
      {
        heading: 'Les vraies différences',
        paragraphs: [
          'Le HEIC (High Efficiency Image Container) utilise la même famille de compression que la vidéo moderne. Apple en a fait le format par défaut de l’iPhone en 2017, car il stocke une photo dans environ la moitié de la place d’un JPG et peut contenir des couleurs sur 10 bits, des données de profondeur et plusieurs images dans un seul fichier.',
          'Le JPG date de 1992. Sa compression est moins efficace, mais tous les téléphones, ordinateurs, sites web, imprimantes et logiciels de retouche l’ouvrent sans histoire.',
        ],
      },
      {
        heading: 'Pourquoi le HEIC pose problème',
        paragraphs: [
          'De nombreux sites et formulaires refusent les fichiers HEIC. Windows a besoin d’un codec supplémentaire pour les afficher, et les anciens téléphones Android, certaines imprimantes et beaucoup de vieux logiciels ne peuvent pas les ouvrir du tout.',
          'Convertir en JPG coûte un peu de qualité, car le JPG est avec perte et a une gamme de couleurs plus réduite. Pour partager et envoyer, vous ne le remarquerez pas. Pour une retouche sérieuse, gardez l’original.',
        ],
      },
      {
        heading: 'Une règle simple',
        paragraphs: ['Gardez le HEIC tant que la photo reste sur votre téléphone ou dans iCloud. Convertissez-en une copie en JPG dès que vous devez l’envoyer à quelqu’un ou la mettre sur un site web.'],
      },
    ],
    faqs: [
      { q: 'Le HEIC est-il de meilleure qualité que le JPG ?', a: 'À taille de fichier égale, oui : il conserve plus de détails. À qualité égale, il pèse environ moitié moins. Il gère aussi plus de couleurs.' },
      { q: 'Convertir du HEIC en JPG fait-il perdre de la qualité ?', a: 'Un peu, car le JPG est un format avec perte. Avec des réglages de qualité élevés, la différence est très difficile à voir.' },
      { q: 'Où convertir du HEIC en JPG ?', a: 'Le convertisseur HEIC vers JPG se trouve sur iDuckIMG, un site frère. Il fonctionne aussi dans votre navigateur et n’envoie pas vos photos.' },
    ],
  },
  'how-to-open-a-csv-in-excel-correctly': {
    title: 'Comment ouvrir correctement un CSV dans Excel',
    description: 'Évitez qu’Excel supprime les zéros initiaux, abîme les longs nombres et casse les accents quand vous ouvrez un fichier CSV.',
    intro: 'Quand vous double-cliquez sur un CSV, Excel devine comment le lire, et il se trompe souvent. La méthode fiable consiste à convertir d’abord le CSV en fichier XLSX, ou à utiliser l’onglet Données d’Excel pour l’importer et choisir vous-même le type de chaque colonne.',
    steps: [
      'Le plus simple : convertissez le fichier avec le convertisseur CSV en Excel, puis ouvrez le .xlsx. Les zéros initiaux et les valeurs texte restent tels quels.',
      'Ou, dans Excel, ouvrez un classeur vide et choisissez Données, puis À partir d’un fichier texte/CSV.',
      'Choisissez le fichier et vérifiez que l’origine du fichier indique 65001 : UTF-8 (cela corrige les accents) et que le délimiteur correspond à votre fichier.',
      'Appuyez sur Transformer les données si certaines colonnes doivent rester du texte, comme les codes postaux et les numéros de téléphone, et réglez leur type sur Texte.',
      'Appuyez sur Charger.',
    ],
    sections: [
      {
        heading: 'Ce qui se passe mal',
        paragraphs: [
          'Les zéros initiaux disparaissent : 01234 devient 1234, ce qui casse les codes postaux, les numéros de téléphone et les identifiants de produit.',
          'Les longs nombres passent en notation scientifique. Excel ne garde que 15 chiffres d’un nombre, donc un numéro de carte ou d’identité de 16 chiffres est abîmé pour de bon une fois enregistré comme nombre.',
          'Certains textes sont lus comme des dates. Une valeur comme 1-2 peut devenir le 2 janvier, et certains noms de gènes ont été malmenés ainsi, de façon restée célèbre.',
          'Les accents et les lettres non anglaises s’affichent comme des caractères étranges quand le fichier est en UTF-8 mais qu’Excel suppose un encodage plus ancien.',
        ],
      },
      {
        heading: 'Points-virgules et virgules',
        paragraphs: [
          'Dans les pays qui écrivent les décimales avec une virgule, Excel attend un point-virgule entre les colonnes, donc un CSV à virgules s’ouvre en une seule longue colonne. Le convertisseur de ce site regarde la première ligne et choisit le bon séparateur, et comprend aussi les valeurs entre guillemets qui contiennent des virgules.',
        ],
      },
      {
        heading: 'Dans l’autre sens',
        paragraphs: [
          'Pour enregistrer une feuille Excel en CSV pour une base de données ou un formulaire d’envoi, utilisez le convertisseur Excel en CSV. Il écrit par défaut un marqueur UTF-8 pour qu’Excel affiche correctement les accents quand vous rouvrez le CSV.',
        ],
      },
    ],
    faqs: [
      { q: 'Pourquoi mon CSV s’ouvre-t-il en une seule colonne ?', a: 'Le séparateur ne correspond pas à vos réglages régionaux. Convertir en XLSX, ou importer via l’onglet Données en choisissant le délimiteur, règle le problème.' },
      { q: 'Puis-je récupérer mes zéros initiaux après qu’Excel les a supprimés ?', a: 'Seulement si vous avez encore le CSV d’origine. Une fois qu’Excel a enregistré 1234 à la place de 01234, le zéro est perdu : gardez donc toujours le fichier d’origine.' },
      { q: 'Mon tableur est-il envoyé ?', a: 'Non. Les convertisseurs s’exécutent dans votre navigateur et le fichier ne quitte jamais votre appareil.' },
    ],
  },
  'how-to-convert-units-without-mistakes': {
    title: 'Comment convertir des unités sans erreur',
    description: 'Les pièges qui donnent de mauvaises réponses quand on convertit des unités : gallons américains et britanniques, 1000 ou 1024, tonnes, température et unités de terrain indiennes.',
    intro: 'Pour convertir des unités sans erreur, vérifiez à quel système appartient l’unité, utilisez un outil aux facteurs de conversion exacts et écrivez l’unité à côté de chaque nombre. La plupart des erreurs viennent d’unités qui portent le même nom mais désignent des quantités différentes.',
    steps: [
      'Écrivez le nombre avec son unité, par exemple 5 mi, et pas seulement 5.',
      'Vérifiez que l’unité signifie bien ce que vous croyez. Un gallon, une tonne et un bigha changent selon le pays ou l’État.',
      'Utilisez un convertisseur aux facteurs exacts, comme celui de longueurs ou de poids, et lisez la réponse avec son unité.',
      'Vérifiez l’ordre de grandeur : la réponse a-t-elle la bonne taille ? Un marathon de 42 km devrait donner près de 26 miles.',
      'Gardez le nombre et l’unité d’origine, et n’arrondissez qu’à la toute fin.',
    ],
    sections: [
      {
        heading: 'Des unités qui portent le même nom',
        paragraphs: [
          'Un gallon américain vaut 3,785 litres, mais un gallon britannique vaut 4,546 litres, soit environ 20 % de plus. Une tonne courte américaine fait 2000 livres, une tonne longue britannique 2240 livres et une tonne métrique 1000 kilogrammes.',
          'En informatique, 1 Ko fait 1000 octets pour les fabricants de disques et les forfaits mobiles, mais 1024 octets dans certains systèmes d’exploitation. C’est pourquoi un disque de 1 To affiche environ 931 Go. Les noms Kio, Mio et Gio désignent toujours 1024.',
        ],
      },
      {
        heading: 'La température est différente',
        paragraphs: [
          'La plupart des conversions multiplient par un facteur. Les échelles de température commencent à des zéros différents : il faut donc aussi ajouter ou soustraire. Les degrés Fahrenheit valent les degrés Celsius multipliés par 9/5, plus 32. C’est pourquoi doubler une température en Celsius ne double pas celle en Fahrenheit.',
        ],
      },
      {
        heading: 'Les unités de terrain locales',
        paragraphs: [
          'Un bigha n’a pas une taille fixe en Inde. Il fait environ 27 000 pieds carrés dans l’Uttar Pradesh, environ 17 424 au Gujarat et 14 400 au Bengale-Occidental et en Assam, et il peut différer d’un district à l’autre. Un gaj est un yard carré (9 pieds carrés). Pour tout usage juridique, utilisez le chiffre du registre foncier local.',
        ],
      },
      {
        heading: 'Pourquoi c’est important',
        paragraphs: [
          'En 1999, la NASA a perdu la sonde Mars Climate Orbiter parce que le logiciel d’une équipe utilisait des livres-force secondes et celui d’une autre attendait des newtons-secondes. Une confusion d’unités est une petite erreur aux grandes conséquences : gardez toujours l’unité avec le nombre.',
        ],
      },
    ],
    faqs: [
      { q: 'Combien y a-t-il de pieds dans un mètre ?', a: 'Environ 3,28084 pieds. Un pied vaut exactement 0,3048 mètre.' },
      { q: 'Dois-je arrondir les conversions ?', a: 'Seulement à la fin. Arrondir au milieu d’un calcul ajoute une erreur qui grossit à chaque étape.' },
      { q: 'Les convertisseurs sont-ils exacts ?', a: 'Ils utilisent les facteurs exacts définis et affichent jusqu’à 10 chiffres significatifs. Les unités de terrain indiennes sont approximatives par nature, car les définitions locales diffèrent.' },
    ],
  },
  'how-to-make-a-gif-from-a-video': {
    title: 'Comment faire un GIF à partir d’une vidéo',
    description: 'Transformez n’importe quel court extrait vidéo en GIF animé dans votre navigateur, et gardez un fichier assez léger pour l’envoyer.',
    intro: 'Pour faire un GIF à partir d’une vidéo, déposez l’extrait dans le convertisseur Vidéo en GIF, choisissez où il commence et combien de temps il dure, puis appuyez sur "Créer le GIF". Restez sous 10 secondes et sous 480 pixels de large, sinon le GIF devient énorme.',
    steps: [
      'Ouvrez Vidéo en GIF et déposez votre extrait (MP4, MOV, WEBM, MKV ou AVI).',
      'Réglez l’heure de début. Utilisez des secondes (90) ou des minutes et secondes (1:30).',
      'Réglez la durée en secondes. De trois à six secondes suffisent pour une réaction ou une démonstration.',
      'Choisissez une largeur. De 320 à 480 pixels convient aux applis de messagerie ; montez à 640 seulement si le détail compte.',
      'Choisissez 10 images par seconde pour un petit fichier, ou 15 à 20 pour un mouvement plus fluide, puis appuyez sur "Créer le GIF" et téléchargez-le.',
    ],
    sections: [
      {
        heading: 'Pourquoi les GIF deviennent si lourds',
        paragraphs: [
          'Un GIF stocke chaque image comme un dessin séparé et ne peut utiliser que 256 couleurs. Il n’y a aucune compression vidéo astucieuse : la durée, la largeur et le nombre d’images par seconde se multiplient. Diviser la largeur par deux ramène le fichier à environ un quart, et diviser le nombre d’images par deux le réduit encore de moitié.',
        ],
      },
      {
        heading: 'Ce qu’un GIF ne sait pas faire',
        paragraphs: [
          'Un GIF n’a aucun son. Si vous avez besoin d’audio, gardez l’extrait en MP4. Les photographies peuvent aussi paraître un peu granuleuses, car 256 couleurs, ce n’est pas beaucoup. C’est une limite du format, pas de l’outil.',
          'Si le GIF ne doit être montré que sur un site web ou dans une appli de messagerie récente, un MP4 qui boucle est généralement bien plus léger et plus net. Le convertisseur GIF en MP4 fait cela dans l’autre sens.',
        ],
      },
    ],
    faqs: [
      { q: 'Le GIF tourne-t-il en boucle ?', a: 'Oui. Les GIF créés ici tournent en boucle sans fin, ce que veulent la plupart des gens.' },
      { q: 'Puis-je ajouter du texte ou des autocollants ?', a: 'Pas dans cet outil. Il ne fait que couper et convertir. Ajoutez d’abord le texte à la vidéo dans un éditeur si vous en avez besoin.' },
      { q: 'La vidéo est-elle envoyée ?', a: 'Non. Le GIF est créé dans l’onglet de votre navigateur et l’extrait ne quitte jamais votre appareil.' },
    ],
  },
};

export default guides;
