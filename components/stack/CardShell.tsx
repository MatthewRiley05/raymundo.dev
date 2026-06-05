"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function CardShell({ children, className }: { children: React.ReactNode; className?: string }) {
    return <Card className={cn("w-full h-full border border-border/60 bg-background/95 pt-4 sm:pt-5 md:pt-6 lg:pt-7 xl:pt-8 2xl:pt-9 pb-0 gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5", className)}>{children}</Card>
}
