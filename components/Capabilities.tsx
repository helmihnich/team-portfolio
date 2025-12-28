"use client"
import { Globe, DeviceMobileCamera, Brain  } from '@phosphor-icons/react';

export function Capabilities() {
  const capabilities = [
    {
      icon: Globe,
      title: 'Full-Stack Web',
      description: "Scalable architectures built for speed. We don't just ship code; we ship business logic that scales.",
      tags: ['Next.js', 'Node', 'Supabase'],
    },
    {
      icon: DeviceMobileCamera,
      title: 'Cross-Platform Mobile',
      description: 'Native performance with the speed of cross-platform development. Beautiful, fluid interfaces.',
      tags: ['Flutter', 'React Native', 'iOS/Android'],
    },
    {
      icon: Brain,
      title: 'AI & R&D',
      description: 'Practical AI integration. We build custom LLMs and automation agents that actually save money.',
      tags: ['OpenAI API', 'Python', 'LangChain'],
    },
  ];

  return (
    <section className="px-4 py-20 lg:px-20 bg-surface  border-y border-border" id="capabilities">
      <div className="max-w-[1080px] mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-12">R&D Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="group relative rounded-xl bg-background p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <cap.icon className="material-symbols-outlined text-3xl"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{cap.description}</p>
              <div className="flex flex-wrap gap-2">
                {cap.tags.map((tag, j) => (
                  <span key={j} className="px-2 py-1 rounded bg-surface  border border-border text-xs text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}