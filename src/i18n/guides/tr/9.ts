import type { GuideSet } from '../types';

/** Turkish guides, batch 9. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-calories-to-kilojoules': {
    title: 'Kalori kilojul ve kWh’ye nasıl dönüştürülür',
    description: 'Yiyecek kalorilerini (kcal) kilojula ve elektrik birimlerine çevirin; bir Kalorinin neden bir kalori olmadığını öğrenin.',
    intro: 'Kilokaloriyi kilojula dönüştürmek için 4,184 ile çarpın. Böylece 2000 kcal 8368 kJ eder. Bir yiyecek etiketindeki kcal değeri, insanların Kalori dediği şeydir. Enerji dönüştürücüsü ayrıca joule, watt saat, kilowatt saat ve BTU verir.',
    steps: [
      'Etiketteki enerjiyi bulun. Birçok etiket hem kcal hem kJ verir.',
      'kJ elde etmek için kcal’yi 4,184 ile çarpın: 250 kcal × 4,184 = 1046 kJ.',
      'kcal elde etmek için kJ’yi 4,184’e bölün.',
      'Ya da Enerji dönüştürücüsünü açın ve iki birimi seçin.',
    ],
    sections: [
      {
        heading: 'Kalori ile kilokalori',
        paragraphs: [
          'Küçük bir kalori, bir gram suyu bir santigrat derece ısıtmak için gereken enerjidir, yaklaşık 4,184 joule. Yiyecek enerjisi 1000 küçük kalori olan kilokalori ile sayılır ve büyük harfli Kalori ya da yalnızca kcal diye yazılır. Bir etiket 250 kalori dediğinde 250 kcal demek istemiştir. Enerji dönüştürücüsü ikisini de listeler; yiyecek için kcal seçin.',
        ],
      },
      {
        heading: 'Elektrik',
        paragraphs: [
          'Elektrik faturasındaki birim olan bir kilowatt saat tam 3,6 milyon joule, yani 3600 kJ eder. Bu yaklaşık 860 kcal demektir. Bir saat çalışan 1000 watt’lık bir ısıtıcı bir kWh harcar. Klimalarda ve ısıtıcılarda yaygın olan BTU yaklaşık 1055 joule’dür.',
        ],
      },
      {
        heading: 'Gıda etiketlerini okumak',
        paragraphs: [
          'Etiketler enerjiyi 100 gram ve porsiyon başına gösterebilir, bu yüzden aynı esasta karşılaştırın. Birçok ülke hem kJ hem kcal basar ve olağan günlük referans alım yaklaşık 2000 kcal, yani kabaca 8400 kJ’dir. Yediklerinizi takip ediyorsanız, farklı paketlerdeki sayıların düzgün toplanması için tek bir birime bağlı kalın.',
        ],
      },
    ],
    faqs: [
      { q: '100 kcal kaç kJ eder?', a: '418,4 kJ.' },
      { q: '1 kWh kaç kcal eder?', a: 'Yaklaşık 860 kcal.' },
      { q: 'Kilojul kilokaloriyle aynı mı?', a: 'Hayır. Bir kilokalori bir kilojuldan yaklaşık 4,18 kat büyüktür.' },
    ],
  },
  'how-to-convert-avi-to-mp4': {
    title: 'AVI MP4’e nasıl dönüştürülür',
    description: 'Kameralardan ve indirmelerden gelen eski AVI videoları tarayıcınızda MP4’e çevirerek telefonlarda ve televizyonlarda oynatın.',
    intro: 'AVI’yi MP4’e dönüştürmek için videoyu AVI’den MP4’e dönüştürücüsüne bırakın ve Dönüştür’e basın. AVI, birçok telefonun, televizyonun ve uygulamanın artık açmadığı 1990’lardan kalma bir biçimdir; MP4 ise neredeyse her yerde oynar.',
    steps: [
      'AVI’den MP4’e aracını açın ve dosyanızı kutuya bırakın.',
      'Dönüştür’e basın. İlk seferde tarayıcınız dönüştürücü motorunu (yaklaşık 30 MB) indirir ve önbelleğe alır.',
      'İlerleme çubuğunun bitmesini bekleyin.',
      'MP4’ü indirin ve AVI’yi reddeden cihazda oynayıp oynamadığını kontrol edin.',
    ],
    sections: [
      {
        heading: 'AVI neden sorun çıkarır',
        paragraphs: [
          'AVI, Microsoft tarafından 1990’ların başında tanıtıldı. Yalnızca bir kapsayıcıdır ve içindeki video, birçok eski kodekten biri olabilir. Bazı AVI dosyaları kusursuz oynar, bazıları modern cihazlarda siyah ekran gösterir ya da sessiz kalır, çünkü içindeki kodek artık desteklenmez. Dönüştürme, videoyu MP4’ün kullandığı standart H.264 ve AAC birleşiminde yeniden yazar.',
        ],
      },
      {
        heading: 'Eski kamera klipleri',
        paragraphs: [
          'Eski dijital kameralar, video kameralar ve ekran kaydediciler AVI olarak kaydederdi. Bu dosyalar çoğunlukla büyük ve düşük çözünürlüklüdür. Dönüştürdükten sonra göndermek için daha küçük bir dosya istiyorsanız Video sıkıştır’ı deneyin ve asıl AVI’yi ana kopya olarak saklayın.',
        ],
      },
      {
        heading: 'Altyazılar ve ayrı dosyalar',
        paragraphs: [
          'Bazı AVI indirmeleri ayrı bir altyazı dosyasıyla gelir. Videoyu dönüştürmek bunları birleştirmez ve MP4 altyazıları kendiliğinden almaz. Altyazı dosyasını aynı klasörde, yeni MP4 ile aynı adla tutun; çoğu masaüstü oynatıcı bunu arar.',
        ],
      },
    ],
    faqs: [
      { q: 'Her AVI’de çalışır mı?', a: 'Çoğunda. Hasarlı bir dosya ya da alışılmadık bir kodek başarısız olabilir ve sayfa bir dosyayı okuyamadığında açık bir ileti gösterir.' },
      { q: 'Görüntü kalitesi artar mı?', a: 'Hayır. Dönüştürme, aslında olmayan ayrıntıyı ekleyemez.' },
      { q: 'Yükleniyor mu?', a: 'Hayır. Tarayıcı sekmenizde dönüştürülür.' },
    ],
  },
  'how-to-convert-mp3-to-wav': {
    title: 'MP3 WAV’a nasıl dönüştürülür (ve neyi düzeltmez)',
    description: 'MP3 dosyalarını düzenleyiciler, CD yazma ve sıkıştırılmamış ses isteyen donanımlar için WAV’a çevirin.',
    intro: 'MP3’ü WAV’a dönüştürmek için MP3 dosyalarınızı MP3’ten WAV’a dönüştürücüsüne bırakın ve Dönüştür’e basın. WAV yaklaşık on kat büyüktür ve daha iyi duyulmaz, ama bazı düzenleyiciler, örnekleyiciler ve CD yazma araçları WAV ister.',
    steps: [
      'MP3’ten WAV’a aracını açın ve dosyalarınızı bırakın.',
      'Dönüştür’e basın. WAV sıkıştırılmamış olduğu için kalite ayarı yoktur.',
      'WAV’ı indirin; birkaç dosya için ZIP indirin.',
      'Düzenleyicinizde ya da yazma yazılımınızda kullanın.',
    ],
    sections: [
      {
        heading: 'Neler yapabilir, neler yapamaz',
        paragraphs: [
          'Bir MP3 küçük olmak için zaten ayrıntı kaybetmiştir ve bu ayrıntı geri getirilemez. Bir MP3’ten yapılmış WAV, MP3 ile tamamen aynı duyulur; yalnızca sıkıştırmasız saklanır. Dönüştürmenin amacı kalite değil, uyumluluk ve düzenlemedir.',
        ],
      },
      {
        heading: 'Düzenleyiciler neden WAV’ı tercih eder',
        paragraphs: [
          'Sıkıştırılmış sesi tekrar tekrar düzenleyip her seferinde MP3 olarak kaydetmek, her kayıtta daha fazla kayıp ekler. WAV içinde çalışmak bunu önler ve sonunda yalnızca bir kez MP3’e kodlarsınız. WAV ayrıca birçok video için ses aracının, oyun motorunun ve donanım örnekleyicisinin beklediği biçimdir.',
          'Bir dakikalık stereo WAV yaklaşık 10 MB’dir, bu yüzden uzun bir kayıt çok büyük bir dosya yapar. Bilgisayarda dosyaları yaklaşık 500 MB altında tutmanızı öneririz.',
        ],
      },
      {
        heading: 'Örnekleme hızı ve bit derinliği',
        paragraphs: [
          'WAV, MP3’ün örnekleme hızını korur, genellikle 44,1 ya da 48 kHz, ve CD’lerin kullandığı 16 bit ses olarak yazılır. 24 bit gibi daha yüksek ayarlar hiçbir şey katmaz, çünkü MP3 o ek bilgiyi hiç içermedi. Aracınız belirli bir örnekleme hızı istiyorsa burada tahmin etmek yerine düzenleyicide yeniden örnekleyin.',
        ],
      },
    ],
    faqs: [
      { q: 'CD’m WAV’dan daha iyi mi duyulur?', a: 'Hayır. MP3 ile aynı duyulur, çünkü asıl ayrıntı gitti.' },
      { q: 'Hangi WAV ayarları kullanılır?', a: 'MP3 ile aynı örnekleme hızında 16 bit PCM, en yaygın kabul gören tür.' },
      { q: 'Yükleniyor mu?', a: 'Hayır. Tarayıcı sekmenizin içinde dönüştürülür.' },
    ],
  },
  'how-to-convert-mp4-to-webm-for-websites': {
    title: 'Bir web sitesi için MP4 WEBM’e nasıl dönüştürülür',
    description: 'Kendi siteniz için MP4 videolarının küçük WEBM kopyalarını yapın ve MP4’ü ne zaman da saklamanız gerektiğini öğrenin.',
    intro: 'MP4’ü WEBM’e dönüştürmek için videoyu MP4’ten WEBM’e dönüştürücüsüne bırakın ve Dönüştür’e basın. WEBM, web için geliştirilmiş, tüm büyük tarayıcılarda oynayan ve genellikle küçük olan açık bir biçimdir; bu da onu kendi sitenizdeki videolar için kullanışlı kılar.',
    steps: [
      'MP4’ten WEBM’e aracını açın ve videonuzu bırakın.',
      'Dönüştür’e basın ve ilerleme çubuğunu bekleyin. Video işi ağırdır, bu yüzden klipleri kısa tutun.',
      'WEBM’i indirin.',
      'Sayfanızda, her tarayıcının oynatabileceği birini bulması için WEBM ile asıl MP4’ü tek bir video etiketi içinde iki kaynak olarak listeleyin.',
    ],
    sections: [
      {
        heading: 'Neden iki biçim sunulur',
        paragraphs: [
          'Chrome, Firefox ve Edge WEBM oynatır. Bazı Apple yazılımları ve birçok cihaz MP4’ü daha güvenilir oynatır. Bir video etiketi iki dosyayı da listeleyebilir ve tarayıcı desteklediği ilkini seçer; bu yüzden ikisini de sunmak herkese açık bir site için en güvenli seçimdir.',
        ],
      },
      {
        heading: 'Bu dönüştürücü ne üretir',
        paragraphs: [
          'VP8 video ve Vorbis ses içeren WEBM yazar; WEBM destekleyen her tarayıcı bunu oynatabilir. Kodlayıcı hız için seçilmiştir, bu yüzden dosyalar mümkün olan en küçük değil, hızlı üretilen dosyalardır. Çok küçük dosyalar için klibi kısaltın ya da önce Video sıkıştır ile boyutunu düşürün.',
        ],
      },
      {
        heading: 'Basit bir gömme',
        paragraphs: [
          'Sayfanızda controls içeren bir video etiketi ve iki source etiketi yazın; önce type video/webm olan WEBM, sonra type video/mp4 olan MP4. Tarayıcılar oynatabildikleri ilk kaynağı kullanır. Video kendiliğinden başlayacaksa muted ve playsinline özniteliklerini ekleyin, çünkü tarayıcılar otomatik oynatmaya yalnızca sessiz videoda izin verir.',
        ],
      },
    ],
    faqs: [
      { q: 'WEBM MP4’ten daha mı iyi?', a: 'Hiçbiri her yerde daha iyi değil. WEBM açık ve küçüktür; MP4 çok daha fazla uygulama ve cihaz tarafından kabul edilir.' },
      { q: 'Sesi korur mu?', a: 'Evet, Vorbis ses olarak.' },
      { q: 'Video yükleniyor mu?', a: 'Hayır. Tarayıcı sekmenizde dönüştürülür.' },
    ],
  },
  'how-to-convert-json-to-xml-and-xml-to-json': {
    title: 'JSON XML’e ve XML JSON’a nasıl dönüştürülür',
    description: 'Eski sistemler ve beslemeler için veriyi JSON ile XML arasında taşıyın; öznitelikler ve listelere ne olduğunu öğrenin.',
    intro: 'JSON’u XML’e dönüştürmek için JSON’u JSON’dan XML’e dönüştürücüsüne yapıştırın. Diğer yönde XML’i XML’den JSON’a aracına yapıştırın. Anahtarlar etiket olur, diziler tekrarlanan etiketler olur ve XML öznitelikleri @ ile başlayan anahtarlar olarak görünür.',
    steps: [
      'JSON ya da XML’inizi yapıştırın veya dosyayı bırakın.',
      'Sonucu sağda okuyun. Hata iletisi çıkarsa girdiyi düzeltin.',
      'İndir ya da Kopyala’ya basın.',
      'Yapıyı onu okuyacak sistemde, özellikle listeleri ve öznitelikleri, kontrol edin.',
    ],
    sections: [
      {
        heading: 'Biçimlerin ayrıldığı yerler',
        paragraphs: [
          'XML’de öznitelikler ve etiket metni vardır; JSON’da yalnızca anahtarlar ve değerler. <book id="1">Quack</book> gibi bir XML etiketi "@id" ve "#text" içeren bir nesne olur. Bir JSON dizisinin kendi etiket adı yoktur, bu yüzden her öğe tekrarlanan bir etiket olarak yazılır. XML ayrıca tam olarak bir kök etiket ister, bu yüzden tek başına bir JSON dizisi item etiketleri olan bir köke sarılır.',
        ],
      },
      {
        heading: 'Metin metin kalır',
        paragraphs: [
          'XML okurken dönüştürücü her değeri metin olarak tutar, böylece başında sıfır olan kodlar ve posta kodları zarar görmez. Gerçek sayılara ya da true ve false değerlerine ihtiyacınız varsa bunları okuduktan sonra kendi kodunuzda dönüştürün.',
        ],
      },
      {
        heading: 'Sorun çıkaran adlar',
        paragraphs: [
          'XML etiket adları boşluk içeremez ve rakamla başlayamaz, ama JSON anahtarları bunu yapabilir. Bir JSON anahtarı "first name" ya da "2026" gibiyse dönüştürmeden önce first_name veya year2026 olarak yeniden adlandırın, yoksa XML geçersiz olur. Öbür yönde ad alanları ve işleme yönergeleri sıradan anahtarlar olarak korunur, bu yüzden alışılmadık dosyaları gözle kontrol edin.',
        ],
      },
    ],
    faqs: [
      { q: 'XML yorumlarına ne olur?', a: 'JSON’da yorum yoktur, bu yüzden atılırlar.' },
      { q: 'Özel karakterler kaçışlanır mı?', a: 'Evet. & ve < gibi karakterler, XML geçerli olsun diye kaçışlanır.' },
      { q: 'Veri yükleniyor mu?', a: 'Hayır. Tarayıcı sekmenizde dönüştürülür.' },
    ],
  },
  'how-to-convert-html-to-markdown': {
    title: 'HTML Markdown’a nasıl dönüştürülür',
    description: 'Bir web sayfasını ya da HTML parçasını notlar, README dosyaları ve belgeler için temiz Markdown’a çevirin.',
    intro: 'HTML’yi Markdown’a dönüştürmek için HTML’yi HTML’den Markdown’a dönüştürücüsüne yapıştırın. Başlıklar, paragraflar, listeler, bağlantılar, görseller, kalın yazı ve kod aktarılır; stil ve düzen atılır.',
    steps: [
      'İstediğiniz bölümün HTML kaynağını kopyalayın. Makale, tüm sayfadan daha iyidir.',
      'HTML’den Markdown’a aracını açın ve soldaki kutuya yapıştırın.',
      'Sağdaki Markdown’ı okuyun ve tuhaf boşlukları düzeltin.',
      'Kopyala ya da .md indir’e basın ve notlarınıza veya depoya yapıştırın.',
    ],
    sections: [
      {
        heading: 'Neler korunur, neler kaybolur',
        paragraphs: [
          'Markdown görünümü değil yapıyı anlatır. Başlıklar diyez işaretleri, listeler tire, bağlantılar [metin](adres) ve vurgu yıldız olur. Renkler, yazı tipleri, sütunlar, betikler ve düzen tabloları Markdown’da karşılık bulmaz, bu yüzden atılır. Karmaşık tablolar düz metin olarak çıkabilir.',
        ],
      },
      {
        heading: 'Bütün bir sayfayı temizlemek',
        paragraphs: [
          'Tam bir web sayfası menüler, reklamlar ve alt bilgiler içerir ve bunlar gürültüye dönüşür. Yalnızca makale öğesini kopyalayın ya da fazla kısımları önce silin. Sonra göreli görsel ve bağlantı adreslerini kontrol edin: bunlar asıl siteyi gösterir, bu yüzden başka yerde çalışmak için tam adrese ihtiyaç duyabilirler.',
        ],
      },
      {
        heading: 'Kod, bağlantılar ve görseller',
        paragraphs: [
          'Kod blokları üç ters tırnakla çevrili bloklar olur ve satır içi kod tek ters tırnakla sarılır. Bağlantılar adreslerini, görseller kaynaklarını korur. İç içe listeler boşlukla girintilenir. Sonuca bir kez göz atın, çünkü her öğede satır içi stiller gibi alışılmadık HTML, silmek isteyeceğiniz başıboş metin bırakabilir.',
        ],
      },
    ],
    faqs: [
      { q: 'Markdown’ı tekrar HTML’ye çevirebilir miyim?', a: 'Evet, Markdown’dan HTML’ye ile.' },
      { q: 'Tabloları korur mu?', a: 'Basit yapı metin olarak korunur. Karmaşık tablolar Markdown tablosu olarak yeniden kurulmaz.' },
      { q: 'HTML’m yükleniyor mu?', a: 'Hayır. Tarayıcınızda dönüştürülür.' },
    ],
  },
};

export default guides;
