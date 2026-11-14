import type { GuideSet } from '../types';

/** Portuguese (Brazil) guides, batch 9. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-calories-to-kilojoules': {
    title: 'Como converter calorias para quilojoules e kWh',
    description: 'Converta calorias de alimentos (kcal) em quilojoules e unidades de eletricidade, e entenda por que uma Caloria não é uma caloria.',
    intro: 'Para converter quilocalorias em quilojoules, multiplique por 4,184. Assim, 2000 kcal são 8368 kJ. O valor em kcal no rótulo de um alimento é o que as pessoas chamam de Caloria. O conversor de energia também dá joules, watts-hora, quilowatts-hora e BTU.',
    steps: [
      'Encontre a energia no rótulo. Muitos rótulos trazem kcal e kJ.',
      'Multiplique kcal por 4,184 para obter kJ: 250 kcal × 4,184 = 1046 kJ.',
      'Divida kJ por 4,184 para obter kcal.',
      'Ou abra o conversor de energia e escolha as duas unidades.',
    ],
    sections: [
      {
        heading: 'Caloria versus quilocaloria',
        paragraphs: [
          'Uma caloria pequena é a energia para aquecer um grama de água em um grau Celsius, cerca de 4,184 joules. A energia dos alimentos é contada em quilocalorias, 1000 calorias pequenas, e escrita Caloria com C maiúsculo ou simplesmente kcal. Quando um rótulo diz 250 calorias, quer dizer 250 kcal. O conversor de energia lista as duas, então escolha kcal para comida.',
        ],
      },
      {
        heading: 'Eletricidade',
        paragraphs: [
          'Um quilowatt-hora, a unidade da conta de luz, são exatamente 3,6 milhões de joules, ou 3600 kJ. Isso dá cerca de 860 kcal. Um aquecedor de 1000 watts funcionando por uma hora consome um kWh. O BTU, comum em ar-condicionado e aquecedores, são cerca de 1055 joules.',
        ],
      },
      {
        heading: 'Lendo rótulos de alimentos',
        paragraphs: [
          'Os rótulos podem mostrar a energia por 100 gramas e por porção, então compare na mesma base. Muitos países imprimem kJ e kcal, e a ingestão diária de referência habitual é de cerca de 2000 kcal, que são mais ou menos 8400 kJ. Se você acompanha o que come, fique em uma só unidade para que os números de embalagens diferentes somem direito.',
        ],
      },
    ],
    faqs: [
      { q: 'Quantos kJ são 100 kcal?', a: '418,4 kJ.' },
      { q: 'Quantas kcal é 1 kWh?', a: 'Cerca de 860 kcal.' },
      { q: 'Um quilojoule é o mesmo que uma quilocaloria?', a: 'Não. Uma quilocaloria é cerca de 4,18 vezes maior que um quilojoule.' },
    ],
  },
  'how-to-convert-avi-to-mp4': {
    title: 'Como converter AVI para MP4',
    description: 'Faça vídeos AVI antigos de câmeras e downloads rodarem em celulares e TVs convertendo-os para MP4 no navegador.',
    intro: 'Para converter AVI em MP4, solte o vídeo no conversor de AVI para MP4 e aperte Converter. O AVI é um formato dos anos 1990 que muitos celulares, TVs e aplicativos não abrem mais, enquanto o MP4 roda quase em qualquer lugar.',
    steps: [
      'Abra AVI para MP4 e solte seu arquivo na caixa.',
      'Aperte Converter. Na primeira vez, o navegador baixa o motor do conversor (cerca de 30 MB) e o guarda em cache.',
      'Espere a barra de progresso terminar.',
      'Baixe o MP4 e confira se ele roda no dispositivo que recusava o AVI.',
    ],
    sections: [
      {
        heading: 'Por que o AVI dá problema',
        paragraphs: [
          'O AVI foi lançado pela Microsoft no início dos anos 1990. É só um contêiner, e o vídeo dentro pode usar um de vários codecs antigos. Alguns arquivos AVI rodam perfeitamente e outros mostram tela preta ou ficam sem som em dispositivos modernos, porque o codec interno não é mais suportado. Converter reescreve o vídeo na combinação padrão H.264 e AAC usada pelo MP4.',
        ],
      },
      {
        heading: 'Clipes de câmeras antigas',
        paragraphs: [
          'Câmeras digitais, filmadoras e gravadores de tela antigos salvavam em AVI. Esses arquivos costumam ser grandes e de baixa resolução. Depois de converter, experimente Comprimir vídeo se quiser um arquivo menor para enviar, e guarde o AVI original como cópia mestre.',
        ],
      },
      {
        heading: 'Legendas e arquivos separados',
        paragraphs: [
          'Alguns downloads de AVI vêm com um arquivo de legendas separado. Converter o vídeo não os junta, e o MP4 não vai pegar as legendas sozinho. Mantenha o arquivo de legendas na mesma pasta e com o mesmo nome do novo MP4, que é o que a maioria dos players de computador procura.',
        ],
      },
    ],
    faqs: [
      { q: 'Vai funcionar com qualquer AVI?', a: 'Com a maioria. Um arquivo danificado ou um codec incomum pode falhar, e a página mostra uma mensagem clara quando não consegue ler um arquivo.' },
      { q: 'A qualidade da imagem vai melhorar?', a: 'Não. Converter não pode acrescentar detalhes que o original não tinha.' },
      { q: 'É enviado para algum lugar?', a: 'Não. É convertido na aba do seu navegador.' },
    ],
  },
  'how-to-convert-mp3-to-wav': {
    title: 'Como converter MP3 para WAV (e o que isso não conserta)',
    description: 'Transforme arquivos MP3 em WAV para editores, gravação de CD e equipamentos que querem áudio sem compressão.',
    intro: 'Para converter MP3 em WAV, solte seus arquivos MP3 no conversor de MP3 para WAV e aperte Converter. O WAV é cerca de dez vezes maior e não soa melhor, mas alguns editores, samplers e ferramentas de gravação de CD querem WAV.',
    steps: [
      'Abra MP3 para WAV e solte seus arquivos.',
      'Aperte Converter. Não há ajustes de qualidade, porque o WAV não é comprimido.',
      'Baixe o WAV, ou um ZIP para vários arquivos.',
      'Use-o no seu editor ou software de gravação.',
    ],
    sections: [
      {
        heading: 'O que isso pode e não pode fazer',
        paragraphs: [
          'Um MP3 já perdeu detalhes para ficar pequeno, e esses detalhes não podem ser recuperados. Um WAV feito a partir de um MP3 soa exatamente como o MP3, só que guardado sem compressão. O objetivo de converter é compatibilidade e edição, não qualidade.',
        ],
      },
      {
        heading: 'Por que os editores preferem WAV',
        paragraphs: [
          'Editar áudio comprimido várias vezes e salvá-lo como MP3 a cada vez acrescenta mais perda a cada salvamento. Trabalhar em WAV evita isso, e você codifica em MP3 uma única vez no fim. O WAV também é o formato que muitas ferramentas de áudio para vídeo, motores de jogos e samplers de hardware esperam.',
          'Um minuto de WAV estéreo tem cerca de 10 MB, então uma gravação longa gera um arquivo muito grande. Sugerimos manter os arquivos abaixo de cerca de 500 MB em um computador.',
        ],
      },
      {
        heading: 'Taxa de amostragem e profundidade de bits',
        paragraphs: [
          'O WAV mantém a taxa de amostragem do MP3, comumente 44,1 ou 48 kHz, e é gravado como som de 16 bits, que é o que os CDs usam. Ajustes maiores, como 24 bits, não acrescentariam nada, porque o MP3 nunca continha essa informação extra. Se sua ferramenta pedir uma taxa específica, reamostre no editor em vez de adivinhar aqui.',
        ],
      },
    ],
    faqs: [
      { q: 'Meu CD vai soar melhor a partir de um WAV?', a: 'Não. Vai soar igual ao MP3, porque o detalhe original se foi.' },
      { q: 'Quais ajustes de WAV são usados?', a: 'PCM de 16 bits na mesma taxa de amostragem do MP3, o tipo mais amplamente aceito.' },
      { q: 'É enviado para algum lugar?', a: 'Não. É convertido dentro da aba do seu navegador.' },
    ],
  },
  'how-to-convert-mp4-to-webm-for-websites': {
    title: 'Como converter MP4 para WEBM para um site',
    description: 'Faça cópias WEBM pequenas de vídeos MP4 para o seu próprio site, e saiba quando manter também o MP4.',
    intro: 'Para converter MP4 em WEBM, solte o vídeo no conversor de MP4 para WEBM e aperte Converter. O WEBM é um formato aberto criado para a web que roda em todos os grandes navegadores e costuma ser pequeno, o que o torna útil para vídeos no seu próprio site.',
    steps: [
      'Abra MP4 para WEBM e solte seu vídeo.',
      'Aperte Converter e espere a barra de progresso. Trabalho com vídeo é pesado, então mantenha os clipes curtos.',
      'Baixe o WEBM.',
      'Na sua página, liste o WEBM e o MP4 original como duas fontes dentro de uma mesma tag video para que cada navegador encontre uma que consiga rodar.',
    ],
    sections: [
      {
        heading: 'Por que oferecer dois formatos',
        paragraphs: [
          'Chrome, Firefox e Edge rodam WEBM. Alguns programas da Apple e muitos dispositivos rodam MP4 com mais confiabilidade. Uma tag video pode listar os dois arquivos e o navegador escolhe o primeiro que suporta, então oferecer os dois é a escolha mais segura para um site público.',
        ],
      },
      {
        heading: 'O que este conversor produz',
        paragraphs: [
          'Ele grava WEBM com vídeo VP8 e áudio Vorbis, que todo navegador com suporte a WEBM consegue rodar. O codificador é escolhido pela velocidade, então os arquivos saem rápido em vez de serem os menores possíveis. Para arquivos bem pequenos, encurte o clipe ou reduza antes seu tamanho com Comprimir vídeo.',
        ],
      },
      {
        heading: 'Uma incorporação simples',
        paragraphs: [
          'Na sua página, escreva uma tag video com controls e duas tags source, o WEBM primeiro com type video/webm e o MP4 depois com type video/mp4. Os navegadores usam a primeira fonte que conseguem rodar. Adicione os atributos muted e playsinline se o vídeo deve começar sozinho, já que os navegadores só permitem reprodução automática de vídeo sem som.',
        ],
      },
    ],
    faqs: [
      { q: 'WEBM é melhor que MP4?', a: 'Nenhum é melhor em todo lugar. O WEBM é aberto e pequeno; o MP4 é aceito por muito mais aplicativos e dispositivos.' },
      { q: 'Mantém o som?', a: 'Sim, como áudio Vorbis.' },
      { q: 'O vídeo é enviado?', a: 'Não. É convertido na aba do seu navegador.' },
    ],
  },
  'how-to-convert-json-to-xml-and-xml-to-json': {
    title: 'Como converter JSON para XML e XML para JSON',
    description: 'Mova dados entre JSON e XML para sistemas e feeds antigos, e veja o que acontece com atributos e listas.',
    intro: 'Para converter JSON em XML, cole o JSON no conversor de JSON para XML. Para o caminho inverso, cole o XML em XML para JSON. As chaves viram tags, os arrays viram tags repetidas, e os atributos XML aparecem como chaves começando com @.',
    steps: [
      'Cole seu JSON ou XML, ou solte o arquivo.',
      'Leia o resultado à direita. Corrija a entrada se aparecer uma mensagem de erro.',
      'Aperte Baixar ou Copiar.',
      'Confira a estrutura no sistema que vai lê-lo, principalmente listas e atributos.',
    ],
    sections: [
      {
        heading: 'Onde os formatos diferem',
        paragraphs: [
          'O XML tem atributos e texto de tag; o JSON só tem chaves e valores. Uma tag XML como <book id="1">Quack</book> vira um objeto com "@id" e "#text". Um array JSON não tem nome de tag próprio, então cada item é escrito como uma tag repetida. O XML também precisa de exatamente uma tag raiz, então um array JSON sozinho é envolvido em uma raiz com tags item.',
        ],
      },
      {
        heading: 'Texto continua sendo texto',
        paragraphs: [
          'Ao ler XML, o conversor mantém cada valor como texto, então códigos e CEPs com zeros à esquerda não são danificados. Se você precisa de números reais ou valores true e false, converta-os no seu próprio código depois da leitura.',
        ],
      },
      {
        heading: 'Nomes que causam problemas',
        paragraphs: [
          'Nomes de tags XML não podem conter espaços nem começar com um dígito, mas chaves JSON podem. Se uma chave JSON for algo como "first name" ou "2026", renomeie para first_name ou year2026 antes de converter, ou o XML será inválido. No sentido contrário, namespaces e instruções de processamento são mantidos como chaves comuns, então confira arquivos incomuns a olho.',
        ],
      },
    ],
    faqs: [
      { q: 'E os comentários XML?', a: 'O JSON não tem comentários, então eles são descartados.' },
      { q: 'Os caracteres especiais são escapados?', a: 'Sim. Caracteres como & e < são escapados para que o XML seja válido.' },
      { q: 'Os dados são enviados?', a: 'Não. São convertidos na aba do seu navegador.' },
    ],
  },
  'how-to-convert-html-to-markdown': {
    title: 'Como converter HTML para Markdown',
    description: 'Transforme uma página da web ou um trecho de HTML em Markdown limpo para anotações, READMEs e documentação.',
    intro: 'Para converter HTML em Markdown, cole o HTML no conversor de HTML para Markdown. Títulos, parágrafos, listas, links, imagens, negrito e código são mantidos, enquanto estilo e layout são descartados.',
    steps: [
      'Copie o código-fonte HTML da parte que você quer. O artigo é melhor que a página inteira.',
      'Abra HTML para Markdown e cole na caixa da esquerda.',
      'Leia o Markdown à direita e arrume qualquer espaçamento estranho.',
      'Aperte Copiar ou Baixar .md e cole nas suas anotações ou no repositório.',
    ],
    sections: [
      {
        heading: 'O que é mantido e o que se perde',
        paragraphs: [
          'O Markdown descreve a estrutura, não a aparência. Os títulos viram jogos da velha, as listas viram hifens, os links viram [texto](endereço) e o destaque vira asteriscos. Cores, fontes, colunas, scripts e tabelas de layout não têm equivalente em Markdown, então são descartados. Tabelas complexas podem sair como texto simples.',
        ],
      },
      {
        heading: 'Limpando uma página inteira',
        paragraphs: [
          'Uma página da web completa contém menus, anúncios e rodapés, que viram ruído. Copie só o elemento do artigo, ou apague antes as partes extras. Depois confira os endereços relativos de imagens e links: eles apontam para o site original, então podem precisar do endereço completo para funcionar em outro lugar.',
        ],
      },
      {
        heading: 'Código, links e imagens',
        paragraphs: [
          'Blocos de código viram blocos cercados por três crases e o código em linha é envolvido por crases simples. Os links mantêm o endereço e as imagens mantêm a origem. Listas aninhadas são recuadas com espaços. Dê uma olhada no resultado, porque um HTML incomum, como estilos em linha em todo elemento, pode deixar texto solto que você vai querer apagar.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso transformar o Markdown de volta em HTML?', a: 'Sim, com Markdown para HTML.' },
      { q: 'Mantém as tabelas?', a: 'A estrutura simples é mantida como texto. Tabelas complexas não são reconstruídas como tabelas Markdown.' },
      { q: 'Meu HTML é enviado?', a: 'Não. É convertido no seu navegador.' },
    ],
  },
};

export default guides;
