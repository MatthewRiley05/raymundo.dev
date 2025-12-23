"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type CardShellProps = {
    header?: ReactNode
    children?: ReactNode
    footer?: ReactNode
    className?: string
}

export default function CardShell({ header, children, footer, className }: CardShellProps) {
    return (
        <Card className={cn("w-full h-full border border-border/60 bg-background/90", className)}>
            {header ? <CardHeader className="p-0">{header}</CardHeader> : null}
            <CardContent className="p-0">{children}</CardContent>
            {footer ? <CardFooter className="p-0">{footer}</CardFooter> : null}
        </Card>
    )
}
