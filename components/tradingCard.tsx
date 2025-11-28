import Image from "next/image"
import type { ReactNode } from "react"

export type TradingCardSection = {
    heading?: string
    body: ReactNode
}

export type TradingCardProps = {
    title: string
    label: string
    image?: string
    sections: TradingCardSection[]
    footer?: ReactNode
}

export function TradingCard({ title, label, image, sections, footer }: TradingCardProps) {
    const year = new Date().getFullYear()

    return (
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl aspect-[63/88] rounded-xl bg-background/95 p-8">
            <div className="flex h-full w-full flex-col gap-3 rounded-xl border border-border bg-background/95 px-4 py-3 sm:gap-4 md-gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 sm:px-5 sm:py-4 md:px-6 md:py-5">
                <div className="flex items-baseline justify-between gap-3">
                    <h2 className="truncate text-sm font-semibold leading-tight sm:text-base md:text-lg xl:text-xl 2xl:text-2xl">
                        {title}
                    </h2>
                    <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
                        {label}
                    </span>
                </div>

                {image && (
                    <div className="relative mt-1 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-border">
                        <Image src={image} alt={title} fill className="object-cover" />
                    </div>
                )}

                <div className="flex flex-1 flex-col justify-center gap-2 text-xs sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 sm:text-sm md:text-sm">
                    {sections.map((section, idx) => (
                        <div key={idx} className="space-y-1.5">
                            {section.heading && (
                                <p className="text-xs font-semibold uppercase tracking-wide text-foreground sm:text-sm md:text-base">
                                    {section.heading}
                                </p>
                            )}
                            <div className="text-[11px] leading-relaxed text-foreground sm:text-xs md:text-sm">
                                {section.body}
                            </div>
                        </div>
                    ))}
                </div>

                {footer && (
                    <div className="border-t border-border/60 pt-2 text-[10px] text-muted-foreground sm:text-[11px]">
                        {footer}
                    </div>
                )}
            </div>

            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-muted-foreground sm:text-[10px]">
                © {year} Matthew Raymundo
            </p>
        </div>
    )
}
