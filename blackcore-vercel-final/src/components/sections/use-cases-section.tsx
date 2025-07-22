import { 
  BookOpen, 
  Building2, 
  GraduationCap, 
  Rocket, 
  Signal 
} from "lucide-react";

export function UseCasesSection() {
  const useCases = [
    {
      icon: <Signal className="h-10 w-10 text-primary" />,
      title: "Train foundation models in-region",
      description: "Reduce data transfer costs and latency by keeping AI training within Latin America."
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Deploy fast inference APIs across LatAm",
      description: "Low-latency, regionally distributed inference endpoints for your AI applications."
    },
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: "Sovereign LLMs for government + enterprise",
      description: "Data-sovereign AI solutions that meet local regulatory requirements."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: "AIaaS for universities, R&D, and startups",
      description: "Affordable compute resources for academic institutions and emerging companies."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Scale compute without hyperscaler dependency",
      description: "Break free from cloud lock-in and build vendor-independent AI infrastructure."
    }
  ];

  return (
    <section className="py-20 bg-zinc-900" id="use-cases">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Use Cases</h2>
          <p className="text-xl text-gray-400">
            Powering AI innovation across Latin America
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="p-6 bg-zinc-950 rounded-xl border border-zinc-800 hover:border-primary/50 transition-colors"
            >
              <div className="mb-4">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-gray-400">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}