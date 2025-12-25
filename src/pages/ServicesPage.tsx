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
    title: "Home Internet",
    description: "Find the best internet plans available in your area, with varying speeds from top providers. Whether you need reliable connectivity for remote work, seamless streaming, or online gaming, we help you discover options that fit your lifestyle.",
    priceRange: "$39.99 - $89.99/mo",
    icon: Wifi,
    features: [
      "Flexible speed choices to match your needs",
      "Plans from trusted nationwide providers",
      "Expert installation services included",
      "Varying equipment and router options",
      "Unlimited data available on select plans",
      "24/7 technical support access",
    ],
    color: "primary",
  },
  {
    id: "cable-tv",
    title: "Cable / TV Packages",
    description: "Explore TV plans with a variety of channel packages to match your entertainment preferences. From live sports and breaking news to family programming and premium movies, discover the viewing experience that suits you best.",
    priceRange: "$40 - $120/mo",
    icon: Tv,
    features: [
      "Multiple channel lineups available",
      "HD and premium channel options",
      "DVR service for recording favorites",
      "Sports and movie package add-ons",
      "On-demand content libraries",
      "Multi-room viewing capabilities",
    ],
    color: "accent",
  },
  {
    id: "bundles",
    title: "Internet + TV Bundles",
    description: "Bundle your internet and TV services for added convenience and potential savings. Enjoy streamlined billing, coordinated installation, and a range of configurations designed to meet your household's entertainment and connectivity needs.",
    priceRange: "$79.99 - $149.99/mo",
    icon: Package,
    features: [
      "Combined internet and TV service",
      "Single convenient monthly billing",
      "Potential bundle savings available",
      "Coordinated installation scheduling",
      "Premium channel add-on options",
      "Flexible package configurations",
    ],
    color: "primary",
  },
];

const importantInfo = [
  "Prices depend on location, service provider, and current promotions",
  "Installation and equipment costs may differ by provider",
  "A processing and setup fee is charged by Internetcore.us for coordinating your new order",
  "Availability depends on your location and the coverage of participating providers",
  "Service speeds and channels may vary depending on the provider and your location",
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Explore Our Services | Home Internet, TV & Bundle Plans - Internet Core</title>
        <meta 
          name="description" 
          content="Discover the best home internet and TV plans available through participating providers. Find flexible speeds, cable packages, and money-saving bundles starting at $29.99/mo." 
        />
        <meta name="keywords" content="home internet plans, cable TV packages, TV bundles, fiber internet, high-speed internet, streaming packages" />
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
                Explore Our Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Discover the best home internet and TV plans available through participating providers, 
                with pricing tailored to your location and preferences.
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
                  Let's Get Started!
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Find the perfect internet and TV services available in your area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/contact-us">Check Availability Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+19299902934">Call: (929) 990-2934</a>
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
