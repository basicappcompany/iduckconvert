import type { GuideSet } from '../types';

/** Portuguese (Brazil) guides, batch 7. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-time-zones-for-a-meeting': {
    title: 'Como converter fusos horários para uma reunião (IST, EST, GMT)',
    description: 'Encontre o horário certo de reunião entre Índia, EUA, Reino Unido e outros, e evite a armadilha do horário de verão.',
    intro: 'Para converter o horário de uma reunião, escolha a data, o horário e o seu fuso de origem no conversor de fusos horários e adicione as cidades que quiser. Ele considera o horário de verão para a data exata. A Índia (IST) fica em UTC+05:30 o ano todo e nunca muda os relógios.',
    steps: [
      'Abra o conversor de fusos horários e escolha a data da reunião.',
      'Digite o horário e escolha o fuso em que ele está escrito, por exemplo Índia (Kolkata).',
      'Adicione as cidades das outras pessoas. Cada linha mostra o horário e a data locais.',
      'Procure os rótulos "next day" ou "previous day" e depois compartilhe os horários com todos.',
    ],
    sections: [
      {
        heading: 'A armadilha do horário de verão',
        paragraphs: [
          'A diferença entre dois lugares pode mudar durante o ano. Os Estados Unidos mudam os relógios em datas diferentes das do Reino Unido e da Europa, então por algumas semanas na primavera e no outono a diferença entre Nova York e Londres é de uma hora diferente do resto do ano. A Índia e muitos outros países não mudam os relógios, então a diferença para eles muda sempre que o outro lado muda.',
          'Converta sempre para a data exata da reunião, não para hoje. O conversor faz isso usando os dados de fusos horários embutidos no seu navegador.',
        ],
      },
      {
        heading: 'Linhas de data e reuniões tardias',
        paragraphs: [
          'Uma noite tardia na Índia é a mesma manhã ou noite nos Estados Unidos, e uma madrugada no Japão é a noite anterior na Índia. Quando a data difere, é fácil marcar o dia errado, então confira a coluna da data e escreva a data completa no convite.',
        ],
      },
    ],
    faqs: [
      { q: 'Quanto é o horário IST em Nova York?', a: 'A Índia está 10 horas e 30 minutos à frente de Nova York no inverno (EST) e 9 horas e 30 minutos no verão (EDT), porque a Índia não muda os relógios. O conversor mostra o valor exato para a sua data.' },
      { q: 'Ele usa a minha localização?', a: 'Só para escolher um fuso de origem. Seu navegador informa o fuso horário e nada é enviado para lugar nenhum.' },
      { q: 'E se a minha cidade não estiver na lista?', a: 'Escolha uma cidade do mesmo fuso horário.' },
    ],
  },
  'how-to-write-dates-without-confusion': {
    title: 'Como escrever datas sem confusão: DD/MM ou MM/DD',
    description: 'Por que 04/03/2026 significa datas diferentes na Índia e nos EUA, e como escrever datas para que ninguém as leia errado.',
    intro: 'Para escrever uma data sem confusão, use o formato ISO 2026-03-04 ou escreva o mês por extenso, por exemplo 4 de março de 2026. A data numérica 04/03/2026 significa 4 de março na Índia e no Reino Unido, mas 3 de abril nos Estados Unidos.',
    steps: [
      'Decida quem vai ler a data. Se a pessoa puder usar outra ordem, evite a forma só com números.',
      'Use ISO 8601 (AAAA-MM-DD) para formulários, nomes de arquivo e dados. Ela ordena em ordem de data.',
      'Ou escreva o mês por extenso: 4 de março de 2026 ou March 4, 2026.',
      'Use o conversor de formato de data para ver uma data em todos os formatos comuns e copie o que precisar.',
    ],
    sections: [
      {
        heading: 'Três ordens em uso',
        paragraphs: [
          'Dia-mês-ano (DD/MM/AAAA) é usado na Índia, no Reino Unido e na maior parte do mundo. Mês-dia-ano (MM/DD/AAAA) é usado nos Estados Unidos. Ano-mês-dia (AAAA/MM/DD) é usado no Japão, na China e na Coreia, e é a base da ISO 8601. Datas em que o dia é 13 ou mais não são ambíguas, mas 04/03 e 05/06 são.',
        ],
      },
      {
        heading: 'Por que a ISO 8601 é mais segura',
        paragraphs: [
          'A ISO 8601 escreve a maior unidade primeiro, então 2026-03-04 só pode ser lida de um jeito, e uma lista de datas ISO se ordena corretamente como texto simples. Bancos de dados, programadores e formulários internacionais a preferem. Para uma escrita amigável, um mês escrito por extenso elimina qualquer dúvida para leitores humanos.',
        ],
      },
    ],
    faqs: [
      { q: 'Como digito uma data para o conversor ler corretamente?', a: 'Digite-a e diga ao conversor se vem primeiro o dia, o mês ou o ano. Ele então mostra todos os outros formatos.' },
      { q: 'Aceita anos de dois dígitos?', a: 'Sim. Um ano de dois dígitos como 26 é lido como 2026.' },
      { q: 'Por que ele diz que minha data não é real?', a: 'Ou o dia não existe (31 de fevereiro) ou a ordem está errada (um mês 25).' },
    ],
  },
  'how-to-convert-tiff-to-jpg': {
    title: 'Como converter TIFF para JPG',
    description: 'Transforme digitalizações e fotos TIFF em pequenos arquivos JPG que abrem em qualquer lugar, inclusive TIFFs de várias páginas.',
    intro: 'Para converter TIFF para JPG, solte seus arquivos TIFF no conversor, escolha uma qualidade (90 é um bom padrão) e clique em "Converter". Cada página de um TIFF de várias páginas vira seu próprio JPG, e você pode baixar todos em um ZIP.',
    steps: [
      'Abra TIFF para JPG e solte seus arquivos .tif ou .tiff.',
      'Escolha uma qualidade. 90 mantém a maior parte do detalhe; valores menores geram arquivos menores.',
      'Clique em "Converter".',
      'Baixe o JPG, ou um ZIP se houver várias páginas ou arquivos.',
    ],
    sections: [
      {
        heading: 'Por que as pessoas convertem TIFF',
        paragraphs: [
          'O TIFF é um formato de alta qualidade usado por scanners, softwares de fax e fotografia profissional. Os arquivos são grandes, e a maioria dos navegadores (exceto o Safari), clientes de e-mail e formulários não consegue mostrá-los nem aceitá-los. O JPG é bem menor e funciona em quase todo lugar.',
        ],
      },
      {
        heading: 'O que esperar',
        paragraphs: [
          'O JPG tem perdas, então um pouco de detalhe é trocado por um arquivo muito menor. Com qualidade 90 ou mais, é difícil de ver. O JPG não tem transparência, então áreas transparentes ficam brancas. Algumas variantes raras de TIFF, como certos arquivos de 16 bits ou CMYK, podem não abrir; a página mostra uma mensagem quando isso acontece. Guarde o TIFF se você puder imprimir ou editar a imagem depois.',
        ],
      },
      {
        heading: 'Documentos digitalizados',
        paragraphs: [
          'Para um documento digitalizado a 200 ou 300 dpi, o JPG com qualidade 90 mantém legível a letra miúda e reduz drasticamente o tamanho do arquivo. Qualidades muito baixas deixam as bordas das letras borradas, então não desça de uns 70 para texto. Se uma página for só texto preto sobre branco, confira o resultado em tamanho real antes de jogar o TIFF fora.',
        ],
      },
    ],
    faqs: [
      { q: 'Uma digitalização de várias páginas mantém a ordem?', a: 'Sim. As páginas são nomeadas page1, page2 e assim por diante.' },
      { q: 'Posso gerar um PDF em vez disso?', a: 'As conversões de PDF ficam no iDuckPDF, um site irmão, que pode transformar imagens em PDF.' },
      { q: 'Minha digitalização é enviada?', a: 'Não. Ela é convertida na aba do seu navegador.' },
    ],
  },
  'how-to-convert-webp-to-gif': {
    title: 'Como converter WEBP para GIF',
    description: 'Transforme imagens WEBP em arquivos GIF para aplicativos de conversa e fóruns que recusam WEBP, mantendo o arquivo pequeno.',
    intro: 'Para converter WEBP para GIF, solte o arquivo no conversor de WEBP para GIF, escolha opcionalmente uma largura máxima e clique em "Converter". Nesta versão, um WEBP estático vira um GIF de um quadro, e um WEBP animado mantém só o primeiro quadro.',
    steps: [
      'Abra WEBP para GIF e solte seus arquivos .webp.',
      'Escolha uma largura máxima se a imagem for grande. Arquivos GIF crescem rápido.',
      'Clique em "Converter".',
      'Baixe o GIF, ou um ZIP se forem vários arquivos.',
    ],
    sections: [
      {
        heading: 'Quando isso ajuda',
        paragraphs: [
          'O WEBP é um formato de imagem moderno do Google que gera arquivos pequenos, e muitos sites já o servem. Alguns aplicativos de conversa, fóruns e programas de e-mail mais antigos ainda não o aceitam, mas quase todos aceitam GIF.',
        ],
      },
      {
        heading: 'A que você renuncia',
        paragraphs: [
          'O GIF é um formato mais antigo limitado a 256 cores, então fotografias podem parecer um pouco granuladas, e os arquivos costumam ser maiores que o WEBP. Áreas transparentes continuam transparentes, mas bordas suaves semitransparentes viram totalmente sólidas ou totalmente claras, porque o GIF só tem transparência de liga e desliga. Se a imagem for uma foto e o site aceitar, JPG ou PNG podem servir melhor; as conversões de imagem para esses formatos ficam no iDuckIMG.',
        ],
      },
      {
        heading: 'Mantendo o GIF pequeno',
        paragraphs: [
          'Use uma largura máxima de 320 a 480 pixels para figurinhas e avatares. Cores chapadas, logotipos e desenhos simples comprimem bem como GIF, enquanto fotografias não, porque só há 256 cores disponíveis. Se o GIF ficar muito maior do que você esperava, uma largura menor é a correção mais rápida.',
        ],
      },
    ],
    faqs: [
      { q: 'Um WEBP animado continua animado?', a: 'Ainda não. Só o primeiro quadro é mantido nesta versão, e a página avisa.' },
      { q: 'Por que meu GIF é maior que o WEBP?', a: 'O GIF comprime pior. Escolher uma largura menor o reduz.' },
      { q: 'É enviado?', a: 'Não. Ele é convertido dentro da aba do seu navegador.' },
    ],
  },
  'how-to-convert-kg-to-pounds': {
    title: 'Como converter kg para libras (e libras para kg)',
    description: 'Converta quilogramas em libras, onças e stone com o fator exato, um atalho mental e um conversor.',
    intro: 'Para converter quilogramas em libras, multiplique por 2,20462. Assim, 70 kg são cerca de 154,3 lb. Para o outro sentido, multiplique as libras por 0,45359237. O conversor de peso faz os dois na hora e também cobre onças, stone, gramas e toneladas.',
    steps: [
      'Anote o peso com a unidade, por exemplo 70 kg.',
      'Multiplique por 2,20462: 70 × 2,20462 = 154,32 lb.',
      'De libras para quilogramas, multiplique por 0,45359237: 154 lb × 0,45359237 = 69,85 kg.',
      'Ou abra o conversor de peso, digite o número e escolha as duas unidades.',
    ],
    sections: [
      {
        heading: 'Um atalho rápido',
        paragraphs: [
          'Para uma resposta aproximada, dobre os quilogramas e some um décimo do resultado: 70 kg dobrados são 140, mais 14 são 154 lb. No outro sentido, divida as libras pela metade e tire um décimo: 154 lb são 77, menos 7,7 dá cerca de 69,3 kg. É próximo o bastante para o dia a dia, mas use o fator exato para cozinhar, enviar encomendas e em medicina.',
        ],
      },
      {
        heading: 'Libras, onças e stone',
        paragraphs: [
          'Uma libra são 16 onças. Um stone, usado no Reino Unido e na Irlanda para o peso corporal, são 14 libras ou cerca de 6,35 kg. Um bebê que pesa 7 lb 8 oz tem 7,5 libras, cerca de 3,4 kg. A tonelada usada aqui é a métrica, de 1000 kg, que difere da tonelada curta americana de 2000 libras.',
        ],
      },
      {
        heading: 'Bagagem e peso corporal',
        paragraphs: [
          'Os limites de bagagem das companhias aéreas são um motivo comum para converter. Uma mala despachada de 23 kg tem cerca de 50,7 libras, e um limite de 50 libras são cerca de 22,7 kg, então uma mala que está certa em uma unidade pode passar um pouco na outra. Para o peso corporal, lembre que o stone é usado no Reino Unido: 11 stone são 154 libras, ou cerca de 69,9 kg.',
        ],
      },
    ],
    faqs: [
      { q: 'Quantas libras é 1 kg?', a: 'Cerca de 2,20462 libras.' },
      { q: 'Quantos kg são 150 libras?', a: 'Cerca de 68 kg.' },
      { q: 'Tonelada e "ton" são a mesma coisa?', a: 'Não. Uma tonelada métrica são 1000 kg, um ton americano são 2000 libras e um ton britânico são 2240 libras.' },
    ],
  },
};

export default guides;
