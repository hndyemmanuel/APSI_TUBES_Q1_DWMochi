/**
 * lang.js - DW Mochi
 * Kamus terjemahan Bahasa Indonesia (id) dan English (en).
 * Logika penerapan bahasa ada di main.js.
 */
const LANG_DATA = {
  id: {
    meta: { title: "DW Mochi - Mochi Segar Tanpa Pengawet dari Yogyakarta" },
    nav: {
      beranda: "Beranda", tentang: "Tentang Kami", produk: "Produk", proses: "Proses Kerja",
      struktur: "Struktur Organisasi", lokasi: "Lokasi", hubungi: "Hubungi Kami", openMenu: "Buka menu navigasi"
    },
    hero: {
      eyebrow1: "Sejak 2015 di Yogyakarta",
      title1: "Mochi lembut, dibuat segar setiap hari.",
      sub1: "DW Mochi membuat kue mochi rumahan tanpa pengawet, dari tepung ketan pilihan dengan isian yang melimpah.",
      eyebrow2: "Lima Varian Rasa",
      title2: "Dari kacang klasik sampai oreo.",
      sub2: "Pilih favoritmu: kacang, matcha, coklat, taro, atau oreo. Harga mulai Rp1.400 per buah.",
      eyebrow3: "Proses Kerja",
      title3: "Dikukus, diisi, dan dikemas setiap hari.",
      sub3: "Tiga tahap kerja kami, dari pra-produksi, produksi, sampai pengemasan, menjaga mochi tetap segar tanpa pengawet.",
      eyebrow4: "Struktur Organisasi",
      title4: "Dikerjakan tim kecil yang teliti.",
      sub4: "Setiap tahap dipegang oleh kepala divisinya sendiri, di bawah arahan langsung pemilik.",
      eyebrow5: "Yogyakarta & Magelang",
      title5: "Dua cabang, satu rasa yang sama.",
      sub5: "Kunjungi toko kami di Kricak, Tegalrejo, atau di Salaman, Magelang. Buka setiap hari pukul 09.00–21.00.",
      btnLihat: "Lihat Produk Kami", btnTentang: "Kenali Kami", btnProses: "Lihat Proses Kerja",
      btnStruktur: "Lihat Tim Kami", btnLokasi: "Lihat Lokasi", btnPesan: "Pesan Sekarang"
    },
    angka: { berdiri: "Tahun berdiri", tahun: "Tahun berpengalaman", cabang: "Cabang (Yogyakarta & Magelang)", varian: "Varian rasa" },
    tentang: {
      eyebrow: "Tentang Kami",
      title: "Berawal dari satu resep mochi kacang gula jawa.",
      badge: "11 Oktober 2015",
      p1: "DW Mochi adalah UMKM kuliner kue mochi yang berpusat di Kricak, Kecamatan Tegalrejo, Kota Yogyakarta, dan memiliki cabang di Magelang. Usaha ini dirintis oleh Ibu Dwi Sumarsih pada 11 Oktober 2015 setelah berhenti dari pekerjaan kantoran yang ia jalani selama 23 tahun, dengan produk pertama berupa mochi berukuran besar berisi kacang tanah dan gula jawa.",
      p2: "Setiap mochi dibuat segar setiap hari tanpa pengawet. Adonan dari tepung ketan, gula, dan garam dikukus, diberi isian, lalu dibaluri tepung ketan sangrai agar tidak lengket. Varian klasik kacang masih menjadi andalan, ditemani varian matcha, coklat, taro, dan oreo.",
      p3: "DW Mochi melayani masyarakat Yogyakarta dan wisatawan, baik untuk camilan sehari-hari, oleh-oleh, maupun pesanan acara khusus.",
      visiTitle: "Visi",
      visi: "Menjadi UMKM mochi rumahan yang dikenal sebagai pilihan oleh-oleh dan camilan khas di Yogyakarta dan Magelang.",
      misiTitle: "Misi",
      misi1: "Membuat mochi segar setiap hari tanpa bahan pengawet.",
      misi2: "Menjaga cita rasa varian klasik sekaligus terus menghadirkan varian baru.",
      misi3: "Memberikan harga terjangkau dan pelayanan yang ramah bagi pembeli lokal maupun wisatawan.",
      misi4: "Melayani pesanan untuk berbagai acara dengan tepat waktu."
    },
    produk: {
      eyebrow: "Produk Kami",
      title: "Pilih mochi favoritmu",
      sub: "Semua mochi dibuat segar setiap hari tanpa pengawet. Harga per buah, berlaku di kedua cabang.",
      note: "Melayani pesanan dalam jumlah banyak untuk acara. Hubungi kami lewat WhatsApp.",
      perPcs: "/ pcs", best: "Best Seller", pesan: "Pesan via WhatsApp",
      kacangName: "Mochi Kacang",
      kacangDesc: "Varian klasik pertama DW Mochi sejak 2015. Isian kacang tanah dan gula jawa yang manis gurih, dibalut kulit ketan yang lembut.",
      matchaName: "Mochi Matcha",
      matchaDesc: "Isian matcha dengan rasa teh hijau yang lembut dan sedikit pahit, cocok untuk yang tidak suka terlalu manis.",
      coklatName: "Mochi Coklat",
      coklatDesc: "Kulit mochi rasa cokelat dengan isian cokelat yang lumer dan manis, favorit anak-anak maupun dewasa.",
      taroName: "Mochi Taro",
      taroDesc: "Isian talas ungu dengan rasa manis lembut dan aroma khas.",
      oreoName: "Mochi Oreo",
      oreoDesc: "Kulit mochi dibaluri remahan Oreo yang renyah, dengan isian krim putih yang lembut di dalamnya."
    },
    proses: {
      eyebrow: "Proses Kerja", title: "Dari dapur kami ke tanganmu",
      sub: "Tiga tahap kerja yang dipegang masing-masing divisi, dilakukan setiap hari agar mochi selalu segar.",
      s1Title: "Pra-Produksi",
      s1: "Bahan baku seperti tepung ketan, gula, garam, dan bahan isian (kacang, matcha, coklat, taro, oreo) disiapkan dan ditakar. Tepung ketan untuk baluran disangrai lebih dulu.",
      s2Title: "Produksi",
      s2: "Adonan ketan dikukus sampai kenyal, diberi isian, dibentuk bulat, lalu dibaluri tepung ketan sangrai agar tidak lengket.",
      s3Title: "Pengemasan",
      s3: "Mochi yang sudah jadi dikemas rapi, lalu siap dijual di toko Yogyakarta dan Magelang atau dikirim untuk pesanan."
    },
    komitmen: {
      title: "Tanpa pengawet, dibuat hari ini, dimakan hari ini.",
      text: "Kami percaya mochi paling enak saat masih segar. Karena itu setiap mochi dibuat setiap hari dalam jumlah secukupnya."
    },
    struktur: {
      eyebrow: "Struktur Organisasi", title: "Orang-orang di balik DW Mochi",
      pemilik: "Pemilik", pra: "Kepala Divisi Pra-Produksi", produksi: "Kepala Divisi Produksi", pengemasan: "Kepala Divisi Pengemasan"
    },
    lokasi: {
      eyebrow: "Lokasi", title: "Kunjungi toko kami",
      tabJogja: "Yogyakarta (Pusat)", tabMagelang: "Magelang (Cabang)",
      pusat: "Pusat", cabang: "Cabang",
      loading: "Memuat peta…", lAlamat: "Alamat", lJam: "Jam buka", lWa: "Telepon / WhatsApp",
      fallback: "Peta tidak dapat dimuat. Silakan buka lewat tombol Petunjuk Arah.",
      jam: "Setiap hari, 09.00–21.00 WIB",
      arah: "Petunjuk Arah", chat: "Chat Cabang Ini",
      chatMsg: "Halo DW Mochi {cabang}, saya ingin bertanya."
    },
    kontak: {
      eyebrow: "Hubungi Kami", title: "Mau pesan atau tanya-tanya?",
      sub: "Isi formulir ini, lalu pesanmu akan langsung terbuka di WhatsApp cabang yang kamu pilih.",
      cabang: "Pesan ke cabang", nama: "Nama", kebutuhan: "Keperluan",
      optPesan: "Pesan mochi", optAcara: "Pesanan untuk acara", optTanya: "Tanya informasi",
      pesan: "Pesan",
      pesanPh: "Contoh: Mau pesan 20 mochi kacang dan 10 mochi matcha untuk besok siang.",
      errNama: "Nama wajib diisi.", errPesan: "Pesan minimal 10 karakter.",
      kirim: "Kirim lewat WhatsApp",
      waIntro: "Halo DW Mochi {cabang}, saya {nama}.", waKeperluan: "Keperluan", waPesan: "Pesan"
    },
    modal: {
      title: "Pesan dari cabang mana?",
      produkMsg: "Halo DW Mochi {cabang}, saya ingin memesan {produk}. Apakah tersedia?"
    },
    profil: {
      title: "Profil Usaha", nama: "Nama usaha", bentuk: "Bentuk usaha", bentukV: "UMKM",
      bidang: "Bidang usaha", bidangV: "Kuliner kue mochi", berdiri: "Tahun berdiri", berdiriV: "11 Oktober 2015",
      pemilik: "Pemilik", pemilikV: "Ibu Dwi Sumarsih", produk: "Produk", produkV: "Mochi kacang, matcha, coklat, taro, oreo",
      cabang: "Cabang", cabangV: "Yogyakarta (pusat) dan Magelang", alamat: "Alamat pusat", alamatCabang: "Alamat cabang"
    },
    footer: {
      desc: "Mochi rumahan segar tanpa pengawet dari Kricak, Yogyakarta, sejak 2015.",
      menu: "Tautan cepat", kontak: "Kontak", jamTitle: "Jam operasional", hari: "Senin – Minggu",
      jamNote: "Berlaku untuk kedua cabang.", cabang: "Cabang", copy: "Situs ini dibuat untuk keperluan praktikum."
    }
  },

  en: {
    meta: { title: "DW Mochi - Fresh, Preservative-Free Mochi from Yogyakarta" },
    nav: {
      beranda: "Home", tentang: "About Us", produk: "Products", proses: "Our Process",
      struktur: "Organization", lokasi: "Locations", hubungi: "Contact Us", openMenu: "Open navigation menu"
    },
    hero: {
      eyebrow1: "In Yogyakarta since 2015",
      title1: "Soft mochi, made fresh every day.",
      sub1: "DW Mochi makes homemade mochi without preservatives, from quality glutinous rice flour with generous fillings.",
      eyebrow2: "Five Flavors",
      title2: "From classic peanut to oreo.",
      sub2: "Pick your favorite: peanut, matcha, chocolate, taro, or oreo. Prices start at Rp1,400 each.",
      eyebrow3: "Our Process",
      title3: "Steamed, filled, and packed every day.",
      sub3: "Our three stages, pre-production, production, and packaging, keep every mochi fresh without preservatives.",
      eyebrow4: "Organization",
      title4: "Made by a small, careful team.",
      sub4: "Each stage is led by its own division head, under the owner's direct guidance.",
      eyebrow5: "Yogyakarta & Magelang",
      title5: "Two stores, the same taste.",
      sub5: "Visit us in Kricak, Tegalrejo, or in Salaman, Magelang. Open daily from 09:00 to 21:00.",
      btnLihat: "See Our Products", btnTentang: "Get to Know Us", btnProses: "See Our Process",
      btnStruktur: "Meet the Team", btnLokasi: "See Locations", btnPesan: "Order Now"
    },
    angka: { berdiri: "Year founded", tahun: "Years of experience", cabang: "Stores (Yogyakarta & Magelang)", varian: "Flavors" },
    tentang: {
      eyebrow: "About Us",
      title: "It all started with one peanut and palm sugar mochi recipe.",
      badge: "October 11, 2015",
      p1: "DW Mochi is a small mochi business based in Kricak, Tegalrejo District, Yogyakarta City, with a second store in Magelang. It was founded by Mrs. Dwi Sumarsih on October 11, 2015, after she left an office job she had held for 23 years. Her first product was a large mochi filled with peanuts and Javanese palm sugar.",
      p2: "Every mochi is made fresh daily without preservatives. A dough of glutinous rice flour, sugar, and salt is steamed, filled, and then coated with toasted rice flour so it does not stick. The classic peanut flavor is still the favorite, alongside matcha, chocolate, taro, and oreo.",
      p3: "DW Mochi serves locals and tourists alike, whether for everyday snacks, souvenirs, or special event orders.",
      visiTitle: "Vision",
      visi: "To become a homemade mochi business known as a go-to souvenir and snack in Yogyakarta and Magelang.",
      misiTitle: "Mission",
      misi1: "Make fresh mochi every day without preservatives.",
      misi2: "Keep the taste of our classic flavor while continuing to create new ones.",
      misi3: "Offer affordable prices and friendly service to locals and tourists.",
      misi4: "Deliver event orders on time."
    },
    produk: {
      eyebrow: "Our Products",
      title: "Choose your favorite mochi",
      sub: "All mochi are made fresh daily without preservatives. Prices are per piece and apply at both stores.",
      note: "We take bulk orders for events. Contact us on WhatsApp.",
      perPcs: "/ pcs", best: "Best Seller", pesan: "Order via WhatsApp",
      kacangName: "Peanut Mochi",
      kacangDesc: "DW Mochi's very first flavor since 2015. A sweet and savory peanut and palm sugar filling wrapped in soft rice dough.",
      matchaName: "Matcha Mochi",
      matchaDesc: "A matcha filling with a gentle, slightly bitter green tea taste, perfect if you prefer less sweetness.",
      coklatName: "Chocolate Mochi",
      coklatDesc: "Chocolate mochi dough with a sweet, melty chocolate filling, loved by kids and adults alike.",
      taroName: "Taro Mochi",
      taroDesc: "A purple taro filling with a mild sweetness and distinctive aroma.",
      oreoName: "Oreo Mochi",
      oreoDesc: "Mochi coated in crunchy Oreo crumbs, with a soft white cream filling inside."
    },
    proses: {
      eyebrow: "Our Process", title: "From our kitchen to your hands",
      sub: "Three daily stages, each led by its own division, so every mochi stays fresh.",
      s1Title: "Pre-Production",
      s1: "Raw ingredients such as glutinous rice flour, sugar, salt, and fillings (peanut, matcha, chocolate, taro, oreo) are prepared and measured. The rice flour for coating is toasted first.",
      s2Title: "Production",
      s2: "The rice dough is steamed until chewy, filled, shaped into balls, and coated with toasted rice flour so it does not stick.",
      s3Title: "Packaging",
      s3: "The finished mochi are neatly packed and ready to be sold at our Yogyakarta and Magelang stores or delivered for orders."
    },
    komitmen: {
      title: "No preservatives. Made today, enjoyed today.",
      text: "We believe mochi tastes best when fresh. That is why every mochi is made daily in just the right amount."
    },
    struktur: {
      eyebrow: "Organization", title: "The people behind DW Mochi",
      pemilik: "Owner", pra: "Head of Pre-Production", produksi: "Head of Production", pengemasan: "Head of Packaging"
    },
    lokasi: {
      eyebrow: "Locations", title: "Visit our stores",
      tabJogja: "Yogyakarta (Main)", tabMagelang: "Magelang (Branch)",
      pusat: "Main Store", cabang: "Branch",
      loading: "Loading map…", lAlamat: "Address", lJam: "Opening hours", lWa: "Phone / WhatsApp",
      fallback: "The map could not be loaded. Please use the Directions button.",
      jam: "Daily, 09:00–21:00 WIB",
      arah: "Directions", chat: "Chat This Store",
      chatMsg: "Hello DW Mochi {cabang}, I have a question."
    },
    kontak: {
      eyebrow: "Contact Us", title: "Want to order or ask something?",
      sub: "Fill in this form and your message will open directly in WhatsApp for the store you choose.",
      cabang: "Send to store", nama: "Name", kebutuhan: "Purpose",
      optPesan: "Order mochi", optAcara: "Event order", optTanya: "Ask a question",
      pesan: "Message",
      pesanPh: "Example: I'd like 20 peanut mochi and 10 matcha mochi for tomorrow noon.",
      errNama: "Name is required.", errPesan: "Message must be at least 10 characters.",
      kirim: "Send via WhatsApp",
      waIntro: "Hello DW Mochi {cabang}, my name is {nama}.", waKeperluan: "Purpose", waPesan: "Message"
    },
    modal: {
      title: "Order from which store?",
      produkMsg: "Hello DW Mochi {cabang}, I'd like to order {produk}. Is it available?"
    },
    profil: {
      title: "Business Profile", nama: "Business name", bentuk: "Business type", bentukV: "Micro, small & medium enterprise (UMKM)",
      bidang: "Field", bidangV: "Mochi confectionery", berdiri: "Founded", berdiriV: "October 11, 2015",
      pemilik: "Owner", pemilikV: "Mrs. Dwi Sumarsih", produk: "Products", produkV: "Peanut, matcha, chocolate, taro, and oreo mochi",
      cabang: "Stores", cabangV: "Yogyakarta (main) and Magelang", alamat: "Main address", alamatCabang: "Branch address"
    },
    footer: {
      desc: "Fresh homemade mochi without preservatives from Kricak, Yogyakarta, since 2015.",
      menu: "Quick links", kontak: "Contact", jamTitle: "Opening hours", hari: "Monday – Sunday",
      jamNote: "Applies to both stores.", cabang: "Stores", copy: "This site was made for a lab practicum."
    }
  },

  /* Basa Jawa (aksara Jawa) — ditransliterasi otomatis dari teks Latin */
  jv: {
    "meta": {
      "title": "ꦢꦺꦮꦺ​ꦩꦺꦴꦕꦶ​​​ꦩꦺꦴꦕꦶ​ꦱꦼꦒꦼꦂ​ꦠꦤ꧀ꦥ​ꦥꦼꦔꦮꦺꦠ꧀ꦱꦏꦶꦁ​ꦔꦪꦺꦴꦒꦾꦏꦂꦠ"
    },
    "nav": {
      "beranda": "ꦒꦿꦶꦪ",
      "tentang": "ꦧꦧꦒꦤ꧀ꦏꦩꦶ",
      "produk": "ꦥꦿꦺꦴꦝꦸꦏ꧀",
      "proses": "ꦥꦿꦺꦴꦱꦼꦱ꧀ꦢꦩꦼꦭ꧀",
      "struktur": "ꦱꦸꦱꦸꦤꦤ꧀ꦥꦔꦸꦫꦸꦱ꧀",
      "lokasi": "ꦥꦥꦤ꧀",
      "hubungi": "ꦲꦸꦧꦸꦔꦶ​ꦏꦩꦶ",
      "openMenu": "ꦧꦶꦏꦏ꧀ꦩꦼꦤꦸ"
    },
    "hero": {
      "eyebrow1": "ꦮꦶꦮꦶꦠ꧀ 2015ꦲꦶꦁ​ꦔꦪꦺꦴꦒꦾꦏꦂꦠ",
      "title1": "ꦩꦺꦴꦕꦶ​ꦲꦼꦩ꧀ꦥꦸꦏ꧀꧈ ꦢꦶꦥꦸꦤ꧀ꦢꦩꦼꦭ꧀ꦱꦼꦒꦼꦂ​ꦱꦧꦼꦤ꧀ꦢꦶꦤ꧀ꦠꦼꦤ꧀꧉",
      "sub1": "ꦢꦺꦮꦺ​ꦩꦺꦴꦕꦶ​ꦢꦩꦼꦭ꧀ꦩꦺꦴꦕꦶ​ꦒꦿꦶꦪꦤ꧀ꦠꦤ꧀ꦥ​ꦥꦼꦔꦮꦺꦠ꧀꧈ ꦱꦏꦶꦁ​ꦒ꧀ꦭꦼꦥꦸꦁ​ꦏꦼꦠꦤ꧀ꦥꦶꦭꦶꦲꦤ꧀ꦏꦤ꧀ꦛꦶ​ꦲꦶꦱꦺꦤꦶꦁꦏꦁ​ꦏꦛꦃ꧉",
      "eyebrow2": "ꦒꦁꦱꦭ꧀ꦫꦲꦺꦴꦱ꧀",
      "title2": "ꦱꦏꦶꦁ​ꦏꦕꦁ​ꦏ꧀ꦭꦱꦶꦏ꧀ꦢꦸꦩꦸꦒꦶ​ꦲꦺꦴꦫꦺꦲꦺꦴ꧉",
      "sub2": "ꦥꦶꦭꦶꦲꦶꦁꦏꦁ​ꦥꦤ꧀ꦗꦼꦤꦼꦔꦤ꧀ꦫꦼꦩꦼꦤꦶ꧇ ꦏꦕꦁ꧈ ꦩꦕ꧈ ꦕꦺꦴꦏ꧀ꦭꦠ꧀꧈ ꦠꦫꦺꦴ꧈ ꦲꦸꦠꦮꦶ​ꦲꦺꦴꦫꦺꦲꦺꦴ꧉ ꦫꦼꦒꦶꦤꦶꦥꦸꦤ꧀ꦮꦶꦮꦶꦠ꧀ 1.400ꦫꦸꦥꦶꦲꦃ​ꦱꦧꦼꦤꦶꦗꦶ꧉",
      "eyebrow3": "ꦥꦿꦺꦴꦱꦼꦱ꧀ꦢꦩꦼꦭ꧀",
      "title3": "ꦢꦶꦥꦸꦤ꧀ꦏꦸꦏꦸꦱ꧀꧈ ꦢꦶꦥꦸꦤꦶꦱꦺꦤꦶ꧈ ꦭꦤ꧀ꦢꦶꦥꦸꦤ꧀ꦧꦸꦁꦏꦸꦱ꧀ꦱꦧꦼꦤ꧀ꦢꦶꦤ꧀ꦠꦼꦤ꧀꧉",
      "sub3": "ꦠꦶꦒꦁ​ꦠꦲꦥ꧀ꦥꦏꦂꦪꦤ꧀ꦏꦩꦶ꧈ ꦱꦏꦶꦁ​ꦥꦿ​ꦥꦿꦺꦴꦝꦸꦏ꧀ꦱꦶ꧈ ꦥꦿꦺꦴꦝꦸꦏ꧀ꦱꦶ꧈ ꦢꦸꦩꦸꦒꦶ​ꦩ꧀ꦧꦸꦁꦏꦸꦱ꧀꧈ ꦤ꧀ꦗꦒꦶ​ꦩꦺꦴꦕꦶ​ꦠꦼꦠꦼꦥ꧀ꦱꦼꦒꦼꦂ​ꦠꦤ꧀ꦥ​ꦥꦼꦔꦮꦺꦠ꧀꧉",
      "eyebrow4": "ꦱꦸꦱꦸꦤꦤ꧀ꦥꦔꦸꦫꦸꦱ꧀",
      "title4": "ꦢꦶꦥꦸꦤ꧀ꦠꦶꦤ꧀ꦢꦏꦏꦼꦤ꧀ꦠꦶꦩꦭꦶꦠꦶꦁꦏꦁ​ꦠ꧀ꦭꦶꦠꦶ꧉",
      "sub4": "ꦱꦧꦼꦤ꧀ꦠꦲꦥ꧀ꦢꦶꦥꦸꦤꦱ꧀ꦠ​ꦢꦺꦤꦶꦁ​ꦥꦔꦂꦱ​ꦢꦶꦮ꦳ꦶꦱꦶꦤꦶꦥꦸꦤ꧀ꦥꦶꦪꦩ꧀ꦧꦏ꧀꧈ ꦏꦤ꧀ꦛꦶ​ꦥꦔꦫꦲꦤ꧀ꦭꦁꦱꦸꦁ​ꦱꦏꦶꦔꦶꦁꦏꦁ​ꦒꦝꦃ꧉",
      "eyebrow5": "ꦔꦪꦺꦴꦒꦾꦏꦂꦠ​ꦭꦤ꧀ꦩꦒꦼꦭꦁ",
      "title5": "ꦏꦭꦶꦃ​ꦥꦁ꧈ ꦱꦼꦠꦸꦁꦒꦭ꧀ꦫꦲꦺꦴꦱꦶꦁꦏꦁ​ꦱꦩꦶ꧉",
      "sub5": "ꦩꦁꦒ​ꦫꦮꦸꦲꦶꦁ​ꦠꦺꦴꦏꦺꦴ​ꦏꦩꦶ​ꦲꦶꦁ​ꦏꦿꦶꦕꦏ꧀꧈ ꦠꦼꦒꦭꦽꦗꦺꦴ꧈ ꦲꦸꦠꦮꦶ​ꦲꦶꦁ​ꦱꦭꦩꦤ꧀꧈ ꦩꦒꦼꦭꦁ꧉ ꦧꦶꦏꦏ꧀ꦱꦧꦼꦤ꧀ꦢꦶꦤ꧀ꦠꦼꦤ꧀ 09.00–21.00 WIB꧉",
      "btnLihat": "ꦥꦶꦂꦱꦤꦶ​ꦥꦿꦺꦴꦝꦸꦏ꧀",
      "btnTentang": "ꦠꦼꦥꦔꦤ꧀ꦏꦭꦶꦪꦤ꧀ꦏꦩꦶ",
      "btnProses": "ꦥꦶꦂꦱꦤꦶ​ꦥꦿꦺꦴꦱꦼꦱ꧀ꦢꦩꦼꦭ꧀",
      "btnStruktur": "ꦥꦶꦂꦱꦤꦶ​ꦠꦶꦩ꧀ꦏꦩꦶ",
      "btnLokasi": "ꦥꦶꦂꦱꦤꦶ​ꦥꦥꦤ꧀",
      "btnPesan": "ꦥꦼꦱꦼꦤ꧀ꦱꦥꦸꦤꦶꦏ"
    },
    "angka": {
      "berdiri": "ꦠꦲꦸꦤ꧀ꦔꦢꦼꦒ꧀",
      "tahun": "ꦠꦲꦸꦤ꧀ꦥꦼꦔꦭꦩꦤ꧀",
      "cabang": "ꦥꦁ​(ꦔꦪꦺꦴꦒꦾꦏꦂꦠ​ꦭꦤ꧀ꦩꦒꦼꦭꦁ)",
      "varian": "ꦮꦼꦂꦤꦶ​ꦫꦲꦺꦴꦱ꧀"
    },
    "tentang": {
      "eyebrow": "ꦧꦧꦒꦤ꧀ꦏꦩꦶ",
      "title": "ꦏꦮꦶꦮꦶꦠꦤ꧀ꦱꦏꦶꦁ​ꦱꦼꦠꦸꦁꦒꦭ꧀ꦫꦺꦱꦼꦥ꧀ꦩꦺꦴꦕꦶ​ꦏꦕꦁ​ꦒꦸꦭ​ꦗꦮꦶ꧉",
      "badge": "11ꦲꦺꦴꦏ꧀ꦠꦺꦴꦧꦼꦂ​ 2015",
      "p1": "ꦢꦺꦮꦺ​ꦩꦺꦴꦕꦶ​ꦲꦶꦁꦒꦶꦃ​ꦥꦸꦤꦶꦏ​ꦲꦸꦱꦲ​ꦲꦭꦶꦠ꧀ꦏꦸꦭꦶꦤꦼꦂ​ꦩꦺꦴꦕꦶ​ꦲꦶꦁꦏꦁ​ꦩꦥꦤ꧀ꦮꦺꦴꦤ꧀ꦠꦼꦤꦶꦁ​ꦏꦿꦶꦕꦏ꧀꧈ ꦏꦥꦤꦺꦮꦺꦴꦤ꧀ꦠꦼꦒꦭꦽꦗꦺꦴ꧈ ꦏꦸꦛ​ꦔꦪꦺꦴꦒꦾꦏꦂꦠ꧈ ꦱꦲ​ꦒꦝꦃ​ꦥꦁ​ꦮꦺꦴꦤ꧀ꦠꦼꦤꦶꦁ​ꦩꦒꦼꦭꦁ꧉ ꦲꦸꦱꦲ​ꦥꦸꦤꦶꦏ​ꦢꦶꦥꦸꦤ꧀ꦮꦶꦮꦶꦠꦶ​ꦢꦺꦤꦶꦔꦶꦧꦸ​ꦢ꧀ꦮꦶ​ꦱꦸꦩꦂꦱꦶꦃ​ꦠꦁꦒꦭ꧀ 11ꦲꦺꦴꦏ꧀ꦠꦺꦴꦧꦼꦂ​ 2015ꦱꦱꦩ꧀ꦥꦸꦤꦶꦥꦸꦤ꧀ꦏꦼꦤ꧀ꦢꦼꦭ꧀ꦱꦏꦶꦁ​ꦥꦢꦩꦼꦭꦤ꧀ꦏꦤ꧀ꦠꦺꦴꦫꦶꦁꦏꦁ​ꦢꦶꦥꦸꦤ꧀ꦭꦩ꧀ꦥꦲꦶ​ 23ꦠꦲꦸꦤ꧀꧈ ꦏꦤ꧀ꦛꦶ​ꦥꦿꦺꦴꦝꦸꦏ꧀ꦏꦥꦶꦱꦤꦫꦸꦥꦶ​ꦩꦺꦴꦕꦶ​ꦲꦒꦼꦔꦶꦱꦶ​ꦏꦕꦁ​ꦭꦤ꧀ꦒꦸꦭ​ꦗꦮꦶ꧉",
      "p2": "ꦱꦧꦼꦤ꧀ꦩꦺꦴꦕꦶ​ꦢꦶꦥꦸꦤ꧀ꦢꦩꦼꦭ꧀ꦱꦼꦒꦼꦂ​ꦱꦧꦼꦤ꧀ꦢꦶꦤ꧀ꦠꦼꦤ꧀ꦠꦤ꧀ꦥ​ꦥꦼꦔꦮꦺꦠ꧀꧉ ꦲꦢꦺꦴꦤꦤ꧀ꦱꦏꦶꦁ​ꦒ꧀ꦭꦼꦥꦸꦁ​ꦏꦼꦠꦤ꧀꧈ ꦒꦼꦤ꧀ꦝꦶꦱ꧀꧈ ꦭꦤꦸꦪꦃ​ꦢꦶꦥꦸꦤ꧀ꦏꦸꦏꦸꦱ꧀꧈ ꦢꦶꦥꦸꦤꦶꦱꦺꦤꦶ꧈ ꦭꦗꦼꦁ​ꦢꦶꦥꦸꦤ꧀ꦧꦭꦸꦫꦶ​ꦒ꧀ꦭꦼꦥꦸꦁ​ꦏꦼꦠꦤ꧀ꦱꦁꦫꦺꦤ꧀ꦱꦸꦥꦢꦺꦴꦱ꧀ꦩ꧀ꦧꦺꦴꦠꦼꦤ꧀ꦭꦼꦁꦏꦼꦠ꧀꧉ ꦮ꦳ꦫꦶꦲꦤ꧀ꦏ꧀ꦭꦱꦶꦏ꧀ꦏꦕꦁ​ꦠꦏ꧀ꦱꦶꦃ​ꦢꦢꦺꦴꦱꦤ꧀ꦢꦭꦤ꧀꧈ ꦢꦶꦥꦸꦤ꧀ꦏꦤ꧀ꦕꦤꦶ​ꦮ꦳ꦫꦶꦲꦤ꧀ꦩꦕ꧈ ꦕꦺꦴꦏ꧀ꦭꦠ꧀꧈ ꦠꦫꦺꦴ꧈ ꦭꦤꦺꦴꦫꦺꦲꦺꦴ꧉",
      "p3": "ꦢꦺꦮꦺ​ꦩꦺꦴꦕꦶ​ꦁꦭꦢꦺꦴꦱꦶ​ꦩꦱꦫꦏꦠ꧀ꦔꦪꦺꦴꦒꦾꦏꦂꦠ​ꦭꦤ꧀ꦥꦫ​ꦮꦶꦱꦠꦮꦤ꧀꧈ ꦏꦁꦒꦼ​ꦚꦩꦶꦏꦤ꧀ꦱꦧꦼꦤ꧀ꦢꦶꦤ꧀ꦠꦼꦤ꧀꧈ ꦲꦺꦴꦭꦼꦲꦺꦴꦭꦼꦃ꧈ ꦲꦸꦒꦶ​ꦥꦼꦱꦼꦤꦤꦕꦫ​ꦩꦶꦫꦸꦁꦒꦤ꧀꧉",
      "visiTitle": "ꦮ꦳ꦶꦱꦶ",
      "visi": "ꦢꦢꦺꦴꦱꦸꦱꦲ​ꦩꦺꦴꦕꦶ​ꦒꦿꦶꦪꦤꦶꦁꦏꦁ​ꦏꦺꦴꦤ꧀ꦝꦁ​ꦩꦶꦤꦁꦏ​ꦥꦶꦭꦶꦲꦤꦺꦴꦭꦼꦲꦺꦴꦭꦼꦃ​ꦭꦤ꧀ꦚꦩꦶꦏꦤ꧀ꦥꦶꦤꦸꦤ꧀ꦗꦸꦭꦶꦁ​ꦔꦪꦺꦴꦒꦾꦏꦂꦠ​ꦭꦤ꧀ꦩꦒꦼꦭꦁ꧉",
      "misiTitle": "ꦩꦶꦱꦶ",
      "misi1": "ꦢꦩꦼꦭ꧀ꦩꦺꦴꦕꦶ​ꦱꦼꦒꦼꦂ​ꦱꦧꦼꦤ꧀ꦢꦶꦤ꧀ꦠꦼꦤ꧀ꦠꦤ꧀ꦥ​ꦧꦲꦤ꧀ꦥꦼꦔꦮꦺꦠ꧀꧉",
      "misi2": "ꦤ꧀ꦗꦒꦶ​ꦫꦲꦺꦴꦱ꧀ꦮ꦳ꦫꦶꦲꦤ꧀ꦏ꧀ꦭꦱꦶꦏ꧀ꦱꦲ​ꦠꦤ꧀ꦱꦃ​ꦔꦮꦺꦴꦤ꧀ꦠꦼꦤꦏꦼꦤ꧀ꦮ꦳ꦫꦶꦲꦤꦺꦁꦒꦭ꧀꧉",
      "misi3": "ꦩꦫꦶꦔꦶ​ꦫꦼꦒꦶ​ꦲꦶꦁꦏꦁ​ꦩꦶꦫꦃ​ꦭꦤ꧀ꦭꦼꦭꦢꦺꦴꦱꦶꦁꦏꦁ​ꦒꦿꦥꦾꦏ꧀ꦝꦸꦩꦠꦼꦁ​ꦥꦫ​ꦠꦸꦩ꧀ꦧꦱ꧀ꦭꦺꦴꦏꦭ꧀ꦱꦲ​ꦮꦶꦱꦠꦮꦤ꧀꧉",
      "misi4": "ꦔ꧀ꦭꦢꦺꦴꦱꦶ​ꦥꦼꦱꦼꦤꦤ꧀ꦏꦁꦒꦼ​ꦩꦤꦼꦏ​ꦮꦂꦤꦶ​ꦲꦕꦫ​ꦏꦤ꧀ꦛꦶ​ꦠꦼꦥꦠ꧀ꦮꦼꦏ꧀ꦢꦭ꧀꧉"
    },
    "produk": {
      "eyebrow": "ꦥꦿꦺꦴꦝꦸꦏ꧀ꦏꦩꦶ",
      "title": "ꦥꦶꦭꦶꦃ​ꦩꦺꦴꦕꦶ​ꦲꦶꦁꦏꦁ​ꦥꦤ꧀ꦗꦼꦤꦼꦔꦤ꧀ꦫꦼꦩꦼꦤꦶ",
      "sub": "ꦱꦼꦢꦪ​ꦩꦺꦴꦕꦶ​ꦢꦶꦥꦸꦤ꧀ꦢꦩꦼꦭ꧀ꦱꦼꦒꦼꦂ​ꦱꦧꦼꦤ꧀ꦢꦶꦤ꧀ꦠꦼꦤ꧀ꦠꦤ꧀ꦥ​ꦥꦼꦔꦮꦺꦠ꧀꧉ ꦫꦼꦒꦶ​ꦱꦧꦼꦤꦶꦗꦶ꧈ ꦱꦩꦶ​ꦲꦶꦁ​ꦏꦭꦶꦃ​ꦥꦁ꧉",
      "note": "ꦤꦩ꧀ꦥꦶ​ꦥꦼꦱꦼꦤꦤ꧀ꦏꦛꦃ​ꦏꦁꦒꦼ​ꦲꦕꦫ꧉ ꦲꦸꦧꦸꦔꦶ​ꦏꦩꦶ​ꦭꦸꦩꦤ꧀ꦠꦂ​ꦮꦠ꧀ꦱꦥ꧀꧉",
      "perPcs": "/​ꦲꦶꦗꦶ",
      "best": "ꦥꦭꦶꦁ​ꦭꦫꦶꦱ꧀",
      "pesan": "ꦥꦼꦱꦼꦤ꧀ꦭꦸꦩꦤ꧀ꦠꦂ​ꦮꦠ꧀ꦱꦥ꧀",
      "kacangName": "ꦩꦺꦴꦕꦶ​ꦏꦕꦁ",
      "kacangDesc": "ꦮ꦳ꦫꦶꦲꦤ꧀ꦏ꧀ꦭꦱꦶꦏ꧀ꦏꦥꦶꦱꦤ꧀ꦢꦺꦮꦺ​ꦩꦺꦴꦕꦶ​ꦮꦶꦮꦶꦠ꧀ 2015.ꦲꦶꦱꦶ​ꦏꦕꦁ​ꦭꦤ꧀ꦒꦸꦭ​ꦗꦮꦶ​ꦲꦶꦁꦏꦁ​ꦭꦼꦒꦶ​ꦒꦸꦫꦶꦃ꧈ ꦏꦧꦸꦁꦏꦸꦱ꧀ꦏꦸꦭꦶꦠ꧀ꦏꦼꦠꦤꦶꦁꦏꦔꦼꦩ꧀ꦥꦸꦏ꧀꧉",
      "matchaName": "ꦩꦺꦴꦕꦶ​ꦩꦕ",
      "matchaDesc": "ꦲꦶꦱꦶ​ꦩꦕ​ꦏꦤ꧀ꦛꦶ​ꦫꦲꦺꦴꦱ꧀ꦠꦺꦲꦶꦗꦼꦩꦶꦁꦏꦁ​ꦭꦼꦩ꧀ꦧꦸꦠ꧀ꦭꦤ꧀ꦫꦢ​ꦥꦲꦶꦠ꧀꧈ ꦕꦺꦴꦕꦺꦴꦏ꧀ꦏꦁꦒꦼ​ꦲꦶꦁꦏꦁ​ꦩ꧀ꦧꦺꦴꦠꦼꦤ꧀ꦫꦼꦩꦼꦤ꧀ꦭꦼꦒꦶ​ꦱꦔꦼꦠ꧀꧉",
      "coklatName": "ꦩꦺꦴꦕꦶ​ꦕꦺꦴꦏ꧀ꦭꦠ꧀",
      "coklatDesc": "ꦏꦸꦭꦶꦠ꧀ꦩꦺꦴꦕꦶ​ꦫꦲꦺꦴꦱ꧀ꦕꦺꦴꦏ꧀ꦭꦠ꧀ꦏꦤ꧀ꦛꦶ​ꦲꦶꦱꦶ​ꦕꦺꦴꦏ꧀ꦭꦠꦶꦁꦏꦁ​ꦭꦼꦭꦼꦃ​ꦭꦤ꧀ꦭꦼꦒꦶ꧈ ꦏꦱꦼꦤꦼꦔꦤ꧀ꦭꦫꦼ​ꦭꦤ꧀ꦠꦶꦪꦔꦒꦼꦁ꧉",
      "taroName": "ꦩꦺꦴꦕꦶ​ꦠꦫꦺꦴ",
      "taroDesc": "ꦲꦶꦱꦶ​ꦠꦭꦼꦱ꧀ꦮꦸꦔꦸ​ꦏꦤ꧀ꦛꦶ​ꦫꦲꦺꦴꦱ꧀ꦭꦼꦒꦶ​ꦭꦼꦩ꧀ꦧꦸꦠ꧀ꦭꦤꦩ꧀ꦧꦼꦠꦶꦁꦏꦁ​ꦩꦶꦫꦸꦁꦒꦤ꧀꧉",
      "oreoName": "ꦩꦺꦴꦕꦶ​ꦲꦺꦴꦫꦺꦲꦺꦴ",
      "oreoDesc": "ꦏꦸꦭꦶꦠ꧀ꦩꦺꦴꦕꦶ​ꦢꦶꦥꦸꦤ꧀ꦧꦭꦸꦫꦶ​ꦫꦼꦩꦸꦏꦤꦺꦴꦫꦺꦲꦺꦴ​ꦲꦶꦁꦏꦁ​ꦏꦿꦶꦲꦸꦏ꧀꧈ ꦏꦤ꧀ꦛꦶ​ꦲꦶꦱꦶ​ꦏꦿꦶꦩ꧀ꦥꦼꦛꦏꦶꦁꦏꦁ​ꦭꦼꦩ꧀ꦧꦸꦠꦶꦁ​ꦱꦭꦼꦧꦼꦠꦶꦥꦸꦤ꧀꧉"
    },
    "proses": {
      "eyebrow": "ꦥꦿꦺꦴꦱꦼꦱ꧀ꦢꦩꦼꦭ꧀",
      "title": "ꦱꦏꦶꦁ​ꦥꦮꦺꦴꦤ꧀ꦏꦩꦶ​ꦢꦸꦩꦸꦒꦶ​ꦲꦱ꧀ꦠ​ꦥꦤ꧀ꦗꦼꦤꦼꦔꦤ꧀",
      "sub": "ꦠꦶꦒꦁ​ꦠꦲꦥ꧀ꦥꦏꦂꦪꦤꦶꦁꦏꦁ​ꦢꦶꦥꦸꦤꦱ꧀ꦠ​ꦱꦧꦼꦤ꧀ꦢꦶꦮ꦳ꦶꦱꦶ꧈ ꦢꦶꦥꦸꦤ꧀ꦠꦶꦤ꧀ꦢꦏꦏꦼꦤ꧀ꦱꦧꦼꦤ꧀ꦢꦶꦤ꧀ꦠꦼꦤ꧀ꦱꦸꦥꦢꦺꦴꦱ꧀ꦩꦺꦴꦕꦶ​ꦠꦤ꧀ꦱꦃ​ꦱꦼꦒꦼꦂ꧉",
      "s1Title": "ꦥꦿ​ꦥꦿꦺꦴꦝꦸꦏ꧀ꦱꦶ",
      "s1": "ꦧꦲꦤ꧀ꦧꦏꦸ​ꦏꦢꦺꦴꦱ꧀ꦒ꧀ꦭꦼꦥꦸꦁ​ꦏꦼꦠꦤ꧀꧈ ꦒꦼꦤ꧀ꦝꦶꦱ꧀꧈ ꦲꦸꦪꦃ꧈ ꦭꦤ꧀ꦧꦲꦤꦶꦱꦶ​(ꦏꦕꦁ꧈ ꦩꦕ꧈ ꦕꦺꦴꦏ꧀ꦭꦠ꧀꧈ ꦠꦫꦺꦴ꧈ ꦲꦺꦴꦫꦺꦲꦺꦴ)​ꦢꦶꦥꦸꦤ꧀ꦱꦶꦪꦒꦏꦏꦼꦤ꧀ꦭꦤ꧀ꦢꦶꦥꦸꦤ꧀ꦠꦏꦂ꧉ ꦒ꧀ꦭꦼꦥꦸꦁ​ꦏꦼꦠꦤ꧀ꦏꦁꦒꦼ​ꦧꦭꦸꦫꦤ꧀ꦢꦶꦥꦸꦤ꧀ꦱꦁꦫꦺꦤ꧀ꦫꦸꦩꦶꦪꦶꦤ꧀꧉",
      "s2Title": "ꦥꦿꦺꦴꦝꦸꦏ꧀ꦱꦶ",
      "s2": "ꦲꦢꦺꦴꦤꦤ꧀ꦏꦼꦠꦤ꧀ꦢꦶꦥꦸꦤ꧀ꦏꦸꦏꦸꦱ꧀ꦔꦤ꧀ꦠꦺꦴꦱ꧀ꦏꦼꦚꦭ꧀꧈ ꦢꦶꦥꦸꦤꦶꦱꦺꦤꦶ꧈ ꦢꦶꦥꦸꦤ꧀ꦧꦼꦤ꧀ꦠꦸꦏ꧀ꦧꦸꦤ꧀ꦢꦼꦂ꧈ ꦭꦗꦼꦁ​ꦢꦶꦥꦸꦤ꧀ꦧꦭꦸꦫꦶ​ꦒ꧀ꦭꦼꦥꦸꦁ​ꦏꦼꦠꦤ꧀ꦱꦁꦫꦺꦤ꧀ꦱꦸꦥꦢꦺꦴꦱ꧀ꦩ꧀ꦧꦺꦴꦠꦼꦤ꧀ꦭꦼꦁꦏꦼꦠ꧀꧉",
      "s3Title": "ꦩ꧀ꦧꦸꦁꦏꦸꦱ꧀",
      "s3": "ꦩꦺꦴꦕꦶ​ꦲꦶꦁꦏꦁ​ꦱꦩ꧀ꦥꦸꦤ꧀ꦢꦢꦺꦴꦱ꧀ꦢꦶꦥꦸꦤ꧀ꦧꦸꦁꦏꦸꦱ꧀ꦫꦥꦶ꧈ ꦭꦗꦼꦁ​ꦱꦶꦪꦥ꧀ꦢꦶꦥꦸꦤ꧀ꦱꦢꦺ​ꦲꦶꦁ​ꦠꦺꦴꦏꦺꦴ​ꦔꦪꦺꦴꦒꦾꦏꦂꦠ​ꦭꦤ꧀ꦩꦒꦼꦭꦔꦸꦠꦮꦶ​ꦢꦶꦥꦸꦤ꧀ꦏꦶꦤ꧀ꦠꦸꦤꦏꦼꦤ꧀ꦏꦁꦒꦼ​ꦥꦼꦱꦼꦤꦤ꧀꧉"
    },
    "komitmen": {
      "title": "ꦠꦤ꧀ꦥ​ꦥꦼꦔꦮꦺꦠ꧀꧈ ꦢꦶꦥꦸꦤ꧀ꦢꦩꦼꦭ꧀ꦢꦶꦤ꧀ꦠꦼꦤ꧀ꦥꦸꦤꦶꦏ꧈ ꦢꦶꦥꦸꦤ꧀ꦝꦲꦂ​ꦢꦶꦤ꧀ꦠꦼꦤ꧀ꦥꦸꦤꦶꦏ꧉",
      "text": "ꦏꦩꦶ​ꦥꦶꦠꦢꦺꦴꦱ꧀ꦩꦺꦴꦕꦶ​ꦥꦭꦶꦔꦺꦕ​ꦤꦭꦶꦏ​ꦠꦏ꧀ꦱꦶꦃ​ꦱꦼꦒꦼꦂ꧉ ꦥꦿꦩꦶꦭ​ꦱꦧꦼꦤ꧀ꦩꦺꦴꦕꦶ​ꦢꦶꦥꦸꦤ꧀ꦢꦩꦼꦭ꧀ꦱꦧꦼꦤ꧀ꦢꦶꦤ꧀ꦠꦼꦤ꧀ꦏꦤ꧀ꦛꦶ​ꦕꦕꦲꦶꦁꦏꦁ​ꦕꦼꦏꦥ꧀꧉"
    },
    "struktur": {
      "eyebrow": "ꦱꦸꦱꦸꦤꦤ꧀ꦥꦔꦸꦫꦸꦱ꧀",
      "title": "ꦠꦶꦪꦁ​ꦠꦶꦪꦔꦶꦁ​ꦱꦮꦶꦁꦏꦶꦔꦶꦥꦸꦤ꧀ꦢꦺꦮꦺ​ꦩꦺꦴꦕꦶ",
      "pemilik": "ꦲꦶꦁꦏꦁ​ꦒꦝꦃ",
      "pra": "ꦥꦔꦂꦱ​ꦢꦶꦮ꦳ꦶꦱꦶ​ꦥꦿ​ꦥꦿꦺꦴꦝꦸꦏ꧀ꦱꦶ",
      "produksi": "ꦥꦔꦂꦱ​ꦢꦶꦮ꦳ꦶꦱꦶ​ꦥꦿꦺꦴꦝꦸꦏ꧀ꦱꦶ",
      "pengemasan": "ꦥꦔꦂꦱ​ꦢꦶꦮ꦳ꦶꦱꦶ​ꦩ꧀ꦧꦸꦁꦏꦸꦱ꧀"
    },
    "lokasi": {
      "eyebrow": "ꦥꦥꦤ꧀",
      "title": "ꦩꦁꦒ​ꦫꦮꦸꦲꦶꦁ​ꦠꦺꦴꦏꦺꦴ​ꦏꦩꦶ",
      "tabJogja": "ꦔꦪꦺꦴꦒꦾꦏꦂꦠ​(ꦥꦸꦱꦠ꧀)",
      "tabMagelang": "ꦩꦒꦼꦭꦁ​(ꦥꦁ)",
      "pusat": "ꦥꦸꦱꦠ꧀",
      "cabang": "ꦥꦁ",
      "loading": "ꦔꦸꦤ꧀ꦝꦸꦃ​ꦥꦼꦠ…",
      "lAlamat": "ꦲꦭꦩꦠ꧀",
      "lJam": "ꦗꦩ꧀ꦧꦶꦏꦏ꧀",
      "lWa": "ꦠꦼꦭꦼꦥꦺꦴꦤ꧀/​ꦮꦠ꧀ꦱꦥ꧀",
      "fallback": "ꦥꦼꦠ​ꦩ꧀ꦧꦺꦴꦠꦼꦤ꧀ꦱꦒꦼꦢ꧀ꦢꦶꦥꦸꦤ꧀ꦧꦶꦏꦏ꧀꧉ ꦩꦁꦒ​ꦧꦶꦏꦏ꧀ꦭꦸꦩꦤ꧀ꦠꦂ​ꦠꦺꦴꦩ꧀ꦧꦺꦴꦭ꧀ꦥꦶꦠꦼꦢꦃ​ꦩꦂꦒꦶ꧉",
      "jam": "ꦱꦧꦼꦤ꧀ꦢꦶꦤ꧀ꦠꦼꦤ꧀꧈ 09.00–21.00 WIB",
      "arah": "ꦥꦶꦠꦼꦢꦃ​ꦩꦂꦒꦶ",
      "chat": "ꦲꦸꦧꦸꦔꦶ​ꦥꦁ​ꦥꦸꦤꦶꦏ"
    },
    "kontak": {
      "eyebrow": "ꦲꦸꦧꦸꦔꦶ​ꦏꦩꦶ",
      "title": "ꦧꦝꦺ​ꦥꦼꦱꦼꦤꦸꦠꦮꦶ​ꦚꦸꦮꦸꦤ꧀ꦥꦶꦂꦱ?",
      "sub": "ꦲꦶꦱꦺꦤꦤ​ꦥ꦳ꦺꦴꦂꦩꦸꦭꦶꦂ​ꦥꦸꦤꦶꦏ꧈ ꦭꦗꦼꦁ​ꦥꦼꦱꦼꦤ꧀ꦥꦤ꧀ꦗꦼꦤꦼꦔꦤ꧀ꦧꦝꦺ​ꦏꦧꦶꦏꦏ꧀ꦮꦺꦴꦤ꧀ꦠꦼꦤꦶꦁ​ꦮꦠ꧀ꦱꦥ꧀ꦥꦔꦶꦁꦏꦁ​ꦥꦤ꧀ꦗꦼꦤꦼꦔꦤ꧀ꦥꦶꦭꦶꦃ꧉",
      "cabang": "ꦥꦼꦱꦼꦤ꧀ꦝꦠꦼꦁ​ꦥꦁ",
      "nama": "ꦤꦩꦶ",
      "kebutuhan": "ꦥꦽꦭꦸ",
      "optPesan": "ꦥꦼꦱꦼꦤ꧀ꦩꦺꦴꦕꦶ",
      "optAcara": "ꦥꦼꦱꦼꦤꦤ꧀ꦏꦁꦒꦼ​ꦲꦕꦫ",
      "optTanya": "ꦚꦸꦮꦸꦤ꧀ꦥꦶꦂꦱ",
      "pesan": "ꦥꦼꦱꦼꦤ꧀",
      "pesanPh": "ꦠꦸꦭꦝ꧇ ꦧꦝꦺ​ꦥꦼꦱꦼꦤ꧀ 20ꦩꦺꦴꦕꦶ​ꦏꦕꦁ​ꦭꦤ꧀ 10ꦩꦺꦴꦕꦶ​ꦩꦕ​ꦏꦁꦒꦼ​ꦧꦺꦤ꧀ꦗꦶꦁ​ꦱꦶꦲꦁ꧉",
      "errNama": "ꦤꦩꦶ​ꦏꦼꦢꦃ​ꦢꦶꦥꦸꦤꦶꦱꦺꦤꦶ꧉",
      "errPesan": "ꦥꦼꦱꦼꦤ꧀ꦥꦭꦶꦁ​ꦱꦼꦏꦼꦝꦶꦏ꧀ 10ꦲꦏ꧀ꦱꦫ꧉",
      "kirim": "ꦏꦶꦤ꧀ꦠꦸꦤ꧀ꦭꦸꦩꦤ꧀ꦠꦂ​ꦮꦠ꧀ꦱꦥ꧀"
    },
    "modal": {
      "title": "ꦥꦼꦱꦼꦤ꧀ꦱꦏꦶꦁ​ꦥꦁ​ꦥꦸꦤ꧀ꦢꦶ?"
    },
    "profil": {
      "title": "ꦥꦿꦺꦴꦥ꦳ꦶꦭꦸꦱꦲ",
      "nama": "ꦤꦩꦶ​ꦲꦸꦱꦲ",
      "bentuk": "ꦮꦸꦗꦸꦢꦸꦱꦲ",
      "bentukV": "ꦲꦸꦱꦲ​ꦲꦭꦶꦠ꧀",
      "bidang": "ꦧꦶꦢꦔꦸꦱꦲ",
      "bidangV": "ꦏꦸꦭꦶꦤꦼꦂ​ꦩꦺꦴꦕꦶ",
      "berdiri": "ꦠꦲꦸꦤ꧀ꦔꦢꦼꦒ꧀",
      "berdiriV": "11ꦲꦺꦴꦏ꧀ꦠꦺꦴꦧꦼꦂ​ 2015",
      "pemilik": "ꦲꦶꦁꦏꦁ​ꦒꦝꦃ",
      "pemilikV": "ꦲꦶꦧꦸ​ꦢ꧀ꦮꦶ​ꦱꦸꦩꦂꦱꦶꦃ",
      "produk": "ꦥꦿꦺꦴꦝꦸꦏ꧀",
      "produkV": "ꦩꦺꦴꦕꦶ​ꦏꦕꦁ꧈ ꦩꦕ꧈ ꦕꦺꦴꦏ꧀ꦭꦠ꧀꧈ ꦠꦫꦺꦴ꧈ ꦲꦺꦴꦫꦺꦲꦺꦴ",
      "cabang": "ꦥꦁ",
      "cabangV": "ꦔꦪꦺꦴꦒꦾꦏꦂꦠ​(ꦥꦸꦱꦠ꧀)​ꦭꦤ꧀ꦩꦒꦼꦭꦁ",
      "alamat": "ꦲꦭꦩꦠ꧀ꦥꦸꦱꦠ꧀",
      "alamatCabang": "ꦲꦭꦩꦠ꧀ꦥꦁ"
    },
    "footer": {
      "desc": "ꦩꦺꦴꦕꦶ​ꦒꦿꦶꦪꦤ꧀ꦱꦼꦒꦼꦂ​ꦠꦤ꧀ꦥ​ꦥꦼꦔꦮꦺꦠ꧀ꦱꦏꦶꦁ​ꦏꦿꦶꦕꦏ꧀꧈ ꦔꦪꦺꦴꦒꦾꦏꦂꦠ꧈ ꦮꦶꦮꦶꦠ꧀ 2015.",
      "menu": "ꦥꦿꦤꦭ",
      "kontak": "ꦏꦺꦴꦤ꧀ꦠꦏ꧀",
      "jamTitle": "ꦗꦩ꧀ꦧꦶꦏꦏ꧀",
      "hari": "ꦱꦼꦤꦺꦤ꧀ꦢꦸꦩꦸꦒꦶ​ꦩꦶꦁꦒꦸ",
      "jamNote": "ꦏꦁꦒꦼ​ꦏꦭꦶꦃ​ꦥꦁ꧉",
      "cabang": "ꦥꦁ",
      "copy": "ꦱꦶꦠꦸꦱ꧀ꦥꦸꦤꦶꦏ​ꦢꦶꦥꦸꦤ꧀ꦢꦩꦼꦭ꧀ꦏꦁꦒꦼ​ꦏꦥꦼꦂꦭꦸꦲꦤ꧀ꦥꦿꦏ꧀ꦠꦶꦏꦸꦩ꧀꧉"
    }
  }
};
