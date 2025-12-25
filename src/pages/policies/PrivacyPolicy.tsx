import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Data Security & Consumer Privacy Rights - Internet Core</title>
        <meta 
          name="description" 
          content="Read the Internet Core privacy policy. Learn how we collect, use, and protect your personal information. Your data security and consumer privacy rights are our priority." 
        />
        <meta name="keywords" content="Privacy Policy, Data Security, Consumer Privacy Rights, Personal Information Protection, CCPA, Data Protection" />
        <link rel="canonical" href="/policies/privacy-policy" />
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
                Privacy Policy
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
                  <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Internet Core ("we," "our," or "us") is committed to protecting your privacy and 
                    handling your data in accordance with applicable U.S. privacy laws. This Privacy 
                    Policy explains how we collect, use, disclose, and safeguard your information 
                    when you visit our website and use our services.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
                  
                  <div className="space-y-4 ml-4">
                    <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We may collect personal information that you voluntarily provide, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Name, email address, and phone number</li>
                      <li>Service address (street address, city, state, ZIP code)</li>
                      <li>Service preferences and requirements</li>
                      <li>Any information you provide in contact forms or communications</li>
                    </ul>
                  </div>

                  <div className="space-y-4 ml-4">
                    <h3 className="text-lg font-semibold text-foreground">Automatically Collected Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When you visit our website, we may automatically collect:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                      <li>Click patterns and website usage data</li>
                    </ul>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed">We use the collected information to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Process your requests for service information</li>
                    <li>Coordinate with service providers to check availability</li>
                    <li>Communicate with you about services and availability</li>
                    <li>Improve our website and user experience</li>
                    <li>Send promotional materials (with your consent)</li>
                    <li>Comply with legal obligations</li>
                    <li>Prevent fraud and ensure security</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">4. Information Sharing and Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed">We may share your information with:</p>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Service Providers</h3>
                      <p className="text-muted-foreground leading-relaxed mt-2">
                        We share your contact and address information with participating internet and TV 
                        service providers to check service availability and facilitate your order.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Third-Party Service Providers</h3>
                      <p className="text-muted-foreground leading-relaxed mt-2">
                        We may use third-party companies for website hosting, analytics, payment processing, 
                        and marketing services. These providers have access to personal information only as 
                        needed to perform their functions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Legal Requirements</h3>
                      <p className="text-muted-foreground leading-relaxed mt-2">
                        We may disclose your information if required by law, court order, or governmental 
                        request, or to protect our rights, property, or safety.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Business Transfers</h3>
                      <p className="text-muted-foreground leading-relaxed mt-2">
                        If we are involved in a merger, acquisition, or sale of assets, your information 
                        may be transferred as part of that transaction.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">5. Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience. 
                    Cookies are small files stored on your device. We use:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">6. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement reasonable security measures to protect your personal information 
                    from unauthorized access, disclosure, alteration, or destruction. However, no 
                    method of transmission over the internet or electronic storage is 100% secure. 
                    While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">7. Your Privacy Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                    <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                    <li><strong>Do Not Sell:</strong> We do not sell your personal information to third parties</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    To exercise these rights, please contact us at{" "}
                    <a href="mailto:noor@premierlinkusa.com" className="text-primary hover:underline">noor@premierlinkusa.com</a>.
                  </p>
                </div>

                {/* Section 8 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">8. California Privacy Rights (CCPA)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    California residents have additional rights under the California Consumer Privacy 
                    Act (CCPA), including the right to know what personal information is collected, 
                    disclosed, or sold, and the right to request deletion of personal information. 
                    We do not sell personal information. To exercise your CCPA rights, please contact us.
                  </p>
                </div>

                {/* Section 9 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">9. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not directed to individuals under the age of 18. We do not 
                    knowingly collect personal information from children under 13. If we learn that 
                    we have collected information from a child, we will take steps to delete such information.
                  </p>
                </div>

                {/* Section 10 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">10. Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for 
                    the privacy practices of these external sites. We encourage you to review their 
                    privacy policies before providing any personal information.
                  </p>
                </div>

                {/* Section 11 */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">11. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. Changes will be posted on 
                    this page with an updated "Last Updated" date. We encourage you to review this 
                    policy periodically.
                  </p>
                </div>

                {/* Section 12 - Contact */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">12. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-muted/50 rounded-xl p-6 space-y-2">
                    <p className="font-semibold text-foreground">Internet Core</p>
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
                      to="/policies/refund-policy" 
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Refund Policy
                    </Link>
                    <Link 
                      to="/policies/disclaimer" 
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
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

export default PrivacyPolicy;
