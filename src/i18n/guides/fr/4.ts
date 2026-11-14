import type { GuideSet } from '../types';

/** French guides, batch 4. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-gif-to-mp4': {
    title: 'Comment convertir un GIF en MP4 pour l’alléger',
    description: 'Réduisez un GIF animé lourd en un petit MP4 qui se charge vite et se lit sur tous les téléphones.',
    intro: 'Pour convertir un GIF en MP4, déposez le GIF dans le convertisseur GIF en MP4 et appuyez sur "Convertir". Le MP4 est généralement bien plus léger et souvent plus net, car le GIF est limité à 256 couleurs et n’a pas de véritable compression vidéo.',
    steps: [
      'Ouvrez GIF en MP4 et déposez votre GIF dans la zone.',
      'Appuyez sur "Convertir".',
      'Téléchargez le MP4 et comparez sa taille à celle du GIF.',
      'Sur un site web, utilisez le MP4 dans une balise vidéo avec autoplay, loop et muted pour qu’il se comporte comme un GIF.',
    ],
    sections: [
      {
        heading: 'Pourquoi le MP4 gagne',
        paragraphs: [
          'Un GIF stocke chaque image comme un dessin complet. La vidéo MP4 ne stocke que ce qui change d’une image à la suivante : un GIF de 8 Mo peut donc passer bien sous 1 Mo en MP4. Les couleurs sont aussi meilleures, puisque la vidéo n’est pas limitée à 256 couleurs.',
        ],
      },
      {
        heading: 'Ce à quoi vous renoncez',
        paragraphs: [
          'Un GIF tourne en boucle tout seul et apparaît partout où une image peut apparaître. Un MP4 se lit une fois, sauf si on dit au lecteur ou à la page de le répéter. La plupart des applis sociales répètent seules les courts extraits, et sur votre propre site vous pouvez ajouter l’attribut loop.',
        ],
      },
      {
        heading: 'Utiliser le MP4 sur un site web',
        paragraphs: [
          'Pour qu’un MP4 se comporte comme un GIF sur votre propre page, mettez-le dans une balise vidéo avec les attributs autoplay, loop, muted et playsinline. Les navigateurs n’autorisent la lecture automatique que si la vidéo est muette, et playsinline empêche les iPhone de l’ouvrir en plein écran. Le résultat se charge plus vite, consomme moins de données et rend mieux que le GIF d’origine.',
        ],
      },
    ],
    faqs: [
      { q: 'Le MP4 a-t-il du son ?', a: 'Non. Un GIF n’a pas de son : il n’y a donc rien à transférer.' },
      { q: 'Puis-je retransformer le MP4 en GIF ?', a: 'Oui, avec Vidéo en GIF, mais il sera de nouveau lourd.' },
      { q: 'Le GIF est-il envoyé ?', a: 'Non. Il est converti dans l’onglet de votre navigateur.' },
    ],
  },
  'how-to-convert-csv-to-json': {
    title: 'Comment convertir du CSV en JSON',
    description: 'Transformez un tableau CSV en tableau JSON dans votre navigateur, avec la première ligne comme clés et les nombres conservés comme nombres.',
    intro: 'Pour convertir du CSV en JSON, collez votre CSV ou déposez le fichier dans le convertisseur CSV en JSON. La première ligne devient les clés et chaque autre ligne devient un objet : un tableau de noms et d’âges se transforme en liste d’enregistrements.',
    steps: [
      'Vérifiez que la première ligne de votre CSV contient les noms des colonnes.',
      'Ouvrez CSV en JSON et collez le texte, ou déposez le fichier dans la zone. Essayez d’abord l’exemple si vous voulez voir la forme.',
      'Lisez le JSON qui apparaît à droite pendant que vous tapez.',
      'Appuyez sur "Download .json", ou sur "Copy" pour le coller dans votre code ou un outil d’API.',
    ],
    sections: [
      {
        heading: 'À quoi ressemble le résultat',
        paragraphs: [
          'Un CSV avec les colonnes name, age et city devient un tableau d’objets comme {"name": "Asha", "age": 29, "city": "Pune"}. Les nombres simples et les mots true et false deviennent de vrais nombres et booléens JSON. Les valeurs comme 01234 restent du texte pour ne pas perdre les zéros initiaux des codes et des codes postaux.',
        ],
      },
      {
        heading: 'Virgules, guillemets et autres séparateurs',
        paragraphs: [
          'Les champs peuvent être entre guillemets doubles quand ils contiennent une virgule ou un saut de ligne, et un guillemet dans un champ s’écrit avec deux guillemets. Le convertisseur comprend tout cela. Il lit aussi les fichiers séparés par des points-virgules, des tabulations ou des barres verticales en regardant la première ligne, ce qui compte pour les fichiers exportés de tableurs dans les pays qui utilisent la virgule décimale.',
        ],
      },
    ],
    faqs: [
      { q: 'Et si une colonne n’a pas d’en-tête ?', a: 'Elle s’appelle column1, column2 et ainsi de suite : aucune donnée n’est perdue.' },
      { q: 'Puis-je revenir au CSV ?', a: 'Oui, avec JSON en CSV, qui transforme un tableau d’objets en lignes.' },
      { q: 'Mes données sont-elles envoyées ?', a: 'Non. La conversion se fait dans votre navigateur pendant que vous tapez.' },
    ],
  },
  'how-to-convert-json-to-csv': {
    title: 'Comment convertir du JSON en CSV pour Excel',
    description: 'Aplatissez un tableau JSON en un tableau CSV que vous pouvez ouvrir dans Excel ou Google Sheets, objets imbriqués compris.',
    intro: 'Pour convertir du JSON en CSV, collez un tableau d’objets dans le convertisseur JSON en CSV. Chaque objet devient une ligne et chaque clé une colonne, et les objets imbriqués sont aplatis en noms de colonnes à points comme address.city.',
    steps: [
      'Vérifiez que votre JSON est un tableau d’objets, comme [{"a":1},{"a":2}]. Un seul objet fonctionne aussi et donne une ligne.',
      'Ouvrez JSON en CSV et collez le JSON ou déposez le fichier .json.',
      'Regardez le CSV à droite. Les colonnes sont rassemblées à partir de tous les objets.',
      'Téléchargez le .csv et ouvrez-le dans Excel, ou utilisez CSV en Excel pour obtenir un vrai tableur.',
    ],
    sections: [
      {
        heading: 'Données imbriquées et clés manquantes',
        paragraphs: [
          'Le JSON peut imbriquer des objets dans des objets, mais un tableau n’a que des lignes et des colonnes. Le convertisseur aplatit chaque clé imbriquée en une colonne nommée avec un point : {"address": {"city": "Pune"}} devient une colonne appelée address.city. Les listes à l’intérieur d’une valeur sont conservées comme texte JSON dans une seule cellule.',
          'Si les objets ont des clés différentes, chaque clé trouvée quelque part devient une colonne, et les cellules sans valeur restent vides.',
        ],
      },
      {
        heading: 'Ouvrir le résultat dans Excel',
        paragraphs: [
          'Excel peut mal lire un CSV simple, en supprimant des zéros initiaux ou en modifiant de longs nombres. Pour un tableur avec lequel vous allez continuer à travailler, convertissez le CSV en XLSX avec le convertisseur CSV en Excel, qui garde les codes en texte.',
        ],
      },
    ],
    faqs: [
      { q: 'Et si mon JSON est invalide ?', a: 'La page affiche un message d’erreur à la place d’un résultat. Cherchez des guillemets ou des virgules manquants.' },
      { q: 'Puis-je convertir un fichier énorme ?', a: 'Les gros fichiers fonctionnent mais prennent plus de temps, car c’est votre navigateur qui travaille. Des fichiers de quelques mégaoctets ne posent pas de problème.' },
      { q: 'Est-ce envoyé ?', a: 'Non. Tout s’exécute sur votre appareil.' },
    ],
  },
  'how-to-save-an-excel-sheet-as-csv-with-accents': {
    title: 'Comment enregistrer Excel en CSV en gardant les accents corrects',
    description: 'Convertissez une feuille Excel en CSV et gardez les accents, les lettres turques et les symboles corrects grâce à un marqueur UTF-8.',
    intro: 'Pour convertir du Excel en CSV, déposez votre fichier .xlsx dans le convertisseur Excel en CSV et laissez coché le marqueur UTF-8. Chaque feuille devient son propre CSV, et le marqueur indique à Excel que le fichier est en UTF-8 : les accents et les lettres non anglaises restent corrects.',
    steps: [
      'Ouvrez Excel en CSV et déposez votre fichier .xlsx, .xls ou .ods.',
      'Laissez la case cochée pour ajouter un marqueur UTF-8 si vous rouvrirez le CSV dans Excel. Décochez-la pour les bases de données et les scripts que le marqueur gêne.',
      'Appuyez sur "Convertir".',
      'Téléchargez le CSV. Un classeur de plusieurs feuilles donne un CSV par feuille, portant le nom de la feuille.',
    ],
    sections: [
      {
        heading: 'Pourquoi les accents se cassent',
        paragraphs: [
          'Le CSV est du texte brut, et le texte peut être stocké dans différents encodages. Excel devine à l’ouverture d’un CSV. Si le fichier est en UTF-8 mais qu’Excel suppose un ancien encodage Windows, des lettres comme é, ü, ş ou ı apparaissent comme des caractères étranges. Un minuscule marqueur au début du fichier supprime la supposition.',
        ],
      },
      {
        heading: 'Ce que le CSV laisse de côté',
        paragraphs: [
          'Le CSV ne contient que des valeurs : ni formules, ni couleurs, ni graphiques, ni mise en forme. Vous obtenez les valeurs affichées par la feuille, avec les dates et les nombres écrits comme Excel les affiche. Les classeurs protégés par mot de passe ne peuvent pas être ouverts. Si vous avez besoin de la mise en forme, gardez le XLSX.',
        ],
      },
    ],
    faqs: [
      { q: 'Quel séparateur est utilisé ?', a: 'Une virgule, avec des guillemets autour de toute valeur contenant une virgule, un guillemet ou un saut de ligne.' },
      { q: 'Mon CSV affiche toujours de mauvaises lettres. Que faire ?', a: 'Le fichier est peut-être dans un autre encodage. Utilisez le correcteur d’encodage TXT pour le lire avec le bon et enregistrer une copie UTF-8 propre.' },
      { q: 'Le classeur est-il envoyé ?', a: 'Non. Il est lu et converti dans l’onglet de votre navigateur.' },
    ],
  },
  'how-to-convert-yaml-to-json-and-back': {
    title: 'Comment convertir du YAML en JSON et inversement',
    description: 'Passez une configuration de YAML à JSON et inversement dans votre navigateur, en évitant les pièges habituels de l’indentation et des commentaires.',
    intro: 'Pour convertir du YAML en JSON, collez le YAML dans le convertisseur YAML en JSON et copiez le JSON mis en forme. Pour l’autre sens, collez du JSON dans JSON en YAML. Les données restent les mêmes ; seul le style d’écriture change.',
    steps: [
      'Collez votre YAML dans le convertisseur YAML en JSON, ou déposez un fichier .yaml ou .yml.',
      'Si vous voyez une erreur, vérifiez l’indentation. Le YAML utilise des espaces, jamais des tabulations, pour montrer l’imbrication.',
      'Copiez ou téléchargez le JSON.',
      'Pour l’inverse, collez du JSON dans JSON en YAML afin d’obtenir un YAML lisible à deux espaces d’indentation.',
    ],
    sections: [
      {
        heading: 'Ce qui se perd',
        paragraphs: [
          'Les commentaires existent en YAML mais pas en JSON : ils sont donc supprimés à la conversion en JSON et ne peuvent pas être récupérés. Les ancres et les alias (les raccourcis &nom et *nom) sont développés en valeurs répétées ordinaires.',
          'Le convertisseur lit un seul document YAML. Si un fichier contient plusieurs documents séparés par trois tirets, convertissez chacun séparément.',
        ],
      },
      {
        heading: 'Pourquoi on change de format',
        paragraphs: [
          'Le YAML est plus facile à lire et à modifier à la main, c’est pourquoi les fichiers de configuration l’utilisent. Le JSON est plus strict et c’est ce que les API et la plupart des langages de programmation analysent nativement. Convertir permet de vérifier une configuration dans un outil JSON ou de transformer une réponse d’API en fichier lisible.',
        ],
      },
      {
        heading: 'Vérifier le résultat',
        paragraphs: [
          'Après la conversion, regardez les valeurs que le YAML peut lire comme des nombres. Une version sans guillemets comme 1.10 est lue comme le nombre 1,1, et un code comme 08 peut perdre son zéro : mettez donc entre guillemets, dans le YAML, les chaînes de version et les codes. Le convertisseur montre exactement ce que voit un analyseur YAML, ce qui permet de repérer rapidement ce genre de surprise avant qu’elle n’atteigne un vrai système.',
        ],
      },
    ],
    faqs: [
      { q: 'Pourquoi mon YAML donne-t-il une erreur ?', a: 'La cause la plus fréquente est une tabulation utilisée pour l’indentation, ou une indentation incohérente. Utilisez des espaces et gardez les éléments imbriqués alignés.' },
      { q: 'Les nombres et les booléens seront-ils bien typés ?', a: 'Oui. Des valeurs comme 42, 3.5, true et null deviennent de vrais types JSON.' },
      { q: 'Quelque chose est-il envoyé ?', a: 'Non. La conversion s’exécute dans l’onglet de votre navigateur.' },
    ],
  },
};

export default guides;
