import { services } from "../data";

function ServiceCard({ service, index }) {
  return (
    <div className="reveal bg-[#1C1C1A] border border-[#2A2A27] p-8 relative overflow-hidden group hover:border-[#E8631A] transition-all duration-500" style={{ transitionDelay: `${index * 60}ms` }}>
      {/* Hover background glow */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(232, 99, 26, 0.15) 0%, transparent 70%)" }} />

      {/* Tag */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-[#E8631A] text-[9px] tracking-[0.3em] uppercase border border-[#E8631A]/30 px-3 py-1">{service.tag}</span>
        <span className="text-2xl">{service.icon}</span>
      </div>

      {/* Number */}
      <div className="font-display text-6xl text-[#2A2A27] leading-none mb-4 select-none group-hover:text-[#3D3D38] transition-colors duration-300">0{service.id}</div>

      <h3 className="font-heading font-bold text-xl text-[#F4F0E8] tracking-wide mb-3 group-hover:text-[#E8631A] transition-colors duration-300">{service.title}</h3>
      <p className="text-[#6B6B63] text-sm leading-relaxed group-hover:text-[#A8A89E] transition-colors duration-300">{service.desc}</p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E8631A] group-hover:w-full transition-all duration-500" />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40 bg-[#111110]">
      {/* Top diagonal */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#0A0A08]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#E8631A]" />
              <span className="font-mono text-[#E8631A] text-xs tracking-[0.3em] uppercase">Layanan Kami</span>
            </div>
            <h2 className="font-display text-[56px] md:text-[72px] text-[#F4F0E8] leading-none tracking-wide">
              APA YANG
              <br />
              KAMI KERJAKAN
            </h2>
          </div>
          <p className="reveal-right text-[#6B6B63] text-sm max-w-xs md:text-right leading-relaxed">Dari perawatan rutin hingga modifikasi total — semua dikerjakan dengan standar profesional tertinggi.</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2A2A27]">
          {services.map((s, i) => (
            <div key={s.id} className="bg-[#111110]">
              <ServiceCard service={s} index={i} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center reveal">
          <p className="text-[#6B6B63] text-sm mb-6">Tidak menemukan layanan yang Anda butuhkan?</p>
          <a href="https://wa.me/628987461067" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#E8631A] text-[#E8631A] font-heading font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-[#E8631A] hover:text-[#0A0A08] transition-all duration-300">
            Konsultasi Gratis →
          </a>
        </div>
      </div>
    </section>
  );
}
