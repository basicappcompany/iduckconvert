import type { GuideSet } from '../types';

/** Spanish guides, batch 6. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-write-an-amount-in-words-for-a-cheque': {
    title: 'Cómo escribir una cantidad con letras en un cheque',
    description: 'Escribe cantidades en rupias y dólares con letras como esperan los cheques y las facturas, con lakh y crore o millón y mil millones.',
    intro: 'Para escribir una cantidad con letras en un cheque, abre el conversor de Número a palabras, escribe la cantidad, elige el estilo indio o internacional y selecciona rupias y paise o dólares y centavos. 1250.50 se convierte en "Rupees One Thousand Two Hundred Fifty and Paise Fifty Only".',
    steps: [
      'Escribe la cantidad en cifras. Las comas no importan, y los decimales dan paise o centavos.',
      'Elige el estilo indio (thousand, lakh, crore) o el internacional (thousand, million, billion).',
      'En "Write as", elige rupias y paise o dólares y centavos.',
      'Copia las palabras y compáralas con las cifras antes de rellenar el cheque.',
    ],
    sections: [
      {
        heading: 'Estilos indio e internacional',
        paragraphs: [
          'En el sistema indio, 1,00,000 es un lakh y 1,00,00,000 es un crore. En el sistema internacional, 1,000,000 es un millón y 1,000,000,000 es mil millones (one billion). La misma cifra se deletrea de forma distinta: 12,50,000 son doce lakh cincuenta mil en estilo indio y un millón doscientos cincuenta mil en estilo internacional.',
        ],
      },
      {
        heading: 'Por qué "Only" al final',
        paragraphs: [
          'Los cheques terminan las palabras con "Only" para que no se pueda añadir nada después. Los bancos también esperan que las palabras y las cifras coincidan. Si difieren, el banco puede rechazar el cheque o atenerse a las palabras. Comprueba siempre el resultado con las normas de tu propio banco antes de firmar.',
        ],
      },
      {
        heading: 'Rellenar el cheque',
        paragraphs: [
          'Escribe las palabras empezando en el extremo izquierdo de la línea y traza una raya sobre el espacio sin usar después de "Only" para que no se pueda añadir nada. Asegúrate de que las palabras y las cifras coincidan exactamente. Si te equivocas, pregunta a tu banco cómo corregir o anular el cheque, porque sobrescribir puede hacer que lo rechacen. Esta herramienta ayuda con la ortografía, pero siempre se aplican las normas del banco.',
        ],
      },
    ],
    faqs: [
      { q: '¿Maneja los paise y los centavos?', a: 'Sí. Las dos cifras después del punto se convierten en paise o centavos, escritos después de "and".' },
      { q: '¿Qué tamaño de número puede escribir?', a: 'El estilo internacional llega a los sextillones y el indio sigue contando en crores, así que sirve cualquier cantidad real.' },
      { q: '¿Se envía la cantidad a algún sitio?', a: 'No. Las palabras se generan en tu navegador mientras escribes.' },
    ],
  },
  'how-to-convert-binary-hex-and-decimal': {
    title: 'Cómo convertir binario, hexadecimal y decimal',
    description: 'Convierte entre binario, octal, decimal y hexadecimal a mano y con un conversor, con ejemplos resueltos.',
    intro: 'Para convertir entre bases numéricas, escribe tu número en cualquier casilla del conversor de Bases numéricas y lee las demás. A mano, el binario 1010 es 10 en decimal y el hexadecimal FF es 255. El hexadecimal es solo una forma más corta de escribir binario, de cuatro en cuatro bits.',
    steps: [
      'Abre el conversor de Bases numéricas.',
      'Haz clic en la casilla de la base que tienes (binario, octal, decimal o hexadecimal) y escribe el número.',
      'Lee las otras tres casillas, que se actualizan al instante.',
      'Pulsa "Copy" junto a la que necesites.',
    ],
    sections: [
      {
        heading: 'Cómo funciona de binario a decimal',
        paragraphs: [
          'Cada posición binaria es una potencia de dos, de derecha a izquierda: 1, 2, 4, 8, 16 y así sucesivamente. Para 1010, suma las posiciones que tienen un 1: 8 + 2 = 10. Un byte son ocho bits, así que llega hasta 11111111, que es 255.',
        ],
      },
      {
        heading: 'Por qué los programadores usan hexadecimal',
        paragraphs: [
          'El hexadecimal tiene 16 dígitos, de 0 a 9 y de A a F. Un dígito hexadecimal son exactamente cuatro bits, así que un byte son siempre dos dígitos hexadecimales: FF es 11111111, que es 255. Eso hace del hexadecimal una forma compacta de escribir datos binarios, direcciones de memoria y códigos de color. Un prefijo 0x marca un número hexadecimal en muchos lenguajes de programación.',
          'El conversor usa matemáticas exactas con números enteros, así que los números muy largos se convierten sin redondeo.',
        ],
      },
      {
        heading: 'Ejemplos para practicar',
        paragraphs: [
          'El binario 1111 es 15, y 101010 es 42. El hexadecimal 1A es 26, y el decimal 255 es FF en hexadecimal y 11111111 en binario. El octal casi no se usa ya, pero los permisos de archivos de Unix se escriben con él: el octal 755 es 493 en decimal, y cada dígito octal son exactamente tres bits, así que 7 es 111 y 5 es 101. Prueba cada uno de estos en el conversor para ver cómo se rellenan las otras casillas.',
        ],
      },
    ],
    faqs: [
      { q: '¿Puede convertir números negativos?', a: 'Sí, con un signo menos. No muestra los patrones de bits en complemento a dos.' },
      { q: '¿Acepta los prefijos 0x o 0b?', a: 'Sí. 0xFF en la casilla hexadecimal se lee como 255.' },
      { q: '¿Maneja fracciones?', a: 'No. Es para números enteros.' },
    ],
  },
  'how-to-read-and-write-roman-numerals': {
    title: 'Cómo leer y escribir números romanos',
    description: 'Aprende las siete letras romanas, la regla de la resta y el límite de 3999, y convierte números en ambos sentidos.',
    intro: 'Para escribir un número en números romanos, divídelo en millares, centenas, decenas y unidades y escribe cada una con I, V, X, L, C, D y M. 1994 es MCMXCIV. El conversor de Números romanos lo hace en ambos sentidos, para números del 1 al 3999.',
    steps: [
      'Aprende las siete letras: I es 1, V es 5, X es 10, L es 50, C es 100, D es 500 y M es 1000.',
      'Divide el número: 1994 es 1000 + 900 + 90 + 4.',
      'Escribe cada parte: M, CM, XC e IV.',
      'Únelas: MCMXCIV. O escribe el número en el conversor y copia el resultado.',
    ],
    sections: [
      {
        heading: 'La regla de la resta',
        paragraphs: [
          'Una letra menor antes de una mayor se resta: IV es 4, IX es 9, XL es 40, XC es 90, CD es 400 y CM es 900. Una letra menor después de una mayor se suma: VI es 6. Una letra se repite como máximo tres veces seguidas, así que 4 es IV y no IIII.',
        ],
      },
      {
        heading: 'Límites y rarezas',
        paragraphs: [
          'Los números romanos estándar no tienen cero ni símbolo por encima de M, así que el número más grande es MMMCMXCIX, que es 3999. Las esferas de los relojes suelen imprimir el 4 como IIII, pero este conversor solo acepta la forma estándar para poder detectar errores de escritura. Los números romanos se siguen usando para los años de las películas, los capítulos de los libros, los reyes y las reinas y algunas fechas de edificios.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cómo leo MCMXCIV?', a: 'M es 1000, CM es 900, XC es 90 e IV es 4, así que 1994.' },
      { q: '¿Por qué no hay cero?', a: 'Los romanos no tenían un símbolo para el cero, así que el conversor empieza en 1.' },
      { q: '¿Funciona en un móvil?', a: 'Sí, y se ejecuta por completo en tu navegador.' },
    ],
  },
  'how-to-change-text-case-camel-snake-title': {
    title: 'Cómo cambiar las mayúsculas y minúsculas: camel, snake y Title Case',
    description: 'Cambia el texto entre mayúsculas, minúsculas, Título, oración, camelCase, snake_case y kebab-case con un clic.',
    intro: 'Para cambiar las mayúsculas y minúsculas de un texto, pégalo en el conversor de Mayúsculas y minúsculas y pulsa el formato que quieras: mayúsculas, minúsculas, Título, oración, camelCase, PascalCase, snake_case, kebab-case o CONSTANT_CASE. Copia el resultado con un clic.',
    steps: [
      'Abre el conversor de Mayúsculas y minúsculas y pega tu texto.',
      'Pulsa el botón del formato que necesites. El resultado aparece debajo.',
      'Compruébalo. Title Case es mecánico y también pondrá en mayúscula las palabras pequeñas.',
      'Pulsa "Copy" y pégalo donde lo necesites.',
    ],
    sections: [
      {
        heading: 'Formatos para escribir',
        paragraphs: [
          'MAYÚSCULAS sirven para dar énfasis o para siglas, y las minúsculas para un texto limpio e informal. Title Case pone en mayúscula la primera letra de cada palabra, como en el título de un libro. El formato de oración pone en mayúscula solo la primera palabra de cada frase, como en la escritura normal, y es más fácil de leer en titulares largos.',
        ],
      },
      {
        heading: 'Formatos para código y URL',
        paragraphs: [
          'Los programadores unen las palabras sin espacios. camelCase (helloWorld) es habitual para variables, PascalCase (HelloWorld) para nombres de clase, snake_case (hello_world) en Python y en bases de datos, kebab-case (hello-world) en direcciones web y nombres de archivo, y CONSTANT_CASE para valores fijos. El conversor separa las palabras por espacios, signos de puntuación y letras mayúsculas, así que puede cambiar un estilo por otro.',
        ],
      },
    ],
    faqs: [
      { q: '¿Sigue las reglas de las guías de estilo para los títulos?', a: 'No. Title Case aquí pone en mayúscula todas las palabras. Las guías de estilo dejan en minúscula las palabras pequeñas como "of" y "the", así que ajústalas a mano si lo necesitas.' },
      { q: '¿Funciona con acentos?', a: 'Sí con las letras que tienen mayúscula y minúscula, como é, ü y el cirílico. La i turca con y sin punto sigue las reglas estándar y puede necesitar un arreglo manual.' },
      { q: '¿Se envía mi texto a algún sitio?', a: 'No. Se cambia en tu navegador mientras escribes.' },
    ],
  },
  'how-to-convert-hex-to-rgb-and-hsl': {
    title: 'Cómo convertir colores HEX a RGB y HSL',
    description: 'Convierte códigos de color entre HEX, RGB y HSL para CSS y trabajo de diseño, con una muestra en vivo.',
    intro: 'Para convertir un código de color, escribe un valor HEX, RGB o HSL en el conversor de Códigos de color. Los otros dos se actualizan y ves el color. #FFD23F es rgb(255, 210, 63), y hsl(45, 100%, 62%) es el mismo color.',
    steps: [
      'Abre el conversor de Códigos de color.',
      'Escribe un código HEX en la primera casilla, con o sin #, o usa el selector de color.',
      'Lee los valores RGB y HSL y mira la muestra para comprobarlo.',
      'Pulsa "Copy" junto al código que necesite tu CSS o tu herramienta de diseño.',
    ],
    sections: [
      {
        heading: 'Cómo se relacionan HEX y RGB',
        paragraphs: [
          'Un código HEX son tres pares de dígitos en base 16 para el rojo, el verde y el azul. #FFD23F es FF (255) de rojo, D2 (210) de verde y 3F (63) de azul. RGB escribe esos mismos tres números en decimal. Un código de tres dígitos como #F80 es una abreviatura que duplica cada dígito, así que equivale a #FF8800.',
        ],
      },
      {
        heading: 'Cuándo ayuda HSL',
        paragraphs: [
          'HSL describe un color por su tono (posición en la rueda de color de 0 a 360), su saturación (cuán vivo es) y su luminosidad (cuán claro u oscuro). Eso facilita crear una versión más clara u oscura del color de una marca cambiando solo la luminosidad, algo incómodo en HEX. Los viajes de ida y vuelta por HSL pueden desplazar un valor en uno porque HSL se redondea a números enteros; HEX y RGB se mantienen exactos.',
        ],
      },
    ],
    faqs: [
      { q: '¿Qué significa HEX de 8 dígitos?', a: 'Añade un par alfa (transparencia) al final. Este conversor maneja códigos de seis y de tres dígitos.' },
      { q: '¿Cómo oscurezco un color?', a: 'Baja la luminosidad en HSL y luego copia el HEX o el RGB correspondiente.' },
      { q: '¿Se sube algo?', a: 'No. Todo se calcula en tu navegador.' },
    ],
  },
};

export default guides;
