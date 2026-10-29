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
            tags={["Android", "Java", "Kotlin", "Decompile", "Patch", "Reverse Engineering"]}
            cardLabel="Project Experience"
        />
    );
}

export function ProjectMorphePatchesBack() {
    return (
        <ExperienceCardBack
            highlights={[
                "Patched a live wallpaper application to provide compatibility with the latest Android versions, ensuring continued functionality and user experience.",
            ]}
            images={[
                {
                    type: "video",
                    src: "/Gallery/Morphe/Morphe.mp4",
                    poster: "/Gallery/Morphe/poster.jpg",
                    width: 1344,
                    height: 2992,
                    alt: "Morphe Patches",
                },
            ]}
            cardLabel="Project Experience"
        />
    );
}
