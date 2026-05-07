"use client"

import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront"
import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack"

export function WorkExperienceHanappFront() {
    return (
        <ExperienceCardFront
            title="Co-Founder"
            subtitle="Hanapp"
            date="Sep 2025 - Present"
            location="Philippines"
            tags={["QuickBooks"]}
            cardLabel="Work Experience"
        />
    )
}

export function WorkExperienceHanappBack() {
    return (
        <ExperienceCardBack
            highlights={[
                "Digitalized bookkeeping and budgeting by transitioning fnancial records to QuickBooks Online, improving organization and accuracy.",
                "Supported pre-launch business planning through fnancial projections and analysis of early-stage monetization strategies.",
            ]}
            cardLabel="Work Experience"
        />
    )
}