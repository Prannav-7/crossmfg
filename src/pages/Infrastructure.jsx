import { Helmet } from 'react-helmet-async';
import { MapPin, CheckCircle, Factory, Shield, Cog } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import StatCounter from '../components/ui/StatCounter';
import { units, machinery } from '../data/siteData';

export default function Infrastructure() {
  return (
    <>
      <Helmet>
        <title>Manufacturing Capabilities & Infrastructure — Cross Manufacturing Company</title>
        <meta name="description" content="CMC Chennai operates two strategic units equipped with multi-axis CNC machines, heavy-duty broaching units, profile grinders, and precision testing labs." />
      </Helmet>

      {/* Page Hero */}
      <section className="relative bg-brand-charcoal text-white py-20 md:py-28 border-b border-brand-charcoal/30">
        <div className="absolute inset-0 blueprint-grid opacity-[0.25] pointer-events-none" />
        <div className="absolute top-4 left-6 text-[8px] font-technical text-brand-parchment/30">
          SECTION_INFRASTRUCTURE // FACTORY_COORD
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-brass/20 text-[9px] font-technical uppercase tracking-widest text-brand-brass mb-4">
            [ Production Facilities ]
          </span>
          <h1 className="font-serif-heading text-4xl md:text-5xl lg:text-6xl text-white font-light mt-2">
            Infrastructure & Capacity
          </h1>
          <p className="text-brand-parchment/85 font-body mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Operating from two facilities in Chennai with advanced machining tooling, in-process gauging, and material handling systems.
          </p>
        </div>
      </section>

      {/* Manufacturing Facilities Cards */}
      <section className="section-pad bg-brand-parchment relative overflow-hidden">

        <div className="watercolor-wash-brass top-20 right-20" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Dual Facilities"
              title="Precision-Driven Production Units"
              subtitle="CMC houses modern machinery arrays at Poonamallee and Thirumazhisai SIDCO, enabling flexible setup changes and high volume output."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {units.map((unit, i) => (
              <ScrollReveal key={unit.id} delay={i * 0.1} direction={i === 0 ? 'left' : 'right'}>
                <div className="coordinate-frame bg-brand-parchment-light/80 backdrop-blur-sm p-6 md:p-8 flex flex-col justify-between h-full hover:border-brand-brass hover:shadow-premium transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-2 border-b border-brand-charcoal/10">
                      <div className="font-technical text-xs font-bold text-brand-brass">
                        [ FACILITY CODE: UNIT-0{i + 1} ]
                      </div>
                      <span className="text-[7px] font-technical text-brand-charcoal/40 uppercase">
                        Active Plant
                      </span>
                    </div>

                    <h3 className="font-serif-heading font-bold text-xl text-brand-charcoal mb-2">
                      {unit.name}
                    </h3>

                    <div className="flex items-start gap-1.5 text-brand-charcoal/80 font-body text-xs mb-4">
                      <MapPin size={12} className="text-brand-brass shrink-0 mt-0.5" />
                      <span>{unit.address}</span>
                    </div>

                    <p className="text-brand-charcoal/90 font-body text-sm leading-relaxed mb-6">
                      {unit.description}
                    </p>

                    <div className="pt-6 border-t border-brand-charcoal/10">
                      <span className="text-[8px] font-technical uppercase tracking-widest text-brand-brass block mb-3 font-bold">
                        Key Capabilities & Processes
                      </span>
                      <div className="grid grid-cols-2 gap-3 font-technical text-xs">
                        {unit.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-2 text-brand-charcoal/70">
                            <CheckCircle size={10} className="text-brand-brass" />
                            {cap}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-brand-charcoal/10 flex items-center justify-between">
                    <a
                      href={unit.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-technical text-[9px] uppercase tracking-widest text-brand-charcoal hover:text-brand-brass transition-colors flex items-center gap-1.5"
                    >
                      <MapPin size={12} /> OPEN IN GOOGLE MAPS →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Assets Table/Grid */}
      <section className="section-pad bg-brand-parchment-light border-y border-brand-charcoal/15 relative overflow-hidden">

        <div className="watercolor-wash-gray bottom-10 left-10" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Tooling Assets"
              title="Machinery & CNC Equipment Index"
              subtitle="Below is the breakdown of key manufacturing equipment installed across our units."
              center
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {machinery.map((mach, i) => (
              <ScrollReveal key={mach.name} delay={i * 0.05}>
                <div className="bg-brand-parchment border border-brand-charcoal/15 p-6 text-center hover:border-brand-brass hover:shadow-premium transition-all duration-300 relative">

                  {/* Plus crosshairs ticks */}
                  <span className="absolute top-1 left-1.5 font-technical text-[6px] text-brand-charcoal/20">+</span>
                  <span className="absolute bottom-1 right-1.5 font-technical text-[6px] text-brand-charcoal/20">+</span>

                  <div className="w-8 h-8 border border-brand-charcoal/10 flex items-center justify-center mx-auto mb-4 bg-brand-parchment-light text-brand-brass">
                    <Cog size={14} className="animate-spin-slow" />
                  </div>

                  <span className="font-technical font-medium text-2xl text-brand-charcoal block mb-1">
                    {mach.count}
                  </span>
                  <span className="font-technical text-[9px] text-brand-charcoal/60 uppercase tracking-wider block leading-tight font-bold">
                    {mach.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control & Capacity Stats */}
      <section className="section-pad bg-brand-parchment relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <ScrollReveal direction="left">
              <span className="eyebrow-badge">High Volume Audited</span>
              <h3 className="font-serif-heading font-bold text-3xl leading-tight text-brand-charcoal mb-4">
                Scalable Supply Chains
              </h3>
              <p className="text-brand-charcoal/90 font-body text-sm md:text-base leading-relaxed mb-4">
                Both facilities feature dedicated material control zones, regular tooling maintenance routines, and production shift scheduling.
              </p>
              <div className="flex items-center gap-3 font-technical text-[10px] text-brand-charcoal/70 font-bold">
                <Shield size={14} className="text-brand-brass" />
                <span>ZERO DEFECT QUALITY GATE VALIDATION BEFORE DISPATCH.</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              {/* Title block style */}
              <div className="p-6 bg-brand-parchment-light border border-brand-charcoal/15 space-y-4 relative">

                {/* Crosshairs */}
                <div className="absolute inset-0 crosshairs opacity-[0.2] pointer-events-none" />

                <div className="flex justify-between items-center pb-3 border-b border-brand-charcoal/10 font-technical text-xs relative z-10">
                  <span className="text-brand-charcoal/60 uppercase">Operational Shifts</span>
                  <span className="font-bold text-brand-charcoal">DOUBLE SHIFT PEAK CAP</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-brand-charcoal/10 font-technical text-xs relative z-10">
                  <span className="text-brand-charcoal/60 uppercase">Product Types Supported</span>
                  <span className="font-bold text-brand-charcoal">OVER 500 VARIANTS</span>
                </div>

                <div className="flex justify-between items-center font-technical text-xs relative z-10">
                  <span className="text-brand-charcoal/60 uppercase">Facility Footprint</span>
                  <span className="font-bold text-brand-charcoal">SIDCO INDUSTRIAL STANDARD</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
}
