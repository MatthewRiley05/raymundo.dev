import type { StackCard } from "@/components/stack/types"

import { default as HomeCardFront } from "@/components/cards/home/HomeCardFront"
import { default as HomeCardBack } from "@/components/cards/home/HomeCardBack"
import { WorkExperienceHanappFront, WorkExperienceHanappBack } from "@/components/cards/work/WorkExperienceHanapp"
import { WorkExperienceExpFront, WorkExperienceExpBack } from "@/components/cards/work/WorkExperienceExp"
import { WorkExperienceBonbonFront, WorkExperienceBonbonBack } from "@/components/cards/work/WorkExperienceBonbon"
import { default as SkillsCardFront } from "@/components/cards/skills/SkillsCardFront"
import { default as SkillsCardBack } from "@/components/cards/skills/SkillsCardBack"
import { ProjectCathayFront, ProjectCathayBack } from "@/components/cards/projects/ProjectExperienceCathay"
import { ProjectGymSagaFront, ProjectGymSagaBack } from "@/components/cards/projects/ProjectExperienceAstra"
import { ProjectFlavorFlickFront, ProjectFlavorFlickBack } from "@/components/cards/projects/ProjectExperienceFlavorFlick"

export function getCards(): StackCard[] {
    return [
        { id: "home", Front: HomeCardFront, Back: HomeCardBack },
        { id: "work-exp-1", Front: WorkExperienceHanappFront, Back: WorkExperienceHanappBack },
        { id: "work-exp-2", Front: WorkExperienceExpFront, Back: WorkExperienceExpBack },
        { id: "work-exp-3", Front: WorkExperienceBonbonFront, Back: WorkExperienceBonbonBack },
        { id: "project-exp-1", Front: ProjectCathayFront, Back: ProjectCathayBack },
        { id: "project-exp-2", Front: ProjectGymSagaFront, Back: ProjectGymSagaBack },
        { id: "project-exp-3", Front: ProjectFlavorFlickFront, Back: ProjectFlavorFlickBack },
        { id: "skills", Front: SkillsCardFront, Back: SkillsCardBack },
    ]
}