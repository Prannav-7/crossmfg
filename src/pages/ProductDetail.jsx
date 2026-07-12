import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Mail, Settings, CheckCircle } from 'lucide-react';
import { products, siteConfig } from '../data/siteData';
import ScrollReveal from '../components/ui/ScrollReveal';
import TechnicalBlueprint from '../components/ui/TechnicalBlueprint';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  // B2B category badge styles
  const categoryCodes = {
    'Tractor': 'TRAC-COMP',
    'Hydraulic': 'HYDR-FLUID',
    'Valve Actuator': 'VALV-ACTU',
    'CNC': 'CNC-PREC',
  };
  const categoryCode = product ? (categoryCodes[product.category] || 'GEN-ENG') : '';

  if (!product) {
    return (
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-24 text-center min-h-[70vh] flex flex-col items-center justify-center bg-brand-parchment">
        <h2 className="font-serif-heading font-bold text-3xl text-brand-charcoal mb-4">Component Not Found</h2>
        <p className="text-brand-charcoal/85 font-body text-sm mb-8">The requested OEM product specifications sheet could not be located.</p>
        <Link to="/products" className="btn-primary">
          <ArrowLeft size={14} className="text-brand-brass" /> RETURN TO CATALOGUE
        </Link>
      </div>
    );
  }

  // Generate mail content
  const emailSubject = encodeURIComponent(`RFQ: Technical Specifications Review — ${product.name}`);
  const emailBody = encodeURIComponent(
    `Dear Estimating Division,\n\nWe are looking to request a technical review and production capability estimation for the following component:\n\n` +
    `--------------------------------------------------\n` +
    `OEM Component: ${product.name}\n` +
    `Product Category: ${product.category}\n` +
    `--------------------------------------------------\n\n` +
    `Blueprint parameters:\n` +
    product.specs.map(s => `• ${s}`).join('\n') +
    `\n\nPlease let us know your standard machining cycle times and delivery schedules.\n\n` +
    `Best regards,\n` +
    `[Name]\n` +
    `[Company]`
  );

  // Gmail compose link
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${emailSubject}&body=${emailBody}`;

  return (
    <>
      <Helmet>
        <title>{product.name} Specifications — Cross Manufacturing Company</title>
        <meta name="description" content={`Detailed technical tolerances, dimensions, material parameters, and machining configurations for CMC's ${product.name}.`} />
      </Helmet>

      <section className="section-pad bg-brand-parchment min-h-[85vh] border-b border-brand-charcoal/15 relative overflow-hidden">

        {/* Watercolor wash background */}
        <div className="watercolor-wash-brass top-10 right-20" />
        <div className="watercolor-wash-gray bottom-10 left-10" />

        {/* Back Link */}
        <div className="mb-8 relative z-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-technical text-[9px] uppercase tracking-widest text-brand-charcoal/50 hover:text-brand-brass transition-colors group"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
            [ BACK TO DRAFT INDEX ]
          </Link>
        </div>

        <div className="coordinate-frame bg-brand-parchment-light/75 backdrop-blur-sm p-4 md:p-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start p-2 md:p-6">

            {/* Left Column - High-Fidelity Engineering Sketch Image */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left">
                <div className="bg-[#FCFAF2] border border-[#1A1C1E]/15 p-6 relative overflow-hidden transition-all duration-300 hover:border-brand-brass">

                  {/* Coordinate labels */}
                  <div className="absolute top-1 left-4 right-4 flex justify-between pointer-events-none text-[7px] font-technical text-[#1A1C1E]/20 select-none">
                    <span>A</span><span>B</span><span>C</span><span>D</span><span>E</span>
                  </div>
                  <div className="absolute left-1 top-4 bottom-4 flex flex-col justify-between pointer-events-none text-[7px] font-technical text-[#1A1C1E]/20 select-none">
                    <span>1</span><span>2</span><span>3</span><span>4</span>
                  </div>

                  {/* Subtle graphite grid backdrop */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.2]"
                    style={{
                      backgroundImage: 'linear-gradient(to right, rgba(26,28,30,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,28,30,0.04) 1px, transparent 1px)',
                      backgroundSize: '16px 16px'
                    }} />

                  {/* Main Sketch Image */}
                  <div className="relative aspect-square max-w-[480px] mx-auto w-full flex items-center justify-center border border-[#1A1C1E]/10 bg-brand-parchment p-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-brand-charcoal text-brand-parchment font-technical text-[7px] tracking-widest uppercase border border-brand-brass">
                      CMC-DWG-00{product.id}
                    </div>
                  </div>

                  {/* Engineering Title Block */}
                  <div className="mt-4 pt-3 border-t border-[#1A1C1E]/15 grid grid-cols-2 md:grid-cols-4 gap-2 text-[8px] font-technical uppercase text-[#1A1C1E]/50">
                    <div className="border-r border-[#1A1C1E]/10 pr-2">
                      <span>DRWN BY:</span> <span className="block font-bold text-[#1A1C1E]">T.K. (FOUNDER)</span>
                    </div>
                    <div className="border-r border-[#1A1C1E]/10 pr-2 max-md:border-none">
                      <span>CHKD BY:</span> <span className="block font-bold text-[#1A1C1E]">QA METROLOGY</span>
                    </div>
                    <div className="border-r border-[#1A1C1E]/10 pr-2">
                      <span>TOLERANCE:</span> <span className="block font-bold text-[#1A1C1E]">ISO 2768-F</span>
                    </div>
                    <div>
                      <span>SCALE:</span> <span className="block font-bold text-[#1A1C1E]">1:1 (OAL)</span>
                    </div>
                  </div>
                  <div className="mt-2 p-2 border border-[#1A1C1E]/10 text-center font-technical text-[9px] tracking-wider font-bold text-[#1A1C1E]">
                    {product.name} — STANDARD METRIC DWG SHEET
                  </div>

                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Product Details */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal direction="right">

                {/* Technical ID badge */}
                <span className="inline-flex px-3 py-1 bg-brand-charcoal text-brand-parchment border border-brand-brass font-technical text-[8px] tracking-widest uppercase">
                  DEPT: {categoryCode} // ID: 00{product.id}
                </span>

                {/* Title */}
                <h1 className="font-serif-heading font-medium text-3xl md:text-4xl lg:text-5xl text-brand-charcoal mt-3 mb-4">
                  {product.name}
                </h1>

                {/* Long Description */}
                <p className="text-brand-charcoal/90 font-body text-sm md:text-base leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Specifications Table (Formated like drawing specs block) */}
                <div className="border border-brand-charcoal/15 bg-brand-parchment overflow-hidden">
                  <div className="bg-brand-parchment-light px-5 py-3 border-b border-brand-charcoal/10 flex justify-between items-center font-technical text-[9px] text-brand-charcoal/50 uppercase tracking-widest">
                    <span>SPECIFICATION DATA BLOCK</span>
                    <span className="text-brand-brass font-bold">VERIFIED BY QA</span>
                  </div>

                  <div className="divide-y divide-brand-charcoal/10 font-technical text-xs bg-brand-parchment-light/35">
                    {product.specs.map((spec, i) => {
                      const parts = spec.split(':');
                      const label = parts[0]?.trim();
                      const value = parts.slice(1).join(':')?.trim() || '';

                      return (
                        <div key={i} className="grid grid-cols-1 sm:grid-cols-3 px-5 py-3.5 gap-2 items-center">
                          <div className="col-span-1 font-bold text-brand-charcoal/60 uppercase tracking-wider text-[9px]">
                            {label}
                          </div>
                          <div className="col-span-2 text-brand-brass font-bold text-left">
                            {value || '-'}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* RFQ Trigger */}
                <div className="border border-brand-charcoal/10 bg-brand-parchment p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="font-serif-heading font-bold text-sm text-brand-charcoal">Require a technical quotation?</h4>
                    <p className="text-brand-charcoal/85 font-body text-xs md:text-sm leading-relaxed max-w-md">
                      Submit request emails for customized tolerances, material revisions, or high-volume B2B manufacturing schedules.
                    </p>
                  </div>
                  <a
                    href={gmailHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs shrink-0 w-full sm:w-auto font-technical"
                  >
                    <Mail size={13} className="text-brand-brass" /> SUBMIT RFQ FOR {categoryCode}
                  </a>
                </div>

              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
