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
  if (!container) return;

  const sections = Array.isArray(data.sections) && data.sections.length
    ? data.sections
    : [{ cards: data.packages || [] }];

  if (!sections.length) return;

  container.innerHTML = '';

  sections.forEach((section) => {
    if (!Array.isArray(section.cards) || !section.cards.length) return;

    const group = document.createElement('div');
    group.className = 'pricing-group';

    if (section.title || section.subtitle) {
      const header = document.createElement('div');
      header.className = 'pricing-group-header';
      if (section.title) {
        const heading = document.createElement('h3');
        heading.textContent = section.title;
        header.appendChild(heading);
      }
      if (section.subtitle) {
        const note = document.createElement('p');
        note.textContent = section.subtitle;
        header.appendChild(note);
      }
      group.appendChild(header);
    }

    const grid = document.createElement('div');
    grid.className = 'pricing-grid';

    section.cards.forEach((pkg, index) => {
      const isHighlighted = section.highlight
        ? section.highlight === pkg.id
        : index === 1;
      grid.appendChild(cardTemplate(pkg, isHighlighted));
    });

    group.appendChild(grid);
    container.appendChild(group);
  });
}

function createCard(pkg, popular = false) {
  const card = document.createElement('article');
  card.className = `price-card${popular ? ' popular' : ''}`;

  if (popular) {
    const lang = (document.documentElement && document.documentElement.lang) || 'ru';
    const defaultLabel = lang.toLowerCase().startsWith('en') ? 'Top pick' : 'Топ выбор';
    const label = pkg.popularLabel || defaultLabel;
    card.dataset.popularLabel = label;
  }

  const priceValue = typeof pkg.price === 'number'
    ? `${pkg.price.toLocaleString('ru-RU')} ₽`
    : pkg.price;

  const bullets = Array.isArray(pkg.bullets) ? pkg.bullets : [];

  card.innerHTML = `
    ${pkg.tagline ? `<div class="badge">${pkg.tagline}</div>` : ''}
    <h3>${pkg.title || ''}</h3>
    <div>
      <span class="price-value">${priceValue}</span>
      ${pkg.period ? `<span class="price-period">${pkg.period}</span>` : ''}
    </div>
    ${pkg.description ? `<p>${pkg.description}</p>` : ''}
    ${bullets.length ? `<ul>${bullets.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
    <a class="deeplink-cta" href="${pkg.deeplink || '#'}" data-package-link="${pkg.id}">${pkg.cta || 'Связаться'}</a>
  `;
  return card;
}

function hydrateDeeplinks(data, selector) {
  const packages = getAllPackages(data);
  document.querySelectorAll(selector).forEach((link) => {
    const pkgId = link.getAttribute('data-package-link');
    if (!pkgId) return;
    const pkg = packages.find((item) => item.id === pkgId);
    if (!pkg) return;
    link.textContent = pkg.cta;
    link.href = pkg.deeplink;
  });
}

function getAllPackages(data) {
  if (Array.isArray(data.sections) && data.sections.length) {
    return data.sections.flatMap((section) => section.cards || []);
  }
  if (Array.isArray(data.packages)) {
    return data.packages;
  }
  return [];
}

document.addEventListener('DOMContentLoaded', () => {
  const currentScript = document.currentScript;
  let pricebookPath = '../assets/data/pricebook.ru.json';
  if (currentScript && currentScript.dataset.pricebook) {
    pricebookPath = currentScript.dataset.pricebook;
  }
  loadPricebook({ pricebookPath });
});
