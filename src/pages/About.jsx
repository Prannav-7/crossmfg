import { Helmet } from 'react-helmet-async';
import { CheckCircle, Award, Target, Compass, BookOpen } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

const timeline = [
  { year: '1989', title: 'Company Inception', event: 'Cross Manufacturing Company is founded by mechanical engineer Mr. T. Krishnamoorthy to supply machined parts in Chennai.' },
  { year: '1995', title: 'CNC Capabilities Integration', event: 'CMC introduces multi-axis CNC turning machines to serve higher precision demands of OEMs.' },
  { year: '2005', title: 'SIDCO Unit II Setup', event: 'Unit II is established at SIDCO Industrial Estate, Thirumazhisai, expanding grinding capabilities.' },
  { year: '2010', title: 'Quality Laboratory Launch', event: 'A modern inspection center equipped with 3D Coordinate Measuring Machines (CMM) is inaugurated.' },
  { year: '2016', title: 'Best KAIZEN Award', event: 'CMC is honored by TAFE Management with the Best KAIZEN Award for waste reduction and process excellence.' },
  { year: '2020+', title: 'OEM Strategic Expansion', event: 'CMC expands production to accommodate over 500 product variants, supplying critical drivetrain components.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>Corporate Profile — Cross Manufacturing Company</title>
        <meta name="description" content="Learn about Cross Manufacturing Company's 35-year history, founder Mr. T. Krishnamoorthy, vision, mission, and quality standards." />
      </Helmet>

      {/* Page Hero */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 border border-white/10 text-xs font-heading font-700 uppercase tracking-wider text-brand-blue-light mb-4">
            About Our Company
          </span>
          <h1 className="font-heading font-800 text-4xl md:text-5xl text-white mt-2">
            Corporate Profile
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Delivering quality, reliability, and precision engineering expertise since 1989.
          </p>
        </div>
      </section>

      {/* Corporate Story & Core Pillars */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <ScrollReveal direction="left">
              <SectionHeading 
                eyebrow="Our Background" 
                title="Engineering Quality with Uncompromising Dedication"
                subtitle="CMC was established to address the growing demand for high-grade machined components in automotive and general engineering sectors." 
              />
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Founded by veteran engineer Mr. T. Krishnamoorthy, Cross Manufacturing Company has transitioned from a localized machining shop into an audited, strategic supplier for major industrial OEMs. Over three decades of domain expertise enables us to execute projects with high dimensional accuracy.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                Operating from two specialized units in Chennai, our workflow features rigorous control checks, regular machinery calibrations, and continuous employee skills development. Our focus remains centered on building trust through technical performance.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex flex-col gap-6">
                
                <div className="p-6 bg-slate-50 border border-border-slate rounded-xl flex gap-4">
                  <div className="w-10 h-10 rounded bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Target size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-heading font-700 text-base text-text-dark mb-1">Corporate Vision</h4>
                    <p className="text-text-muted text-xs leading-relaxed">
                      To be the preferred precision engineering partner for global and domestic OEMs, recognized for technical innovation, continuous development, and on-time component delivery.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-border-slate rounded-xl flex gap-4">
                  <div className="w-10 h-10 rounded bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Compass size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-heading font-700 text-base text-text-dark mb-1">Mission Statement</h4>
                    <p className="text-text-muted text-xs leading-relaxed">
                      Manufacture high-tolerance components that satisfy strict customer blueprints while leveraging KAIZEN principles to drive production efficiency and product value.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-border-slate rounded-xl flex gap-4">
                  <div className="w-10 h-10 rounded bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <BookOpen size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-heading font-700 text-base text-text-dark mb-1">Operating Values</h4>
                    <ul className="grid grid-cols-2 gap-2 mt-2">
                      {['Geometric Tolerancing (GD&T)', 'Rigorous Quality Audits', 'Zero Defect Mentality', 'Ethical Client Relations'].map((val) => (
                        <li key={val} className="flex items-center gap-1.5 text-xs text-text-muted">
                          <CheckCircle size={12} className="text-brand-blue" />
                          {val}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="section-pad bg-light-bg border-y border-border-slate">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeading eyebrow="Chronology" title="Key Milestones" subtitle="Our journey from inception to establishing multi-unit OEM supply channels." center />
          </ScrollReveal>

          <div className="mt-12 space-y-8">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.05}>
                <div className="bg-white border border-border-slate p-6 rounded-xl flex flex-col md:flex-row gap-4 items-start md:items-center shadow-sm">
                  <div className="px-4 py-2 rounded bg-brand-blue text-white font-stat font-700 text-lg shrink-0">
                    {item.year}
                  </div>
                  <div>
                    <h4 className="font-heading font-700 text-base text-text-dark">{item.title}</h4>
                    <p className="text-text-muted text-sm mt-1 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeading eyebrow="Leadership" title="Management Message" center />
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto bg-slate-50 border border-border-slate rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0 text-3xl font-heading font-800 shadow-sm">
                TK
              </div>
              <div>
                <h3 className="font-heading font-700 text-2xl text-text-dark mb-1">Mr. T. Krishnamoorthy</h3>
                <p className="text-xs font-heading font-700 uppercase tracking-wider text-brand-blue mb-4">Founder & Managing Director</p>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  "Over 35 years in manufacturing has taught us that precision is not merely a measurement, but a commitment. Our partnerships with automotive and agricultural tractor OEMs reflect our dedication to zero-defect quality and long-term operating reliability. We thank our customers for their continued trust in CMC."
                </p>
                <span className="text-xs font-mono text-slate-400">Mechanical Engineer (Founder)</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TAFE Award Section */}
      <section className="py-16 px-4 md:px-8 text-center bg-slate-900 text-white">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <Award size={48} className="text-brand-blue-light mx-auto mb-4" />
            <h3 className="font-heading font-800 text-2xl mb-2 text-white">Recipient of TAFE Best KAIZEN Award</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              In November 2016, Tractors and Farm Equipment Limited (TAFE) honored CMC Chennai for continuous improvement, layout efficiencies, and manufacturing waste reduction.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
