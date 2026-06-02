"use client"

import CardFrame from "@/components/stack/CardFrame"
import CardStack from "@/components/stack/CardStack"
import { getCards } from "@/components/cards/registry"

const cards = getCards()

export default function BusinessCard() {
    return (
        <CardFrame>
            <CardStack cards={cards} maxVisible={3} />
        </CardFrame>
    )
}