"use client"

import SimpleCardLayout from "@/components/stack/SimpleCardLayout"
import Image from "next/image"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { HyperText } from "@/components/ui/hyper-text"
import { TEXT_SIZE, GAP_SIZE } from "@/components/stack/cardSpacing"
import { CardDescription } from "@/components/ui/card"

export default function HomeCardFront() {
    return (
        <SimpleCardLayout
            header={
                <div className="flex flex-row items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    <Image
                        src="/matthewinspire.jpg"
                        alt="Matthew Riley Chun Raymundo"
                        width={256}
                        height={256}
                        loading="eager"
                        fetchPriority="high"
                        className="rounded-md object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36"
                    />

                    <div className="flex flex-col gap-1 text-left">
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-tight font-semibold">
                            Matthew Riley Chun Raymundo
                        </span>

                        <CardDescription className="text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg text-muted-foreground">
                            Software Developer
                        </CardDescription>
                    </div>
                </div>
            }
            body={
                <>
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
                </>
            }
            bottomLeft={<span className="font-mono uppercase tracking-[0.28em]">Matthew Raymundo</span>}
            bottomRight={<span>Front</span>}
        />
    )
}