(function () {
  var STORAGE_KEY = 'bennu-cookie-consent';
  var memoryDecision = null;
  var storageErrorLogged = false;

  function logStorageWarning(error) {
    if (storageErrorLogged) return;
    console.warn('Cookie consent: localStorage is not available. Using in-memory fallback.', error);
    storageErrorLogged = true;
  }

  function getSavedDecision() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      logStorageWarning(error);
      return memoryDecision;
    }
  }

  function saveDecision(decision) {
    try {
      localStorage.setItem(STORAGE_KEY, decision);
      memoryDecision = decision;
    } catch (error) {
      logStorageWarning(error);
      memoryDecision = decision;
    }
  }

  function initBanner() {
    var banner = document.querySelector('[data-cookie-banner]');
    if (!banner) return;

    var savedDecision = getSavedDecision();
    if (savedDecision === 'accepted' || savedDecision === 'declined') {
      banner.setAttribute('hidden', '');
      return;
    }

    var acceptButton = banner.querySelector('[data-cookie-accept]');
    var declineButton = banner.querySelector('[data-cookie-decline]');

    function handleDecision(decision) {
      saveDecision(decision);
      banner.setAttribute('hidden', '');
    }

    if (acceptButton) {
      acceptButton.addEventListener('click', function () {
        handleDecision('accepted');
      });
    }

    if (declineButton) {
      declineButton.addEventListener('click', function () {
        handleDecision('declined');
      });
    }

    banner.removeAttribute('hidden');
  }

  document.addEventListener('DOMContentLoaded', initBanner);
})();
