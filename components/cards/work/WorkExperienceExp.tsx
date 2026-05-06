"use client"

import WorkExperienceFront from "@/components/cards/templates/WorkExperienceFront"
import WorkExperienceBack from "@/components/cards/templates/WorkExperienceBack"

export function WorkExperienceExpFront() {
    return (
        <WorkExperienceFront
            title="Software Design Assistant"
            company="EXP.is | Sleeep Technologies Ltd."
            date="Mar 2025 - Aug 2025"
            location="Hong Kong SAR"
            tags={["Flutter", "Dart"]}
        />
    )
}

export function WorkExperienceExpBack() {
    return (
        <WorkExperienceBack
            highlights={[
                "Developed a companion Flutter app for a conversational AI device aimed at elderly users.",
                "Supported market research to guide product direction and feature priorities.",
            ]}
        />
    )
}
