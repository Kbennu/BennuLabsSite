(function() {
  var toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) {
    return;
  }

  var label = toggle.querySelector('[data-theme-toggle-label]');
  var root = document.documentElement;
  var storageKey = 'bennu-theme';
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  var lightLabel = toggle.getAttribute('data-light-label') || 'День';
  var darkLabel = toggle.getAttribute('data-dark-label') || 'Ночь';
  var lightAria = toggle.getAttribute('data-light-aria') || 'Переключить на дневную тему';
  var darkAria = toggle.getAttribute('data-dark-aria') || 'Переключить на ночную тему';

  function syncToggle(theme) {
    toggle.setAttribute('data-theme', theme);
    toggle.setAttribute('aria-label', theme === 'dark' ? lightAria : darkAria);
    if (label) {
      label.textContent = theme === 'dark' ? darkLabel : lightLabel;
    }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    syncToggle(theme);
  }

  var saved = localStorage.getItem(storageKey);
  var initialTheme = saved || (prefersDark.matches ? 'dark' : 'light');
  applyTheme(initialTheme);

  toggle.addEventListener('click', function() {
    var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(storageKey, next);
  });

  if (typeof prefersDark.addEventListener === 'function') {
    prefersDark.addEventListener('change', function(event) {
      if (!localStorage.getItem(storageKey)) {
        applyTheme(event.matches ? 'dark' : 'light');
      }
    });
  } else if (typeof prefersDark.addListener === 'function') {
    prefersDark.addListener(function(event) {
      if (!localStorage.getItem(storageKey)) {
        applyTheme(event.matches ? 'dark' : 'light');
      }
    });
  }
})();
