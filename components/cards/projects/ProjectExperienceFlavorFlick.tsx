"use client";

import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack";
import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront";

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
    );
}

export function ProjectFlavorFlickBack() {
    return (
        <ExperienceCardBack
            highlights={[
                "Developed a Material Design Flutter app that parses an OpenRice user's public bookmarks and presents restaurants as swipeable cards, sorted by proximity via device location and Google Maps API.",
            ]}
            images={[{ src: "/Gallery/FlavorFlick/FlavorFlick.png", alt: "FlavorFlick Home" }]}
            cardLabel="Project Experience"
        />
    );
}
