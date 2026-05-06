import type { StackCard } from "@/components/stack/types"
import HomeCardFront from "@/components/cards/home/HomeCardFront"
import HomeCardBack from "@/components/cards/home/HomeCardBack"
import { WorkExperienceExpFront, WorkExperienceExpBack } from "@/components/cards/work/WorkExperienceExp"
import { WorkExperienceHanappBack, WorkExperienceHanappFront } from "./work/WorkExperienceHanapp"
import { WorkExperienceBonbonBack, WorkExperienceBonbonFront } from "./work/WorkExperienceBonbon"

export const CARDS: StackCard[] = [
    { id: "home", Front: HomeCardFront, Back: HomeCardBack },
    { id: "work-exp-1", Front: WorkExperienceHanappFront, Back: WorkExperienceHanappBack },
    { id: "work-exp-2", Front: WorkExperienceExpFront, Back: WorkExperienceExpBack },
    { id: "work-exp-3", Front: WorkExperienceBonbonFront, Back: WorkExperienceBonbonBack },
]
