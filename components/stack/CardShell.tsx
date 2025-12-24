"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function CardShell({ children, className }: { children: React.ReactNode; className?: string }) {
    return <Card className={cn("w-full h-full pb-0 border border-border/60 bg-background/95 gap-2 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7", className)}>{children}</Card>
}
