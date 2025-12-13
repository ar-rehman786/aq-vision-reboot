import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Wifi, Tv, Package, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "internet",
    title: "High-Speed Internet",
    description: "Experience blazing-fast internet with speeds that keep up with your digital lifestyle. Stream, game, work from home, and connect all your devices without interruption.",
    priceRange: "$39.99 - $89.99/mo",
    icon: Wifi,
    features: [
      "Multiple speed options up to 5 Gbps",
      "Plans from trusted nationwide providers",
      "Professional installation included",
      "Modern equipment and router options",
      "Unlimited data on most plans",
      "24/7 technical support available",
    ],
    color: "primary",
  },
  {
    id: "cable-tv",
    title: "Cable TV Packages",
    description: "Enjoy premium entertainment with comprehensive channel lineups. From live sports to movies and family programming, find the perfect package for your viewing preferences.",
    priceRange: "$40 - $120/mo",
    icon: Tv,
    features: [
      "150+ to 300+ channel options",
      "HD and 4K premium channels",
      "DVR recording capabilities",
      "Sports and movie premium packages",
      "On-demand content libraries",
      "Multi-room viewing options",
    ],
    color: "accent",
  },
  {
    id: "bundles",
    title: "Internet + TV Bundles",
    description: "Maximize your savings and convenience by bundling internet and TV services. One bill, one provider, and exclusive bundle discounts for complete home entertainment.",
    priceRange: "$79.99 - $149.99/mo",
    icon: Package,
    features: [
      "Combined internet and TV service",
      "Single convenient monthly bill",
      "Exclusive bundle-only savings",
      "Coordinated installation",
      "Premium channel add-ons available",
      "Flexible package customization",
    ],
    color: "primary",
  },
];

const importantInfo = [
  "Pricing varies by location, provider, and current promotions",
  "Final pricing confirmed during your availability check",
  "Installation and equipment fees may apply",
  "Service availability depends on your specific address",
  "Speed and channel availability may vary by location",
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Internet & TV Services | Cable, Fiber & Bundle Packages - AQ Systems</title>
        <meta 
          name="description" 
          content="Explore high-speed internet plans, cable TV packages, and money-saving bundles. Compare options from $39.99/mo. Professional installation and 24/7 support included." 
        />
        <meta name="keywords" content="internet service, cable TV, TV bundles, fiber internet, high-speed internet plans, cable packages" />
        <link rel="canonical" href="/services" />
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
                Our Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                AQ Systems helps you explore home internet and TV service options from trusted providers. 
                Find the perfect plan for your needs with transparent pricing and expert guidance.
              </motion.p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20">
            <div className="container-custom">
              <div className="space-y-16">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 md:p-12 border border-border"
                  >
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`p-4 rounded-xl ${service.color === 'accent' ? 'bg-accent/20' : 'bg-primary/20'}`}>
                            <service.icon className={`w-8 h-8 ${service.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                          </div>
                          <div>
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                              {service.title}
                            </h2>
                            <p className="text-primary font-semibold text-lg">{service.priceRange}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-lg mb-6">
                          {service.description}
                        </p>
                        <p className="text-sm text-muted-foreground mb-6">
                          *Pricing varies by location and provider
                        </p>
                        <Button asChild variant="hero" size="lg">
                          <Link to="/contact-us">Check Availability</Link>
                        </Button>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-6">
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                          What's Included:
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${service.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Important Information */}
          <section className="py-16 bg-card/50">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-accent" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Important Information
                  </h2>
                </div>
                <ul className="space-y-3">
                  {importantInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary">•</span>
                      {info}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container-custom text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Let us help you find the perfect internet and TV services available in your area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/contact-us">Check Availability Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+18885240250">Call: (888) 524-0250</a>
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

export default ServicesPage;
