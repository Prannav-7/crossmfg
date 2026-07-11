import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Phone, Mail, Award, Shield,
  Zap, Users, Factory, CheckCircle, Target, ArrowUpRight,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { siteConfig, stats, products, whyChooseUs } from '../data/siteData';
import StatCounter from '../components/ui/StatCounter';
import ProductCard from '../components/ui/ProductCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';

const iconMap = {
  precision: <Zap size={22} className="text-brand-blue" />,
  oem:       <Users size={22} className="text-brand-blue" />,
  kaizen:    <Award size={22} className="text-brand-blue" />,
  quality:   <Shield size={22} className="text-brand-blue" />,
  capacity:  <Factory size={22} className="text-brand-blue" />,
  expertise: <Target size={22} className="text-brand-blue" />,
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Cross Manufacturing Company — Precision OEM Drivetrain & Hydraulic Components</title>
        <meta name="description" content="CMC Chennai: Elite manufacturer of tractor components, hydraulic systems & valve actuators. Established 1989. TAFE Best KAIZEN Award Winner." />
      </Helmet>

      {/* ════════════════════════════════════════════════════════════
          HERO SECTION (Corporate & Premium)
      ════════════════════════════════════════════════════════════ */}
      <section className="relative hero-gradient text-white overflow-hidden py-24 md:py-32">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-white/15 text-xs font-heading font-700 uppercase tracking-wider text-brand-blue-light mb-6"
              >
                <span className="w-1.5 h-1.5 bg-brand-blue-light rounded-full animate-pulse" />
                Engineering Trust Since 1989
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading font-800 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight text-white mb-6"
              >
                Precision Machined <br />
                <span className="text-brand-blue-light">OEM Components</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              >
                Cross Manufacturing Company is a premier manufacturer of high-tolerance tractor components, hydraulic pump parts, and valve actuators. Partnered with India's top industrial OEMs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/products" className="btn-primary">
                  Explore Components <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-outline !bg-transparent !text-white hover:!bg-white/10 !border-white/20">
                  Contact Technical Sales
                </Link>
              </motion.div>

              {/* Bottom trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8 items-center"
              >
                <div className="flex flex-col">
                  <span className="text-2xl font-stat font-700 text-brand-blue-light">TAFE Award</span>
                  <span className="text-xs text-slate-400 font-heading font-600 uppercase tracking-wider">Best KAIZEN 2016</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-2xl font-stat font-700 text-brand-blue-light">2 Facilities</span>
                  <span className="text-xs text-slate-400 font-heading font-600 uppercase tracking-wider">Chennai SIDCO & Senneerkuppam</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-2xl font-stat font-700 text-brand-blue-light">ISO Standards</span>
                  <span className="text-xs text-slate-400 font-heading font-600 uppercase tracking-wider">Certified Drivetrain Supply</span>
                </div>
              </motion.div>
            </div>

            {/* Right Hero Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-8 shadow-2xl backdrop-blur">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-700">
                  <span className="text-xs font-heading font-800 tracking-wider text-slate-400 uppercase">Operational Excellence</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-heading font-700 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    OEM AUDITED
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-900/60 rounded-lg border border-slate-700/50">
                    <span className="text-xs font-heading font-700 text-slate-400 uppercase tracking-wider">Core Machining Capabilities</span>
                    <p className="text-white font-heading font-700 text-base mt-1">CNC Precision Turning & Grinding</p>
                    <p className="text-slate-400 text-xs mt-1">Multi-axis setups with in-process gauging</p>
                  </div>

                  <div className="p-4 bg-slate-900/60 rounded-lg border border-slate-700/50">
                    <span className="text-xs font-heading font-700 text-slate-400 uppercase tracking-wider">Quality Assurance</span>
                    <p className="text-white font-heading font-700 text-base mt-1">3D CMM & Metrology Testing</p>
                    <p className="text-slate-400 text-xs mt-1">Comprehensive inspection documentation and traceability</p>
                  </div>

                  <div className="p-4 bg-slate-900/60 rounded-lg border border-slate-700/50">
                    <span className="text-xs font-heading font-700 text-slate-400 uppercase tracking-wider">Supply Chain Reliability</span>
                    <p className="text-white font-heading font-700 text-base mt-1">Just-In-Time (JIT) Delivery Models</p>
                    <p className="text-slate-400 text-xs mt-1">Serving major OEMs with robust logistics</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── ── STATS BANNER ── ── */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-slate-100">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ── ABOUT SECTION ── ── */}
      <section className="section-pad bg-light-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <ScrollReveal direction="left">
            <SectionHeading
              eyebrow="Corporate Profile"
              title="Over 35 Years of Manufacturing Leadership"
              subtitle="Established in 1989, Cross Manufacturing Company represents a cornerstone of automotive and general engineering component supply in Chennai."
            />
            <p className="text-text-muted text-base leading-relaxed mb-6">
              Founded by veteran mechanical engineer Mr. T. Krishnamoorthy, CMC has maintained a sterling track record of precision, reliability, and engineering superiority. We produce critical components that drive tractors, control hydraulic setups, and power industrial valve systems.
            </p>
            <p className="text-text-muted text-base leading-relaxed mb-8">
              Operating from Unit I in Poonamallee and Unit II in Thirumazhisai SIDCO, we house top-tier CNC machining centers, automated grinding equipment, and a fully equipped CMM laboratory to certify quality standards.
            </p>
            <Link to="/about" className="btn-primary">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-white border border-border-slate rounded-2xl p-8 shadow-clean">
              <h3 className="font-heading font-700 text-xl text-text-dark mb-6 pb-4 border-b border-border-slate uppercase tracking-wide">
                OEM Delivery Metrics
              </h3>
              
              <div className="space-y-6">
                {[
                  { label: 'Quality Acceptance Rate', value: '99.8%' },
                  { label: 'OEM Partnership Tenure', value: '35+ Years' },
                  { label: 'Components Produced', value: '500+ Variants' },
                  { label: 'Awarded Certifications', value: 'TAFE KAIZEN 2016' }
                ].map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center">
                    <span className="text-text-muted text-sm font-medium">{metric.label}</span>
                    <span className="font-heading font-800 text-brand-blue text-base">{metric.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-slate-50 border border-border-slate rounded-lg text-xs text-text-muted leading-relaxed">
                <strong>Unit Locations:</strong> Senneerkuppam (Poonamallee) & SIDCO Industrial Estate (Thirumazhisai), Chennai, Tamil Nadu, India.
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── ── FEATURED PRODUCTS ── ── */}
      <section className="section-pad bg-white border-y border-border-slate">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Precision Parts Portfolio"
            title="Engineered Components Showcase"
            subtitle="Explore our portfolio of high-grade drivetrain, hydraulic pump, and valve actuator components machined to standard tolerances."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.slice(0, 6).map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.08}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products" className="btn-outline">
            Browse Full Catalogue <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── ── WHY PARTNER WITH US ── ── */}
      <section className="section-pad bg-light-bg">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Key Advantages"
            title="Industrial Partnership Capabilities"
            subtitle="Why major OEMs consistently rely on Cross Manufacturing Company for their critical components."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="bg-white border border-border-slate rounded-xl p-6 shadow-clean hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-5">
                  {iconMap[item.icon]}
                </div>
                <h3 className="font-heading font-700 text-lg text-text-dark mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── ── AWARD HIGHLIGHT ── ── */}
      <section className="section-pad bg-white border-t border-border-slate">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden border border-slate-800 shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center shrink-0 shadow-lg text-white">
                  <Award size={36} />
                </div>
                
                <div>
                  <span className="inline-block text-brand-blue-light text-xs font-heading font-700 uppercase tracking-widest mb-2">
                    TAFE OEM Recognition
                  </span>
                  <h3 className="font-heading font-800 text-2xl md:text-3xl leading-tight text-white mb-3">
                    Awarded TAFE Best KAIZEN Honor
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Tractors and Farm Equipment Limited (TAFE) recognized Cross Manufacturing Company in November 2016 for exceptional implementation of manufacturing KAIZEN practices, waste reductions, and supply reliability.
                  </p>
                  <div className="flex items-center gap-6 text-xs text-slate-400 font-heading font-600 uppercase tracking-wider">
                    <span>Year: 2016</span>
                    <span>·</span>
                    <span>Auditor: TAFE Management</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ── CTA REPRESENTATIVE BANNER ── ── */}
      <section className="bg-slate-900 text-white py-16 px-4 md:px-8 border-t border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading font-800 text-2xl md:text-3xl mb-2 text-white">
              Request Technical Consultation
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Submit your RFQ sheets, tolerance drawings or product descriptions to our technical representatives for quick estimations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href={siteConfig.emailHref} className="btn-primary">
              <Mail size={16} /> Submit RFQ / Email
            </a>
            <a href={siteConfig.phoneHref} className="btn-outline !bg-transparent !text-white hover:!bg-white/10 !border-white/20">
              <Phone size={16} /> Contact Office
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
