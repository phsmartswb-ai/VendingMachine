import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTA() {
  const benefits = [
    "Free installation and setup",
    "No upfront costs or investments",
    "We handle all maintenance and restocking",
    "Flexible contract terms",
    "Customized product selection"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
                Ready to Enhance Your Space?
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Join hundreds of satisfied property managers, administrators, and facility owners who've upgraded their amenities with SnackVault.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-50">{benefit}</span>
                </div>
              ))}
            </div>

            <form className="space-y-4 mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <select className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="" className="text-gray-800">Location Type</option>
                  <option value="apartment" className="text-gray-800">Residential Apartment</option>
                  <option value="society" className="text-gray-800">Society/Community</option>
                  <option value="school" className="text-gray-800">School</option>
                  <option value="college" className="text-gray-800">College/University</option>
                  <option value="office" className="text-gray-800">Office Building</option>
                  <option value="public" className="text-gray-800">Public Space</option>
                </select>
              </div>
              <textarea
                placeholder="Tell us about your space and requirements..."
                rows={4}
                className="w-full px-6 py-4 rounded-3xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-white text-blue-600 px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
              >
                Request Your Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <p className="text-center text-sm text-blue-200">
              Have questions? Call us at <span className="text-white">+91-9154256438</span> or email <span className="text-white">hellosnackvault@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
