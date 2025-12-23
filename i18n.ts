// i18n.ts
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['fr', 'en'] as const;

export default getRequestConfig(async ({ requestLocale }) => { // Utilisation de requestLocale
    // On attend que la locale soit résolue
    const locale = await requestLocale;

    // Vérification de sécurité
    if (!locale || !locales.includes(locale as any)) {
        notFound();
    }

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default
    };
});