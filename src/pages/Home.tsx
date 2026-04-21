import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Clock, Heart, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../components/BookingModal';

function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Premium dental clinic interior" 
          className="w-full h-full object-cover opacity-[0.35]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-pearl/70 via-black-pearl/50 to-black-pearl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center space-x-2 text-champagne-dark text-[11px] uppercase tracking-[0.2em] mb-8 font-medium">
              <SparkleIcon /> <span>Boutique Dental Excellence</span> <SparkleIcon />
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 font-light">
              Elevating the <br/>
              <span className="italic text-champagne">Art of Dentistry</span>
            </h1>
            <p className="text-lg text-stone mb-12 leading-relaxed max-w-xl mx-auto font-light">
              Discover a sanctuary of modern dental care where clinical precision meets unparalleled comfort. Design your perfect smile.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button 
                onClick={onBook}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-off-white text-black-pearl px-10 py-4 rounded-full text-xs uppercase tracking-[0.15em] font-medium hover:bg-champagne hover:text-black-pearl transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-white/20 text-white px-10 py-4 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-white/5 transition-all duration-300"
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Credibility() {
  return (
    <section className="py-16 bg-black-pearl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          <CredibilityStat icon={<Heart className="w-5 h-5 text-champagne border border-champagne p-3 rounded-full box-content" strokeWidth={1} />} title="Anxiety-Free" subtitle="Sedation Options" />
          <CredibilityStat icon={<Award className="w-5 h-5 text-champagne border border-champagne p-3 rounded-full box-content" strokeWidth={1} />} title="Boutique Care" subtitle="Concierge Dentistry" />
          <CredibilityStat icon={<Shield className="w-5 h-5 text-champagne border border-champagne p-3 rounded-full box-content" strokeWidth={1} />} title="Advanced Tech" subtitle="3D Precision" />
          <CredibilityStat icon={<Clock className="w-5 h-5 text-champagne border border-champagne p-3 rounded-full box-content" strokeWidth={1} />} title="Exclusive Access" subtitle="Priority Scheduling" />
        </div>
      </div>
    </section>
  );
}

function CredibilityStat({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="mb-4">{icon}</div>
      <h3 className="font-serif text-xl font-light tracking-wide text-off-white mb-1">{title}</h3>
      <p className="text-[10px] uppercase tracking-[0.15em] text-stone font-light">{subtitle}</p>
    </div>
  );
}

function Treatments() {
  const treatments = [
    { title: "Aesthetic Transformations", desc: "Porcelain veneers and comprehensive smile design.", img: "photo-1580618672591-eb180b1a973d" },
    { title: "Implantology", desc: "Permanent, functional restorations with absolute precision.", img: "photo-1598256989800-fea5f95bc80b" },
    { title: "Clear Aligners", desc: "Invisible orthodontic refinement.", img: "photo-1580618672591-eb180b1a973d" },
    { title: "Preventative Protocols", desc: "Proactive care to maintain optimal oral health.", img: "photo-1629909613654-28e377c37b09" },
  ];

  return (
    <section className="py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-champagne-dark text-[11px] uppercase tracking-[0.2em] mb-4 block font-medium">Curated Services</span>
          <h2 className="font-serif text-4xl md:text-5xl text-off-white mb-6 font-light">Artistry & Precision</h2>
          <p className="text-stone text-lg font-light">Our bespoke treatments are designed to elevate your health and confidence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-black-pearl border border-white/5 overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={`https://images.unsplash.com/${t.img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 text-center border-t border-white/5">
                <h3 className="font-serif text-xl font-light mb-3 text-off-white">{t.title}</h3>
                <p className="text-stone text-sm mb-6 font-light leading-relaxed">{t.desc}</p>
                <div className="text-champagne-dark font-medium text-[10px] uppercase tracking-[0.1em] flex items-center justify-center transition-colors">
                  Explore <ArrowRight className="w-3 h-3 ml-2" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Authority() {
  return (
    <section className="py-32 bg-black-pearl text-off-white overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden relative z-10 border border-white/10 bg-white/5">
              <img 
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973d?auto=format&fit=crop&w=1000&h=1334&q=80" 
                alt="Dr. Eleanor Hayes" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Subtle glow instead of teal blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-champagne/5 blur-[100px] z-0 pointer-events-none"></div>
          </div>
          
          <div>
            <span className="text-champagne-dark text-[10px] uppercase tracking-[0.2em] mb-6 block font-medium">The Founder</span>
            <h2 className="font-serif text-4xl lg:text-6xl mb-8 leading-[1.1] font-light">
               Dr. Eleanor Hayes
            </h2>
            <p className="text-stone text-lg mb-10 font-light leading-relaxed text-justify">
              "Dentistry is not merely a clinical procedure; it is a profound interaction built on absolute trust. Our sanctuary was designed to shatter the traditional, clinical paradigm, offering an experience that is as restorative for the mind as it is for the body."
            </p>
            
            <ul className="space-y-4 mb-12 border-l border-champagne-dark/20 pl-6">
              {['Fellow of the American Academy of Cosmetic Dentistry', 'Pioneer in Anxiety-Free Sedation Techniques', 'Voted "Top Dentist" 5 Years Running'].map((item, i) => (
                <li key={i} className="flex items-start text-stone font-light text-sm">
                  <span className="text-champagne-dark mr-3 mt-1 text-[10px]">◇</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_Sarah_Palin.png" alt="Signature" className="h-16 invert opacity-50 contrast-125" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Comfort() {
  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
             <span className="text-champagne-dark text-[10px] uppercase tracking-[0.2em] mb-4 block font-medium">The Experience</span>
            <h2 className="font-serif text-4xl md:text-5xl text-off-white mb-8 leading-tight font-light">
              <span className="italic text-champagne">Uncompromising</span> Comfort
            </h2>
            <p className="text-lg text-stone mb-12 font-light leading-relaxed">
              We have meticulously engineered every detail of our clinic to eliminate sensory stress, providing an atmosphere of profound calm.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {[
                { title: 'Acoustic Solitude', desc: 'Noise-canceling headphones & curated soundscapes' },
                { title: 'Olfactory Design', desc: 'Bespoke ambient scents to calm the nervous system' },
                { title: 'Conscious Sedation', desc: 'Tailored relaxation protocols for absolute peace' },
                { title: 'Thermal Comfort', desc: 'Warm towels and plush weighted blankets' }
              ].map((feature, i) => (
                <div key={i} className="border-t border-white/10 pt-4">
                  <h4 className="font-serif text-lg text-off-white mb-2 tracking-wide text-champagne">{feature.title}</h4>
                  <p className="text-sm text-stone font-light">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80" className="w-full h-80 object-cover border border-white/5 rounded-sm" alt="Comfort" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973d?auto=format&fit=crop&w=600&h=800&crop=faces&q=80" className="w-full h-80 object-cover border border-white/5 rounded-sm mt-12" alt="Relaxation" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA({ onBook }: { onBook: () => void }) {
  return (
    <section className="py-32 bg-black-pearl border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-champagne-dark/5 to-transparent pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight font-light text-off-white">
          Begin Your <span className="italic text-champagne">Transformation</span>
        </h2>
        <p className="text-stone text-lg mb-12 max-w-2xl mx-auto font-light">
          Reserve your private consultation and experience dentistry elevated to an art form.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button onClick={onBook} className="bg-champagne text-black-pearl px-10 py-4 rounded-full text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-off-white transition-colors w-full sm:w-auto">
            Request Appointment
          </button>
          <span className="text-stone text-sm italic font-serif">or</span>
          <a href="tel:+12125550198" className="text-lg font-serif tracking-widest hover:text-champagne-dark transition-colors text-off-white">
            212.555.0198
          </a>
        </div>
      </div>
    </section>
  );
}

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  );
}

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="flex flex-col auto-rows-min">
      <Hero onBook={() => setIsBookingOpen(true)} />
      <Credibility />
      <Treatments />
      <Authority />
      <Comfort />
      <CTA onBook={() => setIsBookingOpen(true)} />

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
