import { team } from "../data";

function TeamCard({ member, index }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="reveal group border-b border-[#2A2A27] py-8 flex items-center gap-6 hover:border-[#E8631A] transition-colors duration-300" style={{ transitionDelay: `${index * 80}ms` }}>
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <div className="w-16 h-16 bg-[#2A2A27] flex items-center justify-center group-hover:bg-[#E8631A] transition-colors duration-300 transform -skew-x-3">
          <span className="font-display text-xl text-[#E8631A] group-hover:text-[#0A0A08] transition-colors duration-300 skew-x-3">{initials}</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#E8631A] group-hover:border-[#F4F0E8] transition-colors duration-300" />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-heading font-bold text-[#F4F0E8] text-lg tracking-wide group-hover:text-[#E8631A] transition-colors duration-300">{member.name}</h3>
        <p className="font-body text-[#6B6B63] text-sm mt-1">{member.role}</p>
      </div>

      {/* Experience */}
      <div className="text-right hidden sm:block">
        <div className="font-display text-2xl text-[#3D3D38] group-hover:text-[#E8631A]/40 transition-colors duration-300 leading-none">{member.exp}</div>
        <div className="font-mono text-[#6B6B63] text-[9px] tracking-widest uppercase mt-1">Pengalaman</div>
      </div>

      {/* Arrow */}
      <div className="text-[#3D3D38] group-hover:text-[#E8631A] transition-colors duration-300 text-xl">→</div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative py-28 md:py-40 bg-[#111110]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left */}
          <div>
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#E8631A]" />
                <span className="font-mono text-[#E8631A] text-xs tracking-[0.3em] uppercase">Tim Kami</span>
              </div>
              <h2 className="font-display text-[56px] md:text-[72px] text-[#F4F0E8] leading-none tracking-wide mb-8">
                MEKANIK
                <br />
                <span style={{ color: "transparent", WebkitTextStroke: "1.5px #E8631A" }}>TERBAIK</span>
              </h2>
              <p className="text-[#6B6B63] text-base leading-relaxed mb-8">Tim kami terdiri dari mekanik bersertifikat dengan jam terbang tinggi. Mereka bukan sekadar teknisi, mereka adalah pecinta motor yang memahami setiap mesin dari dalam.</p>
              <div className="bg-[#1C1C1A] border border-[#2A2A27] p-6">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="font-display text-3xl text-[#E8631A]">2</div>
                    <div className="font-mono text-[#6B6B63] text-[9px] tracking-widest uppercase mt-1">Mekanik</div>
                  </div>
                  <div className="w-px bg-[#2A2A27]" />
                  <div className="text-center">
                    <div className="font-display text-3xl text-[#E8631A]">100%</div>
                    <div className="font-mono text-[#6B6B63] text-[9px] tracking-widest uppercase mt-1">Akuntabel</div>
                  </div>
                  <div className="w-px bg-[#2A2A27]" />
                  <div className="text-center">
                    <div className="font-display text-3xl text-[#E8631A]">5+</div>
                    <div className="font-mono text-[#6B6B63] text-[9px] tracking-widest uppercase mt-1">Rata-rata Exp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Team list */}
          <div>
            {team.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
            <div className="reveal mt-6 pt-2">
              <p className="font-mono text-[#6B6B63] text-[10px] tracking-widest uppercase">+ 2 Mekanik Senior & Junior lainnya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
