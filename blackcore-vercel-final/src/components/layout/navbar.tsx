import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Why BlackCore", to: "why-blackcore" },
    { name: "Products", to: "products" },
    { name: "Use Cases", to: "use-cases" },
    { name: "LatAm Edge", to: "latam-edge" },
    { name: "Investors", to: "investors" },
  ];

  const contactEmail = "info@blackcore.ai";

  const handleEmailContact = (text: string = "") => {
    const subject = encodeURIComponent(text || "BlackCore Inquiry");
    window.open(`mailto:${contactEmail}?subject=${subject}`);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="/assets/BlackCore-logo.png" 
            alt="BlackCore Logo" 
            className="h-28"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-gray-300 hover:text-primary transition-colors cursor-pointer font-medium text-sm whitespace-nowrap"
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            onClick={() => handleEmailContact("Request Early Access")}
          >
            Get Early Access
          </Button>
          <Button
            variant="default"
            onClick={() => handleEmailContact("Schedule a Call")}
          >
            Schedule a Call
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/95 border-gray-800">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-lg text-gray-300 hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-colors w-full"
                  onClick={() => handleEmailContact("Request Early Access")}
                >
                  Get Early Access
                </Button>
                <Button 
                  variant="default"
                  className="w-full"
                  onClick={() => handleEmailContact("Schedule a Call")}
                >
                  Schedule a Call
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}