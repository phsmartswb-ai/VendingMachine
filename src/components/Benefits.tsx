import { Zap, DollarSign, ShoppingBag, Clock, Sparkles, Shield } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: ShoppingBag,
      title: "Wide Variety of Options",
      description: "From healthy snacks to quick meals, beverages to treats—offer your community diverse choices that cater to every craving and dietary preference."
    },
    {
      icon: DollarSign,
      title: "No Hidden Fees",
      description: "Unlike online delivery services, what you see is what you pay. No delivery charges, no surge pricing, no minimum order amounts. Just transparent, straightforward pricing."
    },
    {
      icon: Clock,
      title: "Instant Access, 24/7",
      description: "No waiting for delivery windows or dealing with delays. Snacks are available exactly when needed—midnight study session or early morning rush."
    },
    {
      icon: Zap,
      title: "Fully Contactless",
      description: "Modern, technology-driven machines with digital payments. Safe, hygienic, and convenient for today's health-conscious environment."
    },
    {
      icon: Sparkles,
      title: "Always Fully Stocked",
      description: "We monitor inventory in real-time and restock proactively. Your machine never runs empty, ensuring consistent service for your community."
    },
    {
      icon: Shield,
      title: "Zero Responsibility for You",
      description: "We own, maintain, and manage everything. No investment, no maintenance headaches, no inventory management. Just pure convenience for your space."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Why Choose Snapvend?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver a superior snacking experience that beats traditional vending and online delivery, with benefits designed for modern spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
