"use client"

import type { StackCard } from "@/components/stack/types"
import StackCardView from "@/components/stack/StackCardView"

export default function CardStack({
    cards,
    maxVisible = 5,
}: {
    cards: StackCard[]
    maxVisible?: number
}) {
    const visible = cards.slice(0, maxVisible)

    return (
        <div className="relative w-full h-full overflow-visible">
            {visible
                .map((card, index) => {
                    const isTop = index === 0

                    // Stronger, more “deck-like” peek
                    const y = index * 18          // was 10
                    const x = index * 2           // subtle stagger
                    const scale = 1 - index * 0.01 // was 0.035 (too much shrink)
                    const opacity = 1 - index * 0.08 // keep it visible
                    const zIndex = 50 - index

                    return (
                        <div
                            key={card.id}
                            className="absolute inset-0"
                            style={{
                                transform: `translate(${x}px, ${y}px) scale(${scale})`,
                                opacity,
                                zIndex,
                                pointerEvents: isTop ? "auto" : "none",
                            }}
                        >
                            <StackCardView card={card} isTop={isTop} />
                        </div>
                    )
                })
                .reverse()}
        </div>
    )
}
