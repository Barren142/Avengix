import React, { useState } from 'react';
import { Search, Compass, Code2, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  duration: string;
  description: string;
  activities: string[];
  output: string;
}

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery & AI Architecture',
      subtitle: 'Mapping requirements & selecting optimal AI runtimes',
      icon: <Search className="w-5 h-5 text-cyan-400" />,
      duration: 'Week 1',
      description:
        'We analyze your core business objectives, assess technical feasibility, and design the fundamental system architecture. We define which workflows require client-side AI, serverless inference, or edge caching.',
      activities: [
        'Model selection (Gemini 2.5 Flash, specialized embeddings)',
        'Database & state schema specification',
        'Latency benchmarks and edge CDN routing plan',
        'Detailed architectural roadmap & milestone schedule',
      ],
      output: 'Comprehensive Technical Blueprint & Wireframe Schema',
    },
    {
      number: '02',
      title: 'Spatial UI/UX & Kinetic Prototyping',
      subtitle: 'Designing cinematic interfaces with mathematical discipline',
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      duration: 'Week 2',
      description:
        'Our design team crafts bespoke visual languages that transcend generic trends. Every typography scale, color token, and spatial hierarchy is calibrated for visual authority and effortless human usability.',
      activities: [
        'High-fidelity interactive prototype creation in Figma',
        'Kinetic physics, transitions, and 3D scene staging',
        'Design tokens compilation (colors, typography, spacing)',
        'WCAG AA contrast & mobile responsiveness verification',
      ],
      output: 'Production-Ready Interactive Design System',
    },
    {
      number: '03',
      title: 'Intelligent Full-Stack Engineering',
      subtitle: 'Type-safe React, Next.js, and neural integration',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      duration: 'Weeks 3–4',
      description:
        'We implement the validated design in pristine, modular TypeScript. Our engineers wire up real API endpoints, client-side WebGL canvas renderers, and resilient error recovery mechanisms.',
      activities: [
        'Clean React 19 component hierarchy with zero bloat',
        'WebGL and Three.js hardware-accelerated interactive elements',
        'Secure API proxy layers and streaming webhook handlers',
        'Unit, integration, and cross-browser regression testing',
      ],
      output: 'High-Performance Fully Functional Codebase',
    },
    {
      number: '04',
      title: 'Optimization & Global Edge Launch',
      subtitle: 'Stress-testing, SEO hardening, and CI/CD deployment',
      icon: <Rocket className="w-5 h-5 text-cyan-400" />,
      duration: 'Week 5',
      description:
        'Before going live, the application undergoes rigorous performance profiling to ensure sub-100ms load times globally. We execute automated security sweeps and deploy to resilient multi-region infrastructure.',
      activities: [
        'Google Lighthouse 98+ score optimization across all devices',
        'Automated CI/CD build scripts and containerization',
        'Domain DNS, SSL, and HTTP/3 edge routing configuration',
        'Full post-launch handover and technical documentation',
      ],
      output: 'Live Scaled Production Environment & Documentation',
    },
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#02050f] overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-cyan-400" />
            <span className="font-tech text-xs tracking-[0.25em] text-cyan-400 uppercase font-semibold">
              EXECUTION PIPELINE
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            From Theoretical Concept <br />
            <span className="text-gradient-cyan">to Scaled Production.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Our structured 4-phase agile delivery model eliminates guesswork and delays, guaranteeing
            transparent velocity from initial wireframe to enterprise deployment.
          </p>
        </div>

        {/* 4-Step Interactive Timeline Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#091738] border-cyan-400/80 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                    : 'bg-[#050b1a] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-tech text-lg font-bold ${
                      isActive ? 'text-cyan-400' : 'text-slate-500'
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="text-[11px] font-tech text-slate-400">{step.duration}</span>
                </div>
                <h4
                  className={`text-xs sm:text-sm font-semibold truncate ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {step.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed View Card */}
        <div className="bg-[#050c1e] border border-cyan-500/30 rounded-2xl p-6 sm:p-10 shadow-xl shadow-cyan-950/20 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 cols */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center">
                  {steps[activeStep].icon}
                </div>
                <div>
                  <span className="font-tech text-xs text-cyan-400 uppercase tracking-wider">
                    PHASE {steps[activeStep].number} · {steps[activeStep].duration}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-5">
                {steps[activeStep].description}
              </p>

              {/* Key Deliverable Box */}
              <div className="p-4 rounded-xl bg-[#040816] border border-cyan-500/20">
                <span className="block text-[11px] font-tech text-cyan-400 uppercase tracking-wider mb-1">
                  Guaranteed Phase Output
                </span>
                <span className="text-sm font-semibold text-white">
                  {steps[activeStep].output}
                </span>
              </div>
            </div>

            {/* Right 5 cols: Step Execution Checklist */}
            <div className="lg:col-span-5 bg-[#030612] p-6 rounded-xl border border-slate-800">
              <h4 className="text-xs font-tech text-slate-400 uppercase tracking-wider mb-4">
                Milestone Execution Criteria
              </h4>
              <ul className="space-y-3">
                {steps[activeStep].activities.map((act, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
