import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <NavigationMenu>
          <NavigationMenuList>
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
      </div>
    </header>
  );
};

export default Navigation;