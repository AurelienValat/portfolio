// app/[locale]/page.tsx
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Hero' });

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
            <section className="max-w-3xl text-center">
                <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                    {t('badge')}
                </span>

                <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
                    <span className="text-blue-600">Aurélien Valat</span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                    {t('description')}
                </p>

                <div className="flex items-center justify-center gap-4 mt-10">
                    <Link
                        href="/projects"
                        className="px-6 py-3 text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors font-medium"
                    >
                        {t('projectsBtn')}
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors font-medium"
                    >
                        {t('contactBtn')}
                    </Link>
                </div>
            </section>
        </div>
    );
}