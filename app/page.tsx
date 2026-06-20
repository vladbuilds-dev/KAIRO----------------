import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Metrics } from "@/components/sections/Metrics";
import { HowItWorksTeaser } from "@/components/sections/HowItWorksTeaser";
import { Strategies } from "@/components/sections/Strategies";
import { EcosystemMarquee } from "@/components/sections/EcosystemMarquee";
import { Security } from "@/components/sections/Security";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Metrics />
      <HowItWorksTeaser />
      <Strategies />
      <EcosystemMarquee />
      <Security />
      <CtaBand variant="waitlist" />
    </>
  );
}
