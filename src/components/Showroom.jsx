// Library or package JS
import { useState, useRef, useEffect, useCallback } from "react";

// ── Data showroom katalog motorcycle
const katalogMotor = [
  {
    id: 1,
    brand: "Yamaha",
    type: "Manual",
    name: "Yamaha Jupiter Z",
    unit: "Second",
    price: "Rp 7.000.000",
    priceNum: 7000000,
    status: "Sold",
    cc: "110 cc",
    bb: "Bensin",
    tahun: "2012",
    imgs: ["./images/showroom/jupiterZ-1-(1).jpg", "./images/showroom/jupiterZ-1-(2).jpg", "./images/showroom/jupiterZ-1-(3).jpg", "./images/showroom/jupiterZ-1-(4).jpg"],
    pros: ["Mesin servis", "Kondisi prima", "Part baru"],
    cons: ["Body lecet", "Bearing ban tidak stabil"],
  },
];

const BRANDS = ["Semua", "Honda", "Yamaha", "Kawasaki", "Suzuki"];
const TYPES = ["Semua Tipe", "Manual", "Matic", "Sport", "Trail"];
const PER_PAGE = 6;

// ── Image Slider ────────────────────────────────────────────────
function ImageSlider({ imgs, aspectRatio = "16/9", showThumbs = false }) {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const total = imgs.length;

  const prev = useCallback(
    (e) => {
      e?.stopPropagation();
      setCurrent((c) => (c - 1 + total) % total);
    },
    [total]
  );

  const next = useCallback(
    (e) => {
      e?.stopPropagation();
      setCurrent((c) => (c + 1) % total);
    },
    [total]
  );

  const onPointerDown = (e) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };
  const onPointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = startX.current - e.clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next(e) : prev(e);
  };
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };
  const onTouchEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next(e) : prev(e);
  };

  return (
    <div className="relative overflow-hidden select-none" style={{ aspectRatio }} onPointerDown={onPointerDown} onPointerUp={onPointerUp} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {/* Slides — absolute stack dengan opacity fade */}
      {imgs.map((src, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-500" style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}>
          <img src={src} alt={`slide-${i}`} className="w-full h-full object-cover" draggable={false} />
        </div>
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          zIndex: 2,
          backgroundImage: "linear-gradient(rgba(232,99,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,99,26,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A0A08]/30 pointer-events-none" style={{ zIndex: 2 }} />

      {/* Controls — hanya tampil jika lebih dari 1 foto */}
      {total > 1 && (
        <>
          {/* Panah kiri */}
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#0A0A08]/70 border border-[#2A2A27] hover:border-[#E8631A] flex items-center justify-center transition-colors duration-200" style={{ zIndex: 10 }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M6.5 2L3.5 5L6.5 8" stroke="#E8631A" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Panah kanan */}
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#0A0A08]/70 border border-[#2A2A27] hover:border-[#E8631A] flex items-center justify-center transition-colors duration-200" style={{ zIndex: 10 }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M3.5 2L6.5 5L3.5 8" stroke="#E8631A" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5" style={{ zIndex: 10 }}>
            {imgs.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(i);
                }}
                className={`transition-all duration-300 ${i === current ? "w-5 h-1.5 bg-[#E8631A]" : "w-1.5 h-1.5 bg-[#6B6B63] hover:bg-[#E8631A]/60"}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Thumbnail strip — hanya di modal */}
      {showThumbs && total > 1 && (
        <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-2 bg-[#0A0A08]/80" style={{ zIndex: 10 }}>
          {imgs.map((src, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`flex-1 h-10 overflow-hidden border transition-colors duration-200 ${i === current ? "border-[#E8631A]" : "border-[#2A2A27] opacity-50 hover:opacity-80"}`}>
              <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" draggable={false} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Detail Modal ────────────────────────────────────────────────
function DetailModal({ item, onClose }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-start justify-center p-4 pt-14 overflow-y-auto" onClick={onClose}>
      <div className="relative max-w-2xl w-full mb-8" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 font-mono text-[#6B6B63] hover:text-[#E8631A] text-[10px] tracking-widest uppercase transition-colors">
          Tutup ✕
        </button>

        {/* Brand & Type tags */}
        <div className="absolute top-4 left-4" style={{ zIndex: 20 }}>
          <span className="border border-[#E8631A]/30 bg-[#0A0A08]/70 px-3 py-1 text-[#E8631A] text-xs font-mono tracking-[0.3em] uppercase">{item.brand}</span>
        </div>
        <div className="absolute top-4 right-4" style={{ zIndex: 20 }}>
          <span className="bg-[#0A0A08]/70 border border-[#2A2A27] px-3 py-1 text-[#E8631A] text-xs font-mono tracking-[0.3em] uppercase">{item.status}</span>
        </div>

        <div className="border border-[#2A2A27]">
          <ImageSlider imgs={item.imgs} aspectRatio="9/16" showThumbs={true} />
        </div>

        <div className="bg-[#0A0A08] border border-t-0 border-[#2A2A27] px-6 py-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-display text-2xl tracking-wider uppercase">{item.name}</h3>
            </div>
            <div className="text-right ml-4 shrink-0">
              <div className="font-mono text-[#E8631A] text-sm tracking-widest mb-1">HARGA</div>
              <div className="font-display text-xl tracking-wider">{item.price}</div>
            </div>
          </div>

          <div className="flex gap-3 mb-5 flex-wrap">
            {[
              { label: "CC", val: item.cc },
              { label: "BB", val: item.bb },
              { label: "TAHUN", val: item.tahun },
              { label: "UNIT", val: item.unit },
            ].map((s) => (
              <div key={s.label} className="border border-[#2A2A27] px-3 py-2">
                <div className="font-mono text-[#6B6B63] text-[9px] tracking-widest">{s.label}</div>
                <div className="font-mono text-xs tracking-wider mt-0.5">{s.val}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-px bg-[#E8631A]" />
                <span className="font-mono text-[#E8631A] text-[9px] tracking-widest uppercase">Kelebihan</span>
              </div>
              <ul className="space-y-2">
                {item.pros.map((p, i) => (
                  <li key={i} className="flex gap-2 text-xs text-[#6B6B63] leading-relaxed">
                    <span className="text-[#E8631A] shrink-0 mt-0.5">+</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-px bg-[#6B6B63]" />
                <span className="font-mono text-[#6B6B63] text-[9px] tracking-widest uppercase">Kekurangan</span>
              </div>
              <ul className="space-y-2">
                {item.cons.map((c, i) => (
                  <li key={i} className="flex gap-2 text-xs text-[#6B6B63] leading-relaxed">
                    <span className="text-[#2A2A27] shrink-0 mt-0.5 font-bold">−</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-[#2A2A27] flex gap-3">
            <button className="flex-1 border border-[#E8631A] text-[#E8631A] font-mono text-[10px] tracking-widest uppercase py-3 hover:bg-[#E8631A] hover:text-[#0A0A08] transition-colors duration-300">Hubungi Dealer →</button>
            <button onClick={onClose} className="border border-[#2A2A27] text-[#6B6B63] font-mono text-[10px] tracking-widest uppercase px-5 py-3 hover:border-[#6B6B63] transition-colors duration-300">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Motor Card ──────────────────────────────────────────────────
function MotorCard({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="cursor-pointer group overflow-hidden relative border border-[#2A2A27] hover:border-[#E8631A] transition-colors duration-300" style={{ transitionDelay: `${(index % PER_PAGE) * 60}ms` }} onClick={() => setOpen(true)}>
        <div className="relative">
          <ImageSlider imgs={item.imgs} aspectRatio="9/16" />

          <div className="absolute top-3 left-3" style={{ zIndex: 10 }}>
            <span className="border border-[#E8631A]/40 bg-[#0A0A08]/60 px-2.5 py-1 text-[#E8631A] text-[9px] font-mono tracking-[0.3em] uppercase">{item.brand}</span>
          </div>
          <div className="absolute top-3 right-3" style={{ zIndex: 10 }}>
            <span className="border border-[#2A2A27] bg-[#0A0A08]/60 px-2.5 py-1 text-[#E8631A] text-[9px] font-mono tracking-[0.3em] uppercase">{item.status}</span>
          </div>

          <div className="absolute inset-0 bg-[#0A0A08]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none" style={{ zIndex: 5 }}>
            <span className="font-mono text-[#E8631A] text-[10px] tracking-widest uppercase border border-[#E8631A] px-4 py-2">Lihat Detail →</span>
          </div>
        </div>

        <div className="bg-[#111110] px-4 py-4">
          <h3 className="font-display text-base tracking-wider uppercase truncate">{item.name}</h3>
          <div className="flex gap-2 mt-3 flex-wrap">
            {[item.cc, item.bb, item.tahun, item.unit].map((v, i) => (
              <span key={i} className="border border-[#2A2A27] px-2 py-0.5 font-mono text-[9px] tracking-wider text-[#6B6B63]">
                {v}
              </span>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-[#2A2A27] flex items-center justify-between">
            <div>
              <div className="font-mono text-[#6B6B63] text-[8px] tracking-widest mb-0.5">HARGA</div>
              <div className="font-display text-[#E8631A] text-base tracking-wider">{item.price}</div>
            </div>
            <div className="w-7 h-7 border border-[#2A2A27] group-hover:border-[#E8631A] flex items-center justify-center transition-colors duration-300">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-[#6B6B63] group-hover:text-[#E8631A] transition-colors duration-300">
                <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {open && <DetailModal item={item} onClose={() => setOpen(false)} />}
    </>
  );
}

// ── Pagination ──────────────────────────────────────────────────
function Pagination({ page, totalPages, onPageChange, sectionRef }) {
  function goTo(p) {
    onPageChange(p);
    sectionRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const btnBase = "w-10 h-10 font-mono text-[10px] border transition-all duration-300 flex items-center justify-center";
  const btnActive = "border-[#E8631A] text-[#E8631A]";
  const btnIdle = "border-[#2A2A27] text-[#6B6B63] hover:border-[#E8631A] hover:text-[#E8631A]";
  const btnDisabled = "border-[#2A2A27] text-[#6B6B63] opacity-20 cursor-not-allowed";
  const pages = Array.from({ length: totalPages }, (_, i) => i);

  return (
    <div className="flex items-center justify-center gap-1 mt-10 select-none" role="navigation" aria-label="Pagination">
      <button onClick={() => goTo(page - 1)} disabled={page === 0} className={`${btnBase} ${page === 0 ? btnDisabled : btnIdle}`}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {pages.map((p) => (
        <button key={p} onClick={() => goTo(p)} aria-current={page === p ? "page" : undefined} className={`${btnBase} ${page === p ? btnActive : btnIdle}`}>
          {p + 1}
        </button>
      ))}
      <button onClick={() => goTo(page + 1)} disabled={page === totalPages - 1} className={`${btnBase} ${page === totalPages - 1 ? btnDisabled : btnIdle}`}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────
export default function Showroom() {
  const [activeBrand, setActiveBrand] = useState("Semua");
  const [activeType, setActiveType] = useState("Semua Tipe");
  const [page, setPage] = useState(0);
  const sectionRef = useRef(null);

  const filtered = katalogMotor.filter((m) => (activeBrand === "Semua" || m.brand === activeBrand) && (activeType === "Semua Tipe" || m.type === activeType));

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  useEffect(() => {
    setPage(0);
  }, [activeBrand, activeType]);
  useEffect(() => {
    if (page >= totalPages && totalPages > 0) setPage(0);
  }, [totalPages]);

  return (
    <section id="jualbeli" ref={sectionRef} className="font-poppins relative py-28 md:py-40 bg-[#111110]">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2A2A27] opacity-40 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#E8631A]" />
              <span className="font-mono text-[#E8631A] text-xs tracking-[0.3em] uppercase">Katalog Unit</span>
            </div>
            <h1 className="font-display text-6xl leading-none">
              JUAL BELI
              <br />
              <span className="text-[#E8631A]">MOTOR</span>
            </h1>
          </div>
          <p className="text-sm w-full md:max-w-sm md:text-right leading-relaxed text-[#6B6B63]">Temukan motor impianmu. Klik unit untuk melihat spesifikasi lengkap, kelebihan, kekurangan, dan harga terbaik.</p>
        </div>

        {/* Stats bar */}
        <div className="flex gap-0 border border-[#2A2A27] divide-x divide-[#2A2A27]">
          {[
            { label: "Total Unit", val: filtered.length },
            { label: "Merek", val: [...new Set(filtered.map((m) => m.brand))].length },
            { label: "Harga Mulai", val: filtered.length ? filtered.reduce((a, b) => (a.priceNum < b.priceNum ? a : b)).price : "—" },
          ].map((s) => (
            <div key={s.label} className="flex-1 px-5 py-4">
              <div className="font-mono text-[#6B6B63] text-[9px] tracking-widest uppercase mb-1">{s.label}</div>
              <div className="font-display text-xl tracking-wider">{s.val}</div>
            </div>
          ))}
        </div>

        {/* Filter Brand */}
        <div className="space-y-3">
          <div className="font-mono text-[#6B6B63] text-[9px] tracking-widest uppercase">Filter Merek</div>
          <div className="flex flex-wrap gap-2">
            {BRANDS.map((b) => (
              <button key={b} onClick={() => setActiveBrand(b)} className={`font-mono text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${activeBrand === b ? "border-[#E8631A] text-[#E8631A]" : "border-[#2A2A27] text-[#6B6B63] hover:border-[#E8631A]/50 hover:text-[#E8631A]/70"}`}>
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Type */}
        <div className="space-y-3">
          <div className="font-mono text-[#6B6B63] text-[9px] tracking-widest uppercase">Filter Tipe</div>
          <div className="flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <button key={t} onClick={() => setActiveType(t)} className={`font-mono text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${activeType === t ? "border-[#E8631A] bg-[#E8631A]/5 text-[#E8631A]" : "border-[#2A2A27] text-[#6B6B63] hover:border-[#E8631A]/50 hover:text-[#E8631A]/70"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="h-px bg-[#2A2A27]" />

        {/* Grid */}
        {paginated.length > 0 ? (
          <div key={`${activeBrand}-${activeType}-${page}`} className="grid md:grid-cols-3 gap-3">
            {paginated.map((item, i) => (
              <MotorCard key={item.id} item={item} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="font-display text-4xl text-[#2A2A27] mb-4">—</div>
            <p className="font-mono text-[#6B6B63] text-xs tracking-widest uppercase">Tidak ada unit yang cocok</p>
          </div>
        )}

        {totalPages > 1 && <Pagination page={page} totalPages={totalPages} onPageChange={setPage} sectionRef={sectionRef} />}
      </div>
    </section>
  );
}
