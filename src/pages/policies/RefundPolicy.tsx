import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy | Returns & Cancellations - AQ Systems</title>
        <meta 
          name="description" 
          content="Read the AQ Systems refund policy. Learn about our refund process, eligibility requirements, and how to request a refund for our services." 
        />
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
                Refund Policy
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
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-bold text-foreground mt-0">Overview</h2>
                  <p className="text-muted-foreground mb-0">
                    This Refund Policy outlines the terms and conditions under which AQ Systems 
                    provides refunds for our service and coordination fees. Please read this policy 
                    carefully before using our services.
                  </p>
                </div>

                <h2>1. Scope of This Policy</h2>
                <p>
                  This refund policy applies only to fees charged by AQ Systems for our service 
                  coordination and processing services. This policy does NOT apply to:
                </p>
                <ul>
                  <li>Monthly service fees paid to your internet or TV provider</li>
                  <li>Equipment charges from service providers</li>
                  <li>Installation fees charged by service providers</li>
                  <li>Any other fees charged by third-party service providers</li>
                </ul>
                <p>
                  For refunds related to your internet or TV service, please contact your service 
                  provider directly according to their policies.
                </p>

                <h2>2. AQ Systems Service Fees</h2>
                <p>
                  AQ Systems may charge a service and setup fee for coordinating and processing 
                  orders through our platform. These fees cover:
                </p>
                <ul>
                  <li>Service availability research for your address</li>
                  <li>Plan comparison and recommendation services</li>
                  <li>Order coordination with service providers</li>
                  <li>Installation scheduling assistance</li>
                  <li>Customer support throughout the process</li>
                </ul>

                <h2>3. Refund Eligibility</h2>
                <p>You may be eligible for a refund of AQ Systems service fees if:</p>
                
                <h3>Full Refund Eligibility</h3>
                <ul>
                  <li>Your order is cancelled before we begin processing with the service provider</li>
                  <li>No service providers are available at your address (verified by our team)</li>
                  <li>We are unable to fulfill the service coordination for reasons within our control</li>
                </ul>

                <h3>Partial Refund Eligibility</h3>
                <ul>
                  <li>The service provider cancels your order after processing has begun</li>
                  <li>Installation is not completed due to provider issues</li>
                </ul>

                <h3>No Refund Situations</h3>
                <ul>
                  <li>Order has been successfully processed and installation completed</li>
                  <li>You cancel after the service provider confirms installation appointment</li>
                  <li>You provided inaccurate address or contact information</li>
                  <li>You fail to be present for scheduled installation</li>
                  <li>You cancel or modify service directly with the provider after order processing</li>
                </ul>

                <h2>4. Refund Request Process</h2>
                <p>To request a refund:</p>
                <ol>
                  <li>
                    <strong>Contact Us:</strong> Email support@internetone.live or call (929) 990-2934 
                    with your refund request
                  </li>
                  <li>
                    <strong>Provide Information:</strong> Include your name, order confirmation 
                    number (if applicable), email address, and reason for the refund request
                  </li>
                  <li>
                    <strong>Review Period:</strong> We will review your request within 5 business days
                  </li>
                  <li>
                    <strong>Decision Notification:</strong> We will email you with our decision and 
                    any next steps
                  </li>
                </ol>

                <h2>5. Refund Timeframe</h2>
                <p>If your refund is approved:</p>
                <ul>
                  <li>Credit card refunds: 5-10 business days to appear on your statement</li>
                  <li>Debit card refunds: 5-10 business days to return to your account</li>
                  <li>Other payment methods: Timeframe varies by payment provider</li>
                </ul>
                <p>
                  Please note that processing times may vary depending on your financial institution.
                </p>

                <h2>6. Disputes</h2>
                <p>
                  If you disagree with our refund decision, you may request a review by contacting 
                  us within 30 days of receiving our decision. Please provide any additional 
                  documentation or information that supports your case.
                </p>

                <h2>7. Service Provider Refunds</h2>
                <p>
                  For refunds related to your internet or TV service (monthly fees, equipment, 
                  installation, etc.), you must contact your service provider directly. Each 
                  provider has their own refund policies and procedures. AQ Systems cannot 
                  process refunds on behalf of service providers.
                </p>

                <h2>8. Changes to This Policy</h2>
                <p>
                  We reserve the right to modify this Refund Policy at any time. Changes will be 
                  posted on this page with an updated "Last Updated" date. Your continued use of 
                  our services after changes are posted constitutes acceptance of the revised policy.
                </p>

                <h2>9. Contact Us</h2>
                <p>For refund requests or questions about this policy, please contact us:</p>
                <div className="bg-muted/50 rounded-xl p-6 not-prose">
                  <p className="font-semibold text-foreground">AQ Systems</p>
                  <p className="text-muted-foreground">3052 Bainbridge Ave apt 5E</p>
                  <p className="text-muted-foreground">Bronx NY 10467</p>
                  <p className="text-muted-foreground mt-2">Email: support@internetone.live</p>
                  <p className="text-muted-foreground">Phone: (929) 990-2934</p>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mt-8 not-prose">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Related Policies:</strong> This refund policy 
                    is part of our overall terms and conditions. Please also review our{" "}
                    <Link to="/policies/terms-of-services" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/policies/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>.
                  </p>
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
