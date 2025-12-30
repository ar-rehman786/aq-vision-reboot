import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Eye, Settings, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MapPin,
    step: "1",
    title: "Enter Your Address",
    description: "Provide your service location to check availability",
  },
  {
    icon: Eye,
    step: "2",
    title: "View Providers",
    description: "Compare plans from top providers in your area",
  },
  {
    icon: Settings,
    step: "3",
    title: "Choose Your Plan",
    description: "Select the internet speed that fits your needs",
  },
  {
    icon: Wifi,
    step: "4",
    title: "Get Connected",
    description: "Schedule professional installation quickly",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these easy steps to find your perfect internet plan.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative mx-auto w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm">
                  {step.step}
                </span>
              </div>
              
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/how-it-works">Learn More About The Process</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
