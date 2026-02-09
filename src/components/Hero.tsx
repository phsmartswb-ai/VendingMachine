import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600"></span>
            </div> */}
            <span className="text-3xl"><b>Snapvend</b></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="hover:text-blue-200 transition-colors">Benefits</a>
            <a href="#how-it-works" className="hover:text-blue-200 transition-colors">How It Works</a>
            <a href="#locations" className="hover:text-blue-200 transition-colors">Locations</a>
            <a href="#contact" className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Smart Vending Solutions for Modern Spaces
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Zero hassle, zero fees. Bring convenient, contactless snack access to your residents, students, and visitors. We handle everything—from installation to restocking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                <a href="#contact">Request a Machine</a>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                <a href="#benefits">Learn More</a>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758633854748-15ed2ef681a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2ZW5kaW5nJTIwbWFjaGluZXxlbnwxfHx8fDE3NjQ4NDg2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern vending machine"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
