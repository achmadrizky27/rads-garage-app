export default function About() {
  return (
    <section id="tentang kami" className="relative py-28 md:py-40 bg-[#0A0A08] overflow-hidden">
      {/* Decorative */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#111110]" style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E8631A]/40 to-transparent" style={{ right: "33.33%" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left */}
          <div className="reveal-left flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#E8631A]" />
              <span className="font-mono text-[#E8631A] text-xs tracking-[0.3em] uppercase">Tentang Kami</span>
            </div>
            <div>
              <h1 className="font-display text-6xl text-[#F4F0E8] leading-none">
                BENGKEL <span className="text-[#E8631A]">YANG PEDULI</span> <br /> MOTORMU
              </h1>
            </div>
            <div className="flex-col space-y-3">
              <p className="text-md xl:text-lg">Rads Garage merupakan bengkel otomotif roda dua yang didirikan pada tahun 2021 di Kabupaten Bekasi. Kami berkomitmen menyediakan layanan profesional dalam bidang modifikasi custom, perawatan performa, dan restorasi motor vintage dengan mengutamakan kualitas pengerjaan serta kepuasan pelanggan.</p>
              <p className="text-md xl:text-lg">Setiap kendaraan ditangani secara teliti oleh mekanik berpengalaman dengan dukungan spare part berkualitas dan standar kerja yang profesional guna memastikan hasil terbaik bagi setiap pelanggan.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Bergaransi", "Transparan", "On-Time", "Akuntabel"].map((tag) => (
                <span key={tag} className="border border-[#3D3D38] text-sm tracking-widest uppercase px-4 py-2 hover:border-[#E8631A] hover:text-[#E8631A] transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — image placeholder with artistic style */}
          <div className="reveal-right">
            <div className="relative">
              {/* Main frame */}
              <div className="relative bg-[#1C1C1A] overflow-hidden" style={{ clipPath: "polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)" }}>
                <div className="aspect-[4/5] flex items-center justify-center relative overflow-hidden">
                  {/* Grid lines */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: "linear-gradient(#E8631A 1px, transparent 1px), linear-gradient(90deg, #E8631A 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  {/* Center text */}
                  <div className="relative text-center z-10 p-10">
                    <img src="./images/logo/radsGarage.png" alt="radsGarage.png" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#E8631A] px-6 py-5 z-10">
                <div className="font-display text-6xl text-[#0A0A08]">5+</div>
                <div className="text-black text-sm tracking-widest uppercase">Tahun Pengalaman</div>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#E8631A]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
