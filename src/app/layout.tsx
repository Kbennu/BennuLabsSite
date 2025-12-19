import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import SiteShell from '@/components/SiteShell';
import '@/assets/css/style.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bennu Labs',
  description: 'Bennu Labs создает AI-ботов, data fabric и сервисный дизайн.',
  metadataBase: new URL('https://bennulabs.online')
};

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/assets/img/logo.svg" type="image/svg+xml" />
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
