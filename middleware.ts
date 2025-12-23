// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
    locales: locales,
    defaultLocale: 'fr',
    // Recommandé pour éviter les problèmes de redirection infinie
    localePrefix: 'always'
});

export const config = {
    // On accepte tout sauf l'api, les fichiers statiques (_next) et les images
    matcher: ['/((?!api|_next|.*\\..*).*)']};