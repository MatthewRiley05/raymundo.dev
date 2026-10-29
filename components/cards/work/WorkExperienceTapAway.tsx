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
                "Architected and built the frontend for a central administrative dashboard using React and TypeScript, enabling real-time lifecycle tracking of reusable assets across circular economy supply chains.",
                "Designed dynamic data visualization interfaces to monitor event-level recycling, asset turnover, and ESG metrics.",
                "Helping beverage clients track container flows and mitigate regulatory levy fees.",
                "Collaborated with on-site operations partners to integrate asset-tracking workflows and produced technical product demonstration media to support enterprise pilot proposals with major beverage distributors.",
                "Represented TapAway at ReThink HK 2026, engaging with industry professionals and visitors to communicate the company’s circular economy solutions and reusable asset-tracking mission.",
            ]}
            images={[{ src: "/Gallery/EXP/EMO_Home.png", alt: "EXP.is App Home" }]}
            cardLabel="Work Experience"
        />
    );
}
