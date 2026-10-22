import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, Check, Clock, Users, Cpu } from 'lucide-react';

interface ProjectEstimatorProps {
  onTransferScope: (summary: string, budgetRange: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onTransferScope }) => {
  const [projectType, setProjectType] = useState<string>('ai-web');
  const [aiDepth, setAiDepth] = useState<string>('agentic');
  const [timelineSpeed, setTimelineSpeed] = useState<string>('standard');

  const projectTypes = [
    {
      id: 'ai-web',
      name: 'Flagship AI Web App',
      baseWeeks: '3–4',
      budget: '$5,000 – $12,000',
      description: 'Cinematic React/Next.js frontend with 3D WebGL and smart AI capabilities.',
    },
    {
      id: 'automation',
      name: 'Autonomous Agent Engine',
      baseWeeks: '4–6',
      budget: '$8,000 – $18,000',
      description: 'Multi-agent orchestration pipelines, document parsing, and database automation.',
    },
    {
      id: 'spatial',
      name: 'Spatial 3D & WebGL Platform',
      baseWeeks: '4–5',
      budget: '$7,000 – $15,000',
      description: 'High-end interactive 3D showrooms with custom shaders and fluid camera physics.',
    },
    {
      id: 'full-brand',
      name: 'Complete Brand & Digital Ecosystem',
      baseWeeks: '5–8',
      budget: '$12,000 – $25,000+',
      description: 'End-to-end identity, typography tokens, custom web app, and AI infrastructure.',
    },
  ];

  const aiDepthOptions = [
    { id: 'light', name: 'Assistive AI', detail: 'Smart search, embeddings, client-side reasoning' },
    { id: 'agentic', name: 'Agentic Workflows', detail: 'Autonomous multi-step execution & tool calling' },
    { id: 'custom', name: 'Fine-Tuned Models', detail: 'Domain-specific adapters & custom retrieval' },
  ];

  const timelineOptions = [
    { id: 'express', name: 'Express Sprint', detail: 'Dedicated dual-engineer acceleration' },
    { id: 'standard', name: 'Standard Delivery', detail: 'Carefully staged agile weekly milestones' },
    { id: 'multi-phase', name: 'Enterprise Phased', detail: 'Multi-quarter roadmap with staged rollouts' },
  ];

  const currentType = projectTypes.find((p) => p.id === projectType) || projectTypes[0];

  const handleApplyToContact = () => {
    const summary = `Selected Architecture: ${currentType.name}
AI Complexity: ${aiDepthOptions.find((a) => a.id === aiDepth)?.name}
Timeline Mode: ${timelineOptions.find((t) => t.id === timelineSpeed)?.name}
Estimated Duration: ${currentType.baseWeeks} weeks`;

    onTransferScope(summary, currentType.budget);
  };

  return (
    <section className="relative py-20 bg-[#040817] border-y border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span className="font-tech text-xs tracking-[0.25em] text-cyan-400 uppercase font-semibold">
              INTERACTIVE SCOPE CONFIGURATOR
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Configure Your <span className="text-gradient-cyan">System Scope.</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Select your architectural parameters to calculate recommended staffing, timeline,
            and estimated delivery investment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-tech text-cyan-300 uppercase tracking-wider mb-3">
                01. Core Architecture Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((pt) => {
                  const isSelected = projectType === pt.id;
                  return (
                    <button
                      key={pt.id}
                      onClick={() => setProjectType(pt.id)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#091838] border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                          : 'bg-[#060e22] border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-display font-bold text-sm text-white">{pt.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {pt.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: AI Depth */}
            <div>
              <label className="block text-xs font-tech text-cyan-300 uppercase tracking-wider mb-3">
                02. AI Capability Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {aiDepthOptions.map((opt) => {
                  const isSelected = aiDepth === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setAiDepth(opt.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#091838] border-cyan-400 text-white shadow-sm'
                          : 'bg-[#060e22] border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span className="font-tech text-xs font-bold block mb-1">{opt.name}</span>
                      <span className="text-[11px] text-slate-400 leading-tight block">
                        {opt.detail}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline Speed */}
            <div>
              <label className="block text-xs font-tech text-cyan-300 uppercase tracking-wider mb-3">
                03. Target Velocity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelineOptions.map((opt) => {
                  const isSelected = timelineSpeed === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setTimelineSpeed(opt.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#091838] border-cyan-400 text-white shadow-sm'
                          : 'bg-[#060e22] border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span className="font-tech text-xs font-bold block mb-1">{opt.name}</span>
                      <span className="text-[11px] text-slate-400 leading-tight block">
                        {opt.detail}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#060f26] border border-cyan-500/30 rounded-2xl p-6 sm:p-7 shadow-xl shadow-cyan-950/20">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="font-tech text-xs uppercase tracking-wider text-cyan-400">
                CALCULATED BLUEPRINT
              </span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            <div className="py-5 space-y-4">
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">Recommended Architecture</span>
                <span className="font-display font-bold text-lg text-white">
                  {currentType.name}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-[#030714] border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Estimated Sprint</span>
                  </div>
                  <span className="font-tech font-bold text-sm text-white">
                    {currentType.baseWeeks} Weeks
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#030714] border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Team Matrix</span>
                  </div>
                  <span className="font-tech font-bold text-sm text-white">
                    3–4 Specialists
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 to-cyan-950/40 border border-cyan-500/30">
                <span className="text-xs text-cyan-300 block mb-1 font-tech uppercase tracking-wider">
                  Typical Engagement Investment
                </span>
                <span className="text-2xl font-bold font-tech text-white">
                  {currentType.budget}
                </span>
                <span className="block text-[11px] text-slate-400 mt-1">
                  Fixed milestone-based scope · No surprise retainers
                </span>
              </div>
            </div>

            <button
              onClick={handleApplyToContact}
              className="w-full mt-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Transfer Scope to Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
