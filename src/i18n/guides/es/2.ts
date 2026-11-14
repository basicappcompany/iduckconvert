import type { GuideSet } from '../types';

/** Spanish guides, batch 2. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-compress-a-video-to-send-it': {
    title: 'Cómo comprimir un vídeo para enviarlo',
    description: 'Reduce un vídeo grande para el correo o las aplicaciones de chat bajando su calidad y su ancho, sin instalar nada.',
    intro: 'Para comprimir un vídeo, abre la herramienta Comprimir vídeo, suéltalo, elige la calidad "Small" y un ancho de 720 píxeles, y pulsa "Comprimir". Reducir el ancho es lo que más espacio ahorra, y es habitual una reducción del 50 al 90 por ciento.',
    steps: [
      'Comprueba el tamaño que necesitas alcanzar. Muchos servicios de correo se paran en 20 o 25 MB.',
      'Abre Comprimir vídeo y suelta tu archivo. Los vídeos largos del móvil suelen ser los culpables.',
      'Elige un ancho. 720 píxeles se ve bien en la pantalla de un móvil; 480 es todavía más pequeño.',
      'Elige una calidad. "Medium" sirve para la mayoría de los clips. Elige "Small" solo cuando el límite de tamaño importe más que el aspecto.',
      'Pulsa "Comprimir" y compara los tamaños de antes y después que se muestran con tu descarga.',
    ],
    sections: [
      {
        heading: 'Qué hace realmente grande a un vídeo',
        paragraphs: [
          'El tamaño depende de la duración, de las dimensiones de la imagen y de cuánto se comprime el vídeo. Una grabación de móvil en 1080p o 4K guarda mucho más detalle del que puede mostrar una pantalla pequeña. Bajar a 720 píxeles de ancho descarta un detalle que nadie ve y reduce el archivo de forma drástica.',
          'Si aún pesa demasiado, acórtalo antes con Recortar vídeo. Quitar el minuto que no necesitas rinde más que exprimir todo el vídeo con más fuerza.',
        ],
      },
      {
        heading: 'Límites que conviene conocer',
        paragraphs: [
          'Todo se ejecuta en tu propio dispositivo, así que un archivo muy grande puede ir lento o quedarse sin memoria, sobre todo en un móvil. Recomendamos archivos de menos de 500 MB en un ordenador y 100 MB en un móvil. Para un archivo mayor, usa un ordenador.',
        ],
      },
    ],
    faqs: [
      { q: '¿Comprimir reduce la calidad?', a: 'Sí, siempre un poco. Comprimir cambia detalle por tamaño. Conserva tu original por si más adelante quieres una versión mejor.' },
      { q: '¿Qué formato obtengo?', a: 'Un MP4, que se reproduce casi en todas partes.' },
      { q: '¿Puedo comprimir varios vídeos a la vez?', a: 'Sí. Se procesan uno tras otro y puedes descargarlos juntos en un ZIP.' },
    ],
  },
  'how-to-trim-a-video-without-software': {
    title: 'Cómo recortar un vídeo sin programas',
    description: 'Corta el principio y el final de un vídeo en tu navegador escribiendo dos tiempos. Sin editor que instalar y sin subir nada.',
    intro: 'Para recortar un vídeo, abre la herramienta Recortar vídeo, suelta el archivo, escribe los tiempos de inicio y de fin, y pulsa "Recortar". El clip cortado se guarda como MP4. Usa segundos (90) o minutos y segundos (1:30).',
    steps: [
      'Reproduce tu vídeo en cualquier reproductor y anota el momento en que quieres que empiece y termine.',
      'Abre Recortar vídeo y suelta el archivo.',
      'Escribe el tiempo de inicio. Déjalo en 0 para conservar el principio.',
      'Escribe el tiempo de fin. Déjalo vacío para conservar todo lo que viene después del inicio.',
      'Pulsa "Recortar" y descarga el MP4.',
    ],
    sections: [
      {
        heading: 'Cómo se hace el corte',
        paragraphs: [
          'El clip se codifica de nuevo después de cortarlo, así que el inicio es exacto al fotograma. Un corte que solo copia es más rápido, pero solo puede empezar en ciertos puntos del vídeo, lo que a menudo deja un principio congelado o negro. Recodificar tarda más, pero lo evita.',
          'Como se recodifica, la calidad baja muy ligeramente. Se usa un ajuste de alta calidad, y la mayoría de la gente no notará la diferencia.',
        ],
      },
      {
        heading: 'Cómo escribir los tiempos',
        paragraphs: [
          'Un número solo son segundos, así que 90 significa un minuto y treinta. Dos partes son minutos y segundos (1:30), y tres partes incluyen horas (1:02:30). Los decimales también valen, por ejemplo 12,5.',
        ],
      },
      {
        heading: 'Acertar con los tiempos',
        paragraphs: [
          'Abre el vídeo en cualquier reproductor que muestre el tiempo, pausa en el momento en que quieres empezar y anota el tiempo, y luego haz lo mismo con el final. Deja uno o dos segundos de margen en cada extremo, porque es fácil volver a recortar pero imposible recuperar las imágenes que cortaste. Si el clip es para un GIF, bastan unos segundos, y Vídeo a GIF tiene sus propias casillas de inicio y duración, así que no necesitas recortar antes.',
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo cortar la parte del medio?', a: 'No de una sola vez. Recorta por separado la parte de antes y la de después, o usa un editor de vídeo completo para unir clips.' },
      { q: '¿Recortar también reduce el tamaño del archivo?', a: 'Normalmente sí, porque hay menos vídeo. Para ahorrar más, usa también Comprimir vídeo.' },
      { q: '¿Se sube mi vídeo?', a: 'No. Todo ocurre en la pestaña de tu navegador.' },
    ],
  },
  'how-to-convert-mov-to-mp4': {
    title: 'Cómo convertir MOV a MP4 (vídeos de iPhone)',
    description: 'Haz que los vídeos MOV de iPhone y Mac se reproduzcan en Android, Windows y todas las aplicaciones convirtiéndolos a MP4 en tu navegador.',
    intro: 'Para convertir MOV a MP4, abre el conversor de MOV a MP4, suelta tu vídeo y pulsa "Convertir". MP4 se reproduce en Android, Windows, televisores inteligentes y todas las aplicaciones sociales, así que es el formato seguro para compartir un vídeo de iPhone.',
    steps: [
      'Pasa el archivo .mov a tu ordenador o móvil (AirDrop, un cable o iCloud).',
      'Abre MOV a MP4 y suelta el archivo en el recuadro.',
      'Pulsa "Convertir". La primera vez, tu navegador descarga el motor del conversor (unos 30 MB), que después queda en caché.',
      'Descarga el MP4 cuando termine la barra de progreso.',
    ],
    sections: [
      {
        heading: 'Por qué los vídeos de iPhone son MOV',
        paragraphs: [
          'Los iPhone graban en el contenedor QuickTime de Apple, MOV. Según el ajuste de tu cámara, el vídeo de dentro es H.264 o el más nuevo HEVC. Los dispositivos Apple manejan ambos, pero muchos PC con Windows, móviles Android, editores y sitios web no abren vídeo HEVC sin software adicional.',
          'El conversor escribe vídeo H.264 estándar dentro de un envoltorio MP4, que se acepta casi en todas partes.',
        ],
      },
      {
        heading: 'Evítalo en origen',
        paragraphs: [
          'En el iPhone puedes grabar en un formato más compatible: Ajustes, Cámara, Formatos, "Más compatible". Los archivos pesan más, pero se abren en todas partes sin convertir.',
        ],
      },
      {
        heading: 'Si el archivo convertido no se reproduce',
        paragraphs: [
          'Primero asegúrate de que la descarga terminó y prueba con otro reproductor, como VLC. Si un móvil o televisor muy antiguo sigue rechazando el MP4, quizá el vídeo sea simplemente demasiado grande o demasiado nítido para él: pásalo por Comprimir vídeo a 720 píxeles de ancho. Conserva el MOV original, porque contiene la grabación con toda la calidad y siempre puedes crear otro MP4 a partir de él más adelante.',
        ],
      },
    ],
    faqs: [
      { q: '¿Bajará la calidad?', a: 'Ligeramente, porque el vídeo se codifica de nuevo. Se usa un ajuste de alta calidad, así que la mayoría de la gente no lo nota.' },
      { q: '¿Conserva el sonido?', a: 'Sí, el sonido se convierte a AAC, el formato de audio habitual de MP4.' },
      { q: '¿Es gratis para vídeos largos?', a: 'Es gratis y no tiene un límite propio, pero los vídeos largos son lentos en un móvil. Recomendamos archivos de menos de 500 MB en un ordenador y 100 MB en un móvil.' },
    ],
  },
  'how-to-convert-mkv-to-mp4': {
    title: 'Cómo convertir MKV a MP4',
    description: 'Haz que los vídeos MKV se reproduzcan en móviles, televisores y editores convirtiéndolos a MP4 en tu navegador.',
    intro: 'Para convertir MKV a MP4, abre el conversor de MKV a MP4, suelta el vídeo y pulsa "Convertir". MKV es un contenedor flexible que muchos móviles y televisores se niegan a reproducir, mientras que MP4 funciona casi en todas partes.',
    steps: [
      'Abre MKV a MP4 y suelta tu archivo .mkv en el recuadro.',
      'Pulsa "Convertir" y espera a la barra de progreso.',
      'Descarga el MP4 y pruébalo en el dispositivo que no reproducía el MKV.',
    ],
    sections: [
      {
        heading: 'Qué es MKV',
        paragraphs: [
          'MKV (Matroska) es un contenedor, una caja que puede guardar vídeo, varias pistas de audio, subtítulos y capítulos. Es popular para descargas y copias de Blu-ray porque es muy flexible, pero las galerías de los móviles, muchos televisores y editores no lo admiten.',
        ],
      },
      {
        heading: 'Qué esperar',
        paragraphs: [
          'El vídeo y el audio principales se convierten al estándar MP4. No cuentes con que pasen las pistas de audio adicionales, los subtítulos o los capítulos. Si un archivo depende de una pista de subtítulos concreta, comprueba el MP4 antes de borrar el MKV.',
          'Los MKV grandes, como las películas completas, son pesados de convertir en un navegador. Recomendamos archivos de menos de 500 MB en un ordenador. Para películas, un conversor de escritorio será más rápido.',
        ],
      },
      {
        heading: 'Reproducir MKV sin convertir',
        paragraphs: [
          'Algunos reproductores abren MKV directamente, entre ellos VLC en ordenadores y muchas aplicaciones multimedia en móviles y televisores inteligentes, así que convertir solo hace falta cuando un dispositivo concreto rechaza el archivo. Si quieres conservar exactamente todos los subtítulos y pistas de audio, un reproductor compatible con MKV es mejor respuesta que convertir.',
        ],
      },
    ],
    faqs: [
      { q: '¿Por qué no cambiar simplemente .mkv por .mp4 en el nombre?', a: 'Cambiar el nombre solo cambia la etiqueta. El contenido sigue siendo MKV, así que los reproductores que no pueden leer MKV siguen fallando. Hay que convertir el archivo.' },
      { q: '¿Tendrá la misma calidad?', a: 'Casi. El vídeo se codifica de nuevo con un ajuste de alta calidad, así que hay una pequeña pérdida.' },
      { q: '¿Se sube el archivo?', a: 'No. Se convierte dentro de la pestaña de tu navegador.' },
    ],
  },
  'how-to-convert-webm-to-mp4': {
    title: 'Cómo convertir WEBM a MP4',
    description: 'Convierte vídeos WEBM y grabaciones de pantalla a MP4 para que se abran en editores, televisores y galerías del móvil.',
    intro: 'Para convertir WEBM a MP4, suelta el archivo en el conversor de WEBM a MP4 y pulsa "Convertir". Los navegadores reproducen WEBM sin problema, pero muchos editores, televisores y galerías del móvil solo aceptan MP4.',
    steps: [
      'Abre WEBM a MP4 y suelta tu archivo en el recuadro.',
      'Pulsa "Convertir" y espera a que termine la barra de progreso.',
      'Descarga el MP4 y úsalo en cualquier sitio que rechazara el WEBM.',
    ],
    sections: [
      {
        heading: 'De dónde vienen los archivos WEBM',
        paragraphs: [
          'Los grabadores de pantalla del navegador, algunos descargadores en línea y muchos vídeos de sitios web usan WEBM, un formato abierto creado para la web. Es pequeño y se reproduce en todos los navegadores, pero los editores de escritorio, los televisores, las consolas y las aplicaciones de fotos del móvil a menudo no lo reconocen.',
        ],
      },
      {
        heading: 'En el sentido contrario',
        paragraphs: [
          'Si quieres un vídeo pequeño para tu propio sitio web, WEBM es una buena elección y MP4 a WEBM hace la conversión inversa. Para compartir con otras personas, MP4 es el formato más seguro.',
        ],
      },
      {
        heading: 'Dónde funciona WEBM y dónde no',
        paragraphs: [
          'Chrome, Firefox y Edge reproducen WEBM directamente, y el software reciente de Apple lo maneja en muchos casos, pero la compatibilidad es desigual. Los editores de vídeo de escritorio, los televisores, las consolas y las galerías del móvil suelen aceptar MP4 y puede que no acepten WEBM en absoluto. Cuando no sepas qué abrirá el archivo, MP4 es el formato que funciona. Si solo vas a verlo en un navegador, el WEBM está bien tal como es y convertir no cambia nada útil.',
        ],
      },
    ],
    faqs: [
      { q: '¿Sobrevivirá el sonido?', a: 'Sí. El audio de WEBM se convierte a AAC dentro del MP4.' },
      { q: '¿Por qué pesa más el MP4?', a: 'WEBM comprime muy bien, así que el MP4 suele ser algo mayor con una calidad parecida. Usa Comprimir vídeo si lo necesitas más pequeño.' },
      { q: '¿Funciona con grabaciones de pantalla?', a: 'Sí. Las grabaciones de herramientas del navegador se convierten como cualquier otro archivo WEBM.' },
    ],
  },
};

export default guides;
