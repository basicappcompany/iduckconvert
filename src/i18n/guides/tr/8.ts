import type { GuideSet } from '../types';

/** Turkish guides, batch 8. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-miles-to-kilometres': {
    title: 'Mil kilometreye nasıl dönüştürülür (ve tersi)',
    description: 'Milleri tam çarpanla km’ye çevirin; hızlı bir zihin hesabı hilesi ve ayak ile yardı da yapan bir dönüştürücü.',
    intro: 'Mili kilometreye dönüştürmek için 1,609344 ile çarpın. Böylece 10 mil 16,09 km eder. Geri dönmek için kilometreyi 1,609344’e bölün ya da 0,621371 ile çarpın. Uzunluk dönüştürücüsü ayak, inç, yard ve deniz millerini de kapsar.',
    steps: [
      'Mesafeyi birimiyle yazın, örneğin 26,2 mil.',
      '1,609344 ile çarpın: 26,2 × 1,609344 = 42,16 km, bir maraton.',
      'Kilometreden mile geçmek için 0,621371 ile çarpın: 5 km × 0,621371 = 3,11 mil.',
      'Ya da Uzunluk dönüştürücüsünü kullanın ve okla birimleri yer değiştirin.',
    ],
    sections: [
      {
        heading: 'Bir zihin hesabı hilesi',
        paragraphs: [
          'Fibonacci dizisindeki ardışık sayılar (1, 1, 2, 3, 5, 8, 13, 21) mil-kilometre çiftine yakındır: 5 mil yaklaşık 8 km, 8 mil yaklaşık 13 km ve 13 mil yaklaşık 21 km eder. Diğer sayılar için mili 1,6 ile çarpın; bu yüzde birin küçük bir kesrine kadar doğrudur.',
        ],
      },
      {
        heading: 'Diğer miller ve hızlar',
        paragraphs: [
          'Denizde ve havada kullanılan bir deniz mili tam 1852 metredir, yaklaşık 1,15 kara mili eder. Hızlar da aynı şekilde dönüşür: saatte 60 mil yaklaşık 96,6 km/sa, 100 km/sa ise yaklaşık 62,1 mph’dir. Hız dönüştürücüsü bunları ve knot’u kapsar.',
        ],
      },
      {
        heading: 'Koşu ve bisiklet',
        paragraphs: [
          '5K yarışı yaklaşık 3,1 mil, 10K 6,2 mil, yarı maraton 13,1 mil (21,1 km) ve maraton 26,2 mil (42,2 km) eder. Tempolar bölünerek dönüşür: mil başına 8 dakikalık tempo kilometre başına yaklaşık 4 dakika 58 saniyedir, yani aynı koşu kilometrede daha hızlı bir sayı olarak okunur.',
        ],
      },
    ],
    faqs: [
      { q: '5 mil kaç km eder?', a: 'Yaklaşık 8,05 km.' },
      { q: '10 km kaç mil eder?', a: 'Yaklaşık 6,21 mil.' },
      { q: 'Bir mil her zaman aynı mıdır?', a: 'ABD ve Birleşik Krallık’ta kullanılan kara mili her zaman 1609,344 metredir. Deniz mili 1852 metre ile farklıdır.' },
    ],
  },
  'how-to-convert-feet-and-inches-to-cm': {
    title: 'Ayak ve inç cm’ye nasıl dönüştürülür (boy)',
    description: '5 ft 7 in gibi bir boyu santimetreye ve inci tam 2,54 çarpanıyla cm’ye çevirin.',
    intro: 'Ayak ve inci santimetreye dönüştürmek için boyu inç yapın (ayak × 12, artı inç) ve 2,54 ile çarpın. Böylece 5 ft 7 in 67 inçtir, bu da 170,18 cm eder. Uzunluk dönüştürücüsü tek bir birim için bunu tek adımda yapar.',
    steps: [
      'Boyu yazın: 5 ft 7 in.',
      'Ayağı inç yapın: 5 × 12 = 60, sonra 7 ekleyin ve 67 inç elde edin.',
      '2,54 ile çarpın: 67 × 2,54 = 170,18 cm.',
      'Kontrol için Uzunluk dönüştürücüsüne 67 yazın; From olarak inç, To olarak santimetre seçin.',
    ],
    sections: [
      {
        heading: 'Tam çarpan',
        paragraphs: [
          'Bir inç tam 2,54 santimetre olarak tanımlanır, bu yüzden inçten cm’ye dönüşüm tamdır, yaklaşık değil. Dolayısıyla bir ayak tam 30,48 cm’dir. Bu tanımlar 1959’dan beri sabittir, bu yüzden dönüşüm asla değişmez.',
        ],
      },
      {
        heading: 'cm’den ayağa geri dönmek',
        paragraphs: [
          'İnç elde etmek için santimetreyi 2,54’e bölün, sonra ayak için 12’ye bölün ve kalanı inç olarak tutun. 175 cm için: 175 ÷ 2,54 = 68,9 inç, bu 5 ft 8,9 in eder, genellikle 5 ft 9 in yazılır. Formlarda boy çoğunlukla tek bir birimde istenir, bu yüzden formun hangisini istediğine bakın.',
        ],
      },
      {
        heading: 'Zihinden bir tahmin',
        paragraphs: [
          'Her ayak yaklaşık 30,5 cm, her inç yaklaşık 2,5 cm’dir; yani 5 ft 7 in kabaca 152 artı 18, yani yaklaşık 170 cm eder. Hızlı bir kontrol için yeterince yakındır. Pasaport, sağlık formu ve iş başvurularında tam değeri kullanın ve yalnızca form isterse tam santimetreye yuvarlayın.',
        ],
      },
    ],
    faqs: [
      { q: '6 ayak kaç cm eder?', a: '182,88 cm.' },
      { q: '5 ft 4 in kaç cm eder?', a: '162,56 cm.' },
      { q: 'Sonucu yuvarlar mı?', a: '10 anlamlı basamağa kadar gösterir, bu yüzden tam santimetreye kendiniz yuvarlayabilirsiniz.' },
    ],
  },
  'how-to-convert-square-feet-to-square-metres': {
    title: 'Metrekare ve fit kare nasıl dönüştürülür',
    description: 'Daire ve arsalar için sq ft’yi sq m’ye çevirin; tam çarpan ve emlak ilanlarında kullanılan alan birimleriyle.',
    intro: 'Fit kareyi metrekareye dönüştürmek için 10,7639’a bölün ya da 0,092903 ile çarpın. Böylece 1000 sq ft’lik bir daire yaklaşık 92,9 metrekare eder. Alan dönüştürücüsü akre, hektar, yard kare ve kilometrekareyi de kapsar.',
    steps: [
      'Alanı birimiyle yazın, örneğin 1200 sq ft.',
      '0,092903 ile çarpın: 1200 × 0,092903 = 111,5 metrekare.',
      'Metrekareden fit kareye geçmek için 10,7639 ile çarpın.',
      'Ya da Alan dönüştürücüsünü açın ve fit kare ile metrekareyi seçin.',
    ],
    sections: [
      {
        heading: 'Neden uzunluk çarpanını kullanamazsınız',
        paragraphs: [
          'Bir ayak 0,3048 metredir, yani bir fit kare 0,3048 × 0,3048 = 0,092903 metrekaredir. Alan dönüşüm çarpanı, uzunluk çarpanının karesidir. Yaygın bir hata 0,3048 ile çarpıp üç kattan fazla büyük bir sonuç bulmaktır.',
        ],
      },
      {
        heading: 'Net alan ve inşaat alanı',
        paragraphs: [
          'Hindistan’daki emlak ilanları carpet area, built-up area ya da super built-up area belirtir ve bunlar aynı daire için farklıdır. Metrekareye dönüşüm hepsi için aynıdır, ama benzer şeyleri karşılaştırdığınızdan emin olun. Daha büyük araziler çoğunlukla akre (43.560 sq ft) ya da hektar (10.000 metrekare, yaklaşık 2,47 akre) cinsindendir.',
        ],
      },
      {
        heading: 'Çözümlü örnekler',
        paragraphs: [
          '900 sq ft’lik bir daire yaklaşık 83,6 metrekaredir. 30 × 40 ayak ölçülerinde bir arsa 1200 sq ft, yaklaşık 111,5 metrekaredir. Bir akre 43.560 sq ft, yaklaşık 4047 metrekaredir. Bunlardan iki üçünü dönüştürücüde denemek, farklı birimlerdeki ilanları karşılaştırmadan önce büyüklükler konusunda fikir edinmenin iyi bir yoludur.',
        ],
      },
    ],
    faqs: [
      { q: 'Bir metrekarede kaç sq ft var?', a: 'Yaklaşık 10,7639.' },
      { q: '500 sq ft kaç metrekare eder?', a: 'Yaklaşık 46,45 metrekare.' },
      { q: 'Hindistan arsa birimlerini içerir mi?', a: 'Evet, Hindistan arazi dönüştürücüsü gaj, bigha, guntha ve daha fazlasını ekler; bazılarının eyalete göre değiştiği notuyla.' },
    ],
  },
  'how-to-convert-litres-to-gallons-us-and-uk': {
    title: 'Litre galona nasıl dönüştürülür (ABD ve Birleşik Krallık)',
    description: 'Litreyi ABD ve Birleşik Krallık galonuna çevirin ve galon başına milin iki ülkede neden farklı olduğunu öğrenin.',
    intro: 'Litreyi ABD galonuna dönüştürmek için 3,78541’e bölün. Birleşik Krallık (imperial) galonu için 4,54609’a bölün. Böylece 10 litre yaklaşık 2,64 ABD galonu ya da 2,20 Birleşik Krallık galonudur. Hacim dönüştürücüsü ikisine de sahiptir ve ayrıca bardak, pint ve mililitreyi kapsar.',
    steps: [
      'Hangi galona ihtiyacınız olduğuna karar verin. ABD tarifleri ve yakıt fiyatları ABD galonunu, İngiliz olanlar imperial galonu kullanır.',
      'ABD galonu için litreyi 3,78541’e, Birleşik Krallık galonu için 4,54609’a bölün.',
      'Galondan litreye geçmek için aynı sayılarla çarpın.',
      'Ya da Hacim dönüştürücüsünü açın ve Gallon (US) ya da Gallon (UK) seçin.',
    ],
    sections: [
      {
        heading: 'Neden iki galon var',
        paragraphs: [
          'ABD galonu, 231 inç küplük eski şarap galonundan gelir. Birleşik Krallık galonu 1824’te on libre suyun hacmi olarak tanımlandı ve bugün tam 4,54609 litre olarak sabittir; yaklaşık yüzde 20 daha büyüktür. Pint, quart ve bardak da aynı ayrımı izler, bu yüzden bir Birleşik Krallık pinti ABD pintinden büyüktür.',
        ],
      },
      {
        heading: 'Yakıt tüketimi',
        paragraphs: [
          'Galonlar farklı olduğu için galon başına mil de farklıdır. Birleşik Krallık’ta 30 mpg olan bir araba ABD ölçüsüne göre yaklaşık 25 mpg yapar. İki ülkenin yakıt tüketimini karşılaştırıyorsanız, her yerde aynı olan 100 km başına litreye çevirin. Burada kullanılan mutfak bardağı yaklaşık 236,6 ml’lik ABD bardağıdır.',
        ],
      },
      {
        heading: 'Yemek pişirme ve yakıt',
        paragraphs: [
          'Bir ABD pinti 473 ml, bir Birleşik Krallık pinti ise 568 ml’dir; bu yüzden bir ülkenin tarifi diğerinde tutmayabilir. Yakıtta 50 litrelik bir depo yaklaşık 13,2 ABD galonu ya da yaklaşık 11 Birleşik Krallık galonu alır. Bir tarif ya da araç kılavuzu hangi galon veya pinti kastettiğini söylemiyorsa, hangi ülke için yazıldığına bakın.',
        ],
      },
    ],
    faqs: [
      { q: 'Bir ABD galonunda kaç litre var?', a: '3,78541 litre.' },
      { q: 'Bir Birleşik Krallık galonunda kaç litre var?', a: '4,54609 litre.' },
      { q: 'Bir bardakta kaç ml var?', a: 'Burada kullanılan ABD bardağı için yaklaşık 236,6 ml.' },
    ],
  },
  'how-to-convert-km-h-to-mph': {
    title: 'km/sa mph’ye nasıl dönüştürülür (ve knot)',
    description: 'Saatte kilometreyi saatte mile, saniyede metreye ve knot’a çevirin; tahmin etmenin hızlı bir yoluyla.',
    intro: 'km/sa’yı mph’ye dönüştürmek için 1,609344’e bölün ya da 0,621371 ile çarpın. Böylece 100 km/sa yaklaşık 62,1 mph’dir. Hız dönüştürücüsü ayrıca saniyede metre, saniyede ayak, knot ve Mach verir.',
    steps: [
      'Hızı birimiyle yazın, örneğin 120 km/sa.',
      '0,621371 ile çarpın: 120 × 0,621371 = 74,6 mph.',
      'mph’den km/sa’ya geçmek için 1,609344 ile çarpın: 60 mph 96,6 km/sa eder.',
      'Ya da Hız dönüştürücüsünü kullanın ve iki birimi seçin.',
    ],
    sections: [
      {
        heading: 'Hızlı tahminler',
        paragraphs: [
          'km/sa’yı zihninizde mph’ye çevirmek için 0,6 ile çarpın: 100 km/sa yaklaşık 60 mph’dir, biraz düşük ama bir hız sınırını değerlendirmek için iyidir. Öbür yönde mph’yi 1,6 ile çarpın ya da yarıya bölüp yarıdan biraz fazlasını ekleyin. Birleşik Krallık ve ABD’deki yol işaretleri mph kullanır, diğer ülkelerin çoğu km/sa.',
        ],
      },
      {
        heading: 'Saniyede metre ve knot',
        paragraphs: [
          'Saniyede metre elde etmek için km/sa’yı 3,6’ya bölün: 36 km/sa 10 m/s eder. Bir knot saatte bir deniz miliyle aynıdır, bu da tam 1,852 km/sa’dir; yani 20 knot yaklaşık 37 km/sa eder. Gemiler ve uçaklar knot kullanır, hava raporları da rüzgârı bazen knot olarak verir.',
        ],
      },
      {
        heading: 'Yaygın hız sınırları',
        paragraphs: [
          '30 mph’lik bir sınır yaklaşık 48 km/sa, 50 km/sa ise yaklaşık 31 mph’dir. 70 mph’lik bir sınır yaklaşık 113 km/sa eder; 120 km/sa’lik bir otoyol sınırı yaklaşık 75 mph, 130 km/sa ise yaklaşık 81 mph’dir. Başka bir ülkede kiralık araç kullanırken ve gösterge yalnızca tek bir birim gösterirken bunlardan birkaçını bilmek yardımcı olur.',
        ],
      },
    ],
    faqs: [
      { q: '60 mph km/sa olarak kaçtır?', a: 'Yaklaşık 96,6 km/sa.' },
      { q: '100 km/sa mph olarak kaçtır?', a: 'Yaklaşık 62,1 mph.' },
      { q: 'Mach 1 nedir?', a: 'Deniz seviyesinde yaklaşık 340 m/s; dönüştürücünün kullandığı değer budur. Sıcaklık ve yükseklikle değişir.' },
    ],
  },
  'how-to-convert-psi-to-bar-tyre-pressure': {
    title: 'Lastik basıncı için psi bar’a nasıl dönüştürülür',
    description: 'psi’yi bar, kPa ve atmosfere çevirin; tipik otomobil lastik basınçları ve kendi basıncınızı kontrol etmek için bir notla.',
    intro: 'psi’yi bar’a dönüştürmek için 14,5038’e bölün. Böylece 32 psi yaklaşık 2,2 bar eder. Geri dönmek için bar’ı 14,5038 ile çarpın. Basınç dönüştürücüsü pascal, kilopascal, atmosfer ve mmHg’yi de kapsar.',
    steps: [
      'Basıncı birimiyle yazın, örneğin 32 psi.',
      '14,5038’e bölün: 32 ÷ 14,5038 = 2,21 bar.',
      'kPa için psi’yi 6,895 ile çarpın: 32 psi yaklaşık 220,6 kPa eder.',
      'Ya da Basınç dönüştürücüsünü açın ve iki birimi seçin.',
    ],
    sections: [
      {
        heading: 'Lastik basınçları',
        paragraphs: [
          'Otomobil lastikleri genellikle yaklaşık 30 ile 35 psi’ye şişirilir; bu kabaca 2,1 ile 2,4 bar ya da 210 ile 240 kPa eder. Her zaman sürücü kapısı çerçevesindeki etiketteki ya da kılavuzdaki değeri kullanın, çünkü bu araca ve yüke bağlıdır. Basınçlar lastikler soğukken kontrol edilmelidir.',
        ],
      },
      {
        heading: 'Birimler birbiriyle nasıl ilişkili',
        paragraphs: [
          'Bir bar 100.000 pascal ya da 100 kPa’dır ve normal atmosfer basıncına yakındır. Bir standart atmosfer 101.325 pascal, yaklaşık 1,013 bar ya da 14,7 psi’dir. Hava durumu ve kan basıncı milimetre cıva kullanır; 760 mmHg bir standart atmosferdir.',
        ],
      },
      {
        heading: 'Basıncın başka göründüğü yerler',
        paragraphs: [
          'Yol bisikleti lastikleri genellikle yaklaşık 80 ile 130 psi’ye şişirilir; bu kabaca 5,5 ile 9 bar eder, dağ bisikletleri ise çok daha azını kullanır. Lastik yanağında basılı azami değeri her zaman kontrol edin. Yedek lastikler ile bazı kamyonetler ve yüklü otomobiller olağan otomobil değerinden farklı basınç gerektirir, bu yüzden aracınızın etiketini okuyun.',
        ],
      },
    ],
    faqs: [
      { q: '2 bar kaç psi eder?', a: 'Yaklaşık 29 psi.' },
      { q: 'Pompalarda bar mı kPa mı daha yaygın?', a: 'Ülkeye göre değişir. Birçok istasyon pompası psi, bar ve kPa’yı yan yana gösterir.' },
      { q: 'Gösterge basıncı farklı mı?', a: 'Lastik manometreleri çevrenizdeki havanın üstündeki basıncı gösterir. Dönüştürücü yalnızca birimleri değiştirir, atmosfer basıncı eklemez ya da çıkarmaz.' },
    ],
  },
};

export default guides;
