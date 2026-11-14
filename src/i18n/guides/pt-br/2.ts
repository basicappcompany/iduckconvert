import type { GuideSet } from '../types';

/** Portuguese (Brazil) guides, batch 2. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-compress-a-video-to-send-it': {
    title: 'Como comprimir um vídeo para enviá-lo',
    description: 'Reduza um vídeo grande para e-mail ou aplicativos de conversa diminuindo a qualidade e a largura, sem instalar nada.',
    intro: 'Para comprimir um vídeo, abra a ferramenta Comprimir vídeo, solte-o, escolha a qualidade "Small" e uma largura de 720 pixels e clique em "Comprimir". Reduzir a largura é o que mais economiza espaço, e uma redução de 50 a 90 por cento é comum.',
    steps: [
      'Veja o tamanho que você precisa alcançar. Muitos serviços de e-mail param em 20 ou 25 MB.',
      'Abra Comprimir vídeo e solte seu arquivo. Vídeos longos de celular costumam ser os culpados.',
      'Escolha uma largura. 720 pixels fica bom na tela de um celular; 480 é ainda menor.',
      'Escolha uma qualidade. "Medium" serve para a maioria dos clipes. Escolha "Small" só quando o limite de tamanho importar mais que a aparência.',
      'Clique em "Comprimir" e compare os tamanhos de antes e depois mostrados junto com o seu download.',
    ],
    sections: [
      {
        heading: 'O que realmente deixa um vídeo grande',
        paragraphs: [
          'O tamanho depende da duração, das dimensões da imagem e do quanto o vídeo é comprimido. Uma gravação de celular em 1080p ou 4K guarda muito mais detalhe do que uma tela pequena consegue mostrar. Reduzir para 720 pixels de largura descarta um detalhe que ninguém vê e diminui o arquivo de forma drástica.',
          'Se ainda estiver grande demais, encurte o vídeo antes com Cortar vídeo. Remover o minuto de que você não precisa rende mais do que apertar o vídeo inteiro com mais força.',
        ],
      },
      {
        heading: 'Limites que você deve conhecer',
        paragraphs: [
          'Tudo roda no seu próprio dispositivo, então um arquivo muito grande pode ser lento ou ficar sem memória, principalmente no celular. Sugerimos arquivos de até 500 MB no computador e 100 MB no celular. Para um arquivo maior, use um computador.',
        ],
      },
    ],
    faqs: [
      { q: 'Comprimir reduz a qualidade?', a: 'Sim, sempre um pouco. Comprimir troca detalhe por tamanho. Guarde seu original caso queira uma versão melhor depois.' },
      { q: 'Que formato eu recebo?', a: 'Um MP4, que toca em quase todo lugar.' },
      { q: 'Posso comprimir vários vídeos de uma vez?', a: 'Sim. Eles são processados um após o outro e você pode baixá-los juntos em um ZIP.' },
    ],
  },
  'how-to-trim-a-video-without-software': {
    title: 'Como cortar um vídeo sem programas',
    description: 'Corte o começo e o fim de um vídeo no seu navegador digitando dois tempos. Sem editor para instalar e sem enviar nada.',
    intro: 'Para cortar um vídeo, abra a ferramenta Cortar vídeo, solte o arquivo, digite os tempos de início e fim e clique em "Cortar". O trecho cortado é salvo como MP4. Use segundos (90) ou minutos e segundos (1:30).',
    steps: [
      'Reproduza seu vídeo em qualquer player e anote o momento em que quer que ele comece e termine.',
      'Abra Cortar vídeo e solte o arquivo.',
      'Digite o tempo de início. Deixe em 0 para manter o começo.',
      'Digite o tempo de fim. Deixe vazio para manter tudo depois do início.',
      'Clique em "Cortar" e baixe o MP4.',
    ],
    sections: [
      {
        heading: 'Como o corte é feito',
        paragraphs: [
          'O trecho é codificado de novo depois do corte, então o início é exato ao quadro. Um corte só de cópia é mais rápido, mas só pode começar em certos pontos do vídeo, o que muitas vezes deixa um começo congelado ou preto. Recodificar demora mais, mas evita isso.',
          'Como é recodificado, a qualidade cai muito levemente. Usa-se um ajuste de alta qualidade, e a maioria das pessoas não notará a diferença.',
        ],
      },
      {
        heading: 'Digitando os tempos',
        paragraphs: [
          'Um número simples são segundos, então 90 significa um minuto e trinta. Duas partes são minutos e segundos (1:30), e três partes incluem horas (1:02:30). Decimais também funcionam, por exemplo 12,5.',
        ],
      },
      {
        heading: 'Acertando os tempos',
        paragraphs: [
          'Abra o vídeo em qualquer player que mostre o tempo, pause no momento em que quer começar e anote o tempo, depois faça o mesmo para o fim. Deixe um ou dois segundos de margem em cada ponta, porque é fácil cortar de novo, mas impossível recuperar imagens que você cortou. Se o clipe é para um GIF, alguns segundos bastam, e o Vídeo para GIF tem suas próprias caixas de início e duração, então não é preciso cortar antes.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso cortar o meio?', a: 'Não de uma só vez. Corte separadamente a parte de antes e a de depois, ou use um editor de vídeo completo para juntar trechos.' },
      { q: 'Cortar também diminui o arquivo?', a: 'Geralmente sim, porque há menos vídeo. Para economizar mais, use também Comprimir vídeo.' },
      { q: 'Meu vídeo é enviado?', a: 'Não. Tudo acontece na aba do seu navegador.' },
    ],
  },
  'how-to-convert-mov-to-mp4': {
    title: 'Como converter MOV para MP4 (vídeos de iPhone)',
    description: 'Faça vídeos MOV de iPhone e Mac tocarem no Android, no Windows e em todos os aplicativos convertendo-os para MP4 no seu navegador.',
    intro: 'Para converter MOV para MP4, abra o conversor de MOV para MP4, solte seu vídeo e clique em "Converter". O MP4 toca no Android, no Windows, em smart TVs e em todos os aplicativos sociais, então é o formato seguro para compartilhar um vídeo de iPhone.',
    steps: [
      'Passe o arquivo .mov para o computador ou celular (AirDrop, cabo ou iCloud).',
      'Abra MOV para MP4 e solte o arquivo na caixa.',
      'Clique em "Converter". Na primeira vez, seu navegador baixa o mecanismo do conversor (cerca de 30 MB), que depois fica em cache.',
      'Baixe o MP4 quando a barra de progresso terminar.',
    ],
    sections: [
      {
        heading: 'Por que os vídeos de iPhone são MOV',
        paragraphs: [
          'Os iPhones gravam no contêiner QuickTime da Apple, o MOV. Dependendo do ajuste da câmera, o vídeo dentro dele é H.264 ou o mais novo HEVC. Os dispositivos Apple lidam com os dois, mas muitos PCs com Windows, celulares Android, editores e sites não abrem vídeo HEVC sem software extra.',
          'O conversor grava vídeo H.264 padrão dentro de um invólucro MP4, aceito em quase todo lugar.',
        ],
      },
      {
        heading: 'Evite na origem',
        paragraphs: [
          'No iPhone você pode gravar em um formato mais compatível: Ajustes, Câmera, Formatos, "Mais compatível". Os arquivos ficam maiores, mas abrem em qualquer lugar sem conversão.',
        ],
      },
      {
        heading: 'Se o arquivo convertido não tocar',
        paragraphs: [
          'Primeiro confirme que o download terminou e tente outro player, como o VLC. Se um celular ou TV muito antigo ainda recusar o MP4, talvez o vídeo seja simplesmente grande ou nítido demais para ele: passe-o pelo Comprimir vídeo com 720 pixels de largura. Guarde o MOV original, porque ele contém a gravação em qualidade total e você sempre poderá fazer outro MP4 a partir dele depois.',
        ],
      },
    ],
    faqs: [
      { q: 'A qualidade vai cair?', a: 'Levemente, porque o vídeo é codificado de novo. Usa-se um ajuste de alta qualidade, então a maioria das pessoas não percebe.' },
      { q: 'Ele mantém o som?', a: 'Sim, o som é convertido para AAC, o formato de áudio usual do MP4.' },
      { q: 'É grátis para vídeos longos?', a: 'É grátis e não tem limite próprio, mas vídeos longos são lentos no celular. Sugerimos arquivos de até 500 MB no computador e 100 MB no celular.' },
    ],
  },
  'how-to-convert-mkv-to-mp4': {
    title: 'Como converter MKV para MP4',
    description: 'Faça vídeos MKV tocarem em celulares, TVs e editores convertendo-os para MP4 direto no seu navegador.',
    intro: 'Para converter MKV para MP4, abra o conversor de MKV para MP4, solte o vídeo e clique em "Converter". O MKV é um contêiner flexível que muitos celulares e TVs se recusam a tocar, enquanto o MP4 funciona em quase todo lugar.',
    steps: [
      'Abra MKV para MP4 e solte seu arquivo .mkv na caixa.',
      'Clique em "Converter" e espere a barra de progresso.',
      'Baixe o MP4 e teste no dispositivo que não tocava o MKV.',
    ],
    sections: [
      {
        heading: 'O que é o MKV',
        paragraphs: [
          'O MKV (Matroska) é um contêiner, uma caixa que pode guardar vídeo, várias faixas de áudio, legendas e capítulos. É popular para downloads e backups de Blu-ray por ser muito flexível, mas galerias de celular, muitas TVs e editores não o suportam.',
        ],
      },
      {
        heading: 'O que esperar',
        paragraphs: [
          'O vídeo e o áudio principais são convertidos para o padrão MP4. Não conte com faixas de áudio extras, legendas ou capítulos passando para o novo arquivo. Se um arquivo depende de uma faixa de legenda específica, confira o MP4 antes de apagar o MKV.',
          'MKVs grandes, como filmes inteiros, são pesados de converter em um navegador. Sugerimos arquivos de até 500 MB no computador. Para filmes, um conversor de desktop será mais rápido.',
        ],
      },
      {
        heading: 'Tocando MKV sem converter',
        paragraphs: [
          'Alguns players abrem MKV diretamente, entre eles o VLC no computador e muitos aplicativos de mídia em celulares e smart TVs, então converter só é necessário quando um dispositivo específico recusa o arquivo. Se você quer manter exatamente todas as legendas e faixas de áudio, um player com suporte a MKV é melhor resposta do que converter.',
        ],
      },
    ],
    faqs: [
      { q: 'Por que não simplesmente renomear .mkv para .mp4?', a: 'Renomear muda só o rótulo. O conteúdo continua sendo MKV, então os players que não leem MKV continuam falhando. O arquivo precisa ser convertido.' },
      { q: 'A qualidade será a mesma?', a: 'Quase. O vídeo é codificado de novo com um ajuste de alta qualidade, então há uma pequena perda.' },
      { q: 'O arquivo é enviado?', a: 'Não. Ele é convertido dentro da aba do seu navegador.' },
    ],
  },
  'how-to-convert-webm-to-mp4': {
    title: 'Como converter WEBM para MP4',
    description: 'Transforme vídeos WEBM e gravações de tela em MP4 para abrirem em editores, TVs e galerias de celular.',
    intro: 'Para converter WEBM para MP4, solte o arquivo no conversor de WEBM para MP4 e clique em "Converter". Os navegadores tocam WEBM sem problema, mas muitos editores, TVs e galerias de celular só aceitam MP4.',
    steps: [
      'Abra WEBM para MP4 e solte seu arquivo na caixa.',
      'Clique em "Converter" e espere a barra de progresso terminar.',
      'Baixe o MP4 e use onde o WEBM foi recusado.',
    ],
    sections: [
      {
        heading: 'De onde vêm os arquivos WEBM',
        paragraphs: [
          'Gravadores de tela do navegador, alguns baixadores online e muitos vídeos de sites usam WEBM, um formato aberto feito para a web. Ele é pequeno e toca em todos os navegadores, mas editores de desktop, TVs, consoles de jogos e aplicativos de fotos de celular muitas vezes não o reconhecem.',
        ],
      },
      {
        heading: 'Indo na outra direção',
        paragraphs: [
          'Se você quer um vídeo pequeno para o seu próprio site, o WEBM é uma boa escolha e o MP4 para WEBM faz a conversão inversa. Para compartilhar com outras pessoas, o MP4 é o formato mais seguro.',
        ],
      },
      {
        heading: 'Onde o WEBM funciona e onde não funciona',
        paragraphs: [
          'Chrome, Firefox e Edge tocam WEBM diretamente, e softwares recentes da Apple o suportam em muitos casos, mas o suporte é irregular. Editores de vídeo de desktop, TVs, consoles de jogos e galerias de celular geralmente aceitam MP4 e podem não aceitar WEBM de jeito nenhum. Quando você não sabe o que vai abrir o arquivo, o MP4 é o formato que funciona. Se você só vai assistir em um navegador, o WEBM serve do jeito que está e converter não muda nada de útil.',
        ],
      },
    ],
    faqs: [
      { q: 'O som será mantido?', a: 'Sim. O áudio do WEBM é convertido para AAC no MP4.' },
      { q: 'Por que o MP4 é maior?', a: 'O WEBM comprime muito bem, então o MP4 costuma ser um pouco maior com qualidade parecida. Use Comprimir vídeo se precisar dele menor.' },
      { q: 'Funciona para gravações de tela?', a: 'Sim. Gravações de ferramentas do navegador são convertidas como qualquer outro arquivo WEBM.' },
    ],
  },
};

export default guides;
