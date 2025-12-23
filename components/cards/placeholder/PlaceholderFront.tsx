"use client"

import SimpleCardLayout from "@/components/stack/SimpleCardLayout"

export default function PlaceholderFront() {
    return <SimpleCardLayout title="Project 1" body={<p>This is a placeholder card to test the stack.</p>} bottomLeft={<span className="font-mono uppercase tracking-[0.28em]">Next</span>} bottomRight={<span>Front</span>} />
}
