import { Helmet } from 'react-helmet-async';
import { MapPin, CheckCircle, Factory, Shield } from 'lucide-react';
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
      <section className="relative bg-slate-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 border border-white/10 text-xs font-heading font-700 uppercase tracking-wider text-brand-blue-light mb-4">
            Production Facilities
          </span>
          <h1 className="font-heading font-800 text-4xl md:text-5xl text-white mt-2">
            Infrastructure & Capacity
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Operating from two facilities in Chennai with advanced machining tooling, in-process gauging, and material handling systems.
          </p>
        </div>
      </section>

      {/* Manufacturing Facilities Cards */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeading 
              eyebrow="Dual Facilities" 
              title="State-of-the-Art Production Units" 
              subtitle="CMC houses modern machinery arrays at Poonamallee and Thirumazhisai SIDCO, enabling flexible setup changes and high volume output." 
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {units.map((unit, i) => (
              <ScrollReveal key={unit.id} delay={i * 0.1} direction={i === 0 ? 'left' : 'right'}>
                <div className="bg-slate-50 border border-border-slate p-8 rounded-2xl flex flex-col justify-between h-full hover:shadow-premium hover:border-slate-300 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-lg bg-brand-blue flex items-center justify-center text-white shadow-sm font-stat font-700 text-lg">
                        0{i + 1}
                      </div>
                      <span className="text-[10px] font-heading font-800 tracking-wider text-slate-400 uppercase">
                        Active Facility
                      </span>
                    </div>

                    <h3 className="font-heading font-800 text-xl text-text-dark mb-2">
                      {unit.name}
                    </h3>
                    
                    <div className="flex items-start gap-2 text-text-muted text-xs mb-4">
                      <MapPin size={14} className="text-brand-blue shrink-0 mt-0.5" />
                      <span>{unit.address}</span>
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed mb-6">
                      {unit.description}
                    </p>

                    <div className="pt-6 border-t border-border-slate">
                      <span className="text-[10px] font-heading font-800 uppercase tracking-wider text-slate-400 block mb-3">
                        Key Capabilities & Processes
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {unit.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-2 text-xs text-text-muted font-medium">
                            <CheckCircle size={12} className="text-brand-blue" />
                            {cap}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border-slate flex items-center justify-between">
                    <a
                      href={unit.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-heading font-800 text-brand-blue hover:text-brand-blue-light transition-colors flex items-center gap-1.5"
                    >
                      <MapPin size={12} /> View Location on Maps →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Assets Table/Grid */}
      <section className="section-pad bg-light-bg border-y border-border-slate">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeading 
              eyebrow="Tooling Assets" 
              title="CNC & Machining Equipment List" 
              subtitle="Below is the breakdown of key manufacturing equipment installed across our units." 
              center 
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {machinery.map((mach, i) => (
              <ScrollReveal key={mach.name} delay={i * 0.05}>
                <div className="bg-white border border-border-slate p-6 rounded-xl text-center shadow-sm hover:shadow-premium transition-all duration-300">
                  <div className="text-3xl mb-3">{mach.icon}</div>
                  <span className="font-heading font-800 text-2xl text-brand-blue block mb-1">
                    {mach.count}
                  </span>
                  <span className="text-xs text-text-muted font-medium block leading-tight">
                    {mach.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control & Capacity Stats */}
      <section className="section-pad bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="eyebrow-badge">High Volume Audited</span>
              <h3 className="font-heading font-800 text-3xl leading-tight text-text-dark mb-4">
                Scalable Supply Chains
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Both facilities feature dedicated material control zones, regular tooling maintenance routines, and production shift scheduling.
              </p>
              <div className="flex items-center gap-3 text-xs text-text-muted font-heading font-700">
                <Shield size={16} className="text-brand-blue" />
                <span>Zero defect quality gate validation before shipment dispatch.</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="p-6 bg-slate-50 border border-border-slate rounded-2xl space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border-slate">
                  <span className="text-xs font-heading font-700 text-text-muted">Operational Shifts</span>
                  <span className="text-sm font-heading font-800 text-text-dark">Double Shift Peak Cap</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border-slate">
                  <span className="text-xs font-heading font-700 text-text-muted">Product Types Supported</span>
                  <span className="text-sm font-heading font-800 text-text-dark">Over 500 Variants</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-heading font-700 text-text-muted">Facility Footprint</span>
                  <span className="text-sm font-heading font-800 text-text-dark">SIDCO Industrial Zone standard</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
