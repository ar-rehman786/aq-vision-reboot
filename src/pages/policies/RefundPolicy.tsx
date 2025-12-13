import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund & Return Policy | Refund Process & Service Charges - AQ Systems</title>
        <meta 
          name="description" 
          content="Read the AQ Systems refund and return policy. Learn about our refund process, eligibility requirements, service charges, and how to request a refund." 
        />
        <meta name="keywords" content="Refund and Return Policy, Refund Process, Service Charges, Cancellation Policy, Return Policy" />
        <link rel="canonical" href="/policies/refund-policy" />
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
                Refund & Return Policy
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
                <h2>Overview</h2>
                <p>
                  AQ Systems operates internetone.live. This Refund and Return Policy applies to services 
                  and fees charged by AQ Systems through internetone.live. This policy does not cover 
                  refunds or returns related to services provided by third-party service providers, 
                  which are subject to their own policies and terms.
                </p>

                <h2>AQ Systems Service Fees</h2>
                
                <h3>Non-Refundable Fees</h3>
                <p>
                  Service and setup fees charged by AQ Systems for order processing and coordination 
                  through internetone.live are non-refundable once the order has been submitted and 
                  processed. These fees cover:
                </p>
                <ul>
                  <li>Order processing and verification</li>
                  <li>Service availability checking</li>
                  <li>Provider coordination and communication</li>
                  <li>Administrative processing costs</li>
                </ul>

                <h2>Service Provider Charges</h2>
                <p>
                  Refunds, returns, or cancellations related to charges from your internet or TV service 
                  provider (including monthly service fees, installation fees, equipment charges, etc.) 
                  are governed by that provider's policies, not by AQ Systems.
                </p>
                <p>For service provider-related refunds, you must:</p>
                <ul>
                  <li>Contact your service provider directly</li>
                  <li>Follow their specific refund or cancellation procedures</li>
                  <li>Be aware that providers may have different policies regarding refunds, cancellations, and early termination fees</li>
                </ul>

                <h2>When Refunds May Be Considered</h2>
                <p>
                  AQ Systems may consider refunds of our service and setup fees only in the following 
                  limited circumstances:
                </p>
                <ul>
                  <li>
                    <strong>Service Not Available:</strong> If, after payment of our fees, it is determined 
                    that the requested service is not actually available at your address and no alternative 
                    service options can be provided, we may issue a full or partial refund at our discretion.
                  </li>
                  <li>
                    <strong>Duplicate Charges:</strong> If you were charged multiple times for the same 
                    service due to a processing error on our part, we will refund the duplicate charges.
                  </li>
                  <li>
                    <strong>Billing Errors:</strong> If there is a clear billing error attributable to 
                    AQ Systems, we will correct the error and issue appropriate refunds.
                  </li>
                </ul>

                <h2>Refund Request Process</h2>
                <p>To request a refund from AQ Systems, you must:</p>
                <ul>
                  <li>Contact us within 7 business days of the charge</li>
                  <li>Provide your order details and reason for the refund request</li>
                  <li>Submit documentation supporting your claim (if applicable)</li>
                  <li>Allow up to 10 business days for review of your request</li>
                </ul>
                <p>Contact Us:</p>
                <ul>
                  <li>Email: support@internetone.live</li>
                  <li>Phone: 929-990-2934</li>
                  <li>Mail: 3052 Bainbridge Ave apt 5E, Bronx NY 10467</li>
                </ul>

                <h2>Refund Method and Timing</h2>
                <p>If your refund request is approved:</p>
                <ul>
                  <li>Refunds will be issued to the original payment method used</li>
                  <li>Processing may take 5-10 business days after approval</li>
                  <li>Additional time may be required depending on your financial institution</li>
                  <li>You will receive email confirmation once the refund is processed</li>
                </ul>

                <h2>Cancellations</h2>
                
                <h3>Before Service Installation</h3>
                <p>
                  If you wish to cancel before your service provider's installation, you must contact 
                  both AQ Systems and your service provider. Our service and setup fees remain 
                  non-refundable, but you may avoid installation charges by canceling with the 
                  provider according to their policies.
                </p>

                <h3>After Service Installation</h3>
                <p>
                  After service installation, you must contact your service provider directly to 
                  discuss cancellation, as well as any applicable fees.
                </p>

                <h2>Disputes</h2>
                <p>
                  If you believe you have been charged incorrectly or have a dispute regarding fees, 
                  please contact us immediately. We are committed to resolving issues fairly and 
                  promptly. If we cannot reach a mutually satisfactory resolution, you may have the 
                  right to dispute the charge with your credit card company or financial institution.
                </p>

                <h2>No Guarantee of Provider Service</h2>
                <p>
                  AQ Systems does not guarantee the performance, quality, availability, or continuation 
                  of services provided by third-party service providers. We are not liable for service 
                  issues, and such issues do not entitle you to a refund of our fees.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                  We reserve the right to modify this Refund and Return Policy at any time. Changes 
                  will be effective immediately upon posting to the website. Your continued use of 
                  our services after changes constitutes acceptance of the updated policy.
                </p>

                <h2>Contact Information</h2>
                <p>For questions about this Refund and Return Policy or to request a refund, please contact us:</p>
                <div className="bg-muted/50 rounded-xl p-6 not-prose">
                  <p className="font-semibold text-foreground">AQ Systems</p>
                  <p className="text-muted-foreground">3052 Bainbridge Ave apt 5E</p>
                  <p className="text-muted-foreground">Bronx NY 10467</p>
                  <p className="text-muted-foreground mt-2">Email: support@internetone.live</p>
                  <p className="text-muted-foreground">Phone: 929-990-2934</p>
                </div>
              </motion.div>

              {/* Related Policies Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 pt-8 border-t border-border"
              >
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
                    to="/policies/disclaimer" 
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Disclaimer
                  </Link>
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
