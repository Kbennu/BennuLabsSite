import type { Metadata } from 'next';

const mainContent = `<section class="hero sticky-hero">
  <div>
    <div class="tagline">AI Fabric</div>
    <h1>Платформа Bennu Labs для AI-продуктов и агентов</h1>
    <p>AI Fabric объединяет генеративные модели, RAG, автоматизацию процессов и инструменты наблюдаемости. Мы помогаем командам запускать пилоты, а затем масштабировать сервисы до корпоративного уровня.</p>
    <p class="price-note">Все детали по пакетам и срокам — в <a href="/pricing/">разделе тарифов</a>.</p>
    <div style="display:flex; gap: 16px; flex-wrap: wrap; margin-top: 24px;">
      <a class="cta-button" href="https://t.me/BennuLabIntakeBot?start=dev_pro">Pro · 59 900&nbsp;₽</a>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </div>
  </div>
  <div class="hero-illustration">
    <span>Компоненты</span>
    <ul>
      <li>Inference orchestration и мультимодельность</li>
      <li>RAG-пайплайн и управление знаниями</li>
      <li>Observability и политика Responsible AI</li>
    </ul>
    <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_pro">Pro · 59 900 ₽</a>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Модули платформы</h2>
    <p>Каждый модуль можно подключить по отдельности или собрать полный стек.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>Agent Builder</h3>
      <p>Конструктор сценариев и мультиагентных стэков.</p>
      <ul>
        <li>UI для бизнес-команд</li>
        <li>Подключение LLM-провайдеров</li>
        <li>Экспорт сценариев в codebase</li>
      </ul>
    </article>
    <article class="card">
      <h3>Knowledge Fabric</h3>
      <p>RAG с контролем качества и актуальности данных.</p>
      <ul>
        <li>Парсеры и коннекторы</li>
        <li>Валидация и аннотирование</li>
        <li>Версионирование знаний</li>
      </ul>
    </article>
    <article class="card">
      <h3>Observability</h3>
      <p>Мониторинг качества и Responsible AI.</p>
      <ul>
        <li>Метрики доверия и токсичности</li>
        <li>Human-in-the-loop интерфейс</li>
        <li>Аудит и алерты</li>
      </ul>
    </article>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Связанные продукты</h2>
    <p>Используйте AI Fabric как базу для собственных ассистентов и аналитики.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>Iskorka</h3>
      <p>AI-ассистент для продуктовых и маркетинговых команд.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900 ₽</a>
    </article>
    <article class="card">
      <h3>Data Fabric</h3>
      <p>Инфраструктура данных для AI-сервисов.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </article>
    <article class="card">
      <h3>Responsible Engineering</h3>
      <p>Политики и аудит безопасного AI.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_pro">Pro · 59 900 ₽</a>
    </article>
  </div>
</section>`;

export const metadata: Metadata = {
  title: 'AI Fabric Bennu Labs — архитектура платформы',
  description: 'AI Fabric Bennu Labs объединяет агенты, RAG и observability в единую платформу.',
  alternates: { canonical: 'https://bennulabs.online/ai' }
};

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: mainContent }} />;
}
