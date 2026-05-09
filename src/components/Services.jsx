import { services } from "../data";

function ServiceCard({ service, index }) {
  return (
    <div className="reveal bg-[#1C1C1A] border border-[#2A2A27] font-poppins p-8 relative space-y-3 overflow-hidden group hover:border-[#E8631A] transition-all duration-500" style={{ transitionDelay: `${index * 60}ms` }}>
      {/* Tag */}
      <div className="flex font-mono items-center justify-between">
        <span className="text-[#E8631A] text-[9px] tracking-[0.3em] uppercase border border-[#E8631A]/30 px-3 py-1">{service.tag}</span>
        <div className="font-display text-6xl text-[#2A2A27] leading-none select-none group-hover:text-white transition-colors duration-300">0{service.id}</div>
      </div>

      {/* Item service */}
      <h1 className="text-xl group-hover:text-[#E8631A] transition-colors duration-300">{service.title}</h1>
      <p className="text-[#6B6B63] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">{service.desc}</p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E8631A] group-hover:w-full transition-all duration-500" />
    </div>
  );
}

export default function Services() {
  return (
    <section id="layanan" className="font-poppins relative py-28 md:py-40 bg-[#111110]">
      {/* Top diagonal */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#0A0A08]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between space-y-3">
          {/* Title */}
          <div className="reveal-left space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#E8631A]" />
              <span className="font-mono text-[#E8631A] text-xs tracking-[0.3em] uppercase">Layanan Kami</span>
            </div>
            <h1 className="font-display text-6xl leading-none tracking-wide">
              APA YANG
              <br />
              <span className="text-[#E8631A]">KAMI KERJAKAN</span>
            </h1>
          </div>
          <p className="reveal-right text-sm md:max-w-xl md:text-right leading-relaxed">Dari perawatan rutin hingga modifikasi total, semua dikerjakan dengan standar profesional.</p>
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
        <div className="space-y-6 text-center reveal">
          <p className="text-sm">Tidak menemukan layanan yang Anda butuhkan?</p>
          <a href="https://wa.me/628987461067" target="_blank" rel="noopener noreferrer" className="flex gap-1.5 justify-center md:inline-block border border-[#E8631A] text-[#E8631A] space-x-3 font-poppins px-5 py-3 rounded-md hover:bg-[#E8631A] hover:text-[#0A0A08] transition-all duration-300">
            <i class="bi bi-arrow-right"></i> Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
}
