import type { GuideSet } from '../types';

/** Portuguese (Brazil) guides, batch 5. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-markdown-to-html': {
    title: 'Como converter Markdown para HTML',
    description: 'Transforme notas em Markdown e textos de README em HTML limpo que você pode colar em uma página web ou em um gerenciador de conteúdo.',
    intro: 'Para converter Markdown para HTML, cole seu Markdown no conversor de Markdown para HTML. Você recebe o HTML de títulos, parágrafos, listas, links, tabelas e código, pronto para colar em uma página ou em um sistema de conteúdo.',
    steps: [
      'Escreva ou cole seu Markdown, ou clique em "Try an example" para ver as peças.',
      'Abra Markdown para HTML e cole na caixa da esquerda.',
      'Leia o HTML à direita. É só o conteúdo, sem as tags html e body.',
      'Copie ou baixe e coloque dentro do seu próprio modelo de página.',
    ],
    sections: [
      {
        heading: 'O que é suportado',
        paragraphs: [
          'Markdown padrão (títulos com #, negrito com **, listas, links, imagens, citações e blocos de código) mais os extras comuns do GitHub: tabelas, listas de tarefas e texto riscado. O HTML puro dentro do Markdown passa sem alteração.',
        ],
      },
      {
        heading: 'Uma nota de segurança',
        paragraphs: [
          'A saída é uma conversão simples. Se o Markdown veio de outra pessoa, ele pode conter scripts escondidos como HTML puro. Passe o resultado pelo seu próprio sanitizador de HTML antes de publicá-lo em um site onde apareça conteúdo de outras pessoas.',
        ],
      },
      {
        heading: 'Erros comuns de Markdown',
        paragraphs: [
          'Uma lista precisa de uma linha em branco antes, e os parágrafos são separados por linhas em branco. Um título precisa de um espaço depois das hashtags, então escreva # Título e não #Título. Para forçar uma quebra de linha dentro de um parágrafo, termine a linha com dois espaços. Uma tabela precisa de uma linha de cabeçalho seguida de uma linha separadora de traços. Se o HTML parecer errado, a causa quase sempre é uma destas.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso voltar de HTML para Markdown?', a: 'Sim, com o HTML para Markdown. Estilo e layout se perdem, mas títulos, listas, links e texto em negrito são mantidos.' },
      { q: 'Ele adiciona estilos?', a: 'Não. Você recebe HTML sem estilo que assume os estilos da página onde você o colocar.' },
      { q: 'Meu texto é enviado?', a: 'Não. Ele é convertido na aba do seu navegador.' },
    ],
  },
  'how-to-fix-garbled-text-and-wrong-encoding': {
    title: 'Como consertar texto ilegível e codificação errada',
    description: 'Conserte arquivos de texto que mostram caracteres estranhos como Ã© escolhendo a codificação certa e salvando UTF-8 limpo.',
    intro: 'Para consertar um arquivo de texto ilegível, solte-o no corretor de codificação TXT, escolha a codificação em que ele foi escrito (tente primeiro Windows-1252), confira a prévia e baixe a cópia em UTF-8. Texto ilegível significa que o arquivo foi lido com a codificação errada.',
    steps: [
      'Abra o corretor de codificação TXT e solte seu arquivo.',
      'Olhe a prévia. Se os acentos parecem Ã© ou é, o arquivo provavelmente é Windows-1252.',
      'Escolha outra codificação da lista até a prévia ficar correta. Windows-1251 cobre o cirílico; Shift_JIS, GBK e Big5 cobrem o japonês e o chinês.',
      'Clique em "Converter" e baixe a cópia em UTF-8. Seu original fica intacto.',
    ],
    sections: [
      {
        heading: 'O que está acontecendo',
        paragraphs: [
          'Um arquivo de texto são apenas números. Uma codificação é a tabela que diz qual letra cada número significa. O UTF-8 consegue escrever todos os idiomas, enquanto tabelas mais antigas como o Windows-1252 cobrem uma região. Se um arquivo é escrito com uma tabela e lido com outra, os caracteres viram bobagem como Ã© em vez de é.',
        ],
      },
      {
        heading: 'Por que o UTF-8 é o que se deve manter',
        paragraphs: [
          'O UTF-8 é entendido hoje por quase todos os programas, sites e bancos de dados. Salvar seu texto em UTF-8 significa que ele abre do mesmo jeito em qualquer lugar. Se um CSV ainda parecer errado no Excel depois do conserto, converta-o com o CSV para Excel, que lê UTF-8 corretamente.',
        ],
      },
    ],
    faqs: [
      { q: 'Como sei qual codificação escolher?', a: 'Teste as prováveis e observe a prévia. A certa deixa todas as letras legíveis. Veja de onde o arquivo veio: exportações antigas do Windows costumam ser Windows-1252.' },
      { q: 'Por que vejo pontos de interrogação ou quadradinhos?', a: 'Esses caracteres já tinham se perdido antes de você abrir o arquivo. Escolher outra codificação não traz de volta o que foi substituído.' },
      { q: 'Meu arquivo é enviado?', a: 'Não. Ele é lido e convertido dentro do seu navegador.' },
    ],
  },
  'how-to-convert-celsius-to-fahrenheit': {
    title: 'Como converter Celsius para Fahrenheit (e vice-versa)',
    description: 'A fórmula, um atalho mental rápido e um conversor para Celsius, Fahrenheit e Kelvin.',
    intro: 'Para converter Celsius para Fahrenheit, multiplique por 9, divida por 5 e some 32. Assim, 100 °C são 212 °F e 0 °C são 32 °F. Para voltar, subtraia 32, multiplique por 5 e divida por 9.',
    steps: [
      'Anote a temperatura com a unidade, por exemplo 25 °C.',
      'Multiplique por 9: 25 × 9 = 225.',
      'Divida por 5: 225 ÷ 5 = 45.',
      'Some 32: 45 + 32 = 77 °F.',
      'Ou abra o Conversor de temperatura, digite 25, escolha Celsius para Fahrenheit e leia a resposta.',
    ],
    sections: [
      {
        heading: 'Um atalho mental',
        paragraphs: [
          'Para uma resposta aproximada, dobre o número em Celsius e some 30. Isso dá 80 para 25 °C, perto dos 77 reais. Funciona melhor entre 0 e 30 °C e se afasta mais nos extremos. Para cozinhar, em medicina e em ciência, use a fórmula exata.',
        ],
      },
      {
        heading: 'Por que não dá para só multiplicar',
        paragraphs: [
          'A maioria das conversões de unidades é uma única multiplicação. As escalas de temperatura começam em pontos zero diferentes: 0 °C são 32 °F. É por isso que a fórmula tem um passo de somar ou subtrair, e por isso dobrar uma temperatura em Celsius não dobra a de Fahrenheit.',
          'O Kelvin usa o mesmo tamanho de grau do Celsius, mas começa no zero absoluto: some 273,15 a um valor em Celsius para obter Kelvin. As duas escalas se cruzam em -40, onde Celsius e Fahrenheit são iguais.',
        ],
      },
    ],
    faqs: [
      { q: 'Quanto são 37 °C em Fahrenheit?', a: 'Cerca de 98,6 °F, a temperatura normal do corpo humano.' },
      { q: 'Que temperatura de forno são 180 °C?', a: '356 °F, geralmente arredondada para 350 °F nas receitas.' },
      { q: 'Como converto Fahrenheit para Celsius?', a: 'Subtraia 32, multiplique por 5 e divida por 9. 212 °F dão 100 °C.' },
    ],
  },
  'how-to-convert-bigha-gaj-and-acre-to-square-feet': {
    title: 'Como converter bigha, gaj e acre para pés quadrados',
    description: 'Converta unidades de terra da Índia para pés quadrados, com os valores que são fixos e os que mudam conforme o estado.',
    intro: 'Para converter unidades de terra da Índia, abra o conversor de unidades de terra da Índia, digite o número e escolha a unidade. Um gaj são 9 pés quadrados e um acre são 43.560 pés quadrados, mas um bigha varia conforme o estado, então confira sempre o registro local antes de comprar ou vender.',
    steps: [
      'Decida qual unidade o seu documento usa. Se disser bigha, anote o estado, porque o tamanho muda.',
      'Abra o conversor de unidades de terra da Índia e digite a área.',
      'Escolha a unidade que você tem em From e pés quadrados (ou acre) em To.',
      'Leia a resposta e a nota sobre o estado. Compare com o seu registro de receitas.',
    ],
    sections: [
      {
        heading: 'Unidades fixas',
        paragraphs: [
          'Um gaj é uma jarda quadrada, que são 9 pés quadrados. Um acre são 43.560 pés quadrados, ou cerca de 4.047 metros quadrados. Um hectare são 10.000 metros quadrados, cerca de 2,47 acres ou mais ou menos 107.639 pés quadrados. São iguais em todo lugar.',
        ],
      },
      {
        heading: 'Unidades que mudam conforme o estado',
        paragraphs: [
          'Um bigha não tem um tamanho só. São cerca de 27.000 pés quadrados em Uttar Pradesh, cerca de 17.400 em Gujarat e 14.400 em Bengala Ocidental e Assam, e pode variar por distrito e conforme o costume local seja o bigha pucca ou kachha. Biswa, katha, guntha e cent também variam por região.',
          'Por isso, trate qualquer conversão de uma unidade local como uma estimativa e use o valor do documento oficial de receitas para qualquer assunto legal.',
        ],
      },
    ],
    faqs: [
      { q: 'Quantos pés quadrados há em um bigha?', a: 'Depende do estado, de cerca de 14.400 a cerca de 27.000 pés quadrados nos lugares listados aqui. Use o conversor e sua nota e confirme localmente.' },
      { q: 'Quantos gaj há em um acre?', a: '4.840 gaj, já que um acre são 43.560 pés quadrados e um gaj são 9.' },
      { q: 'É seguro para uso legal?', a: 'Não. É uma calculadora para estimativas. Documentos de propriedade devem usar os valores do registro oficial.' },
    ],
  },
  'how-many-mb-in-a-gb': {
    title: 'Quantos MB há em um GB? 1000 ou 1024 explicado',
    description: 'Por que um gigabyte são 1000 MB em um plano de celular mas 1024 MiB em alguns sistemas, e como converter KB, MB, GB e TB.',
    intro: 'Um gigabyte são 1.000 megabytes no sistema decimal (SI) usado pelos fabricantes de discos e pelos planos de celular, e um gibibyte são 1.024 mebibytes no sistema binário que alguns sistemas operacionais usam. Para converter, escolha o sistema certo e multiplique ou divida por 1.000 ou 1.024.',
    steps: [
      'Decida de qual sistema você precisa. O armazenamento vendido nas lojas, as velocidades de rede e os planos de dados usam 1.000.',
      'Abra o conversor de tamanho de dados e digite a quantidade.',
      'Escolha KB, MB, GB ou TB para o sistema de 1.000, ou KiB, MiB, GiB e TiB para o sistema de 1.024.',
      'Leia o resultado na unidade que quiser.',
    ],
    sections: [
      {
        heading: 'De onde vêm os dois sistemas',
        paragraphs: [
          'Os computadores trabalham com potências de dois, e 1.024 (2 elevado a 10) é próximo de 1.000. Os primeiros softwares usavam KB para 1.024 bytes, enquanto os fabricantes de hardware usavam o 1.000 métrico. Para acabar com a confusão, os nomes KiB, MiB e GiB foram criados para as unidades baseadas em 1.024. No uso cotidiano ambos ainda aparecem com o nome simples.',
        ],
      },
      {
        heading: 'Por que um disco mostra menos espaço',
        paragraphs: [
          'Um disco vendido como 1 TB guarda 1.000.000.000.000 bytes. Um sistema que mostra tamanhos em unidades baseadas em 1.024 informa isso como cerca de 931 GiB, então o número parece menor mesmo sem faltar nada. O mesmo efeito faz um celular de 128 GB mostrar um pouco menos de 128 em alguns menus.',
        ],
      },
    ],
    faqs: [
      { q: 'Qual está certo, 1.000 ou 1.024?', a: 'Os dois estão certos no seu próprio sistema. KB, MB e GB são oficialmente de base 1.000; KiB, MiB e GiB são de base 1.024.' },
      { q: 'Quantos MB é 1 GB no meu plano de dados?', a: 'Os planos usam 1.000, então 1 GB são 1.000 MB. Pergunte à sua operadora se o valor exato importar.' },
      { q: 'Quantos bytes há em um megabyte?', a: '1.000.000 no sistema decimal e 1.048.576 em um mebibyte.' },
    ],
  },
};

export default guides;
