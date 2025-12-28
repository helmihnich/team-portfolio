export function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      description: 'We analyze technical feasibility and business impact. No fluff, just hard data.',
      progress: 100,
    },
    {
      num: '02',
      title: 'Prototype',
      description: 'Week 1 delivery of a functional prototype. Prove the concept before burning budget.',
      progress: 75,
    },
    {
      num: '03',
      title: 'Execute',
      description: 'Sprint-based development with the "Strike Team." Elite velocity and code quality.',
      progress: 50,
    },
    {
      num: '04',
      title: 'Deploy',
      description: 'Seamless handover and deployment. We ensure your team can take over.',
      progress: 25,
    },
  ];

  return (
    <section className="px-4 py-20 lg:px-20 bg-background relative overflow-hidden" id="process">
      <div className="absolute left-10 lg:left-1/2 top-0 bottom-0 w-px bg-border -z-0 hidden md:block" />
      <div className="max-w-[1080px] mx-auto relative z-10">
        <div className="flex flex-col md:items-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">De-Risk Your Investment</h2>
          <p className="text-gray-400 mt-2">We prototype first to validate ideas before full investment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4 relative">
              <div className="text-primary text-6xl font-bold opacity-20 absolute -top-8 -left-4">{step.num}</div>
              <h3 className="text-white font-bold text-lg pt-4 relative z-10">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
              <div className="h-1 w-full bg-border rounded overflow-hidden mt-2">
                <div className="h-full bg-primary" style={{ width: `${step.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
