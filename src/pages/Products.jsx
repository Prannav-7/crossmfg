import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Cog } from 'lucide-react';
import { products, productCategories, siteConfig } from '../data/siteData';
import ProductCard from '../components/ui/ProductCard';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>OEM Components Portfolio — Cross Manufacturing Company</title>
        <meta name="description" content="Browse CMC's full catalogue of precision drivetrain gears, differential cross elements, hydraulic pump parts, and custom CNC machined components." />
      </Helmet>

      {/* Page Hero */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 border border-white/10 text-xs font-heading font-700 uppercase tracking-wider text-brand-blue-light mb-4">
            Product Catalogue
          </span>
          <h1 className="font-heading font-800 text-4xl md:text-5xl text-white mt-2">
            Engineered Components
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            High-precision components manufactured under strict ISO quality standards for tractor, hydraulics, and general engineering applications.
          </p>
        </div>
      </section>

      {/* Filter Bar Sticky */}
      <div className="bg-white border-b border-slate-200 sticky top-[68px] z-30 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 py-4 flex flex-wrap justify-center gap-3">
          {productCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded font-heading font-700 text-xs uppercase tracking-wider transition-all border ${isActive
                    ? 'bg-brand-blue border-brand-blue text-white shadow-sm'
                    : 'bg-white border-slate-200 text-text-muted hover:text-text-dark hover:border-slate-400'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      <section className="section-pad bg-light-bg">
        <div className="container-xl">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-heading font-700 text-slate-400 uppercase tracking-wider">
              <Cog size={14} className="text-brand-blue animate-spin-slow" />
              <span>
                Catalogue View: <span className="text-text-dark font-800">{activeCategory}</span>
              </span>
            </div>
            <p className="text-xs text-text-muted font-mono">
              Total: <span className="text-text-dark font-700">{filtered.length}</span> items
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filtered.map((product, i) => (
                <ScrollReveal key={product.id} delay={i * 0.04}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 bg-white border border-border-slate rounded-xl">
              <p className="text-text-muted text-sm font-medium">No components available in this category currently.</p>
            </div>
          )}
        </div>
      </section>

      {/* Technical RFQ Banner */}
      <section className="py-16 px-4 md:px-8 text-center bg-white border-t border-border-slate">
        <ScrollReveal>
          <h3 className="font-heading font-800 text-xl text-text-dark mb-2">Looking for a custom manufactured component?</h3>
          <p className="text-text-muted text-sm mb-6 max-w-xl mx-auto">
            Our facilities support a wide range of tooling setups. Email your CAD designs and specifications to our technical division.
          </p>
          <a href={siteConfig.emailHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Submit Specifications (RFQ)
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
