"use client";

import { Card } from "@/components/ui/card";
import { CARD_GAP } from "@/components/stack/cardSpacing";
import { cn } from "@/lib/utils";

export default function CardShell({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <Card
            className={cn(
                "w-full h-full border border-border/60 bg-background pt-4 sm:pt-5 md:pt-6 lg:pt-7 xl:pt-8 2xl:pt-9 pb-0",
                CARD_GAP,
                className,
            )}
        >
            {children}
        </Card>
    );
}
