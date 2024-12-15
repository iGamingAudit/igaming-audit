import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Calculator } from "@/components/Calculator";
import { Features } from "@/components/Features";
import { PricingSection } from "@/components/PricingSection";
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
      <Calculator />
      <Features />
      <PricingSection />
    </motion.div>
  );
};

export default Index;