"use client"

import WorkExperienceFront from "@/components/cards/templates/WorkExperienceFront"
import WorkExperienceBack from "@/components/cards/templates/WorkExperienceBack"

export function WorkExperienceHanappFront() {
    return (
        <WorkExperienceFront
            title="Co-Founder"
            company="Hanapp"
            date="Sep 2025 - Present"
            location="Philippines"
            tags={["QuickBooks"]}
        />
    )
}

export function WorkExperienceHanappBack() {
    return (
        <WorkExperienceBack
            highlights={[
                "Digitalized bookkeeping and budgeting by transitioning fnancial records to QuickBooks Online, improving organization and accuracy.",
                "Supported pre-launch business planning through fnancial projections and analysis of early-stage monetization strategies.",
            ]}
        />
    )
}
