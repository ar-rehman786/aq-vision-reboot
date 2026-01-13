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
                  <p className="text-muted-foreground leading-relaxed">This Refund & Return Policy applies to services and fees charged by Internet One. It does not cover refunds or returns related to services provided by third-party service providers (such as internet/TV carriers or other external vendors), which are subject to their own terms and policies.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">2. 14-Day Refund Window (Money-Back Guarantee)</h2>
                  <p className="text-muted-foreground leading-relaxed">Customers may request a refund within 14 days of receiving/activating our services. If your refund request is approved, we will refund eligible charges based on the terms below.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">3. What's Eligible for a Refund</h2>
                  <p className="text-muted-foreground leading-relaxed">Within the 14-day window, refunds may apply to eligible Internet One service charges paid directly to Internet One.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">4. Non-Refundable Fees</h2>
                  <p className="text-muted-foreground leading-relaxed">The following fees are non-refundable, even within the 14-day window:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Service, setup, order processing, and coordination fees once the order has been submitted and processed.</li>
                    <li>Any fees already charged by or paid to third-party providers (see Section 5).</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">5. Third-Party Provider Charges</h2>
                  <p className="text-muted-foreground leading-relaxed">Internet One may help coordinate services that are delivered by third-party providers. Any charges from third-party providers are not refunded by Internet One and must be handled directly through the provider's refund/cancellation policy.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">6. Refund Request Process</h2>
                  <p className="text-muted-foreground leading-relaxed">To request a refund, contact us and include:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Your full name</li>
                    <li>Service address</li>
                    <li>Order details (invoice/order number if available)</li>
                    <li>Reason for the refund request</li>
                  </ul>
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mt-6">
                    <p className="font-semibold text-foreground mb-3">Contact Us:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Email: <a href="mailto:AQsystems7@gmail.com" className="text-primary hover:underline">AQsystems7@gmail.com</a></li>
                      <li>Phone: <a href="tel:+19295365524" className="text-primary hover:underline">(929) 536-5524</a></li>
                      <li>Mail: 3052 Bainbridge Ave, Apt 5E, Bronx, NY 10467</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">7. Refund Method & Processing Time</h2>
                  <p className="text-muted-foreground leading-relaxed">If approved, refunds are issued to the original payment method used. Processing time is typically 5–10 business days (timing can vary based on your bank/payment provider).</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">8. Contact Information</h2>
                  <div className="bg-muted/50 rounded-xl p-6 space-y-2">
                    <p className="font-semibold text-foreground">Internet One</p>
                    <p className="text-muted-foreground">3052 Bainbridge Ave, Apt 5E</p>
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
