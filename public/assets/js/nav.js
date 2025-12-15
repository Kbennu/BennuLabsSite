(function() {
  const toggles = document.querySelectorAll('.nav-toggle');
  if (!toggles.length) {
    return;
  }

  const mobileQuery = window.matchMedia('(max-width: 900px)');

  const attachMediaListener = (listener) => {
    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', listener);
    } else if (typeof mobileQuery.addListener === 'function') {
      mobileQuery.addListener(listener);
    }
  };

  toggles.forEach((toggle) => {
    const targetId = toggle.getAttribute('aria-controls');
    if (!targetId) {
      return;
    }

    const nav = document.getElementById(targetId);
    if (!nav) {
      return;
    }

    nav.classList.add('is-collapsible');

    const syncAria = () => {
      if (!mobileQuery.matches) {
        nav.classList.remove('is-open');
        nav.removeAttribute('aria-hidden');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        nav.setAttribute('aria-hidden', nav.classList.contains('is-open') ? 'false' : 'true');
      }
    };

    const closeMenu = (restoreFocus = false) => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (mobileQuery.matches) {
        nav.setAttribute('aria-hidden', 'true');
      }
      if (restoreFocus) {
        toggle.focus();
      }
    };

    const openMenu = (shouldMoveFocus) => {
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      if (mobileQuery.matches) {
        nav.setAttribute('aria-hidden', 'false');
      }
      if (shouldMoveFocus) {
        const firstFocusable = nav.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }
    };

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.contains('is-open');
      const shouldMoveFocus = document.activeElement === toggle;
      if (isOpen) {
        closeMenu();
      } else {
        openMenu(shouldMoveFocus);
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu(true);
      }
    });

    attachMediaListener(syncAria);
    syncAria();
  });
})();
