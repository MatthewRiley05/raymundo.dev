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

export default function BusinessCard() {
    const [scale, setScale] = useState(1.05)

    return (
        <Tilt tiltReverse={true} scale={scale} transitionSpeed={3000} perspective={10000} tiltMaxAngleX={10} tiltMaxAngleY={10} className="w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl aspect-[1.75] flex items-center justify-center pointer-events-auto">
            <Card className="w-full h-full border border-border/60 bg-background/90">
                <CardHeader className="flex flex-row items-start gap-4 items-center sm:gap-5 md:gap-6 lg:gap-8 px-8 py-2 sm:px-9 sm:py-3 md:px-10 md:py-4 lg:px-11 lg:py-5 xl:px-12 xl:py-6 2xl:px-13 2xl:py-7">
                    <Image src="/matthewraymundoprofile.png" alt="Matthew Riley Chun Raymundo" width={128} height={128} className="rounded-md object-cover" />
                    <div className="flex flex-col gap-1 text-left">
                        <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-tight">Matthew Riley Chun Raymundo</CardTitle>
                        <CardDescription className="text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg text-muted-foreground">Software Developer</CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg px-8 sm:px-9 md:px-10 lg:px-11 xl:px-12 2xl:px-13 gap-4 flex flex-col">
                    <p className="mb-2">I build minimal, practical tools across the web, mobile, and AI.</p>
                    <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground mb-3">BSc (Hons) Financial Technology &amp; Artificial Intelligence @ The Hong Kong Polytechnic University · Based in Hong Kong · From the Philippines</p>
                    <p className="text-[11px] sm:text-xs md:text-sm mb-3"><span className="font-medium">Now:</span> Building a startup for a digital service marketplace for Filipinos.</p>
                    <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px]">
                        <Badge>TypeScript</Badge>
                        <Badge>React</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>Flutter</Badge>
                        <Badge>Python</Badge>
                    </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between gap-2 text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-base px-8 sm:px-9 md:px-10 lg:px-11 xl:px-12 2xl:px-13">
                    <p className="text-muted-foreground">Open to SWE internships, part-time roles, and collabs.</p>
                </CardFooter>

            </Card>
        </Tilt>
    )
}
