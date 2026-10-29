"use client";

import ExperienceCardBack from "@/components/cards/templates/ExperienceCardBack";
import ExperienceCardFront from "@/components/cards/templates/ExperienceCardFront";

export function WorkExperienceTapAwayFront() {
    return (
        <ExperienceCardFront
            logo="/logos/TapAway.png"
            title="TapAway Limited"
            link="https://tapaway.org/"
            subtitle="Software Engineering and Fintech Intern"
            date="July 2026 - September 2026"
            location="Hong Kong SAR"
            tags={["React", "Next.js", "TypeScript", "TailwindCSS"]}
            cardLabel="Work Experience"
        />
    );
}

export function WorkExperienceTapAwayBack() {
    return (
        <ExperienceCardBack
            highlights={[
                "Built a React/TypeScript admin dashboard for real-time reusable asset tracking.",
                "Designed data visualisations for recycling events, asset turnover, and ESG metrics.",
                "Helped beverage clients track container flows and cut regulatory levy fees.",
                "Integrated asset-tracking workflows with on-site teams and produced enterprise demo media.",
                "Represented TapAway at ReThink HK 2026, pitching its circular economy solutions.",
            ]}
            images={[{ src: "/Gallery/TapAway/TapAwayDashboard.png", alt: "TapAway Dashboard" }]}
            cardLabel="Work Experience"
        />
    );
}
