import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Website Disclaimer | Service Terms & Third-Party Links - Internet One</title>
        <meta name="description" content="Read the Internet One website disclaimer. Important legal information about our services, service terms, pricing accuracy, and third-party links." />
        <meta name="keywords" content="Website Disclaimer, Service Terms, Third-Party Links, Legal Notice, Pricing Disclaimer" />
        <link rel="canonical" href="/policies/disclaimer" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
            <div className="container-custom text-center">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Website Disclaimer</motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground">Last Updated: December 2024</motion.p>
            </div>
          </section>
          <section className="py-20">
            <div className="container-custom max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">1. Important Notice</h2>
                  <p className="text-muted-foreground leading-relaxed">Please read this disclaimer carefully before using Internet One. By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">2. Independent Marketing Partner</h2>
                  <p className="text-muted-foreground leading-relaxed">Internet One is owned and operated by Internetone.info, an independent marketing partner.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">8. Pricing Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">Prices shown are typical ranges and may not reflect your specific area. Internet One charges separate service fees for our services.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">9. No Professional Advice</h2>
                  <p className="text-muted-foreground leading-relaxed">The information provided on Internet One is for general informational purposes only and should not be considered professional or technical advice.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">13. Contact Information</h2>
                  <div className="bg-muted/50 rounded-xl p-6 space-y-2">
                    <p className="font-semibold text-foreground">Internet One</p>
                    <p className="text-muted-foreground">3052 Bainbridge Ave, Apt 5e</p>
                    <p className="text-muted-foreground">Bronx, NY 10467</p>
                    <p className="text-muted-foreground mt-3">Email: <a href="mailto:zahid@internetone.info" className="text-primary hover:underline">zahid@internetone.info</a></p>
                    <p className="text-muted-foreground">Phone: <a href="tel:+19295365524" className="text-primary hover:underline">(929) 536-5524</a></p>
                  </div>
                </div>
                <div className="pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Related Policies</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/policies/terms-of-services" className="text-sm text-primary hover:text-primary/80 transition-colors">Terms & Conditions</Link>
                    <Link to="/policies/privacy-policy" className="text-sm text-primary hover:text-primary/80 transition-colors">Privacy Policy</Link>
                    <Link to="/policies/refund-policy" className="text-sm text-primary hover:text-primary/80 transition-colors">Refund Policy</Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Disclaimer;
