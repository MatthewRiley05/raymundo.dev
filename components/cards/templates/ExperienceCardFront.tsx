"use client";

import SimpleCardLayout from "@/components/stack/SimpleCardLayout";
import Image from "next/image";
import { CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TEXT_SIZE, LOGO_SIZE } from "@/components/stack/cardSpacing";
import {
    PreviewLinkCard,
    PreviewLinkCardContent,
    PreviewLinkCardImage,
    PreviewLinkCardTrigger,
} from "@/components/animate-ui/components/radix/preview-link-card";

type Props = {
    title: string;
    subtitle: string;
    logo?: string;
    link?: string;
    date: string;
    location?: string;
    tags?: string[];
    cardLabel?: string;
};

export default function ExperienceCardFront({
    title,
    logo,
    subtitle,
    link,
    date,
    location,
    tags = [],
    cardLabel = "Experience",
}: Props) {
    return (
        <SimpleCardLayout
            header={
                <div
                    className={
                        "flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8"
                    }
                >
                    {logo && (
                        <div className={LOGO_SIZE + " relative shrink-0"}>
                            <Image
                                src={logo}
                                alt={`${title} Logo`}
                                fill
                                sizes="96px"
                                className="rounded-md object-contain"
                            />
                        </div>
                    )}
                    {link ? (
                        <PreviewLinkCard href={link}>
                            <PreviewLinkCardTrigger
                                className="text-[1.625rem] max-[360px]:text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl leading-tight hover:underline font-semibold"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {title}
                            </PreviewLinkCardTrigger>
                            <PreviewLinkCardContent>
                                <PreviewLinkCardImage alt={title} />
                            </PreviewLinkCardContent>
                        </PreviewLinkCard>
                    ) : (
                        <CardTitle className="text-[1.625rem] max-[360px]:text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl leading-tight">
                            {title}
                        </CardTitle>
                    )}
                </div>
            }
            body={
                <>
                    <dl className="flex flex-1 flex-col justify-between divide-y divide-border/60 border-t border-border/60 sm:hidden">
                        {[
                            ["Role", subtitle],
                            ["Period", date],
                            ["Based", location],
                            ["Stack", tags.join(" · ")],
                        ]
                            .filter(([, value]) => Boolean(value))
                            .map(([label, value]) => (
                                <div
                                    key={label}
                                    className="grid min-h-fit flex-1 grid-cols-[4.25rem_1fr] items-center gap-3 py-1.5"
                                >
                                    <dt className="font-mono uppercase tracking-[0.16em] text-muted-foreground text-[0.6875rem]">
                                        {label}
                                    </dt>
                                    <dd className="text-[0.9375rem] leading-snug">{value}</dd>
                                </div>
                            ))}
                    </dl>
                    <div className="hidden sm:block sm:space-y-2 md:space-y-3">
                        <div className={TEXT_SIZE.frontBody + " font-medium"}>{subtitle}</div>
                        <div
                            className={
                                "font-mono uppercase tracking-[0.22em] text-muted-foreground " + TEXT_SIZE.frontSmall
                            }
                        >
                            {date}
                            {location ? ` | ${location}` : ""}
                        </div>
                        {tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                                {tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className={TEXT_SIZE.frontSmall}>
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            }
            bottomLeft={<span className="font-mono uppercase tracking-[0.28em]">{cardLabel}</span>}
            bottomRight={<span>Front</span>}
        />
    );
}
