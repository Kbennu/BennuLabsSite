import type { Metadata } from 'next';

const mainContent = `<section class="hero sticky-hero">
  <div>
    <div class="tagline">Data Fabric</div>
    <h1>Единый слой данных для генеративных сервисов</h1>
    <p>Мы помогаем выстроить управление данными, которое ускоряет внедрение AI. Каталоги, пайплайны, observability и управление доступом — все в одном проекте.</p>
    <p class="price-note">Все детали по пакетам и срокам — в <a href="/pricing/">разделе тарифов</a>.</p>
    <div style="display:flex; gap:16px; flex-wrap:wrap; margin-top:24px;">
      <a class="cta-button" href="https://t.me/BennuLabIntakeBot?start=mix_ops">Mix Starter+Std · 89 900&nbsp;₽</a>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </div>
  </div>
  <div class="hero-illustration">
    <span>Что делаем</span>
    <ul>
      <li>Карта источников и политика доступа</li>
      <li>Пайплайны качества и актуализации</li>
      <li>Дэшборды влияния на бизнес</li>
    </ul>
    <a class="cta-button" href="/assets/docs/data_maturity_checklist.txt" download>Скачать чеклист</a>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Компоненты Data Fabric</h2>
    <p>Соединяем инженерию данных, платформу и governance.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>Source Hub</h3>
      <p>Каталог источников и управление метаданными.</p>
      <ul>
        <li>Data lineage и качество</li>
        <li>Ролевые модели доступа</li>
        <li>Автоматическое документирование</li>
      </ul>
    </article>
    <article class="card">
      <h3>AI Pipelines</h3>
      <p>Подготовка датасетов для RAG и ML.</p>
      <ul>
        <li>Парсеры и очистка данных</li>
        <li>Векторизация и хранение</li>
        <li>Мониторинг дрифта</li>
      </ul>
    </article>
    <article class="card">
      <h3>Insight Desk</h3>
      <p>Доступ бизнеса к данным и метрикам.</p>
      <ul>
        <li>Дэшборды и storytelling</li>
        <li>Оповещения и workflow</li>
        <li>База знаний и обучение</li>
      </ul>
    </article>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Следующие шаги</h2>
    <p>Синхронизируйте данные с внедрением AI и дизайном сервиса.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>AI Fabric</h3>
      <p>Подключение данных к агентам и ботам.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </article>
    <article class="card">
      <h3>Responsible Engineering</h3>
      <p>Контроль качества и безопасности данных.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_pro">Pro · 59 900 ₽</a>
    </article>
    <article class="card">
      <h3>Design Research</h3>
      <p>Понимание потребностей пользователей данных.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900 ₽</a>
    </article>
  </div>
</section>`;

export const metadata: Metadata = {
  title: 'Data Fabric Bennu Labs — данные для AI',
  description: 'Data Fabric Bennu Labs подключает источники данных, настраивает качество и обеспечивает питание AI-сервисов.',
  alternates: { canonical: 'https://bennulabs.online/data' }
};

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: mainContent }} />;
}
