import type { Metadata } from 'next';

import { NotFoundContent } from './NotFoundContent';

export const metadata: Metadata = {
  title: 'Страница не найдена — Bennu Labs',
  description: 'Запрошенный адрес не найден. Вернитесь на главную или выберите раздел.',
};

export default function NotFoundPage() {
  return <NotFoundContent />;
}
