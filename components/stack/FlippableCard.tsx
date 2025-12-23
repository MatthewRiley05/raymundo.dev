"use client"

import { cn } from "@/lib/utils"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

function isInteractiveTarget(target: EventTarget | null) {
    if (!(target instanceof HTMLElement)) return false
    return Boolean(
        target.closest('a,button,input,textarea,select,label,[role="link"],[data-no-flip]')
    )
}

type Props = {
    flipped: boolean
    onToggle: () => void
    front: React.ReactNode
    back: React.ReactNode
    className?: string
}

export default function FlippableCard({ flipped, onToggle, front, back, className }: Props) {
    const rot = useMotionValue(0)

    const lift = useTransform(rot, [0, 90, 180], [0, -16, 0])
    const scale = useTransform(rot, [0, 90, 180], [1, 1.02, 1])
    const shadow = useTransform(rot, [0, 90, 180], [
        "0 12px 30px rgba(0,0,0,0.28)",
        "0 26px 80px rgba(0,0,0,0.46)",
        "0 12px 30px rgba(0,0,0,0.28)",
    ])

    const shineX = useTransform(rot, [0, 90, 180], ["-55%", "0%", "55%"])

    const frontShineOpacity = useTransform(rot, [0, 35, 75, 105], [0.0, 0.25, 0.08, 0.0])

    const backShineOpacity = useTransform(rot, [75, 105, 145, 180], [0.0, 0.08, 0.25, 0.0])

    useEffect(() => {
        animate(rot, flipped ? 180 : 0, {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
        })
    }, [flipped, rot])

    return (
        <div
            role="button"
            tabIndex={0}
            aria-pressed={flipped}
            onClick={(e) => {
                if (isInteractiveTarget(e.target)) return
                onToggle()
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    onToggle()
                }
            }}
            className={cn("relative w-full h-full cursor-pointer select-none [perspective:1800px]", className)}
        >
            <motion.div
                style={{
                    rotateY: rot,
                    y: lift,
                    scale,
                    boxShadow: shadow,
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                }}
                className="relative w-full h-full"
            >
                <div className="absolute inset-0 [backface-visibility:hidden]">
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                        {front}

                        <motion.div
                            style={{ x: shineX, opacity: frontShineOpacity }}
                            className="pointer-events-none absolute inset-0 z-50 mix-blend-screen"
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.42),rgba(255,255,255,0.14),transparent)]" />
                        </motion.div>
                    </div>
                </div>

                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                        {back}

                        <motion.div
                            style={{ x: shineX, opacity: backShineOpacity }}
                            className="pointer-events-none absolute inset-0 z-50 mix-blend-screen"
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.38),rgba(255,255,255,0.12),transparent)]" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
