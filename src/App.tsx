import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { HowItWorks } from "./components/HowItWorks";
import { Locations } from "./components/Locations";
import { Features } from "./components/Features";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/faq";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <HowItWorks />
      <Locations />
      <Features />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
