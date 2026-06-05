"use client"

import SimpleCardLayout from "@/components/stack/SimpleCardLayout"

export default function HomeCardBack() {
    return (
        <SimpleCardLayout
            title="Contact"
            body={
                <div className="flex flex-col gap-1 sm:gap-2.5 md:gap-3.5 lg:gap-4.5">
                    <div>
                        <div className="font-mono uppercase tracking-[0.22em] text-muted-foreground text-[8px] sm:text-[11px] leading-none">
                            Website
                        </div>
                        <a href="https://raymundo.dev" className="text-[8px] sm:text-xs md:text-sm text-muted-foreground font-medium underline hover:text-foreground/80">
                            raymundo.dev
                        </a>
                    </div>
                    <div>
                        <div className="font-mono uppercase tracking-[0.22em] text-muted-foreground text-[8px] sm:text-[11px] leading-none">
                            Email
                        </div>
                        <a href="mailto:matthewrileyraymundo@gmail.com" className="text-[8px] sm:text-xs md:text-sm text-muted-foreground font-medium underline hover:text-foreground/80">
                            matthewrileyraymundo@gmail.com
                        </a>
                    </div>

                    <div>
                        <div className="font-mono uppercase tracking-[0.22em] text-muted-foreground text-[8px] sm:text-[11px] leading-none">
                            Phone
                        </div>
                        <a href="tel:+85256056737" className="text-[8px] sm:text-xs md:text-sm text-muted-foreground font-medium underline hover:text-foreground/80">
                            +852 5605 6737
                        </a>
                    </div>

                    <div>
                        <div className="font-mono uppercase tracking-[0.22em] text-muted-foreground text-[8px] sm:text-[11px] leading-none">
                            Links
                        </div>
                        <ul className="text-[8px] sm:text-xs md:text-sm text-muted-foreground list-disc pl-5 space-y-0 font-medium underline hover:text-foreground/80">
                            <li>
                                <a className="" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a className="" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
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
