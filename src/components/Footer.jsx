const links = {
  Layanan: ["Engine Overhaul", "Modifikasi Custom", "Kelistrikan", "Kaki-kaki", "Perawatan Berkala", "Body & Cat"],
  Perusahaan: ["Tentang Kami", "Tim Kami", "Galeri", "Testimoni", "Kontak"],
  Informasi: ["Jam Operasional", "Lokasi Bengkel", "Garansi Servis", "Spare Part", "FAQ"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A08] border-t border-[#1C1C1A]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 bg-[#E8631A] flex items-center justify-center transform -skew-x-6">
                <span className="font-display text-[#0A0A08] text-lg skew-x-6">R</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[#F4F0E8] text-xl tracking-widest">RADS</span>
                <span className="font-mono text-[#E8631A] text-[9px] tracking-[0.3em] uppercase">Garage</span>
              </div>
            </div>
            <p className="text-[#6B6B63] text-sm leading-relaxed mb-8 max-w-xs">Bengkel motor spesialis modifikasi dan perawatan profesional di Kabupaten Bekasi sejak 2021.</p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: "IG", url: "https://www.instagram.com/rads.garage" },
                { label: "FB", url: "https://facebook.com/radsgarage" },
              ].map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[#2A2A27] flex items-center justify-center font-mono text-[10px] text-[#6B6B63] hover:border-[#E8631A] hover:text-[#E8631A] transition-all duration-300">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-heading font-bold text-sm text-[#F4F0E8] tracking-widest uppercase mb-5">{heading}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-[#6B6B63] text-sm hover:text-[#E8631A] transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1C1C1A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[#3D3D38] text-[10px] tracking-widest uppercase">© {new Date().getFullYear()} Rads Garage. All rights reserved.</p>
          <div className="flex gap-6">
            {["Kebijakan Privasi", "Syarat & Ketentuan"].map((item) => (
              <a key={item} href="#" className="font-mono text-[#3D3D38] text-[10px] tracking-widest uppercase hover:text-[#6B6B63] transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
