import { motion } from "framer-motion";
import { Users, Percent } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

export const Calculator = () => {
  const [traffic, setTraffic] = useState<string>("");
  const [conversion, setConversion] = useState<string>("");

  const calculateNewPlayers = () => {
    if (!traffic || !conversion) return 0;
    const monthlyTraffic = parseFloat(traffic);
    const conversionRate = parseFloat(conversion);
    if (isNaN(monthlyTraffic) || isNaN(conversionRate)) return 0;
    
    return Math.round(monthlyTraffic * 0.1859 * (conversionRate / 100));
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            ROI Calculator
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Calculate Your Potential Returns
          </h2>
          <p className="mt-4 text-muted-foreground">
            See how many new players you could get by having a satellite site
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
                    className="pl-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    value={traffic}
                    onChange={(e) => setTraffic(e.target.value)}
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
                    className="pl-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    step="0.1"
                    value={conversion}
                    onChange={(e) => setConversion(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center space-y-2">
              <h3 className="text-2xl font-bold">
                Get <span className="text-primary">{calculateNewPlayers()}</span> new players with our Satellite Site*
              </h3>
              <p className="text-xs italic text-muted-foreground">
                * this is just an estimate and assumes third position in Google with similar conversion rate
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};