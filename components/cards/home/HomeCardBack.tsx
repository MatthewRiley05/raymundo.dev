"use client"

import SimpleCardLayout from "@/components/stack/SimpleCardLayout"

export default function HomeCardBack() {
    return (
        <SimpleCardLayout
            title="Contact"
            body={
                <div className="space-y-4">
                    <div>
                        <div className="font-mono uppercase tracking-[0.22em] text-muted-foreground/80 text-[10px] sm:text-[11px]">
                            Email
                        </div>
                        <a href="mailto:matthewrileyraymundo@gmail.com" className="text-muted-foreground font-medium underline hover:text-foreground/80">
                            matthewrileyraymundo@gmail.com
                        </a>
                    </div>

                    <div>
                        <div className="font-mono uppercase tracking-[0.22em] text-muted-foreground/80 text-[10px] sm:text-[11px]">
                            Links
                        </div>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>
                                <a className="underline" href="https://github.com/" target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a className="underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            }
            bottomLeft={<span className="font-mono uppercase tracking-[0.28em]">Matthew Raymundo</span>}
            bottomRight={<span>Back side</span>}
        />
    )
}
