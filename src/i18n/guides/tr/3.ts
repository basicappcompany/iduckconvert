import type { GuideSet } from '../types';

/** Turkish guides, batch 3. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-wav-to-mp3': {
    title: 'WAV MP3’e nasıl dönüştürülür ve dosya nasıl küçültülür',
    description: 'Büyük WAV kayıtlarını küçük MP3 dosyalarına çevirin ve konuşma ya da müzik için hangi bit hızını seçeceğinizi öğrenin.',
    intro: 'WAV’ı MP3’e dönüştürmek için WAV’ı dönüştürücüye bırakın, bir bit hızı seçin (192 kbit/s iyi bir varsayılandır) ve "Dönüştür" düğmesine basın. CD kalitesinde bir dakikalık WAV yaklaşık 10 MB’tır; aynı dakika 192 kbit/s MP3 olarak yaklaşık 1,4 MB olur.',
    steps: [
      'WAV’dan MP3’e aracını açın ve dosyalarınızı bırakın. Aynı anda birkaç tane ekleyebilirsiniz.',
      'Bir kalite seçin. 128 kbit/s konuşma için, 192 günlük müzik için ve 320 en iyi MP3 kalitesi için uygundur.',
      '"Dönüştür" düğmesine basın.',
      'Her MP3’ü indirin ya da hepsini tek bir ZIP olarak indirin.',
    ],
    sections: [
      {
        heading: 'WAV neden bu kadar büyük',
        paragraphs: [
          'WAV ham, sıkıştırılmamış sesi saklar. CD kalitesinde stereo yaklaşık 1411 kbit/s kullanır, yani kabaca dakikada 10 MB. MP3, çoğu kulağın duyamadığı ayrıntıyı atar ve 192 kbit/s’de verinin yaklaşık yedide birini tutar.',
        ],
      },
      {
        heading: 'Bit hızı seçmek',
        paragraphs: [
          'Kaydedilmiş bir toplantı ya da ses notu için 96 ile 128 kbit/s fazlasıyla yeter ve dosya küçücük kalır. Hoparlör ya da kulaklıkla dinleyeceğiniz müzik için 192 ile 256 mantıklı bir denge. 320’yi yalnızca önemsediğiniz ve yeri olan müzik için seçin.',
          'MP3 kayıplıdır: onu özgün WAV kalitesine geri çeviremezsiniz. Kaydı yeniden düzenleme ihtimaliniz varsa WAV’ı saklayın.',
        ],
      },
      {
        heading: 'Uzun bir kayıt örneği',
        paragraphs: [
          'Bir ders ya da toplantının bir saatlik kaydı, CD kalitesinde stereo WAV olarak yaklaşık 600 MB, ama 128 kbit/s MP3 olarak yalnızca yaklaşık 58 MB’tır; bu da e-postayla göndermesi ya da saklaması kolay bir boyuttur. Mono kayıtlar her iki biçimde de stereonun yarısı kadardır, yani tek mikrofonlu bir ses kaydı daha da küçüktür. Sesi bir düzenleyicide temizlemeyi planlıyorsanız önce WAV’ı düzenleyin, MP3’ü en son yapın.',
        ],
      },
    ],
    faqs: [
      { q: 'Birçok WAV dosyasını aynı anda dönüştürebilir miyim?', a: 'Evet. Birbiri ardına dönüştürülür ve birlikte ZIP olarak indirilir.' },
      { q: 'Telefonda çalışır mı?', a: 'Evet, ama uzun kayıtlar telefonda yavaştır. Bilgisayar daha hızlıdır.' },
      { q: 'Kayıtlarım yükleniyor mu?', a: 'Hayır. Dönüşüm tarayıcı sekmenizde gerçekleşir.' },
    ],
  },
  'how-to-convert-m4a-to-mp3': {
    title: 'M4A MP3’e nasıl dönüştürülür (ses notları ve iTunes)',
    description: 'iPhone Ses Notları’nı ve iTunes M4A dosyalarını MP3’e çevirin; her cihazda çalsın ya da herkese gönderilebilsin.',
    intro: 'M4A’yı MP3’e dönüştürmek için M4A dosyalarınızı M4A’dan MP3’e dönüştürücüsüne bırakın, bir bit hızı seçin ve "Dönüştür" düğmesine basın. iPhone Ses Notları ve iTunes satın alımları M4A’dır; bazı oynatıcılar ve web siteleri bunu kabul etmez.',
    steps: [
      '.m4a dosyasını cihazınıza alın. Ses Notları Dosyalar’a paylaşılabilir ya da bilgisayarınıza kaydedilebilir.',
      'M4A’dan MP3’e aracını açın ve dosyayı bırakın.',
      'Bir bit hızı seçin. 128 kbit/s konuşmaya uyar; müzik için 192 veya daha fazlasını kullanın.',
      '"Dönüştür" düğmesine basın ve MP3’ünüzü indirin.',
    ],
    sections: [
      {
        heading: 'M4A nedir',
        paragraphs: [
          'M4A, MP4 tarzı bir kabın içinde AAC ile sıkıştırılmış sestir. AAC aynı boyutta genellikle MP3’ten biraz daha iyi duyulur, Apple’ın onu kullanmasının nedeni budur. Sorun uyumluluktur: eski oynatıcılar, bazı araç teypleri ve birçok web formu yalnızca MP3’ü tanır.',
        ],
      },
      {
        heading: 'Kalite üzerine bir not',
        paragraphs: [
          'M4A’dan MP3’e geçmek, zaten sıkıştırılmış sesi ikinci kez sıkıştırmak demektir ve bu çok az daha kayıp yaratır. Müzik için 192 kbit/s veya üzerini kullanın. Ses kayıtlarında fark hissedilmez. Kalite önemliyse özgün M4A’yı saklayın.',
        ],
      },
      {
        heading: 'M4A dosyalarınızı nerede bulursunuz',
        paragraphs: [
          'Bir iPhone’da Ses Notları’nı açın, kayda dokunun, üç noktaya dokunun ve Paylaş ya da Dosyalar’a Kaydet’i seçin. Mac’te kayıtlar iCloud ile eşitlenir ve Ses Notları uygulamasında görünür; oradan .m4a dosyaları olarak masaüstüne sürükleyebilirsiniz. İçe aktardığınız ya da korumasız satın aldığınız müzik de müzik kitaplığı klasörünüzde .m4a dosyaları olarak durur.',
        ],
      },
    ],
    faqs: [
      { q: 'Korumalı iTunes şarkılarını dönüştürebilir miyim?', a: 'Hayır. Kopya korumalı şarkılar açılamaz. Kendi kaydettiğiniz dosyalar ve korumasız satın alınan müzik sorunsuz çalışır.' },
      { q: 'Şarkı adını ve sanatçıyı korur mu?', a: 'Dönüştürücü mümkün olduğunda temel etiketleri korur, ama sonucu oynatıcınızda kontrol edin.' },
      { q: 'Yükleniyor mu?', a: 'Hayır. Tarayıcınızda çalışır.' },
    ],
  },
  'how-to-convert-flac-to-mp3': {
    title: 'Telefonunuz ya da arabanız için FLAC MP3’e nasıl dönüştürülür',
    description: 'FLAC müziğinizin telefonlar ve araç teypleri için küçük MP3 kopyalarını yapın, kayıpsız özgün dosyaları da güvende tutun.',
    intro: 'FLAC’ı MP3’e dönüştürmek için dosyaları FLAC’tan MP3’e dönüştürücüsüne bırakın, 256 veya 320 kbit/s seçin ve "Dönüştür" düğmesine basın. FLAC kayıpsızdır ama büyüktür ve her yerde kabul edilmez; MP3 ise her şeyde çalar.',
    steps: [
      'FLAC’tan MP3’e aracını açın ve bir parça ya da bütün bir albüm bırakın.',
      'İyi bir denge için 256 kbit/s, en iyi MP3 kalitesi için 320 seçin.',
      '"Dönüştür" düğmesine basın ve her parçanın bitmesini bekleyin.',
      'MP3 dosyalarını ya da tüm grubu ZIP olarak indirin ve telefonunuza veya USB belleğinize kopyalayın.',
    ],
    sections: [
      {
        heading: 'Kayıpsız ve kayıplı',
        paragraphs: [
          'FLAC kaydın her ayrıntısını korur ve aynı müziğin WAV hâlinin genellikle yaklaşık yarısı kadardır. MP3, çoğu dinleyicinin özlemeyeceği sesi atar, bu yüzden dosyalar çok daha küçüktür. Dönüştürüldükten sonra kaybolan ayrıntı geri alınamaz.',
        ],
      },
      {
        heading: 'FLAC dosyalarınızı saklayın',
        paragraphs: [
          'MP3’ü bir seyahat kopyası olarak görün. Daha sonra başka bir biçimde yeni kopya yapabilmek için FLAC özgünlerini saklayın. Müziğinizin yalnızca bilgisayarda, modern bir telefonda ya da iyi bir kulaklıkta çalmasını istiyorsanız, FLAC çoğu zaman kendi başına çalışır ve dönüştürmeye gerek kalmaz.',
        ],
      },
      {
        heading: 'Depolama alanınıza etkisi',
        paragraphs: [
          '40 dakikalık bir albüm FLAC olarak kabaca 200 ile 300 MB, 320 kbit/s MP3 olarak ise yaklaşık 100 MB’tır; bu yüzden aynı telefon iki üç kat daha fazla albüm tutabilir. MP3 kopyaları yapmanın gerçek nedeni budur: yer ve uyumluluk, daha iyi ses değil. Yer sorun değilse ve oynatıcınız FLAC kabul ediyorsa dönüştürmenize gerek yok.',
        ],
      },
    ],
    faqs: [
      { q: 'Hangi bit hızı en iyisi?', a: '320 kbit/s MP3’ün izin verdiği en yüksek değerdir ve çoğu insan için neredeyse saydamdır. 256, çok az kişinin ayırt edebileceği daha küçük bir seçimdir.' },
      { q: 'Bütün bir albümü dönüştürebilir miyim?', a: 'Evet. Tüm parçaları bırakın ve sonucu ZIP olarak indirin.' },
      { q: 'Yükleniyor mu?', a: 'Hayır. Müziğiniz cihazınızda kalır.' },
    ],
  },
  'how-to-convert-opus-to-mp3': {
    title: 'OPUS ve OGG ses mesajları MP3’e nasıl dönüştürülür',
    description: 'WhatsApp ses mesajlarını ve diğer OPUS ya da OGG sesleri tarayıcınızda MP3’e dönüştürerek her yerde açın.',
    intro: 'Bir OPUS ses mesajını MP3’e dönüştürmek için dosyayı OPUS’tan MP3’e dönüştürücüsüne bırakın ve "Dönüştür" düğmesine basın. WhatsApp ses mesajları .opus dosyası olarak kaydedilir; birçok oynatıcı ve düzenleyici bunu açamaz.',
    steps: [
      'Ses mesajını sohbet uygulamanızdan cihazınıza kaydedin (Dosyalar’a ya da bilgisayarınıza paylaşın).',
      '.opus dosyaları için OPUS’tan MP3’e, .ogg dosyaları için OGG’den MP3’e aracını açın.',
      'Dosyayı bırakın ve bir bit hızı seçin. Konuşma için 96 ile 128 kbit/s fazlasıyla yeter.',
      '"Dönüştür" düğmesine basın ve MP3’ü indirin.',
    ],
    sections: [
      {
        heading: 'Ses mesajları neden OPUS',
        paragraphs: [
          'OPUS, konuşmayı çok düşük bit hızlarında bile net duyuran modern açık bir biçimdir, sohbet uygulamalarının onu kullanma nedeni budur. Ogg kabı içinde saklanır, bu yüzden dosyalar küçüktür. Bedeli uyumluluktur: eski oynatıcılar, birçok telefonun müzik uygulamaları ve çoğu ses düzenleyici onu tanımaz.',
        ],
      },
      {
        heading: 'Yazıya dökmeyi veya düzenlemeyi kolaylaştırmak',
        paragraphs: [
          'MP3’e dönüştürmek kaydı yaygın düzenleyicilerde açmanıza, e-postaya eklemenize ya da OPUS kabul etmeyen bir yazıya dökme aracına vermenize olanak tanır. Konuşma için 128 kbit/s MP3 fazlasıyla yeter.',
        ],
      },
      {
        heading: 'Birçok ses mesajı bir arada',
        paragraphs: [
          'Bütün bir konuşmalık ses mesajınız varsa hepsini birlikte bırakın ve MP3’leri tek bir ZIP olarak indirin. Dönüştürülen dosyalar özgün adlarını korur, bu yüzden addaki tarih ya da numara kayıtla birlikte kalır ve sıralaması kolay olur.',
        ],
      },
    ],
    faqs: [
      { q: 'OPUS ile OGG arasındaki fark nedir?', a: 'OGG kaptır ve Vorbis onun özgün ses biçimiydi. OPUS sesi de bir Ogg kabında saklanır, bu yüzden dosyalar benzer görünebilir.' },
      { q: 'Çok uzun bir ses mesajı için çalışır mı?', a: 'Evet. Ses mesajları küçüktür, bu yüzden uzun olanlar bile hızlı dönüşür.' },
      { q: 'Ses mesajım yükleniyor mu?', a: 'Hayır. Dönüşüm tarayıcı sekmenizin içinde yapılır ve hiçbir yere bir şey gönderilmez.' },
    ],
  },
  'how-to-convert-aac-to-mp3': {
    title: 'AAC MP3’e nasıl dönüştürülür',
    description: 'AAC ses dosyalarını MP3’e dönüştürün; eski oynatıcılarda, araç teypleri ve yalnızca MP3 kabul eden web sitelerinde çalsın.',
    intro: 'AAC’yi MP3’e dönüştürmek için .aac dosyanızı AAC’den MP3’e dönüştürücüsüne bırakın, bir bit hızı seçin ve "Dönüştür" düğmesine basın. AAC, MP3’ün halefidir, ama düz bir .aac dosyası her yerde kabul edilmez.',
    steps: [
      'AAC’den MP3’e aracını açın ve dosyalarınızı bırakın.',
      'Günlük müzik için 192 kbit/s, konuşma için 128 seçin.',
      '"Dönüştür" düğmesine basın.',
      'MP3’ü indirin; birkaçını dönüştürdüyseniz ZIP indirin.',
    ],
    sections: [
      {
        heading: 'AAC, M4A ve MP3',
        paragraphs: [
          'AAC bir sıkıştırma yöntemidir ve genellikle bir M4A ya da MP4 dosyasına sarılır. Ham bir .aac dosyasının hiç sarmalayıcısı yoktur, bu da onu M4A’dan daha az yaygın ve daha az desteklenen yapar. MP3 daha eskidir ama hemen her cihaz tarafından anlaşılır.',
        ],
      },
      {
        heading: 'Kalite',
        paragraphs: [
          'AAC ve MP3 ikisi de kayıplıdır. Birini diğerine çevirmek biraz daha ayrıntı kaybettirir, bu yüzden müzik için 192 kbit/s veya üzerini seçin ve en iyi sesi önemsiyorsanız AAC özgününü saklayın.',
        ],
      },
      {
        heading: 'Dosya türlerini ayırt etmek',
        paragraphs: [
          '.aac ile biten dosya çıplak bir AAC ses akışıdır. .m4a ile biten dosya, başlığı, sanatçıyı ve kapak resmini de saklayan bir sarmalayıcı içinde AAC taşır ve bir .mp4 videoyla birlikte AAC sesi taşıyabilir. Birini diğerine yeniden adlandırmak her zaman çalışmaz, çünkü sarmalayıcı farklıdır. Bir cihaz dosyayı reddederse dönüştürmek güvenilir çözümdür; cihaz kabul ediyorsa saklanacak daha iyi sarmalayıcı M4A’dır.',
        ],
      },
    ],
    faqs: [
      { q: 'Bunun yerine M4A kullanmalı mıyım?', a: 'Cihaz kabul ediyorsa M4A, AAC için daha iyi bir sarmalayıcıdır. En geniş desteğe ihtiyaç duyduğunuzda MP3’ü seçin.' },
      { q: 'MP3’ü AAC’ye dönüştürebilir miyim?', a: 'MP3’ten M4A’ya, bir M4A sarmalayıcısında AAC dosyası üretir; çoğu modern cihaz bunu çalar.' },
      { q: 'Yükleniyor mu?', a: 'Hayır. Tarayıcınızda kalır.' },
    ],
  },
};

export default guides;
