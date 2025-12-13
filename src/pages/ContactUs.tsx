import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: MapPin,
    label: "Our Address",
    value: "AQ Systems\n3408 E Derringer Way\nGilbert, AZ 85297",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(888) 524-0250",
    href: "tel:+18885240250",
    extra: "Monday - Friday: 8am - 8pm EST\nSaturday: 9am - 5pm EST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@aqsystems.com",
    href: "mailto:support@aqsystems.com",
    extra: "We typically respond within 24 hours",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "7 Days a Week",
    href: null,
    extra: "Quick setup and fast response",
  },
];

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    serviceInterest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Request Submitted!",
      description: "Thank you for your inquiry. Our team will contact you within 24 hours.",
    });
    
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      serviceInterest: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Get Internet & TV Service Quote - AQ Systems</title>
        <meta 
          name="description" 
          content="Contact AQ Systems to check internet and TV availability in your area. Call (888) 524-0250 or fill out our form for a free consultation. Response within 24 hours." 
        />
        <meta name="keywords" content="contact AQ Systems, internet availability check, TV service inquiry, get quote" />
        <link rel="canonical" href="/contact-us" />
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
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Ready to explore internet and TV services in your area? Fill out the form below 
                or contact us directly. We're here to help you find the perfect plan.
              </motion.p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20">
            <div className="container-custom">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-2"
                >
                  <div className="bg-card rounded-2xl p-8 border border-border">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Check Availability
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="serviceInterest">Service Interested In *</Label>
                          <Select
                            value={formData.serviceInterest}
                            onValueChange={(value) => setFormData({ ...formData, serviceInterest: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="internet">Internet Only</SelectItem>
                              <SelectItem value="tv">TV Only</SelectItem>
                              <SelectItem value="bundle">Internet + TV Bundle</SelectItem>
                              <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Service Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          placeholder="123 Main Street"
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            placeholder="City"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            placeholder="State"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">ZIP Code *</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            required
                            placeholder="12345"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Information</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your needs or any questions you have..."
                          rows={4}
                        />
                      </div>

                      <p className="text-sm text-muted-foreground">
                        By submitting this form, you consent to be contacted by AQ Systems regarding 
                        internet and TV services available in your area. Your information will be 
                        handled according to our{" "}
                        <Link to="/policies/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>.
                      </p>

                      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                      </Button>
                    </form>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {contactInfo.map((item) => (
                    <div key={item.label} className="bg-card rounded-xl p-6 border border-border">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-primary hover:underline whitespace-pre-line"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground whitespace-pre-line">{item.value}</p>
                          )}
                          {item.extra && (
                            <p className="text-sm text-muted-foreground mt-2 whitespace-pre-line">
                              {item.extra}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> For technical support or 
                      billing questions about your active service, please contact your service 
                      provider directly.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
