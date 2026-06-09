"use client"

import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import SimpleCardLayout from "@/components/stack/SimpleCardLayout"
import { TEXT_SIZE, STACK_SIZE } from "@/components/stack/cardSpacing"

type Props = {
    highlights: string[]
    images?: { src: string; alt?: string }[]
    cardLabel?: string
}

export default function ExperienceCardBack({ highlights, images = [], cardLabel = "Experience" }: Props) {
    const [open, setOpen] = useState(false)
    const [orientation, setOrientation] = useState<"landscape" | "portrait">("landscape")

    return (
        <>
            <SimpleCardLayout
                title="Highlights"
                body={
                    <div className="grid grid-cols-2 gap-4 flex-1 min-h-0 overflow-hidden">
                        <ul className={"list-disc pl-5 " + STACK_SIZE.item + " font-medium " + TEXT_SIZE.meta}>
                            {highlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        {images[0] && (
                            <div className="relative w-full h-full min-h-0 min-w-0 overflow-hidden rounded-md">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        src={images[0].src}
                                        alt={images[0].alt ?? "screenshot"}
                                        onClick={(e) => { 
                                            e.stopPropagation()
                                            setOpen(true) 
                                        }}
                                        className={
                                            "block object-contain rounded-md cursor-pointer " +
                                            (orientation === "landscape"
                                                ? "max-w-full h-auto max-h-none"
                                                : "max-h-full w-auto max-w-none")
                                        }
                                        onLoad={(e) => {
                                            const { naturalWidth, naturalHeight } = e.currentTarget
                                            setOrientation(naturalWidth > naturalHeight ? "landscape" : "portrait")
                                        }}
                                    />
                                </div>
                            </div>
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
                    controller={{ closeOnBackdropClick: true }}
                />
            </div>
        </>
    )
}
