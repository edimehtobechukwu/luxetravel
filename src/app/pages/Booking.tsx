import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, Calendar, Users, Home, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    guests: "2",
    accommodationType: "",
    budget: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: ""
  });

  const destinations = [
    { name: "Santorini, Greece", value: "santorini" },
    { name: "Maldives", value: "maldives" },
    { name: "Dubai, UAE", value: "dubai" },
    { name: "Bali, Indonesia", value: "bali" },
    { name: "Paris, France", value: "paris" },
    { name: "Tokyo, Japan", value: "tokyo" },
    { name: "Other", value: "other" }
  ];

  const accommodationTypes = [
    { name: "Luxury Resort", value: "resort" },
    { name: "Private Villa", value: "villa" },
    { name: "Boutique Hotel", value: "boutique" },
    { name: "Overwater Bungalow", value: "overwater" }
  ];

  const budgetRanges = [
    { name: "$5,000 - $10,000", value: "5-10k" },
    { name: "$10,000 - $25,000", value: "10-25k" },
    { name: "$25,000 - $50,000", value: "25-50k" },
    { name: "$50,000+", value: "50k+" }
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your booking request! Our travel specialists will contact you within 24 hours to finalize your luxury travel experience.");
    // In a real app, this would submit to a backend
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

      {/* Progress Bar */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all ${
                  step >= num 
                    ? 'bg-stone-900 border-stone-900 text-white' 
                    : 'border-stone-300 text-stone-400'
                }`}>
                  {step > num ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : num}
                </div>
                {num < 3 && (
                  <div className={`flex-1 h-0.5 mx-2 sm:mx-4 transition-all ${
                    step > num ? 'bg-stone-900' : 'bg-stone-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs sm:text-sm text-stone-600 mt-2">
            <span className={step === 1 ? 'font-medium text-stone-900' : ''}>Destination</span>
            <span className={step === 2 ? 'font-medium text-stone-900' : ''}>Preferences</span>
            <span className={step === 3 ? 'font-medium text-stone-900' : ''}>Details</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSubmit}>
              {/* Step 1: Destination & Dates */}
              {step === 1 && (
                <div className="bg-white p-6 sm:p-10 lg:p-12 border border-stone-200">
                  <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-3 sm:mb-4">Choose your destination</h2>
                  <p className="text-base sm:text-lg text-stone-600 mb-8 sm:mb-10">Where would you like to experience luxury?</p>

                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-3 sm:mb-4">
                        Destination
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {destinations.map((dest) => (
                          <button
                            key={dest.value}
                            type="button"
                            onClick={() => setFormData({...formData, destination: dest.value})}
                            className={`p-4 sm:p-5 text-left border-2 transition-all ${
                              formData.destination === dest.value
                                ? 'border-stone-900 bg-stone-50'
                                : 'border-stone-200 hover:border-stone-400'
                            }`}
                          >
                            <span className="text-sm sm:text-base font-medium text-stone-900">{dest.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-stone-700 mb-3">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Check-in Date
                        </label>
                        <input
                          type="date"
                          id="startDate"
                          value={formData.startDate}
                          onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                          className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-stone-700 mb-3">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Check-out Date
                        </label>
                        <input
                          type="date"
                          id="endDate"
                          value={formData.endDate}
                          onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                          className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-3">
                        <Users className="w-4 h-4 inline mr-2" />
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                        <option value="9+">9+ Guests</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Preferences */}
              {step === 2 && (
                <div className="bg-white p-6 sm:p-10 lg:p-12 border border-stone-200">
                  <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-3 sm:mb-4">Customize your experience</h2>
                  <p className="text-base sm:text-lg text-stone-600 mb-8 sm:mb-10">Tell us about your preferences</p>

                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-3 sm:mb-4">
                        <Home className="w-4 h-4 inline mr-2" />
                        Accommodation Type
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {accommodationTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({...formData, accommodationType: type.value})}
                            className={`p-4 sm:p-5 text-left border-2 transition-all ${
                              formData.accommodationType === type.value
                                ? 'border-stone-900 bg-stone-50'
                                : 'border-stone-200 hover:border-stone-400'
                            }`}
                          >
                            <span className="text-sm sm:text-base font-medium text-stone-900">{type.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-3 sm:mb-4">
                        <Sparkles className="w-4 h-4 inline mr-2" />
                        Budget Range
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {budgetRanges.map((range) => (
                          <button
                            key={range.value}
                            type="button"
                            onClick={() => setFormData({...formData, budget: range.value})}
                            className={`p-4 sm:p-5 text-left border-2 transition-all ${
                              formData.budget === range.value
                                ? 'border-stone-900 bg-stone-50'
                                : 'border-stone-200 hover:border-stone-400'
                            }`}
                          >
                            <span className="text-sm sm:text-base font-medium text-stone-900">{range.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="specialRequests" className="block text-sm font-medium text-stone-700 mb-3">
                        Special Requests or Preferences
                      </label>
                      <textarea
                        id="specialRequests"
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                        rows={4}
                        className="w-full px-4 py-3 border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors resize-none"
                        placeholder="Tell us about any special occasions, dietary requirements, or specific experiences you'd like to include..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <div className="bg-white p-6 sm:p-10 lg:p-12 border border-stone-200">
                  <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-3 sm:mb-4">Your contact details</h2>
                  <p className="text-base sm:text-lg text-stone-600 mb-8 sm:mb-10">How can we reach you?</p>

                  <div className="space-y-6">
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
                        required
                      />
                    </div>

                    <div className="bg-stone-50 p-6 sm:p-8 border border-stone-200">
                      <h3 className="text-lg font-serif text-stone-900 mb-4">Booking Summary</h3>
                      <div className="space-y-2 text-sm sm:text-base text-stone-700">
                        <div className="flex justify-between">
                          <span>Destination:</span>
                          <span className="font-medium">{destinations.find(d => d.value === formData.destination)?.name || 'Not selected'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Check-in:</span>
                          <span className="font-medium">{formData.startDate || 'Not selected'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Check-out:</span>
                          <span className="font-medium">{formData.endDate || 'Not selected'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Guests:</span>
                          <span className="font-medium">{formData.guests} {formData.guests === '1' ? 'Guest' : 'Guests'}</span>
                        </div>
                        {formData.accommodationType && (
                          <div className="flex justify-between">
                            <span>Accommodation:</span>
                            <span className="font-medium">{accommodationTypes.find(t => t.value === formData.accommodationType)?.name}</span>
                          </div>
                        )}
                        {formData.budget && (
                          <div className="flex justify-between">
                            <span>Budget:</span>
                            <span className="font-medium">{budgetRanges.find(b => b.value === formData.budget)?.name}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="sm:flex-1 border-2 border-stone-900 text-stone-900 px-6 py-3 sm:py-4 font-medium hover:bg-stone-900 hover:text-white transition-all inline-flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={
                      (step === 1 && (!formData.destination || !formData.startDate || !formData.endDate)) ||
                      (step === 2 && (!formData.accommodationType || !formData.budget))
                    }
                    className="sm:flex-1 bg-stone-900 text-white px-6 py-3 sm:py-4 font-medium hover:bg-stone-800 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="sm:flex-1 bg-stone-900 text-white px-6 py-3 sm:py-4 font-medium hover:bg-stone-800 transition-all inline-flex items-center justify-center gap-2"
                  >
                    Submit Booking Request
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
