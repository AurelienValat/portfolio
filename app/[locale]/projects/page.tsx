// app/[locale]/projects/page.tsx
import { getTranslations } from 'next-intl/server';
import { ProjectCard } from '@/components/ProjectCard';

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Projects' });

    //TODO mettre les dates aux projets
    //TODO mettre un tri (par tags, dates ...)


    // On transforme l'objet JSON en tableau pour mapper dessus
    // Ajouter chaque nouveau projet en + du .json
    const projectKeys = ['portfolio', 'project2'] as const;

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold mb-12 text-center">{t('title')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectKeys.map((key) => (
                    <ProjectCard
                        key={key}
                        title={t(`items.${key}.title`)}
                        description={t(`items.${key}.description`)}
                        tags={t.raw(`items.${key}.tags`)}
                        linkText={t('viewProject')}
                        href={t(`items.${key}.link`)}
                        imageSrc={t(`items.${key}.image`)}
                    />
                ))}
            </div>
        </div>
    );
}