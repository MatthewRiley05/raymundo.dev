import type { StackCard } from "@/components/stack/types"

export async function getCards(): Promise<StackCard[]> {
    const [
        { default: HomeCardFront },
        { default: HomeCardBack },
        { WorkExperienceHanappFront, WorkExperienceHanappBack },
        { WorkExperienceExpFront, WorkExperienceExpBack },
        { WorkExperienceBonbonFront, WorkExperienceBonbonBack },
        { default: SkillsCardFront },
        { default: SkillsCardBack },
        { ProjectCathayFront, ProjectCathayBack },
        { ProjectGymSagaFront, ProjectGymSagaBack },
        { ProjectFlavorFlickFront, ProjectFlavorFlickBack },
    ] = await Promise.all([
        import("@/components/cards/home/HomeCardFront"),
        import("@/components/cards/home/HomeCardBack"),
        import("@/components/cards/work/WorkExperienceHanapp"),
        import("@/components/cards/work/WorkExperienceExp"),
        import("@/components/cards/work/WorkExperienceBonbon"),
        import("@/components/cards/skills/SkillsCardFront"),
        import("@/components/cards/skills/SkillsCardBack"),
        import("@/components/cards/projects/ProjectExperienceCathay"),
        import("@/components/cards/projects/ProjectExperienceGymSaga"),
        import("@/components/cards/projects/ProjectExperienceFlavorFlick"),
    ])

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