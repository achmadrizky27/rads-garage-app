import { useMemo } from "react";

export default function Hero() {
  // Years in operation
  const yearsInOperation = useMemo(() => {
    const start = 2021;
    const present = new Date().getFullYear();
    return present - start;
  });

  return (
    <section id="home" className="bg-[#0A0A08] font-poppins flex items-end min-h-screen overflow-hidden relative">
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
      {/* Orange glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(232, 99, 26, 0.12) 0%, transparent 70%)" }} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative w-full z-10">
        <div className="gap-12 grid md:grid-cols-2 items-center min-h-screen">
          {/* Left content */}
          <div className="flex-col md:flex">
            <div className="font-display leading-none">
              <p className="block text-[72px] md:text-[100px] xl:text-[130px]">RADS</p>
              <p className="block text-[72px] md:text-[100px] xl:text-[130px]">GARAGE</p>
              <p className="font-poppins leading-normal text-md md:text-lg">Kami menyediakan layanan servis dan perbaikan motor profesional dengan teknisi berpengalaman untuk menjaga performa kendaraan tetap optimal.</p>
            </div>

            <div className="flex-col md:flex space-y-6 mt-6">
              <div className="flex items-center gap-3">
                <a href="https://wa.me/628987461067" target="_blank" rel="noopener noreferrer" className="bg-[#E8631A] text-[#0A0A08] flex gap-1.5 px-5 py-3 rounded-md hover:bg-[#F5A623] transition-all duration-300">
                  <i class="bi bi-arrow-right-circle"></i>Booking Now!
                </a>
                <button onClick={() => document.getElementById("layanan")?.scrollIntoView({ behavior: "smooth" })} className="border border-[#6B6B63] text-[#E8E4D9] px-5 py-3 rounded-md hover:border-[#E8631A] hover:text-[#E8631A] transition-all duration-300">
                  Lihat Layanan
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#E8631A]" />
                <span className="font-mono text-[#E8631A] text-xs tracking-[0.3em] uppercase">Est. 2021 — Bekasi</span>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-col md:flex hidden">
            {[
              { val: `${yearsInOperation}+`, label: "Tahun Beroperasi", icon: <i class="bi bi-calendar"></i> },
              { val: "500+", label: "Layanan Motor Diselesaikan", icon: <i class="bi bi-list-task"></i> },
              { val: "3", label: "Mekanik Berpengalaman", icon: <i class="bi bi-gear"></i> },
            ].map((s, i) => (
              <div key={i} className="border-b border-[#2A2A27] font-poppins py-6 flex items-center justify-between group hover:border-[#E8631A] transition-colors duration-300">
                <span className="font-display text-6xl text-[#E8631A]">{s.val}</span>
                <span className="flex gap-3 text-sm tracking-wider uppercase group-hover:text-[#A8A89E] transition-colors duration-300">
                  {s.label}
                  {s.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-[#6B6B63] text-sm tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#E8631A] to-transparent" />
      </div>
    </section>
  );
}
