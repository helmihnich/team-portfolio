import Image from 'next/image';

export function TrustedBy() {
  const logos = [

  ];

  return (
    <section className="w-full border-y border-border bg-surface/50 py-8">      <div className="px-4 md:px-20 max-w-7xl mx-auto">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">Trusted by technical founders at</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* {logos.map((logo, i) => (
            <Image key={i} alt="Company logo" className="h-8 w-auto" src={logo} width={100} height={32} />
          ))} */}
        </div>
      </div>
    </section>
  );
}