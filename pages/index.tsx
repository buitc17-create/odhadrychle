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
  const [priceEstimate, setPriceEstimate] = useState<{
    min: number;
    max: number;
  } | null>(null);
  const estimateFormRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    estimateFormRef.current?.scrollIntoView({
      behavior: "smooth"
    });
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Zjistěte reálný odhad ceny nemovitosti zdarma online
          </h2>

          <p className="mb-4">
            Chcete rychle zjistit, jakou má vaše nemovitost aktuální tržní hodnotu? Náš online nástroj pro odhad ceny
            nemovitosti nabízí nezávazný odhad zdarma, který vychází z reálných tržních dat, lokality a parametrů nemovitosti.
            Výsledkem je orientační ocenění, které vám pomůže připravit se na prodej, pronájem nebo další rozhodování.
          </p>

          <p className="mb-4">
            Odhad ceny nemovitosti je prvním krokem, jak si udělat jasnou představu o tom, kolik může váš byt nebo dům skutečně
            stát v dnešní tržní situaci.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            Jak funguje náš online nástroj pro odhad ceny nemovitosti
          </h3>

          <p className="mb-4">
            Náš online nástroj je navržen tak, aby byl rychlý, jednoduchý a srozumitelný. Po zadání základních údajů – typu
            nemovitosti, lokality, velikosti a stavu, model vyhodnotí orientační tržní cenu nemovitosti, cenové rozpětí a
            faktory, které hodnotu mohou zvyšovat nebo snižovat.
          </p>

          <p className="mb-4">
            Kombinujeme aktuální nabídkové ceny, regionální tržní trendy a porovnání s podobnými nemovitostmi v okolí. Výsledkem
            je odhad, který odpovídá reálným podmínkám na trhu v celé České republice.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">Proč využít online odhad ceny nemovitosti</h3>

          <p className="mb-4">
            Odhad ceny nemovitosti není jen jedno číslo. Je to informace, která vám pomůže rozhodnout se, jak dál postupovat. Ať
            už zvažujete prodej, pronájem, refinancování nebo pouze chcete znát aktuální hodnotu.
          </p>

          <p className="mb-4">
            Díky našemu online odhadu získáte přesnou cenu zdarma, okamžitý výsledek, přehled o tom, jak si nemovitost stojí na
            trhu, a to bez jakéhokoli závazku.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">Odhad ceny nemovitosti pro celou ČR</h3>

          <p className="mb-4">
            Náš systém poskytuje odhady pro všechny kraje a města v Česku. Nezáleží na tom, zda řešíte odhad bytu v Praze,
            rodinného domu v Brně, rekreační nemovitosti na vesnici nebo investičního bytu v menším městě. Každá lokalita má
            specifický vývoj cen a náš online odhad s tím počítá.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">Co ovlivňuje tržní cenu nemovitosti?</h3>

          <p className="mb-4">
            Hodnota nemovitosti je určena několika faktory: lokalitou, velikostí, stavem, rokem rekonstrukce, vybavením,
            dopravní dostupností a tržní situací v dané oblasti. Nástroj tyto parametry zohledňuje, abyste získali co
            nejpřesnější orientační hodnotu.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">Odhad ceny nemovitosti pro celou ČR</h3>

          <p className="mb-4">
            Díky rozsáhlé databázi dokážeme pracovat i s regionálními rozdíly. Ať už řešíte odhad nemovitosti v Praze, Brně,
            Středočeském kraji nebo v jiných regionech, výsledek odráží reálnou situaci na místním trhu.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">Začněte ihned – odhad zdarma bez závazku</h3>

          <p className="mb-4">
            Zadejte několik základních údajů a během chvíle získáte orientační cenu, která vám pomůže lépe se rozhodnout. Odhad
            je nezávazný, rychlý a zdarma.
          </p>

          <div className="mt-8 text-center">
            <button
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors animate-slide-in-right"
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
