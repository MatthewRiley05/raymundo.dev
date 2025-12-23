"use client"

import CardShell from "@/components/stack/CardShell"
import { cn } from "@/lib/utils"

type Props = {
    title: string
    body: React.ReactNode
    bottom?: React.ReactNode
    className?: string
}

export default function SimpleCardLayout({ title, body, bottom, className }: Props) {
    return (
        <CardShell
            className={className}
            header={
                <div className="px-6 pt-4 sm:px-7 sm:pt-5 md:px-8 md:pt-6 lg:px-9 xl:px-10 2xl:px-11">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">{title}</h3>
                </div>
            }
            footer={
                bottom ? (
                    <div className={cn(
                        "w-full border-t border-border/60",
                        "px-6 py-3 sm:px-7 md:px-8 lg:px-9 xl:px-10 2xl:px-11",
                        "text-xs text-muted-foreground"
                    )}>
                        {bottom}
                    </div>
                ) : null
            }
        >
            <div className="px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10 2xl:px-11 py-4 text-sm text-muted-foreground">
                {body}
            </div>
        </CardShell>
    )
}
