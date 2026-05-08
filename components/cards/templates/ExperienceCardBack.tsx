"use client"

import SimpleCardLayout from "@/components/stack/SimpleCardLayout"
import { TEXT_SIZE } from "@/components/stack/cardSpacing"

type Props = {
    highlights: string[]
    cardLabel?: string
}

export default function ExperienceCardBack({ highlights, cardLabel = "Experience" }: Props) {
    return (
        <SimpleCardLayout
            title="Highlights"
            body={
                <div className="space-y-4">
                    <ul className={TEXT_SIZE.meta + " list-disc pl-5 space-y-2 font-medium"}>
                        {highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            }
            bottomLeft={<span className="font-mono uppercase tracking-[0.28em]">{cardLabel}</span>}
            bottomRight={<span>Back</span>}
        />
    )
}