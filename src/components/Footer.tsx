import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

const serviceLinks = [
  { label: "Home Internet", href: "/services" },
  { label: "Business Internet", href: "/services" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/policies/terms-of-services" },
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Refund Policy", href: "/policies/refund-policy" },
  { label: "Disclaimer", href: "/policies/disclaimer" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logoIcon} alt="Internet One Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] dark:mix-blend-screen mix-blend-multiply" />
              <span className="font-heading font-bold text-xl text-foreground">
                Internet One
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Your trusted partner for finding the best internet and TV services in your area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link to={service.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+19299902934" className="hover:text-primary transition-colors">
                  (929) 990-2934
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:support@internetone.us" className="hover:text-primary transition-colors">
                  support@internetone.us
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="break-words">2601 Woodland Park Drive, Apt 8209, Houston, TX 77077, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Information Section */}
        <div className="border-t border-border pt-6 mb-6">
          <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Legal Information
          </h5>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs text-muted-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Internet One. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
