import { stats } from "../data";

export default function Stats() {
  return (
    <section className="relative py-20 bg-[#E8631A] overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #0A0A08 0, #0A0A08 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[#C0511A]">
          {stats.map((s, i) => (
            <div key={i} className="px-8 py-6 text-center reveal">
              <div className="font-display text-5xl md:text-6xl text-[#0A0A08] leading-none mb-2">{s.value}</div>
              <div className="text-[#0A0A08]/70 text-sm tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
