import { useState, useEffect, useRef } from "react";
import { gallery } from "../data";

const PER_PAGE = 6;

function GalleryItem({ item, index }) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer"
      style={{
        transitionDelay: `${(index % PER_PAGE) * 80}ms`,
        aspectRatio: index % PER_PAGE === 0 || index % PER_PAGE === 3 ? "1/1.2" : "1/1",
      }}>
      <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[#0A0A08]/40" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(232,99,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,99,26,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-[#0A0A08]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div>
          <div className="font-mono text-[#E8631A] text-[9px] tracking-[0.3em] uppercase mb-2">{item.cat}</div>
          <div className="font-heading font-bold text-[#F4F0E8] text-lg tracking-wide">{item.label}</div>
        </div>
      </div>
      <div className="absolute inset-0 border border-[#2A2A27] group-hover:border-[#E8631A] transition-colors duration-300 pointer-events-none" />
      <div className="absolute top-4 left-4 bg-[#0A0A08]/60 backdrop-blur-sm px-3 py-1">
        <span className="font-mono text-[#E8631A] text-[9px] tracking-widest uppercase">{item.cat}</span>
      </div>
    </div>
  );
}

function Pagination({ page, totalPages, onPageChange, sectionRef }) {
  function goTo(p) {
    onPageChange(p);
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // FIX: early return untuk totalPages <= 7 agar semua halaman selalu tampil
  function buildPages() {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    const pages = [];
    const delta = 1;
    const rangeStart = Math.max(1, page - delta);
    const rangeEnd = Math.min(totalPages - 2, page + delta);

    pages.push(0);
    if (rangeStart > 1) pages.push("...");
    for (let i = rangeStart; i <= rangeEnd; i++) pages.push(i);
    if (rangeEnd < totalPages - 2) pages.push("...");
    pages.push(totalPages - 1);

    return pages;
  }

  const btnBase = "w-8 h-8 font-mono text-[10px] border transition-all duration-300 flex items-center justify-center";
  const btnActive = "border-[#E8631A] text-[#E8631A]";
  const btnIdle = "border-[#2A2A27] text-[#6B6B63] hover:border-[#E8631A] hover:text-[#E8631A]";
  const btnDisabled = "border-[#2A2A27] text-[#6B6B63] opacity-20 cursor-not-allowed";

  return (
    <div className="flex items-center justify-center gap-1 mt-10 select-none" role="navigation" aria-label="Pagination">
      {/* Prev */}
      <button onClick={() => goTo(page - 1)} disabled={page === 0} aria-label="Halaman sebelumnya" className={`${btnBase} ${page === 0 ? btnDisabled : btnIdle}`}>
        ←
      </button>

      {/* Page numbers */}
      {buildPages().map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className="w-8 h-8 flex items-center justify-center font-mono text-[10px] text-[#6B6B63]" aria-hidden="true">
            ···
          </span>
        ) : (
          <button key={`page-${p}`} onClick={() => goTo(p)} aria-label={`Halaman ${p + 1}`} aria-current={page === p ? "page" : undefined} className={`${btnBase} ${page === p ? btnActive : btnIdle}`}>
            {p + 1}
          </button>
        )
      )}

      {/* Next */}
      <button onClick={() => goTo(page + 1)} disabled={page === totalPages - 1} aria-label="Halaman berikutnya" className={`${btnBase} ${page === totalPages - 1 ? btnDisabled : btnIdle}`}>
        →
      </button>
    </div>
  );
}

export default function Gallery() {
  const [page, setPage] = useState(0);
  const sectionRef = useRef(null);

  const totalPages = Math.ceil(gallery.length / PER_PAGE);
  const paginated = gallery.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  // FIX: dependency diubah ke totalPages (bukan gallery.length yang tidak reaktif)
  useEffect(() => {
    if (page >= totalPages) setPage(0);
  }, [totalPages]);

  return (
    <section id="gallery" ref={sectionRef} className="relative py-28 md:py-40 bg-[#0A0A08]">
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

        {/* Grid */}
        <div key={page} className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {paginated.map((item, i) => (
            <GalleryItem key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Pagination — hanya tampil jika lebih dari 1 halaman */}
        {totalPages > 1 && <Pagination page={page} totalPages={totalPages} onPageChange={setPage} sectionRef={sectionRef} />}

        <div className="mt-10 text-center reveal">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-block font-mono text-[#6B6B63] text-xs tracking-widest uppercase hover:text-[#E8631A] transition-colors duration-300">
            Lihat semua project →
          </a>
        </div>
      </div>
    </section>
  );
}
