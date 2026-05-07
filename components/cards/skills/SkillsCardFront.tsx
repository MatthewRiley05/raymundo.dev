"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaRProject, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiSqlite, SiQuickbooks, SiDart, SiFlutter } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { CgCPlusPlus } from "react-icons/cg";
import SimpleCardLayout from "@/components/stack/SimpleCardLayout";

const categories = [
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
{
    label: "Languages",
    skills: [
      { name: "🇺🇸 English", icon: null, color: "" },
      { name: "🇵🇭 Filipino", icon: null, color: "" },
    ],
  },
];

export default function SkillsCardFront() {
  return (
    <SimpleCardLayout
      title="Skills"
      body={
        <div className="space-y-0 sm:space-y-0.5 md:space-y-1 lg:space-y-2 xl:space-y-3 2xl:space-y-4">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-[6px] xs:text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[12px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-0."
                    title={skill.name}
                  >
                    {skill.icon ? (
                      <skill.icon
                        className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 sm:transition-transform sm:hover:scale-110"
                        color={skill.color}
                      />
                    ) : (
                      <span className="text-[8px] xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-none transition-transform hover:scale-110">
                        {skill.name.split(" ")[0]}
                      </span>
                    )}
                    <span className="text-[5px] sm:text-[9px] md:text-[10px] text-muted-foreground text-center leading-tight">
                      {skill.icon ? skill.name : skill.name.split(" ").slice(1).join(" ")}
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
