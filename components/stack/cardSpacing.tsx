export const CARD_PX = "px-[clamp(1.5rem,1.15rem+1.5vw,2.75rem)]"
export const CARD_FOOTER = "border-t border-border/60 flex w-full items-center justify-between !py-[clamp(0.5rem,0.3rem+0.75vw,2.5rem)]"
export const CARD_TEXT_META = "text-[clamp(0.5625rem,0.55rem+0.125vw,0.75rem)]"
export const LOGO_SIZE = "w-[clamp(2.5rem,1.4rem+4vw,6rem)] h-[clamp(2.5rem,1.4rem+4vw,6rem)]"

export const TEXT_SIZE = {
    body: "text-[clamp(0.688rem,0.55rem+0.5vw,1.125rem)]",
    small: "text-[clamp(0.625rem,0.6rem+0.1vw,0.75rem)]",
    meta: "text-[clamp(0.625rem,0.6rem+0.3vw,0.75rem)] text-muted-foreground",
    label: "text-[clamp(0.5rem,0.45rem+0.25vw,0.75rem)]",
} as const

export const GAP_SIZE = {
    section: "gap-[clamp(0.25rem,-0.1rem+1.5vw,1.5rem)]",
    item: "gap-[clamp(0.25rem,-0.1rem+1.5vw,1.5rem)]",
    inline: "gap-[clamp(0.5rem,0.4rem+0.25vw,0.75rem)]",
} as const
