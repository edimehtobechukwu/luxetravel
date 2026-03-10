import { Link } from "react-router";
import { ArrowRight, Clock, Phone, MessageSquare, Plane, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Concierge() {
  const services = [
    {
      icon: Plane,
      title: "Travel Arrangements",
      description: "Private jet bookings, first-class flights, and seamless transfers"
    },
    {
      icon: Calendar,
      title: "Event Access",
      description: "Exclusive reservations for sold-out shows, sporting events, and galas"
    },
    {
      icon: MapPin,
      title: "Destination Guidance",
      description: "Insider recommendations and reservations at Michelin-starred restaurants"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock assistance wherever you are in the world"
    }
  ];

  const features = [
    {
      title: "Instant Response",
      description: "Our team responds to all requests within minutes, not hours",
      image: "https://images.unsplash.com/photo-1719404364279-43785807f531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    },
    {
      title: "Global Network",
      description: "Leveraging partnerships with the world's finest hotels, restaurants, and experiences",
      image: "https://images.unsplash.com/photo-1609189123897-42db027571c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    },
    {
      title: "Personalized Service",
      description: "Your dedicated concierge knows your preferences and anticipates your needs",
      image: "https://images.unsplash.com/photo-1704655295066-681e61ecca6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1677129666186-d29eba893fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600"
            alt="Concierge service"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 to-stone-900/85"></div>
        
        <div className="max-w-5xl mx-auto text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-400 font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6">Concierge Services</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 sm:mb-8 leading-tight">
              Your personal travel
              <br />
              <span className="italic">concierge</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-stone-200 max-w-3xl leading-relaxed font-light">
              Access a dedicated team of experts ready to fulfill your every travel need, anytime, anywhere
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-4 sm:mb-6 px-4">
              What we handle
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto px-4">
              From simple requests to complex arrangements, we're here for you
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 border border-stone-200 hover:border-amber-600 transition-all group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-stone-100 group-hover:bg-amber-100 flex items-center justify-center mb-4 sm:mb-6 transition-colors">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-stone-900 group-hover:text-amber-600 transition-colors" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-stone-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-4 sm:mb-6 px-4">
              How it works
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto px-4">
              Effortless service in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                step: "01",
                title: "Request",
                description: "Contact us via phone, email, or our app with any request—no matter how specific"
              },
              {
                step: "02",
                title: "Coordinate",
                description: "Your concierge immediately starts working to secure reservations and arrangements"
              },
              {
                step: "03",
                title: "Enjoy",
                description: "Receive confirmation details and enjoy your perfectly planned experience"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-7xl sm:text-8xl font-serif text-stone-200 mb-4 sm:mb-6">{item.step}</div>
                <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-4 sm:mb-6 px-4">
              Why choose us
            </h2>
          </div>

          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-4 sm:mb-6">{feature.title}</h3>
                  <p className="text-lg sm:text-xl text-stone-600 leading-relaxed">{feature.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-8 sm:mb-12 px-4">
            Get in touch
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div>
              <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-serif mb-2">Phone</h3>
              <p className="text-sm sm:text-base text-stone-300">+1 (555) 123-4567</p>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">24/7 Available</p>
            </div>
            <div>
              <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-serif mb-2">Email</h3>
              <p className="text-sm sm:text-base text-stone-300">concierge@luxetravel.com</p>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">Response within 15 min</p>
            </div>
            <div>
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-serif mb-2">Chat</h3>
              <p className="text-sm sm:text-base text-stone-300">Live chat support</p>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">Members only</p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium hover:bg-stone-100 transition-all group"
          >
            Contact Concierge
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-6 sm:mb-8 px-4">
            Experience the difference
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 mb-8 sm:mb-12 px-4">
            Join LuxeTravel and gain access to your personal concierge team
          </p>
          <Link
            to="/premium"
            className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium hover:bg-stone-800 transition-all group"
          >
            View Membership
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}