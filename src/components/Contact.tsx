import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Sliders, AlertTriangle, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    budget: '$1M - $2M',
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
    
    // Simple verification
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
      // Reset form
      setFormState({
        name: '',
        email: '',
        phone: '',
        projectType: 'residential',
        budget: '$1M - $2M',
        description: '',
      });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#052E46] text-white overflow-hidden relative">
      {/* Background radial spotlight */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-blue-500"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-blue-500 uppercase font-semibold">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white">
            Start Your Build
          </h2>
          <p className="text-sm sm:text-base font-sans text-gray-400 font-light mt-4">
            Submit your blueprint concepts, material parameters, or scheduling questions. Our project directors will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column (Contact details & Vector Map) */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Direct details info list */}
            <div className="space-y-6" id="contact-info-list">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase block">
                    CALL US
                  </span>
                  <div className="flex flex-col sm:flex-row sm:gap-3">
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-sm md:text-base font-mono text-white hover:text-blue-400 transition-colors"
                    >
                      {CONTACT_INFO.phoneFormatted}
                    </a>
                    <a
                      href={`tel:${CONTACT_INFO.phone2}`}
                      className="text-sm md:text-base font-mono text-white hover:text-blue-400 transition-colors"
                    >
                      {CONTACT_INFO.phone2Formatted}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase block">
                    WHATSAPP
                  </span>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-mono text-white hover:text-blue-400 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase block">
                    GENERAL INQUIRIES
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm md:text-base font-mono text-white hover:text-blue-500 transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase block">
                    CORPORATE HEADQUARTERS
                  </span>
                  <p className="text-sm font-sans text-gray-300 font-light">
                    {CONTACT_INFO.officeAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase block">
                    OPERATIONAL OFFICE HOURS
                  </span>
                  <p className="text-sm font-sans text-gray-300 font-light">
                    {CONTACT_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* ARTISTIC VECTOR GEOMETRIC MAP (Fits perfectly in iframe context) */}
            <div
              className="bg-[#0A425F] border border-white/5 p-6 relative h-56 flex flex-col justify-between overflow-hidden shadow-inner group"
              id="vector-map-widget"
            >
              <div className="absolute inset-0 opacity-15 flex flex-col justify-between pointer-events-none p-2 font-mono text-[8px] text-gray-500">
                <div className="flex justify-between">
                  <span>LAT: 17.3592° S</span>
                  <span>LNG: 30.1983° E</span>
                </div>
                <div className="flex justify-between">
                  <span>GRID SEC: H-2</span>
                  <span>ELEV: 3780 FT</span>
                </div>
              </div>

              {/* Grid Lines */}
              <div className="absolute inset-0 border border-dashed border-white/5 m-4 pointer-events-none" />
              <div className="absolute inset-0 border border-dashed border-white/5 m-12 pointer-events-none" />
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 pointer-events-none" />

              {/* Diagonal Line Design */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.03] stroke-white pointer-events-none">
                <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth="1" />
                <line x1="100%" y1="0" x2="0" y2="100%" strokeWidth="1" />
              </svg>

              {/* Concrete Headquarters Node */}
              <div className="absolute left-[55%] top-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                <span className="absolute w-6 h-6 bg-blue-600/30 rounded-full animate-ping pointer-events-none"></span>
                <span className="absolute w-3 h-3 bg-blue-500 rounded-full border border-white"></span>
                <div className="mt-4 px-2 py-0.5 bg-black/90 border border-white/10 text-[8px] font-mono tracking-widest text-white uppercase shadow-md white-space-nowrap">
                  JOETOM HQ SITE
                </div>
              </div>

              {/* Top and Bottom Labeling */}
              <div className="relative flex justify-between items-start z-10">
                <span className="text-[9px] font-mono text-gray-500 tracking-widest">
                  SITE MAP RADAR
                </span>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              </div>

              <div className="relative z-10 flex justify-between items-end border-t border-white/5 pt-3">
                <p className="text-[10px] font-sans text-gray-400 font-light">
                  279 Ethlyn House, Chinhoyi
                </p>
                <span className="text-[9px] font-mono text-blue-500 font-bold">
                  ACTIVE
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (Interactive Contact Form) */}
          <div className="lg:col-span-7 bg-[#0A425F] border border-white/5 p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-3 h-3 bg-blue-600" />
            
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
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono tracking-wider text-gray-400 uppercase block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-blue-500 px-4 py-3 text-sm font-sans text-white focus:outline-none transition-colors"
                        placeholder="Marcus Aurelius"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono tracking-wider text-gray-400 uppercase block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-blue-500 px-4 py-3 text-sm font-sans text-white focus:outline-none transition-colors"
                        placeholder="client@space.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono tracking-wider text-gray-400 uppercase block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-blue-500 px-4 py-3 text-sm font-sans text-white focus:outline-none transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono tracking-wider text-gray-400 uppercase block">
                        Project Category
                      </label>
                      <select
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-[#0A425F] border border-white/10 focus:border-blue-500 px-4 py-3 text-sm font-sans text-white focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="residential">High-End Residential</option>
                        <option value="commercial">Commercial / Corporate</option>
                        <option value="design-build">Design-Build Integration</option>
                        <option value="renovations">Architectural Renovations</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Target Slider selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono tracking-wider text-gray-400 uppercase block">
                      Target Budget Range
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Under $1M', '$1M - $3M', '$3M+'].map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormState((prev) => ({ ...prev, budget: range }))}
                          className={`py-3 text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                            formState.budget === range
                              ? 'bg-blue-600/20 border-blue-500 text-blue-500 font-bold border'
                              : 'bg-white/[0.01] border-white/5 hover:border-white/20 text-gray-400 hover:text-white border'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono tracking-wider text-gray-400 uppercase block">
                      Project Goals & Architectural Vision *
                    </label>
                    <textarea
                      name="description"
                      value={formState.description}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-white/[0.02] border border-white/10 focus:border-blue-500 px-4 py-3 text-sm font-sans text-white focus:outline-none transition-colors resize-none"
                      placeholder="Describe your site parameters, design concepts, material requests, or general scope of work..."
                    />
                  </div>

                  {/* Error Notification */}
                  <AnimatePresence>
                    {validationError && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 bg-blue-950/40 border border-blue-500/50 flex items-center gap-3 text-blue-400 text-xs font-mono"
                      >
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>{validationError}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-600 disabled:text-gray-300 text-[#101820] font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
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
                  className="py-12 text-center space-y-6 flex flex-col items-center"
                  id="contact-success-panel"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-white">
                      Proposal Received.
                    </h3>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                      REFERENCE CODE: JOETOM-RECV-{(Math.random() * 10000).toFixed(0)}
                    </p>
                  </div>
                  <p className="text-sm font-sans text-gray-400 font-light max-w-sm leading-relaxed mx-auto">
                    Your metrics have been logged securely. The Joetom Engineers engineering division is reviewing your blueprint details and will schedule a consult call shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-blue-500 hover:text-blue-500 font-mono text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer"
                  >
                    SUBMIT ANOTHER QUEUE
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
