import type { GuideSet } from '../types';

/** Turkish guides, batch 4. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-gif-to-mp4': {
    title: 'GIF daha küçük olsun diye MP4’e nasıl dönüştürülür',
    description: 'Ağır bir hareketli GIF’i hızlı yüklenen ve her telefonda oynayan küçük bir MP4’e dönüştürün.',
    intro: 'GIF’i MP4’e dönüştürmek için GIF’i GIF’ten MP4’e dönüştürücüsüne bırakın ve "Dönüştür" düğmesine basın. MP4 genellikle kat kat daha küçüktür ve çoğu zaman daha nettir, çünkü GIF 256 renkle sınırlıdır ve gerçek bir video sıkıştırması yoktur.',
    steps: [
      'GIF’ten MP4’e aracını açın ve GIF’inizi kutuya bırakın.',
      '"Dönüştür" düğmesine basın.',
      'MP4’ü indirin ve boyutunu GIF ile karşılaştırın.',
      'Bir web sitesinde, MP4’ü GIF gibi davranması için autoplay, loop ve muted içeren bir video etiketinde kullanın.',
    ],
    sections: [
      {
        heading: 'MP4 neden kazanır',
        paragraphs: [
          'GIF her kareyi tam bir resim olarak saklar. MP4 video yalnızca bir kareden diğerine değişeni saklar, bu yüzden 8 MB’lık bir GIF MP4 olarak çoğu zaman 1 MB’ın çok altına inebilir. Renk de daha iyidir, çünkü video 256 renkle sınırlı değildir.',
        ],
      },
      {
        heading: 'Neyden vazgeçersiniz',
        paragraphs: [
          'GIF kendi kendine döngüde çalışır ve bir resmin görünebildiği her yerde görünür. MP4, oynatıcıya ya da sayfaya döngüye alması söylenmedikçe bir kez oynar. Çoğu sosyal uygulama kısa klipleri kendiliğinden döngüye alır ve kendi sitenizde loop özniteliğini ekleyebilirsiniz.',
        ],
      },
      {
        heading: 'MP4’ü bir web sitesinde kullanmak',
        paragraphs: [
          'Bir MP4’ün kendi sayfanızda GIF gibi davranmasını sağlamak için onu autoplay, loop, muted ve playsinline öznitelikleri olan bir video etiketine koyun. Tarayıcılar otomatik oynatmaya yalnızca video sessizse izin verir ve playsinline iPhone’ların onu tam ekran açmasını engeller. Sonuç daha hızlı yüklenir, daha az veri kullanır ve özgün GIF’ten daha iyi görünür.',
        ],
      },
    ],
    faqs: [
      { q: 'MP4’ün sesi var mı?', a: 'Hayır. GIF’te ses yoktur, bu yüzden aktarılacak bir şey yok.' },
      { q: 'MP4’ü tekrar GIF’e çevirebilir miyim?', a: 'Evet, Videodan GIF’e ile, ama yine büyük olur.' },
      { q: 'GIF yükleniyor mu?', a: 'Hayır. Tarayıcı sekmenizde dönüştürülür.' },
    ],
  },
  'how-to-convert-csv-to-json': {
    title: 'CSV JSON’a nasıl dönüştürülür',
    description: 'Bir CSV tablosunu tarayıcınızda JSON dizisine çevirin; ilk satır anahtar olur ve sayılar sayı olarak kalır.',
    intro: 'CSV’yi JSON’a dönüştürmek için CSV’nizi yapıştırın ya da dosyayı CSV’den JSON’a dönüştürücüsüne bırakın. İlk satır anahtarlar olur, diğer her satır bir nesne olur; bu yüzden isim ve yaş tablosu bir kayıt listesine dönüşür.',
    steps: [
      'CSV’nizin ilk satırının sütun adlarını içerdiğinden emin olun.',
      'CSV’den JSON’a aracını açın ve metni yapıştırın ya da dosyayı kutuya bırakın. Şekli görmek isterseniz önce örneği deneyin.',
      'Yazarken sağda beliren JSON’u okuyun.',
      'Kodunuza ya da bir API aracına yapıştırmak için "Download .json" veya "Copy" düğmesine basın.',
    ],
    sections: [
      {
        heading: 'Sonuç neye benzer',
        paragraphs: [
          'name, age ve city sütunlu bir CSV, {"name": "Asha", "age": 29, "city": "Pune"} gibi nesnelerden oluşan bir diziye dönüşür. Düz sayılar ve true ile false sözcükleri gerçek JSON sayılarına ve mantıksal değerlerine dönüşür. 01234 gibi değerler metin olarak kalır, böylece kodlardaki ve posta kodlarındaki baştaki sıfırlar kaybolmaz.',
        ],
      },
      {
        heading: 'Virgüller, tırnaklar ve diğer ayırıcılar',
        paragraphs: [
          'Alanlar virgül ya da satır sonu içerdiğinde çift tırnağa sarılabilir ve bir alanın içindeki tırnak iki tırnak olarak yazılır. Dönüştürücü bunların hepsini anlar. Ayrıca ilk satıra bakarak noktalı virgül, sekme ve dik çizgiyle ayrılmış dosyaları da okur; bu, ondalıkta virgül kullanan ülkelerdeki e-tablolardan dışa aktarılan dosyalar için önemlidir.',
        ],
      },
    ],
    faqs: [
      { q: 'Bir sütunun başlığı yoksa ne olur?', a: 'column1, column2 diye adlandırılır, böylece hiçbir veri atılmaz.' },
      { q: 'CSV’ye geri dönebilir miyim?', a: 'Evet, nesne dizisini satırlara çeviren JSON’dan CSV’ye ile.' },
      { q: 'Verilerim yükleniyor mu?', a: 'Hayır. Dönüşüm siz yazarken tarayıcınızda gerçekleşir.' },
    ],
  },
  'how-to-convert-json-to-csv': {
    title: 'Excel için JSON CSV’ye nasıl dönüştürülür',
    description: 'Bir JSON dizisini, iç içe nesneler dahil, Excel ya da Google E-Tablolar’da açabileceğiniz bir CSV tablosuna düzleştirin.',
    intro: 'JSON’u CSV’ye dönüştürmek için bir nesne dizisini JSON’dan CSV’ye dönüştürücüsüne yapıştırın. Her nesne bir satır, her anahtar bir sütun olur ve iç içe nesneler address.city gibi noktalı sütun adlarına düzleştirilir.',
    steps: [
      'JSON’unuzun [{"a":1},{"a":2}] gibi bir nesne dizisi olduğunu kontrol edin. Tek bir nesne de çalışır ve bir satır verir.',
      'JSON’dan CSV’ye aracını açın ve JSON’u yapıştırın ya da .json dosyasını bırakın.',
      'Sağdaki CSV’ye bakın. Sütunlar tüm nesnelerden toplanır.',
      '.csv dosyasını indirin ve Excel’de açın, ya da gerçek bir e-tablo için CSV’den Excel’e aracını kullanın.',
    ],
    sections: [
      {
        heading: 'İç içe veri ve eksik anahtarlar',
        paragraphs: [
          'JSON nesneleri nesnelerin içine yerleştirebilir, ama bir tabloda yalnızca satır ve sütun vardır. Dönüştürücü her iç içe anahtarı noktalı adla bir sütuna düzleştirir, yani {"address": {"city": "Pune"}} address.city adlı bir sütun olur. Bir değerin içindeki listeler tek bir hücrede JSON metni olarak tutulur.',
          'Nesnelerin anahtarları farklıysa her yerde bulunan her anahtar bir sütun olur ve değeri olmayan hücreler boş bırakılır.',
        ],
      },
      {
        heading: 'Sonucu Excel’de açmak',
        paragraphs: [
          'Excel düz CSV’yi yanlış okuyabilir; baştaki sıfırları atabilir ya da uzun sayıları değiştirebilir. Çalışmaya devam edeceğiniz bir e-tablo için CSV’yi, kodları metin olarak koruyan CSV’den Excel’e dönüştürücüsüyle XLSX’e çevirin.',
        ],
      },
    ],
    faqs: [
      { q: 'JSON’um geçersizse ne olur?', a: 'Sayfa sonuç yerine bir hata iletisi gösterir. Eksik tırnak ya da virgül olup olmadığını kontrol edin.' },
      { q: 'Çok büyük bir dosyayı dönüştürebilir miyim?', a: 'Büyük dosyalar çalışır ama daha uzun sürer, çünkü işi tarayıcınız yapar. Birkaç megabaytlık dosyalar sorun değildir.' },
      { q: 'Yükleniyor mu?', a: 'Hayır. Her şey cihazınızda çalışır.' },
    ],
  },
  'how-to-save-an-excel-sheet-as-csv-with-accents': {
    title: 'Excel CSV olarak nasıl kaydedilir ve aksanlar nasıl doğru kalır',
    description: 'Bir Excel sayfasını CSV’ye çevirin; UTF-8 işaretiyle aksanları, Türkçe harfleri ve simgeleri doğru tutun.',
    intro: 'Excel’i CSV’ye dönüştürmek için .xlsx dosyanızı Excel’den CSV’ye dönüştürücüsüne bırakın ve UTF-8 işaretini seçili tutun. Her sayfa kendi CSV’si olur ve işaret Excel’e dosyanın UTF-8 olduğunu söyler; böylece aksanlar ve İngilizce olmayan harfler doğru kalır.',
    steps: [
      'Excel’den CSV’ye aracını açın ve .xlsx, .xls ya da .ods dosyanızı bırakın.',
      'CSV’yi Excel’de tekrar açacaksanız UTF-8 işareti eklemek için kutuyu seçili tutun. İşarete tahammül etmeyen veritabanları ve betikler için işareti kaldırın.',
      '"Dönüştür" düğmesine basın.',
      'CSV’yi indirin. Birkaç sayfalı bir çalışma kitabı, sayfanın adını taşıyan sayfa başına bir CSV verir.',
    ],
    sections: [
      {
        heading: 'Aksanlar neden bozulur',
        paragraphs: [
          'CSV düz metindir ve metin farklı kodlamalarda saklanabilir. Excel bir CSV açtığınızda tahmin yürütür. Dosya UTF-8 olduğu hâlde Excel eski bir Windows kodlaması varsayarsa é, ü, ş veya ı gibi harfler tuhaf karakterler olarak görünür. Dosyanın başındaki küçük bir işaret tahmini ortadan kaldırır.',
        ],
      },
      {
        heading: 'CSV neleri dışarıda bırakır',
        paragraphs: [
          'CSV yalnızca değer tutar: formül, renk, grafik ya da biçimlendirme yoktur. Sayfanın gösterdiği değerleri, tarihler ve sayılar Excel’in gösterdiği biçimde yazılmış olarak alırsınız. Parola korumalı çalışma kitapları açılamaz. Biçimlendirmeye ihtiyacınız varsa XLSX’i saklayın.',
        ],
      },
    ],
    faqs: [
      { q: 'Hangi ayırıcı kullanılır?', a: 'Virgül; virgül, tırnak ya da satır sonu içeren her değerin etrafına tırnak konur.' },
      { q: 'CSV’m hâlâ yanlış harfler gösteriyor. Şimdi ne yapmalı?', a: 'Dosya başka bir kodlamada olabilir. Onu doğru kodlamayla okumak ve temiz bir UTF-8 kopyası kaydetmek için TXT kodlama düzeltici aracını kullanın.' },
      { q: 'Çalışma kitabı yükleniyor mu?', a: 'Hayır. Tarayıcı sekmenizin içinde okunur ve dönüştürülür.' },
    ],
  },
  'how-to-convert-yaml-to-json-and-back': {
    title: 'YAML JSON’a ve geri nasıl dönüştürülür',
    description: 'Yapılandırmayı tarayıcınızda YAML ile JSON arasında taşıyın ve girinti ve yorum tuzaklarından kaçının.',
    intro: 'YAML’i JSON’a dönüştürmek için YAML’i YAML’den JSON’a dönüştürücüsüne yapıştırın ve düzgün biçimlendirilmiş JSON’u kopyalayın. Ters yön için JSON’u JSON’dan YAML’e aracına yapıştırın. Veri aynı kalır; yalnızca yazım biçimi değişir.',
    steps: [
      'YAML’inizi YAML’den JSON’a dönüştürücüsüne yapıştırın ya da bir .yaml veya .yml dosyası bırakın.',
      'Bir hata görürseniz girintiyi kontrol edin. YAML, iç içeliği göstermek için boşluk kullanır, asla sekme değil.',
      'JSON’u kopyalayın ya da indirin.',
      'Tersi için JSON’u JSON’dan YAML’e aracına yapıştırın ve okunaklı, iki boşluk girintili YAML alın.',
    ],
    sections: [
      {
        heading: 'Neler kaybolur',
        paragraphs: [
          'Yorumlar YAML’de vardır ama JSON’da yoktur, bu yüzden JSON’a dönüştürürken atılır ve geri getirilemez. Çapalar ve takma adlar (&ad ve *ad kısayolları) düz tekrarlanan değerlere açılır.',
          'Dönüştürücü bir YAML belgesi okur. Bir dosyada üç tireyle ayrılmış birkaç belge varsa her birini ayrı ayrı dönüştürün.',
        ],
      },
      {
        heading: 'İnsanlar neden biçim değiştirir',
        paragraphs: [
          'YAML elle okumak ve düzenlemek için daha kolaydır, yapılandırma dosyalarının onu kullanmasının nedeni budur. JSON daha katıdır ve API’lerin ve çoğu programlama dilinin doğal olarak ayrıştırdığı biçimdir. Dönüştürmek, bir yapılandırmayı bir JSON aracında denetlemenizi ya da bir API yanıtını okunaklı bir dosyaya çevirmenizi sağlar.',
        ],
      },
      {
        heading: 'Sonucu kontrol etmek',
        paragraphs: [
          'Dönüştürdükten sonra YAML’in sayı olarak okuyabileceği değerlere bakın. 1.10 gibi tırnaksız bir sürüm 1,1 sayısı olarak okunur ve 08 gibi bir kod sıfırını kaybedebilir, bu yüzden sürüm dizgilerini ve kodları YAML’de tırnak içine alın. Dönüştürücü bir YAML ayrıştırıcısının tam olarak ne gördüğünü gösterir, bu da bu tür sürprizleri gerçek bir sisteme ulaşmadan bulmanın hızlı yoludur.',
        ],
      },
    ],
    faqs: [
      { q: 'YAML’im neden hata veriyor?', a: 'En yaygın neden girinti için sekme kullanılması ya da tutarsız girintidir. Boşluk kullanın ve iç içe öğeleri hizalı tutun.' },
      { q: 'Sayılar ve mantıksal değerler doğru türde olur mu?', a: 'Evet. 42, 3.5, true ve null gibi değerler gerçek JSON türlerine dönüşür.' },
      { q: 'Bir şey yükleniyor mu?', a: 'Hayır. Dönüşüm tarayıcı sekmenizde çalışır.' },
    ],
  },
};

export default guides;
