import type { GuideSet } from '../types';

/** Spanish guides, batch 1. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-extract-audio-from-a-video': {
    title: 'Cómo extraer el audio de un vídeo',
    description: 'Guarda el sonido de cualquier vídeo como MP3 en tu navegador, sin subir nada, sin instalar programas y sin marca de agua.',
    intro: 'Para extraer el audio de un vídeo, abre un conversor de vídeo a MP3, suelta el vídeo, pulsa "Convertir" y descarga el MP3. Con iDuckConvert todo ocurre dentro de la pestaña de tu navegador, así que el vídeo nunca se sube a ningún sitio.',
    steps: [
      'Abre el conversor de MP4 a MP3 (con Vídeo a MP3 también acepta MOV, MKV, WEBM y AVI).',
      'Suelta tu vídeo en el recuadro o pulsa "Elegir archivos".',
      'Elige una calidad. 192 kbit/s es una buena opción para el día a día; usa 320 para música que te importe.',
      'Pulsa "Convertir" y espera a que termine la barra de progreso. La primera vez, tu navegador descarga el motor del conversor (unos 30 MB), que después queda en caché.',
      'Descarga el MP3, o descarga varios a la vez en un ZIP.',
    ],
    sections: [
      {
        heading: 'Qué obtienes',
        paragraphs: [
          'La imagen se descarta y solo se conserva la banda sonora, así que el MP3 pesa mucho menos que el vídeo. Un vídeo de clase de 100 MB suele convertirse en un MP3 de 10 a 30 MB.',
          'El sonido se codifica de nuevo como MP3, que es un formato con pérdida. Si el sonido original ya estaba comprimido (lo están casi todos los vídeos), una segunda compresión pierde un poquito más. A 192 kbit/s o más, eso apenas se nota.',
        ],
      },
      {
        heading: 'Qué vídeos funcionan',
        paragraphs: [
          'MP4, MOV (vídeos de iPhone), MKV, WEBM, AVI y la mayoría de clips de móvil y de cámara. Si un archivo no se abre, puede estar dañado, protegido contra copia o en un formato poco habitual; la página te avisa cuando no puede leer un archivo.',
          'Extrae el audio solo de vídeos tuyos o que tengas derecho a usar. Lo habitual es grabar tus propias clases, entrevistas, notas de voz y vídeos familiares.',
        ],
      },
      {
        heading: 'Vídeos largos y móviles',
        paragraphs: [
          'Como el trabajo lo hace tu propio dispositivo, los vídeos largos tardan y consumen memoria. Recomendamos archivos de menos de unos 500 MB en un ordenador y 100 MB en un móvil. Si un móvil se queda corto, recorta primero el vídeo con la herramienta Recortar vídeo, o usa un ordenador.',
        ],
      },
    ],
    faqs: [
      { q: '¿Funciona en un móvil?', a: 'Sí, en cualquier navegador moderno, pero los vídeos largos son lentos en los móviles. Los clips cortos van bien.' },
      { q: '¿Puedo obtener WAV u otro formato?', a: 'Sí. Vídeo a MP3 es el camino más rápido, y los conversores de audio convierten el MP3 en WAV, M4A, OGG o FLAC.' },
      { q: '¿Se sube el vídeo?', a: 'No. Todo se ejecuta en la pestaña de tu navegador y el vídeo nunca sale de tu dispositivo.' },
    ],
  },
  'heic-vs-jpg': {
    title: 'HEIC o JPG: ¿cuál conviene usar?',
    description: 'Qué es HEIC, en qué se diferencia de JPG, por qué las fotos del iPhone no se abren en otros sitios y cómo convertirlas.',
    intro: 'HEIC reduce las fotos a casi la mitad que JPG con una calidad parecida, pero menos programas lo abren. Usa HEIC para ahorrar espacio en tu móvil y convierte a JPG cuando necesites compartir, subir o editar una foto en cualquier otro sitio.',
    steps: [
      'Comprueba que el archivo termina en .heic o .heif. Es lo que guarda un iPhone por defecto.',
      'Si necesitas compartirla o subirla, conviértela a JPG con el conversor de HEIC a JPG de iDuckIMG, que funciona en tu navegador.',
      'Conserva el HEIC original si puedes volver a editarla: guarda más detalle de color que un JPG.',
      'Para que tu iPhone deje de guardar en HEIC, ve a Ajustes, Cámara, Formatos y elige "Más compatible".',
    ],
    sections: [
      {
        heading: 'Las diferencias reales',
        paragraphs: [
          'HEIC (High Efficiency Image Container) usa la misma familia de compresión que el vídeo moderno. Apple lo hizo el formato por defecto del iPhone en 2017 porque guarda una foto en más o menos la mitad del espacio que un JPG, y puede contener color de 10 bits, datos de profundidad y varias imágenes en un solo archivo.',
          'JPG es de 1992. Su compresión es menos eficiente, pero todos los móviles, ordenadores, sitios web, impresoras y editores de fotos lo abren sin problemas.',
        ],
      },
      {
        heading: 'Por qué HEIC da problemas',
        paragraphs: [
          'Muchos sitios web y formularios rechazan los HEIC. Windows necesita un códec adicional para mostrarlos, y los Android antiguos, algunas impresoras y mucho software antiguo no pueden abrirlos en absoluto.',
          'Convertir a JPG cuesta un poco de calidad, porque JPG tiene pérdida y menos rango de color. Para compartir y subir no lo notarás. Para edición seria, conserva el original.',
        ],
      },
      {
        heading: 'Una regla sencilla',
        paragraphs: ['Conserva el HEIC mientras la foto esté en tu móvil o en iCloud. Convierte una copia a JPG en cuanto necesites enviarla a alguien o ponerla en un sitio web.'],
      },
    ],
    faqs: [
      { q: '¿HEIC tiene mejor calidad que JPG?', a: 'Con el mismo tamaño de archivo, sí: conserva más detalle. Con la misma calidad, pesa la mitad. También admite más color.' },
      { q: '¿Se pierde calidad al convertir HEIC a JPG?', a: 'Un poco, porque JPG es un formato con pérdida. Con ajustes de calidad altos la diferencia es muy difícil de ver.' },
      { q: '¿Dónde convierto HEIC a JPG?', a: 'El conversor de HEIC a JPG está en iDuckIMG, un sitio hermano. También funciona en tu navegador y no sube tus fotos.' },
    ],
  },
  'how-to-open-a-csv-in-excel-correctly': {
    title: 'Cómo abrir un CSV en Excel correctamente',
    description: 'Evita que Excel borre los ceros iniciales, destroce los números largos y rompa los acentos al abrir un archivo CSV.',
    intro: 'Al hacer doble clic en un CSV, Excel adivina cómo leerlo, y la suposición suele ser errónea. La forma fiable es convertir primero el CSV a un archivo XLSX, o usar la pestaña Datos de Excel para importarlo y elegir tú mismo el tipo de cada columna.',
    steps: [
      'Lo más fácil: convierte el archivo con el conversor de CSV a Excel y abre después el .xlsx. Los ceros iniciales y los valores de texto se quedan como están.',
      'O en Excel, abre un libro en blanco y elige Datos, y luego Desde texto o CSV.',
      'Elige el archivo y comprueba que el origen del archivo diga 65001: UTF-8 (esto arregla los acentos) y que el delimitador coincida con tu archivo.',
      'Pulsa Transformar datos si algunas columnas deben seguir siendo texto, como códigos postales y números de teléfono, y ponles el tipo Texto.',
      'Pulsa Cargar.',
    ],
    sections: [
      {
        heading: 'Qué sale mal',
        paragraphs: [
          'Los ceros iniciales desaparecen: 01234 pasa a ser 1234, lo que rompe códigos postales, números de teléfono e identificadores de producto.',
          'Los números largos se convierten en notación científica. Excel solo conserva 15 dígitos de un número, así que un número de tarjeta o de identificación de 16 dígitos queda dañado para siempre una vez guardado como número.',
          'Algunos textos se leen como fechas. Un valor como 1-2 puede convertirse en 2 de enero, y algunos nombres de genes han acabado destrozados así, con fama incluida.',
          'Los acentos y las letras no inglesas aparecen como caracteres extraños cuando el archivo es UTF-8 pero Excel supone una codificación más antigua.',
        ],
      },
      {
        heading: 'Punto y coma y comas',
        paragraphs: [
          'En los países que escriben los decimales con coma, Excel espera un punto y coma entre columnas, así que un CSV con comas se abre como una sola columna larga. El conversor de este sitio mira la primera línea y elige el separador correcto, y además entiende los valores entre comillas que contienen comas.',
        ],
      },
      {
        heading: 'En el sentido contrario',
        paragraphs: [
          'Para guardar una hoja de Excel como CSV para una base de datos o un formulario de carga, usa el conversor de Excel a CSV. Escribe por defecto una marca UTF-8 para que Excel muestre bien los acentos cuando vuelvas a abrir el CSV.',
        ],
      },
    ],
    faqs: [
      { q: '¿Por qué mi CSV se abre como una sola columna?', a: 'El separador no coincide con la configuración regional. Convertir a XLSX, o importar por la pestaña Datos y elegir el delimitador, lo soluciona.' },
      { q: '¿Puedo recuperar mis ceros iniciales después de que Excel los quitara?', a: 'Solo si todavía tienes el CSV original. Cuando Excel guarda 1234 sobre 01234, el cero desaparece, así que conserva siempre el archivo original.' },
      { q: '¿Se sube mi hoja de cálculo?', a: 'No. Los conversores se ejecutan en tu navegador y el archivo nunca sale de tu dispositivo.' },
    ],
  },
  'how-to-convert-units-without-mistakes': {
    title: 'Cómo convertir unidades sin errores',
    description: 'Las trampas que provocan respuestas erróneas al convertir unidades: galones de EE. UU. y del Reino Unido, 1000 frente a 1024, toneladas, temperatura y unidades de terreno de la India.',
    intro: 'Para convertir unidades sin errores, comprueba a qué sistema pertenece la unidad, usa una herramienta con factores de conversión exactos y escribe la unidad junto a cada número. La mayoría de los errores vienen de unidades que comparten nombre pero significan cantidades distintas.',
    steps: [
      'Escribe el número con su unidad, por ejemplo 5 mi, no solo 5.',
      'Comprueba que la unidad significa lo que crees. Un galón, una tonelada y un bigha cambian según el país o el estado.',
      'Usa un conversor con factores exactos, como el de longitud o el de peso, y lee la respuesta con su unidad.',
      'Haz una comprobación de sentido común: ¿tiene la respuesta el tamaño adecuado? Un maratón de 42 km debería dar cerca de 26 millas.',
      'Conserva el número y la unidad originales y redondea solo al final del todo.',
    ],
    sections: [
      {
        heading: 'Unidades que comparten nombre',
        paragraphs: [
          'Un galón estadounidense son 3,785 litros, pero un galón del Reino Unido son 4,546 litros, un 20 por ciento más. Una tonelada corta de EE. UU. son 2000 libras, una tonelada larga del Reino Unido son 2240 libras y una tonelada métrica son 1000 kilogramos.',
          'En informática, 1 KB son 1000 bytes para los fabricantes de discos y los planes de móvil, pero 1024 bytes en algunos sistemas operativos. Por eso un disco de 1 TB muestra unos 931 GB. Los nombres KiB, MiB y GiB siempre significan 1024.',
        ],
      },
      {
        heading: 'La temperatura es distinta',
        paragraphs: [
          'La mayoría de las conversiones multiplican por un factor. Las escalas de temperatura empiezan en ceros distintos, así que también hay que sumar o restar: los Fahrenheit son los Celsius por 9/5 más 32. Por eso duplicar una temperatura en Celsius no duplica la de Fahrenheit.',
        ],
      },
      {
        heading: 'Unidades de terreno locales',
        paragraphs: [
          'Un bigha no tiene un tamaño fijo en la India. Son unos 27 000 pies cuadrados en Uttar Pradesh, unos 17 424 en Gujarat y 14 400 en Bengala Occidental y Assam, y puede variar según el distrito. Un gaj es una yarda cuadrada (9 pies cuadrados). Para cualquier asunto legal, usa la cifra del registro de ingresos local.',
        ],
      },
      {
        heading: 'Por qué importa',
        paragraphs: [
          'En 1999 la NASA perdió el Mars Climate Orbiter porque el software de un equipo usaba libras-fuerza por segundo y el de otro esperaba newton-segundos. Confundir unidades es un error pequeño con grandes consecuencias, así que mantén siempre la unidad junto al número.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuántos pies hay en un metro?', a: 'Unos 3,28084 pies. Un pie son exactamente 0,3048 metros.' },
      { q: '¿Debo redondear las conversiones?', a: 'Solo al final. Redondear en mitad de un cálculo añade un error que crece con cada paso.' },
      { q: '¿Son exactos los conversores?', a: 'Usan los factores exactos definidos y muestran hasta 10 cifras significativas. Las unidades de terreno de la India son aproximadas por naturaleza, porque las definiciones locales difieren.' },
    ],
  },
  'how-to-make-a-gif-from-a-video': {
    title: 'Cómo crear un GIF a partir de un vídeo',
    description: 'Convierte cualquier clip de vídeo corto en un GIF animado en tu navegador y mantén el archivo lo bastante pequeño para enviarlo.',
    intro: 'Para crear un GIF a partir de un vídeo, suelta el clip en el conversor de Vídeo a GIF, elige dónde empieza y cuánto dura, y pulsa "Crear GIF". Mantenlo por debajo de 10 segundos y de 480 píxeles de ancho, o el GIF se vuelve enorme.',
    steps: [
      'Abre Vídeo a GIF y suelta tu clip (MP4, MOV, WEBM, MKV o AVI).',
      'Fija el tiempo de inicio. Usa segundos (90) o minutos y segundos (1:30).',
      'Fija la duración en segundos. De tres a seis segundos bastan para una reacción o una demostración.',
      'Elige un ancho. De 320 a 480 píxeles va bien para aplicaciones de chat; sube a 640 solo si el detalle importa.',
      'Elige 10 fotogramas por segundo para un archivo pequeño, o 15 a 20 para un movimiento más fluido, y luego pulsa "Crear GIF" y descárgalo.',
    ],
    sections: [
      {
        heading: 'Por qué los GIF pesan tanto',
        paragraphs: [
          'Un GIF guarda cada fotograma como una imagen aparte y solo puede usar 256 colores. No hay ninguna compresión de vídeo ingeniosa, así que la duración, el ancho y la velocidad de fotogramas se multiplican entre sí. Reducir el ancho a la mitad deja el archivo en más o menos una cuarta parte, y reducir a la mitad los fotogramas por segundo lo divide otra vez por dos.',
        ],
      },
      {
        heading: 'Lo que un GIF no puede hacer',
        paragraphs: [
          'Un GIF no tiene sonido en absoluto. Si necesitas audio, conserva el clip como MP4. Las fotografías también pueden verse algo granuladas, porque 256 colores no son muchos. Es un límite del formato, no de la herramienta.',
          'Si el GIF solo va a mostrarse en un sitio web o en una aplicación de chat moderna, un MP4 que se repita en bucle suele ser mucho más pequeño y más nítido. El conversor de GIF a MP4 hace justo eso a la inversa.',
        ],
      },
    ],
    faqs: [
      { q: '¿El GIF se repite en bucle?', a: 'Sí. Los GIF que se crean aquí se repiten sin parar, que es lo que quiere casi todo el mundo.' },
      { q: '¿Puedo añadir texto o pegatinas?', a: 'No en esta herramienta. Solo recorta y convierte. Añade antes el texto al vídeo en un editor si lo necesitas.' },
      { q: '¿Se sube el vídeo?', a: 'No. El GIF se crea en la pestaña de tu navegador y el clip nunca sale de tu dispositivo.' },
    ],
  },
};

export default guides;
