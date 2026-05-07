import type { StackCard } from "@/components/stack/types"
import HomeCardFront from "@/components/cards/home/HomeCardFront"
import HomeCardBack from "@/components/cards/home/HomeCardBack"
import { WorkExperienceExpFront, WorkExperienceExpBack } from "@/components/cards/work/WorkExperienceExp"
import { WorkExperienceHanappBack, WorkExperienceHanappFront } from "./work/WorkExperienceHanapp"
import { WorkExperienceBonbonBack, WorkExperienceBonbonFront } from "./work/WorkExperienceBonbon"
import SkillsCardFront from "@/components/cards/skills/SkillsCardFront"
import SkillsCardBack from "@/components/cards/skills/SkillsCardBack"
import { ProjectCathayBack, ProjectCathayFront } from "./projects/ProjectExperienceCathay"
import { ProjectGymSagaBack, ProjectGymSagaFront } from "./projects/ProjectExperienceGymSaga"
import { ProjectFlavorFlickBack, ProjectFlavorFlickFront } from "./projects/ProjectExperienceFlavorFlick"

export const CARDS: StackCard[] = [
    { id: "home", Front: HomeCardFront, Back: HomeCardBack },
    { id: "work-exp-1", Front: WorkExperienceHanappFront, Back: WorkExperienceHanappBack },
    { id: "work-exp-2", Front: WorkExperienceExpFront, Back: WorkExperienceExpBack },
    { id: "work-exp-3", Front: WorkExperienceBonbonFront, Back: WorkExperienceBonbonBack },
    { id: "project-exp-1", Front: ProjectCathayFront, Back: ProjectCathayBack },
    { id: "project-exp-2", Front: ProjectGymSagaFront, Back: ProjectGymSagaBack },
    { id: "project-exp-3", Front: ProjectFlavorFlickFront, Back: ProjectFlavorFlickBack },
    { id: "skills", Front: SkillsCardFront, Back: SkillsCardBack },
]
