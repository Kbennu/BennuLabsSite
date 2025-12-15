import type { Metadata } from 'next';

const mainContent = `<section class="hero sticky-hero hero-compact pricing-hero">
  <div>
    <div class="tagline">Pricing · Telegram + RU Deploy</div>
    <h1>Тарифы Bennu Labs: Telegram-боты + российский деплой</h1>
    <p class="hero-subtitle">
      Dev Lite/Starter/Pro — от intake до AI-диалогов за 1–7 р.д.; Mix пакеты с деплоем — до 12 р.д.
    </p>
    <p class="hero-description">
      Закрываем сценарии, безопасность и handover под требования российских контуров без сложных закупок.
    </p>
    <div class="hero-chips">
      <span class="hero-chip">Dev: 24 900–169 000&nbsp;₽</span>
      <span class="hero-chip">RU-облака: Yandex / Timeweb / Selectel / VK / МТС</span>
      <span class="hero-chip">Оплата: РФ / USDT / TON</span>
    </div>
    <!-- Все ссылки на t.me в hero, контактах и футере ведут по HTTPS, чтобы избежать Mixed Content и сохранять корректную работу deeplink-CTA. -->
    <div class="cta-group">
      <a class="cta-button" href="https://t.me/BennuLabIntakeBot?start=dev_lite" target="_blank" rel="noopener noreferrer">Dev Lite · 24 900&nbsp;₽</a>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=ru_deploy_express" target="_blank" rel="noopener noreferrer">RU Deploy Express · 19 900&nbsp;₽</a>
    </div>
    <div class="hero-meta">
      <span>Старт через 1–2 р.д. после брифа</span>
      <span>Yandex · Timeweb · Selectel · VK · МТС</span>
    </div>
  </div>
  <div class="hero-illustration">
    <span>Что входит</span>
    <ul class="compact-list">
      <li>Intake-бот с AI-ответами и CRM-интеграциями</li>
      <li>Документация, handover и мониторинг</li>
      <li>Прозрачный деплой в российских облаках</li>
    </ul>
  </div>
</section>

<section class="section numbered" id="section-0">
  <div class="section-heading">
    <span class="section-marker">0)</span>
    <div>
      <h2>TL;DR — что вы реально получаете</h2>
      <p>Пять опорных пунктов перед сравнением пакетов и закупкой.</p>
    </div>
  </div>
  <ol class="tldr-list compact-list">
    <li>
      <strong>1. Что входит в Dev:</strong>
      <p>Intake-бот с AI-ответами, CRM/Notion/Sheets, антиспамом и <code>/health</code> на готовых mindmap и FSM-сценариях.</p>
    </li>
    <li>
      <strong>2. Документация и контроль:</strong>
      <p>Handover в Notion, README + <code>.env.example</code>, runbook для ИТ, песочница, нагрузочные тесты и дашборды.</p>
    </li>
    <li>
      <strong>3. Деплой под РФ-контуры:</strong>
      <p>Yandex/Timeweb/Selectel/VK/МТС Cloud, HTTPS, мониторинг, разделение ролей и резервы под гибрид.</p>
    </li>
    <li>
      <strong>4. Пакеты и сроки:</strong>
      <p>Dev Lite/Starter/Pro за 24 900 / 39 900 / 59 900&nbsp;₽ на 1–2 / 2–4 / 4–7&nbsp;р.д.; Mix связки 49 900 / 89 900 / 169 000&nbsp;₽ на 2–3 / 4–6 / 7–12&nbsp;р.д.; RU-деплой 19 900–119 000&nbsp;₽ за 0.5–5&nbsp;р.д.</p>
    </li>
    <li>
      <strong>5. Оплата и условия:</strong>
      <p>70/30 по спринтам, без возвратов; счета и карты РФ + USDT для локальных юрлиц, USD инвойсы с USDT/TON для global; работаем по согласованному брифу.</p>
    </li>
  </ol>
</section>

<section class="section numbered" id="section-1">
  <div class="section-heading">
    <span class="section-marker">1)</span>
    <div>
      <h2>Dev-пакеты — Lite / Starter / Pro</h2>
      <p>Собираем intake-бот, AI-интерфейсы и базовый RU-деплой за несколько рабочих дней. Цена включает проджект-менеджмент, документацию и демонстрацию.</p>
    </div>
  </div>
  <div class="package-grid">
    <article class="package-card">
      <header class="package-card-header">
        <div>
          <p class="package-name">Dev Lite</p>
          <p class="package-tag">MVP intake</p>
        </div>
        <div class="package-price-wrap">
          <span class="package-price">24 900&nbsp;₽</span>
          <span class="package-time">1–2 р.д.</span>
        </div>
      </header>
      <ul class="package-list compact-list">
        <li>Discovery-встреча, mindmap, базовая визуализация сценариев.</li>
        <li>Telegram-бот с готовыми ответами + CRM/Notion.</li>
        <li>Простой отчёт в Google Sheets и handover.</li>
      </ul>
    </article>
    <article class="package-card">
      <header class="package-card-header">
        <div>
          <p class="package-name">Dev Starter</p>
          <p class="package-tag">AI-диалог</p>
        </div>
        <div class="package-price-wrap">
          <span class="package-price">39 900&nbsp;₽</span>
          <span class="package-time">2–4 р.д.</span>
        </div>
      </header>
      <ul class="package-list compact-list">
        <li>Генеративные ответы и маршрутизация по intent.</li>
        <li>Интеграции с amoCRM/Bitrix24 + платежи/курьеры.</li>
        <li>Песочница, нагрузочные тесты и дашборд в Looker Studio.</li>
      </ul>
    </article>
    <article class="package-card">
      <header class="package-card-header">
        <div>
          <p class="package-name">Dev Pro</p>
          <p class="package-tag">ИБ + сложные API</p>
        </div>
        <div class="package-price-wrap">
          <span class="package-price">59 900&nbsp;₽</span>
          <span class="package-time">4–7 р.д.</span>
        </div>
      </header>
      <ul class="package-list compact-list">
        <li>Многоокружный деплой, согласование требований безопасности.</li>
        <li>Интеграции с внутренними API, очередями и биллингом.</li>
        <li>Мониторинг (Grafana) + runbook для ИТ-службы.</li>
      </ul>
    </article>
  </div>
</section>

<section class="section numbered" id="section-2">
  <div class="section-heading">
    <span class="section-marker">2)</span>
    <div>
      <h2>Mix-пакеты с деплоем</h2>
      <p>Фиксированные связки Dev + RU-инфраструктура для команд, которым нужны intake-боты, медиапланы и always-on деплой в одном окне.</p>
    </div>
  </div>
  <div class="package-grid">
    <article class="package-card">
      <header class="package-card-header">
        <div>
          <p class="package-name">Lite Dev + LITE деплой</p>
          <p class="package-tag">Intake + Docker Compose</p>
        </div>
        <div class="package-price-wrap">
          <span class="package-price">49 900&nbsp;₽</span>
          <span class="package-time">2–3 р.д.</span>
        </div>
      </header>
      <div class="package-columns">
        <div>
          <p class="package-subtitle">Dev</p>
          <ul class="package-list compact-list">
            <li>Пакет Lite: mindmap, FSM-заявка до 7 шагов, канал Leads + CSV-бэкап.</li>
            <li>Антиспам, <code>/health</code>, README + <code>.env.example</code>, тексты RU/EN.</li>
          </ul>
        </div>
        <div>
          <p class="package-subtitle">Deploy</p>
          <ul class="package-list compact-list">
            <li>VM 1 vCPU/2 GB + статический IP в Yandex/Timeweb/Selectel.</li>
            <li>Docker Compose (app+redis+caddy), HTTPS + автопродление, webhook и Runbook.</li>
          </ul>
        </div>
      </div>
      <ul class="package-list compact-list package-meta">
        <li><strong>Срок:</strong> 2–3 р.д. после брифа.</li>
        <li><strong>DoD:</strong> валидный HTTPS, <code>/health=200</code>, <code>setWebhook=ok</code>, автоподъём.</li>
        <li><strong>KPI:</strong> CR заявок +25% за 4 недели.</li>
      </ul>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=mix_lite" target="_blank" rel="noopener noreferrer">Lite Dev + LITE деплой · 49 900&nbsp;₽</a>
    </article>
    <article class="package-card">
      <header class="package-card-header">
        <div>
          <p class="package-name">Starter Dev + STANDARD</p>
          <p class="package-tag">AI intake + CI/CD</p>
        </div>
        <div class="package-price-wrap">
          <span class="package-price">89 900&nbsp;₽</span>
          <span class="package-time">4–6 р.д.</span>
        </div>
      </header>
      <div class="package-columns">
        <div>
          <p class="package-subtitle">Dev</p>
          <ul class="package-list compact-list">
            <li>Пакет Starter: Sheets/Яндекс Таблицы, видео-гайд, AI-ответы и intent-маршрутизация.</li>
            <li>Платежи/курьеры, тонкая настройка текстов и базовый логгинг.</li>
          </ul>
        </div>
        <div>
          <p class="package-subtitle">Deploy</p>
          <ul class="package-list compact-list">
            <li>CI/CD (GitHub Actions → YCR), бэкапы <code>.env</code>/Compose, ротация логов, fail2ban.</li>
            <li>Hardening доступа, rollback-план и 7 дней наблюдения.</li>
          </ul>
        </div>
      </div>
      <ul class="package-list compact-list package-meta">
        <li><strong>Срок:</strong> 4–6 р.д. (Dev + деплой).</li>
        <li><strong>DoD:</strong> AI intake, таблица лидов, CI/CD + failover.</li>
        <li><strong>KPI:</strong> −30% ручных касаний за 6 недель.</li>
      </ul>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=mix_ops" target="_blank" rel="noopener noreferrer">Starter Dev + STANDARD · 89 900&nbsp;₽</a>
    </article>
    <article class="package-card">
      <header class="package-card-header">
        <div>
          <p class="package-name">Pro Dev + MAX</p>
          <p class="package-tag">Field + гибрид</p>
        </div>
        <div class="package-price-wrap">
          <span class="package-price">169 000&nbsp;₽</span>
          <span class="package-time">7–12 р.д.</span>
        </div>
      </header>
      <div class="package-columns">
        <div>
          <p class="package-subtitle">Dev</p>
          <ul class="package-list compact-list">
            <li>Пакет Pro: статусы, кнопки Quote/Pay, +1 интеграция (Sheets/CRM) и i18n EN/RU.</li>
            <li>Field-скрипты, QR-маршруты, документация и NPS-аналитика.</li>
          </ul>
        </div>
        <div>
          <p class="package-subtitle">Deploy</p>
          <ul class="package-list compact-list">
            <li>Uptime-Kuma + TG-алерты, Sentry/self-hosted или лёгкий error-логгер.</li>
            <li>Staging + blue/green (Caddy), OpenTofu (IaC), операционная дока 5–7 стр.</li>
          </ul>
        </div>
      </div>
      <ul class="package-list compact-list package-meta">
        <li><strong>Срок:</strong> 7–12 р.д. с учётом деплоя.</li>
        <li><strong>DoD:</strong> выкладки без простоя, быстрый откат, наблюдаемость.</li>
        <li><strong>KPI:</strong> NPS +12 п.п., field-активации.</li>
      </ul>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=mix_field" target="_blank" rel="noopener noreferrer">Pro Dev + MAX · 169 000&nbsp;₽</a>
    </article>
  </div>
  <div class="package-note">
    <p><strong>Дополнительные комбо:</strong></p>
    <ul class="compact-list">
      <li>Starter Dev + LITE деплой — 64 900&nbsp;₽ · 3–4 р.д. (если нужен VPN-контур без CI/CD).</li>
      <li>Pro Dev + STANDARD деплой — 109 900&nbsp;₽ · 5–8 р.д. (гибрид + failover без расширенного наблюдения).</li>
    </ul>
  </div>
</section>

<section class="section numbered" id="section-3">
  <div class="section-heading">
    <span class="section-marker">3)</span>
    <div>
      <h2>Подписка Bennu Care</h2>
      <p>Сопровождаем Telegram-бота, инфраструктуру и AI-эксперименты после релиза. Часовки гибкие, отчётность в Notion и Looker Studio.</p>
    </div>
  </div>
  <div class="package-grid">
    <article class="package-card">
      <header class="package-card-header">
        <div>
          <p class="package-name">Care Basic</p>
          <p class="package-tag">8 ч / мес</p>
        </div>
        <div class="package-price-wrap">
          <span class="package-price">12 000&nbsp;₽</span>
          <span class="package-time">помесячно</span>
        </div>
      </header>
      <ul class="package-list compact-list">
        <li>8 часов на мини-итерации, обновления контента и консультации по интеграциям.</li>
        <li>Задачи ведём в Notion + Telegram, подключаем архитектора по запросу.</li>
      </ul>
      <ul class="package-list compact-list package-meta">
        <li><strong>SLA:</strong> ответ до 8 часов, слоты по 2 часа.</li>
        <li><strong>Сверх лимита:</strong> 2 200&nbsp;₽/час.</li>
        <li><strong>Условия:</strong> помесячный биллинг, отмена за 15 дней, оплата 70/30.</li>
      </ul>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=care_basic" target="_blank" rel="noopener noreferrer">Care Basic · 12 000&nbsp;₽</a>
    </article>
    <article class="package-card">
      <header class="package-card-header">
        <div>
          <p class="package-name">Care Standard</p>
          <p class="package-tag">16 ч / мес</p>
        </div>
        <div class="package-price-wrap">
          <span class="package-price">22 000&nbsp;₽</span>
          <span class="package-time">помесячно</span>
        </div>
      </header>
      <ul class="package-list compact-list">
        <li>16 часов на гипотезы, промпт-инжиниринг, релизы и отчёты по KPI.</li>
        <li>Единый backlog, приоритезация и синки 1–2 раза в неделю.</li>
      </ul>
      <ul class="package-list compact-list package-meta">
        <li><strong>SLA:</strong> ответ до 4 часов, выделенный чат и демо каждые 2 недели.</li>
        <li><strong>Сверх лимита:</strong> 2 200&nbsp;₽/час, биллинг помесячно.</li>
        <li><strong>Условия:</strong> 70/30, отмена за 15 дней, общий roadmap.</li>
      </ul>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=care_standard" target="_blank" rel="noopener noreferrer">Care Standard · 22 000&nbsp;₽</a>
    </article>
    <article class="package-card">
      <header class="package-card-header">
        <div>
          <p class="package-name">Care Pro</p>
          <p class="package-tag">32 ч / мес</p>
        </div>
        <div class="package-price-wrap">
          <span class="package-price">42 000&nbsp;₽</span>
          <span class="package-time">помесячно</span>
        </div>
      </header>
      <ul class="package-list compact-list">
        <li>32 часа on-call Bennu, product analytics и совместный roadmap.</li>
        <li>Обновляем runbook, внедряем RAG/AI-эксперименты и готовим C-level отчёты.</li>
      </ul>
      <ul class="package-list compact-list package-meta">
        <li><strong>SLA:</strong> ответ до 2 часов, on-call инженеры и weekly релизы.</li>
        <li><strong>Сверх лимита:</strong> 2 200&nbsp;₽/час, отчётность еженедельно.</li>
        <li><strong>Условия:</strong> минимум 2 месяца, 70/30, при паузе удерживаем 30%.</li>
      </ul>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=care_pro" target="_blank" rel="noopener noreferrer">Care Pro · 42 000&nbsp;₽</a>
    </article>
  </div>
</section>

<section class="section numbered" id="section-4">
  <div class="section-heading">
    <span class="section-marker">4)</span>
    <div>
      <h2>Дополнительные услуги</h2>
      <p>Любой из блоков можно докупить к пакету или запустить как отдельный спринт.</p>
    </div>
  </div>
  <div class="grid">
    <article class="card">
      <h3>Среда разработки — 6 000&nbsp;₽</h3>
      <p>Разворачиваем dev/test окружение, подключаем VPN, секреты и доступы для команды.</p>
      <p><strong>Условия:</strong> оплачивается после брифа, подходит ко всем Dev-пакетам.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=addon_env" target="_blank" rel="noopener noreferrer">Среда · 6 000&nbsp;₽</a>
    </article>
    <article class="card">
      <h3>Интеграция — 4 900&nbsp;₽</h3>
      <p>Подключаем один внешний сервис или API, тестируем вебхуки и выдаём чек-лист.</p>
      <p><strong>Условия:</strong> SLA 2 р.д., подходит к Dev/Mix пакетам.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=addon_integration" target="_blank" rel="noopener noreferrer">Интеграция · 4 900&nbsp;₽</a>
    </article>
    <article class="card">
      <h3>Домен + SSL — 4 900&nbsp;₽</h3>
      <p>Регистрируем .ru домен, подключаем SSL и обновляем DNS в российском контуре.</p>
      <p><strong>Условия:</strong> подходит ко всем Dev и Mix пакетам, оформляем за 1 р.д.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=addon_domain_ssl" target="_blank" rel="noopener noreferrer">Домен · 4 900&nbsp;₽</a>
    </article>
    <article class="card">
      <h3>Видео-гайд — 3 900&nbsp;₽</h3>
      <p>Записываем 10‑минутный walkthrough, фиксируем сценарии и чек-листы обновлений.</p>
      <p><strong>Условия:</strong> оплачивается после демонстрации, формат MP4 + Notion.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=addon_video" target="_blank" rel="noopener noreferrer">Видео · 3 900&nbsp;₽</a>
    </article>
    <article class="card">
      <h3>Дизайн-пакет — 6 900&nbsp;₽</h3>
      <p>Готовим UI kit для Telegram, превью, обложки и визуалы для промо.</p>
      <p><strong>Условия:</strong> подходит ко всем Dev-пакетам, согласуем в Figma.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=addon_design" target="_blank" rel="noopener noreferrer">Дизайн · 6 900&nbsp;₽</a>
    </article>
    <article class="card">
      <h3>Импорт в n8n — 4 900&nbsp;₽</h3>
      <p>Готовим workflow, импортируем сценарии и выдаём инструкции по запуску.</p>
      <p><strong>Условия:</strong> 1 сценарий, срок 1 р.д., включает handover.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=addon_n8n" target="_blank" rel="noopener noreferrer">n8n · 4 900&nbsp;₽</a>
    </article>
    <article class="card">
      <h3>Pay-панель — Custom</h3>
      <p>Настраиваем виджет оплат, тестируем webhooks и передаём схему модерации.</p>
      <p><strong>Условия:</strong> кастомный расчёт, согласуем после брифа, доступно для всех Dev/Mix пакетов.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=addon_paypanel" target="_blank" rel="noopener noreferrer">Pay-панель · Custom</a>
    </article>
  </div>
</section>

<section class="section numbered" id="section-5">
  <div class="section-heading">
    <span class="section-marker">5)</span>
    <div>
      <h2>Design-пакеты для лендингов</h2>
      <p>Собираем визуал и UX для одностраничников, чтобы усилить intake-ботов и повысить конверсию.</p>
    </div>
  </div>
  <div class="package-grid">
    <article class="package-card">
      <header class="package-card-header">
        <div>
          <p class="package-name">Design Mini</p>
          <p class="package-tag">Hero + оффер</p>
        </div>
        <div class="package-price-wrap">
          <span class="package-price">19 900&nbsp;₽</span>
          <span class="package-time">2–3 р.д.</span>
        </div>
      </header>
      <ul class="package-list compact-list">
        <li>Оформляем hero-блок, оффер и CTA под сценарии intake-бота.</li>
        <li>Визуалы и UI-kit под тёмную тему, адаптив для мобильных.</li>
        <li>Тестируем UTM/аналитику и готовим handover для разработчиков.</li>
      </ul>
    </article>
    <article class="package-card popular" data-popular-label="рост CR">
      <header class="package-card-header">
        <div>
          <p class="package-name">Design Landing</p>
          <p class="package-tag">Секции + FAQ</p>
        </div>
        <div class="package-price-wrap">
          <span class="package-price">34 900&nbsp;₽</span>
          <span class="package-time">3–5 р.д.</span>
        </div>
      </header>
      <ul class="package-list compact-list">
        <li>Собираем сетку 3–5 блоков с оффером, выгодами и соцдоказательствами.</li>
        <li>FAQ/скрипты возражений, микроанимации и иллюстрации в едином стиле.</li>
        <li>Настраиваем события для тепловых карт и A/B тестов.</li>
      </ul>
    </article>
    <article class="package-card">
      <header class="package-card-header">
        <div>
          <p class="package-name">Design Pro</p>
          <p class="package-tag">Story + интеграции</p>
        </div>
        <div class="package-price-wrap">
          <span class="package-price">54 900&nbsp;₽</span>
          <span class="package-time">5–7 р.д.</span>
        </div>
      </header>
      <ul class="package-list compact-list">
        <li>Story-driven лендинг с мультиязычностью, SEO и расширенными формами.</li>
        <li>Поддержка платежей/календарей, лид-магнитов и уведомлений.</li>
        <li>Перформанс-аудит, accessibility-чеклист и готовые текстовые/видео-гайды.</li>
      </ul>
    </article>
  </div>
</section>

<section class="section numbered" id="section-6">
  <div class="section-heading">
    <span class="section-marker">6)</span>
    <div>
      <h2>RU-деплой отдельно</h2>
      <p>Деплоим ботов и веб-продукты в российских облаках: перенос с Render/Vercel, выделенный инженер, runbook, наблюдение и handover.</p>
    </div>
  </div>
  <div class="section-bullet-card">
    <ul class="compact-list">
      <li><strong>Контуры:</strong> переносим c Render/Vercel на Yandex/Timeweb/Selectel/VK/MTS Cloud под выделенного инженера.</li>
      <li><strong>Сборка:</strong> настраиваем Nginx + HTTPS, Docker Compose (app+redis+caddy) и рабочие вебхуки.</li>
      <li><strong>Runbook:</strong> выдаём инструкции по перезапуску, обновлениям и ротации секретов.</li>
      <li><strong>Наблюдение:</strong> <code>/health</code>, алерты по вебхукам, базовый лог-след и бэкапы <code>.env</code>/Compose.</li>
      <li><strong>Fail-safe:</strong> rollback-план, антибрутфорс (SSH-ключи, fail2ban) и контроль ответа &lt; 1&nbsp;с.</li>
      <li><strong>Handover:</strong> передаём доступы, DoD, OPEX-калькуляцию и сопровождаем 7 дней.</li>
    </ul>
  </div>
</section>

<section class="section numbered" id="section-7">
  <div class="section-heading">
    <span class="section-marker">7)</span>
    <div>
      <h2>Доступность</h2>
      <p>Быстрый старт: фиксируем, как быстро реагируем и какие артефакты передаём.</p>
    </div>
  </div>
  <ul class="note-list">
    <li><strong>Ответы:</strong> intake-бот работает 24/7, архитектор на связи 09:00–20:00 МСК и подключается за 1–2&nbsp;р.д.</li>
    <li><strong>Оплата:</strong> 70/30 (предоплата/приёмка); RU — счета с НДС, карта или USDT, global — USDT/TON.</li>
    <li><strong>Возвраты:</strong> не предусмотрены; при паузе удерживаем 30% от неиспользованного остатка.</li>
    <li><strong>Документы:</strong> договор, акт, runbook, чек-лист ИБ, доступы выдаём по ролям.</li>
    <li><strong>Контуры:</strong> Yandex Cloud, Timeweb, Selectel, VK Cloud, МТС Cloud + гибриды с резервом.</li>
    <li><strong>Материалы:</strong> Notion workspace, UI kit, шаблоны промптов и отчётности.</li>
  </ul>
</section>

<section class="section numbered" id="section-8">
  <div class="section-heading">
    <span class="section-marker">8)</span>
    <div>
      <h2>Контакты</h2>
      <p>Интегратор отвечает в рабочий день, intake-бот собирает вводные и сразу предлагает релевантный пакет.</p>
    </div>
  </div>
  <div class="contact-cta">
    <div>
      <h3>Быстрый старт</h3>
      <p>Бот собирает вводные, присылает подходящий пакет и бронирует слот архитектора.</p>
    </div>
    <div class="cta-group">
      <a class="cta-button primary-cta" href="https://t.me/BennuLabIntakeBot" target="_blank" rel="noopener noreferrer">Написать в Telegram</a>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=ru_deploy_max" target="_blank" rel="noopener noreferrer">RU Deploy Max · 119 000&nbsp;₽</a>
      <p class="contact-links contact-links-inline">
        <a href="https://t.me/BennuLabIntakeBot" target="_blank" rel="noopener noreferrer">Telegram-бот Bennu Labs</a>
        <span aria-hidden="true">·</span>
        <a href="https://t.me/BennuLabs" target="_blank" rel="noopener noreferrer">Канал Bennu Labs</a>
      </p>
    </div>
  </div>
</section>`;

export const metadata: Metadata = {
  title: 'Bennu Labs · РФ — Прайс и пакеты',
  description: 'Bennu Labs: Dev Lite/Starter/Pro от 24 900 ₽, Mix пакеты, российский деплой 19 900–119 000 ₽ и подписка Bennu Care на сопровождение Telegram-ботов.',
  alternates: { canonical: 'https://bennulabs.online/pricing' }
};

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: mainContent }} />;
}
