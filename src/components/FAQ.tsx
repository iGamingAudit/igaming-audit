import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What is a Satellite Site?",
    answer: "A satellite site is a standalone website built specifically to drive targeted organic traffic to your iGaming brand. Unlike traditional affiliate sites, you fully own and control the satellite site, making it a long-term asset. Designed with SEO optimization in mind, satellite sites rank higher in search engines, help you outrank competing affiliates, and provide a reliable channel to attract new players."
  },
  {
    question: "Why should I have a Satellite Site?",
    answer: "Satellite sites help you outrank affiliates, avoid country blocks, and drive organic traffic you control. They reduce acquisition costs, improve ROI, and give you a reliable, owned traffic source."
  },
  {
    question: "I have not launched my iGaming brand yet. Do I need this?",
    answer: "Yes! Starting early allows you to build visibility, gain SEO traction, and attract an audience even before your official launch."
  },
  {
    question: "I am a new iGaming brand. Do I need this?",
    answer: "Absolutely. Satellite sites can quickly establish your brand, generate traffic, and bring in new players while helping you compete in the crowded market."
  },
  {
    question: "I am an established iGaming brand. Do I need this?",
    answer: "Yes. Even established brands benefit from satellite sites as they provide an additional, owned channel to scale traffic, reduce acquisition costs, and improve ROI."
  },
  {
    question: "Is this a one-time service or a monthly fee?",
    answer: "We offer both. The One-Time Setup covers design, content, and backlinks to launch your site. Our Monthly Service provides ongoing SEO maintenance, updates, and additional growth opportunities."
  },
  {
    question: "Are there any result guarantees?",
    answer: "While we cannot guarantee specific rankings, our proven strategies drive significant traffic and measurable results. Our own sites generate 500+ FTDs and 1,000,000+ visits monthly through SEO alone."
  },
  {
    question: "How long does it take to see results?",
    answer: "SEO results typically take a few months, but our rapid setup ensures your site starts gaining traction quickly."
  },
  {
    question: "Do I have full ownership of the site?",
    answer: "Yes. The satellite site is yours to own and grow, giving you complete control over its content and data."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 bg-muted" id="faq">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <div className="inline-block p-2 bg-secondary/10 rounded-full">
            <HelpCircle className="w-6 h-6 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-[800px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};