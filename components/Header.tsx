'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-border bg-[rgb(16,22,34,0.9)] backdrop-blur-md px-6 py-4 lg:px-20">
      <div className="flex items-center gap-4 text-white">
        <div className="size-6 text-primary">
          <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentcolor" />
          </svg>
        </div>
        <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Strike Team</h2>
      </div>
      <nav className="hidden lg:flex flex-1 justify-end gap-8 items-center">
        <div className="flex items-center gap-9">
          <Link className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#capabilities">
            Capabilities
          </Link>
          <Link className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#team">
            Team
          </Link>
          <Link className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#process">
            Process
          </Link>
          <Link className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#work">
            Case Studies
          </Link>
        </div>
        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]" onClick={() => {/* Add booking logic or link */}}>
          <span className="truncate">Book Call</span>
        </button>      </nav>
      <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
        <span className="material-symbols-outlined">menu</span>
      </button>    </header>
  );
}
