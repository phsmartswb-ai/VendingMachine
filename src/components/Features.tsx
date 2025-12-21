import { Smartphone, BarChart3, Leaf, RefreshCw, CreditCard, Headphones } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Smart Technology",
      description: "IoT-enabled machines with remote monitoring, digital displays, and real-time inventory tracking for optimal performance."
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Accept cards, mobile wallets, UPI, and contactless payments. Easy, secure, and convenient for everyone."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Stocking",
      description: "We analyze purchasing patterns to optimize product selection, ensuring popular items are always available."
    },
    {
      icon: Leaf,
      title: "Healthy Options Available",
      description: "Customizable product mix including nutritious snacks, protein bars, fresh options, and dietary-specific choices."
    },
    {
      icon: RefreshCw,
      title: "Regular Maintenance",
      description: "Scheduled servicing and cleaning keep machines in pristine condition. Any issues are resolved promptly by our team."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Our customer service team is always ready to help. Report issues, request specific products, or get assistance anytime."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Innovation Meets Convenience
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our technology-driven approach ensures a seamless, reliable snacking experience that continuously improves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
