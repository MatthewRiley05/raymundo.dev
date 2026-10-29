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
                "Led Flutter/Dart development of an elderly-focused conversational AI companion app.",
                "Owned feature delivery, refactoring, and client-driven iteration cycles.",
                "Translated client feedback into practical UI/UX improvements for elderly users.",
                "Adapted fast to GitHub, Slack/Notion workflows, and evolving requirements.",
                "Demoed live app functionality to stakeholders at the Golden Age Expo.",
            ]}
            images={[
                { src: "/Gallery/EXP/EMO_Home.png", alt: "EXP.is App Home" },
                { src: "/Gallery/EXP/EMO_Voice.png", alt: "EXP.is App Voice" },
                { src: "/Gallery/EXP/EMO_Recording.png", alt: "EXP.is App Recording" },
                { src: "/Gallery/EXP/EMO_AI.png", alt: "EXP.is App AI" },
                { src: "/Gallery/EXP/EMO_Radio.png", alt: "EXP.is App Radio" },
            ]}
            cardLabel="Work Experience"
        />
    )
}