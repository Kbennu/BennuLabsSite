import type { Metadata } from 'next';

const mainContent = `<section class="hero sticky-hero">
  <div>
    <div class="tagline">AI Academy</div>
    <h1>Обучение команд для запуска AI-инициатив</h1>
    <p>Мы создаем программы апскилла для продуктов, аналитиков, маркетинга и поддержки. Практика на живых кейсах и инструментах Bennu Labs.</p>
    <p class="price-note">Все детали по пакетам и срокам — в <a href="/pricing/">разделе тарифов</a>.</p>
    <div style="display:flex; gap:16px; flex-wrap:wrap; margin-top:24px;">
      <a class="cta-button" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900&nbsp;₽</a>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </div>
  </div>
  <div class="hero-illustration">
    <span>Форматы</span>
    <ul>
      <li>Интенсивы на 2-3 недели</li>
      <li>Сертификация ролей: AI Product, Prompt Engineer</li>
      <li>Наставничество и ревью проектов</li>
    </ul>
    <a class="cta-button" href="/assets/docs/ai_strategy_playbook.pdf" download>Скачать программу</a>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Треки обучения</h2>
    <p>Подбираем учебные треки под конкретные функции и KPI.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>AI Product</h3>
      <p>Для продуктовых менеджеров и владельцев.</p>
      <ul>
        <li>Стратегия AI и выбор кейсов</li>
        <li>Метрики и Unit-экономика</li>
        <li>Роадмапы и внедрение</li>
      </ul>
    </article>
    <article class="card">
      <h3>Prompt Engineering</h3>
      <p>Для аналитиков, маркетинга и поддержки.</p>
      <ul>
        <li>Паттерны промптинга</li>
        <li>Настройка RAG и баз знаний</li>
        <li>Автоматизация процессов</li>
      </ul>
    </article>
    <article class="card">
      <h3>AI Ops</h3>
      <p>Для инженеров и операционных команд.</p>
      <ul>
        <li>Мониторинг качества AI</li>
        <li>MLOps и observability</li>
        <li>Responsible AI практики</li>
      </ul>
    </article>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Инструменты</h2>
    <p>Обучение построено на продуктах Bennu Labs и индустриальных сервисах.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>Bennu Labs Platform</h3>
      <p>Практика на агентских сценариях и данных.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </article>
    <article class="card">
      <h3>Iskorka</h3>
      <p>Генерация идей и экспериментов.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900 ₽</a>
    </article>
    <article class="card">
      <h3>Data Fabric</h3>
      <p>Подготовка данных и проверка гипотез.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </article>
  </div>
</section>`;

export const metadata: Metadata = {
  title: 'AI Academy Bennu Labs — обучение команд',
  description: 'AI Academy Bennu Labs переобучает команды под AI-ботов, данные и дизайн продуктов.',
  alternates: { canonical: 'https://bennulabs.online/academy' }
};

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: mainContent }} />;
}
