"use client"

import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront"
import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack"

export function ProjectGymSagaFront() {
    return (
        <ExperienceCardFront
            title="GymSaga"
            subtitle="Full-Stack Developer"
            date="Present"
            location="Hong Kong SAR"
            tags={["TypeScript", "React", "Next.js", "Node.js", "Express.js", "MongoDB"]}
            cardLabel="Project Experience"
        />
    )
}

export function ProjectGymSagaBack() {
    return (
        <ExperienceCardBack
            highlights={[
                "Building a full-stack social platform for fitness enthusiasts to track gym visits and share experiences.",
            ]}
            cardLabel="Project Experience"
        />
    )
}