"use client"

import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront"
import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack"

export function WorkExperienceBonbonFront() {
    return (
        <ExperienceCardFront
            title="Software Engineer Intern"
            subtitle="Bonbon Robotics"
            date="July 2024 - August 2024"
            location="Hong Kong SAR"
            tags={["Python"]}
            cardLabel="Work Experience"
        />
    )
}

export function WorkExperienceBonbonBack() {
    return (
        <ExperienceCardBack
            highlights={[
                "Developed algorithms to calculate dynamic drone coordinates for variable feet sizes and formations.",
                "Developed embedded software for an educational robot car, supporting interactive learning use cases.",
            ]}
            cardLabel="Work Experience"
        />
    )
}