import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['id', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'id',
  
  // Keep URLs explicit and stable for both supported languages.
  localePrefix: 'always',

  // Disable automatic locale detection from browser headers
  // This ensures the site always loads in Indonesian first
  localeDetection: false
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
