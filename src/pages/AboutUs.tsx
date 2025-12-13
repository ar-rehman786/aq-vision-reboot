import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Headphones, Building2, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

const whyWorkWithUs = [
  {
    step: "1",
    title: "Simplified Process",
    description: "We streamline the process of finding and comparing services from multiple providers, saving you time and hassle.",
    icon: Target,
  },
  {
    step: "2",
    title: "Provider Coordination",
    description: "We work directly with participating providers to help facilitate your order and installation seamlessly.",
    icon: Users,
  },
  {
    step: "3",
    title: "Dedicated Support",
    description: "Our team is available to assist you throughout the entire service exploration and ordering process.",
    icon: Headphones,
  },
];

const companyInfo = [
  { label: "Company", value: "AQ Systems" },
  { label: "Headquarters", value: "Gilbert, AZ 85297" },
  { label: "Coverage", value: "United States Nationwide" },
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | AQ Systems - Your Trusted Internet & TV Partner</title>
        <meta 
          name="description" 
          content="Learn about AQ Systems, your trusted partner for finding home internet and TV services across the United States. Simplified process, expert support, and transparent service." 
        />
        <meta name="keywords" content="about AQ Systems, internet service partner, TV service company, trusted provider" />
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
                About AQ Systems
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
                      <strong className="text-foreground">AQ Systems</strong> is an independent service partner 
                      dedicated to helping customers discover and connect with quality internet and TV services 
                      from trusted providers across the United States.
                    </p>
                    <p>
                      We simplify the often-confusing process of finding available services in your area 
                      by providing a streamlined platform to explore, compare, and connect with providers 
                      who can meet your specific needs.
                    </p>
                    <p>
                      Our mission is to make finding the right internet and TV service as simple and 
                      stress-free as possible, with transparent information and dedicated support every 
                      step of the way.
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
                    Company Information
                  </h3>
                  <div className="space-y-6">
                    {companyInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          {item.label === "Company" && <Building2 className="w-5 h-5 text-primary" />}
                          {item.label === "Headquarters" && <MapPin className="w-5 h-5 text-primary" />}
                          {item.label === "Coverage" && <Globe className="w-5 h-5 text-primary" />}
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
                  To simplify the process of finding and comparing home internet and TV services, 
                  helping customers make informed decisions about the services available in their area.
                </p>
                <div className="bg-primary/10 rounded-2xl p-8 text-left">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    What We Do
                  </h3>
                  <p className="text-muted-foreground">
                    We assist customers in exploring available service options and coordinate with 
                    participating providers to help facilitate the ordering and installation process. 
                    Our goal is to connect you with the right service for your needs, whether that's 
                    high-speed internet for remote work, entertainment packages for the family, or 
                    bundled solutions that offer the best value.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Why Work With Us */}
          <section className="py-20">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Work With Us?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're committed to making your search for internet and TV services as smooth as possible.
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
                  Let Us Help You Get Connected
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Explore internet and TV services available in your area today.
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
