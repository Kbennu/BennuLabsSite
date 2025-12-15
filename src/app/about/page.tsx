import type { Metadata } from 'next';

const mainContent = `<section class="hero sticky-hero">
  <div>
    <div class="tagline">About</div>
    <h1>Bennu Labs — партнер по запуску AI-инициатив</h1>
    <p>Мы объединяем продуктовую стратегию, инженерию данных и дизайн, чтобы AI-сервисы приносили измеримый эффект. Наши команды работают в быстрых спринтах и строят долгосрочные платформы.</p>
    <p class="price-note">Все детали по пакетам и срокам — в <a href="/pricing/">разделе тарифов</a>.</p>
    <div style="display:flex; gap:16px; flex-wrap:wrap; margin-top:24px;">
      <a class="cta-button" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900&nbsp;₽</a>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </div>
  </div>
  <div class="hero-illustration">
    <span>Факты</span>
    <ul>
      <li>30+ AI- и data-архитекторов</li>
      <li>20 индустриальных кейсов</li>
      <li>Собственная AI-платформа и академия</li>
    </ul>
    <a class="cta-button" href="/assets/docs/ai_strategy_playbook.pdf" download>Скачать презентацию</a>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Команда</h2>
    <p>Основатели и лидеры Bennu Labs.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>Екатерина Иванова</h3>
      <p>CEO &amp; Co-founder</p>
      <ul>
        <li>Стратегия AI и рост бизнеса</li>
        <li>Опыт в финтехе и ритейле</li>
        <li>Советник акселераторов</li>
      </ul>
    </article>
    <article class="card">
      <h3>Алексей Смирнов</h3>
      <p>Chief Product Officer</p>
      <ul>
        <li>15 лет в продуктовой разработке</li>
        <li>Эксперт в AI-дизайне</li>
        <li>Ментор в ProductCamp</li>
      </ul>
    </article>
    <article class="card">
      <h3>Мария Лебедева</h3>
      <p>Head of Data</p>
      <ul>
        <li>Data fabric и governance</li>
        <li>RAG и аналитика</li>
        <li>Преподаватель AI Academy</li>
      </ul>
    </article>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Принципы</h2>
    <p>Мы строим AI, который устойчив и приносит ценность.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>Impact-first</h3>
      <p>Фокус на бизнес-эффекте и метриках роста.</p>
    </article>
    <article class="card">
      <h3>Responsible by design</h3>
      <p>Политики ответственности встроены в продукты.</p>
    </article>
    <article class="card">
      <h3>Co-creation</h3>
      <p>Работаем совместно с командами клиента.</p>
    </article>
  </div>
</section>`;

export const metadata: Metadata = {
  title: 'О Bennu Labs',
  description: 'Bennu Labs — команда стратегов, инженеров и дизайнеров, создающих AI-платформы.',
  alternates: { canonical: 'https://bennulabs.online/about' }
};

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: mainContent }} />;
}
