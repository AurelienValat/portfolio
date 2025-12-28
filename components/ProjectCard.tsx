"use client"

import { ExternalLink, X } from "lucide-react"
import { useState } from "react"

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    linkText: string;
    href: string;
    imageSrc: string;
    cardTitle: string;
}

export function ProjectCard({ title, description, tags, linkText, href, imageSrc, cardTitle }: ProjectProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div title={cardTitle} onClick={() => setIsModalOpen(true)} className="cursor-zoom-in group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-md font-medium bg-slate-100 dark:bg-slate-800 linear transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 hover:text-white cursor-default">
                            {tag}
                    </span>
                            ))}
                </div>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Empêche d'ouvrir l'image si on clique sur le lien
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                >
                    {linkText} <ExternalLink className="h-4 w-4" />
                </a>
            </div>

            {/* La Modale (S'affiche uniquement si isModalOpen est vrai) */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                    onClick={() => setIsModalOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <X size={32} />
                    </button>

                    <img
                        src={imageSrc}
                        alt={title}
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-in zoom-in-95 duration-200"
                    />
                </div>
            )}
        </>
    )
}