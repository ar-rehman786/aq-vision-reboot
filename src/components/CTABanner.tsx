import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const CTABanner = () => {
  return (
    <section className="bg-primary py-3 sm:py-4">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-center sm:text-left">
          <div className="flex items-center gap-2 sm:gap-3">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            <span className="text-primary-foreground font-medium text-sm sm:text-base">
              Ready to get connected? Call us now!
            </span>
          </div>
          <Button 
            variant="outline" 
            className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <a href="tel:+19299902934">(929) 990-2934</a>
          </Button>
          <span className="text-primary-foreground/80 text-xs sm:text-sm hidden sm:inline">
            Available 7 days a week • Quick setup
          </span>
        </div>
      </div>
    </section>
  );
};
