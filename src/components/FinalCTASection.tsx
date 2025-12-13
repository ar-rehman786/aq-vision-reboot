import { Button } from "@/components/ui/button";
import { Phone, Search } from "lucide-react";
import { motion } from "framer-motion";

export const FinalCTASection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/20 rounded-full text-primary font-medium text-sm mb-6">
            Call Now for Special Offers
          </span>
          
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary-foreground mb-4">
            Ready to Find Your Perfect Internet Plan?
          </h2>
          
          <p className="text-lg text-secondary-foreground/80 mb-10">
            Let our experts help you discover great deals available in your area today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="default" 
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href="tel:+19299902934">
                <Phone className="w-5 h-5" />
                Call: (929) 990-2934
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              <Search className="w-5 h-5" />
              Check Availability Online
            </Button>
          </div>

          <p className="text-secondary-foreground/70 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Available 7 days a week • Expert guidance • Fast setup
          </p>
        </motion.div>
      </div>
    </section>
  );
};
