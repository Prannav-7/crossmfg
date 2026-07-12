import { Settings, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  // B2B code categories
  const categoryCodes = {
    'Tractor': 'TRAC-COMP',
    'Hydraulic': 'HYDR-FLUID',
    'Valve Actuator': 'VALV-ACTU',
    'CNC': 'CNC-PREC',
  };
  const categoryCode = categoryCodes[product.category] || 'GEN-ENG';

  return (
    <div className="group flex flex-col bg-brand-parchment-light border border-brand-charcoal/15 rounded-none overflow-hidden transition-all duration-300 hover:border-brand-brass hover:shadow-[0_12px_40px_rgba(197,168,128,0.08)] relative">
      
      {/* Dynamic line markers (drawings coordinates indicators on hover) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-charcoal/5 group-hover:bg-brand-brass transition-colors" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-charcoal/5 group-hover:bg-brand-brass transition-colors" />
      <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-brand-charcoal/5 group-hover:bg-brand-brass transition-colors" />
      <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-brand-charcoal/5 group-hover:bg-brand-brass transition-colors" />

      {/* Visual Area with Graphite grid overlay */}
      <div className="relative h-52 bg-brand-parchment border-b border-brand-charcoal/10 flex items-center justify-center overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 pointer-events-none"
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(26,28,30,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,28,30,0.035) 1px, transparent 1px)',
               backgroundSize: '12px 12px'
             }} />

        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-brand-charcoal/30 group-hover:text-brand-brass transition-colors duration-300">
            <div className="w-12 h-12 rounded-none bg-brand-parchment-light border border-brand-charcoal/15 flex items-center justify-center">
              <Settings size={22} className="animate-spin-slow group-hover:text-brand-brass text-brand-charcoal/30 transition-colors" />
            </div>
            <span className="text-[8px] font-technical tracking-widest uppercase">
              SKETCH DRAWING PENDING
            </span>
          </div>
        )}

        {/* Category badge styled as technical ID */}
        <div className="absolute top-3 left-3 px-2 py-0.5 bg-brand-charcoal text-brand-parchment font-technical text-[7px] tracking-widest uppercase border border-brand-brass">
          {categoryCode}
        </div>
        
        {/* Drawing coordinate labels on edge */}
        <div className="absolute bottom-2 right-3 font-technical text-[7px] text-brand-charcoal/20">
          Z: 1.00
        </div>
      </div>

      {/* Info Area */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-serif-heading font-bold text-lg text-brand-charcoal mb-2 group-hover:text-brand-brass transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-brand-charcoal/60 font-serif-heading font-light italic text-xs leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Technical Specs Summary Box */}
        {product.specs?.length > 0 && (
          <div className="mt-auto pt-4 border-t border-brand-charcoal/10 flex flex-col gap-1.5 mb-5">
            <span className="text-[8px] font-technical uppercase tracking-widest text-brand-brass font-bold mb-1">
              SPECIFICATIONS DATASHEET
            </span>
            <div className="bg-brand-parchment/40 border border-brand-charcoal/5 p-3 space-y-1">
              {product.specs.slice(0, 3).map((spec, i) => {
                const parts = spec.split(':');
                const label = parts[0]?.trim();
                const value = parts.slice(1).join(':')?.trim() || '';
                return (
                  <div key={i} className="flex justify-between text-[9px] font-technical text-brand-charcoal/70 truncate">
                    <span className="opacity-60">{label}:</span>
                    <span className="font-bold text-right truncate max-w-[120px]">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Link to Detail Page */}
        <div className="pt-4 border-t border-brand-charcoal/10 flex items-center justify-between">
          <span className="text-[7px] font-technical text-brand-charcoal/25">REF // CMC-00{product.id}</span>
          <Link 
            to={`/products/${product.id}`}
            className="text-[9px] font-technical uppercase tracking-widest text-brand-charcoal hover:text-brand-brass inline-flex items-center gap-1.5 group/btn"
          >
            VIEW DWG DETAILS <ArrowRight size={11} className="group-hover/btn:translate-x-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
