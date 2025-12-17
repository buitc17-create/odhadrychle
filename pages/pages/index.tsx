import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import EstimateForm from "@/components/EstimateForm";
import RecentEstimatesTicker from "@/components/RecentEstimatesTicker";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <EstimateForm />
      <RecentEstimatesTicker />
      <Footer />
      <CookieConsent />
    </>
  );
}
