import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Calculator } from "@/components/Calculator";
import { Features } from "@/components/Features";
import { PricingSection } from "@/components/PricingSection";
import { AboutUs } from "@/components/AboutUs";
import { FAQ } from "@/components/FAQ";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <Hero />
      <div id="calculator">
        <Calculator />
      </div>
      <div id="features">
        <Features />
      </div>
      <AboutUs />
      <div id="pricing">
        <PricingSection />
      </div>
      <FAQ />
    </motion.div>
  );
};

export default Index;