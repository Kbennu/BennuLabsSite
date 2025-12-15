import type { Metadata } from 'next';

const mainContent = `<section class="hero">
  <div>
    <div class="tagline">Privacy</div>
    <h1>Политика конфиденциальности</h1>
    <p>Мы обрабатываем только те персональные данные, которые нужны для связи по вашим запросам, и сохраняем их в защищённых системах.</p>
  </div>
</section>
<section class="section">
  <div class="section-header">
    <h2>Какие данные мы получаем</h2>
    <p>Через форму на странице <a href="/contact/">/contact</a> мы собираем имя, email, текст сообщения и источник обращения.</p>
  </div>
  <div class="card">
    <h3>Цели обработки</h3>
    <ul>
      <li>Ответ на коммерческие запросы и организация демонстраций.</li>
      <li>Подготовка индивидуальных предложений и пилотов.</li>
      <li>Связь по вопросам партнёрства и обучения.</li>
    </ul>
  </div>
  <div class="card" style="margin-top:24px;">
    <h3>Правовое основание</h3>
    <p>Согласие пользователя, выраженное через отправку формы и подтверждённое подписью под формой.</p>
  </div>
</section>
<section class="section">
  <div class="section-header">
    <h2>Хранение и передача</h2>
    <p>Данные поступают в корпоративный Telegram/CRM через Formspree, который выступает нашим оператором обработки.</p>
  </div>
  <div class="grid">
    <div class="card">
      <h3>Инфраструктура</h3>
      <p>Formspree (США) передаёт данные по защищённому HTTPS-каналу. Мы выгружаем обращения в закрытые каналы Telegram и систему задач.</p>
    </div>
    <div class="card">
      <h3>Срок хранения</h3>
      <p>До 24 месяцев или до отзыва согласия. После закрытия запроса записи обезличиваются или удаляются.</p>
    </div>
    <div class="card">
      <h3>Права пользователя</h3>
      <ul>
        <li>Получить копию предоставленных данных.</li>
        <li>Запросить актуализацию или удаление.</li>
        <li>Отозвать согласие на обработку.</li>
      </ul>
    </div>
  </div>
</section>
<section class="section">
  <div class="section-header">
    <h2>Cookies и локальное хранение</h2>
    <p>Мы используем только технические cookies, необходимые для стабильной работы сайта, и не размещаем маркетинговые трекеры.</p>
  </div>
  <div class="grid">
    <div class="card">
      <h3>Типы и цели</h3>
      <ul>
        <li><strong>Функциональные</strong> — сохраняют состояние меню, выбор языка и защищают от спама в формах.</li>
        <li><strong>Сессионные</strong> — помогают корректно отображать страницы и удаляются после закрытия браузера.</li>
        <li><strong>Аналитические</strong> — не используются; мы не ведём поведенческий или маркетинговый трекинг.</li>
      </ul>
    </div>
    <div class="card">
      <h3>Сроки хранения</h3>
      <p>Сессионные cookies живут до завершения сессии браузера, функциональные — до 12 месяцев для сохранения пользовательских настроек.</p>
    </div>
    <div class="card">
      <h3>Как отключить</h3>
      <p>Вы можете удалить или заблокировать cookies через настройки браузера: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a>, <a href="https://support.apple.com/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a>, <a href="https://support.mozilla.org/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Firefox</a>, <a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a>. Баннер согласия появляется при первом визите, если решение ещё не сохранено в браузере: кнопка «Согласен» или «Отказаться» скрывает баннер и сохраняет выбор в localStorage (с резервным хранением в памяти), а ссылка ведёт в раздел «Политика конфиденциальности».</p>
    </div>
  </div>
</section>
<section class="section">
  <div class="card">
    <h3>Как с нами связаться</h3>
    <p class="contact-links contact-inline contact-inline-compact">
      <a href="https://t.me/BennuLabIntakeBot" target="_blank" rel="noopener noreferrer">Бот Bennu Labs</a>
      <span aria-hidden="true">·</span>
      <a href="https://t.me/BennuLabs" target="_blank" rel="noopener noreferrer">Канал Bennu Labs (RU)</a>
      <span aria-hidden="true">·</span>
      <a href="https://t.me/BennuLabs_global" target="_blank" rel="noopener noreferrer">Global channel (EN)</a>
    </p>
    <p>Мы ответим на запросы по персональным данным в течение 10 рабочих дней.</p>
  </div>
</section>`;

export const metadata: Metadata = {
  title: 'Политика конфиденциальности Bennu Labs',
  description: 'Политика конфиденциальности Bennu Labs: какие данные собираются, зачем и как защищаются.',
  alternates: { canonical: 'https://bennulabs.online/privacy' }
};

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: mainContent }} />;
}
