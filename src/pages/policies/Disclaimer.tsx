import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Website Disclaimer | Service Terms & Third-Party Links - Internet Core</title>
        <meta 
          name="description" 
          content="Read the Internet Core website disclaimer. Important legal information about our services, service terms, pricing accuracy, and third-party links." 
        />
        <meta name="keywords" content="Website Disclaimer, Service Terms, Third-Party Links, Legal Notice, Pricing Disclaimer" />
        <link rel="canonical" href="/policies/disclaimer" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
            <div className="container-custom text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6"
              >
                Website Disclaimer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground"
              >
                Last Updated: December 2024
              </motion.p>
            </div>
          </section>

          {/* Content */}
          <section className="py-20">
            <div className="container-custom max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                {/* Section 1 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">1. Important Notice</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Please read this disclaimer carefully before using Internet Core. By accessing 
                    and using this website, you acknowledge that you have read, understood, and agree 
                    to be bound by this disclaimer.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">2. Independent Marketing Partner</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Internet Core is owned and operated by Internetcore.us, an independent marketing partner.
                  </p>
                  <p className="text-foreground font-semibold mt-4">WE ARE NOT:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>The official website of any internet or cable provider</li>
                    <li>Affiliated with, endorsed by, or officially connected to any specific service provider</li>
                    <li>Responsible for the services or technical support provided by service providers</li>
                    <li>A direct service provider of internet or TV services</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">3. Trademark and Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All product names, logos, service marks, trademarks, and registered trademarks mentioned 
                    on this website are the property of their respective owners. The use of any trademark, 
                    service mark, or logo is for identification and reference purposes only and does not 
                    imply any association with, sponsorship by, or endorsement from the trademark holder.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">4. Information Accuracy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    While we strive to provide accurate and up-to-date information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Pricing, plans, and service availability are subject to change without notice</li>
                    <li>Information displayed represents typical market ranges and may vary by location</li>
                    <li>Final pricing and service details must be confirmed with service providers</li>
                    <li>We cannot guarantee the accuracy, completeness, or timeliness of all information</li>
                    <li>Promotional offers and availability may vary by provider and location</li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">5. Service Availability and Limitations</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Information about service availability is subject to several limitations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Service availability varies significantly by specific address and location</li>
                    <li>Not all services, plans, or providers are available in all areas</li>
                    <li>Stated speeds and service levels may vary based on location, network conditions, and equipment</li>
                    <li>Provider coverage maps are estimates and actual service availability may differ</li>
                    <li>Installation and service activation are subject to provider approval and feasibility</li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">6. No Guarantees or Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Internet Core makes no warranties or guarantees regarding:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Service provider performance, reliability, or quality</li>
                    <li>Specific pricing or promotional availability</li>
                    <li>Installation timelines or service activation</li>
                    <li>Speed, bandwidth, or service level achievements</li>
                    <li>Compatibility with your specific devices or needs</li>
                    <li>Continued availability of any particular plan or promotion</li>
                  </ul>
                </div>

                {/* Section 7 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">7. Third-Party Service Providers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    When you visit our website, you may enter into a separate agreement with the service provider.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>You enter into a separate agreement with the service provider</li>
                    <li>You are responsible for contacting your service provider directly for all service-related issues</li>
                    <li>Service quality, customer support, and technical issues must be addressed with the provider</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">8. Pricing Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Regarding pricing information displayed on this website:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Prices shown are typical ranges and may not reflect your specific area</li>
                    <li>Final pricing is determined by the service provider based on your location</li>
                    <li>Additional fees may apply including installation, equipment, taxes, and surcharges</li>
                    <li>Internet Core charges separate service fees for our services</li>
                    <li>Prices are subject to change without notice</li>
                  </ul>
                </div>

                {/* Section 9 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">9. No Professional Advice</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The information provided on Internet Core is for general informational purposes only 
                    and should not be considered professional or technical advice. We recommend consulting 
                    with service providers directly for specific technical requirements, compatibility 
                    questions, or detailed service information relevant to your situation.
                  </p>
                </div>

                {/* Section 10 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">10. External Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This website may contain links to external websites operated by service providers or 
                    other third parties. We are not responsible for the content, accuracy, privacy practices, 
                    or availability of external sites. Links are provided for convenience and do not imply endorsement.
                  </p>
                </div>

                {/* Section 11 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">11. Geographic Limitations</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are intended for users located within the United States. Information may 
                    not be accurate or applicable for locations outside the United States.
                  </p>
                </div>

                {/* Section 12 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">12. Changes to This Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify this Disclaimer at any time without prior notice. Changes 
                    will be effective immediately upon posting to the Website. Your continued use of the 
                    Website constitutes acceptance of any changes.
                  </p>
                </div>

                {/* Section 13 - Contact */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">13. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this Disclaimer, please contact:
                  </p>
                  <div className="bg-muted/50 rounded-xl p-6 space-y-2">
                    <p className="font-semibold text-foreground">Internet Core</p>
                    <p className="text-muted-foreground">2601 Woodland Park Drive, Apt 8209</p>
                    <p className="text-muted-foreground">Houston, TX 77077, USA</p>
                    <p className="text-muted-foreground mt-3">
                      Email: <a href="mailto:support@internetcore.us" className="text-primary hover:underline">support@internetcore.us</a>
                    </p>
                    <p className="text-muted-foreground">
                      Phone: <a href="tel:929-990-2934" className="text-primary hover:underline">(929) 990-2934</a>
                    </p>
                  </div>
                </div>

                {/* Related Policies */}
                <div className="pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Related Policies</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to="/policies/terms-of-services" 
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                    <Link 
                      to="/policies/privacy-policy" 
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      to="/policies/refund-policy" 
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Refund Policy
                    </Link>
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
