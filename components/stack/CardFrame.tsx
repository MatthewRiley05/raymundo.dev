"use client"

import Tilt from "react-parallax-tilt"
import { cn } from "@/lib/utils"

type CardFrameProps = {
    children: React.ReactNode
    className?: string
    tiltEnabled?: boolean
}

const FRAME_CLASS =
    "w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl aspect-[1.75] flex items-center justify-center pointer-events-auto cursor-default"

export default function CardFrame({ children, className, tiltEnabled = true }: CardFrameProps) {
    const frameClass = cn(FRAME_CLASS, className)

    if (!tiltEnabled) {
        return <div className={frameClass}>{children}</div>
    }

    return (
        <Tilt
            tiltReverse
            scale={1.05}
            transitionSpeed={3000}
            perspective={10000}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className={frameClass}
        >
            {children}
        </Tilt>
    )
}
