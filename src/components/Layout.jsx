import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0A0A08]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
