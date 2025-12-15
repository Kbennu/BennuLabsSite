import type { Metadata } from 'next';

const mainContent = `<section class="hero sticky-hero">
  <div>
    <div class="tagline">Design Studio</div>
    <h1>Сервисный дизайн для AI-продуктов и процессов</h1>
    <p>Создаем опыт, в котором AI-боты, интерфейсы и сотрудники работают синхронно. От пользовательских исследований до внедрения интерфейсов — все в одной команде.</p>
    <p class="price-note">Все детали по пакетам и срокам — в <a href="/pricing/">разделе тарифов</a>.</p>
    <div style="display:flex; gap:16px; flex-wrap:wrap; margin-top:24px;">
      <a class="cta-button" href="https://t.me/BennuLabIntakeBot?start=mix_intake">Mix Lite+Lite · 49 900&nbsp;₽</a>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900 ₽</a>
    </div>
  </div>
  <div class="hero-illustration">
    <span>Как работаем</span>
    <ul>
      <li>Исследования и кастдев</li>
      <li>CJM, сервис-блюпринты, job stories</li>
      <li>UI-системы и внедрение в продукт</li>
    </ul>
    <a class="cta-button" href="/assets/docs/ai_strategy_playbook.pdf" download>Скачать программу</a>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Форматы работы</h2>
    <p>Выбирайте формат, который подходит по скорости и вовлечению команды.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>Design Sprint</h3>
      <p>Интенсив 5 дней: от исследования до теста прототипа.</p>
      <ul>
        <li>Подготовка гипотез и сценариев</li>
        <li>Прототипирование и тесты</li>
        <li>План внедрения</li>
      </ul>
    </article>
    <article class="card">
      <h3>Service Blueprint</h3>
      <p>Карта всех точек контакта и ролей в сервисе.</p>
      <ul>
        <li>Мультиканальные сценарии</li>
        <li>Процессы и бэк-офис</li>
        <li>Roadmap внедрения</li>
      </ul>
    </article>
    <article class="card">
      <h3>Design Ops</h3>
      <p>Настройка дизайн-системы и процессов для AI.</p>
      <ul>
        <li>UI-kit и компоненты</li>
        <li>Гайдлайны для AI-интерфейсов</li>
        <li>Обучение команды</li>
      </ul>
    </article>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>С чем интегрируемся</h2>
    <p>Дизайн-команда работает вместе с инженерами и аналитиками.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>AI Fabric</h3>
      <p>UI и UX для агентских сценариев.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </article>
    <article class="card">
      <h3>Iskorka</h3>
      <p>Оформление AI-ассистентов для продуктовых команд.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900 ₽</a>
    </article>
    <article class="card">
      <h3>AI Academy</h3>
      <p>Обучение сотрудников работе с новыми интерфейсами.</p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </article>
  </div>
</section>`;

export const metadata: Metadata = {
  title: 'Design Studio Bennu Labs — сервисный дизайн',
  description: 'Design Studio Bennu Labs проектирует опыт пользователей для AI и цифровых сервисов.',
  alternates: { canonical: 'https://bennulabs.online/design' }
};

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: mainContent }} />;
}
