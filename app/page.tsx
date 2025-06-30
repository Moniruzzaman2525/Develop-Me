import Navigation from "@/components/layout/navigation";
import AboutSection from "@/components/sections/about-section";
import HeroSection from "@/components/sections/hero-section";
import SkillsSection from "@/components/sections/skills-section";
import WorkProcessSection from "@/components/sections/work-process-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <WorkProcessSection />
    </main>
  )
}
