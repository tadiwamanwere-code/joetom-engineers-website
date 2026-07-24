import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Clock, Send, CheckCircle2, AlertTriangle, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';

const BUDGET_OPTIONS = ['Single Room', 'Whole House', 'Commercial'];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'gypsum',
    budget: BUDGET_OPTIONS[0],
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    setValidationError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.description.trim()) {
      setValidationError('Please complete all required fields (*).');
      return;
    }

    if (!formState.email.includes('@')) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate backend API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        projectType: 'gypsum',
        budget: BUDGET_OPTIONS[0],
        description: '',
      });
    }, 1400);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-blue-600 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-yellow-500"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-yellow-500 uppercase font-semibold">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white">
            Get a Free Quote
          </h2>
          <p className="text-sm sm:text-base font-sans text-gray-300 font-light mt-4">
            Tell us about your ceiling and we'll get back to you with a quote. Or call or WhatsApp us directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column (Contact details & Map) */}
          <div className="lg:col-span-5 space-y-4">

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/10 p-5 transition-colors group"
            >
              <div className="w-11 h-11 bg-blue-700 flex items-center justify-center shrink-0 group-hover:bg-yellow-500 transition-colors">
                <Phone className="w-5 h-5 text-yellow-500 group-hover:text-[#101820] transition-colors" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase block mb-1">
                  Call Us
                </span>
                <span className="text-base font-sans text-white font-medium block">{CONTACT_INFO.phoneFormatted}</span>
                <span className="text-sm font-sans text-gray-300 block">{CONTACT_INFO.phone2Formatted}</span>
                <span className="text-sm font-sans text-gray-300 block">{CONTACT_INFO.phone3Formatted}</span>
              </div>
            </a>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/10 p-5 transition-colors group"
            >
              <div className="w-11 h-11 bg-blue-700 flex items-center justify-center shrink-0 group-hover:bg-yellow-500 transition-colors">
                <MessageCircle className="w-5 h-5 text-yellow-500 group-hover:text-[#101820] transition-colors" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase block mb-1">
                  WhatsApp
                </span>
                <span className="text-base font-sans text-white font-medium block">Chat with us now</span>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5">
              <div className="w-11 h-11 bg-blue-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase block mb-1">
                  Service Area
                </span>
                <span className="text-sm font-sans text-gray-200 font-light block">{CONTACT_INFO.serviceArea}</span>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5">
              <div className="w-11 h-11 bg-blue-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase block mb-1">
                  Hours
                </span>
                <span className="text-sm font-sans text-gray-200 font-light block">{CONTACT_INFO.hours}</span>
              </div>
            </div>

          </div>

          {/* Right Column (Contact Form) */}
          <div className="lg:col-span-7 bg-blue-700 border border-white/10 p-8 md:p-12 shadow-xl relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  id="start-build-form"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono tracking-wider text-gray-300 uppercase block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/15 focus:border-yellow-500 px-4 py-3.5 text-sm font-sans text-white placeholder:text-gray-400 focus:outline-none transition-colors"
                        placeholder="e.g. John Moyo"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono tracking-wider text-gray-300 uppercase block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/15 focus:border-yellow-500 px-4 py-3.5 text-sm font-sans text-white placeholder:text-gray-400 focus:outline-none transition-colors"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono tracking-wider text-gray-300 uppercase block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/15 focus:border-yellow-500 px-4 py-3.5 text-sm font-sans text-white placeholder:text-gray-400 focus:outline-none transition-colors"
                        placeholder="+263 77 123 4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono tracking-wider text-gray-300 uppercase block">
                        Ceiling Type
                      </label>
                      <select
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-blue-700 border border-white/15 focus:border-yellow-500 px-4 py-3.5 text-sm font-sans text-white focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="pvc">PVC Ceiling</option>
                        <option value="gypsum">Gypsum Ceiling</option>
                        <option value="suspended">Suspended / Drop Ceiling</option>
                        <option value="lighting">Cove &amp; LED Lighting</option>
                        <option value="repairs">Repairs &amp; Renovations</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono tracking-wider text-gray-300 uppercase block">
                      Project Size
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {BUDGET_OPTIONS.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormState((prev) => ({ ...prev, budget: range }))}
                          className={`py-3 text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                            formState.budget === range
                              ? 'bg-yellow-500 border-yellow-500 text-[#101820] font-bold'
                              : 'bg-white/5 border-white/15 hover:border-white/30 text-gray-300 hover:text-white'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono tracking-wider text-gray-300 uppercase block">
                      Tell Us About Your Ceiling *
                    </label>
                    <textarea
                      name="description"
                      value={formState.description}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/15 focus:border-yellow-500 px-4 py-3.5 text-sm font-sans text-white placeholder:text-gray-400 focus:outline-none transition-colors resize-none"
                      placeholder="Which rooms, roughly what size, and the look you're after..."
                    />
                  </div>

                  <AnimatePresence>
                    {validationError && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 bg-red-950/40 border border-red-500/50 flex items-center gap-3 text-red-300 text-xs font-mono"
                      >
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>{validationError}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-600 disabled:text-gray-300 text-[#101820] font-display font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    id="submit-proposal-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#101820]/30 border-t-[#101820] rounded-full animate-spin"></span>
                        SENDING...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        SEND REQUEST
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-16 text-center space-y-6 flex flex-col items-center"
                  id="contact-success-panel"
                >
                  <div className="w-16 h-16 rounded-full bg-yellow-500/15 border border-yellow-500 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-white">
                      Thanks — we've got your request.
                    </h3>
                  </div>
                  <p className="text-sm font-sans text-gray-300 font-light max-w-sm leading-relaxed mx-auto">
                    We'll review your project details and get back to you shortly. For anything urgent, call or WhatsApp us directly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-yellow-500 hover:text-yellow-500 font-mono text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer"
                  >
                    SEND ANOTHER REQUEST
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
