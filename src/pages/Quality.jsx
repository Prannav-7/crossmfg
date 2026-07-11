import { Helmet } from 'react-helmet-async';
import { Shield, Award, CheckCircle, ChevronRight } from 'lucide-react';
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
      <section className="relative bg-slate-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 border border-white/10 text-xs font-heading font-700 uppercase tracking-wider text-brand-blue-light mb-4">
            Quality Assurance Policy
          </span>
          <h1 className="font-heading font-800 text-4xl md:text-5xl text-white mt-2">
            Quality Standards
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Maintaining robust process control, calibration standardizations, and audited quality gates to satisfy OEM compliance.
          </p>
        </div>
      </section>

      {/* Quality Policy Statement */}
      <section className="section-pad bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-slate-50 border border-border-slate rounded-2xl p-8 md:p-12 text-center relative">
              <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-6">
                <Shield size={26} className="text-brand-blue" />
              </div>
              <h2 className="font-heading font-800 text-2xl md:text-3xl text-text-dark mb-4">
                Corporate Quality Commitment
              </h2>
              <p className="text-text-muted text-base leading-relaxed max-w-2xl mx-auto mb-8">
                "Cross Manufacturing Company is committed to providing precision engineering solutions that align with client blueprint drawings and delivery schedules. We achieve this by enforcing a zero-defect mindset, structured process validations, and continuous employee training."
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {['Zero Defect Strategy', 'Blueprint Traceability', 'KAIZEN Efficiency', 'ISO Compliance Standards'].map((tag) => (
                  <span key={tag} className="px-3.5 py-1 text-xs font-heading font-700 uppercase tracking-wider bg-white border border-border-slate rounded text-brand-blue">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5-Stage QC Process Timeline */}
      <section className="section-pad bg-light-bg border-y border-border-slate">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Verification Gates"
              title="Our Quality Control Process"
              subtitle="CMC operates 5 distinct inspection gates to certify dimensional accuracy across batch productions."
              center
            />
          </ScrollReveal>

          <div className="mt-12 space-y-4">
            {qualityProcess.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.05}>
                <div className="bg-white border border-border-slate p-6 rounded-xl flex items-start gap-4 hover:shadow-premium transition-all duration-300">
                  <div className="w-10 h-10 rounded bg-brand-blue text-white font-stat font-700 text-base flex items-center justify-center shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-700 text-base text-text-dark">{step.title}</h4>
                    <p className="text-text-muted text-xs mt-1 leading-relaxed">{step.description}</p>
                  </div>
                  {i < qualityProcess.length - 1 && (
                    <ChevronRight size={16} className="text-slate-300 hidden md:block shrink-0 mt-3" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Metrology Laboratory & Testing Specs */}
      <section className="section-pad bg-white">
        <div className="max-w-[1440px] mx-auto">
          <ScrollReveal>
            <SectionHeading eyebrow="Metrology Center" title="Testing & Metrology Equipment" subtitle="CNC-audited measurements to deliver specifications according to GD&T callouts." center />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: '3D CMM Metrology', desc: 'CNC-driven Coordinate Measuring Machine for inspection validation of gears and columns.' },
              { name: 'Hardness Testers', desc: 'Vickers & Rockwell material checks verifying casing heat treatment metrics.' },
              { name: 'Surface Roughness Gauge', desc: 'Ra scale profilometer ensuring piston shaft finish meets friction limits.' },
              { name: 'In-Process Gauging', desc: 'Dedicated micrometers, height gauges and thread validation checks at machining beds.' },
            ].map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.08}>
                <div className="bg-slate-50 border border-border-slate p-6 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300">
                  <div className="w-8 h-8 rounded bg-brand-blue/10 flex items-center justify-center mb-4">
                    <CheckCircle size={16} className="text-brand-blue" />
                  </div>
                  <h4 className="font-heading font-700 text-sm text-text-dark mb-2">{item.name}</h4>
                  <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Award & Audits Highlights */}
      <section className="section-pad bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          {awards.map((award) => (
            <ScrollReveal key={award.title}>
              <div className="border border-slate-800 rounded-2xl p-8 md:p-12 text-center bg-slate-800/50 backdrop-blur">
                <Award size={48} className="text-brand-blue-light mx-auto mb-4" />
                <span className="text-[10px] font-heading font-800 uppercase tracking-widest text-slate-400 block mb-2">
                  OEM Audit Recognition
                </span>
                <h3 className="font-heading font-800 text-2xl md:text-3xl text-white mb-2">
                  Recipient of {award.title}
                </h3>
                <p className="text-slate-300 text-sm font-medium mb-1">
                  Issued by: {award.issuer}
                </p>
                <p className="text-slate-500 text-xs font-mono mb-4">{award.month} {award.year}</p>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
                  {award.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
