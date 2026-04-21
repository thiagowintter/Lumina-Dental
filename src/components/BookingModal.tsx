import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, CheckCircle2, AlertCircle } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [patientType, setPatientType] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black-pearl/80 backdrop-blur-xl"
          onClick={onClose}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          className="bg-charcoal border border-white/10 rounded-xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="flex justify-between items-center p-8 border-b border-white/5">
            <h2 className="font-serif text-3xl font-light text-off-white">Private Consultation</h2>
            <button onClick={onClose} className="p-2 text-stone hover:text-off-white transition-colors">
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          <div className="p-8 overflow-y-auto flex-grow">
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-champagne-dark mb-6">Patient Status</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setPatientType('new')}
                      className={`p-6 rounded-lg border flex flex-col items-center justify-center text-center transition-all duration-300 ${patientType === 'new' ? 'border-champagne-dark bg-champagne-dark/5' : 'border-white/10 hover:border-white/30'}`}
                    >
                      <User className={`w-8 h-8 mb-4 ${patientType === 'new' ? 'text-champagne-dark' : 'text-stone'}`} strokeWidth={1.5} />
                      <div className="font-serif text-lg text-off-white mb-1">New Patient</div>
                      <div className="text-xs font-light text-stone">Initial Registration</div>
                    </button>
                    <button 
                      onClick={() => setPatientType('returning')}
                      className={`p-6 rounded-lg border flex flex-col items-center justify-center text-center transition-all duration-300 ${patientType === 'returning' ? 'border-champagne-dark bg-champagne-dark/5' : 'border-white/10 hover:border-white/30'}`}
                    >
                      <CheckCircle2 className={`w-8 h-8 mb-4 ${patientType === 'returning' ? 'text-champagne-dark' : 'text-stone'}`} strokeWidth={1.5} />
                      <div className="font-serif text-lg text-off-white mb-1">Returning</div>
                      <div className="text-xs font-light text-stone">Existing Member</div>
                    </button>
                  </div>
                </div>

                <div className="bg-red-900/10 rounded-lg p-5 flex items-start border border-red-500/20 mt-8">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-4 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-sm font-medium text-red-200">Immediate Attention</h4>
                    <p className="text-xs text-red-200/70 mt-1.5 leading-relaxed">For acute pain or emergencies, bypass this form and contact our concierge directly at <a href="tel:+12125550198" className="text-red-300 underline underline-offset-2">212.555.0198</a>.</p>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-champagne-dark mb-2">Contact Details</h3>
                <div className="space-y-4 font-light">
                  <input type="text" placeholder="Full Name" className="w-full p-4 bg-black-pearl border border-white/10 rounded-lg focus:outline-none focus:border-champagne-dark text-off-white placeholder:text-stone/50 transition-colors" />
                  <input type="email" placeholder="Email Address" className="w-full p-4 bg-black-pearl border border-white/10 rounded-lg focus:outline-none focus:border-champagne-dark text-off-white placeholder:text-stone/50 transition-colors" />
                  <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-black-pearl border border-white/10 rounded-lg focus:outline-none focus:border-champagne-dark text-off-white placeholder:text-stone/50 transition-colors" />
                  <textarea placeholder="Nature of your inquiry (optional)" rows={3} className="w-full p-4 bg-black-pearl border border-white/10 rounded-lg focus:outline-none focus:border-champagne-dark text-off-white placeholder:text-stone/50 transition-colors resize-none"></textarea>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-champagne-dark/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-champagne-dark/20">
                  <Calendar className="w-8 h-8 text-champagne-dark" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl font-light text-off-white mb-4">Request Complete</h3>
                <p className="text-stone font-light leading-relaxed max-w-sm mx-auto">Our practice coordinator will contact you shortly to formalize your appointment details.</p>
              </div>
            )}
          </div>

          <div className="p-8 border-t border-white/5 flex justify-between items-center bg-black-pearl/50">
            {step > 1 && step < 3 ? (
              <button onClick={() => setStep(step - 1)} className="text-[11px] uppercase tracking-[0.15em] text-stone hover:text-off-white transition-colors">
                Return
              </button>
            ) : <div></div>}
            
            {step < 3 ? (
              <button 
                onClick={() => setStep(step + 1)}
                disabled={step === 1 && !patientType}
                className="bg-off-white text-black-pearl px-8 py-3.5 rounded-full text-[11px] uppercase tracking-[0.1em] font-medium hover:bg-champagne-dark hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {step === 1 ? 'Proceed' : 'Submit Inquiry'}
              </button>
            ) : (
              <button 
                onClick={onClose}
                className="border border-white/30 text-off-white px-8 py-3.5 rounded-full text-[11px] uppercase tracking-[0.1em] hover:bg-white hover:text-black-pearl transition-all w-full"
              >
                Close
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
