import type { GuideSet } from '../types';

/** Indonesian guides, batch 7. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-time-zones-for-a-meeting': {
    title: 'Cara mengonversi zona waktu untuk rapat (IST, EST, GMT)',
    description: 'Temukan waktu rapat yang tepat antara India, AS, Inggris, dan lainnya, dan hindari jebakan waktu musim panas.',
    intro: 'Untuk mengonversi waktu rapat, pilih tanggal, waktu, dan zona awal Anda di konverter zona waktu, lalu tambahkan kota yang Anda inginkan. Ia menangani waktu musim panas untuk tanggal yang tepat. India (IST) adalah UTC+05:30 sepanjang tahun dan tidak pernah mengubah jamnya.',
    steps: [
      'Buka konverter zona waktu dan pilih tanggal rapat.',
      'Ketik waktunya dan pilih zona tempat waktu itu ditulis, misalnya India (Kolkata).',
      'Tambahkan kota orang lain. Setiap baris menampilkan waktu dan tanggal lokalnya.',
      'Cari label "next day" atau "previous day", lalu bagikan waktunya kepada semua orang.',
    ],
    sections: [
      {
        heading: 'Jebakan waktu musim panas',
        paragraphs: [
          'Selisih antara dua tempat bisa berubah sepanjang tahun. Amerika Serikat mengubah jam pada tanggal yang berbeda dari Inggris dan Eropa, jadi selama beberapa minggu di musim semi dan musim gugur selisih antara New York dan London berbeda satu jam dari waktu lainnya. India dan banyak negara lain tidak mengubah jam sama sekali, jadi selisih ke mereka berubah setiap kali pihak lain mengubahnya.',
          'Selalu konversi untuk tanggal rapat yang tepat, bukan untuk hari ini. Konverter melakukannya dengan data zona waktu bawaan browser Anda.',
        ],
      },
      {
        heading: 'Garis tanggal dan rapat larut malam',
        paragraphs: [
          'Malam larut di India adalah pagi atau malam yang sama di Amerika Serikat, dan dini hari di Jepang adalah malam sebelumnya di India. Ketika tanggalnya berbeda, mudah memesan hari yang salah, jadi periksa kolom tanggal dan tulis tanggal lengkap di undangan.',
        ],
      },
    ],
    faqs: [
      { q: 'Berapa IST dalam waktu New York?', a: 'India lebih awal 10 jam 30 menit dari New York di musim dingin (EST) dan 9 jam 30 menit di musim panas (EDT), karena India tidak mengubah jamnya. Konverter menampilkan angka tepat untuk tanggal Anda.' },
      { q: 'Apakah memakai lokasi saya?', a: 'Hanya untuk memilih zona awal. Browser Anda menyediakan zona waktunya dan tidak ada yang dikirim ke mana pun.' },
      { q: 'Bagaimana jika kota saya tidak ada di daftar?', a: 'Pilih kota di zona waktu yang sama.' },
    ],
  },
  'how-to-write-dates-without-confusion': {
    title: 'Cara menulis tanggal tanpa kebingungan: DD/MM atau MM/DD',
    description: 'Mengapa 04/03/2026 berarti tanggal berbeda di India dan AS, dan cara menulis tanggal agar tidak ada yang salah membacanya.',
    intro: 'Untuk menulis tanggal tanpa kebingungan, pakai format ISO 2026-03-04 atau tulis bulannya dengan huruf, misalnya 4 Maret 2026. Tanggal numerik 04/03/2026 berarti 4 Maret di India dan Inggris tetapi 3 April di Amerika Serikat.',
    steps: [
      'Tentukan siapa yang akan membaca tanggalnya. Jika mereka mungkin memakai urutan berbeda, hindari bentuk yang semuanya angka.',
      'Pakai ISO 8601 (YYYY-MM-DD) untuk formulir, nama file, dan data. Ia terurut menurut tanggal.',
      'Atau tulis bulan sebagai kata: 4 Maret 2026 atau March 4, 2026.',
      'Pakai konverter format tanggal untuk melihat satu tanggal dalam semua format umum dan salin yang Anda butuhkan.',
    ],
    sections: [
      {
        heading: 'Tiga urutan yang dipakai',
        paragraphs: [
          'Hari-bulan-tahun (DD/MM/YYYY) dipakai di India, Inggris, dan sebagian besar dunia. Bulan-hari-tahun (MM/DD/YYYY) dipakai di Amerika Serikat. Tahun-bulan-hari (YYYY/MM/DD) dipakai di Jepang, Tiongkok, dan Korea, dan menjadi dasar ISO 8601. Tanggal yang harinya 13 atau lebih tidak ambigu, tetapi 04/03 dan 05/06 ambigu.',
        ],
      },
      {
        heading: 'Mengapa ISO 8601 lebih aman',
        paragraphs: [
          'ISO 8601 menulis satuan terbesar lebih dulu, jadi 2026-03-04 hanya bisa dibaca satu cara, dan daftar tanggal ISO terurut dengan benar sebagai teks biasa. Basis data, pemrogram, dan formulir internasional menyukainya. Untuk tulisan yang ramah, bulan yang dieja menghilangkan keraguan bagi pembaca manusia.',
        ],
      },
    ],
    faqs: [
      { q: 'Bagaimana memasukkan tanggal agar dibaca benar oleh konverter?', a: 'Ketik tanggalnya dan beri tahu konverter apakah hari, bulan, atau tahun yang lebih dulu. Ia kemudian menampilkan semua format lain.' },
      { q: 'Apakah menerima tahun dua angka?', a: 'Ya. Tahun dua angka seperti 26 dibaca sebagai 2026.' },
      { q: 'Mengapa ia mengatakan tanggal saya tidak nyata?', a: 'Entah harinya tidak ada (31 Februari) atau urutannya salah (bulan 25).' },
    ],
  },
  'how-to-convert-tiff-to-jpg': {
    title: 'Cara mengonversi TIFF ke JPG',
    description: 'Ubah pindaian dan foto TIFF menjadi file JPG kecil yang terbuka di mana saja, termasuk TIFF multi-halaman.',
    intro: 'Untuk mengonversi TIFF ke JPG, letakkan file TIFF Anda di konverter, pilih kualitas (90 adalah bawaan yang baik), lalu tekan "Konversi". Setiap halaman TIFF multi-halaman menjadi JPG sendiri, dan Anda bisa mengunduh semuanya sebagai ZIP.',
    steps: [
      'Buka TIFF ke JPG dan letakkan file .tif atau .tiff Anda.',
      'Pilih kualitas. 90 mempertahankan sebagian besar detail; nilai lebih rendah menghasilkan file lebih kecil.',
      'Tekan "Konversi".',
      'Unduh JPG, atau ZIP jika ada beberapa halaman atau file.',
    ],
    sections: [
      {
        heading: 'Mengapa orang mengonversi TIFF',
        paragraphs: [
          'TIFF adalah format berkualitas tinggi yang dipakai pemindai, perangkat lunak faks, dan fotografi profesional. File-nya besar, dan kebanyakan browser web (selain Safari), klien email, dan formulir tidak bisa menampilkan atau menerimanya. JPG jauh lebih kecil dan bekerja di hampir semua tempat.',
        ],
      },
      {
        heading: 'Apa yang diharapkan',
        paragraphs: [
          'JPG kehilangan sebagian data, jadi sedikit detail ditukar dengan file yang jauh lebih kecil. Pada kualitas 90 atau lebih, sulit terlihat. JPG tidak punya transparansi, jadi area tembus pandang menjadi putih. Varian TIFF yang langka, seperti beberapa file 16-bit atau CMYK, mungkin gagal dibuka; halaman menampilkan pesan ketika itu terjadi. Simpan TIFF jika Anda mungkin mencetak atau mengedit gambar itu nanti.',
        ],
      },
      {
        heading: 'Dokumen hasil pindai',
        paragraphs: [
          'Untuk dokumen hasil pindai pada 200 sampai 300 dpi, JPG pada kualitas 90 menjaga tulisan kecil tetap terbaca dan memangkas ukuran file secara drastis. Pengaturan kualitas yang sangat rendah membuat tepi huruf kabur, jadi jangan turun di bawah sekitar 70 untuk teks. Jika sebuah halaman hanya teks hitam di atas putih, periksa hasilnya pada ukuran penuh sebelum membuang TIFF.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah pindaian multi-halaman tetap berurutan?', a: 'Ya. Halaman diberi nama page1, page2, dan seterusnya.' },
      { q: 'Bisakah saya membuat PDF sebagai gantinya?', a: 'Konversi PDF ada di iDuckPDF, situs saudara, yang bisa mengubah gambar menjadi PDF.' },
      { q: 'Apakah pindaian saya diunggah?', a: 'Tidak. Ia dikonversi di tab browser Anda.' },
    ],
  },
  'how-to-convert-webp-to-gif': {
    title: 'Cara mengonversi WEBP ke GIF',
    description: 'Ubah gambar WEBP menjadi file GIF untuk aplikasi obrolan dan forum yang menolak WEBP, dan jaga file tetap kecil.',
    intro: 'Untuk mengonversi WEBP ke GIF, letakkan file di konverter WEBP ke GIF, pilih lebar terbesar bila perlu, lalu tekan "Konversi". Pada versi ini WEBP diam menjadi GIF satu bingkai, dan WEBP beranimasi hanya mempertahankan bingkai pertamanya.',
    steps: [
      'Buka WEBP ke GIF dan letakkan file .webp Anda.',
      'Pilih lebar terbesar jika gambarnya besar. File GIF cepat membesar.',
      'Tekan "Konversi".',
      'Unduh GIF, atau ZIP untuk beberapa file.',
    ],
    sections: [
      {
        heading: 'Kapan ini membantu',
        paragraphs: [
          'WEBP adalah format gambar modern dari Google yang menghasilkan file kecil, dan banyak situs web kini menyajikannya. Beberapa aplikasi obrolan, forum, dan program email yang lebih lama masih belum menerimanya, tetapi hampir semua menerima GIF.',
        ],
      },
      {
        heading: 'Apa yang Anda lepaskan',
        paragraphs: [
          'GIF adalah format lebih tua yang terbatas pada 256 warna, jadi foto bisa terlihat agak berbintik, dan file-nya biasanya lebih besar daripada WEBP. Area transparan tetap transparan, tetapi tepi semi-transparan yang lembut menjadi sepenuhnya padat atau sepenuhnya bening, karena GIF hanya punya transparansi hidup dan mati. Jika gambarnya foto dan situs menerimanya, JPG atau PNG mungkin lebih cocok; konversi gambar ke format itu ada di iDuckIMG.',
        ],
      },
      {
        heading: 'Menjaga GIF tetap kecil',
        paragraphs: [
          'Pakai lebar terbesar 320 sampai 480 piksel untuk stiker dan avatar. Warna datar, logo, dan gambar sederhana terkompresi baik sebagai GIF, sedangkan foto tidak, karena hanya tersedia 256 warna. Jika GIF jauh lebih besar dari yang Anda harapkan, lebar yang lebih kecil adalah perbaikan tercepat.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah WEBP beranimasi tetap beranimasi?', a: 'Belum. Hanya bingkai pertama yang dipertahankan pada versi ini, dan halaman menyatakannya.' },
      { q: 'Mengapa GIF saya lebih besar daripada WEBP?', a: 'GIF terkompresi kurang baik. Memilih lebar lebih kecil mengurangi ukurannya.' },
      { q: 'Apakah diunggah?', a: 'Tidak. Ia dikonversi di dalam tab browser Anda.' },
    ],
  },
  'how-to-convert-kg-to-pounds': {
    title: 'Cara mengonversi kg ke pon (dan pon ke kg)',
    description: 'Konversi kilogram ke pon, ons, dan stone dengan faktor yang tepat, pintasan mental, dan konverter.',
    intro: 'Untuk mengonversi kilogram ke pon, kalikan 2,20462. Jadi 70 kg sekitar 154,3 lb. Untuk arah sebaliknya, kalikan pon dengan 0,45359237. Konverter berat melakukan keduanya seketika dan juga mencakup ons, stone, gram, dan ton.',
    steps: [
      'Tulis beratnya beserta satuannya, misalnya 70 kg.',
      'Kalikan 2,20462: 70 × 2,20462 = 154,32 lb.',
      'Untuk pon ke kilogram, kalikan 0,45359237: 154 lb × 0,45359237 = 69,85 kg.',
      'Atau buka konverter berat, ketik angkanya, dan pilih dua satuan.',
    ],
    sections: [
      {
        heading: 'Pintasan cepat',
        paragraphs: [
          'Untuk jawaban kasar, gandakan kilogramnya dan tambahkan sepersepuluh dari hasilnya: 70 kg digandakan adalah 140, ditambah 14 menjadi 154 lb. Untuk arah sebaliknya, bagi dua pon lalu kurangi sepersepuluhnya: 154 lb adalah 77, dikurangi 7,7 menjadi sekitar 69,3 kg. Cukup dekat untuk pemakaian sehari-hari, tetapi pakai faktor yang tepat untuk memasak, pengiriman, dan kedokteran.',
        ],
      },
      {
        heading: 'Pon, ons, dan stone',
        paragraphs: [
          'Satu pon adalah 16 ons. Satu stone, dipakai di Inggris dan Irlandia untuk berat badan, adalah 14 pon atau sekitar 6,35 kg. Bayi dengan berat 7 lb 8 oz adalah 7,5 pon, sekitar 3,4 kg. Ton yang dipakai di sini adalah ton metrik, 1000 kg, yang berbeda dari ton pendek AS sebesar 2000 pon.',
        ],
      },
      {
        heading: 'Bagasi dan berat badan',
        paragraphs: [
          'Batas bagasi maskapai adalah alasan umum untuk mengonversi. Tas bagasi 23 kg sekitar 50,7 pon, dan batas 50 pon sekitar 22,7 kg, jadi tas yang pas dalam satu satuan bisa sedikit melebihi dalam satuan lain. Untuk berat badan, ingat bahwa stone dipakai di Inggris: 11 stone adalah 154 pon, atau sekitar 69,9 kg.',
        ],
      },
    ],
    faqs: [
      { q: 'Berapa pon 1 kg?', a: 'Sekitar 2,20462 pon.' },
      { q: 'Berapa kg 150 pon?', a: 'Sekitar 68 kg.' },
      { q: 'Apakah tonne sama dengan ton?', a: 'Tidak. Satu tonne metrik adalah 1000 kg, satu ton AS adalah 2000 pon, dan satu ton Inggris adalah 2240 pon.' },
    ],
  },
};

export default guides;
