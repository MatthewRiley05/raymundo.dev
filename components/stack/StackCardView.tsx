"use client"

import { useState } from "react"
import type { StackCard } from "@/components/stack/types"
import FlippableCard from "@/components/stack/FlippableCard"

export default function StackCardView({
    card,
    isTop,
}: {
    card: StackCard
    isTop: boolean
}) {
    const [flipped, setFlipped] = useState(false)

    const Front = card.Front
    const Back = card.Back

    if (!isTop || !Back) return <Front />

    return (
        <FlippableCard
            flipped={flipped}
            onToggle={() => setFlipped((v) => !v)}
            front={<Front />}
            back={<Back />}
            className="w-full h-full"
        />
    )
}
