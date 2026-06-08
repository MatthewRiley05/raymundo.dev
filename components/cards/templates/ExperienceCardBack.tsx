"use client"

import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import SimpleCardLayout from "@/components/stack/SimpleCardLayout"
import { TEXT_SIZE } from "@/components/stack/cardSpacing"

type Props = {
    highlights: string[]
    images?: { src: string; alt?: string }[]
    cardLabel?: string
}

export default function ExperienceCardBack({ highlights, images = [], cardLabel = "Experience" }: Props) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <SimpleCardLayout
                title="Highlights"
                body={
                    <div className="flex flex-row gap-4 h-full">
                        <ul className={"flex-1 " + TEXT_SIZE.meta + " list-disc pl-5 space-y-2 font-medium"}>
                            {highlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        {images[0] && (
                            <img
                                src={images[0].src}
                                alt={images[0].alt ?? "screenshot"}
                                className="block w-1/2 h-auto cursor-pointer rounded-md self-center"
                                onClick={(e) => { e.stopPropagation(); setOpen(true) }}
                            />
                        )}
                    </div>
                }
                bottomLeft={<span className="font-mono uppercase tracking-[0.28em]">{cardLabel}</span>}
                bottomRight={<span>Back</span>}
            />

            <div onClick={(e) => e.stopPropagation()}>
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={images.map(img => ({ src: img.src }))}
                />
            </div>
        </>
    )
}
