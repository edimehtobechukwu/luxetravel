import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Deals() {
  const destinations = [
    {
      name: "Santorini",
      country: "Greece",
      image: "https://images.unsplash.com/photo-1666062669930-6bd4b5031867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      description: "Cliffside luxury overlooking the Aegean Sea"
    },
    {
      name: "Maldives",
      country: "Indian Ocean",
      image: "https://images.unsplash.com/photo-1697898109604-e06e88b15271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      description: "Overwater villas in paradise"
    },
    {
      name: "Dubai",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1768069794857-9306ac167c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      description: "Modern opulence in the desert"
    },
    {
      name: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1728051104379-de466fd0f3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      description: "Tropical serenity and cultural richness"
    },
    {
      name: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1683874022998-401ac10b5c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      description: "Timeless elegance in the City of Light"
    },
    {
      name: "Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1718851972754-6638b49b4775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      description: "Where tradition meets cutting-edge luxury"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-600 font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6">Destinations</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 mb-6 sm:mb-8 leading-tight px-4">
              Explore the
              <br />
              <span className="italic">extraordinary</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed px-4">
              Handpicked destinations that represent the pinnacle of luxury travel experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-4 sm:mb-6">
                  <ImageWithFallback 
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                    <p className="text-xs sm:text-sm tracking-widest uppercase mb-1 sm:mb-2 text-amber-400">{dest.country}</p>
                    <h3 className="text-2xl sm:text-3xl font-serif mb-2">{dest.name}</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed px-1">{dest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 sm:mb-8 px-4">
            Where will you go next?
          </h2>
          <p className="text-lg sm:text-xl text-stone-300 mb-8 sm:mb-12 px-4">
            Speak with our travel specialists to plan your bespoke journey
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium hover:bg-stone-100 transition-all group"
          >
            Plan Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}