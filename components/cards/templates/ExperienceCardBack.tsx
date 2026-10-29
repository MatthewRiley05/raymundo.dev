"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import SimpleCardLayout from "@/components/stack/SimpleCardLayout";
import { TEXT_SIZE, STACK_SIZE } from "@/components/stack/cardSpacing";

export type Media =
    | { type?: "image"; src: string; alt?: string }
    | {
          type: "video";
          src: string;
          alt?: string;
          /** Intrinsic size, required by the lightbox video plugin */
          width: number;
          height: number;
          poster?: string;
      };

type Props = {
    highlights: string[];
    images?: Media[];
    cardLabel?: string;
};

export default function ExperienceCardBack({ highlights, images = [], cardLabel = "Experience" }: Props) {
    const [open, setOpen] = useState(false);
    const media = images[0];

    // Native sizing (not next/image `fill`) keeps the element the exact size of the
    // visible pixels, so the click target stays tight and taps on the empty space
    // still reach the card to flip it. `fill` would make the whole cell clickable.
    // Phones use the same no-crop sizing inside a shorter preview band.
    const mediaClassName = "block h-auto w-auto max-h-full max-w-full cursor-pointer rounded-md";

    const mediaNode = !media ? null : media.type === "video" ? (
        <video
            src={media.src}
            poster={media.poster}
            aria-label={media.alt ?? "video"}
            muted
            loop
            autoPlay
            playsInline
            preload="none"
            onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
            }}
            className={mediaClassName}
        />
    ) : (
        // eslint-disable-next-line @next/next/no-img-element -- see mediaClassName note above
        <img
            src={media.src}
            alt={media.alt ?? "screenshot"}
            onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
            }}
            className={mediaClassName}
        />
    );

    return (
        <>
            <SimpleCardLayout
                title="Highlights"
                body={
                    <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden sm:grid sm:grid-cols-2 sm:gap-4">
                        <ul className={"list-disc pl-4 sm:pl-5 " + STACK_SIZE.item + " font-medium " + TEXT_SIZE.meta}>
                            {highlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        {mediaNode && (
                            <div className="relative w-full min-w-0 flex-1 min-h-16 overflow-hidden max-[360px]:min-h-10 sm:h-full sm:min-h-0">
                                <div className="absolute inset-0 flex items-center justify-center">{mediaNode}</div>
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
                            : { src: item.src, alt: item.alt },
                    )}
                    controller={{ closeOnBackdropClick: true }}
                />
            </div>
        </>
    );
}
