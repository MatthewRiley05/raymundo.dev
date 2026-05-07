"use client";

import SimpleCardLayout from "@/components/stack/SimpleCardLayout";
import { FaEgg } from "react-icons/fa";

export default function SkillsCardBack() {
  return (
    <SimpleCardLayout
      title="Easter Egg!"
      body={
        <div className="flex flex-col items-center justify-center h-full">
          <FaEgg size={48} className="mb-4 text-yellow-400" />
          <p className="text-muted-foreground text-center">
            You found the hidden skills card back!
            <br />
            <span className="text-xs">The real magic is in the code 😉</span>
          </p>
        </div>
      }
      bottomLeft={<span className="font-mono uppercase tracking-[0.28em]">Skills</span>}
      bottomRight={<span>Back</span>}
    />
  );
}
