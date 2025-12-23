// proxy.ts
import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
    // Langues supportées
    locales: ['fr', 'en'],
    // Langue par défaut
    defaultLocale: 'fr'
});

export const config = {
    // On ignore les dossiers internes de Next.js et les images
    matcher: ['/', '/(fr|en)/:path*']
};