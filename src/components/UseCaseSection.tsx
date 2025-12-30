import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap, Shield, Phone, Wifi, Home } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import businessProfessional from "@/assets/business-professional.jpg";
import smartHome from "@/assets/smart-home.jpg";

const useCases = [
  {
    badge: "For Families",
    title: "Perfect for Every Household",
    description: "Whether you're streaming, gaming, working from home, or managing a smart home, we help you find internet plans that match your family's needs.",
    features: [
      { icon: Zap, title: "Blazing Fast Speeds", desc: "Up to 5 Gig fiber connections available" },
      { icon: Shield, title: "Reliable Connectivity", desc: "Dependable service from leading providers" },
    ],
    image: heroFamily,
    cta: "Explore Plans",
    reverse: false,
  },
  {
    badge: "For Business",
    title: "Power Your Business Forward",
    description: "From small offices to large enterprises, get dedicated business internet with priority support and consistent speeds to keep your operations running smoothly.",
    features: [
      { icon: Wifi, title: "Symmetrical Speeds", desc: "Equal upload and download for video conferencing" },
      { icon: Phone, title: "24/7 Priority Support", desc: "Dedicated technical support when you need it" },
    ],
    image: businessProfessional,
    cta: "Call for Business Plans",
    reverse: true,
  },
  {
    badge: "Smart Living",
    title: "Ready for the Future",
    description: "Connect all your smart home devices seamlessly with high-speed fiber internet. From security cameras to voice assistants, stay connected to what matters most.",
    features: [
      { icon: Home, title: "Whole-Home Coverage", desc: "Advanced WiFi routers for every corner" },
      { icon: Shield, title: "Secure Connections", desc: "Built-in security features to protect your devices" },
    ],
    image: smartHome,
    cta: "View Fiber Plans",
    reverse: false,
  },
];

export const UseCaseSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom space-y-24 lg:space-y-32">
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              useCase.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Content */}
            <div className={useCase.reverse ? "lg:order-2" : ""}>
              <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
                {useCase.badge}
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
                {useCase.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {useCase.description}
              </p>
              <div className="space-y-4 mb-8">
                {useCase.features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {useCase.cta === "Call for Business Plans" ? (
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:+19299902934">
                    <Phone className="w-4 h-4 mr-2" />
                    {useCase.cta}
                  </a>
                </Button>
              ) : (
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">{useCase.cta}</Link>
                </Button>
              )}
            </div>

            {/* Image */}
            <div className={useCase.reverse ? "lg:order-1" : ""}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
