(function() {
  var toggles = document.querySelectorAll('.nav-toggle');
  if (!toggles.length) {
    return;
  }

  var mobileQuery = window.matchMedia('(max-width: 900px)');

  function attachMediaListener(listener) {
    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', listener);
    } else if (typeof mobileQuery.addListener === 'function') {
      mobileQuery.addListener(listener);
    }
  }

  for (var i = 0; i < toggles.length; i++) {
    (function(toggle) {
      var targetId = toggle.getAttribute('aria-controls');
      if (!targetId) {
        return;
      }

      var nav = document.getElementById(targetId);
      if (!nav) {
        return;
      }

      nav.classList.add('is-collapsible');

      function syncAria() {
        if (!mobileQuery.matches) {
          nav.classList.remove('is-open');
          nav.removeAttribute('aria-hidden');
          toggle.setAttribute('aria-expanded', 'false');
        } else {
          nav.setAttribute('aria-hidden', nav.classList.contains('is-open') ? 'false' : 'true');
        }
      }

      function closeMenu(restoreFocus) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        if (mobileQuery.matches) {
          nav.setAttribute('aria-hidden', 'true');
        }
        if (restoreFocus) {
          toggle.focus();
        }
      }

      function openMenu(shouldMoveFocus) {
        nav.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        if (mobileQuery.matches) {
          nav.setAttribute('aria-hidden', 'false');
        }
        if (shouldMoveFocus) {
          var firstFocusable = nav.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
          if (firstFocusable) {
            firstFocusable.focus();
          }
        }
      }

      toggle.addEventListener('click', function() {
        var isOpen = nav.classList.contains('is-open');
        var shouldMoveFocus = document.activeElement === toggle;
        if (isOpen) {
          closeMenu();
        } else {
          openMenu(shouldMoveFocus);
        }
      });

      document.addEventListener('keyup', function(event) {
        if (event.key === 'Escape' && nav.classList.contains('is-open')) {
          closeMenu(true);
        }
      });

      attachMediaListener(syncAria);
      syncAria();
    })(toggles[i]);
  }
})();
