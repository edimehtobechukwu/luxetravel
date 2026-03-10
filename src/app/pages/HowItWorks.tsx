import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Share your travel aspirations with our team of specialists who will understand your unique preferences and desires",
      image: "https://images.unsplash.com/photo-1741795854922-87217b375e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    },
    {
      number: "02",
      title: "Curate",
      description: "Receive a bespoke itinerary crafted exclusively for you, featuring handpicked destinations and experiences",
      image: "https://images.unsplash.com/photo-1609189123897-42db027571c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    },
    {
      number: "03",
      title: "Experience",
      description: "Embark on your journey with complete confidence, supported by our 24/7 concierge service every step of the way",
      image: "https://images.unsplash.com/photo-1768346564233-d71f37bd19b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
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
            <p className="text-amber-400 font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6">The Experience</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 sm:mb-8 leading-tight px-4">
              Travel,
              <br />
              <span className="italic">reimagined</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
              We transform the art of travel into an effortless, unforgettable journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-20 sm:mb-28 lg:mb-32 last:mb-0"
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <p className="text-6xl sm:text-7xl lg:text-8xl font-serif text-stone-200 mb-3 sm:mb-4">{step.number}</p>
                <h3 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-4 sm:mb-6">{step.title}</h3>
                <p className="text-lg sm:text-xl text-stone-600 leading-relaxed">{step.description}</p>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="aspect-[4/3] bg-stone-100 overflow-hidden">
                  <ImageWithFallback 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-8 sm:mb-12 leading-tight px-4">
              Our philosophy
            </h2>
            <p className="text-xl sm:text-2xl text-stone-700 leading-relaxed mb-6 sm:mb-8 px-4">
              True luxury isn't just about where you go—it's about how you feel when you arrive.
            </p>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed px-4">
              We believe every journey should be transformative, every detail should be considered, and every moment should be savored. This commitment to excellence has guided us in creating experiences that transcend ordinary travel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-6 sm:mb-8 px-4">
            Ready to begin?
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 mb-8 sm:mb-12 px-4">
            Let us craft your next extraordinary adventure
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium hover:bg-stone-800 transition-all group"
          >
            Start Planning
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}