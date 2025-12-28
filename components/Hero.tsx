export function Hero() {
  return (
    <section className="relative px-4 py-12 lg:px-20 lg:py-24 flex justify-center bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-40" />
      <div className="layout-content-container flex flex-col max-w-[1080px] flex-1 relative z-10">
        <div className="flex flex-col gap-8 items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Accepting Projects for Q4 2024
          </div>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.033em] max-w-4xl">
            Stop Managing Agencies. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Deploy a Strike Team.</span>
          </h1>
          <h2 className="text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            We build the impossible in weeks, not months. The elite trio for Web, Mobile, and AI/R&D focused on high-value business outcomes.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <button className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white transition-all hover:bg-blue-600 hover:scale-105 shadow-[0_0_20px_rgba(13,89,242,0.3)]">
              Book a Technical Feasibility Call
            </button>
            <button className="flex h-12 items-center justify-center rounded-lg border border-border bg-transparent px-8 text-base font-bold text-white transition-all hover:bg-surface ">
              View Mission Briefs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
