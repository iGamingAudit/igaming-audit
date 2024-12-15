import { motion } from "framer-motion";
import { Calculator as CalculatorIcon, Percent, Users, Globe, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const Calculator = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            ROI Calculator
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Calculate Your Potential Returns
          </h2>
          <p className="mt-4 text-muted-foreground">
            See how much you could save by switching to satellite sites
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <Label htmlFor="traffic">Monthly Traffic</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="traffic"
                    placeholder="e.g. 10000"
                    className="pl-10"
                    type="number"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="conversion">Conversion Rate (%)</Label>
                <div className="relative">
                  <Percent className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="conversion"
                    placeholder="e.g. 2.5"
                    className="pl-10"
                    type="number"
                    step="0.1"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="geo">Target GEO</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="geo"
                    placeholder="e.g. United Kingdom"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="cost">Current Cost per FTD</Label>
                <div className="relative">
                  <CalculatorIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="cost"
                    placeholder="e.g. 200"
                    className="pl-10"
                    type="number"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg">
                Calculate Savings
              </Button>
              <div className="mt-4">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="mt-2 text-sm text-muted-foreground">No obligations contract</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
