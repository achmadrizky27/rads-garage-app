export default function Contact() {
  const info = [
    {
      label: "Lokasi",
      value: "Jl. Mahameru VI \nKabupaten Bekasi, 17610",
    },
    {
      label: "Telepon / WhatsApp",
      value: "0898-7461-067",
    },
    {
      label: "Jam Operasional",
      value: "Senin s.d. Sabtu | 08.00 – 17.00\nMinggu | 09.00 – 15.00",
    },
    {
      label: "Email",
      value: "-",
    },
  ];

  return (
    <section id="contact" className="relative py-28 md:py-40 bg-[#111110]">
      {/* Top diagonal */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#0A0A08]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#E8631A]" />
              <span className="font-mono text-[#E8631A] text-xs tracking-[0.3em] uppercase">Hubungi Kami</span>
            </div>
            <h2 className="font-display text-[56px] md:text-[72px] text-[#F4F0E8] leading-none tracking-wide">
              SIAP BANTU
              <br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px #E8631A" }}>MOTORMU</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Contact info */}
          <div className="space-y-0">
            {info.map((item, i) => (
              <div key={i} className="reveal border-b border-[#2A2A27] py-7 flex gap-6 group hover:border-[#E8631A] transition-colors duration-300" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <div className="font-mono text-[#6B6B63] text-[9px] tracking-[0.3em] uppercase mb-2">{item.label}</div>
                  <div className="text-[#F4F0E8] font-body text-sm leading-relaxed whitespace-pre-line">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: CTA & Map placeholder */}
          <div className="reveal-right">
            {/* CTA card */}
            <div className="bg-[#E8631A] p-10 relative overflow-hidden mb-6">
              <div className="absolute top-0 right-0 font-display text-[80px] leading-none text-[#0A0A08]/10 select-none">GO</div>
              <div className="relative z-10">
                <h3 className="font-display text-4xl text-[#0A0A08] leading-tight mb-3 tracking-wide">
                  BOOKING SEKARANG
                  <br />
                  VIA WHATSAPP
                </h3>
                <p className="text-[#0A0A08]/70 text-sm mb-8 leading-relaxed">Respon cepat, antrian mudah, estimasi harga transparan. Hubungi kami sekarang.</p>
                <a href="https://wa.me/628987461067?text=Halo%20Rads%20Garage%2C%20saya%20ingin%20booking%20service" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0A0A08] text-[#E8631A] font-heading font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#111110] transition-colors duration-300">
                  WhatsApp Kami →
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-[#1C1C1A] border border-[#2A2A27] h-40 flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: "linear-gradient(#E8631A 1px, transparent 1px), linear-gradient(90deg, #E8631A 1px, transparent 1px)",
                  backgroundSize: "25px 25px",
                }}
              />
              <div className="relative text-center">
                <div className="text-3xl mb-2">📍</div>
                <div className="font-mono text-[#6B6B63] text-[10px] tracking-widest uppercase">Babelan, Kabupaten Bekasi</div>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[#E8631A] text-[9px] tracking-widest uppercase mt-2 block hover:underline">
                  Buka di Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
