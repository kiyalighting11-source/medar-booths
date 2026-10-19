/* ============================================
   VIDEO PAGE — single video detail
   Reads ?id=1..13 and renders from VIDEO_COMPANIES
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const companies = window.VIDEO_COMPANIES || [];
  const BASE = window.VIDEO_BASE || 'assets/videos/work/111222/';

  if (!companies.length) {
    console.error('❌ VIDEO_COMPANIES not loaded');
    return;
  }

  const currentLang = () => localStorage.getItem('medar-lang') || 'en';
  const isAr = () => currentLang() === 'ar';

  /* ===== READ ?id= ===== */
  const params = new URLSearchParams(window.location.search);
  let id = parseInt(params.get('id'), 10);
  if (!id || id < 1 || id > companies.length) id = 1;

  const company = companies.find(c => c.id === id) || companies[0];
  const index = companies.indexOf(company);

  /* ===== ELEMENTS ===== */
  const videoEl      = document.getElementById('mainVideo');
  const loaderEl     = document.getElementById('videoLoader');
  const titleEl      = document.getElementById('videoTitle');
  const descEl       = document.getElementById('videoDesc');
  const catEl        = document.getElementById('videoCat');
  const expoEl       = document.getElementById('videoExpo');
  const sizeEl       = document.getElementById('videoSize');
  const companyEl    = document.getElementById('videoCompany');
  const counterEl    = document.getElementById('videoCounter');
  const crumbEl      = document.getElementById('crumbCompany');
  const prevBtn      = document.getElementById('prevVideo');
  const nextBtn      = document.getElementById('nextVideo');
  const prevName     = document.getElementById('prevName');
  const nextName     = document.getElementById('nextName');
  const moreGrid     = document.getElementById('moreVideosGrid');
  const copyBtn      = document.getElementById('copyLinkBtn');

  /* ===== RENDER ===== */
  function render() {
    const ar = isAr();

    // Video
    const src = BASE + company.file;
    videoEl.src = src;
    videoEl.load();
    videoEl.play().catch(() => {});

    // Meta
    titleEl.textContent   = ar ? company.nameAr : company.nameEn;
    descEl.textContent    = ar ? company.descAr : company.descEn;
    catEl.textContent     = ar ? company.catAr : company.catEn;
    expoEl.textContent    = ar ? company.expoAr : company.expoEn;
    sizeEl.textContent    = ar ? company.sizeAr : company.sizeEn;
    companyEl.textContent = ar ? company.nameAr : company.nameEn;
    counterEl.textContent = `${String(index + 1).padStart(2, '0')} / ${String(companies.length).padStart(2, '0')}`;
    crumbEl.textContent   = ar ? company.nameAr : company.nameEn;

    // Document meta
    document.title = `${ar ? company.nameAr : company.nameEn} — MEDAR BOOTHS`;
    document.getElementById('metaDesc').setAttribute('content', ar ? company.descAr : company.descEn);
    document.getElementById('ogTitle').setAttribute('content', `${ar ? company.nameAr : company.nameEn} — MEDAR BOOTHS`);
    document.getElementById('ogDesc').setAttribute('content', ar ? company.descAr : company.descEn);
    document.getElementById('ogVideo').setAttribute('content', new URL(src, location.href).href);

    // Prev / Next
    const prev = companies[index - 1];
    const next = companies[index + 1];
    if (prev) {
      prevBtn.classList.remove('disabled');
      prevBtn.href = `video.html?id=${prev.id}`;
      prevName.textContent = ar ? prev.nameAr : prev.nameEn;
    } else {
      prevBtn.classList.add('disabled');
      prevBtn.removeAttribute('href');
      prevName.textContent = '—';
    }
    if (next) {
      nextBtn.classList.remove('disabled');
      nextBtn.href = `video.html?id=${next.id}`;
      nextName.textContent = ar ? next.nameAr : next.nameEn;
    } else {
      nextBtn.classList.add('disabled');
      nextBtn.removeAttribute('href');
      nextName.textContent = '—';
    }

    renderMore();
  }

  /* ===== MORE VIDEOS (exclude current) ===== */
  function renderMore() {
    if (!moreGrid) return;
    const ar = isAr();
    moreGrid.innerHTML = '';

    const others = companies.filter(c => c.id !== company.id).slice(0, 6);

    others.forEach(c => {
      const name = ar ? c.nameAr : c.nameEn;
      const card = document.createElement('article');
      card.className = 'video-company-card';
      card.innerHTML = `
        <a class="video-company-card__media" href="video.html?id=${c.id}" aria-label="${name}">
          <video src="${BASE + c.file}" muted loop playsinline preload="metadata"></video>
          <span class="video-company-card__num">${String(c.id).padStart(2, '0')} / ${String(companies.length).padStart(2, '0')}</span>
          <button class="video-company-card__play" aria-label="Play" tabindex="-1">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </a>
        <h3 class="video-company-card__name">${name}</h3>
      `;
      const video = card.querySelector('video');
      card.querySelector('.video-company-card__media').addEventListener('mouseenter', () => {
        if (window.innerWidth > 900) video.play().catch(() => {});
      });
      card.querySelector('.video-company-card__media').addEventListener('mouseleave', () => {
        if (window.innerWidth > 900) { video.pause(); video.currentTime = 0; }
      });
      moreGrid.appendChild(card);
    });
  }

  /* ===== VIDEO LOADER ===== */
  videoEl.addEventListener('waiting', () => loaderEl.classList.add('active'));
  videoEl.addEventListener('playing', () => loaderEl.classList.remove('active'));
  videoEl.addEventListener('canplay', () => loaderEl.classList.remove('active'));

  /* ===== COPY LINK ===== */
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const url = location.href;
      try {
        await navigator.clipboard.writeText(url);
      } catch {
        const ta = document.createElement('textarea');
        ta.value = url;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      const label = copyBtn.querySelector('span');
      const original = label.textContent;
      copyBtn.classList.add('copied');
      label.textContent = isAr() ? 'تم النسخ ✓' : 'Copied ✓';
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        label.textContent = original;
      }, 1800);
    });
  }

  /* ===== INIT ===== */
  render();

  /* ===== LANGUAGE CHANGE ===== */
  window.addEventListener('languagechange', () => {
    render();
  });

  /* ===== KEYBOARD: ← → بين الفيديوهات ===== */
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea, select')) return;
    const prev = companies[index - 1];
    const next = companies[index + 1];
    if (e.key === 'ArrowLeft' && prev) location.href = `video.html?id=${prev.id}`;
    if (e.key === 'ArrowRight' && next) location.href = `video.html?id=${next.id}`;
  });
});