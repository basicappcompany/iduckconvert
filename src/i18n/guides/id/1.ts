import type { GuideSet } from '../types';

/** Indonesian guides, batch 1. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-extract-audio-from-a-video': {
    title: 'Cara mengambil audio dari video',
    description: 'Simpan suara video apa pun sebagai MP3 di browser Anda, tanpa unggah, tanpa memasang perangkat lunak, dan tanpa watermark.',
    intro: 'Untuk mengambil audio dari video, buka konverter video ke MP3, letakkan videonya, tekan "Konversi", lalu unduh MP3-nya. Dengan iDuckConvert semuanya terjadi di dalam tab browser Anda, jadi video tidak pernah diunggah ke mana pun.',
    steps: [
      'Buka konverter MP4 ke MP3 (juga menerima MOV, MKV, WEBM, dan AVI lewat Video ke MP3).',
      'Letakkan video Anda di kotak, atau tekan "Pilih file".',
      'Pilih kualitas. 192 kbit/s pilihan bagus untuk sehari-hari; pakai 320 untuk musik yang penting bagi Anda.',
      'Tekan "Konversi" dan tunggu bilah kemajuan selesai. Pertama kali, browser Anda mengunduh mesin konverter (sekitar 30 MB), yang kemudian disimpan di cache.',
      'Unduh MP3-nya, atau unduh beberapa sekaligus sebagai ZIP.',
    ],
    sections: [
      {
        heading: 'Apa yang Anda dapat',
        paragraphs: [
          'Gambarnya dibuang dan hanya trek suara yang disimpan, jadi MP3 jauh lebih kecil daripada videonya. Video kuliah 100 MB sering menjadi MP3 10 sampai 30 MB.',
          'Suara dikodekan lagi sebagai MP3, yaitu format yang kehilangan sebagian data. Jika suara aslinya sudah terkompresi (kebanyakan video begitu), kompresi kedua kehilangan sedikit lagi. Pada 192 kbit/s atau lebih, itu sulit terdengar.',
        ],
      },
      {
        heading: 'Video apa yang bisa',
        paragraphs: [
          'MP4, MOV (video iPhone), MKV, WEBM, AVI, dan sebagian besar klip ponsel dan kamera. Jika sebuah file tidak terbuka, mungkin rusak, dilindungi dari penyalinan, atau berformat tidak biasa; halaman akan memberi tahu saat tidak bisa membaca file.',
          'Ambil audio hanya dari video milik Anda atau yang Anda berhak gunakan. Pemakaian yang umum adalah merekam kuliah, wawancara, catatan suara, dan video keluarga Anda sendiri.',
        ],
      },
      {
        heading: 'Video panjang dan ponsel',
        paragraphs: [
          'Karena perangkat Anda sendiri yang bekerja, video panjang butuh waktu dan memakai memori. Kami sarankan file di bawah sekitar 500 MB di komputer dan 100 MB di ponsel. Jika ponsel kewalahan, potong dulu videonya dengan alat Potong video, atau pakai komputer.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah bisa di ponsel?', a: 'Ya, di browser modern mana pun, tetapi video panjang lambat di ponsel. Klip pendek berjalan baik.' },
      { q: 'Bisakah saya mendapat WAV atau format lain?', a: 'Bisa. Video ke MP3 adalah jalur tercepat, dan konverter audio mengubah MP3 menjadi WAV, M4A, OGG, atau FLAC.' },
      { q: 'Apakah videonya diunggah?', a: 'Tidak. Semuanya berjalan di tab browser Anda dan video tidak pernah meninggalkan perangkat Anda.' },
    ],
  },
  'heic-vs-jpg': {
    title: 'HEIC atau JPG: mana yang sebaiknya dipakai?',
    description: 'Apa itu HEIC, apa bedanya dengan JPG, mengapa foto iPhone tidak terbuka di tempat lain, dan cara mengonversinya.',
    intro: 'HEIC membuat foto sekitar setengah ukuran JPG pada kualitas serupa, tetapi lebih sedikit program yang membukanya. Pakai HEIC untuk menghemat ruang di ponsel, dan konversi ke JPG saat Anda perlu membagikan, mengunggah, atau mengedit foto di tempat lain.',
    steps: [
      'Periksa apakah file berakhiran .heic atau .heif. Itulah yang disimpan iPhone secara bawaan.',
      'Jika perlu membagikan atau mengunggahnya, konversi ke JPG dengan konverter HEIC ke JPG di iDuckIMG, yang berjalan di browser Anda.',
      'Simpan HEIC aslinya jika Anda mungkin mengeditnya lagi: ia menyimpan detail warna lebih banyak daripada JPG.',
      'Agar iPhone berhenti menyimpan HEIC, buka Pengaturan, Kamera, Format, lalu pilih "Paling Kompatibel".',
    ],
    sections: [
      {
        heading: 'Perbedaan sebenarnya',
        paragraphs: [
          'HEIC (High Efficiency Image Container) memakai keluarga kompresi yang sama dengan video modern. Apple menjadikannya bawaan iPhone pada 2017 karena menyimpan foto dalam ruang sekitar setengah JPG, dan bisa memuat warna 10-bit, data kedalaman, serta beberapa gambar dalam satu file.',
          'JPG berasal dari 1992. Kompresinya kurang efisien, tetapi setiap ponsel, komputer, situs web, printer, dan editor foto membukanya tanpa repot.',
        ],
      },
      {
        heading: 'Mengapa HEIC bermasalah',
        paragraphs: [
          'Banyak situs web dan formulir menolak unggahan HEIC. Windows memerlukan codec tambahan untuk menampilkannya, dan ponsel Android lama, beberapa printer, dan banyak perangkat lunak lama sama sekali tidak bisa membukanya.',
          'Mengonversi ke JPG mengorbankan sedikit kualitas, karena JPG kehilangan sebagian data dan jangkauan warnanya lebih sempit. Untuk berbagi dan mengunggah Anda tidak akan menyadarinya. Untuk pengeditan serius, simpan yang asli.',
        ],
      },
      {
        heading: 'Aturan sederhana',
        paragraphs: ['Simpan HEIC selama foto tetap di ponsel atau di iCloud. Konversi salinannya ke JPG begitu Anda perlu mengirimnya ke seseorang atau menaruhnya di situs web.'],
      },
    ],
    faqs: [
      { q: 'Apakah HEIC berkualitas lebih baik daripada JPG?', a: 'Pada ukuran file yang sama, ya: ia menyimpan lebih banyak detail. Pada kualitas yang sama ukurannya sekitar setengah. Ia juga mendukung lebih banyak warna.' },
      { q: 'Apakah mengonversi HEIC ke JPG menurunkan kualitas?', a: 'Sedikit, karena JPG adalah format yang kehilangan sebagian data. Pada pengaturan kualitas tinggi, perbedaannya sangat sulit dilihat.' },
      { q: 'Di mana saya mengonversi HEIC ke JPG?', a: 'Konverter HEIC ke JPG ada di iDuckIMG, situs saudara. Ia juga berjalan di browser Anda dan tidak mengunggah foto Anda.' },
    ],
  },
  'how-to-open-a-csv-in-excel-correctly': {
    title: 'Cara membuka CSV di Excel dengan benar',
    description: 'Cegah Excel menghapus angka nol di depan, merusak angka panjang, dan memecah aksara beraksen saat Anda membuka file CSV.',
    intro: 'Mengklik dua kali CSV membuat Excel menebak cara membacanya, dan tebakannya sering salah. Cara yang andal adalah mengonversi CSV ke file XLSX terlebih dahulu, atau memakai tab Data di Excel untuk mengimpornya dan memilih sendiri tipe tiap kolom.',
    steps: [
      'Paling mudah: konversi file dengan konverter CSV ke Excel, lalu buka .xlsx-nya. Angka nol di depan dan nilai teks tetap seperti aslinya.',
      'Atau di Excel, buka buku kerja kosong dan pilih Data, lalu From Text/CSV.',
      'Pilih file dan pastikan asal file tertulis 65001: UTF-8 (ini memperbaiki aksara beraksen) dan pembatasnya cocok dengan file Anda.',
      'Tekan Transform Data jika beberapa kolom harus tetap berupa teks, seperti kode pos dan nomor telepon, dan setel tipenya ke Text.',
      'Tekan Load.',
    ],
    sections: [
      {
        heading: 'Apa yang salah',
        paragraphs: [
          'Angka nol di depan hilang: 01234 menjadi 1234, yang merusak kode pos, nomor telepon, dan ID produk.',
          'Angka panjang berubah menjadi notasi ilmiah. Excel hanya menyimpan 15 digit sebuah angka, jadi nomor kartu atau ID 16 digit rusak selamanya setelah disimpan sebagai angka.',
          'Sebagian teks dibaca sebagai tanggal. Nilai seperti 1-2 bisa menjadi 2 Januari, dan beberapa nama gen terkenal rusak dengan cara ini.',
          'Aksara beraksen dan huruf non-Inggris tampil sebagai karakter aneh ketika file berformat UTF-8 tetapi Excel mengira pengodean yang lebih lama.',
        ],
      },
      {
        heading: 'Titik koma dan koma',
        paragraphs: [
          'Di negara yang menulis desimal dengan koma, Excel mengharapkan titik koma di antara kolom, sehingga CSV berkoma terbuka sebagai satu kolom panjang. Konverter di situs ini melihat baris pertama dan memilih pemisah yang benar, dan juga memahami nilai dalam tanda kutip yang berisi koma.',
        ],
      },
      {
        heading: 'Arah sebaliknya',
        paragraphs: [
          'Untuk menyimpan lembar Excel sebagai CSV untuk basis data atau formulir unggah, pakai konverter Excel ke CSV. Ia menulis penanda UTF-8 secara bawaan agar Excel menampilkan aksara beraksen dengan benar saat Anda membuka CSV itu lagi.',
        ],
      },
    ],
    faqs: [
      { q: 'Mengapa CSV saya terbuka sebagai satu kolom?', a: 'Pemisahnya tidak cocok dengan pengaturan wilayah Anda. Mengonversi ke XLSX, atau mengimpor lewat tab Data dan memilih pembatas, memperbaikinya.' },
      { q: 'Bisakah angka nol di depan dikembalikan setelah Excel menghapusnya?', a: 'Hanya jika Anda masih punya CSV aslinya. Setelah Excel menyimpan 1234 di atas 01234, nolnya hilang, jadi selalu simpan file aslinya.' },
      { q: 'Apakah spreadsheet saya diunggah?', a: 'Tidak. Konverter berjalan di browser Anda dan file tidak pernah meninggalkan perangkat Anda.' },
    ],
  },
  'how-to-convert-units-without-mistakes': {
    title: 'Cara mengonversi satuan tanpa kesalahan',
    description: 'Jebakan yang menyebabkan jawaban salah saat mengonversi satuan: galon AS dan Inggris, 1000 vs 1024, ton, suhu, dan satuan tanah India.',
    intro: 'Untuk mengonversi satuan tanpa kesalahan, periksa sistem mana yang memiliki satuan itu, pakai alat dengan faktor konversi yang tepat, dan tulis satuan di samping setiap angka. Kebanyakan kesalahan datang dari satuan yang namanya sama tetapi artinya jumlah berbeda.',
    steps: [
      'Tulis angka beserta satuannya, misalnya 5 mi, bukan hanya 5.',
      'Periksa apakah satuan itu berarti seperti yang Anda kira. Galon, ton, dan bigha berubah menurut negara atau negara bagian.',
      'Pakai konverter dengan faktor yang tepat, seperti konverter panjang atau berat, dan baca jawabannya beserta satuannya.',
      'Periksa kewajaran: apakah jawabannya berukuran wajar? Maraton 42 km seharusnya mendekati 26 mil.',
      'Simpan angka dan satuan aslinya, dan bulatkan hanya di akhir.',
    ],
    sections: [
      {
        heading: 'Satuan yang namanya sama',
        paragraphs: [
          'Satu galon AS adalah 3,785 liter, tetapi satu galon Inggris 4,546 liter, sekitar 20 persen lebih banyak. Satu ton pendek AS adalah 2.000 pon, satu ton panjang Inggris 2.240 pon, dan satu ton metrik 1.000 kilogram.',
          'Dalam komputasi, 1 KB adalah 1.000 byte bagi pembuat disk dan paket ponsel, tetapi 1.024 byte di beberapa sistem operasi. Itu sebabnya disk 1 TB tampil sekitar 931 GB. Nama KiB, MiB, dan GiB selalu berarti 1.024.',
        ],
      },
      {
        heading: 'Suhu berbeda',
        paragraphs: [
          'Kebanyakan konversi mengalikan dengan suatu faktor. Skala suhu dimulai dari nol yang berbeda, jadi harus menambah atau mengurangi juga: Fahrenheit sama dengan Celsius kali 9/5 ditambah 32. Itu sebabnya menggandakan suhu Celsius tidak menggandakan suhu Fahrenheit.',
        ],
      },
      {
        heading: 'Satuan tanah setempat',
        paragraphs: [
          'Bigha di India tidak punya ukuran tetap. Kira-kira 27.000 kaki persegi di Uttar Pradesh, sekitar 17.424 di Gujarat, dan 14.400 di Benggala Barat dan Assam, dan bisa berbeda antar distrik. Gaj adalah satu yard persegi (9 kaki persegi). Untuk urusan hukum, pakai angka dari catatan pendapatan setempat.',
        ],
      },
      {
        heading: 'Mengapa ini penting',
        paragraphs: [
          'Pada 1999 NASA kehilangan Mars Climate Orbiter karena perangkat lunak satu tim memakai pon-gaya detik sementara tim lain mengharapkan newton-detik. Salah satuan adalah kesalahan kecil dengan akibat besar, jadi selalu sertakan satuan bersama angka.',
        ],
      },
    ],
    faqs: [
      { q: 'Berapa kaki dalam satu meter?', a: 'Sekitar 3,28084 kaki. Satu kaki tepat 0,3048 meter.' },
      { q: 'Haruskah saya membulatkan hasil konversi?', a: 'Hanya di akhir. Membulatkan di tengah perhitungan menambah galat yang tumbuh di setiap langkah.' },
      { q: 'Apakah konverternya tepat?', a: 'Mereka memakai faktor tetapan yang tepat dan menampilkan hingga 10 angka signifikan. Satuan tanah India bersifat perkiraan, karena definisi setempat berbeda.' },
    ],
  },
  'how-to-make-a-gif-from-a-video': {
    title: 'Cara membuat GIF dari video',
    description: 'Ubah klip video pendek apa pun menjadi GIF animasi di browser Anda, dan jaga ukuran file agar cukup kecil untuk dikirim.',
    intro: 'Untuk membuat GIF dari video, letakkan klip di konverter Video ke GIF, pilih di mana mulainya dan berapa lama, lalu tekan "Buat GIF". Jaga di bawah 10 detik dan lebar di bawah 480 piksel, atau GIF menjadi sangat besar.',
    steps: [
      'Buka Video ke GIF dan letakkan klip Anda (MP4, MOV, WEBM, MKV, atau AVI).',
      'Atur waktu mulai. Pakai detik (90) atau menit dan detik (1:30).',
      'Atur durasi dalam detik. Tiga sampai enam detik sudah cukup untuk reaksi atau demo.',
      'Pilih lebar. 320 sampai 480 piksel cocok untuk aplikasi obrolan; naikkan ke 640 hanya jika detail penting.',
      'Pilih 10 bingkai per detik untuk file kecil, atau 15 sampai 20 untuk gerakan lebih halus, lalu tekan "Buat GIF" dan unduh.',
    ],
    sections: [
      {
        heading: 'Mengapa GIF jadi sangat besar',
        paragraphs: [
          'GIF menyimpan setiap bingkai sebagai gambar terpisah dan hanya bisa memakai 256 warna. Tidak ada kompresi video yang cerdas, jadi durasi, lebar, dan laju bingkai saling dikalikan. Memperkecil lebar setengahnya membuat file menjadi sekitar seperempat, dan memperkecil laju bingkai setengahnya membuatnya setengah lagi.',
        ],
      },
      {
        heading: 'Yang tidak bisa dilakukan GIF',
        paragraphs: [
          'GIF sama sekali tidak punya suara. Jika perlu audio, simpan klip sebagai MP4. Foto juga bisa terlihat agak berbintik, karena 256 warna tidak banyak. Itu batas formatnya, bukan alatnya.',
          'Jika GIF hanya akan ditampilkan di situs web atau aplikasi obrolan modern, MP4 yang berulang biasanya jauh lebih kecil dan lebih tajam. Konverter GIF ke MP4 melakukan itu dalam arah sebaliknya.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah GIF-nya berulang?', a: 'Ya. GIF yang dibuat di sini berulang selamanya, yang diinginkan kebanyakan orang.' },
      { q: 'Bisakah saya menambah teks atau stiker?', a: 'Tidak di alat ini. Ia hanya memotong dan mengonversi. Tambahkan teks ke video di editor terlebih dahulu jika perlu.' },
      { q: 'Apakah videonya diunggah?', a: 'Tidak. GIF dibuat di tab browser Anda dan klipnya tidak pernah meninggalkan perangkat Anda.' },
    ],
  },
};

export default guides;
