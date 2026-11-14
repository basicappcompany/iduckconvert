import type { GuideSet } from '../types';

/** Turkish guides, batch 5. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-markdown-to-html': {
    title: 'Markdown HTML’e nasıl dönüştürülür',
    description: 'Markdown notlarını ve README metinlerini bir web sayfasına ya da içerik yönetim sistemine yapıştırabileceğiniz temiz HTML’e çevirin.',
    intro: 'Markdown’ı HTML’e dönüştürmek için Markdown’ınızı Markdown’dan HTML’e dönüştürücüsüne yapıştırın. Başlıklar, paragraflar, listeler, bağlantılar, tablolar ve kod için, bir sayfaya ya da içerik sistemine yapıştırmaya hazır HTML alırsınız.',
    steps: [
      'Markdown’ınızı yazın veya yapıştırın, ya da parçaları görmek için "Try an example" düğmesine basın.',
      'Markdown’dan HTML’e aracını açın ve sol kutuya yapıştırın.',
      'Sağdaki HTML’i okuyun. Yalnızca içeriktir, html ya da body etiketleri yoktur.',
      'Kopyalayın veya indirin ve kendi sayfa şablonunuzun içine yerleştirin.',
    ],
    sections: [
      {
        heading: 'Neler desteklenir',
        paragraphs: [
          'Standart Markdown (# ile başlıklar, ** ile kalın yazı, listeler, bağlantılar, görseller, alıntılar ve kod blokları) artı yaygın GitHub eklentileri: tablolar, görev listeleri ve üstü çizili metin. Markdown içindeki ham HTML değişmeden geçer.',
        ],
      },
      {
        heading: 'Bir güvenlik notu',
        paragraphs: [
          'Çıktı düz bir dönüşümdür. Markdown başkasından geldiyse ham HTML olarak gizlenmiş betikler içerebilir. Başkalarının içeriğinin göründüğü bir sitede yayımlamadan önce sonucu kendi HTML temizleyicinizden geçirin.',
        ],
      },
      {
        heading: 'Yaygın Markdown hataları',
        paragraphs: [
          'Bir listenin öncesinde boş satır gerekir ve paragraflar boş satırlarla ayrılır. Bir başlığın diyez işaretlerinden sonra boşluğa ihtiyacı vardır, bu yüzden #Başlık değil # Başlık yazın. Bir paragraf içinde satır sonunu zorlamak için satırı iki boşlukla bitirin. Bir tablo, ardından tire dizisinden oluşan bir ayırıcı satırın geldiği bir başlık satırı ister. HTML yanlış görünüyorsa neden hemen her zaman bunlardan biridir.',
        ],
      },
    ],
    faqs: [
      { q: 'HTML’den tekrar Markdown’a dönebilir miyim?', a: 'Evet, HTML’den Markdown’a ile. Biçim ve yerleşim kaybolur, ama başlıklar, listeler, bağlantılar ve kalın yazı korunur.' },
      { q: 'Stil ekler mi?', a: 'Hayır. Yerleştirdiğiniz sayfanın stillerini devralan, stilsiz HTML alırsınız.' },
      { q: 'Metnim yükleniyor mu?', a: 'Hayır. Tarayıcı sekmenizde dönüştürülür.' },
    ],
  },
  'how-to-fix-garbled-text-and-wrong-encoding': {
    title: 'Bozuk metin ve yanlış kodlama nasıl düzeltilir',
    description: 'Ã© gibi tuhaf karakterler gösteren metin dosyalarını doğru kodlamayı seçip temiz UTF-8 kaydederek onarın.',
    intro: 'Bozuk görünen bir metin dosyasını düzeltmek için dosyayı TXT kodlama düzeltici aracına bırakın, yazıldığı kodlamayı seçin (önce Windows-1252’yi deneyin), önizlemeyi kontrol edin ve UTF-8 kopyasını indirin. Bozuk metin, dosyanın yanlış kodlamayla okunduğu anlamına gelir.',
    steps: [
      'TXT kodlama düzeltici aracını açın ve dosyanızı bırakın.',
      'Önizlemeye bakın. Aksanlar Ã© ya da é gibi görünüyorsa dosya büyük olasılıkla Windows-1252’dir.',
      'Önizleme doğru okunana kadar listeden başka bir kodlama seçin. Windows-1251 Kiril’i; Shift_JIS, GBK ve Big5 Japonca ve Çince’yi kapsar.',
      '"Dönüştür" düğmesine basın ve UTF-8 kopyasını indirin. Özgün dosyanıza dokunulmaz.',
    ],
    sections: [
      {
        heading: 'Neler oluyor',
        paragraphs: [
          'Bir metin dosyası yalnızca sayılardır. Kodlama, her sayının hangi harf anlamına geldiğini söyleyen tablodur. UTF-8 her dili yazabilir, Windows-1252 gibi eski tablolar ise bir bölgeyi kapsar. Bir dosya bir tabloyla yazılıp başka bir tabloyla okunursa karakterler é yerine Ã© gibi anlamsızlığa dönüşür.',
        ],
      },
      {
        heading: 'Neden saklanacak kodlama UTF-8',
        paragraphs: [
          'UTF-8 bugün hemen her program, web sitesi ve veritabanı tarafından anlaşılır. Metninizi UTF-8 kaydetmek, onun her yerde aynı biçimde açılması demektir. Düzelttikten sonra bir CSV Excel’de hâlâ yanlış görünüyorsa, UTF-8’i doğru okuyan CSV’den Excel’e aracıyla dönüştürün.',
        ],
      },
    ],
    faqs: [
      { q: 'Hangi kodlamayı seçeceğimi nasıl anlarım?', a: 'Olası olanları deneyin ve önizlemeyi izleyin. Doğru olan her harfi okunur kılar. Dosyanın nereden geldiğine bakın: eski Windows dışa aktarmaları çoğu zaman Windows-1252’dir.' },
      { q: 'Neden soru işaretleri ya da kutular görüyorum?', a: 'Bu karakterler siz dosyayı açmadan önce zaten kaybolmuştu. Başka bir kodlama seçmek, değiştirilenleri geri getiremez.' },
      { q: 'Dosyam yükleniyor mu?', a: 'Hayır. Tarayıcınızın içinde okunur ve dönüştürülür.' },
    ],
  },
  'how-to-convert-celsius-to-fahrenheit': {
    title: 'Celsius Fahrenheit’a nasıl dönüştürülür (ve geri)',
    description: 'Formül, hızlı bir zihinden hesap kestirmesi ve Celsius, Fahrenheit ve Kelvin için bir dönüştürücü.',
    intro: 'Celsius’u Fahrenheit’a dönüştürmek için 9 ile çarpın, 5’e bölün ve 32 ekleyin. Böylece 100 °C 212 °F, 0 °C 32 °F eder. Geri dönmek için 32 çıkarın, 5 ile çarpın ve 9’a bölün.',
    steps: [
      'Sıcaklığı birimiyle yazın, örneğin 25 °C.',
      '9 ile çarpın: 25 × 9 = 225.',
      '5’e bölün: 225 ÷ 5 = 45.',
      '32 ekleyin: 45 + 32 = 77 °F.',
      'Ya da Sıcaklık dönüştürücüyü açın, 25 yazın, Celsius’tan Fahrenheit’a seçeneğini seçin ve yanıtı okuyun.',
    ],
    sections: [
      {
        heading: 'Zihinden hesap kestirmesi',
        paragraphs: [
          'Kaba bir yanıt için Celsius sayısını ikiye katlayın ve 30 ekleyin. Bu, 25 °C için 80 verir; gerçek 77’ye yakındır. 0 ile 30 °C arasında en iyi sonucu verir ve uçlarda daha çok sapar. Yemek pişirme, tıp ve bilim için tam formülü kullanın.',
        ],
      },
      {
        heading: 'Neden sadece çarpamazsınız',
        paragraphs: [
          'Birim dönüşümlerinin çoğu tek bir çarpmadır. Sıcaklık ölçekleri farklı sıfır noktalarından başlar: 0 °C 32 °F’tir. Formülde toplama ya da çıkarma adımının bulunmasının ve bir Celsius sıcaklığını ikiye katlamanın Fahrenheit olanı ikiye katlamamasının nedeni budur.',
          'Kelvin, Celsius ile aynı derece büyüklüğünü kullanır ama mutlak sıfırdan başlar: Kelvin elde etmek için bir Celsius değerine 273,15 ekleyin. İki ölçek, Celsius ile Fahrenheit’ın eşit olduğu -40’ta kesişir.',
        ],
      },
    ],
    faqs: [
      { q: '37 °C Fahrenheit olarak kaçtır?', a: 'Yaklaşık 98,6 °F, normal insan vücut sıcaklığı.' },
      { q: '180 °C hangi fırın sıcaklığıdır?', a: '356 °F; tariflerde genellikle 350 °F’ye yuvarlanır.' },
      { q: 'Fahrenheit’ı Celsius’a nasıl dönüştürürüm?', a: '32 çıkarın, 5 ile çarpın, 9’a bölün. 212 °F, 100 °C verir.' },
    ],
  },
  'how-to-convert-bigha-gaj-and-acre-to-square-feet': {
    title: 'Bigha, gaj ve akre fit kareye nasıl dönüştürülür',
    description: 'Hindistan arazi birimlerini fit kareye çevirin; sabit kalan rakamlar ve eyalete göre değişenler.',
    intro: 'Hindistan arazi birimlerini dönüştürmek için Hindistan arazi birimleri dönüştürücüsünü açın, sayıyı yazın ve birimi seçin. Bir gaj 9 fit kare, bir akre 43.560 fit karedir; ama bir bigha eyalete göre değişir, bu yüzden almadan ya da satmadan önce her zaman yerel kaydı kontrol edin.',
    steps: [
      'Belgenizin hangi birimi kullandığına karar verin. Bigha yazıyorsa eyaleti not edin, çünkü boyut değişir.',
      'Hindistan arazi birimleri dönüştürücüsünü açın ve alanı yazın.',
      'From altında elinizdeki birimi, To altında fit kare (veya akre) seçin.',
      'Yanıtı ve eyalet notunu okuyun. Bunu gelir kaydınızla karşılaştırın.',
    ],
    sections: [
      {
        heading: 'Sabit birimler',
        paragraphs: [
          'Bir gaj bir yarda karedir, yani 9 fit kare. Bir akre 43.560 fit kare, ya da yaklaşık 4.047 metrekaredir. Bir hektar 10.000 metrekare, yaklaşık 2,47 akre veya kabaca 107.639 fit karedir. Bunlar her yerde aynıdır.',
        ],
      },
      {
        heading: 'Eyalete göre değişen birimler',
        paragraphs: [
          'Bir bigha tek bir boyut değildir. Uttar Pradesh’te yaklaşık 27.000 fit kare, Gujarat’ta yaklaşık 17.400, Batı Bengal ve Assam’da 14.400’dür ve ilçeye göre ve yerel âdetin pucca ya da kachha bigha olmasına göre farklılaşabilir. Biswa, katha, guntha ve cent de bölgeye göre değişir.',
          'Bu nedenle, yerel bir birimin her dönüşümünü tahmin olarak görün ve hukuki her iş için resmî gelir belgesindeki rakamı kullanın.',
        ],
      },
    ],
    faqs: [
      { q: 'Bir bigha kaç fit karedir?', a: 'Eyalete bağlıdır; burada listelenen yerlerde yaklaşık 14.400 ile yaklaşık 27.000 fit kare arasında. Dönüştürücüyü ve notunu kullanın, sonra yerelde doğrulayın.' },
      { q: 'Bir akrede kaç gaj var?', a: '4.840 gaj, çünkü bir akre 43.560 fit kare ve bir gaj 9’dur.' },
      { q: 'Hukuki kullanım için güvenli mi?', a: 'Hayır. Tahminler için bir hesap makinesidir. Mülkiyet belgeleri resmî kayıttaki rakamları kullanmalıdır.' },
    ],
  },
  'how-many-mb-in-a-gb': {
    title: 'Bir GB’ta kaç MB var? 1000 mi 1024 mü açıklandı',
    description: 'Bir gigabaytın neden telefon tarifesinde 1000 MB ama bazı sistemlerde 1024 MiB olduğu ve KB, MB, GB ve TB’ın nasıl dönüştürüleceği.',
    intro: 'Bir gigabayt, disk üreticilerinin ve telefon tarifelerinin kullandığı ondalık (SI) sistemde 1.000 megabayttır; bir gibibayt ise bazı işletim sistemlerinin kullandığı ikili sistemde 1.024 mebibayttır. Dönüştürmek için doğru sistemi seçin ve 1.000 ya da 1.024 ile çarpın veya bölün.',
    steps: [
      'Hangi sisteme ihtiyacınız olduğuna karar verin. Mağazalarda satılan depolama, ağ hızları ve veri tarifeleri 1.000 kullanır.',
      'Veri boyutu dönüştürücüsünü açın ve miktarı yazın.',
      '1.000 sistemi için KB, MB, GB veya TB; 1.024 sistemi için KiB, MiB, GiB ve TiB seçin.',
      'Sonucu istediğiniz birimde okuyun.',
    ],
    sections: [
      {
        heading: 'İki sistem nereden geliyor',
        paragraphs: [
          'Bilgisayarlar ikinin kuvvetleriyle çalışır ve 1.024 (2’nin 10. kuvveti) 1.000’e yakındır. İlk yazılımlar 1.024 bayt için KB kullanırken donanım üreticileri metrik 1.000’i kullandı. Karışıklığı bitirmek için 1.024 tabanlı birimlere KiB, MiB ve GiB adları verildi. Gündelik kullanımda her ikisi de hâlâ sade adla görünür.',
        ],
      },
      {
        heading: 'Bir sürücü neden daha az yer gösterir',
        paragraphs: [
          '1 TB olarak satılan bir sürücü 1.000.000.000.000 bayt tutar. Boyutları 1.024 tabanlı birimlerle gösteren bir sistem bunu yaklaşık 931 GiB olarak bildirir, yani hiçbir şey eksik olmasa da sayı daha küçük görünür. Aynı etki 128 GB’lık bir telefonun bazı menülerde 128’den biraz az göstermesine yol açar.',
        ],
      },
    ],
    faqs: [
      { q: 'Hangisi doğru, 1.000 mi 1.024 mü?', a: 'İkisi de kendi sisteminde doğrudur. KB, MB ve GB resmen 1.000 tabanlıdır; KiB, MiB ve GiB 1.024 tabanlıdır.' },
      { q: 'Veri tarifemde 1 GB kaç MB?', a: 'Tarifeler 1.000 kullanır, yani 1 GB 1.000 MB eder. Tam rakam önemliyse operatörünüze sorun.' },
      { q: 'Bir megabaytta kaç bayt var?', a: 'Ondalık sistemde 1.000.000, bir mebibaytta 1.048.576.' },
    ],
  },
};

export default guides;
