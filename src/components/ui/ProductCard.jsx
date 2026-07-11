import { Settings } from 'lucide-react';

export default function ProductCard({ product }) {
  // Category badge styles
  const categoryStyles = {
    'Tractor':       'bg-blue-50 text-blue-700 border-blue-200',
    'Hydraulic':     'bg-sky-50 text-sky-700 border-sky-200',
    'Valve Actuator':'bg-indigo-50 text-indigo-700 border-indigo-200',
    'CNC':           'bg-slate-100 text-slate-700 border-slate-200',
  };
  const categoryClass = categoryStyles[product.category] || 'bg-slate-100 text-slate-700 border-slate-200';

  return (
    <div className="group flex flex-col bg-white border border-border-slate rounded-xl overflow-hidden shadow-clean hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
      {/* Visual Area */}
      <div className="relative h-48 bg-slate-50 border-b border-border-slate flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-3 text-slate-400 group-hover:text-brand-blue transition-colors duration-300">
            <div className="w-12 h-12 rounded-lg bg-white border border-border-slate flex items-center justify-center shadow-sm">
              <Settings size={24} className="animate-spin-slow group-hover:text-brand-blue text-slate-400 transition-colors" />
            </div>
            <span className="text-[10px] font-heading font-700 uppercase tracking-widest text-slate-400">
              OEM COMPONENT
            </span>
          </div>
        )}

        {/* Category badge */}
        <div className={`absolute top-4 left-4 px-2.5 py-0.5 rounded text-[10px] font-heading font-800 uppercase tracking-wider border ${categoryClass}`}>
          {product.category}
        </div>
      </div>

      {/* Info Area */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-heading font-700 text-lg text-text-dark mb-2 group-hover:text-brand-blue transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {/* Technical Specs */}
        {product.specs?.length > 0 && (
          <div className="pt-4 border-t border-border-slate flex flex-col gap-1.5">
            <span className="text-[10px] font-heading font-800 uppercase tracking-wider text-slate-400">
              Technical Specifications
            </span>
            {product.specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-text-muted font-mono">
                <span className="w-1 h-1 rounded-full bg-brand-blue" />
                {spec}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
