import type { StackCard } from "../stack/types";
import HomeCardBack from "./home/HomeCardBack";
import HomeCardFront from "./home/HomeCardFront";

export const CARDS: StackCard[] = [
    {
        id: "home",
        Front: HomeCardFront,
        Back: HomeCardBack,
    }
]