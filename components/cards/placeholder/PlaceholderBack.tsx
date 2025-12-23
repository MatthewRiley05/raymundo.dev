"use client"

import SimpleCardLayout from "@/components/stack/SimpleCardLayout"

export default function PlaceholderBack() {
    return <SimpleCardLayout title="Project 1 · Details" body={<p>Back of the placeholder card.</p>} bottomLeft={<span className="font-mono uppercase tracking-[0.28em]">Next</span>} bottomRight={<span>Back</span>} />
}
