import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Button } from "@/components/ui/button";
import { Check, Wifi, Tv, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: "49.99",
    features: [
      "100 Mbps download speed",
      "Unlimited data",
      "Free installation",
      "24/7 support",
    ],
    icon: Wifi,
    popular: false,
  },
  {
    name: "Pro",
    speed: "500 Mbps",
    price: "79.99",
    features: [
      "500 Mbps download speed",
      "Unlimited data",
      "Free installation",
      "Priority 24/7 support",
      "Free router included",
    ],
    icon: Zap,
    popular: true,
  },
  {
    name: "Ultimate",
    speed: "1 Gbps",
    price: "99.99",
    features: [
      "1 Gbps download speed",
      "Unlimited data",
      "Free installation",
      "VIP 24/7 support",
      "Premium router included",
      "Static IP address",
    ],
    icon: Shield,
    popular: false,
  },
];

const Services = () => {
  return (
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
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Choose the perfect plan for your home or business. All plans include unlimited data and professional installation.
            </motion.p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground border-2 border-primary"
                      : "bg-card border border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <plan.icon className={`w-12 h-12 mb-4 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    Up to {plan.speed}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className={plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>/mo</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className={`w-5 h-5 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                        <span className={plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "secondary" : "hero"}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TV Packages */}
        <section className="py-20 bg-card/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Add TV to Your Plan
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Bundle your internet with our TV packages for the ultimate entertainment experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <Tv className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Essential TV</h3>
                <p className="text-muted-foreground mb-4">150+ channels</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">+$29.99</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <Button variant="outline" className="w-full">Add to Plan</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <Tv className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Premium TV</h3>
                <p className="text-muted-foreground mb-4">300+ channels + Premium</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">+$49.99</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <Button variant="outline" className="w-full">Add to Plan</Button>
              </motion.div>
            </div>
          </div>
        </section>

        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
