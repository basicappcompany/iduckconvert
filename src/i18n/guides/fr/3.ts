import type { GuideSet } from '../types';

/** French guides, batch 3. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-wav-to-mp3': {
    title: 'Comment convertir du WAV en MP3 et alléger le fichier',
    description: 'Transformez de gros enregistrements WAV en petits fichiers MP3 et apprenez quel débit choisir pour la voix ou la musique.',
    intro: 'Pour convertir du WAV en MP3, déposez le WAV dans le convertisseur, choisissez un débit (192 kbit/s est un bon réglage par défaut) et appuyez sur "Convertir". Une minute de WAV qualité CD fait environ 10 Mo, alors que la même minute en MP3 à 192 kbit/s fait environ 1,4 Mo.',
    steps: [
      'Ouvrez WAV en MP3 et déposez vos fichiers. Vous pouvez en ajouter plusieurs à la fois.',
      'Choisissez une qualité. 128 kbit/s convient à la voix, 192 à la musique de tous les jours et 320 à la meilleure qualité MP3.',
      'Appuyez sur "Convertir".',
      'Téléchargez chaque MP3, ou tous dans un seul ZIP.',
    ],
    sections: [
      {
        heading: 'Pourquoi le WAV est si gros',
        paragraphs: [
          'Le WAV stocke le son brut, non compressé. Le stéréo qualité CD utilise environ 1411 kbit/s, soit à peu près 10 Mo par minute. Le MP3 supprime des détails que la plupart des oreilles n’entendent pas et conserve environ un septième des données à 192 kbit/s.',
        ],
      },
      {
        heading: 'Choisir un débit',
        paragraphs: [
          'Pour une réunion enregistrée ou une note vocale, 96 à 128 kbit/s suffisent largement et le fichier reste minuscule. Pour de la musique que vous écouterez sur des enceintes ou un casque, 192 à 256 est un équilibre raisonnable. Choisissez 320 seulement pour la musique qui compte et si vous avez la place.',
          'Le MP3 est avec perte : vous ne pouvez pas retrouver la qualité du WAV d’origine. Gardez le WAV si vous risquez de rééditer l’enregistrement.',
        ],
      },
      {
        heading: 'Un exemple d’enregistrement long',
        paragraphs: [
          'Un enregistrement d’une heure d’un cours ou d’une réunion fait environ 600 Mo en WAV stéréo qualité CD, mais seulement environ 58 Mo en MP3 à 128 kbit/s, ce qui est facile à envoyer par e-mail ou à stocker. Les enregistrements en mono font la moitié du stéréo dans les deux formats : un enregistrement vocal avec un seul micro est donc encore plus petit. Si vous comptez nettoyer le son dans un éditeur, éditez d’abord le WAV et faites le MP3 en dernier.',
        ],
      },
    ],
    faqs: [
      { q: 'Puis-je convertir beaucoup de WAV à la fois ?', a: 'Oui. Ils se convertissent l’un après l’autre et se téléchargent ensemble dans un ZIP.' },
      { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui, mais les longs enregistrements sont lents sur un téléphone. Un ordinateur est plus rapide.' },
      { q: 'Mes enregistrements sont-ils envoyés ?', a: 'Non. La conversion se fait dans l’onglet de votre navigateur.' },
    ],
  },
  'how-to-convert-m4a-to-mp3': {
    title: 'Comment convertir du M4A en MP3 (notes vocales et iTunes)',
    description: 'Transformez les notes vocales de l’iPhone et les fichiers M4A d’iTunes en MP3 pour qu’ils se lisent sur n’importe quel appareil ou s’envoient à n’importe qui.',
    intro: 'Pour convertir du M4A en MP3, déposez vos fichiers M4A dans le convertisseur M4A en MP3, choisissez un débit et appuyez sur "Convertir". Les notes vocales de l’iPhone et les achats iTunes sont en M4A, que certains lecteurs et sites web n’acceptent pas.',
    steps: [
      'Placez le fichier .m4a sur votre appareil. Les notes vocales peuvent être partagées vers Fichiers ou enregistrées sur votre ordinateur.',
      'Ouvrez M4A en MP3 et déposez le fichier.',
      'Choisissez un débit. 128 kbit/s convient à la voix ; prenez 192 ou plus pour la musique.',
      'Appuyez sur "Convertir" et téléchargez votre MP3.',
    ],
    sections: [
      {
        heading: 'Ce qu’est le M4A',
        paragraphs: [
          'Le M4A est de l’audio compressé en AAC dans un conteneur de type MP4. L’AAC sonne généralement un peu mieux que le MP3 à taille égale, c’est pourquoi Apple l’utilise. Le hic, c’est la compatibilité : les anciens lecteurs, certains autoradios et de nombreux formulaires web ne connaissent que le MP3.',
        ],
      },
      {
        heading: 'Un mot sur la qualité',
        paragraphs: [
          'Passer du M4A au MP3 revient à compresser une seconde fois un son déjà compressé, ce qui perd très légèrement plus. Utilisez 192 kbit/s ou plus pour la musique. Pour les enregistrements vocaux, la différence ne se remarque pas. Gardez le M4A d’origine si la qualité compte.',
        ],
      },
      {
        heading: 'Où trouver vos fichiers M4A',
        paragraphs: [
          'Sur un iPhone, ouvrez Dictaphone, touchez l’enregistrement, touchez les trois points et choisissez Partager ou Enregistrer dans Fichiers. Sur un Mac, les enregistrements se synchronisent via iCloud et apparaissent dans l’app Dictaphone, d’où vous pouvez les glisser sur le bureau en fichiers .m4a. La musique que vous avez importée ou achetée sans protection se trouve aussi dans le dossier de votre bibliothèque musicale sous forme de fichiers .m4a.',
        ],
      },
    ],
    faqs: [
      { q: 'Puis-je convertir des morceaux iTunes protégés ?', a: 'Non. Les morceaux protégés contre la copie ne peuvent pas être ouverts. Les fichiers que vous avez enregistrés vous-même et la musique achetée sans protection fonctionnent bien.' },
      { q: 'Garde-t-il le titre et l’artiste ?', a: 'Le convertisseur conserve les étiquettes de base quand il le peut, mais vérifiez le résultat dans votre lecteur.' },
      { q: 'Est-ce envoyé ?', a: 'Non. Cela s’exécute dans votre navigateur.' },
    ],
  },
  'how-to-convert-flac-to-mp3': {
    title: 'Comment convertir du FLAC en MP3 pour votre téléphone ou votre voiture',
    description: 'Créez de petites copies MP3 de votre musique FLAC pour téléphones et autoradios, et gardez les originaux sans perte en sécurité.',
    intro: 'Pour convertir du FLAC en MP3, déposez les fichiers dans le convertisseur FLAC en MP3, choisissez 256 ou 320 kbit/s et appuyez sur "Convertir". Le FLAC est sans perte mais lourd et pas accepté partout, alors que le MP3 se lit sur tout.',
    steps: [
      'Ouvrez FLAC en MP3 et déposez un morceau ou un album entier.',
      'Choisissez 256 kbit/s pour un bon équilibre ou 320 pour la meilleure qualité MP3.',
      'Appuyez sur "Convertir" et attendez la fin de chaque morceau.',
      'Téléchargez les fichiers MP3, ou tout le lot dans un ZIP, et copiez-les sur votre téléphone ou votre clé USB.',
    ],
    sections: [
      {
        heading: 'Sans perte contre avec perte',
        paragraphs: [
          'Le FLAC conserve chaque détail de l’enregistrement et fait en général environ la moitié de la taille de la même musique en WAV. Le MP3 supprime les sons que la plupart des auditeurs ne regrettent pas, donc les fichiers sont bien plus petits. Une fois converti, le détail perdu ne peut pas être récupéré.',
        ],
      },
      {
        heading: 'Gardez vos fichiers FLAC',
        paragraphs: [
          'Considérez le MP3 comme une copie de voyage. Gardez les originaux FLAC pour pouvoir faire une nouvelle copie dans un autre format plus tard. Si vous voulez seulement que votre musique se lise sur un ordinateur, un téléphone récent ou un bon casque, le FLAC lui-même fonctionne souvent et aucune conversion n’est nécessaire.',
        ],
      },
      {
        heading: 'Ce que cela change pour votre stockage',
        paragraphs: [
          'Un album de 40 minutes fait environ 200 à 300 Mo en FLAC et environ 100 Mo en MP3 à 320 kbit/s : le même téléphone peut donc contenir deux à trois fois plus d’albums. C’est la vraie raison de faire des copies MP3 : la place et la compatibilité, pas un meilleur son. Si la place n’est pas un problème et que votre lecteur accepte le FLAC, il n’y a pas besoin de convertir.',
        ],
      },
    ],
    faqs: [
      { q: 'Quel débit est le meilleur ?', a: '320 kbit/s est le maximum permis par le MP3 et reste presque transparent pour la plupart des gens. 256 est un choix plus léger que peu de personnes distinguent.' },
      { q: 'Puis-je convertir un album entier ?', a: 'Oui. Déposez tous les morceaux et téléchargez le résultat dans un ZIP.' },
      { q: 'Est-ce envoyé ?', a: 'Non. Votre musique reste sur votre appareil.' },
    ],
  },
  'how-to-convert-opus-to-mp3': {
    title: 'Comment convertir des notes vocales OPUS et OGG en MP3',
    description: 'Ouvrez les notes vocales WhatsApp et autres audios OPUS ou OGG n’importe où en les convertissant en MP3 dans votre navigateur.',
    intro: 'Pour convertir une note vocale OPUS en MP3, déposez le fichier dans le convertisseur OPUS en MP3 et appuyez sur "Convertir". Les messages vocaux WhatsApp sont enregistrés en fichiers .opus, que de nombreux lecteurs et éditeurs ne savent pas ouvrir.',
    steps: [
      'Enregistrez la note vocale de votre appli de messagerie sur votre appareil (partagez-la vers Fichiers ou votre ordinateur).',
      'Ouvrez OPUS en MP3 pour les fichiers .opus, ou OGG en MP3 pour les fichiers .ogg.',
      'Déposez le fichier et choisissez un débit. 96 à 128 kbit/s suffisent largement pour la voix.',
      'Appuyez sur "Convertir" et téléchargez le MP3.',
    ],
    sections: [
      {
        heading: 'Pourquoi les notes vocales sont en OPUS',
        paragraphs: [
          'L’OPUS est un format ouvert moderne qui rend la voix claire à très faible débit, c’est pourquoi les applis de messagerie l’utilisent. Il est stocké dans un conteneur Ogg, donc les fichiers sont petits. Le revers, c’est la compatibilité : les anciens lecteurs, les applis de musique de nombreux téléphones et la plupart des éditeurs audio ne le reconnaissent pas.',
        ],
      },
      {
        heading: 'Faciliter une transcription ou une édition',
        paragraphs: [
          'Convertir en MP3 vous permet d’ouvrir l’enregistrement dans des éditeurs courants, de le joindre à un e-mail ou de le donner à un outil de transcription qui n’accepte pas l’OPUS. Pour la voix, un MP3 à 128 kbit/s est largement suffisant.',
        ],
      },
      {
        heading: 'Beaucoup de notes vocales à la fois',
        paragraphs: [
          'Si vous avez toute une conversation de notes vocales, déposez-les toutes ensemble et téléchargez les MP3 dans un seul ZIP. Les fichiers convertis gardent leur nom d’origine : toute date ou tout numéro dans le nom reste avec l’enregistrement et ils restent faciles à trier.',
        ],
      },
    ],
    faqs: [
      { q: 'Quelle est la différence entre OPUS et OGG ?', a: 'OGG est le conteneur et Vorbis était son format audio d’origine. L’audio OPUS est aussi stocké dans un conteneur Ogg, c’est pourquoi les fichiers peuvent se ressembler.' },
      { q: 'Est-ce que ça marche pour une très longue note vocale ?', a: 'Oui. Les notes vocales sont petites : même les longues se convertissent vite.' },
      { q: 'Ma note vocale est-elle envoyée ?', a: 'Non. La conversion se fait dans l’onglet de votre navigateur et rien n’est envoyé nulle part.' },
    ],
  },
  'how-to-convert-aac-to-mp3': {
    title: 'Comment convertir du AAC en MP3',
    description: 'Convertissez des fichiers audio AAC en MP3 pour qu’ils se lisent sur les anciens lecteurs, les autoradios et les sites qui n’acceptent que le MP3.',
    intro: 'Pour convertir du AAC en MP3, déposez votre fichier .aac dans le convertisseur AAC en MP3, choisissez un débit et appuyez sur "Convertir". L’AAC est le successeur du MP3, mais un simple fichier .aac n’est pas accepté partout.',
    steps: [
      'Ouvrez AAC en MP3 et déposez vos fichiers.',
      'Choisissez 192 kbit/s pour la musique de tous les jours ou 128 pour la voix.',
      'Appuyez sur "Convertir".',
      'Téléchargez le MP3, ou un ZIP si vous en avez converti plusieurs.',
    ],
    sections: [
      {
        heading: 'AAC, M4A et MP3',
        paragraphs: [
          'L’AAC est une méthode de compression, généralement enveloppée dans un fichier M4A ou MP4. Un fichier .aac brut n’a aucune enveloppe, ce qui le rend moins courant et moins bien pris en charge que le M4A. Le MP3 est plus ancien mais compris par pratiquement tous les appareils.',
        ],
      },
      {
        heading: 'Qualité',
        paragraphs: [
          'L’AAC et le MP3 sont tous deux avec perte. Convertir l’un en l’autre perd un peu plus de détails : choisissez 192 kbit/s ou plus pour la musique et gardez l’original AAC si vous tenez au meilleur son.',
        ],
      },
      {
        heading: 'Distinguer les types de fichiers',
        paragraphs: [
          'Un fichier en .aac est un flux brut d’audio AAC. Un fichier en .m4a contient de l’AAC dans une enveloppe qui stocke aussi le titre, l’artiste et la pochette, et un .mp4 peut contenir de l’audio AAC avec de la vidéo. Renommer l’un en l’autre ne marche pas toujours, car l’enveloppe est différente. Si un appareil refuse le fichier, convertir est la solution fiable, et le M4A est la meilleure enveloppe à garder si l’appareil l’accepte.',
        ],
      },
    ],
    faqs: [
      { q: 'Dois-je plutôt utiliser le M4A ?', a: 'Si l’appareil l’accepte, le M4A est une meilleure enveloppe pour l’AAC. Choisissez le MP3 quand il vous faut la compatibilité la plus large.' },
      { q: 'Puis-je convertir du MP3 en AAC ?', a: 'MP3 en M4A crée un fichier AAC dans une enveloppe M4A, que la plupart des appareils récents lisent.' },
      { q: 'Est-ce envoyé ?', a: 'Non. Cela reste dans votre navigateur.' },
    ],
  },
};

export default guides;
