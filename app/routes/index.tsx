import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AgencyIntro from '../components/AgencyIntro';
import ServicesParallax from '../components/ServicesParallax';
import Footer from '../components/Footer';
export default function Index() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <AgencyIntro />
      <ServicesParallax />
      <Footer />
    </main>
  );
} 