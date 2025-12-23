"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    const isDark = resolvedTheme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="
                size-8 sm:size-9
                flex items-center justify-center
                rounded-lg sm:rounded-xl
                bg-background/60 backdrop-blur-md
                border border-border/50
                text-foreground/80
                transition-all duration-200
                hover:bg-background/80 hover:text-foreground
                hover:border-border
                active:scale-95
                shadow-sm
            "
        >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
    )
}
