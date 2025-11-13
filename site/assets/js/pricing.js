async function loadPricebook(options = {}) {
  const {
    targetSelector = '[data-pricing-grid]',
    cardTemplate = createCard,
    deeplinkSelector = '[data-package-link]',
    pricebookPath = '../assets/data/pricebook.ru.json'
  } = options;

  try {
    const response = await fetch(pricebookPath);
    if (!response.ok) {
      throw new Error(`Не удалось загрузить прайсбук: ${response.status}`);
    }
    const data = await response.json();
    renderPricing(data, targetSelector, cardTemplate);
    hydrateDeeplinks(data, deeplinkSelector);
  } catch (error) {
    console.error(error);
  }
}

function renderPricing(data, targetSelector, cardTemplate) {
  const container = document.querySelector(targetSelector);
  if (!container || !data.packages) return;
  container.innerHTML = '';
  data.packages.forEach((pkg, index) => {
    const card = cardTemplate(pkg, index === 1);
    container.appendChild(card);
  });
}

function createCard(pkg, popular = false) {
  const card = document.createElement('article');
  card.className = `price-card${popular ? ' popular' : ''}`;
  card.innerHTML = `
    <div class="badge">${pkg.tagline}</div>
    <h3>${pkg.title}</h3>
    <div>
      <span class="price-value">${pkg.price.toLocaleString('ru-RU')} ₽</span>
      <span class="price-period">${pkg.period}</span>
    </div>
    <ul>
      ${pkg.bullets.map((item) => `<li>${item}</li>`).join('')}
    </ul>
    <a class="deeplink-cta" href="${pkg.deeplink}" data-package-link="${pkg.id}">${pkg.cta}</a>
  `;
  return card;
}

function hydrateDeeplinks(data, selector) {
  document.querySelectorAll(selector).forEach((link) => {
    const pkgId = link.getAttribute('data-package-link');
    if (!pkgId) return;
    const pkg = data.packages.find((item) => item.id === pkgId);
    if (!pkg) return;
    link.textContent = pkg.cta;
    link.href = pkg.deeplink;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const currentScript = document.currentScript;
  let pricebookPath = '../assets/data/pricebook.ru.json';
  if (currentScript && currentScript.dataset.pricebook) {
    pricebookPath = currentScript.dataset.pricebook;
  }
  loadPricebook({ pricebookPath });
});
