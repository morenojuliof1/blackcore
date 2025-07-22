import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();
  
  const links = [
    { name: "Home", href: "#hero" },
    { name: "Why BlackCore", href: "#why-blackcore" },
    { name: "Products", href: "#products" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "LatAm Edge", href: "#latam-edge" },
    { name: "Investors", href: "#investors" },
    { name: "Contact", href: "#contact" }
  ];
  
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link to="/" className="block mb-6">
              <img 
                src="/assets/BlackCore-logo.png"
                alt="BlackCore Logo"
                className="h-32"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Building Latin America's sovereign AI infrastructure.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Links</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <address className="not-italic text-gray-400">
              <p>Buenos Aires, Argentina</p>
              <p className="mt-4">
                <a 
                  href="mailto:info@blackcore.ai" 
                  className="text-primary hover:underline"
                >
                  info@blackcore.ai
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-500">
            <p>© {year} BlackCore AI. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}