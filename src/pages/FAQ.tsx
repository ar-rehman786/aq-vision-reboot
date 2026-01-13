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
    question: "What is Internet One?",
    answer: "Internet One is managed by Internetone.info, an independent marketing partner. We are not the official site of any specific internet or cable provider.",
  },
  {
    question: "How does Internet One work?",
    answer: "We assist users in discovering home internet and TV service options from various participating providers across the U.S. Simply enter your ZIP code or contact us, and we will help you find available services in your area.",
  },
  {
    question: "Are the prices shown on your website guaranteed?",
    answer: "Prices depend on your location, provider, and current promotions. Final prices will be confirmed during the availability check with the provider.",
  },
  {
    question: "Do I pay Internet One or the service provider?",
    answer: "Payments are made directly to the service provider. Internet One does not handle payments for services. However, Internetone.info may charge a separate service and setup fee for coordinating your order.",
  },
  {
    question: "What services are available in my area?",
    answer: "We will display available services for your area based on the address you provide. Enter your ZIP code on our website or call us at (929) 536-5524 to check availability.",
  },
  {
    question: "How long does installation take?",
    answer: "Installation timeframes differ by provider and location. We will assist in coordinating with your provider for scheduling. Most installations occur within 3-7 business days.",
  },
  {
    question: "Are there any installation fees?",
    answer: "Installation fees may apply, and they vary by provider. Many providers offer free installation as part of promotional packages. We will outline any applicable fees before you finalize your order.",
  },
  {
    question: "Can I cancel or change my service?",
    answer: "Service cancellations or modifications should be made directly with the provider, as they manage your account. Review your provider's terms of service for specific policies.",
  },
  {
    question: "What if I have problems with my service after installation?",
    answer: "If you encounter issues after installation, contact your provider's customer support for help. They have dedicated technical support teams to resolve issues quickly.",
  },
  {
    question: "Do you offer business services?",
    answer: "While we specialize in home internet and TV services, we can help connect you to business service options if required. Contact us to discuss your business needs.",
  },
  {
    question: "What equipment will I need?",
    answer: "The necessary equipment varies by provider and plan, including devices like modems, routers, and more. Some providers include equipment rental in the monthly price, while others offer purchase options.",
  },
  {
    question: "Are there contracts or commitments required?",
    answer: "Certain providers may require contracts for specific plans. We will inform you of any requirements during the plan selection process.",
  },
  {
    question: "How do I contact customer support?",
    answer: "Reach out to our customer support team by phone at (929) 536-5524 or email for assistance. We typically respond to inquiries within 24 hours.",
  },
  {
    question: "What is your refund policy?",
    answer: "Refund policies are set by the provider. Please contact them for details on their specific terms. For fees charged by Internet One, visit our Refund Policy page for complete details.",
  },
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>Common Questions | Internet & TV Service Help - Internet One</title>
        <meta 
          name="description" 
          content="Find answers to common questions about internet and TV services. Learn about pricing, installation, contracts, equipment, and how Internet One helps you find the best plans." 
        />
        <meta name="keywords" content="FAQ, common questions, internet service help, TV service questions, installation info" />
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
                Common Questions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Find answers to frequently asked questions about Internet One and our internet and TV services.
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
                  Have More Questions?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Don't see the answer you need? Our team is ready to assist.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/contact-us">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+19295365524">Call: (929) 536-5524</a>
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
