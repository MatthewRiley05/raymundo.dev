"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function CardShell({ children, className }: { children: React.ReactNode; className?: string }) {
    return <Card className={cn("w-full h-full border border-border/60 bg-background/90", className)}>{children}</Card>
}
