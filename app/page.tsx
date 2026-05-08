"use client"

import { motion } from "motion/react"
import BusinessCard from "@/components/BusinessCard"
import DitherBackground from "@/components/DitherBackground"
import DockNavigation from "@/components/DockNavigation"

const FADE_DURATION = 1

export default function Home() {
  return (
    <div className="w-screen h-dvh bg-background p-6 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: FADE_DURATION, ease: "easeOut" }}
        className="relative w-full h-full border-2 border-border"
      >
        <DitherBackground />
        <div className="absolute inset-0 flex items-center justify-center h-full pointer-events-none">
          <BusinessCard />
        </div>
        <DockNavigation />
      </motion.div>
    </div>
  )
}