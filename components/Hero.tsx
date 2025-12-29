"use client"
import { ArrowRight, Lightning, CheckCircle } from '@phosphor-icons/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen px-4 py-12 lg:px-20 lg:py-24 flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

      <div className="flex flex-col max-w-[1200px] flex-1 relative z-10">
        <div className="flex flex-col gap-8 items-center text-center">
          {/* Status badge */}
          <div className="group inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer shadow-lg shadow-blue-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-400 shadow-lg shadow-blue-400/50" />
            </span>
            <span>Accepting Projects for Q4 2024</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} weight="bold" />
          </div>

          {/* Main headline with stagger animation effect */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-[-0.033em] max-w-5xl">
              Stop Managing Agencies.
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-[-0.033em] max-w-5xl">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 animate-gradient">
                Deploy a Strike Team.
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-gray-400 text-lg md:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl">
            We build the impossible in weeks, not months. The elite trio for Web, Mobile, and AI/R&D focused on{' '}
            <span className="text-white font-semibold">high-value business outcomes</span>.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="text-blue-400" size={20} weight="fill" />
              <span className="text-sm font-medium">Week 1 Prototypes</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="text-blue-400" size={20} weight="fill" />
              <span className="text-sm font-medium">Senior-Only Team</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="text-blue-400" size={20} weight="fill" />
              <span className="text-sm font-medium">Fixed Scope Pricing</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <button className="group relative flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-10 text-base font-bold text-white transition-all hover:from-blue-500 hover:to-purple-500 hover:scale-105 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Lightning size={20} weight="fill" />
                Book a Technical Feasibility Call
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
            <button className="group flex h-14 items-center justify-center rounded-xl border-2 border-slate-700 bg-slate-900/50 backdrop-blur-sm px-10 text-base font-bold text-white transition-all hover:border-blue-500/50 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/10">
              <span className="flex items-center gap-2">
                View Mission Briefs
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} weight="bold" />
              </span>
            </button>
          </div>

          {/* Social proof / trust indicators */}
          <div className="flex items-center gap-2 mt-8 text-gray-500 text-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-slate-900" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-slate-900" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-slate-900" />
            </div>
            <span className="font-medium">
              Trusted by founders at <span className="text-white">YC, Techstars & Fortune 500</span>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-gray-600" />
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}