import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TermsOfServices = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Internet Services Provider Agreement - Internet Core</title>
        <meta 
          name="description" 
          content="Read the Internet Core Terms & Conditions. Understand the terms for using our internet and TV service comparison platform, provider agreements, and user responsibilities." 
        />
        <meta name="keywords" content="terms and conditions, internet services, provider agreements, user terms, Internet Core terms" />
        <link rel="canonical" href="/policies/terms-of-services" />
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
                Terms & Conditions
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
                  <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using Internet Core (the "Website"), you accept and agree to be bound 
                    by these Terms & Conditions. The Website is owned and operated by Choice Communication LLC, 
                    located at 2601 Woodland Park Drive, Apt 8209, Houston, TX 77077, USA. If you do not agree to these terms, 
                    please do not use this Website.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">2. Services Provided</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Internet Core is an independent marketing partner. We are not the official website of 
                    any internet or cable provider. Our services include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Helping customers explore available internet and TV services in their area</li>
                    <li>Providing information about plans and pricing from participating service providers</li>
                    <li>Facilitating communication between customers and service providers</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">3. Independent Marketing Partner Status</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Internet Core operates as an independent marketing partner. We are not affiliated with, 
                    endorsed by, or the official website of any specific internet or cable provider. 
                    All service provider names, logos, and trademarks are the property of their 
                    respective owners and are used for identification purposes only.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">4. Fees and Charges</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Choice Communication LLC charges a separate service and setup fee for processing and 
                    coordinating orders through Internet Core. These fees are:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Disclosed to you prior to order completion</li>
                    <li>In addition to charges from the service provider</li>
                    <li>Non-refundable once the order has been processed</li>
                    <li>Subject to change without prior notice</li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">5. Pricing and Availability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Prices displayed on this Website are typical ranges based on current market data 
                    and may vary by location, provider, and available promotions. We make no guarantee 
                    that specific prices or services will be available at your address. Final pricing 
                    and service availability will be confirmed by the service provider during the 
                    ordering process.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">6. Service Provider Relationship</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Once you place an order through Internet Core, you will enter into a separate agreement 
                    with the service provider. Internet Core is not responsible for the service provider's 
                    performance, billing, technical support, or service delivery. All matters related 
                    to your active service must be addressed directly with your service provider.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">7. User Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed">You agree to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide accurate and complete information when using our Website</li>
                    <li>Use the Website only for lawful purposes</li>
                    <li>Not misuse or attempt to gain unauthorized access to the Website</li>
                    <li>Maintain the confidentiality of any account credentials</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">8. No Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Website and information provided are offered "as is" without any warranty of 
                    any kind, either express or implied. We do not warrant that the Website will be 
                    uninterrupted, error-free, or free from viruses or other harmful components. We 
                    make no warranty regarding the performance, quality, or reliability of services 
                    provided by third-party service providers.
                  </p>
                </div>

                {/* Section 9 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">9. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the maximum extent permitted by law, Internet Core shall not be liable for any 
                    indirect, incidental, special, consequential, or punitive damages arising from 
                    your use of the Website or services. Our total liability shall not exceed the 
                    amount of fees you paid to us for our services.
                  </p>
                </div>

                {/* Section 10 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">10. Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify, defend, and hold harmless Internet Core and its officers, 
                    directors, employees, and agents from any claims, damages, losses, liabilities, 
                    and expenses (including legal fees) arising out of or related to your use of the 
                    Website or violation of these Terms.
                  </p>
                </div>

                {/* Section 11 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">11. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on this Website, including text, graphics, logos, and software, is 
                    the property of Internet Core or its content suppliers and is protected by intellectual 
                    property laws. You may not reproduce, distribute, or create derivative works 
                    without our written permission.
                  </p>
                </div>

                {/* Section 12 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">12. Modifications to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms & Conditions at any time. Changes will 
                    be effective immediately upon posting to the Website. Your continued use of the 
                    Website after any changes constitutes acceptance of the new terms.
                  </p>
                </div>

                {/* Section 13 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">13. Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to terminate or suspend your access to the Website at any 
                    time, without notice, for any reason, including violation of these Terms.
                  </p>
                </div>

                {/* Section 14 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">14. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms & Conditions shall be governed by and construed in accordance with the 
                    laws of the State of New York, United States, without regard to its conflict of 
                    law provisions.
                  </p>
                </div>

                {/* Section 15 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">15. Dispute Resolution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Any disputes arising from these Terms or your use of the Website shall be resolved 
                    through binding arbitration in accordance with the rules of the American Arbitration 
                    Association, conducted in Bronx, New York.
                  </p>
                </div>

                {/* Section 16 - Contact */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">16. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about these Terms & Conditions, please contact us:
                  </p>
                  <div className="bg-muted/50 rounded-xl p-6 space-y-2">
                    <p className="font-semibold text-foreground">Internet Core</p>
                    <p className="text-muted-foreground">Choice Communication LLC</p>
                    <p className="text-muted-foreground">2601 Woodland Park Drive, Apt 8209</p>
                    <p className="text-muted-foreground">Houston, TX 77077, USA</p>
                    <p className="text-muted-foreground mt-3">
                      Email: <a href="mailto:noor@premierlinkusa.com" className="text-primary hover:underline">noor@premierlinkusa.com</a>
                    </p>
                    <p className="text-muted-foreground">
                      Phone: <a href="tel:929-990-2934" className="text-primary hover:underline">(929) 990-2934</a>
                    </p>
                  </div>
                </div>

                {/* Related Policies */}
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mt-8">
                  <p className="font-semibold text-foreground mb-3">Related Policies</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    Please also review our other policies to understand how we handle your information and provide our services:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to="/policies/privacy-policy" 
                      className="text-primary hover:underline text-sm"
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      to="/policies/refund-policy" 
                      className="text-primary hover:underline text-sm"
                    >
                      Refund Policy
                    </Link>
                    <Link 
                      to="/policies/disclaimer" 
                      className="text-primary hover:underline text-sm"
                    >
                      Disclaimer
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

export default TermsOfServices;
