(() => {
  const STORAGE_KEY = 'bennu-cookie-consent';

  const initBanner = () => {
    const banner = document.querySelector('[data-cookie-banner]');
    if (!banner) return;

    const savedDecision = localStorage.getItem(STORAGE_KEY);
    if (savedDecision === 'accepted' || savedDecision === 'declined') {
      banner.setAttribute('hidden', '');
      return;
    }

    const acceptButton = banner.querySelector('[data-cookie-accept]');
    const declineButton = banner.querySelector('[data-cookie-decline]');

    const handleDecision = (decision) => {
      localStorage.setItem(STORAGE_KEY, decision);
      banner.setAttribute('hidden', '');
    };

    acceptButton?.addEventListener('click', () => handleDecision('accepted'));
    declineButton?.addEventListener('click', () => handleDecision('declined'));

    banner.removeAttribute('hidden');
  };

  document.addEventListener('DOMContentLoaded', initBanner);
})();
