import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Cpu, Database, Network, Server, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductsSection() {
  const products = [
    {
      name: "BlackCore Grid",
      description: "Raw GPU compute for AI training and batch jobs",
      icon: <Cpu className="h-8 w-8" />,
    },
    {
      name: "BlackCore Train",
      description: "Managed environments for LLMs, CV, NLP",
      icon: <Database className="h-8 w-8" />,
    },
    {
      name: "BlackCore Inference",
      description: "On-demand inference-as-a-service",
      icon: <Network className="h-8 w-8" />,
    },
    {
      name: "BlackCore Vault",
      description: "Sovereign data hosting for regulated sectors",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      name: "BlackCore Infra",
      description: "Bare metal, colocation, and custom infra setups",
      icon: <Server className="h-8 w-8" />,
    }
  ];

  const handleEmailContact = () => {
    const contactEmail = "info@blackcore.ai";
    const subject = encodeURIComponent("Product Inquiry");
    window.open(`mailto:${contactEmail}?subject=${subject}`);
  };

  return (
    <section className="py-20 bg-zinc-950" id="products">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Product Tiers</h2>
          <p className="text-xl text-gray-400">
            Flexible infrastructure solutions for every AI workload
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="bg-zinc-900 border-zinc-800 hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="p-3 rounded-full bg-zinc-800 w-fit mb-4">
                  {product.icon}
                </div>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                <p>{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="group text-primary hover:text-primary/90 p-0 h-auto"
                  onClick={handleEmailContact}
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}