"use client"

import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront"
import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack"

export function ProjectFlavorFlickFront() {
    return (
        <ExperienceCardFront
            title="FlavorFlick"
            link="https://github.com/MatthewRiley05/FlavorFlick"
            subtitle="Full-Stack Developer"
            date="January 2026"
            location="Hong Kong SAR"
            tags={["Flutter", "Dart", "Google Maps API"]}
            cardLabel="Project Experience"
        />
    )
}

export function ProjectFlavorFlickBack() {
    return (
        <ExperienceCardBack
            highlights={[
                "Developed a Material Design Flutter app that parses an OpenRice user's public bookmarks and presents restaurants as swipeable cards, sorted by proximity via device location and Google Maps API.",
            ]}
            cardLabel="Project Experience"
        />
    )
}