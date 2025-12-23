"use client"

import { useState } from "react"
import { CARDS } from "@/components/cards/registry"
import FlippableCard from "@/components/stack/FlippableCard"
import CardFrame from "@/components/stack/CardFrame"

export default function BusinessCard() {
    const [flipped, setFlipped] = useState(false)

    const active = CARDS[0]
    const Front = active.Front
    const Back = active.Back

    return (
        <CardFrame>
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
        </CardFrame>
    )
}
