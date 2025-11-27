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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Tilt from "react-parallax-tilt"
import { useState } from "react"

export default function BusinessCard() {
    const [scale, setScale] = useState(1.1)

    return (
        <Tilt tiltReverse={true} scale={scale} transitionSpeed={3000} perspective={10000} tiltMaxAngleX={15} tiltMaxAngleY={15} className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl aspect-[1.75] flex items-center justify-center">
            <Card className="w-full h-full border border-border/60 bg-background/90 shadow-lg">
                <CardHeader className="flex flex-row items-start gap-4 px-4 py-3 sm:items-center sm:gap-5 sm:px-6 sm:py-4 md:gap-6 md:px-8 md:py-5 lg:gap-8 lg:px-10 lg:py-6 xl:px-12 xl:py-7 2xl:px-14 2xl:py-8">
                    <Avatar className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32">
                        <AvatarImage src="/matthewrileylogo.png" alt="Matthew Raymundo" />
                        <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1 text-left">
                        <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl leading-tight">Matthew Riley Chun Raymundo</CardTitle>
                        <CardDescription className="text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg text-muted-foreground">Software Developer</CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="px-5 pt-0 pb-3 text-xs sm:px-7 sm:pb-4 sm:text-sm md:px-9 md:pb-5 md:text-sm lg:px-11 lg:pb-6 lg:text-base xl:px-13 xl:pb-7 xl:text-base 2xl:px-15 2xl:pb-8 2xl:text-lg">
                    <p>Card Content</p>
                </CardContent>

                <CardFooter className="flex items-center justify-between gap-2 px-5 pt-2 pb-3 text-[10px] sm:px-7 sm:pt-2.5 sm:pb-4 sm:text-xs md:px-9 md:pt-3 md:pb-5 md:text-xs lg:px-11 lg:pt-3.5 lg:pb-5 lg:text-sm xl:px-13 xl:pt-4 xl:pb-6 xl:text-sm 2xl:px-15 2xl:pt-4 2xl:pb-7 2xl:text-base">
                    <p>Card Footer</p>
                    <span className="hidden sm:inline-block text-muted-foreground">Optional right-side text</span>
                </CardFooter>
            </Card>
        </Tilt>
    )
}
