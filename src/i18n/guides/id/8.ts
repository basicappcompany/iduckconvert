import type { GuideSet } from '../types';

/** Indonesian guides, batch 8. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-miles-to-kilometres': {
    title: 'Cara mengonversi mil ke kilometer (dan sebaliknya)',
    description: 'Konversi mil ke km dengan faktor tepat, trik hitung cepat di kepala, dan konverter yang juga menangani kaki dan yard.',
    intro: 'Untuk mengonversi mil ke kilometer, kalikan dengan 1,609344. Jadi 10 mil adalah 16,09 km. Untuk kembali, bagi kilometer dengan 1,609344 atau kalikan dengan 0,621371. Konverter Panjang juga menangani kaki, inci, yard, dan mil laut.',
    steps: [
      'Tulis jaraknya beserta satuannya, misalnya 26,2 mil.',
      'Kalikan dengan 1,609344: 26,2 × 1,609344 = 42,16 km, satu maraton.',
      'Dari kilometer ke mil, kalikan dengan 0,621371: 5 km × 0,621371 = 3,11 mil.',
      'Atau gunakan konverter Panjang dan tukar satuan dengan tombol panah.',
    ],
    sections: [
      {
        heading: 'Trik hitung di kepala',
        paragraphs: [
          'Bilangan berurutan dalam deret Fibonacci (1, 1, 2, 3, 5, 8, 13, 21) mendekati pasangan mil-kilometer: 5 mil sekitar 8 km, 8 mil sekitar 13 km, dan 13 mil sekitar 21 km. Untuk bilangan lain, kalikan mil dengan 1,6, yang akurat hingga pecahan kecil persen.',
        ],
      },
      {
        heading: 'Mil dan kecepatan lain',
        paragraphs: [
          'Satu mil laut, yang dipakai di laut dan udara, tepat 1852 meter, sekitar 1,15 mil darat. Kecepatan dikonversi dengan cara yang sama: 60 mil per jam sekitar 96,6 km/jam, dan 100 km/jam sekitar 62,1 mph. Konverter Kecepatan menangani itu dan knot.',
        ],
      },
      {
        heading: 'Lari dan bersepeda',
        paragraphs: [
          'Lomba 5K sekitar 3,1 mil, 10K adalah 6,2 mil, half marathon 13,1 mil (21,1 km), dan maraton 26,2 mil (42,2 km). Kecepatan lari (pace) dikonversi dengan pembagian: pace 8 menit per mil sekitar 4 menit 58 detik per kilometer, jadi lari yang sama terbaca sebagai angka yang lebih cepat dalam kilometer.',
        ],
      },
    ],
    faqs: [
      { q: '5 mil berapa km?', a: 'Sekitar 8,05 km.' },
      { q: '10 km berapa mil?', a: 'Sekitar 6,21 mil.' },
      { q: 'Apakah satu mil selalu sama?', a: 'Mil darat yang dipakai di AS dan Inggris selalu 1609,344 meter. Mil laut berbeda, yaitu 1852 meter.' },
    ],
  },
  'how-to-convert-feet-and-inches-to-cm': {
    title: 'Cara mengonversi kaki dan inci ke cm (tinggi badan)',
    description: 'Konversi tinggi seperti 5 ft 7 in ke sentimeter, dan inci ke cm dengan faktor tepat 2,54.',
    intro: 'Untuk mengonversi kaki dan inci ke sentimeter, ubah tinggi menjadi inci (kaki × 12, ditambah inci) lalu kalikan dengan 2,54. Jadi 5 ft 7 in adalah 67 inci, yaitu 170,18 cm. Konverter Panjang melakukannya dalam satu langkah untuk satu satuan tunggal.',
    steps: [
      'Tulis tingginya: 5 ft 7 in.',
      'Ubah kaki menjadi inci: 5 × 12 = 60, lalu tambahkan 7 sehingga menjadi 67 inci.',
      'Kalikan dengan 2,54: 67 × 2,54 = 170,18 cm.',
      'Untuk memeriksa, ketik 67 di konverter Panjang dengan inci sebagai From dan sentimeter sebagai To.',
    ],
    sections: [
      {
        heading: 'Faktor yang tepat',
        paragraphs: [
          'Satu inci didefinisikan tepat 2,54 sentimeter, jadi inci ke cm itu tepat, bukan perkiraan. Satu kaki dengan demikian tepat 30,48 cm. Definisi ini sudah tetap sejak 1959, sehingga konversinya tidak pernah berubah.',
        ],
      },
      {
        heading: 'Dari cm kembali ke kaki',
        paragraphs: [
          'Bagi sentimeter dengan 2,54 untuk mendapat inci, lalu bagi dengan 12 untuk kaki dan simpan sisanya sebagai inci. Untuk 175 cm: 175 ÷ 2,54 adalah 68,9 inci, yaitu 5 ft 8,9 in, biasanya ditulis 5 ft 9 in. Tinggi di formulir sering diminta dalam satu satuan saja, jadi periksa satuan mana yang diinginkan formulir.',
        ],
      },
      {
        heading: 'Perkiraan di kepala',
        paragraphs: [
          'Setiap kaki sekitar 30,5 cm dan setiap inci sekitar 2,5 cm, jadi 5 ft 7 in kira-kira 152 ditambah 18, atau sekitar 170 cm. Itu cukup dekat untuk pemeriksaan cepat. Untuk paspor, formulir medis, dan lamaran kerja, gunakan angka yang tepat dan bulatkan ke sentimeter utuh hanya jika formulir memintanya.',
        ],
      },
    ],
    faqs: [
      { q: '6 kaki berapa cm?', a: '182,88 cm.' },
      { q: '5 ft 4 in berapa cm?', a: '162,56 cm.' },
      { q: 'Apakah jawabannya dibulatkan?', a: 'Menampilkan hingga 10 angka signifikan, jadi Anda bisa membulatkan sendiri ke sentimeter utuh.' },
    ],
  },
  'how-to-convert-square-feet-to-square-metres': {
    title: 'Cara mengonversi kaki persegi ke meter persegi',
    description: 'Konversi sq ft ke sq m untuk apartemen dan kavling, dengan faktor tepat dan satuan luas yang dipakai di iklan properti.',
    intro: 'Untuk mengonversi kaki persegi ke meter persegi, bagi dengan 10,7639, atau kalikan dengan 0,092903. Jadi apartemen 1000 sq ft sekitar 92,9 meter persegi. Konverter Luas juga menangani acre, hektare, yard persegi, dan kilometer persegi.',
    steps: [
      'Tulis luasnya beserta satuannya, misalnya 1200 sq ft.',
      'Kalikan dengan 0,092903: 1200 × 0,092903 = 111,5 meter persegi.',
      'Dari meter persegi ke kaki persegi, kalikan dengan 10,7639.',
      'Atau buka konverter Luas dan pilih kaki persegi dan meter persegi.',
    ],
    sections: [
      {
        heading: 'Mengapa tidak bisa memakai faktor panjang begitu saja',
        paragraphs: [
          'Satu kaki adalah 0,3048 meter, jadi satu kaki persegi adalah 0,3048 × 0,3048 = 0,092903 meter persegi. Faktor konversi luas adalah kuadrat dari faktor panjang. Kesalahan umum adalah mengalikan dengan 0,3048 dan mendapat jawaban lebih dari tiga kali terlalu besar.',
        ],
      },
      {
        heading: 'Luas bersih dan luas bangunan',
        paragraphs: [
          'Iklan properti di India menyebut carpet area, built-up area, atau super built-up area, dan ketiganya berbeda untuk apartemen yang sama. Konversi ke meter persegi sama untuk semuanya, tetapi pastikan Anda membandingkan hal yang sepadan. Lahan yang lebih besar sering dalam acre (43.560 sq ft) atau hektare (10.000 meter persegi, sekitar 2,47 acre).',
        ],
      },
      {
        heading: 'Contoh perhitungan',
        paragraphs: [
          'Apartemen 900 sq ft sekitar 83,6 meter persegi. Kavling berukuran 30 kali 40 kaki adalah 1200 sq ft, sekitar 111,5 meter persegi. Satu acre adalah 43.560 sq ft, sekitar 4047 meter persegi. Mencoba dua atau tiga contoh ini di konverter adalah cara bagus untuk mendapat gambaran ukurannya sebelum membandingkan iklan dalam satuan berbeda.',
        ],
      },
    ],
    faqs: [
      { q: 'Berapa sq ft dalam satu meter persegi?', a: 'Sekitar 10,7639.' },
      { q: '500 sq ft berapa meter persegi?', a: 'Sekitar 46,45 meter persegi.' },
      { q: 'Apakah termasuk satuan tanah India?', a: 'Ya, konverter tanah India menambahkan gaj, bigha, guntha, dan lainnya, dengan catatan bahwa beberapa berbeda di tiap negara bagian.' },
    ],
  },
  'how-to-convert-litres-to-gallons-us-and-uk': {
    title: 'Cara mengonversi liter ke galon (AS vs Inggris)',
    description: 'Konversi liter ke galon AS dan Inggris, dan mengapa mil per galon berbeda antara kedua negara.',
    intro: 'Untuk mengonversi liter ke galon AS, bagi dengan 3,78541. Untuk galon Inggris (imperial), bagi dengan 4,54609. Jadi 10 liter sekitar 2,64 galon AS atau 2,20 galon Inggris. Konverter Volume memiliki keduanya dan juga mencakup cangkir, pint, dan mililiter.',
    steps: [
      'Putuskan galon mana yang Anda butuhkan. Resep dan harga bahan bakar AS memakai galon AS; yang Inggris memakai galon imperial.',
      'Bagi liter dengan 3,78541 untuk galon AS, atau dengan 4,54609 untuk galon Inggris.',
      'Dari galon ke liter, kalikan dengan angka yang sama.',
      'Atau buka konverter Volume dan pilih Gallon (US) atau Gallon (UK).',
    ],
    sections: [
      {
        heading: 'Mengapa ada dua galon',
        paragraphs: [
          'Galon AS berasal dari galon anggur lama sebesar 231 inci kubik. Galon Inggris didefinisikan pada 1824 sebagai volume sepuluh pon air dan kini ditetapkan tepat 4,54609 liter, sekitar 20 persen lebih besar. Pint, quart, dan cangkir mengikuti pembagian yang sama, jadi pint Inggris lebih besar daripada pint AS.',
        ],
      },
      {
        heading: 'Efisiensi bahan bakar',
        paragraphs: [
          'Karena galonnya berbeda, mil per galon juga berbeda. Mobil berperingkat 30 mpg di Inggris menempuh sekitar 25 mpg menurut ukuran AS. Jika Anda membandingkan efisiensi bahan bakar dari dua negara, konversikan ke liter per 100 km, yang sama di mana-mana. Cangkir masak yang dipakai di sini adalah cangkir AS sekitar 236,6 ml.',
        ],
      },
      {
        heading: 'Memasak dan bahan bakar',
        paragraphs: [
          'Satu pint AS adalah 473 ml tetapi pint Inggris 568 ml, jadi resep dari satu negara bisa gagal di negara lain. Untuk bahan bakar, tangki 50 liter menampung sekitar 13,2 galon AS atau sekitar 11 galon Inggris. Bila resep atau buku manual mobil tidak menyebut galon atau pint yang dimaksud, periksa untuk negara mana itu ditulis.',
        ],
      },
    ],
    faqs: [
      { q: 'Berapa liter dalam satu galon AS?', a: '3,78541 liter.' },
      { q: 'Berapa liter dalam satu galon Inggris?', a: '4,54609 liter.' },
      { q: 'Berapa ml dalam satu cangkir?', a: 'Sekitar 236,6 ml untuk cangkir AS yang dipakai di sini.' },
    ],
  },
  'how-to-convert-km-h-to-mph': {
    title: 'Cara mengonversi km/jam ke mph (dan knot)',
    description: 'Konversi kilometer per jam ke mil per jam, meter per detik, dan knot, dengan cara cepat memperkirakan.',
    intro: 'Untuk mengonversi km/jam ke mph, bagi dengan 1,609344, atau kalikan dengan 0,621371. Jadi 100 km/jam sekitar 62,1 mph. Konverter Kecepatan juga memberi meter per detik, kaki per detik, knot, dan Mach.',
    steps: [
      'Tulis kecepatannya beserta satuannya, misalnya 120 km/jam.',
      'Kalikan dengan 0,621371: 120 × 0,621371 = 74,6 mph.',
      'Dari mph ke km/jam, kalikan dengan 1,609344: 60 mph adalah 96,6 km/jam.',
      'Atau gunakan konverter Kecepatan dan pilih kedua satuan.',
    ],
    sections: [
      {
        heading: 'Perkiraan cepat',
        paragraphs: [
          'Untuk mengubah km/jam menjadi mph di kepala, kalikan dengan 0,6: 100 km/jam sekitar 60 mph, sedikit rendah tetapi bagus untuk menilai batas kecepatan. Untuk arah sebaliknya, kalikan mph dengan 1,6, atau bagi dua lalu tambahkan sedikit lebih dari setengahnya. Rambu jalan di Inggris dan AS memakai mph, dan kebanyakan negara lain memakai km/jam.',
        ],
      },
      {
        heading: 'Meter per detik dan knot',
        paragraphs: [
          'Bagi km/jam dengan 3,6 untuk mendapat meter per detik: 36 km/jam adalah 10 m/s. Satu knot adalah satu mil laut per jam, yaitu tepat 1,852 km/jam, jadi 20 knot sekitar 37 km/jam. Kapal dan pesawat memakai knot, dan laporan cuaca kadang menyatakan angin dalam knot.',
        ],
      },
      {
        heading: 'Batas kecepatan umum',
        paragraphs: [
          'Batas 30 mph sekitar 48 km/jam, dan 50 km/jam sekitar 31 mph. Batas 70 mph sekitar 113 km/jam, sedangkan batas jalan tol 120 km/jam sekitar 75 mph dan 130 km/jam sekitar 81 mph. Mengetahui beberapa di antaranya membantu saat Anda mengemudikan mobil sewaan di negara lain dan speedometer hanya menampilkan satu satuan.',
        ],
      },
    ],
    faqs: [
      { q: '60 mph berapa km/jam?', a: 'Sekitar 96,6 km/jam.' },
      { q: '100 km/jam berapa mph?', a: 'Sekitar 62,1 mph.' },
      { q: 'Apa itu Mach 1?', a: 'Sekitar 340 m/s di permukaan laut, yang dipakai konverter. Nilainya berubah menurut suhu dan ketinggian.' },
    ],
  },
  'how-to-convert-psi-to-bar-tyre-pressure': {
    title: 'Cara mengonversi psi ke bar untuk tekanan ban',
    description: 'Konversi psi ke bar, kPa, dan atmosfer, dengan tekanan ban mobil yang umum dan catatan untuk memeriksa tekanan Anda sendiri.',
    intro: 'Untuk mengonversi psi ke bar, bagi dengan 14,5038. Jadi 32 psi sekitar 2,2 bar. Untuk kembali, kalikan bar dengan 14,5038. Konverter Tekanan juga menangani pascal, kilopascal, atmosfer, dan mmHg.',
    steps: [
      'Tulis tekanannya beserta satuannya, misalnya 32 psi.',
      'Bagi dengan 14,5038: 32 ÷ 14,5038 = 2,21 bar.',
      'Untuk kPa, kalikan psi dengan 6,895: 32 psi sekitar 220,6 kPa.',
      'Atau buka konverter Tekanan dan pilih kedua satuan.',
    ],
    sections: [
      {
        heading: 'Tekanan ban',
        paragraphs: [
          'Ban mobil umumnya diisi sekitar 30 hingga 35 psi, yaitu kira-kira 2,1 hingga 2,4 bar atau 210 hingga 240 kPa. Selalu gunakan angka pada stiker di bingkai pintu pengemudi atau di buku manual, karena tergantung pada mobil dan muatan. Tekanan sebaiknya diperiksa saat ban dingin.',
        ],
      },
      {
        heading: 'Hubungan antarsatuan',
        paragraphs: [
          'Satu bar adalah 100.000 pascal, atau 100 kPa, dan mendekati tekanan atmosfer normal. Satu atmosfer standar adalah 101.325 pascal, sekitar 1,013 bar atau 14,7 psi. Cuaca dan tekanan darah memakai milimeter air raksa, di mana 760 mmHg adalah satu atmosfer standar.',
        ],
      },
      {
        heading: 'Tempat lain tekanan muncul',
        paragraphs: [
          'Ban sepeda balap umumnya dipompa sekitar 80 hingga 130 psi, yaitu kira-kira 5,5 hingga 9 bar, sedangkan sepeda gunung memakai jauh lebih rendah. Selalu periksa batas maksimum yang tercetak di sisi ban. Ban serep dan sebagian van serta mobil bermuatan membutuhkan tekanan yang berbeda dari angka mobil biasa, jadi baca stiker kendaraan Anda.',
        ],
      },
    ],
    faqs: [
      { q: '2 bar berapa psi?', a: 'Sekitar 29 psi.' },
      { q: 'Bar atau kPa yang lebih umum di pompa?', a: 'Berbeda-beda menurut negara. Banyak pompa bengkel menampilkan psi, bar, dan kPa berdampingan.' },
      { q: 'Apakah tekanan gauge berbeda?', a: 'Alat ukur ban menunjukkan tekanan di atas udara sekitar. Konverter hanya mengubah satuan dan tidak menambah atau mengurangi tekanan atmosfer.' },
    ],
  },
};

export default guides;
