import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Internet Core?",
    answer: "Internet Core is an independent service partner that helps customers discover and compare internet and TV services from multiple providers across the United States.",
  },
  {
    question: "How does Internet Core work?",
    answer: "Simply enter your ZIP code or contact us directly. We'll check which services are available at your address and help coordinate your order with the selected provider.",
  },
  {
    question: "Are the prices shown guaranteed?",
    answer: "Prices represent typical ranges based on current market data. Final pricing is confirmed during availability check before you commit.",
  },
  {
    question: "How long does installation take?",
    answer: "Most providers offer installation within 3-7 business days. Some areas may have same-day or next-day options available.",
  },
];

export const HomeFAQSection = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions about our services.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/faq">View All FAQs</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
