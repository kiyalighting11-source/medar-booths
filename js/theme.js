/* ============================================
   MEDAR BOOTHS — Theme (Dark / Light)
   ============================================ */

(function () {
  const STORAGE_KEY = 'medar-theme';

  /* ---------- Get initial theme ---------- */
  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  /* ---------- Apply theme to document ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateIcons(theme);
  }

  /* ---------- Update all icons ---------- */
  function updateIcons(theme) {
    // Sun icon for dark mode (click to go light)
    // Moon icon for light mode (click to go dark)
    const iconHTML = theme === 'dark'
      ? `<svg viewBox="0 0 24 24" fill="none" width="18" height="18">
           <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/>
           <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                 stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
         </svg>`
      : `<svg viewBox="0 0 24 24" fill="none" width="18" height="18">
           <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                 stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
         </svg>`;

    document.querySelectorAll('[data-theme-icon]').forEach((el) => {
      el.innerHTML = iconHTML;
    });
  }

  /* ---------- Public toggle ---------- */
  window.toggleTheme = function () {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  };

  /* ---------- Apply immediately (before DOM ready) ---------- */
  const initialTheme = getInitialTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  /* ---------- Bind buttons on DOM ready ---------- */
  function init() {
    updateIcons(initialTheme);

    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      // Prevent double binding
      if (btn.dataset.themeBound === '1') return;
      btn.dataset.themeBound = '1';

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.toggleTheme();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();