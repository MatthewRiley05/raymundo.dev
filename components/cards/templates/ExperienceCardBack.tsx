"use client"

import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import Video from "yet-another-react-lightbox/plugins/video"
import "yet-another-react-lightbox/styles.css"
import SimpleCardLayout from "@/components/stack/SimpleCardLayout"
import { TEXT_SIZE, STACK_SIZE } from "@/components/stack/cardSpacing"

export type Media =
    | { type?: "image"; src: string; alt?: string }
    | {
          type: "video"
          src: string
          alt?: string
          /** Intrinsic size, required by the lightbox video plugin */
          width: number
          height: number
          poster?: string
      }

type Props = {
    highlights: string[]
    images?: Media[]
    cardLabel?: string
}

export default function ExperienceCardBack({ highlights, images = [], cardLabel = "Experience" }: Props) {
    const [open, setOpen] = useState(false)
    const [orientation, setOrientation] = useState<"landscape" | "portrait">("landscape")

    const media = images[0]

    const mediaClassName =
        "block object-contain cursor-pointer rounded-md " +
        (orientation === "landscape" ? "max-w-full h-auto max-h-none" : "max-h-full w-auto max-w-none")

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

                        {media && (
                            <div className="relative w-full h-full min-h-0 min-w-0 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {media.type === "video" ? (
                                        <video
                                            src={media.src}
                                            poster={media.poster}
                                            aria-label={media.alt ?? "video"}
                                            muted
                                            loop
                                            autoPlay
                                            playsInline
                                            preload="metadata"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setOpen(true)
                                            }}
                                            onLoadedMetadata={(e) => {
                                                const { videoWidth, videoHeight } = e.currentTarget
                                                setOrientation(videoWidth > videoHeight ? "landscape" : "portrait")
                                            }}
                                            className={mediaClassName}
                                        />
                                    ) : (
                                        <img
                                            src={media.src}
                                            alt={media.alt ?? "screenshot"}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setOpen(true)
                                            }}
                                            className={mediaClassName}
                                            onLoad={(e) => {
                                                const { naturalWidth, naturalHeight } = e.currentTarget
                                                setOrientation(naturalWidth > naturalHeight ? "landscape" : "portrait")
                                            }}
                                        />
                                    )}
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
                    plugins={[Video]}
                    slides={images.map((item) =>
                        item.type === "video"
                            ? {
                                  type: "video" as const,
                                  width: item.width,
                                  height: item.height,
                                  poster: item.poster,
                                  sources: [{ src: item.src, type: "video/mp4" }],
                              }
                            : { src: item.src, alt: item.alt }
                    )}
                    controller={{ closeOnBackdropClick: true }}
                />
            </div>
        </>
    )
}
