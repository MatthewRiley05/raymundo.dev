export const CARD_PX = "px-4 sm:px-6 md:px-8 lg:px-9 xl:px-10 2xl:px-11";
export const CARD_GAP = "gap-5 sm:gap-1.5 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5";
export const CARD_FOOTER =
    "border-t border-border/60 flex w-full items-center justify-between gap-3 !py-[clamp(0.5rem,0.3rem+0.75vw,2.5rem)]";
export const CARD_TEXT_META = "text-[clamp(0.625rem,0.55rem+0.125vw,0.75rem)]";
export const LOGO_SIZE = "w-16 h-16 sm:w-[clamp(3rem,0.5rem+5vw,6rem)] sm:h-[clamp(3rem,1.4rem+4vw,6rem)]";

export const TEXT_SIZE = {
    body: "text-[clamp(0.75rem,0.3rem+0.9vw,1rem)] sm:text-[clamp(0.6875rem,0.4rem+0.5vw,1rem)]",
    small: "text-[clamp(0.625rem,0.45rem+0.15vw,0.75rem)]",
    meta: "text-[0.8125rem] leading-snug text-muted-foreground max-[360px]:text-[0.6875rem] sm:text-[clamp(0.6875rem,0.4rem+0.3vw,0.75rem)] sm:leading-normal",
    label: "text-[0.6875rem] sm:text-[clamp(0.625rem,0.25rem+0.35vw,0.75rem)]",
    // Front faces are portrait on phones, so they can afford larger copy than the
    // dense back face. Values from `sm` up match the original desktop scale.
    frontBody: "text-[1.0625rem] leading-snug sm:text-[clamp(0.6875rem,0.4rem+0.3vw,0.75rem)] sm:leading-normal",
    frontSmall: "text-[0.8125rem] sm:text-[clamp(0.625rem,0.45rem+0.15vw,0.75rem)]",
    // Home copy sits on a single long line, so it runs one step smaller on phones
    // to keep "mobile" on the same line as "web" and "AI".
    homeBody: "text-[1rem] leading-snug sm:text-[clamp(0.6875rem,0.4rem+0.3vw,0.75rem)] sm:leading-normal",
} as const;

export const GAP_SIZE = {
    section: "gap-[clamp(0.5rem,-0.1rem+1.5vw,1.5rem)]",
    item: "gap-[clamp(0.5rem,-0.1rem+1.5vw,1.5rem)]",
    inline: "gap-[clamp(0.5rem,0.4rem+0.25vw,0.75rem)]",
} as const;

export const STACK_SIZE = {
    item: "space-y-[clamp(0.25rem,-0.1rem+1.5vw,1.5rem)]",
    tight: "space-y-[clamp(0.125rem,0rem+0.25vw,0.5rem)]",
} as const;
