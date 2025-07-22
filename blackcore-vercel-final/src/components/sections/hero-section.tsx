import { Button } from "@/components/ui/button";

export function HeroSection() {
  const handleEmailContact = (text: string = "") => {
    const contactEmail = "info@blackcore.ai";
    const subject = encodeURIComponent(text || "BlackCore Inquiry");
    window.open(`mailto:${contactEmail}?subject=${subject}`);
  };

  const handleDownloadPDF = () => {
    // In a real implementation, this would download a PDF file
    // For now, we'll redirect to email
    handleEmailContact("Request Specs PDF");
  };

  return (
    <section className="min-h-screen pt-24 relative overflow-hidden" id="hero">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/datacenter-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Background Animation - on top of video */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-10">
        <div className="absolute inset-0 bg-[url('/assets/images/gpu-grid-pattern.png')] bg-repeat opacity-10"></div>
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-primary/20 animate-pulse"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 2}s`,
              opacity: Math.random() * 0.3,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)]">
        <div className="mb-12">
          <img 
            src="/assets/BlackCore-logo.png" 
            alt="BlackCore Logo" 
            className="h-80 md:h-96"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 max-w-4xl">
          <span className="text-gradient">AI Infrastructure.</span> Made for LatAm. <span className="text-gradient">Powered by GPUs.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 text-center mb-12 max-w-3xl">
          Train, deploy, and scale large AI workloads on BlackCore's high-performance GPU clusters, built for latency-sensitive, sovereign computing in Latin America.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-xl justify-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
            onClick={() => handleEmailContact("Request Early Access")}
          >
            Get Early Access
          </Button>
          
          <Button 
            size="lg"
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
            onClick={() => handleEmailContact("Schedule a Call")}
          >
            Schedule a Call
          </Button>
          
          <Button 
            size="lg"
            variant="ghost" 
            className="text-gray-300 hover:text-white px-8 py-6 text-lg"
            onClick={handleDownloadPDF}
          >
            Download Specs PDF
          </Button>
        </div>
        

      </div>
    </section>
  );
}