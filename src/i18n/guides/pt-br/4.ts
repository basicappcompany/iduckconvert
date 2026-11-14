import type { GuideSet } from '../types';

/** Portuguese (Brazil) guides, batch 4. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-gif-to-mp4': {
    title: 'Como converter um GIF para MP4 para deixá-lo menor',
    description: 'Reduza um GIF animado pesado a um MP4 pequeno que carrega rápido e toca em todos os celulares.',
    intro: 'Para converter um GIF para MP4, solte o GIF no conversor de GIF para MP4 e clique em "Converter". O MP4 costuma ser muitas vezes menor e muitas vezes mais nítido, porque o GIF é limitado a 256 cores e não tem compressão de vídeo de verdade.',
    steps: [
      'Abra GIF para MP4 e solte seu GIF na caixa.',
      'Clique em "Converter".',
      'Baixe o MP4 e compare o tamanho dele com o do GIF.',
      'Em um site, use o MP4 em uma tag de vídeo com autoplay, loop e muted para que se comporte como um GIF.',
    ],
    sections: [
      {
        heading: 'Por que o MP4 ganha',
        paragraphs: [
          'Um GIF guarda cada quadro como uma imagem completa. O vídeo MP4 guarda só o que muda de um quadro para o seguinte, então um GIF de 8 MB pode ficar bem abaixo de 1 MB como MP4. A cor também é melhor, já que o vídeo não é limitado a 256 cores.',
        ],
      },
      {
        heading: 'A que você renuncia',
        paragraphs: [
          'Um GIF se repete sozinho e aparece em qualquer lugar onde cabe uma imagem. Um MP4 toca uma vez, a menos que se diga ao player ou à página para repeti-lo. A maioria dos aplicativos sociais repete clipes curtos sozinha, e no seu próprio site você pode adicionar o atributo loop.',
        ],
      },
      {
        heading: 'Usando o MP4 em um site',
        paragraphs: [
          'Para fazer um MP4 se comportar como um GIF na sua própria página, coloque-o em uma tag de vídeo com os atributos autoplay, loop, muted e playsinline. Os navegadores só permitem autoplay quando o vídeo está sem som, e o playsinline impede que os iPhones o abram em tela cheia. O resultado carrega mais rápido, usa menos dados e fica melhor que o GIF original.',
        ],
      },
    ],
    faqs: [
      { q: 'O MP4 tem som?', a: 'Não. Um GIF não tem som, então não há nada para levar.' },
      { q: 'Posso transformar o MP4 de volta em GIF?', a: 'Sim, com o Vídeo para GIF, mas ele vai ficar grande de novo.' },
      { q: 'O GIF é enviado?', a: 'Não. Ele é convertido na aba do seu navegador.' },
    ],
  },
  'how-to-convert-csv-to-json': {
    title: 'Como converter CSV para JSON',
    description: 'Transforme uma tabela CSV em uma lista JSON no seu navegador, com a primeira linha como chaves e os números mantidos como números.',
    intro: 'Para converter CSV para JSON, cole seu CSV ou solte o arquivo no conversor de CSV para JSON. A primeira linha vira as chaves e cada uma das outras vira um objeto, então uma tabela de nomes e idades se transforma em uma lista de registros.',
    steps: [
      'Confira se a primeira linha do seu CSV tem os nomes das colunas.',
      'Abra CSV para JSON e cole o texto, ou solte o arquivo na caixa. Teste o exemplo primeiro se quiser ver o formato.',
      'Leia o JSON que aparece à direita enquanto você digita.',
      'Clique em "Download .json", ou em "Copy" para colar no seu código ou em uma ferramenta de API.',
    ],
    sections: [
      {
        heading: 'Como fica o resultado',
        paragraphs: [
          'Um CSV com as colunas name, age e city vira uma lista de objetos como {"name": "Asha", "age": 29, "city": "Pune"}. Números simples e as palavras true e false viram números e booleanos reais do JSON. Valores como 01234 continuam como texto para que os zeros à esquerda em códigos e CEPs não se percam.',
        ],
      },
      {
        heading: 'Vírgulas, aspas e outros separadores',
        paragraphs: [
          'Os campos podem ficar entre aspas duplas quando contêm uma vírgula ou uma quebra de linha, e uma aspa dentro de um campo é escrita como duas aspas. O conversor entende tudo isso. Ele também lê arquivos separados por ponto e vírgula, tabulação ou barra vertical olhando a primeira linha, o que importa para arquivos exportados de planilhas em países que usam vírgula decimal.',
        ],
      },
    ],
    faqs: [
      { q: 'E se uma coluna não tiver título?', a: 'Ela se chama column1, column2 e assim por diante, então nenhum dado é descartado.' },
      { q: 'Posso voltar para CSV?', a: 'Sim, com o JSON para CSV, que transforma uma lista de objetos em linhas.' },
      { q: 'Meus dados são enviados?', a: 'Não. A conversão acontece no seu navegador enquanto você digita.' },
    ],
  },
  'how-to-convert-json-to-csv': {
    title: 'Como converter JSON para CSV para o Excel',
    description: 'Achate uma lista JSON em uma tabela CSV que você pode abrir no Excel ou no Google Planilhas, inclusive com objetos aninhados.',
    intro: 'Para converter JSON para CSV, cole uma lista de objetos no conversor de JSON para CSV. Cada objeto vira uma linha e cada chave vira uma coluna, e os objetos aninhados são achatados em nomes de coluna com pontos, como address.city.',
    steps: [
      'Confira se o seu JSON é uma lista de objetos, como [{"a":1},{"a":2}]. Um único objeto também funciona e gera uma linha.',
      'Abra JSON para CSV e cole o JSON ou solte o arquivo .json.',
      'Olhe o CSV à direita. As colunas são reunidas de todos os objetos.',
      'Baixe o .csv e abra no Excel, ou use o CSV para Excel para ter uma planilha de verdade.',
    ],
    sections: [
      {
        heading: 'Dados aninhados e chaves ausentes',
        paragraphs: [
          'O JSON pode aninhar objetos dentro de objetos, mas uma tabela só tem linhas e colunas. O conversor achata cada chave aninhada em uma coluna com nome com ponto, então {"address": {"city": "Pune"}} vira uma coluna chamada address.city. Listas dentro de um valor são mantidas como texto JSON em uma única célula.',
          'Se os objetos têm chaves diferentes, toda chave encontrada em qualquer lugar vira uma coluna, e as células sem valor ficam vazias.',
        ],
      },
      {
        heading: 'Abrindo o resultado no Excel',
        paragraphs: [
          'O Excel pode ler mal um CSV simples, apagando zeros à esquerda ou alterando números longos. Para uma planilha com a qual você vai continuar trabalhando, converta o CSV para XLSX com o conversor de CSV para Excel, que mantém os códigos como texto.',
        ],
      },
    ],
    faqs: [
      { q: 'E se o meu JSON for inválido?', a: 'A página mostra uma mensagem de erro em vez de um resultado. Procure aspas ou vírgulas faltando.' },
      { q: 'Posso converter um arquivo enorme?', a: 'Arquivos grandes funcionam, mas demoram mais, porque quem faz o trabalho é o seu navegador. Arquivos de poucos megabytes não dão problema.' },
      { q: 'É enviado?', a: 'Não. Tudo roda no seu dispositivo.' },
    ],
  },
  'how-to-save-an-excel-sheet-as-csv-with-accents': {
    title: 'Como salvar o Excel como CSV mantendo os acentos corretos',
    description: 'Converta uma planilha do Excel em CSV e mantenha corretos os acentos, as letras turcas e os símbolos com uma marca UTF-8.',
    intro: 'Para converter Excel para CSV, solte seu arquivo .xlsx no conversor de Excel para CSV e mantenha marcada a marca UTF-8. Cada planilha vira seu próprio CSV, e a marca avisa ao Excel que o arquivo é UTF-8, então acentos e letras não inglesas continuam corretos.',
    steps: [
      'Abra Excel para CSV e solte seu arquivo .xlsx, .xls ou .ods.',
      'Mantenha a caixa marcada para adicionar uma marca UTF-8 se você for abrir o CSV no Excel de novo. Desmarque para bancos de dados e scripts que não gostam da marca.',
      'Clique em "Converter".',
      'Baixe o CSV. Uma pasta de trabalho com várias planilhas gera um CSV por planilha, com o nome dela.',
    ],
    sections: [
      {
        heading: 'Por que os acentos quebram',
        paragraphs: [
          'O CSV é texto simples, e o texto pode ser guardado em codificações diferentes. O Excel adivinha quando você abre um CSV. Se o arquivo é UTF-8 mas o Excel presume uma codificação antiga do Windows, letras como é, ü, ş ou ı aparecem como caracteres estranhos. Uma pequena marca no início do arquivo elimina o palpite.',
        ],
      },
      {
        heading: 'O que o CSV deixa de fora',
        paragraphs: [
          'O CSV guarda só valores: sem fórmulas, cores, gráficos ou formatação. Você recebe os valores que a planilha mostra, com datas e números escritos como o Excel os exibe. Pastas de trabalho protegidas por senha não podem ser abertas. Se precisar da formatação, mantenha o XLSX.',
        ],
      },
    ],
    faqs: [
      { q: 'Qual separador é usado?', a: 'Uma vírgula, com aspas ao redor de qualquer valor que contenha vírgula, aspas ou quebra de linha.' },
      { q: 'Meu CSV ainda mostra letras erradas. E agora?', a: 'O arquivo pode estar em outra codificação. Use o corretor de codificação TXT para lê-lo com a correta e salvar uma cópia UTF-8 limpa.' },
      { q: 'A pasta de trabalho é enviada?', a: 'Não. Ela é lida e convertida dentro da aba do seu navegador.' },
    ],
  },
  'how-to-convert-yaml-to-json-and-back': {
    title: 'Como converter YAML para JSON e vice-versa',
    description: 'Passe configurações entre YAML e JSON no seu navegador e evite as armadilhas comuns de indentação e comentários.',
    intro: 'Para converter YAML para JSON, cole o YAML no conversor de YAML para JSON e copie o JSON formatado. Para o outro sentido, cole JSON no JSON para YAML. Os dados continuam os mesmos; só muda o estilo de escrita.',
    steps: [
      'Cole seu YAML no conversor de YAML para JSON, ou solte um arquivo .yaml ou .yml.',
      'Se aparecer um erro, confira a indentação. O YAML usa espaços, nunca tabulações, para mostrar o aninhamento.',
      'Copie ou baixe o JSON.',
      'Para o inverso, cole JSON no JSON para YAML e obtenha um YAML legível com recuo de dois espaços.',
    ],
    sections: [
      {
        heading: 'O que se perde',
        paragraphs: [
          'Comentários existem no YAML mas não no JSON, então são descartados ao converter para JSON e não podem ser recuperados. Âncoras e apelidos (os atalhos &nome e *nome) são expandidos em valores repetidos simples.',
          'O conversor lê um documento YAML. Se um arquivo tem vários documentos separados por três traços, converta cada um separadamente.',
        ],
      },
      {
        heading: 'Por que as pessoas trocam de formato',
        paragraphs: [
          'O YAML é mais fácil de ler e editar à mão, por isso os arquivos de configuração o usam. O JSON é mais rígido e é o que as APIs e a maioria das linguagens de programação interpretam nativamente. Converter permite conferir uma configuração em uma ferramenta de JSON ou transformar uma resposta de API em um arquivo legível.',
        ],
      },
      {
        heading: 'Conferindo o resultado',
        paragraphs: [
          'Depois de converter, olhe os valores que o YAML pode ler como números. Uma versão sem aspas como 1.10 é lida como o número 1,1, e um código como 08 pode perder o zero, então coloque entre aspas, no YAML, as strings de versão e os códigos. O conversor mostra exatamente o que um interpretador de YAML enxerga, o que o torna um jeito rápido de achar esse tipo de surpresa antes que ela chegue a um sistema real.',
        ],
      },
    ],
    faqs: [
      { q: 'Por que o meu YAML dá erro?', a: 'A causa mais comum é uma tabulação usada como recuo, ou uma indentação inconsistente. Use espaços e mantenha os itens aninhados alinhados.' },
      { q: 'Números e booleanos serão tipados corretamente?', a: 'Sim. Valores como 42, 3.5, true e null viram tipos reais de JSON.' },
      { q: 'Algo é enviado?', a: 'Não. A conversão roda na aba do seu navegador.' },
    ],
  },
};

export default guides;
