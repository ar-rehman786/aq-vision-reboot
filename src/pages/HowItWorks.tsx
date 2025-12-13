import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Users, Package, Calendar, Info, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Enter Your Address",
    description: "Enter your location to discover which providers can serve your area. This will help us identify the best options for you.",
    icon: MapPin,
    instructions: [
      "Input your full street address",
      "Add apartment or unit number if necessary",
      "Verify your service location information",
    ],
  },
  {
    number: "2",
    title: "View Available Providers",
    description: "We'll display available providers at your address along with their plans and pricing details.",
    icon: Users,
    instructions: [
      "Find out which providers cover your area",
      "Check out the plan choices available",
      "Compare prices and features",
    ],
  },
  {
    number: "3",
    title: "Choose Your Plan",
    description: "Pick the plan that suits your needs. Options include internet-only, TV-only, or bundled packages based on availability.",
    icon: Package,
    instructions: [
      "Explore different service tiers",
      "Evaluate plan features and costs",
      "Choose your ideal package",
    ],
  },
  {
    number: "4",
    title: "Schedule Installation",
    description: "After selecting a plan, we'll work with the provider to schedule installation at a time that's convenient for you.",
    icon: Calendar,
    instructions: [
      "Pick an installation date that works for you",
      "Get confirmation details",
      "Get ready for your service activation",
    ],
  },
];

const expectations = [
  {
    title: "Service Availability",
    description: "We'll show you which services are available in your area, as some providers may not cover all locations.",
  },
  {
    title: "Installation Process",
    description: "Professional installation is offered by most providers. Timing and fees vary depending on the provider.",
  },
  {
    title: "Pricing Confirmation",
    description: "Pricing will be confirmed by the provider when placing your order and may vary with promotions.",
  },
  {
    title: "Our Role",
    description: "AQ Systems assists you in finding options and connects you with providers. We are a third-party marketing partner.",
  },
];

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How to Get Started | Easy Steps to Find Internet & TV - AQ Systems</title>
        <meta 
          name="description" 
          content="Starting with AQ Systems is easy! Follow these simple four steps to find and order internet and TV services available in your area. Check availability now." 
        />
        <meta name="keywords" content="how it works, get started, internet setup, TV installation, service availability" />
        <link rel="canonical" href="/how-it-works" />
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
                How to Get Started
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Starting with AQ Systems is easy! Just follow these simple four steps to find and 
                order internet and TV services available in your area.
              </motion.p>
            </div>
          </section>

          {/* Steps Section */}
          <section className="py-20">
            <div className="container-custom">
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 md:p-10 border border-border"
                  >
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <step.icon className="w-6 h-6 text-primary" />
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                              {step.title}
                            </h2>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-lg">
                          {step.description}
                        </p>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-6">
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                          Instructions:
                        </h3>
                        <ul className="space-y-3">
                          {step.instructions.map((instruction, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                              <span className="text-muted-foreground">{instruction}</span>
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

          {/* What to Expect Section */}
          <section className="py-16 bg-card/50">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
              >
                <div className="flex items-center gap-3 mb-8 justify-center">
                  <Info className="w-6 h-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    What to Expect
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {expectations.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card rounded-xl p-6 border border-border"
                    >
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </motion.div>
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
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Begin your search for internet and TV plans available in your area today.
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

export default HowItWorks;