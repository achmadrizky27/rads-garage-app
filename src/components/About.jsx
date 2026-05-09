export default function About() {
  const yearsInOperation = new Date().getFullYear() - 2021;

  return (
    <section id="tentang kami" className="bg-[#0A0A08] font-poppins overflow-hidden py-28 md:py-40 relative">
      {/* Decorative */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#111110]" style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E8631A]/40 to-transparent" style={{ right: "33.33%" }} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left content */}
          <div className="reveal-left flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#E8631A]" />
              <span className="font-mono text-[#E8631A] text-xs tracking-[0.3em] uppercase">Tentang Kami</span>
            </div>

            <div className="flex-col leading-none space-y-3">
              <h1 className="font-display text-6xl">
                BENGKEL <span className="text-[#E8631A]">YANG PEDULI</span> <br /> MOTORMU
              </h1>
              <p className="leading-normal text-md xl:text-lg">Rads Garage merupakan bengkel otomotif roda dua yang didirikan pada tahun 2021 di Bekasi. Kami berkomitmen menyediakan layanan profesional dalam bidang modifikasi custom, perawatan performa, dan restorasi motor vintage dengan mengutamakan kualitas pengerjaan serta kepuasan pelanggan.</p>
              <p className="leading-normal text-md xl:text-lg">Setiap kendaraan ditangani secara teliti oleh mekanik berpengalaman dengan dukungan spare part berkualitas dan standar kerja yang profesional guna memastikan hasil terbaik bagi setiap pelanggan.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Bergaransi", "Transparan", "On-Time", "Akuntabel", "Profesional", "Mekanik Handal"].map((tag) => (
                <span key={tag} className="border border-[#3D3D38] text-sm tracking-widest uppercase px-4 py-2 hover:border-[#E8631A] hover:text-[#E8631A] transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right content */}
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
                  <div className="relative text-center z-10 p-10 flex flex-col items-center justify-center">
                    {/* Decorative rings */}
                    <div className="absolute w-64 h-64 rounded-full border border-[#E8631A]/10 animate-ping" style={{ animationDuration: "3s" }} />
                    <div className="absolute w-48 h-48 rounded-full border border-[#E8631A]/20" />

                    {/* Logo */}
                    <img src="./images/logo/radsGarage.png" alt="Rads Garage" width={400} className="relative z-10 transition-all duration-500 hover:scale-105" />

                    {/* Decorative line bawah */}
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#E8631A]" />
                      <div className="w-2 h-2 rounded-full bg-[#E8631A]" />
                      <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#E8631A]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 font-poppins -left-6 bg-[#E8631A] px-6 py-5 z-10">
                <div className="font-display text-3xl md:text-6xl text-[#0A0A08]">{yearsInOperation}+</div>
                <div className="text-black text-sm tracking-wider uppercase">Tahun Beroperasi</div>
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
