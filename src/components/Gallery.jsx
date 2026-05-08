import { gallery } from "../data";

const COLORS = ["#E8631A", "#F5A623", "#C0392B", "#E8631A", "#F5A623", "#C0392B"];
const PATTERNS = ["radial-gradient(circle at 30% 40%, rgba(232,99,26,0.3) 0%, transparent 60%)", "radial-gradient(circle at 70% 60%, rgba(245,166,35,0.3) 0%, transparent 60%)", "linear-gradient(135deg, rgba(192,57,43,0.3) 0%, transparent 70%)", "radial-gradient(circle at 50% 50%, rgba(232,99,26,0.25) 0%, transparent 60%)", "linear-gradient(45deg, rgba(245,166,35,0.3) 0%, transparent 70%)", "radial-gradient(circle at 20% 80%, rgba(232,99,26,0.3) 0%, transparent 60%)"];

function GalleryItem({ item, index }) {
  return (
    <div
      className="reveal group relative overflow-hidden cursor-pointer"
      style={{
        transitionDelay: `${index * 80}ms`,
        aspectRatio: index === 0 || index === 3 ? "1/1.2" : "1/1",
      }}>
      {/* Background image */}
      <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A0A08]/40" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(232,99,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,99,26,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#0A0A08]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div>
          <div className="font-mono text-[#E8631A] text-[9px] tracking-[0.3em] uppercase mb-2">{item.cat}</div>
          <div className="font-heading font-bold text-[#F4F0E8] text-lg tracking-wide">{item.label}</div>
        </div>
      </div>

      {/* Border */}
      <div className="absolute inset-0 border border-[#2A2A27] group-hover:border-[#E8631A] transition-colors duration-300 pointer-events-none" />

      {/* Cat tag */}
      <div className="absolute top-4 left-4 bg-[#0A0A08]/60 backdrop-blur-sm px-3 py-1">
        <span className="font-mono text-[#E8631A] text-[9px] tracking-widest uppercase">{item.cat}</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 md:py-40 bg-[#0A0A08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#E8631A]" />
              <span className="font-mono text-[#E8631A] text-xs tracking-[0.3em] uppercase">Karya Kami</span>
            </div>
            <h2 className="font-display text-[56px] md:text-[72px] text-[#F4F0E8] leading-none tracking-wide">
              PORTOFOLIO
              <br />
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px #E8631A" }}>PROJECT</span>
            </h2>
          </div>
          <p className="reveal-right text-[#6B6B63] text-sm max-w-xs md:text-right leading-relaxed">Setiap project adalah bukti dedikasi kami. Berikut beberapa karya terbaik yang telah kami selesaikan.</p>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.map((item, i) => (
            <GalleryItem key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-block font-mono text-[#6B6B63] text-xs tracking-widest uppercase hover:text-[#E8631A] transition-colors duration-300">
            Lihat semua project →
          </a>
        </div>
      </div>
    </section>
  );
}
