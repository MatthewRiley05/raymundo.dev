"use client"

import SimpleCardLayout from "@/components/stack/SimpleCardLayout"
import { Badge } from "@/components/ui/badge"
import { TEXT_SIZE } from "@/components/stack/cardSpacing"

type Props = {
    title: string
    subtitle: string
    link?: string
    date: string
    location?: string
    tags?: string[]
    cardLabel?: string
}

export default function ExperienceCardFront({ title, subtitle, link, date, location, tags = [], cardLabel = "Experience" }: Props) {
    return (
        <SimpleCardLayout
            title={title}
            body={
                <div className="space-y-3">
                    <div className={TEXT_SIZE.meta + " font-medium"}>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground/80 hover:underline transition-colors"
                        >
                            {subtitle}
                        </a>
                    </div>
                    <div className={"font-mono uppercase tracking-[0.22em] text-muted-foreground " + TEXT_SIZE.small}>
                        {date}{location ? ` | ${location}` : ""}
                    </div>
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                            {tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className={TEXT_SIZE.small}>
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