import { Button } from "@/components/ui/button";

export function InvestorsSection() {
  const investmentOpportunities = [
    "Equity in regional infrastructure rollouts",
    "Revenue-sharing compute capacity funds",
    "Strategic partnerships with hardware providers and hyperscalers"
  ];

  const handleContactFounders = () => {
    const contactEmail = "info@blackcore.ai";
    const subject = encodeURIComponent("Investor Inquiry");
    window.open(`mailto:${contactEmail}?subject=${subject}`);
  };

  return (
    <section className="py-20 bg-zinc-950" id="investors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Invest in the AI backbone of Latin America
            </h2>
          </div>
          
          <div className="bg-zinc-900 rounded-xl p-6 md:p-8 border border-zinc-800 mb-12">
            <p className="text-lg text-gray-300 mb-6">
              As AI adoption accelerates globally, Latin America remains underserved in critical infrastructure. BlackCore is building the region's sovereign GPU layer — a strategic play in one of the world's fastest-growing markets.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Opportunities for investors include:</h3>
            
            <ul className="space-y-3 mb-8">
              {investmentOpportunities.map((opportunity, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 bg-zinc-800/50 p-3 rounded-lg"
                >
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <span>{opportunity}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-8"
                onClick={handleContactFounders}
              >
                Contact the Founders
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}