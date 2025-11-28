import Image from 'next/image'

export type TradingCardSection = {
    heading?: string
    body: React.ReactNode
}

export type TradingCardProps = {
    title: string
    label: string
    image?: string
    sections: TradingCardSection[]
    footer?: React.ReactNode
}

export function TradingCard({ title, label, image, sections, footer }: TradingCardProps) {
    const year = new Date().getFullYear()

    return (
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl aspect-[63/88] rounded-xl bg-background/95 p-8">
            <div className="w-full h-full rounded-xl border border-border bg-background/95 px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 flex flex-col gap-3 sm:gap-4 md-gap-5 lg:gap-6 xl:gap-7 2xl:gap-8">
                <div className="flex items-baseline justify-between gap-3">
                    <h2 className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold leading-tight truncate">
                        {title}
                    </h2>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap">
                        {label}
                    </span>
                </div>

                {image && (
                    <div className="mt-1 rounded-xl border border-border overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                        <Image src={image} alt={title} fill className="object-cover" />
                    </div>
                )}

                <div className="flex-1 flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm md:text-sm">
                    {sections.map((section, idx) => (
                        <div key={idx} className="space-y-1">
                            {section.heading && (
                                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                                    {section.heading}
                                </p>
                            )}
                            <div className="text-foreground text-[11px] sm:text-xs md:text-sm leading-relaxed">
                                {section.body}
                            </div>
                        </div>
                    ))}
                </div>

                {footer && (
                    <div className="pt-2 border-t border-border/60 text-[10px] sm:text-[11px] text-muted-foreground">
                        {footer}
                    </div>
                )}
            </div>

            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] text-muted-foreground">
                © {year} Matthew Raymundo
            </p>
        </div>
    )
}
