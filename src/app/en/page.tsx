import type { Metadata } from 'next';

const mainContent = `<section class="hero">
  <div>
    <div class="tagline">Bennu Labs</div>
    <h1>Telegram AI intake + RU deploy in working days</h1>
    <p>We combine AI strategy, design, data fabric and engineering so your team can launch Telegram agents, automate ops and deploy to VK Cloud, Selectel, MTS Cloud or hybrid contours without procurement delays.</p>
    <p class="price-note">Full package breakdown lives on the <a href="/en/pricing">pricing page</a>.</p>
    <div style="display:flex; gap:16px; flex-wrap:wrap; margin-top:24px;">
      <a class="cta-button" data-package-link="dev_lite" data-package-template="{title} · {price} / {rd}" href="https://t.me/BennuLabIntakeBot?start=dev_lite">Dev Lite · 24&nbsp;900&nbsp;₽ / 1–2 wd</a>
      <a class="deeplink-cta" data-package-link="ru_deploy_express" data-package-template="{title} · {price} / {rd}" href="https://t.me/BennuLabIntakeBot?start=ru_deploy_express">RU Deploy Express · 19&nbsp;900&nbsp;₽ / 0.5–1 wd</a>
    </div>
  </div>
  <div class="hero-illustration">
    <span>What we deliver</span>
    <ul>
      <li>AI agents with branded voice and measurable KPIs</li>
      <li>Data fabric and knowledge pipelines for RAG</li>
      <li>Design sprints and AI Academy enablement</li>
    </ul>
    <a class="deeplink-cta" data-package-link="dev_starter" data-package-template="{title} · {price} / {rd}" href="https://t.me/BennuLabIntakeBot?start=dev_starter">Dev Starter · 39&nbsp;900&nbsp;₽ / 2–4 wd</a>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Vertical offers</h2>
    <p>Pick a vertical that matches your current priorities. Each one is synced with our Telegram bot for instant follow-up.</p>
  </div>
  <div class="grid">
    <article class="card">
      <h3>AI Assistants</h3>
      <p>Launch GPT-powered customer and employee agents.</p>
      <a class="deeplink-cta" href="/bots/">Explore bots</a>
    </article>
    <article class="card">
      <h3>AI Fabric</h3>
      <p>Modular platform for orchestration, RAG and observability.</p>
      <a class="deeplink-cta" href="/ai/">View platform</a>
    </article>
    <article class="card">
      <h3>Data Fabric</h3>
      <p>Source governance, quality pipelines and insights.</p>
      <a class="deeplink-cta" href="/data/">Assess data</a>
    </article>
    <article class="card">
      <h3>Design Studio</h3>
      <p>Service design and UX for AI-first journeys.</p>
      <a class="deeplink-cta" href="/design/">Book a sprint</a>
    </article>
  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2>Resources</h2>
    <p>Download our most requested assets to prepare your team.</p>
  </div>
  <div class="lead-magnet">
    <div>
      <h3>AI Strategy Playbook</h3>
      <p>A step-by-step guide to launch AI pilots in 3 weeks.</p>
    </div>
    <a class="cta-button" href="/assets/docs/ai_strategy_playbook.pdf" download>Download PDF</a>
  </div>
  <div class="lead-magnet">
    <div>
      <h3>Data Maturity Checklist</h3>
      <p>Five checkpoints to align data, processes and people.</p>
    </div>
    <a class="cta-button" href="/assets/docs/data_maturity_checklist.txt" download>Download checklist</a>
  </div>
</section>`;

export const metadata: Metadata = {
  title: 'Bennu Labs — AI Platform for Growth',
  description: 'Bennu Labs builds AI assistants, data fabric and service design for fast-growing teams.',
  alternates: { canonical: 'https://bennulabs.online/en' }
};

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: mainContent }} />;
}
