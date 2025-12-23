"use client"

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const newLocale = locale === 'fr' ? 'en' : 'fr';

        // On remplace le segment de langue dans l'URL actuelle
        const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPathname);
    };

    return (
        <button
            onClick={toggleLocale}
            className="px-3 py-1 text-sm font-bold border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors uppercase"
        >
            {locale === 'fr' ? 'EN' : 'FR'}
        </button>
    );
}