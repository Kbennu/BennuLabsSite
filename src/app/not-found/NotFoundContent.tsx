import Link from 'next/link';

export function NotFoundContent() {
  return (
    <main style={{ padding: '96px 24px', textAlign: 'center' }}>
      <p style={{ color: '#888', marginBottom: '12px' }}>404</p>
      <h1 style={{ fontSize: '28px', marginBottom: '16px' }}>
        Кажется, такой страницы у нас нет
      </h1>
      <p style={{ marginBottom: '24px' }}>
        Проверьте адрес или перейдите на главную страницу — мы поможем найти нужный раздел.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link className="cta-button" href="/">
          На главную
        </Link>
        <Link className="deeplink-cta" href="/pricing">
          Тарифы платформы
        </Link>
      </div>
    </main>
  );
}

export default NotFoundContent;
