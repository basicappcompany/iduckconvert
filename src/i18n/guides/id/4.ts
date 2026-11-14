import type { GuideSet } from '../types';

/** Indonesian guides, batch 4. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-convert-gif-to-mp4': {
    title: 'Cara mengonversi GIF ke MP4 agar lebih kecil',
    description: 'Perkecil GIF animasi yang berat menjadi MP4 kecil yang cepat dimuat dan bisa diputar di setiap ponsel.',
    intro: 'Untuk mengonversi GIF ke MP4, letakkan GIF di konverter GIF ke MP4 dan tekan "Konversi". MP4 biasanya jauh lebih kecil dan sering lebih tajam, karena GIF terbatas pada 256 warna dan tidak punya kompresi video yang sebenarnya.',
    steps: [
      'Buka GIF ke MP4 dan letakkan GIF Anda di kotak.',
      'Tekan "Konversi".',
      'Unduh MP4 dan bandingkan ukurannya dengan GIF.',
      'Di situs web, pakai MP4 dalam tag video dengan autoplay, loop, dan muted agar berperilaku seperti GIF.',
    ],
    sections: [
      {
        heading: 'Mengapa MP4 menang',
        paragraphs: [
          'GIF menyimpan setiap bingkai sebagai gambar utuh. Video MP4 hanya menyimpan apa yang berubah dari satu bingkai ke bingkai berikutnya, jadi GIF yang 8 MB sering bisa jauh di bawah 1 MB sebagai MP4. Warnanya juga lebih baik, karena video tidak terbatas pada 256 warna.',
        ],
      },
      {
        heading: 'Apa yang Anda lepaskan',
        paragraphs: [
          'GIF berulang dengan sendirinya dan muncul di mana pun gambar bisa muncul. MP4 diputar sekali kecuali pemutar atau halamannya diberi tahu untuk mengulangnya. Kebanyakan aplikasi sosial mengulang klip pendek dengan sendirinya, dan di situs Anda sendiri Anda bisa menambahkan atribut loop.',
        ],
      },
      {
        heading: 'Memakai MP4 di situs web',
        paragraphs: [
          'Agar MP4 berperilaku seperti GIF di halaman Anda sendiri, letakkan dalam tag video dengan atribut autoplay, loop, muted, dan playsinline. Browser hanya mengizinkan autoplay ketika video disenyapkan, dan playsinline mencegah iPhone membukanya layar penuh. Hasilnya dimuat lebih cepat, memakai lebih sedikit data, dan terlihat lebih baik daripada GIF aslinya.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah MP4-nya punya suara?', a: 'Tidak. GIF tidak punya suara, jadi tidak ada yang perlu dibawa.' },
      { q: 'Bisakah saya mengubah MP4 kembali menjadi GIF?', a: 'Bisa, dengan Video ke GIF, meski ukurannya akan besar lagi.' },
      { q: 'Apakah GIF-nya diunggah?', a: 'Tidak. Ia dikonversi di tab browser Anda.' },
    ],
  },
  'how-to-convert-csv-to-json': {
    title: 'Cara mengonversi CSV ke JSON',
    description: 'Ubah tabel CSV menjadi larik JSON di browser Anda, dengan baris pertama sebagai kunci dan angka tetap sebagai angka.',
    intro: 'Untuk mengonversi CSV ke JSON, tempel CSV Anda atau letakkan filenya di konverter CSV ke JSON. Baris pertama menjadi kunci dan setiap baris lainnya menjadi objek, sehingga tabel nama dan usia berubah menjadi daftar catatan.',
    steps: [
      'Pastikan baris pertama CSV Anda berisi nama kolom.',
      'Buka CSV ke JSON dan tempel teksnya, atau letakkan filenya di kotak. Coba contohnya dulu jika ingin melihat bentuknya.',
      'Baca JSON yang muncul di sebelah kanan saat Anda mengetik.',
      'Tekan "Download .json", atau "Copy" untuk menempelkannya ke kode Anda atau alat API.',
    ],
    sections: [
      {
        heading: 'Seperti apa hasilnya',
        paragraphs: [
          'CSV dengan kolom name, age, dan city menjadi larik objek seperti {"name": "Asha", "age": 29, "city": "Pune"}. Angka biasa dan kata true serta false menjadi angka dan boolean JSON yang sebenarnya. Nilai seperti 01234 tetap sebagai teks agar angka nol di depan pada kode dan kode pos tidak hilang.',
        ],
      },
      {
        heading: 'Koma, tanda kutip, dan pemisah lain',
        paragraphs: [
          'Bidang bisa dibungkus tanda kutip ganda ketika berisi koma atau pergantian baris, dan tanda kutip di dalam bidang ditulis sebagai dua tanda kutip. Konverter memahami semua itu. Ia juga membaca file yang dipisahkan titik koma, tab, atau garis tegak dengan melihat baris pertama, yang penting untuk file hasil ekspor spreadsheet di negara yang memakai koma desimal.',
        ],
      },
    ],
    faqs: [
      { q: 'Bagaimana jika sebuah kolom tidak punya judul?', a: 'Ia dinamai column1, column2, dan seterusnya, sehingga tidak ada data yang terbuang.' },
      { q: 'Bisakah saya kembali ke CSV?', a: 'Bisa, dengan JSON ke CSV, yang mengubah larik objek menjadi baris.' },
      { q: 'Apakah data saya diunggah?', a: 'Tidak. Konversi terjadi di browser Anda saat Anda mengetik.' },
    ],
  },
  'how-to-convert-json-to-csv': {
    title: 'Cara mengonversi JSON ke CSV untuk Excel',
    description: 'Ratakan larik JSON menjadi tabel CSV yang bisa dibuka di Excel atau Google Sheets, termasuk objek bersarang.',
    intro: 'Untuk mengonversi JSON ke CSV, tempel larik objek di konverter JSON ke CSV. Setiap objek menjadi baris dan setiap kunci menjadi kolom, dan objek bersarang diratakan menjadi nama kolom bertitik seperti address.city.',
    steps: [
      'Periksa bahwa JSON Anda adalah larik objek, seperti [{"a":1},{"a":2}]. Satu objek tunggal juga bisa dan menghasilkan satu baris.',
      'Buka JSON ke CSV dan tempel JSON-nya atau letakkan file .json.',
      'Lihat CSV di sebelah kanan. Kolom dikumpulkan dari semua objek.',
      'Unduh .csv dan buka di Excel, atau pakai CSV ke Excel untuk spreadsheet yang sebenarnya.',
    ],
    sections: [
      {
        heading: 'Data bersarang dan kunci yang hilang',
        paragraphs: [
          'JSON bisa menyarangkan objek di dalam objek, tetapi tabel hanya punya baris dan kolom. Konverter meratakan setiap kunci bersarang menjadi kolom dengan nama bertitik, jadi {"address": {"city": "Pune"}} menjadi kolom bernama address.city. Daftar di dalam sebuah nilai disimpan sebagai teks JSON dalam satu sel.',
          'Jika objek punya kunci berbeda, setiap kunci yang ditemukan di mana pun menjadi kolom, dan sel tanpa nilai dibiarkan kosong.',
        ],
      },
      {
        heading: 'Membuka hasilnya di Excel',
        paragraphs: [
          'Excel bisa salah membaca CSV biasa, membuang angka nol di depan atau mengubah angka panjang. Untuk spreadsheet yang akan terus Anda pakai, konversi CSV ke XLSX dengan konverter CSV ke Excel, yang menjaga kode tetap berupa teks.',
        ],
      },
    ],
    faqs: [
      { q: 'Bagaimana jika JSON saya tidak valid?', a: 'Halaman menampilkan pesan galat, bukan hasil. Periksa tanda kutip atau koma yang hilang.' },
      { q: 'Bisakah saya mengonversi file yang sangat besar?', a: 'File besar bisa tetapi lebih lama, karena browser Anda yang bekerja. File beberapa megabyte tidak masalah.' },
      { q: 'Apakah diunggah?', a: 'Tidak. Semuanya berjalan di perangkat Anda.' },
    ],
  },
  'how-to-save-an-excel-sheet-as-csv-with-accents': {
    title: 'Cara menyimpan Excel sebagai CSV dan menjaga aksara beraksen tetap benar',
    description: 'Konversi lembar Excel ke CSV dan jaga aksara beraksen, huruf Turki, dan simbol tetap benar dengan penanda UTF-8.',
    intro: 'Untuk mengonversi Excel ke CSV, letakkan file .xlsx Anda di konverter Excel ke CSV dan biarkan penanda UTF-8 tercentang. Setiap lembar menjadi CSV sendiri, dan penanda itu memberi tahu Excel bahwa file berformat UTF-8 sehingga aksara beraksen dan huruf non-Inggris tetap benar.',
    steps: [
      'Buka Excel ke CSV dan letakkan file .xlsx, .xls, atau .ods Anda.',
      'Biarkan kotak tercentang untuk menambahkan penanda UTF-8 jika Anda akan membuka CSV di Excel lagi. Hapus centangnya untuk basis data dan skrip yang tidak menyukai penanda.',
      'Tekan "Konversi".',
      'Unduh CSV. Buku kerja dengan beberapa lembar menghasilkan satu CSV per lembar, dinamai sesuai lembarnya.',
    ],
    sections: [
      {
        heading: 'Mengapa aksara beraksen rusak',
        paragraphs: [
          'CSV adalah teks biasa, dan teks bisa disimpan dalam pengodean berbeda. Excel menebak ketika Anda membuka CSV. Jika file berformat UTF-8 tetapi Excel mengira pengodean Windows lama, huruf seperti é, ü, ş, atau ı muncul sebagai karakter aneh. Penanda kecil di awal file menghilangkan tebakan itu.',
        ],
      },
      {
        heading: 'Apa yang ditinggalkan CSV',
        paragraphs: [
          'CSV hanya menyimpan nilai: tanpa rumus, warna, bagan, atau pemformatan. Anda mendapat nilai yang ditampilkan lembar, dengan tanggal dan angka ditulis seperti yang ditampilkan Excel. Buku kerja yang dilindungi sandi tidak bisa dibuka. Jika Anda butuh pemformatan, simpan XLSX-nya.',
        ],
      },
    ],
    faqs: [
      { q: 'Pemisah apa yang dipakai?', a: 'Koma, dengan tanda kutip di sekitar nilai apa pun yang berisi koma, tanda kutip, atau pergantian baris.' },
      { q: 'CSV saya masih menampilkan huruf yang salah. Lalu bagaimana?', a: 'File mungkin berada dalam pengodean lain. Pakai Perbaikan encoding TXT untuk membacanya dengan yang benar dan menyimpan salinan UTF-8 yang bersih.' },
      { q: 'Apakah buku kerja diunggah?', a: 'Tidak. Ia dibaca dan dikonversi di dalam tab browser Anda.' },
    ],
  },
  'how-to-convert-yaml-to-json-and-back': {
    title: 'Cara mengonversi YAML ke JSON dan sebaliknya',
    description: 'Pindahkan konfigurasi antara YAML dan JSON di browser Anda, dan hindari jebakan umum soal indentasi dan komentar.',
    intro: 'Untuk mengonversi YAML ke JSON, tempel YAML di konverter YAML ke JSON dan salin JSON yang tertata rapi. Untuk arah sebaliknya, tempel JSON di JSON ke YAML. Datanya tetap sama; hanya gaya penulisannya yang berubah.',
    steps: [
      'Tempel YAML Anda di konverter YAML ke JSON, atau letakkan file .yaml atau .yml.',
      'Jika melihat galat, periksa indentasinya. YAML memakai spasi, tidak pernah tab, untuk menunjukkan susunan bersarang.',
      'Salin atau unduh JSON-nya.',
      'Untuk kebalikannya, tempel JSON di JSON ke YAML untuk mendapat YAML dua spasi yang mudah dibaca.',
    ],
    sections: [
      {
        heading: 'Apa yang hilang',
        paragraphs: [
          'Komentar ada di YAML tetapi tidak di JSON, jadi dibuang saat Anda mengonversi ke JSON dan tidak bisa dikembalikan. Jangkar dan alias (pintasan &nama dan *nama) diperluas menjadi nilai berulang biasa.',
          'Konverter membaca satu dokumen YAML. Jika sebuah file punya beberapa dokumen yang dipisahkan tiga tanda hubung, konversi masing-masing sendiri.',
        ],
      },
      {
        heading: 'Mengapa orang berganti format',
        paragraphs: [
          'YAML lebih mudah dibaca dan diedit manual, itulah sebabnya file konfigurasi memakainya. JSON lebih ketat dan itulah yang diurai API dan kebanyakan bahasa pemrograman secara asli. Konversi memungkinkan Anda memeriksa konfigurasi di alat JSON atau mengubah respons API menjadi file yang mudah dibaca.',
        ],
      },
      {
        heading: 'Memeriksa hasilnya',
        paragraphs: [
          'Setelah mengonversi, lihat nilai yang mungkin dibaca YAML sebagai angka. Versi tanpa tanda kutip seperti 1.10 dibaca sebagai angka 1,1, dan kode seperti 08 bisa kehilangan nolnya, jadi bungkus string versi dan kode dengan tanda kutip di YAML. Konverter menampilkan persis apa yang dilihat pengurai YAML, sehingga menjadi cara cepat menemukan kejutan semacam itu sebelum mencapai sistem sungguhan.',
        ],
      },
    ],
    faqs: [
      { q: 'Mengapa YAML saya menghasilkan galat?', a: 'Penyebab paling umum adalah tab yang dipakai untuk indentasi, atau indentasi yang tidak konsisten. Pakai spasi dan jaga item bersarang tetap sejajar.' },
      { q: 'Apakah angka dan boolean akan bertipe benar?', a: 'Ya. Nilai seperti 42, 3.5, true, dan null menjadi tipe JSON yang sebenarnya.' },
      { q: 'Apakah ada yang diunggah?', a: 'Tidak. Konversi berjalan di tab browser Anda.' },
    ],
  },
};

export default guides;
