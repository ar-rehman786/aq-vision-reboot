import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Award, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "Happy Customers", value: "50K+" },
  { label: "Cities Served", value: "100+" },
  { label: "Uptime Guarantee", value: "99.9%" },
];

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "Every decision we make starts with our customers in mind. Your satisfaction is our top priority.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from network performance to customer support.",
  },
  {
    icon: MapPin,
    title: "Local Focus",
    description: "We're committed to serving our local communities with reliable, high-speed connectivity.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparent pricing, honest communication, and ethical business practices guide our operations.",
  },
];

const About = () => {
  return (
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
              About AQ Systems
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Connecting communities with reliable, high-speed internet since 2009.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-card/50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                  Our Story
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    AQ Systems was founded with a simple mission: to provide reliable, high-speed internet 
                    to underserved communities. What started as a small local operation has grown into a 
                    trusted provider serving thousands of homes and businesses.
                  </p>
                  <p>
                    We understand that in today's world, internet connectivity isn't just a luxury—it's 
                    essential for work, education, healthcare, and staying connected with loved ones. 
                    That's why we've invested heavily in our infrastructure to ensure you get the speeds 
                    and reliability you deserve.
                  </p>
                  <p>
                    Our team of dedicated professionals works around the clock to maintain our network, 
                    provide exceptional customer service, and continuously improve our offerings. We're 
                    not just your internet provider; we're your neighbors, committed to helping our 
                    community thrive in the digital age.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at AQ Systems.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container-custom text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Connected?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust AQ Systems for their internet needs.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
