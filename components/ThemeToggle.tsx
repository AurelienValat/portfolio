"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // On attend que le composant soit monté pour éviter les erreurs d'affichage
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="p-2 h-9 w-9" /> // le temps du chargement

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
        >
            {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
                <Moon className="h-5 w-5 text-slate-700" />
            )}
        </button>
    )
}