import type { GuideSet } from '../types';

/** Spanish guides, batch 5. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-markdown-to-html': {
    title: 'Cómo convertir Markdown a HTML',
    description: 'Convierte notas en Markdown y textos de README en HTML limpio que puedes pegar en una página web o en un gestor de contenidos.',
    intro: 'Para convertir Markdown a HTML, pega tu Markdown en el conversor de Markdown a HTML. Obtienes el HTML de encabezados, párrafos, listas, enlaces, tablas y código, listo para pegar en una página o en un sistema de contenidos.',
    steps: [
      'Escribe o pega tu Markdown, o pulsa "Try an example" para ver las piezas.',
      'Abre Markdown a HTML y pégalo en el recuadro de la izquierda.',
      'Lee el HTML de la derecha. Es solo el contenido, sin etiquetas html ni body.',
      'Cópialo o descárgalo y colócalo dentro de tu propia plantilla de página.',
    ],
    sections: [
      {
        heading: 'Qué se admite',
        paragraphs: [
          'Markdown estándar (encabezados con #, negrita con **, listas, enlaces, imágenes, citas y bloques de código) más los añadidos habituales de GitHub: tablas, listas de tareas y tachado. El HTML en bruto dentro del Markdown pasa sin cambios.',
        ],
      },
      {
        heading: 'Una nota de seguridad',
        paragraphs: [
          'La salida es una conversión simple. Si el Markdown viene de otra persona, podría contener scripts ocultos como HTML en bruto. Pasa el resultado por tu propio saneador de HTML antes de publicarlo en un sitio donde aparezca contenido de otras personas.',
        ],
      },
      {
        heading: 'Errores habituales de Markdown',
        paragraphs: [
          'Una lista necesita una línea en blanco antes, y los párrafos se separan con líneas en blanco. Un encabezado necesita un espacio después de las almohadillas, así que escribe # Título y no #Título. Para forzar un salto de línea dentro de un párrafo, termina la línea con dos espacios. Una tabla necesita una fila de encabezado seguida de una fila separadora de guiones. Si el HTML se ve mal, la causa casi siempre es una de estas.',
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo volver de HTML a Markdown?', a: 'Sí, con HTML a Markdown. Se pierden el estilo y la maquetación, pero los encabezados, las listas, los enlaces y el texto en negrita se conservan.' },
      { q: '¿Añade estilos?', a: 'No. Obtienes HTML sin estilo que adopta los estilos de la página donde lo coloques.' },
      { q: '¿Se sube mi texto?', a: 'No. Se convierte en la pestaña de tu navegador.' },
    ],
  },
  'how-to-fix-garbled-text-and-wrong-encoding': {
    title: 'Cómo arreglar texto ilegible y codificaciones erróneas',
    description: 'Repara archivos de texto que muestran caracteres raros como Ã© eligiendo la codificación correcta y guardando UTF-8 limpio.',
    intro: 'Para arreglar un archivo de texto ilegible, suéltalo en el corrector de codificación TXT, elige la codificación en la que se escribió (prueba primero Windows-1252), revisa la vista previa y descarga la copia en UTF-8. El texto ilegible significa que el archivo se leyó con la codificación equivocada.',
    steps: [
      'Abre el corrector de codificación TXT y suelta tu archivo.',
      'Mira la vista previa. Si los acentos parecen Ã© o é, el archivo probablemente es Windows-1252.',
      'Elige otra codificación de la lista hasta que la vista previa se lea bien. Windows-1251 cubre el cirílico; Shift_JIS, GBK y Big5 cubren el japonés y el chino.',
      'Pulsa "Convertir" y descarga la copia en UTF-8. Tu original queda intacto.',
    ],
    sections: [
      {
        heading: 'Qué está pasando',
        paragraphs: [
          'Un archivo de texto son solo números. Una codificación es la tabla que dice qué letra significa cada número. UTF-8 puede escribir todos los idiomas, mientras que las tablas más antiguas, como Windows-1252, cubren una región. Si un archivo se escribe con una tabla y se lee con otra, los caracteres se convierten en disparates como Ã© en lugar de é.',
        ],
      },
      {
        heading: 'Por qué UTF-8 es la que hay que conservar',
        paragraphs: [
          'UTF-8 lo entienden hoy casi todos los programas, sitios web y bases de datos. Guardar tu texto en UTF-8 significa que se abre igual en todas partes. Si un CSV sigue viéndose mal en Excel después de arreglarlo, conviértelo con CSV a Excel, que lee UTF-8 correctamente.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cómo sé qué codificación elegir?', a: 'Prueba las probables y observa la vista previa. La correcta hace legible cada letra. Fíjate en el origen del archivo: las exportaciones antiguas de Windows suelen ser Windows-1252.' },
      { q: '¿Por qué veo signos de interrogación o recuadros?', a: 'Esos caracteres ya se habían perdido antes de abrir el archivo. Elegir otra codificación no puede recuperar lo que se sustituyó.' },
      { q: '¿Se sube mi archivo?', a: 'No. Se lee y se convierte dentro de tu navegador.' },
    ],
  },
  'how-to-convert-celsius-to-fahrenheit': {
    title: 'Cómo convertir Celsius a Fahrenheit (y al revés)',
    description: 'La fórmula, un atajo mental rápido y un conversor para Celsius, Fahrenheit y Kelvin.',
    intro: 'Para convertir Celsius a Fahrenheit, multiplica por 9, divide entre 5 y suma 32. Así, 100 °C son 212 °F y 0 °C son 32 °F. Para volver, resta 32, multiplica por 5 y divide entre 9.',
    steps: [
      'Anota la temperatura con su unidad, por ejemplo 25 °C.',
      'Multiplica por 9: 25 × 9 = 225.',
      'Divide entre 5: 225 ÷ 5 = 45.',
      'Suma 32: 45 + 32 = 77 °F.',
      'O abre el Conversor de temperatura, escribe 25, elige Celsius a Fahrenheit y lee la respuesta.',
    ],
    sections: [
      {
        heading: 'Un atajo mental',
        paragraphs: [
          'Para una respuesta aproximada, duplica el número de Celsius y suma 30. Eso da 80 para 25 °C, cerca de los 77 reales. Funciona mejor entre 0 y 30 °C y se desvía más en los extremos. Para cocinar, en medicina y en ciencia, usa la fórmula exacta.',
        ],
      },
      {
        heading: 'Por qué no basta con multiplicar',
        paragraphs: [
          'La mayoría de las conversiones de unidades son una sola multiplicación. Las escalas de temperatura empiezan en puntos cero distintos: 0 °C son 32 °F. Por eso la fórmula tiene un paso de sumar o restar, y por eso duplicar una temperatura en Celsius no duplica la de Fahrenheit.',
          'Kelvin usa el mismo tamaño de grado que Celsius pero empieza en el cero absoluto: suma 273,15 a un valor en Celsius para obtener Kelvin. Las dos escalas se cruzan en -40, donde Celsius y Fahrenheit coinciden.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuánto son 37 °C en Fahrenheit?', a: 'Unos 98,6 °F, la temperatura corporal humana normal.' },
      { q: '¿Qué temperatura de horno son 180 °C?', a: '356 °F, que en las recetas se suele redondear a 350 °F.' },
      { q: '¿Cómo convierto Fahrenheit a Celsius?', a: 'Resta 32, multiplica por 5 y divide entre 9. 212 °F dan 100 °C.' },
    ],
  },
  'how-to-convert-bigha-gaj-and-acre-to-square-feet': {
    title: 'Cómo convertir bigha, gaj y acre a pies cuadrados',
    description: 'Convierte unidades de terreno de la India a pies cuadrados, con las cifras que son fijas y las que cambian según el estado.',
    intro: 'Para convertir unidades de terreno de la India, abre el conversor de unidades de terreno de la India, escribe el número y elige la unidad. Un gaj son 9 pies cuadrados y un acre son 43 560 pies cuadrados, pero un bigha varía según el estado, así que comprueba siempre el registro local antes de comprar o vender.',
    steps: [
      'Decide qué unidad usa tu documento. Si dice bigha, anota el estado, porque el tamaño cambia.',
      'Abre el conversor de unidades de terreno de la India y escribe la superficie.',
      'Elige la unidad que tienes en From y pies cuadrados (o acre) en To.',
      'Lee la respuesta y la nota sobre el estado. Compárala con tu registro de ingresos.',
    ],
    sections: [
      {
        heading: 'Unidades fijas',
        paragraphs: [
          'Un gaj es una yarda cuadrada, que son 9 pies cuadrados. Un acre son 43 560 pies cuadrados, o unos 4047 metros cuadrados. Una hectárea son 10 000 metros cuadrados, unos 2,47 acres o más o menos 107 639 pies cuadrados. Son iguales en todas partes.',
        ],
      },
      {
        heading: 'Unidades que cambian según el estado',
        paragraphs: [
          'Un bigha no tiene un solo tamaño. Son unos 27 000 pies cuadrados en Uttar Pradesh, unos 17 400 en Gujarat y 14 400 en Bengala Occidental y Assam, y puede variar según el distrito y según si la costumbre local es el bigha pucca o el kachha. Biswa, katha, guntha y cent también varían según la región.',
          'Por eso, trata cualquier conversión de una unidad local como una estimación y usa la cifra del documento oficial de ingresos para cualquier asunto legal.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuántos pies cuadrados hay en un bigha?', a: 'Depende del estado, de unos 14 400 a unos 27 000 pies cuadrados en los lugares indicados aquí. Usa el conversor y su nota, y confírmalo localmente.' },
      { q: '¿Cuántos gaj hay en un acre?', a: '4840 gaj, ya que un acre son 43 560 pies cuadrados y un gaj son 9.' },
      { q: '¿Es seguro para un uso legal?', a: 'No. Es una calculadora para estimaciones. Los documentos de propiedad deben usar las cifras del registro oficial.' },
    ],
  },
  'how-many-mb-in-a-gb': {
    title: '¿Cuántos MB hay en un GB? Explicación de 1000 o 1024',
    description: 'Por qué un gigabyte son 1000 MB en un plan de móvil pero 1024 MiB en algunos sistemas, y cómo convertir KB, MB, GB y TB.',
    intro: 'Un gigabyte son 1000 megabytes en el sistema decimal (SI) que usan los fabricantes de discos y los planes de móvil, y un gibibyte son 1024 mebibytes en el sistema binario que usan algunos sistemas operativos. Para convertir, elige el sistema correcto y multiplica o divide por 1000 o por 1024.',
    steps: [
      'Decide qué sistema necesitas. El almacenamiento que se vende en las tiendas, las velocidades de red y los planes de datos usan 1000.',
      'Abre el conversor de tamaño de datos y escribe la cantidad.',
      'Elige KB, MB, GB o TB para el sistema de 1000, o KiB, MiB, GiB y TiB para el sistema de 1024.',
      'Lee el resultado en la unidad que quieras.',
    ],
    sections: [
      {
        heading: 'De dónde vienen los dos sistemas',
        paragraphs: [
          'Los ordenadores trabajan con potencias de dos, y 1024 (2 elevado a 10) se acerca a 1000. El software antiguo usaba KB para 1024 bytes, mientras que los fabricantes de hardware usaban el 1000 métrico. Para acabar con la confusión se crearon los nombres KiB, MiB y GiB para las unidades basadas en 1024. En el uso cotidiano ambos siguen apareciendo con el nombre simple.',
        ],
      },
      {
        heading: 'Por qué un disco muestra menos espacio',
        paragraphs: [
          'Un disco vendido como de 1 TB guarda 1 000 000 000 000 de bytes. Un sistema que muestra los tamaños en unidades basadas en 1024 lo indica como unos 931 GiB, así que el número parece menor aunque no falte nada. El mismo efecto hace que un móvil de 128 GB muestre algo menos de 128 en algunos menús.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuál es correcto, 1000 o 1024?', a: 'Ambos son correctos en su propio sistema. KB, MB y GB son oficialmente de base 1000; KiB, MiB y GiB son de base 1024.' },
      { q: '¿Cuántos MB es 1 GB en mi plan de datos?', a: 'Los planes usan 1000, así que 1 GB son 1000 MB. Consulta a tu proveedor si la cifra exacta importa.' },
      { q: '¿Cuántos bytes hay en un megabyte?', a: '1 000 000 en el sistema decimal y 1 048 576 en un mebibyte.' },
    ],
  },
};

export default guides;
