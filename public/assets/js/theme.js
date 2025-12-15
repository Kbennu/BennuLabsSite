(function() {
  const toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) {
    return;
  }

  const label = toggle.querySelector('[data-theme-toggle-label]');
  const root = document.documentElement;
  const storageKey = 'bennu-theme';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const lightLabel = toggle.getAttribute('data-light-label') || 'День';
  const darkLabel = toggle.getAttribute('data-dark-label') || 'Ночь';
  const lightAria = toggle.getAttribute('data-light-aria') || 'Переключить на дневную тему';
  const darkAria = toggle.getAttribute('data-dark-aria') || 'Переключить на ночную тему';

  const syncToggle = (theme) => {
    toggle.setAttribute('data-theme', theme);
    toggle.setAttribute('aria-label', theme === 'dark' ? lightAria : darkAria);
    if (label) {
      label.textContent = theme === 'dark' ? darkLabel : lightLabel;
    }
  };

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    syncToggle(theme);
  };

  const saved = localStorage.getItem(storageKey);
  const initialTheme = saved || (prefersDark.matches ? 'dark' : 'light');
  applyTheme(initialTheme);

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(storageKey, next);
  });

  if (typeof prefersDark.addEventListener === 'function') {
    prefersDark.addEventListener('change', (event) => {
      if (!localStorage.getItem(storageKey)) {
        applyTheme(event.matches ? 'dark' : 'light');
      }
    });
  }
})();
