import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  useReveal();

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Gallery />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  );
}
