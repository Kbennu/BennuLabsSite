(() => {
  const STORAGE_KEY = 'bennu-cookie-consent';
  let memoryDecision = null;
  let storageErrorLogged = false;

  const logStorageWarning = (error) => {
    if (storageErrorLogged) return;
    console.warn('Cookie consent: localStorage is not available. Using in-memory fallback.', error);
    storageErrorLogged = true;
  };

  const getSavedDecision = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      logStorageWarning(error);
      return memoryDecision;
    }
  };

  const saveDecision = (decision) => {
    try {
      localStorage.setItem(STORAGE_KEY, decision);
      memoryDecision = decision;
    } catch (error) {
      logStorageWarning(error);
      memoryDecision = decision;
    }
  };

  const initBanner = () => {
    const banner = document.querySelector('[data-cookie-banner]');
    if (!banner) return;

    const savedDecision = getSavedDecision();
    if (savedDecision === 'accepted' || savedDecision === 'declined') {
      banner.setAttribute('hidden', '');
      return;
    }

    const acceptButton = banner.querySelector('[data-cookie-accept]');
    const declineButton = banner.querySelector('[data-cookie-decline]');

    const handleDecision = (decision) => {
      saveDecision(decision);
      banner.setAttribute('hidden', '');
    };

    acceptButton?.addEventListener('click', () => handleDecision('accepted'));
    declineButton?.addEventListener('click', () => handleDecision('declined'));

    banner.removeAttribute('hidden');
  };

  document.addEventListener('DOMContentLoaded', initBanner);
})();
