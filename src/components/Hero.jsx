export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden bg-[#0A0A08]">
      {/* Background grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232, 99, 26, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 99, 26, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal accent bar */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#111110] origin-top-right" style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }} />

      {/* Orange vertical accent */}
      <div className="absolute top-0 right-0 w-1 h-full" style={{ right: "50%", background: "linear-gradient(to bottom, #E8631A, transparent)" }} />

      {/* Large background text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-display text-[20vw] leading-none select-none pointer-events-none" style={{ color: "transparent", WebkitTextStroke: "1px rgba(232, 99, 26, 0.08)" }}>
        RADS
      </div>

      {/* Orange glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(232, 99, 26, 0.12) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#E8631A]" />
              <span className="font-mono text-[#E8631A] text-xs tracking-[0.3em] uppercase">Est. 2021 — Kabupaten Bekasi</span>
            </div>

            <h1 className="font-display leading-none tracking-wider mb-6">
              <span className="block text-[72px] md:text-[100px] lg:text-[130px] text-[#F4F0E8]">RADS</span>
              <span className="block text-[72px] md:text-[100px] lg:text-[130px]" style={{ color: "transparent", WebkitTextStroke: "2px #E8631A" }}>
                GARAGE
              </span>
            </h1>

            <p className="font-body text-[#A8A89E] text-base md:text-lg max-w-md leading-relaxed mb-10">Bengkel motor spesialis modifikasi dan perawatan profesional. Kami tidak sekadar servis, kami membangun mesin yang hidup.</p>

            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="bg-[#E8631A] text-[#0A0A08] font-heading font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#F5A623] transition-all duration-300 inline-block">
                Booking Service
              </a>
              <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="border border-[#6B6B63] text-[#E8E4D9] font-heading font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-[#E8631A] hover:text-[#E8631A] transition-all duration-300">
                Lihat Layanan
              </button>
            </div>
          </div>

          {/* Right — Stats side panel */}
          <div className="hidden md:flex flex-col gap-0 self-stretch justify-end pb-2">
            {[
              { val: "5+", label: "Tahun Berpengalaman" },
              { val: "250+", label: "Motor Ditangani" },
              { val: "2", label: "Mekanik" },
            ].map((s, i) => (
              <div key={i} className="border-b border-[#2A2A27] py-6 flex items-center justify-between group hover:border-[#E8631A] transition-colors duration-300">
                <span className="font-display text-5xl text-[#E8631A]">{s.val}</span>
                <span className="font-heading text-[#6B6B63] text-sm tracking-widest uppercase group-hover:text-[#A8A89E] transition-colors duration-300">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-[#6B6B63] text-[9px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#E8631A] to-transparent" />
      </div>
    </section>
  );
}
