"use client";

import Tilt from "react-parallax-tilt";
import { cn } from "@/lib/utils";

// Phones get a portrait card so the back face has vertical room for its bullets;
// from `sm` up the original 1.75 business-card ratio takes over.
const FRAME_CLASS =
    "w-[min(92vw,30rem)] aspect-[0.8] max-h-[80dvh] max-[360px]:aspect-[0.66] sm:w-[min(80vw,56rem)] sm:aspect-[1.75] sm:max-h-none flex items-center justify-center pointer-events-auto cursor-default";

export default function CardFrame({
    children,
    className,
    tiltEnabled = true,
}: {
    children: React.ReactNode;
    className?: string;
    tiltEnabled?: boolean;
}) {
    const frameClass = cn(FRAME_CLASS, className);
    if (!tiltEnabled) return <div className={frameClass}>{children}</div>;
    return (
        <Tilt
            tiltReverse
            scale={1.05}
            transitionSpeed={3000}
            perspective={10000}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className={frameClass}
        >
            {children}
        </Tilt>
    );
}
