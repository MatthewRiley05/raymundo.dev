"use client"

import { useEffect, useState } from "react"
import CardFrame from "@/components/stack/CardFrame"
import CardStack from "@/components/stack/CardStack"
import { getCards } from "@/components/cards/registry"
import type { StackCard } from "@/components/stack/types"

export default function BusinessCard() {
    const [cards, setCards] = useState<StackCard[]>([])

    useEffect(() => {
        getCards().then(setCards)
    }, [])

    if (cards.length === 0) return null

    return (
        <CardFrame>
            <CardStack cards={cards} maxVisible={3} />
        </CardFrame>
    )
}