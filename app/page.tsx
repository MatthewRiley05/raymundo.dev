import DitherBackground from '@/components/DitherBackground';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black p-16">
      <div className="relative w-full h-full border-2 border-border">
        <DitherBackground />
      </div>
    </div>
  );
}
