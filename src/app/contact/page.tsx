import type { Metadata } from 'next';

const mainContent = `<section class="hero sticky-hero">
  <div>
    <div class="tagline">Contact</div>
    <h1>Свяжитесь с Bennu Labs</h1>
    <p>Расскажите о задачах — мы предложим формат пилота, обучение или внедрение платформы.</p>
    <p class="price-note">Все детали по пакетам и срокам — в <a href="/pricing/">разделе тарифов</a>.</p>
    <div style="display:flex; gap:16px; flex-wrap:wrap; margin-top:24px;">
      <a class="cta-button" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900&nbsp;₽</a>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </div>
  </div>
  <div class="hero-illustration">
    <span>Как мы работаем</span>
    <ul>
      <li>Диагностика задачи и данных</li>
      <li>Демо платформы и материалов</li>
      <li>Запуск пилота за 3 недели</li>
    </ul>
    <a class="cta-button" href="/assets/docs/ai_strategy_playbook.pdf" download>Скачать материалы</a>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Контакты</h2>
    <p>Выберите удобный канал связи или оставьте запрос.</p>
  </div>
  <div class="contact-grid">
    <div class="card">
      <h3>Коммерческие запросы</h3>
      <p class="contact-links">
        <a href="https://t.me/BennuLabIntakeBot" target="_blank" rel="noopener noreferrer">Бот Bennu Labs</a>
        <a href="https://t.me/BennuLabs" target="_blank" rel="noopener noreferrer">Канал Bennu Labs</a>
      </p>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900 ₽</a>
    </div>
    <form class="contact-form" action="https://formspree.io/f/xpzvzwjn" method="POST">
      <label for="name">Имя</label>
      <input id="name" name="name" type="text" placeholder="Введите имя" required />
      <label for="email">Email</label>
      <input id="email" name="email" type="email" placeholder="name@company.com" required />
      <label for="message">Задача</label>
      <textarea id="message" name="message" rows="4" placeholder="Опишите задачу" required></textarea>
      <input type="hidden" name="source" value="contact-page" />
      <button class="cta-button" type="submit">Отправить запрос</button>
      <div class="form-status" role="status" aria-live="polite"></div>
      <p class="form-note">Отправляя форму, вы подтверждаете согласие на обработку персональных данных и принимаете <a href="/privacy/">Политику конфиденциальности</a>.</p>
    </form>
  </div>
</section>`;

export const metadata: Metadata = {
  title: 'Контакты Bennu Labs',
  description: 'Свяжитесь с командой Bennu Labs: консультации, пилоты и партнерство.',
  alternates: { canonical: 'https://bennulabs.online/contact' }
};

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: mainContent }} />;
}
