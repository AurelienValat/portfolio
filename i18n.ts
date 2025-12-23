// i18n.ts
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// On définit nos langues supportées
export const locales = ['fr', 'en'] as const;

export default getRequestConfig(async ({ locale }) => {
    // On attend la locale
    const resolvedLocale = await locale;

    // Si resolvedLocale est undefined ou n'est pas dans notre liste, on renvoie une erreur 404
    if (!resolvedLocale || !locales.includes(resolvedLocale as any)) {
        notFound();
    }

    return {
        // On passe la locale confirmée à next-intl
        locale: resolvedLocale,
        messages: (await import(`./messages/${resolvedLocale}.json`)).default
    };
});