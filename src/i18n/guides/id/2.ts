import type { GuideSet } from '../types';

/** Indonesian guides, batch 2. Machine-translated; a person has not read them yet. */
const guides: GuideSet = {
  'how-to-compress-a-video-to-send-it': {
    title: 'Cara mengompres video untuk dikirim',
    description: 'Perkecil video besar untuk email atau aplikasi obrolan dengan menurunkan kualitas dan lebarnya, tanpa memasang apa pun.',
    intro: 'Untuk mengompres video, buka alat Kompres video, letakkan videonya, pilih kualitas "Small" dan lebar 720 piksel, lalu tekan "Kompres". Mengecilkan lebar menghemat ruang paling banyak, dan pengurangan 50 sampai 90 persen itu umum.',
    steps: [
      'Periksa ukuran yang perlu dicapai. Banyak layanan email berhenti di 20 sampai 25 MB.',
      'Buka Kompres video dan letakkan file Anda. Video ponsel yang panjang biasanya penyebabnya.',
      'Pilih lebar. 720 piksel terlihat bagus di layar ponsel; 480 lebih kecil lagi.',
      'Pilih kualitas. "Medium" cocok untuk kebanyakan klip. Pilih "Small" hanya ketika batas ukuran lebih penting daripada tampilan.',
      'Tekan "Kompres", lalu bandingkan ukuran sebelum dan sesudah yang ditampilkan bersama unduhan Anda.',
    ],
    sections: [
      {
        heading: 'Apa yang sebenarnya membuat video besar',
        paragraphs: [
          'Ukuran bergantung pada durasi, dimensi gambar, dan seberapa kuat video dikompres. Rekaman ponsel 1080p atau 4K menyimpan detail jauh lebih banyak daripada yang bisa ditampilkan layar kecil. Turun ke lebar 720 piksel membuang detail yang tidak dilihat siapa pun dan memangkas file secara drastis.',
          'Jika masih terlalu besar, persingkat dulu videonya dengan Potong video. Membuang satu menit yang tidak Anda perlukan lebih baik daripada memeras seluruh video lebih keras.',
        ],
      },
      {
        heading: 'Batas yang perlu diketahui',
        paragraphs: [
          'Semuanya berjalan di perangkat Anda sendiri, jadi file yang sangat besar bisa lambat atau kehabisan memori, terutama di ponsel. Kami sarankan file di bawah 500 MB di komputer dan 100 MB di ponsel. Untuk file yang lebih besar, pakai komputer.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah mengompres menurunkan kualitas?', a: 'Ya, selalu sedikit. Mengompres menukar detail dengan ukuran. Simpan file asli Anda kalau nanti ingin versi yang lebih baik.' },
      { q: 'Format apa yang saya dapat?', a: 'MP4, yang bisa diputar hampir di mana-mana.' },
      { q: 'Bisakah mengompres beberapa video sekaligus?', a: 'Bisa. Videonya diproses satu per satu dan Anda bisa mengunduhnya bersama sebagai ZIP.' },
    ],
  },
  'how-to-trim-a-video-without-software': {
    title: 'Cara memotong video tanpa perangkat lunak',
    description: 'Potong bagian awal dan akhir video di browser Anda dengan mengetik dua waktu. Tanpa editor yang perlu dipasang, tidak ada yang diunggah.',
    intro: 'Untuk memotong video, buka alat Potong video, letakkan filenya, ketik waktu mulai dan selesai, lalu tekan "Potong". Klip hasil potongan disimpan sebagai MP4. Pakai detik (90) atau menit dan detik (1:30).',
    steps: [
      'Putar video Anda di pemutar apa pun dan catat waktu di mana Anda ingin video mulai dan selesai.',
      'Buka Potong video dan letakkan filenya.',
      'Ketik waktu mulai. Biarkan 0 untuk mempertahankan awalnya.',
      'Ketik waktu selesai. Biarkan kosong untuk mempertahankan semua setelah waktu mulai.',
      'Tekan "Potong" dan unduh MP4-nya.',
    ],
    sections: [
      {
        heading: 'Bagaimana pemotongan dilakukan',
        paragraphs: [
          'Klip dikodekan ulang setelah dipotong, jadi awalnya tepat sampai ke bingkai. Pemotongan yang hanya menyalin lebih cepat tetapi hanya bisa dimulai di titik-titik tertentu dalam video, yang sering menyisakan awal yang membeku atau hitam. Pengodean ulang memakan waktu lebih lama tetapi menghindari hal itu.',
          'Karena dikodekan ulang, kualitas turun sangat sedikit. Digunakan pengaturan kualitas tinggi, dan kebanyakan orang tidak akan menyadari bedanya.',
        ],
      },
      {
        heading: 'Mengetik waktu',
        paragraphs: [
          'Angka biasa berarti detik, jadi 90 berarti satu menit tiga puluh detik. Dua bagian berarti menit dan detik (1:30), dan tiga bagian mencakup jam (1:02:30). Desimal juga bisa, misalnya 12,5.',
        ],
      },
      {
        heading: 'Menentukan waktu dengan tepat',
        paragraphs: [
          'Buka video di pemutar yang menampilkan waktu, jeda pada saat Anda ingin mulai lalu catat waktunya, kemudian lakukan hal yang sama untuk akhir. Sisakan satu atau dua detik margin di tiap ujung, karena memotong lagi itu mudah tetapi rekaman yang sudah terpotong tidak bisa dikembalikan. Jika klipnya untuk GIF, beberapa detik sudah cukup, dan Video ke GIF punya kotak mulai dan durasi sendiri sehingga Anda tidak perlu memotong dulu.',
        ],
      },
    ],
    faqs: [
      { q: 'Bisakah saya memotong bagian tengahnya?', a: 'Tidak sekaligus. Potong bagian sebelum dan bagian sesudahnya secara terpisah, atau pakai editor video lengkap untuk menggabungkan klip.' },
      { q: 'Apakah memotong juga memperkecil file?', a: 'Biasanya, karena videonya lebih sedikit. Untuk penghematan lebih besar, gunakan juga Kompres video.' },
      { q: 'Apakah video saya diunggah?', a: 'Tidak. Semuanya terjadi di tab browser Anda.' },
    ],
  },
  'how-to-convert-mov-to-mp4': {
    title: 'Cara mengonversi MOV ke MP4 (video iPhone)',
    description: 'Buat video MOV dari iPhone dan Mac bisa diputar di Android, Windows, dan semua aplikasi dengan mengonversinya ke MP4 di browser Anda.',
    intro: 'Untuk mengonversi MOV ke MP4, buka konverter MOV ke MP4, letakkan video Anda, lalu tekan "Konversi". MP4 bisa diputar di Android, Windows, TV pintar, dan semua aplikasi sosial, jadi ini format yang aman untuk membagikan video iPhone.',
    steps: [
      'Pindahkan file .mov ke komputer atau ponsel Anda (AirDrop, kabel, atau iCloud).',
      'Buka MOV ke MP4 dan letakkan file di kotak.',
      'Tekan "Konversi". Pertama kali, browser Anda mengunduh mesin konverter (sekitar 30 MB), yang kemudian disimpan di cache.',
      'Unduh MP4 saat bilah kemajuan selesai.',
    ],
    sections: [
      {
        heading: 'Mengapa video iPhone berformat MOV',
        paragraphs: [
          'iPhone merekam dalam wadah QuickTime milik Apple, yaitu MOV. Bergantung pada pengaturan kamera, video di dalamnya berupa H.264 atau HEVC yang lebih baru. Perangkat Apple menangani keduanya, tetapi banyak PC Windows, ponsel Android, editor, dan situs web tidak membuka video HEVC tanpa perangkat lunak tambahan.',
          'Konverter menulis video H.264 standar dalam bungkus MP4, yang diterima hampir di mana-mana.',
        ],
      },
      {
        heading: 'Hentikan dari sumbernya',
        paragraphs: [
          'Di iPhone Anda bisa merekam dalam format yang lebih kompatibel: Pengaturan, Kamera, Format, "Paling Kompatibel". File menjadi lebih besar, tetapi terbuka di mana-mana tanpa konversi.',
        ],
      },
      {
        heading: 'Jika file hasil konversi tidak bisa diputar',
        paragraphs: [
          'Pertama pastikan unduhan sudah selesai, lalu coba pemutar lain seperti VLC. Jika ponsel atau TV yang sangat lama masih menolak MP4-nya, mungkin videonya terlalu besar atau terlalu tajam untuknya: lewatkan lewat Kompres video dengan lebar 720 piksel. Simpan MOV aslinya, karena berisi rekaman berkualitas penuh dan Anda selalu bisa membuat MP4 lain darinya nanti.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah kualitasnya akan turun?', a: 'Sedikit, karena videonya dikodekan ulang. Digunakan pengaturan kualitas tinggi, jadi kebanyakan orang tidak bisa membedakan.' },
      { q: 'Apakah suaranya tetap ada?', a: 'Ya, suara dikonversi ke AAC, format audio MP4 yang umum.' },
      { q: 'Apakah gratis untuk video panjang?', a: 'Gratis dan tidak punya batas sendiri, tetapi video panjang lambat di ponsel. Kami sarankan file di bawah 500 MB di komputer dan 100 MB di ponsel.' },
    ],
  },
  'how-to-convert-mkv-to-mp4': {
    title: 'Cara mengonversi MKV ke MP4',
    description: 'Buat video MKV bisa diputar di ponsel, TV, dan editor dengan mengonversinya ke MP4 langsung di browser Anda.',
    intro: 'Untuk mengonversi MKV ke MP4, buka konverter MKV ke MP4, letakkan videonya, lalu tekan "Konversi". MKV adalah wadah fleksibel yang ditolak banyak ponsel dan TV, sedangkan MP4 bekerja hampir di mana-mana.',
    steps: [
      'Buka MKV ke MP4 dan letakkan file .mkv Anda di kotak.',
      'Tekan "Konversi" dan tunggu bilah kemajuan.',
      'Unduh MP4 dan coba di perangkat yang tidak bisa memutar MKV.',
    ],
    sections: [
      {
        heading: 'Apa itu MKV',
        paragraphs: [
          'MKV (Matroska) adalah wadah, sebuah kotak yang bisa menyimpan video, beberapa trek audio, subjudul, dan bab. Ia populer untuk unduhan dan cadangan Blu-ray karena sangat fleksibel, tetapi aplikasi galeri ponsel, banyak TV, dan editor tidak mendukungnya.',
        ],
      },
      {
        heading: 'Apa yang diharapkan',
        paragraphs: [
          'Video dan audio utama dikonversi ke standar MP4. Jangan berharap trek audio tambahan, subjudul, atau bab ikut terbawa. Jika sebuah file bergantung pada trek subjudul tertentu, periksa MP4-nya sebelum menghapus MKV.',
          'MKV besar, seperti film utuh, berat dikonversi di browser. Kami sarankan file di bawah 500 MB di komputer. Untuk film, konverter desktop akan lebih cepat.',
        ],
      },
      {
        heading: 'Memutar MKV tanpa mengonversi',
        paragraphs: [
          'Beberapa pemutar membuka MKV secara langsung, termasuk VLC di komputer dan banyak aplikasi media di ponsel dan TV pintar, jadi konversi hanya perlu ketika perangkat tertentu menolak file itu. Jika Anda ingin semua subjudul dan trek audio tetap persis seperti aslinya, pemutar yang mendukung MKV adalah jawaban yang lebih baik daripada mengonversi.',
        ],
      },
    ],
    faqs: [
      { q: 'Mengapa tidak sekadar mengganti nama .mkv menjadi .mp4?', a: 'Mengganti nama hanya mengubah labelnya. Isinya tetap MKV, jadi pemutar yang tidak bisa membaca MKV tetap gagal. File harus dikonversi.' },
      { q: 'Apakah kualitasnya sama?', a: 'Mendekati. Videonya dikodekan ulang dengan pengaturan kualitas tinggi, jadi ada kehilangan kecil.' },
      { q: 'Apakah file diunggah?', a: 'Tidak. File dikonversi di dalam tab browser Anda.' },
    ],
  },
  'how-to-convert-webm-to-mp4': {
    title: 'Cara mengonversi WEBM ke MP4',
    description: 'Ubah video WEBM dan rekaman layar menjadi MP4 agar terbuka di editor, TV, dan galeri ponsel.',
    intro: 'Untuk mengonversi WEBM ke MP4, letakkan file di konverter WEBM ke MP4 dan tekan "Konversi". Browser memutar WEBM dengan lancar, tetapi banyak editor, TV, dan galeri ponsel hanya menerima MP4.',
    steps: [
      'Buka WEBM ke MP4 dan letakkan file Anda di kotak.',
      'Tekan "Konversi" dan tunggu bilah kemajuan selesai.',
      'Unduh MP4 dan pakai di mana pun yang menolak WEBM.',
    ],
    sections: [
      {
        heading: 'Dari mana file WEBM berasal',
        paragraphs: [
          'Perekam layar di browser, beberapa pengunduh online, dan banyak video situs web memakai WEBM, format terbuka yang dibuat untuk web. Ukurannya kecil dan bisa diputar di semua browser, tetapi editor desktop, TV, konsol game, dan aplikasi foto ponsel sering tidak mengenalinya.',
        ],
      },
      {
        heading: 'Ke arah sebaliknya',
        paragraphs: [
          'Jika Anda ingin video kecil untuk situs web Anda sendiri, WEBM pilihan yang bagus dan MP4 ke WEBM melakukan konversi sebaliknya. Untuk dibagikan ke orang lain, MP4 adalah format yang lebih aman.',
        ],
      },
      {
        heading: 'Di mana WEBM bekerja dan di mana tidak',
        paragraphs: [
          'Chrome, Firefox, dan Edge memutar WEBM secara langsung, dan perangkat lunak Apple terbaru menanganinya di banyak tempat, tetapi dukungannya tidak merata. Editor video desktop, TV, konsol game, dan galeri ponsel biasanya menerima MP4 dan mungkin tidak menerima WEBM sama sekali. Ketika Anda tidak yakin apa yang akan membuka file itu, MP4 adalah format yang berhasil. Jika Anda hanya akan menontonnya di browser, WEBM sudah baik apa adanya dan mengonversi tidak mengubah sesuatu yang berguna.',
        ],
      },
    ],
    faqs: [
      { q: 'Apakah suara tetap ada?', a: 'Ya. Audio WEBM dikonversi ke AAC di dalam MP4.' },
      { q: 'Mengapa MP4-nya lebih besar?', a: 'WEBM terkompresi sangat baik, jadi MP4 sering sedikit lebih besar pada kualitas serupa. Pakai Kompres video jika Anda perlu yang lebih kecil.' },
      { q: 'Apakah berfungsi untuk rekaman layar?', a: 'Ya. Rekaman dari alat browser dikonversi seperti file WEBM lainnya.' },
    ],
  },
};

export default guides;
