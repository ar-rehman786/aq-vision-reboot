import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wifi, Tv, Package, AlertCircle, Info, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const internetPlans = [
  {
    name: "Light Speed Plan",
    priceRange: "$39.99 – $49.99 per month",
    description: "Ideal for casual browsing and emailing",
    speed: "Up to 100 Mbps",
  },
  {
    name: "Everyday Speed Plan",
    priceRange: "$49.99 – $69.99 per month",
    description: "Perfect for streaming and video calls",
    speed: "Up to 300 Mbps",
  },
  {
    name: "Premium Speed Plan",
    priceRange: "$69.99 – $89.99 per month",
    description: "Designed for gaming and multiple device usage",
    speed: "Up to 1 Gbps",
  },
];

const tvPackages = [
  {
    name: "Essential Channel Package",
    priceRange: "$40 – $60 per month",
    channels: "75+ Channels",
  },
  {
    name: "Premium Channel Package",
    priceRange: "$60 – $90 per month",
    channels: "150+ Channels",
  },
  {
    name: "Ultimate Channel Package",
    priceRange: "$90 – $120 per month",
    channels: "250+ Channels",
  },
];

const bundles = [
  {
    name: "Basic Bundle",
    priceRange: "$79.99 – $99.99 per month",
    description: "Internet + Basic TV",
  },
  {
    name: "Standard Bundle Package",
    priceRange: "$99.99 – $129.99 per month",
    description: "Internet + Expanded TV",
  },
  {
    name: "Ultimate Bundle",
    priceRange: "$129.99 – $149.99 per month",
    description: "High-Speed Internet + Premium TV",
  },
];

const importantInfo = [
  "Prices depend on your location, provider, and any current promotions",
  "Final pricing will be confirmed when checking availability with service providers",
  "Installation fees are applicable and vary by provider (typically $0 – $100)",
  "Equipment rental may be required (typically $5 – $15/month, depending on the provider)",
  "Certain providers may offer special rates for new customers",
  "Additional taxes, fees, and surcharges may apply, and are not included in listed prices",
];

const setupFees = [
  "Choice Communication LLC applies a service and setup fee for processing and coordinating orders on AQ Systems",
  "Setup fees will be disclosed before completing the order",
  "The service and setup fees from Choice Communication LLC are non-refundable",
];

const notIncluded = [
  "Installation costs (vary depending on provider)",
  "Costs for equipment purchase or rental",
  "Taxes and government-related charges",
  "Early termination charges (if applicable)",
  "Maintenance and service call charges",
  "Add-ons or upgrades for premium channels",
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Our Pricing Plans | Internet & TV Service Rates - AQ Systems</title>
        <meta 
          name="description" 
          content="Explore our pricing plans for internet, TV, and bundle packages. Plans starting at $39.99/month. Get customized pricing based on your location and needs." 
        />
        <meta name="keywords" content="internet pricing, TV packages cost, bundle deals, affordable internet, cable TV prices" />
        <link rel="canonical" href="/pricing" />
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
                Our Pricing Plans
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Transparent pricing for internet and TV services. Find the plan that fits your budget and needs.
              </motion.p>
            </div>
          </section>

          {/* Internet Plans */}
          <section className="py-16">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Wifi className="w-8 h-8 text-primary" />
                  <h2 className="font-heading text-3xl font-bold text-foreground">
                    Internet Plans
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                  Choose from a range of speeds to match your online activities.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {internetPlans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-2">{plan.priceRange}</p>
                    <p className="text-sm text-muted-foreground mb-4">{plan.speed}</p>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* TV Packages */}
          <section className="py-16 bg-card/50">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Tv className="w-8 h-8 text-accent" />
                  <h2 className="font-heading text-3xl font-bold text-foreground">
                    TV Packages
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                  Entertainment packages with channels for every interest.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {tvPackages.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-colors"
                  >
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-2xl font-bold text-accent mb-2">{plan.priceRange}</p>
                    <p className="text-muted-foreground">{plan.channels}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Bundles */}
          <section className="py-16">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-8 h-8 text-primary" />
                  <h2 className="font-heading text-3xl font-bold text-foreground">
                    Internet + TV Bundles
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                  Save more by bundling your internet and TV services together.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {bundles.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-2">{plan.priceRange}</p>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Important Information */}
          <section className="py-16 bg-card/50">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Important Pricing Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-8 border border-border"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <AlertCircle className="w-6 h-6 text-accent" />
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      Important Pricing Information
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {importantInfo.map((info, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{info}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Setup Fees */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Info className="w-6 h-6 text-primary" />
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      Service and Setup Fees
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {setupFees.map((fee, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{fee}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* What's Not Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-6 h-6 text-destructive" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    What's Not Included
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {notIncluded.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-destructive mt-1">×</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
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
                <p className="text-muted-foreground mb-4">
                  Prices displayed reflect typical 2025 U.S. market ranges and may change.
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Get Customized Pricing
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Enter your location to see exact pricing and plans available in your area.
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

export default Pricing;