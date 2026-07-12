import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Phone, Mail, Award, Shield,
  Zap, Users, Factory, Target, ArrowUpRight, ChevronRight, PenTool, Layout
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { siteConfig, stats, products, whyChooseUs } from '../data/siteData';
import StatCounter from '../components/ui/StatCounter';
import ProductCard from '../components/ui/ProductCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import TechnicalBlueprint from '../components/ui/TechnicalBlueprint';

const iconMap = {
  precision: <Zap size={18} className="text-brand-brass" />,
  oem: <Users size={18} className="text-brand-brass" />,
  kaizen: <Award size={18} className="text-brand-brass" />,
  quality: <Shield size={18} className="text-brand-brass" />,
  capacity: <Factory size={18} className="text-brand-brass" />,
  expertise: <Target size={18} className="text-brand-brass" />,
};

export default function Home() {
  const [heroBlueprintId, setHeroBlueprintId] = useState(1);

  return (
    <>
      <Helmet>
        <title>Cross Manufacturing Company — Precision B2B OEM Machined Components</title>
        <meta name="description" content="CMC Chennai: Elite manufacturer of tractor differential crosses, hydraulic systems & valve actuators. Established 1989. TAFE Best KAIZEN Award Winner." />
      </Helmet>

      {/* ════════════════════════════════════════════════════════════
          HERO SECTION (Editorial Premium Industrial Luxury)
      ════════════════════════════════════════════════════════════ */}
      <section className="relative bg-brand-charcoal text-white overflow-hidden py-20 lg:py-28 border-b border-brand-charcoal/30">
        
        {/* Deep blue blueprint grid background */}
        <div className="absolute inset-0 blueprint-grid opacity-[0.25] pointer-events-none" />
        
        {/* Corner coordinates markings */}
        <div className="absolute top-4 left-6 text-[8px] font-technical text-brand-parchment/30">
          SHEET_01_OF_10 // GRID_COORD_REF: CMC-Z01
        </div>
        <div className="absolute bottom-4 left-6 text-[8px] font-technical text-brand-parchment/30">
          CROSS MFG CO. © 1989
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-brand-brass/25 text-[9px] font-technical uppercase tracking-widest text-brand-brass"
              >
                <span className="w-1.5 h-1.5 bg-brand-brass rounded-full animate-pulse" />
                FOUNDED 1989 // CHENNAI INDUSTRIAL UNIT
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] text-white tracking-wide font-light"
              >
                Precision Driven <br />
                <span className="text-gradient-brass font-medium">B2B Manufacturing</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-brand-parchment/60 font-serif-heading italic text-base md:text-lg leading-relaxed max-w-xl font-light"
              >
                An audited, strategic OEM supplier of high-tolerance tractor drivetrain cross journals, high-pressure hydraulic pistons, and chemical valve actuator columns.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link to="/products" className="btn-primary !border-brand-brass/40 hover:!border-brand-brass hover:!text-white bg-brand-charcoal text-white hover:bg-brand-charcoal/80">
                  EXPLORE BLUEPRINTS <ArrowRight size={14} className="text-brand-brass" />
                </Link>
                <Link to="/contact" className="btn-secondary !text-brand-parchment !border-brand-parchment/25 hover:!border-brand-parchment">
                  REQUEST CYCLE ESTIMATES
                </Link>
              </motion.div>

              {/* Bottom technical parameters */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-8 border-t border-brand-parchment/10 flex flex-wrap gap-8 items-center text-[10px] font-technical"
              >
                <div>
                  <span className="block text-brand-brass text-lg font-medium leading-none mb-1">99.8%</span>
                  <span className="text-brand-parchment/40 uppercase tracking-widest">Quality Pass Rate</span>
                </div>
                <div className="w-px h-8 bg-brand-parchment/10" />
                <div>
                  <span className="block text-brand-brass text-lg font-medium leading-none mb-1">5+ MICRONS</span>
                  <span className="text-brand-parchment/40 uppercase tracking-widest">Tolerances Standard</span>
                </div>
                <div className="w-px h-8 bg-brand-parchment/10" />
                <div>
                  <span className="block text-brand-brass text-lg font-medium leading-none mb-1">2 UNITS</span>
                  <span className="text-brand-parchment/40 uppercase tracking-widest">Chennai SIDCO Zones</span>
                </div>
              </motion.div>
            </div>

            {/* Right Hero Visual Showcase (Interactive Blueprint panel) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 relative block"
            >
              {/* Product draft tabs */}
              <div className="flex gap-1.5 mb-2 font-technical text-[8px] uppercase tracking-wider overflow-x-auto pb-2 scrollbar-none">
                {[
                  { id: 1, name: "Differential Cross" },
                  { id: 2, name: "Hydraulic Piston" },
                  { id: 3, name: "Pump Camshaft" },
                  { id: 4, name: "Actuator Column" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setHeroBlueprintId(tab.id)}
                    className={`px-3 py-1.5 border transition-all shrink-0 ${
                      heroBlueprintId === tab.id
                        ? 'border-brand-brass text-brand-brass bg-white/5'
                        : 'border-white/10 text-brand-parchment/50 hover:border-white/20'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* High-Fidelity Engineering Sketch frame */}
              <div className="border border-brand-brass/20 bg-brand-blueprint flex flex-col p-4 relative overflow-hidden transition-all duration-300">
                
                {/* Coordinates */}
                <div className="absolute top-1 left-4 right-4 flex justify-between pointer-events-none text-[7px] font-technical text-brand-brass opacity-40 select-none">
                  <span>A</span><span>B</span><span>C</span><span>D</span><span>E</span>
                </div>
                
                {/* Blueprint grid lines */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.12]"
                     style={{
                       backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                       backgroundSize: '16px 16px'
                     }} />

                {/* Drawing Image Area */}
                <div className="relative aspect-square max-w-[420px] mx-auto w-full flex items-center justify-center border border-white/5 bg-[#FCFAF2] p-6">
                  <img 
                    src={
                      heroBlueprintId === 1 ? '/images/differential_cross.png' :
                      heroBlueprintId === 2 ? '/images/hydraulic_piston.png' :
                      heroBlueprintId === 3 ? '/images/hydraulic_camshaft.png' :
                      '/images/centre_column.png'
                    }
                    alt="CMC Mechanical Sketch" 
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-brand-charcoal text-brand-parchment font-technical text-[7px] tracking-widest uppercase border border-brand-brass">
                    REF DWG // CMC-00{heroBlueprintId}
                  </div>
                </div>

                {/* Engineering Title Block */}
                <div className="mt-4 pt-3 border-t border-brand-blueprint-grid grid grid-cols-2 md:grid-cols-4 gap-2 text-[8px] font-technical uppercase text-slate-400">
                  <div className="border-r border-brand-blueprint-grid pr-2">
                    <span>DRWN BY:</span> <span className="block font-bold text-white">T.K. (FOUNDER)</span>
                  </div>
                  <div className="border-r border-brand-blueprint-grid pr-2">
                    <span>CHKD BY:</span> <span className="block font-bold text-white">QA METROLOGY</span>
                  </div>
                  <div className="border-r border-brand-blueprint-grid pr-2">
                    <span>TOLERANCE:</span> <span className="block font-bold text-white">ISO 2768-F</span>
                  </div>
                  <div>
                    <span>SCALE:</span> <span className="block font-bold text-white">1:1</span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── ── STATS DATASHEET BANNER ── ── */}
      <section className="bg-brand-parchment border-b border-brand-charcoal/10 relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ── CORPORATE PROFILE SECTION ── ── */}
      <section className="relative section-pad overflow-hidden">
        
        {/* Watercolor texture blobs behind section */}
        <div className="watercolor-wash-brass top-20 right-10" />
        <div className="watercolor-wash-gray bottom-10 left-10" />

        <div className="coordinate-frame bg-brand-parchment-light/80 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 p-2 md:p-6">

            <ScrollReveal direction="left">
              <SectionHeading
                eyebrow="Corporate Profile"
                title="Over 35 Years of Swiss-Grade Mechanical Craftsmanship"
                subtitle="Established in 1989, Cross Manufacturing Company represents a cornerstone of automotive and general engineering component supply in Chennai."
              />
              <p className="text-brand-charcoal/70 font-serif-heading font-light leading-relaxed text-sm md:text-base mb-6">
                Founded by veteran mechanical engineer **Mr. T. Krishnamoorthy**, CMC has maintained a sterling track record of precision, reliability, and engineering superiority. We produce critical components that drive tractors, control hydraulic setups, and power industrial valve systems.
              </p>
              <p className="text-brand-charcoal/70 font-serif-heading font-light leading-relaxed text-sm md:text-base mb-8">
                Operating from Unit I in Poonamallee and Unit II in Thirumazhisai SIDCO, we house top-tier CNC machining centers, automated grinding equipment, and a fully equipped CMM laboratory to certify quality standards.
              </p>
              <Link to="/about" className="btn-primary">
                LEARN MORE ABOUT US <ArrowRight size={14} className="text-brand-brass" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              {/* Technical drawing datasheet layout */}
              <div className="border border-brand-charcoal/15 bg-brand-parchment p-6 md:p-8 relative">
                
                {/* Crosshairs overlay */}
                <div className="absolute inset-0 crosshairs opacity-[0.25] pointer-events-none" />
                
                <h3 className="font-technical text-[10px] uppercase tracking-widest text-brand-charcoal/90 mb-6 pb-2 border-b border-brand-charcoal/10 flex items-center justify-between">
                  <span>METRIC SPECIFICATION SHEET</span>
                  <span className="text-brand-brass">ISO 9001:2015</span>
                </h3>

                <div className="space-y-5 font-technical text-xs relative z-10">
                  {[
                    { label: 'Quality Acceptance Rate', value: '99.8%', unit: 'AVG' },
                    { label: 'OEM Partnership Tenure', value: '35+', unit: 'YEARS' },
                    { label: 'Components Produced', value: '500+', unit: 'VARIANTS' },
                    { label: 'Audit Standard Cert', value: 'TAFE KAIZEN', unit: '2016' }
                  ].map((metric) => (
                    <div key={metric.label} className="flex justify-between items-center py-2 border-b border-dashed border-brand-charcoal/10">
                      <span className="text-brand-charcoal/60">{metric.label}</span>
                      <div className="flex items-center gap-1.5 font-bold">
                        <span className="text-brand-charcoal">{metric.value}</span>
                        <span className="text-brand-brass text-[9px] opacity-75">{metric.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-brand-parchment-light border border-brand-charcoal/10 text-[9px] font-technical text-brand-charcoal/60 leading-relaxed uppercase">
                  <strong>Registered Locations:</strong> Poonamallee (Chennai Unit I) & Thirumazhisai SIDCO Industrial Zone (Chennai Unit II).
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── ── FEATURED PRODUCTS ── ── */}
      <section className="section-pad bg-brand-parchment-light border-y border-brand-charcoal/15 relative">
        <div className="absolute top-2 left-6 text-[8px] font-technical text-brand-charcoal/20 uppercase">
          INDEX REFERENCE // CMC-PORTFOLIO-R0
        </div>
        
        <ScrollReveal>
          <SectionHeading
            eyebrow="Precision Parts Portfolio"
            title="Engineered Components Catalogue"
            subtitle="Explore our portfolio of high-grade drivetrain, hydraulic pump, and valve actuator components machined to standard tolerances."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.slice(0, 6).map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.08}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products" className="btn-outline">
            BROWSE FULL SPECIFICATIONS <ArrowUpRight size={14} className="text-brand-brass" />
          </Link>
        </div>
      </section>

      {/* ── ── WHY PARTNER WITH US ── ── */}
      <section className="section-pad relative overflow-hidden">
        
        <div className="watercolor-wash-brass bottom-10 right-10" />

        <ScrollReveal>
          <SectionHeading
            eyebrow="Capabilities & Values"
            title="B2B OEM Manufacturing Integration"
            subtitle="Why major industrial OEMs consistently rely on Cross Manufacturing Company for their critical components."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {whyChooseUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="bg-brand-parchment-light border border-brand-charcoal/10 p-6 transition-all duration-300 hover:border-brand-brass hover:shadow-premium relative">
                
                {/* Thin top highlighted bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-brand-brass transition-colors" />

                <div className="w-10 h-10 border border-brand-charcoal/10 flex items-center justify-center mb-5 bg-brand-parchment">
                  {iconMap[item.icon]}
                </div>
                <h3 className="font-serif-heading font-bold text-lg text-brand-charcoal mb-2">{item.title}</h3>
                <p className="text-brand-charcoal/60 font-serif-heading font-light text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── ── AWARD HIGHLIGHT ── ── */}
      <section className="section-pad bg-brand-parchment-light border-t border-brand-charcoal/15">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-brand-charcoal text-white p-8 md:p-12 relative border border-brand-brass/25">
              {/* Blueprint lines on dark banner */}
              <div className="absolute inset-0 blueprint-grid opacity-[0.15] pointer-events-none" />
              <div className="absolute top-2 right-4 text-[7px] font-technical text-brand-parchment/20">DWG REF: KAIZEN-2016-TAFE</div>

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 border border-brand-brass/30 bg-white/5 flex items-center justify-center shrink-0 text-brand-brass shadow-lg">
                  <Award size={36} />
                </div>

                <div>
                  <span className="inline-block text-brand-brass font-technical text-[9px] uppercase tracking-widest mb-2">
                    OEM AUDIT EXCELLENCE
                  </span>
                  <h3 className="font-serif-heading text-2xl md:text-3xl leading-tight text-white mb-3">
                    Awarded TAFE Best KAIZEN Honor
                  </h3>
                  <p className="text-brand-parchment/70 font-serif-heading font-light text-sm leading-relaxed mb-4">
                    Tractors and Farm Equipment Limited (TAFE) recognized Cross Manufacturing Company for exceptional implementation of manufacturing KAIZEN practices, shopfloor layout optimization, and zero-defect delivery records.
                  </p>
                  <div className="flex items-center gap-6 text-[8px] font-technical text-brand-parchment/40 uppercase tracking-wider">
                    <span>Year: 2016</span>
                    <span>·</span>
                    <span>Verified: TAFE Management</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ── CTA REPRESENTATIVE BANNER ── ── */}
      <section className="bg-brand-charcoal text-white py-20 px-6 md:px-8 border-t border-brand-charcoal/40 relative">
        <div className="absolute inset-0 blueprint-grid opacity-[0.1] pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <h3 className="font-serif-heading text-2xl md:text-3xl mb-2 text-white font-medium">
              Submit OEM Technical RFQ
            </h3>
            <p className="text-brand-parchment/50 font-serif-heading italic text-sm max-w-xl font-light">
              Submit your AutoCAD drawings, tolerance limits sheets, and estimated batch volumes for technical cycle-time calculations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 font-technical text-xs">
            <a href={siteConfig.emailHref} className="btn-primary !border-brand-brass/40 hover:!border-brass bg-brand-charcoal text-white hover:bg-brand-charcoal/80">
              <Mail size={14} className="text-brand-brass" /> EMAIL TECHNICAL PLANS
            </a>
            <a href={siteConfig.phoneHref} className="btn-secondary !text-brand-parchment !border-brand-parchment/20 hover:!border-white">
              <Phone size={14} className="text-brand-brass" /> CONTACT SALES
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
