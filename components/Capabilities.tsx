"use client"
import { Globe, DeviceMobileCamera, Brain, ArrowRight, Sparkle } from '@phosphor-icons/react';

export default function Capabilities() {
  const capabilities = [
    {
      icon: Globe,
      title: 'Full-Stack Web',
      description: "Scalable architectures built for speed. We don't just ship code; we ship business logic that scales.",
      tags: ['Next.js', 'Node', 'Supabase'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconGradient: 'from-blue-500 to-cyan-500',
      borderGradient: 'from-blue-500/50 to-cyan-500/50',
    },
    {
      icon: DeviceMobileCamera,
      title: 'Cross-Platform Mobile',
      description: 'Native performance with the speed of cross-platform development. Beautiful, fluid interfaces.',
      tags: ['Flutter', 'React Native', 'iOS/Android'],
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconGradient: 'from-purple-500 to-pink-500',
      borderGradient: 'from-purple-500/50 to-pink-500/50',
    },
    {
      icon: Brain,
      title: 'AI & R&D',
      description: 'Practical AI integration. We build custom LLMs and automation agents that actually save money.',
      tags: ['OpenAI API', 'Python', 'LangChain'],
      gradient: 'from-orange-500/20 to-red-500/20',
      iconGradient: 'from-orange-500 to-red-500',
      borderGradient: 'from-orange-500/50 to-red-500/50',
    },
  ];

  return (
    <section className="relative px-4 py-24 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-slate-800/50 overflow-hidden" id="capabilities">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <Sparkle size={12} weight="fill" />
              EXPERTISE
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              R&D Capabilities
            </h2>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl">
              Three core domains. Infinite possibilities. Built for velocity and scale.
            </p>
          </div>
          <button className="group hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors">
            View all services
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} weight="bold" />
          </button>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div 
                key={i} 
                className="group relative rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated border glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cap.borderGradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`relative h-16 w-16 rounded-xl bg-gradient-to-br ${cap.gradient} border border-slate-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cap.iconGradient} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`} />
                    <Icon 
                      className={`relative text-3xl bg-gradient-to-br ${cap.iconGradient} bg-clip-text text-transparent`}
                      weight="duotone"
                      size={32}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {cap.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cap.tags.map((tag, j) => (
                      <span 
                        key={j} 
                        className="px-3 py-1.5 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 text-xs text-gray-300 font-medium group-hover:bg-slate-700/80 group-hover:border-slate-600/50 group-hover:text-white transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover arrow indicator */}
                  <div className="flex items-center gap-2 mt-6 text-sm font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} weight="bold" />
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <button className="md:hidden group flex items-center justify-center gap-2 w-full mt-8 px-6 py-3 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50">
          View all services
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} weight="bold" />
        </button>

        {/* Bottom stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-slate-800/50">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-sm text-gray-500 font-medium">Projects Shipped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">3-5x</div>
            <div className="text-sm text-gray-500 font-medium">Faster Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-gray-500 font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}