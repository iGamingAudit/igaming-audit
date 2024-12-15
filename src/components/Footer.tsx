import { Github } from "lucide-react";

const Footer = () => {
  const menuItems = [
    { href: "#calculator", text: "ROI Calculator" },
    { href: "#features", text: "Why Choose Us" },
    { href: "#pricing", text: "Pricing" },
    { href: "#faq", text: "FAQ" },
    { href: "#about", text: "About Us" },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          <nav className="flex flex-wrap justify-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                {item.text}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/yourusername/yourproject"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;