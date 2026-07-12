import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import { siteConfig, units } from '../data/siteData';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = (data) => {
    const subject = encodeURIComponent(`OEM Machined Parts Enquiry - ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\nMessage / Blueprint Spec Details:\n${data.message}`);
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center bg-brand-parchment border border-brand-brass rounded-none p-8">
        <div className="w-12 h-12 border border-brand-brass flex items-center justify-center bg-brand-parchment-light">
          <CheckCircle size={24} className="text-brand-brass" />
        </div>
        <h3 className="font-serif-heading font-bold text-xl text-brand-charcoal">RFQ Message Formatted</h3>
        <p className="text-brand-charcoal/85 font-body text-sm max-w-md">
          Your system mail client has been opened. Please attach your AutoCAD/PDF blueprints and hit send to route your plans directly to customercare@crossmfg.in.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-brand-parchment-light border border-brand-charcoal/15 p-6 md:p-8 relative" noValidate>

      {/* Blueprint grid coordinates */}
      <div className="absolute top-1.5 right-2 font-technical text-[6px] text-brand-charcoal/30 select-none">CMC-RFQ-FORM</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[8px] font-technical text-brand-brass mb-2 uppercase tracking-widest font-bold">Representative Name *</label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="e.g. John Doe"
            className={`w-full bg-brand-parchment border ${errors.name ? 'border-red-400' : 'border-brand-charcoal/15'} px-3.5 py-2.5 text-brand-charcoal text-xs font-technical focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass/10 transition-colors`}
          />
          {errors.name && <p className="text-red-500 text-[9px] mt-1 font-technical uppercase font-bold">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-[8px] font-technical text-brand-brass mb-2 uppercase tracking-widest font-bold">Contact Phone</label>
          <input
            {...register('phone')}
            placeholder="e.g. +91 98843 91672"
            className="w-full bg-brand-parchment border border-brand-charcoal/15 px-3.5 py-2.5 text-brand-charcoal text-xs font-technical focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass/10 transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-[8px] font-technical text-brand-brass mb-2 uppercase tracking-widest font-bold">Official Email Address *</label>
        <input
          {...register('email', { required: 'Email required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' } })}
          type="email"
          placeholder="e.g. buyer@oemcompany.com"
          className={`w-full bg-brand-parchment border ${errors.email ? 'border-red-400' : 'border-brand-charcoal/15'} px-3.5 py-2.5 text-brand-charcoal text-xs font-technical focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass/10 transition-colors`}
        />
        {errors.email && <p className="text-red-500 text-[9px] mt-1 font-technical uppercase font-bold">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-[8px] font-technical text-brand-brass mb-2 uppercase tracking-widest font-bold">Blueprint Specifications & Enquiry *</label>
        <textarea
          {...register('message', { required: 'Specification details are required', minLength: { value: 10, message: 'Please provide more details' } })}
          rows={5}
          placeholder="Please describe dimensions, materials, tolerances (e.g. case-hardened steel, ground profiles), batch sizes and requested timeline details..."
          className={`w-full bg-brand-parchment border ${errors.message ? 'border-red-400' : 'border-brand-charcoal/15'} px-3.5 py-2.5 text-brand-charcoal text-xs font-technical focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass/10 transition-colors resize-none`}
        />
        {errors.message && <p className="text-red-500 text-[9px] mt-1 font-technical uppercase font-bold">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-3.5 font-technical text-[10px] tracking-widest">
        <Send size={13} className="text-brand-brass" /> SUBMIT TECHNICAL RFQ EMAIL
      </button>
    </form>
  );
}

export default function Contact() {
  const contactCards = [
    { icon: <Phone size={18} className="text-brand-brass" />, label: 'Commercial Enquiries', value: siteConfig.phone, href: siteConfig.phoneHref, sub: 'Mon–Sat, 9AM–6PM IST' },
    { icon: <Mail size={18} className="text-brand-brass" />, label: 'RFQ Submission Email', value: siteConfig.email, href: siteConfig.emailHref, sub: 'Response inside 1 Business Day' },
    { icon: <Clock size={18} className="text-brand-brass" />, label: 'Office Working Hours', value: '09:00 AM – 06:00 PM', href: null, sub: 'Standard Indian Time (GMT+5:30)' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Corporate Representative — Cross Manufacturing Company</title>
        <meta name="description" content="Get in touch with CMC Chennai's technical sales division. Submit tolerance sheets, drawings and volume specifications." />
      </Helmet>

      {/* Page Hero */}
      <section className="relative bg-brand-charcoal text-white py-20 md:py-28 border-b border-brand-charcoal/30">
        <div className="absolute inset-0 blueprint-grid opacity-[0.25] pointer-events-none" />
        <div className="absolute top-4 left-6 text-[8px] font-technical text-brand-parchment/30">
          SECTION_CONTACT // RFQ_STAMP
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-brass/20 text-[9px] font-technical uppercase tracking-widest text-brand-brass mb-4">
            [ Contact Technical Sales ]
          </span>
          <h1 className="font-serif-heading text-4xl md:text-5xl lg:text-6xl text-white font-light mt-2">
            Submit Your Blueprint
          </h1>
          <p className="text-brand-parchment/85 font-body mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Contact our engineering division at customercare@crossmfg.in to receive estimations, cycle-time audits, and production schedules.
          </p>
        </div>
      </section>

      {/* Contact Cards Banner */}
      <section className="section-pad bg-brand-parchment relative overflow-hidden">

        <div className="watercolor-wash-brass top-20 right-20" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactCards.map((card, i) => (
              <ScrollReveal key={card.label} delay={i * 0.08}>
                <div className="bg-brand-parchment-light border border-brand-charcoal/15 p-8 text-center hover:border-brand-brass transition-all duration-300 relative">

                  {/* Ticks */}
                  <span className="absolute top-1 left-1.5 font-technical text-[6px] text-brand-charcoal/20">+</span>
                  <span className="absolute bottom-1 right-1.5 font-technical text-[6px] text-brand-charcoal/20">+</span>

                  <div className="w-10 h-10 border border-brand-charcoal/10 flex items-center justify-center mx-auto mb-4 bg-brand-parchment">
                    {card.icon}
                  </div>

                  <span className="text-[8px] font-technical tracking-widest text-brand-charcoal/50 block uppercase mb-2 font-bold">{card.label}</span>

                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-serif-heading font-bold text-brand-charcoal text-lg hover:text-brand-brass transition-colors block mb-1"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <span className="font-serif-heading font-bold text-brand-charcoal text-lg block mb-1">{card.value}</span>
                  )}

                  <span className="text-brand-charcoal/50 font-serif-heading font-light italic text-xs block">{card.sub}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Form + Addresses */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            <div className="lg:col-span-6">
              <ScrollReveal direction="left">
                <SectionHeading
                  eyebrow="Request Estimation"
                  title="Send OEM Blueprint Details"
                  subtitle="Complete the questionnaire to help our estimators review tolerance thresholds and production cycles."
                />
                <ContactForm />
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <ScrollReveal direction="right">
                <SectionHeading eyebrow="Manufacturing Sites" title="Factory Coordinates" />

                <div className="space-y-4 mb-6">
                  {units.map((unit, i) => (
                    <div key={unit.id} className="bg-brand-parchment-light border border-brand-charcoal/15 p-6 flex gap-4 items-start relative">

                      <span className="absolute top-1 right-2 font-technical text-[6px] text-brand-charcoal/20">UNIT_0{i + 1}</span>

                      <div className="w-10 h-10 border border-brand-charcoal/15 bg-brand-parchment text-brand-brass font-technical font-bold text-xs flex items-center justify-center shrink-0">
                        [0{i + 1}]
                      </div>
                      <div>
                        <h4 className="font-serif-heading font-bold text-base text-brand-charcoal">{unit.name}</h4>
                        <p className="text-brand-charcoal/85 font-body text-xs mt-2 leading-relaxed flex items-start gap-1.5">
                          <MapPin size={12} className="text-brand-brass shrink-0 mt-0.5" />
                          {unit.address}
                        </p>
                        <a
                          href={unit.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-technical text-[9px] uppercase tracking-widest text-brand-charcoal hover:text-brand-brass transition-colors mt-3 inline-block font-bold"
                        >
                          OPEN MAPS DIRECTION →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Google Map Container styled in coordinates frame */}
                <div className="coordinate-frame bg-brand-parchment-light p-2 h-64 overflow-hidden">
                  <iframe
                    title="CMC Poonamallee Location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4!2d80.0597!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52604b21b8c3c7%3A0x0!2sSenneerkuppam%2C+Poonamallee%2C+Chennai!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
