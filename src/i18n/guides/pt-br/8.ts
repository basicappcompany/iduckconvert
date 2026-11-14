import type { GuideSet } from '../types';

/** Portuguese (Brazil) guides, batch 8. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-miles-to-kilometres': {
    title: 'Como converter milhas para quilômetros (e vice-versa)',
    description: 'Converta milhas em km com o fator exato, um truque mental rápido e um conversor que também faz pés e jardas.',
    intro: 'Para converter milhas em quilômetros, multiplique por 1,609344. Assim, 10 milhas são 16,09 km. Para voltar, divida os quilômetros por 1,609344 ou multiplique por 0,621371. O conversor de comprimento também lida com pés, polegadas, jardas e milhas náuticas.',
    steps: [
      'Anote a distância com a unidade, por exemplo 26,2 milhas.',
      'Multiplique por 1,609344: 26,2 × 1,609344 = 42,16 km, uma maratona.',
      'De quilômetros para milhas, multiplique por 0,621371: 5 km × 0,621371 = 3,11 milhas.',
      'Ou use o conversor de comprimento e troque as unidades com o botão de seta.',
    ],
    sections: [
      {
        heading: 'Um truque mental',
        paragraphs: [
          'Números consecutivos da sequência de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21) ficam perto de um par milha-quilômetro: 5 milhas são cerca de 8 km, 8 milhas são cerca de 13 km e 13 milhas são cerca de 21 km. Para outros números, multiplique as milhas por 1,6, o que é exato dentro de uma fração de um por cento.',
        ],
      },
      {
        heading: 'Outras milhas e velocidades',
        paragraphs: [
          'Uma milha náutica, usada no mar e no ar, são exatamente 1852 metros, cerca de 1,15 milha terrestre. As velocidades se convertem do mesmo jeito: 60 milhas por hora são cerca de 96,6 km/h, e 100 km/h são cerca de 62,1 mph. O conversor de velocidade lida com essas e com nós.',
        ],
      },
      {
        heading: 'Corrida e ciclismo',
        paragraphs: [
          'Uma corrida de 5K são cerca de 3,1 milhas, uma de 10K são 6,2 milhas, uma meia maratona são 13,1 milhas (21,1 km) e uma maratona são 26,2 milhas (42,2 km). Os ritmos se convertem dividindo: um ritmo de 8 minutos por milha são cerca de 4 minutos e 58 segundos por quilômetro, então a mesma corrida aparece como um número mais rápido em quilômetros.',
        ],
      },
    ],
    faqs: [
      { q: 'Quantos km são 5 milhas?', a: 'Cerca de 8,05 km.' },
      { q: 'Quantas milhas são 10 km?', a: 'Cerca de 6,21 milhas.' },
      { q: 'Uma milha é sempre igual?', a: 'A milha terrestre usada nos EUA e no Reino Unido são sempre 1609,344 metros. A milha náutica é diferente, com 1852 metros.' },
    ],
  },
  'how-to-convert-feet-and-inches-to-cm': {
    title: 'Como converter pés e polegadas para cm (altura)',
    description: 'Converta uma altura como 5 ft 7 in para centímetros, e polegadas para cm com o fator exato de 2,54.',
    intro: 'Para converter pés e polegadas em centímetros, transforme a altura em polegadas (pés × 12, mais as polegadas) e multiplique por 2,54. Assim, 5 ft 7 in são 67 polegadas, que são 170,18 cm. O conversor de comprimento faz isso em um passo para qualquer unidade isolada.',
    steps: [
      'Anote a altura: 5 ft 7 in.',
      'Transforme os pés em polegadas: 5 × 12 = 60, depois some 7 para obter 67 polegadas.',
      'Multiplique por 2,54: 67 × 2,54 = 170,18 cm.',
      'Para conferir, digite 67 no conversor de comprimento com polegadas em From e centímetros em To.',
    ],
    sections: [
      {
        heading: 'O fator exato',
        paragraphs: [
          'Uma polegada é definida como exatamente 2,54 centímetros, então de polegadas para cm é exato, não uma aproximação. Um pé são, portanto, exatamente 30,48 cm. Essas definições estão fixadas desde 1959, então a conversão nunca muda.',
        ],
      },
      {
        heading: 'De cm de volta para pés',
        paragraphs: [
          'Divida os centímetros por 2,54 para obter polegadas, depois divida por 12 para os pés e mantenha o resto como polegadas. Para 175 cm: 175 ÷ 2,54 são 68,9 polegadas, que são 5 ft 8,9 in, geralmente escrito 5 ft 9 in. As alturas em formulários costumam ser pedidas em uma só unidade, então confira qual o formulário quer.',
        ],
      },
      {
        heading: 'Uma estimativa mental',
        paragraphs: [
          'Cada pé são cerca de 30,5 cm e cada polegada cerca de 2,5 cm, então 5 ft 7 in são mais ou menos 152 mais 18, ou cerca de 170 cm. É próximo o bastante para uma conferência rápida. Para passaportes, formulários médicos e candidaturas de emprego, use o valor exato e arredonde para o centímetro inteiro só se o formulário pedir.',
        ],
      },
    ],
    faqs: [
      { q: 'Quanto são 6 pés em cm?', a: '182,88 cm.' },
      { q: 'Quantos cm são 5 ft 4 in?', a: '162,56 cm.' },
      { q: 'Ele arredonda a resposta?', a: 'Mostra até 10 algarismos significativos, então você mesmo pode arredondar para o centímetro inteiro.' },
    ],
  },
  'how-to-convert-square-feet-to-square-metres': {
    title: 'Como converter pés quadrados para metros quadrados',
    description: 'Converta sq ft em sq m para apartamentos e terrenos, com o fator exato e as unidades de área dos anúncios de imóveis.',
    intro: 'Para converter pés quadrados em metros quadrados, divida por 10,7639 ou multiplique por 0,092903. Assim, um apartamento de 1000 sq ft tem cerca de 92,9 metros quadrados. O conversor de área também lida com acres, hectares, jardas quadradas e quilômetros quadrados.',
    steps: [
      'Anote a área com a unidade, por exemplo 1200 sq ft.',
      'Multiplique por 0,092903: 1200 × 0,092903 = 111,5 metros quadrados.',
      'De metros quadrados para pés quadrados, multiplique por 10,7639.',
      'Ou abra o conversor de área e escolha pé quadrado e metro quadrado.',
    ],
    sections: [
      {
        heading: 'Por que não dá para usar só o fator de comprimento',
        paragraphs: [
          'Um pé são 0,3048 metro, então um pé quadrado são 0,3048 × 0,3048 = 0,092903 metro quadrado. O fator de conversão de área é o quadrado do fator de comprimento. Um erro comum é multiplicar por 0,3048 e obter uma resposta mais de três vezes grande demais.',
        ],
      },
      {
        heading: 'Área útil e área construída',
        paragraphs: [
          'Os anúncios de imóveis na Índia informam carpet area, built-up area ou super built-up area, e elas diferem para o mesmo apartamento. A conversão para metros quadrados é a mesma para todas, mas confira se você está comparando coisas equivalentes. Terrenos maiores costumam estar em acres (43.560 sq ft) ou hectares (10.000 metros quadrados, cerca de 2,47 acres).',
        ],
      },
      {
        heading: 'Exemplos resolvidos',
        paragraphs: [
          'Um apartamento de 900 sq ft tem cerca de 83,6 metros quadrados. Um terreno de 30 por 40 pés tem 1200 sq ft, cerca de 111,5 metros quadrados. Um acre são 43.560 sq ft, cerca de 4047 metros quadrados. Resolver dois ou três desses no conversor é uma boa forma de ter noção dos tamanhos antes de comparar anúncios em unidades diferentes.',
        ],
      },
    ],
    faqs: [
      { q: 'Quantos sq ft há em um metro quadrado?', a: 'Cerca de 10,7639.' },
      { q: 'Quantos metros quadrados são 500 sq ft?', a: 'Cerca de 46,45 metros quadrados.' },
      { q: 'Inclui as unidades de terra indianas?', a: 'Sim, o conversor de unidades de terra da Índia acrescenta gaj, bigha, guntha e mais, com uma nota de que algumas variam conforme o estado.' },
    ],
  },
  'how-to-convert-litres-to-gallons-us-and-uk': {
    title: 'Como converter litros para galões (EUA ou Reino Unido)',
    description: 'Converta litros em galões americanos e britânicos, e entenda por que as milhas por galão diferem entre os dois países.',
    intro: 'Para converter litros em galões americanos, divida por 3,78541. Para converter em galões britânicos (imperiais), divida por 4,54609. Assim, 10 litros são cerca de 2,64 galões americanos ou 2,20 galões britânicos. O conversor de volume tem os dois e também cobre xícaras, pintas e mililitros.',
    steps: [
      'Decida qual galão você precisa. Receitas e preços de combustível dos EUA usam o galão americano; os britânicos usam o galão imperial.',
      'Divida os litros por 3,78541 para galões americanos, ou por 4,54609 para galões britânicos.',
      'De galões para litros, multiplique pelos mesmos números.',
      'Ou abra o conversor de volume e escolha Gallon (US) ou Gallon (UK).',
    ],
    sections: [
      {
        heading: 'Por que existem dois galões',
        paragraphs: [
          'O galão americano descende do antigo galão de vinho de 231 polegadas cúbicas. O galão britânico foi definido em 1824 como o volume de dez libras de água e hoje está fixado em exatamente 4,54609 litros, cerca de 20 por cento maior. A pinta, o quarto e a xícara seguem a mesma divisão, então uma pinta britânica é maior que uma americana.',
        ],
      },
      {
        heading: 'Consumo de combustível',
        paragraphs: [
          'Como os galões diferem, as milhas por galão também. Um carro avaliado em 30 mpg no Reino Unido faz cerca de 25 mpg pela medida americana. Se você compara o consumo de dois países, converta para litros por 100 km, que é igual em todo lugar. As xícaras de cozinha usadas aqui são a xícara americana de cerca de 236,6 ml.',
        ],
      },
      {
        heading: 'Cozinha e combustível',
        paragraphs: [
          'Uma pinta americana são 473 ml, mas uma pinta britânica são 568 ml, então uma receita de um país pode dar errado no outro. Para combustível, um tanque de 50 litros comporta cerca de 13,2 galões americanos ou cerca de 11 galões britânicos. Quando uma receita ou o manual de um carro não diz qual galão ou pinta quer dizer, confira para que país foi escrito.',
        ],
      },
    ],
    faqs: [
      { q: 'Quantos litros há em um galão americano?', a: '3,78541 litros.' },
      { q: 'Quantos litros há em um galão britânico?', a: '4,54609 litros.' },
      { q: 'Quantos ml há em uma xícara?', a: 'Cerca de 236,6 ml para a xícara americana usada aqui.' },
    ],
  },
  'how-to-convert-km-h-to-mph': {
    title: 'Como converter km/h para mph (e nós)',
    description: 'Converta quilômetros por hora em milhas por hora, metros por segundo e nós, com um jeito rápido de estimar.',
    intro: 'Para converter km/h em mph, divida por 1,609344 ou multiplique por 0,621371. Assim, 100 km/h são cerca de 62,1 mph. O conversor de velocidade também dá metros por segundo, pés por segundo, nós e Mach.',
    steps: [
      'Anote a velocidade com a unidade, por exemplo 120 km/h.',
      'Multiplique por 0,621371: 120 × 0,621371 = 74,6 mph.',
      'De mph para km/h, multiplique por 1,609344: 60 mph são 96,6 km/h.',
      'Ou use o conversor de velocidade e escolha as duas unidades.',
    ],
    sections: [
      {
        heading: 'Estimativas rápidas',
        paragraphs: [
          'Para transformar km/h em mph de cabeça, multiplique por 0,6: 100 km/h são cerca de 60 mph, um pouco abaixo, mas bom para avaliar um limite de velocidade. Para o outro sentido, multiplique as mph por 1,6, ou divida pela metade e some um pouco mais que a metade. As placas de trânsito do Reino Unido e dos EUA usam mph, e a maioria dos outros países usa km/h.',
        ],
      },
      {
        heading: 'Metros por segundo e nós',
        paragraphs: [
          'Divida km/h por 3,6 para obter metros por segundo: 36 km/h são 10 m/s. Um nó é uma milha náutica por hora, que são exatamente 1,852 km/h, então 20 nós são cerca de 37 km/h. Navios e aeronaves usam nós, e boletins de clima às vezes dão o vento em nós.',
        ],
      },
      {
        heading: 'Limites de velocidade comuns',
        paragraphs: [
          'Um limite de 30 mph são cerca de 48 km/h, e 50 km/h são cerca de 31 mph. Um limite de 70 mph são cerca de 113 km/h, enquanto um limite de rodovia de 120 km/h são cerca de 75 mph e 130 km/h são cerca de 81 mph. Conhecer alguns desses ajuda quando você dirige um carro alugado em outro país e o mostrador exibe só uma unidade.',
        ],
      },
    ],
    faqs: [
      { q: 'Quanto são 60 mph em km/h?', a: 'Cerca de 96,6 km/h.' },
      { q: 'Quanto são 100 km/h em mph?', a: 'Cerca de 62,1 mph.' },
      { q: 'O que é Mach 1?', a: 'Cerca de 340 m/s ao nível do mar, que é o que o conversor usa. Muda com a temperatura e a altitude.' },
    ],
  },
  'how-to-convert-psi-to-bar-tyre-pressure': {
    title: 'Como converter psi para bar na pressão dos pneus',
    description: 'Converta psi em bar, kPa e atmosferas, com pressões típicas de pneus de carro e uma nota para conferir a sua.',
    intro: 'Para converter psi em bar, divida por 14,5038. Assim, 32 psi são cerca de 2,2 bar. Para voltar, multiplique os bar por 14,5038. O conversor de pressão também lida com pascals, quilopascals, atmosferas e mmHg.',
    steps: [
      'Anote a pressão com a unidade, por exemplo 32 psi.',
      'Divida por 14,5038: 32 ÷ 14,5038 = 2,21 bar.',
      'Para kPa, multiplique os psi por 6,895: 32 psi são cerca de 220,6 kPa.',
      'Ou abra o conversor de pressão e escolha as duas unidades.',
    ],
    sections: [
      {
        heading: 'Pressões dos pneus',
        paragraphs: [
          'Os pneus de carro costumam ser calibrados com cerca de 30 a 35 psi, que são mais ou menos 2,1 a 2,4 bar ou 210 a 240 kPa. Use sempre o valor do adesivo na coluna da porta do motorista ou do manual, porque depende do carro e da carga. As pressões devem ser conferidas com os pneus frios.',
        ],
      },
      {
        heading: 'Como as unidades se relacionam',
        paragraphs: [
          'Um bar são 100.000 pascals, ou 100 kPa, e é próximo da pressão atmosférica normal. Uma atmosfera padrão são 101.325 pascals, cerca de 1,013 bar ou 14,7 psi. O clima e a pressão arterial usam milímetros de mercúrio, onde 760 mmHg são uma atmosfera padrão.',
        ],
      },
      {
        heading: 'Outros lugares em que a pressão aparece',
        paragraphs: [
          'Os pneus de bicicletas de estrada costumam ser calibrados com cerca de 80 a 130 psi, que são mais ou menos 5,5 a 9 bar, enquanto as mountain bikes usam bem menos. Confira sempre o máximo impresso na lateral do pneu. Estepes e algumas vans e carros carregados precisam de pressões diferentes do valor habitual de um carro, então leia o adesivo do seu veículo.',
        ],
      },
    ],
    faqs: [
      { q: 'Quantos psi são 2 bar?', a: 'Cerca de 29 psi.' },
      { q: 'Bar ou kPa é mais comum nos calibradores?', a: 'Varia conforme o país. Muitos calibradores de posto mostram psi, bar e kPa lado a lado.' },
      { q: 'A pressão manométrica é diferente?', a: 'Os calibradores de pneu mostram a pressão acima do ar ao redor. O conversor só troca unidades e não soma nem tira pressão atmosférica.' },
    ],
  },
};

export default guides;
