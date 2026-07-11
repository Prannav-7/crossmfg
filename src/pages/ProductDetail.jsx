import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Mail, Settings, CheckCircle } from 'lucide-react';
import { products, siteConfig } from '../data/siteData';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  // Category badge styles
  const categoryStyles = {
    'Tractor': 'bg-blue-50 text-blue-700 border-blue-200',
    'Hydraulic': 'bg-sky-50 text-sky-700 border-sky-200',
    'Valve Actuator': 'bg-indigo-50 text-indigo-700 border-indigo-200',
    'CNC': 'bg-slate-100 text-slate-700 border-slate-200',
  };
  const categoryClass = product ? (categoryStyles[product.category] || 'bg-slate-100 text-slate-700 border-slate-200') : '';

  if (!product) {
    return (
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 py-24 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="font-heading font-800 text-3xl text-text-dark mb-4">Component Not Found</h2>
        <p className="text-text-muted text-sm mb-8">The requested OEM product specifications sheet could not be located.</p>
        <Link to="/products" className="btn-primary">
          <ArrowLeft size={16} /> Return to Catalogue
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

      <section className="section-pad bg-white drafting-grid min-h-[85vh] border-b border-slate-200">
        {/* Back Link */}
        <div className="mb-6">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-1.5 text-xs font-heading font-700 uppercase tracking-wider text-text-muted hover:text-brand-blue transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Catalogue
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Product Image Sketch */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex items-center justify-center shadow-sm relative group overflow-hidden">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-auto max-h-[380px] object-contain transition-transform duration-500 group-hover:scale-103"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-slate-400 py-16">
                    <Settings size={48} className="animate-spin-slow text-slate-300" />
                    <span className="text-xs font-heading font-700 tracking-wider">SKETCH COMING SOON</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 px-2.5 py-0.5 rounded text-[10px] font-heading font-800 uppercase tracking-wider border bg-white border-slate-200 text-slate-500 font-mono">
                  REF ID: CMC-{product.id.toString().padStart(3, '0')}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Product Details */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="right">
              {/* Category */}
              <span className={`inline-flex px-3 py-1 rounded text-xs font-heading font-800 uppercase tracking-wider border ${categoryClass}`}>
                {product.category}
              </span>

              {/* Title */}
              <h1 className="font-heading font-800 text-3xl md:text-4xl text-text-dark mt-3 mb-4">
                {product.name}
              </h1>

              {/* Long Description */}
              <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Specifications Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white mb-6">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                  <h3 className="font-heading font-800 text-sm text-text-dark uppercase tracking-wider">
                    Technical Specifications
                  </h3>
                  <span className="text-xs font-heading font-700 uppercase tracking-wider text-slate-400 font-mono">
                    Tolerances Verified
                  </span>
                </div>
                <div className="divide-y divide-slate-100">
                  {product.specs.map((spec, i) => {
                    const parts = spec.split(':');
                    const label = parts[0]?.trim();
                    const value = parts.slice(1).join(':')?.trim() || '';

                    return (
                      <div key={i} className="grid grid-cols-1 sm:grid-cols-3 px-6 py-4 gap-2 items-center">
                        <div className="col-span-1 font-heading font-700 text-sm text-slate-900 uppercase tracking-wider">
                          {label}
                        </div>
                        <div className="col-span-2 font-mono font-650 text-sm md:text-base text-brand-blue text-left sm:text-left">
                          {value || '-'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RFQ Trigger */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-700 text-sm text-text-dark mb-1">Need a custom quote?</h4>
                  <p className="text-text-muted text-xs leading-relaxed max-w-md">
                    Request technical reviews for custom tolerances, blueprint revisions, or bulk-volume manufacturing schedules.
                  </p>
                </div>
                <a 
                  href={gmailHref} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary text-xs shrink-0 w-full sm:w-auto"
                >
                  <Mail size={14} /> Request Quote (RFQ)
                </a>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </>
  );
}
