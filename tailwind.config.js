/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Corporate Industrial Palette (Kebab-case to ensure smooth Tailwind utilities generation)
        primary:            '#0B192C', // Deep Slate/Navy (Professional Base)
        secondary:          '#1E3E62', // Steel Navy
        'brand-blue':       '#1E6FBF', // Main brand blue matching crossmfg.in
        'brand-blue-light': '#478AC9', // Original brand blue
        'steel-gray':       '#607D8B', // Industrial Steel Gray
        'accent-orange':    '#E07A5F', // Warm copper/rust accent (professional engineering contrast)
        'light-bg':         '#F8FAFC', // Crisp light background
        'light-card':       '#FFFFFF', // White card backgrounds
        'border-slate':     '#E2E8F0', // Clean slate border
        'text-dark':        '#0F172A', // Slate-900 for dark text
        'text-muted':       '#64748B', // Slate-500 for secondary text
        'text-light':       '#F8FAFC', // Light text
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        stat:    ['Oswald', 'sans-serif'],
      },
      fontWeight: {
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
      },
      boxShadow: {
        'clean':        '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'premium':      '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        'interactive':  '0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.08)',
        'industrial':   '0 20px 25px -5px rgba(30, 111, 191, 0.1)',
      },
    },
  },
  plugins: [],
}
