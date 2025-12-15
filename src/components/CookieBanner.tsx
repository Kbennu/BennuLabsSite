'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'bennu-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      saved = null;
    }

    if (saved === 'accepted' || saved === 'declined') {
      setVisible(false);
      return;
    }

    setVisible(true);
  }, []);

  const handleChoice = (value: string) => () => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (error) {
      // ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="cookie-banner" data-cookie-banner>
      <div className="cookie-banner__text">
        <p>
          Мы используем технические cookies, чтобы сайт работал корректно и быстрее загружал данные. Вы можете согласиться или
          отказаться — выбор сохранится в вашем браузере.
        </p>
        <a className="cookie-banner__link" href="/privacy/">
          Подробнее в политике конфиденциальности
        </a>
      </div>
      <div className="cookie-banner__actions">
        <button className="cookie-banner__button" type="button" data-cookie-accept onClick={handleChoice('accepted')}>
          Согласен
        </button>
        <button
          className="cookie-banner__button cookie-banner__button--secondary"
          type="button"
          data-cookie-decline
          onClick={handleChoice('declined')}
        >
          Отказаться
        </button>
      </div>
    </div>
  );
}
