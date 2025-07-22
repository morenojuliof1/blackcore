export function TrustBuildersSection() {
  const trustItems = [
    {
      name: "NVIDIA Preferred Partner",
      image: "nvidia-logo.svg", // Placeholder - would be replaced with actual logo
    },
    {
      name: "ISO 27001 / SOC 2",
      description: "(in process)",
      image: "iso-logo.svg", // Placeholder
    },
    {
      name: "Ministry of Industry – Argentina",
      description: "(endorsement badge)",
      image: "ministry-logo.svg", // Placeholder
    },
    {
      name: "Powered by renewable grid",
      description: "(where applicable)",
      image: "renewable-logo.svg", // Placeholder
    }
  ];

  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Visual Trust Builders</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustItems.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-zinc-950 rounded-lg border border-zinc-800 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center bg-zinc-900 rounded-lg">
                  {/* Placeholder for image */}
                  <div className="w-12 h-12 rounded bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-xs text-gray-400">
                    Logo
                  </div>
                </div>
                <h4 className="text-sm md:text-base font-medium text-center">{item.name}</h4>
                {item.description && (
                  <p className="text-xs text-gray-500 text-center mt-1">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}