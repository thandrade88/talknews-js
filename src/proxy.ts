import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/__routing';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes — redirect to /login if no valid session token
  if (pathname.startsWith('/admin')) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  // Run i18n middleware for all public routes
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all paths except /api, /_next, /_vercel, and static files
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
  ],
};
