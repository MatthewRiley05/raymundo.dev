"use client"

import SimpleCardLayout from "@/components/stack/SimpleCardLayout"

type Props = {
    highlights: string[]
}

export default function WorkExperienceBack({ highlights }: Props) {
    return (
        <SimpleCardLayout
            title="Highlights"
            body={
                <div className="space-y-4">
                    <ul className="text-[11px] sm:text-xs md:text-sm text-muted-foreground list-disc pl-5 space-y-2 font-medium">
                        {highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            }
            bottomLeft={<span className="font-mono uppercase tracking-[0.28em]">Work Experience</span>}
            bottomRight={<span>Back</span>}
        />
    )
}
