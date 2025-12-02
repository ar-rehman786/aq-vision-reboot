import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CTABanner } from "@/components/CTABanner";
import { FeaturesSection } from "@/components/FeaturesSection";
import { UseCaseSection } from "@/components/UseCaseSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CTABanner />
        <FeaturesSection />
        <UseCaseSection />
        <HowItWorksSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
