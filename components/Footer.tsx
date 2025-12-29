export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-gradient-to-b from-slate-950 to-black py-16 px-4 lg:px-20 overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo */}
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="size-6 text-primary transition-transform group-hover:rotate-12 group-hover:scale-110">
              <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Strike Team</span>
          </div>
          
          {/* Navigation */}
          <nav className="flex gap-8 text-sm">
            <a className="text-gray-400 hover:text-white transition-all hover:-translate-y-0.5" href="#">Privacy</a>
            <a className="text-gray-400 hover:text-white transition-all hover:-translate-y-0.5" href="#">Terms</a>
            <a className="group flex items-center gap-1.5 text-gray-400 hover:text-white transition-all hover:-translate-y-0.5" href="#">
              Twitter
              <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a className="group flex items-center gap-1.5 text-gray-400 hover:text-white transition-all hover:-translate-y-0.5" href="#">
              LinkedIn
              <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </nav>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
        
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