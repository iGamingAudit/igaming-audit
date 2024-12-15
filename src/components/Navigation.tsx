import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-14 items-center">
        <span className="text-xl font-bold absolute left-4">iGaming Audit</span>
        
        <NavigationMenu className="hidden md:flex mx-auto">
          <NavigationMenuList className="flex-row space-x-2">
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className="text-sm font-medium"
                onClick={() => scrollToSection("calculator")}
              >
                Calculator
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className="text-sm font-medium"
                onClick={() => scrollToSection("features")}
              >
                Features
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className="text-sm font-medium"
                onClick={() => scrollToSection("about")}
              >
                About
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className="text-sm font-medium"
                onClick={() => scrollToSection("pricing")}
              >
                Pricing
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="ghost"
                className="text-sm font-medium"
                onClick={() => scrollToSection("faq")}
              >
                FAQ
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden absolute right-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-14 left-0 w-full bg-background border-b md:hidden">
            <div className="flex flex-col p-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection("calculator")}
              >
                Calculator
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection("features")}
              >
                Features
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection("about")}
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection("pricing")}
              >
                Pricing
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection("faq")}
              >
                FAQ
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;