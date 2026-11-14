import type { GuideSet } from '../types';

/** Indonesian guides, batch 3. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-wav-to-mp3': {
    title: 'Cara mengonversi WAV ke MP3 dan memperkecil file',
    description: 'Ubah rekaman WAV besar menjadi file MP3 kecil, dan ketahui bitrate mana yang dipilih untuk suara atau musik.',
    intro: 'Untuk mengonversi WAV ke MP3, letakkan WAV di konverter, pilih bitrate (192 kbit/s adalah bawaan yang baik), lalu tekan "Konversi". Satu menit WAV berkualitas CD sekitar 10 MB, sedangkan menit yang sama sebagai MP3 192 kbit/s sekitar 1,4 MB.',
    steps: [
      'Buka WAV ke MP3 dan letakkan file Anda. Anda bisa menambahkan beberapa sekaligus.',
      'Pilih kualitas. 128 kbit/s cukup untuk suara, 192 untuk musik sehari-hari, dan 320 untuk kualitas MP3 terbaik.',
      'Tekan "Konversi".',
      'Unduh setiap MP3, atau semuanya sebagai satu ZIP.',
    ],
    sections: [
      {
        heading: 'Mengapa WAV begitu besar',
        paragraphs: [
          'WAV menyimpan suara mentah tanpa kompresi. Stereo berkualitas CD memakai sekitar 1.411 kbit/s, kira-kira 10 MB per menit. MP3 membuang detail yang tidak terdengar oleh kebanyakan telinga dan menyimpan sekitar sepertujuh data pada 192 kbit/s.',
        ],
      },
      {
        heading: 'Memilih bitrate',
        paragraphs: [
          'Untuk rapat yang direkam atau memo suara, 96 sampai 128 kbit/s lebih dari cukup dan file tetap sangat kecil. Untuk musik yang akan Anda putar lewat speaker atau headphone, 192 sampai 256 adalah keseimbangan yang masuk akal. Pilih 320 hanya untuk musik yang penting bagi Anda dan yang ruangnya tersedia.',
          'MP3 kehilangan sebagian data: Anda tidak bisa mengembalikannya ke kualitas WAV asli. Simpan WAV jika Anda mungkin mengedit rekaman itu lagi.',
        ],
      },
      {
        heading: 'Contoh rekaman panjang',
        paragraphs: [
          'Rekaman satu jam sebuah kuliah atau rapat sekitar 600 MB sebagai WAV stereo kualitas CD, tetapi hanya sekitar 58 MB sebagai MP3 128 kbit/s, yang mudah dikirim lewat email atau disimpan. Rekaman mono berukuran setengah dari stereo di kedua format, jadi rekaman suara dengan satu mikrofon lebih kecil lagi. Jika Anda berencana membersihkan suara di editor, edit WAV-nya dulu dan buat MP3 paling akhir.',
        ],
      },
    ],
    faqs: [
      { q: 'Bisakah saya mengonversi banyak file WAV sekaligus?', a: 'Bisa. Mereka dikonversi satu per satu dan diunduh bersama sebagai ZIP.' },
      { q: 'Apakah berfungsi di ponsel?', a: 'Ya, tetapi rekaman panjang lambat di ponsel. Komputer lebih cepat.' },
      { q: 'Apakah rekaman saya diunggah?', a: 'Tidak. Konversi terjadi di tab browser Anda.' },
    ],
  },
  'how-to-convert-m4a-to-mp3': {
    title: 'Cara mengonversi M4A ke MP3 (memo suara dan iTunes)',
    description: 'Ubah Memo Suara iPhone dan file M4A iTunes menjadi MP3 agar bisa diputar di perangkat apa pun atau dikirim ke siapa saja.',
    intro: 'Untuk mengonversi M4A ke MP3, letakkan file M4A Anda di konverter M4A ke MP3, pilih bitrate, lalu tekan "Konversi". Memo Suara iPhone dan pembelian iTunes berformat M4A, yang tidak diterima beberapa pemutar dan situs web.',
    steps: [
      'Pindahkan file .m4a ke perangkat Anda. Memo Suara bisa dibagikan ke Files atau disimpan ke komputer.',
      'Buka M4A ke MP3 dan letakkan filenya.',
      'Pilih bitrate. 128 kbit/s cocok untuk suara; pakai 192 atau lebih untuk musik.',
      'Tekan "Konversi" dan unduh MP3 Anda.',
    ],
    sections: [
      {
        heading: 'Apa itu M4A',
        paragraphs: [
          'M4A adalah audio yang dikompres dengan AAC di dalam wadah bergaya MP4. AAC biasanya terdengar sedikit lebih baik daripada MP3 pada ukuran yang sama, itulah sebabnya Apple memakainya. Kendalanya adalah kompatibilitas: pemutar lama, beberapa stereo mobil, dan banyak formulir web hanya mengenal MP3.',
        ],
      },
      {
        heading: 'Catatan tentang kualitas',
        paragraphs: [
          'Berpindah dari M4A ke MP3 berarti mengompres suara yang sudah terkompresi untuk kedua kalinya, yang kehilangan sedikit lagi. Pakai 192 kbit/s atau lebih untuk musik. Untuk rekaman suara, perbedaannya tidak terasa. Simpan M4A asli jika kualitas penting.',
        ],
      },
      {
        heading: 'Di mana menemukan file M4A Anda',
        paragraphs: [
          'Di iPhone, buka Memo Suara, ketuk rekamannya, ketuk tiga titik, lalu pilih Bagikan atau Simpan ke Files. Di Mac, rekaman disinkronkan lewat iCloud dan muncul di aplikasi Memo Suara, tempat Anda bisa menyeretnya ke desktop sebagai file .m4a. Musik yang Anda impor atau beli tanpa perlindungan juga ada di folder pustaka musik Anda sebagai file .m4a.',
        ],
      },
    ],
    faqs: [
      { q: 'Bisakah saya mengonversi lagu iTunes yang dilindungi?', a: 'Tidak. Lagu dengan perlindungan salin tidak bisa dibuka. File yang Anda rekam sendiri dan musik yang dibeli tanpa perlindungan berfungsi baik.' },
      { q: 'Apakah judul lagu dan artisnya tetap ada?', a: 'Konverter mempertahankan tag dasar bila bisa, tetapi periksa hasilnya di pemutar Anda.' },
      { q: 'Apakah diunggah?', a: 'Tidak. Berjalan di browser Anda.' },
    ],
  },
  'how-to-convert-flac-to-mp3': {
    title: 'Cara mengonversi FLAC ke MP3 untuk ponsel atau mobil Anda',
    description: 'Buat salinan MP3 kecil dari musik FLAC Anda untuk ponsel dan stereo mobil, dan simpan aslinya yang lossless dengan aman.',
    intro: 'Untuk mengonversi FLAC ke MP3, letakkan file di konverter FLAC ke MP3, pilih 256 atau 320 kbit/s, lalu tekan "Konversi". FLAC lossless tetapi besar dan tidak diterima di mana-mana, sedangkan MP3 bisa diputar di apa pun.',
    steps: [
      'Buka FLAC ke MP3 dan letakkan satu lagu atau satu album penuh.',
      'Pilih 256 kbit/s untuk keseimbangan yang baik atau 320 untuk kualitas MP3 terbaik.',
      'Tekan "Konversi" dan tunggu setiap lagu selesai.',
      'Unduh file MP3, atau seluruh kumpulannya sebagai ZIP, lalu salin ke ponsel atau flash disk Anda.',
    ],
    sections: [
      {
        heading: 'Lossless versus lossy',
        paragraphs: [
          'FLAC menyimpan setiap detail rekaman dan biasanya sekitar setengah ukuran musik yang sama dalam WAV. MP3 membuang suara yang tidak akan dirindukan kebanyakan pendengar, jadi file jauh lebih kecil. Setelah dikonversi, detail yang hilang tidak bisa dipulihkan.',
        ],
      },
      {
        heading: 'Simpan file FLAC Anda',
        paragraphs: [
          'Anggap MP3 sebagai salinan untuk bepergian. Simpan FLAC aslinya agar bisa membuat salinan baru dalam format lain nanti. Jika Anda hanya butuh musik diputar di komputer, ponsel modern, atau headphone yang bagus, FLAC sendiri sering berfungsi dan konversi tidak diperlukan.',
        ],
      },
      {
        heading: 'Pengaruhnya terhadap penyimpanan',
        paragraphs: [
          'Album 40 menit kira-kira 200 sampai 300 MB sebagai FLAC dan sekitar 100 MB sebagai MP3 320 kbit/s, jadi ponsel yang sama bisa memuat dua atau tiga kali lebih banyak album. Itulah alasan sebenarnya membuat salinan MP3: ruang dan kompatibilitas, bukan suara yang lebih baik. Jika ruang bukan masalah dan pemutar Anda menerima FLAC, tidak perlu mengonversi.',
        ],
      },
    ],
    faqs: [
      { q: 'Bitrate mana yang terbaik?', a: '320 kbit/s adalah yang tertinggi yang diizinkan MP3 dan hampir transparan bagi kebanyakan orang. 256 adalah pilihan lebih kecil yang sulit dibedakan.' },
      { q: 'Bisakah saya mengonversi satu album penuh?', a: 'Bisa. Letakkan semua lagu dan unduh hasilnya sebagai ZIP.' },
      { q: 'Apakah diunggah?', a: 'Tidak. Musik Anda tetap di perangkat Anda.' },
    ],
  },
  'how-to-convert-opus-to-mp3': {
    title: 'Cara mengonversi catatan suara OPUS dan OGG ke MP3',
    description: 'Buka catatan suara WhatsApp dan audio OPUS atau OGG lainnya di mana saja dengan mengonversinya ke MP3 di browser Anda.',
    intro: 'Untuk mengonversi catatan suara OPUS ke MP3, letakkan file di konverter OPUS ke MP3 dan tekan "Konversi". Pesan suara WhatsApp disimpan sebagai file .opus, yang tidak bisa dibuka banyak pemutar dan editor.',
    steps: [
      'Simpan catatan suara dari aplikasi obrolan ke perangkat Anda (bagikan ke Files atau komputer Anda).',
      'Buka OPUS ke MP3 untuk file .opus, atau OGG ke MP3 untuk file .ogg.',
      'Letakkan file dan pilih bitrate. 96 sampai 128 kbit/s lebih dari cukup untuk suara.',
      'Tekan "Konversi" dan unduh MP3.',
    ],
    sections: [
      {
        heading: 'Mengapa catatan suara berformat OPUS',
        paragraphs: [
          'OPUS adalah format terbuka modern yang membuat ucapan terdengar jelas pada bitrate sangat rendah, itulah sebabnya aplikasi obrolan memakainya. Ia disimpan dalam wadah Ogg, jadi file-nya kecil. Imbalannya adalah kompatibilitas: pemutar lama, aplikasi musik banyak ponsel, dan kebanyakan editor audio tidak mengenalinya.',
        ],
      },
      {
        heading: 'Memudahkan transkrip atau pengeditan',
        paragraphs: [
          'Mengonversi ke MP3 memungkinkan Anda membuka rekaman di editor umum, melampirkannya ke email, atau memberikannya ke alat transkripsi yang tidak menerima OPUS. Untuk ucapan, MP3 128 kbit/s lebih dari cukup.',
        ],
      },
      {
        heading: 'Banyak catatan suara sekaligus',
        paragraphs: [
          'Jika Anda punya satu percakapan penuh berisi catatan suara, letakkan semuanya bersama dan unduh MP3-nya sebagai satu ZIP. File hasil konversi mempertahankan nama aslinya, jadi tanggal atau nomor apa pun di nama tetap menyertai rekaman dan mudah diurutkan.',
        ],
      },
    ],
    faqs: [
      { q: 'Apa beda OPUS dan OGG?', a: 'OGG adalah wadahnya dan Vorbis format audio aslinya. Audio OPUS juga disimpan dalam wadah Ogg, itulah sebabnya file-nya bisa tampak mirip.' },
      { q: 'Apakah berfungsi untuk catatan suara yang sangat panjang?', a: 'Ya. Catatan suara kecil, jadi yang panjang pun cepat dikonversi.' },
      { q: 'Apakah catatan suara saya diunggah?', a: 'Tidak. Konversi dilakukan di dalam tab browser Anda dan tidak ada yang dikirim ke mana pun.' },
    ],
  },
  'how-to-convert-aac-to-mp3': {
    title: 'Cara mengonversi AAC ke MP3',
    description: 'Konversi file audio AAC ke MP3 agar bisa diputar di pemutar lama, stereo mobil, dan situs web yang hanya menerima MP3.',
    intro: 'Untuk mengonversi AAC ke MP3, letakkan file .aac Anda di konverter AAC ke MP3, pilih bitrate, lalu tekan "Konversi". AAC adalah penerus MP3, tetapi file .aac polos tidak diterima di mana-mana.',
    steps: [
      'Buka AAC ke MP3 dan letakkan file Anda.',
      'Pilih 192 kbit/s untuk musik sehari-hari atau 128 untuk suara.',
      'Tekan "Konversi".',
      'Unduh MP3, atau ZIP jika Anda mengonversi beberapa.',
    ],
    sections: [
      {
        heading: 'AAC, M4A, dan MP3',
        paragraphs: [
          'AAC adalah metode kompresi, dan biasanya dibungkus dalam file M4A atau MP4. File .aac mentah sama sekali tidak punya pembungkus, yang membuatnya kurang umum dan kurang didukung daripada M4A. MP3 lebih tua tetapi dipahami hampir setiap perangkat.',
        ],
      },
      {
        heading: 'Kualitas',
        paragraphs: [
          'AAC dan MP3 sama-sama kehilangan sebagian data. Mengonversi yang satu ke yang lain kehilangan sedikit detail lagi, jadi pilih 192 kbit/s atau lebih untuk musik dan simpan AAC aslinya jika Anda peduli suara terbaik.',
        ],
      },
      {
        heading: 'Membedakan jenis file',
        paragraphs: [
          'File berakhiran .aac adalah aliran audio AAC polos. File berakhiran .m4a menyimpan AAC dalam pembungkus yang juga menyimpan judul, artis, dan sampul, dan .mp4 bisa memuat audio AAC beserta video. Mengganti nama yang satu menjadi yang lain tidak selalu berhasil, karena pembungkusnya berbeda. Jika perangkat menolak file, mengonversi adalah perbaikan yang bisa diandalkan, dan M4A adalah pembungkus yang lebih baik untuk disimpan jika perangkat menerimanya.',
        ],
      },
    ],
    faqs: [
      { q: 'Haruskah saya memakai M4A?', a: 'Jika perangkat menerimanya, M4A adalah pembungkus yang lebih baik untuk AAC. Pilih MP3 saat Anda butuh dukungan terluas.' },
      { q: 'Bisakah saya mengonversi MP3 ke AAC?', a: 'MP3 ke M4A membuat file AAC dalam pembungkus M4A, yang diputar kebanyakan perangkat modern.' },
      { q: 'Apakah diunggah?', a: 'Tidak. Tetap di browser Anda.' },
    ],
  },
};

export default guides;
