"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomeCardBack() {
    return (
        <Card className="w-full h-full border border-border/60 bg-background/90">
            <CardHeader className="px-6 pt-4 sm:px-7 sm:pt-5 md:px-8 md:pt-6 lg:px-9 xl:px-10 2xl:px-11">
                <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight">
                    Contact
                </CardTitle>
            </CardHeader>

            <CardContent className="px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10 2xl:px-11 text-[11px] sm:text-xs md:text-sm text-muted-foreground space-y-4">
                <div>
                    <div className="font-mono uppercase tracking-[0.22em] text-muted-foreground/80 text-[10px] sm:text-[11px]">
                        Email
                    </div>
                    <div className="text-foreground font-medium">matthew@example.com</div>
                </div>

                <div>
                    <div className="font-mono uppercase tracking-[0.22em] text-muted-foreground/80 text-[10px] sm:text-[11px]">
                        Links
                    </div>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <a className="underline" href="https://github.com/" target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a className="underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="font-mono uppercase tracking-[0.22em] text-muted-foreground/80 text-[10px] sm:text-[11px]">
                        Location
                    </div>
                    <div>HKG ⇄ MNL</div>
                </div>
            </CardContent>

            <CardFooter className="flex w-full items-center justify-between !py-2 xl:!py-6 2xl:!py-10 border-t border-border/60 text-[9px] sm:text-[10px] md:text-[10px] lg:text-[11px] xl:text-[11px] 2xl:text-[12px] px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10 2xl:px-11">
                <p className="font-mono uppercase tracking-[0.28em] text-muted-foreground">
                    Matthew Raymundo
                </p>
                <p className="text-muted-foreground">Back side (PR3)</p>
            </CardFooter>
        </Card>
    )
}
