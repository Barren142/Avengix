import React, { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialMessage?: string;
  initialBudget?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  initialMessage = '',
  initialBudget = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI Web Development',
    budget: '$10k – $25k',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Sync initial values when passed
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, projectType: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  useEffect(() => {
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budget: initialBudget }));
    }
  }, [initialBudget]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your name or organization (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid work email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please share a brief summary of your project requirements (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Set submitted state with summary
    setIsSubmitted(true);
  };

  const agencyEmail = 'contact@avengix.tech';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(agencyEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopySummary = () => {
    const text = `Avengix Project Inquiry:
Client Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}
Details:
${formData.message}`;

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const mailtoUrl = `mailto:${agencyEmail}?subject=${encodeURIComponent(
    `Avengix Project Inquiry: ${formData.projectType} - ${formData.name}`
  )}&body=${encodeURIComponent(
    `Hello Avengix Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nProject Scope:\n${formData.message}\n`
  )}`;

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#02040c] overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-blue-600/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Agency Channels (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-cyan-400" />
              <span className="font-tech text-xs tracking-[0.25em] text-cyan-400 uppercase font-semibold">
                INITIATE COLLABORATION
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Let&apos;s Build Something <br />
              <span className="text-gradient-cyan">Extraordinary.</span>
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you are architecting a ground-up AI platform or upgrading an existing flagship
              product, our engineers are ready to elevate your vision.
            </p>

            {/* Direct Channel Cards */}
            <div className="mt-8 space-y-4">
              {/* Email channel with copy button */}
              <div className="p-4 rounded-xl bg-[#060e22] border border-cyan-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-tech text-slate-400 uppercase">
                      Direct Inquiries
                    </span>
                    <a
                      href={`mailto:${agencyEmail}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {agencyEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Response SLA */}
              <div className="p-4 rounded-xl bg-[#060e22] border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0b1736] border border-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="block text-[11px] font-tech text-slate-400 uppercase">
                    Guaranteed SLA Response
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Under 12 Hours · Direct Senior Partner Reply
                  </span>
                </div>
              </div>

              {/* Global Reach */}
              <div className="p-4 rounded-xl bg-[#060e22] border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0b1736] border border-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="block text-[11px] font-tech text-slate-400 uppercase">
                    Headquarters & Deployment
                  </span>
                  <span className="text-sm font-semibold text-white">
                    San Francisco, CA · Distributed Global Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Project Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#050b1a] border border-cyan-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl shadow-cyan-950/20 backdrop-blur-md">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="font-tech text-xs text-cyan-400 uppercase tracking-wider">
                    SPECIFICATION INTAKE
                  </span>
                  <span className="text-[11px] text-slate-500 font-tech">STEP 1 OF 1</span>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name / Org <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Elena Vance, Synthetix AI"
                      className={`w-full px-4 py-3 rounded-xl bg-[#030612] border ${
                        errors.name ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      } text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-tech">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1.5">
                      Work Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="elena@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#030612] border ${
                        errors.email ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                      } text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-tech">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Category & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1.5">
                      Primary Service
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#030612] border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    >
                      <option value="AI Web Development">AI Web Development</option>
                      <option value="UI/UX Design">UI/UX Design & Systems</option>
                      <option value="AI Automation">AI Automation & Agents</option>
                      <option value="Brand Identity">Brand Identity & Strategy</option>
                      <option value="Full Digital Ecosystem">Full Digital Ecosystem</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#030612] border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    >
                      <option value="$5k – $10k">$5,000 – $10,000</option>
                      <option value="$10k – $25k">$10,000 – $25,000</option>
                      <option value="$25k – $50k">$25,000 – $50,000</option>
                      <option value="$50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message / Brief */}
                <div>
                  <label className="block text-xs font-tech text-slate-300 uppercase tracking-wider mb-1.5">
                    Project Overview & Objectives <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Describe what you want to build, current technical challenges, or target launch date..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#030612] border ${
                      errors.message ? 'border-red-500' : 'border-slate-800 focus:border-cyan-400'
                    } text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-tech">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm tracking-wider uppercase shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.99]"
                  >
                    <span>Submit Project Specification</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-3 font-tech">
                    Zero spam guaranteed. Strict non-disclosure agreements honored.
                  </p>
                </div>
              </form>
            ) : (
              /* Success / Prepared Dispatch State */
              <div className="text-center py-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white mb-2">
                  Project Specification Generated!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <strong className="text-cyan-300">{formData.name}</strong>. Your project
                  specification has been prepared for dispatch directly to Avengix leadership.
                </p>

                {/* Dispatch Options */}
                <div className="space-y-3 max-w-md mx-auto mb-6">
                  <a
                    href={mailtoUrl}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 hover:brightness-110 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open in Email Client to Send</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="w-full py-3 px-6 rounded-xl bg-[#09152e] hover:bg-[#0d1f3d] border border-cyan-500/30 text-cyan-200 font-tech text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copiedSummary ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-cyan-400" />
                        <span>Copy Formatted Brief</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      projectType: 'AI Web Development',
                      budget: '$10k – $25k',
                      message: '',
                    });
                  }}
                  className="text-xs text-slate-500 hover:text-slate-300 underline font-tech cursor-pointer"
                >
                  Create another inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
