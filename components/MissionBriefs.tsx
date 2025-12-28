import Image from 'next/image';

export function MissionBriefs() {
  const briefs = [
    {
    //   image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxypY7RahZuup4t8x7ryMFMsLHC3UWuIwnefifKP2rn-_ipY-RppNv7JZRRspLL6zl19ZGWyKaFPZ8MTpwIuV-CdrUe9Qo63K0vrchAXINsrLggLN92ZZdXIeNzI4Xcz8t22NDRrFFRZHvxTqOkfYpeaTKj376W27-OodqjftpY4eq9PygoC9PpiQGzDXHDKBbAlbZNwxnrX71g3ZdmMbTkUHQjmLc7IwG1DadZCHVv51saczWVKbxNbAEijRQrRhtBmSyQFIQFwCy',
      tag: 'FINTECH',
      tagColor: 'bg-primary',
      title: 'Automated Data Processing Pipeline',
      problem: 'Client spending 40hrs/week manually entering financial data.',
      solution: 'Custom Python AI agent with OCR to parse and categorize invoices.',
      roi: 'Saved 40hrs/week',
    },
    {
    //   image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFFHn-5YDXU_jOmnvXcHNMqMH6EFfOB5m566yhdpXJdtePQQk6VdnQvVhdN73wQuX-nPGqLHYydMjtkQX84YrnJLmW82OlOeNXlCuskjmqcuRBCJfBGjZeqhqyJVZ1U1mmksKU5p2OqKyeSHpoKKxo7XwXatQPxA2VGDWBeuYe8yr1SE32qAIJLx5R4BX2tbt4wVRb1vY6S5_Vz4lhLf4gOavOmD_eebT059u_3XovzjFwgk6LAKhGtgO9tvSeVsFwovX56xr_dvb',
      tag: 'E-COMMERCE',
      tagColor: 'bg-purple-600',
      title: 'High-Performance Mobile Rebuild',
      problem: 'Legacy web-wrapper app was slow, leading to 70% cart abandonment.',
      solution: 'Native Flutter rebuild with optimized caching and 60fps animations.',
      roi: '+40% Conversions',
    },
  ];

  return (
    <section className="px-4 py-20 lg:px-20 bg-surface  border-t border-border" id="work">
      <div className="max-w-[1080px] mx-auto flex flex-col gap-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">Mission Briefs</h2>
        <div className="flex flex-col gap-8">
          {briefs.map((brief, i) => (
            <div key={i} className="rounded-2xl bg-background border border-border overflow-hidden flex flex-col md:flex-row group hover:border-primary/50 transition-all">
              <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                {/* <Image
                  alt={brief.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={brief.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                /> */}
                <div className={`absolute top-4 left-4 ${brief.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {brief.tag}
                </div>
              </div>
              <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">{brief.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider">The Problem</h4>
                    <p className="text-gray-300 text-sm">{brief.problem}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-primary text-xs font-bold uppercase tracking-wider">R&D Solution</h4>
                    <p className="text-gray-300 text-sm">{brief.solution}</p>
                  </div>
                  <div className="flex flex-col gap-2 border-l-2 border-primary pl-4 bg-primary/5 py-2 rounded-r">
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider">Measurable ROI</h4>
                    <p className="text-white text-lg font-bold">{brief.roi}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}