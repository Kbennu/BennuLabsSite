'use client';

import Link from 'next/link';
import { useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import CookieBanner from './CookieBanner';

const RU_NAV = [
  { href: '/bots', label: 'Боты' },
  { href: '/ai', label: 'AI-платформа' },
  { href: '/data', label: 'Данные' },
  { href: '/design', label: 'Дизайн' },
  { href: '/academy', label: 'Академия' },
  { href: '/cases', label: 'Кейсы' },
  { href: '/pricing', label: 'Тарифы', cta: true },
  { href: '/en', label: 'EN' }
];

const EN_NAV = [
  { href: '/en', label: 'Home' },
  { href: '/en/pricing', label: 'Pricing' },
  { href: '/', label: 'RU' },
  { href: '/pricing', label: 'RU pricing', cta: true }
];

function useLocale() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith('/en') ?? false;

  useEffect(() => {
    const lang = isEnglish ? 'en' : 'ru';
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [isEnglish]);

  return { isEnglish };
}

export default function SiteShell({ children }: { children: ReactNode }) {
  const { isEnglish } = useLocale();
  const navItems = useMemo(() => (isEnglish ? EN_NAV : RU_NAV), [isEnglish]);

  return (
    <>
      <header>
        <div className="navbar">
          <div className="navbar-brand">
            <Link href={isEnglish ? '/en' : '/'}>
              <img src="/assets/img/logo.svg" alt={isEnglish ? 'Bennu Labs logo' : 'Логотип Bennu Labs'} />
            </Link>
            <button
              className="nav-toggle"
              type="button"
              aria-expanded="false"
              aria-controls="primary-navigation"
              aria-label={isEnglish ? 'Toggle menu' : 'Переключить меню'}
            >
              <span className="sr-only">{isEnglish ? 'Toggle menu' : 'Переключить меню'}</span>
              <span className="nav-toggle-icon" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
          <div className="navbar-actions">
            <button
              className="theme-toggle"
              type="button"
              aria-label={isEnglish ? 'Switch theme' : 'Переключить на ночную тему'}
              data-theme-toggle
              data-light-label={isEnglish ? 'Day' : undefined}
              data-dark-label={isEnglish ? 'Night' : undefined}
              data-light-aria={isEnglish ? 'Switch to day theme' : undefined}
              data-dark-aria={isEnglish ? 'Switch to night theme' : undefined}
            >
              <span className="theme-toggle-icon" aria-hidden="true"></span>
              <span className="theme-toggle-label" data-theme-toggle-label>
                {isEnglish ? 'Day' : 'День'}
              </span>
            </button>
            <nav id="primary-navigation" className="nav-links">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={item.cta ? 'cta-button' : undefined}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        {isEnglish ? (
          <div className="footer-grid">
            <div>
              <img src="/assets/img/logo.svg" alt="Bennu Labs" style={{ height: '40px', marginBottom: '12px' }} />
              <p>Architects of AI products, data platforms and experiences.</p>
            </div>
            <div>
              <h4>Contacts</h4>
              <p>
                <a href="https://t.me/BennuLabIntakeBot">Telegram bot</a>
                <br />
                <a href="https://t.me/BennuLabs_global">Global channel</a>
              </p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '8px' }}>
                <li>
                  <Link href="/cases">Case studies</Link>
                </li>
                <li>
                  <Link href="/pricing">Русский прайс</Link>
                </li>
                <li>
                  <Link href="/en/pricing">English pricing</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="footer-grid">
            <div>
              <img src="/assets/img/logo.svg" alt="Bennu Labs" style={{ height: '40px', marginBottom: '12px' }} />
              <p>AI, который работает на ваших показателях.</p>
            </div>
            <div>
              <h4>Навигация</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '8px' }}>
                <li>
                  <Link href="/pricing">Тарифы</Link>
                </li>
                <li>
                  <Link href="/contact">Контакты</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Связь</h4>
              <p>
                <a href="https://t.me/BennuLabIntakeBot" target="_blank" rel="noopener">
                  Telegram-бот
                </a>
                <br />
                <a href="https://t.me/BennuLabs" target="_blank" rel="noopener">
                  Канал Bennu Labs
                </a>
              </p>
            </div>
          </div>
        )}
        {!isEnglish && (
          <p style={{ marginTop: '32px', textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>
            © 2024 Bennu Labs. Все права защищены.
          </p>
        )}
      </footer>
      <CookieBanner />
    </>
  );
}
