import { useState, useEffect, useRef } from "react";
import { gallery } from "../data";

const PER_PAGE = 6;

// ── Lightbox Modal ──────────────────────────────────────────────
function LightboxModal({ item, onClose }) {
  const [current, setCurrent] = useState(0);
  const images = item.images ?? [item.img];
  const hasPrev = current > 0;
  const hasNext = current < images.length - 1;

  // Tutup dengan ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) setCurrent((c) => c - 1);
      if (e.key === "ArrowRight" && hasNext) setCurrent((c) => c + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [hasPrev, hasNext, onClose]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button onClick={onClose} className="absolute -top-10 right-0 font-mono text-[#6B6B63] hover:text-[#E8631A] text-[10px] tracking-widest uppercase transition-colors">
          Tutup ✕
        </button>

        {/* Image */}
        <div className="relative overflow-hidden border border-[#2A2A27]">
          <img src={images[current]} alt={item.label} className="w-full h-[65vh] object-cover" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(232,99,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,99,26,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Prev / Next */}
          {images.length > 1 && (
            <>
              <button onClick={() => setCurrent((c) => c - 1)} disabled={!hasPrev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#0A0A08]/70 hover:bg-[#E8631A] disabled:opacity-20 disabled:cursor-not-allowed text-white w-10 h-10 flex items-center justify-center transition-colors border border-[#2A2A27] hover:border-[#E8631A]">
                <i className="bi bi-chevron-left" />
              </button>
              <button onClick={() => setCurrent((c) => c + 1)} disabled={!hasNext} className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#0A0A08]/70 hover:bg-[#E8631A] disabled:opacity-20 disabled:cursor-not-allowed text-white w-10 h-10 flex items-center justify-center transition-colors border border-[#2A2A27] hover:border-[#E8631A]">
                <i className="bi bi-chevron-right" />
              </button>
            </>
          )}

          {/* Counter badge */}
          {images.length > 1 && (
            <div className="absolute top-4 right-4 bg-[#0A0A08]/70 backdrop-blur-sm px-3 py-1 border border-[#2A2A27]">
              <span className="font-mono text-[#E8631A] text-[9px] tracking-widest">
                {current + 1} / {images.length}
              </span>
            </div>
          )}
        </div>

        {/* Info + dots */}
        <div className="bg-[#0A0A08] border border-t-0 border-[#2A2A27] px-5 py-4 flex items-center justify-between">
          <div className="font mono">
            <div className="text-[#E8631A] text-sm tracking-[0.3em] uppercase mb-1">{item.category}</div>
            <div className="text-sm tracking-[0.3em] uppercase">{item.type}</div>
          </div>

          {/* Dot indicator */}
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 transition-colors duration-300 ${i === current ? "bg-[#E8631A]" : "bg-[#2A2A27] hover:bg-[#6B6B63]"}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Gallery Item ────────────────────────────────────────────────
function GalleryItem({ item, index }) {
  const [open, setOpen] = useState(false);
  const images = item.images ?? [item.img];
  const thumb = images[0];

  return (
    <>
      <div
        className="cursor-pointer font-poppins group overflow-hidden relative"
        onClick={() => setOpen(true)}
        style={{
          transitionDelay: `${(index % PER_PAGE) * 80}ms`,
          aspectRatio: index % PER_PAGE === 0 || index % PER_PAGE === 3 ? "1/1.2" : "1/1",
        }}>
        <img src={thumb} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[#0A0A08]/50" />

        {/* Background grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(232,99,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,99,26,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Label or name tag (category & type) */}
        <div className="absolute inset-0 bg-[#0A0A08]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-sm tracking-[0.3em] uppercase">
            {item.category} <br /> <span className="text-[#E8631A]">{item.type}</span>
          </div>
        </div>

        {/* Tag brand */}
        <div className="absolute top-4 left-4">
          <p className="bg-transparent/10 border border-[#E8631A]/30 px-3 py-1 text-[#E8631A] text-xs tracking-[0.3em] uppercase">{item.brand}</p>
        </div>

        {/* Border or outline */}
        <div className="absolute border border-[#2A2A27] group-hover:border-[#E8631A] duration-300 inset-0 pointer-events-none transition-colors" />
      </div>

      {open && <LightboxModal item={item} onClose={() => setOpen(false)} />}
    </>
  );
}

// ── Pagination ──────────────────────────────────────────────────
function Pagination({ page, totalPages, onPageChange, sectionRef }) {
  function goTo(p) {
    onPageChange(p);
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

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

  const btnBase = "w-10 h-10 font-mono text-[10px] border transition-all duration-300 flex items-center justify-center";
  const btnActive = "border-[#E8631A] text-[#E8631A]";
  const btnIdle = "border-[#2A2A27] text-[#6B6B63] hover:border-[#E8631A] hover:text-[#E8631A]";
  const btnDisabled = "border-[#2A2A27] text-[#6B6B63] opacity-20 cursor-not-allowed";

  return (
    <div className="flex items-center justify-center gap-1 mt-10 select-none" role="navigation" aria-label="Pagination">
      <button onClick={() => goTo(page - 1)} disabled={page === 0} aria-label="Halaman sebelumnya" className={`${btnBase} ${page === 0 ? btnDisabled : btnIdle}`}>
        <i className="bi bi-arrow-left-circle text-xl" />
      </button>

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

      <button onClick={() => goTo(page + 1)} disabled={page === totalPages - 1} aria-label="Halaman berikutnya" className={`${btnBase} ${page === totalPages - 1 ? btnDisabled : btnIdle}`}>
        <i className="bi bi-arrow-right-circle text-xl" />
      </button>
    </div>
  );
}

// ── Main Gallery ────────────────────────────────────────────────
export default function Gallery() {
  const [page, setPage] = useState(0);
  const sectionRef = useRef(null);

  const totalPages = Math.ceil(gallery.length / PER_PAGE);
  const paginated = gallery.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  useEffect(() => {
    if (page >= totalPages) setPage(0);
  }, [totalPages]);

  return (
    <section id="galeri" ref={sectionRef} className="font-poppins relative py-28 md:py-40 bg-[#111110]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between space-y-3">
          <div className="reveal-left space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#E8631A]" />
              <span className="font-mono text-[#E8631A] text-xs tracking-[0.3em] uppercase">Karya Kami</span>
            </div>
            <div>
              <h1 className="font-display text-6xl leading-none">
                PORTOFOLIO
                <br />
                <span className="text-[#E8631A]">PROJECT</span>
              </h1>
            </div>
          </div>
          <p className="reveal-right text-sm w-full md:max-w-xl md:text-right leading-relaxed">Setiap project adalah bukti dedikasi kami. Berikut beberapa karya terbaik yang telah kami selesaikan.</p>
        </div>

        {/* Grid */}
        <div key={page} className="grid md:grid-cols-3 gap-3">
          {paginated.map((item, i) => (
            <GalleryItem key={item.id} item={item} index={i} />
          ))}
        </div>

        {totalPages > 1 && <Pagination page={page} totalPages={totalPages} onPageChange={setPage} sectionRef={sectionRef} />}
      </div>
    </section>
  );
}
