"use client"
import { Sparkle, TrendUp, Lightning, CheckCircle, ArrowRight } from '@phosphor-icons/react';

export default function MissionBriefs() {
  const briefs = [
    {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      tag: 'FINTECH',
      tagColor: 'from-blue-600 to-cyan-600',
      tagBg: 'bg-blue-500/10',
      tagBorder: 'border-blue-500/30',
      title: 'Automated Data Processing Pipeline',
      problem: 'Client spending 40hrs/week manually entering financial data.',
      solution: 'Custom Python AI agent with OCR to parse and categorize invoices.',
      roi: 'Saved 40hrs/week',
      metrics: [
        { label: 'Time Saved', value: '40hrs/week' },
        { label: 'Accuracy', value: '99.2%' },
        { label: 'ROI', value: '12 months' },
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tag: 'E-COMMERCE',
      tagColor: 'from-purple-600 to-pink-600',
      tagBg: 'bg-purple-500/10',
      tagBorder: 'border-purple-500/30',
      title: 'High-Performance Mobile Rebuild',
      problem: 'Legacy web-wrapper app was slow, leading to 70% cart abandonment.',
      solution: 'Native Flutter rebuild with optimized caching and 60fps animations.',
      roi: '+40% Conversions',
      metrics: [
        { label: 'Conversion Lift', value: '+40%' },
        { label: 'Load Time', value: '-65%' },
        { label: 'User Rating', value: '4.8★' },
      ],
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tag: 'SAAS',
      tagColor: 'from-orange-600 to-red-600',
      tagBg: 'bg-orange-500/10',
      tagBorder: 'border-orange-500/30',
      title: 'Real-Time Analytics Dashboard',
      problem: 'Enterprise client needed live data visualization for 1M+ daily events.',
      solution: 'Serverless architecture with WebSocket streams and optimized React rendering.',
      roi: '10x Performance',
      metrics: [
        { label: 'Performance', value: '10x faster' },
        { label: 'Concurrent Users', value: '50K+' },
        { label: 'Uptime', value: '99.99%' },
      ],
    },
  ];

  return (
    <section className="relative px-4 py-24 lg:px-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-y border-slate-800/50 overflow-hidden" id="work">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <Sparkle size={12} weight="fill" />
            CASE STUDIES
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Mission Briefs
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Real problems. Real solutions. <span className="text-white font-semibold">Measurable results.</span>
          </p>
        </div>

        {/* Case Studies */}
        <div className="flex flex-col gap-8">
          {briefs.map((brief, i) => (
            <div 
              key={i} 
              className="group rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-2/5 lg:w-1/3 h-64 md:h-auto relative overflow-hidden">
                  <img
                    alt={brief.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={brief.image}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-slate-950/40 to-transparent" />
                  
                  {/* Tag */}
                  <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm border ${brief.tagBg} ${brief.tagBorder} shadow-lg`}>
                    {brief.tag}
                  </div>

                  {/* ROI Badge */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/90 backdrop-blur-sm border border-green-500/30 shadow-xl">
                    <TrendUp className="text-green-400" size={20} weight="bold" />
                    <span className="text-green-400 font-bold text-sm">{brief.roi}</span>
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${brief.tagColor} opacity-20 rounded-bl-full`} />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {brief.title}
                  </h3>

                  {/* Problem & Solution Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Problem */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                        <Lightning className="text-red-400" size={20} weight="fill" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider">The Problem</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{brief.problem}</p>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="flex gap-3">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${brief.tagColor} opacity-20 border ${brief.tagBorder} flex items-center justify-center`}>
                        <CheckCircle className={`bg-gradient-to-br ${brief.tagColor} bg-clip-text text-transparent`} size={20} weight="fill" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h4 className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${brief.tagColor} bg-clip-text text-transparent`}>
                          R&D Solution
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{brief.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700/50">
                    {brief.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <span className="text-gray-500 text-xs font-medium">{metric.label}</span>
                        <span className="text-white text-lg font-bold">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Case Study Link */}
                  <button className="group/link inline-flex items-center gap-2 mt-6 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors self-start">
                    <span>View full case study</span>
                    <ArrowRight className="group-hover/link:translate-x-1 transition-transform" size={16} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Want to see your project here? <span className="text-white font-semibold">Let's make it happen.</span>
          </p>
          <button className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all text-white text-sm font-bold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105">
            <span>Start Your Project</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} weight="bold" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>
      </div>
    </section>
  );
}