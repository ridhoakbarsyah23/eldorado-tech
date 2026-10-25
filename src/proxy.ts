import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match localized and unprefixed routes. Unprefixed routes are required when
  // the default locale uses `localePrefix: 'as-needed'`.
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
