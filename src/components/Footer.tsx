import React, { useState } from 'react';
import { ArrowUp, ArrowRight, CheckCircle2, Shield, FileText, X } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#01030a] text-slate-400 border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1: Brand & Narrative (4 cols) */}
          <div className="lg:col-span-4">
            <button
              onClick={() => onNavigate('hero')}
              className="flex items-center gap-3 group text-left cursor-pointer mb-4"
              aria-label="Avengix Home"
            >
              <div className="relative w-7 h-7 flex items-center justify-center">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                >
                  <path
                    d="M18 4L32 29H4L18 4Z"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <path d="M18 12L25 25H11L18 12Z" fill="#00f0ff" opacity="0.8" />
                  <path d="M18 15L23 24H13L18 15Z" stroke="#ffffff" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-xl tracking-[0.22em] text-white">
                AVENGIX
              </span>
            </button>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              We create intelligent digital solutions with the power of AI, modern design and
              seamless web experiences — helping brands grow, adapt and stay ahead.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#050e24] border border-cyan-500/20 text-slate-300 text-[11px] font-tech">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ALL SYSTEMS OPERATIONAL</span>
              <span className="text-slate-600">·</span>
              <span className="text-cyan-400">EDGE 14MS</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-tech text-white uppercase tracking-wider mb-4 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {['Home', 'About', 'Services', 'Projects', 'Process', 'FAQ', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => onNavigate(item.toLowerCase())}
                      className="text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 3: Capabilities (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-tech text-white uppercase tracking-wider mb-4 font-bold">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                'AI Web Development',
                'UI/UX Design Systems',
                'Autonomous Automation',
                'Brand Identity & Strategy',
                'Three.js & WebGL 3D',
                'Sub-100ms Performance Profiling',
              ].map((cap, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer text-left"
                  >
                    {cap}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Dispatch Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-tech text-white uppercase tracking-wider mb-4 font-bold">
              Neural Dispatch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Receive bi-weekly briefs on frontier web architectures, AI workflows, and visual design
              systems.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="engineer@company.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#040816] border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded text-xs transition-colors cursor-pointer flex items-center justify-center"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="block text-[10px] text-slate-600 font-tech">
                  No promotional spam. Zero tracking cookies.
                </span>
              </form>
            ) : (
              <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Subscribed to Neural Dispatch.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Avengix Technologies. All rights reserved.</span>
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-slate-300 transition-colors underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setShowTermsModal(true)}
              className="hover:text-slate-300 transition-colors underline cursor-pointer"
            >
              Terms of Service
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer px-3 py-1.5 rounded-full border border-slate-800 hover:border-cyan-500/40 bg-[#040816]"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#071024] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-3 text-cyan-400">
              <Shield className="w-5 h-5" />
              <h3 className="font-display font-bold text-lg text-white">Privacy Constitution</h3>
            </div>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed font-sans">
              <p>
                Avengix Technologies operates with strict zero-surveillance and data minimization
                principles.
              </p>
              <p>
                <strong>1. Client Confidentiality:</strong> All technical schemas, proprietary
                algorithms, and repository assets are protected under mutual NDA. We do not expose
                client repositories or data to public models.
              </p>
              <p>
                <strong>2. Zero Model Training:</strong> Any AI processing executed during projects
                leverages private API tier instances explicitly configured with zero retention and
                zero model training.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#071024] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-3 text-cyan-400">
              <FileText className="w-5 h-5" />
              <h3 className="font-display font-bold text-lg text-white">Terms of Engagement</h3>
            </div>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed font-sans">
              <p>
                Avengix Technologies delivers digital design, engineering, and AI automation
                services under structured milestone deliverables.
              </p>
              <p>
                <strong>1. 100% IP Ownership:</strong> Upon completion and final milestone
                settlement, 100% of custom frontend code, styling, and graphics belong exclusively
                to the client.
              </p>
              <p>
                <strong>2. Code Integrity:</strong> We warrant that all custom code is verified
                against contemporary security standards and WCAG accessibility baselines.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
