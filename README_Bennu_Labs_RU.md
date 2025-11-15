# Bennu Labs · Bots · Data · AI · Design

*Telegram-first студия. Делаем рабочие инструменты за дни, а не месяцы.*

---

## Содержание

1. [Миссия](#миссия)  
2. [Вертикали (лаборатории)](#вертикали-лаборатории)  
3. [Страницы сайта](#страницы-сайта)  
4. [Технологии](#технологии)  
5. [Структура репозитория](#структура-репозитория)  
6. [Контент и прайсбук](#контент-и-прайсбук)  
7. [Сборка и запуск](#сборка-и-запуск)  
8. [Деплой и домены](#деплой-и-домены)  
9. [Дизайн-система](#дизайн-система)  
10. [SEO и мета](#seo-и-мета)  
11. [Юридические документы](#юридические-документы)  
12. [Дорожная карта](#дорожная-карта)  
13. [Contributing](#contributing)  
14. [Контакты](#контакты)  

---

## Миссия

Bennu Labs создаёт практичные боты, надёжные конвейеры данных и прикладные AI-модули, которые дают результат сразу. Полный цикл: intake → сборка → деплой → видео-демо → хэнд-офф. Параллельно развиваем собственную ИИ-мифологию (**Искорка**) и живую вселенную **Red Pill Protocol**.

---

## Вертикали (лаборатории)

1. **Боты**  
   intake/leads, booking/slots, support/tickets, paywall/subs, catalog/order.
2. **AI · «Искорка»**  
   AI-ответчик, AI-квотер (КП), бриф-рефайнер, саммари войсов, RAG Starter/Pro.
3. **Данные**  
   парсинг/мониторинги цен и вакансий, дифф-алерты в Telegram, интеграции в Sheets/Notion, отчёты.
4. **Дизайн**  
   тёмный минимал, баннеры/аватары/обложки, UI-шлифовка ботов.
5. **Обучение и исследования**  
   буткемпы, «садик Искр», методологии, препринты и разборы.
6. **ARG · Red Pill Protocol**  
   лор, фракции, сценарные матрицы, иммерсивные петли.

---

## Страницы сайта

- `/` — главная витрина и CTA «Запустить бриф».  
- `/bots` — готовые бот-продукты и пакеты.  
- `/ai` и `/ai/iskorka` — AI-модули и стабильность персон.  
- `/data` — парсинг/мониторы, интеграции и алерты.  
- `/design` — визуальные пакеты и UI-шлифовка.  
- `/academy` — обучение и исследования.  
- `/rpe` — карта вселенной Red Pill Protocol.  
- `/cases` — 3–6 кейсов: контекст → действие → результат.  
- `/pricing` — фикс-пакеты и поддержка.  
- `/about` — легенда, принципы, команда.  
- `/contact` — формы и быстрый бриф.

**Правило CTA:** на каждой странице один главный призыв и один вспомогательный.

---

## Технологии

- **Вариант A (статичный сайт)**  
  GitHub Pages или Yandex Object Storage. Чистая статика, 24/7, рублёвый биллинг в РФ.
- **Вариант B (Next.js, App Router)**  
  React + TypeScript + Tailwind + shadcn/ui + lucide-react. Контент в MDX, прайс в JSON.

i18n RU/EN, OG-картинки, sitemap/robots.

---

## Структура репозитория

Минимальный статичный вариант:

```
/site
  /assets
    /css
    /img
    /docs          # лид-магниты и PDF
  /en              # англоязычная версия
  CNAME            # кастомный домен для Pages (опционально)
  index.html
.github
  /workflows
    pages_site.yml           # деплой /site на GitHub Pages
    deploy_yandex_site.yml   # деплой /site в Yandex Object Storage (опционально)
README.md
```

Вариант Next.js (рекомендация):

```
/public
  /og
  favicon.svg
/content
  /pages      # MDX для контента
  /cases
  /academy
/config
  pricebook.json
  site.json
/src
  /app        # App Router
  /components
  /styles
  /lib
```

---

## Контент и прайсбук

**Единый источник цен:** `config/pricebook.json`. Сайт, боты и коммерческие предложения берут цифры отсюда.

Пример:

```json
{
  "bots": {
    "intake": { "lite": {"rub": 24900}, "starter": {"rub": 39900}, "pro": {"rub": 59900} }
  },
  "deploy_ru": {
    "express": {"rub": 19900},
    "lite":    {"rub": 29900},
    "std":     {"rub": 49900},
    "max":     {"rub": 119000}
  },
  "mix": {
    "lite_plus_lite": {"rub": 49900},
    "starter_plus_std": {"rub": 89900},
    "pro_plus_max": {"rub": 169000}
  },
  "support": {
    "basic_8h": {"rub": 12000},
    "std_16h":  {"rub": 22000},
    "pro_32h":  {"rub": 42000}
  }
}
```

Правила контента: один экран одна мысль, три буллета и один CTA.  
Кейсы: контекст, действие, результат в цифрах.

---

## Сборка и запуск

### Статика (быстрый старт локально)
1. Открыть `/index.html` в браузере.
2. Для локального сервера:
    ```bash
    python3 -m http.server 8080
    ```
    затем открыть `http://localhost:8080/index.html`.

### Next.js (если выбран динамический стек)
1. Установить зависимости:
   ```bash
   pnpm i
   ```
2. Запуск dev:
   ```bash
   pnpm dev
   ```
3. Продакшн:
   ```bash
   pnpm build && pnpm start
   ```

---

## Деплой и домены

### GitHub Pages (статичный)
1. Папка `/site` уже содержит статику.  
2. Включить Pages: Settings → Pages → Source = GitHub Actions.  
3. Workflow `.github/workflows/pages_site.yml` деплоит только `/site`.  
4. Кастомный домен: файл `site/CNAME` и CNAME у регистратора.

### Yandex Object Storage (статичный, РФ)
1. Создать бакет, включить Static website hosting.  
2. Добавить в репозиторий Secrets:  
   `YOS_ACCESS_KEY_ID`, `YOS_SECRET_ACCESS_KEY`, `YOS_BUCKET`, `YOS_ENDPOINT`.  
3. Запустить `.github/workflows/deploy_yandex_site.yml`.  
4. Подключить домен через Yandex Certificate Manager.

### Next.js (динамический)
1. RU-облако: Yandex Cloud (Compute + ALB или Serverless Containers), Timeweb Cloud, Selectel.  
2. Env для сайта:  
   `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_TG_BOT=@BennuLabIntakeBot`.  
3. CI/CD: GitHub Actions → container registry → деплой через IaC/OpenTofu или серверные манифесты.

---

## Дизайн-система

1. Тон: спокойная сила, тёмный минимал, «кибер-реальность без неона».  
2. Палитра: `#0B0B0C` · глубокий индиго · стальной акцент · тонкий бордовый глитч.  
3. Компоненты: крупные заголовки, мягкие тени, радиусы 2xl, стеклянные карточки.  
4. Маркеры: `3:33`, `137·108`, `[FOCUS: BENNU]`, лёгкие «сбои».  
5. Изображения: единый стиль баннеров, OG-картинки на каждую страницу.

---

## SEO и мета

1. `robots.txt` и `sitemap.xml`.  
2. Правильные `title` и `meta description`.  
3. OG-изображения для ключевых страниц.  
4. Лёгкая разметка Schema.org: Organization, Product, Article.  
5. 404/500 в фирменном стиле.

---

## Юридические документы

1. Terms of Service, Statement of Work, NDA, DPA, SLA.  
2. Политика оплаты и пауз: предоплата 70 процентов, пост-оплата 30 процентов, возвратов нет, при паузе удержание 30 процентов от остатка.  
3. Дисклеймеры для медиа-материалов и исследований.  
4. Политика парсинга: соблюдение robots.txt и условий площадок, персональные данные не собираем.

---

## Дорожная карта

- [ ] Развернуть `/bots` `/ai` `/ai/iskorka` `/data` `/design`  
- [ ] Добавить `/academy` `/rpe` `/cases` `/pricing` `/about` `/contact`  
- [ ] Импортировать `config/pricebook.json` в сайт  
- [ ] Сверстать 3 кейса с метриками  
- [ ] Настроить i18n RU/EN и OG-графику  
- [ ] Подключить CTA к @BennuLabIntakeBot (deeplink + UTM)  
- [ ] Собрать PDF-лидмагниты и автовыдачу через бота

---

## Contributing

1. Контент в MDX — папка `/content`.  
2. Компоненты — `src/components`, стили — Tailwind.  
3. Прайс — только через `config/pricebook.json`.  
4. Merge через PR с превью-деплоем.

---

## Контакты

- Telegram: **@BennuLabIntakeBot** для брифа  
- Сайт: **https://bennulabs.online**  
- Email: **hello@bennulabs.online**

**Лицензия:** Proprietary. Использование контента и кода по согласованию с Bennu Labs.
