async function loadPricebook(options = {}) {
  const {
    targetSelector = '[data-pricing-grid]',
    cardTemplate = createCard,
    pricebookPath = '../assets/data/pricebook.ru.json'
  } = options;

  const container = document.querySelector(targetSelector);
  const fallbackHTML = container ? container.innerHTML : '';
  const lang = getDocumentLang();

  try {
    const response = await fetch(pricebookPath, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Не удалось загрузить прайсбук: ${response.status}`);
    }
    const data = await response.json();
    renderPricing(data, container, cardTemplate);
    syncPackageLinks(data);
  } catch (error) {
    console.error(error);
    if (container) {
      if (fallbackHTML && !container.innerHTML.trim()) {
        container.innerHTML = fallbackHTML;
      } else if (!container.innerHTML.trim()) {
        container.innerHTML = `<p class="pricing-error">${getErrorMessage(lang)}</p>`;
      }
    }
  }
}

function renderPricing(data, container, cardTemplate) {
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

  const priceValue = formatPriceValue(pkg.price);

  const priceMeta = `
    <div class="price-meta">
      <span class="price-value">${priceValue}</span>
      ${pkg.period ? `<span class="price-period">${pkg.period}</span>` : ''}
    </div>
  `;

  const bullets = Array.isArray(pkg.bullets) ? pkg.bullets : [];
  const labels = getDetailLabels();
  const detailBlocks = [
    pkg.rd ? `<span><strong>${labels.rd}:</strong> ${pkg.rd}</span>` : '',
    pkg.timeline ? `<span><strong>${labels.timeline}:</strong> ${pkg.timeline}</span>` : '',
    pkg.dod ? `<span><strong>${labels.dod}:</strong> ${pkg.dod}</span>` : '',
    pkg.conditions ? `<span><strong>${labels.conditions}:</strong> ${pkg.conditions}</span>` : ''
  ].filter(Boolean).join('');

  card.innerHTML = `
    ${pkg.tagline ? `<div class="badge">${pkg.tagline}</div>` : ''}
    <h3>${pkg.title || ''}</h3>
    ${priceMeta}
    ${pkg.description ? `<p>${pkg.description}</p>` : ''}
    ${bullets.length ? `<ul>${bullets.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
    ${detailBlocks ? `<div class="price-card-details">${detailBlocks}</div>` : ''}
    <a class="deeplink-cta" href="${pkg.deeplink || '#'}">${pkg.cta || 'Связаться'}</a>
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

function getDocumentLang() {
  const lang = (document.documentElement && document.documentElement.lang) || 'ru';
  return lang.toLowerCase();
}

function getDetailLabels() {
  const lang = getDocumentLang();
  if (lang.startsWith('en')) {
    return { rd: 'wd', timeline: 'Timeline', dod: 'DoD', conditions: 'Terms' };
  }
  return { rd: 'р.д.', timeline: 'Срок', dod: 'DoD', conditions: 'Условия' };
}

function getErrorMessage(lang) {
  if (lang.startsWith('en')) {
    return 'We could not load the latest pricing. Please try again or ping us in Telegram.';
  }
  return 'Не удалось загрузить прайс. Попробуйте обновить страницу или написать нам в Telegram.';
}

function formatPriceValue(price) {
  if (typeof price === 'number') {
    return `${price.toLocaleString('ru-RU')} ₽`;
  }
  return price || '';
}

function syncPackageLinks(data) {
  if (!data) return;
  const elements = document.querySelectorAll('[data-package-link]');
  if (!elements.length) return;

  const pkgMap = buildPackageMap(data);
  if (!pkgMap.size) return;

  elements.forEach((el) => {
    const pkgId = el.dataset.packageLink;
    if (!pkgId || !pkgMap.has(pkgId)) return;
    const pkg = pkgMap.get(pkgId);
    const priceText = formatPriceValue(pkg.price);
    const timeline = pkg.rd || pkg.timeline || pkg.period || '';
    const template = el.dataset.packageTemplate;

    let label = '';
    if (template) {
      label = template
        .replace('{title}', pkg.title || '')
        .replace('{price}', priceText || '')
        .replace('{rd}', timeline || '');
    } else {
      if (pkg.shortLabel) {
        label = timeline ? `${pkg.shortLabel} / ${timeline}` : pkg.shortLabel;
      } else {
        const pieces = [];
        if (pkg.title) pieces.push(pkg.title);
        if (priceText) pieces.push(priceText);
        if (timeline) pieces.push(timeline);
        label = pieces.join(' · ');
      }
    }

    if (label && label.trim()) {
      el.textContent = label.trim();
    }

    const currentHref = el.getAttribute('href');
    if ((!currentHref || currentHref === '#') && pkg.deeplink) {
      el.setAttribute('href', pkg.deeplink);
    }
  });
}

function buildPackageMap(data) {
  const map = new Map();
  const sections = Array.isArray(data.sections) ? data.sections : [];
  sections.forEach((section) => {
    const cards = Array.isArray(section.cards) ? section.cards : [];
    cards.forEach((card) => {
      if (card && card.id) {
        map.set(card.id, card);
      }
    });
  });
  return map;
}
