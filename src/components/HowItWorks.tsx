import { MessageSquare, Wrench, Package, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Get in Touch",
      description: "Contact us with details about your location. We'll discuss your space requirements and community needs."
    },
    {
      icon: Wrench,
      number: "02",
      title: "We Install",
      description: "Our team handles complete installation at zero cost to you. We'll find the perfect spot and set everything up professionally."
    },
    {
      icon: Package,
      number: "03",
      title: "We Stock & Monitor",
      description: "We fill your machine with popular items and monitor inventory remotely. Regular restocking ensures it's always ready."
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "You Enjoy the Benefits",
      description: "Your residents, students, or visitors enjoy 24/7 snack access while you benefit from enhanced amenities—with zero effort required."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Simple Process, Zero Hassle
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From first contact to full operation, we make it effortless. You provide the space, we handle everything else.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl mb-4 text-gray-200">{step.number}</div>
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
