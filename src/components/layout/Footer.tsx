import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black-pearl border-t border-white/5 text-off-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <span className="font-serif text-4xl font-light tracking-wide text-white mb-8 block">
              Lumina<span className="text-champagne-dark italic ml-1">Dental</span>
            </span>
            <p className="text-sm text-stone font-light leading-relaxed max-w-xs">
              A profound departure from standard dentistry. Experience absolute precision and unwavering care in an environment of total serenity.
            </p>
          </div>
          
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-champagne-dark mb-8">Clinical Services</h4>
            <ul className="space-y-4 text-sm font-light text-stone">
              <li><Link to="/" className="hover:text-off-white transition-colors">Aesthetic Transformations</Link></li>
              <li><Link to="/" className="hover:text-off-white transition-colors">Implantology</Link></li>
              <li><Link to="/" className="hover:text-off-white transition-colors">Restorative Care</Link></li>
              <li><Link to="/" className="hover:text-off-white transition-colors">Preventative Protocols</Link></li>
              <li><Link to="/" className="hover:text-off-white transition-colors">Urgent Assessments</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-champagne-dark mb-8">The Practice</h4>
            <ul className="space-y-4 text-sm font-light text-stone">
              <li><Link to="/" className="hover:text-off-white transition-colors">Our Philosophy</Link></li>
              <li><Link to="/" className="hover:text-off-white transition-colors">Dr. Eleanor Hayes</Link></li>
              <li><Link to="/" className="hover:text-off-white transition-colors">Sanctuary Environment</Link></li>
              <li><Link to="/" className="hover:text-off-white transition-colors">Concierge Services</Link></li>
              <li><Link to="/" className="hover:text-off-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-champagne-dark mb-8">Private Clinic</h4>
            <address className="not-italic text-sm font-light text-stone space-y-4">
              <p>One Vanderbilt Avenue<br />Suite 4200<br />New York, NY 10017</p>
              <p><a href="tel:+12125550198" className="hover:text-off-white transition-colors text-lg font-serif">212.555.0198</a></p>
              <p><a href="mailto:concierge@luminadental.com" className="hover:text-off-white transition-colors">concierge@luminadental.com</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone font-light tracking-wide uppercase">
          <p>&copy; {new Date().getFullYear()} Lumina Dental. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link to="/" className="hover:text-off-white transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-off-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
