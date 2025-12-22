// app/page.tsx
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
            <section className="max-w-3xl text-center">
                {/* Badge pour recherche alternance */}
                <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
          Disponible pour une alternance
        </span>

                <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
                    <span className="text-blue-600 ">Aurélien Valat</span>
                </h1>

                <p className="mt-6 text-lg   leading-8 text-slate-600">
                    Étudiant en Licence 3 MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)
                </p>

                <div className="flex items-center justify-center gap-4 mt-10">
                    <Link
                        href="/projects"
                        className="px-6 py-3 text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors font-medium"
                    >
                        Voir mes projets
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                    >
                        Me contacter
                    </Link>
                </div>
            </section>

        </div>
    );
}