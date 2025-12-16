import type { Metadata } from 'next';

import { NotFoundContent } from '../not-found/NotFoundContent';

export const metadata: Metadata = {
  title: 'Страница не найдена — Bennu Labs',
};

export default function CatchAllNotFoundPage() {
  return <NotFoundContent />;
}
