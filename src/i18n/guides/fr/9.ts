import type { GuideSet } from '../types';

/** French guides, batch 9. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-calories-to-kilojoules': {
    title: 'Comment convertir des calories en kilojoules et en kWh',
    description: 'Convertissez les calories des aliments (kcal) en kilojoules et en unités d’électricité, et voyez pourquoi une Calorie n’est pas une calorie.',
    intro: 'Pour convertir des kilocalories en kilojoules, multipliez par 4,184. Ainsi, 2000 kcal font 8368 kJ. Le chiffre en kcal sur l’étiquette d’un aliment est ce que l’on appelle une Calorie. Le convertisseur d’énergie donne aussi les joules, wattheures, kilowattheures et BTU.',
    steps: [
      'Repérez l’énergie sur l’étiquette. Beaucoup d’étiquettes donnent à la fois les kcal et les kJ.',
      'Multipliez les kcal par 4,184 pour obtenir des kJ : 250 kcal × 4,184 = 1046 kJ.',
      'Divisez les kJ par 4,184 pour obtenir des kcal.',
      'Ou ouvrez le convertisseur d’énergie et choisissez les deux unités.',
    ],
    sections: [
      {
        heading: 'Calorie ou kilocalorie',
        paragraphs: [
          'Une petite calorie est l’énergie nécessaire pour réchauffer un gramme d’eau d’un degré Celsius, soit environ 4,184 joules. L’énergie des aliments se compte en kilocalories, soit 1000 petites calories, et s’écrit Calorie avec un C majuscule ou simplement kcal. Quand une étiquette indique 250 calories, cela veut dire 250 kcal. Le convertisseur d’énergie propose les deux : choisissez kcal pour la nourriture.',
        ],
      },
      {
        heading: 'Électricité',
        paragraphs: [
          'Un kilowattheure, l’unité d’une facture d’électricité, fait exactement 3,6 millions de joules, soit 3600 kJ. Cela représente environ 860 kcal. Un radiateur de 1000 watts qui fonctionne une heure consomme un kWh. Le BTU, courant pour les climatiseurs et les appareils de chauffage, fait environ 1055 joules.',
        ],
      },
      {
        heading: 'Lire les étiquettes alimentaires',
        paragraphs: [
          'Les étiquettes peuvent indiquer l’énergie pour 100 grammes et par portion : comparez donc sur la même base. De nombreux pays impriment à la fois les kJ et les kcal, et l’apport de référence quotidien habituel est d’environ 2000 kcal, soit à peu près 8400 kJ. Si vous suivez votre alimentation, tenez-vous à une seule unité pour que les chiffres de différents paquets s’additionnent correctement.',
        ],
      },
    ],
    faqs: [
      { q: 'Combien de kJ font 100 kcal ?', a: '418,4 kJ.' },
      { q: 'Combien de kcal fait 1 kWh ?', a: 'Environ 860 kcal.' },
      { q: 'Un kilojoule est-il la même chose qu’une kilocalorie ?', a: 'Non. Une kilocalorie est environ 4,18 fois plus grande qu’un kilojoule.' },
    ],
  },
  'how-to-convert-avi-to-mp4': {
    title: 'Comment convertir de l’AVI en MP4',
    description: 'Faites lire sur téléphones et téléviseurs les vieilles vidéos AVI d’appareils photo et de téléchargements en les convertissant en MP4 dans votre navigateur.',
    intro: 'Pour convertir de l’AVI en MP4, déposez la vidéo dans le convertisseur AVI vers MP4 et appuyez sur Convertir. L’AVI est un format des années 1990 que de nombreux téléphones, téléviseurs et applications n’ouvrent plus, alors que le MP4 se lit presque partout.',
    steps: [
      'Ouvrez AVI vers MP4 et déposez votre fichier dans la zone.',
      'Appuyez sur Convertir. La première fois, votre navigateur télécharge le moteur du convertisseur (environ 30 Mo) et le met en cache.',
      'Attendez la fin de la barre de progression.',
      'Téléchargez le MP4 et vérifiez qu’il se lit sur l’appareil qui refusait l’AVI.',
    ],
    sections: [
      {
        heading: 'Pourquoi l’AVI pose problème',
        paragraphs: [
          'L’AVI a été introduit par Microsoft au début des années 1990. C’est seulement un conteneur, et la vidéo à l’intérieur peut utiliser l’un de nombreux codecs anciens. Certains fichiers AVI se lisent parfaitement et d’autres affichent un écran noir ou n’ont pas de son sur les appareils modernes, car le codec à l’intérieur n’est plus pris en charge. La conversion réécrit la vidéo dans la combinaison standard H.264 et AAC utilisée par le MP4.',
        ],
      },
      {
        heading: 'Anciens clips d’appareils photo',
        paragraphs: [
          'Les anciens appareils photo numériques, caméscopes et enregistreurs d’écran sauvegardaient en AVI. Ces fichiers sont souvent volumineux et de faible résolution. Après la conversion, essayez Compresser une vidéo si vous voulez un fichier plus petit à envoyer, et gardez l’AVI d’origine comme copie de référence.',
        ],
      },
      {
        heading: 'Sous-titres et fichiers séparés',
        paragraphs: [
          'Certains téléchargements AVI viennent avec un fichier de sous-titres séparé. Convertir la vidéo ne les fusionne pas, et le MP4 ne récupérera pas les sous-titres tout seul. Gardez le fichier de sous-titres dans le même dossier avec le même nom que le nouveau MP4, ce que cherchent la plupart des lecteurs de bureau.',
        ],
      },
    ],
    faqs: [
      { q: 'Cela marchera-t-il avec n’importe quel AVI ?', a: 'Avec la plupart. Un fichier endommagé ou un codec inhabituel peut échouer, et la page affiche un message clair quand elle ne peut pas lire un fichier.' },
      { q: 'La qualité d’image va-t-elle s’améliorer ?', a: 'Non. La conversion ne peut pas ajouter de détails que l’original n’avait pas.' },
      { q: 'Est-il envoyé ?', a: 'Non. Il est converti dans l’onglet de votre navigateur.' },
    ],
  },
  'how-to-convert-mp3-to-wav': {
    title: 'Comment convertir du MP3 en WAV (et ce que cela ne corrigera pas)',
    description: 'Transformez des fichiers MP3 en WAV pour les éditeurs, la gravure de CD et le matériel qui veut de l’audio non compressé.',
    intro: 'Pour convertir du MP3 en WAV, déposez vos fichiers MP3 dans le convertisseur MP3 vers WAV et appuyez sur Convertir. Le WAV est environ dix fois plus gros et ne sonne pas mieux, mais certains éditeurs, échantillonneurs et outils de gravure de CD veulent du WAV.',
    steps: [
      'Ouvrez MP3 vers WAV et déposez vos fichiers.',
      'Appuyez sur Convertir. Il n’y a aucun réglage de qualité, car le WAV n’est pas compressé.',
      'Téléchargez le WAV, ou un ZIP pour plusieurs fichiers.',
      'Utilisez-le dans votre éditeur ou votre logiciel de gravure.',
    ],
    sections: [
      {
        heading: 'Ce que cela peut et ne peut pas faire',
        paragraphs: [
          'Un MP3 a déjà perdu des détails pour devenir petit, et ces détails ne peuvent pas être récupérés. Un WAV créé à partir d’un MP3 sonne exactement comme le MP3, mais stocké sans compression. L’intérêt de la conversion est la compatibilité et l’édition, pas la qualité.',
        ],
      },
      {
        heading: 'Pourquoi les éditeurs préfèrent le WAV',
        paragraphs: [
          'Modifier plusieurs fois de l’audio compressé et l’enregistrer à chaque fois en MP3 ajoute davantage de pertes à chaque sauvegarde. Travailler en WAV évite cela, et vous encodez en MP3 une seule fois à la fin. Le WAV est aussi le format qu’attendent beaucoup d’outils audio pour la vidéo, de moteurs de jeu et d’échantillonneurs matériels.',
          'Une minute de WAV stéréo fait environ 10 Mo, donc un long enregistrement donne un très gros fichier. Nous conseillons de garder les fichiers sous environ 500 Mo sur un ordinateur.',
        ],
      },
      {
        heading: 'Fréquence d’échantillonnage et profondeur de bits',
        paragraphs: [
          'Le WAV garde la fréquence d’échantillonnage du MP3, couramment 44,1 ou 48 kHz, et est écrit en son 16 bits, ce qu’utilisent les CD. Des réglages plus élevés comme 24 bits n’apporteraient rien, car le MP3 n’a jamais contenu cette information supplémentaire. Si votre outil demande une fréquence précise, rééchantillonnez dans l’éditeur plutôt que de deviner ici.',
        ],
      },
    ],
    faqs: [
      { q: 'Mon CD sonnera-t-il mieux à partir d’un WAV ?', a: 'Non. Il sonnera comme le MP3, car le détail d’origine a disparu.' },
      { q: 'Quels réglages WAV sont utilisés ?', a: 'PCM 16 bits à la même fréquence d’échantillonnage que le MP3, le type le plus largement accepté.' },
      { q: 'Est-il envoyé ?', a: 'Non. Il est converti dans l’onglet de votre navigateur.' },
    ],
  },
  'how-to-convert-mp4-to-webm-for-websites': {
    title: 'Comment convertir du MP4 en WEBM pour un site web',
    description: 'Créez de petites copies WEBM de vidéos MP4 pour votre propre site, et voyez quand garder aussi le MP4.',
    intro: 'Pour convertir du MP4 en WEBM, déposez la vidéo dans le convertisseur MP4 vers WEBM et appuyez sur Convertir. Le WEBM est un format ouvert conçu pour le web, lu par tous les grands navigateurs et généralement léger, ce qui le rend pratique pour les vidéos de votre propre site.',
    steps: [
      'Ouvrez MP4 vers WEBM et déposez votre vidéo.',
      'Appuyez sur Convertir et attendez la barre de progression. Le travail vidéo est lourd, gardez donc des clips courts.',
      'Téléchargez le WEBM.',
      'Dans votre page, listez le WEBM et le MP4 d’origine comme deux sources dans une même balise video afin que chaque navigateur en trouve une qu’il sait lire.',
    ],
    sections: [
      {
        heading: 'Pourquoi proposer deux formats',
        paragraphs: [
          'Chrome, Firefox et Edge lisent le WEBM. Certains logiciels Apple et de nombreux appareils lisent le MP4 de façon plus fiable. Une balise video peut lister les deux fichiers et le navigateur choisit le premier qu’il prend en charge : proposer les deux est donc le choix le plus sûr pour un site public.',
        ],
      },
      {
        heading: 'Ce que produit ce convertisseur',
        paragraphs: [
          'Il écrit du WEBM avec de la vidéo VP8 et de l’audio Vorbis, que lit tout navigateur prenant en charge le WEBM. L’encodeur est choisi pour la vitesse : les fichiers sont donc rapides à produire plutôt que les plus petits possible. Pour des fichiers minuscules, raccourcissez le clip ou réduisez d’abord sa taille avec Compresser une vidéo.',
        ],
      },
      {
        heading: 'Une intégration simple',
        paragraphs: [
          'Dans votre page, écrivez une balise video avec controls et deux balises source, le WEBM d’abord avec type video/webm et le MP4 ensuite avec type video/mp4. Les navigateurs utilisent la première source qu’ils savent lire. Ajoutez les attributs muted et playsinline si la vidéo doit démarrer toute seule, car les navigateurs n’autorisent la lecture automatique que pour une vidéo muette.',
        ],
      },
    ],
    faqs: [
      { q: 'Le WEBM est-il meilleur que le MP4 ?', a: 'Aucun n’est meilleur partout. Le WEBM est ouvert et léger ; le MP4 est accepté par beaucoup plus d’applications et d’appareils.' },
      { q: 'Garde-t-il le son ?', a: 'Oui, en audio Vorbis.' },
      { q: 'La vidéo est-elle envoyée ?', a: 'Non. Elle est convertie dans l’onglet de votre navigateur.' },
    ],
  },
  'how-to-convert-json-to-xml-and-xml-to-json': {
    title: 'Comment convertir du JSON en XML et du XML en JSON',
    description: 'Déplacez des données entre JSON et XML pour de vieux systèmes et flux, et voyez ce qu’il advient des attributs et des listes.',
    intro: 'Pour convertir du JSON en XML, collez le JSON dans le convertisseur JSON vers XML. Pour l’inverse, collez du XML dans XML vers JSON. Les clés deviennent des balises, les tableaux deviennent des balises répétées, et les attributs XML apparaissent comme des clés commençant par @.',
    steps: [
      'Collez votre JSON ou XML, ou déposez le fichier.',
      'Lisez le résultat à droite. Corrigez l’entrée si un message d’erreur apparaît.',
      'Appuyez sur Télécharger ou Copier.',
      'Vérifiez la structure dans le système qui le lira, surtout les listes et les attributs.',
    ],
    sections: [
      {
        heading: 'Où les formats diffèrent',
        paragraphs: [
          'Le XML a des attributs et du texte de balise ; le JSON n’a que des clés et des valeurs. Une balise XML comme <book id="1">Quack</book> devient un objet avec "@id" et "#text". Un tableau JSON n’a pas de nom de balise propre : chaque élément est donc écrit comme une balise répétée. Le XML exige aussi exactement une balise racine : un tableau JSON seul est donc enveloppé dans une racine avec des balises item.',
        ],
      },
      {
        heading: 'Le texte reste du texte',
        paragraphs: [
          'En lisant du XML, le convertisseur garde chaque valeur comme du texte : les codes et codes postaux commençant par des zéros ne sont donc pas abîmés. Si vous avez besoin de vrais nombres ou de valeurs true et false, convertissez-les dans votre propre code après la lecture.',
        ],
      },
      {
        heading: 'Des noms qui posent problème',
        paragraphs: [
          'Les noms de balises XML ne peuvent pas contenir d’espaces ni commencer par un chiffre, mais les clés JSON le peuvent. Si une clé JSON ressemble à "first name" ou "2026", renommez-la en first_name ou year2026 avant de convertir, sinon le XML sera invalide. Dans l’autre sens, les espaces de noms et les instructions de traitement sont conservés comme des clés ordinaires : vérifiez donc à l’œil les fichiers inhabituels.',
        ],
      },
    ],
    faqs: [
      { q: 'Et les commentaires XML ?', a: 'Le JSON n’a pas de commentaires : ils sont donc abandonnés.' },
      { q: 'Les caractères spéciaux sont-ils échappés ?', a: 'Oui. Des caractères comme & et < sont échappés pour que le XML soit valide.' },
      { q: 'Les données sont-elles envoyées ?', a: 'Non. Elles sont converties dans l’onglet de votre navigateur.' },
    ],
  },
  'how-to-convert-html-to-markdown': {
    title: 'Comment convertir du HTML en Markdown',
    description: 'Transformez une page web ou un extrait HTML en Markdown propre pour des notes, des README et de la documentation.',
    intro: 'Pour convertir du HTML en Markdown, collez le HTML dans le convertisseur HTML vers Markdown. Les titres, paragraphes, listes, liens, images, gras et code sont conservés, tandis que le style et la mise en page sont abandonnés.',
    steps: [
      'Copiez le code source HTML de la partie voulue. L’article vaut mieux que toute la page.',
      'Ouvrez HTML vers Markdown et collez-le dans la zone de gauche.',
      'Lisez le Markdown à droite et corrigez les espacements étranges.',
      'Appuyez sur Copier ou Télécharger .md et collez-le dans vos notes ou votre dépôt.',
    ],
    sections: [
      {
        heading: 'Ce qui est conservé et ce qui est perdu',
        paragraphs: [
          'Le Markdown décrit la structure, pas l’apparence. Les titres deviennent des dièses, les listes des tirets, les liens [texte](adresse) et l’emphase des astérisques. Les couleurs, polices, colonnes, scripts et tableaux de mise en page n’ont pas d’équivalent en Markdown : ils sont donc abandonnés. Les tableaux complexes peuvent ressortir en texte brut.',
        ],
      },
      {
        heading: 'Nettoyer une page entière',
        paragraphs: [
          'Une page web complète contient des menus, des publicités et des pieds de page, qui deviennent du bruit. Copiez uniquement l’élément article, ou supprimez d’abord les parties en trop. Vérifiez ensuite les adresses relatives des images et des liens : elles pointent vers le site d’origine et peuvent donc nécessiter l’adresse complète pour fonctionner ailleurs.',
        ],
      },
      {
        heading: 'Code, liens et images',
        paragraphs: [
          'Les blocs de code deviennent des blocs délimités par trois accents graves et le code en ligne est entouré d’accents graves simples. Les liens gardent leur adresse et les images leur source. Les listes imbriquées sont indentées avec des espaces. Relisez le résultat une fois, car un HTML inhabituel, comme des styles en ligne sur chaque élément, peut laisser du texte parasite que vous voudrez supprimer.',
        ],
      },
    ],
    faqs: [
      { q: 'Puis-je retransformer le Markdown en HTML ?', a: 'Oui, avec Markdown vers HTML.' },
      { q: 'Garde-t-il les tableaux ?', a: 'La structure simple est conservée comme texte. Les tableaux complexes ne sont pas reconstruits en tableaux Markdown.' },
      { q: 'Mon HTML est-il envoyé ?', a: 'Non. Il est converti dans votre navigateur.' },
    ],
  },
};

export default guides;
