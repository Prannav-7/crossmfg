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
      {/* ── Top Technical Header Bar ── */}
      <div className="hidden md:flex bg-brand-charcoal border-b border-brand-charcoal/20 py-2 text-[9px] text-brand-parchment/60 font-technical uppercase tracking-widest">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 flex justify-between w-full items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-brass animate-pulse" />
              DWG EST: 1989-10-12
            </span>
            <span className="text-brand-parchment/20">|</span>
            <span>TOLERANCE SPEC: ISO 2768-F</span>
            <span className="text-brand-parchment/20">|</span>
            <span className="text-brand-brass font-bold">★ TAFE KAIZEN AWARD RECIPIENT</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={siteConfig.emailHref} className="flex items-center gap-2 hover:text-brand-brass transition-colors">
              <Mail size={11} className="text-brand-brass" /> {siteConfig.email}
            </a>
            <span className="text-brand-parchment/20">|</span>
            <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-brand-brass transition-colors">
              <Phone size={11} className="text-brand-brass" /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Sticky Navbar ── */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-parchment-light/95 backdrop-blur-md border-b border-brand-charcoal/20 py-3.5 shadow-sm'
            : 'bg-brand-parchment border-b border-brand-charcoal/10 py-5'
        }`}
      >
        {/* Fine coordinate numbering bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] flex justify-between px-8 text-[6px] font-technical text-brand-charcoal/20 select-none pointer-events-none">
          <span>X: 1440</span>
          <span>Y: 080</span>
          <span>Z: REF</span>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Logo Brand (Designed like a drafting blueprint stamp) */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-none bg-brand-charcoal flex items-center justify-center text-brand-parchment transition-transform hover:rotate-90 duration-500 border border-brand-brass relative">
              <Settings size={20} className="animate-spin-slow text-brand-brass" />
              <div className="absolute inset-0.5 border border-brand-parchment/10" />
            </div>
            <div>
              <p className="font-serif-heading font-bold text-brand-charcoal text-xl leading-tight tracking-wide">
                CROSS <span className="font-light text-brand-charcoal/70">MFG CO.</span>
              </p>
              <p className="text-[8px] font-technical tracking-[0.2em] text-brand-brass uppercase leading-none mt-0.5">
                Precision Machining
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 font-technical text-[10px] tracking-widest uppercase transition-all duration-350 ${
                    isActive
                      ? 'text-brand-charcoal font-bold border-b border-brand-brass'
                      : 'text-brand-charcoal/60 hover:text-brand-charcoal hover:border-b hover:border-brand-charcoal/30'
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
            className="hidden md:inline-flex btn-primary !py-2.5 !px-5"
          >
            <Mail size={12} className="text-brand-brass" /> RFQ SUBMISSION
          </a>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-brand-charcoal hover:bg-brand-charcoal/5 transition-colors border border-brand-charcoal/10"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-brand-parchment-light border-t border-brand-charcoal/15 shadow-sm"
            >
              <div className="px-4 py-5 flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `px-4 py-3 font-technical text-xs tracking-wider uppercase transition-all ${
                        isActive
                          ? 'text-brand-charcoal font-bold bg-brand-charcoal/5 border-l-2 border-brand-brass'
                          : 'text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-brand-charcoal/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="border-t border-brand-charcoal/10 mt-3 pt-4 flex flex-col gap-3 px-4">
                  <a href={siteConfig.emailHref} className="flex items-center gap-2 text-brand-charcoal/70 text-xs font-technical uppercase tracking-wide">
                    <Mail size={13} className="text-brand-brass" /> {siteConfig.email}
                  </a>
                  <a href={siteConfig.phoneHref} className="flex items-center gap-2 text-brand-charcoal/70 text-xs font-technical uppercase tracking-wide">
                    <Phone size={13} className="text-brand-brass" /> {siteConfig.phone}
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
