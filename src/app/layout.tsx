import type { Metadata } from 'next';
import Script from 'next/script';
import SiteShell from '@/components/SiteShell';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bennu Labs',
  description: 'Bennu Labs создает AI-ботов, data fabric и сервисный дизайн.',
  metadataBase: new URL('https://bennulabs.online')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/assets/img/logo.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
        <Script src="/assets/js/theme.js" type="module" strategy="afterInteractive" />
        <Script src="/assets/js/theme.legacy.js" noModule strategy="afterInteractive" />
        <Script src="/assets/js/nav.js" type="module" strategy="afterInteractive" />
        <Script src="/assets/js/nav.legacy.js" noModule strategy="afterInteractive" />
        <Script
          src="/assets/js/pricing.js"
          data-pricebook="/assets/data/pricebook.ru.json"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
