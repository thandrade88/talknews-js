import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { withAuth } from 'next-auth/middleware';
import { NextFetchEvent, NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

const adminMiddleware = withAuth({
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return adminMiddleware(request as any, event);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all paths except /api, /_next, /_vercel, and static files
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
  ],
};
