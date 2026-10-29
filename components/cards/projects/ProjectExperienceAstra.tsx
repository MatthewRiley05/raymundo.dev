"use client";

import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack";
import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront";

export function ProjectAstraFront() {
    return (
        <ExperienceCardFront
            title="Astra"
            link="https://github.com/MatthewRiley05/Astra"
            subtitle="Artificial Intelligence Engineer"
            date="November 2025"
            location="Hong Kong SAR"
            tags={["Docker", "Python", "API", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "TTS"]}
            cardLabel="Project Experience"
        />
    );
}

export function ProjectAstraBack() {
    return (
        <ExperienceCardBack
            highlights={[
                "Building a full-stack social platform for fitness enthusiasts to track gym visits and share experiences.",
            ]}
            images={[
                { src: "/Gallery/Astra/Astra_Home.png", alt: "Astra Home" },
                { src: "/Gallery/Astra/Astra_Chat.png", alt: "Astra Chat" },
            ]}
            cardLabel="Project Experience"
        />
    );
}
