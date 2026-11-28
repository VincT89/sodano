/* Countdown per il lancio del nuovo sito.
   Prima della mezzanotte: cifre a contachilometri sopra il data center spento.
   A mezzanotte del 1° gennaio 2027 (ora di Roma) parte da solo il film completo e compare il messaggio finale.
   ?anteprima simula gli ultimi 10 secondi. */
(() => {

// 1 gennaio 2027, mezzanotte a Roma (UTC+1)
const LAUNCH = Date.UTC(2026, 11, 31, 23, 0, 0);
const params = new URLSearchParams(location.search);
// ?anteprima: simula gli ultimi 10 secondi prima della mezzanotte
const preview = params.has('anteprima');
const target = preview ? Date.now() + 10400 : LAUNCH;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const TEXT = {
  it: {
    units: ['giorni', 'ore', 'minuti', 'secondi'],
    title: 'Il 1° gennaio accendiamo il nuovo Sodano Consulting.',
    sub: 'Siti e software su misura, marketing digitale, infrastrutture IT e cloud: tutto in un unico posto, più chiaro e più veloce.',
    meanwhile: 'Hai un progetto che non può aspettare? Parliamone subito.',
    doneTitle: 'Il nuovo Sodano Consulting è online.', doneSub: 'Sviluppo, marketing e sistemi: scopri cosa possiamo costruire insieme.', enter: 'Scopri il nuovo sito',
    sr: (d, h, m) => `Mancano ${d} giorni, ${h} ore e ${m} minuti`
  },
  en: {
    units: ['days', 'hours', 'minutes', 'seconds'],
    title: 'On 1 January we switch on the new Sodano Consulting.',
    sub: 'Custom websites and software, digital marketing, IT infrastructure and cloud: everything in one place, clearer and faster.',
    meanwhile: 'Got a project that can’t wait? Let’s talk now.',
    doneTitle: 'The new Sodano Consulting is live.', doneSub: 'Development, marketing and systems: discover what we can build together.', enter: 'Discover the new site',
    sr: (d, h, m) => `${d} days, ${h} hours and ${m} minutes to go`
  },
  de: {
    units: ['Tage', 'Stunden', 'Minuten', 'Sekunden'],
    title: 'Am 1. Januar schalten wir das neue Sodano Consulting ein.',
    sub: 'Websites und Software nach Maß, digitales Marketing, IT-Infrastruktur und Cloud: alles an einem Ort, klarer und schneller.',
    meanwhile: 'Ein Projekt, das nicht warten kann? Sprechen wir jetzt darüber.',
    doneTitle: 'Das neue Sodano Consulting ist online.', doneSub: 'Entwicklung, Marketing und Systeme: Entdecken Sie, was wir gemeinsam bauen können.', enter: 'Neue Website entdecken',
    sr: (d, h, m) => `Noch ${d} Tage, ${h} Stunden und ${m} Minuten`
  },
  nl: {
    units: ['dagen', 'uren', 'minuten', 'seconden'],
    title: 'Op 1 januari zetten we het nieuwe Sodano Consulting aan.',
    sub: 'Websites en software op maat, digitale marketing, IT-infrastructuur en cloud: alles op één plek, duidelijker en sneller.',
    meanwhile: 'Een project dat niet kan wachten? Laten we nu praten.',
    doneTitle: 'Het nieuwe Sodano Consulting is online.', doneSub: 'Ontwikkeling, marketing en systemen: ontdek wat we samen kunnen bouwen.', enter: 'Ontdek de nieuwe site',
    sr: (d, h, m) => `Nog ${d} dagen, ${h} uur en ${m} minuten`
  }
};
const lang = params.get('lang') || (navigator.language || 'it').slice(0, 2);
const T = TEXT[lang] || TEXT.it;
document.documentElement.lang = TEXT[lang] ? lang : 'it';
const $ = (id) => document.getElementById(id);
$('title').textContent = T.title; $('sub').textContent = T.sub;
$('meanwhile').textContent = T.meanwhile; $('enter').textContent = T.enter;
// pulsanti: anteprima della mezzanotte e accesso al sito
const BTN = {
  it: ['Anteprima mezzanotte', 'Esci dall’anteprima', 'Entra nel sito'],
  en: ['Preview midnight', 'Exit preview', 'Enter the site'],
  de: ['Mitternacht ansehen', 'Vorschau beenden', 'Zur Website'],
  nl: ['Middernacht bekijken', 'Voorbeeld sluiten', 'Naar de website']
}[document.documentElement.lang];
$('preview').textContent = preview ? BTN[1] : BTN[0];
$('go').textContent = BTN[2];
// chi entra nel sito non rivede il countdown fino alla chiusura del browser (cookie letto dal .htaccess)
for (const id of ['go', 'enter']) $(id).addEventListener('click', () => { document.cookie = 'sodano_cd=1; path=/; SameSite=Lax'; });
$('preview').addEventListener('click', () => {
  const u = new URL(location.href);
  if (preview) u.searchParams.delete('anteprima'); else u.searchParams.set('anteprima', '');
  location.href = u.toString().replace('anteprima=', 'anteprima');
});

const remaining = () => Math.max(0, target - Date.now());
const parts = (ms) => { const s = Math.floor(ms / 1000); return [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60]; };
let done = remaining() <= 0;

// ---------- cifre a contachilometri (HTML, nitide e leggibili dagli screen reader tramite #sr) ----------
const cd = $('cd');
const reels = [];
T.units.forEach((u, gi) => {
  const g = document.createElement('div'); g.className = 'grp';
  const nums = document.createElement('div'); nums.className = 'nums';
  const digits = gi === 0 ? Math.max(2, String(parts(remaining())[0]).length) : 2;
  for (let k = 0; k < digits; k++) {
    const d = document.createElement('span'); d.className = 'dig';
    const r = document.createElement('span'); r.className = 'reel';
    // rullo: [cifra di scorta] 0 1 2 ... 9  — la scorta serve per il passaggio da 0 a 9
    for (let n = -1; n <= 9; n++) { const s = document.createElement('span'); s.textContent = n < 0 ? '9' : n; r.appendChild(s); }
    d.appendChild(r); nums.appendChild(d);
    reels.push({ el: r, spare: r.firstChild, v: null, gi });
  }
  const lab = document.createElement('span'); lab.className = 'unit'; lab.textContent = u;
  g.append(nums, lab); cd.appendChild(g);
  if (gi < 3) { const c = document.createElement('span'); c.className = 'colon'; c.textContent = ':'; cd.appendChild(c); }
});
function setReel(r, v, animate) {
  const pos = (x) => `translateY(${-(x + 1)}em)`;
  if (r.v === v) return;
  if (r.v === null || !animate || reduce) { r.el.style.transition = 'none'; r.el.style.transform = pos(v); r.v = v; return; }
  const from = r.v; r.v = v;
  r.el.parentElement.classList.remove('tick'); void r.el.offsetWidth; r.el.parentElement.classList.add('tick');
  if (v > from) {
    // ripartenza (0 → 9, 0 → 5...): la nuova cifra scende dall'alto passando dalla scorta, poi salto invisibile
    r.spare.textContent = v;
    r.el.style.transition = 'transform .62s cubic-bezier(.2,.85,.25,1)';
    r.el.style.transform = 'translateY(0em)';
    setTimeout(() => { r.el.style.transition = 'none'; r.el.style.transform = pos(v); }, 650);
  } else {
    r.el.style.transition = 'transform .62s cubic-bezier(.2,.85,.25,1)';
    r.el.style.transform = pos(v);
  }
}
function showTime(animate) {
  const p = parts(remaining());
  let i = 0;
  p.forEach((val, gi) => {
    const str = String(val).padStart(gi === 0 ? reels.filter((r) => r.gi === 0).length : 2, '0');
    for (const ch of str) setReel(reels[i++], +ch, animate);
  });
  $('sr').textContent = T.sr(p[0], p[1], p[2]);
  return p;
}

// ---------- video ----------
// prima della mezzanotte: il data center spento in loop dietro il countdown;
// a mezzanotte parte da solo il film completo: leva, data center che si accende, Valenzano, portatile, smartphone
const idle = $('v-idle'), boot = $('v-boot'), skip = $('skip'), watch = $('watch');
[idle, boot].forEach((v) => { v.muted = true; });
skip.textContent = { it: 'Salta il video', en: 'Skip video', de: 'Video überspringen', nl: 'Video overslaan' }[document.documentElement.lang];
watch.textContent = { it: 'Guarda il video', en: 'Watch the video', de: 'Video ansehen', nl: 'Bekijk de video' }[document.documentElement.lang];
if (!reduce && !done) idle.play().catch(() => {});

let finaleShown = false;
function showDoneUI() {
  if (finaleShown) return; finaleShown = true;
  document.body.classList.remove('booting');
  document.body.classList.add('booted');
  skip.hidden = true;
  if (window.__doneText) window.__doneText();
}
// se il telefono blocca la riproduzione automatica (es. risparmio energetico su iPhone) il film parte con un tocco
function offerWatch() { if (!reduce) document.body.classList.add('can-watch'); }
window.__finale = () => {
  if (reduce) { showDoneUI(); return; }
  boot.currentTime = 0;
  document.body.classList.add('booting');
  skip.hidden = false;
  boot.play().catch(() => { showDoneUI(); offerWatch(); });
};
skip.addEventListener('click', () => { boot.pause(); showDoneUI(); });
watch.addEventListener('click', () => { document.body.classList.remove('can-watch'); finaleShown = false; window.__finale(); });
boot.addEventListener('ended', showDoneUI);
// se a mezzanotte la scheda era in secondo piano, il film riparte quando si torna sulla pagina
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && document.body.classList.contains('booting') && boot.paused && !boot.ended) boot.play().catch(showDoneUI);
});
// ---------- tempo ----------
function finish() {
  done = true;
  showTime(true);
  document.body.classList.add('is-done');
  if (window.__finale) window.__finale();
  window.__doneText = () => {
    $('title').textContent = T.doneTitle; $('sub').textContent = T.doneSub;
    $('enter').hidden = false; $('meanwhile').parentElement.hidden = true;
    document.body.classList.add('show-done');
    // in anteprima resta solo il pulsante per uscirne
    if (preview) $('go').hidden = true; else document.querySelector('.actions').hidden = true;
  };
}
// il film finale (3,6 MB) si scarica solo nell'ultimo minuto e mezzo, non a ogni visita
let finaleLoading = false;
function loadFinale() { if (finaleLoading) return; finaleLoading = true; $('v-boot').preload = 'auto'; $('v-boot').load(); }
function tick() {
  if (remaining() < 90000) loadFinale();
  if (remaining() <= 0) { finish(); return; }
  const p = showTime(true);
  if (window.__pulse) window.__pulse(p);
  setTimeout(tick, ((target - Date.now()) % 1000 + 1000) % 1000 + 15);
}
if (done) {
  document.body.classList.add('is-done', 'show-done');
  $('title').textContent = T.doneTitle; $('sub').textContent = T.doneSub;
  $('enter').hidden = false; $('meanwhile').parentElement.hidden = true;
  setTimeout(() => window.__finale && window.__finale(), 300);
} else {
  showTime(false);
  setTimeout(tick, ((target - Date.now()) % 1000 + 1000) % 1000 + 15);
}
})();
