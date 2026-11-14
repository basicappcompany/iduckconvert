import type { GuideSet } from '../types';

/** Turkish guides, batch 1. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-extract-audio-from-a-video': {
    title: 'Videodan ses nasıl çıkarılır',
    description: 'Herhangi bir videonun sesini tarayıcınızda MP3 olarak kaydedin; yükleme yok, kurulacak yazılım yok, filigran yok.',
    intro: 'Bir videodan ses çıkarmak için bir videodan MP3’e dönüştürücü açın, videoyu bırakın, "Dönüştür" düğmesine basın ve MP3’ü indirin. iDuckConvert ile her şey tarayıcı sekmenizin içinde olur, yani video hiçbir yere yüklenmez.',
    steps: [
      'MP4’ten MP3’e dönüştürücüyü açın (Videodan MP3’e ile MOV, MKV, WEBM ve AVI de kabul eder).',
      'Videonuzu kutuya bırakın ya da "Dosya seç" düğmesine basın.',
      'Bir kalite seçin. 192 kbit/s günlük kullanım için iyi bir seçimdir; önemsediğiniz müzikler için 320 kullanın.',
      '"Dönüştür" düğmesine basın ve ilerleme çubuğunun bitmesini bekleyin. İlk seferde tarayıcınız dönüştürücü motorunu indirir (yaklaşık 30 MB), sonra bu önbelleğe alınır.',
      'MP3’ü indirin ya da birkaçını birden ZIP olarak indirin.',
    ],
    sections: [
      {
        heading: 'Ne elde edersiniz',
        paragraphs: [
          'Görüntü atılır ve yalnızca ses kaydı tutulur, bu yüzden MP3 videodan çok daha küçüktür. 100 MB’lık bir ders videosu çoğu zaman 10 ile 30 MB’lık bir MP3 olur.',
          'Ses, kayıplı bir biçim olan MP3 olarak yeniden kodlanır. Özgün ses zaten sıkıştırılmışsa (çoğu video öyledir), ikinci bir sıkıştırma çok az daha kayıp yaratır. 192 kbit/s veya üzerinde bunu duymak zordur.',
        ],
      },
      {
        heading: 'Hangi videolar çalışır',
        paragraphs: [
          'MP4, MOV (iPhone videoları), MKV, WEBM, AVI ve çoğu telefon ve kamera klibi. Bir dosya açılmazsa bozuk, kopyalamaya karşı korumalı ya da alışılmadık bir biçimde olabilir; sayfa bir dosyayı okuyamadığında size söyler.',
          'Yalnızca size ait olan veya kullanma hakkınız olan videolardan ses çıkarın. Genel kullanım kendi derslerinizi, görüşmelerinizi, ses notlarınızı ve aile videolarınızı kaydetmektir.',
        ],
      },
      {
        heading: 'Uzun videolar ve telefonlar',
        paragraphs: [
          'İşi kendi cihazınız yaptığı için uzun videolar zaman alır ve bellek kullanır. Bilgisayarda yaklaşık 500 MB, telefonda 100 MB altındaki dosyaları öneririz. Bir telefon zorlanırsa videoyu önce Videoyu kırp aracıyla kısaltın ya da bir bilgisayar kullanın.',
        ],
      },
    ],
    faqs: [
      { q: 'Telefonda çalışır mı?', a: 'Evet, her modern tarayıcıda, ancak uzun videolar telefonlarda yavaştır. Kısa klipler sorunsuz çalışır.' },
      { q: 'Bunun yerine WAV veya başka bir biçim alabilir miyim?', a: 'Evet. Videodan MP3’e en hızlı yoldur ve ses dönüştürücüleri MP3’ü WAV, M4A, OGG veya FLAC’a çevirir.' },
      { q: 'Video yükleniyor mu?', a: 'Hayır. Her şey tarayıcı sekmenizde çalışır ve video cihazınızdan asla çıkmaz.' },
    ],
  },
  'heic-vs-jpg': {
    title: 'HEIC mi JPG mi: hangisini kullanmalı?',
    description: 'HEIC nedir, JPG’den nasıl farklıdır, iPhone fotoğrafları neden başka yerlerde açılmaz ve nasıl dönüştürülür.',
    intro: 'HEIC, benzer kalitede fotoğrafları JPG’nin yaklaşık yarı boyutuna getirir, ancak onu açan program daha azdır. Telefonunuzda yer kazanmak için HEIC kullanın; bir fotoğrafı paylaşmak, yüklemek veya başka bir yerde düzenlemek gerektiğinde JPG’ye dönüştürün.',
    steps: [
      'Dosyanın .heic veya .heif ile bittiğini kontrol edin. Bir iPhone’un varsayılan olarak kaydettiği budur.',
      'Paylaşmanız veya yüklemeniz gerekiyorsa tarayıcınızda çalışan iDuckIMG’deki HEIC’ten JPG’ye dönüştürücüyle JPG’ye çevirin.',
      'Tekrar düzenleme ihtimaliniz varsa özgün HEIC’i saklayın: JPG’den daha fazla renk ayrıntısı taşır.',
      'iPhone’unuzun HEIC kaydetmesini durdurmak için Ayarlar, Kamera, Formatlar’a gidin ve "En Uyumlu"yu seçin.',
    ],
    sections: [
      {
        heading: 'Gerçek farklar',
        paragraphs: [
          'HEIC (High Efficiency Image Container), modern videoyla aynı sıkıştırma ailesini kullanır. Apple, bir fotoğrafı JPG’nin kabaca yarısı kadar yerde sakladığı ve 10 bit renk, derinlik verisi ve tek dosyada birden çok görüntü taşıyabildiği için 2017’de onu iPhone varsayılanı yaptı.',
          'JPG 1992’den kalmadır. Sıkıştırması daha az verimlidir, ama her telefon, bilgisayar, web sitesi, yazıcı ve fotoğraf düzenleyici onu sorunsuz açar.',
        ],
      },
      {
        heading: 'HEIC neden sorun çıkarır',
        paragraphs: [
          'Birçok web sitesi ve form HEIC yüklemelerini reddeder. Windows’un bunları göstermek için ek bir kodeğe ihtiyacı vardır; eski Android telefonlar, bazı yazıcılar ve pek çok eski yazılım ise onları hiç açamaz.',
          'JPG’ye dönüştürmek biraz kaliteye mal olur, çünkü JPG kayıplıdır ve renk aralığı daha dardır. Paylaşırken ve yüklerken fark etmezsiniz. Ciddi düzenleme için özgün dosyayı saklayın.',
        ],
      },
      {
        heading: 'Basit bir kural',
        paragraphs: ['Fotoğraf telefonunuzda veya iCloud’da kaldığı sürece HEIC’i saklayın. Birine göndermeniz ya da bir web sitesine koymanız gerektiği anda bir kopyasını JPG’ye dönüştürün.'],
      },
    ],
    faqs: [
      { q: 'HEIC, JPG’den daha kaliteli mi?', a: 'Aynı dosya boyutunda evet: daha fazla ayrıntı korur. Aynı kalitede yaklaşık yarı boyuttadır. Ayrıca daha fazla rengi destekler.' },
      { q: 'HEIC’i JPG’ye dönüştürmek kalite kaybettirir mi?', a: 'Biraz, çünkü JPG kayıplı bir biçimdir. Yüksek kalite ayarlarında fark görmek çok zordur.' },
      { q: 'HEIC’i JPG’ye nerede dönüştürürüm?', a: 'HEIC’ten JPG’ye dönüştürücü, kardeş sitemiz iDuckIMG’dedir. O da tarayıcınızda çalışır ve fotoğraflarınızı yüklemez.' },
    ],
  },
  'how-to-open-a-csv-in-excel-correctly': {
    title: 'Excel’de CSV doğru nasıl açılır',
    description: 'Bir CSV dosyasını açarken Excel’in baştaki sıfırları silmesini, uzun sayıları bozmasını ve aksanlı harfleri kırmasını önleyin.',
    intro: 'Bir CSV’ye çift tıklamak Excel’in onu nasıl okuyacağını tahmin etmesine yol açar ve tahmin çoğu zaman yanlıştır. Güvenilir yol, CSV’yi önce bir XLSX dosyasına dönüştürmek ya da Excel’in Veri sekmesiyle içe aktarıp her sütunun türünü kendiniz seçmektir.',
    steps: [
      'En kolayı: dosyayı CSV’den Excel’e dönüştürücüyle çevirin, sonra .xlsx’i açın. Baştaki sıfırlar ve metin değerleri olduğu gibi kalır.',
      'Ya da Excel’de boş bir çalışma kitabı açın ve Veri, ardından Metinden/CSV’den seçeneğini seçin.',
      'Dosyayı seçin ve dosya kaynağının 65001: UTF-8 yazdığını (bu aksanları düzeltir) ve ayırıcının dosyanızla eşleştiğini kontrol edin.',
      'Bazı sütunların posta kodları ve telefon numaraları gibi metin olarak kalması gerekiyorsa Veriyi Dönüştür’e basın ve türlerini Metin yapın.',
      'Yükle’ye basın.',
    ],
    sections: [
      {
        heading: 'Neler ters gider',
        paragraphs: [
          'Baştaki sıfırlar kaybolur: 01234, 1234 olur; bu da posta kodlarını, telefon numaralarını ve ürün kimliklerini bozar.',
          'Uzun sayılar bilimsel gösterime dönüşür. Excel bir sayının yalnızca 15 basamağını tutar, bu yüzden 16 basamaklı bir kart ya da kimlik numarası sayı olarak kaydedildiğinde kalıcı olarak bozulur.',
          'Bazı metinler tarih olarak okunur. 1-2 gibi bir değer 2 Ocak’a dönüşebilir ve bazı gen adları bu yolla meşhur biçimde bozulmuştur.',
          'Dosya UTF-8 olduğu hâlde Excel daha eski bir kodlama varsaydığında aksanlı ve İngilizce olmayan harfler tuhaf karakterler olarak görünür.',
        ],
      },
      {
        heading: 'Noktalı virgüller ve virgüller',
        paragraphs: [
          'Ondalıkları virgülle yazan ülkelerde Excel sütunlar arasında noktalı virgül bekler, bu yüzden virgüllü bir CSV tek uzun sütun olarak açılır. Bu sitedeki dönüştürücü ilk satıra bakıp doğru ayırıcıyı seçer ve içinde virgül bulunan tırnaklı değerleri de anlar.',
        ],
      },
      {
        heading: 'Ters yönde',
        paragraphs: [
          'Bir Excel sayfasını veritabanı ya da yükleme formu için CSV olarak kaydetmek üzere Excel’den CSV’ye dönüştürücüyü kullanın. CSV’yi yeniden açtığınızda Excel’in aksanları doğru göstermesi için varsayılan olarak bir UTF-8 işareti yazar.',
        ],
      },
    ],
    faqs: [
      { q: 'CSV’m neden tek sütun olarak açılıyor?', a: 'Ayırıcı bölge ayarlarınızla eşleşmiyor. XLSX’e dönüştürmek ya da Veri sekmesinden içe aktarıp ayırıcıyı seçmek bunu çözer.' },
      { q: 'Excel sıfırları sildikten sonra geri alabilir miyim?', a: 'Yalnızca özgün CSV hâlâ elinizdeyse. Excel 01234’ün üzerine 1234 kaydettiğinde sıfır gider, bu yüzden özgün dosyayı her zaman saklayın.' },
      { q: 'E-tablom yükleniyor mu?', a: 'Hayır. Dönüştürücüler tarayıcınızda çalışır ve dosya cihazınızdan asla çıkmaz.' },
    ],
  },
  'how-to-convert-units-without-mistakes': {
    title: 'Birimler hatasız nasıl dönüştürülür',
    description: 'Birim dönüştürürken yanlış yanıtlara yol açan tuzaklar: ABD ve Birleşik Krallık galonları, 1000’e karşı 1024, tonlar, sıcaklık ve Hindistan arazi birimleri.',
    intro: 'Birimleri hatasız dönüştürmek için birimin hangi sisteme ait olduğunu kontrol edin, kesin dönüşüm çarpanları olan bir araç kullanın ve her sayının yanına birimi yazın. Hataların çoğu, adı aynı ama miktarı farklı olan birimlerden gelir.',
    steps: [
      'Sayıyı birimiyle yazın, örneğin yalnızca 5 değil 5 mi.',
      'Birimin sandığınız anlama geldiğini kontrol edin. Bir galon, bir ton ve bir bigha ülkeye ya da eyalete göre değişir.',
      'Uzunluk ya da ağırlık dönüştürücüsü gibi kesin çarpanlı bir dönüştürücü kullanın ve yanıtı birimiyle okuyun.',
      'Mantık kontrolü yapın: yanıt doğru büyüklükte mi? 42 km’lik bir maraton 26 mile yakın çıkmalı.',
      'Özgün sayıyı ve birimi saklayın, yalnızca en sonda yuvarlayın.',
    ],
    sections: [
      {
        heading: 'Adı aynı olan birimler',
        paragraphs: [
          'Bir ABD galonu 3,785 litredir ama bir Birleşik Krallık galonu 4,546 litredir, yani yaklaşık yüzde 20 fazla. Bir ABD kısa tonu 2000 libre, bir Birleşik Krallık uzun tonu 2240 libre ve bir metrik ton 1000 kilogramdır.',
          'Bilgisayarda 1 KB, disk üreticileri ve telefon tarifeleri için 1000 bayttır ama bazı işletim sistemlerinde 1024 bayttır. Bu yüzden 1 TB’lık bir disk yaklaşık 931 GB gösterir. KiB, MiB ve GiB adları her zaman 1024 anlamına gelir.',
        ],
      },
      {
        heading: 'Sıcaklık farklıdır',
        paragraphs: [
          'Çoğu dönüşüm bir çarpanla çarpar. Sıcaklık ölçekleri farklı sıfırlardan başlar, bu yüzden toplamak ya da çıkarmak da gerekir: Fahrenheit, Celsius çarpı 9/5 artı 32’dir. Bu nedenle bir Celsius sıcaklığını ikiye katlamak Fahrenheit olanı ikiye katlamaz.',
        ],
      },
      {
        heading: 'Yerel arazi birimleri',
        paragraphs: [
          'Hindistan’da bigha sabit bir boyut değildir. Uttar Pradesh’te yaklaşık 27.000 fit kare, Gujarat’ta yaklaşık 17.424, Batı Bengal ve Assam’da 14.400’dür ve ilçeden ilçeye farklılık gösterebilir. Bir gaj bir yarda karedir (9 fit kare). Hukuki her iş için yerel tapu kaydındaki rakamı kullanın.',
        ],
      },
      {
        heading: 'Neden önemli',
        paragraphs: [
          '1999’da NASA, bir ekibin yazılımı libre-kuvvet saniye kullanırken diğerinin newton-saniye beklemesi yüzünden Mars Climate Orbiter’ı kaybetti. Birim karışıklığı küçük bir hata ama büyük sonuçlar doğurur, bu yüzden birimi her zaman sayıyla birlikte tutun.',
        ],
      },
    ],
    faqs: [
      { q: 'Bir metrede kaç fit var?', a: 'Yaklaşık 3,28084 fit. Bir fit tam olarak 0,3048 metredir.' },
      { q: 'Dönüşümleri yuvarlamalı mıyım?', a: 'Yalnızca sonda. Hesabın ortasında yuvarlamak, her adımda büyüyen bir hata ekler.' },
      { q: 'Dönüştürücüler kesin mi?', a: 'Tanımlı kesin çarpanları kullanır ve 10’a kadar anlamlı basamak gösterir. Hindistan arazi birimleri doğası gereği yaklaşıktır, çünkü yerel tanımlar farklıdır.' },
    ],
  },
  'how-to-make-a-gif-from-a-video': {
    title: 'Videodan GIF nasıl yapılır',
    description: 'Herhangi bir kısa video klibi tarayıcınızda hareketli GIF’e çevirin ve dosyayı göndermeye yetecek kadar küçük tutun.',
    intro: 'Bir videodan GIF yapmak için klibi Videodan GIF’e dönüştürücüsüne bırakın, nereden başlayıp ne kadar süreceğini seçin, sonra "GIF oluştur" düğmesine basın. 10 saniyenin ve 480 piksel genişliğin altında tutun, yoksa GIF çok büyür.',
    steps: [
      'Videodan GIF’e aracını açın ve klibinizi bırakın (MP4, MOV, WEBM, MKV veya AVI).',
      'Başlangıç zamanını ayarlayın. Saniye (90) ya da dakika ve saniye (1:30) kullanın.',
      'Süreyi saniye olarak ayarlayın. Bir tepki ya da demo için üç ila altı saniye fazlasıyla yeter.',
      'Bir genişlik seçin. 320 ile 480 piksel sohbet uygulamalarına uyar; ayrıntı önemliyse yalnızca 640’a çıkın.',
      'Küçük dosya için saniyede 10 kare, daha akıcı hareket için 15 ila 20 seçin, sonra "GIF oluştur" düğmesine basın ve indirin.',
    ],
    sections: [
      {
        heading: 'GIF’ler neden bu kadar büyür',
        paragraphs: [
          'Bir GIF her kareyi ayrı bir resim olarak saklar ve yalnızca 256 renk kullanabilir. Akıllı bir video sıkıştırması yoktur, bu yüzden süre, genişlik ve kare hızı birbiriyle çarpılır. Genişliği yarıya indirmek dosyayı kabaca dörtte bire düşürür, kare hızını yarıya indirmek de onu bir kez daha yarıya indirir.',
        ],
      },
      {
        heading: 'GIF’in yapamadıkları',
        paragraphs: [
          'GIF’te hiç ses yoktur. Ses gerekiyorsa klibi MP4 olarak tutun. Fotoğraflar da biraz tanecikli görünebilir, çünkü 256 renk fazla değildir. Bu, aracın değil biçimin sınırıdır.',
          'GIF yalnızca bir web sitesinde ya da modern bir sohbet uygulamasında gösterilecekse, döngüde çalışan bir MP4 genellikle çok daha küçük ve daha nettir. GIF’ten MP4’e dönüştürücü bunu ters yönde yapar.',
        ],
      },
    ],
    faqs: [
      { q: 'GIF döngüde çalışır mı?', a: 'Evet. Burada yapılan GIF’ler sonsuza kadar döngüde çalışır, çoğu insanın istediği de budur.' },
      { q: 'Metin ya da çıkartma ekleyebilir miyim?', a: 'Bu araçta hayır. Yalnızca keser ve dönüştürür. İhtiyacınız varsa metni önce bir düzenleyicide videoya ekleyin.' },
      { q: 'Video yükleniyor mu?', a: 'Hayır. GIF tarayıcı sekmenizde yapılır ve klip cihazınızdan asla çıkmaz.' },
    ],
  },
};

export default guides;
