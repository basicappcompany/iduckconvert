import type { GuideSet } from '../types';

/** Indonesian guides, batch 5. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-markdown-to-html': {
    title: 'Cara mengonversi Markdown ke HTML',
    description: 'Ubah catatan Markdown dan teks README menjadi HTML bersih yang bisa ditempel ke halaman web atau CMS.',
    intro: 'Untuk mengonversi Markdown ke HTML, tempel Markdown Anda di konverter Markdown ke HTML. Anda mendapat HTML untuk judul, paragraf, daftar, tautan, tabel, dan kode, siap ditempel ke halaman atau sistem konten.',
    steps: [
      'Tulis atau tempel Markdown Anda, atau tekan "Try an example" untuk melihat bagian-bagiannya.',
      'Buka Markdown ke HTML dan tempel di kotak sebelah kiri.',
      'Baca HTML di sebelah kanan. Itu hanya isinya, tanpa tag html atau body.',
      'Salin atau unduh, lalu letakkan di dalam templat halaman Anda sendiri.',
    ],
    sections: [
      {
        heading: 'Apa yang didukung',
        paragraphs: [
          'Markdown standar (judul dengan #, tebal dengan **, daftar, tautan, gambar, kutipan, dan blok kode) ditambah tambahan GitHub yang umum: tabel, daftar tugas, dan teks coret. HTML mentah di dalam Markdown diteruskan tanpa perubahan.',
        ],
      },
      {
        heading: 'Catatan keamanan',
        paragraphs: [
          'Keluarannya adalah konversi biasa. Jika Markdown berasal dari orang lain, ia bisa berisi skrip yang disembunyikan sebagai HTML mentah. Lewatkan hasilnya lewat pembersih HTML Anda sendiri sebelum menerbitkannya di situs yang menampilkan konten orang lain.',
        ],
      },
      {
        heading: 'Kesalahan Markdown yang umum',
        paragraphs: [
          'Daftar perlu baris kosong sebelumnya, dan paragraf dipisahkan oleh baris kosong. Judul perlu spasi setelah tanda pagar, jadi tulis # Judul dan bukan #Judul. Untuk memaksa pergantian baris di dalam paragraf, akhiri baris dengan dua spasi. Tabel perlu baris header yang diikuti baris pemisah berupa tanda hubung. Jika HTML tampak salah, penyebabnya hampir selalu salah satu dari ini.',
        ],
      },
    ],
    faqs: [
      { q: 'Bisakah saya kembali dari HTML ke Markdown?', a: 'Bisa, dengan HTML ke Markdown. Gaya dan tata letak hilang, tetapi judul, daftar, tautan, dan teks tebal ikut terbawa.' },
      { q: 'Apakah menambahkan gaya?', a: 'Tidak. Anda mendapat HTML tanpa gaya yang mengikuti gaya halaman tempat Anda meletakkannya.' },
      { q: 'Apakah teks saya diunggah?', a: 'Tidak. Ia dikonversi di tab browser Anda.' },
    ],
  },
  'how-to-fix-garbled-text-and-wrong-encoding': {
    title: 'Cara memperbaiki teks kacau dan pengodean yang salah',
    description: 'Perbaiki file teks yang menampilkan karakter aneh seperti Ã© dengan memilih pengodean yang tepat dan menyimpan UTF-8 yang bersih.',
    intro: 'Untuk memperbaiki file teks yang kacau, letakkan di Perbaikan encoding TXT, pilih pengodean tempat file itu ditulis (coba Windows-1252 dulu), periksa pratinjau, lalu unduh salinan UTF-8. Teks kacau berarti file dibaca dengan pengodean yang salah.',
    steps: [
      'Buka Perbaikan encoding TXT dan letakkan file Anda.',
      'Lihat pratinjau. Jika aksara beraksen tampak seperti Ã© atau é, file itu kemungkinan Windows-1252.',
      'Pilih pengodean lain dari daftar sampai pratinjau terbaca benar. Windows-1251 mencakup Sirilik; Shift_JIS, GBK, dan Big5 mencakup Jepang dan Tionghoa.',
      'Tekan "Konversi" dan unduh salinan UTF-8. File asli Anda tidak tersentuh.',
    ],
    sections: [
      {
        heading: 'Apa yang terjadi',
        paragraphs: [
          'File teks hanyalah angka. Pengodean adalah tabel yang menyatakan huruf apa yang dimaksud setiap angka. UTF-8 bisa menulis semua bahasa, sedangkan tabel lama seperti Windows-1252 mencakup satu wilayah. Jika file ditulis dengan satu tabel dan dibaca dengan tabel lain, karakter berubah menjadi tidak masuk akal seperti Ã© alih-alih é.',
        ],
      },
      {
        heading: 'Mengapa UTF-8 yang harus disimpan',
        paragraphs: [
          'UTF-8 dipahami hampir setiap program, situs web, dan basis data saat ini. Menyimpan teks Anda dalam UTF-8 berarti ia terbuka dengan cara yang sama di mana pun. Jika CSV masih tampak salah di Excel setelah diperbaiki, konversi dengan CSV ke Excel, yang membaca UTF-8 dengan benar.',
        ],
      },
    ],
    faqs: [
      { q: 'Bagaimana saya tahu pengodean mana yang dipilih?', a: 'Coba yang mungkin dan amati pratinjaunya. Yang tepat membuat setiap huruf terbaca. Lihat dari mana file berasal: ekspor Windows lama sering berformat Windows-1252.' },
      { q: 'Mengapa saya melihat tanda tanya atau kotak?', a: 'Karakter itu sudah hilang sebelum Anda membuka file. Memilih pengodean lain tidak bisa mengembalikan apa yang telah digantikan.' },
      { q: 'Apakah file saya diunggah?', a: 'Tidak. Ia dibaca dan dikonversi di dalam browser Anda.' },
    ],
  },
  'how-to-convert-celsius-to-fahrenheit': {
    title: 'Cara mengonversi Celsius ke Fahrenheit (dan sebaliknya)',
    description: 'Rumusnya, pintasan mental yang cepat, dan konverter untuk Celsius, Fahrenheit, dan Kelvin.',
    intro: 'Untuk mengonversi Celsius ke Fahrenheit, kalikan 9, bagi 5, lalu tambahkan 32. Jadi 100 °C adalah 212 °F dan 0 °C adalah 32 °F. Untuk kembali, kurangi 32, kalikan 5, lalu bagi 9.',
    steps: [
      'Tulis suhu beserta satuannya, misalnya 25 °C.',
      'Kalikan 9: 25 × 9 = 225.',
      'Bagi 5: 225 ÷ 5 = 45.',
      'Tambahkan 32: 45 + 32 = 77 °F.',
      'Atau buka Konverter suhu, ketik 25, pilih Celsius ke Fahrenheit, dan baca jawabannya.',
    ],
    sections: [
      {
        heading: 'Pintasan mental',
        paragraphs: [
          'Untuk jawaban kasar, gandakan angka Celsius lalu tambahkan 30. Itu menghasilkan 80 untuk 25 °C, mendekati 77 yang sebenarnya. Paling baik antara 0 dan 30 °C dan menyimpang lebih jauh di titik ekstrem. Untuk memasak, kedokteran, dan sains, pakai rumus yang tepat.',
        ],
      },
      {
        heading: 'Mengapa tidak bisa sekadar mengalikan',
        paragraphs: [
          'Kebanyakan konversi satuan berupa satu perkalian. Skala suhu dimulai dari titik nol yang berbeda: 0 °C adalah 32 °F. Itulah sebabnya rumusnya punya langkah tambah atau kurang, dan mengapa menggandakan suhu Celsius tidak menggandakan Fahrenheit.',
          'Kelvin memakai ukuran derajat yang sama dengan Celsius tetapi mulai dari nol mutlak: tambahkan 273,15 ke nilai Celsius untuk mendapat Kelvin. Kedua skala bertemu di -40, tempat Celsius dan Fahrenheit sama.',
        ],
      },
    ],
    faqs: [
      { q: 'Berapa 37 °C dalam Fahrenheit?', a: 'Sekitar 98,6 °F, suhu tubuh manusia normal.' },
      { q: 'Suhu oven berapa 180 °C?', a: '356 °F, biasanya dibulatkan menjadi 350 °F dalam resep.' },
      { q: 'Bagaimana mengonversi Fahrenheit ke Celsius?', a: 'Kurangi 32, kalikan 5, bagi 9. 212 °F menghasilkan 100 °C.' },
    ],
  },
  'how-to-convert-bigha-gaj-and-acre-to-square-feet': {
    title: 'Cara mengonversi bigha, gaj, dan acre ke kaki persegi',
    description: 'Konversi satuan tanah India ke kaki persegi, dengan angka yang tetap dan yang berubah menurut negara bagian.',
    intro: 'Untuk mengonversi satuan tanah India, buka konverter satuan tanah India, ketik angkanya, dan pilih satuannya. Satu gaj adalah 9 kaki persegi dan satu acre adalah 43.560 kaki persegi, tetapi bigha berbeda menurut negara bagian, jadi selalu periksa catatan setempat sebelum membeli atau menjual.',
    steps: [
      'Tentukan satuan yang dipakai dokumen Anda. Jika tertulis bigha, catat negara bagiannya, karena ukurannya berubah.',
      'Buka konverter satuan tanah India dan ketik luasnya.',
      'Pilih satuan yang Anda punya di From dan kaki persegi (atau acre) di To.',
      'Baca jawabannya dan catatan tentang negara bagian. Cocokkan dengan catatan pendapatan Anda.',
    ],
    sections: [
      {
        heading: 'Satuan tetap',
        paragraphs: [
          'Satu gaj adalah satu yard persegi, yaitu 9 kaki persegi. Satu acre adalah 43.560 kaki persegi, atau sekitar 4.047 meter persegi. Satu hektare adalah 10.000 meter persegi, sekitar 2,47 acre atau kira-kira 107.639 kaki persegi. Ini sama di mana pun.',
        ],
      },
      {
        heading: 'Satuan yang berubah menurut negara bagian',
        paragraphs: [
          'Bigha tidak punya satu ukuran. Kira-kira 27.000 kaki persegi di Uttar Pradesh, sekitar 17.400 di Gujarat, dan 14.400 di Benggala Barat dan Assam, dan bisa berbeda menurut distrik serta apakah kebiasaan setempat adalah bigha pucca atau kachha. Biswa, katha, guntha, dan cent juga bervariasi menurut wilayah.',
          'Karena itu, perlakukan konversi satuan setempat apa pun sebagai perkiraan dan pakai angka di dokumen pendapatan resmi untuk urusan hukum.',
        ],
      },
    ],
    faqs: [
      { q: 'Berapa kaki persegi dalam satu bigha?', a: 'Bergantung pada negara bagian, dari sekitar 14.400 sampai sekitar 27.000 kaki persegi di tempat yang tercantum di sini. Pakai konverter dan catatannya, lalu pastikan secara lokal.' },
      { q: 'Berapa gaj dalam satu acre?', a: '4.840 gaj, karena satu acre adalah 43.560 kaki persegi dan satu gaj adalah 9.' },
      { q: 'Apakah aman untuk keperluan hukum?', a: 'Tidak. Ini kalkulator untuk perkiraan. Dokumen properti harus memakai angka di catatan resmi.' },
    ],
  },
  'how-many-mb-in-a-gb': {
    title: 'Berapa MB dalam satu GB? 1000 atau 1024 dijelaskan',
    description: 'Mengapa satu gigabyte adalah 1000 MB di paket ponsel tetapi 1024 MiB di beberapa sistem, dan cara mengonversi KB, MB, GB, dan TB.',
    intro: 'Satu gigabyte adalah 1.000 megabyte dalam sistem desimal (SI) yang dipakai pembuat disk dan paket ponsel, dan satu gibibyte adalah 1.024 mebibyte dalam sistem biner yang dipakai beberapa sistem operasi. Untuk mengonversi, pilih sistem yang tepat dan kalikan atau bagi dengan 1.000 atau 1.024.',
    steps: [
      'Tentukan sistem mana yang Anda butuhkan. Penyimpanan yang dijual di toko, kecepatan jaringan, dan paket data memakai 1.000.',
      'Buka konverter ukuran data dan ketik jumlahnya.',
      'Pilih KB, MB, GB, atau TB untuk sistem 1.000, atau KiB, MiB, GiB, dan TiB untuk sistem 1.024.',
      'Baca hasilnya dalam satuan yang Anda inginkan.',
    ],
    sections: [
      {
        heading: 'Dari mana kedua sistem berasal',
        paragraphs: [
          'Komputer bekerja dengan pangkat dua, dan 1.024 (2 pangkat 10) dekat dengan 1.000. Perangkat lunak awal memakai KB untuk 1.024 byte, sedangkan pembuat perangkat keras memakai 1.000 metrik. Untuk mengakhiri kebingungan, nama KiB, MiB, dan GiB dibuat untuk satuan berbasis 1.024. Dalam pemakaian sehari-hari keduanya masih muncul dengan nama biasa.',
        ],
      },
      {
        heading: 'Mengapa disk menampilkan ruang lebih sedikit',
        paragraphs: [
          'Disk yang dijual sebagai 1 TB menampung 1.000.000.000.000 byte. Sistem yang menampilkan ukuran dalam satuan berbasis 1.024 melaporkannya sebagai sekitar 931 GiB, jadi angkanya tampak lebih kecil padahal tidak ada yang hilang. Efek yang sama membuat ponsel 128 GB menampilkan sedikit kurang dari 128 di beberapa menu.',
        ],
      },
    ],
    faqs: [
      { q: 'Mana yang benar, 1.000 atau 1.024?', a: 'Keduanya benar dalam sistemnya sendiri. KB, MB, dan GB secara resmi berbasis 1.000; KiB, MiB, dan GiB berbasis 1.024.' },
      { q: 'Berapa MB 1 GB di paket data saya?', a: 'Paket memakai 1.000, jadi 1 GB adalah 1.000 MB. Tanyakan penyedia Anda jika angka pastinya penting.' },
      { q: 'Berapa byte dalam satu megabyte?', a: '1.000.000 dalam sistem desimal dan 1.048.576 dalam satu mebibyte.' },
    ],
  },
};

export default guides;
