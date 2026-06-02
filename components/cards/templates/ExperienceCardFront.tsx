"use client"

import SimpleCardLayout from "@/components/stack/SimpleCardLayout"
import Image from "next/image"
import { CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TEXT_SIZE } from "@/components/stack/cardSpacing"

type Props = {
    title: string
    subtitle: string
    logo?: string
    link?: string
    date: string
    location?: string
    tags?: string[]
    cardLabel?: string
}

export default function ExperienceCardFront({ title, logo, subtitle, link, date, location, tags = [], cardLabel = "Experience" }: Props) {
    return (
        <SimpleCardLayout
            header={
                <div className="flex items-center gap-2">
                    {logo && (
                        <Image src={logo} alt="" width={24} height={24} className="rounded" />
                    )}
                    {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight">
                                {title}
                            </CardTitle>
                        </a>
                    ) : (
                        <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight">
                            {title}
                        </CardTitle>
                    )}
                </div>
            }
            body={
                <div className="space-y-3">
                    <div className={TEXT_SIZE.meta + " font-medium"}>
                        {subtitle}
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
