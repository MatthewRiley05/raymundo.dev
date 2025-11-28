import BusinessCard from '@/components/BusinessCard';
import DitherBackground from '@/components/DitherBackground';
import { TradingCard } from '@/components/tradingCard';
import { TypingAnimation } from '@/components/ui/typing-animation';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black p-6 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
      <div className="relative w-full h-full border-2 border-border">
        <DitherBackground />
        <div className="absolute inset-0 flex items-center justify-center h-full pointer-events-none">
          <TradingCard title="Matthew Riley Chun Raymundo" label="About Me" image={"/matthewcasual.png"} sections={[
            {
              heading: "About",
              body: (
                <span className="relative pl-6 before:content-['//'] before:absolute before:left-0 before:text-muted-foreground">
                  I build minimal and practical tools across{" "}
                  <TypingAnimation
                    cursorStyle="underscore"
                    loop
                    words={["web", "mobile", "AI"]}
                    style={{ lineHeight: 1 }}
                  />
                </span>
              ),
            },
            {
              heading: "Degree",
              body: (
                <>
                  BSc (Hons) Financial Technology &amp; Artificial Intelligence @{" "}
                  <a
                    href="https://www.polyu.edu.hk/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline"
                  >
                    The Hong Kong Polytechnic University
                  </a>
                  .
                </>
              ),
            },
            {
              heading: "Location",
              body: <>HKG ⇄ MNL</>,
            },
            {
              heading: "Now",
              body: (
                <>
                  Building a digital service marketplace for Filipinos @{" "}
                  <a
                    href="https://hanapp.com.ph/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline"
                  >
                    Hanapp
                  </a>
                  .
                </>
              ),
            },
          ]}
          />
        </div>
      </div>
    </div>
  );
}
