import { useEffect, useRef, useState } from 'react';

export default function StatCounter({ value, suffix = '', label, light = false }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1200;
          const step = Math.max(1, Math.ceil(value / (duration / 16)));
          const timer = setInterval(() => {
            start += step;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="relative flex flex-col items-center text-center p-6 bg-transparent border border-dashed border-brand-charcoal/10 m-2 group hover:border-brand-brass transition-all duration-300">
      
      {/* Drafting tick marks at corners */}
      <span className="absolute top-[-2px] left-[-2px] text-[7px] font-technical text-brand-charcoal/30 select-none pointer-events-none">+</span>
      <span className="absolute top-[-2px] right-[-2px] text-[7px] font-technical text-brand-charcoal/30 select-none pointer-events-none">+</span>
      <span className="absolute bottom-[-2px] left-[-2px] text-[7px] font-technical text-brand-charcoal/30 select-none pointer-events-none">+</span>
      <span className="absolute bottom-[-2px] right-[-2px] text-[7px] font-technical text-brand-charcoal/30 select-none pointer-events-none">+</span>

      <span className={`font-technical font-medium text-3xl md:text-4xl tracking-tight transition-colors duration-300 ${
        light 
          ? 'text-white' 
          : 'text-brand-brass-dark font-bold'
      }`}>
        {count.toLocaleString()}{suffix}
      </span>
      
      <span className={`text-[9px] font-technical mt-3 uppercase tracking-widest leading-relaxed ${
        light ? 'text-brand-parchment/60' : 'text-brand-charcoal/60'
      }`}>
        {label}
      </span>
    </div>
  );
}
