export default function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''} relative z-10`}>
      {eyebrow && (
        <div className={`mb-4 ${center ? 'flex justify-center' : ''}`}>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 font-technical text-[9px] uppercase tracking-[0.2em] border ${light
              ? 'text-brand-brass border-brand-brass/30 bg-white/5'
              : 'text-brand-charcoal/70 border-brand-charcoal/20 bg-brand-parchment-light/50'
            }`}>
            [ {eyebrow} ]
          </span>
        </div>
      )}

      <h2
        className={`font-serif-heading text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 tracking-wide font-medium ${light ? 'text-white' : 'text-brand-charcoal'
          }`}
      >
        {title}
      </h2>

      {/* Technical dimension line divider */}
      <div className={`flex items-center gap-2 my-5 max-w-xl ${center ? 'mx-auto' : ''}`}>
        <div className={`h-[0.5px] flex-1 ${light ? 'bg-white/10' : 'bg-brand-charcoal/15'}`} />
        <div className={`text-[8px] font-technical font-bold ${light ? 'text-brand-brass' : 'text-brand-charcoal/40'}`}>
          ⊕
        </div>
        <div className={`h-[0.5px] flex-1 ${light ? 'bg-white/10' : 'bg-brand-charcoal/15'}`} />
      </div>

      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed max-w-3xl font-body italic ${center ? 'mx-auto' : ''} ${light ? 'text-brand-parchment/90' : 'text-brand-charcoal/85'
          }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
