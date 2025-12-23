"use client"

import type { ReactNode } from "react"
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CardShell from "@/components/stack/CardShell"
import { CARD_PX, CARD_TEXT_META, CARD_FOOTER } from "@/components/stack/cardSpacing"
import { cn } from "@/lib/utils"

type Props = { title: string; body: ReactNode; bottomLeft?: ReactNode; bottomRight?: ReactNode; className?: string }

export default function SimpleCardLayout({ title, body, bottomLeft, bottomRight, className }: Props) {
    return (
        <CardShell className={className}>
            <CardHeader className={cn(CARD_PX, "pt-4 sm:pt-5 md:pt-6")}>
                <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight">{title}</CardTitle>
            </CardHeader>
            <CardContent className={cn(CARD_PX, "text-[11px] sm:text-xs md:text-sm text-muted-foreground")}>{body}</CardContent>
            {(bottomLeft || bottomRight) && (
                <CardFooter className={cn(CARD_PX, CARD_TEXT_META, CARD_FOOTER, "text-muted-foreground")}>
                    <div>{bottomLeft}</div>
                    <div>{bottomRight}</div>
                </CardFooter>
            )}
        </CardShell>
    )
}
