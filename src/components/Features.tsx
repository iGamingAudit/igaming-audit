import { motion } from "framer-motion";
import { Globe, Shield, Zap, BarChart, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Target multiple markets with localized satellite sites",
  },
  {
    icon: Shield,
    title: "Full Control",
    description: "Own your traffic sources and data completely",
  },
  {
    icon: Zap,
    title: "Rapid Setup",
    description: "Launch new sites in days, not months",
  },
  {
    icon: BarChart,
    title: "Better ROI",
    description: "Reduce acquisition costs by up to 60%",
  },
];

export const Features = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            The Future of Traffic Acquisition
          </h2>
          <p className="mt-4 text-muted-foreground">
            Break free from traditional affiliate networks and take control of your traffic
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Button size="lg" className="group" onClick={() => window.location.href = 'https://t.me/igamingaudit'}>
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <p className="mt-2 text-sm text-muted-foreground">No obligations contract</p>
      </motion.div>
    </section>
  );
};
