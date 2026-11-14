import type { GuideSet } from '../types';

/** Spanish guides, batch 8. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-miles-to-kilometres': {
    title: 'Cómo convertir millas a kilómetros (y al revés)',
    description: 'Convierte millas a km con el factor exacto, un truco mental rápido y un conversor que también hace pies y yardas.',
    intro: 'Para convertir millas a kilómetros, multiplica por 1,609344. Así, 10 millas son 16,09 km. Para volver, divide los kilómetros entre 1,609344 o multiplica por 0,621371. El conversor de longitud también maneja pies, pulgadas, yardas y millas náuticas.',
    steps: [
      'Anota la distancia con su unidad, por ejemplo 26,2 millas.',
      'Multiplica por 1,609344: 26,2 × 1,609344 = 42,16 km, un maratón.',
      'De kilómetros a millas, multiplica por 0,621371: 5 km × 0,621371 = 3,11 millas.',
      'O usa el conversor de longitud e intercambia las unidades con el botón de la flecha.',
    ],
    sections: [
      {
        heading: 'Un truco mental',
        paragraphs: [
          'Los números consecutivos de la sucesión de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21) se acercan a un par milla-kilómetro: 5 millas son unos 8 km, 8 millas son unos 13 km y 13 millas son unos 21 km. Para otros números, multiplica las millas por 1,6, con un error de una fracción de uno por ciento.',
        ],
      },
      {
        heading: 'Otras millas y velocidades',
        paragraphs: [
          'Una milla náutica, usada en el mar y en el aire, son exactamente 1852 metros, unas 1,15 millas terrestres. Las velocidades se convierten igual: 60 millas por hora son unos 96,6 km/h, y 100 km/h son unas 62,1 mph. El conversor de velocidad maneja esas y los nudos.',
        ],
      },
      {
        heading: 'Correr y montar en bici',
        paragraphs: [
          'Una carrera de 5K son unas 3,1 millas, una de 10K son 6,2 millas, una media maratón son 13,1 millas (21,1 km) y una maratón son 26,2 millas (42,2 km). Los ritmos se convierten dividiendo: un ritmo de 8 minutos por milla son unos 4 minutos y 58 segundos por kilómetro, así que la misma carrera aparece como un número más rápido en kilómetros.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuántos km son 5 millas?', a: 'Unos 8,05 km.' },
      { q: '¿Cuántas millas son 10 km?', a: 'Unas 6,21 millas.' },
      { q: '¿Una milla es siempre igual?', a: 'La milla terrestre que se usa en EE. UU. y el Reino Unido son siempre 1609,344 metros. La milla náutica es distinta, con 1852 metros.' },
    ],
  },
  'how-to-convert-feet-and-inches-to-cm': {
    title: 'Cómo convertir pies y pulgadas a cm (estatura)',
    description: 'Convierte una estatura como 5 ft 7 in a centímetros, y pulgadas a cm con el factor exacto de 2,54.',
    intro: 'Para convertir pies y pulgadas a centímetros, pasa la estatura a pulgadas (pies × 12, más las pulgadas) y multiplica por 2,54. Así, 5 ft 7 in son 67 pulgadas, que son 170,18 cm. El conversor de longitud lo hace en un solo paso para cualquier unidad suelta.',
    steps: [
      'Anota la estatura: 5 ft 7 in.',
      'Pasa los pies a pulgadas: 5 × 12 = 60, y suma 7 para obtener 67 pulgadas.',
      'Multiplica por 2,54: 67 × 2,54 = 170,18 cm.',
      'Para comprobarlo, escribe 67 en el conversor de longitud con pulgadas en From y centímetros en To.',
    ],
    sections: [
      {
        heading: 'El factor exacto',
        paragraphs: [
          'Una pulgada se define como exactamente 2,54 centímetros, así que de pulgadas a cm es exacto, no una aproximación. Un pie son, por tanto, exactamente 30,48 cm. Estas definiciones están fijadas desde 1959, así que la conversión nunca cambia.',
        ],
      },
      {
        heading: 'De cm de vuelta a pies',
        paragraphs: [
          'Divide los centímetros entre 2,54 para obtener pulgadas, luego divide entre 12 para los pies y deja el resto como pulgadas. Para 175 cm: 175 ÷ 2,54 son 68,9 pulgadas, que son 5 ft 8,9 in, normalmente escrito 5 ft 9 in. A menudo las estaturas en los formularios se piden en una sola unidad, así que comprueba cuál quiere el formulario.',
        ],
      },
      {
        heading: 'Una estimación mental',
        paragraphs: [
          'Cada pie son unos 30,5 cm y cada pulgada unos 2,5 cm, así que 5 ft 7 in son más o menos 152 más 18, o unos 170 cm. Es bastante cercano para una comprobación rápida. Para pasaportes, formularios médicos y solicitudes de empleo, usa la cifra exacta y redondea al centímetro entero solo si el formulario lo pide.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuánto son 6 pies en cm?', a: '182,88 cm.' },
      { q: '¿Cuántos cm son 5 ft 4 in?', a: '162,56 cm.' },
      { q: '¿Redondea la respuesta?', a: 'Muestra hasta 10 cifras significativas, así que puedes redondear tú mismo al centímetro entero.' },
    ],
  },
  'how-to-convert-square-feet-to-square-metres': {
    title: 'Cómo convertir pies cuadrados a metros cuadrados',
    description: 'Convierte sq ft a sq m para pisos y parcelas, con el factor exacto y las unidades de superficie de los anuncios inmobiliarios.',
    intro: 'Para convertir pies cuadrados a metros cuadrados, divide entre 10,7639 o multiplica por 0,092903. Así, un piso de 1000 sq ft son unos 92,9 metros cuadrados. El conversor de superficie también maneja acres, hectáreas, yardas cuadradas y kilómetros cuadrados.',
    steps: [
      'Anota la superficie con su unidad, por ejemplo 1200 sq ft.',
      'Multiplica por 0,092903: 1200 × 0,092903 = 111,5 metros cuadrados.',
      'De metros cuadrados a pies cuadrados, multiplica por 10,7639.',
      'O abre el conversor de superficie y elige pie cuadrado y metro cuadrado.',
    ],
    sections: [
      {
        heading: 'Por qué no basta con el factor de longitud',
        paragraphs: [
          'Un pie son 0,3048 metros, así que un pie cuadrado son 0,3048 × 0,3048 = 0,092903 metros cuadrados. El factor de conversión de superficie es el cuadrado del factor de longitud. Un error habitual es multiplicar por 0,3048 y obtener una respuesta más de tres veces demasiado grande.',
        ],
      },
      {
        heading: 'Superficie útil y superficie construida',
        paragraphs: [
          'Los anuncios inmobiliarios de la India indican carpet area, built-up area o super built-up area, y son distintas para el mismo piso. La conversión a metros cuadrados es la misma para todas, pero asegúrate de comparar cosas equivalentes. Los terrenos más grandes suelen ir en acres (43 560 sq ft) o hectáreas (10 000 metros cuadrados, unos 2,47 acres).',
        ],
      },
      {
        heading: 'Ejemplos resueltos',
        paragraphs: [
          'Un piso de 900 sq ft son unos 83,6 metros cuadrados. Una parcela de 30 por 40 pies son 1200 sq ft, unos 111,5 metros cuadrados. Un acre son 43 560 sq ft, unos 4047 metros cuadrados. Resolver dos o tres de estos en el conversor es una buena manera de hacerte una idea de los tamaños antes de comparar anuncios en unidades distintas.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuántos sq ft hay en un metro cuadrado?', a: 'Unos 10,7639.' },
      { q: '¿Cuántos metros cuadrados son 500 sq ft?', a: 'Unos 46,45 metros cuadrados.' },
      { q: '¿Incluye las unidades de terreno indias?', a: 'Sí, el conversor de unidades de terreno de la India añade gaj, bigha, guntha y más, con una nota de que algunas varían según el estado.' },
    ],
  },
  'how-to-convert-litres-to-gallons-us-and-uk': {
    title: 'Cómo convertir litros a galones (EE. UU. frente a Reino Unido)',
    description: 'Convierte litros a galones estadounidenses y británicos, y por qué las millas por galón difieren entre los dos países.',
    intro: 'Para convertir litros a galones estadounidenses, divide entre 3,78541. Para pasar a galones británicos (imperiales), divide entre 4,54609. Así, 10 litros son unos 2,64 galones estadounidenses o 2,20 galones británicos. El conversor de volumen tiene ambos y también cubre tazas, pintas y mililitros.',
    steps: [
      'Decide qué galón necesitas. Las recetas y los precios del combustible de EE. UU. usan el galón estadounidense; los británicos usan el galón imperial.',
      'Divide los litros entre 3,78541 para galones estadounidenses, o entre 4,54609 para galones británicos.',
      'De galones a litros, multiplica por los mismos números.',
      'O abre el conversor de volumen y elige Gallon (US) o Gallon (UK).',
    ],
    sections: [
      {
        heading: 'Por qué existen dos galones',
        paragraphs: [
          'El galón estadounidense desciende del antiguo galón de vino de 231 pulgadas cúbicas. El galón británico se definió en 1824 como el volumen de diez libras de agua y hoy está fijado en exactamente 4,54609 litros, un 20 por ciento mayor. La pinta, el cuarto y la taza siguen la misma división, así que una pinta británica es mayor que una estadounidense.',
        ],
      },
      {
        heading: 'Consumo de combustible',
        paragraphs: [
          'Como los galones difieren, las millas por galón también. Un coche con 30 mpg en el Reino Unido hace unos 25 mpg según la medida estadounidense. Si comparas el consumo de dos países, convierte a litros por 100 km, que es igual en todas partes. Las tazas de cocina que se usan aquí son la taza estadounidense de unos 236,6 ml.',
        ],
      },
      {
        heading: 'Cocina y combustible',
        paragraphs: [
          'Una pinta estadounidense son 473 ml pero una pinta británica son 568 ml, así que una receta de un país puede salir mal en el otro. En combustible, un depósito de 50 litros contiene unos 13,2 galones estadounidenses o unos 11 galones británicos. Cuando una receta o el manual de un coche no dice qué galón o pinta quiere decir, comprueba para qué país fue escrito.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuántos litros hay en un galón estadounidense?', a: '3,78541 litros.' },
      { q: '¿Cuántos litros hay en un galón británico?', a: '4,54609 litros.' },
      { q: '¿Cuántos ml hay en una taza?', a: 'Unos 236,6 ml para la taza estadounidense que se usa aquí.' },
    ],
  },
  'how-to-convert-km-h-to-mph': {
    title: 'Cómo convertir km/h a mph (y nudos)',
    description: 'Convierte kilómetros por hora a millas por hora, metros por segundo y nudos, con una forma rápida de estimar.',
    intro: 'Para convertir km/h a mph, divide entre 1,609344 o multiplica por 0,621371. Así, 100 km/h son unas 62,1 mph. El conversor de velocidad también da metros por segundo, pies por segundo, nudos y Mach.',
    steps: [
      'Anota la velocidad con su unidad, por ejemplo 120 km/h.',
      'Multiplica por 0,621371: 120 × 0,621371 = 74,6 mph.',
      'De mph a km/h, multiplica por 1,609344: 60 mph son 96,6 km/h.',
      'O usa el conversor de velocidad y elige las dos unidades.',
    ],
    sections: [
      {
        heading: 'Estimaciones rápidas',
        paragraphs: [
          'Para convertir km/h en mph de cabeza, multiplica por 0,6: 100 km/h son unas 60 mph, algo por debajo pero bueno para valorar un límite de velocidad. Para el otro sentido, multiplica las mph por 1,6, o divídelas entre dos y suma algo más que la mitad. Las señales de tráfico del Reino Unido y de EE. UU. usan mph, y la mayoría de los demás países usan km/h.',
        ],
      },
      {
        heading: 'Metros por segundo y nudos',
        paragraphs: [
          'Divide los km/h entre 3,6 para obtener metros por segundo: 36 km/h son 10 m/s. Un nudo es una milla náutica por hora, que son exactamente 1,852 km/h, así que 20 nudos son unos 37 km/h. Los barcos y los aviones usan nudos, y los partes meteorológicos a veces dan el viento en ellos.',
        ],
      },
      {
        heading: 'Límites de velocidad habituales',
        paragraphs: [
          'Un límite de 30 mph son unos 48 km/h, y 50 km/h son unas 31 mph. Un límite de 70 mph son unos 113 km/h, mientras que un límite de autopista de 120 km/h son unas 75 mph y 130 km/h son unas 81 mph. Conocer unos cuantos de estos ayuda cuando conduces un coche de alquiler en otro país y el cuentakilómetros muestra una sola unidad.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuánto son 60 mph en km/h?', a: 'Unos 96,6 km/h.' },
      { q: '¿Cuánto son 100 km/h en mph?', a: 'Unas 62,1 mph.' },
      { q: '¿Qué es Mach 1?', a: 'Unos 340 m/s al nivel del mar, que es lo que usa el conversor. Cambia con la temperatura y la altitud.' },
    ],
  },
  'how-to-convert-psi-to-bar-tyre-pressure': {
    title: 'Cómo convertir psi a bar para la presión de los neumáticos',
    description: 'Convierte psi a bar, kPa y atmósferas, con presiones típicas de neumáticos de coche y una nota para comprobar la tuya.',
    intro: 'Para convertir psi a bar, divide entre 14,5038. Así, 32 psi son unos 2,2 bar. Para volver, multiplica los bar por 14,5038. El conversor de presión también maneja pascales, kilopascales, atmósferas y mmHg.',
    steps: [
      'Anota la presión con su unidad, por ejemplo 32 psi.',
      'Divide entre 14,5038: 32 ÷ 14,5038 = 2,21 bar.',
      'Para kPa, multiplica los psi por 6,895: 32 psi son unos 220,6 kPa.',
      'O abre el conversor de presión y elige las dos unidades.',
    ],
    sections: [
      {
        heading: 'Presiones de neumáticos',
        paragraphs: [
          'Los neumáticos de coche suelen inflarse a unos 30 a 35 psi, que son más o menos 2,1 a 2,4 bar o 210 a 240 kPa. Usa siempre la cifra de la pegatina del marco de la puerta del conductor o del manual, porque depende del coche y de la carga. Las presiones deben comprobarse con los neumáticos fríos.',
        ],
      },
      {
        heading: 'Cómo se relacionan las unidades',
        paragraphs: [
          'Un bar son 100 000 pascales, o 100 kPa, y se acerca a la presión atmosférica normal. Una atmósfera estándar son 101 325 pascales, unos 1,013 bar o 14,7 psi. El tiempo atmosférico y la presión arterial usan milímetros de mercurio, donde 760 mmHg son una atmósfera estándar.',
        ],
      },
      {
        heading: 'Otros lugares donde aparece la presión',
        paragraphs: [
          'Los neumáticos de las bicicletas de carretera suelen inflarse a unos 80 a 130 psi, que son más o menos 5,5 a 9 bar, mientras que las bicicletas de montaña usan mucho menos. Comprueba siempre el máximo impreso en el flanco del neumático. Los neumáticos de repuesto y algunas furgonetas y coches cargados necesitan presiones distintas de la cifra habitual de un coche, así que lee la pegatina de tu vehículo.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cuántos psi son 2 bar?', a: 'Unos 29 psi.' },
      { q: '¿Es más habitual bar o kPa en los surtidores de aire?', a: 'Varía según el país. Muchos surtidores de gasolinera muestran psi, bar y kPa uno al lado de otro.' },
      { q: '¿Es distinta la presión manométrica?', a: 'Los manómetros de neumáticos muestran la presión por encima del aire que te rodea. El conversor solo cambia unidades y no suma ni resta presión atmosférica.' },
    ],
  },
};

export default guides;
