import BusinessCard from '@/components/BusinessCard';
import DitherBackground from '@/components/DitherBackground';

export default function Home() {
  return (
    <div className="w-screen h-dvh bg-background p-6 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 overflow-hidden">
      <div className="relative w-full h-full border-2 border-border">
        <DitherBackground />
        <div className="absolute inset-0 flex items-center justify-center h-full pointer-events-none">
          <BusinessCard />
        </div>
      </div>
    </div>
  );
}
