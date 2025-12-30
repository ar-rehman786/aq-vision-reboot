import { motion } from "framer-motion";
import { Scale, Zap, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "Easy Comparison",
    description: "Compare plans from multiple providers in one place",
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Fast activation and professional installation",
  },
  {
    icon: Shield,
    title: "Trusted Service",
    description: "Partnered with leading internet and TV providers",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Our team helps you find the perfect plan",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Why Choose <span className="gradient-text">Internet Core</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make finding and ordering internet and TV services simple and hassle-free
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 lg:p-8 card-hover border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
