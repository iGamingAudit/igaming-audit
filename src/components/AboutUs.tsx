import { Building } from "lucide-react";

export const AboutUs = () => {
  return (
    <section className="py-16 bg-background" id="about">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block p-2 bg-secondary/10 rounded-full">
            <Building className="w-6 h-6 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">About Us</h2>
          <p className="max-w-[900px] text-lg text-muted-foreground">
            We've been in the iGaming industry for over 5 years, building and scaling affiliate sites. 
            Our own sites generate 500+ FTDs and over 1,000,000 visits every month through SEO alone. 
            Now, we bring that expertise to you by creating satellite sites that you own—designed to 
            rank higher and deliver real, measurable results for your iGaming brand.
          </p>
        </div>
      </div>
    </section>
  );
};