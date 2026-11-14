import type { GuideSet } from '../types';

/** Portuguese (Brazil) guides, batch 1. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-extract-audio-from-a-video': {
    title: 'Como extrair o áudio de um vídeo',
    description: 'Salve o som de qualquer vídeo como MP3 no seu navegador, sem enviar nada, sem instalar programas e sem marca d’água.',
    intro: 'Para extrair o áudio de um vídeo, abra um conversor de vídeo para MP3, solte o vídeo, clique em "Converter" e baixe o MP3. Com o iDuckConvert, tudo acontece dentro da aba do seu navegador, então o vídeo nunca é enviado para lugar nenhum.',
    steps: [
      'Abra o conversor de MP4 para MP3 (ele também aceita MOV, MKV, WEBM e AVI pelo Vídeo para MP3).',
      'Solte seu vídeo na caixa, ou clique em "Escolher arquivos".',
      'Escolha uma qualidade. 192 kbit/s é uma boa escolha para o dia a dia; use 320 para músicas que importam para você.',
      'Clique em "Converter" e espere a barra de progresso terminar. Na primeira vez, seu navegador baixa o mecanismo do conversor (cerca de 30 MB), que depois fica em cache.',
      'Baixe o MP3, ou baixe vários de uma vez em um ZIP.',
    ],
    sections: [
      {
        heading: 'O que você recebe',
        paragraphs: [
          'A imagem é descartada e só a trilha sonora é mantida, então o MP3 fica muito menor que o vídeo. Um vídeo de aula de 100 MB costuma virar um MP3 de 10 a 30 MB.',
          'O som é codificado de novo como MP3, que é um formato com perdas. Se o som original já estava comprimido (a maioria dos vídeos está), uma segunda compressão perde um pouquinho mais. Em 192 kbit/s ou mais, isso é difícil de ouvir.',
        ],
      },
      {
        heading: 'Quais vídeos funcionam',
        paragraphs: [
          'MP4, MOV (vídeos de iPhone), MKV, WEBM, AVI e a maioria dos clipes de celular e de câmera. Se um arquivo não abrir, ele pode estar danificado, protegido contra cópia ou em um formato incomum; a página avisa quando não consegue ler um arquivo.',
          'Extraia o áudio apenas de vídeos seus ou que você tenha o direito de usar. O uso comum é gravar suas próprias aulas, entrevistas, mensagens de voz e vídeos de família.',
        ],
      },
      {
        heading: 'Vídeos longos e celulares',
        paragraphs: [
          'Como quem faz o trabalho é o seu próprio dispositivo, vídeos longos demoram e usam memória. Sugerimos arquivos de até cerca de 500 MB no computador e 100 MB no celular. Se o celular sofrer, corte o vídeo antes com a ferramenta Cortar vídeo, ou use um computador.',
        ],
      },
    ],
    faqs: [
      { q: 'Funciona no celular?', a: 'Sim, em qualquer navegador moderno, mas vídeos longos são lentos no celular. Clipes curtos funcionam bem.' },
      { q: 'Posso obter WAV ou outro formato?', a: 'Sim. Vídeo para MP3 é o caminho mais rápido, e os conversores de áudio transformam o MP3 em WAV, M4A, OGG ou FLAC.' },
      { q: 'O vídeo é enviado?', a: 'Não. Tudo roda na aba do seu navegador e o vídeo nunca sai do seu dispositivo.' },
    ],
  },
  'heic-vs-jpg': {
    title: 'HEIC ou JPG: qual usar?',
    description: 'O que é HEIC, como ele difere do JPG, por que fotos de iPhone não abrem em outros lugares e como convertê-las.',
    intro: 'O HEIC deixa as fotos com cerca de metade do tamanho do JPG com qualidade parecida, mas menos programas o abrem. Use HEIC para economizar espaço no celular e converta para JPG quando precisar compartilhar, enviar ou editar uma foto em qualquer outro lugar.',
    steps: [
      'Confira se o arquivo termina em .heic ou .heif. É o que um iPhone salva por padrão.',
      'Se precisar compartilhar ou enviar, converta para JPG com o conversor de HEIC para JPG do iDuckIMG, que roda no seu navegador.',
      'Guarde o HEIC original se puder editá-la de novo: ele guarda mais detalhes de cor do que um JPG.',
      'Para o seu iPhone parar de salvar em HEIC, vá em Ajustes, Câmera, Formatos e escolha "Mais compatível".',
    ],
    sections: [
      {
        heading: 'As diferenças reais',
        paragraphs: [
          'O HEIC (High Efficiency Image Container) usa a mesma família de compressão do vídeo moderno. A Apple o tornou o padrão do iPhone em 2017 porque ele guarda uma foto em mais ou menos metade do espaço de um JPG e pode conter cor de 10 bits, dados de profundidade e várias imagens em um só arquivo.',
          'O JPG é de 1992. Sua compressão é menos eficiente, mas todo celular, computador, site, impressora e editor de fotos o abre sem complicação.',
        ],
      },
      {
        heading: 'Por que o HEIC dá problema',
        paragraphs: [
          'Muitos sites e formulários recusam envios em HEIC. O Windows precisa de um codec extra para mostrá-los, e Androids mais antigos, algumas impressoras e muito software antigo não conseguem abri-los de jeito nenhum.',
          'Converter para JPG custa um pouco de qualidade, porque o JPG tem perdas e uma faixa de cores menor. Para compartilhar e enviar, você não vai notar. Para edição séria, guarde o original.',
        ],
      },
      {
        heading: 'Uma regra simples',
        paragraphs: ['Guarde o HEIC enquanto a foto ficar no seu celular ou no iCloud. Converta uma cópia para JPG assim que precisar enviá-la a alguém ou colocá-la em um site.'],
      },
    ],
    faqs: [
      { q: 'O HEIC tem qualidade melhor que o JPG?', a: 'Com o mesmo tamanho de arquivo, sim: ele guarda mais detalhes. Com a mesma qualidade, tem cerca de metade do tamanho. Também suporta mais cores.' },
      { q: 'Converter HEIC para JPG perde qualidade?', a: 'Um pouco, porque o JPG é um formato com perdas. Com ajustes de qualidade altos, a diferença é muito difícil de ver.' },
      { q: 'Onde converto HEIC para JPG?', a: 'O conversor de HEIC para JPG fica no iDuckIMG, um site irmão. Ele também roda no seu navegador e não envia suas fotos.' },
    ],
  },
  'how-to-open-a-csv-in-excel-correctly': {
    title: 'Como abrir um CSV no Excel do jeito certo',
    description: 'Impeça o Excel de apagar zeros à esquerda, estragar números longos e quebrar acentos ao abrir um arquivo CSV.',
    intro: 'Dar dois cliques em um CSV faz o Excel adivinhar como lê-lo, e o palpite costuma estar errado. O jeito confiável é converter o CSV para um arquivo XLSX primeiro, ou usar a guia Dados do Excel para importá-lo e escolher você mesmo o tipo de cada coluna.',
    steps: [
      'O mais fácil: converta o arquivo com o conversor de CSV para Excel e depois abra o .xlsx. Zeros à esquerda e valores de texto ficam como estão.',
      'Ou, no Excel, abra uma pasta de trabalho em branco e escolha Dados, depois De Texto/CSV.',
      'Escolha o arquivo e confira se a origem do arquivo diz 65001: UTF-8 (isso corrige os acentos) e se o delimitador combina com o seu arquivo.',
      'Clique em Transformar Dados se algumas colunas precisarem continuar como texto, como CEPs e números de telefone, e defina o tipo delas como Texto.',
      'Clique em Carregar.',
    ],
    sections: [
      {
        heading: 'O que dá errado',
        paragraphs: [
          'Zeros à esquerda desaparecem: 01234 vira 1234, o que quebra CEPs, números de telefone e códigos de produto.',
          'Números longos viram notação científica. O Excel guarda só 15 dígitos de um número, então um número de cartão ou de documento de 16 dígitos fica danificado para sempre depois de salvo como número.',
          'Alguns textos são lidos como datas. Um valor como 1-2 pode virar 2 de janeiro, e alguns nomes de genes foram famosamente estragados desse jeito.',
          'Acentos e letras não inglesas aparecem como caracteres estranhos quando o arquivo é UTF-8 mas o Excel presume uma codificação mais antiga.',
        ],
      },
      {
        heading: 'Ponto e vírgula e vírgulas',
        paragraphs: [
          'Em países que escrevem decimais com vírgula, o Excel espera um ponto e vírgula entre as colunas, então um CSV com vírgulas abre como uma coluna longa só. O conversor deste site olha a primeira linha e escolhe o separador certo, e também entende valores entre aspas que contêm vírgulas.',
        ],
      },
      {
        heading: 'Fazendo o caminho inverso',
        paragraphs: [
          'Para salvar uma planilha do Excel como CSV para um banco de dados ou um formulário de envio, use o conversor de Excel para CSV. Ele grava por padrão uma marca UTF-8 para que o Excel mostre os acentos corretamente quando você abrir o CSV de novo.',
        ],
      },
    ],
    faqs: [
      { q: 'Por que meu CSV abre em uma coluna só?', a: 'O separador não combina com as configurações da sua região. Converter para XLSX, ou importar pela guia Dados escolhendo o delimitador, resolve.' },
      { q: 'Consigo recuperar meus zeros à esquerda depois que o Excel os removeu?', a: 'Só se você ainda tiver o CSV original. Quando o Excel salva 1234 por cima de 01234, o zero se perde, então guarde sempre o arquivo original.' },
      { q: 'Minha planilha é enviada?', a: 'Não. Os conversores rodam no seu navegador e o arquivo nunca sai do seu dispositivo.' },
    ],
  },
  'how-to-convert-units-without-mistakes': {
    title: 'Como converter unidades sem erros',
    description: 'As armadilhas que causam respostas erradas ao converter unidades: galões americanos e britânicos, 1000 ou 1024, toneladas, temperatura e unidades de terra da Índia.',
    intro: 'Para converter unidades sem erros, confira a que sistema a unidade pertence, use uma ferramenta com fatores de conversão exatos e escreva a unidade ao lado de cada número. A maioria dos erros vem de unidades que têm o mesmo nome mas significam quantidades diferentes.',
    steps: [
      'Escreva o número com a unidade, por exemplo 5 mi, e não só 5.',
      'Confira se a unidade significa o que você pensa. Um galão, uma tonelada e um bigha mudam conforme o país ou o estado.',
      'Use um conversor com fatores exatos, como o de comprimento ou o de peso, e leia a resposta com a unidade.',
      'Faça uma checagem de bom senso: a resposta tem o tamanho certo? Uma maratona de 42 km deve dar perto de 26 milhas.',
      'Guarde o número e a unidade originais e arredonde só no final.',
    ],
    sections: [
      {
        heading: 'Unidades que têm o mesmo nome',
        paragraphs: [
          'Um galão americano tem 3,785 litros, mas um galão britânico tem 4,546 litros, cerca de 20 por cento a mais. Uma tonelada curta americana são 2000 libras, uma tonelada longa britânica são 2240 libras e uma tonelada métrica são 1000 quilogramas.',
          'Na informática, 1 KB são 1000 bytes para os fabricantes de discos e planos de celular, mas 1024 bytes em alguns sistemas operacionais. Por isso um disco de 1 TB mostra cerca de 931 GB. Os nomes KiB, MiB e GiB sempre significam 1024.',
        ],
      },
      {
        heading: 'A temperatura é diferente',
        paragraphs: [
          'A maioria das conversões multiplica por um fator. As escalas de temperatura começam em zeros diferentes, então também é preciso somar ou subtrair: Fahrenheit é Celsius vezes 9/5 mais 32. Por isso dobrar uma temperatura em Celsius não dobra a de Fahrenheit.',
        ],
      },
      {
        heading: 'Unidades de terra locais',
        paragraphs: [
          'Um bigha não tem um tamanho fixo na Índia. São cerca de 27.000 pés quadrados em Uttar Pradesh, cerca de 17.424 em Gujarat e 14.400 em Bengala Ocidental e Assam, e pode variar de distrito para distrito. Um gaj é uma jarda quadrada (9 pés quadrados). Para qualquer assunto legal, use o valor do registro de receitas local.',
        ],
      },
      {
        heading: 'Por que isso importa',
        paragraphs: [
          'Em 1999, a NASA perdeu a sonda Mars Climate Orbiter porque o software de uma equipe usava libras-força segundo e o de outra esperava newtons-segundo. Confundir unidades é um erro pequeno com grandes consequências, então mantenha sempre a unidade junto do número.',
        ],
      },
    ],
    faqs: [
      { q: 'Quantos pés há em um metro?', a: 'Cerca de 3,28084 pés. Um pé tem exatamente 0,3048 metro.' },
      { q: 'Devo arredondar as conversões?', a: 'Só no final. Arredondar no meio de um cálculo adiciona um erro que cresce a cada passo.' },
      { q: 'Os conversores são exatos?', a: 'Eles usam os fatores exatos definidos e mostram até 10 algarismos significativos. As unidades de terra da Índia são aproximadas por natureza, porque as definições locais diferem.' },
    ],
  },
  'how-to-make-a-gif-from-a-video': {
    title: 'Como criar um GIF a partir de um vídeo',
    description: 'Transforme qualquer clipe de vídeo curto em um GIF animado no seu navegador e mantenha o arquivo pequeno o bastante para enviar.',
    intro: 'Para criar um GIF a partir de um vídeo, solte o clipe no conversor de Vídeo para GIF, escolha onde ele começa e quanto dura e clique em "Criar GIF". Mantenha abaixo de 10 segundos e de 480 pixels de largura, ou o GIF fica enorme.',
    steps: [
      'Abra o Vídeo para GIF e solte seu clipe (MP4, MOV, WEBM, MKV ou AVI).',
      'Defina o tempo de início. Use segundos (90) ou minutos e segundos (1:30).',
      'Defina a duração em segundos. De três a seis segundos bastam para uma reação ou uma demonstração.',
      'Escolha uma largura. De 320 a 480 pixels serve para aplicativos de conversa; vá a 640 só se o detalhe importar.',
      'Escolha 10 quadros por segundo para um arquivo pequeno, ou 15 a 20 para um movimento mais suave, depois clique em "Criar GIF" e baixe.',
    ],
    sections: [
      {
        heading: 'Por que os GIFs ficam tão grandes',
        paragraphs: [
          'Um GIF guarda cada quadro como uma imagem separada e só pode usar 256 cores. Não há nenhuma compressão de vídeo inteligente, então duração, largura e taxa de quadros se multiplicam. Reduzir a largura pela metade deixa o arquivo com cerca de um quarto, e reduzir a taxa de quadros pela metade divide por dois de novo.',
        ],
      },
      {
        heading: 'O que um GIF não consegue fazer',
        paragraphs: [
          'Um GIF não tem som nenhum. Se você precisa de áudio, mantenha o clipe como MP4. Fotografias também podem parecer um pouco granuladas, porque 256 cores não são muitas. Isso é um limite do formato, não da ferramenta.',
          'Se o GIF só vai ser exibido em um site ou em um aplicativo de conversa moderno, um MP4 em repetição costuma ser bem menor e mais nítido. O conversor de GIF para MP4 faz isso no sentido inverso.',
        ],
      },
    ],
    faqs: [
      { q: 'O GIF fica em repetição?', a: 'Sim. Os GIFs feitos aqui se repetem para sempre, que é o que a maioria das pessoas quer.' },
      { q: 'Posso adicionar texto ou figurinhas?', a: 'Não nesta ferramenta. Ela só corta e converte. Adicione o texto ao vídeo em um editor antes, se precisar.' },
      { q: 'O vídeo é enviado?', a: 'Não. O GIF é feito na aba do seu navegador e o clipe nunca sai do seu dispositivo.' },
    ],
  },
};

export default guides;
