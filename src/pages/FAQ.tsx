import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is AQ Systems?",
    answer: "AQ Systems is an independent service partner that helps customers discover and compare internet and TV services from multiple providers across the United States. We simplify the process of finding available services in your area and connect you with providers who can meet your needs.",
  },
  {
    question: "How does AQ Systems work?",
    answer: "Simply enter your ZIP code or contact us directly. We'll check which internet and TV services are available at your address, provide you with detailed plan options and pricing, and help coordinate your order with the selected provider. Our goal is to make finding the right service quick and hassle-free.",
  },
  {
    question: "Are the prices shown on your website guaranteed?",
    answer: "Prices displayed on our website represent typical ranges based on current market data. Final pricing may vary depending on your specific location, the provider, current promotions, and any applicable fees. We always confirm exact pricing during the availability check before you commit to any service.",
  },
  {
    question: "Do I pay AQ Systems or the service provider?",
    answer: "Your monthly service fees are paid directly to your chosen service provider. AQ Systems may charge a separate service and setup fee for coordinating and processing your order. All fees are fully disclosed before you complete your order.",
  },
  {
    question: "What services are available in my area?",
    answer: "Service availability varies by location. Enter your ZIP code on our website or call us at (888) 524-0250 to check which internet and TV providers service your specific address. We work with multiple nationwide and regional providers to find the best options for you.",
  },
  {
    question: "How long does installation take?",
    answer: "Installation timeframes vary by provider and service type. Most providers offer installation within 3-7 business days of order confirmation. Some areas may have same-day or next-day installation available. We'll provide specific timing information during the ordering process.",
  },
  {
    question: "Are there any installation fees?",
    answer: "Installation fees vary by provider and may depend on the type of service and equipment needed. Many providers offer free professional installation as part of promotional packages. We'll clearly outline any applicable fees before you finalize your order.",
  },
  {
    question: "Can I cancel or change my service?",
    answer: "Service cancellation and modification policies are determined by your chosen provider. Most providers allow changes to your plan at any time, though some promotional pricing may require a minimum commitment period. Review your provider's terms of service for specific details.",
  },
  {
    question: "What if I have problems with my service after installation?",
    answer: "For technical support or service issues after installation, you should contact your service provider directly. They have dedicated technical support teams to help resolve any issues quickly. We're also available to assist with general questions and can help direct you to the right support resources.",
  },
  {
    question: "Do you offer business services?",
    answer: "Yes! We help both residential and business customers find internet and TV services. Business plans often include features like dedicated support lines, faster speeds, static IP addresses, and service level agreements. Contact us to discuss your business needs.",
  },
  {
    question: "What equipment will I need?",
    answer: "Equipment requirements vary by service type and provider. Most services include a modem or gateway device, and many offer WiFi routers. Some providers include equipment rental in the monthly price, while others offer options to purchase or use your own compatible equipment.",
  },
  {
    question: "Are there contracts or commitments required?",
    answer: "Contract requirements vary by provider and plan. Many providers now offer no-contract options, while others may require a 1-2 year agreement for promotional pricing. We'll clearly explain any commitment requirements before you make a decision.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our team by phone at (888) 524-0250 during business hours, or submit an inquiry through our contact form anytime. We typically respond to email inquiries within 24 hours. For issues with your active service, please contact your provider directly.",
  },
  {
    question: "What is your refund policy?",
    answer: "Our refund policy covers any service fees charged by AQ Systems. For refunds related to provider services, you'll need to work directly with your service provider according to their policies. Visit our Refund Policy page for complete details about our refund process.",
  },
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Internet & TV Service Help - AQ Systems</title>
        <meta 
          name="description" 
          content="Find answers to common questions about internet and TV services. Learn about pricing, installation, contracts, equipment, and how AQ Systems helps you find the best plans." 
        />
        <meta name="keywords" content="FAQ, internet service questions, TV service help, installation questions, pricing info" />
        <link rel="canonical" href="/faq" />
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
                Frequently Asked Questions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Find answers to common questions about AQ Systems and our internet and TV services.
              </motion.p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container-custom max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-card rounded-xl border border-border px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </section>

          {/* Still Have Questions CTA */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-accent/10">
            <div className="container-custom text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/contact-us">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+18885240250">Call: (888) 524-0250</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
