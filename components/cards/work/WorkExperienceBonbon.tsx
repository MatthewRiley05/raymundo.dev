"use client"

import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront"
import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack"

export function WorkExperienceBonbonFront() {
    return (
        <ExperienceCardFront
            logo="/logos/Bonbon.png"
            title="Bonbon Robotics"
            link="https://www.bonbonrobotics.com/"
            subtitle="Software Engineering Intern"
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
                "Programmed embedded software for an educational robot car, linking hardware and interactive logic.",
                "Designed scalable algorithms for real-time drone coordinates across variable fleet formations.",
            ]}
            images={[
                { src: "/Gallery/Bonbon/Drone_Coordinate_System.png", alt: "Drone Coordinate System" },
            ]}
            cardLabel="Work Experience"
        />
    )
}