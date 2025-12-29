"use client"
import { Sparkle, LinkedinLogo, GithubLogo, ArrowUpRight } from '@phosphor-icons/react';

export default function Team() {
  const team = [
    {
      image: "/team/firas.png",
      title: 'Firas Hajlaoui',
      role: 'Web & Infrastructure',
      description: 'Ex-Platform Lead at a Series B fintech. Specializes in distributed systems, Next.js optimization, and serverless architectures that handle millions of requests.',
      tags: ['System Design', 'Cloud Native'],
      gradient: 'from-blue-600/20 to-cyan-600/20',
      borderGradient: 'from-blue-500 to-cyan-500',
    },
    {
      image: "/team/helmi2.png",
      title: 'Helmi Hnich',
      role: 'Full Stack JS Engineer',
      description: 'Full-stack JavaScript engineer focused on building high-performance web and mobile applications. Passionate about smooth animations, scalable architectures, and crafting user experiences that feel fast, intuitive, and reliable.',
      tags: ['React/Next/RN', 'Node JS', 'HL7 FHIR'],
      gradient: 'from-purple-600/20 to-pink-600/20',
      borderGradient: 'from-purple-500 to-pink-500',
    },
    {
      image: "/team/dali.png",
      title: 'Mohamed Ali Ben Younes',
      role: 'AI & R&D',
      description: 'Machine Learning specialist focusing on LLM integration and agentic workflows. Turns "AI hype" into actual automated business logic and cost reduction.',
      tags: ['NLP', 'Python'],
      gradient: 'from-orange-600/20 to-red-600/20',
      borderGradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="relative px-4 py-24 lg:px-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800/50 overflow-hidden" id="team">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none opacity-30" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <Sparkle size={12} weight="fill" />
              THE TEAM
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              The Operators
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Three senior engineers. <span className="text-white font-semibold">Zero juniors.</span> We execute with military precision and specialized expertise in every key domain.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider shadow-lg shadow-green-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400 shadow-lg shadow-green-400/50" />
            </span>
            Unit Active
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col gap-6">
              {/* Image Card */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                {/* Image container */}
                <div className="absolute inset-0">
                  <img
                    src={member.image}
                    alt={member.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Hover gradient accent */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay`} />
                </div>

                {/* Name & Role Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {member.title}
                      </h3>
                      <p className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${member.borderGradient} bg-clip-text text-transparent`}>
                        {member.role}
                      </p>
                    </div>
                    
                    {/* Social links - appear on hover */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-8 h-8 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all">
                        <LinkedinLogo size={16} weight="bold" />
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all">
                        <GithubLogo size={16} weight="bold" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Border glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${member.borderGradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />
              </div>

              {/* Info Section */}
              <div className="flex flex-col gap-4">
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {member.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="text-[11px] uppercase font-bold text-gray-400 border border-slate-700/50 px-3 py-1.5 rounded-lg bg-slate-800/50 backdrop-blur-sm group-hover:border-slate-600/50 group-hover:bg-slate-800/80 group-hover:text-gray-300 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View profile link */}
                <button className="group/link flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-2 opacity-0 group-hover:opacity-100">
                  <span>View full profile</span>
                  <ArrowUpRight className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" size={16} weight="bold" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-16 border-t border-slate-800/50 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Ready to work with the best? <span className="text-white font-semibold">Let's build something extraordinary.</span>
          </p>
          <button className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all text-white text-sm font-bold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105">
            <span>Meet the Team</span>
            <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={16} weight="bold" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>
      </div>
    </section>
  );
}