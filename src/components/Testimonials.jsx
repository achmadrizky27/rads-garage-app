import { testimonials } from "../data";

function TestimonialCard({ t, index }) {
  return (
    <div className="reveal relative bg-[#1C1C1A] border border-[#2A2A27] p-8 hover:border-[#E8631A] transition-all duration-500 group" style={{ transitionDelay: `${index * 100}ms` }}>
      {/* Quote mark */}
      <div className="absolute top-6 right-8 font-display text-[80px] leading-none text-[#2A2A27] select-none group-hover:text-[#3D3D38] transition-colors duration-300">"</div>

      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <span key={i} className="text-[#E8631A] text-sm">
            ★
          </span>
        ))}
      </div>

      {/* Text */}
      <p className="relative z-10 text-[#A8A89E] text-sm leading-relaxed mb-8 italic">"{t.text}"</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#E8631A] flex items-center justify-center transform -skew-x-3 flex-shrink-0">
          <span className="font-display text-sm text-[#0A0A08] skew-x-3">
            {t.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </span>
        </div>
        <div>
          <div className="font-heading font-semibold text-[#F4F0E8] text-sm tracking-wide">{t.name}</div>
          <div className="font-mono text-[#6B6B63] text-[9px] tracking-widest uppercase mt-0.5">{t.role}</div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E8631A] group-hover:w-full transition-all duration-500" />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonial" className="relative py-28 md:py-40 bg-[#0A0A08]">
      {/* Decorative large text */}
      <div className="absolute bottom-20 right-0 font-display text-[15vw] leading-none select-none pointer-events-none hidden lg:block" style={{ color: "transparent", WebkitTextStroke: "1px rgba(232, 99, 26, 0.05)" }}>
        TRUST
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#E8631A]" />
            <span className="font-mono text-[#E8631A] text-xs tracking-[0.3em] uppercase">Testimoni</span>
            <div className="w-8 h-px bg-[#E8631A]" />
          </div>
          <h2 className="font-display text-[56px] md:text-[72px] text-[#F4F0E8] leading-none tracking-wide">
            APA KATA
            <br />
            PELANGGAN KAMI
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>

        {/* Google rating badge */}
        <div className="mt-12 flex justify-center reveal">
          <div className="flex items-center gap-4 border border-[#2A2A27] px-8 py-5 hover:border-[#E8631A] transition-colors duration-300">
            <div>
              <div className="font-display text-3xl text-[#F4F0E8]">4.9</div>
              <div className="flex gap-0.5 mt-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-[#E8631A]">
                      ★
                    </span>
                  ))}
              </div>
            </div>
            <div className="w-px h-10 bg-[#2A2A27]" />
            <div>
              <div className="font-heading font-semibold text-[#F4F0E8] text-sm tracking-wide">Google Rating</div>
              <div className="font-mono text-[#6B6B63] text-[9px] tracking-widest uppercase mt-1">Dari 300+ ulasan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
