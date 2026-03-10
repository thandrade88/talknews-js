// talknews/middleware.ts
import createIntlMiddleware from 'next-intl/middleware';
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server"; 

// 1. --- Configuration from your i18n setup ---
const locales = ['pt-BR', 'en', 'es'];
const defaultLocale = 'pt-BR';
const localePrefix = 'as-needed';

// 2. --- NextAuth Authentication Middleware ---
// This handles redirects for /admin paths when unauthenticated (to /login).
// We define it simply, relying on NextAuth's internal logic.
const authMiddleware = withAuth(
    function onSuccess(req) {
        const role = (req.nextauth.token as any)?.role;
        
        // RBAC CHECK (runs if token exists, but path starts with /admin)
        if (!['viewer', 'editor', 'admin'].includes(role)) {
            // Redirect logged-in but unauthorized users to the homepage
            return NextResponse.redirect(new URL('/', req.url));
        }
        return NextResponse.next();
    },
    {
        // This is the CRITICAL part: it tells NextAuth where to redirect
        // unauthenticated users who try to access a protected route (like /admin).
        pages: {
            signIn: '/login', 
        }
    }
);

// 3. --- Next-Intl Localization Middleware ---
// This handles redirects and locale setting for public paths.
const intlMiddleware = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix,
    // Exclude the fixed paths from localization logic entirely
    pathnames: {
        '/admin': {
            'pt-BR': '/admin',
            'en': '/admin',
            'es': '/admin'
        },
        '/login': {
            'pt-BR': '/login',
            'en': '/login',
            'es': '/login'
        }
    }
});

// 4. --- Main Execution Logic ---
export async function proxy(req: NextRequest, res: NextResponse) {
    const pathname = req.nextUrl.pathname;

    // A. EXCLUSION CHECK: If the request is for the secure admin area, use authMiddleware.
    // This function will handle the authentication check and redirect to /login if needed.
    if (pathname.startsWith("/admin")) {
        // We cast the request to 'any' to bypass the complex type errors that arise 
        // from mixing NextAuth with newer Next.js versions.
        return authMiddleware(req as any, res as any);
    }
    
    // B. SECONDARY EXCLUSION: If the path is /login, let it pass through immediately.
    // This is technically covered by the pathnames property above, but serves as a quick exit.
    if (pathname === '/login') {
        return NextResponse.next();
    }

    // C. DEFAULT: Apply localization logic to all other public routes.
    return intlMiddleware(req as any);
}

// 5. --- Matcher Config ---
export const config = {
    // Match all paths except API routes and static assets.
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.svg|sanity).*)']
};