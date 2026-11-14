import type { GuideSet } from '../types';

/** Turkish guides, batch 6. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-write-an-amount-in-words-for-a-cheque': {
    title: 'Çekte tutar yazıyla nasıl yazılır',
    description: 'Rupi ve dolar tutarlarını çeklerin ve faturaların beklediği biçimde, lakh ve crore ya da milyon ve milyar ile yazıyla yazın.',
    intro: 'Bir çekte tutarı yazıyla yazmak için Sayıdan yazıya dönüştürücüsünü açın, tutarı yazın, Hint ya da uluslararası biçimi seçin ve rupi ile paise ya da dolar ile sent seçin. 1250.50, "Rupees One Thousand Two Hundred Fifty and Paise Fifty Only" olur.',
    steps: [
      'Tutarı rakamla yazın. Virgüller sorun değildir ve ondalıklar paise ya da sent verir.',
      'Hint biçimini (thousand, lakh, crore) ya da uluslararası biçimi (thousand, million, billion) seçin.',
      '"Write as" altında rupi ve paise ya da dolar ve sent seçin.',
      'Çeki doldurmadan önce yazıyı kopyalayın ve rakamlarla karşılaştırın.',
    ],
    sections: [
      {
        heading: 'Hint ve uluslararası biçimler',
        paragraphs: [
          'Hint sisteminde 1,00,000 bir lakh, 1,00,00,000 bir crore’dur. Uluslararası sistemde 1,000,000 bir milyon, 1,000,000,000 bir milyardır (one billion). Aynı sayı farklı okunur: 12,50,000 Hint biçiminde on iki lakh elli bin, uluslararası biçimde bir milyon iki yüz elli bindir.',
        ],
      },
      {
        heading: 'Sonda neden "Only"',
        paragraphs: [
          'Çekler yazıyı "Only" ile bitirir, böylece sonradan hiçbir şey eklenemez. Bankalar ayrıca yazı ile rakamların eşleşmesini bekler. Farklıysa banka çeki reddedebilir ya da yazıyı esas alabilir. İmzalamadan önce sonucu her zaman kendi bankanızın kurallarına göre kontrol edin.',
        ],
      },
      {
        heading: 'Çeki doldurmak',
        paragraphs: [
          'Yazıyı satırın en soluna dayayarak yazın ve "Only"den sonra kalan boşluğa bir çizgi çekin, böylece hiçbir şey eklenemez. Yazı ile rakamların tam olarak eşleştiğinden emin olun. Hata yaparsanız çeki nasıl düzelteceğinizi ya da iptal edeceğinizi bankanıza sorun, çünkü üzerine yazmak çekin reddedilmesine yol açabilir. Bu araç yazımda yardımcı olur, ama bankanın kuralları her zaman geçerlidir.',
        ],
      },
    ],
    faqs: [
      { q: 'Paise ve senti ele alır mı?', a: 'Evet. Noktadan sonraki iki rakam paise ya da sent olur ve "and"den sonra yazılır.' },
      { q: 'Ne kadar büyük bir sayı yazabilir?', a: 'Uluslararası biçim sekstilyonlara kadar gider, Hint biçimi crore olarak saymaya devam eder; yani her gerçek tutar çalışır.' },
      { q: 'Tutar bir yere gönderiliyor mu?', a: 'Hayır. Yazı siz yazarken tarayıcınızda oluşturulur.' },
    ],
  },
  'how-to-convert-binary-hex-and-decimal': {
    title: 'İkilik, onaltılık ve onluk nasıl dönüştürülür',
    description: 'İkilik, sekizlik, onluk ve onaltılık arasında elle ve bir dönüştürücüyle, çözümlü örneklerle dönüşüm yapın.',
    intro: 'Sayı tabanları arasında dönüştürmek için sayınızı Sayı tabanları dönüştürücüsünün herhangi bir kutusuna yazın ve diğerlerini okuyun. Elle, ikilik 1010 onluk tabanda 10, onaltılık FF ise 255’tir. Onaltılık, ikilik yazmanın dört bitlik gruplar hâlinde daha kısa bir yoludur.',
    steps: [
      'Sayı tabanları dönüştürücüsünü açın.',
      'Elinizdeki tabanın kutusuna tıklayın (ikilik, sekizlik, onluk veya onaltılık) ve sayıyı yazın.',
      'Hemen güncellenen diğer üç kutuyu okuyun.',
      'İhtiyacınız olanın yanındaki "Copy" düğmesine basın.',
    ],
    sections: [
      {
        heading: 'İkilikten onluğa nasıl çevrilir',
        paragraphs: [
          'Her ikilik basamak, sağdan başlayarak ikinin bir kuvvetidir: 1, 2, 4, 8, 16 ve böyle devam eder. 1010 için 1 içeren basamakları toplayın: 8 + 2 = 10. Bir bayt sekiz bittir, bu yüzden 11111111’e kadar çıkar, yani 255.',
        ],
      },
      {
        heading: 'Programcılar neden onaltılık kullanır',
        paragraphs: [
          'Onaltılığın 16 rakamı vardır: 0’dan 9’a ve A’dan F’ye. Bir onaltılık rakam tam dört bittir, yani bir bayt her zaman iki onaltılık rakamdır: FF, 11111111’dir, yani 255. Bu, onaltılığı ikilik veriyi, bellek adreslerini ve renk kodlarını yazmanın derli toplu bir yolu yapar. 0x öneki birçok programlama dilinde onaltılık sayıyı işaretler.',
          'Dönüştürücü tam sayı matematiği kullanır, bu yüzden çok uzun sayılar yuvarlama olmadan dönüştürülür.',
        ],
      },
      {
        heading: 'Alıştırma örnekleri',
        paragraphs: [
          'İkilik 1111, 15; 101010 ise 42’dir. Onaltılık 1A, 26’dır ve onluk 255 onaltılıkta FF, ikilikte 11111111’dir. Sekizlik artık nadiren kullanılır, ama Unix dosya izinleri onunla yazılır: sekizlik 755 onlukta 493’tür ve her sekizlik rakam tam üç bittir, yani 7, 111 ve 5, 101’dir. Diğer kutuların dolduğunu görmek için bunların her birini dönüştürücüde deneyin.',
        ],
      },
    ],
    faqs: [
      { q: 'Negatif sayıları dönüştürebilir mi?', a: 'Evet, eksi işaretiyle. İkiye tümleyen bit desenlerini göstermez.' },
      { q: '0x veya 0b öneklerini kabul eder mi?', a: 'Evet. Onaltılık kutusundaki 0xFF, 255 olarak okunur.' },
      { q: 'Kesirleri ele alır mı?', a: 'Hayır. Tam sayılar içindir.' },
    ],
  },
  'how-to-read-and-write-roman-numerals': {
    title: 'Roma rakamları nasıl okunur ve yazılır',
    description: 'Yedi Roma rakamı harfini, çıkarma kuralını ve 3999 sınırını öğrenin ve sayıları iki yönde dönüştürün.',
    intro: 'Bir sayıyı Roma rakamlarıyla yazmak için onu binlere, yüzlere, onlara ve birlere ayırın ve her birini I, V, X, L, C, D ve M ile yazın. 1994, MCMXCIV’dir. Roma rakamları dönüştürücüsü bunu 1’den 3999’a kadar sayılar için iki yönde yapar.',
    steps: [
      'Yedi harfi öğrenin: I 1, V 5, X 10, L 50, C 100, D 500 ve M 1000’dir.',
      'Sayıyı ayırın: 1994, 1000 + 900 + 90 + 4’tür.',
      'Her parçayı yazın: M, CM, XC ve IV.',
      'Birleştirin: MCMXCIV. Ya da sayıyı dönüştürücüye yazın ve sonucu kopyalayın.',
    ],
    sections: [
      {
        heading: 'Çıkarma kuralı',
        paragraphs: [
          'Büyük bir harften önce gelen küçük harf çıkarılır: IV 4, IX 9, XL 40, XC 90, CD 400 ve CM 900’dür. Büyük bir harften sonra gelen küçük harf eklenir: VI 6’dır. Bir harf arka arkaya en fazla üç kez tekrarlanır, bu yüzden 4, IIII değil IV’dür.',
        ],
      },
      {
        heading: 'Sınırlar ve tuhaflıklar',
        paragraphs: [
          'Standart Roma rakamlarında sıfır ve M’nin üstünde bir simge yoktur, bu yüzden en büyük sayı 3999 olan MMMCMXCIX’tir. Saat kadranları 4’ü çoğu zaman IIII olarak basar, ama bu dönüştürücü yazım hatalarını yakalayabilmek için yalnızca standart biçimi kabul eder. Roma rakamları hâlâ film yılları, kitap bölümleri, krallar ve kraliçeler ve bazı bina tarihleri için kullanılır.',
        ],
      },
    ],
    faqs: [
      { q: 'MCMXCIV nasıl okunur?', a: 'M 1000, CM 900, XC 90 ve IV 4’tür; yani 1994.' },
      { q: 'Neden sıfır yok?', a: 'Romalıların sıfır için bir simgesi yoktu, bu yüzden dönüştürücü 1’den başlar.' },
      { q: 'Telefonda çalışır mı?', a: 'Evet ve tamamen tarayıcınızda çalışır.' },
    ],
  },
  'how-to-change-text-case-camel-snake-title': {
    title: 'Metnin büyük/küçük harf biçimi nasıl değiştirilir: camel, snake ve Title Case',
    description: 'Metni tek tıkla büyük, küçük, Başlık, cümle, camelCase, snake_case ve kebab-case arasında değiştirin.',
    intro: 'Bir metnin harf biçimini değiştirmek için metni Metin büyük/küçük harf dönüştürücüsüne yapıştırın ve istediğiniz biçime basın: büyük, küçük, Başlık, cümle, camelCase, PascalCase, snake_case, kebab-case veya CONSTANT_CASE. Sonucu tek tıkla kopyalayın.',
    steps: [
      'Metin büyük/küçük harf dönüştürücüsünü açın ve metninizi yapıştırın.',
      'İhtiyacınız olan biçim düğmesine basın. Sonuç aşağıda görünür.',
      'Kontrol edin. Title Case mekaniktir ve küçük sözcükleri de büyük harfle başlatır.',
      '"Copy" düğmesine basın ve ihtiyacınız olan yere yapıştırın.',
    ],
    sections: [
      {
        heading: 'Yazı için biçimler',
        paragraphs: [
          'BÜYÜK HARF vurgu ya da kısaltmalar için, küçük harf ise sade ve resmî olmayan metin içindir. Title Case, bir kitap başlığındaki gibi her sözcüğün ilk harfini büyütür. Cümle biçimi, normal yazıdaki gibi yalnızca her cümlenin ilk sözcüğünü büyütür ve uzun başlıklarda okuması daha kolaydır.',
        ],
      },
      {
        heading: 'Kod ve URL için biçimler',
        paragraphs: [
          'Programcılar sözcükleri boşluksuz birleştirir. camelCase (helloWorld) değişkenler için, PascalCase (HelloWorld) sınıf adları için, snake_case (hello_world) Python’da ve veritabanlarında, kebab-case (hello-world) web adreslerinde ve dosya adlarında, CONSTANT_CASE ise sabit değerler için yaygındır. Dönüştürücü sözcükleri boşluklarda, noktalamada ve büyük harflerde ayırır, bu yüzden bir biçimi başka bir biçime çevirebilir.',
        ],
      },
    ],
    faqs: [
      { q: 'Başlıklar için stil kılavuzu kurallarını izler mi?', a: 'Hayır. Buradaki Title Case her sözcüğü büyütür. Stil kılavuzları "of" ve "the" gibi küçük sözcükleri küçük bırakır, gerekirse bunları elle düzeltin.' },
      { q: 'Aksanlarla çalışır mı?', a: 'Evet; é, ü ve Kiril gibi büyük ve küçük biçimi olan harflerde. Noktalı ve noktasız Türkçe i standart kuralları izler ve elle düzeltme gerektirebilir.' },
      { q: 'Metnim bir yere gönderiliyor mu?', a: 'Hayır. Siz yazarken tarayıcınızda değiştirilir.' },
    ],
  },
  'how-to-convert-hex-to-rgb-and-hsl': {
    title: 'HEX renkler RGB ve HSL’ye nasıl dönüştürülür',
    description: 'Renk kodlarını CSS ve tasarım işleri için HEX, RGB ve HSL arasında canlı bir renk örneğiyle dönüştürün.',
    intro: 'Bir renk kodunu dönüştürmek için Renk kodları dönüştürücüsüne bir HEX, RGB veya HSL değeri yazın. Diğer ikisi güncellenir ve rengi görürsünüz. #FFD23F, rgb(255, 210, 63)’tür ve hsl(45, 100%, 62%) aynı renktir.',
    steps: [
      'Renk kodları dönüştürücüsünü açın.',
      'İlk kutuya # ile veya #’siz bir HEX kodu yazın ya da renk seçiciyi kullanın.',
      'RGB ve HSL değerlerini okuyun ve kontrol etmek için renk örneğine bakın.',
      'CSS’inizin veya tasarım aracınızın ihtiyaç duyduğu kodun yanındaki "Copy" düğmesine basın.',
    ],
    sections: [
      {
        heading: 'HEX ve RGB nasıl ilişkilidir',
        paragraphs: [
          'Bir HEX kodu, kırmızı, yeşil ve mavi için üç adet 16 tabanlı rakam çiftidir. #FFD23F; FF (255) kırmızı, D2 (210) yeşil ve 3F (63) mavidir. RGB aynı üç sayıyı onluk tabanda yazar. #F80 gibi üç haneli bir kod, her rakamı ikiye katlayan bir kısaltmadır, yani #FF8800’e eşittir.',
        ],
      },
      {
        heading: 'HSL ne zaman işe yarar',
        paragraphs: [
          'HSL bir rengi ton (renk çarkındaki konum, 0 ile 360), doygunluk (ne kadar canlı) ve açıklık (ne kadar açık ya da koyu) ile tanımlar. Bu, bir marka renginin daha açık ya da daha koyu bir sürümünü yalnızca açıklığı değiştirerek kolayca yapmanızı sağlar; HEX’te bu zahmetlidir. HSL tam sayılara yuvarlandığı için HSL üzerinden gidiş-dönüşler bir değeri bir kadar kaydırabilir; HEX ve RGB kesin kalır.',
        ],
      },
    ],
    faqs: [
      { q: '8 haneli HEX ne demek?', a: 'Sonuna bir alfa (saydamlık) çifti ekler. Bu dönüştürücü altı ve üç haneli kodları ele alır.' },
      { q: 'Bir rengi nasıl koyulaştırırım?', a: 'HSL’de açıklığı düşürün, sonra eşleşen HEX ya da RGB’yi kopyalayın.' },
      { q: 'Bir şey yükleniyor mu?', a: 'Hayır. Her şey tarayıcınızda hesaplanır.' },
    ],
  },
};

export default guides;
