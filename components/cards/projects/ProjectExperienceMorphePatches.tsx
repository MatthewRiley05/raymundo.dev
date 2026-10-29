"use client";

import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack";
import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront";

export function ProjectMorphePatchesFront() {
    return (
        <ExperienceCardFront
            title="Morphe Patches"
            link="https://github.com/MatthewRiley05/Machu-Morphe-Patches"
            subtitle=""
            date="November 2026"
            location="Hong Kong SAR"
            tags={[""]}
            cardLabel="Project Experience"
        />
    );
}

export function ProjectMorphePatchesBack() {
    return (
        <ExperienceCardBack
            highlights={[""]}
            images={[{ src: "/Gallery/Morphe/Morphe.mp4", alt: "Morphe Patches" }]}
            cardLabel="Project Experience"
        />
    );
}
