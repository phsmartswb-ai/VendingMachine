import { Building2, School, GraduationCap, Users, Home, Briefcase } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Locations() {
  const locations = [
    {
      icon: Building2,
      title: "Residential Apartments",
      description: "Enhance your building amenities with 24/7 snack access in lobbies or common areas. Perfect for late-night cravings or quick breakfasts.",
      // image: "https://images.unsplash.com/photo-1664190052386-b9feac724117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGxvYmJ5fGVufDF8fHx8MTc2NDkyMzM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      image: "https://images.unsplash.com/photo-1594484208280-efa00f96fc21?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: Home,
      title: "Societies & Communities",
      description: "Serve your entire community with convenient snacking options at clubhouses, gyms, or recreational areas.",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: School,
      title: "Schools",
      description: "Provide students with healthy snack options during breaks. Customizable product selection to meet nutritional guidelines.",
      image: "https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: GraduationCap,
      title: "Colleges & Universities",
      description: "Support students during long study sessions with accessible snacks across campus locations, libraries, and dorms.",
      image: "https://images.unsplash.com/photo-1693608231470-25e1b16a23b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY0ODMwODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Briefcase,
      title: "Office Buildings",
      description: "Keep your workforce energized with quick snack access without leaving the building. Boost productivity and satisfaction.",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: Users,
      title: "Public Spaces",
      description: "Gyms, hospitals, transit hubs—anywhere people gather and need quick refreshments. We customize to fit your space.",
      image: "https://images.unsplash.com/photo-1764046176030-4acf7c58b26f?q=80&w=2350&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Perfect for Every Space
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you manage residential properties, educational institutions, or public facilities—our vending solutions adapt to your unique environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback 
                  src={location.image}
                  alt={location.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <location.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3">{location.title}</h3>
                <p className="text-gray-600">{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
