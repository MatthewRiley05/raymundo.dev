"use client"

import Tilt from "react-parallax-tilt"
import { cn } from "@/lib/utils"

const FRAME_CLASS = "w-[min(65vw,56rem)] aspect-[1.75] flex items-center justify-center pointer-events-auto cursor-default"

export default function CardFrame({ children, className, tiltEnabled = true }: {
    children: React.ReactNode
    className?: string
    tiltEnabled?: boolean
}) {
    const frameClass = cn(FRAME_CLASS, className)
    if (!tiltEnabled) return <div className={frameClass}>{children}</div>
    return (
        <Tilt tiltReverse scale={1.05} transitionSpeed={3000} perspective={10000} tiltMaxAngleX={10} tiltMaxAngleY={10} className={frameClass}>
            {children}
        </Tilt>
    )
}
