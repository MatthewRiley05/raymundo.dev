"use client"

import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront"
import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack"

export function WorkExperienceExpFront() {
    return (
        <ExperienceCardFront
            logo="/logos/EXP.png"
            title="EXP.is | Sleeep Technologies Ltd."
            link="https://www.exp.is/"
            subtitle="Software Design Assistant"
            date="March 2025 - August 2025"
            location="Hong Kong SAR"
            tags={["Flutter", "Dart"]}
            cardLabel="Work Experience"
        />
    )
}

export function WorkExperienceExpBack() {
    return (
        <ExperienceCardBack
            highlights={[
                "Developed a companion Flutter app for a conversational AI device aimed at elderly users.",
                "Supported market research to guide product direction and feature priorities.",
            ]}
            cardLabel="Work Experience"
        />
    )
}