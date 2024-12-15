import { Link } from "react-router-dom"
import { Button } from "./ui/button"

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">
            Cosmic Audit
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 mx-6">
          <button
            onClick={() => scrollToSection('calculator')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            ROI Calculator
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Why Choose Us
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Pricing
          </button>
        </nav>
        
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  )
}

export default Navigation