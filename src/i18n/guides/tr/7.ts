import type { GuideSet } from '../types';

/** Turkish guides, batch 7. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-time-zones-for-a-meeting': {
    title: 'Toplantı için saat dilimleri nasıl dönüştürülür (IST, EST, GMT)',
    description: 'Hindistan, ABD, Birleşik Krallık ve daha fazlası arasında doğru toplantı saatini bulun ve yaz saati tuzağından kaçının.',
    intro: 'Bir toplantı saatini dönüştürmek için Saat dilimi dönüştürücüsünde tarihi, saati ve başlangıç diliminizi seçin, sonra istediğiniz şehirleri ekleyin. Tam tarih için yaz saatini ele alır. Hindistan (IST) yıl boyunca UTC+05:30’dur ve saatlerini asla değiştirmez.',
    steps: [
      'Saat dilimi dönüştürücüsünü açın ve toplantı tarihini seçin.',
      'Saati yazın ve yazıldığı dilimi seçin, örneğin Hindistan (Kolkata).',
      'Diğer kişilerin şehirlerini ekleyin. Her satır yerel saati ve tarihi gösterir.',
      '"next day" ya da "previous day" etiketlerini arayın, sonra saatleri herkesle paylaşın.',
    ],
    sections: [
      {
        heading: 'Yaz saati tuzağı',
        paragraphs: [
          'İki yer arasındaki fark yıl içinde değişebilir. Amerika Birleşik Devletleri saatlerini Birleşik Krallık ve Avrupa’dan farklı tarihlerde değiştirir, bu yüzden ilkbahar ve sonbaharda birkaç hafta boyunca New York ile Londra arasındaki fark yılın geri kalanından bir saat farklıdır. Hindistan ve birçok başka ülke saatlerini hiç değiştirmez, bu yüzden onlarla aradaki fark diğer taraf değiştirdiğinde değişir.',
          'Her zaman bugün için değil, toplantının tam tarihi için dönüştürün. Dönüştürücü bunu tarayıcınızın yerleşik saat dilimi verileriyle yapar.',
        ],
      },
      {
        heading: 'Tarih çizgileri ve geç toplantılar',
        paragraphs: [
          'Hindistan’da geç bir akşam, Amerika Birleşik Devletleri’nde aynı sabah ya da geceyken, Japonya’da erken bir sabah Hindistan’da bir önceki akşamdır. Tarih farklı olduğunda yanlış günü ayırmak kolaydır, bu yüzden tarih sütununu kontrol edin ve davetiyeye tam tarihi yazın.',
        ],
      },
    ],
    faqs: [
      { q: 'IST New York saatiyle kaçtır?', a: 'Hindistan, saatlerini değiştirmediği için kışın (EST) New York’tan 10 saat 30 dakika, yazın (EDT) 9 saat 30 dakika ileridedir. Dönüştürücü tarihiniz için kesin rakamı gösterir.' },
      { q: 'Konumumu kullanır mı?', a: 'Yalnızca bir başlangıç dilimi seçmek için. Tarayıcınız kendi saat dilimini sağlar ve hiçbir yere bir şey gönderilmez.' },
      { q: 'Şehrim listede yoksa ne olur?', a: 'Aynı saat dilimindeki bir şehri seçin.' },
    ],
  },
  'how-to-write-dates-without-confusion': {
    title: 'Tarihler karışıklık olmadan nasıl yazılır: GG/AA ve AA/GG',
    description: '04/03/2026’nın Hindistan’da ve ABD’de neden farklı tarihler anlamına geldiği ve kimsenin yanlış okumaması için tarihlerin nasıl yazılacağı.',
    intro: 'Bir tarihi karışıklık olmadan yazmak için ISO biçimi 2026-03-04’ü kullanın ya da ayı yazıyla yazın, örneğin 4 Mart 2026. 04/03/2026 sayısal tarihi Hindistan’da ve Birleşik Krallık’ta 4 Mart, ama Amerika Birleşik Devletleri’nde 3 Nisan anlamına gelir.',
    steps: [
      'Tarihi kimin okuyacağına karar verin. Farklı bir sıra kullanabilecekse yalnızca sayılardan oluşan biçimden kaçının.',
      'Formlar, dosya adları ve veriler için ISO 8601 (YYYY-AA-GG) kullanın. Tarih sırasına göre sıralanır.',
      'Ya da ayı sözcük olarak yazın: 4 Mart 2026 veya March 4, 2026.',
      'Bir tarihi tüm yaygın biçimlerde görmek için Tarih biçimi dönüştürücüsünü kullanın ve ihtiyacınız olanı kopyalayın.',
    ],
    sections: [
      {
        heading: 'Kullanımda üç sıra',
        paragraphs: [
          'Gün-ay-yıl (GG/AA/YYYY) Hindistan’da, Birleşik Krallık’ta ve dünyanın büyük bölümünde kullanılır. Ay-gün-yıl (AA/GG/YYYY) Amerika Birleşik Devletleri’nde kullanılır. Yıl-ay-gün (YYYY/AA/GG) Japonya’da, Çin’de ve Kore’de kullanılır ve ISO 8601’in temelidir. Günün 13 veya daha büyük olduğu tarihler belirsiz değildir, ama 04/03 ve 05/06 belirsizdir.',
        ],
      },
      {
        heading: 'ISO 8601 neden daha güvenli',
        paragraphs: [
          'ISO 8601 en büyük birimi önce yazar, bu yüzden 2026-03-04 yalnızca tek biçimde okunabilir ve ISO tarihlerinin listesi düz metin olarak doğru sıralanır. Veritabanları, programcılar ve uluslararası formlar onu tercih eder. Dostça bir yazım için yazıyla yazılmış ay, insan okuyucular için her şüpheyi ortadan kaldırır.',
        ],
      },
    ],
    faqs: [
      { q: 'Dönüştürücünün doğru okuyacağı bir tarihi nasıl girerim?', a: 'Tarihi yazın ve dönüştürücüye önce günün, ayın ya da yılın geldiğini söyleyin. Sonra diğer tüm biçimleri gösterir.' },
      { q: 'İki haneli yılları kabul eder mi?', a: 'Evet. 26 gibi iki haneli bir yıl 2026 olarak okunur.' },
      { q: 'Tarihimin gerçek olmadığını neden söylüyor?', a: 'Ya gün yoktur (31 Şubat) ya da sıra yanlıştır (25. ay).' },
    ],
  },
  'how-to-convert-tiff-to-jpg': {
    title: 'TIFF JPG’ye nasıl dönüştürülür',
    description: 'TIFF taramalarını ve fotoğraflarını, çok sayfalı TIFF’ler dahil, her yerde açılan küçük JPG dosyalarına çevirin.',
    intro: 'TIFF’i JPG’ye dönüştürmek için TIFF dosyalarınızı dönüştürücüye bırakın, bir kalite seçin (90 iyi bir varsayılandır) ve "Dönüştür" düğmesine basın. Çok sayfalı bir TIFF’in her sayfası kendi JPG’si olur ve hepsini ZIP olarak indirebilirsiniz.',
    steps: [
      'TIFF’ten JPG’ye aracını açın ve .tif veya .tiff dosyalarınızı bırakın.',
      'Bir kalite seçin. 90 ayrıntının çoğunu korur; daha düşük değerler daha küçük dosya verir.',
      '"Dönüştür" düğmesine basın.',
      'JPG’yi indirin; birkaç sayfa ya da dosya varsa ZIP indirin.',
    ],
    sections: [
      {
        heading: 'İnsanlar TIFF’i neden dönüştürür',
        paragraphs: [
          'TIFF; tarayıcıların, faks yazılımlarının ve profesyonel fotoğrafçılığın kullandığı yüksek kaliteli bir biçimdir. Dosyalar büyüktür ve web tarayıcılarının çoğu (Safari dışında), e-posta istemcileri ve formlar bunları gösteremez ya da kabul edemez. JPG çok daha küçüktür ve hemen her yerde çalışır.',
        ],
      },
      {
        heading: 'Ne beklemeli',
        paragraphs: [
          'JPG kayıplıdır, bu yüzden biraz ayrıntı çok daha küçük bir dosyayla takas edilir. 90 ve üzeri kalitede bunu görmek zordur. JPG’de saydamlık yoktur, bu yüzden saydam alanlar beyaz olur. 16 bitlik ya da CMYK dosyalar gibi nadir TIFF çeşitleri açılmayabilir; bu olduğunda sayfa bir ileti gösterir. Resmi sonradan yazdırma ya da düzenleme ihtimaliniz varsa TIFF’i saklayın.',
        ],
      },
      {
        heading: 'Taranmış belgeler',
        paragraphs: [
          '200 ile 300 dpi taranmış bir belge için kalite 90’daki JPG, küçük yazıyı okunur tutar ve dosya boyutunu çarpıcı biçimde düşürür. Çok düşük kalite ayarları harf kenarlarını bulanıklaştırır, bu yüzden metin için yaklaşık 70’in altına inmeyin. Bir sayfa beyaz üzerine yalnızca siyah metinse, TIFF’i atmadan önce sonucu tam boyutta kontrol edin.',
        ],
      },
    ],
    faqs: [
      { q: 'Çok sayfalı bir tarama sırasını korur mu?', a: 'Evet. Sayfalar page1, page2 diye adlandırılır.' },
      { q: 'Bunun yerine PDF yapabilir miyim?', a: 'PDF dönüşümleri, görselleri PDF’ye çevirebilen kardeş sitemiz iDuckPDF’dedir.' },
      { q: 'Taramam yükleniyor mu?', a: 'Hayır. Tarayıcı sekmenizde dönüştürülür.' },
    ],
  },
  'how-to-convert-webp-to-gif': {
    title: 'WEBP GIF’e nasıl dönüştürülür',
    description: 'WEBP’i reddeden sohbet uygulamaları ve forumlar için WEBP görsellerini GIF dosyalarına çevirin ve dosyayı küçük tutun.',
    intro: 'WEBP’i GIF’e dönüştürmek için dosyayı WEBP’ten GIF’e dönüştürücüsüne bırakın, isterseniz en büyük genişliği seçin ve "Dönüştür" düğmesine basın. Bu sürümde hareketsiz bir WEBP tek kareli GIF olur, hareketli bir WEBP ise yalnızca ilk karesini korur.',
    steps: [
      'WEBP’ten GIF’e aracını açın ve .webp dosyalarınızı bırakın.',
      'Resim büyükse bir en büyük genişlik seçin. GIF dosyaları hızlı büyür.',
      '"Dönüştür" düğmesine basın.',
      'GIF’i indirin; birkaç dosya için ZIP indirin.',
    ],
    sections: [
      {
        heading: 'Bu ne zaman işe yarar',
        paragraphs: [
          'WEBP, Google’ın küçük dosyalar üreten modern bir görsel biçimidir ve birçok web sitesi artık onu sunar. Bazı eski sohbet uygulamaları, forumlar ve e-posta programları onu hâlâ kabul etmez, ama neredeyse hepsi GIF kabul eder.',
        ],
      },
      {
        heading: 'Neden vazgeçersiniz',
        paragraphs: [
          'GIF, 256 renkle sınırlı eski bir biçimdir; bu yüzden fotoğraflar biraz tanecikli görünebilir ve dosyalar genellikle WEBP’ten büyüktür. Saydam alanlar saydam kalır, ama yumuşak yarı saydam kenarlar tamamen dolu ya da tamamen şeffaf olur, çünkü GIF’te yalnızca açık-kapalı saydamlık vardır. Resim bir fotoğrafsa ve site kabul ediyorsa JPG ya da PNG daha uygun olabilir; bu biçimlere görsel dönüşümleri iDuckIMG’dedir.',
        ],
      },
      {
        heading: 'GIF’i küçük tutmak',
        paragraphs: [
          'Çıkartmalar ve avatarlar için 320 ile 480 piksel arası bir en büyük genişlik kullanın. Düz renkler, logolar ve basit çizimler GIF olarak iyi sıkışır, fotoğraflar ise sıkışmaz, çünkü yalnızca 256 renk vardır. GIF beklediğinizden çok büyükse daha küçük bir genişlik en hızlı çözümdür.',
        ],
      },
    ],
    faqs: [
      { q: 'Hareketli bir WEBP hareketli kalır mı?', a: 'Henüz değil. Bu sürümde yalnızca ilk kare korunur ve sayfa bunu belirtir.' },
      { q: 'GIF’im neden WEBP’ten büyük?', a: 'GIF daha kötü sıkışır. Daha küçük bir genişlik seçmek onu küçültür.' },
      { q: 'Yükleniyor mu?', a: 'Hayır. Tarayıcı sekmenizin içinde dönüştürülür.' },
    ],
  },
  'how-to-convert-kg-to-pounds': {
    title: 'kg libreye nasıl dönüştürülür (ve libre kg’a)',
    description: 'Kilogramı libre, ons ve stone’a tam çarpanla, zihinden hesap kestirmesiyle ve bir dönüştürücüyle çevirin.',
    intro: 'Kilogramı libreye dönüştürmek için 2,20462 ile çarpın. Böylece 70 kg yaklaşık 154,3 lb eder. Ters yön için libreyi 0,45359237 ile çarpın. Ağırlık dönüştürücüsü ikisini de anında yapar ve ayrıca ons, stone, gram ve ton’u da kapsar.',
    steps: [
      'Ağırlığı birimiyle yazın, örneğin 70 kg.',
      '2,20462 ile çarpın: 70 × 2,20462 = 154,32 lb.',
      'Libreden kilograma geçmek için 0,45359237 ile çarpın: 154 lb × 0,45359237 = 69,85 kg.',
      'Ya da Ağırlık dönüştürücüsünü açın, sayıyı yazın ve iki birimi seçin.',
    ],
    sections: [
      {
        heading: 'Hızlı bir kestirme',
        paragraphs: [
          'Kaba bir yanıt için kilogramı ikiye katlayın ve sonucun onda birini ekleyin: 70 kg ikiye katlanınca 140, artı 14 ise 154 lb. Ters yönde libreyi yarıya bölün ve onda birini çıkarın: 154 lb 77’dir, eksi 7,7 yaklaşık 69,3 kg eder. Günlük kullanım için yeterince yakındır, ama yemek pişirme, kargo ve tıp için tam çarpanı kullanın.',
        ],
      },
      {
        heading: 'Libre, ons ve stone',
        paragraphs: [
          'Bir libre 16 ons’tur. Birleşik Krallık ve İrlanda’da vücut ağırlığı için kullanılan bir stone, 14 libre ya da yaklaşık 6,35 kg’dır. 7 lb 8 oz ağırlığındaki bir bebek 7,5 libre, yani yaklaşık 3,4 kg’dır. Burada kullanılan ton metrik olandır, 1000 kg, ve 2000 librelik ABD kısa tonundan farklıdır.',
        ],
      },
      {
        heading: 'Bagaj ve vücut ağırlığı',
        paragraphs: [
          'Havayolu bagaj sınırları dönüştürmenin yaygın bir nedenidir. 23 kg’lık bir kayıtlı bavul yaklaşık 50,7 libre, 50 librelik bir sınır ise yaklaşık 22,7 kg’dır; yani bir birimde uygun olan bavul diğerinde azıcık aşabilir. Vücut ağırlığı için stone’un Birleşik Krallık’ta kullanıldığını unutmayın: 11 stone, 154 libre ya da yaklaşık 69,9 kg’dır.',
        ],
      },
    ],
    faqs: [
      { q: '1 kg kaç libredir?', a: 'Yaklaşık 2,20462 libre.' },
      { q: '150 libre kaç kg’dır?', a: 'Yaklaşık 68 kg.' },
      { q: 'Tonne ile ton aynı şey mi?', a: 'Hayır. Bir metrik ton 1000 kg, bir ABD tonu 2000 libre ve bir Birleşik Krallık tonu 2240 librelik.' },
    ],
  },
};

export default guides;
