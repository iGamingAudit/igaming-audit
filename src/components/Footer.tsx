import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-foreground/60">
            © 2024 iGaming Audit
          </p>
          <Button variant="default" onClick={() => window.location.href = 'https://t.me/igamingaudit'}>Get Started</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;