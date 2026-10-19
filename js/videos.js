/* ============================================
   VIDEOS PAGE — 13 sections with unique anchors
   Each video gets: id="#company-slug"
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const companies = window.VIDEO_COMPANIES || [];
  const BASE = window.VIDEO_BASE || 'assets/videos/work/111222/';

  if (!companies.length) {
    console.error('❌ VIDEO_COMPANIES not loaded');
    return;
  }

  const sectionsHost = document.getElementById('videosSections');
  const indexHost = document.getElementById('videosIndexScroll');
  if (!sectionsHost) return;

  const currentLang = () => localStorage.getItem('medar-lang') || 'en';
  const isAr = () => currentLang() === 'ar';

  /* ===== SLUG (for anchor) ===== */
  function slugify(str) {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  /* ===== BUILD ONE SECTION ===== */
  function buildSection(company, index) {
    const ar = isAr();
    const name = ar ? company.nameAr : company.nameEn;
    const desc = ar ? company.descAr : company.descEn;
    const cat = ar ? company.catAr : company.catEn;
    const expo = ar ? company.expoAr : company.expoEn;
    const size = ar ? company.sizeAr : company.sizeEn;
    const slug = slugify(company.nameEn);

    const section = document.createElement('section');
    section.className = 'video-section';
    section.id = slug;
    section.dataset.companyId = company.id;

    section.innerHTML = `
      <div class="container">
        <div class="video-section__grid">

          <!-- Media -->
          <div class="video-section__media-wrap">
            <div class="video-section__media">
              <video
                class="video-section__video"
                src="${BASE + company.file}"
                muted
                loop
                playsinline
                preload="metadata"
              ></video>
              <button class="video-section__play" data-hover aria-label="Play video">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </button>
              <span class="video-section__num">${String(company.id).padStart(2, '0')} / ${String(companies.length).padStart(2, '0')}</span>
            </div>
          </div>

          <!-- Info -->
          <div class="video-section__info">
            <span class="video-section__cat">${cat}</span>
            <h2 class="video-section__title">${name}</h2>
            <p class="video-section__desc">${desc}</p>

            <dl class="video-section__facts">
              <div class="video-section__fact">
                <dt data-i18n="video.expo">Expo</dt>
                <dd>${expo}</dd>
              </div>
              <div class="video-section__fact">
                <dt data-i18n="video.size">Booth size</dt>
                <dd>${size}</dd>
              </div>
              <div class="video-section__fact">
                <dt data-i18n="video.company">Company</dt>
                <dd>${name}</dd>
              </div>
            </dl>

            <div class="video-section__actions">
              <a href="video.html?id=${company.id}" class="btn btn--primary" data-hover>
                <span data-i18n="video.openFull">Open full page</span>
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </a>
              <button class="btn btn--outline video-section__copy" data-hover data-anchor="${slug}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="margin-right:6px;">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
                <span data-i18n="video.copyLink">Copy link</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    `;

    /* ===== Video behavior ===== */
    const video = section.querySelector('video');
    const playBtn = section.querySelector('.video-section__play');

    // Hover autoplay (desktop)
    const mediaWrap = section.querySelector('.video-section__media-wrap');
    mediaWrap.addEventListener('mouseenter', () => {
      if (window.innerWidth > 900 && video.paused && !video.dataset.userPaused) {
        video.play().catch(() => {});
      }
    });
    mediaWrap.addEventListener('mouseleave', () => {
      if (window.innerWidth > 900 && !video.dataset.userPaused) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Click play/pause (works on mobile + desktop)
    playBtn.addEventListener('click', () => {
      if (video.paused) {
        video.muted = false;
        video.play().catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
        video.dataset.userPaused = '';
        playBtn.classList.add('is-playing');
      } else {
        video.pause();
        video.dataset.userPaused = '1';
        playBtn.classList.remove('is-playing');
      }
    });

    // Autoplay when in view (mobile)
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (window.innerWidth > 900) return;
        if (entry.isIntersecting && !video.dataset.userPaused) {
          video.play().catch(() => {});
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      });
    }, { threshold: 0.5 });
    io.observe(section);

    // Copy link
    const copyBtn = section.querySelector('.video-section__copy');
    copyBtn.addEventListener('click', async () => {
      const url = `${location.origin}${location.pathname}#${slug}`;
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

    return section;
  }

  /* ===== BUILD QUICK INDEX ===== */
  function buildIndex() {
    if (!indexHost) return;
    const ar = isAr();
    indexHost.innerHTML = '';

    companies.forEach((company) => {
      const name = ar ? company.nameAr : company.nameEn;
      const slug = slugify(company.nameEn);
      const a = document.createElement('a');
      a.href = `#${slug}`;
      a.className = 'videos-index__item';
      a.dataset.anchor = slug;
      a.innerHTML = `
        <span class="videos-index__num">${String(company.id).padStart(2, '0')}</span>
        <span class="videos-index__name">${name}</span>
      `;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(slug);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top, behavior: 'smooth' });
          history.replaceState(null, '', `#${slug}`);
        }
      });
      indexHost.appendChild(a);
    });
  }

  /* ===== RENDER ALL ===== */
  function renderAll() {
    sectionsHost.innerHTML = '';
    companies.forEach((c, i) => {
      sectionsHost.appendChild(buildSection(c, i));
    });
    buildIndex();
    observeSections();
  }

  /* ===== ACTIVE INDEX HIGHLIGHT ===== */
  let sectionObserver;
  function observeSections() {
    if (sectionObserver) sectionObserver.disconnect();

    const links = document.querySelectorAll('.videos-index__item');

    sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const slug = entry.target.id;
        links.forEach((l) => {
          l.classList.toggle('active', l.dataset.anchor === slug);
        });
        // Auto-scroll index strip so active is visible
        const activeLink = document.querySelector(`.videos-index__item[data-anchor="${slug}"]`);
        if (activeLink && indexHost) {
          const rect = activeLink.getBoundingClientRect();
          const hostRect = indexHost.getBoundingClientRect();
          if (rect.left < hostRect.left || rect.right > hostRect.right) {
            activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        }
      });
    }, {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    });

    document.querySelectorAll('.video-section').forEach((s) => sectionObserver.observe(s));
  }

  /* ===== INIT ===== */
  renderAll();

  /* ===== HANDLE #hash on load ===== */
  if (location.hash) {
    const id = location.hash.slice(1);
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'auto' });
      }
    }, 300);
  }

  /* ===== LANGUAGE CHANGE ===== */
  window.addEventListener('languagechange', () => {
    renderAll();
  });

});