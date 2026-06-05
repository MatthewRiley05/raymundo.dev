"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaRProject, FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiSqlite, SiQuickbooks, SiDart, SiFlutter } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { CgCPlusPlus } from "react-icons/cg";
import SimpleCardLayout from "@/components/stack/SimpleCardLayout";

type SkillItem = {
  name: string
  icon: React.ComponentType<{ className?: string; color?: string }> | null
  color: string
  flag?: string
}

const categories: { label: string; skills: SkillItem[] }[] = [
  {
    label: "Programming",
    skills: [
      { name: "Python", icon: FaPython, color: "#41719D" },
      { name: "TypeScript", icon: SiTypescript, color: "#3078C6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DE23" },
      { name: "Java", icon: FaJava, color: "#F28F18" },
      { name: "C/C++", icon: CgCPlusPlus, color: "#6598D0" },
      { name: "HTML", icon: FaHtml5, color: "#F16528" },
      { name: "CSS", icon: FaCss3Alt, color: "#2C65F0" },
      { name: "R", icon: FaRProject, color: "#2366BA" },
      { name: "SQL", icon: SiSqlite, color: "#336791" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
    ],
  },
  {
    label: "Frameworks",
    skills: [
      { name: "React", icon: FaReact, color: "#60DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD28" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "Flutter", icon: SiFlutter, color: "#5EC5F8" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F15033" },
      { name: "MongoDB", icon: SiMongodb, color: "#09AA50" },
      { name: "VSCode", icon: VscVscode, color: "#33ADF2" },
      { name: "Figma", icon: FaFigma, color: "#FFFFFF" },
      { name: "QuickBooks", icon: SiQuickbooks, color: "#319E21" },
    ],
  },
];

export default function SkillsCardFront() {
  return (
    <SimpleCardLayout
      title="Skills"
      body={
        <div className="space-y-[clamp(0.1875rem,0rem+0.5vw,0.75rem)]">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-[clamp(0.4375rem,0.35rem+0.375vw,0.75rem)] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-[clamp(0.625rem,0.3rem+1.25vw,1.5rem)]">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-0."
                    title={skill.name}
                  >
                    {skill.icon ? (
                      <skill.icon
                        className="w-[clamp(0.75rem,0.35rem+1.25vw,1.75rem)] h-[clamp(0.75rem,0.35rem+1.25vw,1.75rem)] sm:transition-transform sm:hover:scale-110"
                        color={skill.color}
                      />
                    ) : (
                      <span className="text-[clamp(0.4375rem,0.35rem+0.6vw,1rem)] leading-none transition-transform hover:scale-110">
                        {"flag" in skill ? skill.flag : skill.name}
                      </span>
                    )}
                    <span className="text-[clamp(0.375rem,0.1875rem+0.25vw,0.625rem)] text-muted-foreground text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      }
      bottomLeft={<span className="font-mono uppercase tracking-[0.28em]">Skills</span>}
      bottomRight={<span>Front</span>}
    />
  );
}
