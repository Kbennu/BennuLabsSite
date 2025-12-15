
import type { Metadata } from 'next';

const mainContent = `<section class="hero sticky-hero">
      <div>
        <div class="tagline">Iskorka</div>
        <h1>AI-ассистент для discovery и роста продукта</h1>
        <p>Iskorka собирает обратную связь, анализирует продуктовые метрики и предлагает идеи для экспериментов. Ассистент интегрируется с Miro, Notion, Jira и Slack, чтобы команда сохраняла фокус на важных задачах.</p>
        <p class="price-note">Все детали по пакетам и срокам — в <a href="/pricing">разделе тарифов</a>.</p>
        <div style="display:flex; gap: 16px; flex-wrap: wrap; margin-top: 24px;">
          <a class="cta-button" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900&nbsp;₽</a>
          <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900 ₽</a>
        </div>
      </div>
      <div class="hero-illustration">
        <span>Сценарии использования</span>
        <ul>
          <li>Анализ пользовательских отзывов и выявление инсайтов</li>
          <li>Генерация идей экспериментов и приоритизация</li>
          <li>Автоматическое оформление гипотез и задач в backlog</li>
        </ul>
        <a class="cta-button" href="/assets/docs/ai_strategy_playbook.pdf" download>Получить playbook</a>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2>Модули Iskorka</h2>
        <p>Выберите набор функций под конкретные цели продуктовой команды.</p>
      </div>
      <div class="grid">
        <article class="card">
          <h3>Insights Radar</h3>
          <p>Сбор и кластеризация обратной связи.</p>
          <ul>
            <li>Парсинг отзывов, саппорта и исследований</li>
            <li>Автоклассификация тем и тональности</li>
            <li>Оповещения в Slack</li>
          </ul>
        </article>
        <article class="card">
          <h3>Hypothesis Studio</h3>
          <p>Формирование и оценка продуктовых гипотез.</p>
          <ul>
            <li>Фреймворки ICE, RICE, PIE</li>
            <li>Автогенерация описаний экспериментов</li>
            <li>Согласование с лидерами продукта</li>
          </ul>
        </article>
        <article class="card">
          <h3>Launch Console</h3>
          <p>Подготовка и мониторинг экспериментов.</p>
          <ul>
            <li>Интеграция с Jira и аналитикой</li>
            <li>Готовые шаблоны стендапов</li>
            <li>Автоотчеты по результатам</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2>Связанные предложения</h2>
        <p>Расширяйте ассистента Iskorka другими модулями Bennu Labs.</p>
      </div>
      <div class="grid">
        <article class="card">
          <h3>AI Fabric</h3>
          <p>Инфраструктура для интеграции Iskorka в корпоративную среду.</p>
          <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
        </article>
        <article class="card">
          <h3>Data Fabric</h3>
          <p>Единый слой данных для экспериментов и аналитики.</p>
          <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
        </article>
        <article class="card">
          <h3>Design Sprint</h3>
          <p>Командная сессия по внедрению AI-ассистента в процессы.</p>
          <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900 ₽</a>
        </article>
      </div>
    </section>`;

export const metadata: Metadata = {
  title: 'Iskorka — AI-ассистент для продуктовых команд',
  description: 'Iskorka помогает продуктовым командам анализировать инсайты, генерировать гипотезы и запускать эксперименты.',
  alternates: { canonical: 'https://bennulabs.online/ai/iskorka' }
};

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: mainContent }} />;
}
