import type { GuideSet } from '../types';

/** Spanish guides, batch 3. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-wav-to-mp3': {
    title: 'Cómo convertir WAV a MP3 y reducir el archivo',
    description: 'Convierte grabaciones WAV grandes en archivos MP3 pequeños y aprende qué tasa de bits elegir para voz o música.',
    intro: 'Para convertir WAV a MP3, suelta el WAV en el conversor, elige una tasa de bits (192 kbit/s es un buen valor por defecto) y pulsa "Convertir". Un minuto de WAV con calidad de CD ocupa unos 10 MB, mientras que el mismo minuto en MP3 a 192 kbit/s ocupa unos 1,4 MB.',
    steps: [
      'Abre WAV a MP3 y suelta tus archivos. Puedes añadir varios a la vez.',
      'Elige una calidad. 128 kbit/s va bien para voz, 192 para música de diario y 320 para la mejor calidad MP3.',
      'Pulsa "Convertir".',
      'Descarga cada MP3, o todos en un único ZIP.',
    ],
    sections: [
      {
        heading: 'Por qué WAV pesa tanto',
        paragraphs: [
          'WAV guarda el sonido en bruto, sin comprimir. El estéreo con calidad de CD usa unos 1411 kbit/s, más o menos 10 MB por minuto. MP3 descarta detalles que la mayoría de los oídos no perciben y conserva alrededor de una séptima parte de los datos a 192 kbit/s.',
        ],
      },
      {
        heading: 'Elegir una tasa de bits',
        paragraphs: [
          'Para una reunión grabada o una nota de voz, de 96 a 128 kbit/s es más que suficiente y el archivo queda diminuto. Para música que vas a escuchar en altavoces o auriculares, de 192 a 256 es un equilibrio sensato. Elige 320 solo para música que te importe y para la que tengas espacio.',
          'MP3 es un formato con pérdida: no puedes volver a la calidad del WAV original. Conserva el WAV si puedes volver a editar la grabación.',
        ],
      },
      {
        heading: 'Un ejemplo de grabación larga',
        paragraphs: [
          'Una grabación de una hora de una clase o una reunión ocupa unos 600 MB como WAV estéreo con calidad de CD, pero solo unos 58 MB como MP3 a 128 kbit/s, algo fácil de enviar por correo o de guardar. Las grabaciones en mono ocupan la mitad que las estéreo en cualquiera de los dos formatos, así que una grabación de voz con un solo micrófono es aún más pequeña. Si piensas limpiar el sonido en un editor, edita primero el WAV y haz el MP3 al final.',
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo convertir muchos WAV a la vez?', a: 'Sí. Se convierten uno tras otro y se descargan juntos en un ZIP.' },
      { q: '¿Funciona en un móvil?', a: 'Sí, pero las grabaciones largas son lentas en un móvil. Un ordenador es más rápido.' },
      { q: '¿Se suben mis grabaciones?', a: 'No. La conversión ocurre en la pestaña de tu navegador.' },
    ],
  },
  'how-to-convert-m4a-to-mp3': {
    title: 'Cómo convertir M4A a MP3 (notas de voz e iTunes)',
    description: 'Convierte las notas de voz del iPhone y los archivos M4A de iTunes en MP3 para que suenen en cualquier dispositivo o se puedan enviar a cualquiera.',
    intro: 'Para convertir M4A a MP3, suelta tus archivos M4A en el conversor de M4A a MP3, elige una tasa de bits y pulsa "Convertir". Las notas de voz del iPhone y las compras de iTunes son M4A, que algunos reproductores y sitios web no aceptan.',
    steps: [
      'Pasa el archivo .m4a a tu dispositivo. Las notas de voz se pueden compartir en Archivos o guardar en tu ordenador.',
      'Abre M4A a MP3 y suelta el archivo.',
      'Elige una tasa de bits. 128 kbit/s sirve para voz; usa 192 o más para música.',
      'Pulsa "Convertir" y descarga tu MP3.',
    ],
    sections: [
      {
        heading: 'Qué es M4A',
        paragraphs: [
          'M4A es audio comprimido con AAC dentro de un contenedor de tipo MP4. AAC suele sonar algo mejor que MP3 con el mismo tamaño, por eso lo usa Apple. El problema es la compatibilidad: los reproductores antiguos, algunas radios de coche y muchos formularios web solo conocen MP3.',
        ],
      },
      {
        heading: 'Una nota sobre la calidad',
        paragraphs: [
          'Pasar de M4A a MP3 significa comprimir por segunda vez un sonido ya comprimido, lo que pierde un poquito más. Usa 192 kbit/s o más para música. En grabaciones de voz la diferencia no se nota. Conserva el M4A original si la calidad importa.',
        ],
      },
      {
        heading: 'Dónde encontrar tus archivos M4A',
        paragraphs: [
          'En un iPhone, abre Notas de voz, toca la grabación, toca los tres puntos y elige Compartir o Guardar en Archivos. En un Mac, las grabaciones se sincronizan por iCloud y aparecen en la aplicación Notas de voz, desde donde puedes arrastrarlas al escritorio como archivos .m4a. La música que importaste o compraste sin protección también está en la carpeta de tu biblioteca musical como archivos .m4a.',
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo convertir canciones protegidas de iTunes?', a: 'No. Las canciones con protección contra copia no se pueden abrir. Los archivos que grabaste tú y la música comprada sin protección funcionan bien.' },
      { q: '¿Conserva el título y el artista de la canción?', a: 'El conversor conserva las etiquetas básicas cuando puede, pero comprueba el resultado en tu reproductor.' },
      { q: '¿Se sube?', a: 'No. Se ejecuta en tu navegador.' },
    ],
  },
  'how-to-convert-flac-to-mp3': {
    title: 'Cómo convertir FLAC a MP3 para tu móvil o tu coche',
    description: 'Crea copias MP3 pequeñas de tu música FLAC para móviles y radios de coche, y guarda a salvo los originales sin pérdida.',
    intro: 'Para convertir FLAC a MP3, suelta los archivos en el conversor de FLAC a MP3, elige 256 o 320 kbit/s y pulsa "Convertir". FLAC no tiene pérdida pero pesa mucho y no se acepta en todas partes, mientras que MP3 suena en cualquier cosa.',
    steps: [
      'Abre FLAC a MP3 y suelta una pista o un álbum entero.',
      'Elige 256 kbit/s para un buen equilibrio o 320 para la mejor calidad MP3.',
      'Pulsa "Convertir" y espera a que termine cada pista.',
      'Descarga los archivos MP3, o todo el lote en un ZIP, y cópialos a tu móvil o a tu memoria USB.',
    ],
    sections: [
      {
        heading: 'Sin pérdida frente a con pérdida',
        paragraphs: [
          'FLAC conserva cada detalle de la grabación y suele ocupar más o menos la mitad que la misma música en WAV. MP3 descarta el sonido que la mayoría de los oyentes no echa en falta, así que los archivos son mucho más pequeños. Una vez convertido, el detalle perdido no se puede recuperar.',
        ],
      },
      {
        heading: 'Conserva tus archivos FLAC',
        paragraphs: [
          'Trata el MP3 como una copia de viaje. Conserva los originales FLAC para poder hacer una copia nueva en otro formato más adelante. Si solo necesitas que tu música suene en un ordenador, un móvil moderno o unos buenos auriculares, el propio FLAC suele funcionar y no hace falta convertir.',
        ],
      },
      {
        heading: 'Qué efecto tiene en tu almacenamiento',
        paragraphs: [
          'Un álbum de 40 minutos ocupa más o menos de 200 a 300 MB en FLAC y unos 100 MB en MP3 a 320 kbit/s, así que el mismo móvil puede guardar dos o tres veces más álbumes. Esa es la verdadera razón para hacer copias MP3: espacio y compatibilidad, no mejor sonido. Si el espacio no es un problema y tu reproductor acepta FLAC, no hace falta convertir.',
        ],
      },
    ],
    faqs: [
      { q: '¿Qué tasa de bits es mejor?', a: '320 kbit/s es lo máximo que permite MP3 y es casi transparente para la mayoría de la gente. 256 es una opción más pequeña que pocos distinguen.' },
      { q: '¿Puedo convertir un álbum entero?', a: 'Sí. Suelta todas las pistas y descarga el resultado en un ZIP.' },
      { q: '¿Se sube?', a: 'No. Tu música se queda en tu dispositivo.' },
    ],
  },
  'how-to-convert-opus-to-mp3': {
    title: 'Cómo convertir notas de voz OPUS y OGG a MP3',
    description: 'Abre las notas de voz de WhatsApp y otros audios OPUS u OGG en cualquier sitio convirtiéndolos a MP3 en tu navegador.',
    intro: 'Para convertir una nota de voz OPUS a MP3, suelta el archivo en el conversor de OPUS a MP3 y pulsa "Convertir". Los mensajes de voz de WhatsApp se guardan como archivos .opus, que muchos reproductores y editores no pueden abrir.',
    steps: [
      'Guarda la nota de voz de tu aplicación de chat en tu dispositivo (compártela a Archivos o a tu ordenador).',
      'Abre OPUS a MP3 para archivos .opus, u OGG a MP3 para archivos .ogg.',
      'Suelta el archivo y elige una tasa de bits. De 96 a 128 kbit/s es más que suficiente para voz.',
      'Pulsa "Convertir" y descarga el MP3.',
    ],
    sections: [
      {
        heading: 'Por qué las notas de voz son OPUS',
        paragraphs: [
          'OPUS es un formato abierto moderno que hace que la voz suene clara con tasas de bits muy bajas, por eso lo usan las aplicaciones de chat. Se guarda en un contenedor Ogg, así que los archivos son pequeños. La contrapartida es la compatibilidad: los reproductores antiguos, las aplicaciones de música de muchos móviles y la mayoría de los editores de audio no lo reconocen.',
        ],
      },
      {
        heading: 'Facilitar una transcripción o una edición',
        paragraphs: [
          'Convertir a MP3 te permite abrir la grabación en editores habituales, adjuntarla a un correo o pasarla a una herramienta de transcripción que no acepte OPUS. Para voz, un MP3 a 128 kbit/s es más que suficiente.',
        ],
      },
      {
        heading: 'Muchas notas de voz a la vez',
        paragraphs: [
          'Si tienes una conversación entera de notas de voz, suéltalas todas juntas y descarga los MP3 en un único ZIP. Los archivos convertidos conservan sus nombres originales, así que cualquier fecha o número del nombre se queda con la grabación y siguen siendo fáciles de ordenar.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuál es la diferencia entre OPUS y OGG?', a: 'OGG es el contenedor y Vorbis era su formato de audio original. El audio OPUS también se guarda en un contenedor Ogg, por eso los archivos pueden parecer similares.' },
      { q: '¿Funcionará con una nota de voz muy larga?', a: 'Sí. Las notas de voz son pequeñas, así que hasta las largas se convierten rápido.' },
      { q: '¿Se sube mi nota de voz?', a: 'No. La conversión se hace dentro de la pestaña de tu navegador y no se envía nada a ningún sitio.' },
    ],
  },
  'how-to-convert-aac-to-mp3': {
    title: 'Cómo convertir AAC a MP3',
    description: 'Convierte archivos de audio AAC a MP3 para que suenen en reproductores antiguos, radios de coche y sitios web que solo aceptan MP3.',
    intro: 'Para convertir AAC a MP3, suelta tu archivo .aac en el conversor de AAC a MP3, elige una tasa de bits y pulsa "Convertir". AAC es el sucesor de MP3, pero un archivo .aac suelto no se acepta en todas partes.',
    steps: [
      'Abre AAC a MP3 y suelta tus archivos.',
      'Elige 192 kbit/s para música de diario o 128 para voz.',
      'Pulsa "Convertir".',
      'Descarga el MP3, o un ZIP si convertiste varios.',
    ],
    sections: [
      {
        heading: 'AAC, M4A y MP3',
        paragraphs: [
          'AAC es un método de compresión y normalmente va envuelto en un archivo M4A o MP4. Un archivo .aac en bruto no tiene envoltorio alguno, lo que lo hace menos común y menos compatible que M4A. MP3 es más antiguo, pero lo entiende prácticamente cualquier dispositivo.',
        ],
      },
      {
        heading: 'Calidad',
        paragraphs: [
          'AAC y MP3 son ambos formatos con pérdida. Convertir uno al otro pierde un poco más de detalle, así que elige 192 kbit/s o más para música y conserva el original AAC si te importa el mejor sonido.',
        ],
      },
      {
        heading: 'Distinguir los tipos de archivo',
        paragraphs: [
          'Un archivo que termina en .aac es un flujo de audio AAC sin envoltorio. Un archivo que termina en .m4a contiene AAC en un envoltorio que además guarda el título, el artista y la carátula, y un .mp4 puede contener audio AAC con vídeo. Cambiar el nombre de uno por el del otro no siempre funciona, porque el envoltorio es distinto. Si un dispositivo rechaza el archivo, convertir es la solución fiable, y M4A es el mejor envoltorio para conservar si el dispositivo lo acepta.',
        ],
      },
    ],
    faqs: [
      { q: '¿Debería usar M4A en su lugar?', a: 'Si el dispositivo lo acepta, M4A es un mejor envoltorio para AAC. Elige MP3 cuando necesites la compatibilidad más amplia.' },
      { q: '¿Puedo convertir MP3 a AAC?', a: 'MP3 a M4A crea un archivo AAC en un envoltorio M4A, que la mayoría de los dispositivos modernos reproducen.' },
      { q: '¿Se sube?', a: 'No. Se queda en tu navegador.' },
    ],
  },
};

export default guides;
