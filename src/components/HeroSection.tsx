import React from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { AiCore3D } from './AiCore3D.tsx';

interface HeroSectionProps {
  onExploreServices: () => void;
  onStartProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onStartProject,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-radial from-[#081229] via-[#040816] to-[#020409]"
    >
      {/* Background cyber grid & planetary atmospheric lighting */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[600px]">
          {/* Left Column: Headlines & Actions (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left pt-6 lg:pt-0">
            {/* Overline Tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-cyan-400" />
              <span className="font-tech text-xs sm:text-sm tracking-[0.25em] text-cyan-400 font-semibold uppercase">
                AI-POWERED DIGITAL AGENCY
              </span>
            </div>

            {/* Staggered Animated Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.02] text-white">
              <span className="inline-block hover:text-slate-100 transition-colors">
                BUILD
              </span>{' '}
              <span className="inline-block hover:text-slate-100 transition-colors">
                BEYOND
              </span>
              <br />
              <span className="inline-block hover:text-slate-100 transition-colors">
                THE
              </span>{' '}
              <span className="inline-block text-gradient-cyan drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
                ORDINARY.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-slate-300 max-w-xl font-normal leading-relaxed">
              We create intelligent digital solutions with the power of AI,
              modern design and seamless web experiences — helping brands grow,
              adapt and stay ahead.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Primary Explore Services Button */}
              <button
                onClick={onExploreServices}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0070f3] to-[#00c6ff] text-white font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(0,180,255,0.45)] hover:shadow-[0_0_35px_rgba(0,220,255,0.65)] hover:brightness-110 transition-all duration-300 cursor-pointer active:scale-95"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Secondary Start a Project Button */}
              <button
                onClick={onStartProject}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#081226]/80 hover:bg-[#0d1f3d] text-slate-200 hover:text-white font-medium text-sm tracking-wide border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm cursor-pointer active:scale-95 shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-cyan-400" />
              </button>
            </div>
          </div>

          {/* Right Column: 3D AI Core Centerpiece & Floating Widgets (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Top Right Micro-Typography (as seen in visual reference) */}
            <div className="absolute -top-10 sm:-top-8 right-2 sm:right-6 hidden sm:block text-right pointer-events-none z-20">
              <div className="font-tech text-[11px] tracking-[0.25em] text-slate-400/90 leading-relaxed uppercase">
                <span className="block text-slate-300 font-medium">IDEAS</span>
                <span className="block text-cyan-400 my-0.5">+</span>
                <span className="block text-slate-300 font-medium">TECHNOLOGY</span>
                <span className="block text-cyan-400 my-0.5">=</span>
                <span className="block text-white font-bold tracking-[0.3em]">IMPACT</span>
              </div>
            </div>

            {/* 3D Core Viewport */}
            <div className="w-full max-w-[540px] aspect-square relative z-10">
              <AiCore3D />
            </div>

            {/* Bottom Right Floating Vision Glass Card (as in screenshot) */}
            <button
              onClick={onStartProject}
              className="absolute -bottom-4 right-0 sm:right-2 z-20 max-w-[240px] bg-[#091326]/85 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400 p-3.5 rounded-xl text-left transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.25)] group cursor-pointer"
            >
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 animate-pulse" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors leading-snug">
                    Turning your vision into digital reality.
                  </p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Cinematic Terrain Silhouette / Horizon Glow (Matching Reference Ground Contour) */}
      <div className="relative w-full z-10 pointer-events-none mt-8">
        {/* Curved horizon gradient line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        
        {/* Bottom Bar: Scroll to Explore */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-slate-500 font-tech text-xs tracking-[0.2em] uppercase">
            <span className="inline-block w-[1px] h-6 bg-slate-700 relative overflow-hidden">
              <span className="absolute top-0 left-0 w-full h-full bg-cyan-400 animate-bounce" />
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-cyan-400 animate-pulse -ml-1" />
            <span>SCROLL TO EXPLORE</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-tech text-slate-500">
            <span>AVENGIX NEURAL CORE v3.8</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>ACTIVE ARCHITECTURE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
