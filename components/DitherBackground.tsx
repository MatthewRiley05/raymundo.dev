"use client"

import Dither from '@/components/ui/Dither';

export default function DitherBackground() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
            <Dither
                waveColor={[0.5, 0.5, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={false}
                mouseRadius={0.3}
                colorNum={40}
                waveAmplitude={0.25}
                waveFrequency={2.5}
                waveSpeed={0.01}
            />
        </div>
    );
}