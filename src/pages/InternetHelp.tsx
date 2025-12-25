import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wifi, Router, FileText, Shield, Gauge, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const helpTopics = [
  {
    id: "slow-connection",
    icon: Gauge,
    title: "Fixing Slow Internet Connections",
    description: "Experiencing slower speeds than expected? Here are common solutions to improve your connection.",
    tips: [
      "Restart your modem and router by unplugging for 30 seconds, then reconnecting",
      "Check for firmware updates on your router through the manufacturer's website or app",
      "Move your router to a central location, away from walls and electronic interference",
      "Reduce the number of devices connected during high-bandwidth activities",
      "Consider upgrading to a mesh WiFi system for larger homes",
      "Run a speed test during off-peak hours to establish your baseline speed",
      "Contact your provider if speeds are consistently below your plan's advertised rates",
    ],
  },
  {
    id: "wifi-setup",
    icon: Wifi,
    title: "WiFi Setup & Troubleshooting",
    description: "Get the most out of your wireless network with proper setup and optimization.",
    tips: [
      "Choose a unique network name (SSID) and strong password with a mix of characters",
      "Use WPA3 security if available, or WPA2 as a minimum for network protection",
      "Select the optimal WiFi channel using your router's auto-select feature or a WiFi analyzer app",
      "Enable both 2.4GHz (better range) and 5GHz (faster speeds) bands for flexibility",
      "Update your devices' WiFi drivers for best compatibility and performance",
      "Consider WiFi extenders or a mesh system to eliminate dead zones",
      "Keep your router's firmware updated for security and performance improvements",
    ],
  },
  {
    id: "modem-router",
    icon: Router,
    title: "Modem & Router Support",
    description: "Understanding your equipment and keeping it running smoothly.",
    tips: [
      "Know the difference: modems connect to your ISP, routers distribute the connection",
      "Gateway devices combine both functions into one unit for simplicity",
      "Check indicator lights: solid green usually means good, blinking may indicate activity or issues",
      "Position equipment in a well-ventilated area to prevent overheating",
      "Replace equipment every 3-5 years for optimal performance and security",
      "Consider purchasing your own modem to save on monthly rental fees",
      "Document your network settings before making changes for easy restoration",
    ],
  },
  {
    id: "billing-plans",
    icon: FileText,
    title: "Understanding Bills & Plans",
    description: "Navigate your internet bill and understand what you're paying for.",
    tips: [
      "Review your bill for promotional pricing expiration dates",
      "Understand the difference between promotional and regular pricing",
      "Check for additional fees like equipment rental, taxes, and surcharges",
      "Monitor your data usage if you have a capped plan",
      "Contact your provider before promotions end to negotiate new rates",
      "Bundle services when it makes financial sense for your household",
      "Set up autopay for potential discounts and to avoid late fees",
    ],
  },
  {
    id: "online-safety",
    icon: Shield,
    title: "Online Safety & Privacy",
    description: "Protect your home network and personal information while online.",
    tips: [
      "Change default router passwords immediately upon setup",
      "Enable firewall protection on your router and devices",
      "Use unique, strong passwords for each online account",
      "Enable two-factor authentication where available",
      "Be cautious with public WiFi and consider using a VPN",
      "Keep all devices updated with the latest security patches",
      "Educate family members about phishing scams and suspicious links",
      "Consider parental controls for households with children",
    ],
  },
];

const InternetHelp = () => {
  return (
    <>
      <Helmet>
        <title>Internet Help & Troubleshooting Guide - Premier Link</title>
        <meta 
          name="description" 
          content="Get help with slow internet, WiFi setup, router issues, understanding bills, and online safety. Expert tips and troubleshooting guides for common internet problems." 
        />
        <meta name="keywords" content="internet help, WiFi troubleshooting, slow internet fix, router setup, online safety tips" />
        <link rel="canonical" href="/internet-help" />
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
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              >
                Internet Help Center
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Find helpful guides and troubleshooting tips to get the most out of your internet service.
              </motion.p>
            </div>
          </section>

          {/* Quick Links */}
          <section className="py-12 border-b border-border">
            <div className="container-custom">
              <div className="flex flex-wrap justify-center gap-4">
                {helpTopics.map((topic) => (
                  <a
                    key={topic.id}
                    href={`#${topic.id}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    <topic.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{topic.title.split(" ").slice(0, 2).join(" ")}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Help Topics */}
          <section className="py-20">
            <div className="container-custom">
              <div className="space-y-16">
                {helpTopics.map((topic, index) => (
                  <motion.div
                    key={topic.id}
                    id={topic.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 md:p-10 border border-border scroll-mt-32"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <topic.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                          {topic.title}
                        </h2>
                        <p className="text-muted-foreground mt-2">{topic.description}</p>
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-6">
                      <h3 className="font-semibold text-foreground mb-4">Helpful Tips:</h3>
                      <ul className="space-y-3">
                        {topic.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-semibold flex items-center justify-center">
                              {tipIndex + 1}
                            </span>
                            <span className="text-muted-foreground">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Need More Help CTA */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-accent/10">
            <div className="container-custom text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Need More Help?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Our support team is available to assist you with any questions or issues. 
                  For active service problems, please contact your provider directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/contact-us">Contact Support</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/faq">View FAQ</Link>
                  </Button>
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

export default InternetHelp;
