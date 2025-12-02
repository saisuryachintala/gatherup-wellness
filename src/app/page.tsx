import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyGatherUp } from "@/components/WhyGatherUp";
import { OurMission } from "@/components/OurMission";
import { WhyChoose } from "@/components/WhyChoose";
import { PowerOfTenant } from "@/components/PowerOfTenant";
import { ThrivingWorkplace } from "@/components/ThrivingWorkplace";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <WhyGatherUp />
      <OurMission />
      <WhyChoose />
      <PowerOfTenant />
      <ThrivingWorkplace />
      <Footer />
    </main>
  );
}
