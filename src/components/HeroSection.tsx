import { Phone, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import heroFamily from "@/assets/hero-family.jpg";
import { ZipCodeChecker } from "@/components/ZipCodeChecker";

const benefits = [
  "No Hidden Fees",
  "Expert Support",
  "Free Consultation",
];

export const HeroSection = () => {
  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
              Trusted by thousands nationwide
            </motion.div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4 sm:mb-6">
              Find Home Internet & TV Services{" "}
              <span className="gradient-text">in Your Area</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Internet Core helps you discover and compare internet and TV packages. 
              Get connected with great deals available at your location.
            </p>

            {/* Zip Code Checker */}
            <div className="mb-6 sm:mb-8">
              <ZipCodeChecker variant="hero" />
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroFamily}
                alt="Family enjoying internet services at home"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
            </div>
            
            {/* Floating card - hidden on very small screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hidden sm:block absolute -bottom-4 sm:-bottom-6 left-2 sm:-left-6 bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-border"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Ready to connect?</p>
                  <p className="font-heading font-bold text-sm sm:text-base text-foreground">Available 7 days</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
