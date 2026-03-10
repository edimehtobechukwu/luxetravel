import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";

export default function Premium() {
  const tiers = [
    {
      name: "Signature",
      price: "$495",
      period: "/year",
      description: "For the sophisticated traveler",
      features: [
        "Curated luxury destinations",
        "Priority booking access",
        "24/7 concierge support",
        "Exclusive hotel partnerships",
        "Complimentary upgrades"
      ],
      cta: "Select Signature"
    },
    {
      name: "Elite",
      price: "$1,995",
      period: "/year",
      description: "The pinnacle of travel excellence",
      features: [
        "All Signature benefits",
        "Private jet access",
        "Personal travel designer",
        "Invitation-only experiences",
        "Villa & yacht reservations",
        "Global VIP airport service"
      ],
      cta: "Select Elite",
      featured: true
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-amber-800 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-400 font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6">Membership</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 sm:mb-8 leading-tight px-4">
              Unlock the world's finest experiences
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
              Join an exclusive community where every journey is extraordinary
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`bg-white p-8 sm:p-10 lg:p-12 ${tier.featured ? 'ring-2 ring-amber-600' : 'border border-stone-200'} relative`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-2 sm:mb-3">{tier.name}</h3>
                <p className="text-sm sm:text-base text-stone-600 mb-6 sm:mb-8">{tier.description}</p>
                
                <div className="mb-6 sm:mb-8">
                  <span className="text-5xl sm:text-6xl font-serif text-stone-900">{tier.price}</span>
                  <span className="text-lg sm:text-xl text-stone-600">{tier.period}</span>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-stone-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/signup"
                  className={`block w-full py-3 sm:py-4 text-center text-sm sm:text-base font-medium transition-all ${
                    tier.featured
                      ? 'bg-stone-900 text-white hover:bg-stone-800'
                      : 'border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-4 sm:mb-6 px-4">
              Membership privileges
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto px-4">
              Experience travel as it was meant to be
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {[
              {
                title: "Exclusive Access",
                description: "Reserved allocations at the world's most sought-after properties and experiences"
              },
              {
                title: "Expert Curation",
                description: "Each destination handpicked by our team of luxury travel specialists"
              },
              {
                title: "Personalized Service",
                description: "Dedicated concierge available around the clock for your every need"
              },
              {
                title: "Seamless Planning",
                description: "From concept to completion, every detail orchestrated to perfection"
              },
              {
                title: "VIP Treatment",
                description: "Priority access, upgrades, and amenities at partner properties worldwide"
              },
              {
                title: "Peace of Mind",
                description: "Comprehensive travel protection and 24/7 emergency assistance"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  <div className="w-12 h-0.5 bg-amber-600"></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-stone-900 mb-3 sm:mb-4">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 sm:mb-8 px-4">
            Begin your membership
          </h2>
          <p className="text-lg sm:text-xl text-stone-300 mb-8 sm:mb-12 px-4">
            Speak with a membership specialist to find the perfect tier for your travel aspirations
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium hover:bg-stone-100 transition-all group"
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}