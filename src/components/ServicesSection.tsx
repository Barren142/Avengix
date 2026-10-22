import React, { useState } from 'react';
import {
  Code2,
  PenTool,
  Cpu,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  X,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
  estimatedTimeline: string;
  metric: string;
}

interface ServicesSectionProps {
  onSelectServiceForProject: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForProject,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const services: ServiceDetail[] = [
    {
      id: 'web-dev',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: 'AI Web Development',
      shortDesc: 'Modern, responsive websites built with AI-assisted development for faster results.',
      fullDesc:
        'We engineer hyper-optimized, high-performance web applications fusing React, Next.js, and edge runtimes with intelligent AI endpoints. Every millisecond of latency is eradicated, delivering cinematic visual presence and instant page loads.',
      deliverables: [
        'Custom React & Next.js full-stack architecture',
        'Sub-100ms global edge delivery & CDN routing',
        'Intelligent client-side state & API orchestration',
        '98+ Lighthouse scores across performance and accessibility',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'WebGL'],
      estimatedTimeline: '2–4 Weeks',
      metric: '3.8x Faster Load Times',
    },
    {
      id: 'ui-ux',
      icon: <PenTool className="w-5 h-5 text-cyan-400" />,
      title: 'UI/UX Design',
      shortDesc: 'Clean interfaces, better experiences, and designs that connect.',
      fullDesc:
        'We craft immersive, friction-free design languages tailored for high-growth tech companies. We eliminate generic cookie-cutter templates in favor of kinetic typography, balanced spatial geometry, and tactile micro-interactions.',
      deliverables: [
        'Complete high-fidelity design systems & tokens',
        'Interactive Figma prototypes with kinetic physics',
        'User journey optimization & conversion wireframing',
        'Responsive mobile-first component libraries',
      ],
      techStack: ['Figma', 'Tokens Studio', 'Motion Design', 'Spatial Geometry', 'User Testing'],
      estimatedTimeline: '2–3 Weeks',
      metric: '42% Higher Conversion',
    },
    {
      id: 'ai-automation',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: 'AI Automation',
      shortDesc: 'Streamline your workflows and unlock new possibilities with AI tools.',
      fullDesc:
        'Transform manual operational bottlenecks into autonomous execution pipelines. From multi-agent orchestration to intelligent document processing and custom vector search, we turn AI from a buzzword into measurable ROI.',
      deliverables: [
        'Autonomous agentic workflow pipelines',
        'Custom LLM integration & prompt chain orchestration',
        'Intelligent webhook & CRM database synchronization',
        'Automated enterprise analytics & data synthesis',
      ],
      techStack: ['Gemini API', 'LangGraph', 'Python/TS', 'REST Webhooks', 'Vector DB'],
      estimatedTimeline: '3–5 Weeks',
      metric: '70% Workflow Time Saved',
    },
    {
      id: 'brand-identity',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      title: 'Brand Identity',
      shortDesc: 'Build a strong brand with visuals, messaging and strategy that stands out.',
      fullDesc:
        'Stand apart in a crowded digital landscape with an unforgettable visual identity. We craft logos, typography standards, color palettes, and brand guidelines that exude futuristic authority and enduring confidence.',
      deliverables: [
        'Geometric vector logo suite and brand marks',
        'Futuristic color palettes & dark-mode token scales',
        'Typography pairings and editorial style guide',
        'Social media & marketing asset templates',
      ],
      techStack: ['Vector Systems', 'Brand Guidelines', 'Typography Scales', 'Digital Assets'],
      estimatedTimeline: '2–3 Weeks',
      metric: '100% Bespoke Identity',
    },
  ];

  const handleInquireFromModal = (service: ServiceDetail) => {
    onSelectServiceForProject(service.title);
    setSelectedService(null);
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-cyan-400" />
              <span className="font-tech text-xs tracking-[0.25em] text-cyan-400 uppercase font-semibold">
                OUR SERVICES
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Smart Solutions for <br className="hidden sm:inline" />
              <span className="text-gradient-cyan drop-shadow-[0_0_25px_rgba(0,240,255,0.3)]">
                a Digital Tomorrow.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From stunning websites to intelligent automation, we build digital experiences that
              are fast, functional and future-ready.
            </p>
          </div>
        </div>

        {/* 5-Column Responsive Services Grid (Matching Screenshot layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {services.map((service, index) => {
            const isActive = activeCardIndex === index;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCardIndex(index)}
                className={`relative group rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#09152e]/80 border-cyan-400/40 shadow-[0_0_30px_rgba(0,180,255,0.18)]'
                    : 'bg-[#050c1e]/70 border-slate-800/80 hover:border-cyan-500/30'
                } border backdrop-blur-md`}
                onClick={() => setSelectedService(service)}
              >
                <div>
                  {/* Icon Container with square border */}
                  <div className="w-11 h-11 rounded-xl bg-[#0b1b3b] border border-cyan-500/30 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-cyan-400 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Row: Detail Trigger */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 mt-auto">
                  <span className="text-[11px] font-tech text-cyan-400/80 uppercase tracking-wider group-hover:text-cyan-300">
                    Explore Details
                  </span>
                  <div className="w-8 h-8 rounded-full border border-slate-700/80 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 flex items-center justify-center transition-all">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* 5th Card: MORE SERVICES Crevasse / Portal Visual Card */}
          <div
            onClick={() => onSelectServiceForProject('Custom AI Architecture & Exploration')}
            className="relative group rounded-2xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400 bg-[#060e22] flex flex-col justify-end p-6 cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,200,255,0.25)] min-h-[260px]"
          >
            {/* Background art depicting futuristic blue ravine */}
            <div className="absolute inset-0 z-0">
              <img
                src="/assets/aistudio/Avengix__Beyond_the_Ordinary_f0c6f7fe.png"
                alt="Avengix futuristic AI exploration background"
                className="w-full h-full object-cover object-bottom opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback gradient if path differences occur
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-[#040816]/70 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4 text-cyan-300" />
              </div>
              <h4 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                Autonomous Ecosystems
              </h4>
              <p className="text-slate-300 text-xs mt-1 mb-4 leading-snug">
                Custom fine-tuning, WebGL shaders & enterprise infrastructure.
              </p>
              <div className="flex items-center gap-2 text-xs font-tech font-bold text-cyan-400 tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                <span>MORE SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pagination / Progress Counter (As in reference image) */}
        <div className="mt-12 flex items-center justify-between pt-6 border-t border-slate-900">
          <div className="flex items-center gap-4 text-xs font-tech text-slate-400">
            <span className="text-cyan-400 font-bold">01</span>
            <div className="w-20 sm:w-28 h-[2px] bg-slate-800 relative overflow-hidden rounded-full">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                style={{ width: `${((activeCardIndex + 1) / 4) * 100}%` }}
              />
            </div>
            <span>04</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400">
            <span>Click any service card for architectural specifications</span>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-2xl bg-[#081229] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/20 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center">
                {selectedService.icon}
              </div>
              <div>
                <span className="font-tech text-xs text-cyan-400 uppercase tracking-widest">
                  SERVICE ARCHITECTURE
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-tech uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                Key Deliverables
              </h4>
              <ul className="space-y-2">
                {selectedService.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack & Timeline */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#040817] border border-slate-800 mb-6">
              <div>
                <span className="block text-[11px] font-tech text-slate-400 uppercase">
                  Estimated Timeline
                </span>
                <span className="text-sm font-semibold text-white">
                  {selectedService.estimatedTimeline}
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-tech text-slate-400 uppercase">
                  Key Impact
                </span>
                <span className="text-sm font-semibold text-cyan-400">
                  {selectedService.metric}
                </span>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="mb-6">
              <span className="block text-[11px] font-tech text-slate-400 uppercase mb-2">
                Technologies & Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedService.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-tech"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => handleInquireFromModal(selectedService)}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs tracking-wider uppercase shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Select for Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
