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
          const duration = 1500;
          const step = Math.ceil(value / (duration / 16));
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 bg-transparent">
      <span className={`font-stat font-700 text-4xl md:text-5xl lg:text-6xl tracking-tight transition-colors duration-300 ${
        light ? 'text-white' : 'text-brand-blue'
      }`}>
        {count.toLocaleString()}{suffix}
      </span>
      <span className={`text-xs font-heading font-600 mt-2 uppercase tracking-wider ${
        light ? 'text-slate-300' : 'text-text-muted'
      }`}>
        {label}
      </span>
    </div>
  );
}
