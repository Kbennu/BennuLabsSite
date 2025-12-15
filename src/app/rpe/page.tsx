import type { Metadata } from 'next';

const mainContent = `<section class="hero sticky-hero">
  <div>
    <div class="tagline">Responsible Engineering</div>
    <h1>Безопасное и прозрачное внедрение AI</h1>
    <p>Мы внедряем фреймворк Responsible AI: политика, контроль данных, аудит и мониторинг рисков. Поддерживаем соответствие требованиям и готовим команды.</p>
    <p class="price-note">Все детали по пакетам и срокам — в <a href="/pricing/">разделе тарифов</a>.</p>
    <div style="display:flex; gap:16px; flex-wrap:wrap; margin-top:24px;">
      <a class="cta-button" href="https://t.me/BennuLabIntakeBot?start=dev_pro">Pro · 59 900&nbsp;₽</a>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_pro">Pro · 59 900 ₽</a>
    </div>
  </div>
  <div class="hero-illustration">
    <span>Компоненты фреймворка</span>
    <ul>
      <li>Политики использования AI</li>
      <li>Governance данных и доступов</li>
      <li>Мониторинг качества и этики</li>
    </ul>
    <a class="cta-button" href="/assets/docs/ai_strategy_playbook.pdf" download>Получить шаблоны</a>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Трек RPE</h2>
    <p>Строим систему ответственности и прозрачности вокруг AI.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>Policy &amp; Governance</h3>
      <p>Разработка политики, ролей и процессов.</p>
      <ul>
        <li>Регламенты и комитеты</li>
        <li>Матрица рисков</li>
        <li>Обучение сотрудников</li>
      </ul>
    </article>
    <article class="card">
      <h3>AI Trust Lab</h3>
      <p>Тесты качества, безопасности и устойчивости.</p>
      <ul>
        <li>Метрики токсичности и галлюцинаций</li>
        <li>Red teaming и стресс-тесты</li>
        <li>Отчеты для стейкхолдеров</li>
      </ul>
    </article>
    <article class="card">
      <h3>Compliance Ops</h3>
      <p>Поддержание соответствия и аудит.</p>
      <ul>
        <li>Аудит цепочек данных</li>
        <li>Журналы событий и SLA</li>
        <li>Интеграция с GRC-системами</li>
      </ul>
    </article>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Интеграции</h2>
    <p>RPE связывает AI, данные и дизайн.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>AI Fabric</h3>
      <p>Мониторинг и алерты для агентских сценариев.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_pro">Pro · 59 900 ₽</a>
    </article>
    <article class="card">
      <h3>Data Fabric</h3>
      <p>Контроль доступов и lineage.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_pro">Pro · 59 900 ₽</a>
    </article>
    <article class="card">
      <h3>AI Academy</h3>
      <p>Обучение политике Responsible AI.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </article>
  </div>
</section>`;

export const metadata: Metadata = {
  title: 'Responsible AI Bennu Labs — политика и безопасность',
  description: 'Responsible Engineering Bennu Labs внедряет политику AI, аудит и контроль рисков.',
  alternates: { canonical: 'https://bennulabs.online/rpe' }
};

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: mainContent }} />;
}
