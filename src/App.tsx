import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { NetworkBackground } from "@/components/NetworkBackground";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import InternetHelp from "./pages/InternetHelp";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Disclaimer from "./pages/policies/Disclaimer";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsOfServices from "./pages/policies/TermsOfServices";
import RefundPolicy from "./pages/policies/RefundPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            {/* Background layer */}
            <div className="network-bg-base" />
            <NetworkBackground />
            <FloatingContactButton />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/internet-help" element={<InternetHelp />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/policies/disclaimer" element={<Disclaimer />} />
              <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/policies/terms-of-services" element={<TermsOfServices />} />
              <Route path="/policies/refund-policy" element={<RefundPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
