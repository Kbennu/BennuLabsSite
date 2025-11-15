const INTAKE_BOT_LINK = 'https://t.me/BennuLabsBot?start=pricing';

const SITE_PACKAGES_ORDER = [
  { key: 'landing', title: 'Mini', subtitle: 'Лендинг под запуск бота' },
  { key: 'product', title: 'Core', subtitle: 'Продуктовый сайт с AI-сценариями' },
  { key: 'enterprise', title: 'Pro', subtitle: 'Enterprise-витрина с интеграциями' }
];

const DESIGN_PACKAGES_ORDER = [
  { key: 'sprint', title: 'Базовый сет', subtitle: 'Дизайн спринт и прототип' },
  { key: 'systems', title: 'Дизайн лендинга', subtitle: 'UI-kit и дизайн-система' },
  { key: 'brand', title: 'Мини-брендбук', subtitle: 'Айдентика и голос бренда' }
];

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
    renderSitePackages(data);
    renderDesignPackages(data);
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

function renderSitePackages(data) {
  renderExtendedPackages({
    dataset: data.sites_ru,
    order: SITE_PACKAGES_ORDER,
    targetSelector: '[data-sites-grid]'
  });
}

function renderDesignPackages(data) {
  renderExtendedPackages({
    dataset: data.design_ru,
    order: DESIGN_PACKAGES_ORDER,
    targetSelector: '[data-design-grid]'
  });
}

function renderExtendedPackages({ dataset, order, targetSelector }) {
  const container = document.querySelector(targetSelector);
  if (!container || !dataset) return;
  container.innerHTML = '';

  order.forEach(({ key, title, subtitle }) => {
    const item = dataset[key];
    if (!item) return;
    container.appendChild(createExtendedCard({ title, subtitle, item }));
  });
}

function createExtendedCard({ title, subtitle, item }) {
  const card = document.createElement('article');
  card.className = 'price-card';
  card.innerHTML = `
    <div class="badge">${subtitle}</div>
    <h3>${title}</h3>
    <div class="price-meta">
      <span class="price-value">${item.rub.toLocaleString('ru-RU')} ₽</span>
      <div class="price-hours">${item.hours} ч · ${item.time}</div>
    </div>
    <ul class="price-features">
      ${item.features.map((feature) => `<li>${feature}</li>`).join('')}
    </ul>
    <p class="tech-stack"><span>Техстек:</span> ${item.stack.join(', ')}</p>
    <a class="deeplink-cta" href="${INTAKE_BOT_LINK}">Обсудить пакет</a>
  `;
  return card;
}

document.addEventListener('DOMContentLoaded', () => {
  const currentScript = document.currentScript;
  let pricebookPath = '../assets/data/pricebook.ru.json';
  if (currentScript && currentScript.dataset.pricebook) {
    pricebookPath = currentScript.dataset.pricebook;
  }
  loadPricebook({ pricebookPath });
});
