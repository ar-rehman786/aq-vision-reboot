import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Data Protection - AQ Systems</title>
        <meta 
          name="description" 
          content="Read the AQ Systems privacy policy. Learn how we collect, use, and protect your personal information when using our internet and TV services." 
        />
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
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <h2>1. Introduction</h2>
                <p>
                  AQ Systems ("we," "our," or "us") is committed to protecting your privacy and 
                  handling your data in accordance with applicable U.S. privacy laws. This Privacy 
                  Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website and use our services.
                </p>

                <h2>2. Information We Collect</h2>
                
                <h3>Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide, including:</p>
                <ul>
                  <li>Name, email address, and phone number</li>
                  <li>Service address (street address, city, state, ZIP code)</li>
                  <li>Service preferences and requirements</li>
                  <li>Any information you provide in contact forms or communications</li>
                </ul>

                <h3>Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul>
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Click patterns and website usage data</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>We use the collected information to:</p>
                <ul>
                  <li>Process your requests for service information</li>
                  <li>Coordinate with service providers to check availability</li>
                  <li>Communicate with you about services and availability</li>
                  <li>Improve our website and user experience</li>
                  <li>Send promotional materials (with your consent)</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>

                <h2>4. Information Sharing and Disclosure</h2>
                
                <h3>Service Providers</h3>
                <p>
                  We share your contact and address information with participating internet and TV 
                  service providers to check service availability and facilitate your order.
                </p>

                <h3>Third-Party Service Providers</h3>
                <p>
                  We may use third-party companies for website hosting, analytics, payment processing, 
                  and marketing services. These providers have access to personal information only as 
                  needed to perform their functions.
                </p>

                <h3>Legal Requirements</h3>
                <p>
                  We may disclose your information if required by law, court order, or governmental 
                  request, or to protect our rights, property, or safety.
                </p>

                <h3>Business Transfers</h3>
                <p>
                  If we are involved in a merger, acquisition, or sale of assets, your information 
                  may be transferred as part of that transaction.
                </p>

                <h2>5. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience. 
                  Cookies are small files stored on your device. We use:
                </p>
                <ul>
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertising</li>
                </ul>
                <p>
                  You can control cookies through your browser settings, though disabling cookies 
                  may affect website functionality.
                </p>

                <h2>6. Data Security</h2>
                <p>
                  We implement reasonable security measures to protect your personal information 
                  from unauthorized access, disclosure, alteration, or destruction. However, no 
                  method of transmission over the internet or electronic storage is 100% secure. 
                  While we strive to protect your information, we cannot guarantee absolute security.
                </p>

                <h2>7. Your Privacy Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Do Not Sell:</strong> We do not sell your personal information to third parties</li>
                </ul>
                <p>To exercise these rights, please contact us at support@aqsystems.com.</p>

                <h2>8. California Privacy Rights (CCPA)</h2>
                <p>
                  California residents have additional rights under the California Consumer Privacy 
                  Act (CCPA), including the right to know what personal information is collected, 
                  disclosed, or sold, and the right to request deletion of personal information. 
                  We do not sell personal information. To exercise your CCPA rights, please contact us.
                </p>

                <h2>9. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not 
                  knowingly collect personal information from children. If we become aware that 
                  we have collected information from a child, we will take steps to delete such information.
                </p>

                <h2>10. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for 
                  the privacy practices of these external sites. We encourage you to review their 
                  privacy policies before providing any personal information.
                </p>

                <h2>11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on 
                  this page with an updated "Last Updated" date. We encourage you to review this 
                  policy periodically.
                </p>

                <h2>12. Contact Us</h2>
                <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
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

export default PrivacyPolicy;
