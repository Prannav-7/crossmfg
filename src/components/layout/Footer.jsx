import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Settings } from 'lucide-react';
import { siteConfig, navLinks, units } from '../../data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      
      {/* Main Footer Links & Info */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Brand & Corporate Column */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white shadow-sm">
                <Settings size={18} className="animate-spin-slow" />
              </div>
              <div>
                <p className="font-heading font-800 text-white text-base leading-tight uppercase tracking-tight">
                  Cross <span className="text-brand-blue-light">Mfg Co.</span>
                </p>
                <p className="text-[9px] font-heading font-700 tracking-wider text-slate-500 uppercase">
                  Precision Engineering
                </p>
              </div>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Cross Manufacturing Company has been supplying top-tier tractor, hydraulic and valve actuator components to leading OEMs for over three decades.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <a href={siteConfig.phoneHref} className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-white transition-colors">
                <Phone size={12} className="text-brand-blue-light" />
                {siteConfig.phone}
              </a>
              <a href={siteConfig.emailHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-white transition-colors">
                <Mail size={12} className="text-brand-blue-light" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-heading font-800 text-white text-xs uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors group"
                  >
                    <ArrowRight size={10} className="text-brand-blue-light group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Manufacturing Units */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-heading font-800 text-white text-xs uppercase tracking-wider mb-4">
              Manufacturing Units
            </h3>
            <div className="space-y-3.5">
              {units.map((unit) => (
                <div key={unit.id} className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-brand-blue-light shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-heading font-700 text-white leading-tight">{unit.name}</p>
                    <p className="text-[10px] text-slate-400 mt-1 leading-normal">{unit.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Copyright & Bottom Certifications */}
      <div className="bg-slate-950 border-t border-slate-900">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-slate-500 font-medium">
            © {year} Cross Manufacturing Company. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[10px] text-slate-500 font-medium">
            <span>Chennai, India</span>
            <span>·</span>
            <span>TAFE Best KAIZEN Award 2016</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
