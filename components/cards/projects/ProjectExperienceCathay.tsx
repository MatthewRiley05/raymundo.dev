"use client"

import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront"
import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack"

export function ProjectCathayFront() {
    return (
        <ExperienceCardFront
            title="Cathay Hackathon 2024 | CargoVision"
            link="https://github.com/JaayTeeee/cathay_personalize"
            subtitle="Finalist"
            date="November 2024"
            location="Hong Kong SAR"
            tags={["React"]}
            cardLabel="Project Experience"
        />
    )
}

export function ProjectCathayBack() {
    return (
        <ExperienceCardBack
            highlights={[
                "Built an OCR-based solution to recover damaged shipping-label barcodes during a 24-hour, software-focused hackathon.",
                "Team-based, online event; explored mobile-first flows and alternatives within the competition constraints."
            ]}
            images={[
                { src: "/Gallery/CargoVision/CargoVision_Scanner.png", alt: "CargoVision scanner" },
            ]}
            cardLabel="Project Experience"
        />
    )
}