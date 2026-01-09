import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Data Security & Consumer Privacy Rights - Internet One</title>
        <meta 
          name="description" 
          content="Read the Internet One privacy policy. Learn how we collect, use, and protect your personal information. Your data security and consumer privacy rights are our priority." 
        />
        <meta name="keywords" content="Privacy Policy, Data Security, Consumer Privacy Rights, Personal Information Protection, CCPA, Data Protection" />
        <link rel="canonical" href="/policies/privacy-policy" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
            <div className="container-custom text-center">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground">Last Updated: December 2024</motion.p>
            </div>
          </section>
          <section className="py-20">
            <div className="container-custom max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">Internet One ("we," "our," or "us") is committed to protecting your privacy and handling your data in accordance with applicable U.S. privacy laws. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
                  <div className="space-y-4 ml-4">
                    <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">We may collect personal information that you voluntarily provide, including:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4"><li>Name, email address, and phone number</li><li>Service address (street address, city, state, ZIP code)</li><li>Service preferences and requirements</li><li>Any information you provide in contact forms or communications</li></ul>
                  </div>
                  <div className="space-y-4 ml-4">
                    <h3 className="text-lg font-semibold text-foreground">Automatically Collected Information</h3>
                    <p className="text-muted-foreground leading-relaxed">When you visit our website, we may automatically collect:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4"><li>IP address and browser type</li><li>Device information and operating system</li><li>Pages visited and time spent on pages</li><li>Referring website addresses</li><li>Click patterns and website usage data</li></ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed">We use the collected information to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4"><li>Process your requests for service information</li><li>Coordinate with service providers to check availability</li><li>Communicate with you about services and availability</li><li>Improve our website and user experience</li><li>Send promotional materials (with your consent)</li><li>Comply with legal obligations</li><li>Prevent fraud and ensure security</li></ul>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">4-11. Additional Sections</h2>
                  <p className="text-muted-foreground leading-relaxed">Information Sharing and Disclosure, Cookies and Tracking Technologies, Data Security, Your Privacy Rights, California Privacy Rights (CCPA), Children's Privacy, Third-Party Links, and Changes to This Privacy Policy sections apply as standard.</p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">12. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
                  <div className="bg-muted/50 rounded-xl p-6 space-y-2">
                    <p className="font-semibold text-foreground">Internet One</p>
                    <p className="text-muted-foreground">2601 Woodland Park Drive, Apt 8209</p>
                    <p className="text-muted-foreground">Houston, TX 77077, USA</p>
                    <p className="text-muted-foreground mt-3">Email: <a href="mailto:support@internetone.us" className="text-primary hover:underline">support@internetone.us</a></p>
                    <p className="text-muted-foreground">Phone: <a href="tel:929-990-2934" className="text-primary hover:underline">(929) 990-2934</a></p>
                  </div>
                </div>
                <div className="pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Related Policies</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/policies/terms-of-services" className="text-sm text-primary hover:text-primary/80 transition-colors">Terms & Conditions</Link>
                    <Link to="/policies/refund-policy" className="text-sm text-primary hover:text-primary/80 transition-colors">Refund Policy</Link>
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

export default PrivacyPolicy;
