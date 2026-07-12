import { Helmet } from 'react-helmet-async';
import { Shield, Award, CheckCircle, ChevronRight, Ruler, Compass } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import { qualityProcess, awards } from '../data/siteData';

export default function Quality() {
  return (
    <>
      <Helmet>
        <title>Quality Standards & Metrology Inspection — Cross Manufacturing Company</title>
        <meta name="description" content="CMC Chennai operates a dedicated quality assurance metrology lab with coordinate measuring machines (CMM) to fulfill OEM tolerance specifications." />
      </Helmet>

      {/* Page Hero */}
      <section className="relative bg-brand-charcoal text-white py-20 md:py-28 border-b border-brand-charcoal/30">
        <div className="absolute inset-0 blueprint-grid opacity-[0.25] pointer-events-none" />
        <div className="absolute top-4 left-6 text-[8px] font-technical text-brand-parchment/30">
          SECTION_QUALITY // METROLOGY_INDEX
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-brass/20 text-[9px] font-technical uppercase tracking-widest text-brand-brass mb-4">
            [ Quality Standards ]
          </span>
          <h1 className="font-serif-heading text-4xl md:text-5xl lg:text-6xl text-white font-light mt-2">
            Quality Assurance
          </h1>
          <p className="text-brand-parchment/50 font-serif-heading italic mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Maintaining robust process control, calibration standardizations, and audited quality gates to satisfy OEM compliance.
          </p>
        </div>
      </section>

      {/* Quality Policy Statement */}
      <section className="section-pad bg-brand-parchment relative overflow-hidden">
        
        <div className="watercolor-wash-brass top-10 right-20" />

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="coordinate-frame bg-brand-parchment-light/80 backdrop-blur-sm p-8 md:p-12 text-center">
              
              {/* Drafting crosshairs */}
              <div className="absolute inset-0 crosshairs opacity-[0.2] pointer-events-none" />
              
              <div className="w-12 h-12 border border-brand-charcoal/15 flex items-center justify-center mx-auto mb-6 bg-brand-parchment">
                <Shield size={22} className="text-brand-brass" />
              </div>
              
              <h2 className="font-serif-heading text-2xl md:text-3xl text-brand-charcoal mb-4">
                Corporate Quality Commitment
              </h2>
              
              <p className="text-brand-charcoal/70 font-serif-heading font-light italic text-base leading-relaxed max-w-2xl mx-auto mb-8">
                "Cross Manufacturing Company is committed to providing precision engineering solutions that align with client blueprint drawings and delivery schedules. We achieve this by enforcing a zero-defect mindset, structured process validations, and continuous employee training."
              </p>

              <div className="flex flex-wrap justify-center gap-3 font-technical text-[9px] uppercase tracking-wider relative z-10">
                {['Zero Defect Strategy', 'Blueprint Traceability', 'KAIZEN Efficiency', 'ISO Compliance Standards'].map((tag) => (
                  <span key={tag} className="px-3.5 py-1 bg-brand-parchment border border-brand-charcoal/15 text-brand-charcoal hover:border-brand-brass transition-all duration-350">
                    [ {tag} ]
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5-Stage QC Process Timeline (Flowchart style) */}
      <section className="section-pad bg-brand-parchment-light border-y border-brand-charcoal/15 relative overflow-hidden">
        
        <div className="watercolor-wash-gray top-20 left-10" />

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Verification Gates"
              title="Our Quality Control Process"
              subtitle="CMC operates 5 distinct inspection gates to certify dimensional accuracy across batch productions."
              center
            />
          </ScrollReveal>

          {/* Flowchart Timeline */}
          <div className="mt-12 space-y-4">
            {qualityProcess.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.05}>
                <div className="bg-brand-parchment border border-brand-charcoal/15 p-6 rounded-none flex items-start gap-4 hover:border-brand-brass hover:shadow-premium transition-all duration-300 relative">
                  
                  {/* Drawing ticks */}
                  <span className="absolute top-1 right-2 font-technical text-[8px] text-brand-charcoal/20">GATE 0{step.step}</span>

                  <div className="w-10 h-10 border border-brand-charcoal/20 bg-brand-parchment-light text-brand-brass font-technical font-bold text-sm flex items-center justify-center shrink-0">
                    [0{step.step}]
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-serif-heading font-bold text-base text-brand-charcoal">{step.title}</h4>
                    <p className="text-brand-charcoal/60 font-serif-heading font-light text-xs md:text-sm mt-1 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {i < qualityProcess.length - 1 && (
                    <ChevronRight size={18} className="text-brand-brass/45 hidden md:block shrink-0 mt-3" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Metrology Laboratory & Testing Specs */}
      <section className="section-pad bg-brand-parchment relative overflow-hidden">
        
        <div className="watercolor-wash-brass bottom-10 right-20" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <ScrollReveal>
            <SectionHeading 
              eyebrow="Metrology Center" 
              title="Testing & Metrology Equipment" 
              subtitle="CNC-audited measurements to deliver specifications according to GD&T callouts." 
              center 
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: '3D CMM Metrology', desc: 'CNC-driven Coordinate Measuring Machine for inspection validation of gears and columns.' },
              { name: 'Hardness Testers', desc: 'Vickers & Rockwell material checks verifying casing heat treatment metrics.' },
              { name: 'Surface Roughness Gauge', desc: 'Ra scale profilometer ensuring piston shaft finish meets friction limits.' },
              { name: 'In-Process Gauging', desc: 'Dedicated micrometers, height gauges and thread validation checks at machining beds.' },
            ].map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.08}>
                <div className="bg-brand-parchment-light border border-brand-charcoal/15 p-6 rounded-none hover:border-brand-brass hover:shadow-premium transition-all duration-300 relative">
                  
                  {/* Caliper symbol decoration */}
                  <div className="w-8 h-8 border border-brand-charcoal/10 flex items-center justify-center mb-4 bg-brand-parchment text-brand-brass">
                    <Ruler size={14} />
                  </div>
                  
                  <h4 className="font-serif-heading font-bold text-sm text-brand-charcoal mb-2">{item.name}</h4>
                  <p className="text-brand-charcoal/60 font-serif-heading font-light text-xs leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Award & Audits Highlights */}
      <section className="section-pad bg-brand-charcoal text-white border-t border-brand-charcoal/40 relative">
        <div className="absolute inset-0 blueprint-grid opacity-[0.1] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          {awards.map((award) => (
            <ScrollReveal key={award.title}>
              <div className="border border-brand-brass/25 p-8 md:p-12 text-center bg-white/5 backdrop-blur-sm relative">
                
                {/* Coordinate marker */}
                <div className="absolute top-2 right-4 text-[7px] font-technical text-brand-parchment/20">DOCUMENT REF: CMC-AUDIT-2016</div>

                <Award size={48} className="text-brand-brass mx-auto mb-4" />
                
                <span className="text-[9px] font-technical uppercase tracking-widest text-brand-parchment/40 block mb-2">
                  OEM Audit Certification
                </span>
                
                <h3 className="font-serif-heading text-2xl md:text-3xl text-white mb-2 font-medium">
                  Recipient of {award.title}
                </h3>
                
                <p className="text-brand-brass text-sm font-technical uppercase tracking-widest mb-1">
                  Issued by: {award.issuer}
                </p>
                
                <p className="text-brand-parchment/40 text-xs font-technical uppercase mb-4">{award.month} {award.year}</p>
                
                <p className="text-brand-parchment/70 font-serif-heading font-light text-sm md:text-base leading-relaxed max-w-xl mx-auto italic">
                  "{award.description}"
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
