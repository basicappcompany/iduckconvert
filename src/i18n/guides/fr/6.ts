import type { GuideSet } from '../types';

/** French guides, batch 6. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-write-an-amount-in-words-for-a-cheque': {
    title: 'Comment écrire un montant en lettres sur un chèque',
    description: 'Écrivez des montants en roupies et en dollars en lettres comme l’attendent les chèques et les factures, avec lakh et crore ou million et milliard.',
    intro: 'Pour écrire un montant en lettres sur un chèque, ouvrez le convertisseur Nombre en lettres, saisissez le montant, choisissez le style indien ou international et sélectionnez roupies et paise ou dollars et cents. 1250.50 devient "Rupees One Thousand Two Hundred Fifty and Paise Fifty Only".',
    steps: [
      'Saisissez le montant en chiffres. Les virgules ne posent pas de problème, et les décimales donnent des paise ou des cents.',
      'Choisissez le style indien (thousand, lakh, crore) ou international (thousand, million, billion).',
      'Sous "Write as", choisissez roupies et paise ou dollars et cents.',
      'Copiez les mots et comparez-les aux chiffres avant d’écrire le chèque.',
    ],
    sections: [
      {
        heading: 'Styles indien et international',
        paragraphs: [
          'Dans le système indien, 1,00,000 est un lakh et 1,00,00,000 est un crore. Dans le système international, 1,000,000 est un million et 1,000,000,000 est un milliard (one billion). Le même chiffre s’épelle différemment : 12,50,000 se dit douze lakh cinquante mille en style indien et un million deux cent cinquante mille en style international.',
        ],
      },
      {
        heading: 'Pourquoi "Only" à la fin',
        paragraphs: [
          'Les chèques terminent les mots par "Only" pour que rien ne puisse être ajouté ensuite. Les banques attendent aussi que les mots et les chiffres concordent. S’ils diffèrent, la banque peut refuser le chèque ou suivre les mots. Vérifiez toujours le résultat avec les règles de votre propre banque avant de signer.',
        ],
      },
      {
        heading: 'Remplir le chèque',
        paragraphs: [
          'Écrivez les mots en commençant tout à gauche de la ligne, et tirez un trait sur l’espace inutilisé après "Only" pour que rien ne puisse être ajouté. Assurez-vous que les mots et les chiffres concordent exactement. Si vous faites une erreur, demandez à votre banque comment corriger ou annuler le chèque, car une surcharge peut le faire rejeter. Cet outil aide pour l’orthographe, mais les règles de la banque s’appliquent toujours.',
        ],
      },
    ],
    faqs: [
      { q: 'Gère-t-il les paise et les cents ?', a: 'Oui. Les deux chiffres après le point deviennent des paise ou des cents, écrits après "and".' },
      { q: 'Quelle taille de nombre peut-il écrire ?', a: 'Le style international va jusqu’aux sextillions et le style indien continue de compter en crores : tout montant réel convient.' },
      { q: 'Le montant est-il envoyé quelque part ?', a: 'Non. Les mots sont produits dans votre navigateur pendant que vous tapez.' },
    ],
  },
  'how-to-convert-binary-hex-and-decimal': {
    title: 'Comment convertir du binaire, de l’hexadécimal et du décimal',
    description: 'Convertissez entre binaire, octal, décimal et hexadécimal à la main et avec un convertisseur, avec des exemples détaillés.',
    intro: 'Pour convertir entre bases numériques, saisissez votre nombre dans n’importe quelle case du convertisseur de Bases numériques et lisez les autres. À la main, le binaire 1010 vaut 10 en décimal et l’hexadécimal FF vaut 255. L’hexadécimal n’est qu’une façon plus courte d’écrire le binaire, quatre bits à la fois.',
    steps: [
      'Ouvrez le convertisseur de Bases numériques.',
      'Cliquez dans la case de la base que vous avez (binaire, octal, décimal ou hexadécimal) et saisissez le nombre.',
      'Lisez les trois autres cases, qui se mettent à jour aussitôt.',
      'Appuyez sur "Copy" à côté de celle dont vous avez besoin.',
    ],
    sections: [
      {
        heading: 'Comment fonctionne le passage du binaire au décimal',
        paragraphs: [
          'Chaque rang binaire est une puissance de deux, en partant de la droite : 1, 2, 4, 8, 16 et ainsi de suite. Pour 1010, additionnez les rangs qui contiennent un 1 : 8 + 2 = 10. Un octet fait huit bits, donc il va jusqu’à 11111111, qui vaut 255.',
        ],
      },
      {
        heading: 'Pourquoi les programmeurs utilisent l’hexadécimal',
        paragraphs: [
          'L’hexadécimal a 16 chiffres, de 0 à 9 et de A à F. Un chiffre hexadécimal fait exactement quatre bits : un octet fait donc toujours deux chiffres hexadécimaux. FF est 11111111, soit 255. C’est ce qui fait de l’hexadécimal une façon compacte d’écrire des données binaires, des adresses mémoire et des codes couleur. Un préfixe 0x marque un nombre hexadécimal dans de nombreux langages de programmation.',
          'Le convertisseur utilise des calculs exacts sur des nombres entiers : les très grands nombres sont donc convertis sans arrondi.',
        ],
      },
      {
        heading: 'Exemples pour s’exercer',
        paragraphs: [
          'Le binaire 1111 vaut 15, et 101010 vaut 42. L’hexadécimal 1A vaut 26, et le décimal 255 s’écrit FF en hexadécimal et 11111111 en binaire. L’octal est rarement utilisé aujourd’hui, mais les droits de fichiers Unix s’écrivent avec lui : l’octal 755 vaut 493 en décimal, et chaque chiffre octal fait exactement trois bits, donc 7 est 111 et 5 est 101. Essayez chacun de ces exemples dans le convertisseur pour voir les autres cases se remplir.',
        ],
      },
    ],
    faqs: [
      { q: 'Peut-il convertir des nombres négatifs ?', a: 'Oui, avec un signe moins. Il n’affiche pas les motifs de bits en complément à deux.' },
      { q: 'Accepte-t-il les préfixes 0x ou 0b ?', a: 'Oui. 0xFF dans la case hexadécimale est lu comme 255.' },
      { q: 'Gère-t-il les fractions ?', a: 'Non. Il est fait pour les nombres entiers.' },
    ],
  },
  'how-to-read-and-write-roman-numerals': {
    title: 'Comment lire et écrire les chiffres romains',
    description: 'Apprenez les sept lettres romaines, la règle de soustraction et la limite de 3999, et convertissez des nombres dans les deux sens.',
    intro: 'Pour écrire un nombre en chiffres romains, décomposez-le en milliers, centaines, dizaines et unités et écrivez chacun avec I, V, X, L, C, D et M. 1994 s’écrit MCMXCIV. Le convertisseur de Chiffres romains le fait dans les deux sens, pour des nombres de 1 à 3999.',
    steps: [
      'Apprenez les sept lettres : I vaut 1, V vaut 5, X vaut 10, L vaut 50, C vaut 100, D vaut 500 et M vaut 1000.',
      'Décomposez le nombre : 1994 est 1000 + 900 + 90 + 4.',
      'Écrivez chaque partie : M, CM, XC et IV.',
      'Assemblez-les : MCMXCIV. Ou saisissez le nombre dans le convertisseur et copiez le résultat.',
    ],
    sections: [
      {
        heading: 'La règle de soustraction',
        paragraphs: [
          'Une lettre plus petite placée avant une plus grande se soustrait : IV est 4, IX est 9, XL est 40, XC est 90, CD est 400 et CM est 900. Une lettre plus petite placée après une plus grande s’ajoute : VI est 6. Une lettre se répète au plus trois fois de suite : 4 s’écrit donc IV et non IIII.',
        ],
      },
      {
        heading: 'Limites et bizarreries',
        paragraphs: [
          'Les chiffres romains standards n’ont ni zéro ni symbole au-dessus de M : le plus grand nombre est donc MMMCMXCIX, soit 3999. Les cadrans d’horloge impriment souvent 4 sous la forme IIII, mais ce convertisseur n’accepte que la forme standard afin de repérer les fautes de frappe. Les chiffres romains servent encore pour les années de films, les chapitres de livres, les rois et reines et certaines dates de bâtiments.',
        ],
      },
    ],
    faqs: [
      { q: 'Comment lire MCMXCIV ?', a: 'M vaut 1000, CM vaut 900, XC vaut 90 et IV vaut 4 : cela fait 1994.' },
      { q: 'Pourquoi n’y a-t-il pas de zéro ?', a: 'Les Romains n’avaient pas de symbole pour le zéro : le convertisseur commence donc à 1.' },
      { q: 'Est-ce que ça marche sur un téléphone ?', a: 'Oui, et tout s’exécute dans votre navigateur.' },
    ],
  },
  'how-to-change-text-case-camel-snake-title': {
    title: 'Comment changer la casse du texte : camel, snake et Title Case',
    description: 'Changez le texte entre majuscules, minuscules, Titre, phrase, camelCase, snake_case et kebab-case en un clic.',
    intro: 'Pour changer la casse d’un texte, collez-le dans le convertisseur de Casse du texte et appuyez sur la casse voulue : majuscules, minuscules, Titre, phrase, camelCase, PascalCase, snake_case, kebab-case ou CONSTANT_CASE. Copiez le résultat en un clic.',
    steps: [
      'Ouvrez le convertisseur de Casse du texte et collez votre texte.',
      'Appuyez sur le bouton de la casse dont vous avez besoin. Le résultat apparaît en dessous.',
      'Vérifiez-le. Title Case est mécanique et mettra aussi une majuscule aux petits mots.',
      'Appuyez sur "Copy" et collez-le où vous en avez besoin.',
    ],
    sections: [
      {
        heading: 'Les casses pour écrire',
        paragraphs: [
          'LES MAJUSCULES servent à insister ou pour les sigles, et les minuscules pour un texte net et informel. Title Case met une majuscule à la première lettre de chaque mot, comme dans un titre de livre. La casse de phrase ne met une majuscule qu’au premier mot de chaque phrase, comme dans l’écriture normale, et se lit plus facilement pour les longs titres.',
        ],
      },
      {
        heading: 'Les casses pour le code et les URL',
        paragraphs: [
          'Les programmeurs collent les mots sans espaces. camelCase (helloWorld) est courant pour les variables, PascalCase (HelloWorld) pour les noms de classes, snake_case (hello_world) en Python et dans les bases de données, kebab-case (hello-world) dans les adresses web et les noms de fichiers, et CONSTANT_CASE pour les valeurs fixes. Le convertisseur sépare les mots aux espaces, à la ponctuation et aux majuscules : il peut donc passer d’un style à un autre.',
        ],
      },
    ],
    faqs: [
      { q: 'Suit-il les règles des guides de style pour les titres ?', a: 'Non. Title Case met ici une majuscule à chaque mot. Les guides de style laissent en minuscules les petits mots comme "of" et "the" : ajustez-les à la main si besoin.' },
      { q: 'Fonctionne-t-il avec les accents ?', a: 'Oui pour les lettres qui ont une majuscule et une minuscule, comme é, ü et le cyrillique. Le i turc avec et sans point suit les règles standards et peut nécessiter une correction manuelle.' },
      { q: 'Mon texte est-il envoyé quelque part ?', a: 'Non. Il est modifié dans votre navigateur pendant que vous tapez.' },
    ],
  },
  'how-to-convert-hex-to-rgb-and-hsl': {
    title: 'Comment convertir des couleurs HEX en RVB et TSL',
    description: 'Convertissez des codes couleur entre HEX, RVB et TSL pour le CSS et le travail de conception, avec un aperçu en direct.',
    intro: 'Pour convertir un code couleur, saisissez une valeur HEX, RVB ou TSL dans le convertisseur de Codes couleur. Les deux autres se mettent à jour et vous voyez la couleur. #FFD23F est rgb(255, 210, 63), et hsl(45, 100%, 62%) est la même couleur.',
    steps: [
      'Ouvrez le convertisseur de Codes couleur.',
      'Saisissez un code HEX dans la première case, avec ou sans #, ou utilisez le sélecteur de couleur.',
      'Lisez les valeurs RVB et TSL et regardez l’aperçu pour vérifier.',
      'Appuyez sur "Copy" à côté du code dont votre CSS ou votre outil de conception a besoin.',
    ],
    sections: [
      {
        heading: 'Comment HEX et RVB sont liés',
        paragraphs: [
          'Un code HEX est composé de trois paires de chiffres en base 16 pour le rouge, le vert et le bleu. #FFD23F, c’est FF (255) de rouge, D2 (210) de vert et 3F (63) de bleu. Le RVB écrit ces mêmes trois nombres en décimal. Un code à trois chiffres comme #F80 est un raccourci qui double chaque chiffre : il équivaut à #FF8800.',
        ],
      },
      {
        heading: 'Quand le TSL aide',
        paragraphs: [
          'Le TSL décrit une couleur par sa teinte (position sur le cercle chromatique de 0 à 360), sa saturation (son éclat) et sa luminosité (sa clarté ou son obscurité). Cela permet de créer facilement une version plus claire ou plus sombre de la couleur d’une marque en ne changeant que la luminosité, ce qui est malaisé en HEX. Les allers-retours par le TSL peuvent décaler une valeur d’une unité, car le TSL est arrondi à des nombres entiers ; le HEX et le RVB restent exacts.',
        ],
      },
    ],
    faqs: [
      { q: 'Que veut dire HEX à 8 chiffres ?', a: 'Il ajoute une paire alpha (transparence) à la fin. Ce convertisseur gère les codes à six et à trois chiffres.' },
      { q: 'Comment assombrir une couleur ?', a: 'Baissez la luminosité en TSL, puis copiez le HEX ou le RVB correspondant.' },
      { q: 'Quelque chose est-il envoyé ?', a: 'Non. Tout est calculé dans votre navigateur.' },
    ],
  },
};

export default guides;
