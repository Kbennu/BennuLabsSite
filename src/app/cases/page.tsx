import type { Metadata } from 'next';

const mainContent = `<section class="hero sticky-hero">
  <div>
    <div class="tagline">Case Studies</div>
    <h1>Как Bennu Labs помогает компаниям расти с AI</h1>
    <p>Подборка кейсов из ритейла, финансов, образования и технологических компаний. Все проекты измеряются по влиянию на выручку и опыт клиентов.</p>
    <p class="price-note">Все детали по пакетам и срокам — в <a href="/pricing/">разделе тарифов</a>.</p>
    <div style="display:flex; gap:16px; flex-wrap:wrap; margin-top:24px;">
      <a class="cta-button" href="https://t.me/BennuLabIntakeBot?start=mix_field">Mix Pro+Max · 169 000&nbsp;₽</a>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </div>
  </div>
  <div class="hero-illustration">
    <span>Метрики успеха</span>
    <ul>
      <li>20-40% рост конверсии обращений</li>
      <li>30% сокращение времени обработки запросов</li>
      <li>2-3x скорость запуска экспериментов</li>
    </ul>
    <a class="cta-button" href="/assets/docs/ai_strategy_playbook.pdf" download>Получить сборник</a>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Кейсы по вертикалям</h2>
    <p>Каждый кейс показывает связку AI, данных и дизайна.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>Retail: AI-консультант</h3>
      <p>Генеративный ассистент для fashion-ритейла.</p>
      <ul>
        <li>Рост конверсии в заказы на 28%</li>
        <li>Интеграция с CRM и каталогом</li>
        <li>Автогенерация рекомендаций</li>
      </ul>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900 ₽</a>
    </article>
    <article class="card">
      <h3>Fintech: AI Fabric</h3>
      <p>Платформа для обслуживания премиальных клиентов.</p>
      <ul>
        <li>RAG из знаний банковских продуктов</li>
        <li>KPI: NPS +18, снижение нагрузки на call-центр</li>
        <li>Responsible AI и аудит</li>
      </ul>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Starter · 39 900 ₽</a>
    </article>
    <article class="card">
      <h3>EdTech: Iskorka</h3>
      <p>Ассистент для создания учебных программ.</p>
      <ul>
        <li>Автогенерация курсов и заданий</li>
        <li>Анализ обратной связи студентов</li>
        <li>Интеграция с LMS</li>
      </ul>
      <a class="deeplink-cta" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Lite · 24 900 ₽</a>
    </article>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Отзывы клиентов</h2>
    <p>Нам доверяют лидеры индустрий. Вот что они говорят о сотрудничестве.</p>
  </div>
  <div class="testimonials">
    <article class="testimonial">
      <p>«Bennu Labs помогли нам запустить AI-консультанта за месяц и встроить его в оффлайн-магазины. Команда держала фокус на результатах и данных.»</p>
      <cite>Анна, директор по инновациям, Retail Group</cite>
    </article>
    <article class="testimonial">
      <p>«AI Fabric дал нам прозрачность и контроль. Теперь мы быстрее тестируем гипотезы и отслеживаем ответственность моделей.»</p>
      <cite>Илья, Chief Data Officer, Fintech Corp</cite>
    </article>
    <article class="testimonial">
      <p>«Iskorka стала центром экспериментов для продуктовых менеджеров. Мы экономим недели на подготовке воркшопов.»</p>
      <cite>Ольга, VP Product, EdTech One</cite>
    </article>
  </div>
</section>`;

export const metadata: Metadata = {
  title: 'Кейсы Bennu Labs — результаты внедрения AI',
  description: 'Посмотрите проекты Bennu Labs: внедрение AI-ботов, data fabric и сервисного дизайна.',
  alternates: { canonical: 'https://bennulabs.online/cases' }
};

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: mainContent }} />;
}
