import { Outlet, Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollToTop from "./components/ScrollToTop";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
        <Link to="/" className="text-xl sm:text-2xl font-serif italic text-stone-900">
          Luxe<span className="text-amber-600">Travel</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link
            to="/how-it-works"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors tracking-wide"
          >
            Experience
          </Link>
          <Link
            to="/deals"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors tracking-wide"
          >
            Destinations
          </Link>
          <Link
            to="/premium"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors tracking-wide"
          >
            Membership
          </Link>
          <Link
            to="/signup"
            className="bg-stone-900 text-white px-6 lg:px-8 py-3 text-sm font-medium hover:bg-stone-800 transition-all tracking-wide"
          >
            Join Now
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-stone-100 transition-colors rounded"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-200"
          >
            <div className="px-4 sm:px-6 py-6 flex flex-col space-y-4">
              <Link 
                to="/how-it-works" 
                onClick={() => setIsOpen(false)} 
                className="text-stone-900 font-medium py-2 hover:text-amber-600 transition-colors"
              >
                Experience
              </Link>
              <Link 
                to="/deals" 
                onClick={() => setIsOpen(false)} 
                className="text-stone-900 font-medium py-2 hover:text-amber-600 transition-colors"
              >
                Destinations
              </Link>
              <Link 
                to="/premium" 
                onClick={() => setIsOpen(false)} 
                className="text-stone-900 font-medium py-2 hover:text-amber-600 transition-colors"
              >
                Membership
              </Link>
              <Link 
                to="/signup" 
                onClick={() => setIsOpen(false)} 
                className="bg-stone-900 text-white px-6 py-3 text-center font-medium hover:bg-stone-800 transition-colors"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-20">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-2xl sm:text-3xl font-serif italic text-white mb-4 sm:mb-6 block">
              Luxe<span className="text-amber-500">Travel</span>
            </Link>
            <p className="text-sm sm:text-base text-stone-400 leading-relaxed">
              Curated luxury travel experiences for the discerning traveler
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 tracking-wide text-sm sm:text-base">Explore</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/deals" className="text-sm sm:text-base text-stone-400 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/premium" className="text-sm sm:text-base text-stone-400 hover:text-white transition-colors">Membership</Link></li>
              <li><Link to="/how-it-works" className="text-sm sm:text-base text-stone-400 hover:text-white transition-colors">Experience</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 tracking-wide text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/about" className="text-sm sm:text-base text-stone-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/concierge" className="text-sm sm:text-base text-stone-400 hover:text-white transition-colors">Concierge</Link></li>
              <li><Link to="/contact" className="text-sm sm:text-base text-stone-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 tracking-wide text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-sm sm:text-base text-stone-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-sm sm:text-base text-stone-400 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-xs sm:text-sm text-center md:text-left">© 2026 LuxeTravel. All rights reserved.</p>
          <div className="flex gap-6 sm:gap-8 text-xs sm:text-sm text-stone-500">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow pt-16 sm:pt-20">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}