import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Calculator } from "@/components/Calculator";
import { Features } from "@/components/Features";
import { PricingSection } from "@/components/PricingSection";
import { FAQ } from "@/components/FAQ";
import { AboutUs } from "@/components/AboutUs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to handle scrolling to section
    const scrollToSection = () => {
      const hash = location.hash;
      if (hash) {
        // Remove the # from the hash
        const element = document.getElementById(hash.slice(1));
        if (element) {
          // Add a small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Call on mount and when hash changes
    scrollToSection();
  }, [location.hash]);

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
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Index;