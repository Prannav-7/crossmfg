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
        'light-bg':         '#FAF7EE', // Luxury Warm Parchment Background
        'light-card':       '#FCFAF2', // Warm cream card background
        'border-slate':     '#E2E8F0', // Clean slate border
        'text-dark':        '#1A1C1E', // Dark charcoal/ink text
        'text-muted':       '#5A5D64', // Slate for secondary text
        'text-light':       '#FAF7EE', // Light text
        
        // Premium Industrial Luxury Palette
        'brand-parchment':  '#FAF7EE', // Luxe warm paper
        'brand-parchment-light': '#FCFAF2',
        'brand-charcoal':   '#1A1C1E', // Technical graphite ink
        'brand-blueprint':  '#0A1326', // Prussian Blueprint Navy
        'brand-blueprint-grid': '#121E3B', // Blueprint Grid Line
        'brand-brass':      '#C5A880', // Premium brushed brass accent
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        'serif-heading': ['Cormorant Garamond', 'Playfair Display', 'serif'],
        body:    ['Inter', 'sans-serif'],
        stat:    ['Oswald', 'sans-serif'],
        technical: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '850': '850',
        '900': '900',
      },
      boxShadow: {
        'clean':        '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'premium':      '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        'interactive':  '0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.08)',
        'industrial':   '0 20px 25px -5px rgba(30, 111, 191, 0.1)',
        'lux-bevel':    'inset 0 1px 1px rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}
