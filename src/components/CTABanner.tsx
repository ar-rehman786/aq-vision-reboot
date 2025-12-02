import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const CTABanner = () => {
  return (
    <section className="bg-primary py-4">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground font-medium">
              Ready to get connected? Call us now!
            </span>
          </div>
          <Button 
            variant="outline" 
            className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <a href="tel:+18885240250">(888) 524-0250</a>
          </Button>
          <span className="text-primary-foreground/80 text-sm">
            Available 7 days a week • Quick setup
          </span>
        </div>
      </div>
    </section>
  );
};
