import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Website Disclaimer | Legal Notice - AQ Systems</title>
        <meta 
          name="description" 
          content="Read the AQ Systems website disclaimer. Important legal information about our services, pricing accuracy, and third-party providers." 
        />
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
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-bold text-foreground mt-0">Important Notice</h2>
                  <p className="text-muted-foreground mb-0">
                    Please read this disclaimer carefully before using AQ Systems. By accessing and using 
                    this website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
                  </p>
                </div>

                <h2>1. Independent Service Partner</h2>
                <p>
                  AQ Systems operates as an independent service partner helping customers find and connect 
                  with internet and TV service providers.
                </p>
                <p><strong>We are NOT:</strong></p>
                <ul>
                  <li>The official website of any internet or cable provider</li>
                  <li>Affiliated with, endorsed by, or officially connected to any specific service provider</li>
                  <li>Responsible for the services or technical support provided by service providers</li>
                  <li>A direct service provider of internet or TV services</li>
                </ul>

                <h2>2. Trademark and Intellectual Property</h2>
                <p>
                  All product names, logos, service marks, trademarks, and registered trademarks mentioned 
                  on this website are the property of their respective owners. The use of any trademark, 
                  service mark, or logo is for identification and reference purposes only and does not 
                  imply any association with, sponsorship by, or endorsement from the trademark holder.
                </p>

                <h2>3. Information Accuracy</h2>
                <p>While we strive to provide accurate and up-to-date information:</p>
                <ul>
                  <li>Pricing, plans, and service availability are subject to change without notice</li>
                  <li>Information displayed represents typical market ranges and may vary by location</li>
                  <li>Final pricing and service details must be confirmed with service providers</li>
                  <li>We cannot guarantee the accuracy, completeness, or timeliness of all information</li>
                  <li>Promotional offers and availability vary by provider and location</li>
                </ul>

                <h2>4. Service Availability and Limitations</h2>
                <p>Information about service availability is subject to several limitations:</p>
                <ul>
                  <li>Service availability varies significantly by specific address and location</li>
                  <li>Not all services, plans, or providers are available in all areas</li>
                  <li>Stated speeds and service levels may vary based on location, network conditions, and equipment</li>
                  <li>Provider coverage maps are estimates and actual service availability may differ</li>
                  <li>Installation and service activation are subject to provider approval and feasibility</li>
                </ul>

                <h2>5. No Guarantees or Warranties</h2>
                <p>AQ Systems makes no warranties or guarantees regarding:</p>
                <ul>
                  <li>Service provider performance, reliability, or quality</li>
                  <li>Specific pricing or promotional availability</li>
                  <li>Installation timelines or service activation</li>
                  <li>Speed, bandwidth, or service level achievements</li>
                  <li>Compatibility with your specific devices or needs</li>
                  <li>Continued availability of any particular plan or promotion</li>
                </ul>

                <h2>6. Third-Party Service Providers</h2>
                <p>When you order services through AQ Systems:</p>
                <ul>
                  <li>You enter into a separate agreement with the service provider</li>
                  <li>The provider's terms, conditions, and policies govern your service</li>
                  <li>AQ Systems is not a party to that agreement</li>
                  <li>We are not responsible for provider actions, billing, or service delivery</li>
                  <li>Service quality, customer support, and technical issues must be addressed with the provider</li>
                </ul>

                <h2>7. Pricing Disclaimer</h2>
                <p>Regarding pricing information displayed on this website:</p>
                <ul>
                  <li>Prices shown are typical ranges and may not reflect your specific area</li>
                  <li>Final pricing is determined by the service provider based on your location</li>
                  <li>Additional fees may apply including installation, equipment, taxes, and surcharges</li>
                  <li>Promotional pricing may require specific terms or commitments</li>
                  <li>AQ Systems may charge separate fees for our coordination services</li>
                  <li>Prices are subject to change without notice</li>
                </ul>

                <h2>8. No Professional Advice</h2>
                <p>
                  The information provided on AQ Systems is for general informational purposes only and 
                  should not be considered professional or technical advice. We recommend consulting with 
                  service providers directly for specific technical requirements, compatibility questions, 
                  or detailed service information relevant to your situation.
                </p>

                <h2>9. External Links</h2>
                <p>
                  This website may contain links to external websites operated by service providers or 
                  other third parties. We are not responsible for the content, accuracy, privacy practices, 
                  or availability of external sites. Links are provided for convenience only and do not 
                  imply endorsement.
                </p>

                <h2>10. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law:</p>
                <ul>
                  <li>AQ Systems is not liable for service provider actions or failures</li>
                  <li>We are not responsible for inaccuracies in displayed information</li>
                  <li>We do not guarantee service availability or specific pricing</li>
                  <li>We are not liable for any indirect, incidental, or consequential damages</li>
                  <li>Our total liability is limited to fees you paid to us</li>
                </ul>

                <h2>11. Geographic Limitations</h2>
                <p>
                  Our services are intended for customers in the United States. Service availability, 
                  pricing, and offerings are specific to U.S. markets. Information may not be accurate 
                  or applicable for locations outside the United States.
                </p>

                <h2>12. Changes to This Disclaimer</h2>
                <p>
                  We reserve the right to modify this disclaimer at any time without prior notice. 
                  Changes are effective immediately upon posting. Your continued use of the website 
                  constitutes acceptance of any changes.
                </p>

                <h2>13. Contact Information</h2>
                <p>If you have questions about this disclaimer, please contact:</p>
                <div className="bg-muted/50 rounded-xl p-6 not-prose">
                  <p className="font-semibold text-foreground">AQ Systems</p>
                  <p className="text-muted-foreground">3408 E Derringer Way</p>
                  <p className="text-muted-foreground">Gilbert, AZ 85297</p>
                  <p className="text-muted-foreground mt-2">Email: support@aqsystems.com</p>
                  <p className="text-muted-foreground">Phone: (888) 524-0250</p>
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
