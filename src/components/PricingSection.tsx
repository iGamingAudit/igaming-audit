import { Diamond, FileText, Database, Settings, File, MonitorCheck, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

export const PricingSection = () => {
  return (
    <section className="w-full py-12 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-secondary/10 text-secondary">
            Transparent Pricing
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Simple, Transparent Pricing Plans
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* One-Time Services Card */}
          <Card className="glass border-white/20 overflow-hidden">
            <CardHeader className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-space-grotesk text-primary">One-Time Services</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-orbitron font-bold text-white">5,000</span>
                <span className="text-xl text-white/70">EUR</span>
              </div>
              <p className="text-white/60">Initial setup and implementation</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Diamond className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Design Clone</p>
                    <p className="text-sm text-white/60">up to 5 desktop screen homepage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">5 Article Pages</p>
                    <p className="text-sm text-white/60">up to 15,000 words</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Basic Backlinks</p>
                    <p className="text-sm text-white/60">up to 50 relevant backlinks with DR 10+</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Services Card */}
          <Card className="glass border-white/20 overflow-hidden">
            <CardHeader className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-space-grotesk text-secondary">Monthly Services</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-orbitron font-bold text-white">1,000</span>
                <span className="text-xl text-white/70">EUR</span>
              </div>
              <p className="text-white/60">Ongoing maintenance and optimization</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <File className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Additional 1 Article Page</p>
                    <p className="text-sm text-white/60">up to 3,000 words</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Hosting</p>
                    <p className="text-sm text-white/60">up to 50,000 visitors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MonitorCheck className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Bonus Monitoring</p>
                    <p className="text-sm text-white/60">up to 1 time per month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Other Textual Information Update</p>
                    <p className="text-sm text-white/60">up to 1 time per month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Reporting</p>
                    <p className="text-sm text-white/60">up to 1 page report per month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Design Adjustments</p>
                    <p className="text-sm text-white/60">up to 1 desktop screen homepage</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="mt-2 text-sm text-muted-foreground">No obligations contract</p>
        </div>
      </div>
    </section>
  );
};