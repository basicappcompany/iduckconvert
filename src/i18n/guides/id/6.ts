import type { GuideSet } from '../types';

/** Indonesian guides, batch 6. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-write-an-amount-in-words-for-a-cheque': {
    title: 'Cara menulis jumlah dengan kata pada cek',
    description: 'Tulis jumlah rupee dan dolar dengan kata seperti yang diharapkan cek dan faktur, dengan lakh dan crore atau juta dan miliar.',
    intro: 'Untuk menulis jumlah dengan kata pada cek, buka konverter Angka ke kata, ketik jumlahnya, pilih gaya India atau internasional, dan pilih rupee dan paise atau dolar dan sen. 1250.50 menjadi "Rupees One Thousand Two Hundred Fifty and Paise Fifty Only".',
    steps: [
      'Ketik jumlah dalam angka. Koma tidak masalah, dan desimal menghasilkan paise atau sen.',
      'Pilih gaya India (thousand, lakh, crore) atau internasional (thousand, million, billion).',
      'Di bawah "Write as", pilih rupee dan paise atau dolar dan sen.',
      'Salin kata-katanya dan bandingkan dengan angkanya sebelum Anda mengisi cek.',
    ],
    sections: [
      {
        heading: 'Gaya India dan internasional',
        paragraphs: [
          'Dalam sistem India, 1,00,000 adalah satu lakh dan 1,00,00,000 adalah satu crore. Dalam sistem internasional, 1,000,000 adalah satu juta dan 1,000,000,000 adalah satu miliar (one billion). Angka yang sama dieja berbeda: 12,50,000 adalah dua belas lakh lima puluh ribu dalam gaya India dan satu juta dua ratus lima puluh ribu dalam gaya internasional.',
        ],
      },
      {
        heading: 'Mengapa "Only" di akhir',
        paragraphs: [
          'Cek mengakhiri kata-kata dengan "Only" agar tidak ada yang bisa ditambahkan sesudahnya. Bank juga mengharapkan kata dan angka cocok. Jika berbeda, bank bisa menolak cek atau mengikuti kata-katanya. Selalu periksa hasilnya dengan aturan bank Anda sendiri sebelum menandatangani.',
        ],
      },
      {
        heading: 'Mengisi cek',
        paragraphs: [
          'Tulis kata-katanya mulai dari paling kiri garis, dan tarik garis melewati ruang yang tidak terpakai setelah "Only" agar tidak ada yang bisa ditambahkan. Pastikan kata dan angka cocok persis. Jika Anda salah, tanyakan kepada bank Anda cara memperbaiki atau membatalkan cek, karena menimpa tulisan bisa membuatnya ditolak. Alat ini membantu ejaan, tetapi aturan bank selalu berlaku.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah menangani paise dan sen?', a: 'Ya. Dua angka setelah titik menjadi paise atau sen, ditulis setelah "and".' },
      { q: 'Seberapa besar angka yang bisa ditulisnya?', a: 'Gaya internasional sampai sekstiliun dan gaya India terus menghitung dalam crore, jadi jumlah nyata apa pun bisa.' },
      { q: 'Apakah jumlahnya dikirim ke suatu tempat?', a: 'Tidak. Kata-katanya dibuat di browser Anda saat Anda mengetik.' },
    ],
  },
  'how-to-convert-binary-hex-and-decimal': {
    title: 'Cara mengonversi biner, heksa, dan desimal',
    description: 'Konversi antara biner, oktal, desimal, dan heksadesimal secara manual dan dengan konverter, lengkap dengan contoh.',
    intro: 'Untuk mengonversi antar basis bilangan, ketik angka Anda di kotak mana pun pada konverter Basis bilangan dan baca yang lain. Secara manual, biner 1010 adalah 10 dalam desimal dan heksa FF adalah 255. Heksa hanyalah cara yang lebih singkat untuk menulis biner, empat bit sekaligus.',
    steps: [
      'Buka konverter Basis bilangan.',
      'Klik kotak untuk basis yang Anda punya (biner, oktal, desimal, atau heksa) dan ketik angkanya.',
      'Baca tiga kotak lainnya, yang diperbarui seketika.',
      'Tekan "Copy" di sebelah yang Anda butuhkan.',
    ],
    sections: [
      {
        heading: 'Cara kerja biner ke desimal',
        paragraphs: [
          'Setiap tempat biner adalah pangkat dua, dari kanan: 1, 2, 4, 8, 16, dan seterusnya. Untuk 1010, jumlahkan tempat yang berisi angka 1: 8 + 2 = 10. Satu byte adalah delapan bit, jadi sampai 11111111, yaitu 255.',
        ],
      },
      {
        heading: 'Mengapa pemrogram memakai heksa',
        paragraphs: [
          'Heksadesimal punya 16 angka, 0 sampai 9 dan A sampai F. Satu angka heksa tepat empat bit, jadi satu byte selalu dua angka heksa: FF adalah 11111111, yaitu 255. Itu menjadikan heksa cara ringkas menulis data biner, alamat memori, dan kode warna. Awalan 0x menandai bilangan heksa di banyak bahasa pemrograman.',
          'Konverter memakai matematika bilangan bulat yang tepat, jadi angka yang sangat panjang dikonversi tanpa pembulatan.',
        ],
      },
      {
        heading: 'Contoh latihan',
        paragraphs: [
          'Biner 1111 adalah 15, dan 101010 adalah 42. Heksa 1A adalah 26, dan desimal 255 adalah FF dalam heksa dan 11111111 dalam biner. Oktal jarang dipakai sekarang, tetapi izin file Unix ditulis dengannya: oktal 755 adalah 493 dalam desimal, dan setiap angka oktal tepat tiga bit, jadi 7 adalah 111 dan 5 adalah 101. Coba masing-masing di konverter untuk melihat kotak lain terisi.',
        ],
      },
    ],
    faqs: [
      { q: 'Bisakah mengonversi bilangan negatif?', a: 'Bisa, dengan tanda minus. Ia tidak menampilkan pola bit komplemen dua.' },
      { q: 'Apakah menerima awalan 0x atau 0b?', a: 'Ya. 0xFF di kotak heksa dibaca sebagai 255.' },
      { q: 'Apakah menangani pecahan?', a: 'Tidak. Ia untuk bilangan bulat.' },
    ],
  },
  'how-to-read-and-write-roman-numerals': {
    title: 'Cara membaca dan menulis angka Romawi',
    description: 'Pelajari tujuh huruf angka Romawi, aturan pengurangan, dan batas 3999, serta konversi angka dua arah.',
    intro: 'Untuk menulis angka dalam angka Romawi, pecah menjadi ribuan, ratusan, puluhan, dan satuan lalu tulis masing-masing dengan I, V, X, L, C, D, dan M. 1994 adalah MCMXCIV. Konverter Angka Romawi melakukannya dua arah, untuk angka dari 1 sampai 3999.',
    steps: [
      'Pelajari tujuh hurufnya: I adalah 1, V adalah 5, X adalah 10, L adalah 50, C adalah 100, D adalah 500, dan M adalah 1000.',
      'Pecah angkanya: 1994 adalah 1000 + 900 + 90 + 4.',
      'Tulis tiap bagian: M, CM, XC, dan IV.',
      'Gabungkan: MCMXCIV. Atau ketik angkanya di konverter dan salin hasilnya.',
    ],
    sections: [
      {
        heading: 'Aturan pengurangan',
        paragraphs: [
          'Huruf yang lebih kecil sebelum yang lebih besar dikurangkan: IV adalah 4, IX adalah 9, XL adalah 40, XC adalah 90, CD adalah 400, dan CM adalah 900. Huruf yang lebih kecil setelah yang lebih besar ditambahkan: VI adalah 6. Satu huruf diulang paling banyak tiga kali berturut-turut, jadi 4 adalah IV dan bukan IIII.',
        ],
      },
      {
        heading: 'Batas dan keunikan',
        paragraphs: [
          'Angka Romawi standar tidak punya nol dan tidak punya lambang di atas M, jadi angka terbesar adalah MMMCMXCIX, yaitu 3999. Muka jam sering mencetak 4 sebagai IIII, tetapi konverter ini hanya menerima bentuk standar agar bisa menangkap kesalahan ketik. Angka Romawi masih dipakai untuk tahun film, bab buku, raja dan ratu, dan beberapa tanggal bangunan.',
        ],
      },
    ],
    faqs: [
      { q: 'Bagaimana membaca MCMXCIV?', a: 'M adalah 1000, CM adalah 900, XC adalah 90, dan IV adalah 4, jadi 1994.' },
      { q: 'Mengapa tidak ada nol?', a: 'Bangsa Romawi tidak punya lambang untuk nol, jadi konverter dimulai dari 1.' },
      { q: 'Apakah berfungsi di ponsel?', a: 'Ya, dan berjalan sepenuhnya di browser Anda.' },
    ],
  },
  'how-to-change-text-case-camel-snake-title': {
    title: 'Cara mengubah huruf besar kecil: camel, snake, dan Title Case',
    description: 'Ubah teks antara huruf besar, huruf kecil, Judul, kalimat, camelCase, snake_case, dan kebab-case dengan satu klik.',
    intro: 'Untuk mengubah huruf besar kecil teks, tempel teks Anda di konverter Huruf besar kecil dan tekan format yang diinginkan: huruf besar, huruf kecil, Judul, kalimat, camelCase, PascalCase, snake_case, kebab-case, atau CONSTANT_CASE. Salin hasilnya dengan satu klik.',
    steps: [
      'Buka konverter Huruf besar kecil dan tempel teks Anda.',
      'Tekan tombol format yang Anda butuhkan. Hasilnya muncul di bawah.',
      'Periksa. Title Case bersifat mekanis dan akan menjadikan kata kecil berhuruf besar juga.',
      'Tekan "Copy" dan tempel di tempat yang Anda perlukan.',
    ],
    sections: [
      {
        heading: 'Format untuk menulis',
        paragraphs: [
          'HURUF BESAR untuk penekanan atau singkatan, dan huruf kecil untuk teks yang bersih dan santai. Title Case menjadikan huruf pertama setiap kata berhuruf besar, seperti judul buku. Format kalimat hanya menjadikan kata pertama setiap kalimat berhuruf besar, seperti tulisan biasa, dan lebih mudah dibaca untuk judul panjang.',
        ],
      },
      {
        heading: 'Format untuk kode dan URL',
        paragraphs: [
          'Pemrogram menggabungkan kata tanpa spasi. camelCase (helloWorld) umum untuk variabel, PascalCase (HelloWorld) untuk nama kelas, snake_case (hello_world) di Python dan basis data, kebab-case (hello-world) di alamat web dan nama file, dan CONSTANT_CASE untuk nilai tetap. Konverter memisahkan kata pada spasi, tanda baca, dan huruf kapital, jadi ia bisa mengubah satu gaya menjadi gaya lain.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah mengikuti aturan panduan gaya untuk judul?', a: 'Tidak. Title Case di sini menjadikan setiap kata berhuruf besar. Panduan gaya membiarkan kata kecil seperti "of" dan "the" berhuruf kecil, jadi sesuaikan secara manual jika perlu.' },
      { q: 'Apakah berfungsi dengan aksara beraksen?', a: 'Ya untuk huruf yang punya huruf besar dan kecil, seperti é, ü, dan Sirilik. Huruf i Turki bertitik dan tak bertitik mengikuti aturan standar dan mungkin perlu perbaikan manual.' },
      { q: 'Apakah teks saya dikirim ke suatu tempat?', a: 'Tidak. Ia diubah di browser Anda saat Anda mengetik.' },
    ],
  },
  'how-to-convert-hex-to-rgb-and-hsl': {
    title: 'Cara mengonversi warna HEX ke RGB dan HSL',
    description: 'Konversi kode warna antara HEX, RGB, dan HSL untuk CSS dan pekerjaan desain, dengan contoh warna langsung.',
    intro: 'Untuk mengonversi kode warna, ketik nilai HEX, RGB, atau HSL di konverter Kode warna. Dua lainnya diperbarui dan Anda melihat warnanya. #FFD23F adalah rgb(255, 210, 63), dan hsl(45, 100%, 62%) adalah warna yang sama.',
    steps: [
      'Buka konverter Kode warna.',
      'Ketik kode HEX di kotak pertama, dengan atau tanpa #, atau pakai pemilih warna.',
      'Baca nilai RGB dan HSL dan lihat contoh warnanya untuk memeriksa.',
      'Tekan "Copy" di sebelah kode yang dibutuhkan CSS atau alat desain Anda.',
    ],
    sections: [
      {
        heading: 'Bagaimana HEX dan RGB berhubungan',
        paragraphs: [
          'Kode HEX adalah tiga pasang angka basis 16 untuk merah, hijau, dan biru. #FFD23F adalah FF (255) merah, D2 (210) hijau, dan 3F (63) biru. RGB menulis tiga angka yang sama dalam desimal. Kode tiga angka seperti #F80 adalah singkatan yang menggandakan setiap angka, jadi sama dengan #FF8800.',
        ],
      },
      {
        heading: 'Kapan HSL membantu',
        paragraphs: [
          'HSL menggambarkan warna dengan rona (posisi pada roda warna dari 0 sampai 360), saturasi (seberapa cerah), dan kecerahan (seberapa terang atau gelap). Itu memudahkan pembuatan versi lebih terang atau lebih gelap dari warna merek hanya dengan mengubah kecerahan, yang sulit dilakukan di HEX. Bolak-balik lewat HSL bisa menggeser nilai satu angka karena HSL dibulatkan ke bilangan bulat; HEX dan RGB tetap tepat.',
        ],
      },
    ],
    faqs: [
      { q: 'Apa arti HEX 8 angka?', a: 'Ia menambahkan pasangan alfa (transparansi) di akhir. Konverter ini menangani kode enam dan tiga angka.' },
      { q: 'Bagaimana membuat warna lebih gelap?', a: 'Turunkan kecerahan di HSL, lalu salin HEX atau RGB yang cocok.' },
      { q: 'Apakah ada yang diunggah?', a: 'Tidak. Semuanya dihitung di browser Anda.' },
    ],
  },
};

export default guides;
