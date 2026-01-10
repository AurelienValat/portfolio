"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from '../ThemeToggle'
import { LocaleSwitcher } from './LocaleSwitcher'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'

export function Navbar() {
    const t = useTranslations('Navbar');
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: t('home') },
        { href: '/projects', label: t('projects') },
        { href: '/contact', label: t('contact') },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold tracking-tighter" onClick={() => setIsOpen(false)}>
                            Aurélien<span className="text-blue-600"> VALAT</span>
                        </Link>
                    </div>

                    {/* Liens Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-blue-600 transition-colors">
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-800">
                            <LocaleSwitcher />
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Contrôles Mobile*/}
                    <div className="md:hidden flex items-center gap-3">
                        <LocaleSwitcher />
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile Déroulant */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-4 text-lg font-semibold border-b border-slate-50 dark:border-slate-900 last:border-none active:bg-slate-50 dark:active:bg-slate-900 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}