import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const destinations = [
    {
      name: "Santorini",
      subtitle: "Greek Islands",
      image: "https://images.unsplash.com/photo-1666062669930-6bd4b5031867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      price: "From $2,890"
    },
    {
      name: "Maldives",
      subtitle: "Indian Ocean",
      image: "https://images.unsplash.com/photo-1697898109604-e06e88b15271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      price: "From $3,490"
    },
    {
      name: "Dubai",
      subtitle: "United Arab Emirates",
      image: "https://images.unsplash.com/photo-1768069794857-9306ac167c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      price: "From $2,290"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1729707690998-1d4c5d755c0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600"
            alt="Luxury resort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">Exclusive Member Benefits</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-6 sm:mb-8 leading-[1.1]">
              Travel in
              <br />
              <span className="italic text-amber-400">Extraordinary</span> Style
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-stone-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4">
              Discover handpicked luxury destinations, exclusive experiences, and unparalleled service
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              <Link
                to="/booking"
                className="w-full sm:w-auto bg-white text-stone-900 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-stone-100 transition-all inline-flex items-center justify-center gap-2 group"
              >
                Begin Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/premium"
                className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-white hover:text-stone-900 transition-all text-center"
              >
                Explore Membership
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/60 text-sm"
          >
            ↓ Scroll to explore
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-amber-600 font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">Curated Collection</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-4 sm:mb-6 px-4">
                Signature Destinations
              </h2>
              <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto px-4">
                Carefully selected experiences that redefine luxury travel
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-4 sm:mb-6 aspect-[3/4]">
                  <ImageWithFallback 
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                    <p className="text-xs sm:text-sm font-medium tracking-widest uppercase mb-1 sm:mb-2 text-amber-400">{dest.subtitle}</p>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-2 sm:mb-3">{dest.name}</h3>
                    <p className="text-sm sm:text-base text-stone-300">{dest.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Link
              to="/deals"
              className="inline-flex items-center gap-2 text-stone-900 font-medium hover:gap-4 transition-all group text-sm sm:text-base"
            >
              View All Destinations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-amber-600 font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6">The LuxeTravel Difference</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-6 sm:mb-8 leading-tight">
                Elevated travel,
                <br />
                <span className="italic">perfected</span>
              </h2>
              <p className="text-lg sm:text-xl text-stone-600 mb-6 sm:mb-8 leading-relaxed">
                Every journey is meticulously crafted by our team of travel connoisseurs. From private jet transfers to exclusive villa reservations, we handle every detail with precision and care.
              </p>
              <div className="space-y-4 sm:space-y-6">
                {[
                  "Personalized 24/7 concierge service",
                  "Access to exclusive properties worldwide",
                  "Complimentary upgrades and amenities",
                  "Bespoke itinerary planning"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></div>
                    <p className="text-stone-700 text-base sm:text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1772354852092-0685c2bf32b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="First class experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-amber-600 text-white p-6 sm:p-8 max-w-xs">
                <p className="text-3xl sm:text-4xl font-serif mb-2">98%</p>
                <p className="text-xs sm:text-sm opacity-90">Member satisfaction rate across all destinations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-8 sm:mb-12 leading-relaxed italic text-stone-100 px-4">
              "An absolutely transformative experience. The attention to detail and personalized service exceeded every expectation."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-stone-700 overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1759223198981-661cadbbff36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200"
                  alt="Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-base sm:text-lg">Victoria Chen</p>
                <p className="text-stone-400 text-sm sm:text-base">Elite Member since 2023</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-6 sm:mb-8 px-4">
              Your journey awaits
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Join our community of discerning travelers and unlock a world of extraordinary experiences
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium hover:bg-stone-800 transition-all group"
            >
              Become a Member
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}