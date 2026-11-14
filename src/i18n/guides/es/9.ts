import type { GuideSet } from '../types';

/** Spanish guides, batch 9. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-calories-to-kilojoules': {
    title: 'Cómo convertir calorías a kilojulios y kWh',
    description: 'Convierte las calorías de los alimentos (kcal) a kilojulios y a unidades de electricidad, y descubre por qué una Caloría no es una caloría.',
    intro: 'Para convertir kilocalorías a kilojulios, multiplica por 4,184. Así, 2000 kcal son 8368 kJ. La cifra de kcal de la etiqueta de un alimento es lo que la gente llama Caloría. El conversor de energía también da julios, vatios-hora, kilovatios-hora y BTU.',
    steps: [
      'Busca la energía en la etiqueta. Muchas etiquetas dan kcal y kJ.',
      'Multiplica las kcal por 4,184 para obtener kJ: 250 kcal × 4,184 = 1046 kJ.',
      'Divide los kJ entre 4,184 para obtener kcal.',
      'O abre el conversor de energía y elige las dos unidades.',
    ],
    sections: [
      {
        heading: 'Caloría frente a kilocaloría',
        paragraphs: [
          'Una caloría pequeña es la energía necesaria para calentar un gramo de agua un grado Celsius, unos 4,184 julios. La energía de los alimentos se cuenta en kilocalorías, 1000 calorías pequeñas, y se escribe Caloría con C mayúscula o simplemente kcal. Cuando una etiqueta dice 250 calorías, significa 250 kcal. El conversor de energía incluye ambas, así que elige kcal para alimentos.',
        ],
      },
      {
        heading: 'Electricidad',
        paragraphs: [
          'Un kilovatio-hora, la unidad de la factura de la luz, son exactamente 3,6 millones de julios, o 3600 kJ. Eso son unas 860 kcal. Un calefactor de 1000 vatios que funciona una hora consume un kWh. El BTU, habitual en aires acondicionados y calefactores, son unos 1055 julios.',
        ],
      },
      {
        heading: 'Leer las etiquetas de los alimentos',
        paragraphs: [
          'Las etiquetas pueden mostrar la energía por 100 gramos y por ración, así que compara con la misma base. Muchos países imprimen kJ y kcal, y la ingesta de referencia diaria habitual es de unas 2000 kcal, que son más o menos 8400 kJ. Si llevas un control de la comida, usa una sola unidad para que las cifras de distintos paquetes sumen bien.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuántos kJ son 100 kcal?', a: '418,4 kJ.' },
      { q: '¿Cuántas kcal es 1 kWh?', a: 'Unas 860 kcal.' },
      { q: '¿Es lo mismo un kilojulio que una kilocaloría?', a: 'No. Una kilocaloría es unas 4,18 veces mayor que un kilojulio.' },
    ],
  },
  'how-to-convert-avi-to-mp4': {
    title: 'Cómo convertir AVI a MP4',
    description: 'Haz que los vídeos AVI antiguos de cámaras y descargas se reproduzcan en móviles y televisores convirtiéndolos a MP4 en tu navegador.',
    intro: 'Para convertir AVI a MP4, suelta el vídeo en el conversor de AVI a MP4 y pulsa Convertir. AVI es un formato de los años 90 que muchos móviles, televisores y aplicaciones ya no abren, mientras que MP4 se reproduce casi en todas partes.',
    steps: [
      'Abre AVI a MP4 y suelta tu archivo en el cuadro.',
      'Pulsa Convertir. La primera vez, tu navegador descarga el motor del conversor (unos 30 MB) y lo guarda en caché.',
      'Espera a que termine la barra de progreso.',
      'Descarga el MP4 y comprueba que se reproduce en el dispositivo que rechazaba el AVI.',
    ],
    sections: [
      {
        heading: 'Por qué da problemas el AVI',
        paragraphs: [
          'AVI lo introdujo Microsoft a principios de los años 90. Es solo un contenedor, y el vídeo de dentro puede ser de uno de muchos códecs antiguos. Algunos archivos AVI se reproducen perfectamente y otros muestran pantalla negra o no tienen sonido en dispositivos modernos, porque el códec interno ya no es compatible. Convertir reescribe el vídeo en la combinación estándar H.264 y AAC que usa MP4.',
        ],
      },
      {
        heading: 'Clips de cámaras antiguas',
        paragraphs: [
          'Las cámaras digitales, videocámaras y grabadores de pantalla antiguos guardaban en AVI. Esos archivos suelen ser grandes y de baja resolución. Tras convertir, prueba Comprimir vídeo si quieres un archivo más pequeño para enviar, y conserva el AVI original como copia maestra.',
        ],
      },
      {
        heading: 'Subtítulos y archivos separados',
        paragraphs: [
          'Algunas descargas AVI vienen con un archivo de subtítulos aparte. Convertir el vídeo no los fusiona, y el MP4 no recogerá los subtítulos por sí solo. Guarda el archivo de subtítulos en la misma carpeta y con el mismo nombre que el nuevo MP4, que es lo que buscan la mayoría de los reproductores de escritorio.',
        ],
      },
    ],
    faqs: [
      { q: '¿Funcionará con cualquier AVI?', a: 'Con la mayoría. Un archivo dañado o un códec poco común puede fallar, y la página muestra un mensaje claro cuando no puede leer un archivo.' },
      { q: '¿Mejorará la calidad de imagen?', a: 'No. Convertir no puede añadir detalle que el original no tenía.' },
      { q: '¿Se sube?', a: 'No. Se convierte en la pestaña de tu navegador.' },
    ],
  },
  'how-to-convert-mp3-to-wav': {
    title: 'Cómo convertir MP3 a WAV (y lo que no arreglará)',
    description: 'Convierte archivos MP3 a WAV para editores, grabación de CD y equipos que quieren audio sin comprimir.',
    intro: 'Para convertir MP3 a WAV, suelta tus archivos MP3 en el conversor de MP3 a WAV y pulsa Convertir. El WAV es unas diez veces mayor y no suena mejor, pero algunos editores, samplers y herramientas de grabación de CD quieren WAV.',
    steps: [
      'Abre MP3 a WAV y suelta tus archivos.',
      'Pulsa Convertir. No hay ajustes de calidad, porque WAV no está comprimido.',
      'Descarga el WAV, o un ZIP si son varios archivos.',
      'Úsalo en tu editor o software de grabación.',
    ],
    sections: [
      {
        heading: 'Lo que puede y no puede hacer',
        paragraphs: [
          'Un MP3 ya ha perdido detalle para hacerlo pequeño, y ese detalle no se puede recuperar. Un WAV hecho a partir de un MP3 suena exactamente como el MP3, solo que almacenado sin compresión. El objetivo de convertir es la compatibilidad y la edición, no la calidad.',
        ],
      },
      {
        heading: 'Por qué los editores prefieren WAV',
        paragraphs: [
          'Editar audio comprimido repetidamente y guardarlo como MP3 cada vez añade más pérdida con cada guardado. Trabajar en WAV lo evita, y se codifica a MP3 una sola vez al final. WAV es también el formato que esperan muchas herramientas de audio para vídeo, motores de juegos y samplers de hardware.',
          'Un minuto de WAV estéreo son unos 10 MB, así que una grabación larga genera un archivo muy grande. Sugerimos mantener los archivos por debajo de unos 500 MB en un ordenador.',
        ],
      },
      {
        heading: 'Frecuencia de muestreo y profundidad de bits',
        paragraphs: [
          'El WAV mantiene la frecuencia de muestreo del MP3, normalmente 44,1 o 48 kHz, y se escribe como sonido de 16 bits, que es lo que usan los CD. Ajustes mayores como 24 bits no añadirían nada, porque el MP3 nunca contuvo esa información extra. Si tu herramienta pide una frecuencia concreta, vuelve a muestrear en el editor en lugar de adivinar aquí.',
        ],
      },
    ],
    faqs: [
      { q: '¿Sonará mejor mi CD desde un WAV?', a: 'No. Sonará igual que el MP3, porque el detalle original ya no existe.' },
      { q: '¿Qué ajustes de WAV se usan?', a: 'PCM de 16 bits a la misma frecuencia de muestreo que el MP3, el tipo más ampliamente aceptado.' },
      { q: '¿Se sube?', a: 'No. Se convierte dentro de la pestaña de tu navegador.' },
    ],
  },
  'how-to-convert-mp4-to-webm-for-websites': {
    title: 'Cómo convertir MP4 a WEBM para un sitio web',
    description: 'Crea copias WEBM pequeñas de vídeos MP4 para tu propio sitio, y cuándo conservar también el MP4.',
    intro: 'Para convertir MP4 a WEBM, suelta el vídeo en el conversor de MP4 a WEBM y pulsa Convertir. WEBM es un formato abierto creado para la web que se reproduce en todos los navegadores principales y suele ser pequeño, lo que lo hace útil para vídeos de tu propio sitio.',
    steps: [
      'Abre MP4 a WEBM y suelta tu vídeo.',
      'Pulsa Convertir y espera a la barra de progreso. El trabajo con vídeo es pesado, así que mantén los clips cortos.',
      'Descarga el WEBM.',
      'En tu página, enumera el WEBM y el MP4 original como dos fuentes dentro de una misma etiqueta video para que todos los navegadores encuentren una que puedan reproducir.',
    ],
    sections: [
      {
        heading: 'Por qué ofrecer dos formatos',
        paragraphs: [
          'Chrome, Firefox y Edge reproducen WEBM. Algunos programas de Apple y muchos dispositivos reproducen MP4 con más fiabilidad. Una etiqueta video puede enumerar ambos archivos y el navegador elige el primero que admite, así que ofrecer ambos es la opción más segura para un sitio público.',
        ],
      },
      {
        heading: 'Qué crea este conversor',
        paragraphs: [
          'Escribe WEBM con vídeo VP8 y audio Vorbis, que pueden reproducir todos los navegadores compatibles con WEBM. El codificador se elige por velocidad, así que los archivos se hacen rápido en lugar de ser lo más pequeños posible. Para archivos diminutos, acorta el clip o reduce antes su tamaño con Comprimir vídeo.',
        ],
      },
      {
        heading: 'Una inserción sencilla',
        paragraphs: [
          'En tu página, escribe una etiqueta video con controls y dos etiquetas source, el WEBM primero con type video/webm y el MP4 después con type video/mp4. Los navegadores usan la primera fuente que pueden reproducir. Añade los atributos muted y playsinline si el vídeo debe empezar solo, ya que los navegadores solo permiten la reproducción automática de vídeo silenciado.',
        ],
      },
    ],
    faqs: [
      { q: '¿Es WEBM mejor que MP4?', a: 'Ninguno es mejor en todas partes. WEBM es abierto y pequeño; MP4 lo aceptan muchas más aplicaciones y dispositivos.' },
      { q: '¿Conserva el sonido?', a: 'Sí, como audio Vorbis.' },
      { q: '¿Se sube el vídeo?', a: 'No. Se convierte en la pestaña de tu navegador.' },
    ],
  },
  'how-to-convert-json-to-xml-and-xml-to-json': {
    title: 'Cómo convertir JSON a XML y XML a JSON',
    description: 'Mueve datos entre JSON y XML para sistemas y feeds antiguos, y qué pasa con los atributos y las listas.',
    intro: 'Para convertir JSON a XML, pega el JSON en el conversor de JSON a XML. Para ir al revés, pega XML en XML a JSON. Las claves se convierten en etiquetas, las matrices en etiquetas repetidas, y los atributos XML aparecen como claves que empiezan por @.',
    steps: [
      'Pega tu JSON o XML, o suelta el archivo.',
      'Lee el resultado a la derecha. Corrige la entrada si aparece un mensaje de error.',
      'Pulsa Descargar o Copiar.',
      'Comprueba la estructura en el sistema que lo leerá, sobre todo las listas y los atributos.',
    ],
    sections: [
      {
        heading: 'Dónde difieren los formatos',
        paragraphs: [
          'XML tiene atributos y texto de etiqueta; JSON solo tiene claves y valores. Una etiqueta XML como <book id="1">Quack</book> se convierte en un objeto con "@id" y "#text". Una matriz JSON no tiene nombre de etiqueta propio, así que cada elemento se escribe como una etiqueta repetida. XML también necesita exactamente una etiqueta raíz, así que una matriz JSON sola se envuelve en una raíz con etiquetas item.',
        ],
      },
      {
        heading: 'El texto sigue siendo texto',
        paragraphs: [
          'Al leer XML, el conversor mantiene cada valor como texto, así que los códigos y códigos postales con ceros a la izquierda no se dañan. Si necesitas números reales o valores true y false, conviértelos en tu propio código después de leer.',
        ],
      },
      {
        heading: 'Nombres que dan problemas',
        paragraphs: [
          'Los nombres de etiquetas XML no pueden contener espacios ni empezar por un dígito, pero las claves JSON sí. Si una clave JSON es algo como "first name" o "2026", renómbrala a first_name o year2026 antes de convertir, o el XML no será válido. En el otro sentido, los espacios de nombres y las instrucciones de procesamiento se conservan como claves normales, así que revisa a ojo los archivos inusuales.',
        ],
      },
    ],
    faqs: [
      { q: '¿Y los comentarios XML?', a: 'JSON no tiene comentarios, así que se descartan.' },
      { q: '¿Se escapan los caracteres especiales?', a: 'Sí. Caracteres como & y < se escapan para que el XML sea válido.' },
      { q: '¿Se suben los datos?', a: 'No. Se convierten en la pestaña de tu navegador.' },
    ],
  },
  'how-to-convert-html-to-markdown': {
    title: 'Cómo convertir HTML a Markdown',
    description: 'Convierte una página web o un fragmento HTML en Markdown limpio para notas, READMEs y documentación.',
    intro: 'Para convertir HTML a Markdown, pega el HTML en el conversor de HTML a Markdown. Los encabezados, párrafos, listas, enlaces, imágenes, negritas y código se conservan, mientras que el estilo y el diseño se descartan.',
    steps: [
      'Copia el código fuente HTML de la parte que quieras. Mejor el artículo que toda la página.',
      'Abre HTML a Markdown y pégalo en el cuadro de la izquierda.',
      'Lee el Markdown a la derecha y ordena cualquier espaciado raro.',
      'Pulsa Copiar o Descargar .md y pégalo en tus notas o repositorio.',
    ],
    sections: [
      {
        heading: 'Qué se conserva y qué se pierde',
        paragraphs: [
          'Markdown describe la estructura, no el aspecto. Los encabezados se convierten en almohadillas, las listas en guiones, los enlaces en [texto](dirección) y el énfasis en asteriscos. Los colores, fuentes, columnas, scripts y tablas de maquetación no tienen equivalente en Markdown, así que se descartan. Las tablas complejas pueden salir como texto plano.',
        ],
      },
      {
        heading: 'Limpiar una página entera',
        paragraphs: [
          'Una página web completa contiene menús, anuncios y pies de página, y eso se convierte en ruido. Copia solo el elemento del artículo, o elimina antes las partes sobrantes. Después revisa las direcciones relativas de imágenes y enlaces: apuntan al sitio original, así que quizá necesiten la dirección completa para funcionar en otro lugar.',
        ],
      },
      {
        heading: 'Código, enlaces e imágenes',
        paragraphs: [
          'Los bloques de código se convierten en bloques delimitados con tres acentos graves y el código en línea se envuelve en acentos graves simples. Los enlaces mantienen su dirección y las imágenes su origen. Las listas anidadas se sangran con espacios. Revisa el resultado una vez, porque un HTML inusual, como estilos en línea en cada elemento, puede dejar texto suelto que querrás borrar.',
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo volver a convertir el Markdown a HTML?', a: 'Sí, con Markdown a HTML.' },
      { q: '¿Conserva las tablas?', a: 'La estructura simple se conserva como texto. Las tablas complejas no se reconstruyen como tablas Markdown.' },
      { q: '¿Se sube mi HTML?', a: 'No. Se convierte en tu navegador.' },
    ],
  },
};

export default guides;
