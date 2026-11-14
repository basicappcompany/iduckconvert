import type { GuideSet } from '../types';

/** Spanish guides, batch 7. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-time-zones-for-a-meeting': {
    title: 'Cómo convertir husos horarios para una reunión (IST, EST, GMT)',
    description: 'Encuentra la hora de reunión adecuada entre India, EE. UU., el Reino Unido y más, y evita la trampa del horario de verano.',
    intro: 'Para convertir la hora de una reunión, elige la fecha, la hora y tu huso de partida en el conversor de husos horarios y añade las ciudades que quieras. Tiene en cuenta el horario de verano para la fecha exacta. India (IST) es UTC+05:30 todo el año y nunca cambia sus relojes.',
    steps: [
      'Abre el conversor de husos horarios y elige la fecha de la reunión.',
      'Escribe la hora y elige el huso en el que está escrita, por ejemplo India (Kolkata).',
      'Añade las ciudades de las demás personas. Cada fila muestra su hora y su fecha locales.',
      'Busca las etiquetas "next day" o "previous day" y luego comparte las horas con todos.',
    ],
    sections: [
      {
        heading: 'La trampa del horario de verano',
        paragraphs: [
          'La diferencia entre dos lugares puede cambiar durante el año. Estados Unidos cambia sus relojes en fechas distintas a las del Reino Unido y Europa, así que durante unas semanas en primavera y otoño la diferencia entre Nueva York y Londres es de una hora distinta a la del resto del año. India y muchos otros países no cambian los relojes en absoluto, así que la diferencia con ellos cambia cada vez que lo hace el otro lado.',
          'Convierte siempre para la fecha exacta de la reunión, no para hoy. El conversor lo hace con los datos de husos horarios integrados en tu navegador.',
        ],
      },
      {
        heading: 'Líneas de fecha y reuniones tardías',
        paragraphs: [
          'Una tarde-noche en India es la misma mañana o noche en Estados Unidos, y una madrugada en Japón es la tarde anterior en India. Cuando la fecha difiere, es fácil reservar el día equivocado, así que revisa la columna de la fecha y escribe la fecha completa en la invitación.',
        ],
      },
    ],
    faqs: [
      { q: '¿Qué hora de Nueva York es una hora IST?', a: 'India va 10 horas y 30 minutos por delante de Nueva York en invierno (EST) y 9 horas y 30 minutos en verano (EDT), porque India no cambia sus relojes. El conversor muestra la cifra exacta para tu fecha.' },
      { q: '¿Usa mi ubicación?', a: 'Solo para elegir un huso de partida. Tu navegador facilita su huso horario y no se envía nada a ningún sitio.' },
      { q: '¿Qué pasa si mi ciudad no aparece?', a: 'Elige una ciudad del mismo huso horario.' },
    ],
  },
  'how-to-write-dates-without-confusion': {
    title: 'Cómo escribir fechas sin confusión: DD/MM frente a MM/DD',
    description: 'Por qué 04/03/2026 significa fechas distintas en India y en EE. UU., y cómo escribir las fechas para que nadie las malinterprete.',
    intro: 'Para escribir una fecha sin confusión, usa el formato ISO 2026-03-04 o escribe el mes con letras, por ejemplo 4 de marzo de 2026. La fecha numérica 04/03/2026 significa 4 de marzo en India y en el Reino Unido, pero 3 de abril en Estados Unidos.',
    steps: [
      'Decide quién va a leer la fecha. Si puede usar otro orden, evita la forma solo con números.',
      'Usa ISO 8601 (AAAA-MM-DD) para formularios, nombres de archivo y datos. Se ordena por fecha.',
      'O escribe el mes con letras: 4 de marzo de 2026 o March 4, 2026.',
      'Usa el conversor de formato de fecha para ver una fecha en todos los formatos habituales y copia el que necesites.',
    ],
    sections: [
      {
        heading: 'Tres órdenes en uso',
        paragraphs: [
          'Día-mes-año (DD/MM/AAAA) se usa en India, el Reino Unido y la mayor parte del mundo. Mes-día-año (MM/DD/AAAA) se usa en Estados Unidos. Año-mes-día (AAAA/MM/DD) se usa en Japón, China y Corea, y es la base de ISO 8601. Las fechas en que el día es 13 o más no son ambiguas, pero 04/03 y 05/06 sí lo son.',
        ],
      },
      {
        heading: 'Por qué ISO 8601 es más seguro',
        paragraphs: [
          'ISO 8601 escribe primero la unidad mayor, así que 2026-03-04 solo se puede leer de una manera, y una lista de fechas ISO se ordena correctamente como texto simple. Las bases de datos, los programadores y los formularios internacionales lo prefieren. Para una escritura amable, un mes escrito con letras elimina cualquier duda para los lectores humanos.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cómo introduzco una fecha para que el conversor la lea bien?', a: 'Escríbela e indica al conversor si va primero el día, el mes o el año. Después muestra todos los demás formatos.' },
      { q: '¿Acepta años de dos cifras?', a: 'Sí. Un año de dos cifras como 26 se lee como 2026.' },
      { q: '¿Por qué dice que mi fecha no es real?', a: 'O el día no existe (31 de febrero) o el orden es erróneo (un mes 25).' },
    ],
  },
  'how-to-convert-tiff-to-jpg': {
    title: 'Cómo convertir TIFF a JPG',
    description: 'Convierte escaneos y fotos TIFF en pequeños archivos JPG que se abren en todas partes, incluidos los TIFF de varias páginas.',
    intro: 'Para convertir TIFF a JPG, suelta tus archivos TIFF en el conversor, elige una calidad (90 es un buen valor por defecto) y pulsa "Convertir". Cada página de un TIFF de varias páginas se convierte en su propio JPG, y puedes descargarlos todos en un ZIP.',
    steps: [
      'Abre TIFF a JPG y suelta tus archivos .tif o .tiff.',
      'Elige una calidad. 90 conserva la mayor parte del detalle; los valores más bajos dan archivos más pequeños.',
      'Pulsa "Convertir".',
      'Descarga el JPG, o un ZIP si hay varias páginas o archivos.',
    ],
    sections: [
      {
        heading: 'Por qué la gente convierte TIFF',
        paragraphs: [
          'TIFF es un formato de alta calidad que usan los escáneres, el software de fax y la fotografía profesional. Los archivos son grandes, y la mayoría de los navegadores web (salvo Safari), los clientes de correo y los formularios no pueden mostrarlos ni aceptarlos. JPG es mucho más pequeño y funciona casi en todas partes.',
        ],
      },
      {
        heading: 'Qué esperar',
        paragraphs: [
          'JPG tiene pérdida, así que se cambia un poco de detalle por un archivo mucho más pequeño. Con calidad 90 o más, es difícil de ver. JPG no tiene transparencia, así que las zonas transparentes se vuelven blancas. Algunas variantes raras de TIFF, como ciertos archivos de 16 bits o CMYK, pueden no abrirse; la página muestra un mensaje cuando eso ocurre. Conserva el TIFF si puedes imprimir o editar la imagen más adelante.',
        ],
      },
      {
        heading: 'Documentos escaneados',
        paragraphs: [
          'Para un documento escaneado a 200 o 300 ppp, JPG con calidad 90 mantiene legible la letra pequeña y reduce drásticamente el tamaño del archivo. Los ajustes de calidad muy bajos difuminan los bordes de las letras, así que no bajes de unos 70 para texto. Si una página es solo texto negro sobre blanco, comprueba el resultado a tamaño completo antes de tirar el TIFF.',
        ],
      },
    ],
    faqs: [
      { q: '¿Un escaneo de varias páginas conservará su orden?', a: 'Sí. Las páginas se llaman page1, page2 y así sucesivamente.' },
      { q: '¿Puedo crear un PDF en su lugar?', a: 'Las conversiones de PDF están en iDuckPDF, un sitio hermano, que puede convertir imágenes en un PDF.' },
      { q: '¿Se sube mi escaneo?', a: 'No. Se convierte en la pestaña de tu navegador.' },
    ],
  },
  'how-to-convert-webp-to-gif': {
    title: 'Cómo convertir WEBP a GIF',
    description: 'Convierte imágenes WEBP en archivos GIF para aplicaciones de chat y foros que rechazan WEBP, y mantén el archivo pequeño.',
    intro: 'Para convertir WEBP a GIF, suelta el archivo en el conversor de WEBP a GIF, elige opcionalmente un ancho máximo y pulsa "Convertir". En esta versión un WEBP fijo se convierte en un GIF de un solo fotograma, y un WEBP animado conserva solo su primer fotograma.',
    steps: [
      'Abre WEBP a GIF y suelta tus archivos .webp.',
      'Elige un ancho máximo si la imagen es grande. Los archivos GIF crecen rápido.',
      'Pulsa "Convertir".',
      'Descarga el GIF, o un ZIP si son varios archivos.',
    ],
    sections: [
      {
        heading: 'Cuándo ayuda esto',
        paragraphs: [
          'WEBP es un formato de imagen moderno de Google que crea archivos pequeños, y muchos sitios web lo sirven ya. Algunas aplicaciones de chat, foros y programas de correo más antiguos todavía no lo aceptan, pero casi todos aceptan GIF.',
        ],
      },
      {
        heading: 'A qué renuncias',
        paragraphs: [
          'GIF es un formato más antiguo limitado a 256 colores, así que las fotografías pueden verse algo granuladas y los archivos suelen ser mayores que el WEBP. Las zonas transparentes siguen siendo transparentes, pero los bordes suaves semitransparentes pasan a ser totalmente sólidos o totalmente claros, porque GIF solo tiene transparencia de sí o no. Si la imagen es una foto y el sitio lo acepta, JPG o PNG pueden convenir más; las conversiones de imágenes a esos formatos están en iDuckIMG.',
        ],
      },
      {
        heading: 'Mantener el GIF pequeño',
        paragraphs: [
          'Usa un ancho máximo de 320 a 480 píxeles para pegatinas y avatares. Los colores planos, los logotipos y los dibujos sencillos se comprimen bien como GIF, mientras que las fotografías no, porque solo hay 256 colores disponibles. Si el GIF es mucho mayor de lo que esperabas, un ancho menor es la solución más rápida.',
        ],
      },
    ],
    faqs: [
      { q: '¿Un WEBP animado sigue animado?', a: 'Todavía no. En esta versión solo se conserva el primer fotograma, y la página lo dice.' },
      { q: '¿Por qué mi GIF pesa más que el WEBP?', a: 'GIF comprime peor. Elegir un ancho menor lo reduce.' },
      { q: '¿Se sube?', a: 'No. Se convierte dentro de la pestaña de tu navegador.' },
    ],
  },
  'how-to-convert-kg-to-pounds': {
    title: 'Cómo convertir kg a libras (y libras a kg)',
    description: 'Convierte kilogramos a libras, onzas y stone con el factor exacto, un atajo mental y un conversor.',
    intro: 'Para convertir kilogramos a libras, multiplica por 2,20462. Así, 70 kg son unas 154,3 lb. Para el otro sentido, multiplica las libras por 0,45359237. El conversor de peso hace ambas cosas al instante y también cubre onzas, stone, gramos y toneladas.',
    steps: [
      'Anota el peso con su unidad, por ejemplo 70 kg.',
      'Multiplica por 2,20462: 70 × 2,20462 = 154,32 lb.',
      'De libras a kilogramos, multiplica por 0,45359237: 154 lb × 0,45359237 = 69,85 kg.',
      'O abre el conversor de peso, escribe el número y elige las dos unidades.',
    ],
    sections: [
      {
        heading: 'Un atajo rápido',
        paragraphs: [
          'Para una respuesta aproximada, duplica los kilogramos y suma una décima parte del resultado: 70 kg duplicados son 140, más 14 son 154 lb. En el otro sentido, divide las libras por la mitad y resta una décima parte: 154 lb son 77, menos 7,7 son unos 69,3 kg. Es lo bastante cercano para el uso diario, pero usa el factor exacto para cocinar, enviar paquetes y en medicina.',
        ],
      },
      {
        heading: 'Libras, onzas y stone',
        paragraphs: [
          'Una libra son 16 onzas. Un stone, que se usa en el Reino Unido e Irlanda para el peso corporal, son 14 libras o unos 6,35 kg. Un bebé que pesa 7 lb 8 oz pesa 7,5 libras, unos 3,4 kg. La tonelada que se usa aquí es la métrica, de 1000 kg, que difiere de la tonelada corta estadounidense de 2000 libras.',
        ],
      },
      {
        heading: 'Equipaje y peso corporal',
        paragraphs: [
          'Los límites de equipaje de las aerolíneas son un motivo habitual para convertir. Una maleta facturada de 23 kg son unas 50,7 libras, y un límite de 50 libras son unos 22,7 kg, así que una maleta que está bien en una unidad puede pasarse por poco en la otra. Para el peso corporal, recuerda que el stone se usa en el Reino Unido: 11 stone son 154 libras, o unos 69,9 kg.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuántas libras es 1 kg?', a: 'Unas 2,20462 libras.' },
      { q: '¿Cuántos kg son 150 libras?', a: 'Unos 68 kg.' },
      { q: '¿Es lo mismo una tonelada que un ton?', a: 'No. Una tonelada métrica son 1000 kg, un ton estadounidense son 2000 libras y un ton británico son 2240 libras.' },
    ],
  },
};

export default guides;
