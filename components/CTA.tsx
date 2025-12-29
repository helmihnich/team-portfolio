export function CTA() {
    return (
        <section className="relative px-4 py-32 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex justify-center overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col max-w-[800px] flex-1 items-center text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-sm font-medium text-primary">Limited Availability</span>
                </div>

                {/* Heading with gradient */}
                <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                    Ready to Deploy?
                </h2>
                
                <p className="text-gray-400 text-xl mb-10 max-w-2xl leading-relaxed">
                    We only take on <span className="text-white font-semibold">2 new projects per quarter</span> to maintain elite standards. Secure your slot today.
                </p>

                {/* CTA Button with enhanced effects */}
                <div className="flex flex-col w-full max-w-sm gap-4">
                    <button className="group relative flex h-16 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-blue-600 px-8 text-lg font-bold text-white transition-all hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 active:scale-95 overflow-hidden">
                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        
                        <span className="relative flex items-center gap-2">
                            Book a Technical Feasibility Call
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                    
                    {/* Trust indicator */}
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        No commitment required • 30-minute call
                    </p>
                </div>
            </div>
        </section>
    );
}