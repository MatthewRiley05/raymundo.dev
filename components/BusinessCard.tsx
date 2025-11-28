"use client"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Tilt from "react-parallax-tilt"
import { useState } from "react"
import Image from 'next/image'
import { TypingAnimation } from "./ui/typing-animation"
import { HyperText } from "./ui/hyper-text"

export default function BusinessCard() {
    const [scale, setScale] = useState(1.05)

    return (
        <Tilt
            tiltReverse={true}
            scale={scale}
            transitionSpeed={3000}
            perspective={10000}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl aspect-[1.75] flex items-center justify-center pointer-events-auto cursor-default"
        >
            <Card
                className="w-full h-full border border-border/60 bg-background/90 gap-2 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7"
            >
                <CardHeader
                    className="flex flex-row items-start gap-4 items-center sm:gap-5 md:gap-6 lg:gap-8 px-6 pt-0 sm:px-7 sm:pt-1 md:px-8 md:pt-2 lg:px-9 lg:pt-3 xl:px-10 xl:pt-4 2xl:px-11 2xl:pt-5"
                >
                    <Image
                        src="/matthewinspire.jpg"
                        alt="Matthew Riley Chun Raymundo"
                        width={128}
                        height={128}
                        className="rounded-md object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36"
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

                <CardContent
                    className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10 2xl:px-11 flex flex-col gap-2 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7"
                >
                    <span
                        className="relative pl-6 text-[11px] sm:text-xs md:text-sm text-muted-foreground before:content-['//'] before:absolute before:left-0 before:text-muted-foreground"
                    >
                        I build minimal and practical tools across {''}
                        <TypingAnimation
                            cursorStyle="underscore"
                            loop={true}
                            words={["web", "mobile", "AI"]}
                            style={{ lineHeight: 1 }}
                        />
                    </span>

                    <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground lg:hidden">
                        BSc (Hons) Fintech &amp; AI @ HK PolyU
                    </p>

                    <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground hidden lg:block">
                        BSc (Hons) Financial Technology &amp; Artificial Intelligence @ The Hong Kong Polytechnic University
                    </p>

                    <HyperText
                        className="self-start inline-block text-[11px] sm:text-xs md:text-sm text-muted-foreground py-0 overflow-hidden"
                    >
                        HKG ⇄ MNL
                    </HyperText>

                    <p className="text-[11px] sm:text-xs md:text-sm">
                        <span className="font-medium">Now:</span> Building a digital service marketplace for Filipinos @{' '}
                        <a
                            href="https://hanapp.com.ph/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium underline"
                        >
                            Hanapp
                        </a>
                        .
                    </p>
                </CardContent>

                <CardFooter
                    className="flex items-center justify-between gap-2 text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-base px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10 2xl:px-11"
                >
                    <p className="text-muted-foreground">Open to SWE internships, part-time roles, and collabs.</p>
                </CardFooter>

            </Card>
        </Tilt>
    )
}
