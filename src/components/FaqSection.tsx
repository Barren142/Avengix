import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

interface FaqSectionProps {
  onContactClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'How does Avengix integrate artificial intelligence into modern web applications?',
      answer:
        'We integrate AI directly into production systems at multiple layers: client-side interaction (real-time spatial response, conversational assistance, dynamic layout adaptation), autonomous background pipelines (document processing, vector semantic search, content synthesis), and automated developer CI/CD workflows. We treat AI as an engineering primitive, not a decorative gimmick.',
      category: 'Technology',
    },
    {
      question: 'Do we retain 100% ownership of the intellectual property and code?',
      answer:
        'Yes, unconditionally. Upon completion and milestone signoff, 100% of the custom codebase, 3D assets, Figma design systems, schemas, and proprietary architectures belong exclusively to your organization. We deliver clean Git repositories with zero lock-in.',
      category: 'Ownership & Legal',
    },
    {
      question: 'What tech stack does Avengix primarily specialize in?',
      answer:
        'Our primary production stack is centered on modern TypeScript, React 19, Next.js (App Router), Three.js / WebGL for hardware-accelerated 3D, and Tailwind CSS. On the backend and AI tier, we leverage Node.js, Python, Cloud Run, Gemini models, vector databases, and edge CDN runtimes for low-latency distribution.',
      category: 'Stack',
    },
    {
      question: 'How do you guarantee data privacy and protect proprietary enterprise data?',
      answer:
        'We enforce strict zero-retention policies. When integrating LLMs, we configure enterprise API endpoints where customer prompts and data are never used to train foundation models. All environment variables, API secrets, and sensitive tokens are encapsulated behind server-side proxies and isolated environments.',
      category: 'Security',
    },
    {
      question: 'What is the typical project timeline from kickoff to launch?',
      answer:
        'Depending on scope, custom design sprints and high-impact web presences typically take 2 to 4 weeks. Complex enterprise applications with agentic workflows or real-time WebGL dashboards generally span 4 to 8 weeks. We provide clear weekly sprint milestones with zero surprises.',
      category: 'Process',
    },
    {
      question: 'Can Avengix collaborate with our existing in-house engineering team?',
      answer:
        'Absolutely. We frequently act as a high-velocity specialized force multiplier — building the flagship 3D frontend, architecting the AI pipeline, or refactoring legacy interfaces, while conducting comprehensive knowledge transfers and PR reviews with your internal engineers.',
      category: 'Collaboration',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-cyan-400" />
            <span className="font-tech text-xs tracking-[0.25em] text-cyan-400 uppercase font-semibold">
              TRANSPARENT ANSWERS
            </span>
            <span className="w-6 h-[2px] bg-cyan-400" />
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Frequently Asked <span className="text-gradient-cyan">Questions.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about partnering with Avengix, our engineering standards,
            and our commitment to technical excellence.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#060e22] border-cyan-500/40 shadow-[0_0_25px_rgba(0,180,255,0.1)]'
                    : 'bg-[#040816]/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-slate-700 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 border-cyan-400 bg-cyan-500/10' : ''
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 ${isOpen ? 'text-cyan-400' : 'text-slate-400'}`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80 pt-4 animate-fadeIn">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="font-tech text-[11px] text-cyan-400 uppercase tracking-wider">
                        Topic: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional inquiry prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#060d21] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display font-bold text-base text-white">
              Have an enterprise architecture question not covered here?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Speak directly with an Avengix lead engineer.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="px-5 py-2.5 rounded-full bg-[#0b1736] hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-tech tracking-wider uppercase font-semibold transition-all cursor-pointer whitespace-nowrap"
          >
            Direct Inquiry
          </button>
        </div>
      </div>
    </section>
  );
};
