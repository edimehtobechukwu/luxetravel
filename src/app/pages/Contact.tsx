import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll respond within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Available 24/7"],
      action: "Call us"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@luxetravel.com", "Response within 24 hours"],
      action: "Send email"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Fifth Avenue", "New York, NY 10001"],
      action: "Get directions"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9am - 6pm EST", "Weekend: By appointment"],
      action: "Schedule visit"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-400 font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 sm:mb-8 leading-tight px-4">
              Let's start
              <br />
              <span className="italic">planning</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
              Our team is ready to help you craft your next extraordinary journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 border border-stone-200 text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <info.icon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-stone-900 mb-3 sm:mb-4">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className={`text-sm sm:text-base ${i === 0 ? 'text-stone-900 font-medium' : 'text-stone-600'} mb-1`}>
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-4 sm:mb-6 px-4">
              Send us a message
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 px-4">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-stone-50 p-6 sm:p-10 lg:p-12 border border-stone-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-stone-300 bg-white focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-stone-300 bg-white focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
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
                    className="w-full px-4 py-3 border border-stone-300 bg-white focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-3">
                  Subject *
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-stone-300 bg-white focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="membership">Membership Question</option>
                  <option value="concierge">Concierge Services</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 border border-stone-300 bg-white focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-stone-900 text-white px-8 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-stone-800 transition-all inline-flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Prompt */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 sm:p-10 border border-stone-200"
            >
              <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-4 sm:mb-6">
                Questions about membership?
              </h3>
              <p className="text-base sm:text-lg text-stone-600 mb-6 sm:mb-8 leading-relaxed">
                Learn more about our exclusive membership tiers and benefits
              </p>
              <Link
                to="/premium"
                className="inline-flex items-center gap-2 text-stone-900 font-medium hover:gap-4 transition-all text-sm sm:text-base"
              >
                View Membership Details
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 sm:p-10 border border-stone-200"
            >
              <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-4 sm:mb-6">
                Ready to book?
              </h3>
              <p className="text-base sm:text-lg text-stone-600 mb-6 sm:mb-8 leading-relaxed">
                Start planning your next luxury travel experience with our easy booking process
              </p>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 text-stone-900 font-medium hover:gap-4 transition-all text-sm sm:text-base"
              >
                Start Booking
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
