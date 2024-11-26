import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Calculator } from "@/components/Calculator";
import { Features } from "@/components/Features";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Calculator />
      <Features />
    </motion.div>
  );
};

export default Index;