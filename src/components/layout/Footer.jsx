import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Settings } from 'lucide-react';
import { siteConfig, navLinks, units } from '../../data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      {/* Top Brand Banner */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-12 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center text-white">
            <Settings size={22} className="animate-spin-slow" />
          </div>
          <div>
            <p className="font-heading font-800 text-white text-lg tracking-tight uppercase">
              Cross <span className="text-brand-blue-light">Mfg Co.</span>
            </p>
            <p className="text-[10px] font-heading font-700 tracking-wider text-slate-500 uppercase">
              Precision Machined Components
            </p>
          </div>
        </div>
        <p className="text-slate-400 text-sm max-w-md text-center md:text-right font-medium">
          Trusted OEM partner delivering high-quality engineering components since 1989.
        </p>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Contact Details */}
          <div>
            <h3 className="font-heading font-800 text-white text-sm uppercase tracking-wider mb-6">
              Corporate Headquarters
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Cross Manufacturing Company has been supplying top-tier tractor, hydraulic and valve actuator components to leading OEMs for over three decades.
            </p>
            <div className="flex flex-col gap-3">
              <a href={siteConfig.phoneHref} className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group">
                <Phone size={14} className="text-brand-blue-light" />
                {siteConfig.phone}
              </a>
              <a href={siteConfig.emailHref} className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group">
                <Mail size={14} className="text-brand-blue-light" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-800 text-white text-sm uppercase tracking-wider mb-6">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-3.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    <ArrowRight size={12} className="text-brand-blue-light group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Manufacturing Units */}
          <div>
            <h3 className="font-heading font-800 text-white text-sm uppercase tracking-wider mb-6">
              Manufacturing Units
            </h3>
            <div className="flex flex-col gap-6">
              {units.map((unit) => (
                <div key={unit.id} className="flex items-start gap-3">
                  <MapPin size={16} className="text-brand-blue-light shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-heading font-700 text-white">{unit.name}</p>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{unit.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Copyright & Bottom Certifications */}
      <div className="bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">
            © {year} Cross Manufacturing Company. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span>Chennai, India</span>
            <span>·</span>
            <span>Best KAIZEN Award 2016</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
