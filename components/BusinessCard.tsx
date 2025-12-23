"use client"

import CardFrame from "@/components/stack/CardFrame"
import CardStack from "@/components/stack/CardStack"
import { CARDS } from "@/components/cards/registry"

export default function BusinessCard() {
    return <CardFrame><CardStack cards={CARDS} /></CardFrame>
}
