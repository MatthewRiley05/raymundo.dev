"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiDart, SiFlutter } from "react-icons/si";
import SimpleCardLayout from "@/components/stack/SimpleCardLayout";

const categories = [
  {
    label: "Programming",
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "C/C++", icon: FaDatabase, color: "#00599C" },
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "R", icon: FaDatabase, color: "#276DC3" },
      { name: "SQL", icon: FaDatabase, color: "#336791" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
    ],
  },
  {
    label: "Frameworks",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "VSCode", icon: FaDatabase, color: "#007ACC" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "QuickBooks", icon: FaDatabase, color: "#2CA01C" },
    ],
  },
  {
    label: "Languages",
    skills: [
      { name: "English (Native)", icon: null, color: "" },
      { name: "Filipino (Native)", icon: null, color: "" },
      { name: "Mandarin (Elementary)", icon: null, color: "" },
    ],
  },
];

export default function SkillsCardFront() {
  return (
    <SimpleCardLayout
      title="Skills"
      body={
        <div className="space-y-4">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-1"
                    style={{ width: "48px" }}
                    title={skill.name}
                  >
                    {skill.icon ? (
                      <skill.icon
                        size={24}
                        color={skill.color}
                        className="transition-transform hover:scale-110"
                      />
                    ) : (
                      <span className="text-[10px] text-muted-foreground text-center leading-tight">
                        {skill.name}
                      </span>
                    )}
                    <span className="text-[10px] text-muted-foreground text-center leading-tight">
                      {skill.icon ? skill.name : ""}
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
