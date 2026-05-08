"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { HyperText } from "@/components/ui/hyper-text"
import { CARD_PX, CARD_TEXT_META, TEXT_SIZE, GAP_SIZE, CARD_FOOTER } from "@/components/stack/cardSpacing"

export default function HomeCardFront() {
    return (
        <Card className={"w-full h-full border border-border/60 bg-background/95 " + GAP_SIZE.section}>
            <CardHeader className="flex flex-row items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-6 pt-0 sm:px-7 sm:pt-1 md:px-8 md:pt-2 lg:px-9 lg:pt-3 xl:px-10 xl:pt-4 2xl:px-11 2xl:pt-5">
                <Image
                    src="/matthewinspire.jpg"
                    alt="Matthew Riley Chun Raymundo"
                    width={256}
                    height={256}
                    className="rounded-md object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 loading=eager fetchpriority=high"
                />

                <div className="flex flex-col gap-1 text-left">
                    <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-tight">
                        Matthew Riley Chun Raymundo
                    </CardTitle>

                    <CardDescription className="text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg text-muted-foreground">
                        Software Developer
                    </CardDescription>
                </div>
            </CardHeader>

            <CardContent className={TEXT_SIZE.body + " " + CARD_PX + " flex flex-col " + GAP_SIZE.section}>
                <span className={"relative pl-6 " + TEXT_SIZE.meta + " before:content-['//'] before:absolute before:left-0 before:text-muted-foreground"}>
                    I build minimal and practical tools across{" "}
                    <TypingAnimation
                        cursorStyle="underscore"
                        loop
                        words={["web", "mobile", "AI"]}
                        style={{ lineHeight: 1 }}
                    />
                </span>

                <p className={TEXT_SIZE.meta + " lg:hidden"}>
                    BSc (Hons) Fintech &amp; AI @{" "}
                    <a
                        href="https://www.polyu.edu.hk/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline hover:text-foreground/80"
                    >
                        HK PolyU
                    </a>
                </p>

                <p className={TEXT_SIZE.meta + " hidden lg:block"}>
                    BSc (Hons) Financial Technology &amp; Artificial Intelligence @{" "}
                    <a
                        href="https://www.polyu.edu.hk/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline hover:text-foreground/80"
                    >
                        The Hong Kong Polytechnic University
                    </a>
                </p>

                <HyperText className={"self-start inline-block " + TEXT_SIZE.meta + " py-0 overflow-hidden"}>
                    HKG ⇄ MNL
                </HyperText>

                <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground">
                    <span className="font-medium">Now:</span> Building a digital service
                    marketplace for Filipinos @{" "}
                    <a
                        href="https://hanapp.com.ph/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline hover:text-foreground/80"
                    >
                        Hanapp
                    </a>
                    .
                </p>
            </CardContent>

            <CardFooter className={CARD_PX + " " + CARD_FOOTER + " " + CARD_TEXT_META + " text-muted-foreground"}>
                <div className="font-mono uppercase tracking-[0.28em]">
                    Matthew Raymundo
                </div>
                <div>v2026.05 · next.js / react</div>
            </CardFooter>
        </Card>
    )
}
