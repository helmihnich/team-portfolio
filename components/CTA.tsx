export function CTA() {
    return (
        <section className="px-4 py-24 lg:px-20 bg-background flex justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
            <div className="layout-content-container flex flex-col max-w-[800px] flex-1 items-center text-center relative z-10">
                <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-[-0.033em] mb-6">
                    Ready to Deploy?
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-xl">
                    We only take on 2 new projects per quarter to maintain elite standards. Secure your slot today.        </p>
                <div className="flex flex-col w-full max-w-sm gap-4">
                    <button className="flex h-14 items-center justify-center rounded-lg bg-primary px-8 text-lg font-bold text-white transition-all hover:bg-blue-600 shadow-lg shadow-primary/25"
                        // onClick={() => console.log("ogkropegre")}
                    >
                        Book a Technical Feasibility Call
                    </button>
                </div>
            </div>
        </section>
    );
}
