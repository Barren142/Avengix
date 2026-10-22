import React, { useState } from 'react';
import { Terminal, Cpu, Zap, Shield, Sparkles, Check, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onStartProject: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject }) => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'stack' | 'standards'>('philosophy');

  const pillars = [
    {
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      title: 'Precision Architecture',
      description:
        'We eliminate template bloat in favor of edge runtimes, modular micro-components, and sub-100ms response targets.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      title: 'Spatial & Kinetic Design',
      description:
        'Fluid WebGL scenes, mathematical typography scales, and restrained physics-based micro-interactions that captivate users.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: 'Autonomous Intelligence',
      description:
        'Deep integration with contemporary AI models, continuous learning data pipelines, and agentic task orchestration.',
    },
    {
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      title: 'Zero-Trust Security',
      description:
        'Client-side state sanitization, encrypted environment pipelines, and strict intellectual property encapsulation.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#02050e] overflow-hidden border-t border-slate-900">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-cyan-400" />
            <span className="font-tech text-xs tracking-[0.25em] text-cyan-400 uppercase font-semibold">
              ABOUT AVENGIX
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Where Human Ingenuity <br />
            <span className="text-gradient-cyan">Meets Autonomous Intelligence.</span>
          </h2>
          <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            Conventional web development is plagued by bloated boilerplate, repetitive templates, and
            sluggish interfaces. Avengix was founded to redefine the digital frontier — engineering
            digital platforms that blend high-art visual craft with cutting-edge AI architectures.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Tabbed Terminal / Inspector */}
          <div className="lg:col-span-7 bg-[#050b1a] border border-cyan-500/25 rounded-2xl overflow-hidden shadow-xl shadow-cyan-950/30">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#071024] border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-tech text-xs text-slate-400">avengix-manifest.config.ts</span>
              </div>
              <div className="flex items-center gap-1 font-tech text-[11px] text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>v3.8-ENTERPRISE</span>
              </div>
            </div>

            {/* Interactive Tabs */}
            <div className="flex border-b border-slate-800 bg-[#040816] px-4 pt-2 gap-2">
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`px-3 py-1.5 text-xs font-tech rounded-t transition-colors ${
                  activeTab === 'philosophy'
                    ? 'bg-[#050b1a] text-cyan-400 border-t-2 border-cyan-400 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                // Core Philosophy
              </button>
              <button
                onClick={() => setActiveTab('stack')}
                className={`px-3 py-1.5 text-xs font-tech rounded-t transition-colors ${
                  activeTab === 'stack'
                    ? 'bg-[#050b1a] text-cyan-400 border-t-2 border-cyan-400 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                // Tech Matrix
              </button>
              <button
                onClick={() => setActiveTab('standards')}
                className={`px-3 py-1.5 text-xs font-tech rounded-t transition-colors ${
                  activeTab === 'standards'
                    ? 'bg-[#050b1a] text-cyan-400 border-t-2 border-cyan-400 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                // Engineering KPIs
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 min-h-[280px]">
              {activeTab === 'philosophy' && (
                <div className="space-y-4 font-sans">
                  <div className="flex items-center gap-2 font-tech text-cyan-400 text-xs">
                    <span>STATUS: ACTIVE DIRECTIVE</span>
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">
                    Pioneering Bespoke Digital Reality
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Every digital product we engineer is crafted from scratch. We reject prefabricated
                    site builders and uninspired corporate styles. Instead, we treat your web presence
                    as an interactive digital headquarters that commands attention, builds unwavering trust,
                    and converts users effortlessly.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-2.5 rounded bg-[#09152e] border border-cyan-500/20 text-slate-200">
                      <span className="text-cyan-400 font-bold block mb-1">✓ No Generic Templates</span>
                      100% custom UI tokens and component architectures.
                    </div>
                    <div className="p-2.5 rounded bg-[#09152e] border border-cyan-500/20 text-slate-200">
                      <span className="text-cyan-400 font-bold block mb-1">✓ Real AI Acceleration</span>
                      Direct API pipelines and intelligent automation layers.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'stack' && (
                <div className="space-y-3 font-tech text-xs sm:text-sm">
                  <div className="text-cyan-400 font-bold">export const AVENGIX_CORE_STACK = &#123;</div>
                  <div className="pl-4 space-y-1 text-slate-300">
                    <div>
                      <span className="text-purple-400">frontend:</span> ['React 19', 'Next.js App Router', 'TypeScript', 'Tailwind CSS'],
                    </div>
                    <div>
                      <span className="text-purple-400">graphics_3d:</span> ['Three.js', 'WebGL', 'GLSL Shaders', 'Motion'],
                    </div>
                    <div>
                      <span className="text-purple-400">ai_orchestration:</span> ['Gemini API', 'LangGraph', 'Vector Embeddings'],
                    </div>
                    <div>
                      <span className="text-purple-400">infrastructure:</span> ['Edge CDN', 'Cloud Run', 'Vercel Edge', 'Docker'],
                    </div>
                    <div>
                      <span className="text-purple-400">telemetry:</span> ['Sub-100ms TTFB', 'Zero Memory Leaks', 'WCAG AA Validated']
                    </div>
                  </div>
                  <div className="text-cyan-400 font-bold">&#125; as const;</div>
                </div>
              )}

              {activeTab === 'standards' && (
                <div className="space-y-4 font-sans">
                  <h4 className="text-sm font-tech uppercase text-cyan-400">
                    Measured Technical Benchmarks
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-[#061026] rounded-xl border border-slate-800">
                      <span className="text-2xl font-bold text-white font-tech">99.98%</span>
                      <span className="block text-xs text-slate-400 mt-1">Uptime SLA Standard</span>
                    </div>
                    <div className="p-3 bg-[#061026] rounded-xl border border-slate-800">
                      <span className="text-2xl font-bold text-cyan-400 font-tech">&lt; 85ms</span>
                      <span className="block text-xs text-slate-400 mt-1">Global Edge TTFB</span>
                    </div>
                    <div className="p-3 bg-[#061026] rounded-xl border border-slate-800">
                      <span className="text-2xl font-bold text-white font-tech">100%</span>
                      <span className="block text-xs text-slate-400 mt-1">Strict Type Safety</span>
                    </div>
                    <div className="p-3 bg-[#061026] rounded-xl border border-slate-800">
                      <span className="text-2xl font-bold text-cyan-400 font-tech">0%</span>
                      <span className="block text-xs text-slate-400 mt-1">Third-Party Bloatware</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#060d21]/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0b1b3b] border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-cyan-400 transition-colors">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <button
                onClick={onStartProject}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#0070f3]/20 to-[#00f0ff]/20 hover:from-[#0070f3]/30 hover:to-[#00f0ff]/30 border border-cyan-500/40 text-cyan-200 font-tech text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Partner with Avengix Engineers</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
