import type { Metadata } from 'next';

const mainContent = `<section class="hero sticky-hero">
  <div>
    <div class="tagline">AI Assistants</div>
    <h1>Генеративные боты, которые решают задачи клиентов</h1>
    <p>Наша команда помогает компаниям перейти от FAQ-чатов к агентам, которые закрывают продажи, поддерживают клиентов и автоматизируют внутренние процессы. Мы проектируем сценарии, подключаем RAG и внедряем измеримые KPI. По желанию подключаем одностраничный сайт и дизайн-упаковку, чтобы запуск был цельным.</p>
    <p class="price-note">Все детали по пакетам и срокам — в <a href="/pricing/">разделе тарифов</a>.</p>
    <div style="display:flex; gap: 16px; flex-wrap: wrap; margin-top: 24px;">
      <a class="cta-button" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900&nbsp;₽</a>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900 ₽</a>
    </div>
  </div>
  <div class="hero-illustration">
    <span>Roadmap внедрения</span>
    <ul>
      <li>1 неделя: кастдев, карта сценариев и бренд-голос</li>
      <li>2 неделя: прототип GPT-бота и интеграции</li>
      <li>3 неделя: A/B-тесты и метрики конверсии</li>
    </ul>
    <a class="cta-button" href="/assets/docs/ai_strategy_playbook.pdf" download>Получить playbook</a>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Что входит в вертикаль</h2>
    <p>Построение AI-бота — это сочетание стратегии, дизайна разговоров, инженерии и постоянного улучшения.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>AI Discovery</h3>
      <p>Кастдев, выбор сценариев и расчет бизнес-эффекта с первой волны.</p>
      <ul>
        <li>Работа с лидерами функций</li>
        <li>ROI-модель и KPI</li>
        <li>Карта данных и API</li>
      </ul>
    </article>
    <article class="card">
      <h3>Conversational Design</h3>
      <p>Скрипты, бренд-голос и мультиязычность.</p>
      <ul>
        <li>Storyboards и прототипы</li>
        <li>NLU-фреймворк и слоты</li>
        <li>Автообучение на примерах</li>
      </ul>
    </article>
    <article class="card">
      <h3>Agent Operations</h3>
      <p>Поддержка и масштабирование AI-бота в продуктиве.</p>
      <ul>
        <li>RAG + база знаний</li>
        <li>Интеграция с CRM, Service Desk</li>
        <li>Мониторинг качества и дообучение</li>
      </ul>
    </article>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Связанные предложения</h2>
    <p>Переходите к другим модулям платформы, чтобы усилить эффект.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>AI Fabric</h3>
      <p>Бэкэнд для сложных агентских сценариев.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </article>
    <article class="card">
      <h3>Iskorka</h3>
      <p>Готовый ассистент для продуктовых команд.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900 ₽</a>
    </article>
    <article class="card">
      <h3>AI Academy</h3>
      <p>Обучение внутренних операторов и аналитиков.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </article>
  </div>
</section>`;

export const metadata: Metadata = {
  title: 'AI-боты Bennu Labs — генеративные ассистенты',
  description: 'Bennu Labs проектирует AI-ботов и агентов: discovery, сценарии, запуск пилотов и масштабирование.',
  alternates: { canonical: 'https://bennulabs.online/bots' }
};

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: mainContent }} />;
}
