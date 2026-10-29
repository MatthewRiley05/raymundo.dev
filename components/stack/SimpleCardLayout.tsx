"use client";

import type { ReactNode } from "react";
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import CardShell from "@/components/stack/CardShell";
import { CARD_PX, CARD_GAP, CARD_TEXT_META, CARD_FOOTER, TEXT_SIZE, GAP_SIZE } from "@/components/stack/cardSpacing";
import { cn } from "@/lib/utils";

type Props = {
    title?: string;
    header?: ReactNode;
    body: ReactNode;
    bottomLeft?: ReactNode;
    bottomRight?: ReactNode;
    className?: string;
    /** Vertically centre the header + body instead of filling the card. */
    centered?: boolean;
};

export default function SimpleCardLayout({
    title,
    header,
    body,
    bottomLeft,
    bottomRight,
    className,
    centered = false,
}: Props) {
    return (
        <CardShell className={className}>
            <div className={cn("flex min-h-0 flex-1 flex-col", CARD_GAP, centered && "max-sm:justify-center")}>
                {header ? (
                    <CardHeader className={CARD_PX}>{header}</CardHeader>
                ) : (
                    <CardHeader className={cn(CARD_PX, "items-center")}>
                        <CardTitle className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight">
                            {title}
                        </CardTitle>
                    </CardHeader>
                )}
                <CardContent
                    className={cn(
                        CARD_PX,
                        centered ? "flex-none sm:flex-grow" : "flex-grow",
                        TEXT_SIZE.body,
                        "flex flex-col",
                        GAP_SIZE.section,
                    )}
                >
                    {body}
                </CardContent>
            </div>
            {(bottomLeft || bottomRight) && (
                <CardFooter className={cn(CARD_PX, CARD_TEXT_META, CARD_FOOTER, "text-muted-foreground")}>
                    <div>{bottomLeft}</div>
                    <div>{bottomRight}</div>
                </CardFooter>
            )}
        </CardShell>
    );
}
