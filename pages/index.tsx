import { useState, useRef } from "react";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import HowItWorks from "@/components/ui/HowItWorks";
import EstimateForm from "@/components/ui/EstimateForm";
import RecentEstimatesTicker from "@/components/ui/RecentEstimatesTicker";
import Footer from "@/components/ui/Footer";
import CookieConsent from "@/components/ui/CookieConsent";

const Index = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [priceEstimate, setPriceEstimate] = useState<{ min: number; max: number } | null>(null);
  const estimateFormRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    estimateFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero onCtaClick={scrollToForm} />
        <RecentEstimatesTicker />
        <HowItWorks />
        <div ref={estimateFormRef}>
          <EstimateForm
            formSubmitted={formSubmitted}
            setFormSubmitted={setFormSubmitted}
            priceEstimate={priceEstimate}
            setPriceEstimate={setPriceEstimate}
          />
        </div>

        <section className="px-4 py-12 max-w-4xl mx-auto text-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Zjistěte reálný odhad ceny nemovitosti zdarma online</h2>
          <p className="mb-4">
            Chcete rychle zjistit, jakou má vaše nemovitost aktuální tržní hodnotu? Náš online nástroj pro odhad ceny nemovitosti nabízí nezávazný odhad zdarma.
          </p>
          <p className="mb-4">
            Odhad ceny nemovitosti je prvním krokem k informovanému rozhodování.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-3">Jak funguje náš nástroj</h3>
          <p className="mb-4">Zadejte typ, lokalitu a stav nemovitosti – a náš model vše spočítá.</p>
          <h3 className="text-xl font-semibold mt-8 mb-3">Proč využít odhad</h3>
          <p className="mb-4">Pomůže vám s rozhodnutím o prodeji, pronájmu či investici.</p>
          <h3 className="text-xl font-semibold mt-8 mb-3">Pro celou ČR</h3>
          <p className="mb-4">Fungujeme napříč regiony – Praha, Brno, Ostrava i menší města.</p>
          <div className="mt-8 text-center">
            <button
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Zadat parametry pro odhad nemovitosti
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
