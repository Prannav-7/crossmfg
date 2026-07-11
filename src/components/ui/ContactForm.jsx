import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../../data/siteData';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Mailto fallback
    const subject = encodeURIComponent(`Enquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = (error) =>
    `w-full bg-surface border ${
      error ? 'border-red-500' : 'border-border'
    } rounded-lg px-4 py-3 text-textPrimary placeholder-textMuted text-sm focus:outline-none focus:border-accent transition-colors`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle size={56} className="text-accent" />
        <h3 className="font-heading font-700 text-2xl text-textPrimary">Message Sent!</h3>
        <p className="text-textMuted text-sm max-w-sm">
          Thank you for reaching out. Your email client has been opened. We'll respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm text-textMuted mb-1.5">Full Name *</label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Your full name"
            className={inputClass(errors.name)}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm text-textMuted mb-1.5">Phone Number</label>
          <input
            {...register('phone')}
            placeholder="+91 XXXXX XXXXX"
            className={inputClass(errors.phone)}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-textMuted mb-1.5">Email Address *</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
          })}
          type="email"
          placeholder="you@example.com"
          className={inputClass(errors.email)}
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-textMuted mb-1.5">Message *</label>
        <textarea
          {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message too short' } })}
          rows={5}
          placeholder="Tell us about your requirements..."
          className={`${inputClass(errors.message)} resize-none`}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send size={16} />
        Send Message
      </button>
    </form>
  );
}
