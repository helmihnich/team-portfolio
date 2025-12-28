"use client"
import { Dna, Blueprint, HandTap  } from '@phosphor-icons/react';

export function Team() {
  const team = [
    {
      icon: Blueprint,
      title: 'The Architect',
      role: 'Web & Infrastructure',
      description: 'Ex-Platform Lead at a Series B fintech. Specializes in distributed systems, Next.js optimization, and serverless architectures that handle millions of requests.',
      tags: ['System Design', 'Cloud Native'],
    },
    {
      icon: HandTap,
      title: 'The Engineer',
      role: 'Mobile & Performance',
      description: 'iOS/Android native specialist. Obsessed with 60fps animations, offline-first capabilities, and interaction design that feels indistinguishable from magic.',
      tags: ['SwiftUI / Kotlin', 'Metal / OpenGL'],
    },
    {
      icon: Dna,
      title: 'The Scientist',
      role: 'AI & R&D',
      description: 'Machine Learning specialist focusing on LLM integration and agentic workflows. Turns "AI hype" into actual automated business logic and cost reduction.',
      tags: ['NLP', 'Python'],
    },
  ];

  return (
    <section className="px-4 py-24 lg:px-20 bg-background border-b border-border relative" id="team">
      <div className="max-w-[1080px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4">The Operators</h2>
            <p className="text-gray-400 text-lg">
              Three senior engineers. Zero juniors. We execute with military precision and specialized expertise in every key domain.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Unit Active
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface  border border-border group-hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 to-surface-dark">
                  <member.icon className="material-symbols-outlined text-6xl text-gray-600 group-hover:text-primary transition-colors duration-300 -mt-2"/>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h3 className="text-xl font-bold text-white">{member.title}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mt-1">{member.role}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] uppercase font-bold text-gray-500 border border-border px-2 py-1 rounded bg-background">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}