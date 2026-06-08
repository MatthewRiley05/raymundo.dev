"use client"

import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront"
import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack"

export function ProjectGymSagaFront() {
    return (
        <ExperienceCardFront
            title="Astra"
            subtitle="Artificial Intelligence Engineer"
            date="November 2025"
            location="Hong Kong SAR"
            tags={["Docker", "Python", "API", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "TTS"]}
            cardLabel="Project Experience"
        />
    )
}

export function ProjectGymSagaBack() {
    return (
        <ExperienceCardBack
            highlights={[
                "Building a full-stack social platform for fitness enthusiasts to track gym visits and share experiences.",
            ]}
            cardLabel="Project Experience"
        />
    )
}