export const CARD_PX = "px-[clamp(1.5rem,1.15rem+1.5vw,2.75rem)]"
export const CARD_FOOTER = "border-t border-border/60 flex w-full items-center justify-between !py-[clamp(0.5rem,0.3rem+0.75vw,2.5rem)]"
export const CARD_TEXT_META = "text-[9px] sm:text-[10px] md:text-[10px] lg:text-[11px] xl:text-[11px] 2xl:text-[12px]"
export const LOGO_SIZE = "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24"

export const TEXT_SIZE = {
    body: "text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg",
    small: "text-[10px] sm:text-[11px]",
    meta: "text-[10px] sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-md text-muted-foreground",
    label: "text-[8px] sm:text-[11px]",
} as const

export const GAP_SIZE = {
    section: "gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6",
    item: "gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5",
    inline: "gap-2",
} as const
