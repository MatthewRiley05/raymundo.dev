"use client"

import type { ReactNode } from "react"
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CardShell from "@/components/stack/CardShell"
import { CARD_PX, CARD_TEXT_META, CARD_FOOTER, TEXT_SIZE, GAP_SIZE } from "@/components/stack/cardSpacing"
import { cn } from "@/lib/utils"

type Props = {
    title: string
    body: ReactNode
    bottomLeft?: ReactNode
    bottomRight?: ReactNode
    className?: string
}

export default function SimpleCardLayout({ title, body, bottomLeft, bottomRight, className }: Props) {
    return (
        <CardShell className={className}>
            <CardHeader className={cn(CARD_PX, "items-center px-6 pt-0 sm:px-7 sm:pt-1 md:px-8 md:pt-2 lg:px-9 lg:pt-3 xl:px-10 xl:pt-4 2xl:px-11 2xl:pt-5")}>
                <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight">{title}</CardTitle>
            </CardHeader>
            <CardContent className={cn(CARD_PX, "flex-grow", TEXT_SIZE.body, "flex flex-col", GAP_SIZE.section)}>{body}</CardContent>
            {(bottomLeft || bottomRight) && (
                <CardFooter
                    className={cn(
                        CARD_PX,
                        CARD_TEXT_META,
                        CARD_FOOTER,
                        "text-muted-foreground",
                    )}
                >
                    <div>{bottomLeft}</div>
                    <div>{bottomRight}</div>
                </CardFooter>
            )}
        </CardShell>
    )
}
