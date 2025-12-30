import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CTABanner } from "@/components/CTABanner";
import { FeaturesSection } from "@/components/FeaturesSection";
import { UseCaseSection } from "@/components/UseCaseSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { HomeFAQSection } from "@/components/HomeFAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Internet Core - Find Internet & TV Services in Your Area | Fast Setup</title>
        <meta 
          name="description" 
          content="Discover and compare internet and TV packages from leading providers. Get connected with blazing-fast speeds, no hidden fees, and 24/7 expert support. Check availability now!" 
        />
        <meta name="keywords" content="internet provider, TV service, cable TV, fiber internet, high-speed internet, home internet" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="min-h-screen relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <CTABanner />
          <FeaturesSection />
          <UseCaseSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <HomeFAQSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
