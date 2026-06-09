"use client"

import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront"
import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack"

export function WorkExperienceBonbonFront() {
    return (
        <ExperienceCardFront
            logo="/logos/Bonbon.png"
            title="Bonbon Robotics"
            link="https://www.bonbonrobotics.com/"
            subtitle="Software Engineer Intern"
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
            images={[
                { src: "/Gallery/Bonbon/Drone_Coordinate_System.png", alt: "Drone Coordinate System" },
            ]}
            cardLabel="Work Experience"
        />
    )
}