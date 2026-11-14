import type { GuideSet } from '../types';

/** Portuguese (Brazil) guides, batch 3. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-wav-to-mp3': {
    title: 'Como converter WAV para MP3 e diminuir o arquivo',
    description: 'Transforme gravações WAV grandes em arquivos MP3 pequenos e saiba qual taxa de bits escolher para voz ou música.',
    intro: 'Para converter WAV para MP3, solte o WAV no conversor, escolha uma taxa de bits (192 kbit/s é um bom padrão) e clique em "Converter". Um minuto de WAV com qualidade de CD tem cerca de 10 MB, enquanto o mesmo minuto em MP3 a 192 kbit/s tem cerca de 1,4 MB.',
    steps: [
      'Abra WAV para MP3 e solte seus arquivos. Você pode adicionar vários de uma vez.',
      'Escolha uma qualidade. 128 kbit/s serve para voz, 192 para música do dia a dia e 320 para a melhor qualidade MP3.',
      'Clique em "Converter".',
      'Baixe cada MP3, ou todos em um único ZIP.',
    ],
    sections: [
      {
        heading: 'Por que o WAV é tão grande',
        paragraphs: [
          'O WAV guarda o som bruto, sem compressão. O estéreo com qualidade de CD usa cerca de 1.411 kbit/s, mais ou menos 10 MB por minuto. O MP3 descarta detalhes que a maioria dos ouvidos não percebe e mantém cerca de um sétimo dos dados a 192 kbit/s.',
        ],
      },
      {
        heading: 'Escolhendo uma taxa de bits',
        paragraphs: [
          'Para uma reunião gravada ou um recado de voz, de 96 a 128 kbit/s é mais que suficiente e o arquivo fica minúsculo. Para música que você vai ouvir em caixas de som ou fones, de 192 a 256 é um equilíbrio sensato. Escolha 320 só para música que importa para você e para a qual você tenha espaço.',
          'O MP3 tem perdas: você não consegue voltar à qualidade do WAV original. Guarde o WAV se puder editar a gravação de novo.',
        ],
      },
      {
        heading: 'Um exemplo de gravação longa',
        paragraphs: [
          'Uma gravação de uma hora de uma aula ou reunião tem cerca de 600 MB como WAV estéreo com qualidade de CD, mas só cerca de 58 MB como MP3 a 128 kbit/s, fácil de enviar por e-mail ou guardar. Gravações em mono têm metade do tamanho do estéreo nos dois formatos, então uma gravação de voz com um microfone só fica ainda menor. Se você pretende limpar o som em um editor, edite o WAV primeiro e faça o MP3 por último.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso converter vários WAV de uma vez?', a: 'Sim. Eles são convertidos um após o outro e baixados juntos em um ZIP.' },
      { q: 'Funciona no celular?', a: 'Sim, mas gravações longas são lentas no celular. Um computador é mais rápido.' },
      { q: 'Minhas gravações são enviadas?', a: 'Não. A conversão acontece na aba do seu navegador.' },
    ],
  },
  'how-to-convert-m4a-to-mp3': {
    title: 'Como converter M4A para MP3 (gravações de voz e iTunes)',
    description: 'Transforme gravações de voz do iPhone e arquivos M4A do iTunes em MP3 para tocarem em qualquer dispositivo ou serem enviados a qualquer pessoa.',
    intro: 'Para converter M4A para MP3, solte seus arquivos M4A no conversor de M4A para MP3, escolha uma taxa de bits e clique em "Converter". As gravações de voz do iPhone e as compras do iTunes são M4A, que alguns players e sites não aceitam.',
    steps: [
      'Passe o arquivo .m4a para o seu dispositivo. As gravações de voz podem ser compartilhadas em Arquivos ou salvas no computador.',
      'Abra M4A para MP3 e solte o arquivo.',
      'Escolha uma taxa de bits. 128 kbit/s serve para voz; use 192 ou mais para música.',
      'Clique em "Converter" e baixe seu MP3.',
    ],
    sections: [
      {
        heading: 'O que é M4A',
        paragraphs: [
          'M4A é áudio comprimido com AAC dentro de um contêiner no estilo MP4. O AAC costuma soar um pouco melhor que o MP3 com o mesmo tamanho, por isso a Apple o usa. O problema é a compatibilidade: players antigos, alguns rádios de carro e muitos formulários web só conhecem MP3.',
        ],
      },
      {
        heading: 'Uma nota sobre qualidade',
        paragraphs: [
          'Passar de M4A para MP3 significa comprimir pela segunda vez um som já comprimido, o que perde um pouquinho mais. Use 192 kbit/s ou mais para música. Em gravações de voz a diferença não é perceptível. Guarde o M4A original se a qualidade importar.',
        ],
      },
      {
        heading: 'Onde encontrar seus arquivos M4A',
        paragraphs: [
          'Em um iPhone, abra Gravador de Voz, toque na gravação, toque nos três pontos e escolha Compartilhar ou Salvar em Arquivos. Em um Mac, as gravações sincronizam pelo iCloud e aparecem no app Gravador de Voz, de onde você pode arrastá-las para a área de trabalho como arquivos .m4a. A música que você importou ou comprou sem proteção também fica na pasta da sua biblioteca de músicas como arquivos .m4a.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso converter músicas protegidas do iTunes?', a: 'Não. Músicas com proteção contra cópia não podem ser abertas. Arquivos que você mesmo gravou e músicas compradas sem proteção funcionam bem.' },
      { q: 'Ele mantém o título e o artista da música?', a: 'O conversor mantém as etiquetas básicas quando consegue, mas confira o resultado no seu player.' },
      { q: 'É enviado?', a: 'Não. Roda no seu navegador.' },
    ],
  },
  'how-to-convert-flac-to-mp3': {
    title: 'Como converter FLAC para MP3 para o celular ou o carro',
    description: 'Faça cópias MP3 pequenas da sua música em FLAC para celulares e rádios de carro e guarde os originais sem perdas em segurança.',
    intro: 'Para converter FLAC para MP3, solte os arquivos no conversor de FLAC para MP3, escolha 256 ou 320 kbit/s e clique em "Converter". O FLAC não tem perdas, mas é grande e não é aceito em todo lugar, enquanto o MP3 toca em qualquer coisa.',
    steps: [
      'Abra FLAC para MP3 e solte uma faixa ou um álbum inteiro.',
      'Escolha 256 kbit/s para um bom equilíbrio ou 320 para a melhor qualidade MP3.',
      'Clique em "Converter" e espere cada faixa terminar.',
      'Baixe os arquivos MP3, ou o lote inteiro em um ZIP, e copie para o celular ou pen drive.',
    ],
    sections: [
      {
        heading: 'Sem perdas versus com perdas',
        paragraphs: [
          'O FLAC guarda cada detalhe da gravação e costuma ter cerca de metade do tamanho da mesma música em WAV. O MP3 descarta o som que a maioria dos ouvintes não vai sentir falta, então os arquivos ficam muito menores. Depois de convertido, o detalhe perdido não pode ser recuperado.',
        ],
      },
      {
        heading: 'Guarde seus arquivos FLAC',
        paragraphs: [
          'Trate o MP3 como uma cópia de viagem. Guarde os originais em FLAC para poder fazer uma nova cópia em outro formato depois. Se você só precisa que a música toque em um computador, em um celular moderno ou em bons fones, o próprio FLAC costuma funcionar e não é preciso converter.',
        ],
      },
      {
        heading: 'O que isso faz com seu armazenamento',
        paragraphs: [
          'Um álbum de 40 minutos tem de 200 a 300 MB em FLAC e cerca de 100 MB em MP3 a 320 kbit/s, então o mesmo celular comporta de duas a três vezes mais álbuns. Essa é a verdadeira razão de fazer cópias em MP3: espaço e compatibilidade, não som melhor. Se espaço não é problema e seu player aceita FLAC, não há necessidade de converter.',
        ],
      },
    ],
    faqs: [
      { q: 'Qual taxa de bits é a melhor?', a: '320 kbit/s é o máximo que o MP3 permite e é quase transparente para a maioria das pessoas. 256 é uma opção menor que poucos conseguem distinguir.' },
      { q: 'Posso converter um álbum inteiro?', a: 'Sim. Solte todas as faixas e baixe o resultado em um ZIP.' },
      { q: 'É enviado?', a: 'Não. Sua música fica no seu dispositivo.' },
    ],
  },
  'how-to-convert-opus-to-mp3': {
    title: 'Como converter áudios OPUS e OGG do WhatsApp para MP3',
    description: 'Abra áudios do WhatsApp e outros arquivos OPUS ou OGG em qualquer lugar convertendo-os para MP3 no seu navegador.',
    intro: 'Para converter um áudio OPUS para MP3, solte o arquivo no conversor de OPUS para MP3 e clique em "Converter". As mensagens de voz do WhatsApp são salvas como arquivos .opus, que muitos players e editores não conseguem abrir.',
    steps: [
      'Salve o áudio do seu aplicativo de conversa no dispositivo (compartilhe em Arquivos ou no computador).',
      'Abra OPUS para MP3 para arquivos .opus, ou OGG para MP3 para arquivos .ogg.',
      'Solte o arquivo e escolha uma taxa de bits. De 96 a 128 kbit/s é mais que suficiente para voz.',
      'Clique em "Converter" e baixe o MP3.',
    ],
    sections: [
      {
        heading: 'Por que os áudios são OPUS',
        paragraphs: [
          'O OPUS é um formato aberto moderno que deixa a fala clara em taxas de bits muito baixas, e é por isso que aplicativos de conversa o usam. Ele é guardado em um contêiner Ogg, então os arquivos são pequenos. A contrapartida é a compatibilidade: players antigos, os aplicativos de música de muitos celulares e a maioria dos editores de áudio não o reconhecem.',
        ],
      },
      {
        heading: 'Facilitando uma transcrição ou edição',
        paragraphs: [
          'Converter para MP3 permite abrir a gravação em editores comuns, anexá-la a um e-mail ou passá-la a uma ferramenta de transcrição que não aceita OPUS. Para voz, um MP3 a 128 kbit/s é mais que suficiente.',
        ],
      },
      {
        heading: 'Muitos áudios de uma vez',
        paragraphs: [
          'Se você tem uma conversa inteira de áudios, solte todos juntos e baixe os MP3 em um único ZIP. Os arquivos convertidos mantêm os nomes originais, então qualquer data ou número no nome continua com a gravação e eles seguem fáceis de ordenar.',
        ],
      },
    ],
    faqs: [
      { q: 'Qual é a diferença entre OPUS e OGG?', a: 'OGG é o contêiner e o Vorbis era seu formato de áudio original. O áudio OPUS também é guardado em um contêiner Ogg, por isso os arquivos podem parecer parecidos.' },
      { q: 'Funciona para um áudio muito longo?', a: 'Sim. Áudios de voz são pequenos, então até os longos são convertidos rápido.' },
      { q: 'Meu áudio é enviado?', a: 'Não. A conversão é feita dentro da aba do seu navegador e nada é enviado para lugar nenhum.' },
    ],
  },
  'how-to-convert-aac-to-mp3': {
    title: 'Como converter AAC para MP3',
    description: 'Converta arquivos de áudio AAC para MP3 para tocarem em players antigos, rádios de carro e sites que só aceitam MP3.',
    intro: 'Para converter AAC para MP3, solte seu arquivo .aac no conversor de AAC para MP3, escolha uma taxa de bits e clique em "Converter". O AAC é o sucessor do MP3, mas um arquivo .aac simples não é aceito em todo lugar.',
    steps: [
      'Abra AAC para MP3 e solte seus arquivos.',
      'Escolha 192 kbit/s para música do dia a dia ou 128 para voz.',
      'Clique em "Converter".',
      'Baixe o MP3, ou um ZIP se converteu vários.',
    ],
    sections: [
      {
        heading: 'AAC, M4A e MP3',
        paragraphs: [
          'O AAC é um método de compressão e costuma vir dentro de um arquivo M4A ou MP4. Um arquivo .aac puro não tem invólucro nenhum, o que o torna menos comum e menos suportado que o M4A. O MP3 é mais antigo, mas entendido por praticamente todo dispositivo.',
        ],
      },
      {
        heading: 'Qualidade',
        paragraphs: [
          'AAC e MP3 são ambos com perdas. Converter um no outro perde um pouco mais de detalhe, então escolha 192 kbit/s ou mais para música e guarde o original em AAC se você se importa com o melhor som.',
        ],
      },
      {
        heading: 'Distinguindo os tipos de arquivo',
        paragraphs: [
          'Um arquivo terminado em .aac é um fluxo puro de áudio AAC. Um arquivo terminado em .m4a guarda AAC em um invólucro que também armazena título, artista e capa, e um .mp4 pode conter áudio AAC com vídeo. Renomear um para o outro nem sempre funciona, porque o invólucro é diferente. Se um dispositivo recusar o arquivo, converter é a solução confiável, e o M4A é o melhor invólucro para manter se o dispositivo o aceitar.',
        ],
      },
    ],
    faqs: [
      { q: 'Devo usar M4A em vez disso?', a: 'Se o dispositivo aceitar, o M4A é um invólucro melhor para o AAC. Escolha MP3 quando precisar do suporte mais amplo.' },
      { q: 'Posso converter MP3 para AAC?', a: 'MP3 para M4A cria um arquivo AAC em um invólucro M4A, que a maioria dos dispositivos modernos toca.' },
      { q: 'É enviado?', a: 'Não. Fica no seu navegador.' },
    ],
  },
};

export default guides;
