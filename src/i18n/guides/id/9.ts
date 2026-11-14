import type { GuideSet } from '../types';

/** Indonesian guides, batch 9. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-calories-to-kilojoules': {
    title: 'Cara mengonversi kalori ke kilojoule dan kWh',
    description: 'Konversi kalori makanan (kkal) ke kilojoule dan satuan listrik, dan pelajari mengapa Kalori bukan kalori.',
    intro: 'Untuk mengonversi kilokalori ke kilojoule, kalikan dengan 4,184. Jadi 2000 kkal adalah 8368 kJ. Angka kkal pada label makanan adalah yang biasa disebut Kalori. Konverter Energi juga memberi joule, watt-jam, kilowatt-jam, dan BTU.',
    steps: [
      'Cari energi di label. Banyak label mencantumkan kkal dan kJ.',
      'Kalikan kkal dengan 4,184 untuk mendapat kJ: 250 kkal × 4,184 = 1046 kJ.',
      'Bagi kJ dengan 4,184 untuk mendapat kkal.',
      'Atau buka konverter Energi dan pilih kedua satuan.',
    ],
    sections: [
      {
        heading: 'Kalori versus kilokalori',
        paragraphs: [
          'Satu kalori kecil adalah energi untuk menghangatkan satu gram air sebesar satu derajat Celsius, sekitar 4,184 joule. Energi makanan dihitung dalam kilokalori, 1000 kalori kecil, dan ditulis Kalori dengan huruf K kapital atau sekadar kkal. Ketika label menyebut 250 kalori, artinya 250 kkal. Konverter Energi mencantumkan keduanya, jadi pilih kkal untuk makanan.',
        ],
      },
      {
        heading: 'Listrik',
        paragraphs: [
          'Satu kilowatt-jam, satuan pada tagihan listrik, tepat 3,6 juta joule, atau 3600 kJ. Itu sekitar 860 kkal. Pemanas 1000 watt yang menyala satu jam memakai satu kWh. BTU, yang umum pada AC dan pemanas, sekitar 1055 joule.',
        ],
      },
      {
        heading: 'Membaca label makanan',
        paragraphs: [
          'Label bisa menampilkan energi per 100 gram dan per sajian, jadi bandingkan dengan dasar yang sama. Banyak negara mencetak kJ dan kkal, dan asupan acuan harian yang umum sekitar 2000 kkal, kira-kira 8400 kJ. Jika Anda mencatat makanan, tetap gunakan satu satuan agar angka dari kemasan berbeda bisa dijumlahkan dengan benar.',
        ],
      },
    ],
    faqs: [
      { q: '100 kkal berapa kJ?', a: '418,4 kJ.' },
      { q: '1 kWh berapa kkal?', a: 'Sekitar 860 kkal.' },
      { q: 'Apakah kilojoule sama dengan kilokalori?', a: 'Tidak. Satu kilokalori sekitar 4,18 kali lebih besar dari satu kilojoule.' },
    ],
  },
  'how-to-convert-avi-to-mp4': {
    title: 'Cara mengonversi AVI ke MP4',
    description: 'Buat video AVI lama dari kamera dan unduhan bisa diputar di ponsel dan TV dengan mengonversinya ke MP4 di browser.',
    intro: 'Untuk mengonversi AVI ke MP4, jatuhkan video ke konverter AVI ke MP4 dan tekan Konversi. AVI adalah format dari 1990-an yang tidak lagi dibuka banyak ponsel, TV, dan aplikasi, sedangkan MP4 diputar hampir di mana saja.',
    steps: [
      'Buka AVI ke MP4 dan jatuhkan file Anda ke kotak.',
      'Tekan Konversi. Pertama kali, browser mengunduh mesin konverter (sekitar 30 MB) dan menyimpannya di cache.',
      'Tunggu bilah kemajuan selesai.',
      'Unduh MP4 dan periksa apakah bisa diputar di perangkat yang menolak AVI.',
    ],
    sections: [
      {
        heading: 'Mengapa AVI bermasalah',
        paragraphs: [
          'AVI diperkenalkan Microsoft pada awal 1990-an. Ia hanya wadah, dan video di dalamnya bisa memakai salah satu dari banyak kodek lama. Sebagian file AVI diputar dengan sempurna dan sebagian lain menampilkan layar hitam atau tanpa suara di perangkat modern, karena kodek di dalamnya tidak lagi didukung. Konversi menulis ulang video dalam kombinasi standar H.264 dan AAC yang dipakai MP4.',
        ],
      },
      {
        heading: 'Klip kamera lama',
        paragraphs: [
          'Kamera digital, camcorder, dan perekam layar lama menyimpan dalam AVI. File itu sering besar dan beresolusi rendah. Setelah mengonversi, coba Kompres video jika Anda ingin file lebih kecil untuk dikirim, dan simpan AVI asli sebagai salinan induk.',
        ],
      },
      {
        heading: 'Subtitel dan file terpisah',
        paragraphs: [
          'Beberapa unduhan AVI datang dengan file subtitel terpisah. Mengonversi video tidak menggabungkannya, dan MP4 tidak akan mengambil subtitel dengan sendirinya. Simpan file subtitel di folder yang sama dengan nama yang sama seperti MP4 baru, yang dicari kebanyakan pemutar desktop.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah berfungsi pada semua AVI?', a: 'Kebanyakan. File rusak atau kodek tak biasa bisa gagal, dan halaman menampilkan pesan jelas ketika tidak bisa membaca file.' },
      { q: 'Apakah kualitas gambar akan membaik?', a: 'Tidak. Konversi tidak bisa menambah detail yang tidak dimiliki aslinya.' },
      { q: 'Apakah diunggah?', a: 'Tidak. Dikonversi di tab browser Anda.' },
    ],
  },
  'how-to-convert-mp3-to-wav': {
    title: 'Cara mengonversi MP3 ke WAV (dan apa yang tidak diperbaikinya)',
    description: 'Ubah file MP3 menjadi WAV untuk editor, pembakaran CD, dan perangkat yang menginginkan audio tanpa kompresi.',
    intro: 'Untuk mengonversi MP3 ke WAV, jatuhkan file MP3 Anda ke konverter MP3 ke WAV dan tekan Konversi. WAV sekitar sepuluh kali lebih besar dan tidak terdengar lebih baik, tetapi beberapa editor, sampler, dan alat pembakar CD menginginkan WAV.',
    steps: [
      'Buka MP3 ke WAV dan jatuhkan file Anda.',
      'Tekan Konversi. Tidak ada pengaturan kualitas, karena WAV tanpa kompresi.',
      'Unduh WAV, atau ZIP untuk beberapa file.',
      'Gunakan di editor atau perangkat lunak pembakar Anda.',
    ],
    sections: [
      {
        heading: 'Apa yang bisa dan tidak bisa dilakukan',
        paragraphs: [
          'MP3 sudah kehilangan detail agar menjadi kecil, dan detail itu tidak bisa dipulihkan. WAV yang dibuat dari MP3 terdengar persis seperti MP3 itu, hanya disimpan tanpa kompresi. Tujuan konversi adalah kompatibilitas dan penyuntingan, bukan kualitas.',
        ],
      },
      {
        heading: 'Mengapa editor lebih suka WAV',
        paragraphs: [
          'Menyunting audio terkompresi berulang kali dan menyimpannya sebagai MP3 setiap kali menambah kehilangan pada setiap penyimpanan. Bekerja dalam WAV menghindarinya, dan Anda menyandikan ke MP3 sekali saja di akhir. WAV juga format yang diharapkan banyak alat audio untuk video, mesin gim, dan sampler perangkat keras.',
          'Satu menit WAV stereo sekitar 10 MB, jadi rekaman panjang menghasilkan file yang sangat besar. Kami menyarankan menjaga file di bawah sekitar 500 MB pada komputer.',
        ],
      },
      {
        heading: 'Laju sampel dan kedalaman bit',
        paragraphs: [
          'WAV mempertahankan laju sampel MP3, umumnya 44,1 atau 48 kHz, dan ditulis sebagai suara 16-bit, yang dipakai CD. Pengaturan lebih tinggi seperti 24-bit tidak akan menambah apa-apa, karena MP3 tidak pernah berisi informasi ekstra itu. Jika alat Anda meminta laju sampel tertentu, lakukan resampling di editor daripada menebak di sini.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah CD saya terdengar lebih baik dari WAV?', a: 'Tidak. Akan terdengar sama seperti MP3, karena detail aslinya sudah hilang.' },
      { q: 'Pengaturan WAV apa yang dipakai?', a: 'PCM 16-bit pada laju sampel yang sama dengan MP3, jenis yang paling luas diterima.' },
      { q: 'Apakah diunggah?', a: 'Tidak. Dikonversi di dalam tab browser Anda.' },
    ],
  },
  'how-to-convert-mp4-to-webm-for-websites': {
    title: 'Cara mengonversi MP4 ke WEBM untuk situs web',
    description: 'Buat salinan WEBM kecil dari video MP4 untuk situs Anda sendiri, dan kapan harus menyimpan MP4 juga.',
    intro: 'Untuk mengonversi MP4 ke WEBM, jatuhkan video ke konverter MP4 ke WEBM dan tekan Konversi. WEBM adalah format terbuka yang dibuat untuk web, diputar di semua browser utama, dan biasanya kecil, sehingga praktis untuk video di situs Anda sendiri.',
    steps: [
      'Buka MP4 ke WEBM dan jatuhkan video Anda.',
      'Tekan Konversi dan tunggu bilah kemajuan. Pekerjaan video berat, jadi jaga klip tetap pendek.',
      'Unduh WEBM.',
      'Di halaman Anda, cantumkan WEBM dan MP4 asli sebagai dua sumber di dalam satu tag video agar setiap browser menemukan yang bisa diputarnya.',
    ],
    sections: [
      {
        heading: 'Mengapa menawarkan dua format',
        paragraphs: [
          'Chrome, Firefox, dan Edge memutar WEBM. Beberapa perangkat lunak Apple dan banyak perangkat memutar MP4 dengan lebih andal. Tag video bisa mencantumkan kedua file dan browser memilih yang pertama yang didukungnya, jadi menawarkan keduanya adalah pilihan teraman untuk situs publik.',
        ],
      },
      {
        heading: 'Apa yang dibuat konverter ini',
        paragraphs: [
          'Ia menulis WEBM dengan video VP8 dan audio Vorbis, yang bisa diputar setiap browser yang mendukung WEBM. Encoder dipilih demi kecepatan, jadi file cepat dibuat dan bukan yang terkecil. Untuk file sangat kecil, persingkat klip atau kecilkan ukurannya dulu dengan Kompres video.',
        ],
      },
      {
        heading: 'Penyematan sederhana',
        paragraphs: [
          'Di halaman Anda, tulis tag video dengan controls dan dua tag source, WEBM lebih dulu dengan type video/webm dan MP4 kedua dengan type video/mp4. Browser memakai sumber pertama yang bisa diputar. Tambahkan atribut muted dan playsinline jika video harus mulai sendiri, karena browser hanya mengizinkan putar otomatis untuk video tanpa suara.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah WEBM lebih baik dari MP4?', a: 'Tidak ada yang lebih baik di mana-mana. WEBM terbuka dan kecil; MP4 diterima jauh lebih banyak aplikasi dan perangkat.' },
      { q: 'Apakah suaranya tetap ada?', a: 'Ya, sebagai audio Vorbis.' },
      { q: 'Apakah videonya diunggah?', a: 'Tidak. Dikonversi di tab browser Anda.' },
    ],
  },
  'how-to-convert-json-to-xml-and-xml-to-json': {
    title: 'Cara mengonversi JSON ke XML dan XML ke JSON',
    description: 'Pindahkan data antara JSON dan XML untuk sistem dan feed lama, dan apa yang terjadi pada atribut dan daftar.',
    intro: 'Untuk mengonversi JSON ke XML, tempel JSON ke konverter JSON ke XML. Untuk arah sebaliknya, tempel XML ke XML ke JSON. Kunci menjadi tag, array menjadi tag berulang, dan atribut XML muncul sebagai kunci yang diawali @.',
    steps: [
      'Tempel JSON atau XML Anda, atau jatuhkan filenya.',
      'Baca hasilnya di sebelah kanan. Perbaiki masukan jika muncul pesan kesalahan.',
      'Tekan Unduh atau Salin.',
      'Periksa strukturnya di sistem yang akan membacanya, terutama daftar dan atribut.',
    ],
    sections: [
      {
        heading: 'Di mana format berbeda',
        paragraphs: [
          'XML punya atribut dan teks tag; JSON hanya punya kunci dan nilai. Tag XML seperti <book id="1">Quack</book> menjadi objek dengan "@id" dan "#text". Array JSON tidak punya nama tag sendiri, jadi setiap item ditulis sebagai tag berulang. XML juga membutuhkan tepat satu tag akar, jadi array JSON sendirian dibungkus dalam akar dengan tag item.',
        ],
      },
      {
        heading: 'Teks tetap teks',
        paragraphs: [
          'Saat membaca XML, konverter menjaga setiap nilai sebagai teks, jadi kode dan kode pos dengan nol di depan tidak rusak. Jika Anda butuh angka sungguhan atau nilai true dan false, konversikan di kode Anda sendiri setelah membaca.',
        ],
      },
      {
        heading: 'Nama yang menimbulkan masalah',
        paragraphs: [
          'Nama tag XML tidak boleh berisi spasi dan tidak boleh diawali angka, tetapi kunci JSON boleh. Jika kunci JSON berupa "first name" atau "2026", ganti namanya menjadi first_name atau year2026 sebelum mengonversi, atau XML akan tidak valid. Pada arah sebaliknya, namespace dan instruksi pemrosesan dipertahankan sebagai kunci biasa, jadi periksa berkas yang tak lazim dengan mata.',
        ],
      },
    ],
    faqs: [
      { q: 'Bagaimana dengan komentar XML?', a: 'JSON tidak punya komentar, jadi komentar dibuang.' },
      { q: 'Apakah karakter khusus di-escape?', a: 'Ya. Karakter seperti & dan < di-escape agar XML valid.' },
      { q: 'Apakah data diunggah?', a: 'Tidak. Dikonversi di tab browser Anda.' },
    ],
  },
  'how-to-convert-html-to-markdown': {
    title: 'Cara mengonversi HTML ke Markdown',
    description: 'Ubah halaman web atau potongan HTML menjadi Markdown yang bersih untuk catatan, README, dan dokumentasi.',
    intro: 'Untuk mengonversi HTML ke Markdown, tempel HTML ke konverter HTML ke Markdown. Judul, paragraf, daftar, tautan, gambar, tebal, dan kode terbawa, sedangkan gaya dan tata letak dibuang.',
    steps: [
      'Salin sumber HTML bagian yang Anda inginkan. Artikel lebih baik daripada seluruh halaman.',
      'Buka HTML ke Markdown dan tempel ke kotak kiri.',
      'Baca Markdown di kanan dan rapikan spasi yang aneh.',
      'Tekan Salin atau Unduh .md lalu tempel ke catatan atau repositori Anda.',
    ],
    sections: [
      {
        heading: 'Apa yang dipertahankan dan apa yang hilang',
        paragraphs: [
          'Markdown menjelaskan struktur, bukan tampilan. Judul menjadi tanda pagar, daftar menjadi tanda hubung, tautan menjadi [teks](alamat), dan penekanan menjadi tanda bintang. Warna, font, kolom, skrip, dan tabel tata letak tidak punya padanan Markdown, jadi dibuang. Tabel kompleks bisa keluar sebagai teks biasa.',
        ],
      },
      {
        heading: 'Membersihkan seluruh halaman',
        paragraphs: [
          'Halaman web lengkap berisi menu, iklan, dan footer, yang menjadi gangguan. Salin hanya elemen artikel, atau hapus bagian ekstra lebih dulu. Setelahnya periksa alamat relatif gambar dan tautan: mengarah ke situs asli, jadi mungkin butuh alamat lengkap agar berfungsi di tempat lain.',
        ],
      },
      {
        heading: 'Kode, tautan, dan gambar',
        paragraphs: [
          'Blok kode menjadi blok berpagar dengan tiga tanda backtick dan kode sebaris dibungkus backtick tunggal. Tautan mempertahankan alamatnya dan gambar mempertahankan sumbernya. Daftar bersarang diindentasi dengan spasi. Periksa hasilnya sekali, karena HTML yang tak lazim, seperti gaya sebaris pada setiap elemen, bisa meninggalkan teks nyasar yang ingin Anda hapus.',
        ],
      },
    ],
    faqs: [
      { q: 'Bisakah saya mengubah Markdown kembali ke HTML?', a: 'Bisa, dengan Markdown ke HTML.' },
      { q: 'Apakah tabel dipertahankan?', a: 'Struktur sederhana dipertahankan sebagai teks. Tabel kompleks tidak dibangun ulang sebagai tabel Markdown.' },
      { q: 'Apakah HTML saya diunggah?', a: 'Tidak. Dikonversi di browser Anda.' },
    ],
  },
};

export default guides;
