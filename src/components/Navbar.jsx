import { useState, useEffect } from "react";

const navItems = ["Tentang", "Layanan", "Galeri", "Tim", "Testimoni", "Kontak"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (item) => {
    const id = item.toLowerCase().replace("tentang", "about").replace("layanan", "services").replace("galeri", "gallery").replace("tim", "team").replace("testimoni", "testimonials").replace("kontak", "contact");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0A0A08]/95 backdrop-blur-md border-b border-[#2A2A27]" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="relative w-20 h-20  flex items-center justify-center transform group-hover:bg-[#F5A623] transition-colors duration-300">
          <img src="./images/logo/radsGarage.png" alt="rads_garage.png" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item} onClick={() => handleNav(item)} className="nav-link">
              {item}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://wa.me/628987461067" target="_blank" rel="noopener noreferrer" className="bg-[#E8631A] text-[#0A0A08] font-heading font-bold text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#F5A623] transition-colors duration-300">
            Booking Sekarang
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
          <span className={`w-6 h-0.5 bg-[#F4F0E8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-[#F4F0E8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-[#F4F0E8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#111110] border-t border-[#2A2A27] transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <button key={item} onClick={() => handleNav(item)} className="nav-link text-left">
              {item}
            </button>
          ))}
          <a href="https://wa.me/628987461067" className="bg-[#E8631A] text-[#0A0A08] font-heading font-bold text-xs tracking-widest uppercase px-6 py-3 text-center hover:bg-[#F5A623] transition-colors duration-300 mt-2">
            Booking Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}
