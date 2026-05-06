"use client"

import WorkExperienceFront from "@/components/cards/templates/WorkExperienceFront"
import WorkExperienceBack from "@/components/cards/templates/WorkExperienceBack"

export function WorkExperienceBonbonFront() {
    return (
        <WorkExperienceFront
            title="Software Engineer Intern"
            company="Bonbon Robotics"
            date="Jul 2024 - August 2024"
            location="Hong Kong SAR"
            tags={["Python"]}
        />
    )
}

export function WorkExperienceBonbonBack() {
    return (
        <WorkExperienceBack
            highlights={[
                "Developed algorithms to calculate dynamic drone coordinates for variable feet sizes and formations.",
                "Developed embedded software for an educational robot car, supporting interactive learning use cases.",
            ]}
        />
    )
}
