/**
 * aksara.js - DW Mochi
 * Mengubah teks Latin yang tersisa (nama usaha, nama cabang, nama orang,
 * alamat) menjadi aksara Jawa saat bahasa Jawa dipilih, lalu
 * mengembalikannya saat bahasa diganti lagi.
 */
(function () {
  'use strict';
  const CONS = { ny: 'ꦚ', ng: 'ꦔ', dh: 'ꦝ', th: 'ꦛ', h: 'ꦲ', n: 'ꦤ', c: 'ꦕ', r: 'ꦫ', k: 'ꦏ', d: 'ꦢ', t: 'ꦠ', s: 'ꦱ', w: 'ꦮ', l: 'ꦭ', p: 'ꦥ', j: 'ꦗ', y: 'ꦪ', m: 'ꦩ', g: 'ꦒ', b: 'ꦧ', f: 'ꦥ꦳', v: 'ꦮ꦳', z: 'ꦗ꦳', q: 'ꦏ' };
  const VOW = { a: '', i: 'ꦶ', u: 'ꦸ', 'é': 'ꦺ', 'è': 'ꦺ', e: 'ꦼ', o: 'ꦺꦴ' };
  const PANGKON = '꧀', DIG = '꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙';
  const PUNCT = { ',': '꧈', '.': '꧉', ':': '꧇' };
  // Ejaan disesuaikan bunyi agar bisa diaksarakan
  const RESPELL = [
    [/\bDW Mochi\b/g, 'Déwé Moci'], [/\bMochi\b/gi, 'Moci'], [/\bMOCHI\b/g, 'Moci'],
    [/\bKec\./g, 'Kecamatan'], [/\bKab\./g, 'Kabupatén'], [/\bKota\b/g, 'Kutha'],
    [/\bDaerah Istimewa\b/g, 'Dhaérah Istiméwa'], [/\bJawa Tengah\b/g, 'Jawi Tengah'],
    [/\bHandy\b/g, 'Héndi'], [/\bEmmanuelo\b/g, 'Émanuélo'], [/\bMarthin\b/g, 'Martin'],
    [/\bNoor\b/g, 'Nur'], [/\bFadholy\b/g, 'Fadholi'], [/\bDusun\b/g, 'Dhusun'],
    [/\bAlun-alun\b/g, 'Alun alun'], [/\bmatcha\b/gi, 'maca'], [/\boreo\b/gi, 'oréo'],
    [/\bUMKM\b/g, 'Usaha Alit'], [/\bpcs\b/g, 'iji']
  ];

  function tokenize(s) {
    s = s.toLowerCase();
    const out = [];
    for (let i = 0; i < s.length;) {
      const ch = s[i];
      if (/\d/.test(ch)) {
        let j = i;
        while (j < s.length && (/\d/.test(s[j]) || (/[.:]/.test(s[j]) && /\d/.test(s[j + 1] || '')))) j++;
        out.push(['num', s.slice(i, j)]); i = j; continue;
      }
      const two = s.slice(i, i + 2);
      if (CONS[two]) { out.push(['C', two]); i += 2; continue; }
      if (CONS[ch]) { out.push(['C', ch]); i++; continue; }
      if (ch === 'x') { out.push(['C', 'k'], ['C', 's']); i++; continue; }
      if (ch in VOW) { out.push(['V', ch]); i++; continue; }
      if (ch === ' ' || ch === '-') { out.push(['SP', ' ']); i++; continue; }
      out.push(['P', ch]); i++;
    }
    return out;
  }
  function nxt(t, i) { while (i < t.length && t[i][0] === 'SP') i++; return i; }

  function translit(str) {
    RESPELL.forEach(function (r) { str = str.replace(r[0], r[1]); });
    const t = tokenize(str); const res = []; let prevV = false;
    for (let i = 0; i < t.length;) {
      const k = t[i][0], v = t[i][1];
      if (k === 'SP') { res.push(' '); i++; continue; }
      if (k === 'num') { res.push(v); prevV = false; i++; continue; } // angka tetap angka biasa
      if (k === 'P') { res.push(PUNCT[v] || v); prevV = false; i++; continue; }
      if (k === 'V') { res.push('ꦲ' + VOW[v]); prevV = true; i++; continue; }
      const j = nxt(t, i + 1); const n = t[j] || ['END', ''];
      if (n[0] === 'V') { res.push(CONS[v] + VOW[n[1]]); prevV = true; i = j + 1; continue; }
      if (prevV && (v === 'r' || v === 'ng' || v === 'h')) { res.push({ r: 'ꦂ', ng: 'ꦁ', h: 'ꦃ' }[v]); prevV = false; i++; continue; }
      if (n[0] === 'C' && j === i + 1) {
        const j2 = nxt(t, j + 1); const n2 = t[j2] || ['END', ''];
        if (n[1] === 'r' && n2[0] === 'V') { res.push(CONS[v] + (n2[1] === 'e' ? 'ꦽ' : 'ꦿ' + VOW[n2[1]])); prevV = true; i = j2 + 1; continue; }
        if (n[1] === 'y' && n2[0] === 'V') { res.push(CONS[v] + 'ꦾ' + VOW[n2[1]]); prevV = true; i = j2 + 1; continue; }
      }
      res.push(CONS[v] + PANGKON); prevV = false; i++;
    }
    return res.join('');
  }

  const SKIP = 'script,style,input,textarea,select,option,iframe,[data-i18n],.dw-keep-latin';
  const PHONE = /\+?\d[\d\s-]{7,}\d/;
  const saved = [];

  function walk(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!/[A-Za-z]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (PHONE.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (n.parentElement && n.parentElement.closest(SKIP)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const list = []; let n;
    while ((n = w.nextNode())) list.push(n);
    return list;
  }

  window.DWAksara = {
    translit: translit,
    apply: function () {
      this.restore();
      walk(document.body).forEach(function (n) { saved.push([n, n.nodeValue]); n.nodeValue = translit(n.nodeValue); });
    },
    restore: function () {
      while (saved.length) { const s = saved.pop(); s[0].nodeValue = s[1]; }
    }
  };
})();
