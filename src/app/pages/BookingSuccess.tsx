import { Link } from "react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function BookingSuccess() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white p-8 sm:p-12 border border-stone-200 text-center"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-4">Request Received</h1>
        
        <p className="text-stone-600 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
          Thank you for choosing LuxeTravel. Our concierge team is reviewing your request and will be in touch within 24 hours to craft your extraordinary experience.
        </p>
        
        <Link 
          to="/"
          className="inline-flex items-center justify-center gap-2 w-full bg-stone-900 text-white px-6 py-4 font-medium hover:bg-stone-800 transition-all group"
        >
          Return Home
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
