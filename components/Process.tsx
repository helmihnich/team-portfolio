export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      description: 'We analyze technical feasibility and business impact. No fluff, just hard data.',
      progress: 100,
      icon: '🔍',
    },
    {
      num: '02',
      title: 'Prototype',
      description: 'Week 1 delivery of a functional prototype. Prove the concept before burning budget.',
      progress: 75,
      icon: '⚡',
    },
    {
      num: '03',
      title: 'Execute',
      description: 'Sprint-based development with the "Strike Team." Elite velocity and code quality.',
      progress: 50,
      icon: '🚀',
    },
    {
      num: '04',
      title: 'Deploy',
      description: 'Seamless handover and deployment. We ensure your team can take over.',
      progress: 25,
      icon: '✓',
    },
  ];

  return (
    <section className="relative px-4 py-24 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden" id="process">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Vertical connecting line */}
      <div className="absolute left-10 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent hidden md:block" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
            OUR PROCESS
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            De-Risk Your Investment
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl">
            We prototype first to validate ideas before full investment. Fast, efficient, and transparent.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Large number background */}
              <div className="absolute -top-6 -right-4 text-8xl font-black text-blue-500/5 group-hover:text-blue-500/10 transition-colors duration-300">
                {step.num}
              </div>
              
              {/* Icon */}
              <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-2xl group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-blue-400 text-sm font-mono font-semibold">{step.num}</span>
                  <h3 className="text-white font-bold text-xl">{step.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Progress bar */}
              <div className="relative z-10 mt-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 font-medium">Progress</span>
                  <span className="text-xs text-blue-400 font-semibold">{step.progress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-blue-500/50"
                    style={{ width: `${step.progress}%` }}
                  />
                </div>
              </div>

              {/* Connecting dot for timeline effect */}
              <div className="hidden lg:block absolute -right-4 top-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 group-hover:scale-150 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}