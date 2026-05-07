"use client"

import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront"
import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack"

export function WorkExperienceExpFront() {
    return (
        <ExperienceCardFront
            title="Software Design Assistant"
            subtitle="EXP.is | Sleeep Technologies Ltd."
            date="Mar 2025 - Aug 2025"
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