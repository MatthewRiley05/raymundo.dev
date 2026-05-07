"use client"

import SimpleCardLayout from "@/components/stack/SimpleCardLayout"
import { Badge } from "@/components/ui/badge"

type Props = {
    title: string
    subtitle: string
    date: string
    location?: string
    tags?: string[]
    cardLabel?: string
}

export default function ExperienceCardFront({ title, subtitle, date, location, tags = [], cardLabel = "Experience" }: Props) {
    return (
        <SimpleCardLayout
            title={title}
            body={
                <div className="space-y-3">
                    <div className="text-[11px] sm:text-xs md:text-sm text-muted-foreground font-medium">
                        {subtitle}
                    </div>
                    <div className="font-mono uppercase tracking-[0.22em] text-muted-foreground text-[10px] sm:text-[11px]">
                        {date}{location ? ` | ${location}` : ""}
                    </div>
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                            {tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-[10px] sm:text-[11px]">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </div>
            }
            bottomLeft={<span className="font-mono uppercase tracking-[0.28em]">{cardLabel}</span>}
            bottomRight={<span>Front</span>}
        />
    )
}