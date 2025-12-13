import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfServices = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | User Agreement - AQ Systems</title>
        <meta 
          name="description" 
          content="Read the AQ Systems terms of service. Understand the terms and conditions for using our internet and TV service comparison platform." 
        />
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
                Terms of Service
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
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using AQ Systems (the "Website"), you accept and agree to be bound 
                  by these Terms of Service. The Website is owned and operated by AQ Systems, located 
                  at 3408 E Derringer Way, Gilbert, AZ 85297. If you do not agree to these terms, 
                  please do not use this Website.
                </p>

                <h2>2. Services Provided</h2>
                <p>
                  AQ Systems is an independent service partner. We are not the official website of 
                  any internet or cable provider. Our services include:
                </p>
                <ul>
                  <li>Helping customers explore available internet and TV services in their area</li>
                  <li>Providing information about plans and pricing from participating service providers</li>
                  <li>Assisting with the ordering process and coordinating with service providers</li>
                  <li>Facilitating communication between customers and service providers</li>
                </ul>

                <h2>3. Independent Service Partner Status</h2>
                <p>
                  AQ Systems operates as an independent service partner. We are not affiliated with, 
                  endorsed by, or the official website of any specific internet or cable provider. 
                  All service provider names, logos, and trademarks are the property of their 
                  respective owners and are used for identification purposes only.
                </p>

                <h2>4. Fees and Charges</h2>
                <p>
                  AQ Systems may charge a separate service and setup fee for processing and 
                  coordinating orders. These fees are:
                </p>
                <ul>
                  <li>Disclosed to you prior to order completion</li>
                  <li>In addition to charges from the service provider</li>
                  <li>Non-refundable once the order has been processed</li>
                  <li>Subject to change without prior notice</li>
                </ul>

                <h2>5. Pricing and Availability</h2>
                <p>
                  Prices displayed on this Website are typical ranges based on current market data 
                  and may vary by location, provider, and available promotions. We make no guarantee 
                  that specific prices or services will be available at your address. Final pricing 
                  and service availability will be confirmed by the service provider during the 
                  ordering process.
                </p>

                <h2>6. Service Provider Relationship</h2>
                <p>
                  Once you place an order through AQ Systems, you will enter into a separate agreement 
                  with the service provider. AQ Systems is not responsible for the service provider's 
                  performance, billing, technical support, or service delivery. All matters related 
                  to your active service must be addressed directly with your service provider.
                </p>

                <h2>7. User Responsibilities</h2>
                <p>You agree to:</p>
                <ul>
                  <li>Provide accurate and complete information when using our Website</li>
                  <li>Use the Website only for lawful purposes</li>
                  <li>Not misuse or attempt to gain unauthorized access to the Website</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>

                <h2>8. No Warranties</h2>
                <p>
                  The Website and information provided are offered "as is" without any warranty of 
                  any kind, either express or implied. We do not warrant that the Website will be 
                  uninterrupted, error-free, or free from viruses or other harmful components. We 
                  make no warranty regarding the performance, quality, or reliability of services 
                  provided by third-party service providers.
                </p>

                <h2>9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, AQ Systems shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages arising from 
                  your use of the Website or services. Our total liability shall not exceed the 
                  amount of fees you paid to us for our services.
                </p>

                <h2>10. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless AQ Systems and its officers, 
                  directors, employees, and agents from any claims, damages, losses, liabilities, 
                  and expenses (including legal fees) arising out of or related to your use of the 
                  Website or violation of these Terms.
                </p>

                <h2>11. Intellectual Property</h2>
                <p>
                  All content on this Website, including text, graphics, logos, and software, is 
                  the property of AQ Systems or its content suppliers and is protected by intellectual 
                  property laws. You may not reproduce, distribute, or create derivative works 
                  without our written permission.
                </p>

                <h2>12. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will 
                  be effective immediately upon posting to the Website. Your continued use of the 
                  Website after any changes constitutes acceptance of the new terms.
                </p>

                <h2>13. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your access to the Website at any 
                  time, without notice, for any reason, including violation of these Terms.
                </p>

                <h2>14. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the 
                  laws of the State of Arizona, United States, without regard to its conflict of 
                  law provisions.
                </p>

                <h2>15. Dispute Resolution</h2>
                <p>
                  Any disputes arising from these Terms or your use of the Website shall be resolved 
                  through binding arbitration in accordance with the rules of the American Arbitration 
                  Association, conducted in Gilbert, Arizona.
                </p>

                <h2>16. Contact Information</h2>
                <p>If you have questions about these Terms of Service, please contact us:</p>
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

export default TermsOfServices;
