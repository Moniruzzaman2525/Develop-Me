import Navigation from "@/components/layout/navigation";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import SkillsSection from "@/components/sections/skills-section";
import WorkProcessSection from "@/components/sections/work-process-section";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
      <div className="w-full max-w-[1440px]">
        <Navigation />
        <HeroSection />
        <SkillsSection />
        <AboutSection />
        <WorkProcessSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}

