import { Globe, Cpu, Sparkles, BarChart3, Zap } from "lucide-react";

export function LatamEdgeSection() {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "First deployments in Argentina",
      description: "Located in subsidized Tier III+ data center zones with optimal connectivity"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Designed for data localization",
      description: "Built to meet regional data sovereignty and localization requirements"
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Climate-aligned energy",
      description: "Strategically positioned to leverage renewable energy sources"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Government partnerships",
      description: "Working with national governments to enhance AI capabilities"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lower latency vs. U.S.-hosted compute",
      description: "Up to 80% reduction in inference latency for LatAm users"
    }
  ];

  return (
    <section className="py-20 bg-zinc-950 relative" id="latam-edge">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0 bg-[url('/assets/images/latam-map-pattern.png')] bg-no-repeat bg-center bg-contain"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">LatAm Edge</h2>
          <p className="text-xl text-gray-400">
            A data center grid purpose-built for LatAm AI adoption
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-primary/50 transition-colors"
            >
              <div className="p-3 rounded-full bg-zinc-800 w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="p-6 md:p-8 bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Regional Advantage</h3>
            <p className="text-lg text-gray-300">
              By positioning our infrastructure within Latin America, BlackCore provides unparalleled performance for regional AI applications while helping organizations meet increasingly strict data residency requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}