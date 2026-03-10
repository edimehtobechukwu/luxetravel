import { Link } from "react-router";
import { ArrowRight, Award, Globe, Heart, Shield } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We set the highest standards in luxury travel curation and service delivery"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our team's genuine love for travel drives us to create extraordinary experiences"
    },
    {
      icon: Globe,
      title: "Discovery",
      description: "We believe in opening doors to the world's most exclusive destinations"
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Your peace of mind is paramount—we handle every detail with care"
    }
  ];

  const team = [
    {
      name: "Alexandra Sterling",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
    },
    {
      name: "Marcus Chen",
      role: "Chief Travel Officer",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
    },
    {
      name: "Isabella Moreau",
      role: "Head of Concierge",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
    },
    {
      name: "James Whitfield",
      role: "Director of Partnerships",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1764392740382-336690c06e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-400 font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6">About Us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 sm:mb-8 leading-tight px-4">
              Redefining luxury
              <br />
              <span className="italic">one journey at a time</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
              Since 2018, we've been crafting bespoke travel experiences that transcend the ordinary
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-6 sm:mb-8 leading-tight">
                Our story
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-stone-600 leading-relaxed">
                <p>
                  LuxeTravel was born from a simple belief: that travel should be more than just a vacation—it should be a transformative experience that enriches your life.
                </p>
                <p>
                  Our founder, Alexandra Sterling, spent over a decade in the luxury hospitality industry before recognizing a gap in the market. High-net-worth individuals wanted personalized, exclusive travel experiences without the hassle of planning.
                </p>
                <p>
                  Today, we serve a discerning clientele across six continents, curating bespoke journeys to the world's most extraordinary destinations. Our team of travel specialists brings decades of combined experience, insider connections, and an unwavering commitment to excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1677129666186-d29eba893fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Luxury concierge"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-4 sm:mb-6 px-4">
              Our values
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto px-4">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-amber-100 mb-4 sm:mb-6">
                  <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-stone-900 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-4 sm:mb-6 px-4">
              Meet our team
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto px-4">
              Experienced professionals dedicated to your travel dreams
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-[3/4] bg-stone-200 mb-4 sm:mb-6 overflow-hidden">
                  <ImageWithFallback 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-stone-900 mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-sm sm:text-base text-stone-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {[
              { number: "6", label: "Years of Excellence" },
              { number: "2,500+", label: "Journeys Curated" },
              { number: "150+", label: "Destinations" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl sm:text-6xl md:text-7xl font-serif text-amber-400 mb-2 sm:mb-4">{stat.number}</p>
                <p className="text-sm sm:text-base text-stone-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-6 sm:mb-8 px-4">
            Join us on your next adventure
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 mb-8 sm:mb-12 px-4">
            Experience the LuxeTravel difference for yourself
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
