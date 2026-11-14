import type { GuideSet } from '../types';

/** Portuguese (Brazil) guides, batch 6. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-write-an-amount-in-words-for-a-cheque': {
    title: 'Como escrever um valor por extenso em um cheque',
    description: 'Escreva valores em rupias e dólares por extenso do jeito que cheques e notas esperam, com lakh e crore ou milhão e bilhão.',
    intro: 'Para escrever um valor por extenso em um cheque, abra o conversor de Número por extenso, digite o valor, escolha o estilo indiano ou internacional e selecione rupias e paise ou dólares e centavos. 1250.50 vira "Rupees One Thousand Two Hundred Fifty and Paise Fifty Only".',
    steps: [
      'Digite o valor em algarismos. Vírgulas não atrapalham, e os decimais dão paise ou centavos.',
      'Escolha o estilo indiano (thousand, lakh, crore) ou internacional (thousand, million, billion).',
      'Em "Write as", escolha rupias e paise ou dólares e centavos.',
      'Copie as palavras e compare com os algarismos antes de preencher o cheque.',
    ],
    sections: [
      {
        heading: 'Estilos indiano e internacional',
        paragraphs: [
          'No sistema indiano, 1,00,000 é um lakh e 1,00,00,000 é um crore. No sistema internacional, 1,000,000 é um milhão e 1,000,000,000 é um bilhão (one billion). O mesmo número é escrito de forma diferente: 12,50,000 é doze lakh e cinquenta mil no estilo indiano e um milhão duzentos e cinquenta mil no estilo internacional.',
        ],
      },
      {
        heading: 'Por que "Only" no fim',
        paragraphs: [
          'Os cheques terminam as palavras com "Only" para que nada possa ser acrescentado depois. Os bancos também esperam que as palavras e os algarismos coincidam. Se diferirem, o banco pode recusar o cheque ou seguir as palavras. Confira sempre o resultado com as regras do seu próprio banco antes de assinar.',
        ],
      },
      {
        heading: 'Preenchendo o cheque',
        paragraphs: [
          'Escreva as palavras começando bem à esquerda da linha e trace um risco sobre o espaço não usado depois de "Only" para que nada possa ser acrescentado. Garanta que palavras e algarismos coincidam exatamente. Se errar, pergunte ao seu banco como corrigir ou cancelar o cheque, porque escrever por cima pode fazer com que seja recusado. Esta ferramenta ajuda com a grafia, mas as regras do banco sempre valem.',
        ],
      },
    ],
    faqs: [
      { q: 'Ela lida com paise e centavos?', a: 'Sim. Os dois dígitos depois do ponto viram paise ou centavos, escritos depois de "and".' },
      { q: 'Que tamanho de número ela consegue escrever?', a: 'O estilo internacional vai até os sextilhões e o indiano continua contando em crores, então qualquer valor real funciona.' },
      { q: 'O valor é enviado para algum lugar?', a: 'Não. As palavras são geradas no seu navegador enquanto você digita.' },
    ],
  },
  'how-to-convert-binary-hex-and-decimal': {
    title: 'Como converter binário, hexadecimal e decimal',
    description: 'Converta entre binário, octal, decimal e hexadecimal à mão e com um conversor, com exemplos resolvidos.',
    intro: 'Para converter entre bases numéricas, digite seu número em qualquer caixa do conversor de Bases numéricas e leia as outras. À mão, o binário 1010 é 10 em decimal e o hexadecimal FF é 255. O hexadecimal é só um jeito mais curto de escrever binário, quatro bits por vez.',
    steps: [
      'Abra o conversor de Bases numéricas.',
      'Clique na caixa da base que você tem (binário, octal, decimal ou hexadecimal) e digite o número.',
      'Leia as outras três caixas, que atualizam na hora.',
      'Clique em "Copy" ao lado da que você precisa.',
    ],
    sections: [
      {
        heading: 'Como funciona de binário para decimal',
        paragraphs: [
          'Cada casa binária é uma potência de dois, da direita para a esquerda: 1, 2, 4, 8, 16 e assim por diante. Para 1010, some as casas que têm 1: 8 + 2 = 10. Um byte tem oito bits, então vai até 11111111, que é 255.',
        ],
      },
      {
        heading: 'Por que os programadores usam hexadecimal',
        paragraphs: [
          'O hexadecimal tem 16 dígitos, de 0 a 9 e de A a F. Um dígito hexadecimal são exatamente quatro bits, então um byte são sempre dois dígitos hexadecimais: FF é 11111111, que é 255. Isso faz do hexadecimal um jeito compacto de escrever dados binários, endereços de memória e códigos de cor. Um prefixo 0x marca um número hexadecimal em muitas linguagens de programação.',
          'O conversor usa matemática exata com números inteiros, então números muito longos são convertidos sem arredondamento.',
        ],
      },
      {
        heading: 'Exemplos para praticar',
        paragraphs: [
          'O binário 1111 é 15, e 101010 é 42. O hexadecimal 1A é 26, e o decimal 255 é FF em hexadecimal e 11111111 em binário. O octal quase não é mais usado, mas as permissões de arquivo do Unix são escritas nele: o octal 755 é 493 em decimal, e cada dígito octal são exatamente três bits, então 7 é 111 e 5 é 101. Teste cada um desses no conversor para ver as outras caixas serem preenchidas.',
        ],
      },
    ],
    faqs: [
      { q: 'Ele converte números negativos?', a: 'Sim, com um sinal de menos. Ele não mostra os padrões de bits em complemento de dois.' },
      { q: 'Aceita os prefixos 0x ou 0b?', a: 'Sim. 0xFF na caixa hexadecimal é lido como 255.' },
      { q: 'Lida com frações?', a: 'Não. É para números inteiros.' },
    ],
  },
  'how-to-read-and-write-roman-numerals': {
    title: 'Como ler e escrever algarismos romanos',
    description: 'Aprenda as sete letras romanas, a regra da subtração e o limite de 3999, e converta números nos dois sentidos.',
    intro: 'Para escrever um número em algarismos romanos, divida-o em milhares, centenas, dezenas e unidades e escreva cada um com I, V, X, L, C, D e M. 1994 é MCMXCIV. O conversor de Algarismos romanos faz isso nos dois sentidos, para números de 1 a 3999.',
    steps: [
      'Aprenda as sete letras: I é 1, V é 5, X é 10, L é 50, C é 100, D é 500 e M é 1000.',
      'Divida o número: 1994 é 1000 + 900 + 90 + 4.',
      'Escreva cada parte: M, CM, XC e IV.',
      'Junte-as: MCMXCIV. Ou digite o número no conversor e copie o resultado.',
    ],
    sections: [
      {
        heading: 'A regra da subtração',
        paragraphs: [
          'Uma letra menor antes de uma maior é subtraída: IV é 4, IX é 9, XL é 40, XC é 90, CD é 400 e CM é 900. Uma letra menor depois de uma maior é somada: VI é 6. Uma letra se repete no máximo três vezes seguidas, então 4 é IV e não IIII.',
        ],
      },
      {
        heading: 'Limites e curiosidades',
        paragraphs: [
          'Os algarismos romanos padrão não têm zero nem símbolo acima de M, então o maior número é MMMCMXCIX, que é 3999. Mostradores de relógio costumam imprimir o 4 como IIII, mas este conversor só aceita a forma padrão para poder pegar erros de digitação. Os algarismos romanos ainda são usados em anos de filmes, capítulos de livros, reis e rainhas e algumas datas de edifícios.',
        ],
      },
    ],
    faqs: [
      { q: 'Como leio MCMXCIV?', a: 'M é 1000, CM é 900, XC é 90 e IV é 4, então 1994.' },
      { q: 'Por que não existe zero?', a: 'Os romanos não tinham um símbolo para o zero, então o conversor começa em 1.' },
      { q: 'Funciona no celular?', a: 'Sim, e roda inteiramente no seu navegador.' },
    ],
  },
  'how-to-change-text-case-camel-snake-title': {
    title: 'Como mudar maiúsculas e minúsculas: camel, snake e Title Case',
    description: 'Mude o texto entre maiúsculas, minúsculas, Título, frase, camelCase, snake_case e kebab-case com um clique.',
    intro: 'Para mudar as maiúsculas e minúsculas de um texto, cole-o no conversor de Maiúsculas e minúsculas e clique no formato que quer: maiúsculas, minúsculas, Título, frase, camelCase, PascalCase, snake_case, kebab-case ou CONSTANT_CASE. Copie o resultado com um clique.',
    steps: [
      'Abra o conversor de Maiúsculas e minúsculas e cole seu texto.',
      'Clique no botão do formato de que precisa. O resultado aparece abaixo.',
      'Confira. O Title Case é mecânico e também vai pôr em maiúscula as palavras pequenas.',
      'Clique em "Copy" e cole onde precisar.',
    ],
    sections: [
      {
        heading: 'Formatos para escrever',
        paragraphs: [
          'MAIÚSCULAS servem para ênfase ou siglas, e minúsculas para um texto limpo e informal. O Title Case põe em maiúscula a primeira letra de cada palavra, como no título de um livro. O formato de frase põe em maiúscula só a primeira palavra de cada frase, como na escrita normal, e é mais fácil de ler em títulos longos.',
        ],
      },
      {
        heading: 'Formatos para código e URLs',
        paragraphs: [
          'Programadores juntam as palavras sem espaços. camelCase (helloWorld) é comum para variáveis, PascalCase (HelloWorld) para nomes de classe, snake_case (hello_world) em Python e em bancos de dados, kebab-case (hello-world) em endereços web e nomes de arquivo, e CONSTANT_CASE para valores fixos. O conversor separa as palavras em espaços, pontuação e letras maiúsculas, então consegue trocar um estilo por outro.',
        ],
      },
    ],
    faqs: [
      { q: 'Ele segue as regras de guias de estilo para títulos?', a: 'Não. O Title Case aqui põe em maiúscula todas as palavras. Guias de estilo deixam em minúscula palavras pequenas como "of" e "the", então ajuste à mão se precisar.' },
      { q: 'Funciona com acentos?', a: 'Sim, com letras que têm maiúscula e minúscula, como é, ü e o cirílico. O i turco com e sem ponto segue as regras padrão e pode precisar de ajuste manual.' },
      { q: 'Meu texto é enviado para algum lugar?', a: 'Não. Ele é alterado no seu navegador enquanto você digita.' },
    ],
  },
  'how-to-convert-hex-to-rgb-and-hsl': {
    title: 'Como converter cores HEX para RGB e HSL',
    description: 'Converta códigos de cor entre HEX, RGB e HSL para CSS e trabalho de design, com uma amostra ao vivo.',
    intro: 'Para converter um código de cor, digite um valor HEX, RGB ou HSL no conversor de Códigos de cor. Os outros dois são atualizados e você vê a cor. #FFD23F é rgb(255, 210, 63), e hsl(45, 100%, 62%) é a mesma cor.',
    steps: [
      'Abra o conversor de Códigos de cor.',
      'Digite um código HEX na primeira caixa, com ou sem #, ou use o seletor de cor.',
      'Leia os valores RGB e HSL e olhe a amostra para conferir.',
      'Clique em "Copy" ao lado do código de que o seu CSS ou a sua ferramenta de design precisa.',
    ],
    sections: [
      {
        heading: 'Como HEX e RGB se relacionam',
        paragraphs: [
          'Um código HEX são três pares de dígitos em base 16 para vermelho, verde e azul. #FFD23F é FF (255) de vermelho, D2 (210) de verde e 3F (63) de azul. O RGB escreve esses mesmos três números em decimal. Um código de três dígitos como #F80 é uma abreviação que duplica cada dígito, então equivale a #FF8800.',
        ],
      },
      {
        heading: 'Quando o HSL ajuda',
        paragraphs: [
          'O HSL descreve uma cor pelo matiz (posição no círculo de cores de 0 a 360), pela saturação (o quão viva) e pela luminosidade (o quão clara ou escura). Isso facilita criar uma versão mais clara ou mais escura da cor de uma marca mudando só a luminosidade, o que é incômodo em HEX. Idas e vindas pelo HSL podem deslocar um valor em um, porque o HSL é arredondado para números inteiros; HEX e RGB continuam exatos.',
        ],
      },
    ],
    faqs: [
      { q: 'O que significa HEX de 8 dígitos?', a: 'Ele adiciona um par alfa (transparência) no final. Este conversor lida com códigos de seis e de três dígitos.' },
      { q: 'Como escureço uma cor?', a: 'Diminua a luminosidade no HSL e depois copie o HEX ou RGB correspondente.' },
      { q: 'Algo é enviado?', a: 'Não. Tudo é calculado no seu navegador.' },
    ],
  },
};

export default guides;
