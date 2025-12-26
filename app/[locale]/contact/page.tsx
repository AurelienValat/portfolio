// app/[locale]/contact/page.tsx

import { getTranslations } from 'next-intl/server';
import { ContactForm } from '@/components/ContactForm';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {

    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Contact' });


    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            {/* En-tête de la page */}
            <div className="max-w-2xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-extrabold mb-4">{t('title')}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    {t('description')}
                </p>
            </div>

            {/* Conteneur du formulaire */}
            <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
                <ContactForm />
            </div>
        </div>
    )
}
