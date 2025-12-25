import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Headphones, Building2, MapPin, Globe, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const whyWorkWithUs = [
  {
    step: "1",
    title: "Simplified Process",
    description: "We simplify the process of discovering and comparing services from a range of providers.",
    icon: Target,
  },
  {
    step: "2",
    title: "Provider Coordination",
    description: "We coordinate with participating providers to ensure a smooth order and installation process.",
    icon: Users,
  },
  {
    step: "3",
    title: "Customer Support",
    description: "Our customer support team is ready to assist you every step of the way during the service selection and ordering process.",
    icon: Headphones,
  },
];

const companyInfo = [
  { label: "Website", value: "Internet Core", icon: Globe },
  { label: "Company", value: "ZA LOGISTICS INC", icon: Building2 },
  { label: "Business Address", value: "2601 Woodland Park Drive, Apt 8209, Houston, TX 77077, USA", icon: MapPin },
];

const disclosures = [
  "Internet Core operates independently as a marketing partner. We are not connected to, endorsed by, or the official website of any particular internet or cable provider.",
  "Product names, logos, and trademarks listed on our site are owned by their respective entities. Their inclusion does not imply any endorsement.",
  "ZA LOGISTICS INC imposes a separate service and setup fee for handling and coordinating new orders via Internet Core, in addition to the charges from the service provider.",
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Learn More About Internet Core | Your Trusted Internet & TV Partner</title>
        <meta 
          name="description" 
          content="Internet Core operates as a marketing partner under ZA LOGISTICS INC. We assist customers in discovering home internet and TV service options from participating providers across the U.S." 
        />
        <meta name="keywords" content="about Internet Core, ZA LOGISTICS INC, internet service partner, TV service company" />
        <link rel="canonical" href="/about-us" />
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
                Learn More About Internet Core
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Your trusted partner for finding home internet and TV services across the United States.
              </motion.p>
            </div>
          </section>

          {/* Who We Are */}
          <section className="py-20">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Who We Are
                  </h2>
                  <div className="space-y-4 text-muted-foreground text-lg">
                    <p>
                      <strong className="text-foreground">Internet Core</strong> operates as a marketing partner 
                      under ZA LOGISTICS INC. We are not affiliated with or the official site of any 
                      cable or internet provider.
                    </p>
                    <p>
                      We assist customers in discovering home internet and TV service options from a variety 
                      of participating providers across the U.S. Our mission is to simplify the search and 
                      connect you with providers that best meet your needs.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-8 border border-border"
                >
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                    Business Information
                  </h3>
                  <div className="space-y-6">
                    {companyInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-semibold text-foreground">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Our Mission */}
          <section className="py-20 bg-card/50">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our mission is to make it easier for customers to find and compare home internet and TV 
                  options, enabling them to make well-informed decisions about the services in their area.
                </p>
                <div className="bg-primary/10 rounded-2xl p-8 text-left">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    What We Do
                  </h3>
                  <p className="text-muted-foreground">
                    We guide customers through the process of exploring service options and collaborate with 
                    participating providers to streamline the ordering and installation steps. Our goal is to 
                    connect you with the right service for your needs, whether that is high-speed internet for 
                    remote work, entertainment packages for the family, or bundled solutions that offer the best value.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Important Disclosure */}
          <section className="py-16">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border max-w-4xl mx-auto"
              >
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Important Disclosure
                  </h2>
                </div>
                <ul className="space-y-4">
                  {disclosures.map((disclosure, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{disclosure}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Why Work With Us */}
          <section className="py-20 bg-card/50">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Work With Us?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We are committed to making your search for internet and TV services as smooth as possible.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {whyWorkWithUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 border border-border text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                      <span className="text-3xl font-bold text-primary">{item.step}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-accent/10">
            <div className="container-custom text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  We're Here to Help You Get Connected
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Start discovering the internet and TV services available in your area now.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/contact-us">Check Availability</Link>
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

export default AboutUs;
