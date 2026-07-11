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
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true); 
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center bg-emerald-50/50 border border-emerald-200 rounded-xl p-8">
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
          <CheckCircle size={24} className="text-emerald-600" />
        </div>
        <h3 className="font-heading font-700 text-xl text-slate-900">RFQ Message Prepared</h3>
        <p className="text-slate-500 text-sm max-w-md">Your system mail client has been opened. Please review and hit send to route your blueprint attachment directly to customercare@crossmfg.in.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white border border-border-slate p-6 md:p-8 rounded-xl shadow-clean" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-heading font-700 text-text-dark mb-1.5 uppercase tracking-wider">Representative Name *</label>
          <input 
            {...register('name', { required: 'Name is required' })}
            placeholder="e.g. John Doe" 
            className={`w-full bg-white border ${errors.name ? 'border-red-400' : 'border-border-slate'} rounded-md px-3.5 py-2.5 text-text-dark text-sm focus:outline-none focus:border-brand-blue transition-colors`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-heading font-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-heading font-700 text-text-dark mb-1.5 uppercase tracking-wider">Contact Phone</label>
          <input 
            {...register('phone')} 
            placeholder="e.g. +91 98843 91672" 
            className="w-full bg-white border border-border-slate rounded-md px-3.5 py-2.5 text-text-dark text-sm focus:outline-none focus:border-brand-blue transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-heading font-700 text-text-dark mb-1.5 uppercase tracking-wider">Official Email Address *</label>
        <input 
          {...register('email', { required: 'Email required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' } })}
          type="email" 
          placeholder="e.g. buyer@oemcompany.com" 
          className={`w-full bg-white border ${errors.email ? 'border-red-400' : 'border-border-slate'} rounded-md px-3.5 py-2.5 text-text-dark text-sm focus:outline-none focus:border-brand-blue transition-colors`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1 font-heading font-600">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-xs font-heading font-700 text-text-dark mb-1.5 uppercase tracking-wider">BLUEPRINT SPECIFICATIONS & ENQUIRY *</label>
        <textarea 
          {...register('message', { required: 'Specification details are required', minLength: { value: 10, message: 'Please provide more details' } })}
          rows={5} 
          placeholder="Please describe dimensions, materials, tolerances (e.g. case-hardened steel, ground profiles), batch sizes and requested timeline details..."
          className={`w-full bg-white border ${errors.message ? 'border-red-400' : 'border-border-slate'} rounded-md px-3.5 py-2.5 text-text-dark text-sm focus:outline-none focus:border-brand-blue transition-colors resize-none`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1 font-heading font-600">{errors.message.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-3.5">
        <Send size={16} /> Format & Send RFQ via Email
      </button>
    </form>
  );
}

export default function Contact() {
  const contactCards = [
    { icon: <Phone size={20} className="text-brand-blue" />, label: 'Commercial Enquiries', value: siteConfig.phone, href: siteConfig.phoneHref, sub: 'Mon–Sat, 9AM–6PM IST' },
    { icon: <Mail size={20} className="text-brand-blue" />, label: 'RFQ Submission Email', value: siteConfig.email, href: siteConfig.emailHref, sub: 'Response inside 1 Business Day' },
    { icon: <Clock size={20} className="text-brand-blue" />, label: 'Office Working Hours', value: '09:00 AM – 06:00 PM', href: null, sub: 'Standard Indian Time (GMT+5:30)' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Corporate Representative — Cross Manufacturing Company</title>
        <meta name="description" content="Get in touch with CMC Chennai's technical sales division. Submit tolerance sheets, drawings and volume specifications." />
      </Helmet>

      {/* Page Hero */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 border border-white/10 text-xs font-heading font-700 uppercase tracking-wider text-brand-blue-light mb-4">
            Contact Technical Sales
          </span>
          <h1 className="font-heading font-800 text-4xl md:text-5xl text-white mt-2">
            Submit Your Blueprint
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Contact our engineering division at customercare@crossmfg.in to receive estimations, cycle-time audits, and production schedules.
          </p>
        </div>
      </section>

      {/* Contact Cards Banner */}
      <section className="section-pad bg-light-bg">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactCards.map((card, i) => (
              <ScrollReveal key={card.label} delay={i * 0.08}>
                <div className="bg-white border border-border-slate p-8 rounded-xl text-center shadow-clean hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-heading font-800 tracking-wider text-slate-400 block uppercase mb-1">{card.label}</span>
                  {card.href ? (
                    <a href={card.href} className="font-heading font-850 text-text-dark text-lg hover:text-brand-blue transition-colors block mb-1">
                      {card.value}
                    </a>
                  ) : (
                    <span className="font-heading font-850 text-text-dark text-lg block mb-1">{card.value}</span>
                  )}
                  <span className="text-text-muted text-xs font-medium block">{card.sub}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Form + Addresses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <ScrollReveal direction="left">
              <SectionHeading 
                eyebrow="Request Estimation" 
                title="Send OEM Blueprint Details"
                subtitle="Complete the questionnaire to help our estimators review tolerance thresholds and production cycles." 
              />
              <ContactForm />
            </ScrollReveal>

            <ScrollReveal direction="right">
              <SectionHeading eyebrow="Manufacturing Sites" title="Factory Coordinates" />
              
              <div className="space-y-4 mb-6">
                {units.map((unit, i) => (
                  <div key={unit.id} className="bg-white border border-border-slate p-6 rounded-xl flex gap-4 items-start shadow-sm">
                    <div className="w-10 h-10 rounded bg-brand-blue/10 flex items-center justify-center text-brand-blue font-stat font-700 text-base shrink-0">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="font-heading font-700 text-base text-text-dark">{unit.name}</h4>
                      <p className="text-text-muted text-xs mt-1 leading-relaxed flex items-start gap-1.5">
                        <MapPin size={12} className="text-brand-blue shrink-0 mt-0.5" />
                        {unit.address}
                      </p>
                      <a 
                        href={unit.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-heading font-800 text-brand-blue hover:text-brand-blue-light transition-colors mt-3 inline-block"
                      >
                        View Google Maps Location →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Standard Map Container */}
              <div className="rounded-xl overflow-hidden border border-border-slate h-64 shadow-clean bg-slate-100">
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
      </section>
    </>
  );
}
