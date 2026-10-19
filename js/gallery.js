/* ============================================
   GALLERY — Images + Videos + Lightbox
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ====== CONFIG ====== */
  // الصور من 1 (1).jpeg إلى 1 (41).jpeg
  const IMAGE_COUNT = 41;
  // الفيديوهات من 1 (1).mp4 إلى 1 (20).mp4
  const VIDEO_COUNT = 20;

  // وصف الصور (تقدر تعدلها زي ما تحب)
  const imageData = [
    { title: 'GITEX Tech Summit', cat: 'Tech · Dubai', tag: 'tech' },
    { title: 'Vertex Systems Booth', cat: 'Tech · Dubai', tag: 'tech' },
    { title: 'Nova Motors Stage', cat: 'Automotive · Riyadh', tag: 'auto' },
    { title: 'Aurora Foods Corner', cat: 'FMCG · Doha', tag: 'fmcg' },
    { title: 'MediCore Labs', cat: 'Healthcare · Abu Dhabi', tag: 'health' },
    { title: 'Lumia Jewelry', cat: 'Luxury · Doha', tag: 'luxury' },
    { title: 'Quanta Cloud', cat: 'Tech · Dubai', tag: 'tech' },
    { title: 'Velocity Auto Hall', cat: 'Automotive · Riyadh', tag: 'auto' },
    { title: 'BioLab Entrance', cat: 'Healthcare · Cairo', tag: 'health' },
    { title: 'Elysian Beauty', cat: 'Luxury · Dubai', tag: 'luxury' },
    { title: 'Brew Haven', cat: 'FMCG · Doha', tag: 'fmcg' },
    { title: 'Nexus AI Booth', cat: 'Tech · Abu Dhabi', tag: 'tech' },
    { title: 'Rive Watches', cat: 'Luxury · Riyadh', tag: 'luxury' },
    { title: 'Vitality Health', cat: 'Healthcare · Dubai', tag: 'health' },
    { title: 'Eclipse Motors', cat: 'Automotive · Cairo', tag: 'auto' },
    { title: 'Fresh Field', cat: 'FMCG · Dubai', tag: 'fmcg' },
    { title: 'Cloud Nine', cat: 'Tech · Abu Dhabi', tag: 'tech' },
    { title: 'Stellar Electronics', cat: 'Tech · Riyadh', tag: 'tech' },
    { title: 'Pinnacle Motors', cat: 'Automotive · Dubai', tag: 'auto' },
    { title: 'MediPlus', cat: 'Healthcare · Doha', tag: 'health' },
    { title: 'Aurum Luxury', cat: 'Luxury · Abu Dhabi', tag: 'luxury' },
    { title: 'Zest Beverages', cat: 'FMCG · Cairo', tag: 'fmcg' },
    { title: 'Bitwise Tech', cat: 'Tech · Dubai', tag: 'tech' },
    { title: 'Ride Auto', cat: 'Automotive · Riyadh', tag: 'auto' },
    { title: 'Pure Health', cat: 'Healthcare · Dubai', tag: 'health' },
    { title: 'Velvet Cosmetics', cat: 'Luxury · Doha', tag: 'luxury' },
    { title: 'Harvest Foods', cat: 'FMCG · Riyadh', tag: 'fmcg' },
    { title: 'Prism Systems', cat: 'Tech · Cairo', tag: 'tech' },
    { title: 'Drive Motors', cat: 'Automotive · Abu Dhabi', tag: 'auto' },
    { title: 'Care Clinic Booth', cat: 'Healthcare · Doha', tag: 'health' },
    { title: 'Opal Jewelry', cat: 'Luxury · Dubai', tag: 'luxury' },
    { title: 'Daily Fresh', cat: 'FMCG · Cairo', tag: 'fmcg' },
    { title: 'Circuit Tech', cat: 'Tech · Riyadh', tag: 'tech' },
    { title: 'Torque Auto', cat: 'Automotive · Dubai', tag: 'auto' },
    { title: 'MediTrust', cat: 'Healthcare · Abu Dhabi', tag: 'health' },
    { title: 'Amber Beauty', cat: 'Luxury · Doha', tag: 'luxury' },
    { title: 'Golden Grain', cat: 'FMCG · Riyadh', tag: 'fmcg' },
    { title: 'Quantum Computing', cat: 'Tech · Dubai', tag: 'tech' },
    { title: 'Prime Motors', cat: 'Automotive · Cairo', tag: 'auto' },
    { title: 'Nova Health', cat: 'Healthcare · Dubai', tag: 'health' },
    { title: 'Crystal Luxe', cat: 'Luxury · Abu Dhabi', tag: 'luxury' },
  ];

  const videoData = [
    { title: 'GITEX 2025 — Behind the Build', cat: 'Tech · Dubai', tag: 'tech', size: 'wide' },
    { title: 'Nova Motors Reveal', cat: 'Automotive · Riyadh', tag: 'auto', size: 'default' },
    { title: 'Aurora Foods — Tasting Zone', cat: 'FMCG · Doha', tag: 'fmcg', size: 'default' },
    { title: 'Lumia Jewelry Walkthrough', cat: 'Luxury · Doha', tag: 'luxury', size: 'tall' },
    { title: 'MediCore Lab Experience', cat: 'Healthcare · Abu Dhabi', tag: 'health', size: 'default' },
    { title: 'Vertex Systems — Full Build', cat: 'Tech · Dubai', tag: 'tech', size: 'wide' },
    { title: 'Eclipse Motors Reveal', cat: 'Automotive · Cairo', tag: 'auto', size: 'default' },
    { title: 'Quanta Cloud Stage', cat: 'Tech · Abu Dhabi', tag: 'tech', size: 'default' },
    { title: 'BioLab — Full Experience', cat: 'Healthcare · Cairo', tag: 'health', size: 'full' },
    { title: 'Elysian Beauty Bar', cat: 'Luxury · Dubai', tag: 'luxury', size: 'default' },
    { title: 'Brew Haven Tasting', cat: 'FMCG · Doha', tag: 'fmcg', size: 'default' },
    { title: 'Nexus AI Demo', cat: 'Tech · Dubai', tag: 'tech', size: 'default' },
  ];

  /* ====== BUILD IMAGE GRID ====== */
  const imageGrid = document.getElementById('imageGrid');
  if (imageGrid) {
    imageData.forEach((item, i) => {
      const num = i + 1;
      const el = document.createElement('div');
      el.className = 'gallery-item';
      el.dataset.category = item.tag;
      el.dataset.index = i;

      // Big/Wide/Tall variations
      if (i % 7 === 0) el.classList.add('gallery-item--big');
      else if (i % 5 === 0) el.classList.add('gallery-item--wide');
      else if (i % 4 === 0) el.classList.add('gallery-item--tall');

      el.innerHTML = `
        <img src="assets/images/1 (${num}).jpeg" alt="${item.title}" loading="lazy">
        <div class="gallery-item__info">
          <span class="gallery-item__cat">${item.cat}</span>
          <h4 class="gallery-item__title">${item.title}</h4>
        </div>
      `;
      imageGrid.appendChild(el);
    });
  }

  /* ====== BUILD VIDEO GRID ====== */
  const videoGrid = document.getElementById('videoGrid');
  if (videoGrid) {
    videoData.forEach((item, i) => {
      const num = i + 1;
      const el = document.createElement('div');
      el.className = 'video-card video-card--video';
      if (item.size === 'wide') el.classList.add('video-card--wide');
      if (item.size === 'tall') el.classList.add('video-card--tall');
      if (item.size === 'full') el.classList.add('video-card--full');

      el.innerHTML = `
        <video src="assets/videos/1 (${num}).mp4" muted loop playsinline preload="metadata"></video>
        <div class="video-card__overlay"></div>
        <button class="video-card__mute" aria-label="Toggle sound">
          <svg viewBox="0 0 24 24" fill="none" class="mute-icon"><path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M22 9l-6 6M16 9l6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </button>
        <div class="video-card__info">
          <div>
            <span class="video-card__cat">${item.cat}</span>
            <h4 class="video-card__title">${item.title}</h4>
          </div>
          <div class="video-card__play">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      `;
      videoGrid.appendChild(el);

      // Play on hover (desktop)
      const video = el.querySelector('video');
      const playBtn = el.querySelector('.video-card__play');
      const muteBtn = el.querySelector('.video-card__mute');

      el.addEventListener('mouseenter', () => {
        if (window.innerWidth > 900) {
          video.play().catch(() => {});
        }
      });
      el.addEventListener('mouseleave', () => {
        if (window.innerWidth > 900) {
          video.pause();
          video.currentTime = 0;
        }
      });

      // Play/pause toggle on click for mobile
      playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (video.paused) {
          video.play().catch(() => {});
          playBtn.classList.remove('video-card__play--paused');
        } else {
          video.pause();
          playBtn.classList.add('video-card__play--paused');
        }
      });

      // Mute toggle
      muteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        video.muted = !video.muted;
        muteBtn.innerHTML = video.muted
          ? `<svg viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M22 9l-6 6M16 9l6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
          : `<svg viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
      });
    });
  }

  /* ====== FILTERING ====== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const allItems = document.querySelectorAll('.gallery-item, .video-card');
      allItems.forEach(item => {
        const cat = item.dataset.category;
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  /* ====== LIGHTBOX ====== */
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lbImg = lightbox.querySelector('.lightbox__img');
  const lbVideo = lightbox.querySelector('.lightbox__video');
  const lbCat = lightbox.querySelector('.lightbox__cat');
  const lbTitle = lightbox.querySelector('.lightbox__title');
  const lbCounter = lightbox.querySelector('.lightbox__current');
  const lbTotal = lightbox.querySelector('.lightbox__total');
  const closeBtn = lightbox.querySelector('.lightbox__close');
  const prevBtn = lightbox.querySelector('.lightbox__prev');
  const nextBtn = lightbox.querySelector('.lightbox__next');

  let currentList = [];
  let currentIndex = 0;

  function getVisibleImages() {
    return [...document.querySelectorAll('.gallery-item:not(.hidden)')];
  }

  function openImageLightbox(item) {
    const allItems = getVisibleImages();
    currentList = allItems;
    currentIndex = allItems.indexOf(item);
    lbVideo.style.display = 'none';
    lbVideo.pause();
    lbImg.style.display = 'block';
    showCurrentImage();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function showCurrentImage() {
    const item = currentList[currentIndex];
    if (!item) return;
    const img = item.querySelector('img');
    const cat = item.querySelector('.gallery-item__cat')?.textContent || '';
    const title = item.querySelector('.gallery-item__title')?.textContent || '';
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCat.textContent = cat;
    lbTitle.textContent = title;
    lbCounter.textContent = currentIndex + 1;
    lbTotal.textContent = currentList.length;
  }

  function showCurrentVideo() {
    const item = currentList[currentIndex];
    if (!item) return;
    const video = item.querySelector('video');
    const cat = item.querySelector('.video-card__cat')?.textContent || '';
    const title = item.querySelector('.video-card__title')?.textContent || '';
    lbImg.style.display = 'none';
    lbVideo.style.display = 'block';
    lbVideo.src = video.src;
    lbVideo.muted = false;
    lbVideo.controls = true;
    lbVideo.play().catch(() => {});
    lbCat.textContent = cat;
    lbTitle.textContent = title;
    lbCounter.textContent = currentIndex + 1;
    lbTotal.textContent = currentList.length;
  }

  function openVideoLightbox(item) {
    const allItems = [...document.querySelectorAll('.video-card:not(.hidden)')];
    currentList = allItems;
    currentIndex = allItems.indexOf(item);
    showCurrentVideo();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lbVideo.pause();
    lbVideo.src = '';
  }

  function next() {
    if (currentIndex < currentList.length - 1) {
      currentIndex++;
      if (currentList[currentIndex].classList.contains('video-card')) showCurrentVideo();
      else showCurrentImage();
    }
  }

  function prev() {
    if (currentIndex > 0) {
      currentIndex--;
      if (currentList[currentIndex].classList.contains('video-card')) showCurrentVideo();
      else showCurrentImage();
    }
  }

  // Attach click handlers
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openImageLightbox(item));
  });
  document.querySelectorAll('.video-card').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.video-card__mute') || e.target.closest('.video-card__play')) return;
      openVideoLightbox(item);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  /* ====== Intersection Observer for autoplay videos in view ====== */
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target.querySelector('video');
      if (!video) return;
      if (entry.isIntersecting && window.innerWidth <= 900) {
        video.play().catch(() => {});
      } else if (!entry.isIntersecting) {
        video.pause();
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.video-card').forEach(card => videoObserver.observe(card));

});