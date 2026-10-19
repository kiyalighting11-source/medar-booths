/* ============================================
   MEDAR BOOTHS — Main Script
   Loader · Cursor · Trail · Particles · Nav ·
   Reveal · Counters · Video · Transitions ·
   Parallax · Magnetic · Rotating Badge · Swiper
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const isDesktop = () => window.innerWidth > 900;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =====================================================
     1. LOADER
     ===================================================== */
  const loader = document.getElementById('loader');
  if (loader) {
    const fill = loader.querySelector('.loader__bar-fill');
    const num = loader.querySelector('.loader__num');
    let p = 0;

    const iv = setInterval(() => {
      p += Math.random() * 18;
      if (p >= 100) {
        p = 100;
        clearInterval(iv);
        setTimeout(() => {
          loader.classList.add('done');
          heroIn();
        }, 350);
      }
      if (fill) fill.style.transform = `scaleX(${p / 100})`;
      if (num) num.textContent = String(Math.floor(p)).padStart(3, '0');
    }, 130);
  } else {
    heroIn();
  }

  /* =====================================================
     2. HERO INTRO
     ===================================================== */
  function heroIn() {
    const lines = document.querySelectorAll('.hero__title .line > span');
    lines.forEach((span, i) => {
      span.style.transition =
        `transform 1.1s cubic-bezier(0.16,1,0.3,1) ${i * 0.10}s, ` +
        `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.10}s`;
      requestAnimationFrame(() => {
        span.style.transform = 'translateY(0)';
        span.style.opacity = '1';
      });
    });
    document.querySelectorAll('.hero [data-reveal]').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 400 + i * 100);
    });
  }

  /* =====================================================
     3. CUSTOM CURSOR
     ===================================================== */
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');

  if (cursor && follower && isDesktop()) {
    let mx = 0, my = 0, fx = 0, fy = 0;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });

    (function loop() {
      fx += (mx - fx) * 0.15;
      fy += (my - fy) * 0.15;
      follower.style.transform = `translate(${fx}px, ${fy}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    })();

    const hoverTargets = document.querySelectorAll(
      'a, button, [data-hover], .project, .service-row, .feature__media, .video-card, .gallery-item, .card, .team-card'
    );
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('grow');
        follower.classList.add('grow');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        follower.classList.remove('grow');
      });
    });
  }

  /* =====================================================
     4. CURSOR TRAIL
     ===================================================== */
  if (isDesktop()) {
    const trailContainer = document.createElement('div');
    trailContainer.className = 'cursor-trail';
    document.body.appendChild(trailContainer);

    const MAX_DOTS = 12;
    const dots = [];
    let lastSpawn = 0;

    document.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - lastSpawn < 40) return;
      lastSpawn = now;

      const dot = document.createElement('div');
      dot.className = 'trail-dot';
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      const scale = Math.random() * 0.5 + 0.5;
      dot.style.transform = `translate(-50%, -50%) scale(${scale})`;
      trailContainer.appendChild(dot);
      dots.push(dot);

      if (dots.length > MAX_DOTS) dots.shift().remove();

      setTimeout(() => {
        dot.style.opacity = '0';
        dot.style.transform = `translate(-50%, -50%) scale(0)`;
        setTimeout(() => dot.remove(), 800);
      }, 100);
    });
  }

  /* =====================================================
     5. FLOATING PARTICLES
     ===================================================== */
  const hero = document.querySelector('.hero');
  if (hero) {
    const particles = document.createElement('div');
    particles.className = 'particles';
    hero.appendChild(particles);

    const COUNT = 25;
    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement('span');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = '-10px';
      p.style.animationDuration = (Math.random() * 10 + 12) + 's';
      p.style.animationDelay = (Math.random() * 15) + 's';
      p.style.opacity = Math.random() * 0.6 + 0.3;
      const size = Math.random() * 3 + 2;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      particles.appendChild(p);
    }
  }

  /* =====================================================
     6. HERO TICKER
     ===================================================== */
  if (hero && !hero.querySelector('.hero__ticker')) {
    const ticker = document.createElement('div');
    ticker.className = 'hero__ticker';
    ticker.innerHTML = `
      <span><span class="hero__ticker-dot"></span>&nbsp;&nbsp;Available · Q1 2026</span>
      <span>25.2048° N · 55.2708° E</span>
      <span>Scroll to explore ↓</span>
    `;
    hero.appendChild(ticker);
  }

  /* =====================================================
     7. SCROLL PROGRESS BAR
     ===================================================== */
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  function updateProgress() {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = h > 0 ? (window.scrollY / h) * 100 : 0;
    progressBar.style.width = p + '%';
  }

  /* =====================================================
     8. NAV SCROLL STATE
     ===================================================== */
  const nav = document.querySelector('.nav');
  const heroSection = document.querySelector('.hero');

  function handleNavScroll() {
    if (!nav) return;

    const scrolled = window.scrollY > 40;
    nav.classList.toggle('nav--solid', scrolled);

    if (heroSection) {
      const heroBottom = heroSection.offsetHeight - 80;
      const onHero = window.scrollY < heroBottom;

      const showOnImage = onHero && window.scrollY < 60;
      nav.classList.toggle('nav--on-image', showOnImage);
    }
  }

  /* =====================================================
     9. NAV COLOR SHIFT (over dark sections)
     ===================================================== */
  const darkSections = document.querySelectorAll('[data-nav-theme="dark"]');

  function updateNavTheme() {
    if (!nav) return;
    const navMid = 90;
    let isDark = false;

    darkSections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= navMid && rect.bottom >= navMid) isDark = true;
    });

    nav.classList.toggle('nav--dark', isDark);
    document.body.setAttribute('data-cursor-theme', isDark ? 'light' : 'dark');
  }

  /* =====================================================
     10. COMBINED SCROLL HANDLER
     ===================================================== */
  let rafPending = false;
  window.addEventListener('scroll', () => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      updateProgress();
      handleNavScroll();
      updateNavTheme();
      rafPending = false;
    });
  }, { passive: true });

  window.addEventListener('resize', () => {
    handleNavScroll();
    updateNavTheme();
  });

  updateProgress();
  handleNavScroll();
  updateNavTheme();

  /* =====================================================
     11. MOBILE MENU
     ===================================================== */
  const menuBtn = document.querySelector('.nav__menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  /* =====================================================
     12. ACTIVE NAV LINK
     ===================================================== */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .mobile-menu__links a').forEach((a) => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });

  /* =====================================================
     13. SCROLL REVEAL
     ===================================================== */
  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealIO.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    if (!el.closest('.hero')) revealIO.observe(el);
  });

  /* =====================================================
     14. COUNTERS
     ===================================================== */
  const counterIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.dataset.target;
        const duration = 1600;
        const t0 = performance.now();

        (function tick(now) {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(eased * target);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        })(t0);

        counterIO.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.counter').forEach((c) => counterIO.observe(c));

  /* =====================================================
     15. MAGNETIC ELEMENTS
     ===================================================== */
  if (isDesktop()) {
    const magneticSelectors =
      '.btn, .nav__icon, .project__arrow, .service-row__arrow, .play-btn';

    document.querySelectorAll(magneticSelectors).forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.22}px, ${y * 0.32}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* =====================================================
     16. ROTATING BADGE
     ===================================================== */
  const badgeHost = document.querySelector('.feature__media');
  if (badgeHost && !badgeHost.querySelector('.floating-badge')) {
    const badge = document.createElement('div');
    badge.className = 'floating-badge';
    badge.style.top = '2rem';
    badge.style.right = '2rem';
    badge.style.width = '120px';
    badge.style.height = '120px';
    badge.innerHTML = `
      <svg viewBox="0 0 140 140">
        <defs>
          <path id="circlePath"
            d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
            fill="none"/>
        </defs>
        <text class="floating-badge__text">
          <textPath href="#circlePath" startOffset="0">
            MEDAR BOOTHS ◆ SINCE 2013 ◆ DUBAI ◆
          </textPath>
        </text>
      </svg>
    `;
    badgeHost.appendChild(badge);
  }

  /* =====================================================
     17. NATIVE ANCHOR SCROLL
     ===================================================== */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* =====================================================
     18. NOISE OVERLAY
     ===================================================== */
  if (!document.querySelector('.noise-overlay')) {
    const noise = document.createElement('div');
    noise.className = 'noise-overlay';
    document.body.appendChild(noise);
  }

  /* =====================================================
     19. HERO VIDEO BACKGROUND
     ===================================================== */
  (function heroVideo() {
    const heroEl = document.querySelector('.hero');
    if (!heroEl) return;

    const HERO_VIDEO = 'assets/videos/1%20(1).mp4';
    const HERO_POSTER = 'assets/images/1%20(1).jpeg';

    const media = heroEl.querySelector('.hero__media');
    if (!media) return;

    if (prefersReduced) return;

    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn && (conn.saveData || /2g|slow-2g/.test(conn.effectiveType))) return;

    const video = document.createElement('video');
    video.src = HERO_VIDEO;
    video.poster = HERO_POSTER;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = 'auto';
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('disablepictureinpicture', '');

    media.insertBefore(video, media.firstChild);

    video.addEventListener('canplay', () => {
      video.classList.add('ready');
      const img = media.querySelector('img');
      if (img) {
        img.style.transition = 'opacity 1.6s var(--ease-out)';
        img.style.opacity = '0';
      }
    }, { once: true });

    const playPromise = video.play();
    if (playPromise && playPromise.catch) {
      playPromise.catch(() => {
        const resume = () => {
          video.play().catch(() => {});
          document.removeEventListener('touchstart', resume);
          document.removeEventListener('click', resume);
          document.removeEventListener('scroll', resume);
        };
        document.addEventListener('touchstart', resume, { once: true, passive: true });
        document.addEventListener('click', resume, { once: true });
        document.addEventListener('scroll', resume, { once: true, passive: true });
      });
    }

    const controls = document.createElement('div');
    controls.className = 'hero__video-controls';
    controls.innerHTML = `
      <button class="hero__video-btn" data-hover aria-label="Toggle sound">
        <svg viewBox="0 0 24 24" fill="none" class="icon-muted">
          <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
          <path d="M22 9l-6 6M16 9l6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <svg viewBox="0 0 24 24" fill="none" class="icon-unmuted" style="display:none;">
          <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
          <path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </button>
      <button class="hero__video-btn" data-hover aria-label="Pause">
        <svg viewBox="0 0 24 24" fill="none" class="icon-pause">
          <path d="M9 5v14M15 5v14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <svg viewBox="0 0 24 24" fill="currentColor" class="icon-play" style="display:none;">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </button>
    `;
    heroEl.appendChild(controls);

    const muteBtn = controls.querySelector('[aria-label="Toggle sound"]');
    const playBtn = controls.querySelector('[aria-label="Pause"]');
    const iconMuted = muteBtn.querySelector('.icon-muted');
    const iconUnmuted = muteBtn.querySelector('.icon-unmuted');
    const iconPause = playBtn.querySelector('.icon-pause');
    const iconPlay = playBtn.querySelector('.icon-play');

    muteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      iconMuted.style.display = video.muted ? 'block' : 'none';
      iconUnmuted.style.display = video.muted ? 'none' : 'block';
    });

    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (video.paused) {
        video.play();
        iconPause.style.display = 'block';
        iconPlay.style.display = 'none';
      } else {
        video.pause();
        iconPause.style.display = 'none';
        iconPlay.style.display = 'block';
      }
    });

    const prog = document.createElement('div');
    prog.className = 'hero__video-progress';
    prog.innerHTML = '<div class="hero__video-progress-fill"></div>';
    heroEl.appendChild(prog);
    const progFill = prog.querySelector('.hero__video-progress-fill');

    video.addEventListener('timeupdate', () => {
      if (!video.duration) return;
      progFill.style.width = ((video.currentTime / video.duration) * 100) + '%';
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) video.pause();
      else video.play().catch(() => {});
    });
  })();

  /* =====================================================
     20. PAGE TRANSITIONS (subtle fade)
     ===================================================== */
  (function pageTransitions() {
    if (prefersReduced) return;

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: #14110d;
      z-index: 10001;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s cubic-bezier(0.65, 0, 0.35, 1);
    `;
    document.body.appendChild(overlay);

    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      if (link.target === '_blank') return;
      if (link.hasAttribute('download')) return;

      const href = link.getAttribute('href');
      if (!href) return;
      if (href.startsWith('mailto:')) return;
      if (href.startsWith('tel:')) return;
      if (href.startsWith('#')) return;
      if (href.startsWith('http')) return;
      if (href.startsWith('//')) return;

      const currentPath = window.location.pathname;
      const targetPath = new URL(href, window.location.href).pathname;
      if (currentPath === targetPath) return;

      e.preventDefault();

      overlay.style.pointerEvents = 'all';
      overlay.style.opacity = '1';

      setTimeout(() => {
        window.location.href = href;
      }, 350);
    });

    window.addEventListener('pageshow', (e) => {
      if (e.persisted) {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
      }
    });
  })();

  /* =====================================================
     21. SCROLL PARALLAX ON IMAGES
     ===================================================== */
  (function scrollParallax() {
    if (!isDesktop()) return;
    if (prefersReduced) return;

    const targets = document.querySelectorAll(
      '.project__media, .feature__media, [data-parallax]'
    );
    if (!targets.length) return;

    targets.forEach((el) => {
      el.setAttribute('data-parallax', '');
      el.style.position = 'relative';
      el.style.overflow = 'hidden';
    });

    let ticking = false;

    function update() {
      const vh = window.innerHeight;

      targets.forEach((el) => {
        const img = el.querySelector('img');
        if (!img) return;

        const rect = el.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > vh + 100) return;

        const center = rect.top + rect.height / 2;
        const progress = (center - vh / 2) / vh;
        const range = 60;
        const offset = progress * range;

        img.style.transform = `translate3d(0, ${offset}px, 0) scale(1.05)`;
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }, { passive: true });

    window.addEventListener('resize', update);
    update();
  })();

  /* =====================================================
     22. HERO MOUSE PARALLAX
     ===================================================== */
  (function mouseParallax() {
    if (!isDesktop()) return;
    if (prefersReduced) return;

    const heroMedia = document.querySelector('.hero__media');
    if (!heroMedia) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
      targetX = ((e.clientX / window.innerWidth) - 0.5) * 20;
      targetY = ((e.clientY / window.innerHeight) - 0.5) * 20;
    });

    (function loop() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      heroMedia.style.transform =
        `translate3d(${currentX}px, ${currentY}px, 0) scale(1.05)`;
      requestAnimationFrame(loop);
    })();
  })();

  /* =====================================================
     23. TILT ON PROJECT CARDS
     ===================================================== */
  if (isDesktop()) {
    document.querySelectorAll('.project').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const media = card.querySelector('.project__media');
        if (media) {
          media.style.transform =
            `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
        }
      });
      card.addEventListener('mouseleave', () => {
        const media = card.querySelector('.project__media');
        if (media) media.style.transform = '';
      });
    });
  }

  /* =====================================================
     24. TESTIMONIALS SWIPER
     ===================================================== */
  (function initTestimonialsSwiper() {
    if (typeof Swiper === 'undefined') return;

    const swiperEl = document.querySelector('.slide-content');
    if (!swiperEl) return;

    const swiper = new Swiper('.slide-content', {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      centerSlide: true,
      grabCursor: true,
      speed: 800,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        950: { slidesPerView: 3, spaceBetween: 25 },
        1200: { slidesPerView: 3, spaceBetween: 30 },
      },
    });

    window.addEventListener('languagechange', () => {
      setTimeout(() => swiper.update(), 200);
    });
  })();

});