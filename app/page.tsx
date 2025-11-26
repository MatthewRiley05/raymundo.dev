import DitherBackground from '@/components/dither_background';

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Dither background - positioned absolutely to cover the entire viewport */}
      <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <DitherBackground />
        </div>
      </div>

      {/* Your content goes here */}
      <div className="relative z-10" style={{ pointerEvents: 'auto' }}>
        {/* Add your page content */}
      </div>
    </div>
  );
}
