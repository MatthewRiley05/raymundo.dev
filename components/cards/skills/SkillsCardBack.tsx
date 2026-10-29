"use client";

import SimpleCardLayout from "@/components/stack/SimpleCardLayout";

export default function SkillsCardBack() {
    return (
        <SimpleCardLayout
            title=""
            body={
                <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-muted-foreground text-center">End</p>
                </div>
            }
            bottomLeft={<span className="font-mono uppercase tracking-[0.28em]">Skills</span>}
            bottomRight={<span>Back</span>}
        />
    );
}
