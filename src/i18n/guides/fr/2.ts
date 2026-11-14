import type { GuideSet } from '../types';

/** French guides, batch 2. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-compress-a-video-to-send-it': {
    title: 'Comment compresser une vidéo pour l’envoyer',
    description: 'Réduisez une grosse vidéo pour l’e-mail ou les applis de messagerie en baissant sa qualité et sa largeur, sans rien installer.',
    intro: 'Pour compresser une vidéo, ouvrez l’outil Compresser une vidéo, déposez-la, choisissez la qualité "Small" et une largeur de 720 pixels, puis appuyez sur "Compresser". Réduire la largeur fait gagner le plus de place, et une réduction de 50 à 90 pour cent est courante.',
    steps: [
      'Vérifiez la taille à atteindre. Beaucoup de services de messagerie s’arrêtent à 20 ou 25 Mo.',
      'Ouvrez Compresser une vidéo et déposez votre fichier. Les longues vidéos de téléphone sont les coupables habituels.',
      'Choisissez une largeur. 720 pixels s’affiche bien sur un écran de téléphone ; 480 est encore plus léger.',
      'Choisissez une qualité. "Medium" convient à la plupart des extraits. Prenez "Small" seulement quand la limite de taille compte plus que l’aspect.',
      'Appuyez sur "Compresser", puis comparez les tailles avant et après affichées avec votre téléchargement.',
    ],
    sections: [
      {
        heading: 'Ce qui alourdit vraiment une vidéo',
        paragraphs: [
          'La taille dépend de la durée, des dimensions de l’image et du niveau de compression. Un enregistrement de téléphone en 1080p ou en 4K contient bien plus de détails qu’un petit écran ne peut en montrer. Passer à 720 pixels de large supprime des détails que personne ne voit et réduit énormément le fichier.',
          'Si elle reste trop lourde, raccourcissez-la d’abord avec Couper une vidéo. Retirer la minute dont vous n’avez pas besoin vaut mieux que de comprimer plus fort toute la vidéo.',
        ],
      },
      {
        heading: 'Limites à connaître',
        paragraphs: [
          'Tout s’exécute sur votre propre appareil : un fichier très gros peut donc être lent ou manquer de mémoire, surtout sur un téléphone. Nous conseillons des fichiers de moins de 500 Mo sur ordinateur et de 100 Mo sur téléphone. Pour un fichier plus gros, utilisez un ordinateur.',
        ],
      },
    ],
    faqs: [
      { q: 'Compresser réduit-il la qualité ?', a: 'Oui, toujours un peu. Compresser échange du détail contre de la taille. Gardez votre original au cas où vous voudriez une meilleure version plus tard.' },
      { q: 'Quel format j’obtiens ?', a: 'Un MP4, qui se lit presque partout.' },
      { q: 'Puis-je compresser plusieurs vidéos à la fois ?', a: 'Oui. Elles passent l’une après l’autre et vous pouvez les télécharger ensemble dans un ZIP.' },
    ],
  },
  'how-to-trim-a-video-without-software': {
    title: 'Comment couper une vidéo sans logiciel',
    description: 'Retirez le début et la fin d’une vidéo dans votre navigateur en tapant deux heures. Aucun éditeur à installer, rien d’envoyé.',
    intro: 'Pour couper une vidéo, ouvrez l’outil Couper une vidéo, déposez le fichier, saisissez l’heure de début et de fin, puis appuyez sur "Couper". L’extrait coupé est enregistré en MP4. Utilisez des secondes (90) ou des minutes et secondes (1:30).',
    steps: [
      'Lisez votre vidéo dans n’importe quel lecteur et notez l’heure où vous voulez qu’elle commence et se termine.',
      'Ouvrez Couper une vidéo et déposez le fichier.',
      'Saisissez l’heure de début. Laissez 0 pour garder le début.',
      'Saisissez l’heure de fin. Laissez vide pour garder tout ce qui suit le début.',
      'Appuyez sur "Couper" et téléchargez le MP4.',
    ],
    sections: [
      {
        heading: 'Comment la coupe est faite',
        paragraphs: [
          'L’extrait est encodé de nouveau après la coupe, donc le début est exact à l’image près. Une coupe par simple copie est plus rapide mais ne peut commencer qu’à certains points de la vidéo, ce qui laisse souvent un début figé ou noir. Ré-encoder prend plus de temps mais évite cela.',
          'Comme il y a ré-encodage, la qualité baisse très légèrement. Un réglage de haute qualité est utilisé, et la plupart des gens ne verront pas la différence.',
        ],
      },
      {
        heading: 'Saisir les heures',
        paragraphs: [
          'Un nombre seul est en secondes : 90 veut dire une minute trente. Deux parties signifient minutes et secondes (1:30), et trois parties incluent les heures (1:02:30). Les décimales fonctionnent aussi, par exemple 12,5.',
        ],
      },
      {
        heading: 'Bien choisir les heures',
        paragraphs: [
          'Ouvrez la vidéo dans un lecteur qui affiche le temps, mettez en pause au moment où vous voulez commencer et notez l’heure, puis faites de même pour la fin. Laissez une ou deux secondes de marge à chaque bout : il est facile de couper encore, mais impossible de récupérer des images coupées. Si l’extrait est destiné à un GIF, quelques secondes suffisent, et Vidéo en GIF a ses propres cases de début et de durée : inutile de couper avant.',
        ],
      },
    ],
    faqs: [
      { q: 'Puis-je enlever le milieu ?', a: 'Pas en une seule fois. Coupez séparément la partie avant et la partie après, ou utilisez un éditeur vidéo complet pour assembler des extraits.' },
      { q: 'Couper réduit-il aussi la taille du fichier ?', a: 'En général oui, car il y a moins de vidéo. Pour gagner davantage, utilisez aussi Compresser une vidéo.' },
      { q: 'Ma vidéo est-elle envoyée ?', a: 'Non. Tout se passe dans l’onglet de votre navigateur.' },
    ],
  },
  'how-to-convert-mov-to-mp4': {
    title: 'Comment convertir du MOV en MP4 (vidéos d’iPhone)',
    description: 'Faites lire les vidéos MOV d’iPhone et de Mac sur Android, Windows et toutes les applis en les convertissant en MP4 dans votre navigateur.',
    intro: 'Pour convertir du MOV en MP4, ouvrez le convertisseur MOV en MP4, déposez votre vidéo et appuyez sur "Convertir". Le MP4 se lit sur Android, Windows, les téléviseurs connectés et toutes les applis sociales : c’est le format sûr pour partager une vidéo d’iPhone.',
    steps: [
      'Placez le fichier .mov sur votre ordinateur ou votre téléphone (AirDrop, câble ou iCloud).',
      'Ouvrez MOV en MP4 et déposez le fichier dans la zone.',
      'Appuyez sur "Convertir". La première fois, votre navigateur télécharge le moteur du convertisseur (environ 30 Mo), qui est ensuite mis en cache.',
      'Téléchargez le MP4 quand la barre de progression est terminée.',
    ],
    sections: [
      {
        heading: 'Pourquoi les vidéos d’iPhone sont en MOV',
        paragraphs: [
          'Les iPhone enregistrent dans le conteneur QuickTime d’Apple, le MOV. Selon le réglage de votre appareil photo, la vidéo à l’intérieur est en H.264 ou en HEVC, plus récent. Les appareils Apple gèrent les deux, mais de nombreux PC Windows, téléphones Android, éditeurs et sites web n’ouvrent pas la vidéo HEVC sans logiciel supplémentaire.',
          'Le convertisseur écrit de la vidéo H.264 standard dans une enveloppe MP4, acceptée presque partout.',
        ],
      },
      {
        heading: 'L’éviter dès la source',
        paragraphs: [
          'Sur l’iPhone, vous pouvez enregistrer dans un format plus compatible : Réglages, Appareil photo, Formats, "Le plus compatible". Les fichiers sont plus gros, mais s’ouvrent partout sans conversion.',
        ],
      },
      {
        heading: 'Si le fichier converti ne se lit pas',
        paragraphs: [
          'Vérifiez d’abord que le téléchargement est terminé, puis essayez un autre lecteur comme VLC. Si un très vieux téléphone ou téléviseur refuse encore le MP4, la vidéo est peut-être simplement trop grosse ou trop nette pour lui : passez-la dans Compresser une vidéo à 720 pixels de large. Gardez le MOV d’origine, car il contient l’enregistrement en pleine qualité et vous pourrez toujours en refaire un MP4 plus tard.',
        ],
      },
    ],
    faqs: [
      { q: 'La qualité va-t-elle baisser ?', a: 'Légèrement, car la vidéo est encodée de nouveau. Un réglage de haute qualité est utilisé, donc la plupart des gens ne s’en aperçoivent pas.' },
      { q: 'Le son est-il conservé ?', a: 'Oui, le son est converti en AAC, le format audio habituel du MP4.' },
      { q: 'Est-ce gratuit pour les longues vidéos ?', a: 'C’est gratuit et sans limite propre, mais les longues vidéos sont lentes sur téléphone. Nous conseillons des fichiers de moins de 500 Mo sur ordinateur et de 100 Mo sur téléphone.' },
    ],
  },
  'how-to-convert-mkv-to-mp4': {
    title: 'Comment convertir du MKV en MP4',
    description: 'Faites lire les vidéos MKV sur les téléphones, les téléviseurs et les éditeurs en les convertissant en MP4 dans votre navigateur.',
    intro: 'Pour convertir du MKV en MP4, ouvrez le convertisseur MKV en MP4, déposez la vidéo et appuyez sur "Convertir". Le MKV est un conteneur souple que beaucoup de téléphones et de téléviseurs refusent de lire, alors que le MP4 fonctionne presque partout.',
    steps: [
      'Ouvrez MKV en MP4 et déposez votre fichier .mkv dans la zone.',
      'Appuyez sur "Convertir" et attendez la barre de progression.',
      'Téléchargez le MP4 et essayez-le sur l’appareil qui ne lisait pas le MKV.',
    ],
    sections: [
      {
        heading: 'Ce qu’est le MKV',
        paragraphs: [
          'Le MKV (Matroska) est un conteneur, une boîte qui peut contenir de la vidéo, plusieurs pistes audio, des sous-titres et des chapitres. Il est populaire pour les téléchargements et les sauvegardes de Blu-ray parce qu’il est très souple, mais les galeries de téléphone, de nombreux téléviseurs et éditeurs ne le gèrent pas.',
        ],
      },
      {
        heading: 'À quoi s’attendre',
        paragraphs: [
          'La vidéo et l’audio principaux sont convertis au standard MP4. Ne comptez pas sur le passage des pistes audio supplémentaires, des sous-titres ou des chapitres. Si un fichier dépend d’une piste de sous-titres précise, vérifiez le MP4 avant de supprimer le MKV.',
          'Les gros MKV, comme des films entiers, sont lourds à convertir dans un navigateur. Nous conseillons des fichiers de moins de 500 Mo sur ordinateur. Pour les films, un convertisseur de bureau sera plus rapide.',
        ],
      },
      {
        heading: 'Lire du MKV sans convertir',
        paragraphs: [
          'Certains lecteurs ouvrent directement le MKV, dont VLC sur ordinateur et de nombreuses applis multimédias sur téléphone et téléviseur connecté : la conversion n’est donc nécessaire que lorsqu’un appareil précis refuse le fichier. Si vous voulez garder exactement toutes les pistes de sous-titres et d’audio, un lecteur compatible MKV vaut mieux qu’une conversion.',
        ],
      },
    ],
    faqs: [
      { q: 'Pourquoi ne pas simplement renommer .mkv en .mp4 ?', a: 'Renommer ne change que l’étiquette. Le contenu reste du MKV, donc les lecteurs qui ne savent pas lire le MKV échouent toujours. Il faut convertir le fichier.' },
      { q: 'La qualité sera-t-elle la même ?', a: 'Presque. La vidéo est encodée de nouveau avec un réglage de haute qualité, donc il y a une petite perte.' },
      { q: 'Le fichier est-il envoyé ?', a: 'Non. Il est converti dans l’onglet de votre navigateur.' },
    ],
  },
  'how-to-convert-webm-to-mp4': {
    title: 'Comment convertir du WEBM en MP4',
    description: 'Transformez des vidéos WEBM et des enregistrements d’écran en MP4 pour qu’ils s’ouvrent dans les éditeurs, les téléviseurs et les galeries de téléphone.',
    intro: 'Pour convertir du WEBM en MP4, déposez le fichier dans le convertisseur WEBM en MP4 et appuyez sur "Convertir". Les navigateurs lisent le WEBM sans problème, mais de nombreux éditeurs, téléviseurs et galeries de téléphone n’acceptent que le MP4.',
    steps: [
      'Ouvrez WEBM en MP4 et déposez votre fichier dans la zone.',
      'Appuyez sur "Convertir" et attendez la fin de la barre de progression.',
      'Téléchargez le MP4 et utilisez-le partout où le WEBM était refusé.',
    ],
    sections: [
      {
        heading: 'D’où viennent les fichiers WEBM',
        paragraphs: [
          'Les enregistreurs d’écran des navigateurs, certains outils de téléchargement en ligne et de nombreuses vidéos de sites web utilisent le WEBM, un format ouvert conçu pour le web. Il est léger et se lit dans tous les navigateurs, mais les éditeurs de bureau, les téléviseurs, les consoles de jeu et les applis photo des téléphones ne le reconnaissent souvent pas.',
        ],
      },
      {
        heading: 'Dans l’autre sens',
        paragraphs: [
          'Si vous voulez une petite vidéo pour votre propre site web, le WEBM est un bon choix et MP4 en WEBM fait la conversion inverse. Pour partager avec d’autres personnes, le MP4 est le format le plus sûr.',
        ],
      },
      {
        heading: 'Où le WEBM fonctionne et où il ne fonctionne pas',
        paragraphs: [
          'Chrome, Firefox et Edge lisent directement le WEBM, et les logiciels Apple récents le gèrent dans bien des cas, mais la prise en charge est inégale. Les éditeurs vidéo de bureau, les téléviseurs, les consoles de jeu et les galeries de téléphone acceptent généralement le MP4 et peuvent ne pas accepter le WEBM du tout. Quand vous ne savez pas ce qui ouvrira le fichier, le MP4 est le format qui fonctionne. Si vous ne le regarderez que dans un navigateur, le WEBM convient tel quel et convertir ne change rien d’utile.',
        ],
      },
    ],
    faqs: [
      { q: 'Le son sera-t-il conservé ?', a: 'Oui. L’audio du WEBM est converti en AAC dans le MP4.' },
      { q: 'Pourquoi le MP4 est-il plus gros ?', a: 'Le WEBM compresse très bien, donc le MP4 est souvent un peu plus gros à qualité similaire. Utilisez Compresser une vidéo si vous le voulez plus petit.' },
      { q: 'Est-ce que ça marche pour les enregistrements d’écran ?', a: 'Oui. Les enregistrements issus d’outils de navigateur se convertissent comme n’importe quel autre fichier WEBM.' },
    ],
  },
};

export default guides;
