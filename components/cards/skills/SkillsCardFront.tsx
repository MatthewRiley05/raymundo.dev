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
        <div className="space-y-3">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
<div
                    key={skill.name}
                    className="flex flex-col items-center gap-0.5"
                    style={{ width: "48px" }}
                    title={skill.name}
                  >
                    {skill.icon ? (
                      <skill.icon
                        size={20}
                        color={skill.color}
                        className="transition-transform hover:scale-110"
                      />
                    ) : (
                      <span className="text-lg leading-none transition-transform hover:scale-110" style={{ fontSize: "20px", lineHeight: 1 }}>
                        {skill.name.split(" ")[0]}
                      </span>
                    )}
                    <span className="text-[10px] text-muted-foreground text-center leading-tight">
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
