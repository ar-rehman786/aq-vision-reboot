import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TermsOfServices = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Internet Services Provider Agreement - Internet One</title>
        <meta name="description" content="Read the Internet One Terms & Conditions. Understand the terms for using our internet and TV service comparison platform, provider agreements, and user responsibilities." />
        <meta name="keywords" content="terms and conditions, internet services, provider agreements, user terms, Internet One terms" />
        <link rel="canonical" href="/policies/terms-of-services" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
            <div className="container-custom text-center">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Terms & Conditions</motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground">Last Updated: December 2024</motion.p>
            </div>
          </section>
          <section className="py-20">
            <div className="container-custom max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">By accessing and using Internet One (the "Website"), you accept and agree to be bound by these Terms & Conditions. The Website is owned and operated by Internetone.info, located at 3052 Bainbridge Ave, Apt 5e, Bronx, NY 10467.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">2. Services Provided</h2>
                  <p className="text-muted-foreground leading-relaxed">Internet One is an independent marketing partner. We are not the official website of any internet or cable provider.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">4. Fees and Charges</h2>
                  <p className="text-muted-foreground leading-relaxed">Internetone.info charges a separate service and setup fee for processing and coordinating orders through Internet One.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">16. Contact Information</h2>
                <div className="bg-muted/50 rounded-xl p-6 space-y-2">
                    <p className="font-semibold text-foreground">Internet One</p>
                    <p className="text-muted-foreground">Internetone.info</p>
                    <p className="text-muted-foreground">3052 Bainbridge Ave, Apt 5e</p>
                    <p className="text-muted-foreground">Bronx, NY 10467</p>
                    <p className="text-muted-foreground mt-3">Email: <a href="mailto:AQsystems7@gmail.com" className="text-primary hover:underline">AQsystems7@gmail.com</a></p>
                    <p className="text-muted-foreground">Phone: <a href="tel:+19295365524" className="text-primary hover:underline">(929) 536-5524</a></p>
                  </div>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mt-8">
                  <p className="font-semibold text-foreground mb-3">Related Policies</p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/policies/privacy-policy" className="text-primary hover:underline text-sm">Privacy Policy</Link>
                    <Link to="/policies/refund-policy" className="text-primary hover:underline text-sm">Refund Policy</Link>
                    <Link to="/policies/disclaimer" className="text-primary hover:underline text-sm">Disclaimer</Link>
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

export default TermsOfServices;
