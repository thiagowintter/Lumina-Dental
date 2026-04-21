import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import BookingModal from '../BookingModal';

export default function Navbar() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 glass-panel">
        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link to="/" className="flex items-center">
              <span className="font-serif text-3xl tracking-wide text-off-white">
                Lumina<span className="text-champagne-dark italic ml-1">Dental</span>
              </span>
            </Link>

            <nav className="hidden md:flex space-x-12">
              <Link to="/" className="text-[11px] uppercase tracking-[0.15em] hover:text-champagne-dark transition-colors">Treatments</Link>
              <Link to="/" className="text-[11px] uppercase tracking-[0.15em] hover:text-champagne-dark transition-colors">Philosophy</Link>
              <Link to="/" className="text-[11px] uppercase tracking-[0.15em] hover:text-champagne-dark transition-colors">Gallery</Link>
              <Link to="/" className="text-[11px] uppercase tracking-[0.15em] hover:text-champagne-dark transition-colors">Journal</Link>
            </nav>

            <div className="flex items-center">
              <motion.button 
                onClick={() => setIsBookingOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-white/30 text-off-white px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.1em] hover:bg-white hover:text-black-pearl transition-all duration-300"
              >
                Request Consultation
              </motion.button>
            </div>
          </div>
        </div>
      </header>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
