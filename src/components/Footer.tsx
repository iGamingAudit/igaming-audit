import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Your Company
          </p>
          <Button variant="default">Get Started</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;