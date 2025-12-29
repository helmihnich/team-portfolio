import Capabilities from "@/components/Capabilities";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import  Hero from "@/components/Hero";
import MissionBriefs from "@/components/MissionBriefs";
import  Process from "@/components/Process";
import SweetSpot from "@/components/SweetSpot";
import Team from "@/components/Team";
import { TrustedBy } from "@/components/TrustedBy";


export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <Hero />
      {/* <TrustedBy /> */}
      <SweetSpot />
      <Capabilities  />
      <Team />
      <Process />
      <MissionBriefs />
      <CTA />
      <Footer />
    </div>
  );
}