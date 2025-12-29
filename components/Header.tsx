"use client"
import { useState, useEffect } from 'react';
import { List, X, Lightning, ArrowRight } from '@phosphor-icons/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#team', label: 'Team' },
    { href: '#process', label: 'Process' },
    { href: '#work', label: 'Case Studies' },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b transition-all duration-300 px-6 py-4 lg:px-20 ${
          scrolled 
            ? 'border-slate-700/50 bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-black/20' 
            : 'border-slate-800/30 bg-slate-950/80 backdrop-blur-md'
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 text-white group">
          <div className={`relative size-10 transition-all duration-300 ${scrolled ? 'scale-90' : ''}`}>
            <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md group-hover:bg-blue-500/30 transition-colors" />
            <div className="relative size-10 text-blue-400 group-hover:text-blue-300 transition-colors">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentcolor" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-lg font-bold leading-tight tracking-tight group-hover:text-blue-400 transition-colors">
              Strike Team
            </h2>
            <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">Elite Development</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="relative text-gray-400 hover:text-white text-sm font-medium transition-colors group"
                href={link.href}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <button className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-lg h-11 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all text-white text-sm font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
            <Lightning size={16} weight="fill" />
            <span>Book Call</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} weight="bold" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-slate-800/50 rounded-lg transition-colors" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} weight="bold" />
          ) : (
            <List size={24} weight="bold" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: scrolled ? '73px' : '81px' }}
      >
        <nav className="flex flex-col gap-2 p-6">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center justify-between p-4 text-gray-300 hover:text-white rounded-xl hover:bg-slate-800/50 transition-all duration-300"
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
              }}
            >
              <span className="text-lg font-medium">{link.label}</span>
              <ArrowRight 
                className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" 
                size={20} 
                weight="bold" 
              />
            </a>
          ))}
          
          <div className="h-px bg-slate-800 my-4" />
          
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl h-14 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all text-white text-base font-bold shadow-xl shadow-blue-500/30"
            style={{ 
              animationDelay: `${navLinks.length * 50}ms`,
              animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
            }}
          >
            <Lightning size={20} weight="fill" />
            <span>Book a Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </nav>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}