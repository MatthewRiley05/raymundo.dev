"use client"

import { PreviewLinkCard, PreviewLinkCardContent, PreviewLinkCardImage, PreviewLinkCardTrigger } from "@/components/animate-ui/components/radix/preview-link-card"
import SimpleCardLayout from "@/components/stack/SimpleCardLayout"
import { TEXT_SIZE } from "@/components/stack/cardSpacing"

export default function HomeCardBack() {
    return (
        <SimpleCardLayout
            title="Contact"
            body={
                <div className="flex flex-col gap-1 sm:gap-2.5 md:gap-3.5 lg:gap-4.5">
                    <div>
                        <div className={"font-mono uppercase tracking-[0.22em] leading-none " + TEXT_SIZE.label}>
                            Website
                        </div>
                        <PreviewLinkCard href="https://raymundo.dev">
                            <PreviewLinkCardTrigger
                                className={TEXT_SIZE.meta + " font-medium underline hover:text-foreground/80"}
                                target="_blank"
                                rel="noopener noreferrer"
                            > 
                                raymundo.dev
                            </PreviewLinkCardTrigger>
                            <PreviewLinkCardContent>
                                <PreviewLinkCardImage alt="raymundo.dev" />
                            </PreviewLinkCardContent>
                        </PreviewLinkCard>                        
                    </div>
                    <div>
                        <div className={"font-mono uppercase tracking-[0.22em] leading-none " + TEXT_SIZE.label}>
                            Email
                        </div>
                        <a href="mailto:matthewrileyraymundo@gmail.com" className={TEXT_SIZE.meta + " font-medium underline hover:text-foreground/80"}>
                            matthewrileyraymundo@gmail.com
                        </a>
                    </div>

                    <div>
                        <div className={"font-mono uppercase tracking-[0.22em] leading-none " + TEXT_SIZE.label}>
                            Phone
                        </div>
                        <a href="tel:+85256056737" className={TEXT_SIZE.meta + " font-medium underline hover:text-foreground/80"}>
                            +852 5605 6737
                        </a>
                    </div>

                    <div>
                        <div className={"font-mono uppercase tracking-[0.22em] leading-none " + TEXT_SIZE.label}>
                            Links
                        </div>
                        <ul className={TEXT_SIZE.meta + " list-disc pl-5 space-y-0 font-medium underline hover:text-foreground/80"}>
                            <li>
                                <PreviewLinkCard href="https://github.com/MatthewRiley05">
                                    <PreviewLinkCardTrigger
                                        className={TEXT_SIZE.meta + " font-medium underline hover:text-foreground/80"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    > 
                                        GitHub
                                    </PreviewLinkCardTrigger>
                                    <PreviewLinkCardContent>
                                        <PreviewLinkCardImage alt="GitHub - Matthew Raymundo" />
                                    </PreviewLinkCardContent>
                                </PreviewLinkCard> 
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
