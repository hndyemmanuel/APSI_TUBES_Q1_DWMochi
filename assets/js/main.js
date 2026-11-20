/**
 * main.js - DW Mochi
 * - Ilustrasi mochi (SVG) pengganti foto
 * - Sistem bahasa ID/EN (data-i18n, tersimpan di localStorage)
 * - Navbar, hero slider, count-up, animasi muncul
 * - Kartu produk + modal pilih cabang
 * - Lokasi dua cabang (peta + fallback)
 * - Form kontak ke WhatsApp cabang terpilih
 */
(function () {
  'use strict';

  /* ---------- Data cabang ---------- */
  const BRANCHES = {
    jogja: {
      name: 'DW Mochi Yogyakarta',
      label: 'Yogyakarta',
      tagKey: 'lokasi.pusat',
      address: 'Kricak, Kec. Tegalrejo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55242',
      wa: '6285729011195',
      waText: '0857-2901-1195',
      lat: -7.7730825, lng: 110.3559235,
      mapsLink: 'https://maps.app.goo.gl/KF9BQ9uWFpLtEMph6'
    },
    magelang: {
      name: 'DW Mochi Magelang',
      label: 'Magelang',
      tagKey: 'lokasi.cabang',
      address: 'Dusun Alun-alun, Beteng, Menoreh, Kec. Salaman, Kabupaten Magelang, Jawa Tengah 56162',
      wa: '6281285636937',
      waText: '0812-8563-6937',
      lat: -7.5912944, lng: 110.1362923,
      mapsLink: 'https://maps.app.goo.gl/ZvWt172y4qSAbsU46'
    }
  };

  /* ---------- Data produk ---------- */
  const PRODUCTS = [
    { id: 'kacang', price: 1400, best: true },
    { id: 'matcha', price: 1800 },
    { id: 'coklat', price: 1800 },
    { id: 'taro', price: 1800 },
    { id: 'oreo', price: 1800 }
  ];

  /* ---------- Warna ilustrasi mochi ---------- */
  const MOCHI_COLORS = {
    kacang: { skin: '#FBF1E6', shade: '#EBDCCB', cut: '#F5E8DA', fill: '#9A6440', dot: '#6E4128' },
    matcha: { skin: '#D6E8BF', shade: '#BCD39F', cut: '#E3EFD3', fill: '#6F9150', dot: '#4F6C35' },
    coklat: { skin: '#EEDBCD', shade: '#DCC2AF', cut: '#F5E8DE', fill: '#5B3726', dot: '#3E2318' },
    taro: { skin: '#E7D6F1', shade: '#D2BCE3', cut: '#F1E6F7', fill: '#9B73BA', dot: '#7A539A' },
    oreo: { skin: '#FAF7F4', shade: '#E8E1DB', cut: '#EFEAE6', fill: '#F1ECE6', dot: '#2B2422' }
  };

  let uid = 0;
  function mochiSVG(type, size) {
    const c = MOCHI_COLORS[type] || MOCHI_COLORS.kacang;
    const id = 'm' + (uid++);
    const body = 'M30 150 C 22 95, 55 48, 100 48 C 145 48, 178 95, 170 150 C 166 168, 140 176, 100 176 C 60 176, 34 168, 30 150 Z';
    let dots = '';
    const dotPos = type === 'oreo'
      ? [[128, 72], [146, 86], [136, 98], [152, 70], [122, 90], [142, 108], [158, 96]]
      : [[132, 80], [146, 94], [140, 104]];
    dotPos.forEach(function (p, i) {
      dots += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (type === 'oreo' ? (i % 2 ? 3.2 : 2.2) : 2.4) + '" fill="' + c.dot + '" opacity=".75"/>';
    });
    const dust = [[62, 90], [80, 70], [70, 120], [95, 100], [55, 140], [110, 140], [88, 156], [130, 150], [150, 130]]
      .map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.6" fill="#fff" opacity=".8"/>'; }).join('');
    return '<svg class="dw-mochi dw-mochi--' + (size || 'md') + '" viewBox="0 0 200 200" role="img" aria-hidden="true">' +
      '<defs>' +
      '<clipPath id="' + id + 'b"><path d="' + body + '"/></clipPath>' +
      '<mask id="' + id + 'k"><rect width="200" height="200" fill="#fff"/><circle cx="160" cy="62" r="40" fill="#000"/><circle cx="128" cy="44" r="16" fill="#000"/><circle cx="178" cy="100" r="16" fill="#000"/></mask>' +
      '<radialGradient id="' + id + 'g" cx="38%" cy="32%" r="75%"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="' + c.skin + '"/><stop offset="1" stop-color="' + c.shade + '"/></radialGradient>' +
      '</defs>' +
      '<ellipse cx="100" cy="180" rx="66" ry="9" fill="#6B4A3A" opacity=".12"/>' +
      '<g mask="url(#' + id + 'k)"><path d="' + body + '" fill="url(#' + id + 'g)"/>' + dust + '</g>' +
      '<g clip-path="url(#' + id + 'b)">' +
      '<circle cx="160" cy="62" r="40" fill="' + c.cut + '"/>' +
      '<circle cx="128" cy="44" r="16" fill="' + c.cut + '"/>' +
      '<circle cx="178" cy="100" r="16" fill="' + c.cut + '"/>' +
      '<ellipse cx="146" cy="90" rx="24" ry="22" fill="' + c.fill + '"/>' + dots +
      '</g>' +
      '<ellipse cx="72" cy="78" rx="16" ry="9" fill="#fff" opacity=".55" transform="rotate(-30 72 78)"/>' +
      '</svg>';
  }

  /* Foto produk asli (latar transparan). Hapus baris ini untuk kembali ke ilustrasi. */
  const USE_PHOTOS = true;
  const PHOTO_ALT = { kacang: 'Mochi kacang', matcha: 'Mochi matcha', coklat: 'Mochi coklat', taro: 'Mochi taro', oreo: 'Mochi oreo' };
  function mochiImg(type, size) {
    if (!USE_PHOTOS) return mochiSVG(type, size);
    return '<img class="dw-mochi dw-mochi--' + (size || 'md') + '" src="assets/img/produk/' + type + '.png" alt="' + PHOTO_ALT[type] + '" loading="lazy" width="500" height="500">';
  }

  function renderMochi(root) {
    (root || document).querySelectorAll('[data-mochi]').forEach(function (el) {
      el.innerHTML = mochiImg(el.getAttribute('data-mochi'), el.getAttribute('data-mochi-size'));
    });
  }

  /* ---------- Bahasa ---------- */
  let currentLang = 'id';
  let applyingLang = false;
  function t(path) {
    const get = function (lang) { return path.split('.').reduce(function (o, k) { return o && o[k]; }, LANG_DATA[lang]); };
    let val = get(currentLang);
    if (val === undefined) val = get('id'); // pesan WhatsApp dll. tetap memakai bahasa Indonesia
    return val !== undefined ? val : path;
  }
  function fill(str, map) {
    return str.replace(/\{(\w+)\}/g, function (_, k) { return map[k] !== undefined ? map[k] : ''; });
  }

  function applyLanguage(lang) {
    if (window.DWAksara) DWAksara.restore();
    applyingLang = true;
    currentLang = LANG_DATA[lang] ? lang : 'id';
    document.documentElement.lang = currentLang;
    document.title = t('meta.title');
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) { el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    const flag = document.getElementById('langFlag');
    flag.className = 'fi ' + (currentLang === 'en' ? 'fi-gb' : 'fi-id') + ' dw-lang-flag';
    flag.textContent = '';
    document.getElementById('langCode').textContent = currentLang.toUpperCase();
    document.querySelectorAll('.dw-lang-option').forEach(function (b) { b.classList.toggle('active', b.dataset.lang === currentLang); });
    try { localStorage.setItem('dw-lang', currentLang); } catch (e) { /* abaikan */ }
    renderProducts();
    updateBranch(activeBranch);
    applyingLang = false;
    if (window.DWAksara && currentLang === 'jv') DWAksara.apply();
  }

  function initLanguage() {
    const toggle = document.getElementById('langToggle');
    const btn = document.getElementById('langDropdown');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const open = toggle.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    document.addEventListener('click', function () { toggle.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); });
    document.querySelectorAll('.dw-lang-option').forEach(function (b) {
      b.addEventListener('click', function () { applyLanguage(b.dataset.lang); });
    });
    let saved = 'id';
    try { saved = localStorage.getItem('dw-lang') || 'id'; } catch (e) { /* abaikan */ }
    applyLanguage(saved);
  }

  /* ---------- Navbar ---------- */
  function initNavbar() {
    const nav = document.getElementById('navbar');
    const links = document.querySelectorAll('.dw-nav-link');
    const sections = Array.from(links).map(function (l) { return document.querySelector(l.getAttribute('href')); });
    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 30);
      let idx = 0;
      sections.forEach(function (s, i) { if (s && s.getBoundingClientRect().top < 120) idx = i; });
      // Saat sudah di bagian Kontak (atau mentok di bawah), tidak ada menu biasa yang aktif
      const kontak = document.getElementById('kontak');
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      const onKontak = kontak && (kontak.getBoundingClientRect().top < 140 || atBottom);
      links.forEach(function (l, i) { l.classList.toggle('active', !onKontak && i === idx); });
      document.querySelector('.dw-nav-cta').classList.toggle('active', !!onKontak);
      document.getElementById('backToTop').classList.toggle('show', window.scrollY > 500);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const menu = document.getElementById('navMenu');
    document.querySelectorAll('#navMenu a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (menu.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide();
      });
    });
    document.getElementById('backToTop').addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* ---------- Hero slider ---------- */
  function initHeroSlider() {
    const slides = document.querySelectorAll('.dw-slide');
    const dots = document.querySelectorAll('.dw-slider__indicators button');
    let cur = 0, timer = null;
    function goTo(i) {
      cur = (i + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('dw-slide--active', k === cur); });
      dots.forEach(function (d, k) { d.classList.toggle('active', k === cur); });
      syncNavPhoto();
    }
    function start() { stop(); timer = setInterval(function () { goTo(cur + 1); }, 6000); }
    function stop() { if (timer) clearInterval(timer); }
    document.getElementById('heroNext').addEventListener('click', function () { goTo(cur + 1); start(); });
    document.getElementById('heroPrev').addEventListener('click', function () { goTo(cur - 1); start(); });
    dots.forEach(function (d) { d.addEventListener('click', function () { goTo(+d.dataset.slide); start(); }); });
    const slider = document.getElementById('heroCarousel');
    slider.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { goTo(cur + 1); start(); }
      if (e.key === 'ArrowLeft') { goTo(cur - 1); start(); }
    });
    let x0 = null;
    slider.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) { goTo(cur + (dx < 0 ? 1 : -1)); start(); }
      x0 = null;
    });
    start();
  }

  /* Foto latar slide: dipasang jika file fotonya ada */
  function initHeroPhotos() {
    document.querySelectorAll('.dw-hero__item[data-photo]').forEach(function (slide) {
      const src = slide.getAttribute('data-photo');
      const img = new Image();
      img.onload = function () {
        slide.style.backgroundImage = 'url("' + src + '")';
        slide.classList.add('has-photo');
        syncNavPhoto();
      };
      img.src = src;
    });
  }
  function syncNavPhoto() {
    const active = document.querySelector('.dw-slide--active');
    const on = !!(active && active.classList.contains('has-photo'));
    document.getElementById('navbar').classList.toggle('on-photo', on);
    document.getElementById('heroCarousel').classList.toggle('on-photo', on);
  }

  /* ---------- Count-up & reveal ---------- */
  function initCountUp() {
    const els = document.querySelectorAll('[data-count]');
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        const el = en.target, end = +el.dataset.count, suf = el.dataset.suffix || '';
        const from = end > 1000 ? end - 40 : 0, t0 = performance.now();
        (function step(now) {
          const p = Math.min((now - t0) / 1200, 1);
          el.textContent = Math.round(from + (end - from) * (1 - Math.pow(1 - p, 3))) + suf;
          if (p < 1) requestAnimationFrame(step);
        })(t0);
        io.unobserve(el);
      });
    }, { threshold: .5 });
    els.forEach(function (el) { io.observe(el); });
  }

  function initReveal() {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
    }, { threshold: .12 });
    document.querySelectorAll('.dw-reveal').forEach(function (el) { io.observe(el); });
  }

  /* ---------- Produk ---------- */
  function rupiah(n) { return 'Rp' + n.toLocaleString('id-ID'); }

  function renderProducts() {
    const grid = document.getElementById('produkGrid');
    if (!grid) return;
    grid.innerHTML = PRODUCTS.map(function (p) {
      return '<div class="col-sm-6 col-lg-4">' +
        '<article class="dw-product">' +
        '<div class="dw-product__art" style="background:' + MOCHI_COLORS[p.id].cut + '">' +
        (p.best ? '<span class="dw-product__badge"><i class="bi bi-star-fill me-1"></i>' + t('produk.best') + '</span>' : '') +
        mochiImg(p.id, 'sm') + '</div>' +
        '<div class="dw-product__body">' +
        '<h3 class="dw-product__name">' + t('produk.' + p.id + 'Name') + '</h3>' +
        '<div class="dw-product__price"><span class="dw-keep-latin">' + rupiah(p.price) + '</span> <small>' + t('produk.perPcs') + '</small></div>' +
        '<p class="dw-product__desc">' + t('produk.' + p.id + 'Desc') + '</p>' +
        '<button type="button" class="btn dw-btn-primary" data-order="' + p.id + '"><i class="bi bi-whatsapp me-1"></i>' + t('produk.pesan') + '</button>' +
        '</div></article></div>';
    }).join('');
  }

  function waUrl(branchKey, text) {
    return 'https://wa.me/' + BRANCHES[branchKey].wa + '?text=' + encodeURIComponent(text);
  }

  function initProductModal() {
    const modal = document.getElementById('branchModal');
    let product = null;
    function close() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
    document.getElementById('produkGrid').addEventListener('click', function (e) {
      const b = e.target.closest('[data-order]');
      if (!b) return;
      product = b.dataset.order;
      document.getElementById('branchModalProduct').textContent = t('produk.' + product + 'Name');
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      modal.querySelector('[data-pick]').focus();
    });
    modal.querySelectorAll('[data-pick]').forEach(function (b) {
      b.addEventListener('click', function () {
        const key = b.dataset.pick;
        const msg = fill(t('modal.produkMsg'), { cabang: BRANCHES[key].label, produk: t('produk.' + product + 'Name') });
        window.open(waUrl(key, msg), '_blank', 'noopener');
        close();
      });
    });
    modal.querySelector('.dw-modal__close').addEventListener('click', close);
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ---------- Lokasi ---------- */
  let activeBranch = 'jogja';
  let mapTimer = null;

  function loadMap(b) {
    const frame = document.getElementById('mapFrame');
    const loading = document.getElementById('mapLoading');
    const fallback = document.getElementById('mapFallback');
    loading.classList.remove('d-none');
    fallback.classList.add('d-none');
    clearTimeout(mapTimer);
    frame.onload = function () { clearTimeout(mapTimer); loading.classList.add('d-none'); };
    mapTimer = setTimeout(function () { loading.classList.add('d-none'); fallback.classList.remove('d-none'); }, 10000);
    frame.src = 'https://maps.google.com/maps?q=' + b.lat + ',' + b.lng + '&z=16&hl=' + currentLang + '&output=embed';
  }

  function updateBranch(key) {
    activeBranch = key;
    const b = BRANCHES[key];
    document.getElementById('branchName').textContent = b.name;
    const tag = document.getElementById('branchTag');
    tag.setAttribute('data-i18n', b.tagKey);
    tag.textContent = t(b.tagKey);
    document.getElementById('branchAddr').textContent = b.address;
    const waEl = document.getElementById('branchWa');
    waEl.textContent = '+62 ' + b.waText.slice(1);
    waEl.href = 'https://wa.me/' + b.wa;
    document.getElementById('branchDir').href = b.mapsLink;
    document.getElementById('branchChat').href = waUrl(key, fill(t('lokasi.chatMsg'), { cabang: b.label }));
    document.querySelectorAll('.dw-branch-tab').forEach(function (tb) {
      const on = tb.dataset.branch === key;
      tb.classList.toggle('active', on);
      tb.setAttribute('aria-selected', on);
    });
    loadMap(b);
    if (window.DWAksara && currentLang === 'jv' && !applyingLang) DWAksara.apply();
  }

  function initBranches() {
    document.querySelectorAll('.dw-branch-tab').forEach(function (tb) {
      tb.addEventListener('click', function () { if (tb.dataset.branch !== activeBranch) updateBranch(tb.dataset.branch); });
    });
  }

  /* ---------- Form kontak ---------- */
  function initContactForm() {
    const form = document.getElementById('kontakForm');
    const nama = document.getElementById('inputNama');
    const pesan = document.getElementById('inputPesan');
    const keperluan = document.getElementById('inputKebutuhan');
    function check(input, errId, ok) {
      input.classList.toggle('is-invalid', !ok);
      document.getElementById(errId).classList.toggle('show', !ok);
      return ok;
    }
    nama.addEventListener('input', function () { if (nama.classList.contains('is-invalid')) check(nama, 'errNama', nama.value.trim().length > 0); });
    pesan.addEventListener('input', function () { if (pesan.classList.contains('is-invalid')) check(pesan, 'errPesan', pesan.value.trim().length >= 10); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const ok1 = check(nama, 'errNama', nama.value.trim().length > 0);
      const ok2 = check(pesan, 'errPesan', pesan.value.trim().length >= 10);
      if (!ok1 || !ok2) { (ok1 ? pesan : nama).focus(); return; }
      const key = form.querySelector('input[name="cabang"]:checked').value;
      const text = fill(t('kontak.waIntro'), { cabang: BRANCHES[key].label, nama: nama.value.trim() }) + '\n\n' +
        t('kontak.waKeperluan') + ': ' + keperluan.options[keperluan.selectedIndex].text + '\n' +
        t('kontak.waPesan') + ': ' + pesan.value.trim();
      window.open(waUrl(key, text), '_blank', 'noopener');
    });
  }

  /* ---------- Gulir menu: posisikan isi bagian pas di bawah navbar ---------- */
  function initSmartScroll() {
    const nav = document.getElementById('navbar');
    function targetY(sec) {
      const had = nav.classList.contains('scrolled');
      nav.classList.add('scrolled');
      const navH = nav.offsetHeight;
      if (!had) nav.classList.remove('scrolled');
      const top = sec.getBoundingClientRect().top + window.scrollY;
      const room = window.innerHeight - navH;
      const first = sec.querySelector('.dw-eyebrow') || sec.firstElementChild;
      const contentTop = first.getBoundingClientRect().top + window.scrollY;
      const inner = sec.querySelector('.container') || sec;
      const contentBottom = inner.getBoundingClientRect().bottom + window.scrollY;
      // Jika seluruh bagian (dengan jarak atasnya) muat di layar, tampilkan utuh
      if (sec.id === 'kontak') {
        // Tampilkan judul Hubungi Kami sekaligus sampai link terakhir di footer
        const lastLink = document.querySelector('.dw-footer__links li:last-child');
        const need = lastLink.getBoundingClientRect().bottom + window.scrollY + 16 - window.innerHeight;
        return Math.min(Math.max(contentTop - navH - 16, need), contentTop - navH - 6);
      }
      if (contentBottom - top <= room) return top - navH;
      // Jika tidak, buang jarak kosong di atas agar isinya lebih banyak terlihat
      return contentTop - navH - 16;
    }
    document.addEventListener('click', function (e) {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const sec = document.querySelector(id);
      if (!sec) return;
      e.preventDefault();
      const y = id === '#beranda' ? 0 : Math.max(0, targetY(sec));
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.replaceState(null, '', id);
    });
  }

  /* ---------- Mulai ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('year').textContent = new Date().getFullYear();
    renderMochi();
    initBranches();
    initLanguage();
    initNavbar();
    initHeroPhotos();
    initHeroSlider();
    initCountUp();
    initReveal();
    initProductModal();
    initContactForm();
    initSmartScroll();
  });
})();
