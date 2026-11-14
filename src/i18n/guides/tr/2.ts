import type { GuideSet } from '../types';

/** Turkish guides, batch 2. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-compress-a-video-to-send-it': {
    title: 'Göndermek için video nasıl sıkıştırılır',
    description: 'Kalitesini ve genişliğini düşürerek büyük bir videoyu e-posta veya sohbet uygulamaları için küçültün, hiçbir şey kurmadan.',
    intro: 'Bir videoyu sıkıştırmak için Videoyu sıkıştır aracını açın, videoyu bırakın, "Small" kalitesini ve 720 piksel genişliği seçin, sonra "Sıkıştır" düğmesine basın. Genişliği küçültmek en çok yer kazandırır ve yüzde 50 ile 90 arası küçülme yaygındır.',
    steps: [
      'Ulaşmanız gereken boyutu kontrol edin. Birçok e-posta hizmeti 20 ile 25 MB’ta durur.',
      'Videoyu sıkıştır aracını açın ve dosyanızı bırakın. Uzun telefon videoları genellikle suçludur.',
      'Bir genişlik seçin. 720 piksel telefon ekranında iyi görünür; 480 daha da küçüktür.',
      'Bir kalite seçin. "Medium" çoğu klibe uyar. "Small"u yalnızca boyut sınırı görünümden daha önemliyse seçin.',
      '"Sıkıştır" düğmesine basın, sonra indirmenizle birlikte gösterilen öncesi ve sonrası boyutlarını karşılaştırın.',
    ],
    sections: [
      {
        heading: 'Bir videoyu gerçekte ne büyük yapar',
        paragraphs: [
          'Boyut; süreye, görüntü boyutlarına ve videonun ne kadar sıkıştırıldığına bağlıdır. 1080p veya 4K bir telefon kaydı, küçük bir ekranın gösterebileceğinden çok daha fazla ayrıntı saklar. 720 piksel genişliğe inmek kimsenin görmediği ayrıntıyı atar ve dosyayı çarpıcı biçimde küçültür.',
          'Hâlâ çok büyükse önce Videoyu kırp ile kısaltın. İhtiyacınız olmayan dakikayı çıkarmak, tüm videoyu daha sert sıkıştırmaktan iyidir.',
        ],
      },
      {
        heading: 'Bilmeniz gereken sınırlar',
        paragraphs: [
          'Her şey kendi cihazınızda çalışır, bu yüzden çok büyük bir dosya yavaş olabilir ya da bellek yetmeyebilir, özellikle telefonda. Bilgisayarda 500 MB, telefonda 100 MB altındaki dosyaları öneririz. Daha büyük dosya için bilgisayar kullanın.',
        ],
      },
    ],
    faqs: [
      { q: 'Sıkıştırmak kaliteyi düşürür mü?', a: 'Evet, her zaman biraz. Sıkıştırma ayrıntıyı boyutla takas eder. Daha sonra daha iyi bir sürüm isterseniz diye özgün dosyanızı saklayın.' },
      { q: 'Hangi biçimi alırım?', a: 'Hemen her yerde oynayan bir MP4.' },
      { q: 'Birkaç videoyu aynı anda sıkıştırabilir miyim?', a: 'Evet. Birbiri ardına çalışırlar ve hepsini birlikte ZIP olarak indirebilirsiniz.' },
    ],
  },
  'how-to-trim-a-video-without-software': {
    title: 'Yazılım olmadan video nasıl kırpılır',
    description: 'İki zaman yazarak bir videonun başını ve sonunu tarayıcınızda kesin. Kurulacak düzenleyici yok, hiçbir şey yüklenmez.',
    intro: 'Bir videoyu kırpmak için Videoyu kırp aracını açın, dosyayı bırakın, başlangıç ve bitiş zamanını yazın, sonra "Kırp" düğmesine basın. Kesilen klip MP4 olarak kaydedilir. Saniye (90) veya dakika ve saniye (1:30) kullanın.',
    steps: [
      'Videonuzu herhangi bir oynatıcıda oynatın ve başlamasını ve bitmesini istediğiniz zamanı not edin.',
      'Videoyu kırp aracını açın ve dosyayı bırakın.',
      'Başlangıç zamanını yazın. Başı korumak için 0 bırakın.',
      'Bitiş zamanını yazın. Başlangıçtan sonraki her şeyi korumak için boş bırakın.',
      '"Kırp" düğmesine basın ve MP4’ü indirin.',
    ],
    sections: [
      {
        heading: 'Kesim nasıl yapılır',
        paragraphs: [
          'Klip kesildikten sonra yeniden kodlanır, bu yüzden başlangıç kareye kadar kesindir. Yalnızca kopyalayan bir kesim daha hızlıdır ama videonun yalnızca belirli noktalarında başlayabilir, bu da çoğu zaman donmuş ya da siyah bir başlangıç bırakır. Yeniden kodlama daha uzun sürer ama bunu önler.',
          'Yeniden kodlandığı için kalite çok az düşer. Yüksek kaliteli bir ayar kullanılır ve çoğu insan farkı fark etmez.',
        ],
      },
      {
        heading: 'Zamanları yazmak',
        paragraphs: [
          'Düz bir sayı saniyedir, yani 90 bir dakika otuz saniye demektir. İki parça dakika ve saniye (1:30), üç parça ise saat (1:02:30) anlamına gelir. Ondalıklar da çalışır, örneğin 12,5.',
        ],
      },
      {
        heading: 'Zamanları doğru bulmak',
        paragraphs: [
          'Videoyu zamanı gösteren bir oynatıcıda açın, başlamak istediğiniz anda duraklatıp zamanı yazın, sonra bitiş için de aynısını yapın. Her uçta bir iki saniye pay bırakın, çünkü yeniden kırpmak kolaydır ama kestiğiniz görüntüyü geri almak imkânsızdır. Klip bir GIF içinse birkaç saniye yeter ve Videodan GIF’e aracının kendi başlangıç ve süre kutuları vardır, yani önce kırpmanız gerekmez.',
        ],
      },
    ],
    faqs: [
      { q: 'Ortayı kesebilir miyim?', a: 'Tek seferde olmaz. Öncesini ve sonrasını ayrı ayrı kırpın ya da klipleri birleştirmek için tam bir video düzenleyici kullanın.' },
      { q: 'Kırpmak dosyayı da küçültür mü?', a: 'Genellikle evet, çünkü daha az video vardır. Daha fazla kazanç için ayrıca Videoyu sıkıştır aracını kullanın.' },
      { q: 'Videom yükleniyor mu?', a: 'Hayır. Her şey tarayıcı sekmenizde olur.' },
    ],
  },
  'how-to-convert-mov-to-mp4': {
    title: 'MOV MP4’e nasıl dönüştürülür (iPhone videoları)',
    description: 'iPhone ve Mac MOV videolarını tarayıcınızda MP4’e dönüştürerek Android, Windows ve her uygulamada oynatın.',
    intro: 'MOV’u MP4’e dönüştürmek için MOV’dan MP4’e dönüştürücüsünü açın, videonuzu bırakın ve "Dönüştür" düğmesine basın. MP4 Android’de, Windows’ta, akıllı TV’lerde ve her sosyal uygulamada oynar, bu yüzden bir iPhone videosunu paylaşmak için güvenli biçimdir.',
    steps: [
      '.mov dosyasını bilgisayarınıza veya telefonunuza alın (AirDrop, kablo veya iCloud).',
      'MOV’dan MP4’e aracını açın ve dosyayı kutuya bırakın.',
      '"Dönüştür" düğmesine basın. İlk seferde tarayıcınız dönüştürücü motorunu indirir (yaklaşık 30 MB), sonra bu önbelleğe alınır.',
      'İlerleme çubuğu bitince MP4’ü indirin.',
    ],
    sections: [
      {
        heading: 'iPhone videoları neden MOV',
        paragraphs: [
          'iPhone’lar Apple’ın QuickTime kabında, yani MOV’da kayıt yapar. Kamera ayarınıza göre içindeki video H.264 ya da daha yeni HEVC’dir. Apple cihazları ikisini de işler, ancak birçok Windows bilgisayar, Android telefon, düzenleyici ve web sitesi ek yazılım olmadan HEVC videoyu açmaz.',
          'Dönüştürücü, neredeyse her yerde kabul edilen bir MP4 sarmalayıcısında standart H.264 video yazar.',
        ],
      },
      {
        heading: 'Kaynağında durdurun',
        paragraphs: [
          'iPhone’da daha uyumlu bir biçimde kayıt yapabilirsiniz: Ayarlar, Kamera, Formatlar, "En Uyumlu". Dosyalar büyür ama dönüştürmeye gerek kalmadan her yerde açılır.',
        ],
      },
      {
        heading: 'Dönüştürülen dosya oynamıyorsa',
        paragraphs: [
          'Önce indirmenin bittiğinden emin olun, sonra VLC gibi başka bir oynatıcı deneyin. Çok eski bir telefon ya da TV MP4’ü hâlâ reddediyorsa video onun için fazla büyük veya fazla keskin olabilir: Videoyu sıkıştır aracından 720 piksel genişlikle geçirin. Özgün MOV’u saklayın, çünkü tam kaliteli kaydı barındırır ve sonradan ondan yeniden MP4 yapabilirsiniz.',
        ],
      },
    ],
    faqs: [
      { q: 'Kalite düşer mi?', a: 'Hafifçe, çünkü video yeniden kodlanır. Yüksek kaliteli bir ayar kullanılır, bu yüzden çoğu insan fark etmez.' },
      { q: 'Sesi korur mu?', a: 'Evet, ses MP4’ün olağan ses biçimi olan AAC’ye dönüştürülür.' },
      { q: 'Uzun videolar için ücretsiz mi?', a: 'Ücretsizdir ve kendine ait bir sınırı yoktur, ancak uzun videolar telefonda yavaştır. Bilgisayarda 500 MB, telefonda 100 MB altındaki dosyaları öneririz.' },
    ],
  },
  'how-to-convert-mkv-to-mp4': {
    title: 'MKV MP4’e nasıl dönüştürülür',
    description: 'MKV videolarını doğrudan tarayıcınızda MP4’e dönüştürerek telefonlarda, TV’lerde ve düzenleyicilerde oynatın.',
    intro: 'MKV’yi MP4’e dönüştürmek için MKV’den MP4’e dönüştürücüsünü açın, videoyu bırakın ve "Dönüştür" düğmesine basın. MKV, birçok telefon ve TV’nin oynatmayı reddettiği esnek bir kaptır; MP4 ise hemen her yerde çalışır.',
    steps: [
      'MKV’den MP4’e aracını açın ve .mkv dosyanızı kutuya bırakın.',
      '"Dönüştür" düğmesine basın ve ilerleme çubuğunu bekleyin.',
      'MP4’ü indirin ve MKV’yi oynatmayan cihazda deneyin.',
    ],
    sections: [
      {
        heading: 'MKV nedir',
        paragraphs: [
          'MKV (Matroska) bir kaptır; video, birkaç ses kaydı, altyazı ve bölüm barındırabilen bir kutu. Çok esnek olduğu için indirmelerde ve Blu-ray yedeklerinde popülerdir, ama telefon galerileri, birçok TV ve düzenleyici onu desteklemez.',
        ],
      },
      {
        heading: 'Ne beklemeli',
        paragraphs: [
          'Ana video ve ses MP4 standardına dönüştürülür. Ek ses kayıtlarının, altyazıların veya bölümlerin geçeceğine güvenmeyin. Bir dosya belirli bir altyazı kaydına bağlıysa MKV’yi silmeden önce MP4’ü kontrol edin.',
          'Tüm filmler gibi büyük MKV dosyalarını tarayıcıda dönüştürmek ağırdır. Bilgisayarda 500 MB altındaki dosyaları öneririz. Filmler için bir masaüstü dönüştürücü daha hızlı olur.',
        ],
      },
      {
        heading: 'MKV’yi dönüştürmeden oynatmak',
        paragraphs: [
          'Bazı oynatıcılar MKV’yi doğrudan açar; bilgisayarda VLC ve telefonlardaki ve akıllı TV’lerdeki birçok medya uygulaması bunlardandır, bu yüzden dönüştürme yalnızca belirli bir cihaz dosyayı reddettiğinde gerekir. Her altyazı ve ses kaydının tam olduğu gibi kalmasını istiyorsanız, MKV destekleyen bir oynatıcı dönüştürmekten daha iyi bir yanıttır.',
        ],
      },
    ],
    faqs: [
      { q: 'Neden .mkv’yi sadece .mp4 olarak yeniden adlandırmayayım?', a: 'Yeniden adlandırma yalnızca etiketi değiştirir. İçerik hâlâ MKV’dir, bu yüzden MKV okuyamayan oynatıcılar yine başarısız olur. Dosyanın dönüştürülmesi gerekir.' },
      { q: 'Kalite aynı mı olur?', a: 'Neredeyse. Video yüksek kaliteli bir ayarla yeniden kodlanır, bu yüzden küçük bir kayıp olur.' },
      { q: 'Dosya yükleniyor mu?', a: 'Hayır. Tarayıcı sekmenizin içinde dönüştürülür.' },
    ],
  },
  'how-to-convert-webm-to-mp4': {
    title: 'WEBM MP4’e nasıl dönüştürülür',
    description: 'WEBM videolarını ve ekran kayıtlarını MP4’e çevirin; düzenleyicilerde, TV’lerde ve telefon galerilerinde açılsın.',
    intro: 'WEBM’i MP4’e dönüştürmek için dosyayı WEBM’den MP4’e dönüştürücüsüne bırakın ve "Dönüştür" düğmesine basın. Tarayıcılar WEBM’i sorunsuz oynatır, ama birçok düzenleyici, TV ve telefon galerisi yalnızca MP4 kabul eder.',
    steps: [
      'WEBM’den MP4’e aracını açın ve dosyanızı kutuya bırakın.',
      '"Dönüştür" düğmesine basın ve ilerleme çubuğunun bitmesini bekleyin.',
      'MP4’ü indirin ve WEBM’i reddeden her yerde kullanın.',
    ],
    sections: [
      {
        heading: 'WEBM dosyaları nereden gelir',
        paragraphs: [
          'Tarayıcı ekran kaydediciler, bazı çevrimiçi indiriciler ve birçok web sitesi videosu, web için yapılmış açık bir biçim olan WEBM’i kullanır. Küçüktür ve her tarayıcıda oynar, ama masaüstü düzenleyiciler, TV’ler, oyun konsolları ve telefon fotoğraf uygulamaları onu çoğu zaman tanımaz.',
        ],
      },
      {
        heading: 'Ters yönde',
        paragraphs: [
          'Kendi web siteniz için küçük bir video istiyorsanız WEBM iyi bir seçimdir ve MP4’ten WEBM’e ters dönüşümü yapar. Başkalarıyla paylaşmak için MP4 daha güvenli biçimdir.',
        ],
      },
      {
        heading: 'WEBM nerede çalışır, nerede çalışmaz',
        paragraphs: [
          'Chrome, Firefox ve Edge WEBM’i doğrudan oynatır, yeni Apple yazılımları da birçok yerde işler, ama destek eşit değildir. Masaüstü video düzenleyiciler, TV’ler, oyun konsolları ve telefon galerileri genellikle MP4 kabul eder ve WEBM’i hiç kabul etmeyebilir. Dosyayı neyin açacağından emin olmadığınızda çalışan biçim MP4’tür. Yalnızca tarayıcıda izleyecekseniz WEBM olduğu gibi iyidir ve dönüştürmek yararlı bir şey değiştirmez.',
        ],
      },
    ],
    faqs: [
      { q: 'Ses korunur mu?', a: 'Evet. WEBM sesi MP4’te AAC’ye dönüştürülür.' },
      { q: 'MP4 neden daha büyük?', a: 'WEBM çok iyi sıkıştırır, bu yüzden benzer kalitede MP4 çoğu zaman biraz daha büyüktür. Daha küçük istiyorsanız Videoyu sıkıştır aracını kullanın.' },
      { q: 'Ekran kayıtları için çalışır mı?', a: 'Evet. Tarayıcı araçlarından alınan kayıtlar diğer WEBM dosyaları gibi dönüştürülür.' },
    ],
  },
};

export default guides;
