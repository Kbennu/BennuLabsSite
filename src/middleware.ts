import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const PRIMARY_HOST = 'bennulabs.online';

function normalizeHtmlPath(pathname: string) {
  if (pathname.endsWith('/index.html')) {
    return pathname.replace(/\/index\.html$/, '/');
  }

  if (pathname.endsWith('.html')) {
    return pathname.replace(/\.html$/, '');
  }

  return pathname;
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const normalizedPathname = normalizeHtmlPath(url.pathname);
  const host = request.headers.get('host') ?? '';

  let needsRedirect = false;

  if (normalizedPathname !== url.pathname) {
    url.pathname = normalizedPathname;
    needsRedirect = true;
  }

  if (host === `www.${PRIMARY_HOST}`) {
    url.hostname = PRIMARY_HOST;
    needsRedirect = true;
  }

  if (needsRedirect) {
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/|api/|assets/|favicon.ico|robots.txt|sitemap.xml).*)'
  ]
};
