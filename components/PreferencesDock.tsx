"use client"

import ThemeToggle from "./ThemeToggle"

export default function PreferencesDock() {
    return (
        <div className="fixed top-2 right-2 sm:top-3 sm:right-4 z-50 flex gap-1.5 sm:gap-2 pointer-events-auto">
            <ThemeToggle />
        </div>
    )
}
