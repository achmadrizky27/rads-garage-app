import { useState } from "react";
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

  const [form, setForm] = useState({
    nama: "",
    hp: "",
    merek: "",
    tipe: "",
    servis: "",
    tanggal: "",
    keluhan: "",
  });

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const kirimWA = () => {
    const { nama, hp, merek, tipe, servis, tanggal, keluhan } = form;
    if (!nama || !hp || !merek || !servis || !tanggal) {
      alert("Mohon lengkapi semua field yang wajib diisi.");
      return;
    }
    const tgl = new Date(tanggal).toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let pesan = `Halo Rads Garage, saya ingin booking servis:\n\n`;
    pesan += `*Nama:* ${nama}\n*No. HP:* ${hp}\n`;
    pesan += `*Kendaraan:* ${merek}${tipe ? " " + tipe : ""}\n`;
    pesan += `*Jenis Servis:* ${servis}\n*Tanggal:* ${tgl}\n`;
    if (keluhan) pesan += `*Keluhan:* ${keluhan}\n`;
    pesan += `\nTerima kasih!`;
    window.open(`https://wa.me/6285921443301?text=${encodeURIComponent(pesan)}`, "_blank");
  };

  return (
    <section id="kontak" className="relative py-28 md:py-40 bg-[#111110]">
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
            {/* CTA card with booking form */}
            <div className="bg-[#E8631A] p-10 relative overflow-hidden mb-6">
              <div className="absolute top-0 right-0 font-display text-[80px] leading-none text-[#0A0A08]/10 select-none">GO</div>
              <div className="relative z-10">
                <h3 className="font-display text-4xl text-[#0A0A08] leading-tight mb-3 tracking-wide">
                  BOOKING SEKARANG
                  <br />
                  VIA WHATSAPP
                </h3>
                <p className="text-[#0A0A08]/70 text-sm mb-6 leading-relaxed">Isi form di bawah, pesan langsung terkirim ke WhatsApp kami.</p>

                {/* Form */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-[#0A0A08]/50">Nama</label>
                    <input type="text" value={form.nama} onChange={(e) => set("nama", e.target.value)} placeholder="Nama lengkap" className="bg-[#0A0A08]/10 border border-[#0A0A08]/20 text-[#0A0A08] placeholder-[#0A0A08]/30 text-sm px-3 py-2.5 outline-none focus:border-[#0A0A08]/60 focus:bg-[#0A0A08]/15 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-[#0A0A08]/50">No. HP</label>
                    <input type="tel" value={form.hp} onChange={(e) => set("hp", e.target.value)} placeholder="08xxxxxxxxxx" className="bg-[#0A0A08]/10 border border-[#0A0A08]/20 text-[#0A0A08] placeholder-[#0A0A08]/30 text-sm px-3 py-2.5 outline-none focus:border-[#0A0A08]/60 focus:bg-[#0A0A08]/15 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-[#0A0A08]/50">Merek Kendaraan</label>
                    <input type="text" value={form.merek} onChange={(e) => set("merek", e.target.value)} placeholder="Toyota, Honda, dll" className="bg-[#0A0A08]/10 border border-[#0A0A08]/20 text-[#0A0A08] placeholder-[#0A0A08]/30 text-sm px-3 py-2.5 outline-none focus:border-[#0A0A08]/60 focus:bg-[#0A0A08]/15 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-[#0A0A08]/50">Tipe / Tahun</label>
                    <input type="text" value={form.tipe} onChange={(e) => set("tipe", e.target.value)} placeholder="Avanza 2020" className="bg-[#0A0A08]/10 border border-[#0A0A08]/20 text-[#0A0A08] placeholder-[#0A0A08]/30 text-sm px-3 py-2.5 outline-none focus:border-[#0A0A08]/60 focus:bg-[#0A0A08]/15 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-[#0A0A08]/50">Jenis Servis</label>
                    <select value={form.servis} onChange={(e) => set("servis", e.target.value)} className="bg-[#0A0A08]/10 border border-[#0A0A08]/20 text-[#0A0A08] text-sm px-3 py-2.5 outline-none focus:border-[#0A0A08]/60 focus:bg-[#0A0A08]/15 transition-colors appearance-none cursor-pointer">
                      <option value="" disabled>
                        Pilih jenis servis
                      </option>
                      <option value="Servis Rutin / Ganti Oli">Servis Rutin / Ganti Oli</option>
                      <option value="Tune Up">Tune Up</option>
                      <option value="Rem & Kopling">Rem &amp; Kopling</option>
                      <option value="AC Kendaraan">AC Kendaraan</option>
                      <option value="Kelistrikan">Kelistrikan</option>
                      <option value="Kaki-kaki / Suspensi">Kaki-kaki / Suspensi</option>
                      <option value="Body & Cat">Body &amp; Cat</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-[#0A0A08]/50">Tanggal Booking</label>
                    <input type="date" value={form.tanggal} onChange={(e) => set("tanggal", e.target.value)} className="bg-[#0A0A08]/10 border border-[#0A0A08]/20 text-[#0A0A08] text-sm px-3 py-2.5 outline-none focus:border-[#0A0A08]/60 focus:bg-[#0A0A08]/15 transition-colors" />
                  </div>
                  <div className="col-span-2 flex flex-col gap-1">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-[#0A0A08]/50">
                      Keluhan / Catatan <span className="normal-case font-normal">(opsional)</span>
                    </label>
                    <textarea value={form.keluhan} onChange={(e) => set("keluhan", e.target.value)} rows={3} placeholder="Deskripsikan masalah kendaraan Anda..." className="bg-[#0A0A08]/10 border border-[#0A0A08]/20 text-[#0A0A08] placeholder-[#0A0A08]/30 text-sm px-3 py-2.5 outline-none focus:border-[#0A0A08]/60 focus:bg-[#0A0A08]/15 transition-colors resize-none" />
                  </div>
                </div>

                <button onClick={kirimWA} className="w-full bg-[#0A0A08] text-[#E8631A] font-heading font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#111110] active:scale-[0.99] transition-all duration-300">
                  WhatsApp Kami →
                </button>
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
