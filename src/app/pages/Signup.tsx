import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would happen here
    alert("Thank you for your interest! A membership specialist will contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Link to="/" className="text-xl sm:text-2xl font-serif italic text-stone-900">
            Luxe<span className="text-amber-600">Travel</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-4 sm:mb-6 px-4">
            Begin your journey
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 px-4">
            Connect with a membership specialist to unlock exclusive access
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 lg:p-12 border border-stone-200">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-3">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
                  placeholder="John"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-3">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
                  placeholder="Smith"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
                placeholder="john.smith@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>

            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                className="w-full bg-stone-900 text-white px-8 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-stone-800 transition-all inline-flex items-center justify-center gap-2 group"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-stone-200">
            <p className="text-xs sm:text-sm text-stone-500 text-center">
              A membership specialist will contact you within 24 hours to discuss your travel preferences and membership options.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-stone-600 mb-3 sm:mb-4">Questions about membership?</p>
          <Link to="/premium" className="text-sm sm:text-base text-stone-900 font-medium hover:text-amber-600 transition-colors">
            View Membership Details
          </Link>
        </div>
      </div>
    </div>
  );
}
