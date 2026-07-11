export default function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className={`mb-3 ${center ? 'flex justify-center' : ''}`}>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-heading font-700 uppercase tracking-wider ${
            light 
              ? 'text-brand-blue-light bg-white/10 border border-white/10' 
              : 'text-brand-blue bg-brand-blue/10 border border-brand-blue/15'
          }`}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`font-heading font-800 text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 tracking-tight ${
          light ? 'text-white' : 'text-text-dark'
        }`}
      >
        {title}
      </h2>
      <div className={`flex ${center ? 'justify-center' : ''} mb-6`}>
        <div className="h-[3px] w-12 rounded-full bg-brand-blue" />
      </div>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed max-w-3xl ${center ? 'mx-auto' : ''} ${
          light ? 'text-slate-300' : 'text-text-muted'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
