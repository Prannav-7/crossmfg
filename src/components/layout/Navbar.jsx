import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Mail, Menu, X, Settings } from 'lucide-react';
import { navLinks, siteConfig } from '../../data/siteData';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Top Corporate Bar ── */}
      <div className="hidden md:flex bg-slate-900 border-b border-slate-800 py-2.5 text-xs text-slate-300 font-medium">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 flex justify-between w-full items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              TAFE KAIZEN Award Winner
            </span>
            <span className="text-slate-500">|</span>
            <span>ISO 9001:2015 Standards</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={siteConfig.emailHref} className="flex items-center gap-2 hover:text-brand-blue-light transition-colors">
              <Mail size={13} className="text-brand-blue-light" /> {siteConfig.email}
            </a>
            <span className="text-slate-500">|</span>
            <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-brand-blue-light transition-colors">
              <Phone size={13} className="text-brand-blue-light" /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Sticky Navbar ── */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center text-white shadow-sm transition-transform hover:rotate-12 duration-300">
              <Settings size={22} className="animate-spin-slow" />
            </div>
            <div>
              <p className="font-heading font-800 text-text-dark text-lg leading-tight tracking-tight uppercase">
                Cross <span className="text-brand-blue">Mfg Co.</span>
              </p>
              <p className="text-[10px] font-heading font-700 tracking-wider text-text-muted uppercase">
                Precision Engineering
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md font-heading font-700 text-sm tracking-wide transition-all ${
                    isActive
                      ? 'text-brand-blue bg-brand-blue/5'
                      : 'text-text-muted hover:text-text-dark hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Get a Quote Button */}
          <a
            href={siteConfig.emailHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary text-xs !py-2.5 !px-5"
          >
            <Mail size={14} /> Get a Quote
          </a>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-dark hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white border-t border-slate-100 shadow-lg"
            >
              <div className="px-4 py-4 flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg font-heading font-700 text-sm transition-all ${
                        isActive
                          ? 'text-brand-blue bg-brand-blue/5'
                          : 'text-text-muted hover:text-text-dark hover:bg-slate-50'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="border-t border-slate-100 mt-2 pt-3 flex flex-col gap-2.5 px-4">
                  <a href={siteConfig.emailHref} className="flex items-center gap-2 text-text-muted text-xs font-heading font-600">
                    <Mail size={14} className="text-brand-blue" /> {siteConfig.email}
                  </a>
                  <a href={siteConfig.phoneHref} className="flex items-center gap-2 text-text-muted text-xs font-heading font-600">
                    <Phone size={14} className="text-brand-blue" /> {siteConfig.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
