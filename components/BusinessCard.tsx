"use client"

import Tilt from "react-parallax-tilt"
import { useState } from "react"
import { CARDS } from "@/components/cards/registry"
import FlippableCard from "./stack/FlippableCard"

const TILT_SCALE = 1.05

export default function BusinessCard() {
    const [flipped, setFlipped] = useState(false)

    const active = CARDS[0]
    const { Front, Back } = active

    return (
        <Tilt
            tiltReverse
            scale={TILT_SCALE}
            transitionSpeed={3000}
            perspective={10000}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl aspect-[1.75] flex items-center justify-center pointer-events-auto cursor-default"
        >
            {Back ? (
                <FlippableCard
                    flipped={flipped}
                    onToggle={() => setFlipped((v) => !v)}
                    front={<Front />}
                    back={<Back />}
                    className="w-full h-full"
                />
            ) : (
                <Front />
            )}
        </Tilt>
    )
}
