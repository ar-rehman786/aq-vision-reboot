import { motion } from "framer-motion";
import { Shield, Lock, Award, CheckCircle, Headphones, CreditCard } from "lucide-react";

const trustBadges = [
  {
    icon: Shield,
    title: "Secure & Protected",
    description: "256-bit SSL encryption",
  },
  {
    icon: Lock,
    title: "Privacy Guaranteed",
    description: "Your data stays private",
  },
  {
    icon: Award,
    title: "Trusted Partner",
    description: "Authorized service partner",
  },
  {
    icon: CheckCircle,
    title: "Verified Providers",
    description: "Top-rated networks",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here to help",
  },
  {
    icon: CreditCard,
    title: "Safe Payments",
    description: "Secure transactions",
  },
];

export const TrustBadgesSection = () => {
  return (
    <section className="py-8 sm:py-12 bg-muted/30 border-y border-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by thousands of customers nationwide
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-primary/20 transition-colors">
                <badge.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-xs sm:text-sm mb-0.5 sm:mb-1">
                {badge.title}
              </h4>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
