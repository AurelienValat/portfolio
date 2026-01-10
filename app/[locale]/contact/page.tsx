// app/[locale]/contact/page.tsx
import { getTranslations } from 'next-intl/server';
import { ContactForm } from '@/components/ContactForm';
import { Github, Linkedin } from 'lucide-react';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Contact' });

    const socials = [
        {
            name: t('linkedin'),
            href: "https://linkedin.com/in/aurélien-v-90942b2b5",
            icon: <Linkedin size={18} />,
            color: "hover:text-blue-600 hover:border-blue-600"
        },
        {
            name: t('github'),
            href: "https://github.com/AurelienValat",
            icon: <Github size={18} />,
            color: "hover:text-slate-900 dark:hover:text-white hover:border-slate-900 dark:hover:border-white"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            {/* En-tête de la page */}
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h1 className="text-4xl font-extrabold mb-4">{t('title')}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    {t('description')}
                </p>
            </div>

            <div className="w-full max-w-xl space-y-10">
                {/* Section Réseaux Sociaux*/}
                <div className="flex flex-wrap justify-center gap-3">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm font-medium transition-all duration-300 shadow-sm ${social.color}`}
                        >
                            {social.icon}
                            {social.name}
                        </a>
                    ))}
                </div>

                <div className="relative flex items-center">
                    <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                    <span className="flex-shrink mx-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                        {t('formSeparator')}
                    </span>
                    <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                </div>

                {/* Conteneur du formulaire */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}