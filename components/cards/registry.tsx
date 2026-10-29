import type { StackCard } from "@/components/stack/types";

import { default as HomeCardBack } from "@/components/cards/home/HomeCardBack";
import { default as HomeCardFront } from "@/components/cards/home/HomeCardFront";
import { ProjectAstraBack, ProjectAstraFront } from "@/components/cards/projects/ProjectExperienceAstra";
import { ProjectCathayBack, ProjectCathayFront } from "@/components/cards/projects/ProjectExperienceCathay";
import {
    ProjectFlavorFlickBack,
    ProjectFlavorFlickFront,
} from "@/components/cards/projects/ProjectExperienceFlavorFlick";
import { default as SkillsCardBack } from "@/components/cards/skills/SkillsCardBack";
import { default as SkillsCardFront } from "@/components/cards/skills/SkillsCardFront";
import { WorkExperienceBonbonBack, WorkExperienceBonbonFront } from "@/components/cards/work/WorkExperienceBonbon";
import { WorkExperienceExpBack, WorkExperienceExpFront } from "@/components/cards/work/WorkExperienceExp";
import { ProjectMorphePatchesBack, ProjectMorphePatchesFront } from "./projects/ProjectExperienceMorphePatches";
import { WorkExperienceTapAwayBack, WorkExperienceTapAwayFront } from "./work/WorkExperienceTapAway";

export function getCards(): StackCard[] {
    return [
        { id: "home", Front: HomeCardFront, Back: HomeCardBack },
        { id: "work-exp-1", Front: WorkExperienceTapAwayFront, Back: WorkExperienceTapAwayBack },
        { id: "work-exp-2", Front: WorkExperienceExpFront, Back: WorkExperienceExpBack },
        { id: "work-exp-3", Front: WorkExperienceBonbonFront, Back: WorkExperienceBonbonBack },
        { id: "project-exp-1", Front: ProjectCathayFront, Back: ProjectCathayBack },
        { id: "project-exp-2", Front: ProjectAstraFront, Back: ProjectAstraBack },
        { id: "project-exp-3", Front: ProjectFlavorFlickFront, Back: ProjectFlavorFlickBack },
        { id: "project-exp-4", Front: ProjectMorphePatchesFront, Back: ProjectMorphePatchesBack },
        { id: "skills", Front: SkillsCardFront, Back: SkillsCardBack },
    ];
}
