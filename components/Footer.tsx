export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-gradient-to-b from-slate-950 to-black py-16 px-4 lg:px-20 overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-gray-500">
            © {new Date().getFullYear()} Strike Team. All rights reserved.
          </div>
          
          {/* Status indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-400 text-xs font-medium">All systems operational</span>
          </div>
        </div>
      </div>
      
      {/* Bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/5 blur-3xl" />
    </footer>
  );
}