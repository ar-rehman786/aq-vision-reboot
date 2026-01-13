import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund & Return Policy | Refund Process & Service Charges - Internet One</title>
        <meta name="description" content="Read the Internet One refund and return policy. Learn about our refund process, eligibility requirements, service charges, and how to request a refund." />
        <meta name="keywords" content="Refund and Return Policy, Refund Process, Service Charges, Cancellation Policy, Return Policy" />
        <link rel="canonical" href="/policies/refund-policy" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
            <div className="container-custom text-center">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Refund & Return Policy</motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground">Last Updated: December 2024</motion.p>
            </div>
          </section>
          <section className="py-20">
            <div className="container-custom max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">1. Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">This Refund and Return Policy applies to services and fees charged by Internet One. This policy does not cover refunds or returns related to services provided by third-party service providers, which are subject to their own policies and terms.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">2. Internet One Service Fees</h2>
                  <p className="text-muted-foreground leading-relaxed">Service and setup fees charged by Internet One for order processing and coordination are non-refundable once the order has been submitted and processed.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">5. Refund Request Process</h2>
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mt-6">
                    <p className="font-semibold text-foreground mb-3">Contact Us:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Email: <a href="mailto:AQsystems7@gmail.com" className="text-primary hover:underline">AQsystems7@gmail.com</a></li>
                      <li>Phone: <a href="tel:+19295365524" className="text-primary hover:underline">(929) 536-5524</a></li>
                      <li>Mail: 3052 Bainbridge Ave, Apt 5e, Bronx, NY 10467</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">11. Contact Information</h2>
                  <div className="bg-muted/50 rounded-xl p-6 space-y-2">
                    <p className="font-semibold text-foreground">Internet One</p>
                    <p className="text-muted-foreground">3052 Bainbridge Ave, Apt 5e</p>
                    <p className="text-muted-foreground">Bronx, NY 10467</p>
                    <p className="text-muted-foreground mt-3">Email: <a href="mailto:AQsystems7@gmail.com" className="text-primary hover:underline">AQsystems7@gmail.com</a></p>
                    <p className="text-muted-foreground">Phone: <a href="tel:+19295365524" className="text-primary hover:underline">(929) 536-5524</a></p>
                  </div>
                </div>
                <div className="pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Related Policies</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/policies/terms-of-services" className="text-sm text-primary hover:text-primary/80 transition-colors">Terms & Conditions</Link>
                    <Link to="/policies/privacy-policy" className="text-sm text-primary hover:text-primary/80 transition-colors">Privacy Policy</Link>
                    <Link to="/policies/disclaimer" className="text-sm text-primary hover:text-primary/80 transition-colors">Disclaimer</Link>
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

export default RefundPolicy;
