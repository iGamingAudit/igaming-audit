import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background" />
      
      <div className="container relative z-10 px-4 py-32 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-secondary/10 text-secondary">
            Revolutionizing iGaming Traffic Acquisition
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transform Your <span className="text-gradient">Traffic Strategy</span> with Satellite Sites
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Move beyond traditional affiliate marketing. Own your traffic sources and maximize ROI with our cutting-edge satellite site strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};