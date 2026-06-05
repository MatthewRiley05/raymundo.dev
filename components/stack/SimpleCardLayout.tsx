"use client"

import type { ReactNode } from "react"
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CardShell from "@/components/stack/CardShell"
import { CARD_PX, CARD_TEXT_META, CARD_FOOTER, TEXT_SIZE, GAP_SIZE } from "@/components/stack/cardSpacing"
import { cn } from "@/lib/utils"

type Props = {
    title?: string
    header?: ReactNode
    body: ReactNode
    bottomLeft?: ReactNode
    bottomRight?: ReactNode
    className?: string
}

export default function SimpleCardLayout({ title, header, body, bottomLeft, bottomRight, className }: Props) {
    return (
        <CardShell className={className}>
            {header ? (
                <CardHeader className={CARD_PX + " px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10 2xl:px-11"}>
                    {header}
                </CardHeader>
            ) : (
                <CardHeader className={cn(CARD_PX, "items-center px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10 2xl:px-11")}>
                    <CardTitle className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight">{title}</CardTitle>
                </CardHeader>
            )}
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
