import { CheckCircle } from "lucide-react";

export function WhyBlackcoreSection() {
  const features = [
    "Hosted across Tier III+ zones in Latin America",
    "Powered by NVIDIA H100 & A100 GPUs",
    "Modular & scalable for LLMs, computer vision, and inference",
    "Zero AWS/Google lock-in",
    "Designed for regulated and sovereign AI use cases"
  ];

  return (
    <section className="py-20 bg-black relative" id="why-blackcore">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Raw Compute. <span className="text-gradient">Regional Power.</span> AI Sovereignty.
          </h2>
          
          <div className="mt-12 grid md:grid-cols-1 gap-y-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 text-left bg-zinc-900/50 rounded-lg p-4 border border-zinc-800 hover:border-primary/50 transition-colors"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}