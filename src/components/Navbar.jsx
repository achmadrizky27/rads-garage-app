/* 
  Status: finished
  Bug fix: empty 
*/

import { useState, useEffect } from "react";

const navItems = ["Tentang Kami", "Layanan", "Galeri", "Tim", "Testimoni", "Kontak"];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Effect navigasi link
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto scroll bar
  const handleNav = (item) => {
    const id = item.toLowerCase().replace("tentang kami", "tentang kami").replace("layanan", "layanan").replace("galeri", "galeri").replace("tim", "tim").replace(" testimoni", "testimoni").replace("kontak", "kontak");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // Content
  return (
    <header className={`duration-300 fixed font-poppins left-0 right-0 top-0 transition-all z-50 ${scrolled ? "bg-[#0A0A08]/95 backdrop-blur-md border-b border-[#2A2A27]" : "bg-transparent"}`}>
      <nav className="flex h-16 md:h-20 items-center justify-between max-w-7xl mx-auto px-6 md:px-10">
        {/* Logo */}
        <a href="/" className="duration-300 flex group-hover:bg-[#F5A623] items-center justify-center transform transition-colors">
          <p className="font-semibold text-xl md:text-2xl">RADS'G</p>
        </a>

        {/* Desktop navbar */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <button key={item} onClick={() => handleNav(item)} className="nav-link">
              {item}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex gap-3 items-center">
          <a href="https://wa.me/628987461067" target="_blank" rel="noopener noreferrer" className="bg-[#E8631A] text-[#0A0A08] px-5 py-1.5 rounded-md hover:bg-[#F5A623] transition-colors duration-300">
            Booking Now!
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
        <div className="px-6 py-6 flex flex-col gap-3">
          {navItems.map((item) => (
            <button key={item} onClick={() => handleNav(item)} className="nav-link text-left">
              {item}
            </button>
          ))}
          <a href="https://wa.me/628987461067" className="bg-[#E8631A] text-[#0A0A08] px-5 py-1.5 rounded-md text-center hover:bg-[#F5A623] transition-colors duration-300">
            Booking Now!
          </a>
        </div>
      </div>
    </header>
  );
}
