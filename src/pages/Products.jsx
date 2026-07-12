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
      <section className="relative bg-brand-charcoal text-white py-20 md:py-28 border-b border-brand-charcoal/30">
        <div className="absolute inset-0 blueprint-grid opacity-[0.25] pointer-events-none" />
        <div className="absolute top-4 left-6 text-[8px] font-technical text-brand-parchment/30">
          SECTION_CATALOGUE // DWG_REF_02
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-brass/20 text-[9px] font-technical uppercase tracking-widest text-brand-brass mb-4">
            [ Product Specifications ]
          </span>
          <h1 className="font-serif-heading text-4xl md:text-5xl lg:text-6xl text-white font-light mt-2">
            Engineered Components
          </h1>
          <p className="text-brand-parchment/85 font-body mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            High-precision components manufactured under strict ISO quality standards for tractor, hydraulics, and general engineering applications.
          </p>
        </div>
      </section>

      {/* Filter Bar Styled as Technical Drawing Selector Tabs */}
      <div className="bg-brand-parchment border-b border-brand-charcoal/10 sticky top-[62px] z-30 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 py-4 flex flex-wrap justify-center gap-3 font-technical text-[10px]">
          {productCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 border transition-all duration-300 uppercase tracking-widest ${isActive
                    ? 'bg-brand-charcoal border-brand-charcoal text-white font-bold'
                    : 'bg-brand-parchment-light border-brand-charcoal/15 text-brand-charcoal/70 hover:border-brand-charcoal'
                  }`}
              >
                [ {cat} ]
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      <section className="section-pad bg-brand-parchment relative overflow-hidden">

        {/* Coordinating frame borders */}
        <div className="coordinate-frame bg-brand-parchment-light/30 backdrop-blur-sm">
          <div className="p-2 md:p-6 relative z-10">

            {/* Header info bar */}
            <div className="mb-8 flex items-center justify-between pb-4 border-b border-brand-charcoal/10">
              <div className="flex items-center gap-2 font-technical text-[9px] text-brand-charcoal/50 uppercase tracking-widest">
                <Cog size={13} className="text-brand-brass animate-spin-slow" />
                <span>
                  DATASHEETS FILTER: <span className="text-brand-charcoal font-bold">{activeCategory}</span>
                </span>
              </div>
              <p className="font-technical text-[9px] text-brand-charcoal/50 uppercase">
                TOTAL DRAFTS: <span className="text-brand-charcoal font-bold">{filtered.length}</span>
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filtered.map((product, i) => (
                  <ScrollReveal key={product.id} delay={i * 0.04}>
                    <ProductCard product={product} />
                  </ScrollReveal>
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-20 bg-brand-parchment-light border border-brand-charcoal/10">
                <p className="text-brand-charcoal/80 font-body text-sm">No components available in this category currently.</p>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Technical RFQ Banner */}
      <section className="py-20 px-6 text-center bg-brand-parchment border-t border-brand-charcoal/10 relative overflow-hidden">
        <div className="watercolor-wash-brass top-5 right-10" />
        <ScrollReveal>
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h3 className="font-serif-heading font-bold text-2xl text-brand-charcoal">Looking for a custom manufactured component?</h3>
            <p className="text-brand-charcoal/85 font-body text-sm">
              Our facilities support a wide range of custom tooling and multi-axis lathe profiles. Send your CAD drawings and spec sheets to our division.
            </p>
            <div className="pt-2">
              <a href={siteConfig.emailHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
                SUBMIT DRAWING FOR REVIEW (RFQ)
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
