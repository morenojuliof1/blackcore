import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { WhyBlackcoreSection } from "@/components/sections/why-blackcore-section";
import { ProductsSection } from "@/components/sections/products-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { LatamEdgeSection } from "@/components/sections/latam-edge-section";
import { TrustBuildersSection } from "@/components/sections/trust-builders-section";
import { InvestorsSection } from "@/components/sections/investors-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function BlackCoreLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <WhyBlackcoreSection />
        <ProductsSection />
        <UseCasesSection />
        <LatamEdgeSection />
        <TrustBuildersSection />
        <InvestorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}