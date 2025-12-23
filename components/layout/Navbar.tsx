// components/layout/Navbar.tsx
"use client"

import Link from 'next/link'
import { ThemeToggle } from '../ThemeToggle'
import { LocaleSwitcher } from './LocaleSwitcher'

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/75 dark:bg-slate-950/75 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo ou Nom */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                            Aurélien<span className="text-blue-600"> VALAT</span>
                        </Link>
                    </div>

                    {/* Liens de navigation - Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
                            Accueil
                        </Link>
                        <Link href="/projects" className="text-sm font-medium hover:text-blue-600 transition-colors">
                            Projets
                        </Link>
                        <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
                            Contact
                        </Link>

                        {/* Gestion thème sombre / clair* et langue */}
                        <div className="flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-800">
                            <LocaleSwitcher />
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Version Mobile */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        {/* Menu burger plus tard */}
                    </div>
                </div>
            </div>
        </nav>
    )
}