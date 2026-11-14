import type { GuideSet } from '../types';

/** Spanish guides, batch 4. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-gif-to-mp4': {
    title: 'Cómo convertir un GIF a MP4 para hacerlo más pequeño',
    description: 'Reduce un GIF animado pesado a un MP4 pequeño que carga rápido y se reproduce en todos los móviles.',
    intro: 'Para convertir un GIF a MP4, suelta el GIF en el conversor de GIF a MP4 y pulsa "Convertir". El MP4 suele ser muchas veces más pequeño y a menudo más nítido, porque GIF se limita a 256 colores y no tiene una compresión de vídeo real.',
    steps: [
      'Abre GIF a MP4 y suelta tu GIF en el recuadro.',
      'Pulsa "Convertir".',
      'Descarga el MP4 y compara su tamaño con el del GIF.',
      'En un sitio web, usa el MP4 en una etiqueta de vídeo con autoplay, loop y muted para que se comporte como un GIF.',
    ],
    sections: [
      {
        heading: 'Por qué gana MP4',
        paragraphs: [
          'Un GIF guarda cada fotograma como una imagen completa. El vídeo MP4 guarda solo lo que cambia de un fotograma al siguiente, así que un GIF de 8 MB puede quedar muy por debajo de 1 MB como MP4. El color también mejora, porque el vídeo no se limita a 256 colores.',
        ],
      },
      {
        heading: 'A qué renuncias',
        paragraphs: [
          'Un GIF se repite solo y aparece en cualquier sitio donde cabe una imagen. Un MP4 se reproduce una vez, salvo que se indique al reproductor o a la página que lo repita. La mayoría de las aplicaciones sociales repiten solas los clips cortos, y en tu propio sitio puedes añadir el atributo loop.',
        ],
      },
      {
        heading: 'Usar el MP4 en un sitio web',
        paragraphs: [
          'Para que un MP4 se comporte como un GIF en tu propia página, ponlo en una etiqueta de vídeo con los atributos autoplay, loop, muted y playsinline. Los navegadores solo permiten el autoplay cuando el vídeo está silenciado, y playsinline evita que los iPhone lo abran a pantalla completa. El resultado carga más rápido, usa menos datos y se ve mejor que el GIF original.',
        ],
      },
    ],
    faqs: [
      { q: '¿El MP4 tiene sonido?', a: 'No. Un GIF no tiene sonido, así que no hay nada que trasladar.' },
      { q: '¿Puedo volver a convertir el MP4 en GIF?', a: 'Sí, con Vídeo a GIF, aunque volverá a ser grande.' },
      { q: '¿Se sube el GIF?', a: 'No. Se convierte en la pestaña de tu navegador.' },
    ],
  },
  'how-to-convert-csv-to-json': {
    title: 'Cómo convertir CSV a JSON',
    description: 'Convierte una tabla CSV en una matriz JSON en tu navegador, con la primera fila como claves y los números conservados como números.',
    intro: 'Para convertir CSV a JSON, pega tu CSV o suelta el archivo en el conversor de CSV a JSON. La primera fila se convierte en las claves y cada una de las demás en un objeto, así que una tabla de nombres y edades pasa a ser una lista de registros.',
    steps: [
      'Asegúrate de que la primera fila de tu CSV contiene los nombres de las columnas.',
      'Abre CSV a JSON y pega el texto, o suelta el archivo en el recuadro. Prueba antes el ejemplo si quieres ver la forma.',
      'Lee el JSON que aparece a la derecha mientras escribes.',
      'Pulsa "Download .json", o "Copy" para pegarlo en tu código o en una herramienta de API.',
    ],
    sections: [
      {
        heading: 'Cómo queda el resultado',
        paragraphs: [
          'Un CSV con las columnas name, age y city se convierte en una matriz de objetos como {"name": "Asha", "age": 29, "city": "Pune"}. Los números simples y las palabras true y false pasan a ser números y booleanos reales de JSON. Valores como 01234 se quedan como texto para que no se pierdan los ceros iniciales de códigos y códigos postales.',
        ],
      },
      {
        heading: 'Comas, comillas y otros separadores',
        paragraphs: [
          'Los campos pueden ir entre comillas dobles cuando contienen una coma o un salto de línea, y una comilla dentro de un campo se escribe como dos comillas. El conversor entiende todo eso. También lee archivos separados por punto y coma, tabulador o barra vertical mirando la primera línea, lo que importa para los archivos exportados desde hojas de cálculo en países que usan coma decimal.',
        ],
      },
    ],
    faqs: [
      { q: '¿Qué pasa si una columna no tiene encabezado?', a: 'Se llama column1, column2 y así sucesivamente, para que no se pierda ningún dato.' },
      { q: '¿Puedo volver a CSV?', a: 'Sí, con JSON a CSV, que convierte una matriz de objetos en filas.' },
      { q: '¿Se suben mis datos?', a: 'No. La conversión ocurre en tu navegador mientras escribes.' },
    ],
  },
  'how-to-convert-json-to-csv': {
    title: 'Cómo convertir JSON a CSV para Excel',
    description: 'Aplana una matriz JSON en una tabla CSV que puedes abrir en Excel o en Google Sheets, incluidos los objetos anidados.',
    intro: 'Para convertir JSON a CSV, pega una matriz de objetos en el conversor de JSON a CSV. Cada objeto se convierte en una fila y cada clave en una columna, y los objetos anidados se aplanan en nombres de columna con puntos como address.city.',
    steps: [
      'Comprueba que tu JSON es una matriz de objetos, como [{"a":1},{"a":2}]. Un solo objeto también vale y da una fila.',
      'Abre JSON a CSV y pega el JSON o suelta el archivo .json.',
      'Mira el CSV de la derecha. Las columnas se recogen de todos los objetos.',
      'Descarga el .csv y ábrelo en Excel, o usa CSV a Excel para obtener una hoja de cálculo de verdad.',
    ],
    sections: [
      {
        heading: 'Datos anidados y claves que faltan',
        paragraphs: [
          'JSON puede anidar objetos dentro de objetos, pero una tabla solo tiene filas y columnas. El conversor aplana cada clave anidada en una columna con nombre con punto, así que {"address": {"city": "Pune"}} pasa a ser una columna llamada address.city. Las listas dentro de un valor se conservan como texto JSON en una sola celda.',
          'Si los objetos tienen claves distintas, cada clave que aparezca en cualquier sitio se convierte en una columna, y las celdas sin valor se dejan vacías.',
        ],
      },
      {
        heading: 'Abrir el resultado en Excel',
        paragraphs: [
          'Excel puede leer mal un CSV simple, quitando ceros iniciales o cambiando números largos. Para una hoja de cálculo con la que vayas a seguir trabajando, convierte el CSV a XLSX con el conversor de CSV a Excel, que conserva los códigos como texto.',
        ],
      },
    ],
    faqs: [
      { q: '¿Qué pasa si mi JSON no es válido?', a: 'La página muestra un mensaje de error en lugar de un resultado. Busca comillas o comas que falten.' },
      { q: '¿Puedo convertir un archivo enorme?', a: 'Los archivos grandes funcionan pero tardan más, porque el trabajo lo hace tu navegador. Los archivos de unos pocos megabytes no dan problema.' },
      { q: '¿Se sube?', a: 'No. Todo se ejecuta en tu dispositivo.' },
    ],
  },
  'how-to-save-an-excel-sheet-as-csv-with-accents': {
    title: 'Cómo guardar Excel como CSV y conservar bien los acentos',
    description: 'Convierte una hoja de Excel a CSV y conserva bien los acentos, las letras turcas y los símbolos con una marca UTF-8.',
    intro: 'Para convertir Excel a CSV, suelta tu archivo .xlsx en el conversor de Excel a CSV y deja marcada la marca UTF-8. Cada hoja se convierte en su propio CSV, y la marca le dice a Excel que el archivo es UTF-8, así que los acentos y las letras no inglesas se conservan bien.',
    steps: [
      'Abre Excel a CSV y suelta tu archivo .xlsx, .xls u .ods.',
      'Deja marcada la casilla para añadir una marca UTF-8 si vas a volver a abrir el CSV en Excel. Desmárcala para bases de datos y scripts a los que no les guste la marca.',
      'Pulsa "Convertir".',
      'Descarga el CSV. Un libro con varias hojas da un CSV por hoja, con el nombre de la hoja.',
    ],
    sections: [
      {
        heading: 'Por qué se rompen los acentos',
        paragraphs: [
          'CSV es texto sin formato, y el texto puede guardarse en distintas codificaciones. Excel adivina al abrir un CSV. Si el archivo es UTF-8 pero Excel supone una codificación antigua de Windows, letras como é, ü, ş o ı aparecen como caracteres extraños. Una pequeña marca al principio del archivo elimina la suposición.',
        ],
      },
      {
        heading: 'Lo que CSV deja fuera',
        paragraphs: [
          'CSV guarda solo valores: sin fórmulas, colores, gráficos ni formato. Obtienes los valores que muestra la hoja, con las fechas y los números escritos como los muestra Excel. Los libros protegidos con contraseña no se pueden abrir. Si necesitas el formato, conserva el XLSX.',
        ],
      },
    ],
    faqs: [
      { q: '¿Qué separador se usa?', a: 'Una coma, con comillas alrededor de cualquier valor que contenga una coma, una comilla o un salto de línea.' },
      { q: 'Mi CSV sigue mostrando letras erróneas. ¿Y ahora?', a: 'El archivo puede estar en otra codificación. Usa el corrector de codificación TXT para leerlo con la correcta y guardar una copia limpia en UTF-8.' },
      { q: '¿Se sube el libro?', a: 'No. Se lee y se convierte dentro de la pestaña de tu navegador.' },
    ],
  },
  'how-to-convert-yaml-to-json-and-back': {
    title: 'Cómo convertir YAML a JSON y viceversa',
    description: 'Pasa la configuración entre YAML y JSON en tu navegador y evita las trampas habituales de la sangría y los comentarios.',
    intro: 'Para convertir YAML a JSON, pega el YAML en el conversor de YAML a JSON y copia el JSON con formato legible. Para el otro sentido, pega JSON en JSON a YAML. Los datos son los mismos; solo cambia el estilo de escritura.',
    steps: [
      'Pega tu YAML en el conversor de YAML a JSON, o suelta un archivo .yaml o .yml.',
      'Si ves un error, comprueba la sangría. YAML usa espacios, nunca tabuladores, para mostrar el anidamiento.',
      'Copia o descarga el JSON.',
      'Para lo contrario, pega JSON en JSON a YAML y obtén un YAML legible con sangría de dos espacios.',
    ],
    sections: [
      {
        heading: 'Qué se pierde',
        paragraphs: [
          'Los comentarios existen en YAML pero no en JSON, así que se descartan al convertir a JSON y no se pueden recuperar. Las anclas y los alias (los atajos &nombre y *nombre) se expanden en valores repetidos normales.',
          'El conversor lee un documento YAML. Si un archivo tiene varios documentos separados por tres guiones, convierte cada uno por separado.',
        ],
      },
      {
        heading: 'Por qué la gente cambia de formato',
        paragraphs: [
          'YAML es más fácil de leer y de editar a mano, por eso lo usan los archivos de configuración. JSON es más estricto y es lo que las API y la mayoría de los lenguajes de programación procesan de forma nativa. Convertir te permite revisar una configuración en una herramienta JSON o convertir la respuesta de una API en un archivo legible.',
        ],
      },
      {
        heading: 'Comprobar el resultado',
        paragraphs: [
          'Después de convertir, mira los valores que YAML puede leer como números. Una versión sin comillas como 1.10 se lee como el número 1,1, y un código como 08 puede perder su cero, así que pon entre comillas en el YAML las cadenas de versión y los códigos. El conversor muestra exactamente lo que ve un analizador de YAML, lo que lo convierte en una forma rápida de descubrir ese tipo de sorpresas antes de que lleguen a un sistema real.',
        ],
      },
    ],
    faqs: [
      { q: '¿Por qué mi YAML da un error?', a: 'La causa más común es un tabulador usado como sangría, o una sangría inconsistente. Usa espacios y mantén alineados los elementos anidados.' },
      { q: '¿Se tipificarán bien los números y los booleanos?', a: 'Sí. Valores como 42, 3.5, true y null pasan a ser tipos JSON reales.' },
      { q: '¿Se sube algo?', a: 'No. La conversión se ejecuta en la pestaña de tu navegador.' },
    ],
  },
};

export default guides;
