"use client"

import React, { useState } from "react";
import { useTranslations} from 'next-intl';

export function ContactForm() {

    const t = useTranslations('Contact');

    // Données du form
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    //pour suivre le statut de l'envoi
    const [status] = useState<"idle" | "loading" | "success" | "error">("idle");

    // Cette fonction s'exécute à chaque fois qu'une touche est pressée dans un champ
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        // On extrait 'name' et 'value' (ce qui est tapé) de l'élément
        const {name, value} = e.target;

        // On met à jour l'objet formData
        setFormData((prev) => ({
            ...prev,          // On garde toutes les autres valeurs intactes
            [name]: value,    // On met à jour uniquement le champ qui a changé
        }));
    };

    return (
        <form className="space-y-6 max-w-xl mx-auto">
            {/* Champ Nom */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('name')}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('placeholderName')}
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
            </div>

            {/* Champ Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('email')}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('placeholderEmail')}
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
            </div>

            {/* Champ Objet */}
            <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {t('subject')}
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('placeholderSubject')}
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
            </div>

            {/* Champ Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('message')}
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('placeholderMessage')}
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed rounded-lg font-bold transition-colors shadow-lg shadow-blue-600/20"
            >
                {status === 'loading' ? t('sending') : t('send')}
            </button>

            {/* Messages de retour */}
            {status === 'success' && (
                <p className="text-green-600 font-medium text-center">{t('success')}</p>
            )}
            {status === 'error' && (
                <p className="text-red-600 font-medium text-center">{t('error')}</p>
            )}
        </form>

    );
}