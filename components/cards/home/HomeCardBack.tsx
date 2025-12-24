"use client"

import SimpleCardLayout from "@/components/stack/SimpleCardLayout"

export default function HomeCardBack() {
    return (
        <SimpleCardLayout
            title="Contact"
            body={
                <div className="space-y-4">
                    <div>
                        <div className="font-mono uppercase tracking-[0.22em] text-muted-foreground text-[10px] sm:text-[11px]">
                            Email
                        </div>
                        <a href="mailto:matthewrileyraymundo@gmail.com" className="text-[11px] sm:text-xs md:text-sm text-muted-foreground font-medium underline hover:text-foreground/80">
                            matthewrileyraymundo@gmail.com
                        </a>
                    </div>

                    <div>
                        <div className="font-mono uppercase tracking-[0.22em] text-muted-foreground text-[10px] sm:text-[11px]">
                            Phone
                        </div>
                        <a href="tel:+85256056737" className="text-[11px] sm:text-xs md:text-sm text-muted-foreground font-medium underline hover:text-foreground/80">
                            +852 5605 6737
                        </a>
                    </div>

                    <div>
                        <div className="font-mono uppercase tracking-[0.22em] text-muted-foreground text-[10px] sm:text-[11px]">
                            Links
                        </div>
                        <ul className="text-[11px] sm:text-xs md:text-sm underline text-muted-foreground list-disc pl-5 space-y-1 font-medium underline hover:text-foreground/80">
                            <li>
                                <a className="" href="https://github.com/" target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a className="" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
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
