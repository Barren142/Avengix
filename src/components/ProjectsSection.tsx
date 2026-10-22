import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Layers, Cpu, Code, Eye, X, CheckCircle } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: 'web-apps' | 'automation' | 'brand';
  categoryLabel: string;
  description: string;
  architectureHighlight: string;
  metrics: string;
  techTags: string[];
  visualAccent: string;
  fullOverview: string;
  features: string[];
}

interface ProjectsSectionProps {
  onStartProject: (initialProjectTitle?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onStartProject }) => {
  const [filter, setFilter] = useState<'all' | 'web-apps' | 'automation' | 'brand'>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'nexus-neural',
      title: 'Nexus Neural Core',
      category: 'web-apps',
      categoryLabel: 'AI Web Application',
      description:
        'A high-frequency model telemetry and observability console with real-time WebGL vector embeddings visualization.',
      architectureHighlight: 'Sub-40ms WebSocket telemetry streaming & WebGPU canvas rendering',
      metrics: 'Zero Frame Drops at 60 FPS',
      techTags: ['React 19', 'Three.js', 'WebSockets', 'Tailwind CSS', 'TypeScript'],
      visualAccent: 'from-blue-600/30 to-cyan-500/20',
      fullOverview:
        'Nexus was engineered to solve the complexity of monitoring distributed AI inference pipelines. By integrating hardware-accelerated 3D coordinate graphs with zero-latency streaming sockets, operators can visualize multi-layer neural activity in real time.',
      features: [
        'Interactive 3D vector latent space mapping',
        'Hardware-accelerated token latency histogram',
        'Predictive drift alerts and automated threshold triggers',
        'Dynamic dark-mode UI with customizable data widget tiles',
      ],
    },
    {
      id: 'synthetix-flow',
      title: 'Synthetix Autonomous Flow',
      category: 'automation',
      categoryLabel: 'Agentic Automation',
      description:
        'An enterprise orchestration engine coordinating autonomous LLM agents to execute multi-step analytical pipelines.',
      architectureHighlight: 'Directed Acyclic Graph (DAG) task engine with rollback guarantees',
      metrics: '85% Reduction in Manual Processing',
      techTags: ['Python/TS', 'Gemini API', 'LangGraph', 'Redis', 'Docker'],
      visualAccent: 'from-cyan-500/30 to-teal-500/20',
      fullOverview:
        'Synthetix Flow empowers organizations to delegate complex data aggregation, report synthesis, and system cross-referencing to autonomous agent swarms with human-in-the-loop audit gates.',
      features: [
        'Visual drag-and-drop agent workflow builder',
        'Multi-agent role specialization with self-correcting prompt loops',
        'Strict sandboxing for third-party tool execution',
        'Comprehensive audit log with cryptographic run verification',
      ],
    },
    {
      id: 'aetheria-spatial',
      title: 'Aetheria Spatial Platform',
      category: 'web-apps',
      categoryLabel: 'AI Web Application',
      description:
        'A next-generation spatial digital showroom with photorealistic 3D lighting, physics shaders, and fluid gesture control.',
      architectureHighlight: 'Progressive LOD (Level of Detail) 3D asset streaming pipeline',
      metrics: '99+ Google Lighthouse Mobile Score',
      techTags: ['WebGL', 'GLSL Shaders', 'React', 'Vite', 'Edge CDN'],
      visualAccent: 'from-indigo-600/30 to-blue-500/20',
      fullOverview:
        'Aetheria breaks past the flat confines of traditional web browsing, creating a luxury interactive universe where users interact with 3D product models rendered with real-time ambient occlusion and specular reflections directly in the browser.',
      features: [
        'Custom GLSL raymarching shader effects',
        'Adaptive geometry tessellation based on client GPU capability',
        'Instant load time under 1.2s through binary GLTF compression',
        'Universal touch & mouse momentum parallax controls',
      ],
    },
    {
      id: 'hyperion-tokens',
      title: 'Hyperion Design Token System',
      category: 'brand',
      categoryLabel: 'Brand & Design System',
      description:
        'A unified kinetic design system and visual identity engineered specifically for frontier technology startups.',
      architectureHighlight: 'Mathematical typography ratio scale and semantic color token compiler',
      metrics: '100% Consistent Cross-Platform Tokens',
      techTags: ['Figma API', 'Design Tokens', 'Tailwind', 'CSS Architecture'],
      visualAccent: 'from-slate-700/40 to-cyan-800/20',
      fullOverview:
        'Hyperion provides a comprehensive design constitution that bridges the chasm between Figma design files and production codebases. With automated token compilation, brand updates propagate to web, mobile, and documentation instantly.',
      features: [
        'Bespoke geometric typeface and mathematical spacing scale',
        'Automated CI/CD export from design tokens to CSS variables',
        'High-contrast accessible dark palette with electric cyan accents',
        'Pre-built components tested across 40+ viewports and devices',
      ],
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const handleInquireFromModal = (project: ProjectItem) => {
    onStartProject(`Custom Solution inspired by ${project.title}`);
    setActiveProject(null);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-cyan-400" />
              <span className="font-tech text-xs tracking-[0.25em] text-cyan-400 uppercase font-semibold">
                FEATURED ARCHITECTURE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Engineered for <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">Tomorrow&apos;s Standards.</span>
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[#060e22] border border-cyan-500/20 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-tech uppercase tracking-wider rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web-apps')}
              className={`px-3.5 py-1.5 text-xs font-tech uppercase tracking-wider rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'web-apps'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI Web Apps
            </button>
            <button
              onClick={() => setFilter('automation')}
              className={`px-3.5 py-1.5 text-xs font-tech uppercase tracking-wider rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'automation'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Automation
            </button>
            <button
              onClick={() => setFilter('brand')}
              className={`px-3.5 py-1.5 text-xs font-tech uppercase tracking-wider rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'brand'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Brand Systems
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative rounded-2xl bg-[#060d21]/70 border border-slate-800/80 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,180,255,0.15)] cursor-pointer backdrop-blur-md overflow-hidden"
            >
              {/* Subtle top ambient gradient line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.visualAccent} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-tech text-slate-400 mb-4">
                  <span className="text-cyan-400 uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                  <span className="text-slate-500">{project.metrics}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Architecture highlight box */}
                <div className="p-3.5 rounded-xl bg-[#040816] border border-slate-800/80 mb-6">
                  <span className="block text-[11px] font-tech text-cyan-400/90 uppercase tracking-wider mb-1">
                    System Architecture
                  </span>
                  <p className="text-xs text-slate-300 font-mono">
                    {project.architectureHighlight}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Tech Tags & Explore Link */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techTags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-800/60 text-[11px] text-slate-300 font-tech"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.techTags.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[11px] text-slate-500 font-tech">
                      +{project.techTags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-tech text-cyan-400 group-hover:text-cyan-300 font-medium tracking-wider uppercase">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-3xl bg-[#071024] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/20 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Overline */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-tech text-xs text-cyan-400 uppercase tracking-widest">
                {activeProject.categoryLabel}
              </span>
              <span className="text-slate-600">·</span>
              <span className="font-tech text-xs text-slate-400">{activeProject.metrics}</span>
            </div>

            {/* Title */}
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
              {activeProject.title}
            </h3>

            {/* Overview */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {activeProject.fullOverview}
            </p>

            {/* Architecture Highlights */}
            <div className="p-4 rounded-xl bg-[#040816] border border-cyan-500/20 mb-6">
              <h4 className="text-xs font-tech uppercase text-cyan-300 tracking-wider mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                Engineering Specification
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 font-mono">
                {activeProject.architectureHighlight}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-xs font-tech uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                Key Architectural Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-tech uppercase tracking-wider text-slate-400 mb-2">
                Full Tech Implementation
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.techTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded bg-[#0b1736] border border-cyan-500/20 text-xs text-cyan-200 font-tech"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => handleInquireFromModal(activeProject)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs tracking-wider uppercase shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Similar Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
