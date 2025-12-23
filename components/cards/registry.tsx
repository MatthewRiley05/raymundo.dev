import type { StackCard } from "@/components/stack/types"
import HomeCardFront from "@/components/cards/home/HomeCardFront"
import HomeCardBack from "@/components/cards/home/HomeCardBack"
import PlaceholderFront from "@/components/cards/placeholder/PlaceholderFront"
import PlaceholderBack from "@/components/cards/placeholder/PlaceholderBack"

export const CARDS: StackCard[] = [
    { id: "home", Front: HomeCardFront, Back: HomeCardBack },
    { id: "placeholder-1", Front: PlaceholderFront, Back: PlaceholderBack },
]
