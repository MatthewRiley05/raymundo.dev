"use client"

import Tilt from "react-parallax-tilt"
import { useState } from "react"
import HomeCardFront from "@/components/cards/home/HomeCardFront"

export default function BusinessCard() {
    const [scale] = useState(1.05)

    return (
        <Tilt
            tiltReverse
            scale={scale}
            transitionSpeed={3000}
            perspective={10000}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl aspect-[1.75] flex items-center justify-center pointer-events-auto cursor-default"
        >
            <HomeCardFront />
        </Tilt>
    )
}
