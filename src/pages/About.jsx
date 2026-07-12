import { Helmet } from 'react-helmet-async';
import { CheckCircle, Award, Target, Compass, BookOpen, MapPin } from 'lucide-react';
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
      <section className="relative bg-brand-charcoal text-white py-20 md:py-28 border-b border-brand-charcoal/30">
        <div className="absolute inset-0 blueprint-grid opacity-[0.2] pointer-events-none" />
        <div className="absolute top-4 left-6 text-[8px] font-technical text-brand-parchment/30">
          SECTION_ABOUT // METADATA_INDEX
        </div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-brass/20 text-[9px] font-technical uppercase tracking-widest text-brand-brass mb-4">
            [ Company Overview ]
          </span>
          <h1 className="font-serif-heading text-4xl md:text-5xl lg:text-6xl text-white font-light mt-2">
            Corporate Profile
          </h1>
          <p className="text-brand-parchment/50 font-serif-heading italic mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Delivering quality, reliability, and precision engineering expertise since 1989.
          </p>
        </div>
      </section>

      {/* Corporate Story & Core Pillars */}
      <section className="section-pad relative overflow-hidden bg-brand-parchment">
        
        <div className="watercolor-wash-brass top-20 right-20" />
        
        <div className="coordinate-frame bg-brand-parchment-light/70 backdrop-blur-sm relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start p-2 md:p-6">
            
            <ScrollReveal direction="left">
              <SectionHeading 
                eyebrow="Our Background" 
                title="Engineering Quality with Uncompromising Dedication"
                subtitle="CMC was established to address the growing demand for high-grade machined components in automotive and general engineering sectors." 
              />
              <p className="text-brand-charcoal/70 font-serif-heading font-light text-sm md:text-base leading-relaxed mb-6">
                Founded by veteran engineer Mr. T. Krishnamoorthy, Cross Manufacturing Company has transitioned from a localized machining shop into an audited, strategic supplier for major industrial OEMs. Over three decades of domain expertise enables us to execute projects with high dimensional accuracy.
              </p>
              <p className="text-brand-charcoal/70 font-serif-heading font-light text-sm md:text-base leading-relaxed">
                Operating from two specialized units in Chennai, our workflow features rigorous control checks, regular machinery calibrations, and continuous employee skills development. Our focus remains centered on building trust through technical performance.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex flex-col gap-6">
                
                <div className="p-6 bg-brand-parchment border border-brand-charcoal/10 flex gap-4">
                  <div className="w-10 h-10 border border-brand-charcoal/10 flex items-center justify-center shrink-0 bg-brand-parchment-light">
                    <Target size={18} className="text-brand-brass" />
                  </div>
                  <div>
                    <h4 className="font-serif-heading font-bold text-base text-brand-charcoal mb-1">Corporate Vision</h4>
                    <p className="text-brand-charcoal/60 font-serif-heading font-light text-xs leading-relaxed">
                      To be the preferred precision engineering partner for global and domestic OEMs, recognized for technical innovation, continuous development, and on-time component delivery.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-brand-parchment border border-brand-charcoal/10 flex gap-4">
                  <div className="w-10 h-10 border border-brand-charcoal/10 flex items-center justify-center shrink-0 bg-brand-parchment-light">
                    <Compass size={18} className="text-brand-brass" />
                  </div>
                  <div>
                    <h4 className="font-serif-heading font-bold text-base text-brand-charcoal mb-1">Mission Statement</h4>
                    <p className="text-brand-charcoal/60 font-serif-heading font-light text-xs leading-relaxed">
                      Manufacture high-tolerance components that satisfy strict customer blueprints while leveraging KAIZEN principles to drive production efficiency and product value.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-brand-parchment border border-brand-charcoal/10 flex gap-4">
                  <div className="w-10 h-10 border border-brand-charcoal/10 flex items-center justify-center shrink-0 bg-brand-parchment-light">
                    <BookOpen size={18} className="text-brand-brass" />
                  </div>
                  <div>
                    <h4 className="font-serif-heading font-bold text-base text-brand-charcoal mb-1">Operating Values</h4>
                    <ul className="grid grid-cols-2 gap-2 mt-3 font-technical text-[10px]">
                      {['GEOMETRIC GD&T', 'CMM INSPECTION', 'ZERO DEFECTS', 'ETHICAL B2B'].map((val) => (
                        <li key={val} className="flex items-center gap-1.5 text-brand-charcoal/70">
                          <CheckCircle size={10} className="text-brand-brass" />
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

      {/* Historical Milestones (Mechanical Timeline Layout) */}
      <section className="section-pad bg-brand-parchment-light border-y border-brand-charcoal/15 relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeading eyebrow="Chronology" title="Key Milestones" subtitle="Our journey from inception to establishing multi-unit OEM supply channels." center />
          </ScrollReveal>

          {/* Vertical line timeline */}
          <div className="relative mt-16 pl-6 md:pl-0">
            {/* Timeline center line */}
            <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[0.5px] bg-brand-charcoal/15 border-dashed border-l" />

            <div className="space-y-12">
              {timeline.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <ScrollReveal key={item.year} delay={i * 0.05}>
                    <div className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} justify-between w-full`}>
                      
                      {/* Timeline dot */}
                      <div className="absolute left-[3px] md:left-1/2 md:-translate-x-[4px] top-1.5 w-2.5 h-2.5 bg-brand-brass border border-brand-charcoal rounded-none" />

                      {/* Content panel */}
                      <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left'} pl-8 md:pl-0`}>
                        <span className="inline-block font-technical text-xs font-bold text-brand-brass mb-1">
                          [ {item.year} ]
                        </span>
                        <h4 className="font-serif-heading font-bold text-base text-brand-charcoal mb-1">
                          {item.title}
                        </h4>
                        <p className="text-brand-charcoal/60 font-serif-heading font-light text-xs md:text-sm leading-relaxed">
                          {item.event}
                        </p>
                      </div>
                      
                      {/* Empty spacer for desktop layout */}
                      <div className="hidden md:block w-[45%]" />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Message */}
      <section className="section-pad bg-brand-parchment relative overflow-hidden">
        
        <div className="watercolor-wash-gray bottom-10 left-10" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <ScrollReveal>
            <SectionHeading eyebrow="Leadership" title="Founder's Message" center />
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto bg-brand-parchment-light border border-brand-charcoal/15 p-8 md:p-12 relative flex flex-col md:flex-row gap-8 items-center">
              
              {/* Corner markings */}
              <span className="absolute top-[-2px] left-[-2px] text-[8px] font-technical text-brand-charcoal/30 select-none pointer-events-none">+</span>
              <span className="absolute bottom-[-2px] right-[-2px] text-[8px] font-technical text-brand-charcoal/30 select-none pointer-events-none">+</span>

              <div className="w-24 h-24 border border-brand-brass/40 flex items-center justify-center shrink-0 font-serif-heading text-3xl font-bold bg-brand-parchment text-brand-charcoal">
                TK
              </div>
              
              <div>
                <h3 className="font-serif-heading font-bold text-2xl text-brand-charcoal mb-1">Mr. T. Krishnamoorthy</h3>
                <p className="text-[10px] font-technical uppercase tracking-widest text-brand-brass mb-4">Founder & Managing Director</p>
                
                <p className="text-brand-charcoal/70 font-serif-heading font-light italic text-sm md:text-base leading-relaxed mb-4">
                  "Over 35 years in manufacturing has taught us that precision is not merely a measurement, but a commitment. Our partnerships with automotive and agricultural tractor OEMs reflect our dedication to zero-defect quality and long-term operating reliability. We thank our customers for their continued trust in CMC."
                </p>
                <span className="text-[9px] font-technical text-brand-charcoal/40 uppercase">Mechanical Engineer // Standard Director Address</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TAFE Award Section */}
      <section className="py-16 px-6 text-center bg-brand-charcoal text-white border-t border-brand-charcoal/40 relative">
        <div className="absolute inset-0 blueprint-grid opacity-[0.1] pointer-events-none" />
        <ScrollReveal>
          <div className="max-w-2xl mx-auto relative z-10">
            <Award size={40} className="text-brand-brass mx-auto mb-4" />
            <h3 className="font-serif-heading text-2xl mb-2 text-white font-medium">Recipient of TAFE Best KAIZEN Award</h3>
            <p className="text-brand-parchment/60 font-serif-heading font-light text-sm leading-relaxed">
              In November 2016, Tractors and Farm Equipment Limited (TAFE) honored CMC Chennai for continuous improvement, layout efficiencies, and manufacturing waste reduction.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
