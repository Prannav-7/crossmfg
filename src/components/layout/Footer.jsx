import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Settings } from 'lucide-react';
import { siteConfig, navLinks, units } from '../../data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal border-t border-brand-charcoal/30 text-brand-parchment/70 relative">
      
      {/* Drafting Coordinates Label Overlay */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[7px] font-technical text-brand-parchment/10 tracking-[1.5em] uppercase select-none pointer-events-none">
        CMC-SHEET-FOOTER-R02
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          
          {/* Brand & Corporate Column */}
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-brand-parchment-light flex items-center justify-center text-brand-charcoal border border-brand-brass relative">
                <Settings size={16} className="animate-spin-slow text-brand-charcoal" />
                <div className="absolute inset-0.5 border border-brand-charcoal/10" />
              </div>
              <div>
                <p className="font-serif-heading font-bold text-white text-base leading-tight uppercase tracking-wider">
                  CROSS <span className="font-light text-brand-brass">MFG CO.</span>
                </p>
                <p className="text-[8px] font-technical tracking-widest text-brand-parchment/40 uppercase">
                  Precision Engineering
                </p>
              </div>
            </Link>
            
            <p className="text-brand-parchment/50 text-xs font-light leading-relaxed max-w-sm">
              Cross Manufacturing Company has been supplying top-tier tractor, hydraulic and valve actuator components to leading B2B OEMs for over three decades, committed to Swiss-grade precision and German-inspired reliability.
            </p>
            
            <div className="flex flex-col gap-2 pt-2 text-xs font-technical">
              <a href={siteConfig.phoneHref} className="flex items-center gap-2.5 text-brand-parchment/75 hover:text-brand-brass transition-colors">
                <Phone size={12} className="text-brand-brass" />
                {siteConfig.phone}
              </a>
              <a href={siteConfig.emailHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-brand-parchment/75 hover:text-brand-brass transition-colors">
                <Mail size={12} className="text-brand-brass" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-technical text-[10px] uppercase tracking-widest text-brand-brass mb-6 pb-2 border-b border-brand-parchment/10">
              Navigation Index
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-xs font-light text-brand-parchment/60 hover:text-white transition-colors group"
                  >
                    <ArrowRight size={10} className="text-brand-brass opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Manufacturing Units */}
          <div className="md:col-span-4 space-y-5">
            <h3 className="font-technical text-[10px] uppercase tracking-widest text-brand-brass mb-6 pb-2 border-b border-brand-parchment/10">
              Production Coordinates
            </h3>
            <div className="space-y-4">
              {units.map((unit, idx) => (
                <div key={unit.id} className="flex items-start gap-3">
                  <div className="font-technical text-[9px] text-brand-brass mt-0.5">
                    [0{idx + 1}]
                  </div>
                  <div>
                    <p className="text-xs font-technical text-white leading-tight">{unit.name}</p>
                    <p className="text-[10px] text-brand-parchment/40 mt-1 leading-relaxed font-light">{unit.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Copyright & Bottom Certifications */}
      <div className="bg-brand-charcoal border-t border-brand-parchment/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[9px] font-technical text-brand-parchment/30">
            © {year} CROSS MANUFACTURING COMPANY. STANDARD DOCUMENTATION IN COMPLIANCE WITH ISO 9001:2015.
          </p>
          <div className="flex items-center gap-4 text-[9px] font-technical text-brand-parchment/40">
            <span>CHENNAI, INDIA</span>
            <span className="text-brand-parchment/10">·</span>
            <span className="text-brand-brass">TAFE BEST KAIZEN AWARD 2016</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
